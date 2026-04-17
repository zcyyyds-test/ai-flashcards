# GRPO vs DPO：RL后训练方法深度对比

> SILR-Agent 项目面试核心知识点。含具体例子、GridAgent失败教训、reward设计。

---

## 1. DPO 样本结构

### 数据格式

```
prompt:   "集群状态：rack-c有20GPU空闲，job-0035需要4GPU..."
chosen:   {"tool_name": "assign_job", "params": {"job_id": "job-0035", "node_id": "rack-c-h2"}}
rejected: {"tool_name": "assign_job", "params": {"job_id": "job-0035", "node_id": "rack-b-s1"}}
```

- **chosen** = 被 SiLR verifier accept 的 action
- **rejected** = 被 verifier reject 的 action（如 rack-b-s1 已满）
- DPO **不需要 reward 数值**，直接从配对关系学 "chosen > rejected"

### DPO 的损失函数

```
L_DPO = -log σ(β * (log π(chosen|prompt) / π_ref(chosen|prompt)
                   - log π(rejected|prompt) / π_ref(rejected|prompt)))
```

直觉：让模型在 chosen 上的概率相对 reference model 提升，在 rejected 上下降。β 控制偏离 reference 的程度。

### DPO 的粒度

DPO **不一定是 episode-level**，可以在任意粒度：
- **Episode-level**："整条 trajectory A 比 B 好" → 最粗，credit assignment 差
- **Step-level**："同一步，action A 比 B 好" → 我们实际采用的粒度
- **Token-level**：TDPO 等变体

我们的 215 对 DPO 数据是 step-level 的（每对是同一步的 accept vs reject）。问题不在粒度，在配对质量。

---

## 2. GRPO 样本结构

### Rollout = 用当前 policy 完整跑一遍 episode

```
初始化场景(job_surge_small)
  → step 0: 观察 → 模型生成 action → verifier 检查 → 得到 reward
  → step 1: 观察 → 模型生成 action → verifier 检查 → 得到 reward
  → ...
  → step 4: 结束（recovered 或超时）
```

一次 rollout 产出**多个 sample**（每步一个）。`rollouts_per_scenario=2` = 同一场景跑 2 遍，用 temperature=0.7 随机性产出不同 action 序列。

> "rollout" 来自 RL 术语，类比骰子"掷出"一条轨迹（roll out a trajectory）。和 MCTS 的 rollout 是同一个词。

### 具体例子

`job_surge_small` 场景（5 个 urgent job 需放到 rack-c），跑 2 次 rollout：

```
Rollout A (recovered):
  step 0: obs="5 queued, rack-c有20GPU空闲"  action=assign(job-35, rack-c-h2)  reward=+0.45
  step 1: obs="4 queued"                      action=assign(job-36, rack-c-h3)  reward=+0.45
  step 2: obs="3 queued"                      action=assign(job-37, rack-c-s0)  reward=+0.45
  step 3: obs="2 queued"                      action=assign(job-38, rack-c-s1)  reward=+0.45
  step 4: obs="1 queued"                      action=assign(job-39, rack-c-f4)  reward=+1.45
           (0.45 base + 1.0 recovery bonus)

Rollout B (failed):
  step 0: obs="5 queued, rack-c有20GPU空闲"  action=assign(job-35, rack-b-s1)  reward=-0.50
           (被 reject，rack-b-s1 满了)
  step 1: obs="5 queued"                      action=assign(job-35, rack-b-s1)  reward=-0.50
           (又 reject，重复同样错误)
  step 2: obs="5 queued"                      action=assign(job-35, rack-c-h2)  reward=+0.45
  ...后面步数不够，没 recovered
  step 6: obs="2 queued"                      action=assign(job-38, rack-c-f4)  reward=+0.45
           (没有 recovery bonus，因为没在最后一步恢复)
```

---

## 3. (scenario, step) 分组与 Advantage 计算

### 分组

把所有 rollout 的 sample 按 `(scenario_id, step_number)` 分组：

```
Group (job_surge_small, step 0):
  Rollout A: reward = +0.45   (assign 到 rack-c-h2，成功)
  Rollout B: reward = -0.50   (assign 到 rack-b-s1，失败)
```

### Advantage 计算

```
mean = (+0.45 + -0.50) / 2 = -0.025
std  = sqrt(((0.45-(-0.025))^2 + (-0.50-(-0.025))^2) / 2) = 0.475

Rollout A 的 advantage = (0.45 - (-0.025)) / 0.475 = +1.0  → "做对了，强化"
Rollout B 的 advantage = (-0.50 - (-0.025)) / 0.475 = -1.0  → "做错了，惩罚"
```

**关键点**：advantage 是**相对的**。不是 "reward>0 就奖励"，而是 "在同一决策点，比其他 rollout 做得好就奖励"。这就是 GRPO 的 "Group Relative" 的含义。

### 为什么要按 (scenario, step) 分组而非全局

