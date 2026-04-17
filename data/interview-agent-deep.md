# Agent 工程深度面（概念 + 项目深挖 36 题）

> 来源：面经整理
> 特点：前半段考 Agent/Tool/Memory 的概念理解和行业认知（Claude Code 架构级深度），后半段对项目做 25 题连环深挖（SiLR-Agent + Agentic-RAG），最后手撕 Skill 系统

---

## 第一部分：概念与架构（11 题）

---

### Q1：项目介绍 + 深挖

> 见第二部分全部 25 题，是对项目介绍后的连续追问链

---

### Q2：开发 Agent 的流程？为什么用这个流程？

**答**：

我的开发流程是 **「问题建模 → Baseline → 架构选型 → 迭代训练 → 评测闭环」**，核心是先建立可度量的 baseline，再迭代优化。

1. **问题建模**：定义 observation/action/reward 的形式——电网恢复的 observation 是拓扑+状态，action 是合闸/切负荷/调出力，reward 来自仿真器验证
2. **建 Baseline**：先用 GPT-5.4 做 few-shot/zero-shot 测试，确定"API 模型裸用"的天花板在哪里
3. **架构选型**：根据 baseline 暴露的问题（幻觉出违规操作、不理解电网约束）决定用 ReAct + Simulator-in-the-Loop
4. **迭代训练**：SFT 冷启动 → GRPO 强化 → 消融实验验证各组件贡献
5. **评测闭环**：成功率/安全率/步数/成本四个维度自动化评测

**为什么不先搭架构再找问题**：因为大模型的能力边界不确定，先跑 baseline 才能知道瓶颈在哪里。SiLR 项目最初假设"模型会生成非法操作"只有在跑了 baseline 后才得到验证——65% 的失败是因为安全违规，这直接导致了 simulator-in-the-loop 的设计。

---

### Q3：借鉴了哪些产品的思路？

**答**：

| 产品/论文 | 借鉴了什么 |
|---|---|
| **Claude Code** | Tool Use 架构：Agent 通过结构化工具调用和外界交互，不是自由文本 |
| **Cursor** | 上下文裁剪思想：给模型"正确的信息"而不是"所有信息" |
| **LangGraph** | 多 Agent 编排：DAG 形式串联多个 Agent 节点 |
| **ReAct** (Yao et al.) | Thought-Action-Observation 循环作为基础框架 |
| **自动驾驶 Sim-in-the-Loop** | Safety verification 思想：每个 action 先过仿真器验证再执行 |
| **DeepSeek-R1** | GRPO 训练方法：省掉 critic 降低显存 |

最核心的借鉴是 **Claude Code 的"工具即能力边界"思想**——模型本身不能合闸，但通过 tool calling 可以调用仿真器执行合闸操作。这个设计让 Agent 的能力边界清晰可控。

---

### Q4：模型和 Agent 的区别？

**答**：

**模型**是单次推理引擎：输入 → 输出，无状态，不和外界交互。
**Agent**是持续决策系统：感知 → 思考 → 行动 → 观察 → 再思考……有目标、有工具、有记忆。

| 维度 | 模型 | Agent |
|---|---|---|
| **状态** | 无状态（每次推理独立） | 有状态（跨轮保持上下文） |
| **工具** | 没有（只能生成文本） | 有（能调 API/数据库/文件系统） |
| **记忆** | 只有 context window 内 | 有持久化记忆（短期+长期） |
| **行动** | 不能执行（只输出建议） | 能执行（工具调用会改变外部状态） |
| **目标** | 被动响应（回答问题） | 主动追求（完成任务） |

类比：模型是**大脑**，Agent 是有手有脚有眼睛的**人**。大脑再聪明，没有手就不能开门。

**追问：上下文工程是不是就是让模型变成 Agent？**
不完全是。上下文工程是 Agent 设计的核心技术手段，但 Agent 还需要工具、记忆、行动循环等其他组件。上下文工程解决的是"给 Agent 的大脑正确的信息"这一个维度。

---

### Q5：本地工具、MCP Tools、Skill 三者的区别？

**答**：三者是**不同抽象层级的概念**，不是互斥的。

| | 本地工具 | MCP Tools | Skill |
|---|---|---|---|
| **是什么** | 硬编码在 Agent 里的函数 | 通过 MCP 协议从外部 server 暴露的工具 | 基于 markdown 的工作流指令包 |
| **抽象层级** | 函数调用 | 协议层（标准化的工具暴露） | 编排层（组合工具+注入知识+定义流程） |
| **生命周期** | 启动即可用 | 需要 MCP server 运行 | 按需动态加载 |
| **举例** | Read/Write/Bash/Grep | GitHub MCP、Slack MCP | remote-train、mock-interview |
| **通信** | 进程内函数调用 | JSON-RPC over stdio/HTTP | 无通信——是 prompt 注入 |

