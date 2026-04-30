const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

const relationMap = {
  al13: [
    { id: 'ds16', type: '深度版', note: '本卡偏算法模板；ds16补结构不变式、count维护和带权并查集扩展。' },
  ],
  ds16: [
    { id: 'al13', type: '速记版', note: 'al13适合刷题前快速回忆 find/union 模板。' },
  ],
  g03: [
    { id: 'g04', type: '对比版', note: '先记住 Bounded ReAct 的执行循环，再用 g04 对比标准 ReAct 的边界和取舍。' },
  ],
  g04: [
    { id: 'g03', type: '流程版', note: 'g03 是本题的流程骨架，适合先复习每一步的输入输出。' },
  ],
  al10: [
    { id: 'ds19', type: '手写版', note: '同一主题的底层实现版：哈希表 + 双向链表 + 哨兵节点。' },
    { id: 'cm08', type: '题目版', note: 'LC146面试题版本，适合练习完整接口和边界用例。' },
  ],
  ds19: [
    { id: 'al10', type: '概念版', note: '先用这张卡确认 LRU 的设计目标和复杂度。' },
    { id: 'cm08', type: '题目版', note: '对应 LC146，可作为本卡的实战入口。' },
  ],
  cm08: [
    { id: 'ds19', type: '手写版', note: '面试官要求不用 OrderedDict 时，切到这张卡。' },
    { id: 'al10', type: '概念版', note: '用于复盘为什么必须同时用哈希表和双向链表。' },
  ],
  a02: [
    { id: 'l20', type: '基础版', note: 'l20讲通用 Tool Use 机制；本卡偏 Agent 架构实现。' },
    { id: 'ita10', type: '面试追问', note: '用于回答 Tool Calling 与普通函数调用的边界。' },
  ],
  l20: [
    { id: 'a02', type: '架构版', note: '从基础机制切到工程实现：ActionParser、guardrails、结构化输出。' },
    { id: 'ita10', type: '面试追问', note: '适合准备“工具调用到底特殊在哪里”的追问。' },
  ],
  ita10: [
    { id: 'l20', type: '基础版', note: '先复习 Function Calling 的系统闭环。' },
    { id: 'a02', type: '架构版', note: '再补 Agent 系统里的解析、校验和回放问题。' },
    { id: 'ita06', type: '并行版', note: '普通 Tool Calling 讲清楚后，再看并行调用的吞吐、一致性和回放问题。' },
  ],
  ita06: [
    { id: 'ita10', type: '基础版', note: '并行 Tool Calling 的前提是先讲清工具调用与普通函数调用的差异。' },
  ],
  l13: [
    { id: 'l17', type: '归纳版', note: 'l17把 Instruction Tuning、RLHF、DPO 放在同一条对齐路径上比较。' },
  ],
  l17: [
    { id: 'l13', type: '深挖版', note: '需要讲 DPO loss、KL系数和工程坑时切到 l13。' },
  ],
  l06: [
    { id: 'l29', type: '扩展版', note: '先理解 KV Cache，再看 GQA/MQA 如何减少 KV head 带来的显存占用。' },
  ],
  l29: [
    { id: 'l06', type: '基础版', note: 'GQA/MQA 的收益来自 KV Cache 结构，忘记公式前先回到 l06。' },
  ],
  pe05: [
    { id: 'ita12', type: 'Agent场景版', note: 'pe05偏Prompt安全基础；ita12补工具调用和权限边界。' },
  ],
  ita12: [
    { id: 'pe05', type: '基础版', note: '先复习注入攻击的分类、隔离和指令优先级。' },
  ],
  ib09: [
    { id: 'm01', type: '体系版', note: 'ib09偏 AdamW 原理追问；m01横向比较 SGD/Adam/AdamW。' },
  ],
  m01: [
    { id: 'ib09', type: '追问版', note: '需要单独讲解 AdamW 为什么 decoupled weight decay 时使用。' },
  ],
  gs03: [
    { id: 'gs13', type: '远端版', note: '本卡处理未共享/低风险修改；gs13处理已 push 的安全改写。' },
  ],
  gs06: [
    { id: 'gs13', type: '远端版', note: '本卡处理漏文件补提交；gs13补充已 push 后的团队协作风险。' },
  ],
  gs13: [
    { id: 'gs03', type: '本地版', note: 'commit message 还没共享时，优先用 gs03 的轻量流程。' },
    { id: 'gs06', type: '漏文件场景', note: '漏文件与改 message 都属于改写提交历史前要判断是否已共享。' },
  ],
  ieg04: [
    { id: 'ieg05', type: '架构版', note: 'ieg04偏产品使用差异；ieg05解释背后的架构设计差异。' },
  ],
  ieg05: [
    { id: 'ieg04', type: '产品版', note: '架构对比容易抽象，先用产品视角建立直觉。' },
  ],
};

