const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const outFile = path.join(dataDir, 'foundation-concepts.json');
const manifestFile = path.join(dataDir, 'manifest.json');

function diagram(nodes, caption = '') {
  const row = nodes.map((node, index) => (
    `${index ? '<span class="diagram-arrow">→</span>' : ''}<span class="diagram-node">${node}</span>`
  )).join('');
  return `<div class="concept-diagram"><div class="diagram-row">${row}</div>${caption ? `<div class="diagram-caption">${caption}</div>` : ''}</div>`;
}

function table(headers, rows) {
  return `<table class="mini-table"><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</table>`;
}

function detail(term, explain) {
  return { term, explain };
}

function card(id, q, bullets, details, related = [], lv = 1) {
  return {
    id,
    cat: '基础概念',
    q,
    q_ja: q,
    bullets,
    bullets_ja: bullets,
    details,
    details_ja: details,
    group: '基础',
    lv,
    related,
  };
}

const cards = [
  card('fc01', 'Token / Tokenizer：模型读文字前先切成什么？', [
    'Token 是模型真正处理的文字碎片，不一定等于一个汉字或一个英文单词',
    'Tokenizer 负责把文本切成 token id，再由 embedding 变成向量',
    '同一句话在不同 tokenizer 下 token 数可能不同，直接影响上下文长度和费用',
    '新手先记：模型不是直接读“字”，而是在读一串整数编号',
  ], [
    detail('像把句子切成积木', `<p>Tokenizer 像把一句话拆成积木块。中文里“数据库索引”可能被切成“数据库 / 索引”，英文里 “unbelievable” 可能被切成 “un / believable”。模型内部看到的不是原文，而是 token id，例如 <code>[128, 7354, 91]</code>。</p>${diagram(['文本', 'Tokenizer', 'Token IDs', 'Embedding 向量'], '每一步都可能影响长度、费用和模型理解。')}`),
    detail('一个小例子', `<p>如果一句 prompt 有 1000 个 token，模型输出 500 个 token，那么计费和延迟通常都和这 1500 个 token 有关。长 prompt 不是“多几行字”这么简单，而是让模型多处理很多向量。</p>${table(['概念', '你应该问的问题'], [['Token 数', '这段输入大概有多长？'], ['上下文窗口', '模型一次能看多少 token？'], ['输出 token', '模型最多要生成多少？']])}`),
    detail('容易踩的坑', '<ul><li>不要把 token 等同于字符数；日文、中文、代码、emoji 的切分差异很大。</li><li>压缩 prompt 时，删掉重复上下文往往比删几个标点更有效。</li><li>面试里问 token，通常会继续问成本、上下文窗口、截断和长上下文。</li></ul>'),
  ], [{ id: 'l03', type: '相关基础', note: 'BPE / SentencePiece 是 tokenizer 的具体算法。' }]),

  card('fc02', 'Embedding / 向量：为什么文字能被拿去计算相似度？', [
    'Embedding 是把 token、句子或文档变成一串数字向量',
    '向量空间里方向接近，通常表示语义接近',
    'RAG、推荐、检索、聚类都离不开 embedding',
    '关键不是“看起来像”，而是能否在目标任务上把相关内容排到前面',
  ], [
    detail('像给每段话一个坐标', `<p>Embedding 可以理解成给文字贴一个多维坐标。“苹果手机”和“iPhone”坐标会比较近，“苹果手机”和“番茄炒蛋”会比较远。检索系统不是逐字理解，而是比较这些坐标的距离。</p>${diagram(['句子', 'Embedding 模型', '[0.12, -0.08, ...]', '相似度检索'])}`),
    detail('相似度怎么用', `<p>最常见做法是 cosine similarity：看两个向量方向是否接近。向量长度可以是 384、768、1024 甚至更高。维度越高不一定越好，真正要看召回率、误召回和下游回答质量。</p>${table(['场景', 'Embedding 的作用'], [['RAG', '找到语义相关文档'], ['推荐', '找相似用户或物品'], ['去重', '判断两段话是否近似'], ['聚类', '把主题接近的文本分组']])}`),
    detail('新手误区', '<ul><li>Embedding 不是万能理解器；数字、时间、否定词、精确过滤常常需要结构化条件配合。</li><li>只用向量检索可能漏掉关键词精确匹配，所以常见方案是 BM25 + Dense hybrid。</li><li>向量数据库负责存和查向量，不自动保证答案正确。</li></ul>'),
  ], [{ id: 'fc18', type: '下一步', note: 'BM25 与 Dense 检索的差异。' }]),

  card('fc03', 'System / User / Assistant：Prompt 里的角色到底有什么用？', [
    'system 通常放规则和边界，user 放本轮请求，assistant 是模型历史回复',
    '多轮对话本质是把历史消息一起塞回上下文',
    '角色不是魔法安全锁，但会影响模型优先听谁的指令',
    'Agent 系统里还会有 tool 角色，用于注入工具执行结果',
  ], [
    detail('像会议纪要里的发言身份', `<p>同一句话放在不同角色里，权重和含义不同。system 像会议主持人提前规定“今天只讨论预算”；user 是当前提问；assistant 是前面的回答记录；tool 是外部系统返回的事实。</p>${diagram(['System 规则', 'User 请求', 'Assistant 历史', 'Tool 结果', '下一次模型输入'])}`),
    detail('为什么会变长', '<p>多轮对话不是模型真的“记住了”所有内容，而是应用把历史消息重新拼给模型。历史越长，token 越多，费用和延迟越高，也越容易把旧信息和新目标混在一起。</p><ul><li>短任务：保留最近几轮即可。</li><li>长任务：需要摘要、检索或显式状态。</li><li>高风险任务：system 里要写清工具权限和确认边界。</li></ul>'),
    detail('常见追问', '<ul><li>问：system prompt 能不能完全防 prompt injection？答：不能，只是优先级较高，还需要工具权限、数据隔离和输出校验。</li><li>问：为什么有 tool 角色？答：把外部执行结果和模型生成内容区分开，方便模型继续推理，也方便系统审计。</li></ul>'),
  ], [{ id: 'a04', type: '相关基础', note: 'Context Engineering 会继续讨论上下文如何组织。' }]),

  card('fc04', 'Transformer Block：LLM 一层到底在做什么？', [
    'Transformer block 通常由 Attention、FFN、残差连接、LayerNorm 组成',
    'Attention 负责“看上下文”，FFN 负责“加工每个位置的信息”',
    '残差连接让信息和梯度更容易跨层流动',
    '模型很多层堆叠后，才形成复杂语言能力',
  ], [
    detail('像读文章再做笔记', `<p>一层 Transformer 可以想成：先让每个 token 看看上下文里哪些词重要（Attention），再对每个 token 的表示做一次加工（FFN），最后用残差把原信息保留下来，避免越处理越丢。</p>${diagram(['输入向量', 'Attention 看上下文', 'FFN 加工', '残差 + Norm', '输出向量'])}`),
    detail('为什么要分 Attention 和 FFN', `<p>Attention 的重点是 token 之间的信息交换，比如“它”指代前文哪个名词；FFN 的重点是对单个位置做非线性变换，相当于把已经汇总的信息再加工。两者结合，模型既能看关系，也能做抽象。</p>${table(['组件', '直觉'], [['Attention', '谁和谁有关'], ['FFN', '把已知信息变成更有用的特征'], ['Residual', '别把原信息弄丢'], ['LayerNorm', '让数值尺度更稳定']])}`),
    detail('新手边界', '<ul><li>Transformer 不是只有 Attention；只背 “Attention is all you need” 会漏掉 FFN 和工程优化。</li><li>层数更多不一定永远更好，会带来显存、延迟和训练稳定性问题。</li><li>面试讲架构时，建议用“信息交换 + 特征加工 + 稳定训练”三句话收住。</li></ul>'),
  ], [{ id: 'l01', type: '深挖卡', note: '已有 Transformer 架构核心组件。' }]),

  card('fc05', 'Q / K / V：Attention 为什么要分 Query、Key、Value？', [
    'Query 像“我要找什么”，Key 像“我有什么标签”，Value 像“真正取走的信息”',
    'Attention 分数来自 Q 和 K 的相似度',
    '最后按分数对 V 加权求和，得到当前 token 的上下文表示',
    '理解 QKV 是理解 MHA、KV Cache、MLA 的前置知识',
  ], [
    detail('图书馆检索类比', `<p>你去图书馆找“关于云计算成本的书”：你的需求是 Query；每本书的目录标签是 Key；书里的正文内容是 Value。先用 Query 和 Key 匹配，确定哪些书重要，再从对应 Value 里拿信息。</p>${diagram(['Query<br>我要找什么', 'Key<br>匹配标签', 'Attention 分数', 'Value<br>取走信息'])}`),
    detail('一个最小公式', '<p>注意力可以粗略写成：<code>softmax(QK^T / sqrt(d))V</code>。前半段 <code>QK^T</code> 决定“看谁”，后半段乘 <code>V</code> 决定“拿什么”。这也是为什么 KV Cache 要缓存 K 和 V：历史 token 的 K/V 在生成后不会变，没必要每一步重复算。</p>'),
    detail('常见误区', '<ul><li>不要把 K/V 理解成数据库的 key/value，它们是向量，不是字符串键值对。</li><li>Q、K、V 通常都来自同一个 hidden state 的不同线性投影。</li><li>MLA 的核心就是想办法少存历史 K/V，同时尽量不损失每个 head 的差异。</li></ul>'),
  ], [{ id: 'l30', type: '衔接卡', note: 'Attention heads / MHA 基础。' }]),

  card('fc06', 'Context Window：模型“记忆长度”和真正记忆不是一回事', [
    'context window 是模型一次能看到的 token 上限',
    '窗口内的信息不等于都能被同等利用，太长会稀释注意力和增加成本',
    '长期记忆通常要靠摘要、检索、数据库或外部状态管理',
    'Agent 的记忆设计要区分短期上下文和长期存储',
  ], [
    detail('像开卷考试的桌面大小', `<p>Context window 像考试桌面：桌面越大，能摊开的资料越多。但资料摊得多不代表你一定能快速找到重点。长上下文模型能看很多 token，但应用仍需要组织信息。</p>${diagram(['用户问题', '历史对话', '检索文档', '工具结果', 'Context Window'])}`),
    detail('长上下文的代价', '<p>上下文越长，预填充阶段通常越慢，KV Cache 也越大。比如把 10 页文档和 200 页文档都塞进去，后者不仅贵，还可能让模型在无关段落里迷路。工程上常用“先检索、再压缩、最后回答”。</p>'),
    detail('面试回答边界', '<ul><li>问：有了 128k context 还需要 RAG 吗？答：需要。RAG 负责找相关信息，长上下文只负责容纳更多信息。</li><li>问：上下文是不是记忆？答：不是。上下文是本次输入，记忆是跨会话可维护、可更新的外部状态。</li></ul>'),
  ], [{ id: 'aa10', type: '深挖卡', note: 'Agent 记忆系统设计。' }]),

  card('fc07', 'LoRA / QLoRA：为什么微调可以只训练很少参数？', [
    'LoRA 不直接改完整大矩阵，而是在旁边加低秩增量矩阵',
    '训练参数少，显存低，适合领域适配和风格适配',
    'QLoRA 把底座模型量化，再训练 LoRA adapter，进一步省显存',
    'LoRA 不是免费变强，数据质量和任务边界仍然关键',
  ], [
    detail('像给大机器加可拆插件', `<p>完整微调像把整台机器拆开重装；LoRA 像在关键接口旁边加一个小插件。底座模型大部分参数冻结，只训练小矩阵 A/B，让输出方向发生可控偏移。</p>${diagram(['冻结底座权重 W', '+ LoRA 低秩增量 ΔW', '适配新任务'])}`),
    detail('小数字例子', '<p>假设一个权重矩阵是 4096×4096，完整训练要更新约 1677 万参数。LoRA rank=8 时，只训练 4096×8 + 8×4096，约 6.5 万参数，少两个数量级。这就是 LoRA 省显存和训练快的直觉。</p>'),
    detail('什么时候适合', '<ul><li>适合：领域术语、输出格式、工具调用风格、轻量偏好适配。</li><li>不适合：底座完全不会的能力、需要大量新知识且无法通过 RAG 补足的场景。</li><li>面试记法：LoRA 改“行为倾向”，RAG 补“外部事实”。</li></ul>'),
  ], [{ id: 'm14', type: '相关基础', note: '模型压缩与量化。' }]),

  card('fc08', 'SFT：监督微调到底在教模型什么？', [
    'SFT 用输入-输出样例教模型按照期望格式回答',
    '它更像“示范学习”，不是让模型从零学会全部知识',
    '数据质量、覆盖范围、格式一致性比样本数量更重要',
    '很多对齐流程会先 SFT，再做 DPO/RLHF/GRPO',
  ], [
    detail('像老师给标准答案', `<p>SFT 的数据通常是“用户问题 → 理想回答”。模型看很多示范后，会学到回答风格、步骤、格式和任务边界。比如工具调用 SFT 会教模型在什么情况下输出 JSON tool call。</p>${diagram(['指令', '标准回答', '交叉熵训练', '更会按格式回答'])}`),
    detail('SFT 能和不能', '<p>SFT 擅长让模型遵守格式、模仿任务流程、学会领域表达。但如果底座模型完全没有相关能力，少量 SFT 很难凭空创造能力。新手要分清：知识可以通过 RAG 补，行为格式可以通过 SFT 调。</p>'),
    detail('常见坑', '<ul><li>数据里有错答案，模型会认真学错。</li><li>只训练成功样例，不训练失败边界，模型会在不该回答时也硬答。</li><li>训练集格式和线上 prompt 不一致，会导致离线好看、上线变差。</li></ul>'),
  ], [{ id: 'l24', type: '深挖卡', note: 'SFT / DPO / GRPO 超参数详解。' }]),

  card('fc09', 'DPO / RLHF / GRPO：偏好优化在优化什么？', [
    'SFT 教模型怎么答，偏好优化教模型更喜欢哪类答案',
    'RLHF 通常训练 Reward Model，再用 RL 优化策略',
    'DPO 直接用偏好对训练，不显式训练 reward model',
    'GRPO 用组内相对奖励，常见于推理能力和规则奖励场景',
  ], [
    detail('像从“标准答案”到“更好答案”', `<p>SFT 告诉模型“这样答是可以的”；偏好优化告诉模型“A 比 B 更好”。例如两个回答都正确，但一个更简洁、有证据、不瞎编，偏好数据会推动模型选择后者。</p>${diagram(['SFT 示例', '偏好对 A>B', '优化回答倾向'])}`),
    detail('三者怎么分', `${table(['方法', '直觉', '常见代价'], [['RLHF', '训练奖励模型，再强化学习', '流程复杂、稳定性难'], ['DPO', '直接从 chosen/rejected 学偏好', '依赖偏好数据质量'], ['GRPO', '一组答案内部比较相对好坏', '奖励设计和采样质量关键']])}<p>面试里不要把它们说成“都是微调”。它们解决的是偏好和对齐，不是单纯记知识。</p>`),
    detail('新手边界', '<ul><li>偏好数据错，DPO 会很快学错。</li><li>奖励写得不完整，RL 会 reward hacking。</li><li>推理模型训练里，过程奖励、格式奖励、最终答案奖励要分清。</li></ul>'),
  ], [{ id: 'l13', type: '深挖卡', note: 'RLHF vs DPO 对比。' }, { id: 'l24', type: '训练卡', note: 'SFT / DPO / GRPO 训练超参数。' }], 2),

  card('fc10', 'Reward Model / Reward：为什么奖励一写错模型就会钻空子？', [
    'Reward 是训练或评估时给行为打分的信号',
    'Reward Model 是学习“人更喜欢什么”的模型',
    '奖励只代表你写出来的目标，不一定代表真实目标',
    'Agent 和 RL 场景里，奖励设计决定模型会往哪里钻',
  ], [
    detail('像考试评分标准', `<p>如果考试只按字数给分，学生会写很长但没内容；如果只按最终答案给分，过程可能乱猜。Reward 也是这样：模型会优化你给的分，而不是你心里没写出来的目标。</p>${diagram(['行为/回答', 'Reward 规则或模型', '分数', '优化方向'])}`),
    detail('Reward Model 怎么来', '<p>常见做法是收集偏好对：回答 A 比回答 B 好。Reward Model 学习给 A 更高分。之后 RLHF 用它给模型输出打分。但 reward model 也会有偏见、覆盖不足和被利用的问题。</p>'),
    detail('常见反例', '<ul><li>只奖励简洁：模型可能漏掉关键条件。</li><li>只奖励格式：模型可能格式正确但事实错误。</li><li>只奖励通过单元测试：模型可能写 hard-code。</li><li>所以好奖励通常要组合正确性、证据、格式、边界和安全约束。</li></ul>'),
  ], [{ id: 'iad13', type: '项目深挖', note: 'GRPO + Reward Model 训练 + 信任度。' }], 2),

  card('fc11', 'RAG：为什么不是把资料全塞给模型？', [
    'RAG = 先检索相关资料，再让模型基于资料回答',
    '它解决外部知识、私有知识、时效知识和可追溯证据问题',
    'RAG 的难点常常在检索质量，而不是生成模型本身',
    '好的 RAG 要能说清来源、拒答无证据问题',
  ], [
    detail('像开卷考试先找页码', `<p>直接把整本书塞给模型，既贵又容易迷路。RAG 更像开卷考试：先用目录和关键词找到相关页，再让模型总结这些页。重点是“找对资料”。</p>${diagram(['用户问题', '检索相关段落', '注入上下文', '基于证据回答'])}`),
    detail('一个完整链路', '<p>常见链路：文档切 chunk → 建索引 → 查询改写 → 召回 top-k → rerank → 拼上下文 → 生成答案 → 标注来源。任何一步差，最后答案都可能差。</p>'),
    detail('容易误解', '<ul><li>RAG 不等于一定正确；检索错了，模型会认真总结错资料。</li><li>RAG 不一定比长上下文差，关键看检索是否能缩小范围。</li><li>评估 RAG 要分检索指标和回答指标，不能只看最终主观感觉。</li></ul>'),
  ], [{ id: 'r12', type: '诊断卡', note: 'RAG 效果不好时如何排查。' }, { id: 'fc17', type: '基础概念', note: 'Chunk 切分会直接影响 RAG。' }]),

  card('fc12', 'Chunking：RAG 文档为什么要切块？', [
    'Chunk 是检索系统里的最小文档片段',
    '切太大召回噪声多，切太小上下文不完整',
    'chunk size、overlap、标题继承都会影响检索效果',
    '好的 chunk 应该能独立表达一个相对完整意思',
  ], [
    detail('像把教材拆成卡片', `<p>如果一本书整本作为一个块，检索会太粗；如果每句话一个块，又会丢上下文。Chunking 的目标是把资料切成“拿出来就能读懂”的小卡片。</p>${diagram(['原文档', '按标题/段落切分', 'Chunk + 元数据', '检索'])}`),
    detail('切分参数怎么想', `${table(['参数', '影响'], [['chunk size', '越大上下文越完整，但噪声越多'], ['overlap', '避免边界信息断裂，但会增加索引量'], ['metadata', '标题、时间、来源帮助过滤和解释'], ['粒度', 'FAQ 可短，论文/合同常要长一点']])}`),
    detail('面试边界', '<ul><li>问：chunk size 有没有固定答案？答：没有，要看文档结构、查询类型和模型上下文。</li><li>问：效果差先调什么？答：先看 bad case：是没召回、召回了没排前、还是生成没用证据。</li></ul>'),
  ], [{ id: 'iad14', type: '项目深挖', note: 'RAG chunk 切分和检索优化。' }]),

  card('fc13', 'BM25 vs Dense Retrieval：关键词和语义检索怎么互补？', [
    'BM25 擅长关键词精确匹配，Dense 擅长语义相近匹配',
    '专有名词、编号、错误码常常 BM25 更稳',
    '同义表达、口语问题常常 Dense 更有优势',
    'Hybrid 检索通常比单一路线更稳，但需要融合策略',
  ], [
    detail('两种找资料方式', `<p>BM25 像按书名目录查“精确词”；Dense 像问图书管理员“意思差不多的资料”。用户问“订单查不到”，Dense 可能找到“配送状态异常”；但用户搜错误码 E1024，BM25 往往更准。</p>${diagram(['用户 query', 'BM25 关键词', 'Dense 语义', '融合排序'])}`),
    detail('什么时候谁更强', `${table(['场景', '更常用'], [['错误码 / API 名 / 产品名', 'BM25'], ['口语化问题 / 同义表达', 'Dense'], ['法律条款 / 精确数字', 'BM25 + 过滤'], ['客服知识库', 'Hybrid + Rerank']])}`),
    detail('融合不是简单相加', '<p>Hybrid 常用 RRF 或加权分数。难点是不同检索器分数尺度不同，不能直接把 BM25 分数和 embedding cosine 分数硬加。实际要看 recall@k、MRR 和最终回答质量。</p>'),
  ], [{ id: 'r02', type: '项目卡', note: 'BM25 vs Dense 检索的小语料经验。' }]),

  card('fc14', 'Reranker / RRF：为什么召回后还要重新排序？', [
    '召回负责尽量别漏，rerank 负责把最相关的排到前面',
    'Reranker 通常更贵，但能看 query 和文档的细粒度匹配',
    'RRF 是一种把多个排序列表融合的简单稳健方法',
    'RAG 很多 bad case 不是没召回，而是正确文档排太后',
  ], [
    detail('像初筛和复试', `<p>第一轮召回像简历初筛：先捞出 50 份可能相关的资料。Reranker 像复试：逐份看 query 和文档是否真的匹配，把最有用的放前面。</p>${diagram(['召回 top-50', 'Reranker 精排', 'top-5 注入 prompt'])}`),
    detail('RRF 的直觉', '<p>RRF 不关心原始分数，只看排名。一个文档如果在 BM25 和 Dense 里都排得靠前，它就更可能被推上去。这对不同检索器分数不可比的问题很有帮助。</p>'),
    detail('常见边界', '<ul><li>Reranker 不是越大越好，延迟和成本会增加。</li><li>如果召回阶段完全没捞到正确文档，reranker 也救不了。</li><li>评估时要看正确证据是否进入最终上下文，而不只是召回列表。</li></ul>'),
  ], [{ id: 'r05', type: '项目卡', note: 'Reranker 为什么像均衡器。' }]),

  card('fc15', 'Function Calling / Tool Use：模型什么时候该调用工具？', [
    'Function Calling 让模型输出结构化工具请求，而不是只输出自然语言',
    '工具适合查事实、执行动作、计算、读写外部系统',
    '模型负责判断何时调用和填参数，程序负责真正执行',
    '工具调用必须配 schema、权限和错误处理',
  ], [
    detail('像让模型填一张工单', `<p>用户说“查一下今天东京天气”，模型不应该凭记忆编天气，而是填写一个工具调用：<code>get_weather({city: "Tokyo", date: "today"})</code>。外部程序执行后，再把结果交回模型组织语言。</p>${diagram(['用户请求', '模型选择工具', '参数 JSON', '程序执行', '模型总结结果'])}`),
    detail('为什么要 schema', '<p>Schema 规定工具需要哪些字段、字段类型是什么。没有 schema，模型可能把日期写成“明儿”、把金额写成字符串、或者调用不存在的工具。Schema 是模型和程序之间的合同。</p>'),
    detail('失效边界', '<ul><li>工具 description 太像，模型会选错。</li><li>参数缺失时应该追问，不应该瞎填。</li><li>写操作、发送消息、删除文件等工具必须有权限和确认机制。</li></ul>'),
  ], [{ id: 'l20', type: '深挖卡', note: 'Function Calling / Tool Use 机制。' }, { id: 'a02', type: '实现卡', note: 'Function Calling 实现机制。' }]),

  card('fc16', 'Agent Loop / ReAct：Agent 为什么会一步步行动？', [
    'Agent 不只是一次回答，而是观察、思考、行动、再观察的循环',
    'ReAct 把 reasoning 和 acting 交替组织起来',
    '循环要有预算、停止条件和错误恢复，否则容易无限执行',
    'Tool Use 是手脚，Agent Loop 是控制流程',
  ], [
    detail('像边查资料边写报告', `<p>普通聊天模型像一次性回答；Agent 更像写报告的人：先想缺什么资料，查一次，再根据结果决定下一步。每次工具结果都会改变它的状态。</p>${diagram(['任务', '计划/思考', '调用工具', '观察结果', '继续或停止'])}`),
    detail('为什么会失控', '<p>如果没有 step limit、token budget、成功条件和失败条件，Agent 可能一直查、一直改、一直重试。生产系统通常要限制最大步数、最大工具调用次数、最大耗时，并记录每一步 trace。</p>'),
    detail('ReAct 的边界', '<ul><li>适合：需要多步查证、调用工具、根据中间结果调整的问题。</li><li>不适合：简单问答或确定性流程，直接 pipeline 更便宜稳定。</li><li>面试回答时要同时讲能力和兜底，不要只讲“会自主思考”。</li></ul>'),
  ], [{ id: 'g03', type: '项目卡', note: 'Bounded ReAct 的 5 步循环。' }, { id: 'aa13', type: '失败模式', note: 'ReAct 什么时候陷入无限推理。' }]),

  card('fc17', 'MCP / Tool / Skill：外部能力接入到底分几层？', [
    'Tool 是可调用函数，MCP 是工具/资源接入协议，Skill 是更高层的能力包',
    'Tool 偏执行，MCP 偏连接标准，Skill 偏任务说明和使用方法',
    '三者不是互斥，而是可以叠在一起',
    '面试里要先讲层次，再讲适用边界',
  ], [
    detail('像插座、电器和说明书', `<p>Tool 像具体电器：能做一件事。MCP 像统一插座标准：让不同电器能接进来。Skill 像“如何完成某类任务”的说明书，里面可能包含工具、流程、注意事项和示例。</p>${diagram(['MCP 连接标准', 'Tools / Resources', 'Skill 任务包', 'Agent 使用'])}`),
    detail('怎么区分', `${table(['概念', '核心问题'], [['Tool', '能调用什么函数？参数是什么？'], ['MCP', '外部工具和资源怎么标准化接入？'], ['Skill', '完成某类任务需要哪些步骤和知识？']])}`),
    detail('常见误区', '<ul><li>不要把 MCP 当成 Agent 本身，它是连接协议。</li><li>不要把 Skill 只理解成工具，Skill 也可以是文档、流程和约束。</li><li>工具越多不一定越强，选择错误会让 Agent 更不稳定。</li></ul>'),
  ], [{ id: 'iad02', type: '面经卡', note: '本地工具、MCP Tools、Skill 三者区别。' }, { id: 'aa09', type: '基础卡', note: 'MCP 协议。' }]),

  card('fc18', 'Agent Memory：短期记忆、长期记忆和检索记忆怎么分？', [
    '短期记忆通常是当前 context 里的对话和中间结果',
    '长期记忆是跨会话保存的用户偏好、事实或经验',
    '检索记忆通过 embedding / keyword 找回相关片段',
    '记忆需要更新、过期、权限和纠错机制',
  ], [
    detail('像工作台和档案柜', `<p>短期记忆像桌面上的纸，当前任务随手能看；长期记忆像档案柜，下次还可以拿出来；检索记忆像档案索引，先根据问题找相关资料。</p>${diagram(['当前上下文', '短期状态', '长期存储', '检索召回', '写回/更新'])}`),
    detail('为什么不能全存', '<p>把所有历史都塞进 prompt 会贵、慢、乱，而且可能泄露不该用的信息。真正的记忆系统要判断什么值得存、存多久、谁能读、错误怎么删。</p>'),
    detail('设计检查点', '<ul><li>写入：什么时候把信息变成记忆？</li><li>读取：什么问题会触发检索？</li><li>冲突：新旧记忆矛盾时谁优先？</li><li>隐私：用户不想保留的信息能否删除？</li></ul>'),
  ], [{ id: 'aa10', type: '深挖卡', note: 'Agent 记忆系统设计。' }, { id: 'iad16', type: '项目深挖', note: '多层 Memory 设计。' }]),

  card('fc19', 'Guardrails / Sandbox：为什么 Agent 不能想做什么就做什么？', [
    'Guardrails 是输入、输出和工具执行的安全边界',
    'Sandbox 把危险操作限制在可控环境里',
    '权限分级比“相信模型”可靠',
    '高风险动作需要确认、审计和回滚',
  ], [
    detail('像实验室安全门', `<p>模型会犯错，也可能被用户输入诱导。Guardrails 像安全门：读文件、写文件、发消息、删数据、运行命令都应该有不同权限。Sandbox 则确保即使出错，也不会直接伤到真实环境。</p>${diagram(['用户输入', '策略检查', '工具权限', 'Sandbox 执行', '审计记录'])}`),
    detail('常见防线', `${table(['位置', '防线'], [['输入前', '识别敏感数据、越权请求、prompt injection'], ['工具前', '权限、参数校验、dry-run'], ['输出前', '事实校验、隐私过滤、格式检查'], ['事后', '日志、trace、回滚']])}`),
    detail('边界判断', '<ul><li>读操作也可能敏感，例如读本地历史、密钥、私人文件。</li><li>写操作更要小心，例如发消息、删除、改权限、执行代码。</li><li>面试里讲安全要落到“谁能做什么、何时确认、如何审计”。</li></ul>'),
  ], [{ id: 'a07', type: '基础卡', note: 'Guardrails 设计模式。' }, { id: 'aa12', type: '深挖卡', note: 'Agent 安全与对齐。' }]),

  card('fc20', 'LLM-as-Judge：让模型当评委靠谱吗？', [
    'LLM-as-Judge 用模型评价回答质量、相关性、事实性或格式',
    '它适合做相对评估和大规模初筛',
    '评委模型也会偏、会漏、会受提示影响',
    '可靠评估要有 rubric、样例、人工抽检和一致性检查',
  ], [
    detail('像请助教批改作业', `<p>LLM-as-Judge 像请助教按评分标准批作业。它比人工快，但必须给清楚 rubric：什么叫正确、什么叫有证据、什么情况扣分。</p>${diagram(['候选回答', 'Rubric', 'Judge 模型', '分数/理由', '人工抽检'])}`),
    detail('适合评什么', '<ul><li>相关性：回答有没有针对问题。</li><li>完整性：关键点有没有漏。</li><li>格式：是否符合 JSON 或模板。</li><li>引用：是否基于给定证据。</li></ul>'),
    detail('不可靠的地方', '<p>Judge 可能偏爱长答案、漂亮措辞或自己熟悉的风格。严肃评测要加入 golden set、pairwise 比较、多 judge 一致性、人工抽样复核。不要把 judge 分数当绝对真理。</p>'),
  ], [{ id: 'r09', type: '项目卡', note: 'LLM-as-Judge 评估维度。' }, { id: 'a06', type: '基础卡', note: 'Agent Evaluation 方法。' }]),

  card('fc21', 'Precision / Recall / F1：评测指标别只看一个数字', [
    'Precision 看查出来的有多少是对的，Recall 看该查到的有多少被查到',
    'F1 是 precision 和 recall 的折中',
    '检索、分类、风控、RAG 都会用到这些指标',
    '不同业务宁愿错杀还是漏放，会决定指标选择',
  ], [
    detail('找资料的例子', `<p>系统返回 10 个文档，其中 7 个相关，precision=70%。如果库里总共有 20 个相关文档，系统找到了 7 个，recall=35%。一个系统可以很准但漏很多，也可以捞很多但噪声大。</p>${diagram(['全部相关资料', '系统返回资料', 'Precision / Recall'])}`),
    detail('什么时候看哪个', `${table(['目标', '更关注'], [['不能漏掉证据', 'Recall'], ['不能污染上下文', 'Precision'], ['两者都要平衡', 'F1 / MRR / nDCG'], ['最终回答好不好', '答案级评测']])}`),
    detail('面试边界', '<ul><li>RAG 检索阶段看 recall@k、MRR、nDCG。</li><li>生成阶段看事实性、引用正确率、拒答能力。</li><li>不要只报一个 overall score，要能解释错例类型。</li></ul>'),
  ], [{ id: 'v02', type: '深挖卡', note: '评测 5+1 维度框架。' }]),

  card('fc22', 'Latency / Throughput / Cost：线上 LLM 为什么不是只看效果？', [
    'Latency 是单个请求等多久，throughput 是单位时间处理多少请求',
    'Cost 包括输入 token、输出 token、模型规格、GPU 时间和工程运维',
    '缓存、批处理、量化、路由都会改变三者平衡',
    '真实系统要在效果、延迟、吞吐、成本之间取舍',
  ], [
    detail('餐厅类比', `<p>Latency 像一个客人从点餐到上菜等多久；throughput 像餐厅一小时能服务多少桌；cost 像食材、人力和房租。做 LLM 应用时，模型越大不一定越好，因为它可能让每个请求都变慢变贵。</p>${diagram(['请求', '排队/批处理', '模型推理', '返回', '延迟与成本'])}`),
    detail('常见优化手段', `${table(['手段', '主要改善'], [['Prompt 压缩', '输入成本和预填充延迟'], ['KV Cache', '长对话生成效率'], ['Continuous batching', '吞吐'], ['量化', '显存和成本'], ['模型路由', '平均成本']])}`),
    detail('面试答法', '<p>如果被问“怎么优化 LLM 应用”，不要只说换大模型或小模型。先拆指标：p50/p95 latency、tokens/sec、GPU 利用率、单次请求成本、错误率，再决定是缓存、批处理、路由还是提示词压缩。</p>'),
  ], [{ id: 'l18', type: '深挖卡', note: 'LLM 推理优化。' }, { id: 'e01', type: '项目卡', note: 'EdgeRouter 成本/准确率路由。' }]),

  card('fc23', 'Quantization：INT8 / INT4 为什么能省显存？', [
    '量化把权重或激活从高精度浮点变成低比特表示',
    'FP16 每个参数 2 bytes，INT4 理论上约 0.5 bytes',
    '省显存不等于一定更快，硬件和 kernel 支持很重要',
    '量化会带来精度损失，需要校准和评估',
  ], [
    detail('像用简写记账', `<p>原来每个参数用很精细的小数记录，现在用更粗的刻度记录。比如 FP16 是 16 bit，INT4 是 4 bit，单个参数存储理论上少 4 倍。但刻度变粗后，模型输出可能有误差。</p>${diagram(['FP16 权重', '校准/映射', 'INT8/INT4 权重', '更低显存'])}`),
    detail('常见类型', `${table(['类型', '直觉'], [['Weight-only', '只量化权重，推理常见'], ['Activation quant', '激活也量化，更难但更省'], ['GPTQ/AWQ', '常见离线量化方法'], ['NF4', 'QLoRA 常用 4bit 格式']])}`),
    detail('边界', '<ul><li>小模型量化后可能掉点明显，大模型通常更抗量化。</li><li>长上下文时，光量化权重不够，KV Cache 仍可能很大。</li><li>面试里要说清：省的是权重显存、KV 显存还是计算成本。</li></ul>'),
  ], [{ id: 'l08', type: '深挖卡', note: '量化方法对比。' }, { id: 'ib08', type: '面经卡', note: 'BF16、FP16、FP32 对比。' }]),

  card('fc24', 'Distillation：蒸馏为什么能让小模型学大模型？', [
    '蒸馏让小模型学习大模型的输出、推理过程或偏好',
    '目标不是复制所有能力，而是在特定任务上接近大模型',
    '常见蒸馏包括答案蒸馏、过程蒸馏、logits 蒸馏',
    '小模型更便宜更快，但上限受容量和数据覆盖限制',
  ], [
    detail('像师傅带徒弟', `<p>大模型像经验丰富的师傅，小模型像徒弟。师傅不只是给最终答案，还可以展示解题步骤、错误反例和评分偏好。徒弟学会常见套路后，执行更快更便宜。</p>${diagram(['Teacher 大模型', '生成答案/过程', '训练 Student 小模型', '低成本部署'])}`),
    detail('蒸馏学什么', `${table(['蒸馏对象', '适合场景'], [['最终答案', '问答、分类、格式化输出'], ['推理过程', '数学、代码、复杂规划'], ['工具轨迹', 'Agent tool calling'], ['偏好', '风格、安全和拒答边界']])}`),
    detail('常见坑', '<ul><li>Teacher 错了，Student 会学错。</li><li>只蒸馏简单样例，小模型遇到难题仍会崩。</li><li>蒸馏数据要覆盖线上分布，否则离线很好、上线掉点。</li></ul>'),
  ], [{ id: 'ib01', type: '面经卡', note: 'DeepSeek-R1 蒸馏模型。' }]),

  card('fc25', 'Continuous Batching：为什么高并发推理要动态组批？', [
    '普通 batching 要等一批请求一起跑，continuous batching 可以动态加入/退出请求',
    'LLM 生成长度不同，固定 batch 会浪费大量计算槽位',
    '动态组批提升 GPU 利用率和吞吐',
    '它主要改善服务端吞吐，不一定降低单个请求的首 token 延迟',
  ], [
    detail('像拼车不断上下客', `<p>固定 batching 像一辆车必须等所有乘客到齐再开，且中途不能换人。Continuous batching 像路线公交：有人下车空出座位，新请求可以补进来，让车一直满载。</p>${diagram(['请求 A/B/C', 'Prefill', 'Decode 动态组批', '请求完成即退出'])}`),
    detail('为什么 LLM 特别需要', '<p>不同用户输出长度差异很大：有人只要一句话，有人要长报告。固定 batch 会被最长输出拖住。动态组批让短请求完成后释放位置，提高 GPU decode 阶段利用率。</p>'),
    detail('和其他优化的关系', '<ul><li>PagedAttention 管 KV Cache 内存。</li><li>Continuous batching 管请求调度。</li><li>Speculative decoding 管单请求生成速度。</li><li>三者解决的问题不同，可以组合使用。</li></ul>'),
  ], [{ id: 'l18', type: '深挖卡', note: '推理优化：Speculative Decoding 与 Continuous Batching。' }, { id: 'l27', type: '深挖卡', note: 'vLLM 三大优化。' }]),

  card('fc26', 'JSON Schema / Structured Output：为什么结构化输出这么重要？', [
    '结构化输出让模型按固定字段返回，便于程序解析',
    'JSON Schema 可以约束字段名、类型、枚举和必填项',
    '工具调用、信息抽取、自动评测都依赖结构化输出',
    '它减少解析错误，但不能保证事实正确',
  ], [
    detail('像让模型填表而不是写作文', `<p>自然语言回答很灵活，但程序难解析。结构化输出相当于让模型填表：姓名、日期、金额、操作类型各在固定格子里。这样后端才能稳定读取。</p>${diagram(['自然语言需求', 'Schema 约束', 'JSON 输出', '程序处理'])}`),
    detail('一个 schema 直觉', '<pre>{\n  "action": "create_ticket",\n  "priority": "high",\n  "assignee": "support"\n}</pre><p>字段固定后，可以检查 action 是否在允许列表里，priority 是否只能是 high/medium/low。</p>'),
    detail('边界', '<ul><li>Schema 管格式，不管内容真不真。</li><li>字段描述不清，模型仍可能填错。</li><li>高风险动作不能因为 JSON 格式正确就直接执行，还要权限和确认。</li></ul>'),
  ], [{ id: 'a02', type: '实现卡', note: 'Function Calling 实现机制。' }]),

  card('fc27', 'IaaS / PaaS / SaaS：云服务三层怎么讲给新手？', [
    'IaaS 给基础资源，PaaS 给运行平台，SaaS 给直接可用的软件',
    '越往上越省运维，越往下越灵活可控',
    '企业选型要看控制权、成本、交付速度和合规',
    'SA 面试常要求用生活类比讲清楚',
  ], [
    detail('披萨类比', `<p>IaaS 像租厨房和食材，自己做披萨；PaaS 像餐厅提供厨房和半成品，你负责配方；SaaS 像直接点外卖，拿来就吃。越省事，定制空间通常越少。</p>${diagram(['IaaS<br>虚机/网络/存储', 'PaaS<br>运行平台', 'SaaS<br>成品软件'])}`),
    detail('怎么选', `${table(['层级', '适合'], [['IaaS', '需要强控制、自定义网络、安全策略'], ['PaaS', '想快速部署应用，少管机器'], ['SaaS', '业务功能标准化，直接购买更划算']])}`),
    detail('客户沟通角度', '<p>不要只背定义，要转成客户问题：你想少运维还是要强定制？数据合规要求多高？团队有没有云原生能力？迁移期限和预算是多少？</p>'),
  ], [{ id: 'its06', type: 'SA 面经', note: 'IaaS、PaaS、SaaS 的区别。' }]),

  card('fc28', 'Container / Docker：容器到底解决什么问题？', [
    '容器把应用和运行依赖打包在一起',
    '它解决“我电脑能跑，服务器不能跑”的环境不一致问题',
    '镜像是模板，容器是运行中的实例',
    '容器不是虚拟机，通常共享宿主机内核，更轻量',
  ], [
    detail('像标准集装箱', `<p>Docker 的直觉就是集装箱：不管里面是衣服还是机器，外面尺寸和装卸方式统一。应用、依赖、启动命令被打包成镜像，到不同机器上都按同样方式启动。</p>${diagram(['代码', '依赖', 'Dockerfile', '镜像', '容器运行'])}`),
    detail('镜像 vs 容器', `${table(['概念', '直觉'], [['镜像 Image', '只读模板，像安装包'], ['容器 Container', '运行实例，像打开的软件'], ['Dockerfile', '构建镜像的配方'], ['Registry', '存镜像的仓库']])}`),
    detail('常见边界', '<ul><li>容器解决环境一致性，不自动解决扩缩容；扩缩容常用 Kubernetes。</li><li>容器共享宿主机内核，隔离不是绝对安全边界。</li><li>面试讲部署时，可以用“镜像构建、环境变量、日志、健康检查”四点展开。</li></ul>'),
  ], [{ id: 'ieg07', type: '工程面经', note: '云服务使用经验。' }]),

  card('fc29', 'API / SDK / Webhook：系统之间怎么说话？', [
    'API 是系统暴露的能力接口，SDK 是封装好的客户端工具包',
    'Webhook 是事件发生后主动通知你的回调',
    'REST 常用 HTTP 方法和 URL 表达资源，RPC 更像远程调用函数',
    '对接系统时要关注鉴权、限流、重试和幂等',
  ], [
    detail('像点餐方式', `<p>API 像餐厅菜单：你按规定格式点菜。SDK 像外卖 App：把点餐细节封装好了。Webhook 像餐厅做好后主动发短信通知你，而不是你每分钟去问一次。</p>${diagram(['你的系统', 'API / SDK', '对方服务', 'Webhook 回调'])}`),
    detail('对接四件事', '<ul><li>鉴权：谁能调用。</li><li>限流：每分钟能调用多少次。</li><li>重试：失败后怎么重试，避免重复提交。</li><li>幂等：同一个请求重复发，不应该造成重复扣款或重复创建。</li></ul>'),
    detail('面试边界', '<p>如果问“调用第三方 API 怎么设计”，不要只说发请求。要补 timeout、重试退避、错误码、日志、监控、幂等 key、降级方案和敏感数据处理。</p>'),
  ], [{ id: 't02', type: '相关工程', note: 'REST API 基础。' }]),

  card('fc30', 'Logs / Metrics / Traces：可观测性三件套怎么分？', [
    'Logs 记录发生了什么，Metrics 记录整体数值趋势，Traces 记录一次请求经过哪些链路',
    '排障时通常先看指标发现异常，再看 trace 定位链路，最后看日志查细节',
    'Agent 系统的 trace 特别重要，因为要知道模型看到什么、调用了什么工具',
    '可观测性不是模板话术，只有系统排障题才需要展开',
  ], [
    detail('像医院检查', `<p>Metrics 像体温和血压，告诉你有没有异常；Trace 像一次就诊流程，告诉你在哪个科室卡住；Log 像医生记录，告诉你具体发生了什么。</p>${diagram(['Metrics 发现异常', 'Trace 定位链路', 'Logs 查细节'])}`),
    detail('三者对比', `${table(['类型', '例子', '用途'], [['Logs', 'error: tool timeout', '查具体事件'], ['Metrics', 'p95 latency=3s', '看趋势和报警'], ['Traces', 'request → retriever → llm → tool', '定位慢在哪一步']])}`),
    detail('什么时候该讲', '<p>只有当卡片本身是线上排障、系统设计、Agent 调试时，才需要讲 trace/log/metrics。像 MLA、RoPE、沟通题这种单点知识，不应该硬塞“灰度和人工接管”。</p>'),
  ], [{ id: 'ita11', type: 'Agent 调试', note: '工具选错时怎么定位。' }, { id: 'ieg02', type: '工程面经', note: 'Agent harness 最小组件。' }]),
];

fs.writeFileSync(outFile, JSON.stringify(cards, null, 2) + '\n', 'utf8');

const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
const entry = { file: 'foundation-concepts.json', cat: '基础概念', count: cards.length, group: '基础' };
const index = manifest.findIndex(item => item.file === entry.file);
if (index >= 0) manifest[index] = entry;
else {
  const after = manifest.findIndex(item => item.file === 'prompt-eng.json');
  manifest.splice(after + 1, 0, entry);
}
fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

console.log(`Wrote ${cards.length} foundation concept cards.`);