**关键理解**：
- 本地工具是"**能力原子**"
- MCP 是"**能力暴露协议**"
- Skill 是"**能力编排方案**"

一个 Skill 可以同时使用本地工具和 MCP 工具。比如 `remote-train` Skill 编排了 Bash（本地工具）+ SSH 命令 + 日志监控的完整训练工作流。

---

### Q6：为什么 Anthropic 不继续只做 MCP 而是做了 Skill？

**答**：

**它们不是替代关系，而是互补关系**——MCP 解决"工具怎么接入"，Skill 解决"工具怎么用好"。

MCP 是**插座标准**——统一了工具的接入方式（任何 MCP client 都能调用任何 MCP server）。但有了插座不代表你会用电器——你还需要使用说明书。

Skill 是**使用说明书**——它告诉 Agent：
1. **什么时候触发**（trigger 条件）
2. **按什么流程执行**（step-by-step workflow）
3. **哪些步骤用哪些工具**（工具编排）
4. **有哪些约束和陷阱**（domain knowledge）
5. **输出什么格式**（output spec）

**具体例子**：假设你有一个"数据库 MCP"提供了 query/insert/delete 三个工具。光有工具不够——你需要一个 Skill 告诉 Agent："删除操作必须先确认、写操作必须在事务内、查询超过 1000 行要分页"。这些知识 MCP schema 表达不了。

**Skill 的核心优势**：
- 可以把领域专家的经验编码成可复用的工作流
- 一个 Skill 可以组合多种工具（本地+MCP），形成端到端流程
- Skill 是 markdown，可读可编辑可版本控制——比代码更易协作

---

### Q7：Skill 里面有没有工具？

**答**：严格说 **Skill 不"包含"工具，而是"编排"工具**。

- Skill 本体是 markdown 文件（SKILL.md），不定义新的 tool schema
- 但 Skill 的指令里可以引导 Agent 使用已有工具（Bash、Read、MCP 工具等）
- Skill 目录下可以有 `scripts/*.js` 等辅助脚本，但这些脚本是通过 Bash 工具来执行的

**更准确的类比**：
- 工具是**锤子、螺丝刀、电钻**（独立的能力原子）
- Skill 是**宜家家具组装说明书**（告诉你第几步用哪个工具、怎么用、注意什么）

**追问：那 Skill 可以注册新工具吗？**
不行。Skill 不能动态注册 tool schema。如果需要新工具，要么写一个 MCP server，要么直接用 Bash 工具执行自定义脚本。Skill 的职责是编排，不是创造新能力。

---

### Q8：Claude Code 的记忆架构？上下文真的等于记忆吗？

**答**：

**上下文 ≠ 记忆**。上下文是运行时窗口，记忆是持久化存储。记忆会被加载到上下文，但上下文里大部分内容不是记忆。

**Claude Code 的记忆有两套互补系统**：

**1. CLAUDE.md 文件（人写的）**
- 层级：项目级（`.claude/CLAUDE.md`）→ 用户级（`~/.claude/CLAUDE.md`）
- 全量加载到 context，不限大小
- 内容：代码规范、协作偏好、项目特有约束

**2. Auto Memory（Claude 自己写的）**
- 位置：`~/.claude/projects/<project>/memory/`
- 结构：`MEMORY.md`（索引，前 200 行加载）+ 各个主题文件（按需读取）
- 分类：user / feedback / project / reference 四种
- 文件即记忆——没有向量库、没有数据库，全是 markdown

**分层加载顺序**：
```
1. System prompt（~4K token，隐藏）
2. Auto memory index（MEMORY.md 前 200 行）
3. CLAUDE.md 文件（全量）
4. User/Project rules（.claude/rules/）
5. Skill descriptions（仅名称+描述，按需加载全文）
6. 对话历史 + 工具结果（运行时）
```

**关键设计决策**："文件即记忆"比数据库更简单、更可调试、更可版本控制。Claude Code 不需要复杂的 embedding + retrieval 管线——markdown 文件用 grep 搜索就够了。

---

### Q9：为什么 Claude Code 不用 RAG 检索代码而是用 grep？

**答**：

核心原因：**代码搜索的特点决定了确定性搜索优于语义搜索**。

