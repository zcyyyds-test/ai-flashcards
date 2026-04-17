# 字节实习 · 大模型应用开发一面 (90min)

> 来源：小红书面经（2026.3.13）+ 配套《大模型面试经验宝典》补充材料
> 岗位：字节大模型应用开发实习
> 时长：90min，主要围绕 DeepSeek-R1、显存估算、微调、LoRA/Adapter、RAG 等基础题展开

---

## 题目清单

1. 了解 DeepSeek-R1 吗？介绍一下
2. R1 的 MLA 是如何实现 KV-Cache 节约的？
3. R1 在 SFT 时冷启动的目的？
4. 位置编码是什么？解释 RoPE
5. 一个 14B 的模型，推理和训练要多少显存？
6. 显存的占用和哪些因素相关？
7. 大模型灾难性遗忘是什么？如何解决？
8. BF16、FP16、FP32 对比
9. Adam、AdamW 原理
10. 【代码题】LeetCode 121 / 122 / 123 / 188 股票系列

---

## Q1：了解 DeepSeek-R1 吗？介绍一下

### 核心答案
DeepSeek-R1 是深度求索（DeepSeek）开源的**推理增强型大语言模型**，以 DeepSeek-V3 为基座，在其上叠加了一整套**大规模强化学习 pipeline**，主打"数学/代码/逻辑推理"能力。

- **规模**：主力版本 671B 总参数、37B 激活（MoE），另开源 1.5B/7B/8B/14B/32B/70B 的蒸馏小模型
- **基座架构**：Decoder-only Transformer + **MLA (Multi-head Latent Attention)** + **DeepSeekMoE**
- **训练路线**：R1-Zero 走**纯 RL（无 SFT 冷启动）**验证"RL 能自发涌现长推理链"；R1 正式版用**SFT 冷启动 → RL → SFT 再对齐 → RL** 的多阶段管线
- **定位**：对标 OpenAI o1，性能在 AIME/MATH/Codeforces 等推理 benchmark 接近 o1

### 延伸追问
- **R1-Zero 和 R1 的区别？** R1-Zero 跳过 SFT 直接做 GRPO，证明 RL 能涌现"反思/自检"行为；但输出混乱、语言切换严重。R1 加了冷启动 SFT 数据，修复可读性和中英混杂问题
- **GRPO 是什么？** 用于 R1 的策略优化算法，相比 PPO 省掉 critic 网络，直接用一组 rollout 的 reward 标准化当 advantage，显著降低显存
- **和 V3 是什么关系？** R1 的基座就是 V3，R1 可以看作"V3 + RL-for-reasoning"
- **R1 蒸馏为何有效？** 把 R1 生成的长 CoT 当作 SFT 数据喂给 Qwen/Llama 小模型，推理能力直接继承，不需要小模型自己做 RL

---

## Q2：R1 的 MLA 如何实现 KV-Cache 节约？

### 核心答案
**MLA（Multi-head Latent Attention）的核心是把 K 和 V 压到一个低维 latent 空间再缓存**，推理时只缓存 latent 向量而不是完整的 K/V。

计算流程：
```
原始 MHA:  缓存 K∈ℝ^(n×d_k·h), V∈ℝ^(n×d_v·h)   → 显存 ∝ h·d
MLA:       缓存 c_KV ∈ ℝ^(n×d_c)  （d_c << h·d_k）
           推理时用 W_UK·c_KV 还原 K，W_UV·c_KV 还原 V
```

- **压缩**：一个共享的 down-projection 把 hidden state 投到 latent `c_KV`，所有 head 共用
- **解压**：每个 head 用各自的 up-projection 从 `c_KV` 还原出 K、V
- **关键优化**：up-projection 矩阵可以**吸收进 Q 的投影**（数学上 Q·W_UK·c_KV = (Q·W_UK)·c_KV），推理时不用真的还原 K、V，直接在 latent 空间算 attention
- **RoPE 的特殊处理**：位置编码会破坏这个"吸收"技巧，所以 MLA 专门分出一小部分维度走"解耦的 RoPE 通路"

### 和主流优化的对比
| 方案 | KV-Cache 大小 | 核心思想 |
|---|---|---|
| MHA | h · n · d_k | 每个 head 独立 KV |
| MQA | 1 · n · d_k | 所有 head 共享一组 KV |
| GQA | g · n · d_k | 分组共享（Llama2/3 采用） |
| **MLA** | n · d_c | 低秩压缩到 latent 空间 |