不同场景、不同步的 reward 分布差异极大：
- `single_node_failure` step 0 的平均 reward 可能 +0.4（容易）
- `compound_failure_surge` step 5 的平均 reward 可能 -0.3（难）

全局归一化会让简单场景的 +0.4 看起来很高（positive advantage），但这只是因为场景简单，不是模型做了什么好决策。按 (scenario, step) 分组后，每个决策点的 advantage 只反映"在同一情境下做得相对好还是差"。

---

## 4. Reward 设计

### 为什么 GRPO 不需要 Reward Model

传统 RLHF 需要 reward model 因为**人类偏好没法用程序判定**（"这段文字写得好不好"需要人评判）。

但我们的 reward 来自 **SiLR verifier** —— 确定性规则检查器：

```python
ResourceCapacityChecker: rack-b-s1 GPU 4/4 used → FAIL (resource_capacity 违规)
AffinityChecker: job needs rack-c but placed on rack-b → FAIL (affinity 违规)
```

这是 **ground truth**，不需要学。Verifier 响应时间 <0.1ms，可以无限次调用。

### Reward 公式

```
accepted action:  +0.50 - step_cost(0.05) = +0.45
rejected action:  -0.50
final step + recovered: 额外 +1.0 bonus
```

- **step_cost = 0.05**：鼓励用更少步数解决问题（效率奖励）
- **recovery bonus 只给最后一步**：如果给所有步都分 bonus，所有步的 reward 都偏高，会模糊"哪步关键"的信号
- **reject 惩罚 > accept 奖励**：不对称设计，因为 reject 意味着 verifier 发现了安全违规，代价应该更高

### 面试说法

> "SiLR 的 verifier 本身就是一个完美的 reward function，因为它基于物理/资源约束的确定性检查，不存在 reward hacking 的空间。每步 <0.1ms 响应，支持高频 online rollout。"

---

## 5. DPO 的 Action 分布偏斜问题

### SILR-Agent 的情况

我们的 215 对 DPO 数据中：
- **93% 的 rejected 是 assign_job**（放到了错误节点）
- preempt_job 作为 rejected 几乎没有
- migrate_job 作为 rejected = 0

如果拿来训 DPO：
```
模型看到：assign_job 经常被 reject
模型学到：减少使��� assign_job → 更多调 none/restore_node
但实际：大多数场景恰恰需要 assign_job → 性能下降
```

或更微妙：
```
模型看到：assign 到 rack-b 总是被 reject
模型学到：永远不 assign 到 rack-b
但实际：某些场景（有 rack-b affinity 的 job）必须 assign 到 rack-b → 失败
```

### DPO 的根本限制：无法学条件性偏好

DPO 只看 `(prompt, chosen, rejected)` 三元组。它不知道"这次 reject 是因为节点满了"还是"这个节点本身就不好"。

你想教的是：**"当节点满时不要 assign 到这个节点"**（条件性偏好）
DPO 学到的是：**"不要 assign 到这类节点"**（无条件回避）

---

## 6. GridAgent DPO 失败案例（-7.6%）

### 数据

| 指标 | SFT | DPO | 变化 |
|------|-----|-----|------|
| Recovery Rate | 92.4% | 84.8% | **-7.6%** |
| Rejection Rate | 35.6% | 71.8% | **+36.2%** |
| shed_load 使用次数 | 74 | 44 | **-40%** |
| shed_load 平均量 | 38.0 MW | 24.5 MW | **-36%** |

### 根因：shed_load 被无条件回避

DPO 数据中 `shed_load` 作为 rejected 出现 149/237 次（63%）。

偏好意图："有替代方案时优先不甩负荷"（**条件性偏好**）

DPO 学到的："shed_load 是坏的"（**无条件回避**）

```
SFT 模型：  遇到过载 → shed_load -100MW → 1步搞定
DPO 模型：  遇到过载 → 不敢 shed_load → 反复 adjust_gen +10MW → 8步不够 → 失败
```

### 三类叠加效应

1. **工具选择刻意回避**：shed_load 使用量 -40%，即使需要也不敢用
2. **动作幅度偏移**：从 60-100MW 大步调整 → 10-20MW 小步调整（步数预算不够）
3. **过拟合到 "shed_load = bad"**：237 对中 63% 把 shed_load 打入 rejected

### 修复尝试

从 237 对缩减到 119 对：
- 删除 `preserve_load_over_shed_load` 47 对（直接惩罚 shed_load 的最大来源）
- 砍 `topology_over_workaround` 从 119 到 30 对
- shed_load rejected 率从 63% 降至 40%

**结论**：DPO 的数据工程成本极高，且很容易引入 bias。

---

## 7. 为什么 GRPO 避开了这些问题