| 维度 | grep/Glob | RAG (向量检索) |
|---|---|---|
| **确定性** | 精确匹配，结果可验证 | 语义近似，可能漏检 |
| **幻觉风险** | 零（不匹配就是不匹配） | 有（embedding 距离≠语义等价） |
| **预处理** | 零（直接搜文件系统） | 需要 embedding 预处理 + 向量库 |
| **增量更新** | 天然实时（搜的是当前文件） | 需要 re-index（文件改了要重新 embed） |
| **代码适用性** | 极好（函数名/变量名/错误码精确匹配） | 一般（代码的 embedding 质量不稳定） |
| **可审计** | 完全透明（用户能验证搜索结果） | 黑箱（为什么返回这个结果？） |

**为什么代码搜索不需要语义理解？**
开发者搜代码时通常知道要搜什么——函数名、类名、错误信息、关键词。这些场景下 grep 是最快最准的。

**为什么自然语言文档用 RAG 更好？**
用户问"怎么配置 SSL"时不知道文档里具体的关键词是什么，需要语义匹配。但代码搜索不存在这个问题——`grep "configureSSL"` 就完事了。

**核心哲学**：Claude Code 选择"**可审计的确定性搜索**"而非"**黑箱的语义检索**"。这个设计让开发者能信任搜索结果。

---

### Q10：有没有了解过最前沿的记忆设计？

**答**：2024-2025 年 Agent 记忆架构有几个标杆性工作：

**1. MemGPT / Letta（2023-2024，Packer et al.）**
- 核心思想：**OS 虚拟内存**搬到 LLM——Agent 主动管理上下文的"换入/换出"
- main context = RAM，外部存储 = 磁盘
- Agent 自己决定什么信息需要 page in/out
- Letta 是其产品化版本（开源框架）

**2. Mem0（2024）**
- Memory-as-a-Service：自动抽取、去重、检索
- 三层记忆：用户级 / 会话级 / Agent 级
- 2024 底引入图记忆（Graph Memory），用关系表示替代 flat 向量

**3. A-MoF（Microsoft Research, 2024）**
- Active Memory of Feedback：把历史反馈当一等公民记忆对象
- 推理时主动检索相关反馈改进行为
- 核心创新：反馈不是日志，而是结构化记忆

**4. Generative Agents（Stanford, Park et al., 2023）**
- Memory stream + reflection + retrieval（按 recency × importance × relevance 加权）
- 开创性地证明了"记忆 + 反思 = 可信行为"

**跨所有工作的共同趋势**：
- **分层记忆**：工作记忆 / 情景记忆 / 语义记忆（映射人类认知架构）
- **主动管理**：Agent 自己决定存什么、忘什么，不是 append-only
- **结构化存储**：图/关系表示优于 flat 向量检索
- **记忆整合**：定期压缩老记忆（类似人类睡眠时的记忆巩固）

---

### Q11：手撕——实现一个 Skill 系统

> 完整代码见 JSON 卡片中的 details 字段

**设计要点**：

目录结构：
```
.agents/skills/
  weather-report/
    skill.yaml          # 配置文件
    scripts/
      fetch-weather.js  # 执行脚本
  code-review/
    skill.yaml
    scripts/
      review.js
```

核心三个模块：
1. **SkillRegistry**：扫描目录，解析 YAML，注册所有 Skill
2. **SkillRouter**：根据用户输入的关键词/描述匹配最相关的 Skill
3. **SkillExecutor**：加载 Skill 配置，执行对应的 scripts

关键设计决策：
- **发现用关键词匹配还是语义匹配？** → 关键词匹配（简单可靠，对应 Claude Code 的实际做法）
- **调用用 child_process 还是 VM？** → child_process（隔离性好，脚本不影响主进程）
- **YAML 必须字段是什么？** → name、description、trigger（触发关键词）、scripts（脚本列表）

---

## 第二部分：项目深挖连环追问（25 题）

> 以下答案以 SiLR-Agent（电网恢复）和 Agentic-RAG（日语文档问答）为项目背景

---

### PQ1：项目的业务流程是什么？

以 SiLR-Agent 为例，一个使用流程：

```
电网故障发生
  → 1. SCADA 系统采集当前电网状态（哪些线路断开、哪些负荷失电、各节点电压/功率）
  → 2. 状态转成结构化 observation 喂给 Agent
  → 3. Agent 分析状态，决定下一步操作（合闸/切负荷/调出力）
  → 4. Action 送入电力仿真器验证安全性
  → 5a. 验证通过 → 执行操作，更新电网状态 → 回到 2
  → 5b. 验证失败 → 拒绝操作，返回错误原因 → Agent 重新决策
  → 6. 所有负荷恢复（或达到最大步数） → 结束
```