### 延伸追问
- **为什么不用 MQA/GQA？** MQA 省得狠但效果掉；GQA 是 MQA/MHA 的折中。MLA 在压缩率和效果之间更优，DeepSeek 实测优于 GQA
- **MLA 推理时真的不用还原 K/V 吗？** 数学上不用，因为 up-projection 能被 Q 侧吸收；工程上为了兼容 FlashAttention 可能还原
- **长上下文下 MLA 的增益有多大？** 上下文越长、KV-Cache 占比越高，MLA 的显存优势越明显，这是 DeepSeek 敢做 128K context 的底气

---

## Q3：R1 在 SFT 时冷启动的目的？

### 核心答案
"冷启动"指在大规模 RL 之前，先用**少量高质量 CoT 数据做一轮轻量 SFT**。目的有三个：

1. **修复 R1-Zero 的可读性问题**：纯 RL 训出来的模型输出混乱、中英夹杂、标点乱飞，冷启动 SFT 注入"人类可读的 CoT 格式"
2. **给 RL 一个好的起点**：RL 对初始策略敏感，从随机策略探索长 CoT 极低效；冷启动让模型先学会"think step by step"的基本范式
3. **稳定训练**：降低 RL 阶段的方差，避免 reward hacking 和训练崩溃

### 冷启动数据怎么来
- 人工整理少量（几千条）高质量 CoT 示例，格式统一
- 用 R1-Zero 生成 + 人工筛选，保留可读性好的样本
- 加入 few-shot prompting 让基座模型生成，再人工校验

### 延伸追问
- **为什么是"冷"启动？** 对应 RL 的"热"训练——先用监督信号把模型调到一个合理状态，再上 RL 这个高方差优化器
- **和 InstructGPT 的 SFT 有什么区别？** InstructGPT 的 SFT 是主力对齐手段，R1 的冷启动 SFT 只是 RL 前的热身，数据量小很多
- **不冷启动行不行？** 行，但就是 R1-Zero——能用但不好用

---

## Q4：位置编码是什么？解释 RoPE

### 核心答案
**位置编码给 token 注入序列位置信息**，因为 self-attention 本身是置换不变的——不加位置编码的话，"我爱你"和"你爱我"对模型完全一样。

**RoPE（Rotary Position Embedding）** 的核心是：**把位置信息编码成复平面上的旋转**，作用在 Q、K 上。

### 数学原理
```
对位置 m 的 token，把 Q/K 向量两两配对看作复数 (q_2i, q_2i+1) → q_2i + i·q_2i+1
旋转角度 θ_i = 10000^(-2i/d)
旋转后: q_m = q · e^(i·m·θ)
        k_n = k · e^(i·n·θ)
内积: <q_m, k_n> = Re(q·k* · e^(i·(m-n)·θ))
```

**关键性质**：两个 token 的 attention score 只依赖**相对位置 (m-n)**，即使绝对位置不同，相对距离相同的 token 对 attention 模式一致。

### 为什么 RoPE 成为主流
- **长度外推**：旋转形式使其天然具备一定的外推能力，配合 YaRN/NTK-aware scaling 可以扩展到训练长度的 4-32 倍
- **计算高效**：只需对 Q、K 做元素级乘法，不增加参数
- **相对位置感知**：Attention score 天然体现相对位置，不需要额外的相对位置矩阵

### 和其他位置编码对比
| 方案 | 原理 | 外推能力 | 代表模型 |
|---|---|---|---|
| Sinusoidal | 绝对位置正弦编码加到 embedding 上 | 差 | 原版 Transformer |
| Learned | 每个位置学一个 embedding | 无（只能查表内位置）| BERT、GPT-2 |
| ALiBi | Attention bias 线性衰减 | 好 | BLOOM、MPT |
| **RoPE** | 复平面旋转 | 好（+YaRN 更强）| Llama、Qwen、DeepSeek |

### 延伸追问
- **RoPE 为什么能外推？** 旋转周期性+远距离衰减特性让模型对"没见过的相对位置"有一定泛化
- **YaRN 是什么？** 对 RoPE 的频率做 NTK-aware 缩放，配合少量长文本微调实现长度外推
- **MLA 和 RoPE 的冲突？** 见 Q2——需要"解耦 RoPE 通路"单独处理

---

## Q5：14B 模型的推理和训练显存估算

### 核心公式
```
参数显存 = 参数量 × 每参数字节数
梯度显存 = 参数量 × 每参数字节数（和参数同精度）
优化器状态（Adam）= 参数量 × 8 字节（FP32 的 m 和 v）
激活显存 = batch × seq_len × hidden × layers × 某常数（和实现相关）
```