| 问题 | DPO | GRPO |
|------|-----|------|
| 数据来源 | 固定数据集（off-policy） | 每轮自己生成（on-policy） |
| 偏好学习 | 无条件 chosen > rejected | 条件性：同一决策点相对比较 |
| Credit assignment | 粗粒度（episode 或 step） | Step-level advantage，精确到每步 |
| Action 分布偏斜 | 数据集决定，容易 bias | Reward 即时反馈，无分布偏斜 |
| Reward signal | 隐式（从配对关系推断） | 显式（verifier 直接给 PASS/FAIL） |
| 需要 reward model | 不需要，但需要高质量配对数据 | 不需要，verifier = 完美 reward |
| 探索能力 | 无（只在已有数据上学） | 有（temperature>0 的 rollout） |

### On-policy vs Off-policy

这是最核心的区别：
- **DPO = off-policy**：数据来自其他模型（GPT-5.4/Gemini），分布和当前模型不匹配
- **GRPO = on-policy**：数据来自自己的最新 policy，梯度信号更准确

On-policy 意味着如果 iter 1 学会了在简单场景 preempt，iter 2 的 rollout 就会在复杂场景尝试更多 preempt，产出新的 training signal。DPO 永远只能在固定数据集上反复学。

---

## 8. GRPO vs PPO

| | PPO | GRPO |
|---|-----|------|
| Baseline | Learned value function（需要 critic 网络） | **组内 reward 均值**（不需要 critic） |
| 实现复杂度 | 高（actor + critic 双网络） | 低（只需 policy network） |
| 数据效率 | 高（GAE 估计 advantage） | 中（需要足够 rollouts per group） |
| Clip objective | `min(ratio*A, clip(ratio)*A)` | 相同 |
| KL penalty | 可选 | 通常加（防止偏离 SFT 太远） |

GRPO 用**组内均值**替代了 PPO 的 learned value function。代价是需要同一 (scenario, step) 有多个 rollout 来估计 baseline。好处是不需要训练 critic，实现简单，且不会因为 value function 估计不准导致训练不稳定。

---

## 9. 面试高频追问

### Q: 为什么不两个都做（SFT → DPO → GRPO）？

可以做，但 DPO 数据质量差（分布偏斜 + off-policy），加上去大概率是负面的（GridAgent 已验证 -7.6%）。不如直接 SFT → GRPO。

如果 DPO 数据经过精心策划（如同场景不同策略的 paired rollout），可以作为 GRPO 的 warm-up。但数据工程成本很高。

### Q: clip_eps=0.2 和 kl_coeff=0.1 是怎么选的？

- clip_eps=0.2 是 PPO 论文的标准值
- kl_coeff=0.1 偏保守 —— SFT 模型已 88.2% recovery rate，GRPO 目标是提升剩余 2 个场景而不破坏已有能力。kl_coeff 太小 → 过拟合 2 个场景 + 其他 15 个场景退化（catastrophic forgetting）

### Q: 如果 10 步 trajectory 只有最后一步错了，DPO 和 GRPO 分别怎样？

- **DPO（episode-level）**：整条 trajectory 标为 rejected，前 9 步好决策都被惩罚
- **DPO（step-level）**：只惩罚最后一步，但前 9 步没有正向信号（因为没有对比配对）
- **GRPO**：step 0-8 各自在组内有正 advantage（因为其他 rollout 的同位置步可能更差），step 9 有负 advantage。**只惩罚该惩罚的步，奖励该奖励的步**

### Q: GRPO 的 reward 有没有 reward hacking 的风险？

没有。SiLR verifier 基于确定性的物理/资源约束检查（GPU 容量不会说谎、rack affinity 是硬约束）。不像 learned reward model 可能被 out-of-distribution 的输入欺骗。这是 SiLR 架构在 RL 训练中的核心优势。

### Q: 从 GridAgent 失败中学到了什么？

三条教训：
1. **DPO 数据的 action 分布偏斜会导致工具无条件回避** → 用 GRPO 避开
2. **条件性偏好无法通过简单 (chosen, rejected) 配对学习** → GRPO 的 per-step reward 天然条件化
3. **off-policy 数据和当前 policy 的分布 mismatch 会导致训练不稳定** → GRPO on-policy 自动匹配

---

## 10. 项目实际数据

### SFT 阶段
- 训练数据：143 条（带 GPT-5.4 chain-of-thought 推理）
- 模型：Qwen3-14B QLoRA 4-bit，LoRA r=64, alpha=128
- 结果：train loss 0.129, eval perplexity 1.03
- Recovery rate：88.2%（45/51），15/17 场景 100%

### DPO 数据（收集了但没用于训练）
- 215 对去重后
- 93% rejected = assign_job（分布偏斜）
- 基于 GridAgent 教训，决定跳过 DPO 直接 GRPO

### GRPO 阶段
- 配置：3 iterations, 2 rollouts/scenario, max_steps=7
- Curriculum：跳过已 100% 的场景，只在失败场景上 rollout
- Reward：accept +0.45, reject -0.50, recovery bonus +1.0
- 目标：提升 compound_failure_surge 和 compound_multi_node_failure（SFT 后仍 0%）