### PQ2：最核心最有价值的是哪一段？

**Simulator-in-the-Loop 验证（步骤 4-5）**。

如果只保留一部分能力，我会留这一块。因为：
- 没有验证的 Agent 不敢在安全关键领域上线——幻觉一次就是一次事故
- 这一步把"不可信的 LLM 输出"变成"经过验证的安全操作"
- 这个 pattern 可以迁移到任何有 simulator/rule engine 的领域（金融合规、医药剂量、代码沙箱）

### PQ3-4：怎么决定拆成多个 Agent？协作机制是什么？

**拆分决策**：起初是单 Agent 做所有事，发现两个问题：
1. 分析电网状态 + 决定操作 + 验证安全性，塞在一个 prompt 里太长，模型顾此失彼
2. 不同阶段的"好"的标准不一样——分析要全面、决策要准确、验证要严格

于是拆成三个角色：
- **Analyzer**：读取电网状态，生成当前局势分析
- **Actor**：根据分析决定操作
- **Verifier**：调用仿真器验证操作安全性

**踩过的坑**：
- 最初拆了 5 个 Agent（包括独立的 Planner 和 Reviewer），发现 Agent 间通信开销太大，延迟翻倍
- 最终合并成 3 个——"能合则合"原则

**协作机制**：Bounded ReAct Loop，串行执行：
```
OBSERVE(Analyzer) → REASON+ACT(Actor) → VERIFY(Verifier) → EXECUTE/RETRY → CHECK
```
不是并行，因为每一步依赖前一步的结果。

### PQ5-6：状态设计和上下文裁剪

**共享状态结构**：
```json
{
  "step": 3,
  "grid_state": { "topology": {...}, "voltages": [...], "loads": [...] },
  "action_history": [
    {"step": 1, "action": "close_breaker(B12)", "result": "success"},
    {"step": 2, "action": "shed_load(L5, 10MW)", "result": "success"}
  ],
  "current_analysis": "线路 L3-L7 仍断开...",
  "remaining_budget": {"steps": 5, "retries": 3}
}
```

**上下文裁剪**：
- Analyzer 拿**完整电网状态**（需要全局视野）
- Actor 拿 **analysis + 简化状态 + action_history**（不需要原始电压数据）
- Verifier 拿 **proposed_action + 必要的电气约束**（最精简）

原则：每个 Agent 只看它需要的信息。如果 Verifier 看到太多上下文，反而会被分析内容带偏。

### PQ7-9：错误传播和 Reviewer 机制

**错误传播控制**：
1. **Verifier 兜底**：最关键的防线——Analyzer 分析错了、Actor 操作错了，只要 Verifier 在仿真器里跑不通，就不会执行
2. **Retry 机制**：Verifier 拒绝后，把错误原因反馈给 Actor 重新决策（最多 3 次）
3. **Failsafe**：超过最大 retry 或最大步数，直接终止并报告"无法恢复"

**Reviewer（最终检查）**：
- 基于**规则 + 模型双重判断**
- 规则层：电压是否在 [0.95, 1.05] pu 内、功率平衡是否满足、是否有线路过载
- 模型层：整体恢复方案是否合理（有没有不必要的操作、顺序是否最优）
- 发现问题后**不重跑全链路**，而是回退到 Actor 从当前状态重新决策——因为已执行的操作不能撤销

### PQ10-11：SFT 策略和效果评估

**为什么在 Actor 上做 SFT 而不是全系统？**
- Analyzer 和 Verifier 的任务相对标准化（读状态/跑仿真），prompt engineering 足够
- Actor 的决策空间最大、最容易出错——SFT 数据能直接教它"什么操作序列能恢复电网"

**SFT 数据来源**：
- 用仿真器生成 1000+ 故障场景
- 用规则引擎（传统电力算法）生成最优恢复路径
- 人工校验后作为 SFT 训练数据

**效果评估**：
- 恢复成功率：SFT 前 72% → SFT 后 89%
- 平均步数：SFT 前 5.1 步 → SFT 后 3.8 步
- 安全违规率：SFT 前 18% → SFT 后 3%

### PQ12-15：GRPO 和 Reward Model