const structureMap = {
  l01: {
    type: '建议切分',
    notes: [
      '这张卡信息量偏大，复习时按 Attention、FFN、残差/LayerNorm、位置编码四块切开，不要一次背完整架构。',
      '如果后续继续拆卡，建议拆成“Self-Attention计算流程”和“Transformer block工程细节”两张。',
    ],
  },
  l23: {
    type: '建议切分',
    notes: [
      '框架选型题建议按目标拆：快速SFT选 Unsloth，偏好优化/自定义训练选 TRL，端到端低门槛交付选 LLaMA-Factory。',
      '面试回答时先给选择规则，再补显存、数据格式、可扩展性和线上复现实验四个约束。',
    ],
  },
  iad08: {
    type: '建议切分',
    notes: [
      'Skill 系统题可以拆成三层：注册表与schema、发现/路由、调用/错误处理。先讲接口，再讲执行闭环。',
      '手撕时不要一次写全功能，先实现 register/discover/call 的最小闭环，再补权限、trace 和参数校验。',
    ],
  },
  ieg09: {
    type: '建议切分',
    notes: [
      'BST 构建 + 遍历 + 打印覆盖面太大，复习时拆成插入不变式、三种遍历、格式化输出三段。',
      '如果面试时间有限，优先保证 insert/search/traversal 正确；打印树属于展示能力，可作为加分项。',
    ],
  },
  ieg10: {
    type: '建议切分',
    notes: [
      'BST 删除建议单独作为一张高优先级卡：叶子节点、单子树、双子树三种情况要能口头跑例子。',
      '代码前先说明 successor/predecessor 的选择，不然容易在双子树删除时丢失引用或破坏BST不变式。',
    ],
  },
  ieg11: {
    type: '归纳轴',
    notes: [
      '开源 Agent Harness 对比不要按项目名字背，按状态管理、工作流表达、协作模型、工具生态、生产可观测性五轴比较。',
      '面试中先给选择结论：强状态图选 LangGraph，多Agent协作原型看 AutoGen/CrewAI，复杂组织式模拟才谈 MetaGPT。',
    ],
  },
};

function sameRelation(a, b) {
  return a.id === b.id && a.type === b.type && a.note === b.note;
}

let updated = 0;

for (const file of fs.readdirSync(dataDir).filter(name => name.endsWith('.json') && name !== 'manifest.json')) {
  const filePath = path.join(dataDir, file);
  const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let touched = false;

  for (const card of cards) {
    const relations = relationMap[card.id];
    if (!relations) continue;
    const existing = Array.isArray(card.related) ? card.related : [];
    const next = [...existing];
    for (const rel of relations) {
      if (!next.some(item => sameRelation(item, rel))) next.push(rel);
    }
    if (next.length !== existing.length) {
      card.related = next;
      updated++;
      touched = true;
    }
  }

  for (const card of cards) {
    const structure = structureMap[card.id];
    if (!structure) continue;
    if (JSON.stringify(card.structure) !== JSON.stringify(structure)) {
      card.structure = structure;
      updated++;
      touched = true;
    }
  }

  if (touched) {
    fs.writeFileSync(filePath, JSON.stringify(cards, null, 2) + '\n', 'utf8');
  }
}

console.log(`Updated related links on ${updated} cards.`);
