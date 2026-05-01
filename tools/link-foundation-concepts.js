const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

const links = {
  ib01: [
    ['fc24', '基础概念', '蒸馏解释 R1 小模型和大模型的关系。'],
    ['fc10', '基础概念', 'Reward / Reward Model 是理解 R1 训练路线的前置概念。'],
  ],
  ib02: [
    ['fc05', '基础概念', '先理解 Q/K/V，再理解 MLA 为什么能少存 KV。'],
    ['l30', '基础概念', 'MHA heads 是 MLA 的前置知识。'],
    ['l31', '基础概念', 'MHA/MQA/GQA/MLA 横向对比。'],
    ['l32', '基础概念', 'KV Cache 显存账本。'],
    ['l33', '基础概念', 'RoPE 与 MLA 为什么要解耦。'],
  ],
  ib03: [
    ['fc08', '基础概念', 'SFT 冷启动是什么。'],
    ['fc09', '基础概念', 'SFT 之后的偏好优化路线。'],
  ],
  ib04: [
    ['l33', '基础概念', 'RoPE 和 MLA 解耦的直觉。'],
  ],
  ib05: [
    ['l32', '基础概念', 'KV Cache 显存账本。'],
    ['fc22', '基础概念', '延迟、吞吐、成本的线上取舍。'],
    ['fc23', '基础概念', '量化如何影响权重显存。'],
  ],
  ib06: [
    ['l32', '基础概念', 'KV Cache 显存账本。'],
    ['fc22', '基础概念', '显存、吞吐和成本的整体账本。'],
    ['fc23', '基础概念', '量化能省哪部分显存。'],
  ],
  ib07: [
    ['fc08', '基础概念', 'SFT 与遗忘问题相关。'],
    ['fc24', '基础概念', '蒸馏和持续学习的边界。'],
  ],
  ib08: [
    ['fc23', '基础概念', '量化和数值精度的区别。'],
  ],

  a02: [['fc15', '基础概念', 'Function Calling 的新手版解释。'], ['fc26', '基础概念', '结构化输出和 JSON Schema。']],
  l20: [['fc15', '基础概念', 'Function Calling / Tool Use 的入口卡。']],
  ita10: [['fc15', '基础概念', '先理解工具调用，再回答它和普通函数的差异。']],
  ita01: [['fc17', '基础概念', 'MCP / Tool / Skill 的层次。']],
  ita02: [['fc17', '基础概念', '工具和 Skill 描述相似时为什么会选错。']],
  ita12: [['fc19', '基础概念', 'Guardrails 和 sandbox 是 prompt injection 防线的一部分。']],
  pe05: [['fc19', '基础概念', 'Prompt Injection 不能只靠提示词防。']],
  aa10: [['fc18', '基础概念', '短期记忆、长期记忆、检索记忆的入口卡。']],
  iad16: [['fc18', '基础概念', '多层 Memory 设计的基础概念。']],
  aa14: [['fc15', '基础概念', '工具选择先从 Tool Use 基础理解。']],
  a07: [['fc19', '基础概念', 'Guardrails 的新手版入口。']],
  aa12: [['fc19', '基础概念', 'Agent 安全和权限边界的入口卡。']],

  r01: [['fc11', '基础概念', 'RAG 整体链路新手版。']],
  r02: [['fc13', '基础概念', 'BM25 vs Dense 检索。']],
  r03: [['fc13', '基础概念', '关键词检索与语义检索的边界。']],
  r05: [['fc14', '基础概念', 'Reranker 为什么能改善排序。']],
  r12: [['fc11', '基础概念', 'RAG 诊断前先理解完整链路。'], ['fc14', '基础概念', '很多 RAG 问题是排序问题。']],
  r15: [['fc11', '基础概念', '预算有限时先看 RAG 链路瓶颈。']],
  iad14: [['fc12', '基础概念', 'Chunking 是 RAG 检索优化的底层概念。'], ['fc13', '基础概念', 'BM25 与 Dense 的取舍。']],
  t04: [['fc02', '基础概念', '向量和 embedding 的入口卡。'], ['fc11', '基础概念', 'RAG 为什么需要向量数据库。']],

  v01: [['fc20', '基础概念', 'LLM-as-Judge 的可靠性边界。'], ['fc21', '基础概念', 'Precision / Recall / F1 是评测基础。']],
  v02: [['fc21', '基础概念', '先理解基础指标，再看 5+1 维度。']],
  v03: [['fc21', '基础概念', 'Benchmark 和客户评测都要落到指标。']],
  v04: [['fc20', '基础概念', '自动评测里常用 LLM-as-Judge。']],
  v08: [['fc20', '基础概念', 'Judge 也会有偏差和误判。']],
  me13: [['fc21', '基础概念', 'A/B 测试前先分清指标。']],

  l18: [['fc22', '基础概念', '推理优化要先看延迟、吞吐、成本。'], ['fc25', '基础概念', 'Continuous batching 的新手解释。']],
  l27: [['fc25', '基础概念', 'vLLM 中 continuous batching 的入口卡。']],
  t05: [['fc22', '基础概念', 'vLLM / Ollama 选型背后的线上指标。']],
  t06: [['fc07', '基础概念', 'LoRA / QLoRA 的新手版解释。']],
  e01: [['fc22', '基础概念', 'EdgeRouter 本质是效果、延迟、成本取舍。']],

  b05: [['fc27', '基础概念', 'IaaS / PaaS / SaaS 的新手类比。']],
  its05: [['fc27', '基础概念', '云服务三层和传统服务器的差异。']],
  its06: [['fc27', '基础概念', 'IaaS / PaaS / SaaS 披萨类比。']],
  its07: [['fc27', '基础概念', '企业上云前先理解服务层次。'], ['fc22', '基础概念', '上云方案也要看成本、性能和延迟。']],
  ieg07: [['fc27', '基础概念', '云服务层次新手版。'], ['fc28', '基础概念', 'Docker / 容器基础。']],
  t02: [['fc28', '基础概念', 'Docker 和容器的入口卡。']],
  tc11: [['fc29', '基础概念', 'API / SDK / Webhook 和接口设计。']],
  t01: [['fc29', '基础概念', 'Web 框架和 API 对接前置概念。']],
  ieg02: [['fc30', '基础概念', 'Agent harness 排障时才需要 trace/log/metrics。']],
  ita11: [['fc18', '基础概念', 'Agent Memory 的基础分层。'], ['fc30', '基础概念', '工具选错定位需要 trace/log/metrics。']],
};

function sameLink(a, b) {
  return a.id === b.id && a.type === b.type && a.note === b.note;
}

let touchedCards = 0;
for (const file of fs.readdirSync(dataDir).filter(name => name.endsWith('.json') && name !== 'manifest.json')) {
  const filePath = path.join(dataDir, file);
  const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let touchedFile = false;
  for (const card of cards) {
    const additions = links[card.id];
    if (!additions) continue;
    const existing = Array.isArray(card.related) ? card.related : [];
    const next = [...existing];
    for (const [id, type, note] of additions) {
      const rel = { id, type, note };
      if (!next.some(item => sameLink(item, rel))) next.push(rel);
    }
    if (next.length !== existing.length) {
      card.related = next;
      touchedCards++;
      touchedFile = true;
    }
  }
  if (touchedFile) {
    fs.writeFileSync(filePath, JSON.stringify(cards, null, 2) + '\n', 'utf8');
  }
}

console.log(`Linked foundation concepts from ${touchedCards} cards.`);