**为什么用 GRPO 而不是继续优化 SFT？**
- SFT 只能学"正确操作长什么样"，不能学"错误操作为什么错"
- GRPO 通过 reward signal 让模型学习操作的好坏程度，而不只是模仿
- 电网恢复有天然的 reward：仿真器直接给出"恢复了多少负荷/有没有违规"

**GRPO 怎么接入系统**：
```
1. 用 Actor 对同一个故障场景生成 N 个候选操作序列（rollout）
2. 每个序列在仿真器里跑一遍，得到 reward
3. reward 标准化：advantage_i = (R_i - mean(R)) / std(R)
4. 用 advantage 更新 Actor 的策略
```

**Reward 设计**：
- 负荷恢复比例（0-1）× 0.6
- 操作步数效率（越少越好）× 0.2
- 安全违规惩罚（每次违规 -0.5）× 0.2

**RM 是完全信任的吗？** 不是——RM 的 reward 来自仿真器，而仿真器本身有建模误差。我们做了两个事：
1. 和真实电力系统数据做校准（仿真器 vs 实测偏差 <5%）
2. reward 设计时加了"保守约束"——宁可少恢复一点负荷也不冒安全风险

### PQ16-19：RAG 检索优化

**为什么不是简单向量检索就够了？**

以 Agentic-RAG（日语电力文档问答）为例，实验证明：
- Dense embedding Recall@1 只有 47.3%（日语专业术语 embedding 效果差）
- BM25 Char 3-gram 反而达到 81.8%（小语料下模糊匹配更强）
- **反直觉发现**：Hybrid RRF（BM25+Dense）反而把 Recall@1 拉低到 72.7%——Dense 的错误排得太高，挤掉了 BM25 的正确结果

**最终方案**：BM25 Char 3-gram + Reranker（bge-reranker-v2-m3）
- Reranker 作为均衡器：三种方法加了 reranker 后都收敛到 96.4% Recall@5
- Cross-Encoder reranker 是 pipeline 的安全网

**Chunk 切分**：
- 按文档段落自然切分（日语文档有明确的节标题）
- 踩过的坑：技术规格书里一个段落 3000 字，远超 chunk 上限 → 按"段落 + 512 字滑动窗口 + 50% overlap"重切
- 表格单独处理：把表格转成"每行一条"的文本，保留表头

**RAG 评估**：
- 检索层：Recall@1、Recall@5、MRR
- 生成层：人工评分（55 道评测题，3 人打分取均值）
- 端到端：答案正确率 + 引用准确率

### PQ20-22：系统评测

**三层评测体系**：

| 层级 | 方法 | 指标 |
|---|---|---|
| **组件级** | 自动化单元测试 | 各模块的输入输出正确率 |
| **场景级** | 66 个 IEEE 39-bus 故障场景 | 恢复成功率、安全率、步数 |
| **对比级** | vs GPT-5.4 / vs 规则引擎 / vs 消融变体 | 消融实验 + A/B 对比 |

**自动评测可靠性保障**：
- 仿真器是 ground truth（不是人工打分，而是物理引擎判定）
- 确定性评测：同一场景同一 seed 跑多次结果一致
- 每次代码变更跑全部 66 场景回归

**线上效果判断**：目前是实验阶段，没有真实线上部署。但设计了：
- 仿真器覆盖率：能处理的故障类型占全部类型的百分比
- 人工复核率：自动恢复后需要人工干预的比例

### PQ23-25：Memory 设计

**为什么要多层 Memory？**
如果不分层，所有历史操作都塞进 context：
1. 到第 5 步时 context 已经很长，模型开始"遗忘"前面的分析
2. 早期的详细电网状态对后期决策没用（状态已经变了），但占着 token

**三层设计**：
- **Working Memory**：当前步的电网状态 + 上一步的结果（永远保留）
- **Episodic Memory**：历史操作摘要（"步骤 1 合了 B12，恢复了 L3"）
- **Semantic Memory**：电网拓扑知识和操作规则（不变的知识）

**按需加载还是全量？**
- Working Memory：每步都完整注入
- Episodic Memory：只注入最近 3 步的摘要；更早的只保留"已恢复 XX% 负荷"一句话
- Semantic Memory：只在 Actor 需要查规则时按需检索

**用户维度的 Memory？**
电力场景不涉及用户个性化，但如果做金融场景：
- 用户风险偏好、持仓历史、合规限制
- 限制：金融数据有强合规要求（GDPR、个人信息保护法），memory 必须有过期清除机制
- 不能把用户 A 的交易偏好泄露给用户 B 的 context——隔离是硬约束
