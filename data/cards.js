// Auto-generated from data/*.json — edit the JSON files, then run: bash build-cards.sh
// Generated: 2026-04-02T19:26:09
const BUILTIN_CARDS = [
  {
    "id": "s01",
    "cat": "自我介绍",
    "q": "1分钟自我介绍（SA版）",
    "bullets": [
      "周辰予，东京科学大学博士一年级，研究可信ML和LLM Agent，JST SPRING奖学金",
      "本科四川大学自动化，硕士早稻田信息工程，博士东京科学大学",
      "三个项目：SiLR通用Agent框架（两领域验证）/ Agentic RAG日语文档系统 / 云边协同推理系统",
      "每个项目都有端到端实现和量化结果，不只是demo",
      "选SA：想把技术能力用在真实客户场景中，SA是技术和业务的桥梁"
    ],
    "group": "面试"
  },
  {
    "id": "s02",
    "cat": "自我介绍",
    "q": "为什么来BytePlus？",
    "bullets": [
      "LLM Agent和RAG研究方向，想看真实客户场景（遇到的问题、约束、评价标准完全不同）",
      "BytePlus背靠字节技术积累，面向海外企业市场",
      "我在日本、会日语，能直接参与日本市场客户服务，匹配度高"
    ],
    "group": "面试"
  },
  {
    "id": "s03",
    "cat": "自我介绍",
    "q": "为什么做SA而不是继续研究？",
    "bullets": [
      "研究中最有成就感的不是发论文，而是把想法变成可运行系统",
      "SiLR-Agent从选型到微调到评测到集成都自己做",
      "SA能在更多样的客户场景中做这件事，直接看到技术对客户的价值",
      "避免说\"不想做研究\"，而是强调对\"落地\"的热情"
    ],
    "group": "面试"
  },
  {
    "id": "s04",
    "cat": "自我介绍",
    "q": "博士生，2027年不能转正你也愿意来？",
    "bullets": [
      "是的，实习价值不在转正，而在ToB AI落地的实战经验",
      "研究方向就是LLM Agent，BytePlus工作会直接反哺研究",
      "毕业后有更强的工业化视角，这是双赢的"
    ],
    "group": "面试"
  },
  {
    "id": "s05",
    "cat": "自我介绍",
    "q": "你做过最有挑战的项目？",
    "bullets": [
      "技术层面：让LLM理解物理规则，在仿真环境做安全可靠操作（不能只\"说对话\"，要\"做对事\"）",
      "通用性层面：框架设计成场景无关的，在网络路由（完全不同领域）验证通过",
      "最大坑：DPO对齐花了一周，结果成功率反降7.6pp——技术选型不能只看理论，要用数据验证"
    ],
    "group": "面试"
  },
  {
    "id": "s06",
    "cat": "自我介绍",
    "q": "你有没有失败的经历？怎么处理？",
    "bullets": [
      "SiLR-Agent的DPO对齐：花一周准备数据+训练+调参，效果反而变差",
      "分析原因：DPO偏好数据在工具调用场景产生偏差，模型学到\"避免调用工具\"",
      "收获：不能假设某个技术一定有效，要快速验证、用数据说话",
      "JP-DocRAG Embedding微调中断教训：训练必须跑完才能下结论"
    ],
    "group": "面试"
  },
  {
    "id": "s07",
    "cat": "自我介绍",
    "q": "高质量反问（3个）",
    "bullets": [
      "①SA实习最常做的具体工作是什么？（PoC、model eval、方案设计？各占多少）",
      "②日本市场客户最常见的需求类型是什么？（推荐/视频/RAG/Agent？）",
      "③您在BytePlus做SA最大的收获或挑战是什么？"
    ],
    "group": "面试"
  },
  {
    "id": "s08",
    "cat": "自我介绍",
    "q": "客户说\"效果不好\"，你怎么排查？",
    "bullets": [
      "先搞清楚\"不好\"是什么：准确率低？延迟高？输出格式不对？",
      "①数据：客户数据和评测数据分布一致吗？",
      "②Prompt：设计是否合理？上下文和约束足够？",
      "③模型选择：任务是否适合当前模型？需要换或微调？",
      "④系统层面：RAG检索不准 → 模型拿到错误上下文"
    ],
    "group": "面试"
  },
  {
    "id": "b01",
    "cat": "SA商業",
    "q": "核心商业指标（8个）",
    "bullets": [
      "ROI：投入产出比（花100万省300万，ROI=200%）",
      "GMV：总交易额 / CTR：点击率 / CAC：获客成本",
      "LTV：客户终身价值 / ARPU：每用户平均收入",
      "Churn Rate：客户流失率 / MRR/ARR：月/年经常性收入",
      "SA用法：不说\"准确率+5%\"，说\"推荐准确率+5%预计带来GMV增长XX%\""
    ],
    "group": "面试"
  },
  {
    "id": "b02",
    "cat": "SA商業",
    "q": "企业客户采购流程（6阶段）",
    "bullets": [
      "需求确认(1-2周) → 技术评估(2-4周) → PoC(4-8周) → Pilot(1-3月) → Production → 扩展",
      "<span class=\"highlight\">PoC是最关键的阶段</span>——用客户真实数据跑小规模验证，\"用数据说话\"",
      "企业客户不会因为demo好就下单，要经过漫长评估",
      "SA的工作贯穿整个流程，是客户和公司之间的技术桥梁"
    ],
    "group": "面试"
  },
  {
    "id": "b03",
    "cat": "SA商業",
    "q": "ToB vs ToC 核心区别",
    "bullets": [
      "ToB：多人决策（技术负责人+采购+管理层），周期几月到一年，客单价几万到几千万",
      "ToC：个人决策，周期几秒到几天，客单价几元到几百元",
      "ToB：长期合作+定制化服务，流失代价极高（一个大客户占收入10%）",
      "<span class=\"highlight\">SA只存在于ToB</span>：因为需求复杂、决策周期长、客单价高，需要懂技术的人全程陪跑"
    ],
    "group": "面试"
  },
  {
    "id": "b04",
    "cat": "SA商業",
    "q": "5种定价模式",
    "bullets": [
      "订阅制：按月/年付费（SaaS标准模式）",
      "按量付费：用多少付多少（OpenAI API按token计费）",
      "阶梯定价：用量越大单价越低",
      "<span class=\"highlight\">成果报酬型</span>：按效果付费（BytePlus Recommend支持，推荐带来实际转化才收费）",
      "Freemium：基础免费，高级收费（Slack）",
      "SA用法：成果报酬型是很好的卖点——\"效果不好不收钱\""
    ],
    "group": "面试"
  },
  {
    "id": "b05",
    "cat": "SA商業",
    "q": "IaaS / PaaS / SaaS 和 BytePlus定位",
    "bullets": [
      "IaaS=租地自己盖房；PaaS=租毛坯房自己装修；SaaS=租精装房拎包入住",
      "BytePlus主要是PaaS和SaaS",
      "Recommend=SaaS（客户直接用后台配置）；MediaLive/VoD/RTC=PaaS（SDK集成）",
      "MaaS：模型即服务，SA帮客户判断用哪层（直接调API / LoRA微调 / 自己训练）"
    ],
    "group": "面试"
  },
  {
    "id": "b06",
    "cat": "SA商業",
    "q": "BytePlus 相比三大云的差异化",
    "bullets": [
      "不是通用云，是<span class=\"highlight\">垂直场景解决方案</span>（推荐/视频/内容生成）",
      "技术经过亿级用户验证（TikTok/抖音同款）",
      "在内容/推荐/视频三个方向技术积累比三大云更深",
      "更灵活定价（成果报酬型）",
      "对亚洲市场（日本/东南亚）有更强本地化能力"
    ],
    "group": "面试"
  },
  {
    "id": "b07",
    "cat": "SA商業",
    "q": "LLM落地5大挑战（SA日常要解决的）",
    "bullets": [
      "① 幻觉：RAG + Grounding + Guardrails + Human-in-the-loop",
      "② 成本：缓存/小模型/prompt优化/云边协同",
      "③ 延迟：模型量化/边缘部署/流式输出",
      "④ 数据安全/合规：on-prem部署、data residency（日本法规）",
      "⑤ 可解释性：给客户看决策依据，金融/医疗生死线"
    ],
    "group": "面试"
  },
  {
    "id": "b08",
    "cat": "SA商業",
    "q": "学术研究 vs 企业落地的核心差异",
    "bullets": [
      "评价标准：SOTA指标/论文 vs ROI/客户满意度/稳定性",
      "数据：公开/干净 vs 客户私有/脏/不平衡",
      "模型选择：追求最强 vs 追求性价比（够用就行）",
      "成本：实验室有GPU就行 vs 每个token都是钱",
      "维护：跑完实验就结束 vs 7x24运行+持续更新",
      "你的项目已在往落地方向走（有仿真器验证/前后端/评测体系）"
    ],
    "group": "面试"
  },
  {
    "id": "b09",
    "cat": "SA商業",
    "q": "为什么用BytePlus而不是直接调OpenAI API？",
    "bullets": [
      "不只是模型，而是<span class=\"highlight\">完整解决方案</span>（数据处理/选型/部署运维）",
      "多模型评测选型，不绑定单一模型",
      "本地化服务：日本有本地团队，理解当地业务习惯和合规",
      "成本优化：缓存策略/prompt优化/模型选型降低总成本",
      "数据安全：企业客户对数据隐私敏感，提供更可控的部署方式"
    ],
    "group": "面试"
  },
  {
    "id": "b10",
    "cat": "SA商業",
    "q": "关键云服务术语（必知10个）",
    "bullets": [
      "SLA：服务质量承诺（如可用性99.9%=一年最多停机8.7小时）",
      "Latency延迟 / Throughput吞吐量 / Scalability可扩展性",
      "On-premise本地部署（日本金融客户常见）",
      "Data Residency：数据必须存在特定国家（日本法规）",
      "Vendor Lock-in：客户担心用了服务就离不开",
      "Compliance合规 / Multi-tenancy多租户 / Hybrid Cloud混合云"
    ],
    "group": "面试"
  },
  {
    "id": "d01",
    "cat": "深度思考",
    "q": "The Bitter Lesson：Agent工程设计会被模型进步淘汰吗？",
    "bullets": [
      "面试官观点：SiLR验证/5层路由/10工具Agent都是<span class=\"highlight\">工程补丁</span>——补偿模型能力不足",
      "模型能力在飞速进步，等模型原生支持self-verification/可靠tool-use，这些工程就是废代码",
      "Rich Sutton \"The Bitter Lesson\"：利用算力和数据的通用方法，长期总是胜过精心设计的领域工程",
      "工程方案不可标准化（每个客户都要重新设计）、有保质期、不是产品——这不scale",
      "本质在考察：你有没有<span class=\"highlight\">产品化思维</span>，还是只会做项目制交付"
    ],
    "group": "面试"
  },
  {
    "id": "d02",
    "cat": "深度思考",
    "q": "如何回答\"从模型能力而非工程设计来思考价值\"？",
    "bullets": [
      "第一层（认同）：您说的对，SiLR验证就是因为当前模型动作可靠性不够。模型原生可靠后这层不需要了",
      "第二层（模型层面的工作）：①Post-training alignment——DPO隐式偏差是模型问题不是工程能解决的；②评测发现模型边界——RAG回归失败/few-shot 1>3这些洞察反馈给模型团队",
      "第三层（数据飞轮）：工程方案最大价值不是它本身，而是在真实场景中产生的<span class=\"highlight\">数据和洞察</span>——哪些query失败、哪些决策被拒——这些是训练下一代模型的燃料",
      "判断：<span class=\"highlight\">短期看工程，长期看模型</span>。SA角色会从\"设计工程补丁\"转向\"帮客户做post-training和evaluation\""
    ],
    "group": "面试"
  },
  {
    "id": "d03",
    "cat": "深度思考",
    "q": "模型评测（Model Evaluation）的价值在哪？（二面重点）",
    "bullets": [
      "不是跑个benchmark出个数字，而是<span class=\"highlight\">系统性地发现模型在客户场景中的边界</span>",
      "你做过的：66个场景×多模型(9B/14B/32B/GPT-5.4)×多方法(SFT/DPO/few-shot)的消融矩阵",
      "你发现的模型层面问题：DPO隐式偏差(−7.6pp) / RAG对回归任务有害 / few-shot 1>3 / 32B过拟合",
      "评测的产品化价值：帮客户在多个模型中选最适合其场景的那个——这就是MaaS中SA的核心职责",
      "评测→发现短板→数据收集→post-training→模型改进 = <span class=\"highlight\">数据飞轮</span>"
    ],
    "group": "面试"
  },
  {
    "id": "d04",
    "cat": "深度思考",
    "q": "工程 vs 模型：你的项目中哪些是\"临时补丁\"哪些是\"持久价值\"？",
    "bullets": [
      "<span class=\"highlight\">临时补丁</span>（模型进步后会淘汰）：SiLR验证循环 / 三层ActionParser / Observation压缩 / Agent强制调用guardrails",
      "<span class=\"highlight\">持久价值</span>（不随模型进步消失）：①评测方法论（怎么设计消融实验、怎么定义\"好\"）",
      "②领域数据资产（248条SFT轨迹、30K日语三元组、55个评测QA）",
      "③模型能力边界的洞察（DPO在结构化动作空间的失败模式、Token离散化鲁棒性发现）",
      "④客户场景理解（什么问题用RAG、什么不能用RAG、什么时候LSTM比LLM好）",
      "结论：工程是手段，<span class=\"highlight\">评测方法+数据资产+场景判断力</span>才是不被淘汰的能力"
    ],
    "group": "面试"
  },
  {
    "id": "d05",
    "cat": "深度思考",
    "q": "BytePlus Recommend核心优势（3点+数据权重）",
    "bullets": [
      "① 实时性：秒级更新用户兴趣画像，捕捉\"当下兴趣\"而非平均化历史兴趣（TikTok留存率核心）",
      "② 冷启动：新商品用内容属性做跨域迁移，从相似老商品借受众画像，上线第一天就能精准触达",
      "③ 自定义KPI：电商优化GMV/转化率，视频优化完播率——高CTR≠高GMV，要优化客户真正关心的业务指标",
      "数据权重：行为数据~80%（显示性偏好最强）> 内容属性~15%（冷启动补位）> 用户基本信息~5%（区分度低+隐私限制）",
      "成果报酬型定价是核心卖点——\"效果不好不收钱\""
    ],
    "group": "面试"
  },
  {
    "id": "d06",
    "cat": "深度思考",
    "q": "RAG过时论：传统RAG vs Claude Code式Agent",
    "bullets": [
      "传统RAG：人类预设pipeline（检索→rerank→生成），<span class=\"highlight\">人决定检索什么、怎么排</span>",
      "Claude Code式：给模型工具（grep/read/glob/web search），<span class=\"highlight\">模型自己决定什么时候需要什么信息</span>",
      "传统RAG换场景要重新设计pipeline；Agent模式只需模型够强+工具定义清晰",
      "你做的BM25+Dense+RRF+Reranker+Embedding微调，本质是用工程弥补\"模型不知道该找什么\"",
      "面试官观点：当模型推理能力够强时，固定pipeline会被模型原生tool use能力吞掉"
    ],
    "group": "面试"
  },
  {
    "id": "d07",
    "cat": "深度思考",
    "q": "如何回应\"RAG是过时的\"？",
    "bullets": [
      "先认同：确实，当模型推理能力够强时，固定pipeline会被替代",
      "但目前两者互补：①通用场景→强模型+工具（Claude Code方式）",
      "②<span class=\"highlight\">垂直领域</span>（日语电力法规）→领域微调检索仍有价值——模型不懂这个领域的术语，不知道该搜什么",
      "长期：随着模型领域知识增强，传统RAG pipeline价值递减",
      "持久价值不在pipeline本身，而在：评测数据集(55个QA) / 领域微调数据(30K三元组) / \"什么场景RAG有效什么无效\"的判断力"
    ],
    "group": "面试"
  },
  {
    "id": "g01",
    "cat": "SiLR-Agent",
    "q": "SiLR-Agent 核心数字",
    "bullets": [
      "恢复成功率 <span class=\"num\">97.0%</span>（64/66 IEEE 39-bus场景）",
      "安全违规率 <span class=\"num\">0%</span>（所有危险动作被SiLR拦截）",
      "平均 <span class=\"num\">3.2</span> 步完成恢复，max_steps=8",
      "超过GPT-5.4 zero-shot(82.1%) / few-shot-3(94.2%) / 1-shot(96.7%)",
      "推理成本低 <span class=\"num\">100倍</span>（本地14B vs GPT API）"
    ],
    "group": "项目"
  },
  {
    "id": "g02",
    "cat": "SiLR-Agent",
    "q": "SiLR = Simulation-in-the-Loop Reasoning，解决什么问题？",
    "bullets": [
      "核心痛点：LLM能推理但会\"幻觉动作\"——在安全关键领域（电网、金融、医疗）不可接受",
      "现有方案：要么盲目信任LLM，要么静态规则（漏检动态违规）",
      "SiLR：每步先在仿真器中验证安全性再执行，把安全保障从\"信任模型\"变成\"验证模型\"",
      "可迁移：任何有仿真器/规则引擎的场景（金融合规、医疗用药、代码沙箱）"
    ],
    "group": "项目"
  },
  {
    "id": "g03",
    "cat": "SiLR-Agent",
    "q": "Bounded ReAct 的5步执行循环",
    "bullets": [
      "① OBSERVE：观测工具获取系统状态，压缩到~200-300 tokens",
      "② REASON+ACT：LLM推理 + 三层ActionParser解析输出",
      "③ VERIFY：SiLR验证器在影子仿真中执行，检查4类约束",
      "④ PASS→执行 / FAIL→Escalation Hint+重试（每步最多3次）/ 3次失败→failsafe",
      "⑤ CHECK：check_stability() → 未恢复则回到Step 1"
    ],
    "group": "项目"
  },
  {
    "id": "g04",
    "cat": "SiLR-Agent",
    "q": "Bounded ReAct vs 标准 ReAct",
    "bullets": [
      "标准ReAct：没有明确终止条件，可能无限循环",
      "三层边界：步数上限(max_steps=8) / 重试上限(每步max 3次) / Failsafe兜底",
      "保证系统永远有兜底，不会陷入无限循环或做出危险决策",
      "为什么选ReAct不选Plan-and-Execute：电力恢复是动态的，每次操作后系统状态变化，不能提前规划所有步骤"
    ],
    "group": "项目"
  },
  {
    "id": "g05",
    "cat": "SiLR-Agent",
    "q": "三层 ActionParser 是什么？",
    "bullets": [
      "Layer 1：原生tool_calls解析（GPT格式）",
      "Layer 2：JSON block解析（Qwen3格式：```json {...} ```）",
      "Layer 3：正则匹配（兜底）",
      "目的：跨模型兼容性，避免浪费重试次数在解析错误上，能快速切换模型做消融"
    ],
    "group": "项目"
  },
  {
    "id": "g06",
    "cat": "SiLR-Agent",
    "q": "SiLR 验证机制的完整流程",
    "bullets": [
      "① 克隆当前状态 → Shadow Copy（DAE数组快照，非deepcopy因PyCapsule不可序列化）",
      "② 在影子系统执行动作 → 运行潮流计算(~100ms)",
      "③ 4个约束检查：电压(0.90-1.10pu) / 频率(±0.5Hz) / 线路负载(<100%) / 转子角(<180°)",
      "全部PASS → 主系统执行；任一FAIL → 结构化违规报告（偏离多少、调整建议）"
    ],
    "group": "项目"
  },
  {
    "id": "g07",
    "cat": "SiLR-Agent",
    "q": "Escalation Hint 机制 — 如何从92.4%→97.0%",
    "bullets": [
      "发现：5个失败场景全是同一问题——magnitude不够被拒绝后，模型不会自主加码",
      "三层机制（零重训）：引导层(具体提示\"100MW不够，至少150MW\") / 系统层(提示层) / 兜底层(强制2×或min 100MW)",
      "关键洞察：12轮SFT无法教会\"被拒→加码\"的多步行为，系统层引导比重训更有效",
      "消融：progress feedback(PASS时也提示)反而退步——只在REJECT时介入"
    ],
    "group": "项目"
  },
  {
    "id": "g08",
    "cat": "SiLR-Agent",
    "q": "训练数据：怎么来的？规模多大？",
    "bullets": [
      "用Gemini-3-Flash作为Teacher Model（Kimi被淘汰：38%恢复率+56%拓扑幻觉）",
      "14个基础场景×SiLR循环→56-68条 + 52个参数化变体→179-181条 + 专家数据15条 + 修复2条",
      "总计 <span class=\"num\">248条</span> SFT数据",
      "先用Teacher生成，再SiLR验证过滤，再人工修正少量关键样本（蒸馏+主动学习）"
    ],
    "group": "项目"
  },
  {
    "id": "g09",
    "cat": "SiLR-Agent",
    "q": "数据质量的实验证据",
    "bullets": [
      "删除7条错误标注(−7条) → 恢复率 <span class=\"num\">+6pp</span>",
      "添加2条s01修复数据 → 修复了一个一直失败的场景",
      "结论：<span class=\"highlight\">7条坏数据的伤害 > 100条好数据的贡献</span>",
      "对客户的意义：500条精心标注的行业QA，效果可能超过5000条噪音数据"
    ],
    "group": "项目"
  },
  {
    "id": "g10",
    "cat": "SiLR-Agent",
    "q": "为什么14B比32B效果好？",
    "bullets": [
      "248条数据下：14B SFT=92.4%，32B只有87.9%（3种配置结论一致）",
      "原因①：同一LoRA rank对更大模型的表达比例更低(r=64: 14B≈0.5% vs 32B≈0.3%)",
      "原因②：32B预训练知识更强，可能与SFT数据的领域策略存在冲突",
      "9B(视觉语言模型)=87.9%，文本推理弱于纯语言14B"
    ],
    "group": "项目"
  },
  {
    "id": "g11",
    "cat": "SiLR-Agent",
    "q": "DPO 三个坑",
    "bullets": [
      "坑①：shed_load回避(−7.6pp)：63%偏好对惩罚了切负荷 → 模型学会\"永远不切负荷\"",
      "坑②：Qwen3 <think>模式激活：DPO后每个输出前加think标签 → 302次解析错误，修复：enable_thinking=False",
      "坑③：动作幅度分布偏移：close_line专家数据中adjust_gen都~20MW → 模型学到\"所有调整都是20MW\"",
      "最终结论：修复所有坑后DPO净贡献仅+0.6pp，投入产出比不高。不是所有场景都需要DPO"
    ],
    "group": "项目"
  },
  {
    "id": "g12",
    "cat": "SiLR-Agent",
    "q": "LoRA 配置",
    "bullets": [
      "model: Qwen3-14B，quantization: NF4(QLoRA)",
      "lora_r=64, lora_alpha=128(scaling=2)，7个target_modules",
      "trainable params: ~100M / 14B = <1%",
      "训练时间: ~70-100 min on RTX PRO Blackwell 96GB",
      "r=64因为任务复杂度高（多工具选择+数值参数生成）"
    ],
    "group": "项目"
  },
  {
    "id": "g13",
    "cat": "SiLR-Agent",
    "q": "Observation压缩策略",
    "bullets": [
      "电力系统全状态~2000 tokens，直接塞入context太浪费",
      "正常设备只报数量：\"32/39 buses normal\"",
      "违规设备报详细数值+动作提示：\"Bus 9: 0.87 p.u. < 0.90, consider adjust_gen nearby\"",
      "压缩后~200-300 tokens，信息保留率90%+",
      "核心：给模型看<span class=\"highlight\">需要关注的信息</span>，不是所有信息"
    ],
    "group": "项目"
  },
  {
    "id": "g14",
    "cat": "SiLR-Agent",
    "q": "Few-shot 实验发现",
    "bullets": [
      "GPT-5.4实验：<span class=\"num\">1个示例(96.7%) > 3个示例(94.2%)</span>",
      "原因：多示例稀释context，示例占用更多token，压缩了对当前问题的注意力",
      "教训：few-shot不是越多越好，需要实验验证"
    ],
    "group": "项目"
  },
  {
    "id": "g15",
    "cat": "SiLR-Agent",
    "q": "SiLR框架可迁移到哪些场景？",
    "bullets": [
      "核心抽象：<span class=\"highlight\">LLM负责推理 + 仿真器负责验证 = 可信AI决策</span>",
      "金融：Agent生成交易策略 → 合规引擎验证 → 通过才执行",
      "医疗：LLM给出用药建议 → 药物冲突检查系统验证",
      "自动驾驶：规划路径 → 碰撞预测仿真验证",
      "代码执行：LLM生成代码 → 沙箱验证 → 通过才运行",
      "已验证：电力系统（物理仿真）+ 网络路由（离散事件仿真）"
    ],
    "group": "项目"
  },
  {
    "id": "g16",
    "cat": "SiLR-Agent",
    "q": "为什么不直接用GPT-5.4调API？",
    "bullets": [
      "成本：API按token计费，每个场景多轮交互，成本不可控",
      "延迟：API网络延迟，电力系统需要实时决策",
      "确定性：GPT每次输出不同(±2.6pp)，关键系统需要确定性行为",
      "隐私：电力系统=关键基础设施信息，不能上传第三方",
      "数据：本地14B+Escalation <span class=\"num\">97.0%</span> > GPT-5.4 1-shot <span class=\"num\">96.7%</span>，成本低100倍"
    ],
    "group": "项目"
  },
  {
    "id": "g17",
    "cat": "SiLR-Agent",
    "q": "如果客户说\"我不信AI能做关键决策\"，你怎么回？",
    "bullets": [
      "AI不是替代人做决策，而是<span class=\"highlight\">辅助</span>人做决策，每个建议都有验证报告",
      "安全违规率0%——不是因为AI完美，而是不完美的动作会被拦截",
      "有failsafe兜底——最坏情况执行保守规则化策略",
      "给客户看验证报告样例——透明可解释"
    ],
    "group": "项目"
  },
  {
    "id": "g18",
    "cat": "SiLR-Agent",
    "q": "Failsafe三层保护",
    "bullets": [
      "① SiLR拦截：危险动作不会执行",
      "② 3次重试：每步最多3次LLM尝试，基于结构化反馈调整策略",
      "③ DefaultFailsafe：全部失败后切换到规则化策略（基于最严重违规类型，执行保守恢复动作）",
      "系统永远有兜底方案，最坏情况也是走failsafe，不是做出危险决策"
    ],
    "group": "项目"
  },
  {
    "id": "r01",
    "cat": "Agentic RAG",
    "q": "Agentic RAG 核心数字",
    "bullets": [
      "Recall@5 = <span class=\"num\">96.4%</span>（加Rerank后）",
      "Embedding微调：Recall@1 从47.3% → <span class=\"num\">63.6%</span>（+16.4pp）",
      "10工具Agent框架，支持多跳QA、自反思重试",
      "55个日语电力领域查询，160+文档→359 chunks",
      "完整检索pipeline：BM25(Char 3-gram) + Dense(fine-tuned bge-m3) + RRF + Reranker"
    ],
    "group": "项目"
  },
  {
    "id": "r02",
    "cat": "Agentic RAG",
    "q": "BM25 vs Dense检索 — 小语料的教训",
    "bullets": [
      "BM25 Recall@1 = <span class=\"num\">81.8%</span>（最高！）；Dense未微调只有47.3%，微调后63.6%",
      "小语料（359 chunks）上，n-gram模糊匹配比精确形态素更鲁棒",
      "<span class=\"highlight\">\"更精确\"≠\"更好\"</span>，需要实验验证",
      "Dense微调后仍低于BM25，但两者互补（Dense能找到语义相关的文档）"
    ],
    "group": "项目"
  },
  {
    "id": "r03",
    "cat": "Agentic RAG",
    "q": "为什么BM25用Char 3-gram而不是MeCab？",
    "bullets": [
      "Char 3-gram Recall@1 = <span class=\"num\">81.8%</span> vs MeCab = 74.5%，高7.3pp",
      "小语料上n-gram的模糊匹配比精确形态素更鲁棒",
      "MeCab漏掉复合词中间部分（\"需給調整\"→\"需給\"+\"調整\"，丢失组合信息）",
      "n-gram对Query和Document用相同tokenizer，一致性好"
    ],
    "group": "项目"
  },
  {
    "id": "r04",
    "cat": "Agentic RAG",
    "q": "Hybrid RRF 反直觉结果",
    "bullets": [
      "Hybrid Recall@1 = <span class=\"num\">72.7%</span> < BM25 = 81.8%（Hybrid反而更差！）",
      "原因：Dense把错误文档排很高，RRF融合时这些高排名错误文档挤掉了BM25的正确Top-1",
      "加Rerank后差异消失，全部收敛到96.4%",
      "教训：Hybrid的价值在Recall@5+（不漏掉好文档），不是Top-1准确率",
      "RRF权重(BM25=0.75, Dense=1.0)是反直觉的——给更弱的Dense更高权重"
    ],
    "group": "项目"
  },
  {
    "id": "r05",
    "cat": "Agentic RAG",
    "q": "Reranker 为什么叫\"均衡器\"？",
    "bullets": [
      "无Rerank：BM25(81.8%) >> Hybrid(72.7%) >> Dense(63.6%)，差距悬殊",
      "有Rerank：<span class=\"highlight\">全部收敛到80.0% / 96.4%</span>",
      "Cross-Encoder消除了第一阶段所有方法的差异",
      "是RAG pipeline的安全网——即使第一阶段不完美，Reranker从Top-50中把正确文档捞上来",
      "模型：bge-reranker-v2-m3（80M参数），延迟~0.25s"
    ],
    "group": "项目"
  },
  {
    "id": "r06",
    "cat": "Agentic RAG",
    "q": "bge-m3 微调配置",
    "bullets": [
      "数据：<span class=\"num\">29,799条</span> 日语三元组，来自9个开源数据集（零领域标注成本）",
      "Loss：MultipleNegativesRankingLoss（in-batch negatives + hard negatives）",
      "训练：batch_size=64, epochs=3, lr=2e-5, FP16，<span class=\"num\">~27.6分钟</span>",
      "效果：Recall@1 <span class=\"num\">+16.4pp</span>，MAP@10 +0.130",
      "关键教训：训练中断时Recall@5 -3.6%，跑完才+5.5%——<span class=\"highlight\">中途checkpoint可能比基线更差</span>"
    ],
    "group": "项目"
  },
  {
    "id": "r07",
    "cat": "Agentic RAG",
    "q": "10个工具列表",
    "bullets": [
      "① expand_query(~5.5s) — LLM查询改写",
      "② retrieve(~0.2s) — BM25/Dense/Hybrid检索",
      "③ rerank(~0.25s) — Cross-Encoder精排",
      "④ generate_answer(~10.7s) — LLM生成回答",
      "⑤ judge_answer(~5.3s) — LLM-as-Judge 5维度评分",
      "⑥ read_chunk / ⑦ search_by_doc / ⑧ summarize_context / ⑨ decompose_query / ⑩ reflect_and_retry"
    ],
    "group": "项目"
  },
  {
    "id": "r08",
    "cat": "Agentic RAG",
    "q": "为什么不用LangChain？",
    "bullets": [
      "已有代码覆盖80%（retriever/LLM/reranker），LangChain包装层价值有限",
      "需要完全控制prompt和guardrails（<span class=\"highlight\">强制调用judge、强制使用retrieve</span>）",
      "避免依赖膨胀（LangChain引入60+包）",
      "双协议支持（Gemini + OpenAI）自定义更容易"
    ],
    "group": "项目"
  },
  {
    "id": "r09",
    "cat": "Agentic RAG",
    "q": "LLM-as-Judge 5个评估维度",
    "bullets": [
      "① Faithfulness — 回答是否忠于检索到的文档",
      "② Relevance — 回答是否切题",
      "③ Completeness — 信息是否完整",
      "④ Context Relevance — 检索到的文档是否够用",
      "⑤ Overall — 整体质量",
      "overall≤3 → 自动触发reflect_and_retry，最多重试2次"
    ],
    "group": "项目"
  },
  {
    "id": "r10",
    "cat": "Agentic RAG",
    "q": "Agent不调judge_answer的问题怎么解决？",
    "bullets": [
      "问题：LLM只用retrieve+generate_answer就直接回答，走最短路径",
      "Prompt层：添加\"MUST call judge_answer\"/\"NEVER write answer as plain text\"",
      "Code层：如果LLM输出文本但没调judge，强制注入一次judge调用",
      "教训：<span class=\"highlight\">LLM会走最短路径，关键步骤不能靠\"建议\"，要靠强制</span>"
    ],
    "group": "项目"
  },
  {
    "id": "r11",
    "cat": "Agentic RAG",
    "q": "完整检索结果对比表",
    "bullets": [
      "BM25：Recall@1 <span class=\"num\">81.8%</span> / Recall@5 94.5%（小语料王者）",
      "Dense(fine-tuned)：Recall@1 63.6% / Recall@5 87.3%",
      "Hybrid RRF：Recall@1 72.7% / Recall@5 92.7%（不如BM25！）",
      "BM25+Rerank：Recall@1 80.0% / Recall@5 <span class=\"num\">96.4%</span>",
      "Dense+Rerank：Recall@1 80.0% / Recall@5 96.4% / nDCG <span class=\"num\">0.961</span>（最高）",
      "推荐：BM25+Rerank（简单高效）或Dense+Rerank（nDCG最高）"
    ],
    "group": "项目"
  },
  {
    "id": "r12",
    "cat": "Agentic RAG",
    "q": "RAG诊断框架（客户说效果不好时）",
    "bullets": [
      "① Chunking：切分策略是否合理？语义完整性？",
      "② 检索：Recall@K量化，正确文档能被检索到吗？",
      "③ Embedding：通用模型对领域术语是否有效？需要微调？",
      "④ Reranking：有没有Reranker？没有加一个可能直接+10pp",
      "⑤ 生成：Prompt是否有效？Faithfulness约束？",
      "通常最大问题在<span class=\"highlight\">Chunking和Embedding</span>——这是基础"
    ],
    "group": "项目"
  },
  {
    "id": "r13",
    "cat": "Agentic RAG",
    "q": "日语RAG的特殊挑战",
    "bullets": [
      "无空格分词：需要专门分词工具或n-gram",
      "三种字符混用：汉字/平假名/片假名，同一概念多种写法",
      "复合词问题：\"需給調整\"被MeCab分成两个词，丢失意义",
      "NFKC正规化：全角→半角（\"ＡＢＣ\"→\"ABC\"），统一空白字符",
      "发现：在小语料上，暴力Char n-gram比精细形态素解析更好"
    ],
    "group": "项目"
  },
  {
    "id": "r14",
    "cat": "Agentic RAG",
    "q": "多跳QA怎么实现？",
    "bullets": [
      "decompose_query工具把复杂问题拆成2-4个独立子问题",
      "分别检索 → 合并去重（by chunk_id）→ 生成综合回答",
      "Query意图分类（规则）自动识别comparative类问题 → 触发decompose_query",
      "例：\"A规定和B规定有什么冲突\" → [\"A规定目的？\", \"B规定目的？\", \"两者差异？\"]"
    ],
    "group": "项目"
  },
  {
    "id": "r15",
    "cat": "Agentic RAG",
    "q": "客户预算有限，只能做一件事提升RAG效果，推荐什么？",
    "bullets": [
      "首选：<span class=\"highlight\">加Reranker</span>——把所有方法Recall@5统一提升到96.4%，延迟只+0.25s，开箱即用",
      "次选：<span class=\"highlight\">Embedding微调</span>——+16.4pp Recall@1，27分钟训练，用开源数据零标注成本",
      "bge-m3开源可微调本地部署；OpenAI embedding不可微调，日本企业数据不出设备是硬需求"
    ],
    "group": "项目"
  },
  {
    "id": "e01",
    "cat": "云边协同",
    "q": "EdgeRouter 核心数字",
    "bullets": [
      "云端成本节省 <span class=\"num\">86%+</span>（即使500ms WAN延迟仍保持）",
      "异常漏检率 <span class=\"num\">0%</span>（所有错误是严重程度低估，不是漏报）",
      "级联信号准确率 <span class=\"num\">93.8%</span>（15/16决策正确）",
      "47%请求边缘直出，53%需要级联",
      "并发推理吞吐 <span class=\"num\">2.9×</span> 提升"
    ],
    "group": "项目"
  },
  {
    "id": "e02",
    "cat": "云边协同",
    "q": "5层路由设计（T0~T4）",
    "bullets": [
      "T0紧急安全：异常等级>95或变化率>10/s → 跳过分析，直接边缘控制",
      "T1数据安全：含敏感数据 → 强制边缘，数据不出设备",
      "T2明确正常：异常分数<0.2且置信度>0.85 → 边缘直出",
      "T3明确复杂：异常分数>0.8或多指标异常≥2 → 直接云端",
      "T4灰色地带：其他所有 → 边缘先做，置信度低则升级",
      "哲学：安全优先(T0/T1) → 效率优化(T2/T3) → 智能决策(T4)"
    ],
    "group": "项目"
  },
  {
    "id": "e03",
    "cat": "云边协同",
    "q": "为什么是5层而不是简单阈值二分？",
    "bullets": [
      "T0/T1是硬规则（安全和隐私），不能被置信度覆盖",
      "T2/T3是高确定性决策，不需要浪费资源做置信度估计",
      "只有T4才真正需要置信度驱动的动态决策",
      "简单阈值：T0紧急请求可能因\"置信度还行\"被边缘处理，延误响应"
    ],
    "group": "项目"
  },
  {
    "id": "e04",
    "cat": "云边协同",
    "q": "3种置信度估计方法",
    "bullets": [
      "① 输出概率(权重0.3)：softmax最大值，零额外成本，但可能过度自信",
      "② 自验证(权重0.3)：边缘分析+视觉检测交叉验证，+1次推理成本",
      "③ 时序一致性(权重0.4)：滑动窗口检测稳定性，过滤单帧噪声——权重最高",
      "时序权重最高原因：真正异常通常持续多帧，单帧异常大概率是噪声"
    ],
    "group": "项目"
  },
  {
    "id": "e05",
    "cat": "云边协同",
    "q": "0.8B边缘模型只有80%准确率，够用吗？",
    "bullets": [
      "80%错误全是<span class=\"highlight\">严重程度低估</span>（alarm判成warning），不是漏报",
      "异常检测（有无异常二分类）准确率 <span class=\"num\">100%</span>",
      "低估的会因置信度不够高而自动升级到云端",
      "实际效果 = 0漏检 + 86%成本节省"
    ],
    "group": "项目"
  },
  {
    "id": "e06",
    "cat": "云边协同",
    "q": "Edge vs Cloud 技术对比",
    "bullets": [
      "Edge：Qwen3.5-0.8B / Q8_0 GGUF / Ollama / CPU可跑(~0.5GB)",
      "Cloud：Qwen3.5-27B / BF16 / vLLM(TP=2) / 双GPU(~54GB)",
      "Ollama优势：易用性、本地部署、CPU-only；vLLM优势：高吞吐、Continuous Batching",
      "gRPC用于边缘→云端内部通信（延迟低~30%），REST用于外部API"
    ],
    "group": "项目"
  },
  {
    "id": "e07",
    "cat": "云边协同",
    "q": "为什么Edge用量化，Cloud用BF16？",
    "bullets": [
      "Edge做<span class=\"highlight\">分类</span>（异常检测），Q8_0量化损失极小",
      "Cloud做<span class=\"highlight\">详细分析</span>（生成文本报告），需要BF16保证生成质量",
      "Edge不用更激进INT4：0.8B模型够小，Q8_0在CPU上也能流畅运行",
      "GGUF是llama.cpp格式，专为CPU推理优化，`ollama pull`一条命令搞定"
    ],
    "group": "项目"
  },
  {
    "id": "e08",
    "cat": "云边协同",
    "q": "性能优化ROI排序",
    "bullets": [
      "① 级联路由(86%成本节省) — 架构级，最大收益",
      "② 量化(3×压缩) — Edge INT4，几乎免费",
      "③ Prefix Caching(30%计算节省) — Cloud端，一个参数搞定",
      "④ 并发推理(2.9×吞吐) — asyncio + Semaphore",
      "⑤ 推测性预取(~-12%级联延迟) — 有额外成本，看场景"
    ],
    "group": "项目"
  },
  {
    "id": "e09",
    "cat": "云边协同",
    "q": "延迟与成本：500ms高延迟时表现如何？",
    "bullets": [
      "10ms延迟：P50=628ms，云端成本节省92.9%",
      "50ms延迟：P50=681ms，云端成本节省86.7%",
      "200ms延迟：P50=849ms，云端成本节省86.7%",
      "<span class=\"num\">500ms</span>延迟：P50=1124ms，云端成本节省 <span class=\"num\">86.7%</span>",
      "结论：EdgeRouter价值<span class=\"highlight\">不依赖网络条件</span>"
    ],
    "group": "项目"
  },
  {
    "id": "e10",
    "cat": "云边协同",
    "q": "ISE 66%优于理想PI控制器是什么意思？",
    "bullets": [
      "ISE(误差平方积分)是控制系统标准性能指标，越低越好",
      "无控制:22556 / 只用边缘:14500 / 只用云端:1768",
      "<span class=\"highlight\">EdgeRouter级联:612 vs 理想PI控制器:1803</span>",
      "原因：边缘快速粗修正(~2s) + 云端精修正 = 两阶段协作超越单一策略",
      "类比：先应急处理，再等专家精细处理"
    ],
    "group": "项目"
  },
  {
    "id": "e11",
    "cat": "云边协同",
    "q": "在线阈值学习怎么工作？",
    "bullets": [
      "云端确认了边缘结果 → 降低阈值（减少未来云端调用，边缘够准）",
      "云端推翻了边缘结果 → 升高阈值（增加未来云端调用，边缘不够准）",
      "更新方式：threshold += ±learning_rate（EMA平滑）",
      "效果：部署初期保守（多上云），运行后自适应（学会哪些边缘够了）"
    ],
    "group": "项目"
  },
  {
    "id": "e12",
    "cat": "云边协同",
    "q": "这套云边架构能迁移到什么场景？",
    "bullets": [
      "客服chatbot：简单FAQ边缘回答，复杂问题上云",
      "文档审核：明确合规/不合规边缘判断，灰色地带上云",
      "医疗初诊：明确正常自动放行，疑似异常转专家",
      "和BytePlus产品关联：帮客户降低API调用成本 / 保护数据隐私 / 降低延迟",
      "核心模式：<span class=\"highlight\">简单的快速处理 + 复杂的精确处理 = 成本和质量最优平衡</span>"
    ],
    "group": "项目"
  },
  {
    "id": "e13",
    "cat": "云边协同",
    "q": "Docker坑 + 工程取舍教训",
    "bullets": [
      "Docker Hub在中国/WSL2不可访问，docker pull直接挂起",
      "解决：放弃Docker隔离，改用应用层WAN延迟模拟（asyncio.sleep）",
      "教训：<span class=\"highlight\">物理资源隔离不如路由逻辑正确性重要</span>",
      "对于架构验证，逻辑正确比部署形式更关键",
      "Prometheus+Grafana监控：6个面板，包含路由分布/级联确认率/置信度分布/云端升级率"
    ],
    "group": "项目"
  },
  {
    "id": "p01",
    "cat": "PowerTS-LLM",
    "q": "PowerTS-LLM 核心发现",
    "bullets": [
      "LLM精度 <span class=\"num\">不如LSTM</span>（干净数据MAE差13倍：LLM 2968MW vs LSTM 228MW）",
      "但LLM鲁棒性好 <span class=\"num\">48.51倍</span>（噪声σ=5%：LSTM +107.7% vs LLM +2.2%）",
      "结论：<span class=\"highlight\">LLM不是时序预测最优解，但在恶劣条件下是最鲁棒的解</span>",
      "48.51× = LSTM退化幅度107.7% / LLM退化幅度2.2%"
    ],
    "group": "项目"
  },
  {
    "id": "p02",
    "cat": "PowerTS-LLM",
    "q": "Token离散化为什么鲁棒（核心机制）",
    "bullets": [
      "数值经tokenize→离散token序列，相近数值在embedding空间表示接近，噪声衰减",
      "数值精度被token粒度截断——LLM内部看到的是\"大约28\"而非精确浮点数",
      "LSTM直接处理浮点数，噪声通过自回归链<span class=\"highlight\">传播并放大</span>（每步误差是下步输入）",
      "这是第一个定量证明LLM token离散化具有噪声过滤效果的工作"
    ],
    "group": "项目"
  },
  {
    "id": "p03",
    "cat": "PowerTS-LLM",
    "q": "RAG为什么在时序预测上失败？（退化7.3%）",
    "bullets": [
      "相似天气≠相似负荷动态（3月15日和22日天气相似，但一个有特殊事件）",
      "额外context干扰：微调后LLM已学会从输入直接预测，\"参考日\"成为噪声",
      "<span class=\"highlight\">RAG适合\"有答案需要找到\"的任务，不适合\"需要计算\"的任务</span>",
      "SA意义：客户说\"我要做XXX加个RAG\"，要先判断任务类型再推方案"
    ],
    "group": "项目"
  },
  {
    "id": "p04",
    "cat": "PowerTS-LLM",
    "q": "LSTM vs LLM：分别什么场景用？",
    "bullets": [
      "LSTM：数据质量高、实时性要求高、资源受限 → 传统电力预测（MAE低13倍，推理~1ms）",
      "LLM：数据质量不稳定、对鲁棒性要求高、可接受较高延迟（需要GPU，~5-10s）",
      "混合方案：LSTM做主力，LLM做鲁棒性校验——两者预测值差距大说明数据可能有问题",
      "建议：大多数情况推荐LSTM，不推荐直接用LLM替代LSTM"
    ],
    "group": "项目"
  },
  {
    "id": "p05",
    "cat": "PowerTS-LLM",
    "q": "训练配置",
    "bullets": [
      "model: Qwen2.5-14B-Instruct，LoRA rank=64, alpha=128",
      "trainable_params: 68.8M (0.49%)",
      "training_data: <span class=\"num\">542K</span> 日语结构化prompt（TEPCO历史数据）",
      "epochs: 1（loss在0.4 epoch处就收敛了）",
      "训练时间: <span class=\"num\">~38小时</span>（单卡RTX 6000 96GB）",
      "framework: LLaMA-Factory + DeepSpeed ZeRO-2"
    ],
    "group": "项目"
  },
  {
    "id": "p06",
    "cat": "PowerTS-LLM",
    "q": "三个最重要的教训（最适合SA场景的答案）",
    "bullets": [
      "① <span class=\"highlight\">新技术≠最优解</span>：LLM很热门，但时序预测上LSTM精度高13倍",
      "② <span class=\"highlight\">弱点可以是优点</span>：Token离散化被认为是\"缺陷\"，但恰好成为噪声滤波器",
      "③ <span class=\"highlight\">RAG有适用边界</span>：回归任务加RAG反而有害，技术选型必须看场景",
      "这些教训让我在面对客户时做出更准确的技术判断"
    ],
    "group": "项目"
  },
  {
    "id": "p07",
    "cat": "PowerTS-LLM",
    "q": "如何向客户回应\"LLM时序预测精度太差\"？",
    "bullets": [
      "诚实承认：干净数据上LSTM确实精度高13倍",
      "\"但请考虑：你的数据质量始终完美吗？传感器故障/通信中断/极端天气都会引入噪声\"",
      "\"在噪声条件下，LSTM退化108%，LLM只退化2.2%\"",
      "建议：LSTM做主力 + LLM做鲁棒性校验，两者互补"
    ],
    "group": "项目"
  },
  {
    "id": "p08",
    "cat": "PowerTS-LLM",
    "q": "如何给客户定方案（时序预测场景）",
    "bullets": [
      "① 先问清：精度优先还是鲁棒性优先？数据质量？实时性要求？",
      "② 先跑基线：LSTM 30分钟出结果，先看干净数据精度",
      "③ 评估风险：对历史数据加噪测试，看退化幅度",
      "④ 推荐：大多数情况推荐LSTM+异常检测；数据质量差→加LLM备用",
      "⑤ 不推荐直接用LLM替代LSTM"
    ],
    "group": "项目"
  },
  {
    "id": "al01",
    "cat": "算法",
    "q": "二分查找 — 模板与边界处理",
    "bullets": [
      "前提：<span class=\"highlight\">有序数组</span>。时间O(log n)，空间O(1)",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">binary_search</span>(nums, target):\n    lo, hi = 0, len(nums) - 1\n    <span class=\"kw\">while</span> lo <= hi:\n        mid = lo + (hi - lo) // 2  <span class=\"cm\"># 防溢出</span>\n        <span class=\"kw\">if</span> nums[mid] == target:\n            <span class=\"kw\">return</span> mid\n        <span class=\"kw\">elif</span> nums[mid] < target:\n            lo = mid + 1\n        <span class=\"kw\">else</span>:\n            hi = mid - 1\n    <span class=\"kw\">return</span> -1</pre>",
      "关键边界：lo <= hi（闭区间）vs lo < hi（左闭右开）",
      "变体：找第一个>=target → lo=mid+1/hi=mid，返回lo"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "al02",
    "cat": "算法",
    "q": "排序算法对比 — 稳定性与复杂度",
    "bullets": [
      "冒泡排序：O(n²)，稳定。相邻比较交换，简单但慢",
      "选择排序：O(n²)，不稳定。每次选最小放前面",
      "插入排序：O(n²)，稳定。适合<span class=\"highlight\">近乎有序</span>的数据，实际常数小",
      "快速排序：平均O(n log n)，最坏O(n²)，不稳定。实际最快，Python sorted()用Timsort",
      "归并排序：O(n log n)，稳定，需要O(n)额外空间",
      "Python <code>sorted()</code> 用 <span class=\"highlight\">Timsort</span>（归并+插入混合），稳定，最坏O(n log n)"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "al03",
    "cat": "算法",
    "q": "反转链表 — 迭代法",
    "bullets": [
      "<pre><span class=\"kw\">class</span> ListNode:\n    <span class=\"kw\">def</span> __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\n<span class=\"kw\">def</span> <span class=\"fn\">reverse_list</span>(head):\n    prev = None\n    curr = head\n    <span class=\"kw\">while</span> curr:\n        nxt = curr.next   <span class=\"cm\"># 先保存下一个</span>\n        curr.next = prev  <span class=\"cm\"># 反转指针</span>\n        prev = curr       <span class=\"cm\"># prev前移</span>\n        curr = nxt        <span class=\"cm\"># curr前移</span>\n    <span class=\"kw\">return</span> prev</pre>",
      "时间O(n)，空间O(1)。三个指针：prev, curr, nxt",
      "面试高频(LC206)，变体：反转链表II(部分反转)、K个一组反转"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "al04",
    "cat": "算法",
    "q": "有效括号 — 栈的经典应用",
    "bullets": [
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">is_valid</span>(s):\n    stack = []\n    pairs = {<span class=\"str\">\")\"</span>:<span class=\"str\">\"(\"</span>, <span class=\"str\">\"]\"</span>:<span class=\"str\">\"[\"</span>, <span class=\"str\">\"}\"</span>:<span class=\"str\">\"{\"</span>}\n    <span class=\"kw\">for</span> c <span class=\"kw\">in</span> s:\n        <span class=\"kw\">if</span> c <span class=\"kw\">in</span> pairs:\n            <span class=\"kw\">if not</span> stack <span class=\"kw\">or</span> stack[-1] != pairs[c]:\n                <span class=\"kw\">return</span> False\n            stack.pop()\n        <span class=\"kw\">else</span>:\n            stack.append(c)\n    <span class=\"kw\">return</span> len(stack) == 0</pre>",
      "LC20，时间O(n)空间O(n)。用哈希表映射右括号→左括号",
      "思路：遇到左括号入栈，遇到右括号检查栈顶是否匹配"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "al05",
    "cat": "算法",
    "q": "快速排序 — 分治思想与实现",
    "bullets": [
      "思想：选pivot → 小的放左边大的放右边 → 递归排左右",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">quicksort</span>(arr):\n    <span class=\"kw\">if</span> len(arr) <= 1:\n        <span class=\"kw\">return</span> arr\n    pivot = arr[len(arr)//2]\n    left = [x <span class=\"kw\">for</span> x <span class=\"kw\">in</span> arr <span class=\"kw\">if</span> x < pivot]\n    mid  = [x <span class=\"kw\">for</span> x <span class=\"kw\">in</span> arr <span class=\"kw\">if</span> x == pivot]\n    right= [x <span class=\"kw\">for</span> x <span class=\"kw\">in</span> arr <span class=\"kw\">if</span> x > pivot]\n    <span class=\"kw\">return</span> quicksort(left) + mid + quicksort(right)</pre>",
      "平均O(n log n)，最坏O(n²)（已排序+选首元素做pivot）",
      "优化：随机选pivot / 三路快排（处理大量重复元素）/ 小数组切换插入排序",
      "原地版本用Lomuto/Hoare partition，不需要额外数组"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al06",
    "cat": "算法",
    "q": "双指针 — 三种模式",
    "bullets": [
      "①<span class=\"highlight\">对撞指针</span>：两端向中间靠拢 → 两数之和(有序)、接雨水",
      "②<span class=\"highlight\">快慢指针</span>：快指针每次2步慢指针1步 → 链表环检测、找中点",
      "③<span class=\"highlight\">同向双指针</span>：两个从左出发 → 滑动窗口、去重",
      "<pre><span class=\"cm\"># 接雨水 (LC42) — 对撞指针</span>\n<span class=\"kw\">def</span> <span class=\"fn\">trap</span>(height):\n    l, r = 0, len(height)-1\n    l_max = r_max = res = 0\n    <span class=\"kw\">while</span> l < r:\n        <span class=\"kw\">if</span> height[l] < height[r]:\n            l_max = max(l_max, height[l])\n            res += l_max - height[l]\n            l += 1\n        <span class=\"kw\">else</span>:\n            r_max = max(r_max, height[r])\n            res += r_max - height[r]\n            r -= 1\n    <span class=\"kw\">return</span> res</pre>"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al07",
    "cat": "算法",
    "q": "滑动窗口 — 模板与应用",
    "bullets": [
      "用于：连续子数组/子串的最大/最小/满足条件问题",
      "<pre><span class=\"cm\"># 无重复字符的最长子串 (LC3)</span>\n<span class=\"kw\">def</span> <span class=\"fn\">length_of_longest</span>(s):\n    seen = {}\n    left = res = 0\n    <span class=\"kw\">for</span> right, c <span class=\"kw\">in</span> enumerate(s):\n        <span class=\"kw\">if</span> c <span class=\"kw\">in</span> seen <span class=\"kw\">and</span> seen[c] >= left:\n            left = seen[c] + 1\n        seen[c] = right\n        res = max(res, right - left + 1)\n    <span class=\"kw\">return</span> res</pre>",
      "模式：右指针扩张 → 不满足条件时左指针收缩 → 维护窗口内状态",
      "时间O(n)——每个元素最多被左右指针各访问一次"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al08",
    "cat": "算法",
    "q": "BFS vs DFS — 选择与实现",
    "bullets": [
      "BFS：队列实现，<span class=\"highlight\">逐层扩展</span>。找最短路径用BFS",
      "DFS：栈/递归实现，<span class=\"highlight\">一条路走到底</span>。探索所有路径/检测环用DFS",
      "<pre><span class=\"cm\"># BFS 模板 — 图最短路径</span>\n<span class=\"kw\">def</span> <span class=\"fn\">bfs</span>(graph, start):\n    visited = {start}\n    q = deque([(start, 0)])  <span class=\"cm\"># (节点, 距离)</span>\n    <span class=\"kw\">while</span> q:\n        node, dist = q.popleft()\n        <span class=\"kw\">for</span> nei <span class=\"kw\">in</span> graph[node]:\n            <span class=\"kw\">if</span> nei <span class=\"kw\">not in</span> visited:\n                visited.add(nei)\n                q.append((nei, dist+1))</pre>",
      "BFS空间O(宽度)，DFS空间O(深度)。树的宽度可能比深度大得多"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al09",
    "cat": "算法",
    "q": "动态规划 — 思路与模板",
    "bullets": [
      "核心：将问题分解为重叠子问题 → 记忆化避免重复计算",
      "步骤：①定义状态 ②找状态转移方程 ③确定初始条件 ④确定遍历顺序",
      "<pre><span class=\"cm\"># 0-1背包</span>\n<span class=\"kw\">def</span> <span class=\"fn\">knapsack</span>(W, weights, values):\n    n = len(weights)\n    dp = [0] * (W + 1)\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n):\n        <span class=\"kw\">for</span> w <span class=\"kw\">in</span> range(W, weights[i]-1, -1):  <span class=\"cm\"># 逆序！</span>\n            dp[w] = max(dp[w], dp[w-weights[i]] + values[i])\n    <span class=\"kw\">return</span> dp[W]</pre>",
      "0-1背包逆序遍历保证每个物品只用一次；完全背包正序遍历",
      "经典题：爬楼梯/零钱兑换/最长公共子序列/编辑距离/最长递增子序列"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al10",
    "cat": "算法",
    "q": "LRU Cache — 哈希表 + 双向链表",
    "bullets": [
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> OrderedDict\n<span class=\"kw\">class</span> <span class=\"fn\">LRUCache</span>:\n    <span class=\"kw\">def</span> __init__(self, capacity):\n        self.cache = OrderedDict()\n        self.cap = capacity\n    <span class=\"kw\">def</span> <span class=\"fn\">get</span>(self, key):\n        <span class=\"kw\">if</span> key <span class=\"kw\">not in</span> self.cache: <span class=\"kw\">return</span> -1\n        self.cache.move_to_end(key)\n        <span class=\"kw\">return</span> self.cache[key]\n    <span class=\"kw\">def</span> <span class=\"fn\">put</span>(self, key, val):\n        <span class=\"kw\">if</span> key <span class=\"kw\">in</span> self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = val\n        <span class=\"kw\">if</span> len(self.cache) > self.cap:\n            self.cache.popitem(last=False)</pre>",
      "get/put 均 <span class=\"num\">O(1)</span>。OrderedDict底层就是哈希表+双向链表",
      "LC146高频题，面试可能要求不用OrderedDict手写双向链表"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al11",
    "cat": "算法",
    "q": "Trie树 — 前缀匹配",
    "bullets": [
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">TrieNode</span>:\n    <span class=\"kw\">def</span> __init__(self):\n        self.children = {}\n        self.is_end = False\n\n<span class=\"kw\">class</span> <span class=\"fn\">Trie</span>:\n    <span class=\"kw\">def</span> __init__(self): self.root = TrieNode()\n    <span class=\"kw\">def</span> <span class=\"fn\">insert</span>(self, word):\n        node = self.root\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> word:\n            <span class=\"kw\">if</span> c <span class=\"kw\">not in</span> node.children:\n                node.children[c] = TrieNode()\n            node = node.children[c]\n        node.is_end = True\n    <span class=\"kw\">def</span> <span class=\"fn\">starts_with</span>(self, prefix):\n        node = self.root\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> prefix:\n            <span class=\"kw\">if</span> c <span class=\"kw\">not in</span> node.children: <span class=\"kw\">return</span> False\n            node = node.children[c]\n        <span class=\"kw\">return</span> True</pre>",
      "插入/查找O(m)，m=字符串长度。空间换时间",
      "应用：自动补全、拼写检查、IP路由表、搜索引擎前缀匹配"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al12",
    "cat": "算法",
    "q": "图 — Dijkstra 最短路径",
    "bullets": [
      "<pre><span class=\"kw\">import</span> heapq\n<span class=\"kw\">def</span> <span class=\"fn\">dijkstra</span>(graph, start):\n    dist = {start: 0}\n    pq = [(0, start)]  <span class=\"cm\"># (距离, 节点)</span>\n    <span class=\"kw\">while</span> pq:\n        d, u = heapq.heappop(pq)\n        <span class=\"kw\">if</span> d > dist.get(u, float(<span class=\"str\">'inf'</span>)):\n            <span class=\"kw\">continue</span>\n        <span class=\"kw\">for</span> v, w <span class=\"kw\">in</span> graph[u]:  <span class=\"cm\"># (邻居, 边权)</span>\n            nd = d + w\n            <span class=\"kw\">if</span> nd < dist.get(v, float(<span class=\"str\">'inf'</span>)):\n                dist[v] = nd\n                heapq.heappush(pq, (nd, v))\n    <span class=\"kw\">return</span> dist</pre>",
      "时间 O((V+E) log V)（优先队列实现），<span class=\"highlight\">不能处理负权边</span>",
      "负权边用 Bellman-Ford O(VE)；全源最短路用 Floyd-Warshall O(V³)"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al13",
    "cat": "算法",
    "q": "并查集 (Union-Find)",
    "bullets": [
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">UnionFind</span>:\n    <span class=\"kw\">def</span> __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n    <span class=\"kw\">def</span> <span class=\"fn\">find</span>(self, x):  <span class=\"cm\"># 路径压缩</span>\n        <span class=\"kw\">if</span> self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        <span class=\"kw\">return</span> self.parent[x]\n    <span class=\"kw\">def</span> <span class=\"fn\">union</span>(self, x, y):  <span class=\"cm\"># 按秩合并</span>\n        px, py = self.find(x), self.find(y)\n        <span class=\"kw\">if</span> px == py: <span class=\"kw\">return</span>\n        <span class=\"kw\">if</span> self.rank[px] < self.rank[py]: px, py = py, px\n        self.parent[py] = px\n        <span class=\"kw\">if</span> self.rank[px] == self.rank[py]: self.rank[px] += 1</pre>",
      "路径压缩+按秩合并 → find/union 近似 <span class=\"num\">O(1)</span>（反Ackermann函数）",
      "应用：连通分量、朋友圈问题、冗余连接检测"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al14",
    "cat": "算法",
    "q": "回溯 — 子集/排列/组合模板",
    "bullets": [
      "回溯三件套模板：<span class=\"highlight\">做选择 → 递归 → 撤销选择</span>",
      "<pre><span class=\"cm\"># LC78 子集 — 回溯模板</span>\n<span class=\"kw\">def</span> <span class=\"fn\">subsets</span>(nums):\n    res = []\n    <span class=\"kw\">def</span> <span class=\"fn\">bt</span>(start, path):\n        res.append(path[:])  <span class=\"cm\"># 每个节点都是答案</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(start, len(nums)):\n            path.append(nums[i])   <span class=\"cm\"># 做选择</span>\n            bt(i + <span class=\"num\">1</span>, path)       <span class=\"cm\"># 递归(i+1避免重复)</span>\n            path.pop()             <span class=\"cm\"># 撤销选择</span>\n    bt(<span class=\"num\">0</span>, [])\n    <span class=\"kw\">return</span> res</pre>",
      "三种变体区别：<span class=\"highlight\">子集</span>→start index不回头；<span class=\"highlight\">排列</span>→visited数组允许回头；<span class=\"highlight\">组合</span>→start index + 剪枝",
      "时间复杂度：子集O(2ⁿ)，排列O(n!)，组合O(C(n,k))"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al15",
    "cat": "算法",
    "q": "N-Queens — 回溯经典",
    "bullets": [
      "LC51：在n×n棋盘放n个皇后，使其不能互相攻击（同行/同列/同对角线）",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">solveNQueens</span>(n):\n    res = []\n    cols = <span class=\"fn\">set</span>()        <span class=\"cm\"># 列冲突</span>\n    diag1 = <span class=\"fn\">set</span>()      <span class=\"cm\"># 主对角线 row-col</span>\n    diag2 = <span class=\"fn\">set</span>()      <span class=\"cm\"># 副对角线 row+col</span>\n    board = [[<span class=\"str\">\".\"</span>]*n <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(n)]\n\n    <span class=\"kw\">def</span> <span class=\"fn\">bt</span>(row):\n        <span class=\"kw\">if</span> row == n:\n            res.append([<span class=\"str\">\"\"</span>.join(r) <span class=\"kw\">for</span> r <span class=\"kw\">in</span> board])\n            <span class=\"kw\">return</span>\n        <span class=\"kw\">for</span> col <span class=\"kw\">in</span> range(n):\n            <span class=\"kw\">if</span> col <span class=\"kw\">in</span> cols <span class=\"kw\">or</span> row-col <span class=\"kw\">in</span> diag1 <span class=\"kw\">or</span> row+col <span class=\"kw\">in</span> diag2:\n                <span class=\"kw\">continue</span>\n            cols.add(col); diag1.add(row-col); diag2.add(row+col)\n            board[row][col] = <span class=\"str\">\"Q\"</span>\n            bt(row + <span class=\"num\">1</span>)\n            board[row][col] = <span class=\"str\">\".\"</span>\n            cols.remove(col); diag1.remove(row-col); diag2.remove(row+col)\n    bt(<span class=\"num\">0</span>)\n    <span class=\"kw\">return</span> res</pre>",
      "对角线判定：同一<span class=\"highlight\">主对角线row-col相同</span>，同一<span class=\"highlight\">副对角线row+col相同</span>，用set O(1)查重",
      "时间O(n!)：每行放1个，第1行n种，第2行≤n-1种…逐行递减"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al16",
    "cat": "算法",
    "q": "贪心 — 区间调度问题",
    "bullets": [
      "LC56 合并区间：排序后依次检查重叠，贪心合并",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">merge</span>(intervals):\n    intervals.sort(key=<span class=\"kw\">lambda</span> x: x[<span class=\"num\">0</span>])\n    merged = [intervals[<span class=\"num\">0</span>]]\n    <span class=\"kw\">for</span> s, e <span class=\"kw\">in</span> intervals[<span class=\"num\">1</span>:]:\n        <span class=\"kw\">if</span> s <= merged[-<span class=\"num\">1</span>][<span class=\"num\">1</span>]:  <span class=\"cm\"># 有重叠</span>\n            merged[-<span class=\"num\">1</span>][<span class=\"num\">1</span>] = max(merged[-<span class=\"num\">1</span>][<span class=\"num\">1</span>], e)\n        <span class=\"kw\">else</span>:\n            merged.append([s, e])\n    <span class=\"kw\">return</span> merged</pre>",
      "LC435 无重叠区间：按<span class=\"highlight\">结束时间</span>排序，贪心选结束最早的，count需要移除的",
      "核心洞察：贪心成立条件 = <span class=\"highlight\">局部最优 → 全局最优</span>。区间问题中，尽早结束 = 给后续留最多空间"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al17",
    "cat": "算法",
    "q": "贪心 — 跳跃游戏",
    "bullets": [
      "LC55：数组每个元素表示最大跳跃距离，判断能否到达最后一个位置",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">canJump</span>(nums):\n    farthest = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n        <span class=\"kw\">if</span> i > farthest:      <span class=\"cm\"># 当前位置不可达</span>\n            <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        farthest = max(farthest, i + nums[i])\n    <span class=\"kw\">return</span> <span class=\"kw\">True</span></pre>",
      "贪心思路：维护<span class=\"highlight\">当前能到达的最远位置</span>，遍历时不断更新",
      "时间O(n)，空间O(1)。变体LC45跳跃游戏II求最少步数，用BFS层次思想"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al18",
    "cat": "算法",
    "q": "二分查找变体 — 旋转排序数组",
    "bullets": [
      "LC33：在 [4,5,6,7,0,1,2] 中搜索 target，O(log n)",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">search</span>(nums, target):\n    lo, hi = <span class=\"num\">0</span>, len(nums) - <span class=\"num\">1</span>\n    <span class=\"kw\">while</span> lo <= hi:\n        mid = (lo + hi) // <span class=\"num\">2</span>\n        <span class=\"kw\">if</span> nums[mid] == target:\n            <span class=\"kw\">return</span> mid\n        <span class=\"kw\">if</span> nums[lo] <= nums[mid]:  <span class=\"cm\"># 左半有序</span>\n            <span class=\"kw\">if</span> nums[lo] <= target < nums[mid]:\n                hi = mid - <span class=\"num\">1</span>\n            <span class=\"kw\">else</span>:\n                lo = mid + <span class=\"num\">1</span>\n        <span class=\"kw\">else</span>:                      <span class=\"cm\"># 右半有序</span>\n            <span class=\"kw\">if</span> nums[mid] < target <= nums[hi]:\n                lo = mid + <span class=\"num\">1</span>\n            <span class=\"kw\">else</span>:\n                hi = mid - <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> -<span class=\"num\">1</span></pre>",
      "核心洞察：<span class=\"highlight\">旋转后必有一半是有序的</span>，判断target在有序的一半还是另一半",
      "注意 nums[lo] <= nums[mid] 用 <= 处理lo==mid的情况"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al19",
    "cat": "算法",
    "q": "二分查找变体 — 峰值元素",
    "bullets": [
      "LC162：数组相邻元素不等，找任意一个峰值(比左右邻居都大)的下标",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">findPeakElement</span>(nums):\n    lo, hi = <span class=\"num\">0</span>, len(nums) - <span class=\"num\">1</span>\n    <span class=\"kw\">while</span> lo < hi:\n        mid = (lo + hi) // <span class=\"num\">2</span>\n        <span class=\"kw\">if</span> nums[mid] < nums[mid + <span class=\"num\">1</span>]:  <span class=\"cm\"># 上坡→峰在右边</span>\n            lo = mid + <span class=\"num\">1</span>\n        <span class=\"kw\">else</span>:                          <span class=\"cm\"># 下坡→峰在左边(含mid)</span>\n            hi = mid\n    <span class=\"kw\">return</span> lo</pre>",
      "关键：只需找<span class=\"highlight\">任意一个</span>峰值，不需要全局最大。比较mid与mid+1决定爬坡方向",
      "时间O(log n)。用 lo < hi（不是<=），最终lo==hi即为答案"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al20",
    "cat": "算法",
    "q": "拓扑排序 — BFS (Kahn算法)",
    "bullets": [
      "LC207 课程表：判断是否能完成所有课程（有向图是否有环）",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict, deque\n\n<span class=\"kw\">def</span> <span class=\"fn\">canFinish</span>(numCourses, prerequisites):\n    graph = defaultdict(list)\n    indegree = [<span class=\"num\">0</span>] * numCourses\n    <span class=\"kw\">for</span> u, v <span class=\"kw\">in</span> prerequisites:\n        graph[v].append(u)\n        indegree[u] += <span class=\"num\">1</span>\n    q = deque(i <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(numCourses) <span class=\"kw\">if</span> indegree[i] == <span class=\"num\">0</span>)\n    count = <span class=\"num\">0</span>\n    <span class=\"kw\">while</span> q:\n        node = q.popleft()\n        count += <span class=\"num\">1</span>\n        <span class=\"kw\">for</span> nb <span class=\"kw\">in</span> graph[node]:\n            indegree[nb] -= <span class=\"num\">1</span>\n            <span class=\"kw\">if</span> indegree[nb] == <span class=\"num\">0</span>:\n                q.append(nb)\n    <span class=\"kw\">return</span> count == numCourses</pre>",
      "Kahn算法：<span class=\"highlight\">入度为0的节点入队 → 弹出并减少邻居入度 → 重复</span>",
      "时间O(V+E)，空间O(V+E)。应用：依赖解析、构建系统、课程安排"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al21",
    "cat": "算法",
    "q": "最小生成树 — Kruskal算法",
    "bullets": [
      "思路：按边权<span class=\"highlight\">从小到大排序</span>，逐条加入，用<span class=\"highlight\">并查集</span>检查是否成环",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">UnionFind</span>:\n    <span class=\"kw\">def</span> __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [<span class=\"num\">0</span>] * n\n    <span class=\"kw\">def</span> <span class=\"fn\">find</span>(self, x):\n        <span class=\"kw\">if</span> self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])  <span class=\"cm\"># 路径压缩</span>\n        <span class=\"kw\">return</span> self.parent[x]\n    <span class=\"kw\">def</span> <span class=\"fn\">union</span>(self, x, y):\n        px, py = self.find(x), self.find(y)\n        <span class=\"kw\">if</span> px == py: <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        <span class=\"kw\">if</span> self.rank[px] < self.rank[py]: px, py = py, px\n        self.parent[py] = px\n        <span class=\"kw\">if</span> self.rank[px] == self.rank[py]: self.rank[px] += <span class=\"num\">1</span>\n        <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n\n<span class=\"kw\">def</span> <span class=\"fn\">kruskal</span>(n, edges):\n    edges.sort(key=<span class=\"kw\">lambda</span> x: x[<span class=\"num\">2</span>])  <span class=\"cm\"># (u, v, w)</span>\n    uf = UnionFind(n)\n    mst_cost = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> u, v, w <span class=\"kw\">in</span> edges:\n        <span class=\"kw\">if</span> uf.union(u, v):\n            mst_cost += w\n    <span class=\"kw\">return</span> mst_cost</pre>",
      "时间O(E log E)（排序主导），并查集操作近似O(1)（Ackermann逆函数）",
      "Kruskal适合<span class=\"highlight\">稀疏图</span>（边少），Prim适合<span class=\"highlight\">稠密图</span>（用邻接矩阵 O(V²)）"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al22",
    "cat": "算法",
    "q": "图的环检测 — DFS三色标记",
    "bullets": [
      "有向图环检测：<span class=\"highlight\">白(0)未访问 / 灰(1)正在访问 / 黑(2)已完成</span>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">has_cycle</span>(graph, n):\n    color = [<span class=\"num\">0</span>] * n  <span class=\"cm\"># 0=白 1=灰 2=黑</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">dfs</span>(u):\n        color[u] = <span class=\"num\">1</span>  <span class=\"cm\"># 标记为灰色(进入)</span>\n        <span class=\"kw\">for</span> v <span class=\"kw\">in</span> graph[u]:\n            <span class=\"kw\">if</span> color[v] == <span class=\"num\">1</span>:  <span class=\"cm\"># 遇到灰色 → 有环!</span>\n                <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n            <span class=\"kw\">if</span> color[v] == <span class=\"num\">0</span> <span class=\"kw\">and</span> dfs(v):\n                <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n        color[u] = <span class=\"num\">2</span>  <span class=\"cm\"># 标记为黑色(完成)</span>\n        <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n\n    <span class=\"kw\">return</span> any(color[i] == <span class=\"num\">0</span> <span class=\"kw\">and</span> dfs(i) <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n))</pre>",
      "核心：DFS过程中再次遇到<span class=\"highlight\">灰色节点</span>说明存在回边（环）",
      "无向图环检测更简单：DFS时遇到已访问且不是parent的节点即有环，不需要三色"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al23",
    "cat": "算法",
    "q": "DP — 零钱兑换 (完全背包)",
    "bullets": [
      "LC322：用给定面额硬币凑出amount的<span class=\"highlight\">最少硬币数</span>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">coinChange</span>(coins, amount):\n    dp = [float(<span class=\"str\">\"inf\"</span>)] * (amount + <span class=\"num\">1</span>)\n    dp[<span class=\"num\">0</span>] = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> coin <span class=\"kw\">in</span> coins:\n        <span class=\"kw\">for</span> x <span class=\"kw\">in</span> range(coin, amount + <span class=\"num\">1</span>):  <span class=\"cm\"># 正向遍历!</span>\n            dp[x] = min(dp[x], dp[x - coin] + <span class=\"num\">1</span>)\n    <span class=\"kw\">return</span> dp[amount] <span class=\"kw\">if</span> dp[amount] != float(<span class=\"str\">\"inf\"</span>) <span class=\"kw\">else</span> -<span class=\"num\">1</span></pre>",
      "状态：dp[i] = 凑出金额i所需最少硬币。转移：dp[i] = min(dp[i], dp[i-coin]+1)",
      "与0-1背包的区别：<span class=\"highlight\">完全背包正向遍历</span>（每个硬币可重复用），<span class=\"highlight\">0-1背包逆向遍历</span>（每个物品只能用一次）"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al24",
    "cat": "算法",
    "q": "DP — 最长递增子序列 (LIS)",
    "bullets": [
      "LC300：找数组中最长严格递增子序列的长度",
      "O(n²) DP解法：dp[i] = 以nums[i]结尾的LIS长度\n<pre><span class=\"kw\">def</span> <span class=\"fn\">lengthOfLIS</span>(nums):\n    dp = [<span class=\"num\">1</span>] * len(nums)\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n        <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(i):\n            <span class=\"kw\">if</span> nums[j] < nums[i]:\n                dp[i] = max(dp[i], dp[j] + <span class=\"num\">1</span>)\n    <span class=\"kw\">return</span> max(dp)</pre>",
      "O(n log n) 贪心+二分优化：维护一个尽量小的tails数组\n<pre><span class=\"kw\">import</span> bisect\n\n<span class=\"kw\">def</span> <span class=\"fn\">lengthOfLIS</span>(nums):\n    tails = []\n    <span class=\"kw\">for</span> x <span class=\"kw\">in</span> nums:\n        pos = bisect.bisect_left(tails, x)\n        <span class=\"kw\">if</span> pos == len(tails):\n            tails.append(x)     <span class=\"cm\"># x比所有都大，延长</span>\n        <span class=\"kw\">else</span>:\n            tails[pos] = x      <span class=\"cm\"># 替换，保持tails尽量小</span>\n    <span class=\"kw\">return</span> len(tails)</pre>",
      "bisect优化的核心：<span class=\"highlight\">tails[i]</span> = 长度为i+1的递增子序列的最小末尾元素，tails始终有序，用二分查找插入位置"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al25",
    "cat": "算法",
    "q": "DP — 编辑距离",
    "bullets": [
      "LC72 Edit Distance：将word1转换为word2的<span class=\"highlight\">最少操作次数</span>（插入/删除/替换）",
      "2D DP：dp[i][j] = word1[:i] 与 word2[:j] 的编辑距离",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">minDistance</span>(word1, word2):\n    m, n = len(word1), len(word2)\n    dp = [[<span class=\"num\">0</span>] * (n+1) <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(m+1)]\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(m+1):\n        dp[i][<span class=\"num\">0</span>] = i  <span class=\"cm\"># 删除i个字符</span>\n    <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(n+1):\n        dp[<span class=\"num\">0</span>][j] = j  <span class=\"cm\"># 插入j个字符</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(<span class=\"num\">1</span>, m+1):\n        <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(<span class=\"num\">1</span>, n+1):\n            <span class=\"kw\">if</span> word1[i-1] == word2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            <span class=\"kw\">else</span>:\n                dp[i][j] = <span class=\"num\">1</span> + min(\n                    dp[i-1][j],   <span class=\"cm\"># 删除</span>\n                    dp[i][j-1],   <span class=\"cm\"># 插入</span>\n                    dp[i-1][j-1]  <span class=\"cm\"># 替换</span>\n                )\n    <span class=\"kw\">return</span> dp[m][n]</pre>",
      "三种操作对应：dp[i-1][j]+1(删)、dp[i][j-1]+1(增)、dp[i-1][j-1]+1(替换)",
      "时间O(mn)，空间O(mn)。可用滚动数组优化到O(min(m,n))"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al26",
    "cat": "算法",
    "q": "DP — 打家劫舍",
    "bullets": [
      "LC198 House Robber：相邻房屋不能同时偷，求<span class=\"highlight\">最大金额</span>",
      "状态转移：dp[i] = max(dp[i-1], dp[i-2] + nums[i]) — 偷或不偷当前房",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">rob</span>(nums):\n    <span class=\"kw\">if not</span> nums:\n        <span class=\"kw\">return</span> <span class=\"num\">0</span>\n    prev2, prev1 = <span class=\"num\">0</span>, <span class=\"num\">0</span>  <span class=\"cm\"># 空间优化到O(1)</span>\n    <span class=\"kw\">for</span> num <span class=\"kw\">in</span> nums:\n        curr = max(prev1, prev2 + num)\n        prev2 = prev1\n        prev1 = curr\n    <span class=\"kw\">return</span> prev1</pre>",
      "变体 LC213 House Robber II（环形）：拆成两次线性 DP，分别<span class=\"highlight\">排除第一间</span>和<span class=\"highlight\">排除最后一间</span>，取最大值",
      "空间从O(n)优化到O(1)：只需记住前两个状态"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al27",
    "cat": "算法",
    "q": "树 — 二叉树最大路径和",
    "bullets": [
      "LC124 Binary Tree Maximum Path Sum：路径可以经过任意节点（不一定过根），求<span class=\"highlight\">最大路径和</span>",
      "DFS 返回从当前节点向下的最大单侧增益；同时用全局变量记录经过当前节点的最大路径和",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">maxPathSum</span>(root):\n    max_sum = float(<span class=\"str\">'-inf'</span>)\n\n    <span class=\"kw\">def</span> <span class=\"fn\">dfs</span>(node):\n        <span class=\"kw\">nonlocal</span> max_sum\n        <span class=\"kw\">if not</span> node:\n            <span class=\"kw\">return</span> <span class=\"num\">0</span>\n        left = max(dfs(node.left), <span class=\"num\">0</span>)   <span class=\"cm\"># 负数不取</span>\n        right = max(dfs(node.right), <span class=\"num\">0</span>)\n        <span class=\"cm\"># 经过当前节点的完整路径</span>\n        max_sum = max(max_sum, left + node.val + right)\n        <span class=\"cm\"># 返回单侧最大增益</span>\n        <span class=\"kw\">return</span> node.val + max(left, right)\n\n    dfs(root)\n    <span class=\"kw\">return</span> max_sum</pre>",
      "关键：路径可以 left→root→right（更新全局最大值），但<span class=\"highlight\">返回值只能选一侧</span>（否则不构成路径）",
      "时间O(n)，空间O(h)。注意负数节点的处理：max(gain, 0)"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al28",
    "cat": "算法",
    "q": "树 — 最近公共祖先 (LCA)",
    "bullets": [
      "LC236 Lowest Common Ancestor：在二叉树中找 p 和 q 的<span class=\"highlight\">最低公共祖先</span>",
      "递归思路：若 root 是 p 或 q，直接返回；否则在左右子树分别找",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">lowestCommonAncestor</span>(root, p, q):\n    <span class=\"kw\">if not</span> root <span class=\"kw\">or</span> root == p <span class=\"kw\">or</span> root == q:\n        <span class=\"kw\">return</span> root\n    left = lowestCommonAncestor(root.left, p, q)\n    right = lowestCommonAncestor(root.right, p, q)\n    <span class=\"kw\">if</span> left <span class=\"kw\">and</span> right:\n        <span class=\"kw\">return</span> root     <span class=\"cm\"># p和q分布在两侧，root是LCA</span>\n    <span class=\"kw\">return</span> left <span class=\"kw\">if</span> left <span class=\"kw\">else</span> right</pre>",
      "三种情况：①p、q在两侧→root是LCA ②都在左子树→左子树结果即LCA ③都在右子树→同理",
      "时间O(n)，空间O(h)。BST版本(LC235)可利用大小关系剪枝到O(h)"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al29",
    "cat": "算法",
    "q": "树 — 序列化与反序列化",
    "bullets": [
      "LC297 Serialize and Deserialize Binary Tree：将二叉树转为字符串再还原",
      "BFS层序遍历：用队列逐层处理，None节点标记为<span class=\"str\">\"null\"</span>",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\n\n<span class=\"kw\">def</span> <span class=\"fn\">serialize</span>(root):\n    <span class=\"kw\">if not</span> root:\n        <span class=\"kw\">return</span> <span class=\"str\">\"[]\"</span>\n    q = deque([root])\n    res = []\n    <span class=\"kw\">while</span> q:\n        node = q.popleft()\n        <span class=\"kw\">if</span> node:\n            res.append(str(node.val))\n            q.append(node.left)\n            q.append(node.right)\n        <span class=\"kw\">else</span>:\n            res.append(<span class=\"str\">\"null\"</span>)\n    <span class=\"kw\">return</span> <span class=\"str\">\"[\"</span> + <span class=\"str\">\",\"</span>.join(res) + <span class=\"str\">\"]\"</span></pre>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">deserialize</span>(data):\n    <span class=\"kw\">if</span> data == <span class=\"str\">\"[]\"</span>:\n        <span class=\"kw\">return</span> <span class=\"kw\">None</span>\n    vals = data[<span class=\"num\">1</span>:-<span class=\"num\">1</span>].split(<span class=\"str\">\",\"</span>)\n    root = TreeNode(int(vals[<span class=\"num\">0</span>]))\n    q = deque([root])\n    i = <span class=\"num\">1</span>\n    <span class=\"kw\">while</span> q:\n        node = q.popleft()\n        <span class=\"kw\">if</span> vals[i] != <span class=\"str\">\"null\"</span>:\n            node.left = TreeNode(int(vals[i]))\n            q.append(node.left)\n        i += <span class=\"num\">1</span>\n        <span class=\"kw\">if</span> vals[i] != <span class=\"str\">\"null\"</span>:\n            node.right = TreeNode(int(vals[i]))\n            q.append(node.right)\n        i += <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> root</pre>",
      "为什么BFS：层序遍历直觉清晰，<span class=\"highlight\">null节点位置对应子节点</span>，反序列化时按序还原即可"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al30",
    "cat": "算法",
    "q": "位运算 — 常用技巧",
    "bullets": [
      "LC136 Single Number：<span class=\"highlight\">XOR</span>所有数，成对消除 → a ^ a = 0, a ^ 0 = a",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">singleNumber</span>(nums):\n    res = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> n <span class=\"kw\">in</span> nums:\n        res ^= n\n    <span class=\"kw\">return</span> res</pre>",
      "判断2的幂：<span class=\"highlight\">n & (n-1) == 0</span>（且n>0）。原理：2的幂只有一个1位，减1后全变1",
      "计算1的个数（Hamming Weight）：循环执行 n &= (n-1) 并计数，每次<span class=\"highlight\">消除最低位的1</span>",
      "<pre><span class=\"cm\"># 获取/设置/清除第i位</span>\nget_bit  = (n >> i) & <span class=\"num\">1</span>      <span class=\"cm\"># 取第i位</span>\nset_bit  = n | (<span class=\"num\">1</span> << i)     <span class=\"cm\"># 第i位置1</span>\nclear_bit= n & ~(<span class=\"num\">1</span> << i)    <span class=\"cm\"># 第i位清0</span>\ntoggle   = n ^ (<span class=\"num\">1</span> << i)     <span class=\"cm\"># 第i位取反</span></pre>"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "al31",
    "cat": "算法",
    "q": "字符串 — KMP 模式匹配",
    "bullets": [
      "KMP 算法：利用<span class=\"highlight\">前缀函数(failure function)</span>避免重复比较，O(n+m) vs 暴力O(nm)",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">build_lps</span>(pattern):\n    m = len(pattern)\n    lps = [<span class=\"num\">0</span>] * m  <span class=\"cm\"># longest proper prefix which is also suffix</span>\n    length = <span class=\"num\">0</span>\n    i = <span class=\"num\">1</span>\n    <span class=\"kw\">while</span> i < m:\n        <span class=\"kw\">if</span> pattern[i] == pattern[length]:\n            length += <span class=\"num\">1</span>\n            lps[i] = length\n            i += <span class=\"num\">1</span>\n        <span class=\"kw\">elif</span> length != <span class=\"num\">0</span>:\n            length = lps[length - <span class=\"num\">1</span>]  <span class=\"cm\"># 回退，不增加i</span>\n        <span class=\"kw\">else</span>:\n            lps[i] = <span class=\"num\">0</span>\n            i += <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> lps</pre>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">kmp_search</span>(text, pattern):\n    lps = build_lps(pattern)\n    i = j = <span class=\"num\">0</span>  <span class=\"cm\"># i→text, j→pattern</span>\n    <span class=\"kw\">while</span> i < len(text):\n        <span class=\"kw\">if</span> text[i] == pattern[j]:\n            i += <span class=\"num\">1</span>\n            j += <span class=\"num\">1</span>\n        <span class=\"kw\">if</span> j == len(pattern):\n            <span class=\"kw\">return</span> i - j  <span class=\"cm\"># 找到匹配</span>\n        <span class=\"kw\">elif</span> i < len(text) <span class=\"kw\">and</span> text[i] != pattern[j]:\n            <span class=\"kw\">if</span> j != <span class=\"num\">0</span>:\n                j = lps[j - <span class=\"num\">1</span>]  <span class=\"cm\"># 利用前缀表回退</span>\n            <span class=\"kw\">else</span>:\n                i += <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> -<span class=\"num\">1</span></pre>",
      "核心思想：前缀表告诉我们不匹配时<span class=\"highlight\">从哪里重新开始匹配</span>，避免回退text指针",
      "面试中如果只需 O(nm) 可用 Python <code>str.find()</code>，但要能讲清 KMP 原理"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al32",
    "cat": "算法",
    "q": "字符串 — 最长回文子串",
    "bullets": [
      "LC5 Longest Palindromic Substring：找字符串中的<span class=\"highlight\">最长回文子串</span>",
      "中心扩展法：以每个字符(奇数长度)和每对相邻字符(偶数长度)为中心向两边扩展",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">longestPalindrome</span>(s):\n    <span class=\"kw\">def</span> <span class=\"fn\">expand</span>(l, r):\n        <span class=\"kw\">while</span> l >= <span class=\"num\">0</span> <span class=\"kw\">and</span> r < len(s) <span class=\"kw\">and</span> s[l] == s[r]:\n            l -= <span class=\"num\">1</span>\n            r += <span class=\"num\">1</span>\n        <span class=\"kw\">return</span> s[l+<span class=\"num\">1</span>:r]  <span class=\"cm\"># 回退一步</span>\n\n    res = <span class=\"str\">\"\"</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(s)):\n        odd = expand(i, i)       <span class=\"cm\"># 奇数长度</span>\n        even = expand(i, i+<span class=\"num\">1</span>)    <span class=\"cm\"># 偶数长度</span>\n        res = max(res, odd, even, key=len)\n    <span class=\"kw\">return</span> res</pre>",
      "时间O(n²)，空间O(1)。比DP解法更直观且空间更优",
      "进阶：Manacher算法可达O(n)，但面试中<span class=\"highlight\">极少要求实现</span>，知道存在即可"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al33",
    "cat": "算法",
    "q": "单调栈 — 下一个更大元素",
    "bullets": [
      "LC496/LC739 模式：对每个元素找<span class=\"highlight\">右边第一个比它大的元素</span>",
      "单调栈：栈中存索引，保持栈内对应值<span class=\"highlight\">单调递减</span>；遇到更大的元素则弹出并记录结果",
      "<pre><span class=\"cm\"># LC739 每日温度</span>\n<span class=\"kw\">def</span> <span class=\"fn\">dailyTemperatures</span>(temperatures):\n    n = len(temperatures)\n    res = [<span class=\"num\">0</span>] * n\n    stack = []  <span class=\"cm\"># 存索引，栈内温度单调递减</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n):\n        <span class=\"kw\">while</span> stack <span class=\"kw\">and</span> temperatures[i] > temperatures[stack[-<span class=\"num\">1</span>]]:\n            j = stack.pop()\n            res[j] = i - j  <span class=\"cm\"># 等待天数</span>\n        stack.append(i)\n    <span class=\"kw\">return</span> res</pre>",
      "时间O(n)：每个元素<span class=\"highlight\">最多入栈一次出栈一次</span>。空间O(n)",
      "变体：下一个更小元素 → 维护单调递增栈；循环数组 → 遍历两遍(i % n)"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al34",
    "cat": "算法",
    "q": "前缀和 — 子数组和问题",
    "bullets": [
      "LC560 Subarray Sum Equals K：找和为k的<span class=\"highlight\">连续子数组个数</span>",
      "核心思想：若 prefix[j] - prefix[i] == k，则子数组 (i, j] 的和为 k",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\n\n<span class=\"kw\">def</span> <span class=\"fn\">subarraySum</span>(nums, k):\n    count = <span class=\"num\">0</span>\n    prefix = <span class=\"num\">0</span>\n    seen = defaultdict(int)\n    seen[<span class=\"num\">0</span>] = <span class=\"num\">1</span>  <span class=\"cm\"># 前缀和为0出现1次（空前缀）</span>\n    <span class=\"kw\">for</span> num <span class=\"kw\">in</span> nums:\n        prefix += num\n        <span class=\"cm\"># 查找是否存在前缀和 = prefix - k</span>\n        count += seen[prefix - k]\n        seen[prefix] += <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> count</pre>",
      "关键：用<span class=\"highlight\">哈希表记录每个前缀和出现的次数</span>，一次遍历即可",
      "时间O(n)，空间O(n)。注意初始化 seen[0]=1 处理从下标0开始的子数组"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al35",
    "cat": "算法",
    "q": "图 — 最短路径算法总结",
    "bullets": [
      "四种常见最短路径算法的<span class=\"highlight\">适用场景与复杂度对比</span>：",
      "• <span class=\"highlight\">BFS</span>（无权图）：O(V+E)，最简单，队列实现，边权全为1时使用",
      "• <span class=\"highlight\">Dijkstra</span>（非负权重）：O((V+E)log V) 用最小堆。贪心思想，不能处理负权边",
      "• <span class=\"highlight\">Bellman-Ford</span>（可有负权）：O(VE)，松弛V-1轮。可检测负环。SPFA是其队列优化版本，平均更快但最坏仍为O(VE)",
      "• <span class=\"highlight\">Floyd-Warshall</span>（全源最短路）：O(V³)，三重循环DP。适合小图求所有点对间距离",
      "选择策略：无权→BFS | 正权单源→Dijkstra | 有负权→Bellman-Ford | 全源→Floyd",
      "面试常考：Dijkstra（LC743 Network Delay Time）+ BFS最短路（LC127 Word Ladder）"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds01",
    "cat": "数据结构",
    "q": "数组 vs 链表 — 核心区别与适用场景",
    "bullets": [
      "数组：连续内存，随机访问O(1)，插入删除O(n)（需要移动元素）",
      "链表：离散内存，随机访问O(n)，插入删除O(1)（改指针即可）",
      "数组适合：频繁查找、已知大小、缓存友好（CPU预取连续内存）",
      "链表适合：频繁插入删除、大小动态变化、不需要随机访问",
      "Python list 底层是<span class=\"highlight\">动态数组</span>（非链表），append均摊O(1)"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "ds02",
    "cat": "数据结构",
    "q": "栈 (Stack) — LIFO 原理与应用",
    "bullets": [
      "后进先出(Last In First Out)，只能操作栈顶：push O(1) / pop O(1) / peek O(1)",
      "<pre><span class=\"cm\"># Python 用 list 实现栈</span>\nstack = []\nstack.append(1)  <span class=\"cm\"># push</span>\nstack.append(2)\ntop = stack.pop()  <span class=\"cm\"># pop → 2</span>\npeek = stack[-1]   <span class=\"cm\"># peek → 1</span></pre>",
      "经典应用：括号匹配 / 函数调用栈 / 浏览器前进后退 / 表达式求值",
      "面试高频：有效括号(LC20)、最小栈(LC155)、每日温度(LC739)"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "ds03",
    "cat": "数据结构",
    "q": "队列 (Queue) — FIFO 原理与应用",
    "bullets": [
      "先进先出(First In First Out)：enqueue O(1) / dequeue O(1)",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\nq = deque()\nq.append(1)     <span class=\"cm\"># enqueue</span>\nq.append(2)\nfront = q.popleft()  <span class=\"cm\"># dequeue → 1</span></pre>",
      "双端队列 deque：两端都能O(1)操作，比list.pop(0)快（list是O(n)）",
      "经典应用：BFS / 任务调度 / 消息队列 / 滑动窗口最大值"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "ds04",
    "cat": "数据结构",
    "q": "哈希表 (HashMap) — 原理与冲突解决",
    "bullets": [
      "核心：key → hash函数 → 数组索引 → 存value。查找/插入/删除均摊 <span class=\"num\">O(1)</span>",
      "冲突解决：①链地址法（每个桶是链表/红黑树）②开放地址法（线性/二次探测）",
      "Python dict 用开放地址法，负载因子>2/3时自动扩容（×2）",
      "<pre><span class=\"cm\"># Two Sum — 哈希表经典应用</span>\n<span class=\"kw\">def</span> <span class=\"fn\">two_sum</span>(nums, target):\n    seen = {}\n    <span class=\"kw\">for</span> i, n <span class=\"kw\">in</span> enumerate(nums):\n        <span class=\"kw\">if</span> target - n <span class=\"kw\">in</span> seen:\n            <span class=\"kw\">return</span> [seen[target-n], i]\n        seen[n] = i</pre>",
      "时间O(n)空间O(n)，用空间换时间的典型思路"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "ds05",
    "cat": "数据结构",
    "q": "复杂度分析 — O(1) 到 O(n!) 速查",
    "bullets": [
      "<span class=\"num\">O(1)</span>：哈希表查找、数组索引访问、栈push/pop",
      "<span class=\"num\">O(log n)</span>：二分查找、平衡BST操作、堆操作",
      "<span class=\"num\">O(n)</span>：遍历数组、线性搜索、链表操作",
      "<span class=\"num\">O(n log n)</span>：快排/归并排序（最优比较排序）",
      "<span class=\"num\">O(n²)</span>：冒泡/选择/插入排序、暴力两层循环",
      "<span class=\"num\">O(2ⁿ)</span>：子集枚举、递归斐波那契 | <span class=\"num\">O(n!)</span>：全排列"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "ds06",
    "cat": "数据结构",
    "q": "二叉树遍历 — 前序/中序/后序/层序",
    "bullets": [
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">inorder</span>(root):  <span class=\"cm\"># 中序：左-根-右 → BST有序</span>\n    <span class=\"kw\">if not</span> root: <span class=\"kw\">return</span> []\n    <span class=\"kw\">return</span> inorder(root.left)+[root.val]+inorder(root.right)\n\n<span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\n<span class=\"kw\">def</span> <span class=\"fn\">level_order</span>(root):  <span class=\"cm\"># BFS层序</span>\n    <span class=\"kw\">if not</span> root: <span class=\"kw\">return</span> []\n    q, res = deque([root]), []\n    <span class=\"kw\">while</span> q:\n        level = []\n        <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            <span class=\"kw\">if</span> node.left: q.append(node.left)\n            <span class=\"kw\">if</span> node.right: q.append(node.right)\n        res.append(level)\n    <span class=\"kw\">return</span> res</pre>",
      "前序(根左右)/中序(左根右)/后序(左右根) → 递归或用栈迭代",
      "层序 = BFS = 队列"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds07",
    "cat": "数据结构",
    "q": "堆 / 优先队列",
    "bullets": [
      "最小堆：父节点 ≤ 子节点。插入O(log n)，取最小O(1)，删除最小O(log n)",
      "<pre><span class=\"kw\">import</span> heapq\nnums = [3,1,4,1,5,9]\nheapq.heapify(nums)       <span class=\"cm\"># O(n) 建堆</span>\nheapq.heappush(nums, 2)   <span class=\"cm\"># O(log n)</span>\nmin_val = heapq.heappop(nums)  <span class=\"cm\"># O(log n) → 1</span>\n<span class=\"cm\"># Top-K：nlargest / nsmallest</span>\ntop3 = heapq.nlargest(3, nums)</pre>",
      "Python heapq 是<span class=\"highlight\">最小堆</span>，要最大堆可以取负或用 nlargest",
      "经典应用：Top-K问题 / 合并K个有序链表 / 中位数流"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds08",
    "cat": "数据结构",
    "q": "图的表示 — 邻接表 vs 邻接矩阵",
    "bullets": [
      "<span class=\"highlight\">邻接表</span>：dict of lists，空间O(V+E)，适合<span class=\"highlight\">稀疏图</span>（大多数面试题用这个）",
      "<span class=\"highlight\">邻接矩阵</span>：2D数组，空间O(V²)，适合<span class=\"highlight\">稠密图</span>，O(1)判断边是否存在",
      "<pre><span class=\"cm\"># 邻接表（最常用）</span>\n<span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\ngraph = defaultdict(list)\ngraph[<span class=\"num\">0</span>].append(<span class=\"num\">1</span>)  <span class=\"cm\"># 0 → 1</span>\ngraph[<span class=\"num\">0</span>].append(<span class=\"num\">2</span>)  <span class=\"cm\"># 0 → 2</span>\ngraph[<span class=\"num\">1</span>].append(<span class=\"num\">2</span>)  <span class=\"cm\"># 1 → 2</span>\n\n<span class=\"cm\"># 邻接矩阵</span>\nV = <span class=\"num\">3</span>\nmatrix = [[<span class=\"num\">0</span>]*V <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(V)]\nmatrix[<span class=\"num\">0</span>][<span class=\"num\">1</span>] = <span class=\"num\">1</span>  <span class=\"cm\"># 0 → 1</span>\nmatrix[<span class=\"num\">0</span>][<span class=\"num\">2</span>] = <span class=\"num\">1</span>  <span class=\"cm\"># 0 → 2</span>\nmatrix[<span class=\"num\">1</span>][<span class=\"num\">2</span>] = <span class=\"num\">1</span>  <span class=\"cm\"># 1 → 2</span></pre>",
      "选择依据：E ≪ V² 用邻接表（省空间），E ≈ V² 用邻接矩阵（快速查边）",
      "面试中绝大多数图题使用邻接表，矩阵多见于Floyd最短路、图的连通性等特定问题"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds09",
    "cat": "数据结构",
    "q": "平衡BST — AVL树 vs 红黑树",
    "bullets": [
      "普通BST在最坏情况下退化为链表，所有操作变为<span class=\"num\">O(n)</span>（如顺序插入1,2,3,4,5）",
      "<span class=\"highlight\">AVL树</span>：严格平衡（左右子树高度差≤1），查找最快，但插入/删除时旋转次数较多",
      "<span class=\"highlight\">红黑树</span>：放松平衡条件（通过红黑着色规则），旋转更少，插入/删除性能更好 → Java TreeMap、C++ std::map 底层实现",
      "两者查找/插入/删除均为 <span class=\"num\">O(log n)</span>，区别在于常数因子：AVL查找略快（更矮），红黑树修改略快（旋转少）",
      "Python 没有内置平衡BST；可用第三方库 <span class=\"highlight\">sortedcontainers.SortedList</span>，底层是B-tree变体，实测性能优秀"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds10",
    "cat": "数据结构",
    "q": "线段树 — 区间查询与更新",
    "bullets": [
      "解决问题：区间求和/最值 + 单点更新，每次操作 <span class=\"num\">O(log n)</span>（暴力需要O(n)）",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">SegTree</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, nums):\n        self.n = len(nums)\n        self.tree = [<span class=\"num\">0</span>] * (<span class=\"num\">2</span> * self.n)\n        <span class=\"cm\"># 叶子节点放在 tree[n..2n-1]</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(self.n):\n            self.tree[self.n + i] = nums[i]\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(self.n - <span class=\"num\">1</span>, <span class=\"num\">0</span>, -<span class=\"num\">1</span>):\n            self.tree[i] = self.tree[<span class=\"num\">2</span>*i] + self.tree[<span class=\"num\">2</span>*i+<span class=\"num\">1</span>]</pre>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">update</span>(self, i, val):  <span class=\"cm\"># 单点更新</span>\n    i += self.n\n    self.tree[i] = val\n    <span class=\"kw\">while</span> i > <span class=\"num\">1</span>:\n        i //= <span class=\"num\">2</span>\n        self.tree[i] = self.tree[<span class=\"num\">2</span>*i] + self.tree[<span class=\"num\">2</span>*i+<span class=\"num\">1</span>]\n\n<span class=\"kw\">def</span> <span class=\"fn\">query</span>(self, l, r):  <span class=\"cm\"># 区间和 [l, r)</span>\n    res = <span class=\"num\">0</span>\n    l += self.n; r += self.n\n    <span class=\"kw\">while</span> l < r:\n        <span class=\"kw\">if</span> l % <span class=\"num\">2</span> == <span class=\"num\">1</span>: res += self.tree[l]; l += <span class=\"num\">1</span>\n        <span class=\"kw\">if</span> r % <span class=\"num\">2</span> == <span class=\"num\">1</span>: r -= <span class=\"num\">1</span>; res += self.tree[r]\n        l //= <span class=\"num\">2</span>; r //= <span class=\"num\">2</span>\n    <span class=\"kw\">return</span> res</pre>",
      "应用：区间最值/求和（LC 307）、区间调度、数据流统计",
      "<span class=\"highlight\">懒传播(Lazy Propagation)</span>：支持区间批量更新，将更新延迟到查询时下推，区间更新也能O(log n)"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds11",
    "cat": "数据结构",
    "q": "树状数组 (BIT/Fenwick Tree)",
    "bullets": [
      "比线段树更简洁，专门解决<span class=\"highlight\">前缀和 + 单点更新</span>问题，代码量仅约10行",
      "核心：<span class=\"highlight\">lowbit = i & (-i)</span>，利用二进制最低位1来划分区间",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">BIT</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, n):\n        self.n = n\n        self.tree = [<span class=\"num\">0</span>] * (n + <span class=\"num\">1</span>)  <span class=\"cm\"># 1-indexed</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">update</span>(self, i, delta):  <span class=\"cm\"># 单点加 delta</span>\n        <span class=\"kw\">while</span> i <= self.n:\n            self.tree[i] += delta\n            i += i & (-i)  <span class=\"cm\"># lowbit</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">prefix_sum</span>(self, i):  <span class=\"cm\"># 前缀和 [1..i]</span>\n        s = <span class=\"num\">0</span>\n        <span class=\"kw\">while</span> i > <span class=\"num\">0</span>:\n            s += self.tree[i]\n            i -= i & (-i)\n        <span class=\"kw\">return</span> s\n\n    <span class=\"kw\">def</span> <span class=\"fn\">range_sum</span>(self, l, r):  <span class=\"cm\"># 区间和 [l..r]</span>\n        <span class=\"kw\">return</span> self.prefix_sum(r) - self.prefix_sum(l - <span class=\"num\">1</span>)</pre>",
      "更新 <span class=\"num\">O(log n)</span>，查询 <span class=\"num\">O(log n)</span>，空间 <span class=\"num\">O(n)</span>",
      "BIT vs 线段树：BIT仅支持前缀类操作（前缀和/前缀最值），线段树支持任意区间操作 → 能用BIT就用BIT（更简洁更快）"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds12",
    "cat": "数据结构",
    "q": "双向链表 — 实现与应用",
    "bullets": [
      "每个节点有 prev 和 next 指针，已知节点引用时插入/删除均为 <span class=\"num\">O(1)</span>（单链表删除需要前驱，O(n)查找）",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">Node</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, key=<span class=\"num\">0</span>, val=<span class=\"num\">0</span>):\n        self.key, self.val = key, val\n        self.prev = self.next = <span class=\"kw\">None</span>\n\n<span class=\"kw\">class</span> <span class=\"fn\">DoublyLinkedList</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self):\n        self.head, self.tail = Node(), Node()  <span class=\"cm\"># 哨兵节点</span>\n        self.head.next = self.tail\n        self.tail.prev = self.head\n\n    <span class=\"kw\">def</span> <span class=\"fn\">add_to_head</span>(self, node):\n        node.prev, node.next = self.head, self.head.next\n        self.head.next.prev = node\n        self.head.next = node\n\n    <span class=\"kw\">def</span> <span class=\"fn\">remove</span>(self, node):\n        node.prev.next = node.next\n        node.next.prev = node.prev</pre>",
      "<span class=\"highlight\">哨兵节点</span>（dummy head/tail）：消除头尾边界判断，代码更简洁不易出错",
      "核心应用：<span class=\"highlight\">LRU Cache</span>（双向链表 + HashMap，LC 146）、浏览器前进后退、文本编辑器undo/redo",
      "面试重点：LRU = HashMap存key→node + 双向链表维护访问顺序，get/put 均 O(1)"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds13",
    "cat": "数据结构",
    "q": "Python collections — Counter/defaultdict/OrderedDict",
    "bullets": [
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> Counter\nc = Counter(<span class=\"str\">\"aabbbcc\"</span>)  <span class=\"cm\"># Counter({'b':3, 'a':2, 'c':2})</span>\nc.most_common(<span class=\"num\">2</span>)  <span class=\"cm\"># [('b',3), ('a',2)]</span>\nc1 + c2  <span class=\"cm\"># 合并计数</span>\nc1 - c2  <span class=\"cm\"># 差集（只保留正数）</span></pre>",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\ngraph = defaultdict(list)   <span class=\"cm\"># 缺失key自动创建空list</span>\ncount = defaultdict(int)    <span class=\"cm\"># 缺失key自动为0</span>\ngroups = defaultdict(set)   <span class=\"cm\"># 缺失key自动创建空set</span>\n<span class=\"cm\"># 比 dict.setdefault() 更简洁</span></pre>",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> OrderedDict\nod = OrderedDict()\nod[<span class=\"str\">'a'</span>] = <span class=\"num\">1</span>; od[<span class=\"str\">'b'</span>] = <span class=\"num\">2</span>; od[<span class=\"str\">'c'</span>] = <span class=\"num\">3</span>\nod.move_to_end(<span class=\"str\">'a'</span>)        <span class=\"cm\"># 移到末尾</span>\nod.popitem(last=<span class=\"kw\">False</span>)    <span class=\"cm\"># 弹出最早的 → ('b',2)</span>\n<span class=\"cm\"># 可用于实现 LRU Cache</span></pre>",
      "面试常见用法：Counter统计频率 → 字母异位词/Top-K；defaultdict建图/分组；OrderedDict实现LRU",
      "注意：Python 3.7+ 普通 dict 也保持插入序，但 OrderedDict 额外支持 move_to_end 和 == 比较顺序"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "ds14",
    "cat": "数据结构",
    "q": "跳表 (Skip List) — Redis ZSet 的底层",
    "bullets": [
      "多层链表 + 概率平衡：每层以 ~50% 概率提升节点，形成「快速通道」",
      "<pre><span class=\"cm\"># 概念图：3层跳表</span>\n<span class=\"cm\"># L2:  1 ─────────────── 7 ─── NIL</span>\n<span class=\"cm\"># L1:  1 ──── 3 ──────── 7 ─── NIL</span>\n<span class=\"cm\"># L0:  1 → 2 → 3 → 5 → 7 → 8 → NIL</span>\n<span class=\"cm\"># 查找从最高层开始，逐层下降</span>\n<span class=\"cm\"># 类似二分查找的效果</span></pre>",
      "平均时间复杂度：查找/插入/删除均为 <span class=\"num\">O(log n)</span>，期望空间 <span class=\"num\">O(n)</span>",
      "Redis 用跳表而非平衡BST的原因：① 实现更简单（~100行 vs 红黑树~300行）② <span class=\"highlight\">范围查询天然高效</span>（链表直接遍历）③ 性能与平衡树相当",
      "面试要点：理解分层思想和概率平衡即可，手写实现很少考；Redis ZRANGEBYSCORE 底层就是跳表的范围遍历"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds15",
    "cat": "数据结构",
    "q": "字符串匹配数据结构对比",
    "bullets": [
      "<span class=\"highlight\">HashMap</span>：精确匹配 O(1)，不支持前缀/模式匹配 → 适合字典查词、去重",
      "<span class=\"highlight\">Trie (前缀树)</span>：前缀搜索 O(m)（m=串长），支持自动补全/词频统计，但空间开销大（每个节点最多26个子指针）",
      "<span class=\"highlight\">后缀数组/后缀树</span>：子串搜索 O(m log n)，LCP（最长公共前缀）计算 → 适合DNA序列分析、文本搜索引擎",
      "<span class=\"highlight\">布隆过滤器 (Bloom Filter)</span>：概率性成员测试，<span class=\"highlight\">可能有误判(false positive)，绝不漏判(no false negative)</span>，空间极省 → 适合URL去重、缓存穿透防护",
      "选型口诀：精确匹配→Hash | 前缀搜索→Trie | 子串查找→后缀结构 | 大规模存在性判断→Bloom Filter"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "l01",
    "cat": "LLM基础",
    "q": "Transformer 架构核心组件",
    "bullets": [
      "Encoder-Decoder结构（原始），现在主流：Decoder-only（GPT系列）/ Encoder-only（BERT）",
      "核心组件：Multi-Head Self-Attention + FFN + Layer Norm + Residual Connection",
      "Self-Attention：每个token关注序列中所有其他token，捕捉长距离依赖",
      "FFN：两层全连接（扩展到4倍再压缩），负责非线性变换和知识存储",
      "Residual Connection：防止梯度消失，让深层网络可训练；Layer Norm：稳定训练"
    ],
    "group": "基础"
  },
  {
    "id": "l02",
    "cat": "LLM基础",
    "q": "Self-Attention 计算过程",
    "bullets": [
      "输入X → 线性映射得到 Q(Query), K(Key), V(Value)",
      "Attention(Q,K,V) = softmax(QK^T / √d_k) × V",
      "√d_k 缩放防止点积过大导致 softmax 饱和（梯度消失）",
      "Multi-Head：并行多组QKV，不同head关注不同类型的关系（语法/语义/位置）",
      "复杂度 O(n²d)：序列长度的平方，这是长文本处理的瓶颈"
    ],
    "group": "基础"
  },
  {
    "id": "l03",
    "cat": "LLM基础",
    "q": "Tokenization 方法对比",
    "bullets": [
      "BPE(Byte-Pair Encoding)：从字符开始，不断合并最频繁的相邻pair → GPT系列使用",
      "WordPiece：类似BPE但用似然而非频率选择合并 → BERT使用",
      "SentencePiece：直接处理原始文本（不需要预分词），支持BPE/Unigram → 多语言友好",
      "中文/日语：无空格，SentencePiece直接按字符和子词处理",
      "Vocab大小 trade-off：大→覆盖率高但embedding矩阵大；小→OOV多但参数少。通常32K-128K"
    ],
    "group": "基础"
  },
  {
    "id": "l04",
    "cat": "LLM基础",
    "q": "预训练 → SFT → RLHF/DPO 全流程",
    "bullets": [
      "<span class=\"highlight\">Pre-training</span>：海量文本，CLM(因果语言模型)预测下一个token，学习世界知识。成本：数百万$",
      "<span class=\"highlight\">SFT</span>(Supervised Fine-Tuning)：指令-回答对，教模型\"如何有用地回答\"。数据量：几千~几万条",
      "<span class=\"highlight\">RLHF</span>：训练Reward Model(偏好排序) → PPO优化策略使输出更符合人类偏好。复杂、不稳定",
      "<span class=\"highlight\">DPO</span>：跳过RM，直接用偏好对训练。更简单稳定，但对数据质量敏感",
      "你的经验：SFT 248条效果好，DPO反而−7.6pp → <span class=\"highlight\">不是所有场景都需要对齐</span>"
    ],
    "group": "基础"
  },
  {
    "id": "l05",
    "cat": "LLM基础",
    "q": "Scaling Laws（缩放定律）",
    "bullets": [
      "Kaplan(2020)：Loss ∝ N^(-0.076) × D^(-0.095) × C^(-0.050)，N参数量/D数据量/C计算量",
      "Chinchilla(2022)：最优分配 → 参数量和数据量应同比例增长。70B模型需要1.4T tokens",
      "含义：<span class=\"highlight\">不是模型越大越好，而是算力分配要合理</span>",
      "实践影响：Llama系列（更小模型+更多数据）比GPT-3（大模型+少数据）效率高",
      "对客户的意义：14B充分训练可能比32B欠训练效果好（你的实验验证了这点）"
    ],
    "group": "基础"
  },
  {
    "id": "l06",
    "cat": "LLM基础",
    "q": "KV Cache 机制",
    "bullets": [
      "自回归生成时，每个新token需要attend所有之前的token",
      "不用cache：每步重算所有token的K/V → O(n²) 重复计算",
      "用cache：缓存已计算的K/V → 每步只算新token的Q与所有K/V → O(n) 增量",
      "显存占用：2 × n_layers × d_model × seq_len × batch_size × sizeof(dtype)",
      "<span class=\"highlight\">Paged Attention</span>(vLLM)：像OS虚拟内存一样管理KV Cache，减少碎片，支持更大batch"
    ],
    "group": "基础"
  },
  {
    "id": "l07",
    "cat": "LLM基础",
    "q": "Flash Attention 为什么快？",
    "bullets": [
      "标准Attention：QK^T生成n×n矩阵存到HBM(显存) → 读出来softmax → 再存回去 → 再乘V",
      "瓶颈不是计算而是<span class=\"highlight\">内存带宽</span>（HBM读写慢，SRAM快但小）",
      "Flash Attention：分块(tiling)在SRAM中完成QKV运算，不在HBM存中间矩阵",
      "效果：速度2-4x，显存从O(n²)降到O(n)，<span class=\"highlight\">精确计算不是近似</span>",
      "Flash Attention 2/3：进一步优化并行策略和GPU利用率"
    ],
    "group": "基础"
  },
  {
    "id": "l08",
    "cat": "LLM基础",
    "q": "量化方法对比",
    "bullets": [
      "FP16/BF16：半精度，标准训练格式。BF16范围更大（指数位多），训练更稳定",
      "INT8(W8A8)：权重和激活都8位，~2×压缩，精度损失极小",
      "INT4/NF4(QLoRA)：权重4位，~4×压缩。NF4：正态分位数量化，对正态分布权重最优",
      "GPTQ：逐层量化+Hessian补偿（post-training），GPU推理用",
      "AWQ：只保护1%的\"重要权重\"不量化，效果好于GPTQ",
      "GGUF：llama.cpp格式，Q4_K_M/Q8_0等，<span class=\"highlight\">专为CPU推理优化</span>"
    ],
    "group": "基础"
  },
  {
    "id": "l09",
    "cat": "LLM基础",
    "q": "Hallucination（幻觉）原因与缓解",
    "bullets": [
      "原因①：训练数据噪声/矛盾 → 模型学到错误关联",
      "原因②：自回归生成的exposure bias → 早期小错误雪球式放大",
      "原因③：softmax只能选已有token，不能\"说不知道\"",
      "缓解：<span class=\"highlight\">RAG</span>(用事实文档grounding) / Guardrails(检查事实性) / Self-consistency(多次采样投票)",
      "缓解：Fine-tuning让模型学会说\"我不知道\" / 降Temperature减少随机性",
      "你的做法：SiLR验证器 = 用仿真器事实检查LLM的\"幻觉动作\""
    ],
    "group": "基础"
  },
  {
    "id": "l10",
    "cat": "LLM基础",
    "q": "采样策略：Temperature / Top-p / Top-k",
    "bullets": [
      "Temperature：控制softmax分布的锐度。T→0=贪心(确定性)，T→∞=均匀(随机)",
      "Top-k：只从概率最高的k个token中采样。k=1=贪心，k大→更多样",
      "Top-p(Nucleus)：从累积概率达到p的最小token集中采样。<span class=\"highlight\">动态调整候选数量</span>",
      "Beam Search：同时维护beam_size条候选序列，选总概率最高的。适合翻译，不适合对话",
      "实践：对话用Top-p=0.9+T=0.7；代码/工具调用用T=0(确定性输出)"
    ],
    "group": "基础"
  },
  {
    "id": "l11",
    "cat": "LLM基础",
    "q": "MoE（Mixture of Experts）架构",
    "bullets": [
      "每个FFN层替换为多个\"专家\"子网络（如16个），每次只激活其中k个（如2个）",
      "Router网络决定每个token发给哪些专家 → <span class=\"highlight\">稀疏激活</span>",
      "优势：总参数量大（知识容量大），但每次推理只用一部分（计算量小）",
      "典型：Mixtral 8x7B = 47B总参数但每次只激活~13B",
      "挑战：负载均衡（某些专家过载）/ 通信开销（分布式训练）/ 显存仍需存所有专家"
    ],
    "group": "基础"
  },
  {
    "id": "l12",
    "cat": "LLM基础",
    "q": "位置编码：RoPE vs ALiBi",
    "bullets": [
      "为什么需要：Attention本身不包含位置信息，\"ABCD\"和\"DCBA\"注意力相同",
      "Sinusoidal(原始)：固定函数生成，不可学习，外推能力差",
      "<span class=\"highlight\">RoPE</span>(Rotary)：用旋转矩阵编码相对位置，支持长度外推（配合NTK scaling）→ 主流选择",
      "ALiBi：不加位置编码，而是给远距离token的attention分数加线性惩罚 → 训练简单",
      "长文本处理：RoPE+Dynamic NTK/YaRN可扩展到128K+；ALiBi天然支持外推"
    ],
    "group": "基础"
  },
  {
    "id": "l13",
    "cat": "LLM基础",
    "q": "RLHF vs DPO 详细对比",
    "bullets": [
      "RLHF：训练Reward Model → PPO优化policy。优点：灵活，可迭代。缺点：<span class=\"highlight\">训练不稳定，需要4个模型同时在线</span>",
      "DPO：直接用偏好对优化，loss = -log σ(β(logπ(yw)-logπ(yl)))。优点：简单一步训练",
      "DPO缺点：<span class=\"highlight\">对数据质量极敏感</span>（你的经验：63%偏好对的偏差→模型学错）",
      "DPO缺点：没有显式reward信号，难以诊断哪里出了问题",
      "新趋势：SimPO/ORPO等直接用reference-free偏好优化，更简单",
      "你的结论：修复所有问题后DPO仅+0.6pp，工具调用场景不推荐"
    ],
    "group": "基础"
  },
  {
    "id": "l14",
    "cat": "LLM基础",
    "q": "Embedding 原理与应用",
    "bullets": [
      "将离散token/句子映射到连续向量空间，语义相近→向量距离近",
      "Word2Vec(2013)：Skip-gram/CBOW，学习词级别embedding",
      "句向量：平均池化 / [CLS] token / 对比学习(SimCSE, sentence-transformers)",
      "bge-m3：多语言多粒度多功能embedding模型，<span class=\"highlight\">支持Dense+Sparse+ColBERT三种检索</span>",
      "Embedding微调：用三元组(query,positive,negative)+对比Loss，你的经验：Recall@1 +16.4pp"
    ],
    "group": "基础"
  },
  {
    "id": "m01",
    "cat": "ML/DL基础",
    "q": "优化器对比：SGD / Adam / AdamW",
    "bullets": [
      "SGD：最基础，lr × gradient。需要精心调lr和momentum。收敛慢但泛化可能更好",
      "Adam：自适应学习率，维护一阶(动量)和二阶(方差)矩估计。收敛快，默认首选",
      "<span class=\"highlight\">AdamW</span>：Adam + 正确的weight decay（Adam的L2不等价于weight decay）→ LLM标准选择",
      "学习率：LLM训练通常用cosine schedule + warmup（前几百步线性升温，防止开始时梯度爆炸）",
      "LoRA微调常用lr=2e-4~2e-5，比全量微调高一个量级"
    ],
    "group": "基础"
  },
  {
    "id": "m02",
    "cat": "ML/DL基础",
    "q": "过拟合与正则化",
    "bullets": [
      "过拟合：训练loss低但验证loss高 → 模型记住了训练数据而非学到规律",
      "Dropout：训练时随机丢弃神经元(通常p=0.1)，推理时关闭 → 集成效果",
      "Weight Decay(L2)：loss += λ||w||² → 惩罚大权重，AdamW中解耦实现",
      "Early Stopping：验证loss不再下降时停止训练 → 最简单有效",
      "数据增强：增加训练数据多样性 → 图像(翻转/裁剪)、NLP(同义替换/回译)",
      "LLM场景：LoRA本身就是正则化（低秩约束限制了参数自由度）"
    ],
    "group": "基础"
  },
  {
    "id": "m03",
    "cat": "ML/DL基础",
    "q": "损失函数选择",
    "bullets": [
      "<span class=\"highlight\">Cross-Entropy</span>：分类标准loss，-Σy·log(p)。LLM预训练就是对next token做CE",
      "MSE：回归任务，(y-ŷ)²。对异常值敏感",
      "Focal Loss：给简单样本低权重，难样本高权重 → 解决类别不平衡",
      "Contrastive Loss：拉近正样本对、推远负样本对 → Embedding训练核心",
      "Triplet Loss：(anchor, positive, negative)三元组 → 你的bge-m3微调用的"
    ],
    "group": "基础"
  },
  {
    "id": "m04",
    "cat": "ML/DL基础",
    "q": "CNN 核心概念",
    "bullets": [
      "卷积核(filter)：滑动窗口提取局部特征 → 参数共享（比全连接参数少得多）",
      "池化(Pooling)：降低空间分辨率，MaxPool保留最强特征",
      "经典架构演进：LeNet→AlexNet→VGG→ResNet(残差连接)→EfficientNet",
      "ResNet的残差连接：y = F(x) + x → 让深层网络可训练（和Transformer的residual connection相同思想）",
      "你的Edge AI项目：用TensorRT对视觉模型做量化加速部署到Jetson Nano"
    ],
    "group": "基础"
  },
  {
    "id": "m05",
    "cat": "ML/DL基础",
    "q": "RNN / LSTM / GRU",
    "bullets": [
      "RNN：h_t = f(W_h·h_{t-1} + W_x·x_t)。梯度消失/爆炸 → 长序列失效",
      "<span class=\"highlight\">LSTM</span>：引入Cell State + 三个门(遗忘/输入/输出) → 解决长期依赖",
      "GRU：LSTM简化版，两个门(重置/更新) → 参数少，效果接近LSTM",
      "已被Transformer大部分取代，但在低资源/实时场景仍有价值",
      "你的经验：PowerTS中LSTM精度比LLM高13倍，推理~1ms vs ~5-10s → <span class=\"highlight\">简单模型在特定场景仍是最优解</span>"
    ],
    "group": "基础"
  },
  {
    "id": "m06",
    "cat": "ML/DL基础",
    "q": "Batch Norm vs Layer Norm",
    "bullets": [
      "Batch Norm：对一个batch内的同一特征维度做归一化。依赖batch size，不适合序列任务",
      "<span class=\"highlight\">Layer Norm</span>：对单个样本的所有特征维度做归一化。不依赖batch size → Transformer标准选择",
      "RMSNorm：Layer Norm的简化版，只做缩放不做平移 → Llama/Qwen使用，更快",
      "Pre-Norm vs Post-Norm：Transformer中Layer Norm放在Attention前(Pre)还是后(Post)",
      "Pre-Norm训练更稳定（主流选择），Post-Norm理论上效果更好但难训练"
    ],
    "group": "基础"
  },
  {
    "id": "m07",
    "cat": "ML/DL基础",
    "q": "GAN 原理与应用",
    "bullets": [
      "Generator生成假数据 vs Discriminator判断真假 → 对抗训练",
      "训练难点：模式崩塌(generator只输出少数样本) / 训练不稳定 / 评估困难(FID/IS)",
      "WGAN：用Wasserstein距离替代JS散度 → 更稳定的训练信号",
      "应用：图像生成 / 数据增强 / 风格迁移 / 超分辨率",
      "你的经验：本科项目用GAN做电力系统稀有事件数据增强 → 解决类别不平衡问题"
    ],
    "group": "基础"
  },
  {
    "id": "m08",
    "cat": "ML/DL基础",
    "q": "强化学习基础：PPO / DDPG",
    "bullets": [
      "RL核心：Agent在Environment中执行Action获得Reward，目标是最大化累计Reward",
      "Policy Gradient：直接优化策略函数 → REINFORCE算法（高方差）",
      "<span class=\"highlight\">PPO</span>：加clip限制策略更新幅度 → 稳定训练。RLHF的标准选择",
      "<span class=\"highlight\">DDPG</span>：Actor-Critic + 连续动作空间 → 适合机器人/电力控制",
      "你的经验：①本科用DDPG/PPO做电力系统实时控制 ②理解RLHF中PPO的作用"
    ],
    "group": "基础"
  },
  {
    "id": "m09",
    "cat": "ML/DL基础",
    "q": "对比学习（Contrastive Learning）",
    "bullets": [
      "核心思想：<span class=\"highlight\">拉近正样本对，推远负样本对</span>在embedding空间中",
      "SimCLR：同一图像的两个增强版本互为正样本，其他图像为负样本",
      "CLIP：图像和文本配对做对比学习 → 跨模态理解",
      "SimCSE：用dropout制造正样本对 → 简单有效的句向量方法",
      "你的应用：bge-m3微调用MultipleNegativesRankingLoss（对比学习变体），in-batch negatives提高效率"
    ],
    "group": "基础"
  },
  {
    "id": "a01",
    "cat": "Agent架构",
    "q": "Agent 四要素",
    "bullets": [
      "<span class=\"highlight\">LLM</span>：大脑，负责推理和决策",
      "<span class=\"highlight\">Tools</span>：手和脚，执行外部操作（API调用/代码执行/搜索/数据库查询）",
      "<span class=\"highlight\">Memory</span>：短期(对话历史) + 长期(向量数据库/文件) + 工作记忆(当前任务状态)",
      "<span class=\"highlight\">Planning</span>：任务分解和执行策略（ReAct/Plan-and-Execute/反思）",
      "你的项目覆盖全部四要素：SiLR(LLM+仿真工具+观测记忆+ReAct规划)，RAG(LLM+10工具+检索记忆+意图路由)"
    ],
    "group": "基础"
  },
  {
    "id": "a02",
    "cat": "Agent架构",
    "q": "Function Calling 实现机制",
    "bullets": [
      "原理：System Prompt中定义工具的JSON Schema → LLM输出结构化的工具调用请求 → 系统执行 → 结果返回LLM",
      "OpenAI格式：tool_calls: [{function: {name, arguments}}]",
      "关键挑战：①LLM可能生成无效参数 ②可能调用不存在的工具 ③可能不调工具直接回答",
      "你的解决方案：三层ActionParser（原生/JSON/正则兜底）+ 强制调用guardrails",
      "<span class=\"highlight\">Structured Output</span>：限制LLM只能输出符合Schema的JSON，减少解析错误"
    ],
    "group": "基础"
  },
  {
    "id": "a03",
    "cat": "Agent架构",
    "q": "Memory 系统分类",
    "bullets": [
      "<span class=\"highlight\">短期记忆</span>：对话历史，直接放在context window中。受限于上下文长度",
      "<span class=\"highlight\">长期记忆</span>：向量数据库存储过去的经验，按相似度检索。如MemGPT",
      "<span class=\"highlight\">工作记忆</span>：当前任务的中间状态（scratchpad），类似人的\"脑中暂存\"",
      "<span class=\"highlight\">情景记忆</span>：记录成功/失败的完整episode，用于未来类似任务参考",
      "你的实现：SiLR用观测压缩做工作记忆；RAG用向量DB做长期记忆；EdgeRouter用滑动窗口做时序记忆"
    ],
    "group": "基础"
  },
  {
    "id": "a04",
    "cat": "Agent架构",
    "q": "Context Engineering vs Prompt Engineering",
    "bullets": [
      "Prompt Engineering：优化单次输入的措辞和格式",
      "<span class=\"highlight\">Context Engineering</span>（2025新趋势）：设计整个信息流——什么信息在什么时候以什么形式进入context",
      "包括：工具结果的格式化 / 记忆检索的时机 / 观测数据的压缩 / 系统提示的动态调整",
      "你做过的：Observation压缩(2000→300 tokens) / Escalation Hint(只在REJECT时注入) / RRF权重调整",
      "核心理念：<span class=\"highlight\">控制模型\"看到什么\"比\"怎么问\"更重要</span>"
    ],
    "group": "基础"
  },
  {
    "id": "a05",
    "cat": "Agent架构",
    "q": "Multi-Agent 通信模式",
    "bullets": [
      "①<span class=\"highlight\">中心化</span>：一个Orchestrator分派任务给Worker Agent → 简单可控，单点瓶颈",
      "②<span class=\"highlight\">层级式</span>：Manager→SubManager→Worker → 适合复杂组织结构",
      "③<span class=\"highlight\">对等式</span>：Agent之间直接通信协商 → 灵活但难以调试",
      "④<span class=\"highlight\">黑板模式</span>：共享状态空间，各Agent读写 → 解耦通信",
      "框架：AutoGen(对话式) / CrewAI(角色分工) / LangGraph(图状态机)"
    ],
    "group": "基础"
  },
  {
    "id": "a06",
    "cat": "Agent架构",
    "q": "Agent Evaluation 方法",
    "bullets": [
      "①<span class=\"highlight\">任务完成率</span>：最终结果是否正确（SiLR: 97.0%恢复成功率）",
      "②<span class=\"highlight\">效率</span>：完成任务所需步骤数/token数/时间（SiLR: 平均3.2步）",
      "③<span class=\"highlight\">安全性</span>：是否触发危险动作/违反约束（SiLR: 0%违规率）",
      "④<span class=\"highlight\">鲁棒性</span>：输入变化时表现稳定性（PowerTS: 仅+2.2%退化）",
      "⑤<span class=\"highlight\">成本</span>：API调用/推理成本（SiLR: 比GPT低100×）",
      "难点：Agent行为是随机的，需要多次运行取统计量，不能只跑一次"
    ],
    "group": "基础"
  },
  {
    "id": "a07",
    "cat": "Agent架构",
    "q": "Guardrails 设计模式",
    "bullets": [
      "输入Guardrails：过滤恶意/不安全的用户输入（prompt injection检测）",
      "输出Guardrails：检查LLM输出的安全性/合规性/格式正确性",
      "动作Guardrails：<span class=\"highlight\">在执行前验证动作安全性</span>（SiLR验证器就是这类）",
      "回退Guardrails：失败时的兜底策略（Failsafe、默认回答、人工转接）",
      "实现方式：规则(正则/关键词) / 分类器(fine-tuned) / LLM-as-Judge / 仿真器验证"
    ],
    "group": "基础"
  },
  {
    "id": "a08",
    "cat": "Agent架构",
    "q": "Agent 常见失败模式",
    "bullets": [
      "①<span class=\"highlight\">无限循环</span>：没有终止条件或步数上限 → Bounded ReAct解决",
      "②<span class=\"highlight\">工具滥用</span>：反复调用同一工具期待不同结果 → 重试上限+失败反馈",
      "③<span class=\"highlight\">最短路径</span>：跳过关键步骤直接回答 → 强制调用guardrails",
      "④<span class=\"highlight\">幻觉动作</span>：调用不存在的工具或生成无效参数 → Schema验证+解析兜底",
      "⑤<span class=\"highlight\">上下文污染</span>：错误信息积累在context中影响后续判断 → 观测压缩+状态重置"
    ],
    "group": "基础"
  },
  {
    "id": "pe01",
    "cat": "Prompt工程",
    "q": "Few-shot 设计原则",
    "bullets": [
      "示例数量：不是越多越好（你的实验：<span class=\"num\">1-shot > 3-shot</span>），多了会稀释attention",
      "示例选择：选和当前任务最相似的示例 → 动态few-shot(从向量库检索)",
      "示例顺序：最相关的放最后（recency bias），或打乱测试影响",
      "格式一致：示例的输入输出格式要和实际任务完全一致",
      "Zero-shot足够时不加示例——简单才是最优解"
    ],
    "group": "基础"
  },
  {
    "id": "pe02",
    "cat": "Prompt工程",
    "q": "Chain-of-Thought (CoT) 变体",
    "bullets": [
      "标准CoT：\"Let's think step by step\" → 引导模型展示推理过程",
      "Self-Consistency：多次采样CoT → 投票选最常见答案 → 准确率+10-20%",
      "Tree-of-Thought：多条推理路径并行探索 → 复杂推理任务",
      "ReAct：CoT + Action（思考-行动-观察循环）→ <span class=\"highlight\">你的SiLR-Agent核心范式</span>",
      "何时用：需要多步推理的任务。简单任务加CoT反而慢且可能更差"
    ],
    "group": "基础"
  },
  {
    "id": "pe03",
    "cat": "Prompt工程",
    "q": "Structured Output 技巧",
    "bullets": [
      "JSON Mode：强制LLM输出有效JSON → OpenAI支持response_format",
      "Function Calling：更严格的结构化输出 → 定义schema，输出必须符合",
      "XML标签：用<tag>标记不同部分 → Claude擅长",
      "输出约束：在prompt中明确格式要求 + 给示例 + 末尾开始输出格式引导",
      "兜底：总是做输出解析和验证 → 你的三层ActionParser就是处理结构化输出不可靠的问题"
    ],
    "group": "基础"
  },
  {
    "id": "pe04",
    "cat": "Prompt工程",
    "q": "System Prompt 设计",
    "bullets": [
      "角色设定：明确AI的身份、能力边界、行为规范",
      "任务定义：清晰描述要做什么、输出格式、约束条件",
      "工具说明：可用工具列表 + 使用时机 + 参数说明",
      "<span class=\"highlight\">MUST/NEVER规则</span>：关键行为用强制语言（你的经验：Agent不调judge→加MUST call）",
      "动态注入：根据用户输入/上下文动态调整system prompt的部分内容 → Context Engineering"
    ],
    "group": "基础"
  },
  {
    "id": "pe05",
    "cat": "Prompt工程",
    "q": "Prompt Injection 攻防",
    "bullets": [
      "攻击：用户在输入中嵌入\"忽略之前的指令\"等内容，劫持模型行为",
      "防御①：输入过滤 → 检测可疑模式（\"ignore previous\"/\"you are now\"）",
      "防御②：分隔符 → 用```或XML标签明确区分system/user内容",
      "防御③：LLM-as-Guard → 用另一个模型检测输入是否含注入",
      "防御④：<span class=\"highlight\">最小权限</span> → Agent的工具权限按任务分配，即使被注入也无法执行危险操作",
      "你的方案：SiLR验证器在执行层拦截 → 即使prompt被劫持，危险动作也不会通过验证"
    ],
    "group": "基础"
  },
  {
    "id": "v01",
    "cat": "模型评测",
    "q": "SA做模型评测要回答客户的3个核心问题",
    "bullets": [
      "① \"哪个模型最适合我的场景？\" → 模型选型评测（多模型对比）",
      "② \"效果到底怎么样？用数字说话。\" → 客户场景定量评估（客户数据构建评测集）",
      "③ \"值不值得花这个钱？\" → 成本-性能 trade-off 分析（Pareto图）",
      "评测在MaaS中的角色：客户场景→SA设计评测→跑对比→出报告→客户选型→发现短板→反馈模型团队→<span class=\"highlight\">数据飞轮</span>"
    ],
    "group": "工程"
  },
  {
    "id": "v02",
    "cat": "模型评测",
    "q": "评测5+1维度框架",
    "bullets": [
      "① 质量（准确率/F1/Recall@K）→ 技术负责人关心",
      "② 延迟（TTFT首token延迟/TPS/P50/P95/P99）→ 工程团队关心",
      "③ 吞吐（QPS每秒请求数）→ 运维关心",
      "④ 成本（$/1M tokens、月度总费用）→ 采购/管理层关心",
      "⑤ 安全合规（幻觉率/拒答率/敏感信息泄漏率）→ 法务关心",
      "+1 鲁棒性（噪声下退化幅度）→ 不同角色关心不同维度，SA帮客户找最优平衡点"
    ],
    "group": "工程"
  },
  {
    "id": "v03",
    "cat": "模型评测",
    "q": "Benchmark vs 客户场景评测",
    "bullets": [
      "Benchmark（MMLU/HumanEval/MT-Bench）：可比性强但和客户场景可能脱节、有数据污染风险",
      "客户场景评测：直接反映效果但构建成本高",
      "正确做法：<span class=\"highlight\">Benchmark快速初筛 + 客户数据精确验证</span>",
      "永远不要只用benchmark做推荐。MMLU最高的模型在客户日语QA上可能不是最好的",
      "Benchmark局限：数据污染 / 指标游戏 / 和业务脱节 / 静态不更新"
    ],
    "group": "工程"
  },
  {
    "id": "v04",
    "cat": "模型评测",
    "q": "4种评测方法（离线→在线）",
    "bullets": [
      "① 离线评测：有标准答案→准确率/F1；开放生成→BLEU/ROUGE/BERTScore。适合初筛、PoC",
      "② LLM-as-Judge：强模型评弱模型，比人工便宜100×，比BLEU更接近人工判断",
      "  缺点：Position Bias(打乱) / Self-bias(交叉评估) / 分数不稳定(多次取平均)",
      "③ 人工评测：盲评+对比评，IRR(Cohen's Kappa)衡量一致性，高风险场景最终验证",
      "④ A/B测试：线上真实流量，用业务指标(CTR/转化率/留存)评价——<span class=\"highlight\">金标准</span>"
    ],
    "group": "工程"
  },
  {
    "id": "v05",
    "cat": "模型评测",
    "q": "SA给客户做评测的8步标准流程",
    "bullets": [
      "① 需求对齐（质量优先 or 成本优先？合规要求？）",
      "② 数据准备（从客户数据构建50-200条评测集，含gold standard）",
      "③ 指标定义（2-3个核心指标 + 成本指标）",
      "④ 候选模型（3-5个：大/中/小 + 开源/闭源）",
      "⑤ 跑评测 → ⑥ 分析（Pareto图+错误分析+边界案例）",
      "⑦ 出报告（推荐方案+数据支撑+trade-off说明）→ ⑧ 决策支持"
    ],
    "group": "工程"
  },
  {
    "id": "v06",
    "cat": "模型评测",
    "q": "成本-性能 Pareto分析",
    "bullets": [
      "Pareto前沿：同等成本下质量最高的模型组成的曲线，SA帮客户找符合预算的点",
      "月度成本 = 日均请求数 × 平均tokens/请求 × 单价/token × 30",
      "TCO要算全：API费 + GPU租赁(本地部署) + 运维人力 + 数据标注(微调) + 持续监控",
      "案例：SiLR本地14B成本低100×但效果超过GPT-5.4 → 不是最贵的最好"
    ],
    "group": "工程"
  },
  {
    "id": "v07",
    "cat": "模型评测",
    "q": "你的4段评测经验（二面核心素材）",
    "bullets": [
      "① SiLR：66场景×5模型×3方法消融矩阵 → 发现DPO隐式偏差/14B>32B/few-shot 1>3",
      "② JP-DocRAG：6种检索方案Recall@K矩阵 + LLM-as-Judge 5维度 → BM25小语料王/Reranker均衡器",
      "③ PowerTS：LSTM vs LLM跨范式对比×干净/加噪条件 → 鲁棒性48.51×/RAG回归有害",
      "④ EdgeRouter：准确率×成本×延迟×WAN条件 → 86%成本节省全延迟范围稳定",
      "共同点：不只看\"哪个最好\"，更关注<span class=\"highlight\">\"为什么有些会失败\"</span>——失败模式比最终数字更有价值"
    ],
    "group": "工程"
  },
  {
    "id": "v08",
    "cat": "模型评测",
    "q": "评测5个常见坑",
    "bullets": [
      "① 评测集太小→统计不显著（50样本，80% vs 82%置信区间重叠）",
      "② 评测≠部署环境（FP32评测但INT4部署→精度下降没反映）",
      "③ 只看均值忽略分布（平均90%但某类问题只有30%，客户刚好是那类）",
      "④ Benchmark分数≠客户场景效果（MMLU最高的模型日语QA可能不是最好的）",
      "⑤ 忽略成本维度（GPT-5.4最好但API成本100×）"
    ],
    "group": "工程"
  },
  {
    "id": "v09",
    "cat": "模型评测",
    "q": "\"客户应该用GPT-5.4还是开源模型？\"怎么回答",
    "bullets": [
      "不能直接回答\"用哪个\"，要先搞清楚4个约束：",
      "① 数据安全：能不能上传第三方？日本金融客户通常不行→开源本地部署",
      "② 预算：月度API费用能接受多少？算TCO",
      "③ 定制需求：需不需要微调？GPT不能微调底层权重",
      "④ 延迟要求：API有网络延迟",
      "然后用客户数据跑对比。14B微调后能超GPT-5.4 few-shot（SiLR就是案例）"
    ],
    "group": "工程"
  },
  {
    "id": "v10",
    "cat": "模型评测",
    "q": "评测效果不好，下一步怎么办？（按成本排序）",
    "bullets": [
      "① 先优化Prompt（免费）：few-shot/CoT/输出约束/角色设定",
      "② 优化Pipeline（低成本）：RAG→检查chunking/embedding/reranker",
      "③ 做Fine-tuning（中等成本）：LoRA微调，需要标注数据",
      "④ 换模型（高成本）：更大模型或不同家族",
      "原则：<span class=\"highlight\">先做便宜的，再做贵的，最后才换模型</span>"
    ],
    "group": "工程"
  },
  {
    "id": "v11",
    "cat": "模型评测",
    "q": "常见Benchmark速查",
    "bullets": [
      "通用：MMLU(知识广度) / MT-Bench(多轮对话) / Chatbot Arena(人工ELO排名，最接近真实)",
      "代码：HumanEval / MBPP；数学：MATH / GSM8K；常识：ARC / HellaSwag",
      "日语：JGLUE(日本版GLUE) / JCommonsenseQA；多语言：MGSM / XL-Sum",
      "Chatbot Arena是最可信的排名（人工盲评），但样本偏向英语对话场景",
      "SA做法：Benchmark排除明显不行的 → <span class=\"highlight\">客户数据才是最终裁判</span>"
    ],
    "group": "工程"
  },
  {
    "id": "v12",
    "cat": "模型评测",
    "q": "二面主动带出一面反思（加分话术）",
    "bullets": [
      "\"上次和Sun Bojie聊完后我一直在想工程vs模型能力的问题\"",
      "\"我觉得我之前太关注工程层面了，但其实项目中真正有长期价值的是评测方法论和模型边界的发现\"",
      "\"DPO隐式偏差、RAG对回归有害、Token离散化鲁棒性——这些洞察不会因下一代模型过时\"",
      "\"评测是连接工程和模型的桥梁：工程方案产生数据→评测发现短板→反馈模型改进→数据飞轮\"",
      "展示：能反思(成长性) + 区分临时/持久价值(产品化思维) + 理解评测角色(契合二面方向)"
    ],
    "group": "工程"
  },
  {
    "id": "t01",
    "cat": "技术概念",
    "q": "FastAPI / Streamlit / SSE 是什么？",
    "bullets": [
      "FastAPI：Python高性能Web框架，原生异步+自动API文档+类型校验，性能接近Go/Node",
      "FastAPI vs Flask：Flask更老但不支持原生异步，FastAPI更适合AI服务",
      "Streamlit：Python快速搭前端，适合PoC和demo（不适合生产环境）",
      "SSE(Server-Sent Events)：服务器→客户端单向推送，LLM逐token流式输出用SSE就够了",
      "SSE vs WebSocket：SSE单向，WebSocket双向"
    ],
    "group": "工程"
  },
  {
    "id": "t02",
    "cat": "技术概念",
    "q": "Docker核心概念（5个）",
    "bullets": [
      "Image镜像：打包好的应用模板（安装光盘）",
      "Container容器：镜像的运行实例（安装好的系统）",
      "Dockerfile：描述怎么构建镜像的脚本",
      "Docker Compose：同时管理多个容器（一键部署FastAPI+向量数据库+前端）",
      "Registry仓库：存储和分发镜像的地方（Docker Hub）",
      "核心价值：解决\"在我机器上能跑\"问题，保证交付物稳定运行"
    ],
    "group": "工程"
  },
  {
    "id": "t03",
    "cat": "技术概念",
    "q": "Kubernetes(K8s)是什么，为什么用？",
    "bullets": [
      "容器编排平台，管理大量Docker容器的部署/扩缩容/负载均衡",
      "Docker解决单机部署，K8s解决\"100台机器上跑1000个容器怎么管\"",
      "自动扩缩容：流量大自动加容器，流量小自动减",
      "自动恢复：容器挂了自动重启；滚动更新：不停机更新服务",
      "SA需要知道的深度：知道是什么、为什么用，不需要会写YAML"
    ],
    "group": "工程"
  },
  {
    "id": "t04",
    "cat": "技术概念",
    "q": "向量数据库是什么，为什么RAG需要它？",
    "bullets": [
      "专门存储和检索高维向量（embedding）的数据库",
      "支持相似度搜索（Cosine/L2），比传统数据库快得多",
      "常见：Chroma（轻量级，本地开发）/ Qdrant / Weaviate / Pinecone（云端）/ FAISS（库）",
      "RAG流程：文档→embedding→存向量数据库→查询时检索相似向量→取对应文本",
      "FAISS：Facebook AI的开源库，IndexFlatIP（精确）→IndexIVFPQ（近似，大规模用）"
    ],
    "group": "工程"
  },
  {
    "id": "t05",
    "cat": "技术概念",
    "q": "vLLM vs Ollama — 什么场景用哪个？",
    "bullets": [
      "Ollama：优化易用性和本地/边缘部署，支持GGUF(Q4/Q8)，CPU-only可运行，单请求优化",
      "vLLM：优化高吞吐云端服务，Continuous Batching，需要GPU，支持GPTQ/AWQ量化",
      "Prefix Caching：System Prompt对所有请求相同→KV Cache复用，计算量减少~30%",
      "Tensor Parallelism(TP=2)：大模型跨多卡并行，vLLM支持",
      "SA场景：edge用Ollama，cloud/企业API用vLLM"
    ],
    "group": "工程"
  },
  {
    "id": "t06",
    "cat": "技术概念",
    "q": "LoRA / QLoRA 机制",
    "bullets": [
      "LoRA：在原始权重旁添加低秩矩阵A和B（秩r），只训练AB，原始权重冻结",
      "可训练参数：r=64时约<1%，大幅减少显存需求",
      "QLoRA：在LoRA基础上，原始权重用4-bit NF4量化，进一步降低显存",
      "lora_alpha：缩放系数，通常=2r（alpha=128对应r=64）",
      "target_modules：q_proj/k_proj/v_proj/o_proj + gate/up/down_proj（7个）"
    ],
    "group": "工程"
  },
  {
    "id": "t07",
    "cat": "技术概念",
    "q": "Agent框架对比（面试时的回答）",
    "bullets": [
      "LangChain/LangGraph：生态最全，但抽象层重、调试困难、\"黑盒\"感强",
      "LlamaIndex：RAG场景最强，索引检索抽象好，但Agent能力相对弱",
      "AutoGen：多Agent协作好，适合复杂工作流，但上手成本高",
      "ADK(Google)：和Google Cloud集成好，较新",
      "自研：完全可控，但要自己造轮子（SiLR-Agent选择自研的原因）",
      "选哪个取决于客户需求和团队熟悉度，不存在\"最好的框架\""
    ],
    "group": "工程"
  },
  {
    "id": "t08",
    "cat": "技术概念",
    "q": "ReAct / Plan-and-Execute / Multi-Agent 区别",
    "bullets": [
      "ReAct：思考-行动-观察循环，适合步骤不确定、需根据反馈调整的任务（SiLR-Agent用这个）",
      "Plan-and-Execute：先整体规划再执行，适合步骤较明确的复杂任务，但计划有误会连锁出错",
      "Multi-Agent：多个专门化Agent协作（规划/执行/审核），适合角色分工明确的场景",
      "实际项目经常混合使用，不是非此即彼"
    ],
    "group": "工程"
  },
  {
    "id": "t09",
    "cat": "技术概念",
    "q": "RAG vs Fine-tuning — 什么时候用哪个？",
    "bullets": [
      "RAG：知识经常更新 / 需要引用来源 / 数据量大但不能全训练进模型",
      "Fine-tuning：需要特定输出格式和风格 / 领域知识需要内化 / 低延迟（减少prompt长度）",
      "RAG失败场景：回归任务（时序预测）/ 答案需要计算而非检索",
      "结合使用：先RAG检索相关文档，再用fine-tuned模型生成（JP-DocRAG的做法）",
      "帮客户判断：问题是\"找答案\"还是\"计算/推理\"？"
    ],
    "group": "工程"
  },
  {
    "id": "t10",
    "cat": "技术概念",
    "q": "如何做模型评测（3层框架）",
    "bullets": [
      "① 自动指标：准确率/Recall@K/MRR/延迟/token成本",
      "② LLM-as-Judge：用强模型评估弱模型输出，适合开放式生成任务",
      "③ 人工评估：领域专家最终验证，金融/医疗等高风险场景必须",
      "关键：先定义\"好\"的标准——电商文案的\"好\"和金融报告的\"好\"差别很大",
      "A/B测试：最终用业务指标（CTR/转化率）验证，不只是技术指标"
    ],
    "group": "工程"
  },
  {
    "id": "db01",
    "cat": "数据库",
    "q": "SQL 基础查询 — SELECT/WHERE/ORDER BY",
    "bullets": [
      "<pre><span class=\"kw\">SELECT</span> name, age, salary\n<span class=\"kw\">FROM</span> employees\n<span class=\"kw\">WHERE</span> department = <span class=\"str\">'Engineering'</span>\n  <span class=\"kw\">AND</span> age > 25\n  <span class=\"kw\">AND</span> name <span class=\"kw\">LIKE</span> <span class=\"str\">'%zhou%'</span>  <span class=\"cm\">-- 模糊匹配</span>\n<span class=\"kw\">ORDER BY</span> salary <span class=\"kw\">DESC</span>\n<span class=\"kw\">LIMIT</span> 10 <span class=\"kw\">OFFSET</span> 20;  <span class=\"cm\">-- 分页：跳过20条取10条</span></pre>",
      "执行顺序：FROM → WHERE → SELECT → ORDER BY → LIMIT",
      "NULL比较用 IS NULL / IS NOT NULL，不能用 = NULL",
      "LIKE通配符：% 任意字符，_ 单个字符"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "db02",
    "cat": "数据库",
    "q": "增删改 — INSERT/UPDATE/DELETE",
    "bullets": [
      "<pre><span class=\"cm\">-- 插入</span>\n<span class=\"kw\">INSERT INTO</span> users (name, email) <span class=\"kw\">VALUES</span> (<span class=\"str\">'Zhou'</span>, <span class=\"str\">'z@mail.com'</span>);\n<span class=\"cm\">-- 批量插入</span>\n<span class=\"kw\">INSERT INTO</span> users (name, email) <span class=\"kw\">VALUES</span>\n  (<span class=\"str\">'A'</span>, <span class=\"str\">'a@m.com'</span>), (<span class=\"str\">'B'</span>, <span class=\"str\">'b@m.com'</span>);\n<span class=\"cm\">-- 更新</span>\n<span class=\"kw\">UPDATE</span> users <span class=\"kw\">SET</span> age = 26 <span class=\"kw\">WHERE</span> id = 1;\n<span class=\"cm\">-- 删除（⚠️ 没有WHERE会删全表！）</span>\n<span class=\"kw\">DELETE FROM</span> users <span class=\"kw\">WHERE</span> id = 1;</pre>",
      "<span class=\"highlight\">永远在UPDATE/DELETE前先用SELECT确认影响范围</span>",
      "TRUNCATE vs DELETE：TRUNCATE清空全表更快（不记录行日志），但不能回滚"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "db03",
    "cat": "数据库",
    "q": "主键与外键 — 表关系基础",
    "bullets": [
      "<pre><span class=\"kw\">CREATE TABLE</span> departments (\n    id <span class=\"kw\">INT PRIMARY KEY AUTO_INCREMENT</span>,\n    name <span class=\"kw\">VARCHAR</span>(100) <span class=\"kw\">NOT NULL UNIQUE</span>\n);\n<span class=\"kw\">CREATE TABLE</span> employees (\n    id <span class=\"kw\">INT PRIMARY KEY AUTO_INCREMENT</span>,\n    name <span class=\"kw\">VARCHAR</span>(100) <span class=\"kw\">NOT NULL</span>,\n    dept_id <span class=\"kw\">INT</span>,\n    <span class=\"kw\">FOREIGN KEY</span> (dept_id) <span class=\"kw\">REFERENCES</span> departments(id)\n);</pre>",
      "主键(PK)：唯一标识行，不能为NULL。自增或UUID",
      "外键(FK)：引用另一张表的主键 → 建立表间关系 → 保证参照完整性"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "db04",
    "cat": "数据库",
    "q": "JOIN 类型对比 — 图解与场景",
    "bullets": [
      "<pre><span class=\"cm\">-- INNER JOIN: 只返回两表都匹配的行</span>\n<span class=\"kw\">SELECT</span> e.name, d.name <span class=\"kw\">AS</span> dept\n<span class=\"kw\">FROM</span> employees e\n<span class=\"kw\">INNER JOIN</span> departments d <span class=\"kw\">ON</span> e.dept_id = d.id;\n\n<span class=\"cm\">-- LEFT JOIN: 左表全部 + 右表匹配（不匹配为NULL）</span>\n<span class=\"kw\">SELECT</span> e.name, d.name\n<span class=\"kw\">FROM</span> employees e\n<span class=\"kw\">LEFT JOIN</span> departments d <span class=\"kw\">ON</span> e.dept_id = d.id;</pre>",
      "INNER：交集 | LEFT：左表全部 | RIGHT：右表全部 | FULL：并集",
      "LEFT JOIN找\"没有部门的员工\" → WHERE d.id IS NULL",
      "性能：JOIN比子查询通常更快（优化器可以选择更好的执行计划）"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "db05",
    "cat": "数据库",
    "q": "GROUP BY / HAVING / 聚合函数",
    "bullets": [
      "<pre><span class=\"cm\">-- 每个部门的平均薪资（只显示>50000的）</span>\n<span class=\"kw\">SELECT</span> department,\n       <span class=\"fn\">COUNT</span>(*) <span class=\"kw\">AS</span> cnt,\n       <span class=\"fn\">AVG</span>(salary) <span class=\"kw\">AS</span> avg_sal,\n       <span class=\"fn\">MAX</span>(salary) <span class=\"kw\">AS</span> max_sal\n<span class=\"kw\">FROM</span> employees\n<span class=\"kw\">WHERE</span> age > 20          <span class=\"cm\">-- 先过滤行</span>\n<span class=\"kw\">GROUP BY</span> department\n<span class=\"kw\">HAVING</span> <span class=\"fn\">AVG</span>(salary) > 50000  <span class=\"cm\">-- 再过滤组</span>\n<span class=\"kw\">ORDER BY</span> avg_sal <span class=\"kw\">DESC</span>;</pre>",
      "<span class=\"highlight\">WHERE过滤行（分组前），HAVING过滤组（分组后）</span>",
      "聚合函数：COUNT / SUM / AVG / MAX / MIN",
      "执行顺序：FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "db06",
    "cat": "数据库",
    "q": "索引原理 — B+Tree 与使用场景",
    "bullets": [
      "B+Tree：多路平衡树，叶子节点链表相连 → 范围查询高效",
      "为什么不用Hash索引？Hash只支持等值查询，不支持范围(>/</BETWEEN/ORDER BY)",
      "<pre><span class=\"cm\">-- 创建索引</span>\n<span class=\"kw\">CREATE INDEX</span> idx_email <span class=\"kw\">ON</span> users(email);\n<span class=\"cm\">-- 联合索引（最左匹配原则）</span>\n<span class=\"kw\">CREATE INDEX</span> idx_name_age <span class=\"kw\">ON</span> users(name, age);\n<span class=\"cm\">-- 可以加速 WHERE name=? / WHERE name=? AND age=?</span>\n<span class=\"cm\">-- 不能加速 WHERE age=?（没有最左列）</span></pre>",
      "<span class=\"highlight\">最左匹配原则</span>：联合索引(A,B,C)可用于查A / A+B / A+B+C，不能跳过A直接查B",
      "索引代价：写入变慢（要维护索引） + 占存储空间 → 不要滥建"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "db07",
    "cat": "数据库",
    "q": "事务 ACID — 四大特性",
    "bullets": [
      "<span class=\"highlight\">A</span>tomicity(原子性)：事务要么全成功要么全回滚，不存在做一半",
      "<span class=\"highlight\">C</span>onsistency(一致性)：事务前后数据满足所有约束",
      "<span class=\"highlight\">I</span>solation(隔离性)：并发事务互不干扰",
      "<span class=\"highlight\">D</span>urability(持久性)：提交后数据不丢失（写入磁盘）",
      "<pre><span class=\"kw\">BEGIN TRANSACTION</span>;\n<span class=\"kw\">UPDATE</span> accounts <span class=\"kw\">SET</span> balance = balance - 100 <span class=\"kw\">WHERE</span> id = 1;\n<span class=\"kw\">UPDATE</span> accounts <span class=\"kw\">SET</span> balance = balance + 100 <span class=\"kw\">WHERE</span> id = 2;\n<span class=\"kw\">COMMIT</span>;  <span class=\"cm\">-- 或 ROLLBACK</span></pre>",
      "隔离级别：Read Uncommitted → Read Committed → Repeatable Read(MySQL默认) → Serializable"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "db08",
    "cat": "数据库",
    "q": "EXPLAIN — 查询性能分析",
    "bullets": [
      "<pre><span class=\"kw\">EXPLAIN SELECT</span> * <span class=\"kw\">FROM</span> users <span class=\"kw\">WHERE</span> email = <span class=\"str\">'z@mail.com'</span>;\n<span class=\"cm\">-- 关注: type, key, rows, Extra</span>\n<span class=\"cm\">-- type: ALL(全表扫描,最差) → index → range → ref → const(最好)</span>\n<span class=\"cm\">-- key: 实际使用的索引（NULL=没用索引）</span>\n<span class=\"cm\">-- rows: 预估扫描行数（越少越好）</span>\n<span class=\"cm\">-- Extra: Using filesort(需优化) / Using index(覆盖索引,好)</span></pre>",
      "看到 type=ALL 就要考虑加索引",
      "看到 Using filesort 可能需要调整 ORDER BY 的索引",
      "<span class=\"highlight\">覆盖索引</span>：查询的列都在索引中 → 不需要回表 → 最快"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "db09",
    "cat": "数据库",
    "q": "SQL 优化 — 常见技巧",
    "bullets": [
      "①<span class=\"highlight\">避免SELECT *</span>：只查需要的列 → 减少IO + 可能用覆盖索引",
      "②<span class=\"highlight\">索引失效场景</span>：函数包裹列(WHERE YEAR(date)=2026) / LIKE以%开头 / 隐式类型转换 / OR条件",
      "③<span class=\"highlight\">分页优化</span>：LIMIT 10000,10 很慢 → 改用 WHERE id > last_id LIMIT 10（游标分页）",
      "④<span class=\"highlight\">批量操作</span>：循环INSERT 1000次 → 一条INSERT 1000行（减少网络往返）",
      "⑤<span class=\"highlight\">JOIN优化</span>：小表驱动大表 / 确保JOIN列有索引"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "db10",
    "cat": "数据库",
    "q": "NoSQL vs SQL — 选型指南",
    "bullets": [
      "SQL(MySQL/PostgreSQL)：结构化数据、复杂查询、事务要求高 → 金融/ERP/大部分业务",
      "MongoDB(文档型)：半结构化数据、Schema灵活 → 内容管理/日志/用户画像",
      "Redis(KV型)：超低延迟(<1ms)、内存存储 → 缓存/会话/排行榜/限流",
      "Elasticsearch(搜索型)：全文搜索+聚合分析 → 日志分析/搜索引擎",
      "向量数据库(FAISS/Qdrant)：相似度检索 → RAG/推荐/图像搜索",
      "原则：<span class=\"highlight\">先SQL，有明确理由再用NoSQL</span>"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "db11",
    "cat": "数据库",
    "q": "Redis 核心数据结构与应用",
    "bullets": [
      "<pre><span class=\"cm\"># 5种核心数据结构</span>\nString: SET key val / GET key          <span class=\"cm\"># 缓存/计数器</span>\nHash:   HSET user:1 name Zhou          <span class=\"cm\"># 对象存储</span>\nList:   LPUSH queue task1              <span class=\"cm\"># 消息队列</span>\nSet:    SADD tags python               <span class=\"cm\"># 去重/交并集</span>\nZSet:   ZADD rank 100 user1            <span class=\"cm\"># 排行榜</span></pre>",
      "所有操作O(1)或O(log n)（ZSet基于跳表），内存存储 → 读写<1ms",
      "持久化：RDB(定时快照) + AOF(追加写日志) → 重启后恢复",
      "过期策略：惰性删除 + 定期删除。设置TTL：<code>EXPIRE key 3600</code>",
      "AI项目应用：KV Cache管理 / Agent记忆存储 / API限流 / 特征缓存"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gt01",
    "cat": "Git",
    "q": "Git 基础工作流 — add/commit/status/log",
    "bullets": [
      "<pre>git init                     <span class=\"cm\"># 初始化仓库</span>\ngit add file.py              <span class=\"cm\"># 暂存单个文件</span>\ngit add .                    <span class=\"cm\"># 暂存所有变更（慎用）</span>\ngit commit -m <span class=\"str\">\"feat: add X\"</span> <span class=\"cm\"># 提交</span>\ngit status                   <span class=\"cm\"># 查看工作区状态</span>\ngit log --oneline -10        <span class=\"cm\"># 最近10条提交</span>\ngit diff                     <span class=\"cm\"># 工作区 vs 暂存区</span>\ngit diff --staged            <span class=\"cm\"># 暂存区 vs 最新commit</span></pre>",
      "三个区域：<span class=\"highlight\">工作区(Working) → 暂存区(Staging) → 仓库(Repository)</span>",
      "Commit message 规范：type(scope): description → feat/fix/docs/refactor/test"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "gt02",
    "cat": "Git",
    "q": ".gitignore — 忽略文件配置",
    "bullets": [
      "<pre><span class=\"cm\"># .gitignore 常用模式</span>\n*.pyc              <span class=\"cm\"># 忽略所有.pyc文件</span>\n__pycache__/       <span class=\"cm\"># 忽略目录</span>\n.env               <span class=\"cm\"># 忽略环境变量文件</span>\n*.log              <span class=\"cm\"># 忽略日志</span>\n!important.log     <span class=\"cm\"># 但保留这个</span>\ndata/              <span class=\"cm\"># 忽略数据目录</span>\n.venv/             <span class=\"cm\"># 忽略虚拟环境</span>\n*.pt *.pth *.ckpt  <span class=\"cm\"># 忽略模型权重</span></pre>",
      "已被track的文件需要 <code>git rm --cached file</code> 才能忽略",
      "AI项目必忽略：模型权重/数据集/.env/wandb目录/checkpoint"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "gt03",
    "cat": "Git",
    "q": "撤销操作 — restore/reset/revert 区别",
    "bullets": [
      "<pre><span class=\"cm\"># 撤销工作区修改（未add）</span>\ngit restore file.py\n<span class=\"cm\"># 取消暂存（已add未commit）</span>\ngit restore --staged file.py\n<span class=\"cm\"># 软重置（撤销commit但保留修改）</span>\ngit reset --soft HEAD~1\n<span class=\"cm\"># 硬重置（丢弃所有修改！危险！）</span>\ngit reset --hard HEAD~1\n<span class=\"cm\"># 创建新commit来撤销（安全，保留历史）</span>\ngit revert HEAD</pre>",
      "<span class=\"highlight\">reset改写历史，revert不改写历史</span>",
      "团队协作中已push的commit用revert，不要reset → 否则队友pull会出问题"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "gt04",
    "cat": "Git",
    "q": "分支操作与合并策略",
    "bullets": [
      "<pre>git branch feature-x          <span class=\"cm\"># 创建分支</span>\ngit checkout -b feature-x     <span class=\"cm\"># 创建并切换</span>\ngit switch -c feature-x       <span class=\"cm\"># 新语法（推荐）</span>\ngit merge feature-x           <span class=\"cm\"># 合并到当前分支</span>\ngit merge --no-ff feature-x   <span class=\"cm\"># 强制创建merge commit</span>\ngit branch -d feature-x       <span class=\"cm\"># 删除已合并分支</span></pre>",
      "Fast-Forward合并：直线历史，不产生merge commit → 简洁但丢失分支信息",
      "--no-ff：总是产生merge commit → 保留\"这是一个feature\"的信息",
      "原则：主分支用--no-ff，本地整理用ff"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "gt05",
    "cat": "Git",
    "q": "合并冲突解决 — 完整流程",
    "bullets": [
      "<pre><span class=\"cm\"># 1. 合并触发冲突</span>\ngit merge feature-x\n<span class=\"cm\"># CONFLICT in file.py</span>\n\n<span class=\"cm\"># 2. 打开冲突文件，手动编辑</span>\n<<<<<<< HEAD\n当前分支的代码\n=======\nfeature-x分支的代码\n>>>>>>> feature-x\n\n<span class=\"cm\"># 3. 解决后</span>\ngit add file.py\ngit commit  <span class=\"cm\"># 自动生成merge commit message</span></pre>",
      "预防冲突：频繁从主分支拉更新(rebase/merge) + 小粒度commit + 避免长生命周期分支",
      "工具：VS Code内置 / git mergetool / IntelliJ三向合并"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "gt06",
    "cat": "Git",
    "q": "rebase vs merge — 何时用哪个？",
    "bullets": [
      "<span class=\"highlight\">merge</span>：保留完整历史，产生merge commit → 团队协作、主分支合并",
      "<span class=\"highlight\">rebase</span>：线性历史，把分支的commit\"搬\"到目标分支末端 → 个人分支整理",
      "<pre><span class=\"cm\"># 在feature分支上执行</span>\ngit rebase main\n<span class=\"cm\"># 相当于：把feature的commit摘下来，接在main最新commit后面</span>\n<span class=\"cm\"># ⚠️ 不要rebase已push的公共分支！</span></pre>",
      "<span class=\"highlight\">黄金法则</span>：只rebase自己的本地分支，不rebase公共分支",
      "git pull --rebase：拉取时用rebase而不是merge → 避免无意义的merge commit"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "gt07",
    "cat": "Git",
    "q": "stash — 暂存未完成的工作",
    "bullets": [
      "<pre>git stash                   <span class=\"cm\"># 暂存工作区和暂存区的修改</span>\ngit stash -u                <span class=\"cm\"># 包括untracked文件</span>\ngit stash list              <span class=\"cm\"># 查看所有stash</span>\ngit stash pop               <span class=\"cm\"># 恢复最近的stash并删除</span>\ngit stash apply stash@{1}   <span class=\"cm\"># 恢复指定stash但不删除</span>\ngit stash drop stash@{0}    <span class=\"cm\"># 删除指定stash</span></pre>",
      "场景：正在写feature突然要修bug → stash保存 → 切分支修bug → 切回来pop",
      "注意：stash不会保存.gitignore里的文件，需要用 -a (--all)"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "gt08",
    "cat": "Git",
    "q": "cherry-pick — 精确选择commit",
    "bullets": [
      "<pre>git cherry-pick abc1234        <span class=\"cm\"># 把某个commit复制到当前分支</span>\ngit cherry-pick abc..def       <span class=\"cm\"># 范围(不含abc)</span>\ngit cherry-pick --no-commit abc <span class=\"cm\"># 只应用修改不自动commit</span></pre>",
      "场景①：hotfix在错误的分支上提交了 → cherry-pick到正确分支",
      "场景②：只想从feature分支取某个特定修复 → cherry-pick而非merge整个分支",
      "注意：cherry-pick会创建新commit（不同hash），不是\"移动\"而是\"复制\""
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gt09",
    "cat": "Git",
    "q": "reflog — 恢复误操作的救命工具",
    "bullets": [
      "<pre>git reflog                     <span class=\"cm\"># 查看所有HEAD移动历史</span>\n<span class=\"cm\"># 输出: abc1234 HEAD@{0}: reset: moving to HEAD~3</span>\n<span class=\"cm\"># 输出: def5678 HEAD@{1}: commit: add feature</span>\n\n<span class=\"cm\"># 恢复到误操作前</span>\ngit reset --hard def5678       <span class=\"cm\"># 或 HEAD@{1}</span></pre>",
      "reflog记录本地所有引用的变化，<span class=\"highlight\">即使被reset/rebase也能找回</span>",
      "保留约90天 → 不是永久的。重要代码还是要push到remote",
      "场景：git reset --hard后发现删错了 → reflog找到之前的commit → 恢复"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gt10",
    "cat": "Git",
    "q": "bisect — 二分法定位bug",
    "bullets": [
      "<pre>git bisect start\ngit bisect bad                 <span class=\"cm\"># 当前commit有bug</span>\ngit bisect good v1.0           <span class=\"cm\"># 这个版本没bug</span>\n<span class=\"cm\"># Git自动checkout中间的commit</span>\n<span class=\"cm\"># 测试后告诉Git:</span>\ngit bisect good  <span class=\"cm\"># 或 bad</span>\n<span class=\"cm\"># 重复直到找到引入bug的commit</span>\ngit bisect reset               <span class=\"cm\"># 结束</span></pre>",
      "O(log n)步找到引入bug的commit — 100个commit只需~7步",
      "自动化：<code>git bisect run pytest test_x.py</code> → 自动根据测试结果判断good/bad",
      "场景：上周还好的功能今天突然坏了，不知道哪个commit引入的"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gt11",
    "cat": "Git",
    "q": "工作流对比 — GitFlow vs Trunk-Based",
    "bullets": [
      "<span class=\"highlight\">GitFlow</span>：main + develop + feature/ + release/ + hotfix/ → 严格流程，适合版本发布软件",
      "<span class=\"highlight\">Trunk-Based</span>：只有main（trunk），短期feature分支快速合并 → 适合CI/CD、互联网公司",
      "GitHub Flow：简化版GitFlow，main + feature/ → 通过PR合并 → 大多数项目推荐",
      "字节/Google/Meta 倾向 Trunk-Based → 小粒度commit + feature flag + 持续部署",
      "选择依据：发布频率高→Trunk / 需要多版本维护→GitFlow"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gs01",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你在 feature 分支开发到一半，突然要修一个紧急 bug",
    "bullets": [
      "<pre><span class=\"cm\"># 1. 暂存当前未完成的工作</span>\ngit stash push -m <span class=\"str\">\"WIP: feature-login halfway\"</span>\n\n<span class=\"cm\"># 2. 切到主分支，创建 hotfix</span>\ngit switch main\ngit switch -c hotfix/payment-crash\n\n<span class=\"cm\"># 3. 修复 bug，提交并合并</span>\ngit add .\ngit commit -m <span class=\"str\">\"fix: payment null pointer crash\"</span>\ngit switch main\ngit merge --no-ff hotfix/payment-crash\n\n<span class=\"cm\"># 4. 回到 feature 分支，恢复工作</span>\ngit switch feature-login\ngit stash pop</pre>",
      "stash 是一个<span class=\"highlight\">栈结构</span>，可以存多个：<code>git stash list</code> 查看所有条目",
      "<code>git stash pop</code> = 恢复并删除 | <code>git stash apply</code> = 恢复但保留（更安全）",
      "给 stash 加 message（<code>-m</code>）是好习惯，否则多个 stash 分不清哪个是哪个",
      "替代方案：直接 <code>git commit -m \"WIP\"</code> 然后走了再 <code>git reset --soft HEAD~1</code> 恢复"
    ],
    "lv": 2
  },
  {
    "id": "gs02",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你 commit 了一个包含密码的 .env 文件到 Git 历史",
    "bullets": [
      "仅仅 <code>git rm --cached .env</code> + 加 .gitignore <span class=\"highlight\">是不够的</span> — 密码仍然在历史 commit 里！",
      "<pre><span class=\"cm\"># 方案A：BFG Repo Cleaner（推荐，快）</span>\njava -jar bfg.jar --delete-files .env\ngit reflog expire --expire=now --all\ngit gc --prune=now --aggressive\n\n<span class=\"cm\"># 方案B：git filter-repo（官方推荐替代 filter-branch）</span>\ngit filter-repo --path .env --invert-paths\n\n<span class=\"cm\"># 清理完必须 force push</span>\ngit push --force --all</pre>",
      "Force push 后<span class=\"highlight\">通知所有团队成员重新 clone</span>，否则他们 push 会把旧历史带回来",
      "善后：<span class=\"highlight\">立即轮换所有泄露的密码/token</span>，因为 Git 历史可能已被 fork 或缓存",
      "预防：.gitignore 模板 + <code>pre-commit</code> hook 扫描敏感关键词（detect-secrets / gitleaks）"
    ],
    "lv": 2
  },
  {
    "id": "gs03",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你发现昨天的 commit message 写错了",
    "bullets": [
      "<pre><span class=\"cm\"># 情况1：修改最后一条 commit message</span>\ngit commit --amend -m <span class=\"str\">\"fix: correct error handling in payment module\"</span>\n\n<span class=\"cm\"># 情况2：修改更早的 commit（比如倒数第3个）</span>\ngit rebase -i HEAD~3\n<span class=\"cm\"># 在编辑器中把目标 commit 前的 \"pick\" 改成 \"reword\"</span>\n<span class=\"cm\"># 保存退出后 Git 会让你编辑该 commit message</span></pre>",
      "<span class=\"highlight\">黄金法则：只能改还没 push 的 commit！</span>已 push 的 = 改写共享历史 = 队友灾难",
      "如果已经 push 了呢？两个选择：①接受错误 message ②force push 并通知团队",
      "amend 本质是<span class=\"highlight\">替换旧 commit</span>（新 hash），不是\"编辑\" — 旧 commit 仍存在于 reflog 中"
    ],
    "lv": 2
  },
  {
    "id": "gs04",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你的 PR 有 20 个零碎 commit，reviewer 要求整理成 3 个有意义的 commit",
    "bullets": [
      "<pre><span class=\"cm\"># 方案A：Interactive rebase（精确控制）</span>\ngit rebase -i HEAD~20\n<span class=\"cm\"># 编辑器中的操作：</span>\n<span class=\"cm\"># pick abc1234 feat: add user model        ← 保留</span>\n<span class=\"cm\"># squash def5678 fix typo in model         ← 合入上一个</span>\n<span class=\"cm\"># squash ghi9012 add validation            ← 合入上一个</span>\n<span class=\"cm\"># pick jkl3456 feat: add user API          ← 第二组开始</span>\n<span class=\"cm\"># fixup mno7890 fix API response format    ← 合入，丢弃message</span>\n<span class=\"cm\"># pick pqr1234 test: add user tests        ← 第三组</span></pre>",
      "<pre><span class=\"cm\"># 方案B：soft reset 重新提交（更简单粗暴）</span>\ngit reset --soft origin/main\n<span class=\"cm\"># 此时所有改动都在暂存区</span>\ngit commit -m <span class=\"str\">\"feat: add user model with validation\"</span>\ngit commit -m <span class=\"str\">\"feat: add user REST API\"</span>\ngit commit -m <span class=\"str\">\"test: add user module tests\"</span></pre>",
      "squash vs fixup：<span class=\"highlight\">squash 保留 message 让你编辑，fixup 直接丢弃 message</span>",
      "整理完后需要 <code>git push --force-with-lease</code>（比 --force 安全，会检查远端是否有新提交）",
      "好的 commit 粒度：一个 commit = 一个逻辑变更 = 能独立 revert 不破坏其他功能"
    ],
    "lv": 3
  },
  {
    "id": "gs05",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：git pull 后发现一堆合并冲突，你想先回到 pull 之前的状态",
    "bullets": [
      "<pre><span class=\"cm\"># 情况1：merge 还没完成（正在冲突中）</span>\ngit merge --abort\n<span class=\"cm\"># 一切回到 merge 前的状态，冲突标记消失</span>\n\n<span class=\"cm\"># 情况2：merge 已经完成（手滑 commit 了）</span>\ngit reset --hard ORIG_HEAD\n<span class=\"cm\"># ORIG_HEAD 指向 merge/rebase 前的位置</span>\n\n<span class=\"cm\"># 情况3：不确定要回到哪里</span>\ngit reflog\n<span class=\"cm\"># 找到 pull 之前的 commit hash</span>\ngit reset --hard abc1234</pre>",
      "⚠️ <code>--hard</code> 会<span class=\"highlight\">丢弃所有未提交的修改</span>，确保没有重要的未提交工作",
      "更安全的做法：先 <code>git stash</code> 保存未提交修改，再 reset",
      "<code>git pull --rebase</code> 遇到冲突时用 <code>git rebase --abort</code> 取消",
      "预防：养成 pull 前先 <code>git stash</code> 或先 commit 的习惯"
    ],
    "lv": 2
  },
  {
    "id": "gs06",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你 commit 了但还没 push，发现少了一个文件",
    "bullets": [
      "<pre><span class=\"cm\"># 方案A：amend 追加到上一个 commit（推荐）</span>\ngit add forgotten_file.py\ngit commit --amend --no-edit\n<span class=\"cm\"># --no-edit 保持原来的 commit message 不变</span>\n<span class=\"cm\"># 文件被追加进最后一个 commit</span>\n\n<span class=\"cm\"># 方案B：单独新建一个 commit（更简单）</span>\ngit add forgotten_file.py\ngit commit -m <span class=\"str\">\"chore: add forgotten_file.py\"</span></pre>",
      "amend 实质是<span class=\"highlight\">创建一个新 commit 替换旧的</span>（hash 变了），而不是\"编辑\"",
      "方案A 优点：历史干净 | 方案B 优点：更安全，不改写历史",
      "如果已经 push 了：<span class=\"highlight\">别 amend！直接新建 commit</span>，否则需要 force push"
    ],
    "lv": 2
  },
  {
    "id": "gs07",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：两个人同时改了同一个文件的同一行，如何解决冲突",
    "bullets": [
      "<pre><span class=\"cm\"># Git 标记冲突的格式</span>\ndef calculate_price(item):\n<<<<<<< HEAD\n    return item.price * 0.9    <span class=\"cm\"># 你的改动：9折</span>\n=======\n    return item.price * 0.85   <span class=\"cm\"># 同事的改动：85折</span>\n>>>>>>> feature-discount</pre>",
      "<pre><span class=\"cm\"># 解决步骤</span>\n<span class=\"cm\"># 1. 理解双方改动的意图（不要盲目选一个！）</span>\n<span class=\"cm\"># 2. 手动编辑：保留一方 / 合并两者 / 重写</span>\ndef calculate_price(item, vip=False):\n    return item.price * (0.85 if vip else 0.9)\n\n<span class=\"cm\"># 3. 标记解决并提交</span>\ngit add pricing.py\ngit commit  <span class=\"cm\"># Git 自动生成 merge commit message</span></pre>",
      "工具推荐：<span class=\"highlight\">VS Code 三向合并编辑器</span>（上方显示双方，下方编辑结果）、<code>git mergetool</code>",
      "预防冲突的团队实践：小粒度提交 + 频繁 pull/rebase + 模块职责划分清晰",
      "冲突不是错误，是<span class=\"highlight\">正常的协作信号</span> — 解决时要和同事沟通确认意图"
    ],
    "lv": 3
  },
  {
    "id": "gs08",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你想查看某一行代码是谁在什么时候写的",
    "bullets": [
      "<pre><span class=\"cm\"># 查看每一行的作者和提交信息</span>\ngit blame file.py\n<span class=\"cm\"># 输出示例：</span>\n<span class=\"cm\"># a1b2c3d4 (张三 2025-12-01) def calculate():</span>\n<span class=\"cm\"># e5f6g7h8 (李四 2026-01-15)     return x * 0.9</span>\n\n<span class=\"cm\"># 只看某几行</span>\ngit blame -L 10,20 file.py\n\n<span class=\"cm\"># 搜索某段代码是什么时候加入/删除的</span>\ngit log -p -S <span class=\"str\">\"calculate_price\"</span>\n\n<span class=\"cm\"># 追踪文件改名历史</span>\ngit log --follow --oneline utils/pricing.py</pre>",
      "实际用途：<span class=\"highlight\">线上 bug 定位</span>（谁改的？为什么改？当时的 PR 是什么？）",
      "<code>git log -p -S \"string\"</code> 是\"pickaxe\" 搜索 — 找到<span class=\"highlight\">添加或删除</span>某个字符串的所有 commit",
      "<code>git blame -w</code> 忽略空白变更，<code>-M</code> 检测行移动，<code>-C</code> 检测跨文件复制",
      "VS Code / JetBrains 内置 blame 注解 — 鼠标悬停即可查看，无需命令行"
    ],
    "lv": 2
  },
  {
    "id": "gs09",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你误用 git reset --hard 丢了本地改动，如何恢复",
    "bullets": [
      "<pre><span class=\"cm\"># 情况1：丢失的改动曾经 commit 过</span>\ngit reflog\n<span class=\"cm\"># 找到 reset 之前的 commit hash</span>\n<span class=\"cm\"># e.g. abc1234 HEAD@{1}: commit: add feature X</span>\ngit reset --hard abc1234\n<span class=\"cm\"># 恢复成功！reflog 保留约 90 天</span>\n\n<span class=\"cm\"># 情况2：改动只 git add 过（未 commit）</span>\ngit fsck --lost-found\n<span class=\"cm\"># 在 .git/lost-found/other/ 中寻找 blob</span>\ngit show &lt;blob-hash&gt;  <span class=\"cm\"># 查看内容</span></pre>",
      "情况3：改动<span class=\"highlight\">从未 add 也从未 commit → 无法恢复！Git 从未记录过它</span>",
      "<code>git reflog</code> 是你的<span class=\"highlight\">后悔药</span>：记录 HEAD 的每一次移动（commit/reset/checkout/rebase）",
      "教训：<span class=\"highlight\">commit early, commit often</span> — 哪怕是 WIP commit，有 commit 就有恢复的可能",
      "团队规范：用 <code>git reset --soft</code> 代替 <code>--hard</code>，除非你100%确定要丢弃改动"
    ],
    "lv": 3
  },
  {
    "id": "gs10",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你要把别的分支上的某一个 commit 拿过来，但不要整个分支",
    "bullets": [
      "<pre><span class=\"cm\"># 找到目标 commit 的 hash</span>\ngit log --oneline main\n<span class=\"cm\"># abc1234 fix: payment timeout handling</span>\n\n<span class=\"cm\"># cherry-pick 到当前分支</span>\ngit cherry-pick abc1234\n\n<span class=\"cm\"># 如果有冲突</span>\n<span class=\"cm\"># 解决冲突 → git add → git cherry-pick --continue</span>\n<span class=\"cm\"># 或放弃：git cherry-pick --abort</span>\n\n<span class=\"cm\"># cherry-pick 多个 commit</span>\ngit cherry-pick abc1234 def5678\n<span class=\"cm\"># 或连续范围（不含起点）</span>\ngit cherry-pick abc1234..ghi9012</pre>",
      "典型场景：hotfix 已合入 main，release 分支也需要同一个修复",
      "⚠️ cherry-pick <span class=\"highlight\">创建全新的 commit（不同 hash）</span>，不是引用 — 两个分支上是独立的副本",
      "如果后续两个分支 merge，Git 通常能自动处理重复改动，但偶尔会冲突",
      "替代方案：如果需要拿整个分支的部分改动，考虑 <code>git rebase --onto</code>"
    ],
    "lv": 2
  },
  {
    "id": "gs11",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：线上出 bug 了，你需要找出是哪个 commit 引入的",
    "bullets": [
      "<pre><span class=\"cm\"># 1. 启动二分查找</span>\ngit bisect start\ngit bisect bad               <span class=\"cm\"># 当前版本有 bug</span>\ngit bisect good v2.0.0       <span class=\"cm\"># 这个版本是好的</span>\n\n<span class=\"cm\"># 2. Git 自动 checkout 中间的 commit</span>\n<span class=\"cm\">#    你测试 → 告诉 Git 结果</span>\ngit bisect good              <span class=\"cm\"># 这个没 bug</span>\ngit bisect bad               <span class=\"cm\"># 这个有 bug</span>\n<span class=\"cm\"># ... 重复几次</span>\n\n<span class=\"cm\"># 3. Git 定位到罪魁祸首 commit</span>\n<span class=\"cm\"># abc1234 is the first bad commit</span>\n\ngit bisect reset             <span class=\"cm\"># 退出 bisect，回到原分支</span></pre>",
      "<pre><span class=\"cm\"># 自动化：让脚本代替人工测试</span>\ngit bisect start HEAD v2.0.0\ngit bisect run python test_payment.py\n<span class=\"cm\"># Git 自动跑测试，自动标记 good/bad</span>\n<span class=\"cm\"># 退出码 0 = good, 非0 = bad</span></pre>",
      "效率：1000 个 commit 只需测试 ~<span class=\"highlight\">10 次</span>（O(log n) 二分搜索 vs 线性 O(n)）",
      "找到 commit 后：<code>git show abc1234</code> 看改了什么 → <code>git revert abc1234</code> 快速回滚",
      "适用于：能明确判断\"有 bug / 没 bug\"的场景 — 最好有自动化测试脚本配合"
    ],
    "lv": 3
  },
  {
    "id": "gs12",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：团队用 GitFlow，你的 feature 分支落后 develop 50 个 commit，如何同步",
    "bullets": [
      "<pre><span class=\"cm\"># 方案A：Merge（安全，保留完整历史）</span>\ngit switch feature-login\ngit merge develop\n<span class=\"cm\"># 产生一个 merge commit</span>\n<span class=\"cm\"># 历史中能看到\"何时同步了 develop\"</span>\ngit push origin feature-login\n\n<span class=\"cm\"># 方案B：Rebase（历史更干净）</span>\ngit switch feature-login\ngit rebase develop\n<span class=\"cm\"># 你的 commit 被\"搬\"到 develop 最新位置之后</span>\n<span class=\"cm\"># 必须 force push（因为历史被改写了）</span>\ngit push --force-with-lease origin feature-login</pre>",
      "经验法则：<span class=\"highlight\">共享分支 → merge | 个人分支 → rebase</span>",
      "<code>--force-with-lease</code> 比 <code>--force</code> 安全：如果远端有别人新 push 的提交会拒绝，防止覆盖他人工作",
      "Rebase 冲突处理：每个 commit 可能单独冲突 → <code>解决 → git add → git rebase --continue</code>，太多冲突可以 <code>git rebase --abort</code> 放弃",
      "团队应统一策略：在 PR 描述 / CONTRIBUTING.md 中写清楚用 merge 还是 rebase"
    ],
    "lv": 2
  },
  {
    "id": "ce01",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC1 两数之和 (Two Sum)",
    "bullets": [
      "给定整数数组和目标值target，找出数组中和为target的<span class=\"highlight\">两个数的下标</span>",
      "示例：nums=[2,7,11,15], target=9 → 返回[0,1]（因为2+7=9）",
      "核心思路：用<span class=\"highlight\">哈希表</span>存储已遍历的值→下标映射，一次遍历中查找 target-num 是否已存在",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">twoSum</span>(nums, target):\n    seen = {}  <span class=\"cm\"># val -> index</span>\n    <span class=\"kw\">for</span> i, num <span class=\"kw\">in</span> enumerate(nums):\n        complement = target - num\n        <span class=\"kw\">if</span> complement <span class=\"kw\">in</span> seen:\n            <span class=\"kw\">return</span> [seen[complement], i]\n        seen[num] = i\n    <span class=\"kw\">return</span> []</pre>",
      "时间O(n)，空间O(n)。暴力解O(n²)会超时",
      "易错点：不能用同一个元素两次；返回的是下标不是值"
    ],
    "lv": 1
  },
  {
    "id": "ce02",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC21 合并两个有序链表 (Merge Two Sorted Lists)",
    "bullets": [
      "将两个升序链表合并为一个新的<span class=\"highlight\">升序链表</span>并返回",
      "示例：l1=[1,2,4], l2=[1,3,4] → [1,1,2,3,4,4]",
      "核心思路：创建<span class=\"highlight\">dummy head</span>，逐个比较两个链表头节点，较小的接上去",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">mergeTwoLists</span>(l1, l2):\n    dummy = ListNode(0)\n    curr = dummy\n    <span class=\"kw\">while</span> l1 <span class=\"kw\">and</span> l2:\n        <span class=\"kw\">if</span> l1.val <= l2.val:\n            curr.next = l1\n            l1 = l1.next\n        <span class=\"kw\">else</span>:\n            curr.next = l2\n            l2 = l2.next\n        curr = curr.next\n    curr.next = l1 <span class=\"kw\">if</span> l1 <span class=\"kw\">else</span> l2  <span class=\"cm\"># 接上剩余部分</span>\n    <span class=\"kw\">return</span> dummy.next</pre>",
      "时间O(m+n)，空间O(1)。dummy head技巧避免处理头节点为空的边界",
      "变体：LC23 合并K个有序链表（用堆/分治）"
    ],
    "lv": 1
  },
  {
    "id": "ce03",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC70 爬楼梯 (Climbing Stairs)",
    "bullets": [
      "每次爬 <span class=\"num\">1</span> 或 <span class=\"num\">2</span> 个台阶，问到第n阶有多少种不同方法",
      "示例：n=3 → 3种（1+1+1, 1+2, 2+1）",
      "核心思路：<span class=\"highlight\">动态规划</span>，状态转移 dp[i]=dp[i-1]+dp[i-2]，本质就是斐波那契数列",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">climbStairs</span>(n):\n    <span class=\"kw\">if</span> n <= 2:\n        <span class=\"kw\">return</span> n\n    a, b = 1, 2  <span class=\"cm\"># dp[1]=1, dp[2]=2</span>\n    <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(3, n + 1):\n        a, b = b, a + b\n    <span class=\"kw\">return</span> b</pre>",
      "时间O(n)，空间O(1)。滚动变量优化掉数组",
      "DP入门经典题，面试常用来考察DP思维。变体：每次可爬1~k步"
    ],
    "lv": 1
  },
  {
    "id": "ce04",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC121 买卖股票的最佳时机 (Best Time to Buy and Sell Stock)",
    "bullets": [
      "给定股价数组，只能买卖<span class=\"highlight\">一次</span>，求最大利润（不能先卖后买）",
      "示例：prices=[7,1,5,3,6,4] → 5（第2天买入价1，第5天卖出价6）",
      "核心思路：一次遍历，维护<span class=\"highlight\">历史最低价min_price</span>，每天计算当前价-最低价更新最大利润",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">maxProfit</span>(prices):\n    min_price = float(<span class=\"str\">'inf'</span>)\n    max_profit = 0\n    <span class=\"kw\">for</span> price <span class=\"kw\">in</span> prices:\n        min_price = min(min_price, price)\n        max_profit = max(max_profit, price - min_price)\n    <span class=\"kw\">return</span> max_profit</pre>",
      "时间O(n)，空间O(1)。贪心思想：在最低点买，在之后的最高点卖",
      "变体：LC122 可多次买卖；LC123 最多两次买卖（DP状态机）"
    ],
    "lv": 1
  },
  {
    "id": "ce05",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC141 环形链表 (Linked List Cycle)",
    "bullets": [
      "判断链表中是否存在<span class=\"highlight\">环</span>",
      "示例：head=[3,2,0,-4], pos=1 → true（尾部连接到第2个节点）",
      "核心思路：<span class=\"highlight\">快慢指针</span>，快指针每次走2步，慢指针走1步，若有环必相遇",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">hasCycle</span>(head):\n    slow = fast = head\n    <span class=\"kw\">while</span> fast <span class=\"kw\">and</span> fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        <span class=\"kw\">if</span> slow == fast:\n            <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n    <span class=\"kw\">return</span> <span class=\"kw\">False</span></pre>",
      "时间O(n)，空间O(1)。用set存访问过的节点也行但空间O(n)",
      "变体：LC142 环形链表II — 找入环节点（相遇后再走一个指针从head出发，再次相遇点即入口）"
    ],
    "lv": 1
  },
  {
    "id": "ce06",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC206 反转链表 (Reverse Linked List)",
    "bullets": [
      "将单链表<span class=\"highlight\">就地反转</span>并返回新的头节点",
      "示例：[1,2,3,4,5] → [5,4,3,2,1]",
      "核心思路：<span class=\"highlight\">三指针迭代</span>——prev、curr、nxt，每次把curr.next指向prev，三个指针同步前移",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">reverseList</span>(head):\n    prev = <span class=\"kw\">None</span>\n    curr = head\n    <span class=\"kw\">while</span> curr:\n        nxt = curr.next   <span class=\"cm\"># 先保存下一个</span>\n        curr.next = prev  <span class=\"cm\"># 反转指针</span>\n        prev = curr       <span class=\"cm\"># prev前移</span>\n        curr = nxt        <span class=\"cm\"># curr前移</span>\n    <span class=\"kw\">return</span> prev</pre>",
      "时间O(n)，空间O(1)。递归写法也行但空间O(n)",
      "面试最高频链表题之一。变体：LC92 反转部分链表、LC25 K个一组反转"
    ],
    "lv": 1
  },
  {
    "id": "ce07",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC226 翻转二叉树 (Invert Binary Tree)",
    "bullets": [
      "将二叉树的每个节点的左右子树<span class=\"highlight\">交换</span>（镜像翻转）",
      "示例：[4,2,7,1,3,6,9] → [4,7,2,9,6,3,1]",
      "核心思路：<span class=\"highlight\">递归</span>——先翻转左右子树，再交换左右子节点",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">invertTree</span>(root):\n    <span class=\"kw\">if not</span> root:\n        <span class=\"kw\">return</span> <span class=\"kw\">None</span>\n    root.left, root.right = invertTree(root.right), invertTree(root.left)\n    <span class=\"kw\">return</span> root</pre>",
      "时间O(n)，空间O(h)，h为树高。最简洁的递归三行代码",
      "也可用BFS/DFS迭代实现。面试经典题，Homebrew作者因此题被Google拒"
    ],
    "lv": 1
  },
  {
    "id": "ce08",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC543 二叉树的直径 (Diameter of Binary Tree)",
    "bullets": [
      "求二叉树中任意两节点之间的<span class=\"highlight\">最长路径长度</span>（边数），路径不一定经过根",
      "示例：[1,2,3,4,5] → 3（路径为4→2→1→3或5→2→1→3）",
      "核心思路：<span class=\"highlight\">DFS后序遍历</span>，每个节点处 直径=左深度+右深度，用全局变量记录最大值",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">diameterOfBinaryTree</span>(root):\n    ans = 0\n    <span class=\"kw\">def</span> <span class=\"fn\">depth</span>(node):\n        <span class=\"kw\">nonlocal</span> ans\n        <span class=\"kw\">if not</span> node:\n            <span class=\"kw\">return</span> 0\n        L = depth(node.left)\n        R = depth(node.right)\n        ans = max(ans, L + R)  <span class=\"cm\"># 更新直径</span>\n        <span class=\"kw\">return</span> max(L, R) + 1     <span class=\"cm\"># 返回深度</span>\n    depth(root)\n    <span class=\"kw\">return</span> ans</pre>",
      "时间O(n)，空间O(h)。关键区分：函数返回的是<span class=\"highlight\">深度</span>，但更新的是<span class=\"highlight\">直径</span>",
      "易错点：直径是边数不是节点数；最长路径不一定过根节点"
    ],
    "lv": 1
  },
  {
    "id": "cm01",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC3 无重复字符的最长子串 (Longest Substring Without Repeating Characters)",
    "bullets": [
      "给定字符串，找出不含重复字符的<span class=\"highlight\">最长子串</span>的长度",
      "示例：s=\"abcabcbb\" → 3（子串\"abc\"）",
      "核心思路：<span class=\"highlight\">滑动窗口</span>+哈希集合。右指针扩展窗口，遇到重复字符时左指针收缩直到无重复",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">lengthOfLongestSubstring</span>(s):\n    char_set = set()\n    left = ans = 0\n    <span class=\"kw\">for</span> right <span class=\"kw\">in</span> range(len(s)):\n        <span class=\"kw\">while</span> s[right] <span class=\"kw\">in</span> char_set:\n            char_set.remove(s[left])\n            left += 1\n        char_set.add(s[right])\n        ans = max(ans, right - left + 1)\n    <span class=\"kw\">return</span> ans</pre>",
      "时间O(n)，空间O(min(n,m))，m为字符集大小",
      "优化：用dict记录字符最后出现的位置，left可直接跳转而非逐个移动"
    ],
    "lv": 2
  },
  {
    "id": "cm02",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC15 三数之和 (3Sum)",
    "bullets": [
      "从数组中找出所有和为 <span class=\"num\">0</span> 的<span class=\"highlight\">不重复三元组</span>",
      "示例：nums=[-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]",
      "核心思路：先<span class=\"highlight\">排序</span>，固定一个数，对剩余部分用<span class=\"highlight\">双指针</span>找两数之和。跳过重复值去重",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">threeSum</span>(nums):\n    nums.sort()\n    res = []\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums) - 2):\n        <span class=\"kw\">if</span> i > 0 <span class=\"kw\">and</span> nums[i] == nums[i-1]:  <span class=\"cm\"># 跳过重复</span>\n            <span class=\"kw\">continue</span>\n        l, r = i + 1, len(nums) - 1\n        <span class=\"kw\">while</span> l < r:\n            s = nums[i] + nums[l] + nums[r]\n            <span class=\"kw\">if</span> s < 0:\n                l += 1\n            <span class=\"kw\">elif</span> s > 0:\n                r -= 1\n            <span class=\"kw\">else</span>:\n                res.append([nums[i], nums[l], nums[r]])\n                <span class=\"kw\">while</span> l < r <span class=\"kw\">and</span> nums[l] == nums[l+1]: l += 1\n                <span class=\"kw\">while</span> l < r <span class=\"kw\">and</span> nums[r] == nums[r-1]: r -= 1\n                l += 1; r -= 1\n    <span class=\"kw\">return</span> res</pre>",
      "时间O(n²)，空间O(1)（不计输出）。排序O(n log n)被O(n²)覆盖",
      "易错点：去重逻辑必须在找到解之后和外层循环开头两处都做"
    ],
    "lv": 2
  },
  {
    "id": "cm03",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC46 全排列 (Permutations)",
    "bullets": [
      "给定不重复整数数组，返回所有可能的<span class=\"highlight\">全排列</span>",
      "示例：nums=[1,2,3] → [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
      "核心思路：<span class=\"highlight\">回溯法</span>。每次从剩余元素中选一个加入路径，递归到底则收集结果",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">permute</span>(nums):\n    res = []\n    <span class=\"kw\">def</span> <span class=\"fn\">backtrack</span>(path, used):\n        <span class=\"kw\">if</span> len(path) == len(nums):\n            res.append(path[:])\n            <span class=\"kw\">return</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n            <span class=\"kw\">if</span> used[i]:\n                <span class=\"kw\">continue</span>\n            used[i] = <span class=\"kw\">True</span>\n            path.append(nums[i])\n            backtrack(path, used)\n            path.pop()       <span class=\"cm\"># 撤销选择</span>\n            used[i] = <span class=\"kw\">False</span>  <span class=\"cm\"># 恢复状态</span>\n    backtrack([], [<span class=\"kw\">False</span>] * len(nums))\n    <span class=\"kw\">return</span> res</pre>",
      "时间O(n·n!)，空间O(n)。回溯三要素：选择列表、路径、结束条件",
      "变体：LC47 有重复数字的全排列（排序+剪枝）"
    ],
    "lv": 2
  },
  {
    "id": "cm04",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC49 字母异位词分组 (Group Anagrams)",
    "bullets": [
      "将字母异位词（字母相同但顺序不同）<span class=\"highlight\">分组</span>",
      "示例：[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"] → [[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]",
      "核心思路：异位词排序后相同，用<span class=\"highlight\">排序后的字符串做key</span>，哈希表归类",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\n\n<span class=\"kw\">def</span> <span class=\"fn\">groupAnagrams</span>(strs):\n    groups = defaultdict(list)\n    <span class=\"kw\">for</span> s <span class=\"kw\">in</span> strs:\n        key = tuple(sorted(s))  <span class=\"cm\"># 排序作为key</span>\n        groups[key].append(s)\n    <span class=\"kw\">return</span> list(groups.values())</pre>",
      "时间O(n·k·log k)，n为字符串数，k为最长字符串长度。空间O(nk)",
      "优化：用26位字母计数元组做key可降到O(nk)，但实测排序法更快（k通常很小）"
    ],
    "lv": 2
  },
  {
    "id": "cm05",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC53 最大子数组和 (Maximum Subarray)",
    "bullets": [
      "找出整数数组中和最大的<span class=\"highlight\">连续子数组</span>并返回其和",
      "示例：nums=[-2,1,-3,4,-1,2,1,-5,4] → 6（子数组[4,-1,2,1]）",
      "核心思路：<span class=\"highlight\">Kadane算法</span>——维护以当前元素结尾的最大子数组和，若前面的和为负则丢弃",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">maxSubArray</span>(nums):\n    curr_sum = max_sum = nums[0]\n    <span class=\"kw\">for</span> num <span class=\"kw\">in</span> nums[1:]:\n        curr_sum = max(num, curr_sum + num)  <span class=\"cm\"># 要么接上，要么重新开始</span>\n        max_sum = max(max_sum, curr_sum)\n    <span class=\"kw\">return</span> max_sum</pre>",
      "时间O(n)，空间O(1)。DP视角：dp[i]=max(nums[i], dp[i-1]+nums[i])",
      "变体：要求返回子数组本身（记录start/end索引）；分治法O(n log n)"
    ],
    "lv": 2
  },
  {
    "id": "cm06",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC56 合并区间 (Merge Intervals)",
    "bullets": [
      "给定若干区间集合，合并所有<span class=\"highlight\">重叠的区间</span>",
      "示例：intervals=[[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]",
      "核心思路：按<span class=\"highlight\">起点排序</span>，遍历时比较当前区间起点与上一个区间终点，重叠则合并（取更大的终点）",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">merge</span>(intervals):\n    intervals.sort(key=<span class=\"kw\">lambda</span> x: x[0])\n    merged = [intervals[0]]\n    <span class=\"kw\">for</span> start, end <span class=\"kw\">in</span> intervals[1:]:\n        <span class=\"kw\">if</span> start <= merged[-1][1]:  <span class=\"cm\"># 有重叠</span>\n            merged[-1][1] = max(merged[-1][1], end)\n        <span class=\"kw\">else</span>:\n            merged.append([start, end])\n    <span class=\"kw\">return</span> merged</pre>",
      "时间O(n log n)排序主导，空间O(n)。注意边界：start <= end（等号意味着相邻也合并）",
      "变体：LC57 插入区间、LC986 区间列表交集"
    ],
    "lv": 2
  },
  {
    "id": "cm07",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC102 二叉树的层序遍历 (Binary Tree Level Order Traversal)",
    "bullets": [
      "返回二叉树的<span class=\"highlight\">层序遍历</span>结果（逐层从左到右）",
      "示例：root=[3,9,20,null,null,15,7] → [[3],[9,20],[15,7]]",
      "核心思路：<span class=\"highlight\">BFS</span>用队列，每层处理前记录队列大小，循环该大小次数即为一层",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\n\n<span class=\"kw\">def</span> <span class=\"fn\">levelOrder</span>(root):\n    <span class=\"kw\">if not</span> root:\n        <span class=\"kw\">return</span> []\n    res, queue = [], deque([root])\n    <span class=\"kw\">while</span> queue:\n        level = []\n        <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(len(queue)):  <span class=\"cm\"># 当前层的节点数</span>\n            node = queue.popleft()\n            level.append(node.val)\n            <span class=\"kw\">if</span> node.left:  queue.append(node.left)\n            <span class=\"kw\">if</span> node.right: queue.append(node.right)\n        res.append(level)\n    <span class=\"kw\">return</span> res</pre>",
      "时间O(n)，空间O(n)。BFS模板题，deque比list.pop(0)快（O(1) vs O(n)）",
      "变体：LC107 自底向上层序、LC103 锯齿形层序、LC199 右视图"
    ],
    "lv": 2
  },
  {
    "id": "cm08",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC146 LRU缓存 (LRU Cache)",
    "bullets": [
      "设计一个满足<span class=\"highlight\">LRU(最近最少使用)</span>缓存约束的数据结构，get和put均O(1)",
      "示例：LRUCache(2) → put(1,1) → put(2,2) → get(1)=1 → put(3,3) → get(2)=-1（被淘汰）",
      "核心思路：<span class=\"highlight\">哈希表+双向链表</span>。哈希表O(1)查找，双向链表O(1)增删和调整顺序",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> OrderedDict\n\n<span class=\"kw\">class</span> <span class=\"fn\">LRUCache</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, capacity):\n        self.cache = OrderedDict()\n        self.cap = capacity\n\n    <span class=\"kw\">def</span> <span class=\"fn\">get</span>(self, key):\n        <span class=\"kw\">if</span> key <span class=\"kw\">not in</span> self.cache:\n            <span class=\"kw\">return</span> -1\n        self.cache.move_to_end(key)  <span class=\"cm\"># 标记为最近使用</span>\n        <span class=\"kw\">return</span> self.cache[key]\n\n    <span class=\"kw\">def</span> <span class=\"fn\">put</span>(self, key, value):\n        <span class=\"kw\">if</span> key <span class=\"kw\">in</span> self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        <span class=\"kw\">if</span> len(self.cache) > self.cap:\n            self.cache.popitem(last=<span class=\"kw\">False</span>)  <span class=\"cm\"># 淘汰最久未用</span></pre>",
      "时间O(1)，空间O(capacity)。Python用OrderedDict最简洁，面试可能要求手写双向链表",
      "字节跳动高频题。面试官可能追问：如何手写双向链表实现？线程安全版本？"
    ],
    "lv": 2
  },
  {
    "id": "cm09",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC200 岛屿数量 (Number of Islands)",
    "bullets": [
      "给定 '1'(陆地) 和 '0'(水) 组成的二维网格，计算<span class=\"highlight\">岛屿数量</span>",
      "示例：grid=[[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]] → 2",
      "核心思路：遍历网格，遇到'1'就<span class=\"highlight\">DFS/BFS淹没</span>整个连通区域（标记为'0'），岛屿计数+1",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">numIslands</span>(grid):\n    <span class=\"kw\">if not</span> grid:\n        <span class=\"kw\">return</span> 0\n    rows, cols = len(grid), len(grid[0])\n    count = 0\n\n    <span class=\"kw\">def</span> <span class=\"fn\">dfs</span>(r, c):\n        <span class=\"kw\">if</span> r < 0 <span class=\"kw\">or</span> r >= rows <span class=\"kw\">or</span> c < 0 <span class=\"kw\">or</span> c >= cols <span class=\"kw\">or</span> grid[r][c] != <span class=\"str\">'1'</span>:\n            <span class=\"kw\">return</span>\n        grid[r][c] = <span class=\"str\">'0'</span>  <span class=\"cm\"># 淹没</span>\n        dfs(r+1, c); dfs(r-1, c)\n        dfs(r, c+1); dfs(r, c-1)\n\n    <span class=\"kw\">for</span> r <span class=\"kw\">in</span> range(rows):\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> range(cols):\n            <span class=\"kw\">if</span> grid[r][c] == <span class=\"str\">'1'</span>:\n                dfs(r, c)\n                count += 1\n    <span class=\"kw\">return</span> count</pre>",
      "时间O(m×n)，空间O(m×n)最坏递归栈深度。也可用BFS或并查集",
      "变体：LC695 岛屿最大面积、LC463 岛屿周长、LC827 最大人工岛"
    ],
    "lv": 2
  },
  {
    "id": "cm10",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC236 二叉树的最近公共祖先 (Lowest Common Ancestor of a Binary Tree)",
    "bullets": [
      "给定二叉树和两个节点p、q，找到它们的<span class=\"highlight\">最近公共祖先(LCA)</span>",
      "示例：root=[3,5,1,6,2,0,8,null,null,7,4], p=5, q=1 → LCA=3",
      "核心思路：<span class=\"highlight\">后序递归</span>——左右子树分别查找p和q，若分居两侧则当前节点就是LCA",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">lowestCommonAncestor</span>(root, p, q):\n    <span class=\"kw\">if not</span> root <span class=\"kw\">or</span> root == p <span class=\"kw\">or</span> root == q:\n        <span class=\"kw\">return</span> root\n    left = lowestCommonAncestor(root.left, p, q)\n    right = lowestCommonAncestor(root.right, p, q)\n    <span class=\"kw\">if</span> left <span class=\"kw\">and</span> right:  <span class=\"cm\"># p和q分居两侧</span>\n        <span class=\"kw\">return</span> root\n    <span class=\"kw\">return</span> left <span class=\"kw\">if</span> left <span class=\"kw\">else</span> right</pre>",
      "时间O(n)，空间O(h)。递归含义：在以root为根的子树中查找p或q，找到就返回",
      "易错点：LCA可以是p或q本身。变体：LC235 BST的LCA（利用BST性质更简单）"
    ],
    "lv": 2
  },
  {
    "id": "cm11",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC322 零钱兑换 (Coin Change)",
    "bullets": [
      "给定不同面额硬币和总金额amount，求凑出总金额所需的<span class=\"highlight\">最少硬币数</span>，凑不出返回-1",
      "示例：coins=[1,2,5], amount=11 → 3（5+5+1）",
      "核心思路：<span class=\"highlight\">完全背包DP</span>。dp[i]=凑出金额i的最少硬币数，dp[i]=min(dp[i-c]+1) for c in coins",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">coinChange</span>(coins, amount):\n    dp = [float(<span class=\"str\">'inf'</span>)] * (amount + 1)\n    dp[0] = 0  <span class=\"cm\"># base case: 凑0元需要0枚</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(1, amount + 1):\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> coins:\n            <span class=\"kw\">if</span> c <= i:\n                dp[i] = min(dp[i], dp[i - c] + 1)\n    <span class=\"kw\">return</span> dp[amount] <span class=\"kw\">if</span> dp[amount] != float(<span class=\"str\">'inf'</span>) <span class=\"kw\">else</span> -1</pre>",
      "时间O(amount × n)，空间O(amount)，n为硬币种类数",
      "贪心不可行（如coins=[1,3,4], amount=6，贪心4+1+1=3枚，DP 3+3=2枚）。变体：LC518 零钱兑换II（求方案数）"
    ],
    "lv": 2
  },
  {
    "id": "cm12",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC560 和为K的子数组 (Subarray Sum Equals K)",
    "bullets": [
      "给定整数数组和整数k，统计和为k的<span class=\"highlight\">连续子数组</span>个数",
      "示例：nums=[1,1,1], k=2 → 2（[1,1]出现两次）",
      "核心思路：<span class=\"highlight\">前缀和+哈希表</span>。prefix[j]-prefix[i]=k ↔ prefix[i]=prefix[j]-k，用哈希表记录每个前缀和出现的次数",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\n\n<span class=\"kw\">def</span> <span class=\"fn\">subarraySum</span>(nums, k):\n    count = 0\n    prefix_sum = 0\n    seen = defaultdict(int)\n    seen[0] = 1  <span class=\"cm\"># 前缀和为0出现1次（空前缀）</span>\n    <span class=\"kw\">for</span> num <span class=\"kw\">in</span> nums:\n        prefix_sum += num\n        count += seen[prefix_sum - k]  <span class=\"cm\"># 有多少个前缀和等于当前-k</span>\n        seen[prefix_sum] += 1\n    <span class=\"kw\">return</span> count</pre>",
      "时间O(n)，空间O(n)。注意：数组含负数所以<span class=\"highlight\">不能用滑动窗口</span>",
      "易错点：seen[0]=1不能忘（处理从头开始的子数组）；暴力O(n²)会超时"
    ],
    "lv": 2
  }
];