### 14B 推理显存
- **FP16/BF16 推理**：14B × 2 = **28 GB**（纯权重）
- **加 KV-Cache**：batch=1, seq=2K 时 ≈ 1-2 GB；长上下文更多
- **实际占用**：28 GB + KV-Cache + framework overhead ≈ **30-35 GB**（单 A100 80G 能塞）
- **INT8 量化**：14 GB；**INT4**：7 GB（消费级 3090/4090 能跑）

### 14B 全参数训练显存（Adam + BF16 混合精度）
经典估算：**参数量 × 16-20 字节**
- 权重（BF16）：14B × 2 = 28 GB
- 梯度（BF16）：14B × 2 = 28 GB
- Adam m（FP32）：14B × 4 = 56 GB
- Adam v（FP32）：14B × 4 = 56 GB
- 主权重副本（FP32）：14B × 4 = 56 GB
- **小计**：≈ 224 GB（不含激活）
- 加激活（batch 1, seq 2K）：+20-50 GB
- **总计**：约 **250-300 GB** → 需要 4×A100 80G 以上 + ZeRO

### 14B LoRA 微调（推荐做法）
- 权重冻结，只训 LoRA（几百 MB 的可训参数）
- 显存 ≈ 推理 + LoRA 梯度优化器状态 + 小激活 ≈ **40-50 GB**（单卡 A100 可行）

### 延伸追问
- **训练显存为啥是推理的 10 倍？** 梯度 + 优化器状态 + 激活（反向需要）这三项是推理没有的
- **怎么压到单卡？** LoRA/QLoRA、gradient checkpointing、ZeRO-3、CPU offload、8bit Adam
- **推理能不能压到单 4090（24G）？** INT4 量化到 7 GB 后完全可行

---

## Q6：显存占用的影响因素

### 训练时
1. **参数量**：线性关系
2. **精度**：FP32 / BF16 / FP16 / INT8 / INT4
3. **优化器**：SGD（1×）< Adam（8×）< Adafactor（介于之间）
4. **batch size**：激活 ∝ batch
5. **序列长度**：激活 ∝ seq（attention 还有 O(n²)）
6. **模型深度**：激活 ∝ layers
7. **梯度累积**：用时间换空间，微批小 → 激活小
8. **gradient checkpointing**：只存部分激活，其他反向时重算

### 推理时
1. 参数量 × 精度
2. **KV-Cache** ∝ batch × seq × layers × hidden
3. batch size（并发请求数）
4. framework overhead（PyTorch/TensorRT 各有不同）

### 延伸追问
- **FSDP/ZeRO 是怎么省的？** 把参数、梯度、优化器状态切分到多卡上，用时再 all-gather
- **Flash Attention 省显存吗？** 省——把 attention 计算 fuse 成 tiled kernel，不再显式存 n×n 的 attention 矩阵
- **为什么 Adam 要 FP32 副本？** 低精度累加误差大，优化器状态必须高精度

---

## Q7：大模型灾难性遗忘与解决方案

### 现象
在新任务上微调后，**模型在旧任务（包括基座能力）上的性能显著下降**。本质是参数更新时旧任务相关的权重被覆盖。

### 常见场景
- 领域微调后通用能力下降（代码模型变笨）
- 多任务 SFT 时后一个任务"抢"了前一个任务的参数
- Continue Pre-Training 后基座的对话/推理能力退化

### 解决方案

**1. 参数层面（减少更新范围）**
- **LoRA / Adapter / Prefix Tuning**：冻结基座，只训新增的小矩阵，旧知识基本不动
- **部分层冻结**：只微调高层或低层

**2. 数据层面（复习旧任务）**
- **混合训练**：新数据 + 少量旧数据（replay）一起训
- **Knowledge Distillation**：用原模型输出当 soft label 约束新模型
- **经验回放**：专门抽一个 buffer 保留高质量旧样本

**3. 正则化**
- **EWC (Elastic Weight Consolidation)**：对旧任务重要的参数加强约束
- **L2 正则到原权重**：惩罚偏离基座太远

**4. 训练技巧**
- **小 learning rate**（1e-5 级别）
- **少 epoch**（1-3 轮）
- **Warmup + Cosine decay**

### 延伸追问
- **LoRA 为什么能缓解遗忘？** 基座权重冻结，新知识都进 LoRA 矩阵，回到基座只要去掉 LoRA 就行
- **多阶段 SFT 的顺序有影响吗？** 有——后训的任务留下的印记最深，所以重要任务放后面
- **RLHF 会不会遗忘？** 会，所以现在流行 DPO、IPO 等相对温和的偏好优化

