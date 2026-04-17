# RL 术语与 SILR-Agent 中的具体含义

> Rollout / Step / Episode / Trajectory 的通用定义 + 项目中的精确对应。面试表述参考。

---

## 1. 通用 RL 术语对照

| 术语 | 常见语境 | 含义 | 同义 |
|------|----------|------|------|
| **trajectory** | 理论/论文 | 状态-动作序列 (s₀,a₀,r₀, s₁,a₁,r₁, ...) | rollout, episode |
| **rollout** | 工程/实现 | "跑一遍"得到 trajectory 的过程 | trajectory, episode |
| **episode** | Gym/环境 | 从 env.reset() 到 done=True 的一局 | trajectory, rollout |
| **step** | 所有 RL | agent 做一次决策的完整循环 | transition |
| **sample** | 训练 | 一个 step 产出的训练数据点 | experience |

三个词（trajectory / rollout / episode）说的是同一件事。"collect rollouts" = "跑几局收集 trajectory 数据"。所有 RL 算法（PPO / GRPO / SAC / DQN）都有 rollout，不是某个算法特有的。

---

## 2. SILR-Agent 中的精确含义

### 一个 Rollout（= Episode = Trajectory）

```
一个 rollout = 一次完整的集群故障恢复过程

输入：一个场景初始状态
     (例：rack-b-f4 宕机，4个 urgent job 涌入，集群 72 GPU 中 50 个在用)

→ Step 0 → Step 1 → ... → Step N → 结束（recovered 或超时）

输出：N+1 个 StepSample + recovered/failed 标记
```

### 一个 Step

一个 step = **agent 做一次决策的完整循环**：

```
observe → think → propose action → SiLR verify → (accept/reject) → execute → next state
```

不是 token 级别的，不是 API 调用级别的，是 **一次工具调用级别的**。

每个 step 调用恰好一个工具（assign_job / preempt_job / migrate_job / restore_node / drain_node / scale_job）或 none。

### 一个 Sample

一个 step 产出的训练数据点：`(observation, action, reward)`

一个 rollout 有 5 步 → 产出 5 个 sample → 每个 sample 有自己独立的 advantage。

### 一个 Group

同一 `(scenario_id, step_number)` 的所有 rollout 的 sample 集合。组内计算 relative advantage。

---

## 3. 具体 Rollout 示例

场景：`compound_failure_surge`（rack-b-f4 宕机 + 4 个 urgent job 涌入）

```
Step 0:
  observation:  ClusterObserver 输出的 JSON
                {"down_nodes": ["rack-b-f4"],
                 "queued_jobs": [{"job_id":"job-0035","priority":"urgent","gpu":2}, ...共5个],
                 "available_nodes": [{"node_id":"rack-c-h2","gpu_free":4}, ...],
                 "preemptible_running": [{"job_id":"job-0020","node_id":"rack-b-h3","gpu":1}]}

  agent 思考:   "rack-b-f4 宕机驱逐了 jobs，rack-c 有空间，先放 urgent 的"

  action:       {"tool_name": "assign_job",
                 "params": {"job_id": "job-0035", "node_id": "rack-c-h2"}}

  SiLR 验证:    ResourceCapacityChecker → PASS, AffinityChecker → PASS

  执行:         job-0035 分配到 rack-c-h2，GPU 占用 +2

  reward:       +0.45 (accepted)

Step 1:
  observation:  更新后的集群状态（少了 1 个 queued job）
  action:       assign_job(job-0036, rack-c-h3)
  验证:         PASS
  reward:       +0.45

Step 2:
  observation:  还剩 3 个 queued
  action:       assign_job(job-0037, rack-c-s0)
  验证:         PASS
  reward:       +0.45

Step 3:
  observation:  还剩 2 个 queued，其中 job-0006 有 rack-b affinity
  action:       assign_job(job-0006, rack-c-s1)  ← 放到了 rack-c
  验证:         FAIL (AffinityChecker: job-0006 requires rack-b)
  reward:       -0.50

Step 4:
  observation:  同上（step 3 的 action 被拒，状态没变）
  action:       preempt_job(job-0020)  ← 释放 rack-b-h3 上的 preemptible job
  验证:         PASS
  reward:       +0.45

Step 5:
  observation:  rack-b-h3 现在有 1 GPU 空闲... 不够放 job-0006 (需要2GPU)
  action:       assign_job(job-0038, rack-c-f4)  ← 先放别的
  验证:         PASS
  reward:       +0.45

Step 6:
  observation:  只剩 job-0006 (rack-b affinity, 2GPU)
  action:       assign_job(job-0006, rack-b-h3)  ← rack-b-h3 只有 1GPU 空闲
  验证:         FAIL (ResourceCapacityChecker: need 2 GPU, only 1 free)
  reward:       -0.50

  → max_steps=7 到了，recovered=False

这一个 rollout 产出 7 个 StepSample，2 个被 reject (step 3, step 6)。
```

---

## 4. Rollout 之间的比较

同场景跑 2 次 rollout（temperature=0.7 产生不同 action）：