---

## Q8：BF16、FP16、FP32 对比

### 位分配
```
FP32:  1 sign + 8  exponent + 23 mantissa    → 动态范围大，精度高
FP16:  1 sign + 5  exponent + 10 mantissa    → 精度高，范围小（容易溢出）
BF16:  1 sign + 8  exponent + 7  mantissa    → 范围大（=FP32），精度低
```

### 核心差异
| 特性 | FP32 | FP16 | BF16 |
|---|---|---|---|
| 动态范围 | 1e-38 ~ 1e38 | 6e-5 ~ 6.5e4 | 1e-38 ~ 1e38 |
| 精度（相对误差）| 1.2e-7 | 9.8e-4 | 7.8e-3 |
| 显存 | 4B | 2B | 2B |
| 硬件支持 | 全部 | Pascal+ | Ampere+ / TPU |
| 混合精度训练 | ✓（master）| 需 loss scaling | 开箱即用 |

### 关键点
- **FP16 的坑**：动态范围小，大梯度溢出变 inf，小梯度下溢变 0 → 必须用 **loss scaling**（把 loss 乘以 2^16 再反向，更新时除回去）
- **BF16 的优势**：动态范围和 FP32 一样，**不需要 loss scaling**，训练更稳定；精度低一点但大模型训练对精度不敏感
- **现代大模型为什么都用 BF16？** A100/H100 后硬件原生支持，稳定性 >> FP16，精度损失可以忽略

### 延伸追问
- **FP8 是什么？** H100 引入的更低精度，E4M3 / E5M2 两种，需要 per-tensor scaling
- **推理为什么常用 INT8/INT4？** 量化，不是原生低精度——用校准数据算出 scale/zero-point 再映射
- **混合精度训练中哪些用 FP32？** Loss、Softmax、LayerNorm、优化器状态、master weights

---

## Q9：Adam 和 AdamW 的原理

### Adam（Adaptive Moment Estimation）
结合了 **Momentum**（一阶动量）和 **RMSProp**（二阶动量自适应学习率）：

```
m_t = β₁·m_(t-1) + (1-β₁)·g_t         （一阶矩：梯度的指数移动平均）
v_t = β₂·v_(t-1) + (1-β₂)·g_t²        （二阶矩：梯度平方的指数移动平均）
m̂_t = m_t / (1-β₁^t)                  （偏差修正）
v̂_t = v_t / (1-β₂^t)
θ_t = θ_(t-1) - η · m̂_t / (√v̂_t + ε)
```

- **m_t**：方向上的惯性，让更新更平滑
- **v_t**：对每个参数用不同的学习率，梯度大的参数步长小、反之步长大
- **典型超参**：β₁=0.9, β₂=0.999, ε=1e-8

### AdamW 的改动
Adam 中的 L2 正则通过"loss 加 λ‖θ‖²"实现，这个正则项会进入梯度、进入 m/v，**被二阶矩 v 缩放后效果就乱了**。

AdamW 的做法：**解耦 weight decay**，直接在参数更新步骤里减去 `η·λ·θ`：
```
θ_t = θ_(t-1) - η · (m̂_t / (√v̂_t + ε) + λ·θ_(t-1))
```

### 为什么大模型都用 AdamW
1. **正则效果正确**：weight decay 不会被自适应学习率削弱
2. **泛化更好**：实验证明在大规模 Transformer 上 AdamW 明显优于 Adam
3. **超参稳定**：learning rate 和 weight decay 解耦调参更容易

### 延伸追问
- **为什么 Adam 不适合小模型？** 对于小模型 SGD + momentum 往往泛化更好，Adam 的自适应学习率反而容易 overfit
- **显存优化：8bit Adam？** bitsandbytes 库实现，把 m/v 量化成 8bit，优化器显存减半
- **Lion 是什么？** Google 2023 年提出的替代，用 sign(m_t) 更新，显存比 AdamW 少一半（不要 v）

---

## Q10：LeetCode 121 / 122 / 123 / 188 股票系列

### 121. 买卖股票的最佳时机（只能买卖一次）
```python
def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    for p in prices:
        min_price = min(min_price, p)
        max_profit = max(max_profit, p - min_price)
    return max_profit
# O(n) time, O(1) space
```

### 122. 买卖股票的最佳时机 II（无限次买卖）
贪心：只要明天比今天高就买卖：
```python
def maxProfit(prices):
    return sum(max(0, prices[i]-prices[i-1]) for i in range(1, len(prices)))
```

### 123. 买卖股票的最佳时机 III（最多两次）
四个状态 DP：第一次买/卖、第二次买/卖：
```python
def maxProfit(prices):
    buy1, sell1 = -float('inf'), 0
    buy2, sell2 = -float('inf'), 0
    for p in prices:
        buy1 = max(buy1, -p)
        sell1 = max(sell1, buy1 + p)
        buy2 = max(buy2, sell1 - p)
        sell2 = max(sell2, buy2 + p)
    return sell2
```

### 188. 买卖股票的最佳时机 IV（最多 k 次）
**188 是系列的母题**——k 次的通解 DP：
```python
def maxProfit(k, prices):
    n = len(prices)
    if k >= n // 2:  # 退化成 122
        return sum(max(0, prices[i]-prices[i-1]) for i in range(1, n))
    buy = [-float('inf')] * (k+1)
    sell = [0] * (k+1)
    for p in prices:
        for j in range(1, k+1):
            buy[j]  = max(buy[j],  sell[j-1] - p)
            sell[j] = max(sell[j], buy[j]    + p)
    return sell[k]
# O(nk) time, O(k) space
```

### 延伸追问
- **为什么这一家族能统一？** 所有题本质都是 `dp[i][j][0/1]`：第 i 天、用了 j 次交易、持/不持股票的最大收益
- **含冷冻期（309）？** 多一个"冷冻期"状态
- **含手续费（714）？** 卖出时额外减 fee

---

## 配套学习笔记（来自《大模型面试经验宝典》节选）

### 开源 LLM 体系
- **GPT 系列**：Decoder-only，自回归，OpenAI 主线（GPT-2/3/4）
- **BERT**：Encoder-only，MLM 双向，Google，擅长理解不擅长生成
- **LLaMA 系列**：Meta 开源，Decoder-only，用 RMSNorm + SwiGLU + RoPE + GQA，社区生态之王
- **Qwen / ChatGLM / Baichuan / DeepSeek**：国内开源主力
- **T5**：Text-to-Text Transfer Transformer，Encoder-Decoder，用"所有任务都转成文本到文本"的范式

### Prefix LM vs Causal LM
- **Causal LM**（GPT）：纯单向，每个 token 只能看左边
- **Prefix LM**（GLM 早期 / UniLM）：prefix 部分双向可见，生成部分单向
- **差异**：Prefix LM 理论上更强（prefix 能用双向理解），但 Causal LM 训练数据利用率更高（每个位置都有 loss）

### 全参数微调的显存影响因素
1. 模型大小（参数量）
2. 批量大小（activation 随 batch 线性增长）
3. 训练数据维度（seq_len）
4. 训练设备显存限制（决定能否 fit）

### Adapter-tuning 家族
- **Adapter**：在 Transformer 每层插入小 bottleneck（down → nonlinear → up），只训 adapter
- **LoRA**：不插层，而是在权重矩阵旁并联低秩分解 W + ΔW = W + B·A
- **Prefix Tuning**：在 K、V 前拼一段可学的 virtual token
- **Prompt Tuning**：只在输入 embedding 前加一段 soft prompt
- **MAM Adapter**：混合 adapter + prefix，多任务场景表现好

### LoRA 深入
- **ΔW = B·A**，A ∈ ℝ^(d×r)，B ∈ ℝ^(r×d)，r 通常 8-64
- **推理时可以合并**：W' = W + B·A，不增加推理延迟
- **QLoRA**：基座用 NF4 量化 + LoRA FP16 训练，显存再砍 4 倍

### RAG 工作流
```
Query → Retriever (BM25 / dense / hybrid) → Context
        → Reranker → Top-k → Prompt 拼装 → LLM → Answer
```
**优化方向**：Query rewriting、HyDE、父子块、多路召回、Re-ranking、引用核验

---

## 总结：字节这一面的考察逻辑

这一面 90 分钟几乎把 "**大模型基础 + 工程优化 + 代码能力**" 三个维度都铺满了：

- **Q1-Q4**：考 DeepSeek-R1 相关热点（MLA、GRPO、RoPE），检查"追得上最新论文吗"
- **Q5-Q6**：显存估算是面试压舱石——**不会手算显存 ≈ 没真的跑过训练**
- **Q7-Q9**：基础 ML 功底（遗忘/精度/优化器），这三个是字节大模型组的标配题
- **Q10**：手撕代码，LeetCode 股票系列是国内大厂的高频题，覆盖贪心和多状态 DP

**准备策略**：能把 Q5（显存估算）和 Q2（MLA 原理）讲清楚的候选人就很少了，建议反复练讲。