```
Rollout A (7步, failed):
  step0: assign(job-35, rack-c-h2)  +0.45
  step1: assign(job-36, rack-c-h3)  +0.45
  step2: assign(job-37, rack-c-s0)  +0.45
  step3: assign(job-06, rack-c-s1)  -0.50  ← affinity violation
  step4: preempt(job-20)            +0.45
  step5: assign(job-38, rack-c-f4)  +0.45
  step6: assign(job-06, rack-b-h3)  -0.50  ← capacity violation, 没恢复

Rollout B (6步, recovered):
  step0: assign(job-35, rack-c-h2)  +0.45
  step1: assign(job-36, rack-c-h3)  +0.45
  step2: preempt(job-20)            +0.45  ← 提前释放 rack-b 容量
  step3: preempt(job-22)            +0.45  ← 再释放一个
  step4: assign(job-06, rack-b-h3)  +0.45  ← 现在 rack-b 够了！
  step5: assign(job-37, rack-c-s0)  +1.45  ← 最后一步 + recovery bonus
```

### 分组比较

```
Group(scenario, step 2):
  A: assign(job-37, rack-c-s0) → +0.45   "继续 assign，没想到 affinity 问题"
  B: preempt(job-20)           → +0.45   "提前释放容量为后续做准备"
  mean=0.45, std=0 → advantage 都是 0（reward 相同无法区分）

Group(scenario, step 3):
  A: assign(job-06, rack-c-s1) → -0.50   "违反 affinity，被 reject"
  B: preempt(job-22)           → +0.45   "继续释放容量"
  mean=-0.025, std=0.475
  A advantage = -1.0 → 惩罚 "不该在这步 assign 到错误 rack"
  B advantage = +1.0 → 奖励 "这步 preempt 是正确策略"
```

**这就是 GRPO 学到的信号**：在 step 3 这个决策点，"先 preempt 释放容量" 比 "直接 assign 到错误节点" 更好。模型会增大 preempt 的概率，降低错误 assign 的概率。

---

## 5. Recovery Bonus 的设计 Trade-off

### 当前设计

Recovery bonus (+1.0) 加在**最后一步**（不是平摊到所有步）。

### 问题

```
Group(scenario, step 5):
  A: 没有 step 5（7步才结束，step 5 的 reward = +0.45）
  B: 这是最后一步，reward = +1.45（含 recovery bonus）
  → B 的 advantage 偏高，但 B 的 step 5 action 不一定比 A 的 step 5 更好
    它只是恰好在这步完成了恢复
```

### 合理性

A 到了 step 5 还没恢复，B 在 step 5 就搞定了。即使两个 action 都是正确的 assign，B 更快完成说明**前面的策略更好**（提前 preempt 腾出空间），最后一步只是收获了前面好策略的果实。

### 更好的替代设计

| 方案 | 做法 | 优缺点 |
|------|------|--------|
| 当前 | bonus 全给最后一步 | 简单，但污染最后一步的组内比较 |
| 平摊 | bonus / n_steps 给每步 | 更公平，但信号被稀释 |
| 独立项 | 不混入 step reward，用单独的 episode loss | 最干净，但实现更复杂 |
| 不加 | 只用 accept/reject | 最纯净的 step 信号，但没有"尽快完成"的激励 |

---

## 6. 面试表述模板

### 描述 GRPO 训练流程

> "每个 training iteration，我们对 17 个故障场景各跑 2 次 rollout。每次 rollout 就是让 agent 从故障初始状态开始，最多 7 步尝试恢复集群。每一步，agent 观察集群状态、选择一个调度动作、经过 SiLR verifier 验证后执行。一次 rollout 产出 5-7 个 step-level 的 (observation, action, reward) 样本。然后按 (场景, 步号) 分组计算 relative advantage，做 policy gradient 更新。"

### 描述一个 step

> "一个 step 是 agent 做一次完整决策的循环：观察集群状态（哪些节点有空闲 GPU、哪些 job 在排队）→ 选择一个调度动作（assign / preempt / migrate）→ SiLR verifier 在 shadow copy 上验证安全性 → 通过则执行，否则重试。每步对应一次工具调用，不是 token 级别的。"

### 描述 rollout

> "一个 rollout 就是完整跑一遍故障恢复。给定一个初始故障场景（比如一个机架宕机加上紧急任务涌入），agent 连续做最多 7 次调度决策。如果所有 urgent 和 normal 优先级的 job 都被成功分配，episode 以 recovered 结束；否则超时失败。同一个场景跑多次 rollout 以获得组内对比信号。"

### 术语对齐速查

```
面试官说           →  你理解为
"trajectory"       →  一次完整的故障恢复过程（= rollout = episode）
"time step"        →  agent 做一次工具调用（observe → act → verify → execute）
"transition"       →  一个 step 的 (s, a, r, s') 四元组
"sample"           →  一个 step 产出的训练数据点 (obs, action, reward)
"batch"            →  多个 sample 打包做一次梯度更新
"iteration"        →  rollout + advantage 计算 + policy update 的完整循环
"epoch"            →  在同一批 sample 上做多次 policy update（GRPO 通常只做 1 次）
```
