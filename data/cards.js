// Auto-generated from data/*.json — edit the JSON files, then run: bash build-cards.sh
// Generated: 2026-04-06T14:10:58
const BUILTIN_CARDS = [
  {
    "id": "s01",
    "cat": "自我介绍",
    "q": "1分钟自我介绍（SA版）",
    "q_ja": "1分間自己紹介（SA版）",
    "bullets": [
      "周辰予，东京科学大学博士一年级，研究可信ML和LLM Agent，JST SPRING奖学金",
      "本科四川大学自动化，硕士早稻田信息工程，博士东京科学大学",
      "三个项目：SiLR通用Agent框架（两领域验证）/ Agentic RAG日语文档系统 / 云边协同推理系统",
      "每个项目都有端到端实现和量化结果，不只是demo",
      "选SA：想把技术能力用在真实客户场景中，SA是技术和业务的桥梁"
    ],
    "bullets_ja": [
      "周辰予と申します。東京科学大学の博士1年で、信頼性の高いMLとLLM Agentを研究しております。JST SPRING奨学金を受給しています",
      "学部は四川大学の自動化専攻、修士は早稲田大学の情報工学、博士は東京科学大学です",
      "3つのプロジェクト経験があります：SiLR汎用Agentフレームワーク（2領域で検証済み）/ Agentic RAG日本語文書システム / クラウドエッジ協調推論システム",
      "各プロジェクトでエンドツーエンドの実装と定量的な結果を出しており、デモだけではありません",
      "SAを志望する理由は、技術力を実際のお客様の課題解決に活かしたいからです。SAは技術とビジネスの架け橋だと考えています"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "s02",
    "cat": "自我介绍",
    "q": "为什么来BytePlus？",
    "q_ja": "なぜBytePlusを志望されましたか？",
    "bullets": [
      "LLM Agent和RAG研究方向，想看真实客户场景（遇到的问题、约束、评价标准完全不同）",
      "BytePlus背靠字节技术积累，面向海外企业市场",
      "我在日本、会日语，能直接参与日本市场客户服务，匹配度高"
    ],
    "bullets_ja": [
      "LLM AgentとRAGを研究していますが、実際のお客様の現場を見たいと思いました。研究と現場では、直面する課題・制約・評価基準がまったく異なります",
      "BytePlusはバイトダンスの技術力を基盤に、海外の法人市場に展開しています",
      "私は日本在住で日本語ができますので、日本市場のお客様対応に直接貢献できます。マッチ度が高いと考えています"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "s03",
    "cat": "自我介绍",
    "q": "为什么做SA而不是继续研究？",
    "q_ja": "なぜ研究を続けずにSAを選んだのですか？",
    "bullets": [
      "研究中最有成就感的不是发论文，而是把想法变成可运行系统",
      "SiLR-Agent从选型到微调到评测到集成都自己做",
      "SA能在更多样的客户场景中做这件事，直接看到技术对客户的価値",
      "避免说\"不想做研究\"，而是强调对\"落地\"的热情"
    ],
    "bullets_ja": [
      "研究で一番やりがいを感じたのは論文を出すことではなく、アイデアを動くシステムにすることでした",
      "SiLR-Agentではモデル選定からファインチューニング、評価、統合まですべて自分で行いました",
      "SAならもっと多様なお客様のシナリオでそれができ、技術がお客様にもたらす価値を直接見ることができます",
      "「研究をしたくない」ではなく、「実用化・実装への情熱」を強調するのがポイントです"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "s04",
    "cat": "自我介绍",
    "q": "博士生，2027年不能转正你也愿意来？",
    "q_ja": "博士課程の学生ですが、2027年に正社員登用がなくても来たいですか？",
    "bullets": [
      "是的，实习价值不在转正，而在ToB AI落地的实战经验",
      "研究方向就是LLM Agent，BytePlus工作会直接反哺研究",
      "毕业后有更强的工业化视角，这是双赢的"
    ],
    "bullets_ja": [
      "はい。インターンの価値は正社員登用ではなく、ToB AI実装の実戦経験にあると考えています",
      "研究テーマがまさにLLM Agentですので、BytePlusでの業務が研究に直接フィードバックされます",
      "卒業後により強い産業化の視点を持てるようになります。これは双方にとってメリットがあると思います"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "s05",
    "cat": "自我介绍",
    "q": "你做过最有挑战的项目？",
    "q_ja": "最もチャレンジングだったプロジェクトは何ですか？",
    "bullets": [
      "技术层面：让LLM理解物理规则，在仿真环境做安全可靠操作（不能只\"说对话\"，要\"做对事\"）",
      "通用性层面：框架设计成场景无关的，在网络路由（完全不同领域）验证通过",
      "最大坑：DPO对齐花了一周，结果成功率反降7.6pp——技术选型不能只看理论，要用数据验证"
    ],
    "bullets_ja": [
      "技術面では、LLMに物理法則を理解させ、シミュレーション環境で安全かつ確実な操作を行わせることです。「会話ができる」だけでなく「正しく行動する」ことが求められました",
      "汎用性の面では、フレームワークをシナリオ非依存に設計し、ネットワークルーティングというまったく異なる領域でも検証に成功しました",
      "最大の落とし穴はDPOアライメントでした。1週間かけて準備・学習・調整したのに、成功率がむしろ7.6pp低下しました。技術選定は理論だけでなくデータで検証すべきだと学びました"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "s06",
    "cat": "自我介绍",
    "q": "你有没有失败的经历？怎么处理？",
    "q_ja": "失敗した経験はありますか？どう対処しましたか？",
    "bullets": [
      "SiLR-Agent的DPO对齐：花一周准备数据+训练+调参，效果反而变差",
      "分析原因：DPO偏好数据在工具调用场景产生偏差，模型学到\"避免调用工具\"",
      "收获：不能假设某个技术一定有效，要快速验证、用数据说话",
      "JP-DocRAG Embedding微调中断教训：训练必须跑完才能下结论"
    ],
    "bullets_ja": [
      "SiLR-AgentのDPOアライメントです。1週間かけてデータ準備・学習・パラメータ調整をしましたが、むしろ性能が悪化しました",
      "原因を分析したところ、DPOの選好データがツール呼び出し場面でバイアスを生み、モデルが「ツールを呼ばない」方向に学習していました",
      "教訓として、ある技術が必ず有効だと仮定せず、素早く検証してデータで判断すべきだと学びました",
      "JP-DocRAGのEmbeddingファインチューニング中断の教訓もあります。学習は最後まで完了させないと結論は出せません"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "s07",
    "cat": "自我介绍",
    "q": "高质量反问（3个）",
    "q_ja": "質の高い逆質問（3つ）",
    "bullets": [
      "①SA实习最常做的具体工作是什么？（PoC、model eval、方案设计？各占多少）",
      "②日本市场客户最常见的需求类型是什么？（推荐/视频/RAG/Agent？）",
      "③您在BytePlus做SA最大的收获或挑战是什么？"
    ],
    "bullets_ja": [
      "①SAインターンの日常業務で最も多い具体的な作業は何でしょうか？（PoC、model eval、ソリューション設計など、それぞれどのくらいの割合ですか）",
      "②日本市場のお客様で最も多いニーズはどのような種類でしょうか？（レコメンド/動画/RAG/Agentなど）",
      "③BytePlusでSAをされていて、最も大きな収穫や課題は何でしょうか？"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "s08",
    "cat": "自我介绍",
    "q": "客户说\"效果不好\"，你怎么排查？",
    "q_ja": "お客様が「効果が良くない」と言った場合、どう調査しますか？",
    "bullets": [
      "先搞清楚\"不好\"是什么：准确率低？延迟高？输出格式不对？",
      "①数据：客户数据和评测数据分布一致吗？",
      "②Prompt：设计是否合理？上下文和约束足够？",
      "③模型选择：任务是否适合当前模型？需要换或微调？",
      "④系统层面：RAG检索不准 → 模型拿到错误上下文"
    ],
    "bullets_ja": [
      "まず「良くない」の具体的な内容を確認します。精度が低い？レイテンシが高い？出力フォーマットが違う？",
      "①データ：お客様のデータと評価データの分布は一致していますか？",
      "②Prompt：設計は適切ですか？コンテキストと制約条件は十分ですか？",
      "③モデル選定：タスクは現在のモデルに適していますか？変更やファインチューニングが必要ですか？",
      "④システム面：RAG検索の精度が低い → モデルが誤ったコンテキストを受け取っている可能性"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "b01",
    "cat": "SA商業",
    "q": "核心商业指标（8个）",
    "q_ja": "コアビジネス指標（8つ）",
    "bullets": [
      "ROI：投入产出比（花100万省300万，ROI=200%）",
      "GMV：总交易额 / CTR：点击率 / CAC：获客成本",
      "LTV：客户终身价值 / ARPU：每用户平均收入",
      "Churn Rate：客户流失率 / MRR/ARR：月/年经常性收入",
      "SA用法：不说\"准确率+5%\"，说\"推荐准确率+5%预计带来GMV增长XX%\""
    ],
    "bullets_ja": [
      "ROI：投資対効果（100万円投資して300万円削減ならROI=200%）",
      "GMV：総取引額 / CTR：クリック率 / CAC：顧客獲得コスト",
      "LTV：顧客生涯価値 / ARPU：ユーザーあたり平均収益",
      "Churn Rate：顧客離脱率 / MRR/ARR：月次/年次経常収益",
      "SAとしての使い方：「精度+5%」ではなく「レコメンド精度+5%によりGMVがXX%向上する見込み」と伝えます"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "b02",
    "cat": "SA商業",
    "q": "企业客户采购流程（6阶段）",
    "q_ja": "法人顧客の導入プロセス（6段階）",
    "bullets": [
      "需求确认(1-2周) → 技术评估(2-4周) → PoC(4-8周) → Pilot(1-3月) → Production → 扩展",
      "<span class=\"highlight\">PoC是最关键的阶段</span>——用客户真实数据跑小规模验证，\"用数据说话\"",
      "企业客户不会因为demo好就下单，要经过漫长评估",
      "SA的工作贯穿整个流程，是客户和公司之间的技术桥梁"
    ],
    "bullets_ja": [
      "要件確認(1〜2週間) → 技術評価(2〜4週間) → PoC(4〜8週間) → Pilot(1〜3ヶ月) → Production → 拡張",
      "<span class=\"highlight\">PoCが最も重要な段階です</span>——お客様の実データで小規模な検証を行い、「データで語る」ことが鍵です",
      "法人のお客様はデモが良いだけでは発注しません。長い評価プロセスを経る必要があります",
      "SAの業務はプロセス全体を通じて関わります。お客様と自社の技術的な架け橋です"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "b03",
    "cat": "SA商業",
    "q": "ToB vs ToC 核心区别",
    "q_ja": "ToB vs ToC の根本的な違い",
    "bullets": [
      "ToB：多人决策（技术负责人+采购+管理层），周期几月到一年，客单价几万到几千万",
      "ToC：个人决策，周期几秒到几天，客单价几元到几百元",
      "ToB：长期合作+定制化服务，流失代价极高（一个大客户占收入10%）",
      "<span class=\"highlight\">SA只存在于ToB</span>：因为需求复杂、决策周期长、客单价高，需要懂技术的人全程陪跑"
    ],
    "bullets_ja": [
      "ToB：複数人で意思決定（技術責任者＋調達＋経営層）、サイクルは数ヶ月〜1年、単価は数万〜数千万円",
      "ToC：個人で意思決定、サイクルは数秒〜数日、単価は数円〜数百円",
      "ToB：長期的な協力関係＋カスタマイズされたサービス。離脱のコストが非常に高い（大口顧客1社で売上の10%を占めることも）",
      "<span class=\"highlight\">SAはToBにしか存在しません</span>：ニーズが複雑で、意思決定サイクルが長く、単価が高いため、技術を理解する人が全プロセスに伴走する必要があるからです"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "b04",
    "cat": "SA商業",
    "q": "5种定价模式",
    "q_ja": "5つの価格モデル",
    "bullets": [
      "订阅制：按月/年付费（SaaS标准模式）",
      "按量付费：用多少付多少（OpenAI API按token计费）",
      "阶梯定价：用量越大单价越低",
      "<span class=\"highlight\">成果报酬型</span>：按效果付费（BytePlus Recommend支持，推荐带来实际转化才收费）",
      "Freemium：基础免费，高级收费（Slack）",
      "SA用法：成果报酬型是很好的卖点——\"效果不好不收钱\""
    ],
    "bullets_ja": [
      "サブスクリプション：月額/年額課金（SaaSの標準モデル）",
      "従量課金：使った分だけ支払い（OpenAI APIはトークン単位で課金）",
      "階段型価格：利用量が多いほど単価が下がる",
      "<span class=\"highlight\">成果報酬型</span>：効果に応じた課金（BytePlus Recommendが対応。レコメンドによる実際のコンバージョンが発生して初めて課金）",
      "Freemium：基本機能は無料、プレミアム機能は有料（Slack）",
      "SAとしての使い方：成果報酬型は強力なセールスポイントです——「効果がなければ費用はかかりません」"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "b05",
    "cat": "SA商業",
    "q": "IaaS / PaaS / SaaS 和 BytePlus定位",
    "q_ja": "IaaS / PaaS / SaaS とBytePlusのポジショニング",
    "bullets": [
      "IaaS=租地自己盖房；PaaS=租毛坯房自己装修；SaaS=租精装房拎包入住",
      "BytePlus主要是PaaS和SaaS",
      "Recommend=SaaS（客户直接用后台配置）；MediaLive/VoD/RTC=PaaS（SDK集成）",
      "MaaS：模型即服务，SA帮客户判断用哪层（直接调API / LoRA微调 / 自己训练）"
    ],
    "bullets_ja": [
      "IaaS＝土地を借りて自分で建てる；PaaS＝スケルトンの部屋を借りて自分で内装する；SaaS＝家具付き物件にそのまま入居する",
      "BytePlusは主にPaaSとSaaSを提供しています",
      "Recommend＝SaaS（お客様が管理画面から直接設定）；MediaLive/VoD/RTC＝PaaS（SDK統合）",
      "MaaS：Model as a Serviceです。SAがお客様の最適なレイヤーを判断します（API直接呼び出し / LoRAファインチューニング / 自社トレーニング）"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "b06",
    "cat": "SA商業",
    "q": "BytePlus 相比三大云的差异化",
    "q_ja": "BytePlusの三大クラウドとの差別化ポイント",
    "bullets": [
      "不是通用云，是<span class=\"highlight\">垂直场景解决方案</span>（推荐/视频/内容生成）",
      "技术经过亿级用户验证（TikTok/抖音同款）",
      "在内容/推荐/视频三个方向技术积累比三大云更深",
      "更灵活定价（成果报酬型）",
      "对亚洲市场（日本/东南亚）有更强本地化能力"
    ],
    "bullets_ja": [
      "汎用クラウドではなく、<span class=\"highlight\">特定シナリオに特化したソリューション</span>です（レコメンド/動画/コンテンツ生成）",
      "技術は億単位のユーザーで検証済みです（TikTok/Douyinと同じ技術基盤）",
      "コンテンツ/レコメンド/動画の3分野では、三大クラウドより深い技術蓄積があります",
      "より柔軟な価格設定が可能です（成果報酬型）",
      "アジア市場（日本/東南アジア）に対してより強いローカライゼーション能力があります"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "b07",
    "cat": "SA商業",
    "q": "LLM落地5大挑战（SA日常要解决的）",
    "q_ja": "LLM実装の5大課題（SAが日常的に取り組むもの）",
    "bullets": [
      "① 幻觉：RAG + Grounding + Guardrails + Human-in-the-loop",
      "② 成本：缓存/小模型/prompt优化/云边协同",
      "③ 延迟：模型量化/边缘部署/流式输出",
      "④ 数据安全/合规：on-prem部署、data residency（日本法规）",
      "⑤ 可解释性：给客户看决策依据，金融/医疗生死线"
    ],
    "bullets_ja": [
      "① ハルシネーション：RAG + Grounding + Guardrails + Human-in-the-loop",
      "② コスト：キャッシュ/小型モデル/Prompt最適化/クラウドエッジ協調",
      "③ レイテンシ：モデル量子化/エッジデプロイ/ストリーミング出力",
      "④ データセキュリティ/コンプライアンス：オンプレミスデプロイ、Data Residency（日本の法規制）",
      "⑤ 説明可能性：お客様に意思決定の根拠を示すこと。金融/医療では生命線です"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "b08",
    "cat": "SA商業",
    "q": "学术研究 vs 企业落地的核心差异",
    "q_ja": "学術研究 vs 企業実装の根本的な違い",
    "bullets": [
      "评价标准：SOTA指标/论文 vs ROI/客户满意度/稳定性",
      "数据：公开/干净 vs 客户私有/脏/不平衡",
      "模型选择：追求最强 vs 追求性价比（够用就行）",
      "成本：实验室有GPU就行 vs 每个token都是钱",
      "维护：跑完实验就结束 vs 7x24运行+持续更新",
      "你的项目已在往落地方向走（有仿真器验证/前后端/评测体系）"
    ],
    "bullets_ja": [
      "評価基準：SOTA指標/論文 vs ROI/顧客満足度/安定性",
      "データ：公開/クリーン vs 顧客の非公開データ/ノイズあり/不均衡",
      "モデル選定：最強を追求 vs コスパを追求（十分使えればOK）",
      "コスト：研究室にGPUがあれば良い vs トークン1つ1つがコスト",
      "運用：実験が終われば完了 vs 24時間365日稼働＋継続的アップデート",
      "自分のプロジェクトはすでに実装方向に進んでいます（シミュレーター検証/フロントエンド・バックエンド/評価体系あり）"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "b09",
    "cat": "SA商業",
    "q": "为什么用BytePlus而不是直接调OpenAI API？",
    "q_ja": "なぜOpenAI APIを直接使わずにBytePlusを利用するのですか？",
    "bullets": [
      "不只是模型，而是<span class=\"highlight\">完整解决方案</span>（数据处理/选型/部署运维）",
      "多模型评测选型，不绑定单一模型",
      "本地化服务：日本有本地团队，理解当地业务习惯和合规",
      "成本优化：缓存策略/prompt优化/模型选型降低总成本",
      "数据安全：企业客户对数据隐私敏感，提供更可控的部署方式"
    ],
    "bullets_ja": [
      "単なるモデルではなく、<span class=\"highlight\">トータルソリューション</span>です（データ処理/モデル選定/デプロイ・運用）",
      "複数モデルの評価・選定が可能で、単一モデルに依存しません",
      "ローカライゼーション：日本に現地チームがあり、現地のビジネス慣習やコンプライアンスを理解しています",
      "コスト最適化：キャッシュ戦略/Prompt最適化/モデル選定により総コストを削減します",
      "データセキュリティ：法人のお客様はデータプライバシーに敏感です。より管理しやすいデプロイ方式を提供します"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "b10",
    "cat": "SA商業",
    "q": "关键云服务术语（必知10个）",
    "q_ja": "必須クラウドサービス用語（10個）",
    "bullets": [
      "SLA：服务质量承诺（如可用性99.9%=一年最多停机8.7小时）",
      "Latency延迟 / Throughput吞吐量 / Scalability可扩展性",
      "On-premise本地部署（日本金融客户常见）",
      "Data Residency：数据必须存在特定国家（日本法规）",
      "Vendor Lock-in：客户担心用了服务就离不开",
      "Compliance合规 / Multi-tenancy多租户 / Hybrid Cloud混合云"
    ],
    "bullets_ja": [
      "SLA：サービス品質の保証（例：可用性99.9%＝年間最大ダウンタイム8.7時間）",
      "Latencyレイテンシ / Throughputスループット / Scalabilityスケーラビリティ",
      "On-premiseオンプレミス（日本の金融系のお客様でよく見られます）",
      "Data Residency：データが特定の国に保管されなければならない要件（日本の法規制）",
      "Vendor Lock-in：サービスを使い始めると離脱できなくなることへの懸念",
      "Complianceコンプライアンス / Multi-tenancyマルチテナント / Hybrid Cloudハイブリッドクラウド"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "d01",
    "cat": "深度思考",
    "q": "The Bitter Lesson：Agent工程设计会被模型进步淘汰吗？",
    "q_ja": "The Bitter Lesson：Agentのエンジニアリング設計はモデルの進歩により淘汰されますか？",
    "bullets": [
      "面试官观点：SiLR验证/5层路由/10工具Agent都是<span class=\"highlight\">工程补丁</span>——补偿模型能力不足",
      "模型能力在飞速进步，等模型原生支持self-verification/可靠tool-use，这些工程就是废代码",
      "Rich Sutton \"The Bitter Lesson\"：利用算力和数据的通用方法，长期总是胜过精心设计的领域工程",
      "工程方案不可标准化（每个客户都要重新设计）、有保质期、不是产品——这不scale",
      "本质在考察：你有没有<span class=\"highlight\">产品化思维</span>，还是只会做项目制交付"
    ],
    "bullets_ja": [
      "面接官の視点：SiLRの検証/5層ルーティング/10ツールAgentはすべて<span class=\"highlight\">エンジニアリングパッチ</span>——モデルの能力不足を補っているだけ",
      "モデルの能力は急速に進歩しています。モデルがself-verification/信頼性の高いtool-useをネイティブにサポートすれば、これらのパッチは不要になります",
      "Rich Sutton「The Bitter Lesson」：計算力とデータを活用する汎用的な手法は、長期的には精巧に設計されたドメインエンジニアリングに常に勝ります",
      "エンジニアリング方式は標準化できず（顧客ごとに再設計が必要）、賞味期限があり、プロダクトではありません——スケールしません",
      "本質的に問われているのは：<span class=\"highlight\">プロダクト化の思考</span>ができるか、それともプロジェクト単位の納品しかできないか"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "d02",
    "cat": "深度思考",
    "q": "如何回答\"从模型能力而非工程设计来思考价值\"？",
    "q_ja": "「エンジニアリングではなくモデル能力の観点から価値を考えよ」にどう答えますか？",
    "bullets": [
      "第一层（认同）：您说的对，SiLR验证就是因为当前模型动作可靠性不够。模型原生可靠后这层不需要了",
      "第二层（模型层面的工作）：①Post-training alignment——DPO隐式偏差是模型问题不是工程能解决的；②评测发现模型边界——RAG回归失败/few-shot 1>3这些洞察反馈给模型团队",
      "第三层（数据飞轮）：工程方案最大价值不是它本身，而是在真实场景中产生的<span class=\"highlight\">数据和洞察</span>——哪些query失败、哪些决策被拒——这些是训练下一代模型的燃料",
      "判断：<span class=\"highlight\">短期看工程，长期看模型</span>。SA角色会从\"设计工程补丁\"转向\"帮客户做post-training和evaluation\""
    ],
    "bullets_ja": [
      "第一層（同意）：おっしゃる通りです。SiLRの検証は現在のモデルのアクション信頼性が不十分だからこそ必要です。モデルがネイティブに信頼性を確保できれば、この層は不要になります",
      "第二層（モデルレベルの取り組み）：①Post-training alignment——DPOの暗黙的バイアスはモデルの問題であり、エンジニアリングでは解決できません；②評価によりモデルの限界を発見——RAG回帰タスクの失敗/few-shot 1>3などの知見をモデルチームにフィードバックします",
      "第三層（データフライホイール）：エンジニアリング方式の最大の価値はそれ自体ではなく、実際のシナリオで生まれる<span class=\"highlight\">データと知見</span>です——どのクエリが失敗し、どの判断が拒否されたか——これらは次世代モデルの学習データになります",
      "結論：<span class=\"highlight\">短期的にはエンジニアリング、長期的にはモデル</span>です。SAの役割は「エンジニアリングパッチの設計」から「お客様のpost-trainingとevaluationの支援」へ移行していきます"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "d03",
    "cat": "深度思考",
    "q": "模型评测（Model Evaluation）的价值在哪？（二面重点）",
    "q_ja": "モデル評価（Model Evaluation）の価値はどこにありますか？（二次面接の重点）",
    "bullets": [
      "不是跑个benchmark出个数字，而是<span class=\"highlight\">系统性地发现模型在客户场景中的边界</span>",
      "你做过的：66个场景×多模型(9B/14B/32B/GPT-5.4)×多方法(SFT/DPO/few-shot)的消融矩阵",
      "你发现的模型层面问题：DPO隐式偏差(−7.6pp) / RAG对回归任务有害 / few-shot 1>3 / 32B过拟合",
      "评测的产品化价值：帮客户在多个模型中选最适合其场景的那个——这就是MaaS中SA的核心職責",
      "评测→发现短板→数据收集→post-training→模型改进 = <span class=\"highlight\">数据飞轮</span>"
    ],
    "bullets_ja": [
      "ベンチマークを回して数値を出すだけではなく、<span class=\"highlight\">お客様のシナリオにおけるモデルの限界を体系的に発見すること</span>です",
      "自分の実績：66シナリオ×複数モデル(9B/14B/32B/GPT-5.4)×複数手法(SFT/DPO/few-shot)のアブレーション行列",
      "発見したモデルレベルの課題：DPO暗黙的バイアス(−7.6pp) / RAGが回帰タスクに有害 / few-shot 1>3 / 32Bの過学習",
      "評価のプロダクト化の価値：お客様のシナリオに最適なモデルを複数候補から選ぶこと——これがMaaSにおけるSAのコアな職責です",
      "評価→弱点発見→データ収集→post-training→モデル改善 = <span class=\"highlight\">データフライホイール</span>"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "d04",
    "cat": "深度思考",
    "q": "工程 vs 模型：你的项目中哪些是\"临时补丁\"哪些是\"持久价值\"？",
    "q_ja": "エンジニアリング vs モデル：あなたのプロジェクトで「一時的なパッチ」と「持続的な価値」はどれですか？",
    "bullets": [
      "<span class=\"highlight\">临时补丁</span>（模型进步后会淘汰）：SiLR验证循环 / 三层ActionParser / Observation压缩 / Agent强制调用guardrails",
      "<span class=\"highlight\">持久价值</span>（不随模型进步消失）：①评测方法论（怎么设计消融实验、怎么定义\"好\"）",
      "②领域数据资产（248条SFT轨迹、30K日语三元组、55个评测QA）",
      "③模型能力边界的洞察（DPO在结构化动作空间的失败模式、Token离散化鲁棒性发现）",
      "④客户场景理解（什么问题用RAG、什么不能用RAG、什么时候LSTM比LLM好）",
      "结论：工程是手段，<span class=\"highlight\">评测方法+数据资产+场景判断力</span>才是不被淘汰的能力"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">一時的なパッチ</span>（モデルの進歩で淘汰される）：SiLR検証ループ / 3層ActionParser / Observation圧縮 / Agentの強制Guardrails呼び出し",
      "<span class=\"highlight\">持続的な価値</span>（モデルの進歩に左右されない）：①評価方法論（アブレーション実験の設計方法、「良い」の定義方法）",
      "②ドメインデータ資産（248件のSFT軌跡、30K件の日本語トリプレット、55件の評価QA）",
      "③モデル能力の限界に関する知見（構造化アクション空間におけるDPOの失敗パターン、Token離散化のロバスト性の発見）",
      "④お客様のシナリオ理解（どの課題にRAGを使うか、RAGが使えないケース、LSTMがLLMより適している場面）",
      "結論：エンジニアリングは手段であり、<span class=\"highlight\">評価方法＋データ資産＋シナリオ判断力</span>こそが淘汰されない能力です"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "d05",
    "cat": "深度思考",
    "q": "BytePlus Recommend核心优势（3点+数据权重）",
    "q_ja": "BytePlus Recommendのコア優位性（3点＋データ重み付け）",
    "bullets": [
      "① 実時性：秒级更新用户兴趣画像，捕捉\"当下兴趣\"而非平均化历史兴趣（TikTok留存率核心）",
      "② 冷启动：新商品用内容属性做跨域迁移，从相似老商品借受众画像，上线第一天就能精准触达",
      "③ 自定义KPI：电商优化GMV/转化率，视频优化完播率——高CTR≠高GMV，要优化客户真正关心的业务指标",
      "数据权重：行为数据~80%（显示性偏好最强）> 内容属性~15%（冷启动补位）> 用户基本信息~5%（区分度低+隐私限制）",
      "成果报酬型定价是核心卖点——\"效果不好不收钱\""
    ],
    "bullets_ja": [
      "① リアルタイム性：秒単位でユーザーの興味プロファイルを更新し、平均化された過去の興味ではなく「今の興味」を捉えます（TikTokのリテンション率の核心技術）",
      "② コールドスタート：新商品はコンテンツ属性でクロスドメイン移行を行い、類似の既存商品からオーディエンスプロファイルを借りて、公開初日から精度の高いリーチが可能です",
      "③ カスタムKPI：ECではGMV/コンバージョン率を最適化し、動画では完全視聴率を最適化します。高CTR≠高GMVであり、お客様が本当に重視するビジネス指標を最適化することが重要です",
      "データの重み付け：行動データ約80%（顕示選好が最も強い）> コンテンツ属性約15%（コールドスタートの補完）> ユーザー基本情報約5%（区別度が低い＋プライバシー制約）",
      "成果報酬型の価格設定がコアのセールスポイントです——「効果がなければ費用はかかりません」"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "d06",
    "cat": "深度思考",
    "q": "RAG过时论：传统RAG vs Claude Code式Agent",
    "q_ja": "RAG時代遅れ論：従来型RAG vs Claude Code式Agent",
    "bullets": [
      "传统RAG：人类预设pipeline（检索→rerank→生成），<span class=\"highlight\">人决定检索什么、怎么排</span>",
      "Claude Code式：给模型工具（grep/read/glob/web search），<span class=\"highlight\">模型自己决定什么时候需要什么信息</span>",
      "传统RAG换场景要重新设计pipeline；Agent模式只需模型够强+工具定义清晰",
      "你做的BM25+Dense+RRF+Reranker+Embedding微调，本质是用工程弥补\"模型不知道该找什么\"",
      "面试官观点：当模型推理能力够强时，固定pipeline会被模型原生tool use能力吞掉"
    ],
    "bullets_ja": [
      "従来型RAG：人間が事前にパイプラインを設計（検索→リランク→生成）、<span class=\"highlight\">何を検索しどう並べるかは人が決める</span>",
      "Claude Code式：モデルにツールを与え（grep/read/glob/web search）、<span class=\"highlight\">モデル自身がいつどの情報が必要かを判断する</span>",
      "従来型RAGはシナリオが変わるとパイプラインの再設計が必要。Agentモードはモデルが十分強力でツール定義が明確であれば対応可能",
      "自分が行ったBM25+Dense+RRF+Reranker+Embeddingファインチューニングは、本質的に「モデルが何を探すべきかわからない」ことをエンジニアリングで補っています",
      "面接官の視点：モデルの推論能力が十分に強くなれば、固定パイプラインはモデルのネイティブなtool use能力に取って代わられます"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "d07",
    "cat": "深度思考",
    "q": "如何回应\"RAG是过时的\"？",
    "q_ja": "「RAGは時代遅れだ」にどう答えますか？",
    "bullets": [
      "先认同：确实，当模型推理能力够强时，固定pipeline会被替代",
      "但目前两者互补：①通用场景→强模型+工具（Claude Code方式）",
      "②<span class=\"highlight\">垂直领域</span>（日语电力法规）→领域微调检索仍有价值——模型不懂这个领域的术语，不知道该搜什么",
      "长期：随着模型领域知识增强，传统RAG pipeline价值递减",
      "持久价值不在pipeline本身，而在：评测数据集(55个QA) / 领域微调数据(30K三元组) / \"什么场景RAG有效什么无效\"的判断力"
    ],
    "bullets_ja": [
      "まず同意します：確かに、モデルの推論能力が十分に強くなれば、固定パイプラインは代替されるでしょう",
      "ただし現時点では両者は補完関係にあります：①汎用シナリオ→強力なモデル＋ツール（Claude Code方式）",
      "②<span class=\"highlight\">垂直領域</span>（日本語の電力法規など）→ドメイン特化の検索ファインチューニングにはまだ価値があります——モデルはその領域の専門用語を知らず、何を検索すべきかわかりません",
      "長期的には：モデルのドメイン知識が強化されるにつれ、従来型RAGパイプラインの価値は逓減していきます",
      "持続的な価値はパイプライン自体ではなく：評価データセット(55件のQA) / ドメインファインチューニングデータ(30Kトリプレット) / 「どのシナリオでRAGが有効でどこで無効か」という判断力にあります"
    ],
    "group": "面试",
    "lv": 2
  },
  {
    "id": "g01",
    "cat": "SiLR-Agent",
    "q": "SiLR-Agent 核心数字",
    "q_ja": "SiLR-Agentの主要指標",
    "bullets": [
      "恢复成功率 <span class=\"num\">97.0%</span>（64/66 IEEE 39-bus场景）",
      "安全违规率 <span class=\"num\">0%</span>（所有危险动作被SiLR拦截）",
      "平均 <span class=\"num\">3.2</span> 步完成恢复，max_steps=8",
      "超过GPT-5.4 zero-shot(82.1%) / few-shot-3(94.2%) / 1-shot(96.7%)",
      "推理成本低 <span class=\"num\">100倍</span>（本地14B vs GPT API）"
    ],
    "bullets_ja": [
      "復旧成功率 <span class=\"num\">97.0%</span>（IEEE 39-busシナリオ64/66件）",
      "安全違反率 <span class=\"num\">0%</span>（危険な操作はすべてSiLRが遮断）",
      "平均 <span class=\"num\">3.2</span> ステップで復旧完了、max_steps=8",
      "GPT-5.4を上回る：zero-shot(82.1%) / few-shot-3(94.2%) / 1-shot(96.7%)",
      "推論コスト <span class=\"num\">100倍</span> 削減（ローカル14B vs GPT API）"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g02",
    "cat": "SiLR-Agent",
    "q": "SiLR = Simulation-in-the-Loop Reasoning，解决什么问题？",
    "q_ja": "SiLR = Simulation-in-the-Loop Reasoningが解決する課題とは？",
    "bullets": [
      "核心痛点：LLM能推理但会\"幻觉动作\"——在安全关键领域（电网、金融、医疗）不可接受",
      "现有方案：要么盲目信任LLM，要么静态规则（漏检动态违规）",
      "SiLR：每步先在仿真器中验证安全性再执行，把安全保障从\"信任模型\"变成\"验证模型\"",
      "可迁移：任何有仿真器/规则引擎的场景（金融合规、医疗用药、代码沙箱）"
    ],
    "bullets_ja": [
      "核心課題：LLMは推論できるがハルシネーションによる誤操作を起こす——電力網・金融・医療などの安全重要領域では許容できない",
      "既存手法：LLMを盲目的に信頼するか、静的ルール（動的違反を見逃す）のどちらか",
      "SiLR：毎ステップ、シミュレータで安全性を検証してから実行する。安全保証を「モデルを信頼」から「モデルを検証」に変える",
      "汎用性：シミュレータ／ルールエンジンがある領域なら適用可能（金融コンプライアンス、医療投薬、コードサンドボックス）"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g03",
    "cat": "SiLR-Agent",
    "q": "Bounded ReAct 的5步执行循环",
    "q_ja": "Bounded ReActの5ステップ実行ループ",
    "bullets": [
      "① OBSERVE：観測工具获取系统状态，压缩到~200-300 tokens",
      "② REASON+ACT：LLM推理 + 三层ActionParser解析输出",
      "③ VERIFY：SiLR验证器在影子仿真中执行，检查4类约束",
      "④ PASS→执行 / FAIL→Escalation Hint+重试（每步最多3次）/ 3次失败→failsafe",
      "⑤ CHECK：check_stability() → 未恢复则回到Step 1"
    ],
    "bullets_ja": [
      "① OBSERVE：観測ツールでシステム状態を取得し、~200-300 tokensに圧縮",
      "② REASON+ACT：LLMが推論 + 三層ActionParserで出力を解析",
      "③ VERIFY：SiLR検証器がシャドウシミュレーション上で実行し、4種類の制約をチェック",
      "④ PASS→実行 / FAIL→Escalation Hint＋リトライ（1ステップ最大3回）/ 3回失敗→failsafe",
      "⑤ CHECK：check_stability() → 未復旧ならStep 1に戻る"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g04",
    "cat": "SiLR-Agent",
    "q": "Bounded ReAct vs 标准 ReAct",
    "q_ja": "Bounded ReAct vs 標準ReAct",
    "bullets": [
      "标准ReAct：没有明确终止条件，可能无限循环",
      "三层边界：步数上限(max_steps=8) / 重试上限(每步max 3次) / Failsafe兜底",
      "保证系统永远有兜底，不会陷入无限循环或做出危险决策",
      "为什么选ReAct不选Plan-and-Execute：电力恢复是动态的，每次操作后系统状态变化，不能提前规划所有步骤"
    ],
    "bullets_ja": [
      "標準ReAct：明確な終了条件がなく、無限ループの可能性がある",
      "三層の境界：ステップ上限(max_steps=8) / リトライ上限(各ステップ最大3回) / Failsafeによるフォールバック",
      "システムに常にフォールバックがあることを保証し、無限ループや危険な判断に陥らない",
      "Plan-and-ExecuteではなくReActを選んだ理由：電力復旧は動的で、操作ごとにシステム状態が変わるため、全ステップの事前計画は不可能"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g05",
    "cat": "SiLR-Agent",
    "q": "三层 ActionParser 是什么？",
    "q_ja": "三層ActionParserとは？",
    "bullets": [
      "Layer 1：原生tool_calls解析（GPT格式）",
      "Layer 2：JSON block解析（Qwen3格式：```json {...} ```）",
      "Layer 3：正则匹配（兜底）",
      "目的：跨模型兼容性，避免浪费重试次数在解析错误上，能快速切换模型做消融"
    ],
    "bullets_ja": [
      "Layer 1：ネイティブtool_calls解析（GPT形式）",
      "Layer 2：JSON block解析（Qwen3形式：```json {...} ```）",
      "Layer 3：正規表現マッチング（フォールバック）",
      "目的：モデル間の互換性を確保し、パースエラーでリトライ回数を浪費しない。モデル切り替えによるablationも容易に"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g06",
    "cat": "SiLR-Agent",
    "q": "SiLR 验证机制的完整流程",
    "q_ja": "SiLR検証メカニズムの全体フロー",
    "bullets": [
      "① 克隆当前状态 → Shadow Copy（DAE数组快照，非deepcopy因PyCapsule不可序列化）",
      "② 在影子系统执行动作 → 运行潮流计算(~100ms)",
      "③ 4个约束检查：电压(0.90-1.10pu) / 频率(±0.5Hz) / 线路負荷(<100%) / 転子角(<180°)",
      "全部PASS → 主系统执行；任一FAIL → 结构化违规报告（偏离多少、调整建议）"
    ],
    "bullets_ja": [
      "① 現在の状態をクローン → Shadow Copy（DAE配列のスナップショット、PyCapsuleがシリアライズ不可のためdeepcopyではない）",
      "② シャドウシステム上でアクションを実行 → 潮流計算を実行(~100ms)",
      "③ 4つの制約チェック：電圧(0.90-1.10pu) / 周波数(±0.5Hz) / 線路負荷(<100%) / 回転子角(<180°)",
      "全てPASS → 本番システムで実行；いずれかFAIL → 構造化された違反レポート（偏差量・調整提案）"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g07",
    "cat": "SiLR-Agent",
    "q": "Escalation Hint 机制 — 如何从92.4%→97.0%",
    "q_ja": "Escalation Hintメカニズム — 92.4%から97.0%への改善方法",
    "bullets": [
      "发现：5个失败场景全是同一问题——magnitude不够被拒绝后，模型不会自主加码",
      "三层机制（零重训）：引导层(具体提示\"100MW不够，至少150MW\") / 系统层(提示層) / 兜底层(强制2×或min 100MW)",
      "关键洞察：12轮SFT无法教会\"被拒→加码\"的多步行为，系统层引导比重训更有效",
      "消融：progress feedback(PASS时也提示)反而退步——只在REJECT时介入"
    ],
    "bullets_ja": [
      "発見：失敗5件は全て同じ問題——magnitudeが不足して拒否された後、モデルが自発的に増量しない",
      "三層メカニズム（再学習ゼロ）：ガイド層(具体的に\"100MWでは不足、最低150MW\"と提示) / システム層(プロンプト層) / フォールバック層(強制2×またはmin 100MW)",
      "重要な洞察：12ラウンドのSFTでは「拒否→増量」という多段階行動を学習できない。システム層のガイドが再学習より効果的",
      "ablation：progress feedback(PASS時にも提示)はむしろ性能低下——REJECTの時だけ介入すべき"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g08",
    "cat": "SiLR-Agent",
    "q": "训练数据：怎么来的？规模多大？",
    "q_ja": "学習データ：どう作成したか？規模は？",
    "bullets": [
      "用Gemini-3-Flash作为Teacher Model（Kimi被淘汰：38%恢复率+56%拓扑幻觉）",
      "14个基础场景×SiLR循环→56-68条 + 52个参数化变体→179-181条 + 专家数据15条 + 修复2条",
      "总计 <span class=\"num\">248条</span> SFT数据",
      "先用Teacher生成，再SiLR验证过滤，再人工修正少量关键样本（蒸馏+主動学習）"
    ],
    "bullets_ja": [
      "Gemini-3-FlashをTeacher Modelとして使用（Kimiは不採用：復旧率38%＋トポロジ幻覚56%）",
      "14基本シナリオ×SiLRループ→56-68件 + 52パラメータ変体→179-181件 + 専門家データ15件 + 修正2件",
      "合計 <span class=\"num\">248件</span> のSFTデータ",
      "まずTeacherで生成、SiLRで検証・フィルタリング、少量の重要サンプルを手動修正（蒸留＋能動学習）"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g09",
    "cat": "SiLR-Agent",
    "q": "数据质量的实验证据",
    "q_ja": "データ品質の実験的エビデンス",
    "bullets": [
      "删除7条错误标注(−7条) → 恢复率 <span class=\"num\">+6pp</span>",
      "添加2条s01修复数据 → 修复了一个一直失败的场景",
      "结论：<span class=\"highlight\">7条坏数据的伤害 > 100条好数据的贡献</span>",
      "对客户的意义：500条精心标注的行业QA，效果可能超过5000条噪音数据"
    ],
    "bullets_ja": [
      "誤ラベル7件を削除(−7件) → 復旧率 <span class=\"num\">+6pp</span>",
      "s01修正データ2件を追加 → 常に失敗していたシナリオが復旧可能に",
      "結論：<span class=\"highlight\">7件の不良データの害 > 100件の良質データの貢献</span>",
      "顧客への示唆：500件の丁寧にアノテーションした業界QAが、5000件のノイズデータを上回る可能性がある"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g10",
    "cat": "SiLR-Agent",
    "q": "为什么14B比32B效果好？",
    "q_ja": "なぜ14Bが32Bより性能が良いのか？",
    "bullets": [
      "248条数据下：14B SFT=92.4%，32B只有87.9%（3种配置结论一致）",
      "原因①：同一LoRA rank对更大模型的表达比例更低(r=64: 14B≈0.5% vs 32B≈0.3%)",
      "原因②：32B预训练知识更强，可能与SFT数据的领域策略存在冲突",
      "9B(视觉语言模型)=87.9%，文本推理弱于纯语言14B"
    ],
    "bullets_ja": [
      "248件のデータで：14B SFT=92.4%、32Bは87.9%のみ（3つの設定で一貫した結論）",
      "理由①：同じLoRA rankでも大きいモデルほど表現割合が低い(r=64: 14B≈0.5% vs 32B≈0.3%)",
      "理由②：32Bは事前学習知識が強く、SFTデータのドメイン戦略と衝突する可能性がある",
      "9B(視覚言語モデル)=87.9%、テキスト推論は純言語14Bに劣る"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g11",
    "cat": "SiLR-Agent",
    "q": "DPO 三个坑",
    "q_ja": "DPOの3つの落とし穴",
    "bullets": [
      "坑①：shed_load回避(−7.6pp)：63%偏好对惩罚了切负荷 → 模型学会\"永远不切负荷\"",
      "坑②：Qwen3 <think>模式激活：DPO后每个输出前加think标签 → 302次解析错误，修复：enable_thinking=False",
      "坑③：动作幅度分布偏移：close_line专家数据中adjust_gen都~20MW → 模型学到\"所有调整都是20MW\"",
      "最终结论：修复所有坑后DPO净贡献仅+0.6pp，投入产出比不高。不是所有场景都需要DPO"
    ],
    "bullets_ja": [
      "落とし穴①：shed_load回避(−7.6pp)：63%のペアがshed_loadを罰則化 → モデルが「絶対に負荷遮断しない」と学習",
      "落とし穴②：Qwen3の<think>モード起動：DPO後に全出力にthinkタグが付く → 302回のパースエラー、修正：enable_thinking=False",
      "落とし穴③：アクション幅の分布シフト：close_lineの専門家データでadjust_genが全て~20MW → モデルが「調整は全部20MW」と学習",
      "最終結論：全ての落とし穴を修正後、DPOの純貢献は+0.6ppのみ。投資対効果が低い。全てのケースでDPOが必要なわけではない"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g12",
    "cat": "SiLR-Agent",
    "q": "LoRA 配置",
    "q_ja": "LoRAの設定",
    "bullets": [
      "model: Qwen3-14B，quantization: NF4(QLoRA)",
      "lora_r=64, lora_alpha=128(scaling=2)，7个target_modules",
      "trainable params: ~100M / 14B = <1%",
      "训练时间: ~70-100 min on RTX PRO Blackwell 96GB",
      "r=64因为任务复杂度高（多工具选择+数值参数生成）"
    ],
    "bullets_ja": [
      "model: Qwen3-14B、quantization: NF4(QLoRA)",
      "lora_r=64, lora_alpha=128(scaling=2)、7つのtarget_modules",
      "trainable params: ~100M / 14B = <1%",
      "学習時間: ~70-100分（RTX PRO Blackwell 96GB上）",
      "r=64の理由：タスク複雑度が高い（マルチツール選択＋数値パラメータ生成）"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g13",
    "cat": "SiLR-Agent",
    "q": "Observation压缩策略",
    "q_ja": "Observation圧縮戦略",
    "bullets": [
      "电力系统全状态~2000 tokens，直接塞入context太浪费",
      "正常设备只报数量：\"32/39 buses normal\"",
      "违规设备报详细数值+动作提示：\"Bus 9: 0.87 p.u. < 0.90, consider adjust_gen nearby\"",
      "压缩后~200-300 tokens，信息保留率90%+",
      "核心：给模型看<span class=\"highlight\">需要关注的信息</span>，不是所有信息"
    ],
    "bullets_ja": [
      "電力系統の全状態は~2000 tokens、そのままcontextに入れるのは非効率",
      "正常な機器は数量のみ報告：\"32/39 buses normal\"",
      "違反機器は詳細値＋アクション提案：\"Bus 9: 0.87 p.u. < 0.90, consider adjust_gen nearby\"",
      "圧縮後~200-300 tokens、情報保持率90%以上",
      "核心：モデルに<span class=\"highlight\">注目すべき情報</span>だけを見せる。全情報ではない"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g14",
    "cat": "SiLR-Agent",
    "q": "Few-shot 实验发现",
    "q_ja": "Few-shot実験の発見",
    "bullets": [
      "GPT-5.4实验：<span class=\"num\">1個示例(96.7%) > 3個示例(94.2%)</span>",
      "原因：多示例稀释context，示例占用更多token，压缩了对当前问题的注意力",
      "教训：few-shot不是越多越好，需要实验验证"
    ],
    "bullets_ja": [
      "GPT-5.4での実験：<span class=\"num\">1例(96.7%) > 3例(94.2%)</span>",
      "原因：例が多いとcontextが薄まり、tokenを消費して現在の問題への注意力が低下する",
      "教訓：few-shotは多ければ良いわけではない。実験による検証が必要"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g15",
    "cat": "SiLR-Agent",
    "q": "SiLR框架可迁移到哪些场景？",
    "q_ja": "SiLRフレームワークはどの分野に応用できるか？",
    "bullets": [
      "核心抽象：<span class=\"highlight\">LLM负责推理 + 仿真器负责验证 = 可信AI决策</span>",
      "金融：Agent生成交易策略 → 合规引擎验证 → 通过才执行",
      "医疗：LLM给出用药建议 → 药物冲突检查系统验证",
      "自动驾驶：规划路径 → 碰撞预測仿真验证",
      "代码执行：LLM生成代码 → 沙箱验证 → 通过才运行",
      "已验证：电力系统（物理仿真）+ 网络路由（离散事件仿真）"
    ],
    "bullets_ja": [
      "コア抽象：<span class=\"highlight\">LLMが推論 + シミュレータが検証 = 信頼できるAI意思決定</span>",
      "金融：Agentが取引戦略を生成 → コンプライアンスエンジンで検証 → 通過後に実行",
      "医療：LLMが投薬提案 → 薬物相互作用チェックシステムで検証",
      "自動運転：経路計画 → 衝突予測シミュレーションで検証",
      "コード実行：LLMがコードを生成 → サンドボックスで検証 → 通過後に実行",
      "検証済み：電力系統（物理シミュレーション）+ ネットワークルーティング（離散イベントシミュレーション）"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g16",
    "cat": "SiLR-Agent",
    "q": "为什么不直接用GPT-5.4调API？",
    "q_ja": "なぜGPT-5.4のAPIを直接使わないのか？",
    "bullets": [
      "成本：API按token计费，每个场景多轮交互，成本不可控",
      "延迟：API网络延迟，电力系统需要实时决策",
      "确定性：GPT每次输出不同(±2.6pp)，关键系统需要确定性行为",
      "隐私：电力系统=关键基础设施信息，不能上传第三方",
      "数据：本地14B+Escalation <span class=\"num\">97.0%</span> > GPT-5.4 1-shot <span class=\"num\">96.7%</span>，成本低100倍"
    ],
    "bullets_ja": [
      "コスト：APIはトークン課金で、各シナリオで複数ラウンドの対話があり、コストが予測不能",
      "レイテンシ：APIのネットワーク遅延があり、電力系統はリアルタイム判断が必要",
      "確定性：GPTは毎回出力が異なる(±2.6pp)、重要システムには確定的な動作が必要",
      "プライバシー：電力系統＝重要インフラ情報であり、第三者にアップロードできない",
      "性能：ローカル14B+Escalation <span class=\"num\">97.0%</span> > GPT-5.4 1-shot <span class=\"num\">96.7%</span>、コスト100分の1"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g17",
    "cat": "SiLR-Agent",
    "q": "如果客户说\"我不信AI能做关键决策\"，你怎么回？",
    "q_ja": "顧客が「AIに重要な判断を任せられない」と言ったら、どう答える？",
    "bullets": [
      "AI不是替代人做决策，而是<span class=\"highlight\">辅助</span>人做决策，每个建议都有验证报告",
      "安全违规率0%——不是因为AI完美，而是不完美的动作会被拦截",
      "有failsafe兜底——最坏情况执行保守规则化策略",
      "给客户看验证报告样例——透明可解释"
    ],
    "bullets_ja": [
      "AIが人間に代わって判断するのではなく、<span class=\"highlight\">補助</span>として判断を支援する。すべての提案に検証レポートが付く",
      "安全違反率0%——AIが完璧だからではなく、不完全なアクションは遮断されるから",
      "failsafeによるフォールバック——最悪の場合でも保守的なルールベース戦略を実行",
      "顧客に検証レポートのサンプルを提示——透明で説明可能"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "g18",
    "cat": "SiLR-Agent",
    "q": "Failsafe三层保护",
    "q_ja": "Failsafeの三層保護",
    "bullets": [
      "① SiLR拦截：危险动作不会执行",
      "② 3次重试：每步最多3次LLM尝试，基于结构化反馈调整策略",
      "③ DefaultFailsafe：全部失败后切换到规则化策略（基于最严重违规类型，执行保守恢复动作）",
      "系统永远有兜底方案，最坏情况也是走failsafe，不是做出危险决策"
    ],
    "bullets_ja": [
      "① SiLR遮断：危険なアクションは実行されない",
      "② 3回リトライ：各ステップ最大3回のLLM試行、構造化フィードバックに基づいて戦略を調整",
      "③ DefaultFailsafe：全て失敗後、ルールベース戦略に切り替え（最も深刻な違反種別に基づき、保守的な復旧アクションを実行）",
      "システムには常にフォールバックがあり、最悪の場合でもfailsafe実行であり、危険な判断ではない"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r01",
    "cat": "Agentic RAG",
    "q": "Agentic RAG 核心数字",
    "q_ja": "Agentic RAGの主要指標",
    "bullets": [
      "Recall@5 = <span class=\"num\">96.4%</span>（加Rerank后）",
      "Embedding微调：Recall@1 从47.3% → <span class=\"num\">63.6%</span>（+16.4pp）",
      "10工具Agent框架，支持多跳QA、自反思重试",
      "55个日语电力领域查询，160+文档→359 chunks",
      "完整检索pipeline：BM25(Char 3-gram) + Dense(fine-tuned bge-m3) + RRF + Reranker"
    ],
    "bullets_ja": [
      "Recall@5 = <span class=\"num\">96.4%</span>（Rerank適用後）",
      "Embeddingファインチューニング：Recall@1が47.3% → <span class=\"num\">63.6%</span>（+16.4pp）",
      "10ツールのAgentフレームワーク、マルチホップQA・自己反省リトライ対応",
      "55件の日本語電力分野クエリ、160以上の文書→359 chunks",
      "完全な検索パイプライン：BM25(Char 3-gram) + Dense(fine-tuned bge-m3) + RRF + Reranker"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r02",
    "cat": "Agentic RAG",
    "q": "BM25 vs Dense检索 — 小语料的教训",
    "q_ja": "BM25 vs Dense検索 — 小規模コーパスでの教訓",
    "bullets": [
      "BM25 Recall@1 = <span class=\"num\">81.8%</span>（最高！）；Dense未微调只有47.3%，微调后63.6%",
      "小语料（359 chunks）上，n-gram模糊匹配比精确形態素更鲁棒",
      "<span class=\"highlight\">\"更精确\"≠\"更好\"</span>，需要实验验证",
      "Dense微调后仍低于BM25，但两者互补（Dense能找到语义相关的文档）"
    ],
    "bullets_ja": [
      "BM25 Recall@1 = <span class=\"num\">81.8%</span>（最高！）；Denseはファインチューニングなしで47.3%、ファインチューニング後63.6%",
      "小規模コーパス（359 chunks）ではn-gramのファジーマッチングが精密な形態素解析より頑健",
      "<span class=\"highlight\">「より精密」≠「より良い」</span>、実験による検証が必要",
      "Denseはファインチューニング後もBM25に劣るが、両者は補完的（Denseは意味的に関連する文書を発見できる）"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r03",
    "cat": "Agentic RAG",
    "q": "为什么BM25用Char 3-gram而不是MeCab？",
    "q_ja": "BM25でMeCabではなくChar 3-gramを使う理由は？",
    "bullets": [
      "Char 3-gram Recall@1 = <span class=\"num\">81.8%</span> vs MeCab = 74.5%，高7.3pp",
      "小语料上n-gram的模糊匹配比精确形態素更鲁棒",
      "MeCab漏掉复合词中间部分（\"需給調整\"→\"需給\"+\"調整\"，丢失组合信息）",
      "n-gram对Query和Document用相同tokenizer，一致性好"
    ],
    "bullets_ja": [
      "Char 3-gram Recall@1 = <span class=\"num\">81.8%</span> vs MeCab = 74.5%、7.3pp高い",
      "小規模コーパスではn-gramのファジーマッチングが精密な形態素解析より頑健",
      "MeCabは複合語の中間部分を見落とす（\"需給調整\"→\"需給\"+\"調整\"、組み合わせ情報が失われる）",
      "n-gramはQueryとDocumentに同じtokenizerを使用でき、一貫性が良い"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r04",
    "cat": "Agentic RAG",
    "q": "Hybrid RRF 反直觉结果",
    "q_ja": "Hybrid RRFの反直感的な結果",
    "bullets": [
      "Hybrid Recall@1 = <span class=\"num\">72.7%</span> < BM25 = 81.8%（Hybrid反而更差！）",
      "原因：Dense把错误文档排很高，RRF融合时这些高排名错误文档挤掉了BM25的正确Top-1",
      "加Rerank后差异消失，全部收敛到96.4%",
      "教训：Hybrid的价值在Recall@5+（不漏掉好文档），不是Top-1准确率",
      "RRF权重(BM25=0.75, Dense=1.0)是反直觉的——给更弱的Dense更高权重"
    ],
    "bullets_ja": [
      "Hybrid Recall@1 = <span class=\"num\">72.7%</span> < BM25 = 81.8%（Hybridの方がむしろ悪い！）",
      "原因：Denseが誤った文書を高順位に置き、RRF融合時にBM25の正しいTop-1を押し出す",
      "Rerank適用後は差が消え、全て96.4%に収束",
      "教訓：Hybridの価値はRecall@5以上（良い文書を漏らさない）にあり、Top-1精度ではない",
      "RRF重み(BM25=0.75, Dense=1.0)は反直感的——弱いDenseに高い重みを付与"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r05",
    "cat": "Agentic RAG",
    "q": "Reranker 为什么叫\"均衡器\"？",
    "q_ja": "Rerankerが「イコライザー」と呼ばれる理由は？",
    "bullets": [
      "无Rerank：BM25(81.8%) >> Hybrid(72.7%) >> Dense(63.6%)，差距悬殊",
      "有Rerank：<span class=\"highlight\">全部收敛到80.0% / 96.4%</span>",
      "Cross-Encoder消除了第一阶段所有方法的差异",
      "是RAG pipeline的安全网——即使第一阶段不完美，Reranker从Top-50中把正确文档捞上来",
      "模型：bge-reranker-v2-m3（80M参数），延迟~0.25s"
    ],
    "bullets_ja": [
      "Rerankなし：BM25(81.8%) >> Hybrid(72.7%) >> Dense(63.6%)、大きな差",
      "Rerankあり：<span class=\"highlight\">全て80.0% / 96.4%に収束</span>",
      "Cross-Encoderが第一段階の全手法の差を解消する",
      "RAGパイプラインのセーフティネット——第一段階が不完全でも、RerankerがTop-50から正しい文書を引き上げる",
      "モデル：bge-reranker-v2-m3（80Mパラメータ）、レイテンシ~0.25s"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r06",
    "cat": "Agentic RAG",
    "q": "bge-m3 微调配置",
    "q_ja": "bge-m3ファインチューニングの設定",
    "bullets": [
      "数据：<span class=\"num\">29,799条</span> 日语三元组，来自9个开源数据集（零领域标注成本）",
      "Loss：MultipleNegativesRankingLoss（in-batch negatives + hard negatives）",
      "训练：batch_size=64, epochs=3, lr=2e-5, FP16，<span class=\"num\">~27.6分钟</span>",
      "效果：Recall@1 <span class=\"num\">+16.4pp</span>，MAP@10 +0.130",
      "关键教训：训练中断时Recall@5 -3.6%，跑完才+5.5%——<span class=\"highlight\">中途checkpoint可能比基线更差</span>"
    ],
    "bullets_ja": [
      "データ：<span class=\"num\">29,799件</span>の日本語トリプレット、9つのオープンソースデータセットから（ドメインアノテーションコストゼロ）",
      "Loss：MultipleNegativesRankingLoss（in-batch negatives + hard negatives）",
      "学習：batch_size=64, epochs=3, lr=2e-5, FP16、<span class=\"num\">~27.6分</span>",
      "効果：Recall@1 <span class=\"num\">+16.4pp</span>、MAP@10 +0.130",
      "重要な教訓：学習中断時はRecall@5が-3.6%、完走して初めて+5.5%——<span class=\"highlight\">中間checkpointはベースラインより悪い可能性がある</span>"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r07",
    "cat": "Agentic RAG",
    "q": "10个工具列表",
    "q_ja": "10ツールの一覧",
    "bullets": [
      "① expand_query(~5.5s) — LLM查询改写",
      "② retrieve(~0.2s) — BM25/Dense/Hybrid检索",
      "③ rerank(~0.25s) — Cross-Encoder精排",
      "④ generate_answer(~10.7s) — LLM生成回答",
      "⑤ judge_answer(~5.3s) — LLM-as-Judge 5维度评分",
      "⑥ read_chunk / ⑦ search_by_doc / ⑧ summarize_context / ⑨ decompose_query / ⑩ reflect_and_retry"
    ],
    "bullets_ja": [
      "① expand_query(~5.5s) — LLMによるクエリ書き換え",
      "② retrieve(~0.2s) — BM25/Dense/Hybrid検索",
      "③ rerank(~0.25s) — Cross-Encoderによる精密ランキング",
      "④ generate_answer(~10.7s) — LLMによる回答生成",
      "⑤ judge_answer(~5.3s) — LLM-as-Judgeによる5次元評価",
      "⑥ read_chunk / ⑦ search_by_doc / ⑧ summarize_context / ⑨ decompose_query / ⑩ reflect_and_retry"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r08",
    "cat": "Agentic RAG",
    "q": "为什么不用LangChain？",
    "q_ja": "なぜLangChainを使わないのか？",
    "bullets": [
      "已有代码覆盖80%（retriever/LLM/reranker），LangChain包装层价值有限",
      "需要完全控制prompt和guardrails（<span class=\"highlight\">强制调用judge、强制使用retrieve</span>）",
      "避免依赖膨胀（LangChain引入60+包）",
      "双协议支持（Gemini + OpenAI）自定义更容易"
    ],
    "bullets_ja": [
      "既存コードで80%をカバー済み（retriever/LLM/reranker）、LangChainのラッパー層の価値は限定的",
      "promptとguardrailsの完全な制御が必要（<span class=\"highlight\">judge強制呼び出し、retrieve強制使用</span>）",
      "依存関係の肥大化を回避（LangChainは60以上のパッケージを導入）",
      "デュアルプロトコル対応（Gemini + OpenAI）はカスタム実装の方が容易"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r09",
    "cat": "Agentic RAG",
    "q": "LLM-as-Judge 5个评估维度",
    "q_ja": "LLM-as-Judgeの5つの評価軸",
    "bullets": [
      "① Faithfulness — 回答是否忠于检索到的文档",
      "② Relevance — 回答是否切题",
      "③ Completeness — 信息是否完整",
      "④ Context Relevance — 检索到的文档是否够用",
      "⑤ Overall — 整体质量",
      "overall≤3 → 自动触发reflect_and_retry，最多重试2次"
    ],
    "bullets_ja": [
      "① Faithfulness — 回答が検索された文書に忠実か",
      "② Relevance — 回答が質問に合致しているか",
      "③ Completeness — 情報が十分に網羅されているか",
      "④ Context Relevance — 検索された文書が十分か",
      "⑤ Overall — 全体的な品質",
      "overall≤3 → reflect_and_retryを自動トリガー、最大2回リトライ"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r10",
    "cat": "Agentic RAG",
    "q": "Agent不调judge_answer的问题怎么解决？",
    "q_ja": "Agentがjudge_answerを呼ばない問題の解決方法は？",
    "bullets": [
      "问题：LLM只用retrieve+generate_answer就直接回答，走最短路径",
      "Prompt层：添加\"MUST call judge_answer\"/\"NEVER write answer as plain text\"",
      "Code层：如果LLM输出文本但没调judge，强制注入一次judge调用",
      "教训：<span class=\"highlight\">LLM会走最短路径，关键步骤不能靠\"建议\"，要靠强制</span>"
    ],
    "bullets_ja": [
      "問題：LLMがretrieve+generate_answerだけで回答し、最短経路を取る",
      "Prompt層：\"MUST call judge_answer\"/\"NEVER write answer as plain text\"を追加",
      "Code層：LLMがテキスト出力してjudgeを呼んでいなければ、judge呼び出しを強制注入",
      "教訓：<span class=\"highlight\">LLMは最短経路を取る。重要なステップは「推奨」ではなく「強制」で確保する</span>"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r11",
    "cat": "Agentic RAG",
    "q": "完整检索结果对比表",
    "q_ja": "検索結果の完全な比較表",
    "bullets": [
      "BM25：Recall@1 <span class=\"num\">81.8%</span> / Recall@5 94.5%（小语料王者）",
      "Dense(fine-tuned)：Recall@1 63.6% / Recall@5 87.3%",
      "Hybrid RRF：Recall@1 72.7% / Recall@5 92.7%（不如BM25！）",
      "BM25+Rerank：Recall@1 80.0% / Recall@5 <span class=\"num\">96.4%</span>",
      "Dense+Rerank：Recall@1 80.0% / Recall@5 96.4% / nDCG <span class=\"num\">0.961</span>（最高）",
      "推荐：BM25+Rerank（简单高效）或Dense+Rerank（nDCG最高）"
    ],
    "bullets_ja": [
      "BM25：Recall@1 <span class=\"num\">81.8%</span> / Recall@5 94.5%（小規模コーパスの王者）",
      "Dense(fine-tuned)：Recall@1 63.6% / Recall@5 87.3%",
      "Hybrid RRF：Recall@1 72.7% / Recall@5 92.7%（BM25に劣る！）",
      "BM25+Rerank：Recall@1 80.0% / Recall@5 <span class=\"num\">96.4%</span>",
      "Dense+Rerank：Recall@1 80.0% / Recall@5 96.4% / nDCG <span class=\"num\">0.961</span>（最高）",
      "推奨：BM25+Rerank（シンプルで高効率）またはDense+Rerank（nDCG最高）"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r12",
    "cat": "Agentic RAG",
    "q": "RAG诊断框架（客户说效果不好时）",
    "q_ja": "RAG診断フレームワーク（顧客が効果不十分と言った場合）",
    "bullets": [
      "① Chunking：切分策略是否合理？语义完整性？",
      "② 检索：Recall@K量化，正确文档能被检索到吗？",
      "③ Embedding：通用模型对领域术语是否有效？需要微调？",
      "④ Reranking：有没有Reranker？没有加一个可能直接+10pp",
      "⑤ 生成：Prompt是否有效？Faithfulness约束？",
      "通常最大问题在<span class=\"highlight\">Chunking和Embedding</span>——这是基础"
    ],
    "bullets_ja": [
      "① Chunking：分割戦略は適切か？意味的完全性は？",
      "② 検索：Recall@Kで定量化し、正しい文書が検索されるか？",
      "③ Embedding：汎用モデルはドメイン用語に有効か？ファインチューニングが必要か？",
      "④ Reranking：Rerankerはあるか？なければ追加するだけで+10ppの可能性",
      "⑤ 生成：Promptは効果的か？Faithfulness制約は？",
      "通常、最大の問題は<span class=\"highlight\">ChunkingとEmbedding</span>——これが基盤"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r13",
    "cat": "Agentic RAG",
    "q": "日语RAG的特殊挑战",
    "q_ja": "日本語RAG特有の課題",
    "bullets": [
      "无空格分词：需要专门分词工具或n-gram",
      "三种字符混用：汉字/平假名/片假名，同一概念多种写法",
      "复合词问题：\"需給調整\"被MeCab分成两个词，丢失意义",
      "NFKC正规化：全角→半角（\"ＡＢＣ\"→\"ABC\"），统一空白字符",
      "发现：在小语料上，暴力Char n-gram比精细形態素解析更好"
    ],
    "bullets_ja": [
      "スペースなし分かち書き：専用のトークナイザーまたはn-gramが必要",
      "三種の文字混在：漢字/ひらがな/カタカナ、同じ概念に複数の表記",
      "複合語問題：\"需給調整\"がMeCabで2語に分割され、意味が失われる",
      "NFKC正規化：全角→半角（\"ＡＢＣ\"→\"ABC\"）、空白文字の統一",
      "発見：小規模コーパスでは力技のChar n-gramが精密な形態素解析より優れる"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r14",
    "cat": "Agentic RAG",
    "q": "多跳QA怎么实现？",
    "q_ja": "マルチホップQAの実現方法は？",
    "bullets": [
      "decompose_query工具把复杂问题拆成2-4个独立子问题",
      "分别检索 → 合并去重（by chunk_id）→ 生成综合回答",
      "Query意图分类（规则）自动识别comparative类问题 → 触发decompose_query",
      "例：\"A规定和B规定有什么冲突\" → [\"A规定目的？\", \"B规定目的？\", \"两者差异？\"]"
    ],
    "bullets_ja": [
      "decompose_queryツールが複雑な質問を2-4個の独立したサブクエリに分解",
      "それぞれ検索 → マージ・重複排除（chunk_idで）→ 統合回答を生成",
      "Queryインテント分類（ルールベース）がcomparative系の質問を自動識別 → decompose_queryをトリガー",
      "例：\"A規定とB規定の矛盾は？\" → [\"A規定の目的？\", \"B規定の目的？\", \"両者の違い？\"]"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "r15",
    "cat": "Agentic RAG",
    "q": "客户预算有限，只能做一件事提升RAG效果，推荐什么？",
    "q_ja": "顧客の予算が限られ、RAG改善で1つだけ実施するなら何を推奨する？",
    "bullets": [
      "首选：<span class=\"highlight\">加Reranker</span>——把所有方法Recall@5统一提升到96.4%，延迟只+0.25s，开箱即用",
      "次选：<span class=\"highlight\">Embedding微调</span>——+16.4pp Recall@1，27分钟训练，用开源数据零标注成本",
      "bge-m3开源可微调本地部署；OpenAI embedding不可微调，日本企業数据不出设备是硬需求"
    ],
    "bullets_ja": [
      "第一推奨：<span class=\"highlight\">Rerankerの追加</span>——全手法のRecall@5を96.4%に統一向上、レイテンシ+0.25sのみ、すぐ導入可能",
      "第二推奨：<span class=\"highlight\">Embeddingのファインチューニング</span>——Recall@1を+16.4pp、27分の学習、オープンソースデータでアノテーションコストゼロ",
      "bge-m3はオープンソースでファインチューニング・ローカルデプロイ可能；OpenAI embeddingはファインチューニング不可、日本企業のデータをデバイス外に出さないのは必須要件"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e01",
    "cat": "云边协同",
    "q": "EdgeRouter 核心数字",
    "q_ja": "EdgeRouterの主要指標",
    "bullets": [
      "云端成本节省 <span class=\"num\">86%+</span>（即使500ms WAN延迟仍保持）",
      "异常漏检率 <span class=\"num\">0%</span>（所有错误是严重程度低估，不是漏报）",
      "级联信号准确率 <span class=\"num\">93.8%</span>（15/16决策正确）",
      "47%请求边缘直出，53%需要级联",
      "并发推理吞吐 <span class=\"num\">2.9×</span> 提升"
    ],
    "bullets_ja": [
      "クラウドコスト <span class=\"num\">86%以上</span> 削減（500ms WAN遅延下でも維持）",
      "異常見逃し率 <span class=\"num\">0%</span>（全てのエラーは重大度の過小評価であり、見逃しではない）",
      "カスケード信号精度 <span class=\"num\">93.8%</span>（16件中15件の判断が正確）",
      "47%のリクエストはエッジで即応、53%がカスケード必要",
      "並行推論スループット <span class=\"num\">2.9倍</span> 向上"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e02",
    "cat": "云边协同",
    "q": "5层路由设计（T0~T4）",
    "q_ja": "5層ルーティング設計（T0〜T4）",
    "bullets": [
      "T0紧急安全：异常等级>95或变化率>10/s → 跳过分析，直接边缘控制",
      "T1数据安全：含敏感数据 → 强制边缘，数据不出设备",
      "T2明确正常：异常分数<0.2且置信度>0.85 → 边缘直出",
      "T3明确复杂：异常分数>0.8或多指标异常≥2 → 直接云端",
      "T4灰色地带：其他所有 → 边缘先做，置信度低则升级",
      "哲学：安全优先(T0/T1) → 效率优化(T2/T3) → 智能决策(T4)"
    ],
    "bullets_ja": [
      "T0緊急安全：異常レベル>95または変化率>10/s → 分析をスキップし、エッジで即制御",
      "T1データ安全：機密データを含む → エッジ強制、データはデバイス外に出さない",
      "T2明確に正常：異常スコア<0.2かつ信頼度>0.85 → エッジで即応",
      "T3明確に複雑：異常スコア>0.8または複数指標異常≧2 → 直接クラウドへ",
      "T4グレーゾーン：その他全て → エッジで先行処理、信頼度低ければエスカレーション",
      "設計思想：安全最優先(T0/T1) → 効率最適化(T2/T3) → インテリジェント判断(T4)"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e03",
    "cat": "云边协同",
    "q": "为什么是5层而不是简单阈值二分？",
    "q_ja": "なぜ単純な閾値二分ではなく5層なのか？",
    "bullets": [
      "T0/T1是硬规则（安全和隐私），不能被置信度覆盖",
      "T2/T3是高确定性决策，不需要浪费资源做置信度估计",
      "只有T4才真正需要置信度驱动的动态决策",
      "简单阈值：T0紧急请求可能因\"置信度还行\"被边缘处理，延误响应"
    ],
    "bullets_ja": [
      "T0/T1はハードルール（安全性とプライバシー）であり、信頼度で上書きできない",
      "T2/T3は確定性の高い判断であり、信頼度推定にリソースを浪費する必要がない",
      "T4だけが信頼度駆動の動的判断を本当に必要とする",
      "単純な閾値：T0の緊急リクエストが「信頼度が十分」としてエッジ処理され、対応が遅れるリスクがある"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e04",
    "cat": "云边协同",
    "q": "3种置信度估计方法",
    "q_ja": "3つの信頼度推定手法",
    "bullets": [
      "① 输出概率(权重0.3)：softmax最大值，零额外成本，但可能过度自信",
      "② 自验证(权重0.3)：边缘分析+视觉检测交叉验证，+1次推理成本",
      "③ 时序一致性(权重0.4)：滑动窗口检测稳定性，过滤单帧噪声——权重最高",
      "时序权重最高原因：真正异常通常持续多帧，单帧异常大概率是噪声"
    ],
    "bullets_ja": [
      "① 出力確率(重み0.3)：softmax最大値、追加コストゼロだが過信の可能性あり",
      "② 自己検証(重み0.3)：エッジ分析＋視覚検出のクロス検証、+1回の推論コスト",
      "③ 時系列一貫性(重み0.4)：スライディングウィンドウで安定性を検出、単フレームノイズをフィルタ——最高重み",
      "時系列の重みが最高の理由：本当の異常は通常複数フレームにわたって持続し、単フレームの異常はほぼノイズ"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e05",
    "cat": "云边协同",
    "q": "0.8B边缘模型只有80%准确率，够用吗？",
    "q_ja": "0.8Bエッジモデルの精度80%で十分か？",
    "bullets": [
      "80%错误全是<span class=\"highlight\">严重程度低估</span>（alarm判成warning），不是漏报",
      "异常检测（有无异常二分类）准确率 <span class=\"num\">100%</span>",
      "低估的会因置信度不够高而自动升级到云端",
      "实际效果 = 0漏検 + 86%成本节省"
    ],
    "bullets_ja": [
      "80%のエラーは全て<span class=\"highlight\">重大度の過小評価</span>（alarmをwarningと判定）であり、見逃しではない",
      "異常検出（異常の有無の二値分類）精度は <span class=\"num\">100%</span>",
      "過小評価されたケースは信頼度不足で自動的にクラウドへエスカレーション",
      "実質的な効果 = 見逃しゼロ + コスト86%削減"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e06",
    "cat": "云边协同",
    "q": "Edge vs Cloud 技术对比",
    "q_ja": "Edge vs Cloudの技術比較",
    "bullets": [
      "Edge：Qwen3.5-0.8B / Q8_0 GGUF / Ollama / CPU可跑(~0.5GB)",
      "Cloud：Qwen3.5-27B / BF16 / vLLM(TP=2) / 双GPU(~54GB)",
      "Ollama优势：易用性、本地部署、CPU-only；vLLM优势：高吞吐、Continuous Batching",
      "gRPC用于边缘→云端内部通信（延迟低~30%），REST用于外部API"
    ],
    "bullets_ja": [
      "Edge：Qwen3.5-0.8B / Q8_0 GGUF / Ollama / CPUで動作可(~0.5GB)",
      "Cloud：Qwen3.5-27B / BF16 / vLLM(TP=2) / デュアルGPU(~54GB)",
      "Ollamaの利点：使いやすさ、ローカルデプロイ、CPU-only；vLLMの利点：高スループット、Continuous Batching",
      "gRPCはエッジ→クラウドの内部通信（レイテンシ~30%低減）、RESTは外部API向け"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e07",
    "cat": "云边协同",
    "q": "为什么Edge用量化，Cloud用BF16？",
    "q_ja": "なぜEdgeは量子化、CloudはBF16なのか？",
    "bullets": [
      "Edge做<span class=\"highlight\">分类</span>（异常检测），Q8_0量化损失极小",
      "Cloud做<span class=\"highlight\">详细分析</span>（生成文本报告），需要BF16保证生成质量",
      "Edge不用更激进INT4：0.8B模型够小，Q8_0在CPU上也能流畅运行",
      "GGUF是llama.cpp格式，专为CPU推理优化，`ollama pull`一条命令搞定"
    ],
    "bullets_ja": [
      "Edgeは<span class=\"highlight\">分類</span>（異常検出）を行い、Q8_0量子化の損失は極めて小さい",
      "Cloudは<span class=\"highlight\">詳細分析</span>（テキストレポート生成）を行い、生成品質を保つためBF16が必要",
      "EdgeでINT4を使わない理由：0.8Bモデルは十分小さく、Q8_0でもCPU上で快適に動作",
      "GGUFはllama.cpp形式でCPU推論に最適化、`ollama pull`1コマンドで完了"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e08",
    "cat": "云边协同",
    "q": "性能优化ROI排序",
    "q_ja": "パフォーマンス最適化のROI順位",
    "bullets": [
      "① 级联路由(86%成本节省) — 架构级，最大收益",
      "② 量化(3×压缩) — Edge INT4，几乎免费",
      "③ Prefix Caching(30%计算节省) — Cloud端，一个参数搞定",
      "④ 并发推理(2.9×吞吐) — asyncio + Semaphore",
      "⑤ 推测性预取(~-12%级联延迟) — 有额外成本，看场景"
    ],
    "bullets_ja": [
      "① カスケードルーティング(86%コスト削減) — アーキテクチャレベル、最大の効果",
      "② 量子化(3倍圧縮) — Edge INT4、ほぼゼロコスト",
      "③ Prefix Caching(30%計算削減) — Cloud側、パラメータ1つで完了",
      "④ 並行推論(2.9倍スループット) — asyncio + Semaphore",
      "⑤ 投機的プリフェッチ(カスケードレイテンシ~-12%) — 追加コストあり、場面による"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e09",
    "cat": "云边协同",
    "q": "延迟与成本：500ms高延迟时表现如何？",
    "q_ja": "レイテンシとコスト：500ms高遅延時の性能は？",
    "bullets": [
      "10ms延迟：P50=628ms，云端成本节省92.9%",
      "50ms延迟：P50=681ms，云端成本节省86.7%",
      "200ms延迟：P50=849ms，云端成本节省86.7%",
      "<span class=\"num\">500ms</span>延迟：P50=1124ms，云端成本节省 <span class=\"num\">86.7%</span>",
      "结论：EdgeRouter价值<span class=\"highlight\">不依赖网络条件</span>"
    ],
    "bullets_ja": [
      "10ms遅延：P50=628ms、クラウドコスト92.9%削減",
      "50ms遅延：P50=681ms、クラウドコスト86.7%削減",
      "200ms遅延：P50=849ms、クラウドコスト86.7%削減",
      "<span class=\"num\">500ms</span>遅延：P50=1124ms、クラウドコスト <span class=\"num\">86.7%</span> 削減",
      "結論：EdgeRouterの価値は<span class=\"highlight\">ネットワーク環境に依存しない</span>"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e10",
    "cat": "云边协同",
    "q": "ISE 66%优于理想PI控制器是什么意思？",
    "q_ja": "ISEが理想PI制御器より66%優れるとはどういう意味？",
    "bullets": [
      "ISE(误差平方积分)是控制系统标准性能指标，越低越好",
      "无控制:22556 / 只用边缘:14500 / 只用云端:1768",
      "<span class=\"highlight\">EdgeRouter级联:612 vs 理想PI控制器:1803</span>",
      "原因：边缘快速粗修正(~2s) + 云端精修正 = 两阶段协作超越单一策略",
      "类比：先应急处理，再等专家精细处理"
    ],
    "bullets_ja": [
      "ISE（誤差二乗積分）は制御システムの標準性能指標、低いほど良い",
      "制御なし:22556 / エッジのみ:14500 / クラウドのみ:1768",
      "<span class=\"highlight\">EdgeRouterカスケード:612 vs 理想PI制御器:1803</span>",
      "理由：エッジの高速粗修正(~2s) + クラウドの精密修正 = 二段階協調が単一戦略を上回る",
      "比喩：まず応急処置、その後に専門家による精密対応"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e11",
    "cat": "云边协同",
    "q": "在线阈值学习怎么工作？",
    "q_ja": "オンライン閾値学習の仕組みは？",
    "bullets": [
      "云端确认了边缘结果 → 降低阈值（减少未来云端调用，边缘够准）",
      "云端推翻了边缘结果 → 升高阈值（增加未来云端调用，边缘不够准）",
      "更新方式：threshold += ±learning_rate（EMA平滑）",
      "效果：部署初期保守（多上云），运行后自适应（学会哪些边缘够了）"
    ],
    "bullets_ja": [
      "クラウドがエッジの結果を確認 → 閾値を下げる（将来のクラウド呼び出しを減らす、エッジの精度が十分）",
      "クラウドがエッジの結果を覆す → 閾値を上げる（将来のクラウド呼び出しを増やす、エッジの精度が不十分）",
      "更新方法：threshold += ±learning_rate（EMA平滑化）",
      "効果：デプロイ初期は保守的（クラウド多用）、運用後に自己適応（どのケースがエッジで十分か学習）"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e12",
    "cat": "云边协同",
    "q": "这套云边架构能迁移到什么场景？",
    "q_ja": "このクラウド・エッジ協調アーキテクチャはどの分野に応用できる？",
    "bullets": [
      "客服chatbot：简单FAQ边缘回答，复杂问题上云",
      "文档审核：明确合规/不合规边缘判断，灰色地带上云",
      "医疗初诊：明确正常自动放行，疑似异常转专家",
      "和BytePlus产品关联：帮客户降低API调用成本 / 保护数据隐私 / 降低延迟",
      "核心模式：<span class=\"highlight\">简单的快速处理 + 复杂的精确处理 = 成本和质量最优平衡</span>"
    ],
    "bullets_ja": [
      "カスタマーサポートchatbot：シンプルなFAQはエッジで回答、複雑な問題はクラウドへ",
      "文書審査：明確に適合/不適合はエッジ判定、グレーゾーンはクラウドへ",
      "医療初期診断：明確に正常は自動パス、異常の疑いは専門家へ転送",
      "BytePlus製品との関連：顧客のAPI呼び出しコスト削減 / データプライバシー保護 / レイテンシ低減",
      "コアパターン：<span class=\"highlight\">シンプルなものは高速処理 + 複雑なものは精密処理 = コストと品質の最適バランス</span>"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "e13",
    "cat": "云边协同",
    "q": "Docker坑 + 工程取舍教训",
    "q_ja": "Dockerの落とし穴 + エンジニアリングのトレードオフ",
    "bullets": [
      "Docker Hub在中国/WSL2不可访问，docker pull直接挂起",
      "解决：放弃Docker隔离，改用应用层WAN延迟模拟（asyncio.sleep）",
      "教训：<span class=\"highlight\">物理资源隔离不如路由逻辑正确性重要</span>",
      "对于架构验证，逻辑正确比部署形式更关键",
      "Prometheus+Grafana监控：6个面板，包含路由分布/级联确认率/置信度分布/云端升级率"
    ],
    "bullets_ja": [
      "Docker Hubは中国/WSL2からアクセス不可、docker pullがハングアップ",
      "解決：Docker分離を諦め、アプリケーション層でWAN遅延シミュレーション（asyncio.sleep）に変更",
      "教訓：<span class=\"highlight\">物理的リソース分離よりルーティングロジックの正しさの方が重要</span>",
      "アーキテクチャ検証ではロジックの正しさがデプロイ形態より重要",
      "Prometheus+Grafana監視：6つのパネル（ルーティング分布/カスケード確認率/信頼度分布/クラウドエスカレーション率）"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "p01",
    "cat": "PowerTS-LLM",
    "q": "PowerTS-LLM 核心发现",
    "q_ja": "PowerTS-LLMの主要な発見",
    "bullets": [
      "LLM精度 <span class=\"num\">不如LSTM</span>（干净数据MAE差13倍：LLM 2968MW vs LSTM 228MW）",
      "但LLM鲁棒性好 <span class=\"num\">48.51倍</span>（噪声σ=5%：LSTM +107.7% vs LLM +2.2%）",
      "结论：<span class=\"highlight\">LLM不是时序预测最优解，但在恶劣条件下是最鲁棒的解</span>",
      "48.51× = LSTM退化幅度107.7% / LLM退化幅度2.2%"
    ],
    "bullets_ja": [
      "LLM精度は <span class=\"num\">LSTMに劣る</span>（クリーンデータのMAE差13倍：LLM 2968MW vs LSTM 228MW）",
      "しかしLLMの頑健性は <span class=\"num\">48.51倍</span> 優れる（ノイズσ=5%：LSTM +107.7% vs LLM +2.2%）",
      "結論：<span class=\"highlight\">LLMは時系列予測の最適解ではないが、悪条件下で最も頑健な解である</span>",
      "48.51倍 = LSTM劣化幅107.7% / LLM劣化幅2.2%"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "p02",
    "cat": "PowerTS-LLM",
    "q": "Token离散化为什么鲁棒（核心机制）",
    "q_ja": "Token離散化がなぜ頑健なのか（コアメカニズム）",
    "bullets": [
      "数值经tokenize→离散token序列，相近数值在embedding空间表示接近，噪声衰减",
      "数值精度被token粒度截断——LLM内部看到的是\"大约28\"而非精确浮点数",
      "LSTM直接处理浮点数，噪声通过自回归链<span class=\"highlight\">传播并放大</span>（每步误差是下步输入）",
      "这是第一个定量证明LLM token离散化具有噪声过滤效果的工作"
    ],
    "bullets_ja": [
      "数値をtokenize→離散token列へ変換。近い数値はembedding空間で近接表現となり、ノイズが減衰する",
      "数値精度がtoken粒度で切り捨てられる——LLM内部では\"約28\"であり正確な浮動小数点数ではない",
      "LSTMは浮動小数点数を直接処理し、ノイズが自己回帰チェーンで<span class=\"highlight\">伝播・増幅</span>される（各ステップの誤差が次の入力に）",
      "LLMのtoken離散化にノイズフィルタリング効果があることを定量的に証明した初の研究"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "p03",
    "cat": "PowerTS-LLM",
    "q": "RAG为什么在时序预测上失败？（退化7.3%）",
    "q_ja": "RAGが時系列予測で失敗した理由は？（7.3%劣化）",
    "bullets": [
      "相似天气≠相似负荷动态（3月15日和22日天气相似，但一个有特殊事件）",
      "额外context干扰：微调后LLM已学会从输入直接预测，\"参考日\"成为噪声",
      "<span class=\"highlight\">RAG适合\"有答案需要找到\"的任务，不适合\"需要计算\"的任务</span>",
      "SA意义：客户说\"我要做XXX加个RAG\"，要先判断任务类型再推方案"
    ],
    "bullets_ja": [
      "類似の天気≠類似の負荷ダイナミクス（3月15日と22日は天気が似ているが、片方に特殊イベントがある）",
      "追加contextが干渉：ファインチューニング後のLLMは入力から直接予測を学習済みで、「参照日」がノイズになる",
      "<span class=\"highlight\">RAGは「答えがあってそれを見つける」タスクに適し、「計算が必要な」タスクには不向き</span>",
      "SAとしての意義：顧客が「XXXにRAGを追加したい」と言ったら、まずタスク種別を判断してからソリューションを提案する"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "p04",
    "cat": "PowerTS-LLM",
    "q": "LSTM vs LLM：分别什么场景用？",
    "q_ja": "LSTM vs LLM：それぞれどの場面で使うか？",
    "bullets": [
      "LSTM：数据质量高、实时性要求高、资源受限 → 传统电力预测（MAE低13倍，推理~1ms）",
      "LLM：数据质量不稳定、对鲁棒性要求高、可接受较高延迟（需要GPU，~5-10s）",
      "混合方案：LSTM做主力，LLM做鲁棒性校验——两者预测值差距大说明数据可能有问题",
      "建议：大多数情况推荐LSTM，不推荐直接用LLM替代LSTM"
    ],
    "bullets_ja": [
      "LSTM：データ品質が高い・リアルタイム性要求が高い・リソース制約あり → 従来の電力予測（MAE13分の1、推論~1ms）",
      "LLM：データ品質が不安定・頑健性要求が高い・高レイテンシ許容可（GPU必要、~5-10s）",
      "ハイブリッド方式：LSTMをメインに、LLMを頑健性チェックに——両者の予測値の乖離が大きければデータに問題がある可能性",
      "推奨：ほとんどの場合LSTMを推奨、LLMでLSTMを直接置き換えるのは非推奨"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "p05",
    "cat": "PowerTS-LLM",
    "q": "训练配置",
    "q_ja": "学習設定",
    "bullets": [
      "model: Qwen2.5-14B-Instruct，LoRA rank=64, alpha=128",
      "trainable_params: 68.8M (0.49%)",
      "training_data: <span class=\"num\">542K</span> 日语结构化prompt（TEPCO历史数据）",
      "epochs: 1（loss在0.4 epoch处就收敛了）",
      "训练时间: <span class=\"num\">~38小时</span>（单卡RTX 6000 96GB）",
      "framework: LLaMA-Factory + DeepSpeed ZeRO-2"
    ],
    "bullets_ja": [
      "model: Qwen2.5-14B-Instruct、LoRA rank=64, alpha=128",
      "trainable_params: 68.8M (0.49%)",
      "training_data: <span class=\"num\">542K</span>件の日本語構造化prompt（TEPCOの過去データ）",
      "epochs: 1（lossは0.4 epoch時点で収束）",
      "学習時間: <span class=\"num\">~38時間</span>（RTX 6000 96GB単体）",
      "framework: LLaMA-Factory + DeepSpeed ZeRO-2"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "p06",
    "cat": "PowerTS-LLM",
    "q": "三个最重要的教训（最适合SA场景的答案）",
    "q_ja": "最も重要な3つの教訓（SA向け回答として最適）",
    "bullets": [
      "① <span class=\"highlight\">新技术≠最优解</span>：LLM很热门，但时序预测上LSTM精度高13倍",
      "② <span class=\"highlight\">弱点可以是优点</span>：Token离散化被认为是\"缺陷\"，但恰好成为噪声滤波器",
      "③ <span class=\"highlight\">RAG有适用边界</span>：回归任务加RAG反而有害，技术选型必须看场景",
      "这些教训让我在面对客户时做出更准确的技术判断"
    ],
    "bullets_ja": [
      "① <span class=\"highlight\">新技術≠最適解</span>：LLMは注目度が高いが、時系列予測ではLSTMが精度13倍優れる",
      "② <span class=\"highlight\">弱点が利点になり得る</span>：Token離散化は「欠点」と見なされていたが、ノイズフィルターとして機能した",
      "③ <span class=\"highlight\">RAGには適用範囲がある</span>：回帰タスクにRAGを追加するとむしろ有害、技術選定はユースケースを見て判断すべき",
      "これらの教訓が、顧客に対してより的確な技術判断を行う上で活きている"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "p07",
    "cat": "PowerTS-LLM",
    "q": "如何向客户回应\"LLM时序预测精度太差\"？",
    "q_ja": "顧客に「LLMの時系列予測精度が低すぎる」と言われたら？",
    "bullets": [
      "诚实承认：干净数据上LSTM确实精度高13倍",
      "\"但请考虑：你的数据质量始终完美吗？传感器故障/通信中断/极端天气都会引入噪声\"",
      "\"在噪声条件下，LSTM退化108%，LLM只退化2.2%\"",
      "建议：LSTM做主力 + LLM做鲁棒性校验，两者互补"
    ],
    "bullets_ja": [
      "正直に認める：クリーンデータではLSTMが確かに精度13倍高い",
      "「しかし考えてみてください：御社のデータ品質は常に完璧ですか？センサー故障・通信切断・極端な天候がノイズを引き起こします」",
      "「ノイズ条件下ではLSTMは108%劣化しますが、LLMはわずか2.2%です」",
      "提案：LSTMをメインに + LLMを頑健性チェックに、両者の相互補完"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "p08",
    "cat": "PowerTS-LLM",
    "q": "如何给客户定方案（时序预测场景）",
    "q_ja": "顧客へのソリューション提案方法（時系列予測の場合）",
    "bullets": [
      "① 先问清：精度优先还是鲁棒性优先？数据质量？实时性要求？",
      "② 先跑基线：LSTM 30分钟出结果，先看干净数据精度",
      "③ 评估风险：对历史数据加噪测试，看退化幅度",
      "④ 推荐：大多数情况推荐LSTM+异常检测；数据质量差→加LLM备用",
      "⑤ 不推荐直接用LLM替代LSTM"
    ],
    "bullets_ja": [
      "① まず確認：精度優先か頑健性優先か？データ品質は？リアルタイム性の要件は？",
      "② まずベースライン：LSTMで30分で結果を出し、クリーンデータの精度を確認",
      "③ リスク評価：過去データにノイズを加えてテストし、劣化幅を確認",
      "④ 推奨：ほとんどの場合LSTM＋異常検出を推奨；データ品質が低い→LLMをバックアップに追加",
      "⑤ LLMでLSTMを直接置き換えるのは非推奨"
    ],
    "group": "项目",
    "lv": 2
  },
  {
    "id": "al01",
    "cat": "算法",
    "q": "二分查找 — 模板与边界处理",
    "q_ja": "二分探索 — テンプレートと境界処理",
    "bullets": [
      "前提：<span class=\"highlight\">有序数组</span>。时间O(log n)，空间O(1)",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">binary_search</span>(nums, target):\n    lo, hi = 0, len(nums) - 1\n    <span class=\"kw\">while</span> lo <= hi:\n        mid = lo + (hi - lo) // 2  <span class=\"cm\"># 防溢出</span>\n        <span class=\"kw\">if</span> nums[mid] == target:\n            <span class=\"kw\">return</span> mid\n        <span class=\"kw\">elif</span> nums[mid] < target:\n            lo = mid + 1\n        <span class=\"kw\">else</span>:\n            hi = mid - 1\n    <span class=\"kw\">return</span> -1</pre>",
      "关键边界：lo <= hi（闭区间）vs lo < hi（左闭右开）",
      "变体：找第一个>=target → lo=mid+1/hi=mid，返回lo"
    ],
    "bullets_ja": [
      "前提：<span class=\"highlight\">ソート済み配列</span>。時間O(log n)、空間O(1)",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">binary_search</span>(nums, target):\n    lo, hi = 0, len(nums) - 1\n    <span class=\"kw\">while</span> lo <= hi:\n        mid = lo + (hi - lo) // 2  <span class=\"cm\"># オーバーフロー防止</span>\n        <span class=\"kw\">if</span> nums[mid] == target:\n            <span class=\"kw\">return</span> mid\n        <span class=\"kw\">elif</span> nums[mid] < target:\n            lo = mid + 1\n        <span class=\"kw\">else</span>:\n            hi = mid - 1\n    <span class=\"kw\">return</span> -1</pre>",
      "重要な境界：lo <= hi（閉区間）vs lo < hi（左閉右開）",
      "変形：最初の>=targetを探す → lo=mid+1/hi=mid、loを返す"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "al02",
    "cat": "算法",
    "q": "排序算法对比 — 稳定性与复杂度",
    "q_ja": "ソートアルゴリズム比較 — 安定性と計算量",
    "bullets": [
      "冒泡排序：O(n²)，稳定。相邻比较交换，简单但慢",
      "选择排序：O(n²)，不稳定。每次选最小放前面",
      "插入排序：O(n²)，稳定。适合<span class=\"highlight\">近乎有序</span>的数据，实际常数小",
      "快速排序：平均O(n log n)，最坏O(n²)，不稳定。实际最快，Python sorted()用Timsort",
      "归并排序：O(n log n)，稳定，需要O(n)额外空间",
      "Python <code>sorted()</code> 用 <span class=\"highlight\">Timsort</span>（归并+插入混合），稳定，最坏O(n log n)"
    ],
    "bullets_ja": [
      "バブルソート：O(n²)、安定。隣接要素を比較・交換、単純だが遅い",
      "選択ソート：O(n²)、不安定。毎回最小値を選んで先頭に配置",
      "挿入ソート：O(n²)、安定。<span class=\"highlight\">ほぼ整列済み</span>のデータに適し、実際の定数が小さい",
      "クイックソート：平均O(n log n)、最悪O(n²)、不安定。実際最速、Python sorted()はTimsortを使用",
      "マージソート：O(n log n)、安定、O(n)の追加空間が必要",
      "Python <code>sorted()</code> は <span class=\"highlight\">Timsort</span>（マージ+挿入のハイブリッド）を使用、安定、最悪O(n log n)"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "al03",
    "cat": "算法",
    "q": "反转链表 — 迭代法",
    "q_ja": "連結リストの反転 — 反復法",
    "bullets": [
      "<pre><span class=\"kw\">class</span> ListNode:\n    <span class=\"kw\">def</span> __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\n<span class=\"kw\">def</span> <span class=\"fn\">reverse_list</span>(head):\n    prev = None\n    curr = head\n    <span class=\"kw\">while</span> curr:\n        nxt = curr.next   <span class=\"cm\"># 先保存下一个</span>\n        curr.next = prev  <span class=\"cm\"># 反转指针</span>\n        prev = curr       <span class=\"cm\"># prev前移</span>\n        curr = nxt        <span class=\"cm\"># curr前移</span>\n    <span class=\"kw\">return</span> prev</pre>",
      "时间O(n)，空间O(1)。三个指针：prev, curr, nxt",
      "面试高频(LC206)，变体：反转链表II(部分反转)、K个一组反转"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">class</span> ListNode:\n    <span class=\"kw\">def</span> __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\n<span class=\"kw\">def</span> <span class=\"fn\">reverse_list</span>(head):\n    prev = None\n    curr = head\n    <span class=\"kw\">while</span> curr:\n        nxt = curr.next   <span class=\"cm\"># 次のノードを保存</span>\n        curr.next = prev  <span class=\"cm\"># ポインタを反転</span>\n        prev = curr       <span class=\"cm\"># prevを前進</span>\n        curr = nxt        <span class=\"cm\"># currを前進</span>\n    <span class=\"kw\">return</span> prev</pre>",
      "時間O(n)、空間O(1)。3つのポインタ：prev, curr, nxt",
      "面接高頻出(LC206)、変形：連結リストII(部分反転)、K個ずつ反転"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "al04",
    "cat": "算法",
    "q": "有效括号 — 栈的经典应用",
    "q_ja": "有効な括弧 — スタックの典型応用",
    "bullets": [
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">is_valid</span>(s):\n    stack = []\n    pairs = {<span class=\"str\">\")\"</span>:<span class=\"str\">\"(\"</span>, <span class=\"str\">\"]\"</span>:<span class=\"str\">\"[\"</span>, <span class=\"str\">\"}\"</span>:<span class=\"str\">\"{\"</span>}\n    <span class=\"kw\">for</span> c <span class=\"kw\">in</span> s:\n        <span class=\"kw\">if</span> c <span class=\"kw\">in</span> pairs:\n            <span class=\"kw\">if not</span> stack <span class=\"kw\">or</span> stack[-1] != pairs[c]:\n                <span class=\"kw\">return</span> False\n            stack.pop()\n        <span class=\"kw\">else</span>:\n            stack.append(c)\n    <span class=\"kw\">return</span> len(stack) == 0</pre>",
      "LC20，时间O(n)空间O(n)。用哈希表映射右括号→左括号",
      "思路：遇到左括号入栈，遇到右括号检查栈顶是否匹配"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">is_valid</span>(s):\n    stack = []\n    pairs = {<span class=\"str\">\")\"</span>:<span class=\"str\">\"(\"</span>, <span class=\"str\">\"]\"</span>:<span class=\"str\">\"[\"</span>, <span class=\"str\">\"}\"</span>:<span class=\"str\">\"{\"</span>}\n    <span class=\"kw\">for</span> c <span class=\"kw\">in</span> s:\n        <span class=\"kw\">if</span> c <span class=\"kw\">in</span> pairs:\n            <span class=\"kw\">if not</span> stack <span class=\"kw\">or</span> stack[-1] != pairs[c]:\n                <span class=\"kw\">return</span> False\n            stack.pop()\n        <span class=\"kw\">else</span>:\n            stack.append(c)\n    <span class=\"kw\">return</span> len(stack) == 0</pre>",
      "LC20、時間O(n)空間O(n)。ハッシュテーブルで右括弧→左括弧をマッピング",
      "考え方：左括弧はスタックにpush、右括弧はスタック先頭と一致するか確認"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "al05",
    "cat": "算法",
    "q": "快速排序 — 分治思想与实现",
    "q_ja": "クイックソート — 分割統治の思想と実装",
    "bullets": [
      "思想：选pivot → 小的放左边大的放右边 → 递归排左右",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">quicksort</span>(arr):\n    <span class=\"kw\">if</span> len(arr) <= 1:\n        <span class=\"kw\">return</span> arr\n    pivot = arr[len(arr)//2]\n    left = [x <span class=\"kw\">for</span> x <span class=\"kw\">in</span> arr <span class=\"kw\">if</span> x < pivot]\n    mid  = [x <span class=\"kw\">for</span> x <span class=\"kw\">in</span> arr <span class=\"kw\">if</span> x == pivot]\n    right= [x <span class=\"kw\">for</span> x <span class=\"kw\">in</span> arr <span class=\"kw\">if</span> x > pivot]\n    <span class=\"kw\">return</span> quicksort(left) + mid + quicksort(right)</pre>",
      "平均O(n log n)，最坏O(n²)（已排序+选首元素做pivot）",
      "优化：随机选pivot / 三路快排（处理大量重复元素）/ 小数组切换插入排序",
      "原地版本用Lomuto/Hoare partition，不需要额外数组"
    ],
    "bullets_ja": [
      "考え方：pivotを選択 → 小さいものは左、大きいものは右 → 左右を再帰的にソート",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">quicksort</span>(arr):\n    <span class=\"kw\">if</span> len(arr) <= 1:\n        <span class=\"kw\">return</span> arr\n    pivot = arr[len(arr)//2]\n    left = [x <span class=\"kw\">for</span> x <span class=\"kw\">in</span> arr <span class=\"kw\">if</span> x < pivot]\n    mid  = [x <span class=\"kw\">for</span> x <span class=\"kw\">in</span> arr <span class=\"kw\">if</span> x == pivot]\n    right= [x <span class=\"kw\">for</span> x <span class=\"kw\">in</span> arr <span class=\"kw\">if</span> x > pivot]\n    <span class=\"kw\">return</span> quicksort(left) + mid + quicksort(right)</pre>",
      "平均O(n log n)、最悪O(n²)（ソート済み+先頭要素をpivotに選択時）",
      "最適化：ランダムpivot / 三方向クイックソート（重複要素が多い場合）/ 小配列は挿入ソートに切替",
      "インプレース版はLomuto/Hoareパーティションを使用、追加配列不要"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al06",
    "cat": "算法",
    "q": "双指针 — 三种模式",
    "q_ja": "二つのポインタ — 3つのパターン",
    "bullets": [
      "①<span class=\"highlight\">对撞指针</span>：两端向中间靠拢 → 两数之和(有序)、接雨水",
      "②<span class=\"highlight\">快慢指针</span>：快指针每次2步慢指针1步 → 链表环检测、找中点",
      "③<span class=\"highlight\">同向双指针</span>：两个从左出发 → 滑动窗口、去重",
      "<pre><span class=\"cm\"># 接雨水 (LC42) — 对撞指针</span>\n<span class=\"kw\">def</span> <span class=\"fn\">trap</span>(height):\n    l, r = 0, len(height)-1\n    l_max = r_max = res = 0\n    <span class=\"kw\">while</span> l < r:\n        <span class=\"kw\">if</span> height[l] < height[r]:\n            l_max = max(l_max, height[l])\n            res += l_max - height[l]\n            l += 1\n        <span class=\"kw\">else</span>:\n            r_max = max(r_max, height[r])\n            res += r_max - height[r]\n            r -= 1\n    <span class=\"kw\">return</span> res</pre>"
    ],
    "bullets_ja": [
      "①<span class=\"highlight\">対向ポインタ</span>：両端から中央に向かう → 二数の和(ソート済み)、雨水を受ける",
      "②<span class=\"highlight\">快遅ポインタ</span>：速いポインタは2歩、遅いポインタは1歩 → 連結リストの環検出、中間点の特定",
      "③<span class=\"highlight\">同方向ポインタ</span>：両方とも左から出発 → スライディングウィンドウ、重複排除",
      "<pre><span class=\"cm\"># 雨水を受ける (LC42) — 対向ポインタ</span>\n<span class=\"kw\">def</span> <span class=\"fn\">trap</span>(height):\n    l, r = 0, len(height)-1\n    l_max = r_max = res = 0\n    <span class=\"kw\">while</span> l < r:\n        <span class=\"kw\">if</span> height[l] < height[r]:\n            l_max = max(l_max, height[l])\n            res += l_max - height[l]\n            l += 1\n        <span class=\"kw\">else</span>:\n            r_max = max(r_max, height[r])\n            res += r_max - height[r]\n            r -= 1\n    <span class=\"kw\">return</span> res</pre>"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al07",
    "cat": "算法",
    "q": "滑动窗口 — 模板与应用",
    "q_ja": "スライディングウィンドウ — テンプレートと応用",
    "bullets": [
      "用于：连续子数组/子串的最大/最小/满足条件问题",
      "<pre><span class=\"cm\"># 无重复字符的最长子串 (LC3)</span>\n<span class=\"kw\">def</span> <span class=\"fn\">length_of_longest</span>(s):\n    seen = {}\n    left = res = 0\n    <span class=\"kw\">for</span> right, c <span class=\"kw\">in</span> enumerate(s):\n        <span class=\"kw\">if</span> c <span class=\"kw\">in</span> seen <span class=\"kw\">and</span> seen[c] >= left:\n            left = seen[c] + 1\n        seen[c] = right\n        res = max(res, right - left + 1)\n    <span class=\"kw\">return</span> res</pre>",
      "模式：右指针扩张 → 不满足条件时左指针收缩 → 维护窗口内状态",
      "时间O(n)——每个元素最多被左右指针各访问一次"
    ],
    "bullets_ja": [
      "用途：連続部分配列/部分文字列の最大/最小/条件を満たす問題",
      "<pre><span class=\"cm\"># 重複のない最長部分文字列 (LC3)</span>\n<span class=\"kw\">def</span> <span class=\"fn\">length_of_longest</span>(s):\n    seen = {}\n    left = res = 0\n    <span class=\"kw\">for</span> right, c <span class=\"kw\">in</span> enumerate(s):\n        <span class=\"kw\">if</span> c <span class=\"kw\">in</span> seen <span class=\"kw\">and</span> seen[c] >= left:\n            left = seen[c] + 1\n        seen[c] = right\n        res = max(res, right - left + 1)\n    <span class=\"kw\">return</span> res</pre>",
      "パターン：右ポインタで拡張 → 条件を満たさない場合左ポインタで縮小 → ウィンドウ内の状態を維持",
      "時間O(n)——各要素は左右のポインタに最大1回ずつアクセスされる"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al08",
    "cat": "算法",
    "q": "BFS vs DFS — 选择与实现",
    "q_ja": "BFS vs DFS — 選択と実装",
    "bullets": [
      "BFS：队列实现，<span class=\"highlight\">逐层扩展</span>。找最短路径用BFS",
      "DFS：栈/递归实现，<span class=\"highlight\">一条路走到底</span>。探索所有路径/检测环用DFS",
      "<pre><span class=\"cm\"># BFS 模板 — 图最短路径</span>\n<span class=\"kw\">def</span> <span class=\"fn\">bfs</span>(graph, start):\n    visited = {start}\n    q = deque([(start, 0)])  <span class=\"cm\"># (节点, 距离)</span>\n    <span class=\"kw\">while</span> q:\n        node, dist = q.popleft()\n        <span class=\"kw\">for</span> nei <span class=\"kw\">in</span> graph[node]:\n            <span class=\"kw\">if</span> nei <span class=\"kw\">not in</span> visited:\n                visited.add(nei)\n                q.append((nei, dist+1))</pre>",
      "BFS空间O(宽度)，DFS空间O(深度)。树的宽度可能比深度大得多"
    ],
    "bullets_ja": [
      "BFS：キューで実装、<span class=\"highlight\">層ごとに展開</span>。最短経路にはBFSを使用",
      "DFS：スタック/再帰で実装、<span class=\"highlight\">一つの道を最後まで進む</span>。全経路探索/環検出にはDFSを使用",
      "<pre><span class=\"cm\"># BFS テンプレート — グラフ最短経路</span>\n<span class=\"kw\">def</span> <span class=\"fn\">bfs</span>(graph, start):\n    visited = {start}\n    q = deque([(start, 0)])  <span class=\"cm\"># (ノード, 距離)</span>\n    <span class=\"kw\">while</span> q:\n        node, dist = q.popleft()\n        <span class=\"kw\">for</span> nei <span class=\"kw\">in</span> graph[node]:\n            <span class=\"kw\">if</span> nei <span class=\"kw\">not in</span> visited:\n                visited.add(nei)\n                q.append((nei, dist+1))</pre>",
      "BFS空間O(幅)、DFS空間O(深さ)。木の幅は深さより遥かに大きい場合がある"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al09",
    "cat": "算法",
    "q": "动态规划 — 思路与模板",
    "q_ja": "動的計画法 — 考え方とテンプレート",
    "bullets": [
      "核心：将问题分解为重叠子问题 → 记忆化避免重复计算",
      "步骤：①定义状态 ②找状态转移方程 ③确定初始条件 ④确定遍历顺序",
      "<pre><span class=\"cm\"># 0-1背包</span>\n<span class=\"kw\">def</span> <span class=\"fn\">knapsack</span>(W, weights, values):\n    n = len(weights)\n    dp = [0] * (W + 1)\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n):\n        <span class=\"kw\">for</span> w <span class=\"kw\">in</span> range(W, weights[i]-1, -1):  <span class=\"cm\"># 逆序！</span>\n            dp[w] = max(dp[w], dp[w-weights[i]] + values[i])\n    <span class=\"kw\">return</span> dp[W]</pre>",
      "0-1背包逆序遍历保证每个物品只用一次；完全背包正序遍历",
      "经典题：爬楼梯/零钱兑换/最长公共子序列/编辑距离/最长递增子序列"
    ],
    "bullets_ja": [
      "核心：問題を重複する部分問題に分解 → メモ化で重複計算を回避",
      "手順：①状態を定義 ②状態遷移式を見つける ③初期条件を確定 ④走査順序を決定",
      "<pre><span class=\"cm\"># 0-1ナップサック</span>\n<span class=\"kw\">def</span> <span class=\"fn\">knapsack</span>(W, weights, values):\n    n = len(weights)\n    dp = [0] * (W + 1)\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n):\n        <span class=\"kw\">for</span> w <span class=\"kw\">in</span> range(W, weights[i]-1, -1):  <span class=\"cm\"># 逆順！</span>\n            dp[w] = max(dp[w], dp[w-weights[i]] + values[i])\n    <span class=\"kw\">return</span> dp[W]</pre>",
      "0-1ナップサックは逆順走査で各アイテムを一度だけ使用を保証；完全ナップサックは順方向走査",
      "典型問題：階段登り/コイン両替/最長共通部分列/編集距離/最長増加部分列"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al10",
    "cat": "算法",
    "q": "LRU Cache — 哈希表 + 双向链表",
    "q_ja": "LRU Cache — ハッシュテーブル + 双方向連結リスト",
    "bullets": [
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> OrderedDict\n<span class=\"kw\">class</span> <span class=\"fn\">LRUCache</span>:\n    <span class=\"kw\">def</span> __init__(self, capacity):\n        self.cache = OrderedDict()\n        self.cap = capacity\n    <span class=\"kw\">def</span> <span class=\"fn\">get</span>(self, key):\n        <span class=\"kw\">if</span> key <span class=\"kw\">not in</span> self.cache: <span class=\"kw\">return</span> -1\n        self.cache.move_to_end(key)\n        <span class=\"kw\">return</span> self.cache[key]\n    <span class=\"kw\">def</span> <span class=\"fn\">put</span>(self, key, val):\n        <span class=\"kw\">if</span> key <span class=\"kw\">in</span> self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = val\n        <span class=\"kw\">if</span> len(self.cache) > self.cap:\n            self.cache.popitem(last=False)</pre>",
      "get/put 均 <span class=\"num\">O(1)</span>。OrderedDict底层就是哈希表+双向链表",
      "LC146高频题，面试可能要求不用OrderedDict手写双向链表"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> OrderedDict\n<span class=\"kw\">class</span> <span class=\"fn\">LRUCache</span>:\n    <span class=\"kw\">def</span> __init__(self, capacity):\n        self.cache = OrderedDict()\n        self.cap = capacity\n    <span class=\"kw\">def</span> <span class=\"fn\">get</span>(self, key):\n        <span class=\"kw\">if</span> key <span class=\"kw\">not in</span> self.cache: <span class=\"kw\">return</span> -1\n        self.cache.move_to_end(key)\n        <span class=\"kw\">return</span> self.cache[key]\n    <span class=\"kw\">def</span> <span class=\"fn\">put</span>(self, key, val):\n        <span class=\"kw\">if</span> key <span class=\"kw\">in</span> self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = val\n        <span class=\"kw\">if</span> len(self.cache) > self.cap:\n            self.cache.popitem(last=False)</pre>",
      "get/put 共に <span class=\"num\">O(1)</span>。OrderedDictの内部はハッシュテーブル+双方向連結リスト",
      "LC146高頻出問題、面接ではOrderedDictを使わず双方向連結リストの手書き実装を求められることもある"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al11",
    "cat": "算法",
    "q": "Trie树 — 前缀匹配",
    "q_ja": "Trie木 — プレフィックスマッチング",
    "bullets": [
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">TrieNode</span>:\n    <span class=\"kw\">def</span> __init__(self):\n        self.children = {}\n        self.is_end = False\n\n<span class=\"kw\">class</span> <span class=\"fn\">Trie</span>:\n    <span class=\"kw\">def</span> __init__(self): self.root = TrieNode()\n    <span class=\"kw\">def</span> <span class=\"fn\">insert</span>(self, word):\n        node = self.root\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> word:\n            <span class=\"kw\">if</span> c <span class=\"kw\">not in</span> node.children:\n                node.children[c] = TrieNode()\n            node = node.children[c]\n        node.is_end = True\n    <span class=\"kw\">def</span> <span class=\"fn\">starts_with</span>(self, prefix):\n        node = self.root\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> prefix:\n            <span class=\"kw\">if</span> c <span class=\"kw\">not in</span> node.children: <span class=\"kw\">return</span> False\n            node = node.children[c]\n        <span class=\"kw\">return</span> True</pre>",
      "插入/查找O(m)，m=字符串长度。空间换时间",
      "应用：自动补全、拼写检查、IP路由表、搜索引擎前缀匹配"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">TrieNode</span>:\n    <span class=\"kw\">def</span> __init__(self):\n        self.children = {}\n        self.is_end = False\n\n<span class=\"kw\">class</span> <span class=\"fn\">Trie</span>:\n    <span class=\"kw\">def</span> __init__(self): self.root = TrieNode()\n    <span class=\"kw\">def</span> <span class=\"fn\">insert</span>(self, word):\n        node = self.root\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> word:\n            <span class=\"kw\">if</span> c <span class=\"kw\">not in</span> node.children:\n                node.children[c] = TrieNode()\n            node = node.children[c]\n        node.is_end = True\n    <span class=\"kw\">def</span> <span class=\"fn\">starts_with</span>(self, prefix):\n        node = self.root\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> prefix:\n            <span class=\"kw\">if</span> c <span class=\"kw\">not in</span> node.children: <span class=\"kw\">return</span> False\n            node = node.children[c]\n        <span class=\"kw\">return</span> True</pre>",
      "挿入/検索O(m)、m=文字列長。空間と時間のトレードオフ",
      "応用：オートコンプリート、スペルチェック、IPルーティングテーブル、検索エンジンのプレフィックスマッチング"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al12",
    "cat": "算法",
    "q": "图 — Dijkstra 最短路径",
    "q_ja": "グラフ — Dijkstra 最短経路",
    "bullets": [
      "<pre><span class=\"kw\">import</span> heapq\n<span class=\"kw\">def</span> <span class=\"fn\">dijkstra</span>(graph, start):\n    dist = {start: 0}\n    pq = [(0, start)]  <span class=\"cm\"># (距离, 节点)</span>\n    <span class=\"kw\">while</span> pq:\n        d, u = heapq.heappop(pq)\n        <span class=\"kw\">if</span> d > dist.get(u, float(<span class=\"str\">'inf'</span>)):\n            <span class=\"kw\">continue</span>\n        <span class=\"kw\">for</span> v, w <span class=\"kw\">in</span> graph[u]:  <span class=\"cm\"># (邻居, 边权)</span>\n            nd = d + w\n            <span class=\"kw\">if</span> nd < dist.get(v, float(<span class=\"str\">'inf'</span>)):\n                dist[v] = nd\n                heapq.heappush(pq, (nd, v))\n    <span class=\"kw\">return</span> dist</pre>",
      "时间 O((V+E) log V)（优先队列实现），<span class=\"highlight\">不能处理负权边</span>",
      "负权边用 Bellman-Ford O(VE)；全源最短路用 Floyd-Warshall O(V³)"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">import</span> heapq\n<span class=\"kw\">def</span> <span class=\"fn\">dijkstra</span>(graph, start):\n    dist = {start: 0}\n    pq = [(0, start)]  <span class=\"cm\"># (距離, ノード)</span>\n    <span class=\"kw\">while</span> pq:\n        d, u = heapq.heappop(pq)\n        <span class=\"kw\">if</span> d > dist.get(u, float(<span class=\"str\">'inf'</span>)):\n            <span class=\"kw\">continue</span>\n        <span class=\"kw\">for</span> v, w <span class=\"kw\">in</span> graph[u]:  <span class=\"cm\"># (隣接ノード, 辺の重み)</span>\n            nd = d + w\n            <span class=\"kw\">if</span> nd < dist.get(v, float(<span class=\"str\">'inf'</span>)):\n                dist[v] = nd\n                heapq.heappush(pq, (nd, v))\n    <span class=\"kw\">return</span> dist</pre>",
      "時間 O((V+E) log V)（優先度キュー実装）、<span class=\"highlight\">負の重み辺は処理不可</span>",
      "負の重み辺にはBellman-Ford O(VE)を使用；全点対最短経路にはFloyd-Warshall O(V³)を使用"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al13",
    "cat": "算法",
    "q": "并查集 (Union-Find)",
    "q_ja": "Union-Find（素集合データ構造）",
    "bullets": [
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">UnionFind</span>:\n    <span class=\"kw\">def</span> __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n    <span class=\"kw\">def</span> <span class=\"fn\">find</span>(self, x):  <span class=\"cm\"># 路径压缩</span>\n        <span class=\"kw\">if</span> self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        <span class=\"kw\">return</span> self.parent[x]\n    <span class=\"kw\">def</span> <span class=\"fn\">union</span>(self, x, y):  <span class=\"cm\"># 按秩合并</span>\n        px, py = self.find(x), self.find(y)\n        <span class=\"kw\">if</span> px == py: <span class=\"kw\">return</span>\n        <span class=\"kw\">if</span> self.rank[px] < self.rank[py]: px, py = py, px\n        self.parent[py] = px\n        <span class=\"kw\">if</span> self.rank[px] == self.rank[py]: self.rank[px] += 1</pre>",
      "路径压缩+按秩合并 → find/union 近似 <span class=\"num\">O(1)</span>（反Ackermann函数）",
      "应用：连通分量、朋友圈问题、冗余连接检测"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">UnionFind</span>:\n    <span class=\"kw\">def</span> __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n    <span class=\"kw\">def</span> <span class=\"fn\">find</span>(self, x):  <span class=\"cm\"># 経路圧縮</span>\n        <span class=\"kw\">if</span> self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        <span class=\"kw\">return</span> self.parent[x]\n    <span class=\"kw\">def</span> <span class=\"fn\">union</span>(self, x, y):  <span class=\"cm\"># ランクによる統合</span>\n        px, py = self.find(x), self.find(y)\n        <span class=\"kw\">if</span> px == py: <span class=\"kw\">return</span>\n        <span class=\"kw\">if</span> self.rank[px] < self.rank[py]: px, py = py, px\n        self.parent[py] = px\n        <span class=\"kw\">if</span> self.rank[px] == self.rank[py]: self.rank[px] += 1</pre>",
      "経路圧縮+ランクによる統合 → find/unionは近似 <span class=\"num\">O(1)</span>（逆Ackermann関数）",
      "応用：連結成分、友達の輪問題、冗長辺検出"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al14",
    "cat": "算法",
    "q": "回溯 — 子集/排列/组合模板",
    "q_ja": "バックトラッキング — 部分集合/順列/組合せテンプレート",
    "bullets": [
      "回溯三件套模板：<span class=\"highlight\">做选择 → 递归 → 撤销选择</span>",
      "<pre><span class=\"cm\"># LC78 子集 — 回溯模板</span>\n<span class=\"kw\">def</span> <span class=\"fn\">subsets</span>(nums):\n    res = []\n    <span class=\"kw\">def</span> <span class=\"fn\">bt</span>(start, path):\n        res.append(path[:])  <span class=\"cm\"># 每个节点都是答案</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(start, len(nums)):\n            path.append(nums[i])   <span class=\"cm\"># 做选择</span>\n            bt(i + <span class=\"num\">1</span>, path)       <span class=\"cm\"># 递归(i+1避免重复)</span>\n            path.pop()             <span class=\"cm\"># 撤销选择</span>\n    bt(<span class=\"num\">0</span>, [])\n    <span class=\"kw\">return</span> res</pre>",
      "三种变体区别：<span class=\"highlight\">子集</span>→start index不回头；<span class=\"highlight\">排列</span>→visited数组允许回头；<span class=\"highlight\">组合</span>→start index + 剪枝",
      "时间复杂度：子集O(2ⁿ)，排列O(n!)，组合O(C(n,k))"
    ],
    "bullets_ja": [
      "バックトラッキング三点セット：<span class=\"highlight\">選択 → 再帰 → 選択を取消</span>",
      "<pre><span class=\"cm\"># LC78 部分集合 — バックトラッキングテンプレート</span>\n<span class=\"kw\">def</span> <span class=\"fn\">subsets</span>(nums):\n    res = []\n    <span class=\"kw\">def</span> <span class=\"fn\">bt</span>(start, path):\n        res.append(path[:])  <span class=\"cm\"># 各ノードが答え</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(start, len(nums)):\n            path.append(nums[i])   <span class=\"cm\"># 選択</span>\n            bt(i + <span class=\"num\">1</span>, path)       <span class=\"cm\"># 再帰(i+1で重複回避)</span>\n            path.pop()             <span class=\"cm\"># 選択を取消</span>\n    bt(<span class=\"num\">0</span>, [])\n    <span class=\"kw\">return</span> res</pre>",
      "3つの変形の違い：<span class=\"highlight\">部分集合</span>→start indexで後戻りしない；<span class=\"highlight\">順列</span>→visited配列で後戻り可能；<span class=\"highlight\">組合せ</span>→start index + 枝刈り",
      "時間計算量：部分集合O(2ⁿ)、順列O(n!)、組合せO(C(n,k))"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al15",
    "cat": "算法",
    "q": "N-Queens — 回溯经典",
    "q_ja": "N-Queens — バックトラッキングの典型",
    "bullets": [
      "LC51：在n×n棋盘放n个皇后，使其不能互相攻击（同行/同列/同对角线）",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">solveNQueens</span>(n):\n    res = []\n    cols = <span class=\"fn\">set</span>()        <span class=\"cm\"># 列冲突</span>\n    diag1 = <span class=\"fn\">set</span>()      <span class=\"cm\"># 主对角线 row-col</span>\n    diag2 = <span class=\"fn\">set</span>()      <span class=\"cm\"># 副对角线 row+col</span>\n    board = [[<span class=\"str\">\".\"</span>]*n <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(n)]\n\n    <span class=\"kw\">def</span> <span class=\"fn\">bt</span>(row):\n        <span class=\"kw\">if</span> row == n:\n            res.append([<span class=\"str\">\"\"</span>.join(r) <span class=\"kw\">for</span> r <span class=\"kw\">in</span> board])\n            <span class=\"kw\">return</span>\n        <span class=\"kw\">for</span> col <span class=\"kw\">in</span> range(n):\n            <span class=\"kw\">if</span> col <span class=\"kw\">in</span> cols <span class=\"kw\">or</span> row-col <span class=\"kw\">in</span> diag1 <span class=\"kw\">or</span> row+col <span class=\"kw\">in</span> diag2:\n                <span class=\"kw\">continue</span>\n            cols.add(col); diag1.add(row-col); diag2.add(row+col)\n            board[row][col] = <span class=\"str\">\"Q\"</span>\n            bt(row + <span class=\"num\">1</span>)\n            board[row][col] = <span class=\"str\">\".\"</span>\n            cols.remove(col); diag1.remove(row-col); diag2.remove(row+col)\n    bt(<span class=\"num\">0</span>)\n    <span class=\"kw\">return</span> res</pre>",
      "对角线判定：同一<span class=\"highlight\">主对角线row-col相同</span>，同一<span class=\"highlight\">副对角线row+col相同</span>，用set O(1)查重",
      "时间O(n!)：每行放1个，第1行n种，第2行≤n-1种…逐行递减"
    ],
    "bullets_ja": [
      "LC51：n×n盤面にn個のクイーンを配置し、互いに攻撃できないようにする（同行/同列/同対角線）",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">solveNQueens</span>(n):\n    res = []\n    cols = <span class=\"fn\">set</span>()        <span class=\"cm\"># 列の衝突</span>\n    diag1 = <span class=\"fn\">set</span>()      <span class=\"cm\"># 主対角線 row-col</span>\n    diag2 = <span class=\"fn\">set</span>()      <span class=\"cm\"># 副対角線 row+col</span>\n    board = [[<span class=\"str\">\".\"</span>]*n <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(n)]\n\n    <span class=\"kw\">def</span> <span class=\"fn\">bt</span>(row):\n        <span class=\"kw\">if</span> row == n:\n            res.append([<span class=\"str\">\"\"</span>.join(r) <span class=\"kw\">for</span> r <span class=\"kw\">in</span> board])\n            <span class=\"kw\">return</span>\n        <span class=\"kw\">for</span> col <span class=\"kw\">in</span> range(n):\n            <span class=\"kw\">if</span> col <span class=\"kw\">in</span> cols <span class=\"kw\">or</span> row-col <span class=\"kw\">in</span> diag1 <span class=\"kw\">or</span> row+col <span class=\"kw\">in</span> diag2:\n                <span class=\"kw\">continue</span>\n            cols.add(col); diag1.add(row-col); diag2.add(row+col)\n            board[row][col] = <span class=\"str\">\"Q\"</span>\n            bt(row + <span class=\"num\">1</span>)\n            board[row][col] = <span class=\"str\">\".\"</span>\n            cols.remove(col); diag1.remove(row-col); diag2.remove(row+col)\n    bt(<span class=\"num\">0</span>)\n    <span class=\"kw\">return</span> res</pre>",
      "対角線の判定：同一<span class=\"highlight\">主対角線ではrow-colが同じ</span>、同一<span class=\"highlight\">副対角線ではrow+colが同じ</span>、setでO(1)の重複チェック",
      "時間O(n!)：各行に1つ配置、第1行はn通り、第2行は≤n-1通り…行ごとに減少"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al16",
    "cat": "算法",
    "q": "贪心 — 区间调度问题",
    "q_ja": "貪欲法 — 区間スケジューリング問題",
    "bullets": [
      "LC56 合并区间：排序后依次检查重叠，贪心合并",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">merge</span>(intervals):\n    intervals.sort(key=<span class=\"kw\">lambda</span> x: x[<span class=\"num\">0</span>])\n    merged = [intervals[<span class=\"num\">0</span>]]\n    <span class=\"kw\">for</span> s, e <span class=\"kw\">in</span> intervals[<span class=\"num\">1</span>:]:\n        <span class=\"kw\">if</span> s <= merged[-<span class=\"num\">1</span>][<span class=\"num\">1</span>]:  <span class=\"cm\"># 有重叠</span>\n            merged[-<span class=\"num\">1</span>][<span class=\"num\">1</span>] = max(merged[-<span class=\"num\">1</span>][<span class=\"num\">1</span>], e)\n        <span class=\"kw\">else</span>:\n            merged.append([s, e])\n    <span class=\"kw\">return</span> merged</pre>",
      "LC435 无重叠区间：按<span class=\"highlight\">结束时间</span>排序，贪心选结束最早的，count需要移除的",
      "核心洞察：贪心成立条件 = <span class=\"highlight\">局部最优 → 全局最优</span>。区间问题中，尽早结束 = 给后续留最多空间"
    ],
    "bullets_ja": [
      "LC56 区間のマージ：ソート後に順次重なりを確認し、貪欲にマージ",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">merge</span>(intervals):\n    intervals.sort(key=<span class=\"kw\">lambda</span> x: x[<span class=\"num\">0</span>])\n    merged = [intervals[<span class=\"num\">0</span>]]\n    <span class=\"kw\">for</span> s, e <span class=\"kw\">in</span> intervals[<span class=\"num\">1</span>:]:\n        <span class=\"kw\">if</span> s <= merged[-<span class=\"num\">1</span>][<span class=\"num\">1</span>]:  <span class=\"cm\"># 重なりあり</span>\n            merged[-<span class=\"num\">1</span>][<span class=\"num\">1</span>] = max(merged[-<span class=\"num\">1</span>][<span class=\"num\">1</span>], e)\n        <span class=\"kw\">else</span>:\n            merged.append([s, e])\n    <span class=\"kw\">return</span> merged</pre>",
      "LC435 重ならない区間：<span class=\"highlight\">終了時間</span>でソートし、最も早く終わるものを貪欲に選択、削除すべき数を計算",
      "核心的洞察：貪欲法が成立する条件 = <span class=\"highlight\">局所最適 → 大域最適</span>。区間問題では、早く終わる = 後続に最大のスペースを残す"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al17",
    "cat": "算法",
    "q": "贪心 — 跳跃游戏",
    "q_ja": "貪欲法 — ジャンプゲーム",
    "bullets": [
      "LC55：数组每个元素表示最大跳跃距离，判断能否到达最后一个位置",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">canJump</span>(nums):\n    farthest = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n        <span class=\"kw\">if</span> i > farthest:      <span class=\"cm\"># 当前位置不可达</span>\n            <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        farthest = max(farthest, i + nums[i])\n    <span class=\"kw\">return</span> <span class=\"kw\">True</span></pre>",
      "贪心思路：维护<span class=\"highlight\">当前能到达的最远位置</span>，遍历时不断更新",
      "时间O(n)，空间O(1)。变体LC45跳跃游戏II求最少步数，用BFS层次思想"
    ],
    "bullets_ja": [
      "LC55：配列の各要素が最大ジャンプ距離を表し、最後の位置に到達できるか判定",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">canJump</span>(nums):\n    farthest = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n        <span class=\"kw\">if</span> i > farthest:      <span class=\"cm\"># 現在位置に到達不可</span>\n            <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        farthest = max(farthest, i + nums[i])\n    <span class=\"kw\">return</span> <span class=\"kw\">True</span></pre>",
      "貪欲法の考え方：<span class=\"highlight\">現在到達可能な最遠位置</span>を維持し、走査しながら更新",
      "時間O(n)、空間O(1)。変形LC45ジャンプゲームIIでは最少歩数を求め、BFSの層次的考え方を使用"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al18",
    "cat": "算法",
    "q": "二分查找变体 — 旋转排序数组",
    "q_ja": "二分探索の変形 — 回転ソート済み配列",
    "bullets": [
      "LC33：在 [4,5,6,7,0,1,2] 中搜索 target，O(log n)",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">search</span>(nums, target):\n    lo, hi = <span class=\"num\">0</span>, len(nums) - <span class=\"num\">1</span>\n    <span class=\"kw\">while</span> lo <= hi:\n        mid = (lo + hi) // <span class=\"num\">2</span>\n        <span class=\"kw\">if</span> nums[mid] == target:\n            <span class=\"kw\">return</span> mid\n        <span class=\"kw\">if</span> nums[lo] <= nums[mid]:  <span class=\"cm\"># 左半有序</span>\n            <span class=\"kw\">if</span> nums[lo] <= target < nums[mid]:\n                hi = mid - <span class=\"num\">1</span>\n            <span class=\"kw\">else</span>:\n                lo = mid + <span class=\"num\">1</span>\n        <span class=\"kw\">else</span>:                      <span class=\"cm\"># 右半有序</span>\n            <span class=\"kw\">if</span> nums[mid] < target <= nums[hi]:\n                lo = mid + <span class=\"num\">1</span>\n            <span class=\"kw\">else</span>:\n                hi = mid - <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> -<span class=\"num\">1</span></pre>",
      "核心洞察：<span class=\"highlight\">旋转后必有一半是有序的</span>，判断target在有序的一半还是另一半",
      "注意 nums[lo] <= nums[mid] 用 <= 处理lo==mid的情况"
    ],
    "bullets_ja": [
      "LC33：[4,5,6,7,0,1,2] の中からtargetを探索、O(log n)",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">search</span>(nums, target):\n    lo, hi = <span class=\"num\">0</span>, len(nums) - <span class=\"num\">1</span>\n    <span class=\"kw\">while</span> lo <= hi:\n        mid = (lo + hi) // <span class=\"num\">2</span>\n        <span class=\"kw\">if</span> nums[mid] == target:\n            <span class=\"kw\">return</span> mid\n        <span class=\"kw\">if</span> nums[lo] <= nums[mid]:  <span class=\"cm\"># 左半分がソート済み</span>\n            <span class=\"kw\">if</span> nums[lo] <= target < nums[mid]:\n                hi = mid - <span class=\"num\">1</span>\n            <span class=\"kw\">else</span>:\n                lo = mid + <span class=\"num\">1</span>\n        <span class=\"kw\">else</span>:                      <span class=\"cm\"># 右半分がソート済み</span>\n            <span class=\"kw\">if</span> nums[mid] < target <= nums[hi]:\n                lo = mid + <span class=\"num\">1</span>\n            <span class=\"kw\">else</span>:\n                hi = mid - <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> -<span class=\"num\">1</span></pre>",
      "核心的洞察：<span class=\"highlight\">回転後は必ず半分がソート済み</span>、targetがソート済みの半分にあるか否かを判定",
      "nums[lo] <= nums[mid] で <= を使うのはlo==midの場合の処理のため"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al19",
    "cat": "算法",
    "q": "二分查找变体 — 峰值元素",
    "q_ja": "二分探索の変形 — ピーク要素",
    "bullets": [
      "LC162：数组相邻元素不等，找任意一个峰值(比左右邻居都大)的下标",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">findPeakElement</span>(nums):\n    lo, hi = <span class=\"num\">0</span>, len(nums) - <span class=\"num\">1</span>\n    <span class=\"kw\">while</span> lo < hi:\n        mid = (lo + hi) // <span class=\"num\">2</span>\n        <span class=\"kw\">if</span> nums[mid] < nums[mid + <span class=\"num\">1</span>]:  <span class=\"cm\"># 上坡→峰在右边</span>\n            lo = mid + <span class=\"num\">1</span>\n        <span class=\"kw\">else</span>:                          <span class=\"cm\"># 下坡→峰在左边(含mid)</span>\n            hi = mid\n    <span class=\"kw\">return</span> lo</pre>",
      "关键：只需找<span class=\"highlight\">任意一个</span>峰值，不需要全局最大。比较mid与mid+1决定爬坡方向",
      "时间O(log n)。用 lo < hi（不是<=），最终lo==hi即为答案"
    ],
    "bullets_ja": [
      "LC162：隣接要素が異なる配列で、任意のピーク（左右の隣より大きい）のインデックスを求める",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">findPeakElement</span>(nums):\n    lo, hi = <span class=\"num\">0</span>, len(nums) - <span class=\"num\">1</span>\n    <span class=\"kw\">while</span> lo < hi:\n        mid = (lo + hi) // <span class=\"num\">2</span>\n        <span class=\"kw\">if</span> nums[mid] < nums[mid + <span class=\"num\">1</span>]:  <span class=\"cm\"># 上り坂→ピークは右側</span>\n            lo = mid + <span class=\"num\">1</span>\n        <span class=\"kw\">else</span>:                          <span class=\"cm\"># 下り坂→ピークは左側(midを含む)</span>\n            hi = mid\n    <span class=\"kw\">return</span> lo</pre>",
      "ポイント：<span class=\"highlight\">任意の1つの</span>ピークを見つければよく、全体の最大値は不要。midとmid+1を比較して登る方向を決定",
      "時間O(log n)。lo < hi（<=ではない）を使用し、最終的にlo==hiが答え"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al20",
    "cat": "算法",
    "q": "拓扑排序 — BFS (Kahn算法)",
    "q_ja": "トポロジカルソート — BFS (Kahnアルゴリズム)",
    "bullets": [
      "LC207 课程表：判断是否能完成所有课程（有向图是否有环）",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict, deque\n\n<span class=\"kw\">def</span> <span class=\"fn\">canFinish</span>(numCourses, prerequisites):\n    graph = defaultdict(list)\n    indegree = [<span class=\"num\">0</span>] * numCourses\n    <span class=\"kw\">for</span> u, v <span class=\"kw\">in</span> prerequisites:\n        graph[v].append(u)\n        indegree[u] += <span class=\"num\">1</span>\n    q = deque(i <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(numCourses) <span class=\"kw\">if</span> indegree[i] == <span class=\"num\">0</span>)\n    count = <span class=\"num\">0</span>\n    <span class=\"kw\">while</span> q:\n        node = q.popleft()\n        count += <span class=\"num\">1</span>\n        <span class=\"kw\">for</span> nb <span class=\"kw\">in</span> graph[node]:\n            indegree[nb] -= <span class=\"num\">1</span>\n            <span class=\"kw\">if</span> indegree[nb] == <span class=\"num\">0</span>:\n                q.append(nb)\n    <span class=\"kw\">return</span> count == numCourses</pre>",
      "Kahn算法：<span class=\"highlight\">入度为0的节点入队 → 弹出并减少邻居入度 → 重复</span>",
      "时间O(V+E)，空间O(V+E)。应用：依赖解析、构建系统、课程安排"
    ],
    "bullets_ja": [
      "LC207 履修スケジュール：全ての科目を履修できるか判定（有向グラフに閉路があるか）",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict, deque\n\n<span class=\"kw\">def</span> <span class=\"fn\">canFinish</span>(numCourses, prerequisites):\n    graph = defaultdict(list)\n    indegree = [<span class=\"num\">0</span>] * numCourses\n    <span class=\"kw\">for</span> u, v <span class=\"kw\">in</span> prerequisites:\n        graph[v].append(u)\n        indegree[u] += <span class=\"num\">1</span>\n    q = deque(i <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(numCourses) <span class=\"kw\">if</span> indegree[i] == <span class=\"num\">0</span>)\n    count = <span class=\"num\">0</span>\n    <span class=\"kw\">while</span> q:\n        node = q.popleft()\n        count += <span class=\"num\">1</span>\n        <span class=\"kw\">for</span> nb <span class=\"kw\">in</span> graph[node]:\n            indegree[nb] -= <span class=\"num\">1</span>\n            <span class=\"kw\">if</span> indegree[nb] == <span class=\"num\">0</span>:\n                q.append(nb)\n    <span class=\"kw\">return</span> count == numCourses</pre>",
      "Kahnアルゴリズム：<span class=\"highlight\">入次数0のノードをキューに入れる → 取出して隣接ノードの入次数を減らす → 繰返す</span>",
      "時間O(V+E)、空間O(V+E)。応用：依存関係解析、ビルドシステム、履修計画"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al21",
    "cat": "算法",
    "q": "最小生成树 — Kruskal算法",
    "q_ja": "最小全域木 — Kruskalアルゴリズム",
    "bullets": [
      "思路：按边权<span class=\"highlight\">从小到大排序</span>，逐条加入，用<span class=\"highlight\">并查集</span>检查是否成环",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">UnionFind</span>:\n    <span class=\"kw\">def</span> __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [<span class=\"num\">0</span>] * n\n    <span class=\"kw\">def</span> <span class=\"fn\">find</span>(self, x):\n        <span class=\"kw\">if</span> self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])  <span class=\"cm\"># 路径压缩</span>\n        <span class=\"kw\">return</span> self.parent[x]\n    <span class=\"kw\">def</span> <span class=\"fn\">union</span>(self, x, y):\n        px, py = self.find(x), self.find(y)\n        <span class=\"kw\">if</span> px == py: <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        <span class=\"kw\">if</span> self.rank[px] < self.rank[py]: px, py = py, px\n        self.parent[py] = px\n        <span class=\"kw\">if</span> self.rank[px] == self.rank[py]: self.rank[px] += <span class=\"num\">1</span>\n        <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n\n<span class=\"kw\">def</span> <span class=\"fn\">kruskal</span>(n, edges):\n    edges.sort(key=<span class=\"kw\">lambda</span> x: x[<span class=\"num\">2</span>])  <span class=\"cm\"># (u, v, w)</span>\n    uf = UnionFind(n)\n    mst_cost = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> u, v, w <span class=\"kw\">in</span> edges:\n        <span class=\"kw\">if</span> uf.union(u, v):\n            mst_cost += w\n    <span class=\"kw\">return</span> mst_cost</pre>",
      "时间O(E log E)（排序主导），并查集操作近似O(1)（Ackermann逆函数）",
      "Kruskal适合<span class=\"highlight\">稀疏图</span>（边少），Prim适合<span class=\"highlight\">稠密图</span>（用邻接矩阵 O(V²)）"
    ],
    "bullets_ja": [
      "考え方：辺の重みで<span class=\"highlight\">昇順にソート</span>し、順次追加、<span class=\"highlight\">Union-Find</span>で閉路を検出",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">UnionFind</span>:\n    <span class=\"kw\">def</span> __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [<span class=\"num\">0</span>] * n\n    <span class=\"kw\">def</span> <span class=\"fn\">find</span>(self, x):\n        <span class=\"kw\">if</span> self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])  <span class=\"cm\"># 経路圧縮</span>\n        <span class=\"kw\">return</span> self.parent[x]\n    <span class=\"kw\">def</span> <span class=\"fn\">union</span>(self, x, y):\n        px, py = self.find(x), self.find(y)\n        <span class=\"kw\">if</span> px == py: <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        <span class=\"kw\">if</span> self.rank[px] < self.rank[py]: px, py = py, px\n        self.parent[py] = px\n        <span class=\"kw\">if</span> self.rank[px] == self.rank[py]: self.rank[px] += <span class=\"num\">1</span>\n        <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n\n<span class=\"kw\">def</span> <span class=\"fn\">kruskal</span>(n, edges):\n    edges.sort(key=<span class=\"kw\">lambda</span> x: x[<span class=\"num\">2</span>])  <span class=\"cm\"># (u, v, w)</span>\n    uf = UnionFind(n)\n    mst_cost = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> u, v, w <span class=\"kw\">in</span> edges:\n        <span class=\"kw\">if</span> uf.union(u, v):\n            mst_cost += w\n    <span class=\"kw\">return</span> mst_cost</pre>",
      "時間O(E log E)（ソートが支配的）、Union-Find操作は近似O(1)（逆Ackermann関数）",
      "Kruskalは<span class=\"highlight\">疎グラフ</span>（辺が少ない）に適し、Primは<span class=\"highlight\">密グラフ</span>（隣接行列でO(V²)）に適する"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al22",
    "cat": "算法",
    "q": "图的环检测 — DFS三色标记",
    "q_ja": "グラフの閉路検出 — DFS三色マーキング",
    "bullets": [
      "有向图环检测：<span class=\"highlight\">白(0)未访问 / 灰(1)正在访问 / 黑(2)已完成</span>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">has_cycle</span>(graph, n):\n    color = [<span class=\"num\">0</span>] * n  <span class=\"cm\"># 0=白 1=灰 2=黑</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">dfs</span>(u):\n        color[u] = <span class=\"num\">1</span>  <span class=\"cm\"># 标记为灰色(进入)</span>\n        <span class=\"kw\">for</span> v <span class=\"kw\">in</span> graph[u]:\n            <span class=\"kw\">if</span> color[v] == <span class=\"num\">1</span>:  <span class=\"cm\"># 遇到灰色 → 有环!</span>\n                <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n            <span class=\"kw\">if</span> color[v] == <span class=\"num\">0</span> <span class=\"kw\">and</span> dfs(v):\n                <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n        color[u] = <span class=\"num\">2</span>  <span class=\"cm\"># 标记为黑色(完成)</span>\n        <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n\n    <span class=\"kw\">return</span> any(color[i] == <span class=\"num\">0</span> <span class=\"kw\">and</span> dfs(i) <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n))</pre>",
      "核心：DFS过程中再次遇到<span class=\"highlight\">灰色节点</span>说明存在回边（环）",
      "无向图环检测更简单：DFS时遇到已访问且不是parent的节点即有环，不需要三色"
    ],
    "bullets_ja": [
      "有向グラフの閉路検出：<span class=\"highlight\">白(0)未訪問 / 灰(1)訪問中 / 黒(2)完了</span>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">has_cycle</span>(graph, n):\n    color = [<span class=\"num\">0</span>] * n  <span class=\"cm\"># 0=白 1=灰 2=黒</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">dfs</span>(u):\n        color[u] = <span class=\"num\">1</span>  <span class=\"cm\"># 灰色にマーク(進入)</span>\n        <span class=\"kw\">for</span> v <span class=\"kw\">in</span> graph[u]:\n            <span class=\"kw\">if</span> color[v] == <span class=\"num\">1</span>:  <span class=\"cm\"># 灰色に遭遇 → 閉路あり！</span>\n                <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n            <span class=\"kw\">if</span> color[v] == <span class=\"num\">0</span> <span class=\"kw\">and</span> dfs(v):\n                <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n        color[u] = <span class=\"num\">2</span>  <span class=\"cm\"># 黒色にマーク(完了)</span>\n        <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n\n    <span class=\"kw\">return</span> any(color[i] == <span class=\"num\">0</span> <span class=\"kw\">and</span> dfs(i) <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n))</pre>",
      "核心：DFS中に再び<span class=\"highlight\">灰色ノード</span>に遭遇した場合、後退辺（閉路）が存在する",
      "無向グラフの閉路検出はより簡単：DFS中に訪問済みかつ親でないノードに遭遇すれば閉路あり、三色は不要"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al23",
    "cat": "算法",
    "q": "DP — 零钱兑换 (完全背包)",
    "q_ja": "DP — コイン両替（完全ナップサック）",
    "bullets": [
      "LC322：用给定面额硬币凑出amount的<span class=\"highlight\">最少硬币数</span>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">coinChange</span>(coins, amount):\n    dp = [float(<span class=\"str\">\"inf\"</span>)] * (amount + <span class=\"num\">1</span>)\n    dp[<span class=\"num\">0</span>] = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> coin <span class=\"kw\">in</span> coins:\n        <span class=\"kw\">for</span> x <span class=\"kw\">in</span> range(coin, amount + <span class=\"num\">1</span>):  <span class=\"cm\"># 正向遍历!</span>\n            dp[x] = min(dp[x], dp[x - coin] + <span class=\"num\">1</span>)\n    <span class=\"kw\">return</span> dp[amount] <span class=\"kw\">if</span> dp[amount] != float(<span class=\"str\">\"inf\"</span>) <span class=\"kw\">else</span> -<span class=\"num\">1</span></pre>",
      "状态：dp[i] = 凑出金额i所需最少硬币。转移：dp[i] = min(dp[i], dp[i-coin]+1)",
      "与0-1背包的区别：<span class=\"highlight\">完全背包正向遍历</span>（每个硬币可重复用），<span class=\"highlight\">0-1背包逆向遍历</span>（每个物品只能用一次）"
    ],
    "bullets_ja": [
      "LC322：指定された額面のコインでamountを作る<span class=\"highlight\">最少コイン数</span>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">coinChange</span>(coins, amount):\n    dp = [float(<span class=\"str\">\"inf\"</span>)] * (amount + <span class=\"num\">1</span>)\n    dp[<span class=\"num\">0</span>] = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> coin <span class=\"kw\">in</span> coins:\n        <span class=\"kw\">for</span> x <span class=\"kw\">in</span> range(coin, amount + <span class=\"num\">1</span>):  <span class=\"cm\"># 順方向走査！</span>\n            dp[x] = min(dp[x], dp[x - coin] + <span class=\"num\">1</span>)\n    <span class=\"kw\">return</span> dp[amount] <span class=\"kw\">if</span> dp[amount] != float(<span class=\"str\">\"inf\"</span>) <span class=\"kw\">else</span> -<span class=\"num\">1</span></pre>",
      "状態：dp[i] = 金額iを作るのに必要な最少コイン数。遷移：dp[i] = min(dp[i], dp[i-coin]+1)",
      "0-1ナップサックとの違い：<span class=\"highlight\">完全ナップサックは順方向走査</span>（各コインを繰返し使用可能）、<span class=\"highlight\">0-1ナップサックは逆方向走査</span>（各アイテムは1回のみ使用）"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al24",
    "cat": "算法",
    "q": "DP — 最长递增子序列 (LIS)",
    "q_ja": "DP — 最長増加部分列 (LIS)",
    "bullets": [
      "LC300：找数组中最长严格递增子序列的长度",
      "O(n²) DP解法：dp[i] = 以nums[i]结尾的LIS长度\n<pre><span class=\"kw\">def</span> <span class=\"fn\">lengthOfLIS</span>(nums):\n    dp = [<span class=\"num\">1</span>] * len(nums)\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n        <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(i):\n            <span class=\"kw\">if</span> nums[j] < nums[i]:\n                dp[i] = max(dp[i], dp[j] + <span class=\"num\">1</span>)\n    <span class=\"kw\">return</span> max(dp)</pre>",
      "O(n log n) 贪心+二分优化：维护一个尽量小的tails数组\n<pre><span class=\"kw\">import</span> bisect\n\n<span class=\"kw\">def</span> <span class=\"fn\">lengthOfLIS</span>(nums):\n    tails = []\n    <span class=\"kw\">for</span> x <span class=\"kw\">in</span> nums:\n        pos = bisect.bisect_left(tails, x)\n        <span class=\"kw\">if</span> pos == len(tails):\n            tails.append(x)     <span class=\"cm\"># x比所有都大，延长</span>\n        <span class=\"kw\">else</span>:\n            tails[pos] = x      <span class=\"cm\"># 替换，保持tails尽量小</span>\n    <span class=\"kw\">return</span> len(tails)</pre>",
      "bisect优化的核心：<span class=\"highlight\">tails[i]</span> = 长度为i+1的递增子序列的最小末尾元素，tails始终有序，用二分查找插入位置"
    ],
    "bullets_ja": [
      "LC300：配列中の最長厳密増加部分列の長さを求める",
      "O(n²) DP解法：dp[i] = nums[i]で終わるLISの長さ\n<pre><span class=\"kw\">def</span> <span class=\"fn\">lengthOfLIS</span>(nums):\n    dp = [<span class=\"num\">1</span>] * len(nums)\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n        <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(i):\n            <span class=\"kw\">if</span> nums[j] < nums[i]:\n                dp[i] = max(dp[i], dp[j] + <span class=\"num\">1</span>)\n    <span class=\"kw\">return</span> max(dp)</pre>",
      "O(n log n) 貪欲法+二分探索最適化：できるだけ小さいtails配列を維持\n<pre><span class=\"kw\">import</span> bisect\n\n<span class=\"kw\">def</span> <span class=\"fn\">lengthOfLIS</span>(nums):\n    tails = []\n    <span class=\"kw\">for</span> x <span class=\"kw\">in</span> nums:\n        pos = bisect.bisect_left(tails, x)\n        <span class=\"kw\">if</span> pos == len(tails):\n            tails.append(x)     <span class=\"cm\"># xが全てより大きい、延長</span>\n        <span class=\"kw\">else</span>:\n            tails[pos] = x      <span class=\"cm\"># 置換、tailsをできるだけ小さく保つ</span>\n    <span class=\"kw\">return</span> len(tails)</pre>",
      "bisect最適化の核心：<span class=\"highlight\">tails[i]</span> = 長さi+1の増加部分列の最小末尾要素、tailsは常にソート済み、二分探索で挿入位置を決定"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al25",
    "cat": "算法",
    "q": "DP — 编辑距离",
    "q_ja": "DP — 編集距離",
    "bullets": [
      "LC72 Edit Distance：将word1转换为word2的<span class=\"highlight\">最少操作次数</span>（插入/删除/替换）",
      "2D DP：dp[i][j] = word1[:i] 与 word2[:j] 的编辑距离",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">minDistance</span>(word1, word2):\n    m, n = len(word1), len(word2)\n    dp = [[<span class=\"num\">0</span>] * (n+1) <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(m+1)]\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(m+1):\n        dp[i][<span class=\"num\">0</span>] = i  <span class=\"cm\"># 删除i个字符</span>\n    <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(n+1):\n        dp[<span class=\"num\">0</span>][j] = j  <span class=\"cm\"># 插入j个字符</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(<span class=\"num\">1</span>, m+1):\n        <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(<span class=\"num\">1</span>, n+1):\n            <span class=\"kw\">if</span> word1[i-1] == word2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            <span class=\"kw\">else</span>:\n                dp[i][j] = <span class=\"num\">1</span> + min(\n                    dp[i-1][j],   <span class=\"cm\"># 删除</span>\n                    dp[i][j-1],   <span class=\"cm\"># 插入</span>\n                    dp[i-1][j-1]  <span class=\"cm\"># 替换</span>\n                )\n    <span class=\"kw\">return</span> dp[m][n]</pre>",
      "三种操作对应：dp[i-1][j]+1(删)、dp[i][j-1]+1(增)、dp[i-1][j-1]+1(替换)",
      "时间O(mn)，空间O(mn)。可用滚动数组优化到O(min(m,n))"
    ],
    "bullets_ja": [
      "LC72 Edit Distance：word1をword2に変換するための<span class=\"highlight\">最小操作回数</span>（挿入/削除/置換）",
      "2D DP：dp[i][j] = word1[:i] と word2[:j] の編集距離",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">minDistance</span>(word1, word2):\n    m, n = len(word1), len(word2)\n    dp = [[<span class=\"num\">0</span>] * (n+1) <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(m+1)]\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(m+1):\n        dp[i][<span class=\"num\">0</span>] = i  <span class=\"cm\"># i文字削除</span>\n    <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(n+1):\n        dp[<span class=\"num\">0</span>][j] = j  <span class=\"cm\"># j文字挿入</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(<span class=\"num\">1</span>, m+1):\n        <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(<span class=\"num\">1</span>, n+1):\n            <span class=\"kw\">if</span> word1[i-1] == word2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            <span class=\"kw\">else</span>:\n                dp[i][j] = <span class=\"num\">1</span> + min(\n                    dp[i-1][j],   <span class=\"cm\"># 削除</span>\n                    dp[i][j-1],   <span class=\"cm\"># 挿入</span>\n                    dp[i-1][j-1]  <span class=\"cm\"># 置換</span>\n                )\n    <span class=\"kw\">return</span> dp[m][n]</pre>",
      "3つの操作に対応：dp[i-1][j]+1(削除)、dp[i][j-1]+1(挿入)、dp[i-1][j-1]+1(置換)",
      "時間O(mn)、空間O(mn)。ローリング配列でO(min(m,n))に最適化可能"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al26",
    "cat": "算法",
    "q": "DP — 打家劫舍",
    "q_ja": "DP — 家を盗む",
    "bullets": [
      "LC198 House Robber：相邻房屋不能同时偷，求<span class=\"highlight\">最大金额</span>",
      "状态转移：dp[i] = max(dp[i-1], dp[i-2] + nums[i]) — 偷或不偷当前房",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">rob</span>(nums):\n    <span class=\"kw\">if not</span> nums:\n        <span class=\"kw\">return</span> <span class=\"num\">0</span>\n    prev2, prev1 = <span class=\"num\">0</span>, <span class=\"num\">0</span>  <span class=\"cm\"># 空间优化到O(1)</span>\n    <span class=\"kw\">for</span> num <span class=\"kw\">in</span> nums:\n        curr = max(prev1, prev2 + num)\n        prev2 = prev1\n        prev1 = curr\n    <span class=\"kw\">return</span> prev1</pre>",
      "变体 LC213 House Robber II（环形）：拆成两次线性 DP，分别<span class=\"highlight\">排除第一间</span>和<span class=\"highlight\">排除最后一间</span>，取最大值",
      "空间从O(n)优化到O(1)：只需记住前两个状态"
    ],
    "bullets_ja": [
      "LC198 House Robber：隣接する家は同時に盗めない、<span class=\"highlight\">最大金額</span>を求める",
      "状態遷移：dp[i] = max(dp[i-1], dp[i-2] + nums[i]) — 現在の家を盗むか盗まないか",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">rob</span>(nums):\n    <span class=\"kw\">if not</span> nums:\n        <span class=\"kw\">return</span> <span class=\"num\">0</span>\n    prev2, prev1 = <span class=\"num\">0</span>, <span class=\"num\">0</span>  <span class=\"cm\"># 空間をO(1)に最適化</span>\n    <span class=\"kw\">for</span> num <span class=\"kw\">in</span> nums:\n        curr = max(prev1, prev2 + num)\n        prev2 = prev1\n        prev1 = curr\n    <span class=\"kw\">return</span> prev1</pre>",
      "変形 LC213 House Robber II（環状）：2回の線形DPに分割、それぞれ<span class=\"highlight\">最初の家を除外</span>と<span class=\"highlight\">最後の家を除外</span>で最大値を取る",
      "空間をO(n)からO(1)に最適化：前2つの状態のみを記憶"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al27",
    "cat": "算法",
    "q": "树 — 二叉树最大路径和",
    "q_ja": "木 — 二分木の最大経路和",
    "bullets": [
      "LC124 Binary Tree Maximum Path Sum：路径可以经过任意节点（不一定过根），求<span class=\"highlight\">最大路径和</span>",
      "DFS 返回从当前节点向下的最大单侧增益；同时用全局变量记录经过当前节点的最大路径和",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">maxPathSum</span>(root):\n    max_sum = float(<span class=\"str\">'-inf'</span>)\n\n    <span class=\"kw\">def</span> <span class=\"fn\">dfs</span>(node):\n        <span class=\"kw\">nonlocal</span> max_sum\n        <span class=\"kw\">if not</span> node:\n            <span class=\"kw\">return</span> <span class=\"num\">0</span>\n        left = max(dfs(node.left), <span class=\"num\">0</span>)   <span class=\"cm\"># 负数不取</span>\n        right = max(dfs(node.right), <span class=\"num\">0</span>)\n        <span class=\"cm\"># 经过当前节点的完整路径</span>\n        max_sum = max(max_sum, left + node.val + right)\n        <span class=\"cm\"># 返回单侧最大增益</span>\n        <span class=\"kw\">return</span> node.val + max(left, right)\n\n    dfs(root)\n    <span class=\"kw\">return</span> max_sum</pre>",
      "关键：路径可以 left→root→right（更新全局最大值），但<span class=\"highlight\">返回值只能选一侧</span>（否则不构成路径）",
      "时间O(n)，空间O(h)。注意负数节点的处理：max(gain, 0)"
    ],
    "bullets_ja": [
      "LC124 Binary Tree Maximum Path Sum：経路は任意のノードを通過可能（根を通る必要なし）、<span class=\"highlight\">最大経路和</span>を求める",
      "DFSは現在のノードから下方への最大片側利益を返す；同時にグローバル変数で現在のノードを通る最大経路和を記録",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">maxPathSum</span>(root):\n    max_sum = float(<span class=\"str\">'-inf'</span>)\n\n    <span class=\"kw\">def</span> <span class=\"fn\">dfs</span>(node):\n        <span class=\"kw\">nonlocal</span> max_sum\n        <span class=\"kw\">if not</span> node:\n            <span class=\"kw\">return</span> <span class=\"num\">0</span>\n        left = max(dfs(node.left), <span class=\"num\">0</span>)   <span class=\"cm\"># 負の値は取らない</span>\n        right = max(dfs(node.right), <span class=\"num\">0</span>)\n        <span class=\"cm\"># 現在のノードを通る完全な経路</span>\n        max_sum = max(max_sum, left + node.val + right)\n        <span class=\"cm\"># 片側の最大利益を返す</span>\n        <span class=\"kw\">return</span> node.val + max(left, right)\n\n    dfs(root)\n    <span class=\"kw\">return</span> max_sum</pre>",
      "ポイント：経路はleft→root→right（グローバル最大値を更新）だが、<span class=\"highlight\">戻り値は片側のみ選択可能</span>（そうでないと経路にならない）",
      "時間O(n)、空間O(h)。負の値のノードの処理に注意：max(gain, 0)"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al28",
    "cat": "算法",
    "q": "树 — 最近公共祖先 (LCA)",
    "q_ja": "木 — 最近共通祖先 (LCA)",
    "bullets": [
      "LC236 Lowest Common Ancestor：在二叉树中找 p 和 q 的<span class=\"highlight\">最低公共祖先</span>",
      "递归思路：若 root 是 p 或 q，直接返回；否则在左右子树分别找",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">lowestCommonAncestor</span>(root, p, q):\n    <span class=\"kw\">if not</span> root <span class=\"kw\">or</span> root == p <span class=\"kw\">or</span> root == q:\n        <span class=\"kw\">return</span> root\n    left = lowestCommonAncestor(root.left, p, q)\n    right = lowestCommonAncestor(root.right, p, q)\n    <span class=\"kw\">if</span> left <span class=\"kw\">and</span> right:\n        <span class=\"kw\">return</span> root     <span class=\"cm\"># p和q分布在两侧，root是LCA</span>\n    <span class=\"kw\">return</span> left <span class=\"kw\">if</span> left <span class=\"kw\">else</span> right</pre>",
      "三种情况：①p、q在两侧→root是LCA ②都在左子树→左子树结果即LCA ③都在右子树→同理",
      "时间O(n)，空间O(h)。BST版本(LC235)可利用大小关系剪枝到O(h)"
    ],
    "bullets_ja": [
      "LC236 Lowest Common Ancestor：二分木中でpとqの<span class=\"highlight\">最近共通祖先</span>を求める",
      "再帰的考え方：rootがpまたはqなら直接返す；そうでなければ左右の部分木でそれぞれ探索",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">lowestCommonAncestor</span>(root, p, q):\n    <span class=\"kw\">if not</span> root <span class=\"kw\">or</span> root == p <span class=\"kw\">or</span> root == q:\n        <span class=\"kw\">return</span> root\n    left = lowestCommonAncestor(root.left, p, q)\n    right = lowestCommonAncestor(root.right, p, q)\n    <span class=\"kw\">if</span> left <span class=\"kw\">and</span> right:\n        <span class=\"kw\">return</span> root     <span class=\"cm\"># pとqが両側に分布、rootがLCA</span>\n    <span class=\"kw\">return</span> left <span class=\"kw\">if</span> left <span class=\"kw\">else</span> right</pre>",
      "3つのケース：①p、qが両側にある→rootがLCA ②両方とも左部分木→左部分木の結果がLCA ③両方とも右部分木→同様",
      "時間O(n)、空間O(h)。BST版(LC235)は大小関係を利用して枝刈りO(h)が可能"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al29",
    "cat": "算法",
    "q": "树 — 序列化与反序列化",
    "q_ja": "木 — シリアライズとデシリアライズ",
    "bullets": [
      "LC297 Serialize and Deserialize Binary Tree：将二叉树转为字符串再还原",
      "BFS层序遍历：用队列逐层处理，None节点标记为<span class=\"str\">\"null\"</span>",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\n\n<span class=\"kw\">def</span> <span class=\"fn\">serialize</span>(root):\n    <span class=\"kw\">if not</span> root:\n        <span class=\"kw\">return</span> <span class=\"str\">\"[]\"</span>\n    q = deque([root])\n    res = []\n    <span class=\"kw\">while</span> q:\n        node = q.popleft()\n        <span class=\"kw\">if</span> node:\n            res.append(str(node.val))\n            q.append(node.left)\n            q.append(node.right)\n        <span class=\"kw\">else</span>:\n            res.append(<span class=\"str\">\"null\"</span>)\n    <span class=\"kw\">return</span> <span class=\"str\">\"[\"</span> + <span class=\"str\">\",\"</span>.join(res) + <span class=\"str\">\"]\"</span></pre>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">deserialize</span>(data):\n    <span class=\"kw\">if</span> data == <span class=\"str\">\"[]\"</span>:\n        <span class=\"kw\">return</span> <span class=\"kw\">None</span>\n    vals = data[<span class=\"num\">1</span>:-<span class=\"num\">1</span>].split(<span class=\"str\">\",\"</span>)\n    root = TreeNode(int(vals[<span class=\"num\">0</span>]))\n    q = deque([root])\n    i = <span class=\"num\">1</span>\n    <span class=\"kw\">while</span> q:\n        node = q.popleft()\n        <span class=\"kw\">if</span> vals[i] != <span class=\"str\">\"null\"</span>:\n            node.left = TreeNode(int(vals[i]))\n            q.append(node.left)\n        i += <span class=\"num\">1</span>\n        <span class=\"kw\">if</span> vals[i] != <span class=\"str\">\"null\"</span>:\n            node.right = TreeNode(int(vals[i]))\n            q.append(node.right)\n        i += <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> root</pre>",
      "为什么BFS：层序遍历直觉清晰，<span class=\"highlight\">null节点位置对应子节点</span>，反序列化时按序还原即可"
    ],
    "bullets_ja": [
      "LC297 Serialize and Deserialize Binary Tree：二分木を文字列に変換して復元",
      "BFS層順走査：キューで層ごとに処理、Noneノードは<span class=\"str\">\"null\"</span>でマーク",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\n\n<span class=\"kw\">def</span> <span class=\"fn\">serialize</span>(root):\n    <span class=\"kw\">if not</span> root:\n        <span class=\"kw\">return</span> <span class=\"str\">\"[]\"</span>\n    q = deque([root])\n    res = []\n    <span class=\"kw\">while</span> q:\n        node = q.popleft()\n        <span class=\"kw\">if</span> node:\n            res.append(str(node.val))\n            q.append(node.left)\n            q.append(node.right)\n        <span class=\"kw\">else</span>:\n            res.append(<span class=\"str\">\"null\"</span>)\n    <span class=\"kw\">return</span> <span class=\"str\">\"[\"</span> + <span class=\"str\">\",\"</span>.join(res) + <span class=\"str\">\"]\"</span></pre>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">deserialize</span>(data):\n    <span class=\"kw\">if</span> data == <span class=\"str\">\"[]\"</span>:\n        <span class=\"kw\">return</span> <span class=\"kw\">None</span>\n    vals = data[<span class=\"num\">1</span>:-<span class=\"num\">1</span>].split(<span class=\"str\">\",\"</span>)\n    root = TreeNode(int(vals[<span class=\"num\">0</span>]))\n    q = deque([root])\n    i = <span class=\"num\">1</span>\n    <span class=\"kw\">while</span> q:\n        node = q.popleft()\n        <span class=\"kw\">if</span> vals[i] != <span class=\"str\">\"null\"</span>:\n            node.left = TreeNode(int(vals[i]))\n            q.append(node.left)\n        i += <span class=\"num\">1</span>\n        <span class=\"kw\">if</span> vals[i] != <span class=\"str\">\"null\"</span>:\n            node.right = TreeNode(int(vals[i]))\n            q.append(node.right)\n        i += <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> root</pre>",
      "BFSを使う理由：層順走査は直感的、<span class=\"highlight\">nullノードの位置が子ノードに対応</span>、デシリアライズ時に順次復元可能"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al30",
    "cat": "算法",
    "q": "位运算 — 常用技巧",
    "q_ja": "ビット演算 — よく使うテクニック",
    "bullets": [
      "LC136 Single Number：<span class=\"highlight\">XOR</span>所有数，成对消除 → a ^ a = 0, a ^ 0 = a",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">singleNumber</span>(nums):\n    res = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> n <span class=\"kw\">in</span> nums:\n        res ^= n\n    <span class=\"kw\">return</span> res</pre>",
      "判断2的幂：<span class=\"highlight\">n & (n-1) == 0</span>（且n>0）。原理：2的幂只有一个1位，减1后全变1",
      "计算1的个数（Hamming Weight）：循环执行 n &= (n-1) 并计数，每次<span class=\"highlight\">消除最低位的1</span>",
      "<pre><span class=\"cm\"># 获取/设置/清除第i位</span>\nget_bit  = (n >> i) & <span class=\"num\">1</span>      <span class=\"cm\"># 取第i位</span>\nset_bit  = n | (<span class=\"num\">1</span> << i)     <span class=\"cm\"># 第i位置1</span>\nclear_bit= n & ~(<span class=\"num\">1</span> << i)    <span class=\"cm\"># 第i位清0</span>\ntoggle   = n ^ (<span class=\"num\">1</span> << i)     <span class=\"cm\"># 第i位取反</span></pre>"
    ],
    "bullets_ja": [
      "LC136 Single Number：全ての数を<span class=\"highlight\">XOR</span>、ペアが打ち消し合う → a ^ a = 0, a ^ 0 = a",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">singleNumber</span>(nums):\n    res = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> n <span class=\"kw\">in</span> nums:\n        res ^= n\n    <span class=\"kw\">return</span> res</pre>",
      "2の冪の判定：<span class=\"highlight\">n & (n-1) == 0</span>（かつn>0）。原理：2の冪は1ビットのみ、-1すると全て1に変わる",
      "1のビット数（Hamming Weight）：ループで n &= (n-1) を実行しカウント、毎回<span class=\"highlight\">最下位の1を消去</span>",
      "<pre><span class=\"cm\"># 第iビットの取得/設定/クリア</span>\nget_bit  = (n >> i) & <span class=\"num\">1</span>      <span class=\"cm\"># 第iビットを取得</span>\nset_bit  = n | (<span class=\"num\">1</span> << i)     <span class=\"cm\"># 第iビットを1に設定</span>\nclear_bit= n & ~(<span class=\"num\">1</span> << i)    <span class=\"cm\"># 第iビットを0にクリア</span>\ntoggle   = n ^ (<span class=\"num\">1</span> << i)     <span class=\"cm\"># 第iビットを反転</span></pre>"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "al31",
    "cat": "算法",
    "q": "字符串 — KMP 模式匹配",
    "q_ja": "文字列 — KMP パターンマッチング",
    "bullets": [
      "KMP 算法：利用<span class=\"highlight\">前缀函数(failure function)</span>避免重复比较，O(n+m) vs 暴力O(nm)",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">build_lps</span>(pattern):\n    m = len(pattern)\n    lps = [<span class=\"num\">0</span>] * m  <span class=\"cm\"># longest proper prefix which is also suffix</span>\n    length = <span class=\"num\">0</span>\n    i = <span class=\"num\">1</span>\n    <span class=\"kw\">while</span> i < m:\n        <span class=\"kw\">if</span> pattern[i] == pattern[length]:\n            length += <span class=\"num\">1</span>\n            lps[i] = length\n            i += <span class=\"num\">1</span>\n        <span class=\"kw\">elif</span> length != <span class=\"num\">0</span>:\n            length = lps[length - <span class=\"num\">1</span>]  <span class=\"cm\"># 回退，不增加i</span>\n        <span class=\"kw\">else</span>:\n            lps[i] = <span class=\"num\">0</span>\n            i += <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> lps</pre>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">kmp_search</span>(text, pattern):\n    lps = build_lps(pattern)\n    i = j = <span class=\"num\">0</span>  <span class=\"cm\"># i→text, j→pattern</span>\n    <span class=\"kw\">while</span> i < len(text):\n        <span class=\"kw\">if</span> text[i] == pattern[j]:\n            i += <span class=\"num\">1</span>\n            j += <span class=\"num\">1</span>\n        <span class=\"kw\">if</span> j == len(pattern):\n            <span class=\"kw\">return</span> i - j  <span class=\"cm\"># 找到匹配</span>\n        <span class=\"kw\">elif</span> i < len(text) <span class=\"kw\">and</span> text[i] != pattern[j]:\n            <span class=\"kw\">if</span> j != <span class=\"num\">0</span>:\n                j = lps[j - <span class=\"num\">1</span>]  <span class=\"cm\"># 利用前缀表回退</span>\n            <span class=\"kw\">else</span>:\n                i += <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> -<span class=\"num\">1</span></pre>",
      "核心思想：前缀表告诉我们不匹配时<span class=\"highlight\">从哪里重新开始匹配</span>，避免回退text指针",
      "面试中如果只需 O(nm) 可用 Python <code>str.find()</code>，但要能讲清 KMP 原理"
    ],
    "bullets_ja": [
      "KMPアルゴリズム：<span class=\"highlight\">接頭辞関数(failure function)</span>を利用して重複比較を回避、O(n+m) vs 素朴法O(nm)",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">build_lps</span>(pattern):\n    m = len(pattern)\n    lps = [<span class=\"num\">0</span>] * m  <span class=\"cm\"># longest proper prefix which is also suffix</span>\n    length = <span class=\"num\">0</span>\n    i = <span class=\"num\">1</span>\n    <span class=\"kw\">while</span> i < m:\n        <span class=\"kw\">if</span> pattern[i] == pattern[length]:\n            length += <span class=\"num\">1</span>\n            lps[i] = length\n            i += <span class=\"num\">1</span>\n        <span class=\"kw\">elif</span> length != <span class=\"num\">0</span>:\n            length = lps[length - <span class=\"num\">1</span>]  <span class=\"cm\"># 後退、iは増加しない</span>\n        <span class=\"kw\">else</span>:\n            lps[i] = <span class=\"num\">0</span>\n            i += <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> lps</pre>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">kmp_search</span>(text, pattern):\n    lps = build_lps(pattern)\n    i = j = <span class=\"num\">0</span>  <span class=\"cm\"># i→text, j→pattern</span>\n    <span class=\"kw\">while</span> i < len(text):\n        <span class=\"kw\">if</span> text[i] == pattern[j]:\n            i += <span class=\"num\">1</span>\n            j += <span class=\"num\">1</span>\n        <span class=\"kw\">if</span> j == len(pattern):\n            <span class=\"kw\">return</span> i - j  <span class=\"cm\"># マッチ発見</span>\n        <span class=\"kw\">elif</span> i < len(text) <span class=\"kw\">and</span> text[i] != pattern[j]:\n            <span class=\"kw\">if</span> j != <span class=\"num\">0</span>:\n                j = lps[j - <span class=\"num\">1</span>]  <span class=\"cm\"># 接頭辞テーブルで後退</span>\n            <span class=\"kw\">else</span>:\n                i += <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> -<span class=\"num\">1</span></pre>",
      "核心的考え方：接頭辞テーブルが不一致時に<span class=\"highlight\">どこからマッチングを再開するか</span>を教え、textポインタの後退を回避",
      "面接でO(nm)で十分ならPython <code>str.find()</code>で可能だが、KMPの原理は説明できるべき"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al32",
    "cat": "算法",
    "q": "字符串 — 最长回文子串",
    "q_ja": "文字列 — 最長回文部分文字列",
    "bullets": [
      "LC5 Longest Palindromic Substring：找字符串中的<span class=\"highlight\">最长回文子串</span>",
      "中心扩展法：以每个字符(奇数长度)和每对相邻字符(偶数长度)为中心向两边扩展",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">longestPalindrome</span>(s):\n    <span class=\"kw\">def</span> <span class=\"fn\">expand</span>(l, r):\n        <span class=\"kw\">while</span> l >= <span class=\"num\">0</span> <span class=\"kw\">and</span> r < len(s) <span class=\"kw\">and</span> s[l] == s[r]:\n            l -= <span class=\"num\">1</span>\n            r += <span class=\"num\">1</span>\n        <span class=\"kw\">return</span> s[l+<span class=\"num\">1</span>:r]  <span class=\"cm\"># 回退一步</span>\n\n    res = <span class=\"str\">\"\"</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(s)):\n        odd = expand(i, i)       <span class=\"cm\"># 奇数长度</span>\n        even = expand(i, i+<span class=\"num\">1</span>)    <span class=\"cm\"># 偶数长度</span>\n        res = max(res, odd, even, key=len)\n    <span class=\"kw\">return</span> res</pre>",
      "时间O(n²)，空间O(1)。比DP解法更直观且空间更优",
      "进阶：Manacher算法可达O(n)，但面试中<span class=\"highlight\">极少要求实现</span>，知道存在即可"
    ],
    "bullets_ja": [
      "LC5 Longest Palindromic Substring：文字列中の<span class=\"highlight\">最長回文部分文字列</span>を求める",
      "中心拡張法：各文字（奇数長）と隣接文字ペア（偶数長）を中心に両側へ拡張",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">longestPalindrome</span>(s):\n    <span class=\"kw\">def</span> <span class=\"fn\">expand</span>(l, r):\n        <span class=\"kw\">while</span> l >= <span class=\"num\">0</span> <span class=\"kw\">and</span> r < len(s) <span class=\"kw\">and</span> s[l] == s[r]:\n            l -= <span class=\"num\">1</span>\n            r += <span class=\"num\">1</span>\n        <span class=\"kw\">return</span> s[l+<span class=\"num\">1</span>:r]  <span class=\"cm\"># 一歩戻す</span>\n\n    res = <span class=\"str\">\"\"</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(s)):\n        odd = expand(i, i)       <span class=\"cm\"># 奇数長</span>\n        even = expand(i, i+<span class=\"num\">1</span>)    <span class=\"cm\"># 偶数長</span>\n        res = max(res, odd, even, key=len)\n    <span class=\"kw\">return</span> res</pre>",
      "時間O(n²)、空間O(1)。DP解法より直感的で空間効率が良い",
      "発展：ManacherアルゴリズムはO(n)が可能だが、面接で<span class=\"highlight\">実装を求められることは極めて稀</span>、存在を知っていれば十分"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al33",
    "cat": "算法",
    "q": "单调栈 — 下一个更大元素",
    "q_ja": "単調スタック — 次のより大きい要素",
    "bullets": [
      "LC496/LC739 模式：对每个元素找<span class=\"highlight\">右边第一个比它大的元素</span>",
      "单调栈：栈中存索引，保持栈内对应值<span class=\"highlight\">单调递减</span>；遇到更大的元素则弹出并记录结果",
      "<pre><span class=\"cm\"># LC739 每日温度</span>\n<span class=\"kw\">def</span> <span class=\"fn\">dailyTemperatures</span>(temperatures):\n    n = len(temperatures)\n    res = [<span class=\"num\">0</span>] * n\n    stack = []  <span class=\"cm\"># 存索引，栈内温度单调递减</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n):\n        <span class=\"kw\">while</span> stack <span class=\"kw\">and</span> temperatures[i] > temperatures[stack[-<span class=\"num\">1</span>]]:\n            j = stack.pop()\n            res[j] = i - j  <span class=\"cm\"># 等待天数</span>\n        stack.append(i)\n    <span class=\"kw\">return</span> res</pre>",
      "时间O(n)：每个元素<span class=\"highlight\">最多入栈一次出栈一次</span>。空间O(n)",
      "变体：下一个更小元素 → 维护单调递增栈；循环数组 → 遍历两遍(i % n)"
    ],
    "bullets_ja": [
      "LC496/LC739 パターン：各要素の<span class=\"highlight\">右側で最初のより大きい要素</span>を探す",
      "単調スタック：スタックにインデックスを格納し、対応する値を<span class=\"highlight\">単調減少</span>に保つ；より大きい要素に遭遇したらポップして結果を記録",
      "<pre><span class=\"cm\"># LC739 毎日の気温</span>\n<span class=\"kw\">def</span> <span class=\"fn\">dailyTemperatures</span>(temperatures):\n    n = len(temperatures)\n    res = [<span class=\"num\">0</span>] * n\n    stack = []  <span class=\"cm\"># インデックスを格納、スタック内の温度は単調減少</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n):\n        <span class=\"kw\">while</span> stack <span class=\"kw\">and</span> temperatures[i] > temperatures[stack[-<span class=\"num\">1</span>]]:\n            j = stack.pop()\n            res[j] = i - j  <span class=\"cm\"># 待機日数</span>\n        stack.append(i)\n    <span class=\"kw\">return</span> res</pre>",
      "時間O(n)：各要素は<span class=\"highlight\">最大1回のpushと1回のpop</span>。空間O(n)",
      "変形：次のより小さい要素 → 単調増加スタックを維持；循環配列 → 2回走査(i % n)"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al34",
    "cat": "算法",
    "q": "前缀和 — 子数组和问题",
    "q_ja": "累積和 — 部分配列の和の問題",
    "bullets": [
      "LC560 Subarray Sum Equals K：找和为k的<span class=\"highlight\">连续子数组个数</span>",
      "核心思想：若 prefix[j] - prefix[i] == k，则子数组 (i, j] 的和为 k",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\n\n<span class=\"kw\">def</span> <span class=\"fn\">subarraySum</span>(nums, k):\n    count = <span class=\"num\">0</span>\n    prefix = <span class=\"num\">0</span>\n    seen = defaultdict(int)\n    seen[<span class=\"num\">0</span>] = <span class=\"num\">1</span>  <span class=\"cm\"># 前缀和为0出现1次（空前缀）</span>\n    <span class=\"kw\">for</span> num <span class=\"kw\">in</span> nums:\n        prefix += num\n        <span class=\"cm\"># 查找是否存在前缀和 = prefix - k</span>\n        count += seen[prefix - k]\n        seen[prefix] += <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> count</pre>",
      "关键：用<span class=\"highlight\">哈希表记录每个前缀和出现的次数</span>，一次遍历即可",
      "时间O(n)，空间O(n)。注意初始化 seen[0]=1 处理从下标0开始的子数组"
    ],
    "bullets_ja": [
      "LC560 Subarray Sum Equals K：和がkの<span class=\"highlight\">連続部分配列の個数</span>を求める",
      "核心的考え方：prefix[j] - prefix[i] == k ならば、部分配列 (i, j] の和はk",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\n\n<span class=\"kw\">def</span> <span class=\"fn\">subarraySum</span>(nums, k):\n    count = <span class=\"num\">0</span>\n    prefix = <span class=\"num\">0</span>\n    seen = defaultdict(int)\n    seen[<span class=\"num\">0</span>] = <span class=\"num\">1</span>  <span class=\"cm\"># 累積和0が1回出現（空の接頭辞）</span>\n    <span class=\"kw\">for</span> num <span class=\"kw\">in</span> nums:\n        prefix += num\n        <span class=\"cm\"># 累積和 = prefix - k が存在するか確認</span>\n        count += seen[prefix - k]\n        seen[prefix] += <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> count</pre>",
      "ポイント：<span class=\"highlight\">ハッシュテーブルで各累積和の出現回数を記録</span>、1回の走査で完了",
      "時間O(n)、空間O(n)。seen[0]=1の初期化はインデックス0から始まる部分配列の処理に注意"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al35",
    "cat": "算法",
    "q": "图 — 最短路径算法总结",
    "q_ja": "グラフ — 最短経路アルゴリズムまとめ",
    "bullets": [
      "四种常见最短路径算法的<span class=\"highlight\">适用场景与复杂度对比</span>：",
      "• <span class=\"highlight\">BFS</span>（无权图）：O(V+E)，最简单，队列实现，边权全为1时使用",
      "• <span class=\"highlight\">Dijkstra</span>（非负权重）：O((V+E)log V) 用最小堆。贪心思想，不能处理负权边",
      "• <span class=\"highlight\">Bellman-Ford</span>（可有负权）：O(VE)，松弛V-1轮。可检测负环。SPFA是其队列优化版本，平均更快但最坏仍为O(VE)",
      "• <span class=\"highlight\">Floyd-Warshall</span>（全源最短路）：O(V³)，三重循环DP。适合小图求所有点对间距离",
      "选择策略：无权→BFS | 正权单源→Dijkstra | 有负权→Bellman-Ford | 全源→Floyd",
      "面试常考：Dijkstra（LC743 Network Delay Time）+ BFS最短路（LC127 Word Ladder）"
    ],
    "bullets_ja": [
      "4つの一般的な最短経路アルゴリズムの<span class=\"highlight\">適用場面と計算量の比較</span>：",
      "• <span class=\"highlight\">BFS</span>（重みなしグラフ）：O(V+E)、最もシンプル、キューで実装、辺の重みが全て1の場合に使用",
      "• <span class=\"highlight\">Dijkstra</span>（非負重み）：O((V+E)log V) 最小ヒープを使用。貪欲法の考え方、負の重み辺は処理不可",
      "• <span class=\"highlight\">Bellman-Ford</span>（負の重みあり）：O(VE)、V-1回の緩和。負の閉路を検出可能。SPFAはそのキュー最適化版で平均的に高速だが最悪はO(VE)のまま",
      "• <span class=\"highlight\">Floyd-Warshall</span>（全点対最短経路）：O(V³)、三重ループDP。小規模グラフの全点対間距離に適する",
      "選択基準：重みなし→BFS | 正の重みの単一始点→Dijkstra | 負の重みあり→Bellman-Ford | 全点対→Floyd",
      "面接頻出：Dijkstra（LC743 Network Delay Time）+ BFS最短経路（LC127 Word Ladder）"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al36",
    "cat": "算法",
    "q": "Prim 最小生成树 — 堆优化",
    "q_ja": "Prim 最小全域木 — ヒープ最適化",
    "bullets": [
      "思路：从任意节点出发，贪心选<span class=\"highlight\">连接已选集合和未选集合的最小边</span>，逐步扩展",
      "<pre><span class=\"kw\">import</span> heapq\n<span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\n\n<span class=\"kw\">def</span> <span class=\"fn\">prim</span>(n, edges):\n    graph = defaultdict(list)\n    <span class=\"kw\">for</span> u, v, w <span class=\"kw\">in</span> edges:\n        graph[u].append((w, v))\n        graph[v].append((w, u))\n    visited = <span class=\"fn\">set</span>()\n    pq = [(<span class=\"num\">0</span>, <span class=\"num\">0</span>)]  <span class=\"cm\"># (权重, 节点)</span>\n    mst_cost = <span class=\"num\">0</span>\n    <span class=\"kw\">while</span> pq <span class=\"kw\">and</span> len(visited) < n:\n        w, u = heapq.heappop(pq)\n        <span class=\"kw\">if</span> u <span class=\"kw\">in</span> visited: <span class=\"kw\">continue</span>\n        visited.add(u)\n        mst_cost += w\n        <span class=\"kw\">for</span> nw, v <span class=\"kw\">in</span> graph[u]:\n            <span class=\"kw\">if</span> v <span class=\"kw\">not in</span> visited:\n                heapq.heappush(pq, (nw, v))\n    <span class=\"kw\">return</span> mst_cost</pre>",
      "堆优化Prim时间 <span class=\"num\">O(E log V)</span>，与Kruskal的 <span class=\"num\">O(E log E)</span> 相当",
      "Kruskal vs Prim：稀疏图(E远小于V²)用Kruskal；稠密图(E接近V²)用Prim朴素版O(V²)更优",
      "LC1584 连接所有点的最小费用 — Prim典型应用"
    ],
    "bullets_ja": [
      "考え方：任意のノードから出発し、<span class=\"highlight\">選択済み集合と未選択集合を繋ぐ最小辺</span>を貪欲に選択して段階的に拡張",
      "<pre><span class=\"kw\">import</span> heapq\n<span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\n\n<span class=\"kw\">def</span> <span class=\"fn\">prim</span>(n, edges):\n    graph = defaultdict(list)\n    <span class=\"kw\">for</span> u, v, w <span class=\"kw\">in</span> edges:\n        graph[u].append((w, v))\n        graph[v].append((w, u))\n    visited = <span class=\"fn\">set</span>()\n    pq = [(<span class=\"num\">0</span>, <span class=\"num\">0</span>)]  <span class=\"cm\"># (重み, ノード)</span>\n    mst_cost = <span class=\"num\">0</span>\n    <span class=\"kw\">while</span> pq <span class=\"kw\">and</span> len(visited) < n:\n        w, u = heapq.heappop(pq)\n        <span class=\"kw\">if</span> u <span class=\"kw\">in</span> visited: <span class=\"kw\">continue</span>\n        visited.add(u)\n        mst_cost += w\n        <span class=\"kw\">for</span> nw, v <span class=\"kw\">in</span> graph[u]:\n            <span class=\"kw\">if</span> v <span class=\"kw\">not in</span> visited:\n                heapq.heappush(pq, (nw, v))\n    <span class=\"kw\">return</span> mst_cost</pre>",
      "ヒープ最適化Primの時間 <span class=\"num\">O(E log V)</span>、Kruskalの <span class=\"num\">O(E log E)</span> と同等",
      "Kruskal vs Prim：疎グラフ(EがV²より遥かに小さい)にはKruskal；密グラフ(EがV²に近い)にはPrim素朴版O(V²)がより効率的",
      "LC1584 全点の接続の最小コスト — Primの典型的応用"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al37",
    "cat": "算法",
    "q": "差分数组 — 区间批量修改",
    "q_ja": "差分配列 — 区間一括更新",
    "bullets": [
      "差分数组：<span class=\"highlight\">diff[i] = nums[i] - nums[i-1]</span>，对区间 [l, r] 加 val 只需 diff[l]+=val, diff[r+1]-=val",
      "<pre><span class=\"cm\"># LC1109 航班预订统计</span>\n<span class=\"kw\">def</span> <span class=\"fn\">corpFlightBookings</span>(bookings, n):\n    diff = [<span class=\"num\">0</span>] * (n + <span class=\"num\">1</span>)\n    <span class=\"kw\">for</span> first, last, seats <span class=\"kw\">in</span> bookings:\n        diff[first - <span class=\"num\">1</span>] += seats      <span class=\"cm\"># 区间起点加</span>\n        diff[last] -= seats            <span class=\"cm\"># 区间终点+1减</span>\n    <span class=\"cm\"># 前缀和还原</span>\n    res = [<span class=\"num\">0</span>] * n\n    res[<span class=\"num\">0</span>] = diff[<span class=\"num\">0</span>]\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(<span class=\"num\">1</span>, n):\n        res[i] = res[i-<span class=\"num\">1</span>] + diff[i]\n    <span class=\"kw\">return</span> res</pre>",
      "时间 <span class=\"num\">O(n + m)</span>（m次区间操作+一次前缀和还原），暴力需O(nm)",
      "前缀和与差分是<span class=\"highlight\">互逆操作</span>：前缀和把差分数组→原数组，差分把原数组→变化量",
      "应用：公交车站上下客、区间加法（LC370）、二维差分（LC2536）"
    ],
    "bullets_ja": [
      "差分配列：<span class=\"highlight\">diff[i] = nums[i] - nums[i-1]</span>、区間 [l, r] にvalを加算するにはdiff[l]+=val, diff[r+1]-=valのみ",
      "<pre><span class=\"cm\"># LC1109 航空券予約統計</span>\n<span class=\"kw\">def</span> <span class=\"fn\">corpFlightBookings</span>(bookings, n):\n    diff = [<span class=\"num\">0</span>] * (n + <span class=\"num\">1</span>)\n    <span class=\"kw\">for</span> first, last, seats <span class=\"kw\">in</span> bookings:\n        diff[first - <span class=\"num\">1</span>] += seats      <span class=\"cm\"># 区間始点に加算</span>\n        diff[last] -= seats            <span class=\"cm\"># 区間終点+1で減算</span>\n    <span class=\"cm\"># 累積和で復元</span>\n    res = [<span class=\"num\">0</span>] * n\n    res[<span class=\"num\">0</span>] = diff[<span class=\"num\">0</span>]\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(<span class=\"num\">1</span>, n):\n        res[i] = res[i-<span class=\"num\">1</span>] + diff[i]\n    <span class=\"kw\">return</span> res</pre>",
      "時間 <span class=\"num\">O(n + m)</span>（m回の区間操作+1回の累積和復元）、素朴法はO(nm)",
      "累積和と差分は<span class=\"highlight\">逆操作</span>：累積和は差分配列→元配列に、差分は元配列→変化量に変換",
      "応用：バス停の乗降客数、区間加算（LC370）、二次元差分（LC2536）"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al38",
    "cat": "算法",
    "q": "回溯法 — 全排列与去重",
    "q_ja": "バックトラッキング — 全順列と重複排除",
    "bullets": [
      "LC46 全排列：不含重复数字的排列；LC47 全排列II：含重复数字需去重",
      "<pre><span class=\"cm\"># LC46 全排列（无重复）</span>\n<span class=\"kw\">def</span> <span class=\"fn\">permute</span>(nums):\n    res = []\n    <span class=\"kw\">def</span> <span class=\"fn\">bt</span>(path, used):\n        <span class=\"kw\">if</span> len(path) == len(nums):\n            res.append(path[:])\n            <span class=\"kw\">return</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n            <span class=\"kw\">if</span> used[i]: <span class=\"kw\">continue</span>\n            used[i] = <span class=\"kw\">True</span>\n            path.append(nums[i])\n            bt(path, used)\n            path.pop()\n            used[i] = <span class=\"kw\">False</span>\n    bt([], [<span class=\"kw\">False</span>] * len(nums))\n    <span class=\"kw\">return</span> res</pre>",
      "<pre><span class=\"cm\"># LC47 含重复元素的去重技巧</span>\n<span class=\"kw\">def</span> <span class=\"fn\">permuteUnique</span>(nums):\n    nums.sort()  <span class=\"cm\"># 排序是去重的前提</span>\n    res = []\n    <span class=\"kw\">def</span> <span class=\"fn\">bt</span>(path, used):\n        <span class=\"kw\">if</span> len(path) == len(nums):\n            res.append(path[:])\n            <span class=\"kw\">return</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n            <span class=\"kw\">if</span> used[i]: <span class=\"kw\">continue</span>\n            <span class=\"cm\"># 去重：相同值且前一个没用过→跳过</span>\n            <span class=\"kw\">if</span> i > <span class=\"num\">0</span> <span class=\"kw\">and</span> nums[i] == nums[i-<span class=\"num\">1</span>] <span class=\"kw\">and not</span> used[i-<span class=\"num\">1</span>]:\n                <span class=\"kw\">continue</span>\n            used[i] = <span class=\"kw\">True</span>\n            path.append(nums[i])\n            bt(path, used)\n            path.pop()\n            used[i] = <span class=\"kw\">False</span>\n    bt([], [<span class=\"kw\">False</span>] * len(nums))\n    <span class=\"kw\">return</span> res</pre>",
      "去重核心：<span class=\"highlight\">排序 + 跳过同层相同元素</span>。条件 <code>not used[i-1]</code> 保证同一层不重复选",
      "排列 vs 组合 vs 子集：排列用visited；组合/子集用start index"
    ],
    "bullets_ja": [
      "LC46 全順列：重複なしの数の順列；LC47 全順列II：重複ありで重複排除が必要",
      "<pre><span class=\"cm\"># LC46 全順列（重複なし）</span>\n<span class=\"kw\">def</span> <span class=\"fn\">permute</span>(nums):\n    res = []\n    <span class=\"kw\">def</span> <span class=\"fn\">bt</span>(path, used):\n        <span class=\"kw\">if</span> len(path) == len(nums):\n            res.append(path[:])\n            <span class=\"kw\">return</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n            <span class=\"kw\">if</span> used[i]: <span class=\"kw\">continue</span>\n            used[i] = <span class=\"kw\">True</span>\n            path.append(nums[i])\n            bt(path, used)\n            path.pop()\n            used[i] = <span class=\"kw\">False</span>\n    bt([], [<span class=\"kw\">False</span>] * len(nums))\n    <span class=\"kw\">return</span> res</pre>",
      "<pre><span class=\"cm\"># LC47 重複要素の排除テクニック</span>\n<span class=\"kw\">def</span> <span class=\"fn\">permuteUnique</span>(nums):\n    nums.sort()  <span class=\"cm\"># ソートが重複排除の前提</span>\n    res = []\n    <span class=\"kw\">def</span> <span class=\"fn\">bt</span>(path, used):\n        <span class=\"kw\">if</span> len(path) == len(nums):\n            res.append(path[:])\n            <span class=\"kw\">return</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n            <span class=\"kw\">if</span> used[i]: <span class=\"kw\">continue</span>\n            <span class=\"cm\"># 重複排除：同じ値で前の要素が未使用→スキップ</span>\n            <span class=\"kw\">if</span> i > <span class=\"num\">0</span> <span class=\"kw\">and</span> nums[i] == nums[i-<span class=\"num\">1</span>] <span class=\"kw\">and not</span> used[i-<span class=\"num\">1</span>]:\n                <span class=\"kw\">continue</span>\n            used[i] = <span class=\"kw\">True</span>\n            path.append(nums[i])\n            bt(path, used)\n            path.pop()\n            used[i] = <span class=\"kw\">False</span>\n    bt([], [<span class=\"kw\">False</span>] * len(nums))\n    <span class=\"kw\">return</span> res</pre>",
      "重複排除の核心：<span class=\"highlight\">ソート + 同じ層の同一要素をスキップ</span>。条件 <code>not used[i-1]</code> で同じ層での重複選択を防止",
      "順列 vs 組合せ vs 部分集合：順列はvisitedを使用；組合せ/部分集合はstart indexを使用"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al39",
    "cat": "算法",
    "q": "贪心算法 — 经典题型总结",
    "q_ja": "貪欲法 — 典型問題まとめ",
    "bullets": [
      "<span class=\"highlight\">贪心成立条件</span>：局部最优选择能导出全局最优解。证明方法：交换论证/归纳法/反证法",
      "经典贪心题型：① <span class=\"highlight\">区间调度</span>（按结束时间排序） ② <span class=\"highlight\">分配问题</span>（排序后贪心匹配） ③ <span class=\"highlight\">跳跃游戏</span>（维护最远可达） ④ <span class=\"highlight\">加油站</span>（累积剩余油量）",
      "<pre><span class=\"cm\"># LC455 分发饼干 — 排序+贪心</span>\n<span class=\"kw\">def</span> <span class=\"fn\">findContentChildren</span>(g, s):\n    g.sort()  <span class=\"cm\"># 孩子胃口</span>\n    s.sort()  <span class=\"cm\"># 饼干大小</span>\n    i = j = <span class=\"num\">0</span>\n    <span class=\"kw\">while</span> i < len(g) <span class=\"kw\">and</span> j < len(s):\n        <span class=\"kw\">if</span> s[j] >= g[i]:  <span class=\"cm\"># 饼干满足胃口</span>\n            i += <span class=\"num\">1</span>  <span class=\"cm\"># 喂饱一个孩子</span>\n        j += <span class=\"num\">1</span>  <span class=\"cm\"># 尝试下一块饼干</span>\n    <span class=\"kw\">return</span> i</pre>",
      "贪心 vs DP：贪心不回溯、无状态转移，时间通常更优；但贪心需要<span class=\"highlight\">证明正确性</span>，不确定时用DP更安全",
      "面试技巧：遇到求最优+排序后可贪心 → 考虑贪心；不确定时先DP再看能否简化为贪心"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">貪欲法の成立条件</span>：局所最適な選択が大域最適解を導く。証明方法：交換論法/帰納法/背理法",
      "典型的な貪欲法の問題類型：① <span class=\"highlight\">区間スケジューリング</span>（終了時間でソート） ② <span class=\"highlight\">割当問題</span>（ソート後に貪欲マッチング） ③ <span class=\"highlight\">ジャンプゲーム</span>（最遠到達点を維持） ④ <span class=\"highlight\">ガソリンスタンド</span>（残り油量を累積）",
      "<pre><span class=\"cm\"># LC455 クッキーの配布 — ソート+貪欲法</span>\n<span class=\"kw\">def</span> <span class=\"fn\">findContentChildren</span>(g, s):\n    g.sort()  <span class=\"cm\"># 子供の食欲</span>\n    s.sort()  <span class=\"cm\"># クッキーのサイズ</span>\n    i = j = <span class=\"num\">0</span>\n    <span class=\"kw\">while</span> i < len(g) <span class=\"kw\">and</span> j < len(s):\n        <span class=\"kw\">if</span> s[j] >= g[i]:  <span class=\"cm\"># クッキーが食欲を満たす</span>\n            i += <span class=\"num\">1</span>  <span class=\"cm\"># 子供1人を満足させる</span>\n        j += <span class=\"num\">1</span>  <span class=\"cm\"># 次のクッキーを試す</span>\n    <span class=\"kw\">return</span> i</pre>",
      "貪欲法 vs DP：貪欲法はバックトラックなし・状態遷移なし、時間的に通常より効率的；ただし貪欲法は<span class=\"highlight\">正当性の証明</span>が必要、不確かな場合はDPがより安全",
      "面接テクニック：最適解を求める+ソート後に貪欲可能 → 貪欲法を検討；不確かな場合はまずDPで、その後貪欲法に簡略化できるか確認"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "al40",
    "cat": "算法",
    "q": "DP分类 — 背包问题全家桶",
    "q_ja": "DP分類 — ナップサック問題ファミリー",
    "bullets": [
      "<span class=\"highlight\">0-1背包</span>（每个物品选或不选）：dp[w] = max(dp[w], dp[w-wi]+vi)，<span class=\"highlight\">容量逆序遍历</span>",
      "<span class=\"highlight\">完全背包</span>（每个物品可选无限次）：同上公式，<span class=\"highlight\">容量正序遍历</span>",
      "<span class=\"highlight\">多重背包</span>（每个物品有数量限制）：二进制拆分优化，将si个物品拆为1,2,4...份的0-1背包",
      "<pre><span class=\"cm\"># 0-1背包 vs 完全背包 — 唯一区别是遍历方向</span>\n<span class=\"kw\">def</span> <span class=\"fn\">knapsack_01</span>(W, wt, val):\n    dp = [<span class=\"num\">0</span>] * (W+<span class=\"num\">1</span>)\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(wt)):\n        <span class=\"kw\">for</span> w <span class=\"kw\">in</span> range(W, wt[i]-<span class=\"num\">1</span>, -<span class=\"num\">1</span>):  <span class=\"cm\"># 逆序！</span>\n            dp[w] = max(dp[w], dp[w-wt[i]]+val[i])\n\n<span class=\"kw\">def</span> <span class=\"fn\">knapsack_full</span>(W, wt, val):\n    dp = [<span class=\"num\">0</span>] * (W+<span class=\"num\">1</span>)\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(wt)):\n        <span class=\"kw\">for</span> w <span class=\"kw\">in</span> range(wt[i], W+<span class=\"num\">1</span>):  <span class=\"cm\"># 正序！</span>\n            dp[w] = max(dp[w], dp[w-wt[i]]+val[i])</pre>",
      "变体映射：目标和(LC494)→0-1背包 | 零钱兑换(LC322)→完全背包 | 分割等和子集(LC416)→0-1背包判断可达",
      "面试中背包问题通常不会直接出现，而是<span class=\"highlight\">变形后考察</span>，关键是识别出背包模型"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">0-1ナップサック</span>（各アイテムを選ぶか選ばないか）：dp[w] = max(dp[w], dp[w-wi]+vi)、<span class=\"highlight\">容量を逆順走査</span>",
      "<span class=\"highlight\">完全ナップサック</span>（各アイテムを無制限に選択可能）：同じ式、<span class=\"highlight\">容量を順方向走査</span>",
      "<span class=\"highlight\">多重ナップサック</span>（各アイテムに個数制限あり）：二進数分割最適化、si個のアイテムを1,2,4...個ずつの0-1ナップサックに分割",
      "<pre><span class=\"cm\"># 0-1ナップサック vs 完全ナップサック — 唯一の違いは走査方向</span>\n<span class=\"kw\">def</span> <span class=\"fn\">knapsack_01</span>(W, wt, val):\n    dp = [<span class=\"num\">0</span>] * (W+<span class=\"num\">1</span>)\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(wt)):\n        <span class=\"kw\">for</span> w <span class=\"kw\">in</span> range(W, wt[i]-<span class=\"num\">1</span>, -<span class=\"num\">1</span>):  <span class=\"cm\"># 逆順！</span>\n            dp[w] = max(dp[w], dp[w-wt[i]]+val[i])\n\n<span class=\"kw\">def</span> <span class=\"fn\">knapsack_full</span>(W, wt, val):\n    dp = [<span class=\"num\">0</span>] * (W+<span class=\"num\">1</span>)\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(wt)):\n        <span class=\"kw\">for</span> w <span class=\"kw\">in</span> range(wt[i], W+<span class=\"num\">1</span>):  <span class=\"cm\"># 順方向！</span>\n            dp[w] = max(dp[w], dp[w-wt[i]]+val[i])</pre>",
      "変形の対応：目標和(LC494)→0-1ナップサック | コイン両替(LC322)→完全ナップサック | 等和部分集合分割(LC416)→0-1ナップサックの到達判定",
      "面接ではナップサック問題が直接出ることは少なく、<span class=\"highlight\">変形として出題される</span>ため、ナップサックモデルの識別が重要"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al41",
    "cat": "算法",
    "q": "DP分类 — 区间DP与树形DP",
    "q_ja": "DP分類 — 区間DPと木DP",
    "bullets": [
      "<span class=\"highlight\">区间DP</span>：dp[i][j] 表示区间 [i,j] 上的最优解，枚举分割点k",
      "<pre><span class=\"cm\"># LC516 最长回文子序列 — 区间DP</span>\n<span class=\"kw\">def</span> <span class=\"fn\">longestPalindromeSubseq</span>(s):\n    n = len(s)\n    dp = [[<span class=\"num\">0</span>]*n <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(n)]\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n): dp[i][i] = <span class=\"num\">1</span>\n    <span class=\"kw\">for</span> length <span class=\"kw\">in</span> range(<span class=\"num\">2</span>, n+<span class=\"num\">1</span>):  <span class=\"cm\"># 枚举区间长度</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n-length+<span class=\"num\">1</span>):\n            j = i + length - <span class=\"num\">1</span>\n            <span class=\"kw\">if</span> s[i] == s[j]:\n                dp[i][j] = dp[i+<span class=\"num\">1</span>][j-<span class=\"num\">1</span>] + <span class=\"num\">2</span>\n            <span class=\"kw\">else</span>:\n                dp[i][j] = max(dp[i+<span class=\"num\">1</span>][j], dp[i][j-<span class=\"num\">1</span>])\n    <span class=\"kw\">return</span> dp[<span class=\"num\">0</span>][n-<span class=\"num\">1</span>]</pre>",
      "<span class=\"highlight\">树形DP</span>：在树结构上做DP，通常DFS后序遍历，子节点结果合并到父节点。典型：打家劫舍III(LC337)、二叉树最大路径和(LC124)",
      "区间DP特征：<span class=\"highlight\">从小区间推大区间</span>，遍历顺序按区间长度从小到大",
      "面试中区间DP较少直接考，但回文相关问题（LC516/LC1312）是高频考点"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">区間DP</span>：dp[i][j] は区間 [i,j] 上の最適解を表し、分割点kを列挙",
      "<pre><span class=\"cm\"># LC516 最長回文部分列 — 区間DP</span>\n<span class=\"kw\">def</span> <span class=\"fn\">longestPalindromeSubseq</span>(s):\n    n = len(s)\n    dp = [[<span class=\"num\">0</span>]*n <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(n)]\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n): dp[i][i] = <span class=\"num\">1</span>\n    <span class=\"kw\">for</span> length <span class=\"kw\">in</span> range(<span class=\"num\">2</span>, n+<span class=\"num\">1</span>):  <span class=\"cm\"># 区間長を列挙</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n-length+<span class=\"num\">1</span>):\n            j = i + length - <span class=\"num\">1</span>\n            <span class=\"kw\">if</span> s[i] == s[j]:\n                dp[i][j] = dp[i+<span class=\"num\">1</span>][j-<span class=\"num\">1</span>] + <span class=\"num\">2</span>\n            <span class=\"kw\">else</span>:\n                dp[i][j] = max(dp[i+<span class=\"num\">1</span>][j], dp[i][j-<span class=\"num\">1</span>])\n    <span class=\"kw\">return</span> dp[<span class=\"num\">0</span>][n-<span class=\"num\">1</span>]</pre>",
      "<span class=\"highlight\">木DP</span>：木構造上でDPを行い、通常DFSの帰りがけ順で子ノードの結果を親ノードに統合。典型：家を盗むIII(LC337)、二分木最大経路和(LC124)",
      "区間DPの特徴：<span class=\"highlight\">小さい区間から大きい区間を推定</span>、区間長の小さい順に走査",
      "面接では区間DPが直接出ることは少ないが、回文関連問題（LC516/LC1312）は高頻出"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al42",
    "cat": "算法",
    "q": "位运算进阶 — 状态压缩与技巧",
    "q_ja": "ビット演算上級 — 状態圧縮とテクニック",
    "bullets": [
      "<span class=\"highlight\">状压DP</span>：用二进制整数表示集合状态，常见于小规模问题（n<=20）",
      "<pre><span class=\"cm\"># 枚举子集的标准写法</span>\nmask = (<span class=\"num\">1</span> << n) - <span class=\"num\">1</span>  <span class=\"cm\"># 全集</span>\nsub = mask\n<span class=\"kw\">while</span> sub > <span class=\"num\">0</span>:\n    <span class=\"cm\"># 处理子集 sub</span>\n    sub = (sub - <span class=\"num\">1</span>) & mask  <span class=\"cm\"># 枚举下一个子集</span>\n\n<span class=\"cm\"># 常用位运算技巧</span>\nx & (-x)          <span class=\"cm\"># lowbit，取最低位的1</span>\nx & (x - <span class=\"num\">1</span>)       <span class=\"cm\"># 去掉最低位的1</span>\n(x >> i) & <span class=\"num\">1</span>      <span class=\"cm\"># 取第i位</span>\nx | (<span class=\"num\">1</span> << i)      <span class=\"cm\"># 将第i位设为1</span>\nx & ~(<span class=\"num\">1</span> << i)     <span class=\"cm\"># 将第i位设为0</span>\nbin(x).count(<span class=\"str\">'1'</span>) <span class=\"cm\"># Python计算popcount</span></pre>",
      "LC78 子集可用位运算：用 0 到 2^n-1 的每个数代表一个子集",
      "实用技巧：<span class=\"highlight\">交换两数</span> a^=b; b^=a; a^=b | <span class=\"highlight\">取绝对值</span>（仅整数）| <span class=\"highlight\">奇偶判断</span> n&1",
      "面试重点：LC136/137/260（出现次数系列）、子集枚举、状压DP（LC1723任务分配）"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">状態圧縮DP</span>：二進数の整数で集合の状態を表現、小規模問題（n<=20）に使われる",
      "<pre><span class=\"cm\"># 部分集合の列挙の標準的な書き方</span>\nmask = (<span class=\"num\">1</span> << n) - <span class=\"num\">1</span>  <span class=\"cm\"># 全体集合</span>\nsub = mask\n<span class=\"kw\">while</span> sub > <span class=\"num\">0</span>:\n    <span class=\"cm\"># 部分集合 sub を処理</span>\n    sub = (sub - <span class=\"num\">1</span>) & mask  <span class=\"cm\"># 次の部分集合を列挙</span>\n\n<span class=\"cm\"># よく使うビット演算テクニック</span>\nx & (-x)          <span class=\"cm\"># lowbit、最下位の1を取得</span>\nx & (x - <span class=\"num\">1</span>)       <span class=\"cm\"># 最下位の1を除去</span>\n(x >> i) & <span class=\"num\">1</span>      <span class=\"cm\"># 第iビットを取得</span>\nx | (<span class=\"num\">1</span> << i)      <span class=\"cm\"># 第iビットを1に設定</span>\nx & ~(<span class=\"num\">1</span> << i)     <span class=\"cm\"># 第iビットを0に設定</span>\nbin(x).count(<span class=\"str\">'1'</span>) <span class=\"cm\"># Pythonでpopcountを計算</span></pre>",
      "LC78 部分集合はビット演算で解ける：0から2^n-1の各数が一つの部分集合を表す",
      "実用テクニック：<span class=\"highlight\">二数の交換</span> a^=b; b^=a; a^=b | <span class=\"highlight\">絶対値の取得</span>（整数のみ）| <span class=\"highlight\">奇偶判定</span> n&1",
      "面接重点：LC136/137/260（出現回数シリーズ）、部分集合の列挙、状態圧縮DP（LC1723タスク割当）"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al43",
    "cat": "算法",
    "q": "Floyd-Warshall — 全源最短路",
    "q_ja": "Floyd-Warshall — 全点対最短経路",
    "bullets": [
      "思想：动态规划，枚举中间节点k，更新所有点对(i,j)的最短距离",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">floyd</span>(n, edges):\n    INF = float(<span class=\"str\">'inf'</span>)\n    dist = [[INF]*n <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(n)]\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n): dist[i][i] = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> u, v, w <span class=\"kw\">in</span> edges:\n        dist[u][v] = w  <span class=\"cm\"># 有向图</span>\n    <span class=\"cm\"># 三重循环：k必须在最外层</span>\n    <span class=\"kw\">for</span> k <span class=\"kw\">in</span> range(n):\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n):\n            <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(n):\n                <span class=\"kw\">if</span> dist[i][k] + dist[k][j] < dist[i][j]:\n                    dist[i][j] = dist[i][k] + dist[k][j]\n    <span class=\"kw\">return</span> dist</pre>",
      "时间 <span class=\"num\">O(V³)</span>，空间 <span class=\"num\">O(V²)</span>。<span class=\"highlight\">k必须放最外层</span>（DP状态转移的正确性保证）",
      "可处理负权边（但不能有负环）。检测负环：Floyd后若 dist[i][i] < 0 则存在负环",
      "适用场景：V较小（几百以内）的全源最短路、传递闭包计算"
    ],
    "bullets_ja": [
      "考え方：動的計画法、中間ノードkを列挙し、全点対(i,j)の最短距離を更新",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">floyd</span>(n, edges):\n    INF = float(<span class=\"str\">'inf'</span>)\n    dist = [[INF]*n <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(n)]\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n): dist[i][i] = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> u, v, w <span class=\"kw\">in</span> edges:\n        dist[u][v] = w  <span class=\"cm\"># 有向グラフ</span>\n    <span class=\"cm\"># 三重ループ：kは必ず最外側に</span>\n    <span class=\"kw\">for</span> k <span class=\"kw\">in</span> range(n):\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n):\n            <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(n):\n                <span class=\"kw\">if</span> dist[i][k] + dist[k][j] < dist[i][j]:\n                    dist[i][j] = dist[i][k] + dist[k][j]\n    <span class=\"kw\">return</span> dist</pre>",
      "時間 <span class=\"num\">O(V³)</span>、空間 <span class=\"num\">O(V²)</span>。<span class=\"highlight\">kは必ず最外側のループに配置</span>（DP状態遷移の正当性の保証）",
      "負の重み辺を処理可能（ただし負の閉路は不可）。負の閉路の検出：Floyd後にdist[i][i] < 0なら負の閉路が存在",
      "適用場面：Vが小さい（数百以内）全点対最短経路、推移的閉包の計算"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al44",
    "cat": "算法",
    "q": "柱状图最大矩形 — 单调栈经典",
    "q_ja": "柱状グラフの最大矩形 — 単調スタックの典型",
    "bullets": [
      "LC84：给定柱状图各柱高度，找<span class=\"highlight\">能围出的最大矩形面积</span>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">largestRectangleArea</span>(heights):\n    stack = []  <span class=\"cm\"># 单调递增栈，存索引</span>\n    heights.append(<span class=\"num\">0</span>)  <span class=\"cm\"># 哨兵，确保最后全部弹出</span>\n    max_area = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(heights)):\n        <span class=\"kw\">while</span> stack <span class=\"kw\">and</span> heights[i] < heights[stack[-<span class=\"num\">1</span>]]:\n            h = heights[stack.pop()]\n            <span class=\"cm\"># 宽度 = 当前i到栈顶的距离</span>\n            w = i <span class=\"kw\">if not</span> stack <span class=\"kw\">else</span> i - stack[-<span class=\"num\">1</span>] - <span class=\"num\">1</span>\n            max_area = max(max_area, h * w)\n        stack.append(i)\n    heights.pop()  <span class=\"cm\"># 恢复原数组</span>\n    <span class=\"kw\">return</span> max_area</pre>",
      "核心：对每根柱子，找<span class=\"highlight\">左边第一个更矮的</span>和<span class=\"highlight\">右边第一个更矮的</span> → 确定以该柱高度为高的矩形宽度",
      "时间 <span class=\"num\">O(n)</span>，空间 <span class=\"num\">O(n)</span>。末尾添加哨兵0是技巧，避免处理栈中剩余元素",
      "变体：LC85 最大矩形（2D矩阵中全1的最大矩形）→ 逐行构建柱状图 + 调用本题解法"
    ],
    "bullets_ja": [
      "LC84：柱状グラフの各柱の高さが与えられ、<span class=\"highlight\">囲める最大矩形面積</span>を求める",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">largestRectangleArea</span>(heights):\n    stack = []  <span class=\"cm\"># 単調増加スタック、インデックスを格納</span>\n    heights.append(<span class=\"num\">0</span>)  <span class=\"cm\"># 番兵、最後に全てをポップ</span>\n    max_area = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(heights)):\n        <span class=\"kw\">while</span> stack <span class=\"kw\">and</span> heights[i] < heights[stack[-<span class=\"num\">1</span>]]:\n            h = heights[stack.pop()]\n            <span class=\"cm\"># 幅 = 現在のiからスタック先頭までの距離</span>\n            w = i <span class=\"kw\">if not</span> stack <span class=\"kw\">else</span> i - stack[-<span class=\"num\">1</span>] - <span class=\"num\">1</span>\n            max_area = max(max_area, h * w)\n        stack.append(i)\n    heights.pop()  <span class=\"cm\"># 元の配列を復元</span>\n    <span class=\"kw\">return</span> max_area</pre>",
      "核心：各柱について、<span class=\"highlight\">左側で最初のより低い柱</span>と<span class=\"highlight\">右側で最初のより低い柱</span>を見つける → その柱の高さを高さとする矩形の幅を決定",
      "時間 <span class=\"num\">O(n)</span>、空間 <span class=\"num\">O(n)</span>。末尾に番兵0を追加するのがテクニックで、スタック内の残り要素の処理を回避",
      "変形：LC85 最大矩形（2D行列中の全て1の最大矩形）→ 行ごとに柱状グラフを構築 + 本問題の解法を適用"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "al45",
    "cat": "算法",
    "q": "DP — 最长公共子序列 (LCS)",
    "q_ja": "DP — 最長共通部分列 (LCS)",
    "bullets": [
      "LC1143：找两个字符串的<span class=\"highlight\">最长公共子序列</span>长度（子序列可不连续）",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">longestCommonSubsequence</span>(text1, text2):\n    m, n = len(text1), len(text2)\n    dp = [[<span class=\"num\">0</span>] * (n+<span class=\"num\">1</span>) <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(m+<span class=\"num\">1</span>)]\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(<span class=\"num\">1</span>, m+<span class=\"num\">1</span>):\n        <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(<span class=\"num\">1</span>, n+<span class=\"num\">1</span>):\n            <span class=\"kw\">if</span> text1[i-<span class=\"num\">1</span>] == text2[j-<span class=\"num\">1</span>]:\n                dp[i][j] = dp[i-<span class=\"num\">1</span>][j-<span class=\"num\">1</span>] + <span class=\"num\">1</span>\n            <span class=\"kw\">else</span>:\n                dp[i][j] = max(dp[i-<span class=\"num\">1</span>][j], dp[i][j-<span class=\"num\">1</span>])\n    <span class=\"kw\">return</span> dp[m][n]</pre>",
      "状态转移：字符相同→左上角+1；不同→取上方和左方的较大值",
      "时间 <span class=\"num\">O(mn)</span>，空间 <span class=\"num\">O(mn)</span>，可优化到O(min(m,n))",
      "LCS vs LIS：LIS可转化为LCS问题；LCS是diff算法（git diff）和编辑距离的基础"
    ],
    "bullets_ja": [
      "LC1143：2つの文字列の<span class=\"highlight\">最長共通部分列</span>の長さを求める（部分列は不連続でも可）",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">longestCommonSubsequence</span>(text1, text2):\n    m, n = len(text1), len(text2)\n    dp = [[<span class=\"num\">0</span>] * (n+<span class=\"num\">1</span>) <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(m+<span class=\"num\">1</span>)]\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(<span class=\"num\">1</span>, m+<span class=\"num\">1</span>):\n        <span class=\"kw\">for</span> j <span class=\"kw\">in</span> range(<span class=\"num\">1</span>, n+<span class=\"num\">1</span>):\n            <span class=\"kw\">if</span> text1[i-<span class=\"num\">1</span>] == text2[j-<span class=\"num\">1</span>]:\n                dp[i][j] = dp[i-<span class=\"num\">1</span>][j-<span class=\"num\">1</span>] + <span class=\"num\">1</span>\n            <span class=\"kw\">else</span>:\n                dp[i][j] = max(dp[i-<span class=\"num\">1</span>][j], dp[i][j-<span class=\"num\">1</span>])\n    <span class=\"kw\">return</span> dp[m][n]</pre>",
      "状態遷移：文字が同じ→左上+1；異なる→上と左の大きい方を取る",
      "時間 <span class=\"num\">O(mn)</span>、空間 <span class=\"num\">O(mn)</span>、O(min(m,n))に最適化可能",
      "LCS vs LIS：LISはLCS問題に変換可能；LCSはdiffアルゴリズム（git diff）と編集距離の基礎"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds01",
    "cat": "数据结构",
    "q": "数组 vs 链表 — 核心区别与适用场景",
    "q_ja": "配列 vs 連結リスト — 核心的な違いと適用場面",
    "bullets": [
      "数组：连续内存，随机访问O(1)，插入删除O(n)（需要移动元素）",
      "链表：离散内存，随机访问O(n)，插入删除O(1)（改指针即可）",
      "数组适合：频繁查找、已知大小、缓存友好（CPU预取连续内存）",
      "链表适合：频繁插入删除、大小动态变化、不需要随机访问",
      "Python list 底层是<span class=\"highlight\">动态数组</span>（非链表），append均摊O(1)"
    ],
    "bullets_ja": [
      "配列：連続メモリ、ランダムアクセスO(1)、挿入削除O(n)（要素の移動が必要）",
      "連結リスト：離散メモリ、ランダムアクセスO(n)、挿入削除O(1)（ポインタの変更のみ）",
      "配列が適する場面：頻繁な検索、サイズが既知、キャッシュフレンドリー（CPUが連続メモリをプリフェッチ）",
      "連結リストが適する場面：頻繁な挿入削除、サイズが動的に変化、ランダムアクセスが不要",
      "Python listの内部は<span class=\"highlight\">動的配列</span>（連結リストではない）、appendは償却O(1)"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "ds02",
    "cat": "数据结构",
    "q": "栈 (Stack) — LIFO 原理与应用",
    "q_ja": "スタック (Stack) — LIFO の原理と応用",
    "bullets": [
      "后进先出(Last In First Out)，只能操作栈顶：push O(1) / pop O(1) / peek O(1)",
      "<pre><span class=\"cm\"># Python 用 list 实现栈</span>\nstack = []\nstack.append(1)  <span class=\"cm\"># push</span>\nstack.append(2)\ntop = stack.pop()  <span class=\"cm\"># pop → 2</span>\npeek = stack[-1]   <span class=\"cm\"># peek → 1</span></pre>",
      "经典应用：括号匹配 / 函数调用栈 / 浏览器前进后退 / 表达式求值",
      "面试高频：有效括号(LC20)、最小栈(LC155)、每日温度(LC739)"
    ],
    "bullets_ja": [
      "後入れ先出し(Last In First Out)、スタック先頭のみ操作可能：push O(1) / pop O(1) / peek O(1)",
      "<pre><span class=\"cm\"># Python で list を使ってスタックを実装</span>\nstack = []\nstack.append(1)  <span class=\"cm\"># push</span>\nstack.append(2)\ntop = stack.pop()  <span class=\"cm\"># pop → 2</span>\npeek = stack[-1]   <span class=\"cm\"># peek → 1</span></pre>",
      "典型的な応用：括弧の対応 / 関数呼び出しスタック / ブラウザの進む・戻る / 式の評価",
      "面接高頻出：有効な括弧(LC20)、最小スタック(LC155)、毎日の気温(LC739)"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "ds03",
    "cat": "数据结构",
    "q": "队列 (Queue) — FIFO 原理与应用",
    "q_ja": "キュー (Queue) — FIFO の原理と応用",
    "bullets": [
      "先进先出(First In First Out)：enqueue O(1) / dequeue O(1)",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\nq = deque()\nq.append(1)     <span class=\"cm\"># enqueue</span>\nq.append(2)\nfront = q.popleft()  <span class=\"cm\"># dequeue → 1</span></pre>",
      "双端队列 deque：两端都能O(1)操作，比list.pop(0)快（list是O(n)）",
      "经典应用：BFS / 任务调度 / 消息队列 / 滑动窗口最大值"
    ],
    "bullets_ja": [
      "先入れ先出し(First In First Out)：enqueue O(1) / dequeue O(1)",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\nq = deque()\nq.append(1)     <span class=\"cm\"># enqueue</span>\nq.append(2)\nfront = q.popleft()  <span class=\"cm\"># dequeue → 1</span></pre>",
      "両端キュー deque：両端からO(1)操作可能、list.pop(0)より高速（listはO(n)）",
      "典型的な応用：BFS / タスクスケジューリング / メッセージキュー / スライディングウィンドウ最大値"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "ds04",
    "cat": "数据结构",
    "q": "哈希表 (HashMap) — 原理与冲突解决",
    "q_ja": "ハッシュテーブル (HashMap) — 原理と衝突解決",
    "bullets": [
      "核心：key → hash函数 → 数组索引 → 存value。查找/插入/删除均摊 <span class=\"num\">O(1)</span>",
      "冲突解决：①链地址法（每个桶是链表/红黑树）②开放地址法（线性/二次探测）",
      "Python dict 用开放地址法，负载因子>2/3时自动扩容（×2）",
      "<pre><span class=\"cm\"># Two Sum — 哈希表经典应用</span>\n<span class=\"kw\">def</span> <span class=\"fn\">two_sum</span>(nums, target):\n    seen = {}\n    <span class=\"kw\">for</span> i, n <span class=\"kw\">in</span> enumerate(nums):\n        <span class=\"kw\">if</span> target - n <span class=\"kw\">in</span> seen:\n            <span class=\"kw\">return</span> [seen[target-n], i]\n        seen[n] = i</pre>",
      "时间O(n)空间O(n)，用空间换时间的典型思路"
    ],
    "bullets_ja": [
      "核心：key → ハッシュ関数 → 配列インデックス → valueを格納。検索/挿入/削除は償却 <span class=\"num\">O(1)</span>",
      "衝突解決：①チェイン法（各バケットが連結リスト/赤黒木）②オープンアドレス法（線形/二次探査）",
      "Python dictはオープンアドレス法を使用、負荷係数>2/3で自動拡張（×2）",
      "<pre><span class=\"cm\"># Two Sum — ハッシュテーブルの典型応用</span>\n<span class=\"kw\">def</span> <span class=\"fn\">two_sum</span>(nums, target):\n    seen = {}\n    <span class=\"kw\">for</span> i, n <span class=\"kw\">in</span> enumerate(nums):\n        <span class=\"kw\">if</span> target - n <span class=\"kw\">in</span> seen:\n            <span class=\"kw\">return</span> [seen[target-n], i]\n        seen[n] = i</pre>",
      "時間O(n)空間O(n)、空間と時間のトレードオフの典型的な考え方"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "ds05",
    "cat": "数据结构",
    "q": "复杂度分析 — O(1) 到 O(n!) 速查",
    "q_ja": "計算量分析 — O(1) から O(n!) 早見表",
    "bullets": [
      "<span class=\"num\">O(1)</span>：哈希表查找、数组索引访问、栈push/pop",
      "<span class=\"num\">O(log n)</span>：二分查找、平衡BST操作、堆操作",
      "<span class=\"num\">O(n)</span>：遍历数组、线性搜索、链表操作",
      "<span class=\"num\">O(n log n)</span>：快排/归并排序（最优比较排序）",
      "<span class=\"num\">O(n²)</span>：冒泡/选择/插入排序、暴力两层循环",
      "<span class=\"num\">O(2ⁿ)</span>：子集枚举、递归斐波那契 | <span class=\"num\">O(n!)</span>：全排列"
    ],
    "bullets_ja": [
      "<span class=\"num\">O(1)</span>：ハッシュテーブル検索、配列インデックスアクセス、スタックのpush/pop",
      "<span class=\"num\">O(log n)</span>：二分探索、平衡BSTの操作、ヒープ操作",
      "<span class=\"num\">O(n)</span>：配列の走査、線形探索、連結リスト操作",
      "<span class=\"num\">O(n log n)</span>：クイック/マージソート（比較ソートの最適）",
      "<span class=\"num\">O(n²)</span>：バブル/選択/挿入ソート、素朴な二重ループ",
      "<span class=\"num\">O(2ⁿ)</span>：部分集合の列挙、再帰フィボナッチ | <span class=\"num\">O(n!)</span>：全順列"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "ds06",
    "cat": "数据结构",
    "q": "二叉树遍历 — 前序/中序/后序/层序",
    "q_ja": "二分木の走査 — 前順/中順/後順/層順",
    "bullets": [
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">inorder</span>(root):  <span class=\"cm\"># 中序：左-根-右 → BST有序</span>\n    <span class=\"kw\">if not</span> root: <span class=\"kw\">return</span> []\n    <span class=\"kw\">return</span> inorder(root.left)+[root.val]+inorder(root.right)\n\n<span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\n<span class=\"kw\">def</span> <span class=\"fn\">level_order</span>(root):  <span class=\"cm\"># BFS层序</span>\n    <span class=\"kw\">if not</span> root: <span class=\"kw\">return</span> []\n    q, res = deque([root]), []\n    <span class=\"kw\">while</span> q:\n        level = []\n        <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            <span class=\"kw\">if</span> node.left: q.append(node.left)\n            <span class=\"kw\">if</span> node.right: q.append(node.right)\n        res.append(level)\n    <span class=\"kw\">return</span> res</pre>",
      "前序(根左右)/中序(左根右)/后序(左右根) → 递归或用栈迭代",
      "层序 = BFS = 队列"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">inorder</span>(root):  <span class=\"cm\"># 中順：左-根-右 → BSTではソート済み</span>\n    <span class=\"kw\">if not</span> root: <span class=\"kw\">return</span> []\n    <span class=\"kw\">return</span> inorder(root.left)+[root.val]+inorder(root.right)\n\n<span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\n<span class=\"kw\">def</span> <span class=\"fn\">level_order</span>(root):  <span class=\"cm\"># BFS層順</span>\n    <span class=\"kw\">if not</span> root: <span class=\"kw\">return</span> []\n    q, res = deque([root]), []\n    <span class=\"kw\">while</span> q:\n        level = []\n        <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            <span class=\"kw\">if</span> node.left: q.append(node.left)\n            <span class=\"kw\">if</span> node.right: q.append(node.right)\n        res.append(level)\n    <span class=\"kw\">return</span> res</pre>",
      "前順(根左右)/中順(左根右)/後順(左右根) → 再帰またはスタックで反復",
      "層順 = BFS = キュー"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds07",
    "cat": "数据结构",
    "q": "堆 / 优先队列",
    "q_ja": "ヒープ / 優先度キュー",
    "bullets": [
      "最小堆：父节点 ≤ 子节点。插入O(log n)，取最小O(1)，删除最小O(log n)",
      "<pre><span class=\"kw\">import</span> heapq\nnums = [3,1,4,1,5,9]\nheapq.heapify(nums)       <span class=\"cm\"># O(n) 建堆</span>\nheapq.heappush(nums, 2)   <span class=\"cm\"># O(log n)</span>\nmin_val = heapq.heappop(nums)  <span class=\"cm\"># O(log n) → 1</span>\n<span class=\"cm\"># Top-K：nlargest / nsmallest</span>\ntop3 = heapq.nlargest(3, nums)</pre>",
      "Python heapq 是<span class=\"highlight\">最小堆</span>，要最大堆可以取负或用 nlargest",
      "经典应用：Top-K问题 / 合并K个有序链表 / 中位数流"
    ],
    "bullets_ja": [
      "最小ヒープ：親ノード ≤ 子ノード。挿入O(log n)、最小値取得O(1)、最小値削除O(log n)",
      "<pre><span class=\"kw\">import</span> heapq\nnums = [3,1,4,1,5,9]\nheapq.heapify(nums)       <span class=\"cm\"># O(n) ヒープ構築</span>\nheapq.heappush(nums, 2)   <span class=\"cm\"># O(log n)</span>\nmin_val = heapq.heappop(nums)  <span class=\"cm\"># O(log n) → 1</span>\n<span class=\"cm\"># Top-K：nlargest / nsmallest</span>\ntop3 = heapq.nlargest(3, nums)</pre>",
      "Python heapqは<span class=\"highlight\">最小ヒープ</span>、最大ヒープが必要な場合は負数にするか nlargest を使用",
      "典型的な応用：Top-K問題 / K個のソート済みリストのマージ / 中央値ストリーム"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds08",
    "cat": "数据结构",
    "q": "图的表示 — 邻接表 vs 邻接矩阵",
    "q_ja": "グラフの表現 — 隣接リスト vs 隣接行列",
    "bullets": [
      "<span class=\"highlight\">邻接表</span>：dict of lists，空间O(V+E)，适合<span class=\"highlight\">稀疏图</span>（大多数面试题用这个）",
      "<span class=\"highlight\">邻接矩阵</span>：2D数组，空间O(V²)，适合<span class=\"highlight\">稠密图</span>，O(1)判断边是否存在",
      "<pre><span class=\"cm\"># 邻接表（最常用）</span>\n<span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\ngraph = defaultdict(list)\ngraph[<span class=\"num\">0</span>].append(<span class=\"num\">1</span>)  <span class=\"cm\"># 0 → 1</span>\ngraph[<span class=\"num\">0</span>].append(<span class=\"num\">2</span>)  <span class=\"cm\"># 0 → 2</span>\ngraph[<span class=\"num\">1</span>].append(<span class=\"num\">2</span>)  <span class=\"cm\"># 1 → 2</span>\n\n<span class=\"cm\"># 邻接矩阵</span>\nV = <span class=\"num\">3</span>\nmatrix = [[<span class=\"num\">0</span>]*V <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(V)]\nmatrix[<span class=\"num\">0</span>][<span class=\"num\">1</span>] = <span class=\"num\">1</span>  <span class=\"cm\"># 0 → 1</span>\nmatrix[<span class=\"num\">0</span>][<span class=\"num\">2</span>] = <span class=\"num\">1</span>  <span class=\"cm\"># 0 → 2</span>\nmatrix[<span class=\"num\">1</span>][<span class=\"num\">2</span>] = <span class=\"num\">1</span>  <span class=\"cm\"># 1 → 2</span></pre>",
      "选择依据：E ≪ V² 用邻接表（省空间），E ≈ V² 用邻接矩阵（快速查边）",
      "面试中绝大多数图题使用邻接表，矩阵多见于Floyd最短路、图的连通性等特定问题"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">隣接リスト</span>：dict of lists、空間O(V+E)、<span class=\"highlight\">疎グラフ</span>に適する（ほとんどの面接問題でこれを使用）",
      "<span class=\"highlight\">隣接行列</span>：2D配列、空間O(V²)、<span class=\"highlight\">密グラフ</span>に適する、O(1)で辺の存在を判定",
      "<pre><span class=\"cm\"># 隣接リスト（最も一般的）</span>\n<span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\ngraph = defaultdict(list)\ngraph[<span class=\"num\">0</span>].append(<span class=\"num\">1</span>)  <span class=\"cm\"># 0 → 1</span>\ngraph[<span class=\"num\">0</span>].append(<span class=\"num\">2</span>)  <span class=\"cm\"># 0 → 2</span>\ngraph[<span class=\"num\">1</span>].append(<span class=\"num\">2</span>)  <span class=\"cm\"># 1 → 2</span>\n\n<span class=\"cm\"># 隣接行列</span>\nV = <span class=\"num\">3</span>\nmatrix = [[<span class=\"num\">0</span>]*V <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(V)]\nmatrix[<span class=\"num\">0</span>][<span class=\"num\">1</span>] = <span class=\"num\">1</span>  <span class=\"cm\"># 0 → 1</span>\nmatrix[<span class=\"num\">0</span>][<span class=\"num\">2</span>] = <span class=\"num\">1</span>  <span class=\"cm\"># 0 → 2</span>\nmatrix[<span class=\"num\">1</span>][<span class=\"num\">2</span>] = <span class=\"num\">1</span>  <span class=\"cm\"># 1 → 2</span></pre>",
      "選択基準：E ≪ V² なら隣接リスト（空間節約）、E ≈ V² なら隣接行列（辺の高速検索）",
      "面接では大半のグラフ問題で隣接リストを使用、行列はFloyd最短経路やグラフの連結性など特定の問題で使用"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds09",
    "cat": "数据结构",
    "q": "平衡BST — AVL树 vs 红黑树",
    "q_ja": "平衡BST — AVL木 vs 赤黒木",
    "bullets": [
      "普通BST在最坏情况下退化为链表，所有操作变为<span class=\"num\">O(n)</span>（如顺序插入1,2,3,4,5）",
      "<span class=\"highlight\">AVL树</span>：严格平衡（左右子树高度差≤1），查找最快，但插入/删除时旋转次数较多",
      "<span class=\"highlight\">红黑树</span>：放松平衡条件（通过红黑着色规则），旋转更少，插入/删除性能更好 → Java TreeMap、C++ std::map 底层实现",
      "两者查找/插入/删除均为 <span class=\"num\">O(log n)</span>，区别在于常数因子：AVL查找略快（更矮），红黑树修改略快（旋转少）",
      "Python 没有内置平衡BST；可用第三方库 <span class=\"highlight\">sortedcontainers.SortedList</span>，底层是B-tree变体，实测性能优秀"
    ],
    "bullets_ja": [
      "通常のBSTは最悪の場合連結リストに退化し、全操作が<span class=\"num\">O(n)</span>になる（例：1,2,3,4,5の順に挿入）",
      "<span class=\"highlight\">AVL木</span>：厳密に平衡（左右部分木の高さの差≤1）、検索は最速だが、挿入/削除時の回転回数が多い",
      "<span class=\"highlight\">赤黒木</span>：平衡条件を緩和（赤黒の着色規則による）、回転が少なく挿入/削除の性能が向上 → Java TreeMap、C++ std::mapの内部実装",
      "両者とも検索/挿入/削除は <span class=\"num\">O(log n)</span>、違いは定数係数：AVLは検索がやや速い（高さが低い）、赤黒木は変更がやや速い（回転が少ない）",
      "Pythonには組み込みの平衡BSTがない；サードパーティライブラリ <span class=\"highlight\">sortedcontainers.SortedList</span> が使用可能、内部はB-tree変種で実測性能が優秀"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds10",
    "cat": "数据结构",
    "q": "线段树 — 区间查询与更新",
    "q_ja": "セグメント木 — 区間クエリと更新",
    "bullets": [
      "解决问题：区间求和/最值 + 单点更新，每次操作 <span class=\"num\">O(log n)</span>（暴力需要O(n)）",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">SegTree</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, nums):\n        self.n = len(nums)\n        self.tree = [<span class=\"num\">0</span>] * (<span class=\"num\">2</span> * self.n)\n        <span class=\"cm\"># 叶子节点放在 tree[n..2n-1]</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(self.n):\n            self.tree[self.n + i] = nums[i]\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(self.n - <span class=\"num\">1</span>, <span class=\"num\">0</span>, -<span class=\"num\">1</span>):\n            self.tree[i] = self.tree[<span class=\"num\">2</span>*i] + self.tree[<span class=\"num\">2</span>*i+<span class=\"num\">1</span>]</pre>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">update</span>(self, i, val):  <span class=\"cm\"># 单点更新</span>\n    i += self.n\n    self.tree[i] = val\n    <span class=\"kw\">while</span> i > <span class=\"num\">1</span>:\n        i //= <span class=\"num\">2</span>\n        self.tree[i] = self.tree[<span class=\"num\">2</span>*i] + self.tree[<span class=\"num\">2</span>*i+<span class=\"num\">1</span>]\n\n<span class=\"kw\">def</span> <span class=\"fn\">query</span>(self, l, r):  <span class=\"cm\"># 区间和 [l, r)</span>\n    res = <span class=\"num\">0</span>\n    l += self.n; r += self.n\n    <span class=\"kw\">while</span> l < r:\n        <span class=\"kw\">if</span> l % <span class=\"num\">2</span> == <span class=\"num\">1</span>: res += self.tree[l]; l += <span class=\"num\">1</span>\n        <span class=\"kw\">if</span> r % <span class=\"num\">2</span> == <span class=\"num\">1</span>: r -= <span class=\"num\">1</span>; res += self.tree[r]\n        l //= <span class=\"num\">2</span>; r //= <span class=\"num\">2</span>\n    <span class=\"kw\">return</span> res</pre>",
      "应用：区间最值/求和（LC 307）、区间调度、数据流统计",
      "<span class=\"highlight\">懒传播(Lazy Propagation)</span>：支持区间批量更新，将更新延迟到查询时下推，区间更新也能O(log n)"
    ],
    "bullets_ja": [
      "解決する問題：区間の合計/最値 + 点更新、各操作 <span class=\"num\">O(log n)</span>（素朴法はO(n)）",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">SegTree</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, nums):\n        self.n = len(nums)\n        self.tree = [<span class=\"num\">0</span>] * (<span class=\"num\">2</span> * self.n)\n        <span class=\"cm\"># 葉ノードを tree[n..2n-1] に配置</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(self.n):\n            self.tree[self.n + i] = nums[i]\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(self.n - <span class=\"num\">1</span>, <span class=\"num\">0</span>, -<span class=\"num\">1</span>):\n            self.tree[i] = self.tree[<span class=\"num\">2</span>*i] + self.tree[<span class=\"num\">2</span>*i+<span class=\"num\">1</span>]</pre>",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">update</span>(self, i, val):  <span class=\"cm\"># 点更新</span>\n    i += self.n\n    self.tree[i] = val\n    <span class=\"kw\">while</span> i > <span class=\"num\">1</span>:\n        i //= <span class=\"num\">2</span>\n        self.tree[i] = self.tree[<span class=\"num\">2</span>*i] + self.tree[<span class=\"num\">2</span>*i+<span class=\"num\">1</span>]\n\n<span class=\"kw\">def</span> <span class=\"fn\">query</span>(self, l, r):  <span class=\"cm\"># 区間和 [l, r)</span>\n    res = <span class=\"num\">0</span>\n    l += self.n; r += self.n\n    <span class=\"kw\">while</span> l < r:\n        <span class=\"kw\">if</span> l % <span class=\"num\">2</span> == <span class=\"num\">1</span>: res += self.tree[l]; l += <span class=\"num\">1</span>\n        <span class=\"kw\">if</span> r % <span class=\"num\">2</span> == <span class=\"num\">1</span>: r -= <span class=\"num\">1</span>; res += self.tree[r]\n        l //= <span class=\"num\">2</span>; r //= <span class=\"num\">2</span>\n    <span class=\"kw\">return</span> res</pre>",
      "応用：区間最値/合計（LC 307）、区間スケジューリング、データストリーム統計",
      "<span class=\"highlight\">遅延伝搬(Lazy Propagation)</span>：区間一括更新をサポート、更新をクエリ時に下位に伝搬、区間更新もO(log n)"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds11",
    "cat": "数据结构",
    "q": "树状数组 (BIT/Fenwick Tree)",
    "q_ja": "フェニック木 (BIT/Fenwick Tree)",
    "bullets": [
      "比线段树更简洁，专门解决<span class=\"highlight\">前缀和 + 单点更新</span>问题，代码量仅约10行",
      "核心：<span class=\"highlight\">lowbit = i & (-i)</span>，利用二进制最低位1来划分区间",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">BIT</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, n):\n        self.n = n\n        self.tree = [<span class=\"num\">0</span>] * (n + <span class=\"num\">1</span>)  <span class=\"cm\"># 1-indexed</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">update</span>(self, i, delta):  <span class=\"cm\"># 单点加 delta</span>\n        <span class=\"kw\">while</span> i <= self.n:\n            self.tree[i] += delta\n            i += i & (-i)  <span class=\"cm\"># lowbit</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">prefix_sum</span>(self, i):  <span class=\"cm\"># 前缀和 [1..i]</span>\n        s = <span class=\"num\">0</span>\n        <span class=\"kw\">while</span> i > <span class=\"num\">0</span>:\n            s += self.tree[i]\n            i -= i & (-i)\n        <span class=\"kw\">return</span> s\n\n    <span class=\"kw\">def</span> <span class=\"fn\">range_sum</span>(self, l, r):  <span class=\"cm\"># 区间和 [l..r]</span>\n        <span class=\"kw\">return</span> self.prefix_sum(r) - self.prefix_sum(l - <span class=\"num\">1</span>)</pre>",
      "更新 <span class=\"num\">O(log n)</span>，查询 <span class=\"num\">O(log n)</span>，空间 <span class=\"num\">O(n)</span>",
      "BIT vs 线段树：BIT仅支持前缀类操作（前缀和/前缀最值），线段树支持任意区间操作 → 能用BIT就用BIT（更简洁更快）"
    ],
    "bullets_ja": [
      "セグメント木より簡潔で、<span class=\"highlight\">累積和 + 点更新</span>問題に特化、コード量は約10行",
      "核心：<span class=\"highlight\">lowbit = i & (-i)</span>、二進数の最下位の1を利用して区間を分割",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">BIT</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, n):\n        self.n = n\n        self.tree = [<span class=\"num\">0</span>] * (n + <span class=\"num\">1</span>)  <span class=\"cm\"># 1-indexed</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">update</span>(self, i, delta):  <span class=\"cm\"># 点にdeltaを加算</span>\n        <span class=\"kw\">while</span> i <= self.n:\n            self.tree[i] += delta\n            i += i & (-i)  <span class=\"cm\"># lowbit</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">prefix_sum</span>(self, i):  <span class=\"cm\"># 累積和 [1..i]</span>\n        s = <span class=\"num\">0</span>\n        <span class=\"kw\">while</span> i > <span class=\"num\">0</span>:\n            s += self.tree[i]\n            i -= i & (-i)\n        <span class=\"kw\">return</span> s\n\n    <span class=\"kw\">def</span> <span class=\"fn\">range_sum</span>(self, l, r):  <span class=\"cm\"># 区間和 [l..r]</span>\n        <span class=\"kw\">return</span> self.prefix_sum(r) - self.prefix_sum(l - <span class=\"num\">1</span>)</pre>",
      "更新 <span class=\"num\">O(log n)</span>、クエリ <span class=\"num\">O(log n)</span>、空間 <span class=\"num\">O(n)</span>",
      "BIT vs セグメント木：BITは累積系操作（累積和/累積最値）のみ対応、セグメント木は任意の区間操作に対応 → BITが使える場面ではBITを使う（より簡潔で高速）"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds12",
    "cat": "数据结构",
    "q": "双向链表 — 实现与应用",
    "q_ja": "双方向連結リスト — 実装と応用",
    "bullets": [
      "每个节点有 prev 和 next 指针，已知节点引用时插入/删除均为 <span class=\"num\">O(1)</span>（单链表删除需要前驱，O(n)查找）",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">Node</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, key=<span class=\"num\">0</span>, val=<span class=\"num\">0</span>):\n        self.key, self.val = key, val\n        self.prev = self.next = <span class=\"kw\">None</span>\n\n<span class=\"kw\">class</span> <span class=\"fn\">DoublyLinkedList</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self):\n        self.head, self.tail = Node(), Node()  <span class=\"cm\"># 哨兵节点</span>\n        self.head.next = self.tail\n        self.tail.prev = self.head\n\n    <span class=\"kw\">def</span> <span class=\"fn\">add_to_head</span>(self, node):\n        node.prev, node.next = self.head, self.head.next\n        self.head.next.prev = node\n        self.head.next = node\n\n    <span class=\"kw\">def</span> <span class=\"fn\">remove</span>(self, node):\n        node.prev.next = node.next\n        node.next.prev = node.prev</pre>",
      "<span class=\"highlight\">哨兵节点</span>（dummy head/tail）：消除头尾边界判断，代码更简洁不易出错",
      "核心应用：<span class=\"highlight\">LRU Cache</span>（双向链表 + HashMap，LC 146）、浏览器前进后退、文本编辑器undo/redo",
      "面试重点：LRU = HashMap存key→node + 双向链表维护访问顺序，get/put 均 O(1)"
    ],
    "bullets_ja": [
      "各ノードにprevとnextポインタがあり、ノードの参照が既知の場合は挿入/削除が <span class=\"num\">O(1)</span>（単方向連結リストの削除は前駆ノードが必要でO(n)の検索）",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">Node</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, key=<span class=\"num\">0</span>, val=<span class=\"num\">0</span>):\n        self.key, self.val = key, val\n        self.prev = self.next = <span class=\"kw\">None</span>\n\n<span class=\"kw\">class</span> <span class=\"fn\">DoublyLinkedList</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self):\n        self.head, self.tail = Node(), Node()  <span class=\"cm\"># 番兵ノード</span>\n        self.head.next = self.tail\n        self.tail.prev = self.head\n\n    <span class=\"kw\">def</span> <span class=\"fn\">add_to_head</span>(self, node):\n        node.prev, node.next = self.head, self.head.next\n        self.head.next.prev = node\n        self.head.next = node\n\n    <span class=\"kw\">def</span> <span class=\"fn\">remove</span>(self, node):\n        node.prev.next = node.next\n        node.next.prev = node.prev</pre>",
      "<span class=\"highlight\">番兵ノード</span>（dummy head/tail）：先頭と末尾の境界判定を排除し、コードがより簡潔でバグが起きにくい",
      "主な応用：<span class=\"highlight\">LRU Cache</span>（双方向連結リスト + HashMap、LC 146）、ブラウザの進む・戻る、テキストエディタのundo/redo",
      "面接重点：LRU = HashMapでkey→nodeを格納 + 双方向連結リストでアクセス順序を維持、get/putは共にO(1)"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds13",
    "cat": "数据结构",
    "q": "Python collections — Counter/defaultdict/OrderedDict",
    "q_ja": "Python collections — Counter/defaultdict/OrderedDict",
    "bullets": [
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> Counter\nc = Counter(<span class=\"str\">\"aabbbcc\"</span>)  <span class=\"cm\"># Counter({'b':3, 'a':2, 'c':2})</span>\nc.most_common(<span class=\"num\">2</span>)  <span class=\"cm\"># [('b',3), ('a',2)]</span>\nc1 + c2  <span class=\"cm\"># 合并计数</span>\nc1 - c2  <span class=\"cm\"># 差集（只保留正数）</span></pre>",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\ngraph = defaultdict(list)   <span class=\"cm\"># 缺失key自动创建空list</span>\ncount = defaultdict(int)    <span class=\"cm\"># 缺失key自动为0</span>\ngroups = defaultdict(set)   <span class=\"cm\"># 缺失key自动创建空set</span>\n<span class=\"cm\"># 比 dict.setdefault() 更简洁</span></pre>",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> OrderedDict\nod = OrderedDict()\nod[<span class=\"str\">'a'</span>] = <span class=\"num\">1</span>; od[<span class=\"str\">'b'</span>] = <span class=\"num\">2</span>; od[<span class=\"str\">'c'</span>] = <span class=\"num\">3</span>\nod.move_to_end(<span class=\"str\">'a'</span>)        <span class=\"cm\"># 移到末尾</span>\nod.popitem(last=<span class=\"kw\">False</span>)    <span class=\"cm\"># 弹出最早的 → ('b',2)</span>\n<span class=\"cm\"># 可用于实现 LRU Cache</span></pre>",
      "面试常见用法：Counter统计频率 → 字母异位词/Top-K；defaultdict建图/分组；OrderedDict实现LRU",
      "注意：Python 3.7+ 普通 dict 也保持插入序，但 OrderedDict 额外支持 move_to_end 和 == 比较顺序"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> Counter\nc = Counter(<span class=\"str\">\"aabbbcc\"</span>)  <span class=\"cm\"># Counter({'b':3, 'a':2, 'c':2})</span>\nc.most_common(<span class=\"num\">2</span>)  <span class=\"cm\"># [('b',3), ('a',2)]</span>\nc1 + c2  <span class=\"cm\"># カウントを統合</span>\nc1 - c2  <span class=\"cm\"># 差集合（正の値のみ保持）</span></pre>",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\ngraph = defaultdict(list)   <span class=\"cm\"># 存在しないkeyは自動的に空listを生成</span>\ncount = defaultdict(int)    <span class=\"cm\"># 存在しないkeyは自動的に0を生成</span>\ngroups = defaultdict(set)   <span class=\"cm\"># 存在しないkeyは自動的に空setを生成</span>\n<span class=\"cm\"># dict.setdefault() より簡潔</span></pre>",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> OrderedDict\nod = OrderedDict()\nod[<span class=\"str\">'a'</span>] = <span class=\"num\">1</span>; od[<span class=\"str\">'b'</span>] = <span class=\"num\">2</span>; od[<span class=\"str\">'c'</span>] = <span class=\"num\">3</span>\nod.move_to_end(<span class=\"str\">'a'</span>)        <span class=\"cm\"># 末尾に移動</span>\nod.popitem(last=<span class=\"kw\">False</span>)    <span class=\"cm\"># 最も古い要素を取出す → ('b',2)</span>\n<span class=\"cm\"># LRU Cache の実装に使用可能</span></pre>",
      "面接でよくある使い方：Counter→頻度統計/アナグラム/Top-K；defaultdict→グラフ構築/グループ化；OrderedDict→LRU実装",
      "注意：Python 3.7以降は通常のdictも挿入順序を保持するが、OrderedDictは追加でmove_to_endと==での順序比較をサポート"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "ds14",
    "cat": "数据结构",
    "q": "跳表 (Skip List) — Redis ZSet 的底层",
    "q_ja": "スキップリスト (Skip List) — Redis ZSetの内部構造",
    "bullets": [
      "多层链表 + 概率平衡：每层以 ~50% 概率提升节点，形成「快速通道」",
      "<pre><span class=\"cm\"># 概念图：3层跳表</span>\n<span class=\"cm\"># L2:  1 ─────────────── 7 ─── NIL</span>\n<span class=\"cm\"># L1:  1 ──── 3 ──────── 7 ─── NIL</span>\n<span class=\"cm\"># L0:  1 → 2 → 3 → 5 → 7 → 8 → NIL</span>\n<span class=\"cm\"># 查找从最高层开始，逐层下降</span>\n<span class=\"cm\"># 类似二分查找的效果</span></pre>",
      "平均时间复杂度：查找/插入/删除均为 <span class=\"num\">O(log n)</span>，期望空间 <span class=\"num\">O(n)</span>",
      "Redis 用跳表而非平衡BST的原因：① 实现更简单（~100行 vs 红黑树~300行）② <span class=\"highlight\">范围查询天然高效</span>（链表直接遍历）③ 性能与平衡树相当",
      "面试要点：理解分层思想和概率平衡即可，手写实现很少考；Redis ZRANGEBYSCORE 底层就是跳表的范围遍历"
    ],
    "bullets_ja": [
      "多層連結リスト + 確率的平衡：各層で約50%の確率でノードを昇格し「高速レーン」を形成",
      "<pre><span class=\"cm\"># 概念図：3層スキップリスト</span>\n<span class=\"cm\"># L2:  1 ─────────────── 7 ─── NIL</span>\n<span class=\"cm\"># L1:  1 ──── 3 ──────── 7 ─── NIL</span>\n<span class=\"cm\"># L0:  1 → 2 → 3 → 5 → 7 → 8 → NIL</span>\n<span class=\"cm\"># 探索は最上層から開始し、層ごとに下降</span>\n<span class=\"cm\"># 二分探索に似た効果</span></pre>",
      "平均時間計算量：検索/挿入/削除は共に <span class=\"num\">O(log n)</span>、期待空間 <span class=\"num\">O(n)</span>",
      "Redisがスキップリストを使い平衡BSTを使わない理由：① 実装がより簡単（約100行 vs 赤黒木約300行）② <span class=\"highlight\">範囲クエリが自然に効率的</span>（連結リストを直接走査）③ 性能は平衡木と同等",
      "面接のポイント：階層化の考え方と確率的平衡を理解すれば十分、手書き実装はほとんど問われない；Redis ZRANGEBYSCOREの内部はスキップリストの範囲走査"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds15",
    "cat": "数据结构",
    "q": "字符串匹配数据结构对比",
    "q_ja": "文字列マッチング データ構造の比較",
    "bullets": [
      "<span class=\"highlight\">HashMap</span>：精确匹配 O(1)，不支持前缀/模式匹配 → 适合字典查词、去重",
      "<span class=\"highlight\">Trie (前缀树)</span>：前缀搜索 O(m)（m=串长），支持自动补全/词频统计，但空间开销大（每个节点最多26个子指针）",
      "<span class=\"highlight\">后缀数组/后缀树</span>：子串搜索 O(m log n)，LCP（最长公共前缀）计算 → 适合DNA序列分析、文本搜索引擎",
      "<span class=\"highlight\">布隆过滤器 (Bloom Filter)</span>：概率性成员测试，<span class=\"highlight\">可能有误判(false positive)，绝不漏判(no false negative)</span>，空间极省 → 适合URL去重、缓存穿透防护",
      "选型口诀：精确匹配→Hash | 前缀搜索→Trie | 子串查找→后缀结构 | 大规模存在性判断→Bloom Filter"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">HashMap</span>：完全一致 O(1)、プレフィックス/パターンマッチングは非対応 → 辞書検索、重複排除に適する",
      "<span class=\"highlight\">Trie (接頭辞木)</span>：プレフィックス検索 O(m)（m=文字列長）、オートコンプリート/単語頻度統計に対応するが、空間オーバーヘッドが大きい（各ノード最大26個の子ポインタ）",
      "<span class=\"highlight\">接尾辞配列/接尾辞木</span>：部分文字列検索 O(m log n)、LCP（最長共通接頭辞）計算 → DNA配列分析、テキスト検索エンジンに適する",
      "<span class=\"highlight\">ブルームフィルタ (Bloom Filter)</span>：確率的メンバーシップテスト、<span class=\"highlight\">誤判定の可能性あり(false positive)、見逃しは絶対なし(no false negative)</span>、空間が極めて省 → URL重複排除、キャッシュ穿透防御に適する",
      "選定の口訣：完全一致→Hash | プレフィックス検索→Trie | 部分文字列検索→接尾辞構造 | 大規模存在性判定→Bloom Filter"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds16",
    "cat": "数据结构",
    "q": "并查集 (Union-Find) — 结构与优化",
    "q_ja": "Union-Find — 構造と最適化",
    "bullets": [
      "核心操作：<span class=\"highlight\">find(x)</span> 查询x所属集合的代表元素；<span class=\"highlight\">union(x,y)</span> 合并x和y所在集合",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">UnionFind</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, n):\n        self.parent = list(range(n))\n        self.rank = [<span class=\"num\">0</span>] * n\n        self.count = n  <span class=\"cm\"># 连通分量个数</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">find</span>(self, x):  <span class=\"cm\"># 路径压缩</span>\n        <span class=\"kw\">if</span> self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        <span class=\"kw\">return</span> self.parent[x]\n\n    <span class=\"kw\">def</span> <span class=\"fn\">union</span>(self, x, y):  <span class=\"cm\"># 按秩合并</span>\n        px, py = self.find(x), self.find(y)\n        <span class=\"kw\">if</span> px == py: <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        <span class=\"kw\">if</span> self.rank[px] < self.rank[py]: px, py = py, px\n        self.parent[py] = px\n        <span class=\"kw\">if</span> self.rank[px] == self.rank[py]: self.rank[px] += <span class=\"num\">1</span>\n        self.count -= <span class=\"num\">1</span>\n        <span class=\"kw\">return</span> <span class=\"kw\">True</span></pre>",
      "两大优化：<span class=\"highlight\">路径压缩</span>（find时将节点直接指向根）+ <span class=\"highlight\">按秩合并</span>（矮树挂高树下）→ 近似 <span class=\"num\">O(α(n))</span>，α为反Ackermann函数，实际可视为O(1)",
      "经典应用：连通分量计数(LC200岛屿数量)、冗余连接检测(LC684)、账户合并(LC721)、朋友圈(LC547)",
      "扩展：<span class=\"highlight\">带权并查集</span>可维护节点间的相对关系（如LC399除法求值）"
    ],
    "bullets_ja": [
      "核心操作：<span class=\"highlight\">find(x)</span> xが属する集合の代表要素を検索；<span class=\"highlight\">union(x,y)</span> xとyが属する集合を統合",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">UnionFind</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, n):\n        self.parent = list(range(n))\n        self.rank = [<span class=\"num\">0</span>] * n\n        self.count = n  <span class=\"cm\"># 連結成分の数</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">find</span>(self, x):  <span class=\"cm\"># 経路圧縮</span>\n        <span class=\"kw\">if</span> self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        <span class=\"kw\">return</span> self.parent[x]\n\n    <span class=\"kw\">def</span> <span class=\"fn\">union</span>(self, x, y):  <span class=\"cm\"># ランクによる統合</span>\n        px, py = self.find(x), self.find(y)\n        <span class=\"kw\">if</span> px == py: <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        <span class=\"kw\">if</span> self.rank[px] < self.rank[py]: px, py = py, px\n        self.parent[py] = px\n        <span class=\"kw\">if</span> self.rank[px] == self.rank[py]: self.rank[px] += <span class=\"num\">1</span>\n        self.count -= <span class=\"num\">1</span>\n        <span class=\"kw\">return</span> <span class=\"kw\">True</span></pre>",
      "2つの最適化：<span class=\"highlight\">経路圧縮</span>（find時にノードを直接ルートに接続）+ <span class=\"highlight\">ランクによる統合</span>（低い木を高い木の下に接続）→ 近似 <span class=\"num\">O(α(n))</span>、αは逆Ackermann関数、実際にはO(1)とみなせる",
      "典型的な応用：連結成分カウント(LC200 島の数)、冗長辺検出(LC684)、アカウント統合(LC721)、友達の輪(LC547)",
      "拡張：<span class=\"highlight\">重み付きUnion-Find</span>はノード間の相対関係を維持可能（例：LC399 除法の評価）"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds17",
    "cat": "数据结构",
    "q": "单调栈 — 原理与典型应用",
    "q_ja": "単調スタック — 原理と典型的な応用",
    "bullets": [
      "栈内元素保持<span class=\"highlight\">单调递增或单调递减</span>，用于在O(n)内求「每个元素左/右边第一个更大/更小的元素」",
      "单调递减栈（栈底到栈顶递减）：求<span class=\"highlight\">下一个更大元素</span>；单调递增栈：求<span class=\"highlight\">下一个更小元素</span>",
      "<pre><span class=\"cm\"># 求每个元素右边第一个更大元素的索引</span>\n<span class=\"kw\">def</span> <span class=\"fn\">next_greater</span>(nums):\n    n = len(nums)\n    res = [-<span class=\"num\">1</span>] * n\n    stack = []  <span class=\"cm\"># 存索引，对应值单调递减</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n):\n        <span class=\"kw\">while</span> stack <span class=\"kw\">and</span> nums[i] > nums[stack[-<span class=\"num\">1</span>]]:\n            j = stack.pop()\n            res[j] = i\n        stack.append(i)\n    <span class=\"kw\">return</span> res</pre>",
      "每个元素最多入栈一次出栈一次 → 时间 <span class=\"num\">O(n)</span>，空间 <span class=\"num\">O(n)</span>",
      "经典题：每日温度(LC739)、柱状图最大矩形(LC84)、接雨水(LC42单调栈解法)、下一个更大元素(LC496/503)"
    ],
    "bullets_ja": [
      "スタック内の要素を<span class=\"highlight\">単調増加または単調減少</span>に保つことで、O(n)で「各要素の左/右で最初のより大きい/より小さい要素」を求める",
      "単調減少スタック（スタック底からスタック頂に向かって減少）：<span class=\"highlight\">次のより大きい要素</span>を求める；単調増加スタック：<span class=\"highlight\">次のより小さい要素</span>を求める",
      "<pre><span class=\"cm\"># 各要素の右側で最初のより大きい要素のインデックスを求める</span>\n<span class=\"kw\">def</span> <span class=\"fn\">next_greater</span>(nums):\n    n = len(nums)\n    res = [-<span class=\"num\">1</span>] * n\n    stack = []  <span class=\"cm\"># インデックスを格納、対応する値は単調減少</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(n):\n        <span class=\"kw\">while</span> stack <span class=\"kw\">and</span> nums[i] > nums[stack[-<span class=\"num\">1</span>]]:\n            j = stack.pop()\n            res[j] = i\n        stack.append(i)\n    <span class=\"kw\">return</span> res</pre>",
      "各要素は最大1回のpushと1回のpop → 時間 <span class=\"num\">O(n)</span>、空間 <span class=\"num\">O(n)</span>",
      "典型問題：毎日の気温(LC739)、柱状図の最大矩形(LC84)、雨水を受ける(LC42単調スタック解法)、次のより大きい要素(LC496/503)"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds18",
    "cat": "数据结构",
    "q": "单调队列 — 滑动窗口最大值",
    "q_ja": "単調キュー — スライディングウィンドウ最大値",
    "bullets": [
      "双端队列 deque 维护<span class=\"highlight\">窗口内元素的单调递减序列</span>，队首始终是当前窗口的最大值",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\n\n<span class=\"kw\">def</span> <span class=\"fn\">maxSlidingWindow</span>(nums, k):\n    dq = deque()  <span class=\"cm\"># 存索引，对应值单调递减</span>\n    res = []\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n        <span class=\"cm\"># 移除超出窗口的队首</span>\n        <span class=\"kw\">while</span> dq <span class=\"kw\">and</span> dq[<span class=\"num\">0</span>] <= i - k:\n            dq.popleft()\n        <span class=\"cm\"># 移除比当前值小的队尾（它们不可能成为最大值）</span>\n        <span class=\"kw\">while</span> dq <span class=\"kw\">and</span> nums[dq[-<span class=\"num\">1</span>]] <= nums[i]:\n            dq.pop()\n        dq.append(i)\n        <span class=\"kw\">if</span> i >= k - <span class=\"num\">1</span>:\n            res.append(nums[dq[<span class=\"num\">0</span>]])\n    <span class=\"kw\">return</span> res</pre>",
      "时间 <span class=\"num\">O(n)</span>（每个元素最多入队出队各一次），空间 <span class=\"num\">O(k)</span>",
      "LC239 高频面试题。暴力O(nk)，堆O(n log k)，单调队列最优O(n)"
    ],
    "bullets_ja": [
      "双端キューdequeで<span class=\"highlight\">ウィンドウ内要素の単調減少列</span>を維持し、キュー先頭は常に現在のウィンドウの最大値",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\n\n<span class=\"kw\">def</span> <span class=\"fn\">maxSlidingWindow</span>(nums, k):\n    dq = deque()  <span class=\"cm\"># インデックスを格納、対応する値は単調減少</span>\n    res = []\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n        <span class=\"cm\"># ウィンドウ外のキュー先頭を除去</span>\n        <span class=\"kw\">while</span> dq <span class=\"kw\">and</span> dq[<span class=\"num\">0</span>] <= i - k:\n            dq.popleft()\n        <span class=\"cm\"># 現在値より小さいキュー末尾を除去（最大値になり得ない）</span>\n        <span class=\"kw\">while</span> dq <span class=\"kw\">and</span> nums[dq[-<span class=\"num\">1</span>]] <= nums[i]:\n            dq.pop()\n        dq.append(i)\n        <span class=\"kw\">if</span> i >= k - <span class=\"num\">1</span>:\n            res.append(nums[dq[<span class=\"num\">0</span>]])\n    <span class=\"kw\">return</span> res</pre>",
      "時間 <span class=\"num\">O(n)</span>（各要素はキューに最大1回入り1回出る）、空間 <span class=\"num\">O(k)</span>",
      "LC239 高頻出面接問題。素朴法O(nk)、ヒープO(n log k)、単調キューが最適O(n)"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds19",
    "cat": "数据结构",
    "q": "LRU Cache — 手写双向链表实现",
    "q_ja": "LRU Cache — 手書き双方向連結リスト実装",
    "bullets": [
      "LC146：设计一个<span class=\"highlight\">get和put均O(1)</span>的缓存。哈希表定位 + 双向链表维护顺序",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">Node</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, k=<span class=\"num\">0</span>, v=<span class=\"num\">0</span>):\n        self.key, self.val = k, v\n        self.prev = self.next = <span class=\"kw\">None</span>\n\n<span class=\"kw\">class</span> <span class=\"fn\">LRUCache</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, capacity):\n        self.cap = capacity\n        self.cache = {}  <span class=\"cm\"># key → Node</span>\n        self.head, self.tail = Node(), Node()  <span class=\"cm\"># 哨兵</span>\n        self.head.next = self.tail\n        self.tail.prev = self.head\n\n    <span class=\"kw\">def</span> <span class=\"fn\">_remove</span>(self, node):\n        node.prev.next = node.next\n        node.next.prev = node.prev\n\n    <span class=\"kw\">def</span> <span class=\"fn\">_add_to_head</span>(self, node):\n        node.next = self.head.next\n        node.prev = self.head\n        self.head.next.prev = node\n        self.head.next = node\n\n    <span class=\"kw\">def</span> <span class=\"fn\">get</span>(self, key):\n        <span class=\"kw\">if</span> key <span class=\"kw\">not in</span> self.cache: <span class=\"kw\">return</span> -<span class=\"num\">1</span>\n        node = self.cache[key]\n        self._remove(node)\n        self._add_to_head(node)\n        <span class=\"kw\">return</span> node.val\n\n    <span class=\"kw\">def</span> <span class=\"fn\">put</span>(self, key, val):\n        <span class=\"kw\">if</span> key <span class=\"kw\">in</span> self.cache:\n            self._remove(self.cache[key])\n        node = Node(key, val)\n        self.cache[key] = node\n        self._add_to_head(node)\n        <span class=\"kw\">if</span> len(self.cache) > self.cap:\n            lru = self.tail.prev\n            self._remove(lru)\n            <span class=\"kw\">del</span> self.cache[lru.key]</pre>",
      "面试常要求不用 OrderedDict 手写。核心：<span class=\"highlight\">哨兵节点</span>消除边界判断，Node存key用于淘汰时从cache中删除",
      "LRU淘汰策略：最近最少使用。get/put都将节点移到链表头部，淘汰链表尾部"
    ],
    "bullets_ja": [
      "LC146：<span class=\"highlight\">getとput共にO(1)</span>のキャッシュを設計。ハッシュテーブルで位置特定 + 双方向連結リストで順序維持",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">Node</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, k=<span class=\"num\">0</span>, v=<span class=\"num\">0</span>):\n        self.key, self.val = k, v\n        self.prev = self.next = <span class=\"kw\">None</span>\n\n<span class=\"kw\">class</span> <span class=\"fn\">LRUCache</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, capacity):\n        self.cap = capacity\n        self.cache = {}  <span class=\"cm\"># key → Node</span>\n        self.head, self.tail = Node(), Node()  <span class=\"cm\"># 番兵</span>\n        self.head.next = self.tail\n        self.tail.prev = self.head\n\n    <span class=\"kw\">def</span> <span class=\"fn\">_remove</span>(self, node):\n        node.prev.next = node.next\n        node.next.prev = node.prev\n\n    <span class=\"kw\">def</span> <span class=\"fn\">_add_to_head</span>(self, node):\n        node.next = self.head.next\n        node.prev = self.head\n        self.head.next.prev = node\n        self.head.next = node\n\n    <span class=\"kw\">def</span> <span class=\"fn\">get</span>(self, key):\n        <span class=\"kw\">if</span> key <span class=\"kw\">not in</span> self.cache: <span class=\"kw\">return</span> -<span class=\"num\">1</span>\n        node = self.cache[key]\n        self._remove(node)\n        self._add_to_head(node)\n        <span class=\"kw\">return</span> node.val\n\n    <span class=\"kw\">def</span> <span class=\"fn\">put</span>(self, key, val):\n        <span class=\"kw\">if</span> key <span class=\"kw\">in</span> self.cache:\n            self._remove(self.cache[key])\n        node = Node(key, val)\n        self.cache[key] = node\n        self._add_to_head(node)\n        <span class=\"kw\">if</span> len(self.cache) > self.cap:\n            lru = self.tail.prev\n            self._remove(lru)\n            <span class=\"kw\">del</span> self.cache[lru.key]</pre>",
      "面接ではOrderedDictを使わない手書き実装がよく求められる。核心：<span class=\"highlight\">番兵ノード</span>で境界判定を排除、Nodeにkeyを格納して淘汰時にcacheから削除",
      "LRU淘汰戦略：最近最も使われていないものを淘汰。get/putは共にノードをリスト先頭に移動、リスト末尾を淘汰"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds20",
    "cat": "数据结构",
    "q": "LFU Cache — 最不经常使用缓存",
    "q_ja": "LFU Cache — 最低使用頻度キャッシュ",
    "bullets": [
      "LC460：淘汰<span class=\"highlight\">使用频率最低</span>的key；频率相同时淘汰最久未使用的（LRU）",
      "数据结构：<span class=\"highlight\">三个哈希表</span> — key→val, key→freq, freq→OrderedDict(keys)",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict, OrderedDict\n\n<span class=\"kw\">class</span> <span class=\"fn\">LFUCache</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, capacity):\n        self.cap = capacity\n        self.min_freq = <span class=\"num\">0</span>\n        self.key_val = {}       <span class=\"cm\"># key → value</span>\n        self.key_freq = {}      <span class=\"cm\"># key → frequency</span>\n        self.freq_keys = defaultdict(OrderedDict)  <span class=\"cm\"># freq → OrderedDict of keys</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">_update</span>(self, key):\n        freq = self.key_freq[key]\n        <span class=\"kw\">del</span> self.freq_keys[freq][key]\n        <span class=\"kw\">if not</span> self.freq_keys[freq]:\n            <span class=\"kw\">del</span> self.freq_keys[freq]\n            <span class=\"kw\">if</span> self.min_freq == freq: self.min_freq += <span class=\"num\">1</span>\n        self.key_freq[key] = freq + <span class=\"num\">1</span>\n        self.freq_keys[freq + <span class=\"num\">1</span>][key] = <span class=\"kw\">None</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">get</span>(self, key):\n        <span class=\"kw\">if</span> key <span class=\"kw\">not in</span> self.key_val: <span class=\"kw\">return</span> -<span class=\"num\">1</span>\n        self._update(key)\n        <span class=\"kw\">return</span> self.key_val[key]\n\n    <span class=\"kw\">def</span> <span class=\"fn\">put</span>(self, key, val):\n        <span class=\"kw\">if</span> self.cap == <span class=\"num\">0</span>: <span class=\"kw\">return</span>\n        <span class=\"kw\">if</span> key <span class=\"kw\">in</span> self.key_val:\n            self.key_val[key] = val\n            self._update(key)\n            <span class=\"kw\">return</span>\n        <span class=\"kw\">if</span> len(self.key_val) >= self.cap:\n            k, _ = self.freq_keys[self.min_freq].popitem(last=<span class=\"kw\">False</span>)\n            <span class=\"kw\">del</span> self.key_val[k]\n            <span class=\"kw\">del</span> self.key_freq[k]\n        self.key_val[key] = val\n        self.key_freq[key] = <span class=\"num\">1</span>\n        self.freq_keys[<span class=\"num\">1</span>][key] = <span class=\"kw\">None</span>\n        self.min_freq = <span class=\"num\">1</span></pre>",
      "get/put 均 <span class=\"num\">O(1)</span>。关键维护 <span class=\"highlight\">min_freq</span> 以快速定位淘汰层",
      "LRU vs LFU：LRU按访问时间淘汰，LFU按访问频率淘汰。实际系统中LRU更常用（LFU有缓存污染问题）"
    ],
    "bullets_ja": [
      "LC460：<span class=\"highlight\">使用頻度が最も低い</span>keyを淘汰；頻度が同じ場合は最も長く使われていないもの（LRU）を淘汰",
      "データ構造：<span class=\"highlight\">3つのハッシュテーブル</span> — key→val, key→freq, freq→OrderedDict(keys)",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict, OrderedDict\n\n<span class=\"kw\">class</span> <span class=\"fn\">LFUCache</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, capacity):\n        self.cap = capacity\n        self.min_freq = <span class=\"num\">0</span>\n        self.key_val = {}       <span class=\"cm\"># key → value</span>\n        self.key_freq = {}      <span class=\"cm\"># key → frequency</span>\n        self.freq_keys = defaultdict(OrderedDict)  <span class=\"cm\"># freq → OrderedDict of keys</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">_update</span>(self, key):\n        freq = self.key_freq[key]\n        <span class=\"kw\">del</span> self.freq_keys[freq][key]\n        <span class=\"kw\">if not</span> self.freq_keys[freq]:\n            <span class=\"kw\">del</span> self.freq_keys[freq]\n            <span class=\"kw\">if</span> self.min_freq == freq: self.min_freq += <span class=\"num\">1</span>\n        self.key_freq[key] = freq + <span class=\"num\">1</span>\n        self.freq_keys[freq + <span class=\"num\">1</span>][key] = <span class=\"kw\">None</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">get</span>(self, key):\n        <span class=\"kw\">if</span> key <span class=\"kw\">not in</span> self.key_val: <span class=\"kw\">return</span> -<span class=\"num\">1</span>\n        self._update(key)\n        <span class=\"kw\">return</span> self.key_val[key]\n\n    <span class=\"kw\">def</span> <span class=\"fn\">put</span>(self, key, val):\n        <span class=\"kw\">if</span> self.cap == <span class=\"num\">0</span>: <span class=\"kw\">return</span>\n        <span class=\"kw\">if</span> key <span class=\"kw\">in</span> self.key_val:\n            self.key_val[key] = val\n            self._update(key)\n            <span class=\"kw\">return</span>\n        <span class=\"kw\">if</span> len(self.key_val) >= self.cap:\n            k, _ = self.freq_keys[self.min_freq].popitem(last=<span class=\"kw\">False</span>)\n            <span class=\"kw\">del</span> self.key_val[k]\n            <span class=\"kw\">del</span> self.key_freq[k]\n        self.key_val[key] = val\n        self.key_freq[key] = <span class=\"num\">1</span>\n        self.freq_keys[<span class=\"num\">1</span>][key] = <span class=\"kw\">None</span>\n        self.min_freq = <span class=\"num\">1</span></pre>",
      "get/put 共に <span class=\"num\">O(1)</span>。<span class=\"highlight\">min_freq</span> の維持が淘汰層の迅速な特定の鍵",
      "LRU vs LFU：LRUはアクセス時間で淘汰、LFUはアクセス頻度で淘汰。実際のシステムではLRUがより一般的（LFUにはキャッシュ汚染問題がある）"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds21",
    "cat": "数据结构",
    "q": "B树 vs B+树 — 数据库索引核心",
    "q_ja": "B木 vs B+木 — データベースインデックスの核心",
    "bullets": [
      "<span class=\"highlight\">B树</span>：多路平衡搜索树，每个节点存多个key和数据指针，内节点也存数据",
      "<span class=\"highlight\">B+树</span>：在B树基础上改进 — ①内节点<span class=\"highlight\">只存key不存数据</span>（扇出更大）②所有数据存叶子节点 ③叶子节点用<span class=\"highlight\">双向链表</span>相连",
      "B+树优于B树的原因：① 内节点不存数据 → 同一页能放更多key → <span class=\"highlight\">树更矮，IO更少</span> ② 叶子链表 → <span class=\"highlight\">范围查询极高效</span>（顺序遍历） ③ 查询性能稳定（都要到叶子）",
      "MySQL InnoDB 用 <span class=\"highlight\">B+树</span> 作索引结构。聚簇索引叶子存完整行数据，非聚簇索引叶子存主键值",
      "B+树高度一般 2-4 层：假设一页16KB、一个key+指针16B → 扇出约1000 → 3层可索引约10亿条记录",
      "面试重点：为什么用B+树而非B树/哈希/二叉树 → 磁盘IO最小化 + 范围查询 + 稳定性能"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">B木</span>：多分岐平衡探索木、各ノードに複数のkeyとデータポインタを格納、内部ノードにもデータを格納",
      "<span class=\"highlight\">B+木</span>：B木を改良 — ①内部ノードは<span class=\"highlight\">keyのみ格納でデータなし</span>（ファンアウトが大きい）②全データは葉ノードに格納 ③葉ノードは<span class=\"highlight\">双方向連結リスト</span>で連結",
      "B+木がB木より優れる理由：① 内部ノードにデータがない → 同じページにより多くのkeyを配置可能 → <span class=\"highlight\">木がより低く、IOが少ない</span> ② 葉の連結リスト → <span class=\"highlight\">範囲クエリが極めて効率的</span>（順次走査） ③ クエリ性能が安定（全て葉まで到達）",
      "MySQL InnoDBは <span class=\"highlight\">B+木</span> をインデックス構造に使用。クラスタインデックスの葉は完全な行データを格納、非クラスタインデックスの葉は主キー値を格納",
      "B+木の高さは通常2-4層：1ページ16KB、1つのkey+ポインタが16Bと仮定 → ファンアウト約1000 → 3層で約10億レコードをインデックス可能",
      "面接重点：なぜB+木でB木/ハッシュ/二分木ではないか → ディスクIOの最小化 + 範囲クエリ + 安定した性能"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds22",
    "cat": "数据结构",
    "q": "红黑树 — 性质与旋转",
    "q_ja": "赤黒木 — 性質と回転",
    "bullets": [
      "红黑树五条性质：①每个节点红或黑 ②根是黑 ③叶子(NIL)是黑 ④<span class=\"highlight\">红节点的子节点必须是黑</span>（不能连续红） ⑤<span class=\"highlight\">从任意节点到叶子的所有路径黑色节点数相同</span>",
      "这些性质保证了：<span class=\"highlight\">最长路径不超过最短路径的2倍</span>（最长=红黑交替，最短=全黑），因此查找/插入/删除都是O(log n)",
      "插入修复（新节点默认红色）：①叔节点红→叔/父变黑、祖变红、向上递归 ②叔黑+折线→先旋转变直线 ③叔黑+直线→旋转+变色",
      "Java TreeMap/TreeSet、C++ std::map/std::set、Linux CFS调度器底层均为红黑树",
      "红黑树 vs AVL：红黑树<span class=\"highlight\">插入删除更快</span>（旋转次数O(1) vs AVL最多O(log n)），AVL<span class=\"highlight\">查找略快</span>（更严格平衡）。工程中更常用红黑树"
    ],
    "bullets_ja": [
      "赤黒木の5つの性質：①各ノードは赤か黒 ②根は黒 ③葉(NIL)は黒 ④<span class=\"highlight\">赤ノードの子ノードは必ず黒</span>（連続赤は不可）⑤<span class=\"highlight\">任意のノードから葉までの全経路で黒ノードの数が同じ</span>",
      "これらの性質が保証するのは：<span class=\"highlight\">最長経路は最短経路の2倍を超えない</span>（最長=赤黒交互、最短=全黒）、したがって検索/挿入/削除は全てO(log n)",
      "挿入修復（新ノードはデフォルトで赤）：①叔ノードが赤→叔/親を黒に、祖を赤に変更して上に再帰 ②叔が黒+折れ線→まず回転で直線に ③叔が黒+直線→回転+色変更",
      "Java TreeMap/TreeSet、C++ std::map/std::set、Linux CFSスケジューラの内部は全て赤黒木",
      "赤黒木 vs AVL：赤黒木は<span class=\"highlight\">挿入削除が高速</span>（回転回数O(1) vs AVLは最大O(log n)）、AVLは<span class=\"highlight\">検索がやや速い</span>（より厳密な平衡）。実務では赤黒木がより一般的"
    ],
    "lv": 3,
    "group": "基础"
  },
  {
    "id": "ds23",
    "cat": "数据结构",
    "q": "Trie (前缀树) — 实现与应用",
    "q_ja": "Trie (接頭辞木) — 実装と応用",
    "bullets": [
      "每个节点代表一个字符前缀，从根到某节点的路径构成一个前缀。支持 <span class=\"num\">O(m)</span> 的插入/查找/前缀搜索（m=字符串长度）",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">Trie</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self):\n        self.children = {}\n        self.is_end = <span class=\"kw\">False</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">insert</span>(self, word):\n        node = self\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> word:\n            <span class=\"kw\">if</span> c <span class=\"kw\">not in</span> node.children:\n                node.children[c] = Trie()\n            node = node.children[c]\n        node.is_end = <span class=\"kw\">True</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">search</span>(self, word):\n        node = self._find(word)\n        <span class=\"kw\">return</span> node <span class=\"kw\">is not</span> <span class=\"kw\">None</span> <span class=\"kw\">and</span> node.is_end\n\n    <span class=\"kw\">def</span> <span class=\"fn\">startsWith</span>(self, prefix):\n        <span class=\"kw\">return</span> self._find(prefix) <span class=\"kw\">is not</span> <span class=\"kw\">None</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">_find</span>(self, s):\n        node = self\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> s:\n            <span class=\"kw\">if</span> c <span class=\"kw\">not in</span> node.children: <span class=\"kw\">return</span> <span class=\"kw\">None</span>\n            node = node.children[c]\n        <span class=\"kw\">return</span> node</pre>",
      "空间优化：Python用dict存子节点（按需创建），比固定26数组更灵活",
      "应用：自动补全(LC208)、搜索引擎前缀提示、拼写检查、单词搜索II(LC212 Trie+回溯)、IP路由最长前缀匹配"
    ],
    "bullets_ja": [
      "各ノードが文字の接頭辞を表し、根からあるノードまでの経路が一つの接頭辞を構成。<span class=\"num\">O(m)</span> の挿入/検索/接頭辞検索をサポート（m=文字列長）",
      "<pre><span class=\"kw\">class</span> <span class=\"fn\">Trie</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self):\n        self.children = {}\n        self.is_end = <span class=\"kw\">False</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">insert</span>(self, word):\n        node = self\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> word:\n            <span class=\"kw\">if</span> c <span class=\"kw\">not in</span> node.children:\n                node.children[c] = Trie()\n            node = node.children[c]\n        node.is_end = <span class=\"kw\">True</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">search</span>(self, word):\n        node = self._find(word)\n        <span class=\"kw\">return</span> node <span class=\"kw\">is not</span> <span class=\"kw\">None</span> <span class=\"kw\">and</span> node.is_end\n\n    <span class=\"kw\">def</span> <span class=\"fn\">startsWith</span>(self, prefix):\n        <span class=\"kw\">return</span> self._find(prefix) <span class=\"kw\">is not</span> <span class=\"kw\">None</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">_find</span>(self, s):\n        node = self\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> s:\n            <span class=\"kw\">if</span> c <span class=\"kw\">not in</span> node.children: <span class=\"kw\">return</span> <span class=\"kw\">None</span>\n            node = node.children[c]\n        <span class=\"kw\">return</span> node</pre>",
      "空間最適化：Pythonではdictで子ノードを格納（必要に応じて生成）、固定26配列より柔軟",
      "応用：オートコンプリート(LC208)、検索エンジンの接頭辞提示、スペルチェック、単語検索II(LC212 Trie+バックトラッキング)、IPルーティングの最長接頭辞マッチング"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds24",
    "cat": "数据结构",
    "q": "哈希表深入 — 扩容与哈希冲突细节",
    "q_ja": "ハッシュテーブル詳細 — 拡張とハッシュ衝突の詳細",
    "bullets": [
      "负载因子 = 元素数 / 桶数。<span class=\"highlight\">Java HashMap 阈值0.75</span>（桶数加倍），<span class=\"highlight\">Python dict 阈值2/3</span>",
      "<span class=\"highlight\">链地址法</span>（Java HashMap）：每个桶是链表，冲突时追加。Java 8优化：链表长度>=8时转<span class=\"highlight\">红黑树</span>（O(n)→O(log n)），<=6时退化回链表",
      "<span class=\"highlight\">开放地址法</span>（Python dict）：冲突时按探测序列找下一个空位。线性探测→聚集问题；Python用<span class=\"highlight\">二次探测</span>变体",
      "哈希函数设计要点：① 均匀分布（减少冲突） ② 计算快 ③ 确定性。Python对象的 <code>__hash__</code> 可自定义",
      "面试考点：HashMap put流程（计算hash→定位桶→处理冲突→判断扩容）、线程安全问题（Java ConcurrentHashMap分段锁/CAS）"
    ],
    "bullets_ja": [
      "負荷係数 = 要素数 / バケット数。<span class=\"highlight\">Java HashMapの閾値は0.75</span>（バケット数を倍増）、<span class=\"highlight\">Python dictの閾値は2/3</span>",
      "<span class=\"highlight\">チェイン法</span>（Java HashMap）：各バケットが連結リスト、衝突時に追加。Java 8の最適化：連結リスト長>=8で<span class=\"highlight\">赤黒木</span>に変換（O(n)→O(log n)）、<=6で連結リストに戻す",
      "<span class=\"highlight\">オープンアドレス法</span>（Python dict）：衝突時に探査列に従って次の空き位置を探す。線形探査→クラスタリング問題；Pythonは<span class=\"highlight\">二次探査</span>の変種を使用",
      "ハッシュ関数の設計要点：① 均一分布（衝突を削減）② 計算が高速 ③ 決定的。Pythonオブジェクトの <code>__hash__</code> はカスタマイズ可能",
      "面接の考査ポイント：HashMap putの流れ（ハッシュ計算→バケット特定→衝突処理→拡張判定）、スレッドセーフ問題（Java ConcurrentHashMap セグメントロック/CAS）"
    ],
    "lv": 2,
    "group": "基础"
  },
  {
    "id": "ds25",
    "cat": "数据结构",
    "q": "图的高级表示 — 加权图与隐式图",
    "q_ja": "グラフの高度な表現 — 重み付きグラフと暗黙グラフ",
    "bullets": [
      "<span class=\"highlight\">加权邻接表</span>：图中边有权重时使用，存储 (邻居, 权重) 对",
      "<pre><span class=\"cm\"># 加权有向图</span>\n<span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\ngraph = defaultdict(list)\ngraph[<span class=\"num\">0</span>].append((<span class=\"num\">1</span>, <span class=\"num\">5</span>))  <span class=\"cm\"># 0→1 权重5</span>\ngraph[<span class=\"num\">0</span>].append((<span class=\"num\">2</span>, <span class=\"num\">3</span>))  <span class=\"cm\"># 0→2 权重3</span>\ngraph[<span class=\"num\">1</span>].append((<span class=\"num\">2</span>, <span class=\"num\">1</span>))  <span class=\"cm\"># 1→2 权重1</span>\n\n<span class=\"cm\"># 网格图（隐式图）— 不需要显式建图</span>\ndirs = [(<span class=\"num\">0</span>,<span class=\"num\">1</span>),(<span class=\"num\">0</span>,-<span class=\"num\">1</span>),(<span class=\"num\">1</span>,<span class=\"num\">0</span>),(-<span class=\"num\">1</span>,<span class=\"num\">0</span>)]\n<span class=\"kw\">for</span> dx, dy <span class=\"kw\">in</span> dirs:\n    nx, ny = x+dx, y+dy\n    <span class=\"kw\">if</span> <span class=\"num\">0</span> &lt;= nx &lt; m <span class=\"kw\">and</span> <span class=\"num\">0</span> &lt;= ny &lt; n:\n        <span class=\"cm\"># 处理邻居 (nx, ny)</span></pre>",
      "<span class=\"highlight\">隐式图</span>：不显式存储邻接关系，通过规则动态生成邻居 → 网格BFS/DFS（LC200岛屿数量）、状态空间搜索（LC127单词接龙）",
      "面试中 80% 的图题使用<span class=\"highlight\">邻接表</span>或<span class=\"highlight\">网格隐式图</span>。记住建图模板是解题的第一步"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">重み付き隣接リスト</span>：グラフの辺に重みがある場合に使用、(隣接ノード, 重み)ペアを格納",
      "<pre><span class=\"cm\"># 重み付き有向グラフ</span>\n<span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\ngraph = defaultdict(list)\ngraph[<span class=\"num\">0</span>].append((<span class=\"num\">1</span>, <span class=\"num\">5</span>))  <span class=\"cm\"># 0→1 重み5</span>\ngraph[<span class=\"num\">0</span>].append((<span class=\"num\">2</span>, <span class=\"num\">3</span>))  <span class=\"cm\"># 0→2 重み3</span>\ngraph[<span class=\"num\">1</span>].append((<span class=\"num\">2</span>, <span class=\"num\">1</span>))  <span class=\"cm\"># 1→2 重み1</span>\n\n<span class=\"cm\"># グリッドグラフ（暗黙グラフ）— 明示的なグラフ構築不要</span>\ndirs = [(<span class=\"num\">0</span>,<span class=\"num\">1</span>),(<span class=\"num\">0</span>,-<span class=\"num\">1</span>),(<span class=\"num\">1</span>,<span class=\"num\">0</span>),(-<span class=\"num\">1</span>,<span class=\"num\">0</span>)]\n<span class=\"kw\">for</span> dx, dy <span class=\"kw\">in</span> dirs:\n    nx, ny = x+dx, y+dy\n    <span class=\"kw\">if</span> <span class=\"num\">0</span> &lt;= nx &lt; m <span class=\"kw\">and</span> <span class=\"num\">0</span> &lt;= ny &lt; n:\n        <span class=\"cm\"># 隣接ノード (nx, ny) を処理</span></pre>",
      "<span class=\"highlight\">暗黙グラフ</span>：隣接関係を明示的に格納せず、ルールで動的に隣接ノードを生成 → グリッドBFS/DFS（LC200 島の数）、状態空間探索（LC127 ワードラダー）",
      "面接ではグラフ問題の80%が<span class=\"highlight\">隣接リスト</span>か<span class=\"highlight\">グリッド暗黙グラフ</span>を使用。グラフ構築テンプレートを覚えることが問題を解く第一歩"
    ],
    "lv": 1,
    "group": "基础"
  },
  {
    "id": "l01",
    "cat": "LLM基础",
    "q": "Transformer 架构核心组件",
    "q_ja": "Transformerアーキテクチャの中核コンポーネント",
    "bullets": [
      "Encoder-Decoder结构（原始），现在主流：Decoder-only（GPT系列）/ Encoder-only（BERT）",
      "核心组件：Multi-Head Self-Attention + FFN + Layer Norm + Residual Connection",
      "Self-Attention：每个token关注序列中所有其他token，捕捉长距离依赖",
      "FFN：两层全连接（扩展到4倍再压缩），负责非线性变换和知识存储",
      "Residual Connection：防止梯度消失，让深层网络可训练；Layer Norm：稳定训练"
    ],
    "bullets_ja": [
      "Encoder-Decoder構造（オリジナル）、現在の主流：Decoder-only（GPTシリーズ）/ Encoder-only（BERT）",
      "中核コンポーネント：Multi-Head Self-Attention + FFN + Layer Norm + Residual Connection",
      "Self-Attention：各tokenがシーケンス内の全tokenに注目し、長距離依存関係を捉える",
      "FFN：2層の全結合層（4倍に拡張して圧縮）、非線形変換と知識の格納を担当",
      "Residual Connection：勾配消失を防ぎ、深いネットワークの学習を可能にする；Layer Norm：学習を安定化"
    ],
    "details": [
      {
        "term": "Encoder / Decoder",
        "explain": "<div class=\"analogy\">想象一个翻译官：<strong>Encoder</strong> 是\"听懂原文\"的过程，把输入压缩成一个\"理解\"；<strong>Decoder</strong> 是\"说出译文\"的过程，根据理解逐词输出。</div><div class=\"formula\">输入序列 → [Encoder: 双向理解] → 语义表示<br>语义表示 → [Decoder: 逐步生成] → 输出序列</div><p><span class=\"key-point\">现在主流是 Decoder-only（GPT），因为生成任务只需要\"说\"的能力，不需要先\"听\"一整段。</span>BERT 用 Encoder-only，擅长\"理解\"但不擅长生成。</p>"
      },
      {
        "term": "Self-Attention",
        "explain": "<div class=\"analogy\">读一句话\"小猫追着它的尾巴\"时，你读到\"它\"会回头看\"小猫\"来确定指代。Self-Attention 做的就是这件事：<span class=\"key-point\">每个词都回头看一遍所有其他词</span>，决定该关注谁。</div><div class=\"formula\">\"小猫 追着 它的 尾巴\"<br> 它 → 看小猫(高权重) 看追着(低) 看尾巴(中)<br> → 理解\"它\"=\"小猫\"</div><p>这让模型能捕捉长距离依赖——即使两个相关词隔了 100 个词，也能建立联系。</p>"
      },
      {
        "term": "FFN",
        "explain": "<div class=\"analogy\">如果 Self-Attention 是\"收集信息\"（看其他词），那 FFN 就是\"消化信息\"（做推理和变换）。</div><p>结构很简单：两层全连接，中间扩大 4 倍再压回来。</p><div class=\"formula\">FFN(x) = W₂ · ReLU(W₁ · x + b₁) + b₂<br>维度变化：d → 4d → d</div><p><span class=\"key-point\">研究表明，模型的\"知识\"主要存储在 FFN 的权重中</span>——Attention 负责\"找到相关信息\"，FFN 负责\"知道答案\"。</p>"
      },
      {
        "term": "Residual Connection",
        "explain": "<div class=\"analogy\">想象爬一栋 100 层的楼。如果每层都必须走楼梯，信号到顶层就衰减没了。Residual Connection 就是给每层加了一部电梯——输入可以直接\"跳\"到输出端。</div><div class=\"formula\">输出 = Layer(x) + x  ← 这个 +x 就是捷径<br>梯度可以沿着 +x 直接回传，不会消失</div><p><span class=\"key-point\">没有 Residual Connection，超过 10 层的网络几乎无法训练。</span>Transformer 通常有 32-96 层，全靠它。</p>"
      },
      {
        "term": "Layer Norm",
        "explain": "<div class=\"analogy\">不同样本、不同位置的数值范围可能差异很大（有的是 0.01，有的是 1000）。Layer Norm 就像\"统一度量衡\"——把每一层的输出归一化到均值 0、方差 1。</div><div class=\"formula\">LayerNorm(x) = γ · (x - μ) / σ + β<br>μ, σ 在特征维度上计算（不是 batch 维度）</div><p><span class=\"key-point\">如果去掉 Layer Norm，训练会变得极不稳定</span>，loss 剧烈震荡甚至发散。Pre-LN（放在 Attention/FFN 前面）比 Post-LN 更稳定，是现在的主流做法。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "Encoder / Decoder",
        "explain": "<div class=\"analogy\">翻訳者をイメージしてください：<strong>Encoder</strong>は「原文を理解する」プロセスで、入力を「理解」に圧縮します。<strong>Decoder</strong>は「訳文を話す」プロセスで、理解に基づいて逐次出力します。</div><div class=\"formula\">入力シーケンス → [Encoder: 双方向理解] → 意味表現<br>意味表現 → [Decoder: 逐次生成] → 出力シーケンス</div><p><span class=\"key-point\">現在の主流はDecoder-only（GPT）</span>で、生成タスクには「話す」能力だけで十分で、先に「聞く」必要がないためです。BERTはEncoder-onlyで、「理解」は得意ですが生成は不得意です。</p>"
      },
      {
        "term": "Self-Attention",
        "explain": "<div class=\"analogy\">「子猫がしっぽを追いかけている」という文を読むとき、「その」を読んだ瞬間に「子猫」を振り返って指示対象を確認しますよね。Self-Attentionはまさにこれを行います：<span class=\"key-point\">各単語が他の全単語を振り返り</span>、誰に注目すべきかを決定します。</div><div class=\"formula\">\"子猫 追いかける その しっぽ\"<br> その → 子猫を見る(高重み) 追いかけるを見る(低) しっぽを見る(中)<br> → \"その\" = \"子猫\" と理解</div><p>これにより、100語離れた関連語同士でも関係性を捉えることができます。</p>"
      },
      {
        "term": "FFN",
        "explain": "<div class=\"analogy\">Self-Attentionが「情報を集める」（他の単語を参照する）なら、FFNは「情報を消化する」（推論と変換を行う）役割です。</div><p>構造はシンプル：2層の全結合層で、中間で4倍に拡張してから元に戻します。</p><div class=\"formula\">FFN(x) = W₂ · ReLU(W₁ · x + b₁) + b₂<br>次元変化：d → 4d → d</div><p><span class=\"key-point\">研究により、モデルの「知識」は主にFFNの重みに格納されている</span>ことが分かっています。Attentionは「関連情報を見つける」、FFNは「答えを知っている」役割です。</p>"
      },
      {
        "term": "Residual Connection",
        "explain": "<div class=\"analogy\">100階建てのビルを想像してください。毎階段を歩いて登ると、信号は最上階に届く前に減衰してしまいます。Residual Connectionは各階にエレベーターを追加するようなもの——入力が直接出力側にジャンプできます。</div><div class=\"formula\">出力 = Layer(x) + x  ← この +x がショートカット<br>勾配は +x を通じて直接逆伝播でき、消失しない</div><p><span class=\"key-point\">Residual Connectionなしでは、10層以上のネットワークはほぼ学習不可能です。</span>Transformerは通常32〜96層あり、これがなければ成り立ちません。</p>"
      },
      {
        "term": "Layer Norm",
        "explain": "<div class=\"analogy\">異なるサンプルや位置の数値範囲は大きく異なる場合があります（0.01のものもあれば1000のものも）。Layer Normは「度量衡の統一」のようなもので、各層の出力を平均0・分散1に正規化します。</div><div class=\"formula\">LayerNorm(x) = γ · (x - μ) / σ + β<br>μ, σ は特徴次元で計算（batch次元ではない）</div><p><span class=\"key-point\">Layer Normを除去すると、学習が極めて不安定になり</span>、lossが激しく振動したり発散したりします。Pre-LN（Attention/FFNの前に配置）はPost-LNより安定しており、現在の主流です。</p>"
      }
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "l02",
    "cat": "LLM基础",
    "q": "Self-Attention 计算过程",
    "q_ja": "Self-Attentionの計算プロセス",
    "bullets": [
      "输入X → 线性映射得到 Q(Query), K(Key), V(Value)",
      "Attention(Q,K,V) = softmax(QK^T / √d_k) × V",
      "√d_k 缩放防止点积过大导致 softmax 饱和（梯度消失）",
      "Multi-Head：并行多组QKV，不同head关注不同类型的关系（语法/语义/位置）",
      "复杂度 O(n²d)：序列长度的平方，这是长文本处理的瓶颈"
    ],
    "bullets_ja": [
      "入力X → 線形写像でQ(Query)、K(Key)、V(Value)を取得",
      "Attention(Q,K,V) = softmax(QK^T / √d_k) × V",
      "√d_kのスケーリングにより内積が大きくなりすぎてSoftmaxが飽和する（勾配消失）のを防ぐ",
      "Multi-Head：複数組のQKVを並列実行、各headが異なる種類の関係（文法/意味/位置）に注目",
      "計算量 O(n²d)：シーケンス長の二乗、長文処理のボトルネック"
    ],
    "details": [
      {
        "term": "Q, K, V（Query, Key, Value）",
        "explain": "<div class=\"analogy\"><strong>图书馆检索比喻：</strong>你去图书馆找资料。<br>• <strong>Query（查询）</strong>= 你脑中的问题\"我想了解量子力学\"<br>• <strong>Key（索引）</strong>= 每本书封面上的关键词标签<br>• <strong>Value（内容）</strong>= 书的实际内容</div><div class=\"formula\">你的问题(Q) × 每本书的标签(K) → 匹配度分数<br>分数越高的书(V) → 你花越多时间阅读<br><br>Q = X·Wq, K = X·Wk, V = X·Wv<br>Attention = softmax(Q·K^T / √d) · V</div><p><span class=\"key-point\">Q、K、V 都是从同一个输入 X 线性变换来的</span>，但用不同的权重矩阵，让模型学会\"问什么\"\"被问什么\"\"回答什么\"三种不同的表示。</p>"
      },
      {
        "term": "Multi-Head Attention",
        "explain": "<div class=\"analogy\">一个人看文章只能从一个角度理解。Multi-Head 就像派出 8 个专家同时阅读同一篇文章——一个专家关注语法关系，一个关注语义相似性，一个关注位置相邻性……</div><div class=\"formula\">Head_1 = Attention(Q₁, K₁, V₁)  ← 关注语法<br>Head_2 = Attention(Q₂, K₂, V₂)  ← 关注语义<br>...<br>Head_8 = Attention(Q₈, K₈, V₈)  ← 关注位置<br>输出 = Concat(Head_1...8) · Wo</div><p><span class=\"key-point\">每个 head 的 d_k = d_model / n_heads</span>，所以总计算量和单头一样，但信息更丰富。实验表明去掉某些 head 效果下降，说明每个 head 确实学到了不同的模式。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "Q, K, V（Query, Key, Value）",
        "explain": "<div class=\"analogy\"><strong>図書館検索の比喩：</strong>図書館で資料を探しに行くとします。<br>• <strong>Query（クエリ）</strong>= あなたの頭の中の質問「量子力学について知りたい」<br>• <strong>Key（キー）</strong>= 各本の表紙にあるキーワードタグ<br>• <strong>Value（値）</strong>= 本の実際の内容</div><div class=\"formula\">あなたの質問(Q) × 各本のタグ(K) → マッチ度スコア<br>スコアが高い本(V) → より多くの時間をかけて読む<br><br>Q = X·Wq, K = X·Wk, V = X·Wv<br>Attention = softmax(Q·K^T / √d) · V</div><p><span class=\"key-point\">Q、K、Vはすべて同じ入力Xから異なる重み行列で線形変換されたもの</span>で、モデルに「何を聞くか」「何について聞かれるか」「何を答えるか」の3つの異なる表現を学習させます。</p>"
      },
      {
        "term": "Multi-Head Attention",
        "explain": "<div class=\"analogy\">一人で文章を読むと、一つの視点からしか理解できません。Multi-Headは8人の専門家を派遣して同じ文章を同時に読むようなもの——一人は文法関係に注目、一人は意味的類似性に注目、一人は位置の近さに注目……</div><div class=\"formula\">Head_1 = Attention(Q₁, K₁, V₁)  ← 文法に注目<br>Head_2 = Attention(Q₂, K₂, V₂)  ← 意味に注目<br>...<br>Head_8 = Attention(Q₈, K₈, V₈)  ← 位置に注目<br>出力 = Concat(Head_1...8) · Wo</div><p><span class=\"key-point\">各headのd_k = d_model / n_heads</span>なので、総計算量は単一headと同じですが、情報がより豊かです。実験により一部のheadを除去すると性能が低下することが示され、各headが異なるパターンを学習していることが確認されています。</p>"
      }
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "l03",
    "cat": "LLM基础",
    "q": "Tokenization 方法对比",
    "q_ja": "Tokenization手法の比較",
    "bullets": [
      "BPE(Byte-Pair Encoding)：从字符开始，不断合并最频繁的相邻pair → GPT系列使用",
      "WordPiece：类似BPE但用似然而非频率选择合并 → BERT使用",
      "SentencePiece：直接处理原始文本（不需要预分词），支持BPE/Unigram → 多语言友好",
      "中文/日语：无空格，SentencePiece直接按字符和子词处理",
      "Vocab大小 trade-off：大→覆盖率高但embedding矩阵大；小→OOV多但参数少。通常32K-128K"
    ],
    "bullets_ja": [
      "BPE(Byte-Pair Encoding)：文字から始め、最も頻出する隣接ペアを繰り返し統合 → GPTシリーズで使用",
      "WordPiece：BPEに似ているが頻度ではなく尤度で統合を選択 → BERTで使用",
      "SentencePiece：生テキストを直接処理（事前分割不要）、BPE/Unigramをサポート → 多言語対応",
      "中国語/日本語：スペースなし、SentencePieceが文字・サブワード単位で直接処理",
      "語彙サイズのトレードオフ：大→カバー率高いがEmbedding行列が大きい；小→OOVが多いがパラメータ少ない。通常32K-128K"
    ],
    "details": [
      {
        "term": "BPE（Byte-Pair Encoding）",
        "explain": "<p>BPE 的核心思想：<span class=\"key-point\">从最小单位（字符）出发，反复合并出现最频繁的相邻对</span>。</p><div class=\"formula\">初始词表：[a, b, c, d, e, ...]<br><br>语料统计：\"ab\"出现120次，\"bc\"出现80次...<br>第1轮合并：\"ab\" → 新token \"ab\"<br><br>再统计：\"abc\"出现70次，\"de\"出现65次...<br>第2轮合并：\"abc\" → 新token \"abc\"<br><br>重复直到词表达到目标大小（如 32K）</div><div class=\"analogy\">就像压缩文件：常见的组合被\"打包\"成一个符号，生僻的组合保持拆开状态。\"the\" 会被合并为一个 token，而生僻词 \"xylophone\" 可能被拆成 \"xy\" + \"lo\" + \"phone\"。</div>"
      },
      {
        "term": "SentencePiece",
        "explain": "<div class=\"analogy\">传统分词先按空格拆分单词，再做 BPE。问题是：中文日语没有空格怎么办？SentencePiece 的方案：<span class=\"key-point\">把空格也当成普通字符</span>，直接在原始文本上操作。</div><div class=\"formula\">传统方式：\"I love NLP\" → [\"I\",\"love\",\"NLP\"] → BPE<br>SentencePiece：\"I love NLP\" → \"▁I▁love▁NLP\" → BPE<br>                （▁ = 空格标记）<br><br>日语：\"今日は天気がいい\" → 直接切分，无需预分词</div><p>优势：<span class=\"key-point\">语言无关</span>，不需要为每种语言写分词规则。LLaMA、Qwen 等多语言模型都使用 SentencePiece。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "BPE（Byte-Pair Encoding）",
        "explain": "<p>BPEの核心的なアイデア：<span class=\"key-point\">最小単位（文字）から出発し、最も頻出する隣接ペアを繰り返し統合する</span>。</p><div class=\"formula\">初期語彙：[a, b, c, d, e, ...]<br><br>コーパス統計：\"ab\"が120回出現、\"bc\"が80回出現...<br>第1ラウンド統合：\"ab\" → 新token \"ab\"<br><br>再統計：\"abc\"が70回出現、\"de\"が65回出現...<br>第2ラウンド統合：\"abc\" → 新token \"abc\"<br><br>語彙が目標サイズ（例：32K）に達するまで繰り返す</div><div class=\"analogy\">ファイル圧縮のようなもの：よくある組み合わせは一つのシンボルに「パック」され、珍しい組み合わせは分割されたまま残ります。\"the\"は1つのtokenに統合されますが、珍しい単語\"xylophone\"は\"xy\"+\"lo\"+\"phone\"に分割されるかもしれません。</div>"
      },
      {
        "term": "SentencePiece",
        "explain": "<div class=\"analogy\">従来の分割方法はまずスペースで単語を分割し、その後BPEを行います。問題は：中国語や日本語にはスペースがないこと。SentencePieceの解決策：<span class=\"key-point\">スペースも普通の文字として扱い</span>、生テキスト上で直接操作します。</div><div class=\"formula\">従来方式：\"I love NLP\" → [\"I\",\"love\",\"NLP\"] → BPE<br>SentencePiece：\"I love NLP\" → \"▁I▁love▁NLP\" → BPE<br>                （▁ = スペースマーカー）<br><br>日本語：\"今日は天気がいい\" → 直接分割、前処理不要</div><p>利点：<span class=\"key-point\">言語に依存しない</span>ため、各言語ごとに分割ルールを書く必要がありません。LLaMA、Qwenなどの多言語モデルはすべてSentencePieceを使用しています。</p>"
      }
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "l04",
    "cat": "LLM基础",
    "q": "预训练 → SFT → RLHF/DPO 全流程",
    "q_ja": "事前学習 → SFT → RLHF/DPO の全体フロー",
    "bullets": [
      "<span class=\"highlight\">Pre-training</span>：海量文本，CLM(因果语言模型)预测下一个token，学习世界知识。成本：数百万$",
      "<span class=\"highlight\">SFT</span>(Supervised Fine-Tuning)：指令-回答对，教模型\"如何有用地回答\"。数据量：几千~几万条",
      "<span class=\"highlight\">RLHF</span>：训练Reward Model(偏好排序) → PPO优化策略使输出更符合人类偏好。复杂、不稳定",
      "<span class=\"highlight\">DPO</span>：跳过RM，直接用偏好对训练。更简单稳定，但对数据质量敏感",
      "你的经验：SFT 248条效果好，DPO反而−7.6pp → <span class=\"highlight\">不是所有场景都需要对齐</span>"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">Pre-training</span>：大量のテキストでCLM（因果言語モデル）により次のtokenを予測し、世界知識を学習。コスト：数百万ドル",
      "<span class=\"highlight\">SFT</span>(Supervised Fine-Tuning)：指示-回答ペアでモデルに「役立つ回答の仕方」を教える。データ量：数千〜数万件",
      "<span class=\"highlight\">RLHF</span>：Reward Model（選好ランキング）を学習 → PPOで方策を最適化し、人間の選好に合わせる。複雑で不安定",
      "<span class=\"highlight\">DPO</span>：RMをスキップし、選好ペアから直接学習。よりシンプルで安定だが、データ品質に敏感",
      "自身の経験：SFT 248件で良好な成果、DPOはむしろ−7.6pp → <span class=\"highlight\">全てのシナリオでアライメントが必要なわけではない</span>"
    ],
    "details": [
      {
        "term": "RLHF",
        "explain": "<p>RLHF 的完整流程分三步：</p><div class=\"formula\">Step 1: 收集偏好数据<br>  人类标注员看两个回答，选出更好的那个<br>  → (prompt, 好回答, 差回答) × 数万条<br><br>Step 2: 训练 Reward Model<br>  输入: (prompt, response) → 输出: 分数<br>  学会\"像人类一样打分\"<br><br>Step 3: PPO 强化学习优化<br>  Policy(LLM) 生成回答 → RM 打分 → 更新 Policy<br>  同时用 KL 散度约束，防止偏离原模型太远</div><p><span class=\"key-point\">需要同时维护 4 个模型：Policy、Reference、Reward、Value</span>，工程复杂度极高，训练也不稳定（reward hacking 问题）。</p>"
      },
      {
        "term": "DPO",
        "explain": "<div class=\"analogy\">RLHF 要先学\"打分标准\"(RM)，再用分数训练。DPO 说：<span class=\"key-point\">我可以跳过打分，直接从偏好对学习</span>。</div><div class=\"formula\">RLHF: 偏好数据 → 训练RM → RM打分 → PPO优化<br>DPO:  偏好数据 → 直接优化 ✓（一步到位）<br><br>DPO Loss 的直觉：<br>  增大好回答的概率 + 减小差回答的概率<br>  同时参考原模型，防止过拟合</div><p>优点：只需 2 个模型（Policy + Reference），训练稳定。<br>缺点：<span class=\"key-point\">对数据质量极敏感</span>——如果标注不一致，模型会学到矛盾的偏好。</p>"
      },
      {
        "term": "Reward Model",
        "explain": "<p>Reward Model 本质是一个\"评分模型\"：</p><div class=\"formula\">输入：(prompt, response) 的拼接文本<br>输出：一个标量分数（越高越好）<br><br>训练数据示例：<br>  prompt: \"解释黑洞\"<br>  response_good: \"黑洞是引力极强...\"  → 高分<br>  response_bad:  \"黑洞就是一个洞...\"  → 低分<br><br>Loss = -log(σ(r_good - r_bad))</div><p>通常用 SFT 后的模型初始化 RM，去掉生成头，换成回归头。<span class=\"key-point\">RM 的质量直接决定 RLHF 的上限</span>——标注不准 = 教模型学坏。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "RLHF",
        "explain": "<p>RLHFの完全なフローは3ステップです：</p><div class=\"formula\">Step 1: 選好データの収集<br>  人間のアノテーターが2つの回答を見て、より良い方を選択<br>  → (prompt, 良い回答, 悪い回答) × 数万件<br><br>Step 2: Reward Modelの学習<br>  入力: (prompt, response) → 出力: スコア<br>  「人間のように採点する」ことを学習<br><br>Step 3: PPO強化学習で最適化<br>  Policy(LLM)が回答を生成 → RMが採点 → Policyを更新<br>  KLダイバージェンスで制約し、元モデルから離れすぎないように</div><p><span class=\"key-point\">4つのモデルを同時に維持する必要があります：Policy、Reference、Reward、Value</span>。エンジニアリングの複雑さが極めて高く、学習も不安定です（reward hackingの問題）。</p>"
      },
      {
        "term": "DPO",
        "explain": "<div class=\"analogy\">RLHFはまず「採点基準」(RM)を学び、そのスコアで学習します。DPOの主張：<span class=\"key-point\">採点をスキップし、選好ペアから直接学習できる</span>。</div><div class=\"formula\">RLHF: 選好データ → RM学習 → RMが採点 → PPO最適化<br>DPO:  選好データ → 直接最適化 ✓（ワンステップ）<br><br>DPO Lossの直感：<br>  良い回答の確率を増大 + 悪い回答の確率を減少<br>  元モデルを参照し、過学習を防止</div><p>利点：2つのモデル（Policy + Reference）のみで、学習が安定。<br>欠点：<span class=\"key-point\">データ品質に極めて敏感</span>——アノテーションに一貫性がないと、モデルが矛盾した選好を学習します。</p>"
      },
      {
        "term": "Reward Model",
        "explain": "<p>Reward Modelは本質的に「採点モデル」です：</p><div class=\"formula\">入力：(prompt, response)の連結テキスト<br>出力：スカラースコア（高いほど良い）<br><br>学習データの例：<br>  prompt: \"ブラックホールを説明して\"<br>  response_good: \"ブラックホールは重力が極めて強い...\" → 高得点<br>  response_bad:  \"ブラックホールはただの穴...\" → 低得点<br><br>Loss = -log(σ(r_good - r_bad))</div><p>通常、SFT済みモデルでRMを初期化し、生成ヘッドを除去して回帰ヘッドに置換します。<span class=\"key-point\">RMの品質がRLHFの上限を直接決定します</span>——アノテーションが不正確 = モデルに悪い習慣を教えることになります。</p>"
      }
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "l05",
    "cat": "LLM基础",
    "q": "Scaling Laws（缩放定律）",
    "q_ja": "Scaling Laws（スケーリング則）",
    "bullets": [
      "Kaplan(2020)：Loss分别关于N(参数量)、D(数据量)、C(计算量)呈幂律下降，如 L(N) ∝ N^{-0.076}",
      "Chinchilla(2022)：最优分配 → 参数量和数据量应同比例增长。70B模型需要1.4T tokens",
      "含义：<span class=\"highlight\">不是模型越大越好，而是算力分配要合理</span>",
      "实践影响：Llama系列（更小模型+更多数据）比GPT-3（大模型+少数据）效率高",
      "对客户的意义：14B充分训练可能比32B欠训练效果好（你的实验验证了这点）"
    ],
    "bullets_ja": [
      "Kaplan(2020)：LossはN（パラメータ数）、D（データ量）、C（計算量）それぞれに対してべき乗則で低下、例：L(N) ∝ N^{-0.076}",
      "Chinchilla(2022)：最適配分 → パラメータ数とデータ量は同比率で増やすべき。70Bモデルには1.4Tトークンが必要",
      "意味：<span class=\"highlight\">モデルが大きいほど良いのではなく、計算資源の配分が重要</span>",
      "実践への影響：Llamaシリーズ（小モデル+大量データ）はGPT-3（大モデル+少量データ）より効率的",
      "顧客にとっての意義：14Bを十分に学習させた方が学習不足の32Bモデルより良い場合がある（自身の実験で検証済み）"
    ],
    "details": [
      {
        "term": "Chinchilla",
        "explain": "<div class=\"analogy\">假设你有 100 万预算盖房子。你可以：<br>A) 买很贵的建材（大模型），但只够盖一半<br>B) 用适中的建材（小模型），完整地盖好并精装修（充分训练）<br><span class=\"key-point\">Chinchilla 告诉我们：方案 B 通常更好。</span></div><div class=\"formula\">Chinchilla 最优比例：<br>  参数量 N 和数据量 D 应等比例增长<br>  D ≈ 20 × N （近似）<br><br>例：70B 参数 → 需要 1.4T tokens<br>    7B  参数 → 需要 140B tokens<br><br>对比：<br>  GPT-3:  175B参数 × 300B tokens ← 数据不足！<br>  LLaMA:   7B参数 × 1T tokens   ← 更优分配</div><p>实践意义：<span class=\"key-point\">不要盲目追求大参数</span>，充分训练的小模型往往比欠训练的大模型效果更好且推理更快。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "Chinchilla",
        "explain": "<div class=\"analogy\">100万の予算で家を建てるとします：<br>A) 高価な建材（大モデル）を買うが、半分しか建てられない<br>B) 適度な建材（小モデル）を使い、完全に建てて内装まで仕上げる（十分な学習）<br><span class=\"key-point\">Chinchillaが教えてくれるのは：プランBの方が通常優れているということ。</span></div><div class=\"formula\">Chinchillaの最適比率：<br>  パラメータ数Nとデータ量Dは等比率で増やすべき<br>  D ≈ 20 × N（近似）<br><br>例：70Bパラメータ → 1.4Tトークンが必要<br>    7Bパラメータ  → 140Bトークンが必要<br><br>比較：<br>  GPT-3:  175Bパラメータ × 300Bトークン ← データ不足！<br>  LLaMA:   7Bパラメータ × 1Tトークン   ← より最適な配分</div><p>実践的意義：<span class=\"key-point\">やみくもに大きなパラメータを追求しない</span>。十分に学習された小モデルは、学習不足の大モデルより性能が良く推論も高速な場合が多いです。</p>"
      }
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "l06",
    "cat": "LLM基础",
    "q": "KV Cache 机制",
    "q_ja": "KV Cacheの仕組み",
    "bullets": [
      "自回归生成时，每个新token需要attend所有之前的token",
      "不用cache：每步重算所有token的K/V → O(n²) 重复计算",
      "用cache：缓存已计算的K/V → 每步只算新token的Q与所有K/V → O(n) 增量",
      "显存占用：2 × n_layers × d_model × seq_len × batch_size × sizeof(dtype)",
      "<span class=\"highlight\">Paged Attention</span>(vLLM)：像OS虚拟内存一样管理KV Cache，减少碎片，支持更大batch"
    ],
    "bullets_ja": [
      "自己回帰生成時、新しいtokenは全ての先行tokenにattendする必要がある",
      "Cacheなし：毎ステップで全tokenのK/Vを再計算 → O(n²)の冗長計算",
      "Cacheあり：計算済みのK/Vをキャッシュ → 毎ステップ新tokenのQと全K/Vのみ計算 → O(n)の増分",
      "VRAM使用量：2 × n_layers × d_model × seq_len × batch_size × sizeof(dtype)",
      "<span class=\"highlight\">Paged Attention</span>(vLLM)：OSの仮想メモリのようにKV Cacheを管理し、断片化を削減、より大きなbatchをサポート"
    ],
    "details": [
      {
        "term": "KV Cache",
        "explain": "<p>自回归生成中，每生成一个 token 都要和所有之前的 token 做 Attention。</p><div class=\"formula\">不用 Cache（每步重算全部）：<br>  Step 1: 算 [A] 的 K,V<br>  Step 2: 算 [A,B] 的 K,V     ← A 重复算了！<br>  Step 3: 算 [A,B,C] 的 K,V   ← A,B 重复算了！<br>  → O(n²) 总计算量<br><br>用 Cache（缓存已算过的）：<br>  Step 1: 算 A 的 K,V → 存入 Cache<br>  Step 2: 只算 B 的 K,V → 追加到 Cache<br>  Step 3: 只算 C 的 K,V → 追加到 Cache<br>  → O(n) 总计算量 ✓</div><p><span class=\"key-point\">KV Cache 用显存空间换计算时间</span>，是推理加速的基础优化。缺点是显存占用随序列长度线性增长。</p>"
      },
      {
        "term": "Paged Attention",
        "explain": "<div class=\"analogy\">传统 KV Cache 为每个请求预分配最大长度的连续显存，就像餐厅为每桌预留 10 个座位——即使只来了 2 人，8 个空座也不能给别人用。<br><br><span class=\"key-point\">Paged Attention 像 OS 的虚拟内存</span>：把显存分成小\"页\"，按需分配。</div><div class=\"formula\">传统方式：<br>  请求A: [████████░░░░]  预留12格，用了8格<br>  请求B: [██░░░░░░░░░░]  预留12格，用了2格<br>  → 浪费 14 格<br><br>Paged Attention：<br>  请求A: [██][██][██][██]  用4页<br>  请求B: [█░]              用1页<br>  → 空闲页可立即分给新请求</div><p>效果：显存利用率接近 100%，<span class=\"key-point\">同样的 GPU 能服务 2-4 倍的并发请求</span>。vLLM 的核心技术。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "KV Cache",
        "explain": "<p>自己回帰生成では、各tokenの生成時に全ての先行tokenとAttentionを計算する必要があります。</p><div class=\"formula\">Cacheなし（毎ステップ全て再計算）：<br>  Step 1: [A]のK,Vを計算<br>  Step 2: [A,B]のK,Vを計算     ← Aが重複計算！<br>  Step 3: [A,B,C]のK,Vを計算   ← A,Bが重複計算！<br>  → O(n²)の総計算量<br><br>Cacheあり（計算済みをキャッシュ）：<br>  Step 1: AのK,Vを計算 → Cacheに保存<br>  Step 2: BのK,Vのみ計算 → Cacheに追加<br>  Step 3: CのK,Vのみ計算 → Cacheに追加<br>  → O(n)の総計算量 ✓</div><p><span class=\"key-point\">KV CacheはVRAM容量と計算時間のトレードオフ</span>で、推論高速化の基本的な最適化です。欠点はVRAM使用量がシーケンス長に比例して線形増加することです。</p>"
      },
      {
        "term": "Paged Attention",
        "explain": "<div class=\"analogy\">従来のKV Cacheは各リクエストに最大長の連続VRAMを事前割り当てします。レストランで各テーブルに10席を予約するようなもの——2人しか来なくても、空いた8席は他の人に使えません。<br><br><span class=\"key-point\">Paged AttentionはOSの仮想メモリのように</span>：VRAMを小さな「ページ」に分割し、必要に応じて割り当てます。</div><div class=\"formula\">従来方式：<br>  リクエストA: [████████░░░░]  12枠予約、8枠使用<br>  リクエストB: [██░░░░░░░░░░]  12枠予約、2枠使用<br>  → 14枠が無駄<br><br>Paged Attention：<br>  リクエストA: [██][██][██][██]  4ページ使用<br>  リクエストB: [█░]              1ページ使用<br>  → 空きページは即座に新リクエストに割当可能</div><p>効果：VRAMの利用率がほぼ100%に達し、<span class=\"key-point\">同じGPUで2〜4倍の同時リクエストを処理可能</span>。vLLMのコア技術です。</p>"
      }
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "l07",
    "cat": "LLM基础",
    "q": "Flash Attention 为什么快？",
    "q_ja": "Flash Attentionはなぜ高速なのか？",
    "bullets": [
      "标准Attention：QK^T生成n×n矩阵存到HBM(显存) → 读出来softmax → 再存回去 → 再乘V",
      "瓶颈不是计算而是<span class=\"highlight\">内存带宽</span>（HBM读写慢，SRAM快但小）",
      "Flash Attention：分块(tiling)在SRAM中完成QKV运算，不在HBM存中间矩阵",
      "效果：速度2-4x，显存从O(n²)降到O(n)，<span class=\"highlight\">精确计算不是近似</span>",
      "Flash Attention 2/3：进一步优化并行策略和GPU利用率"
    ],
    "bullets_ja": [
      "標準Attention：QK^Tでn×n行列を生成しHBM（VRAM）に保存 → 読み出してSoftmax → 再保存 → Vと乗算",
      "ボトルネックは計算ではなく<span class=\"highlight\">メモリ帯域幅</span>（HBMの読み書きは遅い、SRAMは速いが小さい）",
      "Flash Attention：タイリングによりSRAM内でQKV演算を完結、HBMに中間行列を保存しない",
      "効果：速度2-4倍、VRAMがO(n²)からO(n)に削減、<span class=\"highlight\">近似ではなく厳密計算</span>",
      "Flash Attention 2/3：並列戦略とGPU利用率をさらに最適化"
    ],
    "details": [
      {
        "term": "Flash Attention",
        "explain": "<div class=\"analogy\">GPU 有两种内存：<br>• <strong>HBM（显存）</strong>= 大仓库，容量大但取货慢<br>• <strong>SRAM（片上缓存）</strong>= 工作台，容量小但取货极快<br><br>标准 Attention 反复在\"仓库\"和\"工作台\"之间搬运数据，<span class=\"key-point\">瓶颈不是计算速度，而是搬运速度</span>。</div><div class=\"formula\">标准 Attention 的 IO 开销：<br>  Q,K → 从HBM读 → 算QK^T → 存回HBM（n×n矩阵！）<br>  → 从HBM读 → softmax → 存回HBM<br>  → 从HBM读 → 乘V → 存回HBM<br>  共 3 次读写 n×n 矩阵<br><br>Flash Attention：<br>  分小块加载到SRAM → 一次算完QKV → 只写最终结果<br>  中间的 n×n 矩阵从不写入HBM ✓</div><p><span class=\"key-point\">速度提升 2-4x，显存从 O(n^2) 降到 O(n)</span>，而且结果和标准 Attention 完全一致（精确计算，非近似）。</p>"
      },
      {
        "term": "Tiling",
        "explain": "<p>Flash Attention 的核心策略就是 Tiling：把大矩阵切成小块，在 SRAM 中逐块处理。</p><div class=\"formula\">Q矩阵 (n×d)         K矩阵 (n×d)<br>┌──┬──┬──┐         ┌──┬──┬──┐<br>│Q1│Q2│Q3│         │K1│K2│K3│<br>├──┼──┼──┤         ├──┼──┼──┤<br>│Q4│Q5│Q6│         │K4│K5│K6│<br>└──┴──┴──┘         └──┴──┴──┘<br><br>处理流程：<br>  加载 Q1,K1 到 SRAM → 算局部 attention<br>  加载 Q1,K2 到 SRAM → 算局部 attention<br>  ... 用 online softmax 合并结果</div><p><span class=\"key-point\">关键技巧是 online softmax</span>：不需要看到完整的一行就能递增计算 softmax，让分块处理成为可能。每个小块的大小由 SRAM 容量决定。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "Flash Attention",
        "explain": "<div class=\"analogy\">GPUには2種類のメモリがあります：<br>• <strong>HBM（VRAM）</strong>= 大きな倉庫、容量は大きいが取り出しが遅い<br>• <strong>SRAM（オンチップキャッシュ）</strong>= 作業台、容量は小さいが取り出しが極めて速い<br><br>標準Attentionは「倉庫」と「作業台」の間でデータを何度も搬送し、<span class=\"key-point\">ボトルネックは計算速度ではなく搬送速度です</span>。</div><div class=\"formula\">標準AttentionのIOオーバーヘッド：<br>  Q,K → HBMから読込 → QK^T計算 → HBMに書戻し（n×n行列！）<br>  → HBMから読込 → softmax → HBMに書戻し<br>  → HBMから読込 → Vと乗算 → HBMに書戻し<br>  合計3回のn×n行列の読み書き<br><br>Flash Attention：<br>  小ブロックをSRAMにロード → QKVをまとめて計算 → 最終結果のみ書出し<br>  中間のn×n行列はHBMに書き込まない ✓</div><p><span class=\"key-point\">速度が2〜4倍向上、VRAMがO(n^2)からO(n)に削減</span>。しかも結果は標準Attentionと完全に一致します（近似ではなく厳密計算）。</p>"
      },
      {
        "term": "Tiling",
        "explain": "<p>Flash Attentionのコア戦略がTilingです：大きな行列を小ブロックに分割し、SRAM内で逐次処理します。</p><div class=\"formula\">Q行列 (n×d)          K行列 (n×d)<br>┌──┬──┬──┐          ┌──┬──┬──┐<br>│Q1│Q2│Q3│          │K1│K2│K3│<br>├──┼──┼──┤          ├──┼──┼──┤<br>│Q4│Q5│Q6│          │K4│K5│K6│<br>└──┴──┴──┘          └──┴──┴──┘<br><br>処理フロー：<br>  Q1,K1をSRAMにロード → 局所attentionを計算<br>  Q1,K2をSRAMにロード → 局所attentionを計算<br>  ... online softmaxで結果を統合</div><p><span class=\"key-point\">鍵となるテクニックはonline softmax</span>：完全な行を見なくても増分的にsoftmaxを計算でき、ブロック分割処理を可能にします。各ブロックのサイズはSRAM容量によって決まります。</p>"
      }
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "l08",
    "cat": "LLM基础",
    "q": "量化方法对比",
    "q_ja": "量子化手法の比較",
    "bullets": [
      "FP16/BF16：半精度，标准训练格式。BF16范围更大（指数位多），训练更稳定",
      "INT8(W8A8)：权重和激活都8位，~2×压缩，精度损失极小",
      "INT4/NF4(QLoRA)：权重4位，~4×压缩。NF4：正态分位数量化，对正态分布权重最优",
      "GPTQ：逐层量化+Hessian补偿（post-training），GPU推理用",
      "AWQ：只保护1%的\"重要权重\"不量化，效果好于GPTQ",
      "GGUF：llama.cpp格式，Q4_K_M/Q8_0等，<span class=\"highlight\">专为CPU推理优化</span>"
    ],
    "bullets_ja": [
      "FP16/BF16：半精度、標準的な学習フォーマット。BF16は範囲が広い（指数部が多い）ため学習がより安定",
      "INT8(W8A8)：重みと活性化の両方が8ビット、約2倍圧縮、精度損失は極小",
      "INT4/NF4(QLoRA)：重みが4ビット、約4倍圧縮。NF4：正規分位量子化、正規分布の重みに最適",
      "GPTQ：層ごとの量子化+ヘシアン補償（学習後量子化）、GPU推論用",
      "AWQ：1%の「重要な重み」のみ量子化せず保護、GPTQより効果的",
      "GGUF：llama.cppフォーマット、Q4_K_M/Q8_0など、<span class=\"highlight\">CPU推論に特化して最適化</span>"
    ],
    "details": [
      {
        "term": "GPTQ",
        "explain": "<p>GPTQ 的核心思想：逐层量化权重，同时<span class=\"key-point\">用 Hessian 矩阵补偿量化误差</span>。</p><div class=\"formula\">逐层处理：<br>  原始权重 W (FP16) → 量化为 W'(INT4)<br>  量化会产生误差 ΔW = W - W'<br><br>Hessian 补偿：<br>  哪些权重\"重要\"？→ 看 Hessian（二阶导数）<br>  重要权重的量化误差 → 分摊给不重要的权重<br>  → 整体误差最小化</div><div class=\"analogy\">像拼拼图：量化某块会产生缝隙（误差），GPTQ 把这个缝隙巧妙地分散到其他块上，让整体画面还是完整的。</div><p>优点：一次校准（几百条数据），GPU 推理快。缺点：量化过程本身较慢。</p>"
      },
      {
        "term": "AWQ",
        "explain": "<div class=\"analogy\">一个有趣的发现：<span class=\"key-point\">模型中只有约 1% 的权重是\"关键权重\"</span>——它们的值虽小但对输出影响巨大。</div><div class=\"formula\">观察：<br>  99% 的权重：量化后误差很小，影响不大<br>  1% 的权重：量化后误差小但输出变化大！<br><br>AWQ 策略：<br>  Step 1: 用少量校准数据找出\"重要权重\"<br>         （看激活值大小，激活大 = 权重重要）<br>  Step 2: 对重要权重先乘以缩放因子 s<br>         → 量化误差相对变小<br>  Step 3: 正常量化所有权重</div><p><span class=\"key-point\">不需要反量化或混合精度</span>，所有权重都是 INT4，但通过缩放保护了关键权重。效果优于 GPTQ，且量化速度更快。</p>"
      },
      {
        "term": "NF4（Normal Float 4-bit）",
        "explain": "<p>传统 INT4 把量化区间均匀分布。但神经网络的权重分布是<span class=\"key-point\">近似正态分布（bell curve）</span>——大多数值集中在 0 附近。</p><div class=\"formula\">INT4 均匀量化（16个等距点）：<br>  |--•--•--•--•--•--•--•--0--•--•--•--•--•--•--•--|<br>  边缘区域点太多（浪费），中心区域点太少（精度差）<br><br>NF4 正态分位数量化：<br>  |•-•--•---•----•------0------•----•---•--•-•|<br>  中心密集，边缘稀疏 → 匹配权重的实际分布<br>  <br>  每个量化点 = 标准正态分布的等概率分位数</div><p><span class=\"key-point\">NF4 是信息论最优的 4-bit 量化方式</span>（对正态分布权重）。QLoRA 的核心技术之一，配合双重量化（量化缩放因子本身）进一步节省显存。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "GPTQ",
        "explain": "<p>GPTQの核心的なアイデア：層ごとに重みを量子化し、同時に<span class=\"key-point\">ヘシアン行列で量子化誤差を補償する</span>。</p><div class=\"formula\">層ごとの処理：<br>  元の重み W (FP16) → W'(INT4)に量子化<br>  量子化により誤差 ΔW = W - W' が発生<br><br>ヘシアン補償：<br>  どの重みが「重要」か？→ ヘシアン（二階微分）を参照<br>  重要な重みの量子化誤差 → 重要でない重みに分散<br>  → 全体誤差を最小化</div><div class=\"analogy\">パズルのようなもの：あるピースを量子化すると隙間（誤差）が生じますが、GPTQはその隙間を他のピースに巧みに分散させ、全体の絵を完全に保ちます。</div><p>利点：一度のキャリブレーション（数百件のデータ）でGPU推論が高速。欠点：量子化プロセス自体がやや遅い。</p>"
      },
      {
        "term": "AWQ",
        "explain": "<div class=\"analogy\">興味深い発見：<span class=\"key-point\">モデル内の重みのうち約1%だけが「重要な重み」</span>——その値は小さいですが、出力への影響は非常に大きいです。</div><div class=\"formula\">観察：<br>  99%の重み：量子化後の誤差は小さく、影響も小さい<br>  1%の重み：量子化後の誤差は小さいが出力の変化が大きい！<br><br>AWQ戦略：<br>  Step 1: 少量のキャリブレーションデータで「重要な重み」を特定<br>         （活性化の大きさを確認、活性化が大 = 重みが重要）<br>  Step 2: 重要な重みにスケーリング係数sを乗算<br>         → 量子化誤差が相対的に縮小<br>  Step 3: 全重みを通常通り量子化</div><p><span class=\"key-point\">逆量子化や混合精度は不要</span>で、全重みがINT4ですが、スケーリングにより重要な重みが保護されます。GPTQより効果が良く、量子化速度も高速です。</p>"
      },
      {
        "term": "NF4（Normal Float 4-bit）",
        "explain": "<p>従来のINT4は量子化区間を均等に分布させます。しかしニューラルネットワークの重み分布は<span class=\"key-point\">近似的に正規分布（ベルカーブ）</span>——ほとんどの値が0付近に集中しています。</p><div class=\"formula\">INT4均等量子化（16個の等間隔点）：<br>  |--•--•--•--•--•--•--•--0--•--•--•--•--•--•--•--|<br>  端の領域に点が多すぎ（無駄）、中心の領域に点が少なすぎ（精度不足）<br><br>NF4正規分位量子化：<br>  |•-•--•---•----•------0------•----•---•--•-•|<br>  中心は密、端は疎 → 重みの実際の分布にマッチ<br>  <br>  各量子化点 = 標準正規分布の等確率分位数</div><p><span class=\"key-point\">NF4は情報理論的に最適な4-bit量子化方式</span>（正規分布の重みに対して）。QLoRAのコア技術の一つで、二重量子化（スケーリング係数自体も量子化）と組み合わせてさらにVRAMを節約します。</p>"
      }
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "l09",
    "cat": "LLM基础",
    "q": "Hallucination（幻觉）原因与缓解",
    "q_ja": "Hallucination（幻覚）の原因と軽減策",
    "bullets": [
      "原因①：训练数据噪声/矛盾 → 模型学到错误关联",
      "原因②：自回归生成的exposure bias → 早期小错误雪球式放大",
      "原因③：softmax只能选已有token，不能\"说不知道\"",
      "缓解：<span class=\"highlight\">RAG</span>(用事实文档grounding) / Guardrails(检查事实性) / Self-consistency(多次采样投票)",
      "缓解：Fine-tuning让模型学会说\"我不知道\" / 降Temperature减少随机性",
      "你的做法：SiLR验证器 = 用仿真器事実检查LLM的\"幻觉动作\""
    ],
    "bullets_ja": [
      "原因①：学習データのノイズ/矛盾 → モデルが誤った関連付けを学習",
      "原因②：自己回帰生成のexposure bias → 初期の小さな誤りが雪だるま式に拡大",
      "原因③：Softmaxは既存のtokenしか選択できず、「分からない」と言えない",
      "軽減：<span class=\"highlight\">RAG</span>（事実文書によるgrounding）/ Guardrails（事実性チェック）/ Self-consistency（複数回サンプリングして投票）",
      "軽減：Fine-tuningで「分かりません」と言えるように学習 / Temperatureを下げてランダム性を削減",
      "自身の手法：SiLR検証器 = シミュレータでLLMの「幻覚アクション」を事実チェック"
    ],
    "details": [
      {
        "term": "Hallucination",
        "explain": "<p>LLM 一本正经地胡说八道——输出看起来流畅自信，但内容是<span class=\"key-point\">编造的</span>。</p><div class=\"analogy\">类比：一个记忆力超强的学生考试时遇到不会的题，不会留空，而是把记过的碎片拼成一个\"看起来对\"的答案。模型也一样：softmax <em>必须</em>选一个 token，没有\"跳过\"选项。</div><div class=\"formula\">训练数据矛盾 → 学到错误关联\n自回归传播 → 小错滚雪球\nsoftmax 无\"不知道\"→ 被迫编造</div>"
      },
      {
        "term": "Exposure Bias",
        "explain": "<p>训练时模型看到的都是<span class=\"key-point\">真实的上一个 token</span>（teacher forcing），但推理时看到的是<span class=\"key-point\">自己生成的 token</span>。一旦前面生成错了，后面就在错误基础上继续错——雪球效应。</p><div class=\"analogy\">类比：学开车时教练随时帮你修方向盘（teacher forcing），但路考时你自己开，一个弯转错后面全跑偏。</div>"
      },
      {
        "term": "Self-Consistency",
        "explain": "<p>同一个问题<span class=\"key-point\">多次采样</span>（比如跑 5 次，Temperature > 0），然后对最终答案<span class=\"key-point\">投票取多数</span>。直觉：如果模型从不同推理路径都得到同一个答案，那个答案大概率是对的。</p><div class=\"formula\">Query ──→ Sample 1 → 答案 A\n       ──→ Sample 2 → 答案 A\n       ──→ Sample 3 → 答案 B\n       ──→ Sample 4 → 答案 A\n投票结果：A (3票) ✓</div>"
      }
    ],
    "details_ja": [
      {
        "term": "Hallucination",
        "explain": "<p>LLM が自信満々にでたらめを出力すること——流暢だが内容が<span class=\"key-point\">捏造</span>されている。</p><div class=\"analogy\">例え：記憶力抜群の学生が分からない問題でも空欄にせず、覚えた断片を組み合わせて\"それっぽい\"答えを書く。モデルも同じで、softmax は必ず何かの token を選ばなければならず、\"スキップ\"できない。</div><div class=\"formula\">学習データの矛盾 → 誤った関連付け\n自己回帰の伝播 → 小さな誤りが雪だるま式に\nsoftmax に「不明」なし → 捏造を強制</div>"
      },
      {
        "term": "Exposure Bias",
        "explain": "<p>学習時は<span class=\"key-point\">正解の前トークン</span>（teacher forcing）を見るが、推論時は<span class=\"key-point\">自分が生成したトークン</span>を見る。前のトークンが間違っていると、その誤りの上にさらに誤りが積み重なる。</p><div class=\"analogy\">例え：教習所では教官がハンドルを修正してくれる（teacher forcing）が、本番の試験では自分で運転し、一つカーブを間違えると以降全部ずれていく。</div>"
      },
      {
        "term": "Self-Consistency",
        "explain": "<p>同じ質問に対して<span class=\"key-point\">複数回サンプリング</span>（例：Temperature > 0 で5回実行）し、最終回答を<span class=\"key-point\">多数決</span>で決定する。異なる推論パスから同じ答えに到達すれば、その答えが正しい可能性が高い。</p><div class=\"formula\">Query ──→ Sample 1 → 答え A\n       ──→ Sample 2 → 答え A\n       ──→ Sample 3 → 答え B\n       ──→ Sample 4 → 答え A\n投票結果：A（3票）✓</div>"
      }
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "l10",
    "cat": "LLM基础",
    "q": "采样策略：Temperature / Top-p / Top-k",
    "q_ja": "サンプリング戦略：Temperature / Top-p / Top-k",
    "bullets": [
      "Temperature：控制softmax分布的锐度。T→0=贪心(确定性)，T→∞=均匀(随机)",
      "Top-k：只从概率最高的k个token中采样。k=1=贪心，k大→更多样",
      "Top-p(Nucleus)：从累积概率达到p的最小token集中采样。<span class=\"highlight\">动态调整候选数量</span>",
      "Beam Search：同时维护beam_size条候选序列，选总概率最高的。适合翻译，不适合对话",
      "实践：对话用Top-p=0.9+T=0.7；代码/工具调用用T=0(确定性输出)"
    ],
    "bullets_ja": [
      "Temperature：Softmax分布の鋭さを制御。T→0＝貪欲（決定的）、T→∞＝一様（ランダム）",
      "Top-k：確率が最も高いk個のtokenのみからサンプリング。k=1＝貪欲、kが大→より多様",
      "Top-p(Nucleus)：累積確率がpに達する最小のtoken集合からサンプリング。<span class=\"highlight\">候補数を動的に調整</span>",
      "Beam Search：beam_size本の候補シーケンスを同時に維持し、総確率が最も高いものを選択。翻訳向き、対話には不向き",
      "実践：対話にはTop-p=0.9+T=0.7；コード/ツール呼び出しにはT=0（決定的出力）"
    ],
    "details": [
      {
        "term": "Temperature",
        "explain": "<p>Temperature 是 softmax 公式中的<span class=\"key-point\">除数</span>：P(i) = exp(logit_i / T) / Σ exp(logit_j / T)。T 越小，概率分布越尖锐（高概率 token 更突出）；T 越大，分布越平坦（各 token 趋于均匀）。</p><div class=\"analogy\">类比：T 就像调味料的浓度。T→0 是纯酱油（只有一个味道），T→∞ 是白开水（所有味道都一样淡）。T=0.7 大概是适中的调味。</div><div class=\"formula\">T=0.1  [████████▏·] → 几乎贪心\nT=0.7  [████▍···▍·] → 适中多样\nT=2.0  [██·██·██·█] → 接近随机</div>"
      },
      {
        "term": "Top-p vs Top-k",
        "explain": "<p><span class=\"key-point\">Top-k</span>：固定只从概率最高的 k 个 token 中采样。问题是 k 是固定的——有时候模型很确定（前2个 token 占 99%），有时候很犹豫（前50个才凑齐 80%）。</p><p><span class=\"key-point\">Top-p（Nucleus Sampling）</span>：从累积概率达到 p 的最小 token 集中采样。候选数量<span class=\"key-point\">动态变化</span>——模型确定时只选几个，犹豫时自动扩大范围。</p><div class=\"formula\">场景：模型很确定\nTop-k=50: 选50个(48个是噪声)\nTop-p=0.9: 只选3个 ✓ 更精准\n\n场景：模型很犹豫\nTop-k=5:  只选5个(漏掉好选项)\nTop-p=0.9: 选40个 ✓ 更全面</div>"
      },
      {
        "term": "Beam Search",
        "explain": "<p>同时维护 beam_size 条候选序列，每步扩展所有候选，保留总概率最高的 beam_size 条。最终选全局最优序列。</p><div class=\"analogy\">类比：走迷宫时同时派 5 个人走不同路线，每个分岔口各人都尝试所有方向，只保留走得最远的 5 人继续。</div><p><span class=\"key-point\">适合翻译（有标准答案），不适合对话（需要多样性）</span>。对话用 beam search 会产生重复、无趣的回答。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "Temperature",
        "explain": "<p>Temperatureはsoftmax式の<span class=\"key-point\">除数</span>：P(i) = exp(logit_i / T) / Σ exp(logit_j / T)。Tが小さいほど確率分布が鋭く（高確率tokenが際立つ）、Tが大きいほど平坦（各tokenが均一に近づく）。</p><div class=\"analogy\">例え：Tは調味料の濃さ。T→0は醤油原液（一つの味しかない）、T→∞は白湯（全ての味が同じ薄さ）。T=0.7は程よい味付け。</div><div class=\"formula\">T=0.1  [████████▏·] → ほぼ貪欲\nT=0.7  [████▍···▍·] → 適度な多様性\nT=2.0  [██·██·██·█] → ほぼランダム</div>"
      },
      {
        "term": "Top-p vs Top-k",
        "explain": "<p><span class=\"key-point\">Top-k</span>：確率上位k個のtokenのみからサンプリング。問題はkが固定であること——モデルが確信している時（上位2つで99%）も迷っている時（上位50個でやっと80%）も同じk個。</p><p><span class=\"key-point\">Top-p（Nucleus Sampling）</span>：累積確率がpに達する最小のtoken集合からサンプリング。候補数が<span class=\"key-point\">動的に変化</span>——確信時は少数、不確実時は自動的に範囲拡大。</p><div class=\"formula\">場面：モデルが確信\nTop-k=50: 50個選択（48個はノイズ）\nTop-p=0.9: 3個のみ ✓ より正確\n\n場面：モデルが不確実\nTop-k=5:  5個のみ（良い候補を逃す）\nTop-p=0.9: 40個選択 ✓ より網羅的</div>"
      },
      {
        "term": "Beam Search",
        "explain": "<p>beam_size本の候補シーケンスを同時に維持し、各ステップで全候補を展開して総確率が最も高いbeam_size本を残す。最終的にグローバル最適のシーケンスを選択。</p><div class=\"analogy\">例え：迷路で5人を同時に別ルートに送り、分岐点で各自が全方向を試し、最も進んだ5人だけを残して続行。</div><p><span class=\"key-point\">翻訳向き（正解がある）、対話には不向き（多様性が必要）</span>。対話でbeam searchを使うと反復的でつまらない回答になる。</p>"
      }
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "l11",
    "cat": "LLM基础",
    "q": "MoE（Mixture of Experts）架构",
    "q_ja": "MoE（Mixture of Experts）アーキテクチャ",
    "bullets": [
      "每个FFN层替换为多个\"专家\"子网络（如16个），每次只激活其中k个（如2个）",
      "Router网络决定每个token发给哪些专家 → <span class=\"highlight\">稀疏激活</span>",
      "优势：总参数量大（知识容量大），但每次推理只用一部分（计算量小）",
      "典型：Mixtral 8x7B = 47B总参数但每次只激活~13B",
      "挑战：负载均衡（某些专家过载）/ 通信开销（分布式训练）/ 显存仍需存所有专家"
    ],
    "bullets_ja": [
      "各FFN層を複数の「エキスパート」サブネットワーク（例：16個）に置換し、毎回そのうちk個（例：2個）のみ活性化",
      "Routerネットワークが各tokenをどのエキスパートに送るか決定 → <span class=\"highlight\">スパース活性化</span>",
      "利点：総パラメータ数が大きい（知識容量大）が、毎回の推論では一部のみ使用（計算量小）",
      "代表例：Mixtral 8x7B = 総パラメータ47Bだが毎回約13Bのみ活性化",
      "課題：負荷分散（一部のエキスパートに負荷集中）/ 通信オーバーヘッド（分散学習）/ VRAMには全エキスパートの格納が必要"
    ],
    "details": [
      {
        "term": "MoE",
        "explain": "<p>Mixture of Experts：把 FFN 层替换成<span class=\"key-point\">多个并行的小 FFN（\"专家\"）</span>，每次只激活其中几个。总参数量大但每次计算量小。</p><div class=\"analogy\">类比：一个公司有 16 个部门（专家），来了一个客户请求，前台（Router）判断需要哪 2 个部门处理，其他 14 个部门不用动。公司整体能力很强（参数多），但每次响应很快（激活少）。</div>"
      },
      {
        "term": "Router",
        "explain": "<p>Router 是一个<span class=\"key-point\">轻量级网络</span>（通常就是一层线性变换 + softmax），输入是 token 的 hidden state，输出是每个专家的权重分数，选择得分最高的 k 个专家。</p><div class=\"formula\">token hidden state [d_model]\n        |\n   Linear(d_model → n_experts)\n        |\n   softmax → [0.4, 0.3, 0.1, 0.05, ...]\n        |\n   Top-k → 选中专家 0 和 1</div><p>训练时需要加<span class=\"key-point\">负载均衡 loss</span>，否则 Router 会偷懒把所有 token 都发给同一两个专家。</p>"
      },
      {
        "term": "稀疏激活",
        "explain": "<p>\"稀疏\"是指每次前向传播<span class=\"key-point\">只有一小部分参数参与计算</span>。对比\"稠密\"模型（如 LLaMA）每次用全部参数。</p><div class=\"formula\">稠密模型 7B：每次计算量 = 7B 参数\nMoE 8x7B：总参数 47B，每次计算量 ≈ 13B\n→ 知识容量 x3.5，计算成本只 x1.8</div><p><span class=\"key-point\">代价</span>：显存要装所有 47B 参数（虽然只用 13B 计算），所以推理显存并没有省。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "MoE",
        "explain": "<p>Mixture of Experts：FFN層を<span class=\"key-point\">複数の並列な小FFN（\"エキスパート\"）</span>に置き換え、毎回一部のみ活性化。総パラメータ数は大きいが計算量は小さい。</p><div class=\"analogy\">例え：16部門ある会社で、顧客リクエストが来たらフロント（Router）が必要な2部門だけに振り分け、残り14部門は動かない。会社全体の能力は高い（パラメータ多）が、毎回の対応は速い（活性化が少ない）。</div>"
      },
      {
        "term": "Router",
        "explain": "<p>Routerは<span class=\"key-point\">軽量なネットワーク</span>（通常は1層の線形変換 + softmax）で、tokenのhidden stateを入力し、各エキスパートのスコアを出力、上位k個のエキスパートを選択。</p><div class=\"formula\">token hidden state [d_model]\n        |\n   Linear(d_model → n_experts)\n        |\n   softmax → [0.4, 0.3, 0.1, 0.05, ...]\n        |\n   Top-k → エキスパート0と1を選択</div><p>学習時は<span class=\"key-point\">負荷分散loss</span>を追加しないと、Routerが全tokenを同じエキスパートに送ってしまう。</p>"
      },
      {
        "term": "スパース活性化",
        "explain": "<p>「スパース」とは、毎回の順伝播で<span class=\"key-point\">パラメータの一部のみが計算に参加</span>すること。対照的に「デンス」モデル（LLaMAなど）は毎回全パラメータを使用。</p><div class=\"formula\">デンスモデル 7B：毎回の計算量 = 7Bパラメータ\nMoE 8x7B：総パラメータ47B、毎回の計算量 ≈ 13B\n→ 知識容量 x3.5、計算コスト x1.8のみ</div><p><span class=\"key-point\">代償</span>：VRAMには全47Bパラメータを格納する必要がある（計算は13Bだけでも）ため、推論のVRAMは節約されない。</p>"
      }
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "l12",
    "cat": "LLM基础",
    "q": "位置编码：RoPE vs ALiBi",
    "q_ja": "位置エンコーディング：RoPE vs ALiBi",
    "bullets": [
      "为什么需要：Attention本身不包含位置信息，\"ABCD\"和\"DCBA\"注意力相同",
      "Sinusoidal(原始)：固定函数生成，不可学习，外推能力差",
      "<span class=\"highlight\">RoPE</span>(Rotary)：用旋转矩阵编码相对位置，支持长度外推（配合NTK scaling）→ 主流选择",
      "ALiBi：不加位置编码，而是给远距离token的attention分数加线性惩罚 → 训练简单",
      "长文本处理：RoPE+Dynamic NTK/YaRN可扩展到128K+；ALiBi天然支持外推"
    ],
    "bullets_ja": [
      "なぜ必要か：Attention自体は位置情報を含まず、「ABCD」と「DCBA」のAttentionが同じになる",
      "Sinusoidal（オリジナル）：固定関数で生成、学習不可、外挿能力が低い",
      "<span class=\"highlight\">RoPE</span>(Rotary)：回転行列で相対位置をエンコード、長さの外挿をサポート（NTK scalingと併用）→ 主流の選択",
      "ALiBi：位置エンコーディングを加えず、遠距離tokenのAttentionスコアに線形ペナルティを付与 → 学習がシンプル",
      "長文処理：RoPE+Dynamic NTK/YaRNで128K+に拡張可能；ALiBiは本来的に外挿をサポート"
    ],
    "details": [
      {
        "term": "RoPE",
        "explain": "<p>Rotary Position Embedding 的核心思想：把 Q 和 K 向量<span class=\"key-point\">按位置角度旋转</span>。位置 m 的向量被旋转 m*theta 角度，这样两个位置的点积自然包含了它们的<span class=\"key-point\">相对距离</span>信息。</p><div class=\"analogy\">类比：想象一个时钟，位置 0 的指针指向 12 点，位置 1 转了 30 度，位置 2 转了 60 度……两个位置的点积 = cos(角度差)，所以模型自动感知到\"这两个 token 距离 2 个位置\"。</div><div class=\"formula\">2D 平面上的旋转：\n[q1]   [cos(m*th)  -sin(m*th)] [q1]\n[q2] = [sin(m*th)   cos(m*th)] [q2]\n\n实际：d_model维空间拆成 d/2 个 2D 平面\n每个平面用不同频率 th_i 旋转</div>"
      },
      {
        "term": "ALiBi",
        "explain": "<p>Attention with Linear Biases：<span class=\"key-point\">不修改 Q/K 向量</span>，而是直接在 attention score 上减去一个与距离成正比的惩罚值。距离越远，惩罚越大。</p><div class=\"formula\">标准:  score = Q*K^T / sqrt(d)\nALiBi: score = Q*K^T / sqrt(d) - m*|i-j|\n\n其中 m 是每个 head 不同的斜率\n远距离 token 被压低 → 自然衰减</div><p><span class=\"key-point\">优点</span>：实现极简，天然支持长度外推（训练 1K，推理 2K 自动生效）。<span class=\"key-point\">缺点</span>：对远距离依赖建模能力弱于 RoPE。</p>"
      },
      {
        "term": "NTK Scaling",
        "explain": "<p>当 RoPE 模型需要处理超过训练长度的文本时，直接外推会导致<span class=\"key-point\">角度超出训练见过的范围</span>，性能崩溃。NTK Scaling 通过调整 RoPE 的基频 base（默认 10000），等效于\"拉伸\"旋转频率。</p><div class=\"analogy\">类比：一把尺子只画到 30cm（训练长度），NTK Scaling 不是硬画到 60cm（会失真），而是把整把尺子的刻度等比缩小，让 60cm 的内容也能落在尺子范围内。</div><p>Dynamic NTK：根据实际序列长度<span class=\"key-point\">自动调整</span> base 值，不需要重新训练。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "RoPE",
        "explain": "<p>Rotary Position Embeddingの核心：QとKベクトルを<span class=\"key-point\">位置に応じた角度で回転</span>させる。位置mのベクトルはm*thetaの角度で回転され、二つの位置の内積が自然に<span class=\"key-point\">相対距離</span>の情報を含む。</p><div class=\"analogy\">例え：時計を想像する。位置0の針は12時方向、位置1は30度回転、位置2は60度回転……二つの位置の内積 = cos(角度差)なので、モデルは自動的に「この2つのtokenは距離2」と認識する。</div><div class=\"formula\">2D平面上の回転：\n[q1]   [cos(m*th)  -sin(m*th)] [q1]\n[q2] = [sin(m*th)   cos(m*th)] [q2]\n\n実際：d_model次元空間をd/2個の2D平面に分割\n各平面が異なる周波数th_iで回転</div>"
      },
      {
        "term": "ALiBi",
        "explain": "<p>Attention with Linear Biases：<span class=\"key-point\">Q/Kベクトルを変更せず</span>、attention scoreに距離に比例するペナルティ値を直接減算する。距離が遠いほどペナルティが大きい。</p><div class=\"formula\">標準:  score = Q*K^T / sqrt(d)\nALiBi: score = Q*K^T / sqrt(d) - m*|i-j|\n\nmは各headで異なる傾き\n遠距離tokenが抑制 → 自然な減衰</div><p><span class=\"key-point\">利点</span>：実装が極めて簡単で、長さの外挿を本来的にサポート（1Kで学習、2Kの推論が自動的に有効）。<span class=\"key-point\">欠点</span>：遠距離依存関係のモデリング能力はRoPEに劣る。</p>"
      },
      {
        "term": "NTK Scaling",
        "explain": "<p>RoPEモデルが学習長を超えるテキストを処理する際、そのまま外挿すると<span class=\"key-point\">角度が学習時の範囲を超え</span>、性能が崩壊する。NTK ScalingはRoPEの基本周波数base（デフォルト10000）を調整し、回転周波数を「引き伸ばす」。</p><div class=\"analogy\">例え：30cmまでしか目盛りがない定規（学習長）で、60cmを無理に測る（外挿失敗）のではなく、全体の目盛りを等比で縮小して60cmの内容も定規の範囲に収める。</div><p>Dynamic NTK：実際のシーケンス長に応じてbase値を<span class=\"key-point\">自動調整</span>し、再学習が不要。</p>"
      }
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "l13",
    "cat": "LLM基础",
    "q": "RLHF vs DPO 详细对比",
    "q_ja": "RLHF vs DPO 詳細比較",
    "bullets": [
      "RLHF：训练Reward Model → PPO优化policy。优点：灵活，可迭代。缺点：<span class=\"highlight\">训练不稳定，需要4个模型同时在线</span>",
      "DPO：loss = -log σ(β(log(π_θ(y_w)/π_ref(y_w)) - log(π_θ(y_l)/π_ref(y_l))))。隐式学习reward，一步训练",
      "DPO缺点：<span class=\"highlight\">对数据质量极敏感</span>（你的经验：63%偏好对的偏差→模型学错）",
      "DPO缺点：没有显式reward信号，难以诊断哪里出了问题",
      "新趋势：SimPO/ORPO等直接用reference-free偏好优化，更简单",
      "你的结论：修复所有问题后DPO仅+0.6pp，工具调用场景不推荐"
    ],
    "bullets_ja": [
      "RLHF：Reward Modelを学習 → PPOでpolicyを最適化。利点：柔軟で反復可能。欠点：<span class=\"highlight\">学習が不安定、4つのモデルを同時に必要</span>",
      "DPO：loss = -log σ(β(log(π_θ(y_w)/π_ref(y_w)) - log(π_θ(y_l)/π_ref(y_l))))。rewardを暗黙的に学習、一段階の学習",
      "DPOの欠点：<span class=\"highlight\">データ品質に極めて敏感</span>（自身の経験：63%の選好ペアにバイアス → モデルが誤学習）",
      "DPOの欠点：明示的なrewardシグナルがなく、問題箇所の診断が困難",
      "新たなトレンド：SimPO/ORPOなどreference-freeの選好最適化を直接使用、よりシンプル",
      "自身の結論：全問題修正後もDPOはわずか+0.6pp、ツール呼び出しシナリオでは非推奨"
    ],
    "details": [
      {
        "term": "DPO Loss",
        "explain": "<p>DPO 的 loss 公式：L = -log sigma(beta * (log pi_theta(y_w|x)/pi_ref(y_w|x) - log pi_theta(y_l|x)/pi_ref(y_l|x)))。</p><p>直觉理解：括号里是<span class=\"key-point\">\"好回答相对于参考模型的进步\"减去\"坏回答相对于参考模型的进步\"</span>。优化目标 = 让好回答的概率涨幅 > 坏回答的概率涨幅。</p><div class=\"analogy\">类比：两匹马赛跑，你不是要让好马跑得快（可能导致瞎跑），而是让好马<em>比差马领先更多</em>。pi_ref 是起跑线，确保偏离不要太远（beta 控制缰绳松紧）。</div>"
      },
      {
        "term": "Reward Model",
        "explain": "<p>RLHF 中的 Reward Model 是一个<span class=\"key-point\">给回答打分的模型</span>。训练数据：人类标注的偏好对 (y_win, y_lose)，用 Bradley-Terry 模型训练。</p><div class=\"formula\">输入: (prompt, response)\n输出: 标量分数 r(x, y)\n训练: 最大化 P(y_w > y_l) = sigma(r(y_w) - r(y_l))</div><p><span class=\"key-point\">DPO 的突破</span>：证明了最优 reward 可以用 policy 的对数概率比直接表达，不需要单独训练 RM。</p>"
      },
      {
        "term": "beta (KL 惩罚系数)",
        "explain": "<p>beta 控制新模型<span class=\"key-point\">偏离参考模型的程度</span>。beta 大 → 保守更新，不敢离 ref 太远；beta 小 → 激进更新，可能跑偏。</p><div class=\"formula\">beta=0.1 → 激进，偏好学得快但可能过拟合\nbeta=0.5 → 保守，稳定但学习慢\n常用 beta=0.1~0.3</div><p><span class=\"key-point\">本质</span>：beta 是 KL 散度约束的拉格朗日乘子，防止 reward hacking（模型钻奖励漏洞）。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "DPO Loss",
        "explain": "<p>DPOのloss式：L = -log sigma(beta * (log pi_theta(y_w|x)/pi_ref(y_w|x) - log pi_theta(y_l|x)/pi_ref(y_l|x)))。</p><p>直感的理解：括弧内は<span class=\"key-point\">「良い回答の参照モデルからの進歩」から「悪い回答の参照モデルからの進歩」を引いたもの</span>。最適化目標 = 良い回答の確率上昇幅 > 悪い回答の確率上昇幅にする。</p><div class=\"analogy\">例え：2頭の馬のレースで、良い馬を速くする（暴走する恐れ）のではなく、良い馬が悪い馬<em>よりリードを広げる</em>ようにする。pi_refはスタートラインで、大きく逸脱しないようにする（betaが手綱の緩さを制御）。</div>"
      },
      {
        "term": "Reward Model",
        "explain": "<p>RLHFのReward Modelは<span class=\"key-point\">回答にスコアを付けるモデル</span>。学習データ：人間がアノテーションした選好ペア(y_win, y_lose)、Bradley-Terryモデルで学習。</p><div class=\"formula\">入力: (prompt, response)\n出力: スカラースコア r(x, y)\n学習: P(y_w > y_l) = sigma(r(y_w) - r(y_l)) を最大化</div><p><span class=\"key-point\">DPOのブレークスルー</span>：最適rewardがpolicyの対数確率比で直接表現できることを証明し、RMの個別学習が不要に。</p>"
      },
      {
        "term": "beta（KLペナルティ係数）",
        "explain": "<p>betaは新モデルが<span class=\"key-point\">参照モデルからどれだけ離れるか</span>を制御。beta大 → 保守的更新、refから離れない；beta小 → 積極的更新、逸脱の可能性。</p><div class=\"formula\">beta=0.1 → 積極的、選好の学習が速いが過学習リスク\nbeta=0.5 → 保守的、安定だが学習が遅い\n一般的に beta=0.1~0.3</div><p><span class=\"key-point\">本質</span>：betaはKLダイバージェンス制約のラグランジュ乗数で、reward hacking（モデルが報酬の抜け穴を利用）を防止。</p>"
      }
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "l14",
    "cat": "LLM基础",
    "q": "Embedding 原理与应用",
    "q_ja": "Embeddingの原理と応用",
    "bullets": [
      "将离散token/句子映射到连续向量空间，语义相近→向量距离近",
      "Word2Vec(2013)：Skip-gram/CBOW，学习词级别embedding",
      "句向量：平均池化 / [CLS] token / 对比学习(SimCSE, sentence-transformers)",
      "bge-m3：多语言多粒度多功能embedding模型，<span class=\"highlight\">支持Dense+Sparse+ColBERT三种检索</span>",
      "Embedding微调：用三元组(query,positive,negative)+对比Loss，你的经验：Recall@1 +16.4pp"
    ],
    "bullets_ja": [
      "離散的なtoken/文をベクトル空間にマッピング、意味が近い → ベクトル距離が近い",
      "Word2Vec(2013)：Skip-gram/CBOW、単語レベルのEmbeddingを学習",
      "文ベクトル：平均プーリング / [CLS]トークン / 対照学習(SimCSE, sentence-transformers)",
      "bge-m3：多言語・多粒度・多機能なEmbeddingモデル、<span class=\"highlight\">Dense+Sparse+ColBERTの3種類の検索をサポート</span>",
      "Embeddingファインチューニング：三つ組(query,positive,negative)+対照Lossを使用、自身の経験：Recall@1 +16.4pp"
    ],
    "details": [
      {
        "term": "Embedding",
        "explain": "<p>把离散的 token（\"猫\"=ID 4523）映射为<span class=\"key-point\">连续向量</span>（[0.12, -0.34, ...]）。语义相近的词/句子在向量空间中距离也近。</p><div class=\"analogy\">类比：把城市名（离散）放到真实地图上（连续坐标）。\"东京\"和\"大阪\"在地图上靠近，和\"纽约\"很远——同理，\"国王\"和\"女王\"的 embedding 向量也很接近。</div><div class=\"formula\">离散空间        向量空间(d=3简化)\n\"猫\" (ID=42)  → [0.8, 0.1, 0.6]\n\"狗\" (ID=17)  → [0.7, 0.2, 0.5]  ← 近！\n\"汽车\"(ID=99) → [-0.3, 0.9, 0.1] ← 远</div>"
      },
      {
        "term": "对比学习",
        "explain": "<p>训练 embedding 的核心方法：让<span class=\"key-point\">相似样本的向量靠近</span>（正例对），<span class=\"key-point\">不相似样本的向量远离</span>（负例对）。</p><div class=\"formula\">三元组: (query, positive, negative)\n\nLoss = max(0, d(q,pos) - d(q,neg) + margin)\n\n目标：q和pos的距离 < q和neg的距离</div><p>代表方法：<span class=\"key-point\">SimCSE</span> 用 dropout 做数据增强（同一句子过两次 dropout = 正例对），简单有效。InfoNCE Loss 是另一种常用的对比损失函数。</p>"
      },
      {
        "term": "ColBERT",
        "explain": "<p>传统 Dense Retrieval：把整个文档压缩成<span class=\"key-point\">一个向量</span>，信息损失大。ColBERT 保留<span class=\"key-point\">每个 token 的向量</span>，用 MaxSim 计算相关性。</p><div class=\"formula\">Dense:  doc → [单个向量] → cos_sim\nColBERT: doc → [tok1, tok2, ..., tokN]\n\nMaxSim = Sum max_j sim(q_i, d_j)\n即：query的每个token找文档中最匹配的token</div><p><span class=\"key-point\">优点</span>：精度高（保留细粒度信息）。<span class=\"key-point\">缺点</span>：存储大（每个 token 一个向量）。bge-m3 同时支持三种模式。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "Embedding",
        "explain": "<p>離散的なtoken（\"猫\"=ID 4523）を<span class=\"key-point\">連続ベクトル</span>（[0.12, -0.34, ...]）にマッピング。意味が近い語/文はベクトル空間でも距離が近い。</p><div class=\"analogy\">例え：都市名（離散）を実際の地図上（連続座標）に配置する。\"東京\"と\"大阪\"は地図上で近く、\"ニューヨーク\"とは遠い——同様に\"王\"と\"女王\"のembeddingベクトルも近接する。</div><div class=\"formula\">離散空間         ベクトル空間(d=3簡略化)\n\"猫\" (ID=42)  → [0.8, 0.1, 0.6]\n\"犬\" (ID=17)  → [0.7, 0.2, 0.5]  ← 近い！\n\"車\" (ID=99)  → [-0.3, 0.9, 0.1] ← 遠い</div>"
      },
      {
        "term": "対照学習（Contrastive Learning）",
        "explain": "<p>Embedding学習の核心手法：<span class=\"key-point\">類似サンプルのベクトルを近づけ</span>（正例ペア）、<span class=\"key-point\">非類似サンプルのベクトルを遠ざける</span>（負例ペア）。</p><div class=\"formula\">三つ組: (query, positive, negative)\n\nLoss = max(0, d(q,pos) - d(q,neg) + margin)\n\n目標：qとposの距離 < qとnegの距離</div><p>代表手法：<span class=\"key-point\">SimCSE</span>はdropoutでデータ拡張（同一文を2回dropoutに通す = 正例ペア）、シンプルかつ効果的。InfoNCE Lossも広く使われる対照損失関数。</p>"
      },
      {
        "term": "ColBERT",
        "explain": "<p>従来のDense Retrieval：文書全体を<span class=\"key-point\">1つのベクトル</span>に圧縮し、情報損失が大きい。ColBERTは<span class=\"key-point\">各tokenのベクトルを保持</span>し、MaxSimで関連性を計算。</p><div class=\"formula\">Dense:  doc → [単一ベクトル] → cos_sim\nColBERT: doc → [tok1, tok2, ..., tokN]\n\nMaxSim = Sum max_j sim(q_i, d_j)\n即：queryの各tokenが文書中で最もマッチするtokenを探す</div><p><span class=\"key-point\">利点</span>：精度が高い（細粒度情報を保持）。<span class=\"key-point\">欠点</span>：ストレージが大きい（各tokenに1ベクトル）。bge-m3は3モードを同時サポート。</p>"
      }
    ],
    "group": "基础",
    "lv": 1
  },
  {
    "id": "l15",
    "cat": "LLM基础",
    "q": "\"Attention is All You Need\" 论文关键创新",
    "q_ja": "「Attention is All You Need」論文の主要な革新点",
    "bullets": [
      "完全抛弃RNN/CNN，<span class=\"highlight\">纯注意力机制</span>实现序列建模 → 并行化训练成为可能",
      "Multi-Head Attention：多个注意力头并行关注不同子空间信息，concat后线性映射",
      "Positional Encoding：正弦/余弦函数注入位置信息（解决Attention无位置感知的问题）",
      "Encoder-Decoder架构：Encoder用双向Self-Attention，Decoder用带Mask的因果Attention + Cross-Attention",
      "Label Smoothing + Warmup学习率策略：稳定训练的工程技巧",
      "影响：<span class=\"highlight\">奠定了所有后续LLM的架构基础</span>，GPT/BERT/T5等均为其变体"
    ],
    "bullets_ja": [
      "RNN/CNNを完全に廃止、<span class=\"highlight\">純粋なAttention機構</span>でシーケンスモデリングを実現 → 並列学習が可能に",
      "Multi-Head Attention：複数のAttentionヘッドが異なる部分空間の情報に並列で注目、concatして線形写像",
      "Positional Encoding：正弦/余弦関数で位置情報を注入（Attentionの位置認識がない問題を解決）",
      "Encoder-Decoder構造：Encoderは双方向Self-Attention、Decoderはマスク付き因果Attention + Cross-Attention",
      "Label Smoothing + Warmup学習率戦略：学習を安定化するエンジニアリングテクニック",
      "影響：<span class=\"highlight\">後続の全LLMのアーキテクチャ基盤を確立</span>、GPT/BERT/T5等はすべてその変種"
    ],
    "details": [
      {
        "term": "Cross-Attention",
        "explain": "<p>Self-Attention 中 Q、K、V 都来自同一序列。Cross-Attention 则是 <span class=\"key-point\">Q 来自 Decoder，K 和 V 来自 Encoder</span>。这让 Decoder 能\"查阅\"Encoder 的输出。</p><div class=\"analogy\">类比：你在写翻译（Decoder），遇到不确定的地方会<em>回头看原文</em>（Encoder 输出）。Self-Attention 是你在自己写的译文内部检查连贯性，Cross-Attention 是你参考原文。</div><div class=\"formula\">Self-Attention:  Q=X, K=X, V=X (自己看自己)\nCross-Attention: Q=Decoder, K=Encoder, V=Encoder\n                 (Decoder 查询 Encoder)</div>"
      },
      {
        "term": "Causal Mask",
        "explain": "<p>Decoder 的 Self-Attention 中，位置 i 的 token <span class=\"key-point\">只能看到位置 &lt;=i 的 token</span>，不能看到未来。通过在 attention score 矩阵的上三角区域填入 -inf 实现。</p><div class=\"formula\">Attention Mask（4个token）:\n  t1 t2 t3 t4\nt1 OK  x  x  x\nt2 OK OK  x  x\nt3 OK OK OK  x\nt4 OK OK OK OK\nx = -inf (softmax后→0)</div><p>这是自回归生成的基础：训练时用 mask 模拟逐 token 生成，和推理时的行为<span class=\"key-point\">保持一致</span>。</p>"
      },
      {
        "term": "Label Smoothing",
        "explain": "<p>标准 one-hot 标签：正确 token 概率=1，其他=0。Label Smoothing 把正确 token 的概率降到 <span class=\"key-point\">1-epsilon</span>（如 0.9），剩余 epsilon 均匀分给其他 token。</p><div class=\"formula\">标准:     [0, 0, 1, 0, 0] (过于自信)\nSmoothed: [0.025, 0.025, 0.9, 0.025, 0.025]\n\nepsilon=0.1 → 正确标签=0.9，其他各=(0.1/V)</div><p><span class=\"key-point\">效果</span>：防止模型过于自信（输出分布太尖锐），提高泛化能力。原始 Transformer 论文用 epsilon=0.1。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "Cross-Attention",
        "explain": "<p>Self-AttentionではQ、K、Vが全て同じシーケンスから来る。Cross-Attentionでは<span class=\"key-point\">QはDecoderから、KとVはEncoderから</span>。これによりDecoderがEncoderの出力を「参照」できる。</p><div class=\"analogy\">例え：翻訳を書いている（Decoder）時、不確かな箇所で<em>原文を見返す</em>（Encoderの出力）。Self-Attentionは自分の訳文内の一貫性チェック、Cross-Attentionは原文の参照。</div><div class=\"formula\">Self-Attention:  Q=X, K=X, V=X (自己参照)\nCross-Attention: Q=Decoder, K=Encoder, V=Encoder\n                 (DecoderがEncoderに問い合わせ)</div>"
      },
      {
        "term": "Causal Mask",
        "explain": "<p>DecoderのSelf-Attentionで、位置iのtokenは<span class=\"key-point\">位置&lt;=iのtokenのみ参照可能</span>で、未来は見えない。attention scoreの上三角領域に-infを埋めて実現。</p><div class=\"formula\">Attention Mask（4トークン）:\n  t1 t2 t3 t4\nt1 OK  x  x  x\nt2 OK OK  x  x\nt3 OK OK OK  x\nt4 OK OK OK OK\nx = -inf（softmax後→0）</div><p>自己回帰生成の基盤：学習時にmaskでtoken単位の生成をシミュレートし、推論時の動作と<span class=\"key-point\">一致させる</span>。</p>"
      },
      {
        "term": "Label Smoothing",
        "explain": "<p>標準のone-hotラベル：正解tokenの確率=1、他=0。Label Smoothingは正解tokenの確率を<span class=\"key-point\">1-epsilon</span>（例：0.9）に下げ、残りのepsilonを他のtokenに均等配分。</p><div class=\"formula\">標準:     [0, 0, 1, 0, 0]（過信）\nSmoothed: [0.025, 0.025, 0.9, 0.025, 0.025]\n\nepsilon=0.1 → 正解ラベル=0.9、他各=(0.1/V)</div><p><span class=\"key-point\">効果</span>：モデルの過信（出力分布が鋭すぎる）を防ぎ、汎化能力を向上。Transformer原論文ではepsilon=0.1を使用。</p>"
      }
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "l16",
    "cat": "LLM基础",
    "q": "Pre-training Objectives：CLM vs MLM vs Prefix LM",
    "q_ja": "事前学習の目的関数：CLM vs MLM vs Prefix LM",
    "bullets": [
      "<span class=\"highlight\">CLM</span>(Causal LM)：从左到右预测下一个token，Decoder-only架构 → GPT系列、LLaMA、Qwen",
      "<span class=\"highlight\">MLM</span>(Masked LM)：随机遮蔽15%的token并预测它们，双向上下文 → BERT、RoBERTa",
      "<span class=\"highlight\">Prefix LM</span>：prefix部分双向attention，生成部分因果attention → T5、GLM",
      "CLM最适合生成任务（与推理方式一致），MLM最适合理解/分类任务",
      "Seq2Seq预训练(T5)：将所有任务统一为\"text-to-text\"格式，Encoder-Decoder架构",
      "趋势：<span class=\"highlight\">Decoder-only CLM成为主流</span>，因为scaling效果最好且通用性强"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">CLM</span>(Causal LM)：左から右へ次のtokenを予測、Decoder-onlyアーキテクチャ → GPTシリーズ、LLaMA、Qwen",
      "<span class=\"highlight\">MLM</span>(Masked LM)：ランダムに15%のtokenをマスクして予測、双方向コンテキスト → BERT、RoBERTa",
      "<span class=\"highlight\">Prefix LM</span>：prefix部分は双方向Attention、生成部分は因果Attention → T5、GLM",
      "CLMは生成タスクに最適（推論方式と一致）、MLMは理解/分類タスクに最適",
      "Seq2Seq事前学習(T5)：全タスクを「text-to-text」形式に統一、Encoder-Decoderアーキテクチャ",
      "トレンド：<span class=\"highlight\">Decoder-only CLMが主流に</span>、スケーリング効果が最も良く汎用性が高いため"
    ],
    "details": [
      {
        "term": "CLM (Causal Language Model)",
        "explain": "<p>从左到右，<span class=\"key-point\">根据前面所有 token 预测下一个 token</span>。训练目标：最大化 P(x_t | x_1, ..., x_{t-1})。</p><div class=\"formula\">输入: \"今天 天气 真\"\n目标: 预测 → \"好\"\n\n每个位置只能看左边：\n[今天] → 预测 [天气]\n[今天 天气] → 预测 [真]\n[今天 天气 真] → 预测 [好]</div><p><span class=\"key-point\">和推理一致</span>：训练时用 causal mask 模拟逐 token 生成，所以生成质量好。GPT、LLaMA、Qwen 都用 CLM。</p>"
      },
      {
        "term": "MLM (Masked Language Model)",
        "explain": "<p>随机遮蔽输入中 15% 的 token，模型需要<span class=\"key-point\">利用双向上下文</span>来预测被遮蔽的 token。</p><div class=\"formula\">输入: \"今天 [MASK] 真好\"\n目标: 预测 [MASK] → \"天气\"\n\n可以同时看左右：\n← \"今天\" + \"真好\" → 推断 \"天气\"</div><p><span class=\"key-point\">擅长理解</span>（分类、NER、问答抽取），但<span class=\"key-point\">不适合生成</span>——因为推理时没有 [MASK] token，训练和推理方式不一致。BERT、RoBERTa 使用 MLM。</p>"
      },
      {
        "term": "Prefix LM",
        "explain": "<p>混合方案：<span class=\"key-point\">prefix 部分</span>（如输入/问题）使用双向 attention，<span class=\"key-point\">生成部分</span>使用因果 attention。兼顾理解和生成。</p><div class=\"formula\">      Prefix（双向）       生成（因果）\n[指令: 翻译这句话]  [The weather is ...]\n  双向attention        单向生成\n  充分理解指令          逐token输出</div><p>T5 和 GLM 采用这种方式。但实践中<span class=\"key-point\">Decoder-only CLM 成为主流</span>，因为统一架构更简单且 scaling 效果更好。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "CLM (Causal Language Model)",
        "explain": "<p>左から右へ、<span class=\"key-point\">前の全tokenに基づいて次のtokenを予測</span>。学習目標：P(x_t | x_1, ..., x_{t-1}) の最大化。</p><div class=\"formula\">入力: \"今日 天気 本当に\"\n目標: 予測 → \"良い\"\n\n各位置は左側のみ参照可能：\n[今日] → [天気] を予測\n[今日 天気] → [本当に] を予測\n[今日 天気 本当に] → [良い] を予測</div><p><span class=\"key-point\">推論と一致</span>：学習時にcausal maskでtoken単位の生成をシミュレートするため、生成品質が高い。GPT、LLaMA、QwenはCLMを使用。</p>"
      },
      {
        "term": "MLM (Masked Language Model)",
        "explain": "<p>入力の15%のtokenをランダムにマスクし、モデルが<span class=\"key-point\">双方向コンテキスト</span>を利用してマスクされたtokenを予測。</p><div class=\"formula\">入力: \"今日 [MASK] 本当に良い\"\n目標: [MASK] → \"天気\" を予測\n\n左右を同時に参照可能：\n← \"今日\" + \"本当に良い\" → \"天気\" を推測</div><p><span class=\"key-point\">理解が得意</span>（分類、NER、QA抽出）だが、<span class=\"key-point\">生成には不向き</span>——推論時に[MASK]トークンがなく、学習と推論の方式が不一致。BERT、RoBERTaがMLMを使用。</p>"
      },
      {
        "term": "Prefix LM",
        "explain": "<p>ハイブリッド方式：<span class=\"key-point\">prefix部分</span>（入力/質問）は双方向attention、<span class=\"key-point\">生成部分</span>は因果attention。理解と生成を両立。</p><div class=\"formula\">      Prefix（双方向）       生成（因果）\n[指示: この文を翻訳]  [The weather is ...]\n  双方向attention        単方向生成\n  指示を十分に理解       token単位で出力</div><p>T5とGLMがこの方式を採用。しかし実践では<span class=\"key-point\">Decoder-only CLMが主流</span>に、統一アーキテクチャがシンプルでscaling効果も優れているため。</p>"
      }
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "l17",
    "cat": "LLM基础",
    "q": "Instruction Tuning vs RLHF vs DPO 详细对比",
    "q_ja": "Instruction Tuning vs RLHF vs DPO 詳細比較",
    "bullets": [
      "<span class=\"highlight\">Instruction Tuning</span>：用(指令, 回答)对做SFT，教模型遵循指令。代表：FLAN、Alpaca",
      "RLHF：人类标注偏好排序→训练Reward Model→PPO优化。需要<span class=\"highlight\">4个模型</span>：policy/ref/reward/value",
      "DPO：将RLHF的RL步骤转化为分类问题，直接从偏好对学习。只需<span class=\"highlight\">2个模型</span>：policy/ref",
      "效果对比：Instruction Tuning解决\"能力\"问题，RLHF/DPO解决\"对齐\"问题",
      "工程复杂度：IT < DPO << RLHF。数据需求：IT需要高质量指令对，DPO/RLHF需要偏好对",
      "实践选择：大部分场景SFT足够；需要精细控制回答风格/安全性时才用RLHF/DPO"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">Instruction Tuning</span>：（指示, 回答）ペアでSFTを行い、モデルに指示に従うことを教える。代表：FLAN、Alpaca",
      "RLHF：人間が選好ランキングをアノテーション → Reward Modelを学習 → PPOで最適化。<span class=\"highlight\">4つのモデル</span>が必要：policy/ref/reward/value",
      "DPO：RLHFのRLステップを分類問題に変換し、選好ペアから直接学習。<span class=\"highlight\">2つのモデル</span>のみ必要：policy/ref",
      "効果の比較：Instruction Tuningは「能力」の問題を解決、RLHF/DPOは「アライメント」の問題を解決",
      "エンジニアリングの複雑さ：IT < DPO << RLHF。データ要件：ITは高品質な指示ペア、DPO/RLHFは選好ペアが必要",
      "実践での選択：大半のシナリオではSFTで十分；回答スタイル/安全性の精密制御が必要な場合のみRLHF/DPO"
    ],
    "details": [
      {
        "term": "PPO (Proximal Policy Optimization)",
        "explain": "<p>RLHF 中最常用的 RL 算法。核心思想：<span class=\"key-point\">每次更新不要走太远</span>，用 clip 函数限制策略变化幅度。</p><div class=\"formula\">ratio = pi_new(a|s) / pi_old(a|s)\nL = min(ratio * A, clip(ratio, 1-eps, 1+eps) * A)\n\nA>0(好动作): ratio最多涨到1+eps就截停\nA<0(坏动作): ratio最多降到1-eps就截停</div><div class=\"analogy\">类比：走钢丝时每步最多迈 20cm（eps），即使前方看起来很安全也不大跨步——防止策略崩溃。</div><p>RLHF 需要<span class=\"key-point\">4个模型同时在线</span>：policy、reference、reward、value，显存和工程开销巨大。</p>"
      },
      {
        "term": "Instruction Tuning",
        "explain": "<p>用<span class=\"key-point\">(指令, 回答)对</span>做监督微调，教模型\"如何有用地回答问题\"。本质上就是 SFT，但强调数据格式是指令形式。</p><div class=\"formula\">训练数据示例：\n指令: \"用简单语言解释量子力学\"\n回答: \"量子力学研究的是...\"\n\n效果：基座模型知道知识但不会对话\n      → IT后学会按指令格式回答</div><p>代表工作：FLAN（1800+任务混合训练）、Alpaca（52K 条 GPT 生成数据）。<span class=\"key-point\">数据质量 > 数量</span>——LIMA 用 1000 条精选数据也能效果很好。</p>"
      },
      {
        "term": "RLHF 的 4 个模型",
        "explain": "<p>RLHF 训练时需要同时加载<span class=\"key-point\">4 个模型</span>到显存中：</p><div class=\"formula\">1. Policy Model (正在训练的模型)\n2. Reference Model (冻结的初始模型, 算KL散度)\n3. Reward Model (给回答打分)\n4. Value Model (估计状态价值, PPO需要)\n\n7B 模型 x 4 = 28B 参数同时在显存\n→ 至少需要 4xA100-80G</div><p>这就是为什么<span class=\"key-point\"> DPO 更受欢迎</span>：只需要 Policy + Reference 两个模型，工程复杂度和显存需求大幅降低。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "PPO (Proximal Policy Optimization)",
        "explain": "<p>RLHFで最も使われるRLアルゴリズム。核心：<span class=\"key-point\">毎回の更新で大きく離れない</span>よう、clip関数で方策の変化幅を制限。</p><div class=\"formula\">ratio = pi_new(a|s) / pi_old(a|s)\nL = min(ratio * A, clip(ratio, 1-eps, 1+eps) * A)\n\nA>0（良い行動）: ratioは1+epsまでで切り捨て\nA<0（悪い行動）: ratioは1-epsまでで切り捨て</div><div class=\"analogy\">例え：綱渡りで毎歩最大20cm（eps）だけ進む——前方が安全に見えても大股で歩かない。方策の崩壊を防止。</div><p>RLHFは<span class=\"key-point\">4つのモデルを同時にロード</span>：policy、reference、reward、value。VRAM消費とエンジニアリングコストが膨大。</p>"
      },
      {
        "term": "Instruction Tuning",
        "explain": "<p><span class=\"key-point\">(指示, 回答)ペア</span>で教師あり微調整を行い、モデルに「有用な回答方法」を教える。本質はSFTだが、データ形式が指示形式であることを強調。</p><div class=\"formula\">学習データ例：\n指示: \"量子力学を簡単に説明して\"\n回答: \"量子力学は...を研究する\"\n\n効果：ベースモデルは知識はあるが対話できない\n      → IT後に指示に沿った回答が可能に</div><p>代表的研究：FLAN（1800以上のタスクを混合学習）、Alpaca（52K件のGPT生成データ）。<span class=\"key-point\">データ品質 > 量</span>——LIMAは1000件の厳選データでも良好な性能。</p>"
      },
      {
        "term": "RLHFの4つのモデル",
        "explain": "<p>RLHF学習時に<span class=\"key-point\">4つのモデル</span>を同時にVRAMにロードする必要がある：</p><div class=\"formula\">1. Policy Model（学習中のモデル）\n2. Reference Model（凍結した初期モデル、KLダイバージェンス計算用）\n3. Reward Model（回答にスコア付け）\n4. Value Model（状態価値の推定、PPOに必要）\n\n7Bモデル x 4 = 28Bパラメータを同時にVRAMに\n→ 最低でも4xA100-80Gが必要</div><p>これが<span class=\"key-point\">DPOの人気の理由</span>：PolicyとReferenceの2モデルのみで、エンジニアリングの複雑さとVRAM要件が大幅に削減。</p>"
      }
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "l18",
    "cat": "LLM基础",
    "q": "LLM推理优化：Speculative Decoding与Continuous Batching",
    "q_ja": "LLM推論最適化：Speculative DecodingとContinuous Batching",
    "bullets": [
      "<span class=\"highlight\">Speculative Decoding</span>：小模型(draft)快速生成候选tokens → 大模型(target)并行验证 → 命中则接受",
      "原理：验证N个token的成本 ≈ 生成1个token（因为可以并行），加速2-3x且<span class=\"highlight\">输出分布不变</span>",
      "<span class=\"highlight\">Continuous Batching</span>：请求完成后立即插入新请求，不等整个batch完成 → 提高GPU利用率",
      "对比Static Batching：等所有请求完成再处理下一批 → 短请求等长请求，GPU空闲浪费",
      "vLLM/TGI/SGLang等框架都实现了Continuous Batching + Paged Attention组合",
      "其他优化：Prefix Caching（复用相同system prompt的KV Cache）/ Tensor Parallelism（多卡切分）"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">Speculative Decoding</span>：小モデル（draft）が候補tokensを高速生成 → 大モデル（target）が並列検証 → ヒットすれば採用",
      "原理：N個のtokenの検証コスト ≈ 1個のtokenの生成（並列実行可能なため）、2-3倍高速化かつ<span class=\"highlight\">出力分布は不変</span>",
      "<span class=\"highlight\">Continuous Batching</span>：リクエスト完了後に即座に新リクエストを挿入、batch全体の完了を待たない → GPU利用率を向上",
      "Static Batchingとの比較：全リクエスト完了を待ってから次のバッチを処理 → 短いリクエストが長いリクエストを待ち、GPUが遊休状態に",
      "vLLM/TGI/SGLangなどのフレームワークがContinuous Batching + Paged Attentionの組み合わせを実装",
      "その他の最適化：Prefix Caching（同じsystem promptのKV Cacheを再利用）/ Tensor Parallelism（マルチGPUで分割）"
    ],
    "details": [
      {
        "term": "Speculative Decoding",
        "explain": "<p>核心洞察：大模型<span class=\"key-point\">验证 N 个 token 的成本 ≈ 生成 1 个 token</span>（因为可以并行前向传播）。所以用小模型快速\"猜\"，大模型批量\"验\"。</p><div class=\"formula\">Draft模型(1B): 快速生成 5 个候选token\n  → [the, cat, sat, on, mat]\n\nTarget模型(70B): 一次前向传播验证全部5个\n  → [OK, OK, OK, X(应该是upon), -]\n  → 接受前3个, 从upon重新开始</div><div class=\"analogy\">类比：实习生（小模型）先拟一份报告草稿，主管（大模型）一口气审阅——审阅5页和审阅1页的时间差不多。命中率高时加速 2-3x，且<span class=\"key-point\">输出分布和大模型完全一致</span>。</div>"
      },
      {
        "term": "Continuous Batching",
        "explain": "<p>传统 Static Batching：一批请求必须<span class=\"key-point\">全部完成</span>才能处理下一批。短请求生成完毕后 GPU 空闲等待长请求。</p><div class=\"formula\">Static Batching:\n请求A: [====]__________ 完成后空等\n请求B: [==============] 最慢的决定batch时间\n请求C: [==]____________ 完成后空等\n\nContinuous Batching:\n请求A: [====] → 请求D插入 [======]\n请求B: [==============]\n请求C: [==] → 请求E插入 [========]</div><p><span class=\"key-point\">关键</span>：请求完成后立即\"退场\"，新请求立即\"插队\"填补空位，GPU 利用率大幅提升。vLLM、TGI 都采用此策略。</p>"
      },
      {
        "term": "Prefix Caching",
        "explain": "<p>多个请求共享相同的 system prompt 时，<span class=\"key-point\">复用已计算好的 KV Cache</span>，不重复计算。</p><div class=\"formula\">请求1: [system prompt | 用户A的问题]\n请求2: [system prompt | 用户B的问题]\n请求3: [system prompt | 用户C的问题]\n\nsystem prompt 的 KV Cache 只算一次\n→ 3个请求共享，节省大量计算</div><p>在 API 服务场景（同一个 system prompt 服务千万用户）效果显著。SGLang 的 RadixAttention 用<span class=\"key-point\">前缀树</span>高效管理共享前缀。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "Speculative Decoding",
        "explain": "<p>核心的洞察：大モデルの<span class=\"key-point\">N個のtokenの検証コスト ≈ 1個のtokenの生成コスト</span>（並列で順伝播可能なため）。小モデルで素早く「推測」し、大モデルでまとめて「検証」。</p><div class=\"formula\">Draftモデル(1B): 5個の候補tokenを高速生成\n  → [the, cat, sat, on, mat]\n\nTargetモデル(70B): 1回の順伝播で全5個を検証\n  → [OK, OK, OK, X(uponが正解), -]\n  → 前3個を採用、uponから再開</div><div class=\"analogy\">例え：インターン（小モデル）がまず報告書の草稿を作り、上司（大モデル）が一括レビュー——5ページのレビューも1ページのレビューもほぼ同じ時間。ヒット率が高い時は2-3倍高速化、かつ<span class=\"key-point\">出力分布は大モデルと完全に同一</span>。</div>"
      },
      {
        "term": "Continuous Batching",
        "explain": "<p>従来のStatic Batching：バッチ内の全リクエストが<span class=\"key-point\">全て完了</span>してから次のバッチを処理。短いリクエストは生成完了後にGPUが遊休状態で長いリクエストを待つ。</p><div class=\"formula\">Static Batching:\nリクエストA: [====]__________ 完了後に待機\nリクエストB: [==============] 最も遅いものがbatch時間を決定\nリクエストC: [==]____________ 完了後に待機\n\nContinuous Batching:\nリクエストA: [====] → リクエストDが挿入 [======]\nリクエストB: [==============]\nリクエストC: [==] → リクエストEが挿入 [========]</div><p><span class=\"key-point\">キーポイント</span>：完了したリクエストは即座に「退場」し、新リクエストが即座に「割り込み」で空きを埋め、GPU利用率が大幅向上。vLLM、TGIがこの戦略を採用。</p>"
      },
      {
        "term": "Prefix Caching",
        "explain": "<p>複数のリクエストが同じsystem promptを共有する場合、<span class=\"key-point\">計算済みのKV Cacheを再利用</span>し、重複計算を回避。</p><div class=\"formula\">リクエスト1: [system prompt | ユーザーAの質問]\nリクエスト2: [system prompt | ユーザーBの質問]\nリクエスト3: [system prompt | ユーザーCの質問]\n\nsystem promptのKV Cacheは1回のみ計算\n→ 3リクエストで共有、大量の計算を節約</div><p>APIサービスのシナリオ（同一system promptで数千万ユーザーに提供）で効果が顕著。SGLangのRadixAttentionは<span class=\"key-point\">プレフィックスツリー</span>で共有プレフィックスを効率的に管理。</p>"
      }
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "l19",
    "cat": "LLM基础",
    "q": "RAG（检索增强生成）原理与实现",
    "q_ja": "RAG（検索拡張生成）の原理と実装",
    "bullets": [
      "核心流程：Query → <span class=\"highlight\">Retrieve</span>(从知识库检索相关文档) → <span class=\"highlight\">Augment</span>(拼入prompt) → <span class=\"highlight\">Generate</span>(LLM生成)",
      "检索方式：Dense Retrieval(语义向量相似度) / Sparse(BM25关键词) / Hybrid(两者结合)",
      "向量数据库：FAISS / Milvus / Qdrant / Chroma，存储文档embedding并支持ANN检索",
      "Chunking策略：固定长度 / 按语义段落 / 递归分割。<span class=\"highlight\">chunk大小和overlap直接影响效果</span>",
      "进阶：Re-ranking(Cohere/bge-reranker)提升精度 / Multi-hop RAG处理复杂问题",
      "优势：知识可更新（不用重新训练）/ 减少幻觉 / 可追溯来源"
    ],
    "bullets_ja": [
      "コアフロー：Query → <span class=\"highlight\">Retrieve</span>（知識ベースから関連文書を検索） → <span class=\"highlight\">Augment</span>（プロンプトに組み込み） → <span class=\"highlight\">Generate</span>（LLMが生成）",
      "検索方式：Dense Retrieval（意味ベクトルの類似度）/ Sparse（BM25キーワード）/ Hybrid（両方の組み合わせ）",
      "ベクトルデータベース：FAISS / Milvus / Qdrant / Chroma、文書Embeddingを保存しANN検索をサポート",
      "Chunking戦略：固定長 / 意味的段落単位 / 再帰分割。<span class=\"highlight\">チャンクサイズとオーバーラップが直接効果に影響</span>",
      "発展：Re-ranking（Cohere/bge-reranker）で精度向上 / Multi-hop RAGで複雑な問題に対応",
      "利点：知識を更新可能（再学習不要）/ 幻覚を削減 / 情報源を追跡可能"
    ],
    "details": [
      {
        "term": "Dense vs Sparse Retrieval",
        "explain": "<p><span class=\"key-point\">Sparse（BM25）</span>：基于关键词匹配，统计 TF-IDF 风格的词频权重。优点是精确匹配强，缺点是不理解同义词。</p><p><span class=\"key-point\">Dense</span>：把 query 和文档都编码成向量，用余弦相似度检索。优点是理解语义，缺点是可能漏掉精确关键词。</p><div class=\"formula\">Query: \"如何减少LLM幻觉\"\n\nSparse: 匹配含\"幻觉\"\"LLM\"的文档 OK\n        但漏掉说\"hallucination\"的文档 X\n\nDense:  理解语义，能找到说\"confabulation\"\n        的文档 OK，但可能返回无关文档 X\n\nHybrid: 两者结合，互补短板 OK+OK</div>"
      },
      {
        "term": "Chunking 策略",
        "explain": "<p>文档太长不能直接编码（embedding 模型有长度限制），需要<span class=\"key-point\">切成小块</span>。切法直接影响检索质量。</p><div class=\"formula\">固定长度切分: 每512 token一块\n  → 简单但可能切断语义\n\n按段落/标题切分: 保持语义完整\n  → 块大小不均匀\n\n递归切分: 先按标题→段落→句子逐级细分\n  → 灵活但实现复杂\n\nOverlap: 相邻块重叠50-100 token\n  → 防止边界信息丢失</div><p><span class=\"key-point\">经验法则</span>：chunk 太大 → 包含无关信息，稀释语义；chunk 太小 → 缺少上下文，答不全。通常 256-1024 token。</p>"
      },
      {
        "term": "Re-ranking",
        "explain": "<p>初始检索返回 top-100 候选文档后，用一个<span class=\"key-point\">更精确的模型</span>对它们重新排序，只取 top-5 送给 LLM。</p><div class=\"formula\">Stage 1 - 粗检索 (快但粗糙):\nBM25/Dense → top-100 候选\n\nStage 2 - Re-ranking (慢但精准):\nCross-Encoder → 逐个计算 (query, doc) 的\n相关性分数 → 重排 → top-5</div><p>Cross-Encoder 为什么更准？因为它<span class=\"key-point\">同时看到 query 和 doc</span>（拼接后输入），而 Dense Retrieval 是分别编码后计算距离。代表：bge-reranker、Cohere Rerank。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "Dense vs Sparse Retrieval",
        "explain": "<p><span class=\"key-point\">Sparse（BM25）</span>：キーワードマッチングに基づき、TF-IDFスタイルの語頻重みを計算。精確マッチングに強いが同義語を理解できない。</p><p><span class=\"key-point\">Dense</span>：queryと文書を両方ベクトルにエンコードし、コサイン類似度で検索。意味を理解できるが、正確なキーワードを見落とす可能性。</p><div class=\"formula\">Query: \"LLMの幻覚を減らすには\"\n\nSparse: \"幻覚\"\"LLM\"を含む文書にマッチ OK\n        だが\"hallucination\"の文書を見落とす X\n\nDense:  意味を理解し、\"confabulation\"と\n        書かれた文書も発見 OK、だが無関係な文書も X\n\nHybrid: 両者を組み合わせ、弱点を補完 OK+OK</div>"
      },
      {
        "term": "Chunking戦略",
        "explain": "<p>文書が長すぎると直接エンコードできない（embeddingモデルに長さ制限あり）ため、<span class=\"key-point\">小さなチャンクに分割</span>する必要がある。分割方法が検索品質に直接影響。</p><div class=\"formula\">固定長分割: 512 tokenごと\n  → 簡単だが意味を分断する可能性\n\n段落/見出しで分割: 意味的完全性を保持\n  → チャンクサイズが不均一\n\n再帰分割: 見出し→段落→文の順で段階的に細分化\n  → 柔軟だが実装が複雑\n\nOverlap: 隣接チャンクが50-100 token重複\n  → 境界情報の喪失を防止</div><p><span class=\"key-point\">経験則</span>：チャンクが大きすぎ → 無関係情報が含まれ意味が薄まる；小さすぎ → 文脈不足で不完全な回答に。通常256-1024 token。</p>"
      },
      {
        "term": "Re-ranking",
        "explain": "<p>初期検索でtop-100の候補文書を取得後、<span class=\"key-point\">より精密なモデル</span>で再順位付けし、top-5のみをLLMに送る。</p><div class=\"formula\">Stage 1 - 粗い検索（速いが粗い）:\nBM25/Dense → top-100候補\n\nStage 2 - Re-ranking（遅いが正確）:\nCross-Encoder → (query, doc)ペアごとに\n関連性スコアを計算 → 再順位 → top-5</div><p>Cross-Encoderがなぜ精確か？<span class=\"key-point\">queryとdocを同時に参照</span>（連結して入力）するため。Dense Retrievalは別々にエンコードして距離計算。代表：bge-reranker、Cohere Rerank。</p>"
      }
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "l20",
    "cat": "LLM基础",
    "q": "Function Calling / Tool Use 机制",
    "q_ja": "Function Calling / Tool Useの仕組み",
    "bullets": [
      "原理：在system prompt中定义可用工具(JSON Schema) → LLM输出结构化的<span class=\"highlight\">函数调用请求</span> → 外部执行 → 结果返回LLM",
      "关键能力：模型需要判断<span class=\"highlight\">何时调用</span>（intent detection）和<span class=\"highlight\">参数提取</span>（slot filling）",
      "训练方式：SFT阶段加入大量function calling数据对，教模型输出特定格式",
      "Parallel Function Calling：一次输出多个独立的工具调用，减少往返次数",
      "与Agent的关系：Function Calling是Agent的\"手脚\"，ReAct/Plan-and-Execute是\"大脑\"",
      "你的经验：SiLR-Agent通过Tool Use连接仿真器，SFT 248条达到95%+ tool call准确率"
    ],
    "bullets_ja": [
      "原理：system promptで利用可能なツールをJSON Schemaで定義 → LLMが構造化された<span class=\"highlight\">関数呼び出しリクエスト</span>を出力 → 外部で実行 → 結果をLLMに返却",
      "重要な能力：モデルは<span class=\"highlight\">いつ呼び出すか</span>（意図検出）と<span class=\"highlight\">パラメータ抽出</span>（スロットフィリング）を判断する必要がある",
      "学習方法：SFTフェーズでFunction Callingのデータペアを大量に組み込み、特定フォーマットの出力を学習",
      "Parallel Function Calling：一度に複数の独立したツール呼び出しを出力し、往復回数を削減",
      "Agentとの関係：Function CallingはAgentの「手足」、ReAct/Plan-and-Executeは「頭脳」",
      "自身の経験：SiLR-AgentがTool Useでシミュレータと連携、SFT 248件で95%以上のtool call精度を達成"
    ],
    "details": [
      {
        "term": "Function Calling",
        "explain": "<p>让 LLM <span class=\"key-point\">输出结构化的函数调用</span>而不是纯文本。模型不执行函数，只生成\"我想调用 X 函数，参数是 Y\"的 JSON。</p><div class=\"formula\">System: 你可以调用 get_weather(city: str)\nUser: 东京今天天气怎么样？\n\nLLM输出（不是文字回答）：\n{\"function\": \"get_weather\",\n \"arguments\": {\"city\": \"Tokyo\"}}\n\n外部执行 → 返回结果 → LLM生成最终回答</div><div class=\"analogy\">类比：LLM 是一个会说话但没有手的大脑，Function Calling 给它一双手——它<em>说出</em>想做什么动作，由外部系统去<em>执行</em>。</div>"
      },
      {
        "term": "ReAct (Reasoning + Acting)",
        "explain": "<p>Agent 的经典框架：<span class=\"key-point\">交替进行推理（Thought）和行动（Action）</span>，根据观察结果决定下一步。</p><div class=\"formula\">Thought: 用户问东京天气，我需要查天气API\nAction:  get_weather(city=\"Tokyo\")\nObservation: 晴天，25度\nThought: 我已经得到了天气信息\nAction:  回答用户\n\n循环直到任务完成</div><p>与 Function Calling 的关系：Function Calling 是<span class=\"key-point\">单步工具调用</span>，ReAct 是<span class=\"key-point\">多步推理+调用的循环</span>。ReAct 用 Function Calling 作为 Action 的实现方式。</p>"
      },
      {
        "term": "Parallel Function Calling",
        "explain": "<p>模型一次输出<span class=\"key-point\">多个独立的工具调用</span>，而不是一次一个串行调用。减少往返次数，提高效率。</p><div class=\"formula\">串行（3次往返）：\n调用1: get_weather(\"Tokyo\") → 等结果\n调用2: get_weather(\"Osaka\") → 等结果\n调用3: get_weather(\"Kyoto\") → 等结果\n\n并行（1次往返）：\n一次输出3个调用 → 同时执行 → 一次返回\n速度提升约 3x</div><p><span class=\"key-point\">前提</span>：3个调用之间互不依赖。如果调用2依赖调用1的结果，就无法并行。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "Function Calling",
        "explain": "<p>LLMに純粋なテキストではなく<span class=\"key-point\">構造化された関数呼び出し</span>を出力させる。モデルは関数を実行せず、「X関数をパラメータYで呼びたい」というJSONを生成するだけ。</p><div class=\"formula\">System: get_weather(city: str)が利用可能\nUser: 東京の今日の天気は？\n\nLLM出力（テキスト回答ではない）：\n{\"function\": \"get_weather\",\n \"arguments\": {\"city\": \"Tokyo\"}}\n\n外部で実行 → 結果を返却 → LLMが最終回答を生成</div><div class=\"analogy\">例え：LLMは話せるが手のない頭脳で、Function Callingがその手を与える——やりたい動作を<em>言葉で伝え</em>、外部システムが<em>実行</em>する。</div>"
      },
      {
        "term": "ReAct (Reasoning + Acting)",
        "explain": "<p>Agentの古典的フレームワーク：<span class=\"key-point\">推論（Thought）と行動（Action）を交互に実行</span>し、観察結果に基づいて次のステップを決定。</p><div class=\"formula\">Thought: ユーザーが東京の天気を質問、天気APIを確認する必要あり\nAction:  get_weather(city=\"Tokyo\")\nObservation: 晴れ、25度\nThought: 天気情報を取得完了\nAction:  ユーザーに回答\n\nタスク完了までループ</div><p>Function Callingとの関係：Function Callingは<span class=\"key-point\">単一ステップのツール呼び出し</span>、ReActは<span class=\"key-point\">複数ステップの推論+呼び出しのループ</span>。ReActはActionの実装手段としてFunction Callingを使用。</p>"
      },
      {
        "term": "Parallel Function Calling",
        "explain": "<p>モデルが一度に<span class=\"key-point\">複数の独立したツール呼び出し</span>を出力し、1つずつ直列に呼び出す代わりに、往復回数を削減して効率化。</p><div class=\"formula\">直列（3回の往復）：\n呼び出し1: get_weather(\"Tokyo\") → 結果待ち\n呼び出し2: get_weather(\"Osaka\") → 結果待ち\n呼び出し3: get_weather(\"Kyoto\") → 結果待ち\n\n並列（1回の往復）：\n3つの呼び出しを一度に出力 → 同時実行 → 一括返却\n速度約3倍向上</div><p><span class=\"key-point\">前提</span>：3つの呼び出しが互いに独立であること。呼び出し2が呼び出し1の結果に依存する場合、並列化は不可能。</p>"
      }
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "l21",
    "cat": "LLM基础",
    "q": "Long Context处理技术",
    "q_ja": "Long Context処理技術",
    "bullets": [
      "核心挑战：标准Attention O(n²)复杂度 + KV Cache显存线性增长",
      "<span class=\"highlight\">Sliding Window Attention</span>：每个token只attend固定窗口内的token → O(n×w)，Mistral采用",
      "<span class=\"highlight\">StreamingLLM</span>：保留开头的\"attention sink\" tokens + 近期窗口，丢弃中间 → 支持无限长度推理",
      "<span class=\"highlight\">Ring Attention</span>：将长序列分段到多个设备，环形传递KV → 分布式处理超长上下文",
      "RoPE扩展：YaRN/Dynamic NTK Scaling调整RoPE基频，将训练长度外推到更长（如4K→128K）",
      "工程方案：GQA(Grouped Query Attention)减少KV头数 → 降低KV Cache占用（如Llama 2用GQA）"
    ],
    "bullets_ja": [
      "核心的課題：標準Attentionの計算量O(n²) + KV CacheのVRAMが線形増加",
      "<span class=\"highlight\">Sliding Window Attention</span>：各tokenは固定ウィンドウ内のtokenのみにattend → O(n×w)、Mistralが採用",
      "<span class=\"highlight\">StreamingLLM</span>：先頭の「attention sink」トークン + 直近ウィンドウを保持し中間を破棄 → 無限長の推論をサポート",
      "<span class=\"highlight\">Ring Attention</span>：長いシーケンスを複数デバイスに分割し、リング状にKVを伝達 → 分散処理で超長コンテキストに対応",
      "RoPE拡張：YaRN/Dynamic NTK ScalingでRoPEの基本周波数を調整し、学習長を超える長さに外挿（例：4K→128K）",
      "エンジニアリング方法：GQA（Grouped Query Attention）でKVヘッド数を削減 → KV Cache使用量を低減（例：Llama 2がGQAを使用）"
    ],
    "details": [
      {
        "term": "Sliding Window Attention",
        "explain": "<p>每个 token 只关注<span class=\"key-point\">固定窗口 w 内的邻近 token</span>，不看全部序列。复杂度从 O(n^2) 降到 O(n*w)。</p><div class=\"formula\">标准 Attention (全部看):\nt5 看 [t1, t2, t3, t4, t5] → O(n^2)\n\nSliding Window (w=3):\nt5 只看 [t3, t4, t5] → O(n*w)\n\n但多层叠加后，高层可以间接\"看到\"远处：\nLayer 1: t5看t3-t5, t3看t1-t3\nLayer 2: t5通过t3间接看到了t1</div><p><span class=\"key-point\">Mistral</span> 采用此方案。局部信息通过多层传递可以覆盖到全局，效率和效果的折中。</p>"
      },
      {
        "term": "GQA (Grouped Query Attention)",
        "explain": "<p>标准 MHA：每个 Q head 对应一个 K head 和 V head。<span class=\"key-point\">GQA：多个 Q head 共享一组 K/V head</span>，减少 KV Cache 大小。</p><div class=\"formula\">MHA:  32个Q head → 32个KV head (1:1)\nMQA:  32个Q head → 1个KV head  (32:1)\nGQA:  32个Q head → 8个KV head  (4:1)\n\nKV Cache 大小：MHA > GQA >> MQA\n推理质量：   MHA >= GQA >> MQA</div><p>GQA 是 MHA 和 MQA 的<span class=\"key-point\">折中方案</span>：KV Cache 减少到 1/4，推理质量几乎不降。Llama 2/3、Qwen 等主流模型都用 GQA。</p>"
      },
      {
        "term": "StreamingLLM",
        "explain": "<p>发现：前几个 token 的 attention score 异常高（<span class=\"key-point\">attention sink</span>），即使它们语义上不重要。丢弃它们会导致生成崩溃。</p><div class=\"formula\">保留策略：\n[sink tokens] + ... 丢弃 ... + [近期窗口]\n [前4个token]                   [最近1024个]\n\n总共只需要 ~1028 个 token 的 KV Cache\n→ 可以处理无限长度的流式输入</div><p><span class=\"key-point\">局限</span>：被丢弃的中间内容就\"忘\"了，不适合需要全局信息的任务（如总结长文档）。但适合流式对话、实时翻译等场景。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "Sliding Window Attention",
        "explain": "<p>各tokenが<span class=\"key-point\">固定ウィンドウw内の隣接tokenのみに注目</span>し、全シーケンスは見ない。計算量がO(n^2)からO(n*w)に削減。</p><div class=\"formula\">標準Attention（全部参照）:\nt5 は [t1, t2, t3, t4, t5] を参照 → O(n^2)\n\nSliding Window (w=3):\nt5 は [t3, t4, t5] のみ参照 → O(n*w)\n\n多層の積み重ねで、上位層は間接的に遠くを「参照」：\nLayer 1: t5はt3-t5を参照, t3はt1-t3を参照\nLayer 2: t5はt3を通じて間接的にt1を参照</div><p><span class=\"key-point\">Mistral</span>がこの方式を採用。局所情報が多層伝播でグローバルをカバーでき、効率と性能のトレードオフ。</p>"
      },
      {
        "term": "GQA (Grouped Query Attention)",
        "explain": "<p>標準MHA：各Q headに1つのK headとV headが対応。<span class=\"key-point\">GQA：複数のQ headが1組のK/V headを共有</span>し、KV Cacheサイズを削減。</p><div class=\"formula\">MHA:  32個のQ head → 32個のKV head (1:1)\nMQA:  32個のQ head → 1個のKV head  (32:1)\nGQA:  32個のQ head → 8個のKV head  (4:1)\n\nKV Cacheサイズ：MHA > GQA >> MQA\n推論品質：     MHA >= GQA >> MQA</div><p>GQAはMHAとMQAの<span class=\"key-point\">折衷案</span>：KV Cacheが1/4に減少し、推論品質はほぼ低下なし。Llama 2/3、Qwenなど主流モデルがGQAを使用。</p>"
      },
      {
        "term": "StreamingLLM",
        "explain": "<p>発見：最初の数トークンのattention scoreが異常に高い（<span class=\"key-point\">attention sink</span>）、意味的に重要でなくても。これらを破棄すると生成が崩壊する。</p><div class=\"formula\">保持戦略：\n[sink tokens] + ... 破棄 ... + [直近ウィンドウ]\n [最初の4トークン]              [直近1024個]\n\n合計約1028トークン分のKV Cacheのみ\n→ 無限長のストリーミング入力を処理可能</div><p><span class=\"key-point\">制約</span>：破棄された中間内容は「忘却」されるため、グローバル情報が必要なタスク（長文書の要約など）には不向き。ストリーミング対話やリアルタイム翻訳には適している。</p>"
      }
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "l22",
    "cat": "LLM基础",
    "q": "Safety与Alignment：Constitutional AI与红队测试",
    "q_ja": "SafetyとAlignment：Constitutional AIとレッドチームテスト",
    "bullets": [
      "<span class=\"highlight\">Constitutional AI</span>(Anthropic)：定义一组\"宪法原则\" → AI自我批评和修正 → 减少人工标注需求",
      "CAI流程：LLM生成 → 根据原则自我评估 → 修正有害输出 → 用修正对做RLHF/DPO",
      "<span class=\"highlight\">Red Teaming</span>：主动攻击模型，发现安全漏洞。方法：手动/自动化(用LLM攻击LLM)",
      "常见攻击：Prompt Injection / Jailbreak / 多轮诱导 / 编码绕过（Base64等）",
      "防御：Input/Output Guardrails / Safety训练 / System Prompt防护 / 多层检测",
      "趋势：从RLHF对齐 → Scalable Oversight(让AI帮助监督AI) → <span class=\"highlight\">对齐要能scale</span>"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">Constitutional AI</span>（Anthropic）：「憲法原則」のセットを定義 → AIが自己批判・修正 → 人手によるアノテーションの必要性を削減",
      "CAIフロー：LLMが生成 → 原則に基づき自己評価 → 有害な出力を修正 → 修正ペアでRLHF/DPOを実施",
      "<span class=\"highlight\">Red Teaming</span>：積極的にモデルを攻撃し、セキュリティ脆弱性を発見。方法：手動/自動化（LLMでLLMを攻撃）",
      "一般的な攻撃：Prompt Injection / Jailbreak / 多ターン誘導 / エンコード回避（Base64等）",
      "防御：Input/Output Guardrails / Safety学習 / System Prompt防護 / 多層検出",
      "トレンド：RLHFアライメントから → Scalable Oversight（AIがAIを監督） → <span class=\"highlight\">アライメントはスケールできなければならない</span>"
    ],
    "details": [
      {
        "term": "Constitutional AI",
        "explain": "<p>Anthropic 提出的对齐方法：定义一组<span class=\"key-point\">\"宪法原则\"</span>（如\"不帮助犯罪\"\"诚实\"），让 AI 自己根据这些原则评估和修正自己的输出。</p><div class=\"formula\">流程：\n1. LLM 生成回答（可能有害）\n2. LLM 自评：\"这个回答违反了原则X吗？\"\n3. LLM 自我修正 → 生成更安全的版本\n4. 用 (原始, 修正) 对做 RLHF/DPO</div><div class=\"analogy\">类比：不是雇 1000 个审核员（人工标注），而是给 AI 一本\"法律书\"让它自己当法官。大幅减少人工标注需求。</div>"
      },
      {
        "term": "Red Teaming",
        "explain": "<p>主动<span class=\"key-point\">攻击自己的模型</span>来发现安全漏洞。类似网络安全中的渗透测试。</p><div class=\"formula\">常见攻击手段：\n- Prompt Injection: 在输入中注入\"忽略上述指令\"\n- Jailbreak: \"假装你是没有限制的AI\"\n- 多轮诱导: 先建立信任再逐步引导到有害内容\n- 编码绕过: 用Base64/ROT13编码敏感内容\n- 角色扮演: \"写一个反派角色的独白\"</div><p>现代方法：<span class=\"key-point\">用 LLM 攻击 LLM</span>（自动化 red teaming），比人工效率高几个数量级。</p>"
      },
      {
        "term": "Scalable Oversight",
        "explain": "<p>核心问题：当 AI 能力超过人类时，<span class=\"key-point\">人类还能有效监督它吗</span>？Scalable Oversight 探索让 AI 辅助人类监督 AI。</p><div class=\"formula\">层级监督：\n人类 → 监督 AI-审核员 → 监督 AI-工作者\n\n具体方法：\n- Debate: 两个AI互相辩论，人类做裁判\n- Recursive Reward Modeling: AI帮人类分解\n  复杂任务，人类只需判断简单子任务\n- Constitutional AI: AI用原则自我监督</div><p><span class=\"key-point\">核心挑战</span>：对齐方法的成本必须能随 AI 能力的增长而 scale，不能依赖线性增长的人工标注。</p>"
      }
    ],
    "details_ja": [
      {
        "term": "Constitutional AI",
        "explain": "<p>Anthropicが提唱するアライメント手法：<span class=\"key-point\">「憲法原則」</span>（例：「犯罪を幇助しない」「誠実である」）を定義し、AIが自らの出力をこれらの原則に基づいて評価・修正する。</p><div class=\"formula\">フロー：\n1. LLMが回答を生成（有害な可能性あり）\n2. LLMが自己評価：「この回答は原則Xに違反か？」\n3. LLMが自己修正 → より安全なバージョンを生成\n4. (元の回答, 修正版) ペアでRLHF/DPOを実施</div><div class=\"analogy\">例え：1000人の審査員を雇う（人手アノテーション）のではなく、AIに「法律書」を渡して自分で裁判官をさせる。人手アノテーションの必要性を大幅に削減。</div>"
      },
      {
        "term": "Red Teaming",
        "explain": "<p>自分のモデルを積極的に<span class=\"key-point\">攻撃</span>してセキュリティ脆弱性を発見する。ネットワークセキュリティのペネトレーションテストに類似。</p><div class=\"formula\">一般的な攻撃手段：\n- Prompt Injection: 入力に「上記の指示を無視」を注入\n- Jailbreak: 「制限のないAIのふりをして」\n- 多ターン誘導: 信頼を築いてから有害な内容へ誘導\n- エンコード回避: Base64/ROT13で機密内容をエンコード\n- ロールプレイ: 「悪役キャラのモノローグを書いて」</div><p>現代の手法：<span class=\"key-point\">LLMでLLMを攻撃</span>（自動化red teaming）、人手より桁違いに高効率。</p>"
      },
      {
        "term": "Scalable Oversight",
        "explain": "<p>核心的問題：AIの能力が人間を超えた時、<span class=\"key-point\">人間は効果的に監督できるか</span>？Scalable OversightはAIが人間のAI監督を支援する方法を探求。</p><div class=\"formula\">階層的監督：\n人間 → AI審査員を監督 → AI作業者を監督\n\n具体的手法：\n- Debate: 2つのAIが互いに議論し、人間が審判\n- Recursive Reward Modeling: AIが人間の複雑な\n  タスクを分解し、人間は簡単なサブタスクのみ判断\n- Constitutional AI: AIが原則で自己監督</div><p><span class=\"key-point\">核心的課題</span>：アライメント手法のコストがAI能力の成長に合わせてscaleできなければならず、線形に増加する人手アノテーションに依存できない。</p>"
      }
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "m01",
    "cat": "ML/DL基础",
    "q": "优化器对比：SGD / Adam / AdamW",
    "q_ja": "オプティマイザの比較：SGD / Adam / AdamW",
    "bullets": [
      "SGD：最基础，lr × gradient。需要精心调lr和momentum。收敛慢但泛化可能更好",
      "Adam：自适应学习率，维护一阶(动量)和二阶(方差)矩估计。收敛快，默认首选",
      "<span class=\"highlight\">AdamW</span>：Adam + 正确的weight decay（Adam的L2不等价于weight decay）→ LLM标准选择",
      "学习率：LLM训练通常用cosine schedule + warmup（前几百步线性升温，防止开始时梯度爆炸）",
      "LoRA微调常用lr=2e-4~2e-5，比全量微调高一个量级"
    ],
    "bullets_ja": [
      "SGD：最も基本的、lr × gradient。lrとmomentumの慎重な調整が必要。収束は遅いが汎化性能はより良い場合がある",
      "Adam：適応的学習率、1次（モメンタム）と2次（分散）のモーメント推定を維持。収束が速く、デフォルトの第一選択",
      "<span class=\"highlight\">AdamW</span>：Adam + 正しいweight decay（AdamのL2正則化はweight decayと等価ではない）→ LLMの標準的な選択",
      "学習率：LLMの学習ではcosine schedule + warmup（最初の数百ステップで線形に昇温、初期の勾配爆発を防止）が一般的",
      "LoRAファインチューニングではlr=2e-4〜2e-5が一般的、フル・ファインチューニングより1桁高い"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "m02",
    "cat": "ML/DL基础",
    "q": "过拟合与正则化",
    "q_ja": "過学習と正則化",
    "bullets": [
      "过拟合：训练loss低但验证loss高 → 模型记住了训练数据而非学到规律",
      "Dropout：训练时随机丢弃神经元(通常p=0.1)，推理时关闭 → 集成效果",
      "Weight Decay(L2)：loss += λ||w||² → 惩罚大权重，AdamW中解耦实现",
      "Early Stopping：验证loss不再下降时停止训练 → 最简单有效",
      "数据增强：增加训练数据多样性 → 图像(翻转/裁剪)、NLP(同义替换/回译)",
      "LLM场景：LoRA本身就是正则化（低秩约束限制了参数自由度）"
    ],
    "bullets_ja": [
      "過学習：学習lossは低いが検証lossが高い → モデルが学習データを暗記し、規則性を学んでいない",
      "Dropout：学習時にニューロンをランダムに無効化（通常p=0.1）、推論時はオフ → アンサンブル効果",
      "Weight Decay(L2)：loss += λ||w||² → 大きな重みにペナルティ、AdamWでは分離実装",
      "Early Stopping：検証lossが下がらなくなったら学習を停止 → 最もシンプルで効果的",
      "データ拡張：学習データの多様性を向上 → 画像（反転/クロップ）、NLP（同義語置換/逆翻訳）",
      "LLMの場合：LoRA自体が正則化（低ランク制約がパラメータの自由度を制限）"
    ],
    "group": "基础",
    "lv": 1
  },
  {
    "id": "m03",
    "cat": "ML/DL基础",
    "q": "损失函数选择",
    "q_ja": "損失関数の選択",
    "bullets": [
      "<span class=\"highlight\">Cross-Entropy</span>：分类标准loss，-Σy·log(p)。LLM预训练就是对next token做CE",
      "MSE：回归任务，(y-ŷ)²。对异常值敏感",
      "Focal Loss：给简单样本低权重，难样本高权重 → 解决类别不平衡",
      "Contrastive Loss：拉近正样本对、推远负样本对 → Embedding训练核心",
      "Triplet Loss：(anchor, positive, negative)三元组 → 你的bge-m3微调用的"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">Cross-Entropy</span>：分類の標準loss、-Σy·log(p)。LLMの事前学習はnext tokenに対するCE",
      "MSE：回帰タスク、(y-ŷ)²。外れ値に敏感",
      "Focal Loss：簡単なサンプルに低い重み、難しいサンプルに高い重み → クラス不均衡を解消",
      "Contrastive Loss：正のサンプルペアを近づけ、負のサンプルペアを引き離す → Embedding学習の核心",
      "Triplet Loss：(anchor, positive, negative)の三つ組 → 自身のbge-m3ファインチューニングで使用"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "m04",
    "cat": "ML/DL基础",
    "q": "CNN 核心概念",
    "q_ja": "CNNの中核概念",
    "bullets": [
      "卷积核(filter)：滑动窗口提取局部特征 → 参数共享（比全连接参数少得多）",
      "池化(Pooling)：降低空间分辨率，MaxPool保留最强特征",
      "经典架构演进：LeNet→AlexNet→VGG→ResNet(残差连接)→EfficientNet",
      "ResNet的残差连接：y = F(x) + x → 让深层网络可训练（和Transformer的residual connection相同思想）",
      "你的Edge AI项目：用TensorRT对视觉模型做量化加速部署到Jetson Nano"
    ],
    "bullets_ja": [
      "畳み込みカーネル（filter）：スライディングウィンドウで局所特徴を抽出 → パラメータ共有（全結合層よりはるかに少ないパラメータ）",
      "プーリング（Pooling）：空間解像度を低減、MaxPoolは最も強い特徴を保持",
      "代表的アーキテクチャの変遷：LeNet→AlexNet→VGG→ResNet（残差接続）→EfficientNet",
      "ResNetの残差接続：y = F(x) + x → 深いネットワークの学習を可能にする（Transformerのresidual connectionと同じ思想）",
      "自身のEdge AIプロジェクト：TensorRTで視覚モデルを量子化・高速化しJetson Nanoにデプロイ"
    ],
    "group": "基础",
    "lv": 1
  },
  {
    "id": "m05",
    "cat": "ML/DL基础",
    "q": "RNN / LSTM / GRU",
    "q_ja": "RNN / LSTM / GRU",
    "bullets": [
      "RNN：h_t = f(W_h·h_{t-1} + W_x·x_t)。梯度消失/爆炸 → 长序列失效",
      "<span class=\"highlight\">LSTM</span>：引入Cell State + 三个门(遗忘/输入/输出) → 解决长期依赖",
      "GRU：LSTM简化版，两个门(重置/更新) → 参数少，效果接近LSTM",
      "已被Transformer大部分取代，但在低资源/实时场景仍有价值",
      "你的经验：PowerTS中LSTM精度比LLM高13倍，推理~1ms vs ~5-10s → <span class=\"highlight\">简单模型在特定场景仍是最优解</span>"
    ],
    "bullets_ja": [
      "RNN：h_t = f(W_h·h_{t-1} + W_x·x_t)。勾配消失/爆発 → 長いシーケンスでは機能しない",
      "<span class=\"highlight\">LSTM</span>：Cell Stateと3つのゲート（忘却/入力/出力）を導入 → 長期依存関係を解決",
      "GRU：LSTMの簡略版、2つのゲート（リセット/更新） → パラメータが少なく、LSTMに近い性能",
      "Transformerにほぼ置き換えられたが、低リソース/リアルタイム環境では依然として有用",
      "自身の経験：PowerTSにおいてLSTMはLLMより精度が13倍高く、推論は約1ms vs 約5-10s → <span class=\"highlight\">シンプルなモデルが特定の場面では最適解</span>"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "m06",
    "cat": "ML/DL基础",
    "q": "Batch Norm vs Layer Norm",
    "q_ja": "Batch Norm vs Layer Norm",
    "bullets": [
      "Batch Norm：对一个batch内的同一特征维度做归一化。依赖batch size，不适合序列任务",
      "<span class=\"highlight\">Layer Norm</span>：对单个样本的所有特征维度做归一化。不依赖batch size → Transformer标准选择",
      "RMSNorm：Layer Norm的简化版，只做缩放不做平移 → Llama/Qwen使用，更快",
      "Pre-Norm vs Post-Norm：Transformer中Layer Norm放在Attention前(Pre)还是后(Post)",
      "Pre-Norm训练更稳定（主流选择），Post-Norm理论上效果更好但难训练"
    ],
    "bullets_ja": [
      "Batch Norm：バッチ内の同一特徴次元に対して正規化。バッチサイズに依存し、シーケンスタスクには不適",
      "<span class=\"highlight\">Layer Norm</span>：単一サンプルの全特徴次元に対して正規化。バッチサイズに依存しない → Transformerの標準的な選択",
      "RMSNorm：Layer Normの簡略版、スケーリングのみでシフトなし → Llama/Qwenで使用、より高速",
      "Pre-Norm vs Post-Norm：TransformerでLayer NormをAttentionの前（Pre）に置くか後（Post）に置くか",
      "Pre-Normは学習がより安定（主流の選択）、Post-Normは理論上は効果が良いが学習が困難"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "m07",
    "cat": "ML/DL基础",
    "q": "GAN 原理与应用",
    "q_ja": "GANの原理と応用",
    "bullets": [
      "Generator生成假数据 vs Discriminator判断真假 → 对抗训练",
      "训练难点：模式崩塌(generator只输出少数样本) / 训练不稳定 / 评估困难(FID/IS)",
      "WGAN：用Wasserstein距离替代JS散度 → 更稳定的训练信号",
      "应用：图像生成 / 数据增强 / 风格迁移 / 超分辨率",
      "你的经验：本科项目用GAN做电力系统稀有事件数据增强 → 解决类别不平衡问题"
    ],
    "bullets_ja": [
      "Generatorが偽データを生成 vs Discriminatorが真偽を判定 → 敵対的学習",
      "学習の難点：モード崩壊（Generatorが少数のサンプルのみ出力）/ 学習が不安定 / 評価が困難（FID/IS）",
      "WGAN：JS divergenceの代わりにWasserstein距離を使用 → より安定した学習シグナル",
      "応用：画像生成 / データ拡張 / スタイル変換 / 超解像",
      "自身の経験：学部プロジェクトでGANを用いて電力系統のレアイベントデータを拡張 → クラス不均衡問題を解消"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "m08",
    "cat": "ML/DL基础",
    "q": "强化学习基础：PPO / DDPG",
    "q_ja": "強化学習の基礎：PPO / DDPG",
    "bullets": [
      "RL核心：Agent在Environment中执行Action获得Reward，目标是最大化累计Reward",
      "Policy Gradient：直接优化策略函数 → REINFORCE算法（高方差）",
      "<span class=\"highlight\">PPO</span>：加clip限制策略更新幅度 → 稳定训练。RLHF的标准选择",
      "<span class=\"highlight\">DDPG</span>：Actor-Critic + 连续动作空间 → 适合机器人/电力控制",
      "你的经验：①本科用DDPG/PPO做电力系统实时控制 ②理解RLHF中PPO的作用"
    ],
    "bullets_ja": [
      "RLの核心：AgentがEnvironment内でActionを実行しRewardを取得、目標は累積Rewardの最大化",
      "Policy Gradient：方策関数を直接最適化 → REINFORCEアルゴリズム（高分散）",
      "<span class=\"highlight\">PPO</span>：clipで方策更新幅を制限 → 安定した学習。RLHFの標準的な選択",
      "<span class=\"highlight\">DDPG</span>：Actor-Critic + 連続行動空間 → ロボット/電力制御に適する",
      "自身の経験：①学部でDDPG/PPOによる電力系統のリアルタイム制御 ②RLHFにおけるPPOの役割を理解"
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "m09",
    "cat": "ML/DL基础",
    "q": "对比学习（Contrastive Learning）",
    "q_ja": "対照学習（Contrastive Learning）",
    "bullets": [
      "核心思想：<span class=\"highlight\">拉近正样本对，推远负样本对</span>在embedding空间中",
      "SimCLR：同一图像的两个增强版本互为正样本，其他图像为负样本",
      "CLIP：图像和文本配对做对比学习 → 跨模态理解",
      "SimCSE：用dropout制造正样本对 → 简单有效的句向量方法",
      "你的应用：bge-m3微调用MultipleNegativesRankingLoss（对比学习变体），in-batch negatives提高效率"
    ],
    "bullets_ja": [
      "核心的な考え方：Embedding空間において<span class=\"highlight\">正のサンプルペアを近づけ、負のサンプルペアを引き離す</span>",
      "SimCLR：同一画像の2つの拡張バージョンを正のサンプルとし、他の画像を負のサンプルとする",
      "CLIP：画像とテキストのペアで対照学習 → クロスモーダル理解",
      "SimCSE：Dropoutで正のサンプルペアを生成 → シンプルで効果的な文ベクトル手法",
      "自身の応用：bge-m3ファインチューニングでMultipleNegativesRankingLoss（対照学習の変種）を使用、in-batch negativesで効率向上"
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "m10",
    "cat": "ML/DL基础",
    "q": "Attention机制演进",
    "q_ja": "Attention機構の進化",
    "bullets": [
      "<span class=\"highlight\">Bahdanau(2014)</span>：加性Attention，score = v^T·tanh(W_1·h_i + W_2·s_j)，首次在Seq2Seq中引入注意力",
      "<span class=\"highlight\">Luong(2015)</span>：乘性Attention，score = h_i^T·W·s_j，计算更高效。还提出local attention（只关注窗口）",
      "<span class=\"highlight\">Self-Attention(2017)</span>：Q/K/V来自同一序列，每个位置attend所有位置 → Transformer核心",
      "<span class=\"highlight\">Multi-Head Attention</span>：将d_model分成h个头，每个头独立计算attention再concat → 捕捉多种关系",
      "演进逻辑：从\"辅助RNN的对齐工具\" → \"完全替代RNN的序列建模核心\"",
      "后续优化：MQA(Multi-Query) → GQA(Grouped-Query) → 减少KV头数降低推理成本"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">Bahdanau(2014)</span>：加法的Attention、score = v^T·tanh(W_1·h_i + W_2·s_j)、Seq2Seqに初めてAttentionを導入",
      "<span class=\"highlight\">Luong(2015)</span>：乗法的Attention、score = h_i^T·W·s_j、計算効率が向上。local attention（ウィンドウ内のみ注目）も提案",
      "<span class=\"highlight\">Self-Attention(2017)</span>：Q/K/Vが同一シーケンスから、各位置が全位置にattend → Transformerの核心",
      "<span class=\"highlight\">Multi-Head Attention</span>：d_modelをh個のヘッドに分割、各ヘッドが独立にAttentionを計算してconcat → 多種の関係を捕捉",
      "進化のロジック：「RNNを補助するアラインメントツール」から「RNNを完全に置き換えるシーケンスモデリングの核心」へ",
      "後続の最適化：MQA(Multi-Query) → GQA(Grouped-Query) → KVヘッド数を削減し推論コストを低減"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "m11",
    "cat": "ML/DL基础",
    "q": "梯度消失与梯度爆炸",
    "q_ja": "勾配消失と勾配爆発",
    "bullets": [
      "<span class=\"highlight\">梯度消失</span>：反向传播时梯度连乘 → 趋近于0 → 深层参数无法更新。常见于sigmoid/tanh激活",
      "<span class=\"highlight\">梯度爆炸</span>：梯度连乘 → 趋向无穷 → 参数更新不稳定。常见于深层RNN",
      "解决消失：ReLU/GELU激活（导数不缩小）/ Residual Connection（梯度直通路径）/ Layer Norm",
      "解决爆炸：Gradient Clipping（限制梯度范数，LLM训练标配）/ 适当的权重初始化",
      "权重初始化：Xavier(适合sigmoid/tanh) / He(适合ReLU) / 保持各层方差一致",
      "LLM中：Pre-Norm + Residual + Gradient Clipping(通常max_norm=1.0)三板斧"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">勾配消失</span>：逆伝播時に勾配が連鎖的に乗算 → 0に近づく → 深い層のパラメータが更新されない。sigmoid/tanh活性化で頻発",
      "<span class=\"highlight\">勾配爆発</span>：勾配が連鎖的に乗算 → 無限大に向かう → パラメータ更新が不安定。深層RNNで頻発",
      "消失の解決：ReLU/GELU活性化（導関数が縮小しない）/ Residual Connection（勾配のバイパス経路）/ Layer Norm",
      "爆発の解決：Gradient Clipping（勾配ノルムを制限、LLM学習の標準装備）/ 適切な重み初期化",
      "重み初期化：Xavier（sigmoid/tanh向き）/ He（ReLU向き）/ 各層の分散を一定に保つ",
      "LLMでは：Pre-Norm + Residual + Gradient Clipping（通常max_norm=1.0）の三点セット"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "m12",
    "cat": "ML/DL基础",
    "q": "学习率调度策略",
    "q_ja": "学習率スケジューリング戦略",
    "bullets": [
      "<span class=\"highlight\">Warmup</span>：从极小lr线性升温到目标lr。原因：初始参数随机，大lr会破坏预训练权重",
      "<span class=\"highlight\">Cosine Annealing</span>：lr按余弦曲线从峰值衰减到接近0。平滑衰减，LLM训练最常用",
      "<span class=\"highlight\">OneCycleLR</span>：先升后降一个完整周期，配合大lr探索 → FastAI推荐，收敛快",
      "Step Decay：每隔N个epoch将lr乘以γ(如0.1) → 经典但不如cosine平滑",
      "Warmup+Cosine组合：LLM标准配置。如warmup 2000步 → cosine衰减到0",
      "实践：warmup步数通常为总步数的1-5%；peak lr与batch size正相关（线性缩放规则）"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">Warmup</span>：極小lrから目標lrまで線形に昇温。理由：初期パラメータがランダムなため、大きなlrは事前学習済みの重みを破壊する",
      "<span class=\"highlight\">Cosine Annealing</span>：lrがコサイン曲線に沿ってピーク値から0近くまで減衰。滑らかな減衰、LLM学習で最も一般的",
      "<span class=\"highlight\">OneCycleLR</span>：上昇→下降の1サイクル、大きなlrで探索 → FastAI推奨、収束が速い",
      "Step Decay：Nエポックごとにlrにγ（例：0.1）を乗算 → 古典的だがcosineほど滑らかではない",
      "Warmup+Cosineの組み合わせ：LLMの標準構成。例：warmup 2000ステップ → cosine減衰で0に",
      "実践：warmupステップ数は通常総ステップ数の1-5%；ピークlrはバッチサイズに比例（線形スケーリング則）"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "m13",
    "cat": "ML/DL基础",
    "q": "数据增强技术",
    "q_ja": "データ拡張技術",
    "bullets": [
      "CV：翻转/旋转/裁剪/颜色抖动 → 基础几何变换。<span class=\"highlight\">Mixup</span>：两张图线性插值混合",
      "CV进阶：CutMix(剪切粘贴区域) / AutoAugment(搜索最优增强策略) / RandAugment(随机组合)",
      "NLP：同义词替换 / 随机删除/交换 / <span class=\"highlight\">回译</span>(翻译到另一语言再翻回来) / EDA",
      "NLP进阶：用LLM生成改写(paraphrase) / 数据蒸馏(用大模型生成训练数据)",
      "对比学习中的增强：SimCLR的random crop+color distortion / SimCSE的dropout",
      "注意：增强不能改变语义标签（NLP中尤其需要小心）"
    ],
    "bullets_ja": [
      "CV：反転/回転/クロップ/色ジッタ → 基本的な幾何変換。<span class=\"highlight\">Mixup</span>：2枚の画像を線形補間で混合",
      "CV発展：CutMix（領域を切り貼り）/ AutoAugment（最適な拡張戦略を探索）/ RandAugment（ランダム組み合わせ）",
      "NLP：同義語置換 / ランダム削除/入れ替え / <span class=\"highlight\">逆翻訳</span>（別言語に翻訳して戻す）/ EDA",
      "NLP発展：LLMで言い換え(paraphrase)を生成 / データ蒸留（大モデルで学習データを生成）",
      "対照学習での拡張：SimCLRのrandom crop+color distortion / SimCSEのDropout",
      "注意：拡張が意味ラベルを変えてはならない（NLPでは特に注意が必要）"
    ],
    "group": "基础",
    "lv": 1
  },
  {
    "id": "m14",
    "cat": "ML/DL基础",
    "q": "模型压缩：剪枝、蒸馏、量化",
    "q_ja": "モデル圧縮：枝刈り、蒸留、量子化",
    "bullets": [
      "<span class=\"highlight\">剪枝(Pruning)</span>：移除冗余参数。非结构化(单个权重置零) vs 结构化(整行/整列/整个head删除)",
      "结构化剪枝对硬件更友好（实际加速），非结构化剪枝比例高但需要稀疏硬件支持",
      "<span class=\"highlight\">知识蒸馏(Distillation)</span>：大模型(teacher)的soft label教小模型(student)。KD Loss = CE(student, soft_label)",
      "蒸馏的关键：Temperature软化teacher的输出分布，让student学到更丰富的\"暗知识\"",
      "<span class=\"highlight\">量化(Quantization)</span>：降低数值精度。PTQ(训练后量化)简单 / QAT(量化感知训练)精度高",
      "组合使用：先蒸馏得到小模型 → 再量化部署。如DistilBERT(蒸馏) + INT8(量化)"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">枝刈り(Pruning)</span>：冗長なパラメータを除去。非構造化（個々の重みをゼロに）vs 構造化（行/列/ヘッド全体を削除）",
      "構造化枝刈りはハードウェアに優しい（実際の高速化）、非構造化枝刈りは高い比率で削減可能だがスパースハードウェアのサポートが必要",
      "<span class=\"highlight\">知識蒸留(Distillation)</span>：大モデル（teacher）のsoft labelで小モデル（student）を教える。KD Loss = CE(student, soft_label)",
      "蒸留の鍵：Temperatureでteacherの出力分布を軟化し、studentにより豊かな「暗黙知」を学ばせる",
      "<span class=\"highlight\">量子化(Quantization)</span>：数値精度を低減。PTQ（学習後量子化）はシンプル / QAT（量子化意識学習）は精度が高い",
      "組み合わせ使用：まず蒸留で小モデルを取得 → 量子化してデプロイ。例：DistilBERT（蒸留）+ INT8（量子化）"
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "m15",
    "cat": "ML/DL基础",
    "q": "交叉验证与超参搜索",
    "q_ja": "交差検証とハイパーパラメータ探索",
    "bullets": [
      "<span class=\"highlight\">K-Fold CV</span>：数据分K份，每次用K-1份训练、1份验证，轮换K次取平均 → 评估更稳定",
      "Stratified K-Fold：保持每折中类别比例一致 → 分类任务必选",
      "Grid Search：穷举所有超参组合 → 简单但组合爆炸",
      "Random Search：随机采样超参组合 → 高维空间比Grid Search更高效（Bergstra 2012）",
      "<span class=\"highlight\">Bayesian Optimization</span>：用高斯过程建模超参→性能映射，智能选下一组 → Optuna/Ray Tune",
      "LLM微调：超参空间小(lr/rank/epochs)，通常小规模grid search即可"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">K-Fold CV</span>：データをK分割し、毎回K-1個で学習・1個で検証、K回ローテーションして平均 → 評価がより安定",
      "Stratified K-Fold：各foldでクラス比率を一定に保つ → 分類タスクでは必須",
      "Grid Search：全ハイパーパラメータの組み合わせを網羅的に探索 → シンプルだが組み合わせ爆発",
      "Random Search：ハイパーパラメータの組み合わせをランダムサンプリング → 高次元空間ではGrid Searchより効率的（Bergstra 2012）",
      "<span class=\"highlight\">Bayesian Optimization</span>：ガウス過程でハイパーパラメータ→性能のマッピングをモデル化、次の組み合わせをインテリジェントに選択 → Optuna/Ray Tune",
      "LLMファインチューニング：ハイパーパラメータ空間が小さい（lr/rank/epochs）、通常は小規模なgrid searchで十分"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "m16",
    "cat": "ML/DL基础",
    "q": "Transformer架构变体：GPT vs BERT vs T5 vs LLaMA",
    "q_ja": "Transformerアーキテクチャの変種：GPT vs BERT vs T5 vs LLaMA",
    "bullets": [
      "<span class=\"highlight\">GPT</span>：Decoder-only，CLM预训练。单向attention，适合生成。GPT-3(175B)开启大模型时代",
      "<span class=\"highlight\">BERT</span>：Encoder-only，MLM+NSP预训练。双向attention，适合理解/分类。仍是NLU任务首选",
      "<span class=\"highlight\">T5</span>：Encoder-Decoder，Span Corruption预训练。text-to-text统一框架，适合翻译/摘要",
      "<span class=\"highlight\">LLaMA</span>：Decoder-only，Pre-Norm + RoPE + SwiGLU + GQA。开源生态核心，训练数据充分(Chinchilla)",
      "架构选择：纯生成→Decoder-only / 纯理解→Encoder-only / 条件生成(翻译)→Enc-Dec",
      "趋势：<span class=\"highlight\">Decoder-only统一天下</span>，因为足够大时理解能力也很强"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">GPT</span>：Decoder-only、CLM事前学習。単方向Attention、生成に適する。GPT-3(175B)が大規模モデル時代を開始",
      "<span class=\"highlight\">BERT</span>：Encoder-only、MLM+NSP事前学習。双方向Attention、理解/分類に適する。NLUタスクでは依然として第一選択",
      "<span class=\"highlight\">T5</span>：Encoder-Decoder、Span Corruption事前学習。text-to-textの統一フレームワーク、翻訳/要約に適する",
      "<span class=\"highlight\">LLaMA</span>：Decoder-only、Pre-Norm + RoPE + SwiGLU + GQA。オープンソースエコシステムの中核、十分な学習データ(Chinchilla)",
      "アーキテクチャの選択：純粋な生成→Decoder-only / 純粋な理解→Encoder-only / 条件付き生成（翻訳）→Enc-Dec",
      "トレンド：<span class=\"highlight\">Decoder-onlyが統一</span>、十分に大きければ理解能力も高いため"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "a01",
    "cat": "Agent架构",
    "q": "Agent 四要素",
    "q_ja": "Agentの四要素",
    "bullets": [
      "<span class=\"highlight\">LLM</span>：大脑，负责推理和决策",
      "<span class=\"highlight\">Tools</span>：手和脚，执行外部操作（API调用/代码执行/搜索/数据库查询）",
      "<span class=\"highlight\">Memory</span>：短期(对话历史) + 长期(向量数据库/文件) + 工作记忆(当前任务状态)",
      "<span class=\"highlight\">Planning</span>：任务分解和执行策略（ReAct/Plan-and-Execute/反思）",
      "你的项目覆盖全部四要素：SiLR(LLM+仿真工具+观测记忆+ReAct规划)，RAG(LLM+10工具+检索记忆+意图路由)"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">LLM</span>：頭脳、推論と意思決定を担当",
      "<span class=\"highlight\">Tools</span>：手足、外部操作を実行（API呼び出し/コード実行/検索/データベースクエリ）",
      "<span class=\"highlight\">Memory</span>：短期（対話履歴）+ 長期（ベクトルDB/ファイル）+ ワーキングメモリ（現在のタスク状態）",
      "<span class=\"highlight\">Planning</span>：タスク分解と実行戦略（ReAct/Plan-and-Execute/内省）",
      "自身のプロジェクトは全四要素をカバー：SiLR（LLM+シミュレーションツール+観測メモリ+ReAct計画）、RAG（LLM+10ツール+検索メモリ+意図ルーティング）"
    ],
    "group": "基础",
    "lv": 1
  },
  {
    "id": "a02",
    "cat": "Agent架构",
    "q": "Function Calling 实现机制",
    "q_ja": "Function Callingの実装メカニズム",
    "bullets": [
      "原理：System Prompt中定义工具的JSON Schema → LLM输出结构化的工具调用请求 → 系统执行 → 结果返回LLM",
      "OpenAI格式：tool_calls: [{function: {name, arguments}}]",
      "关键挑战：①LLM可能生成无效参数 ②可能调用不存在的工具 ③可能不调工具直接回答",
      "你的解决方案：三层ActionParser（原生/JSON/正则兜底）+ 强制调用guardrails",
      "<span class=\"highlight\">Structured Output</span>：限制LLM只能输出符合Schema的JSON，减少解析错误"
    ],
    "bullets_ja": [
      "原理：System PromptでツールのJSON Schemaを定義 → LLMが構造化されたツール呼び出しリクエストを出力 → システムが実行 → 結果をLLMに返却",
      "OpenAI形式：tool_calls: [{function: {name, arguments}}]",
      "主な課題：①LLMが無効なパラメータを生成する可能性 ②存在しないツールを呼び出す可能性 ③ツールを呼ばず直接回答する可能性",
      "自身の解決策：三層ActionParser（ネイティブ/JSON/正規表現フォールバック）+ 強制呼び出しGuardrails",
      "<span class=\"highlight\">Structured Output</span>：LLMの出力をSchemaに準拠したJSONに制限し、パースエラーを削減"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "a03",
    "cat": "Agent架构",
    "q": "Memory 系统分类",
    "q_ja": "Memoryシステムの分類",
    "bullets": [
      "<span class=\"highlight\">短期记忆</span>：对话历史，直接放在context window中。受限于上下文长度",
      "<span class=\"highlight\">长期记忆</span>：向量数据库存储过去的经验，按相似度检索。如MemGPT",
      "<span class=\"highlight\">工作记忆</span>：当前任务的中间状态（scratchpad），类似人的\"脑中暂存\"",
      "<span class=\"highlight\">情景记忆</span>：记录成功/失败的完整episode，用于未来类似任务参考",
      "你的实现：SiLR用观测压缩做工作记忆；RAG用向量DB做长期记忆；EdgeRouter用滑动窗口做时序记忆"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">短期記憶</span>：対話履歴、context windowに直接配置。コンテキスト長に制約される",
      "<span class=\"highlight\">長期記憶</span>：ベクトルDBに過去の経験を保存し、類似度で検索。例：MemGPT",
      "<span class=\"highlight\">ワーキングメモリ</span>：現在のタスクの中間状態（scratchpad）、人間の「脳内一時保存」に相当",
      "<span class=\"highlight\">エピソード記憶</span>：成功/失敗した完全なエピソードを記録し、将来の類似タスクの参考に",
      "自身の実装：SiLRは観測圧縮でワーキングメモリ；RAGはベクトルDBで長期記憶；EdgeRouterはスライディングウィンドウで時系列記憶"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "a04",
    "cat": "Agent架构",
    "q": "Context Engineering vs Prompt Engineering",
    "q_ja": "Context Engineering vs Prompt Engineering",
    "bullets": [
      "Prompt Engineering：优化单次输入的措辞和格式",
      "<span class=\"highlight\">Context Engineering</span>（2025新趋势）：设计整个信息流——什么信息在什么时候以什么形式进入context",
      "包括：工具结果的格式化 / 记忆检索的时机 / 观测数据的压缩 / 系统提示的动态调整",
      "你做过的：Observation压缩(2000→300 tokens) / Escalation Hint(只在REJECT时注入) / RRF权重调整",
      "核心理念：<span class=\"highlight\">控制模型\"看到什么\"比\"怎么问\"更重要</span>"
    ],
    "bullets_ja": [
      "Prompt Engineering：単一入力の表現やフォーマットを最適化",
      "<span class=\"highlight\">Context Engineering</span>（2025年の新トレンド）：情報フロー全体を設計——どの情報を、いつ、どのような形式でcontextに入れるか",
      "含まれるもの：ツール結果のフォーマット / メモリ検索のタイミング / 観測データの圧縮 / システムプロンプトの動的調整",
      "自身の実践：Observation圧縮（2000→300トークン）/ Escalation Hint（REJECT時のみ注入）/ RRF重み調整",
      "核心理念：<span class=\"highlight\">モデルに「何を見せるか」の制御は「どう質問するか」より重要</span>"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "a05",
    "cat": "Agent架构",
    "q": "Multi-Agent 通信模式",
    "q_ja": "Multi-Agentの通信パターン",
    "bullets": [
      "①<span class=\"highlight\">中心化</span>：一个Orchestrator分派任务给Worker Agent → 简单可控，单点瓶颈",
      "②<span class=\"highlight\">层级式</span>：Manager→SubManager→Worker → 适合复杂组织结构",
      "③<span class=\"highlight\">对等式</span>：Agent之间直接通信协商 → 灵活但难以调试",
      "④<span class=\"highlight\">黑板模式</span>：共享状态空间，各Agent读写 → 解耦通信",
      "框架：AutoGen(对话式) / CrewAI(角色分工) / LangGraph(图状态机)"
    ],
    "bullets_ja": [
      "①<span class=\"highlight\">中央集権型</span>：1つのOrchestratorがWorker Agentにタスクを割り当て → シンプルで制御可能、単一障害点がボトルネック",
      "②<span class=\"highlight\">階層型</span>：Manager→SubManager→Worker → 複雑な組織構造に適する",
      "③<span class=\"highlight\">ピアツーピア型</span>：Agent間で直接通信・交渉 → 柔軟だがデバッグが困難",
      "④<span class=\"highlight\">ブラックボードパターン</span>：共有状態空間で各Agentが読み書き → 通信を疎結合化",
      "フレームワーク：AutoGen（対話型）/ CrewAI（役割分担）/ LangGraph（グラフ状態マシン）"
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "a06",
    "cat": "Agent架构",
    "q": "Agent Evaluation 方法",
    "q_ja": "Agentの評価方法",
    "bullets": [
      "①<span class=\"highlight\">任务完成率</span>：最终结果是否正确（SiLR: 97.0%恢复成功率）",
      "②<span class=\"highlight\">效率</span>：完成任务所需步骤数/token数/时间（SiLR: 平均3.2步）",
      "③<span class=\"highlight\">安全性</span>：是否触发危险动作/违反约束（SiLR: 0%违规率）",
      "④<span class=\"highlight\">鲁棒性</span>：输入变化时表现稳定性（PowerTS: 仅+2.2%退化）",
      "⑤<span class=\"highlight\">成本</span>：API调用/推理成本（SiLR: 比GPT低100×）",
      "难点：Agent行为是随机的，需要多次运行取统计量，不能只跑一次"
    ],
    "bullets_ja": [
      "①<span class=\"highlight\">タスク完了率</span>：最終結果が正しいか（SiLR: 97.0%の復旧成功率）",
      "②<span class=\"highlight\">効率</span>：タスク完了に要するステップ数/トークン数/時間（SiLR: 平均3.2ステップ）",
      "③<span class=\"highlight\">安全性</span>：危険なアクション/制約違反を引き起こしたか（SiLR: 違反率0%）",
      "④<span class=\"highlight\">ロバスト性</span>：入力変化時の性能安定性（PowerTS: わずか+2.2%の劣化）",
      "⑤<span class=\"highlight\">コスト</span>：API呼び出し/推論コスト（SiLR: GPTより100倍低コスト）",
      "難点：Agentの挙動は確率的であり、複数回実行して統計量を取る必要がある、1回の実行では不十分"
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "a07",
    "cat": "Agent架构",
    "q": "Guardrails 设计模式",
    "q_ja": "Guardrailsの設計パターン",
    "bullets": [
      "输入Guardrails：过滤恶意/不安全的用户输入（prompt injection检测）",
      "输出Guardrails：检查LLM输出的安全性/合规性/格式正确性",
      "动作Guardrails：<span class=\"highlight\">在执行前验证动作安全性</span>（SiLR验证器就是这类）",
      "回退Guardrails：失败时的兜底策略（Failsafe、默认回答、人工转接）",
      "实现方式：规则(正则/关键词) / 分类器(fine-tuned) / LLM-as-Judge / 仿真器验证"
    ],
    "bullets_ja": [
      "入力Guardrails：悪意のある/安全でないユーザー入力をフィルタリング（Prompt Injection検出）",
      "出力Guardrails：LLM出力の安全性/コンプライアンス/フォーマットの正確性をチェック",
      "アクションGuardrails：<span class=\"highlight\">実行前にアクションの安全性を検証</span>（SiLR検証器がこのタイプ）",
      "フォールバックGuardrails：失敗時のセーフティネット戦略（フェイルセーフ、デフォルト回答、人間への転送）",
      "実装方式：ルール（正規表現/キーワード）/ 分類器（fine-tuned）/ LLM-as-Judge / シミュレータ検証"
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "a08",
    "cat": "Agent架构",
    "q": "Agent 常见失败模式",
    "q_ja": "Agentのよくある失敗パターン",
    "bullets": [
      "①<span class=\"highlight\">无限循环</span>：没有终止条件或步数上限 → Bounded ReAct解决",
      "②<span class=\"highlight\">工具滥用</span>：反复调用同一工具期待不同结果 → 重试上限+失败反馈",
      "③<span class=\"highlight\">最短路径</span>：跳过关键步骤直接回答 → 强制调用guardrails",
      "④<span class=\"highlight\">幻觉动作</span>：调用不存在的工具或生成无效参数 → Schema验证+解析兜底",
      "⑤<span class=\"highlight\">上下文污染</span>：错误信息积累在context中影响后续判断 → 观测压缩+状态重置"
    ],
    "bullets_ja": [
      "①<span class=\"highlight\">無限ループ</span>：終了条件やステップ上限がない → Bounded ReActで解決",
      "②<span class=\"highlight\">ツールの乱用</span>：異なる結果を期待して同じツールを繰り返し呼び出す → リトライ上限+失敗フィードバック",
      "③<span class=\"highlight\">最短経路</span>：重要なステップを飛ばして直接回答 → 強制呼び出しGuardrails",
      "④<span class=\"highlight\">幻覚アクション</span>：存在しないツールの呼び出しや無効なパラメータの生成 → Schema検証+パースのフォールバック",
      "⑤<span class=\"highlight\">コンテキスト汚染</span>：誤った情報がcontextに蓄積し後続の判断に影響 → 観測圧縮+状態リセット"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "aa09",
    "cat": "Agent架构",
    "q": "MCP协议 (Model Context Protocol)",
    "q_ja": "MCPプロトコル（Model Context Protocol）",
    "bullets": [
      "<span class=\"highlight\">MCP</span>是Anthropic提出的开放协议，标准化LLM与外部工具/数据源的连接方式",
      "类比：USB-C统一了充电接口 → MCP统一了<span class=\"highlight\">AI与工具的接口</span>。一次实现，所有模型都能用",
      "三大能力：①<span class=\"highlight\">Tools</span>（模型调用外部函数） ②<span class=\"highlight\">Resources</span>（模型读取外部数据） ③<span class=\"highlight\">Prompts</span>（预定义的交互模板）",
      "架构：Client(LLM应用) ↔ MCP Server(工具提供者)。传输层支持stdio/HTTP SSE",
      "优势vs自定义Function Calling：标准化(跨模型复用) / 发现机制(动态列出可用工具) / 安全模型(权限控制内置)"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">MCP</span>はAnthropicが提案したオープンプロトコルで、LLMと外部ツール/データソースの接続方式を標準化",
      "例え：USB-Cが充電端子を統一 → MCPが<span class=\"highlight\">AIとツールのインターフェース</span>を統一。一度実装すれば全モデルで使用可能",
      "3つの主要機能：①<span class=\"highlight\">Tools</span>（モデルが外部関数を呼び出す） ②<span class=\"highlight\">Resources</span>（モデルが外部データを読み取る） ③<span class=\"highlight\">Prompts</span>（事前定義された対話テンプレート）",
      "アーキテクチャ：Client（LLMアプリ） ↔ MCP Server（ツール提供者）。トランスポート層はstdio/HTTP SSEをサポート",
      "カスタムFunction Callingに対する優位性：標準化（クロスモデル再利用）/ ディスカバリ機構（利用可能なツールを動的にリスト）/ セキュリティモデル（権限制御が組み込み）"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "aa10",
    "cat": "Agent架构",
    "q": "Agent记忆系统设计（深入）",
    "q_ja": "Agentメモリシステムの設計（詳細）",
    "bullets": [
      "记忆三层架构：<span class=\"highlight\">感知层</span>(原始输入) → <span class=\"highlight\">工作记忆层</span>(当前任务上下文) → <span class=\"highlight\">长期记忆层</span>(持久化知识)",
      "工作记忆管理：context window有限 → 关键技术：①摘要压缩 ②滑动窗口 ③重要性评分后选择性保留",
      "长期记忆存储：向量数据库(语义检索) + 结构化数据库(精确查询) + 知识图谱(关系推理)",
      "记忆检索策略：<span class=\"highlight\">相关性</span>(embedding相似度) + <span class=\"highlight\">时效性</span>(时间衰减) + <span class=\"highlight\">重要性</span>(访问频率/情感强度)",
      "你的实践：SiLR观测压缩(2000→300 tokens)就是工作记忆管理；RAG向量检索就是长期记忆检索"
    ],
    "bullets_ja": [
      "メモリの三層アーキテクチャ：<span class=\"highlight\">知覚層</span>（生の入力）→ <span class=\"highlight\">ワーキングメモリ層</span>（現在のタスクコンテキスト）→ <span class=\"highlight\">長期記憶層</span>（永続化された知識）",
      "ワーキングメモリ管理：context windowに制限あり → 鍵となる技術：①要約圧縮 ②スライディングウィンドウ ③重要度スコアリングによる選択的保持",
      "長期記憶の保存：ベクトルDB（意味検索）+ 構造化DB（精密クエリ）+ 知識グラフ（関係推論）",
      "メモリ検索戦略：<span class=\"highlight\">関連性</span>（Embedding類似度）+ <span class=\"highlight\">時効性</span>（時間減衰）+ <span class=\"highlight\">重要性</span>（アクセス頻度/感情の強度）",
      "自身の実践：SiLRの観測圧縮（2000→300トークン）がワーキングメモリ管理；RAGのベクトル検索が長期記憶の検索"
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "aa11",
    "cat": "Agent架构",
    "q": "Multi-Agent协作模式（深入）",
    "q_ja": "Multi-Agent協調パターン（詳細）",
    "bullets": [
      "<span class=\"highlight\">辩论模式</span>：多个Agent各持观点，通过多轮辩论达成共识 → 提升推理质量（如Society of Mind）",
      "<span class=\"highlight\">流水线模式</span>：Agent A的输出作为Agent B的输入 → 适合有明确流程的任务（研究→写作→审查）",
      "<span class=\"highlight\">投票模式</span>：多个Agent独立完成任务，多数投票选最佳 → Self-Consistency的Agent版本",
      "协作挑战：①状态同步（共享记忆的一致性） ②任务分配（避免重复工作） ③冲突解决（Agent意见不一致时的仲裁）",
      "框架对比：LangGraph(最灵活，图定义) / CrewAI(角色驱动，简单) / AutoGen(对话驱动，微软)"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">ディベートパターン</span>：複数のAgentがそれぞれ見解を持ち、複数ラウンドの議論で合意形成 → 推論品質の向上（例：Society of Mind）",
      "<span class=\"highlight\">パイプラインパターン</span>：Agent Aの出力がAgent Bの入力 → 明確なフローのあるタスクに適する（研究→執筆→レビュー）",
      "<span class=\"highlight\">投票パターン</span>：複数のAgentが独立にタスクを完了し、多数決で最善を選択 → Self-ConsistencyのAgent版",
      "協調の課題：①状態同期（共有メモリの一貫性） ②タスク分配（重複作業の回避） ③コンフリクト解決（Agent間で意見が分かれた場合の裁定）",
      "フレームワーク比較：LangGraph（最も柔軟、グラフ定義）/ CrewAI（ロール駆動、シンプル）/ AutoGen（対話駆動、Microsoft）"
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "aa12",
    "cat": "Agent架构",
    "q": "Agent安全与对齐",
    "q_ja": "Agentの安全性とアライメント",
    "bullets": [
      "核心原则：Agent拥有工具调用能力 → 安全比纯文本生成<span class=\"highlight\">重要10倍</span>（可以真正造成损害）",
      "<span class=\"highlight\">最小权限</span>：每个Agent/工具只授予完成任务所需的最小权限。读写分离，危险操作需人工确认",
      "<span class=\"highlight\">沙箱执行</span>：代码执行在隔离环境中运行（Docker/VM），网络访问白名单，文件系统只读挂载",
      "<span class=\"highlight\">人类在回路</span>(Human-in-the-Loop)：高风险动作（删除/付款/发布）必须人工审批。SiLR验证器就是自动化版HITL",
      "对齐难题：Agent优化任务目标时可能产生意外行为（specification gaming）→ 需要明确约束+过程监控，不只看最终结果"
    ],
    "bullets_ja": [
      "核心原則：Agentはツール呼び出し能力を持つ → 安全性はテキスト生成のみの場合より<span class=\"highlight\">10倍重要</span>（実際に損害を引き起こす可能性がある）",
      "<span class=\"highlight\">最小権限</span>：各Agent/ツールにタスク完了に必要な最小限の権限のみ付与。読み書き分離、危険な操作は人間の確認が必要",
      "<span class=\"highlight\">サンドボックス実行</span>：コード実行を隔離環境で行う（Docker/VM）、ネットワークアクセスはホワイトリスト、ファイルシステムは読み取り専用マウント",
      "<span class=\"highlight\">Human-in-the-Loop</span>：高リスクなアクション（削除/支払い/公開）は人間の承認が必須。SiLR検証器は自動化版HITL",
      "アライメントの難題：Agentがタスク目標を最適化する際に予期しない行動を取る可能性（specification gaming）→ 明確な制約+プロセス監視が必要、最終結果だけを見ない"
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "pe01",
    "cat": "Prompt工程",
    "q": "Few-shot 设计原则",
    "q_ja": "Few-shotの設計原則",
    "bullets": [
      "示例数量：不是越多越好（你的实验：<span class=\"num\">1-shot > 3-shot</span>），多了会稀释attention",
      "示例选择：选和当前任务最相似的示例 → 动态few-shot(从向量库检索)",
      "示例顺序：最相关的放最后（recency bias），或打乱测试影响",
      "格式一致：示例的输入输出格式要和实际任务完全一致",
      "Zero-shot足够时不加示例——简单才是最优解"
    ],
    "bullets_ja": [
      "例示の数量：多ければ良いわけではない（自身の実験：<span class=\"num\">1-shot > 3-shot</span>）、多すぎるとAttentionが希薄化",
      "例示の選択：現在のタスクに最も類似した例を選ぶ → 動的Few-shot（ベクトルDBから検索）",
      "例示の順序：最も関連性の高いものを最後に配置（recency bias）、またはシャッフルして影響をテスト",
      "フォーマットの一貫性：例示の入出力フォーマットは実際のタスクと完全に一致させる",
      "Zero-shotで十分な場合は例示を加えない——シンプルが最適解"
    ],
    "group": "基础",
    "lv": 1
  },
  {
    "id": "pe02",
    "cat": "Prompt工程",
    "q": "Chain-of-Thought (CoT) 变体",
    "q_ja": "Chain-of-Thought (CoT) のバリエーション",
    "bullets": [
      "标准CoT：\"Let's think step by step\" → 引导模型展示推理过程",
      "Self-Consistency：多次采样CoT → 投票选最常见答案 → 准确率+10-20%",
      "Tree-of-Thought：多条推理路径并行探索 → 复杂推理任务",
      "ReAct：CoT + Action（思考-行动-观察循环）→ <span class=\"highlight\">你的SiLR-Agent核心范式</span>",
      "何时用：需要多步推理的任务。简单任务加CoT反而慢且可能更差"
    ],
    "bullets_ja": [
      "標準CoT：「Let's think step by step」→ モデルに推論過程を示させるよう誘導",
      "Self-Consistency：CoTを複数回サンプリング → 最も多い回答に投票 → 精度+10-20%",
      "Tree-of-Thought：複数の推論パスを並列探索 → 複雑な推論タスク向け",
      "ReAct：CoT + Action（思考-行動-観察のループ）→ <span class=\"highlight\">自身のSiLR-Agentの中核パラダイム</span>",
      "使用タイミング：多段階推論が必要なタスク。単純なタスクにCoTを加えるとかえって遅く、性能が低下する可能性も"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "pe03",
    "cat": "Prompt工程",
    "q": "Structured Output 技巧",
    "q_ja": "Structured Outputのテクニック",
    "bullets": [
      "JSON Mode：强制LLM输出有效JSON → OpenAI支持response_format",
      "Function Calling：更严格的结构化输出 → 定义schema，输出必须符合",
      "XML标签：用<tag>标记不同部分 → Claude擅长",
      "输出约束：在prompt中明确格式要求 + 给示例 + 末尾开始输出格式引导",
      "兜底：总是做输出解析和验证 → 你的三层ActionParser就是处理结构化输出不可靠的问题"
    ],
    "bullets_ja": [
      "JSON Mode：LLMに有効なJSONを強制出力 → OpenAIがresponse_formatをサポート",
      "Function Calling：より厳格な構造化出力 → Schemaを定義し、出力はそれに準拠する必要あり",
      "XMLタグ：<tag>で異なる部分をマークアップ → Claudeが得意",
      "出力制約：プロンプトでフォーマット要件を明示 + 例示 + 末尾で出力フォーマットを誘導",
      "フォールバック：常に出力の解析と検証を行う → 自身の三層ActionParserは構造化出力の不確実性に対処"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "pe04",
    "cat": "Prompt工程",
    "q": "System Prompt 设计",
    "q_ja": "System Promptの設計",
    "bullets": [
      "角色设定：明确AI的身份、能力边界、行为规范",
      "任务定义：清晰描述要做什么、输出格式、约束条件",
      "工具说明：可用工具列表 + 使用时机 + 参数说明",
      "<span class=\"highlight\">MUST/NEVER规则</span>：关键行为用强制语言（你的经验：Agent不调judge→加MUST call）",
      "动态注入：根据用户输入/上下文动态调整system prompt的部分内容 → Context Engineering"
    ],
    "bullets_ja": [
      "ロール設定：AIのアイデンティティ、能力の境界、行動規範を明確にする",
      "タスク定義：何をすべきか、出力フォーマット、制約条件を明確に記述",
      "ツール説明：利用可能なツール一覧 + 使用タイミング + パラメータ説明",
      "<span class=\"highlight\">MUST/NEVERルール</span>：重要な行動には強制的な表現を使用（自身の経験：Agentがjudgeを呼ばない → MUST callを追加）",
      "動的注入：ユーザー入力/コンテキストに基づきsystem promptの一部を動的に調整 → Context Engineering"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "pe05",
    "cat": "Prompt工程",
    "q": "Prompt Injection 攻防",
    "q_ja": "Prompt Injectionの攻防",
    "bullets": [
      "攻击：用户在输入中嵌入\"忽略之前的指令\"等内容，劫持模型行为",
      "防御①：输入过滤 → 检测可疑模式（\"ignore previous\"/\"you are now\"）",
      "防御②：分隔符 → 用```或XML标签明确区分system/user内容",
      "防御③：LLM-as-Guard → 用另一个模型检测输入是否含注入",
      "防御④：<span class=\"highlight\">最小权限</span> → Agent的工具权限按任务分配，即使被注入也无法执行危险操作",
      "你的方案：SiLR验证器在执行层拦截 → 即使prompt被劫持，危险动作也不会通过验证"
    ],
    "bullets_ja": [
      "攻撃：ユーザーが入力に「前の指示を無視せよ」などを埋め込み、モデルの挙動を乗っ取る",
      "防御①：入力フィルタリング → 疑わしいパターンを検出（「ignore previous」/「you are now」）",
      "防御②：デリミタ → ```やXMLタグでsystem/user内容を明確に区別",
      "防御③：LLM-as-Guard → 別のモデルで入力にインジェクションが含まれるか検出",
      "防御④：<span class=\"highlight\">最小権限</span> → Agentのツール権限をタスクごとに割り当て、インジェクションされても危険な操作は実行不可",
      "自身の方式：SiLR検証器が実行層で遮断 → promptが乗っ取られても危険なアクションは検証を通過しない"
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "pe06",
    "cat": "Prompt工程",
    "q": "自动Prompt优化（DSPy / OPRO）",
    "q_ja": "自動Prompt最適化（DSPy / OPRO）",
    "bullets": [
      "痛点：手动调prompt靠直觉和试错，不可复现、不可扩展",
      "<span class=\"highlight\">DSPy</span>：将prompt工程变成编程——定义Signature(输入/输出)+Module(推理模式)，编译器自动优化prompt",
      "<span class=\"highlight\">OPRO</span>(Google)：用LLM优化prompt——给当前prompt和评分，让LLM生成更好的prompt，迭代进化",
      "对比：DSPy=<span class=\"highlight\">编程范式</span>（结构化、可组合、可测试）；OPRO=<span class=\"highlight\">搜索范式</span>（黑盒优化、简单上手）",
      "实践建议：先手动写baseline → 效果不够时上自动优化。简单任务手动足够，复杂pipeline用DSPy"
    ],
    "bullets_ja": [
      "課題：手動でのPrompt調整は直感と試行錯誤に依存、再現不可能でスケールしない",
      "<span class=\"highlight\">DSPy</span>：Prompt工程をプログラミングに変換——Signature（入出力）+Module（推論パターン）を定義、コンパイラが自動でPromptを最適化",
      "<span class=\"highlight\">OPRO</span>（Google）：LLMでPromptを最適化——現在のPromptとスコアを渡し、LLMにより良いPromptを生成させ反復的に進化",
      "比較：DSPy＝<span class=\"highlight\">プログラミングパラダイム</span>（構造化・組み合わせ可能・テスト可能）；OPRO＝<span class=\"highlight\">探索パラダイム</span>（ブラックボックス最適化・手軽）",
      "実践のアドバイス：まず手動でベースラインを作成 → 効果が不十分なら自動最適化へ。単純なタスクなら手動で十分、複雑なパイプラインにはDSPy"
    ],
    "group": "基础",
    "lv": 3
  },
  {
    "id": "pe07",
    "cat": "Prompt工程",
    "q": "System Prompt最佳实践清单",
    "q_ja": "System Promptのベストプラクティス一覧",
    "bullets": [
      "结构模板：<span class=\"highlight\">角色 → 任务 → 约束 → 输出格式 → 示例</span>（由粗到细）",
      "语言选择：指令语言和目标输出语言一致效果更好。多语言场景需明确指定输出语言",
      "长度控制：System Prompt过长会降低模型对用户输入的注意力。核心规则放最前面，细节放后面",
      "版本管理：System Prompt应该<span class=\"highlight\">版本化+A/B测试</span>，不要随意改动。每次改动记录原因和效果",
      "安全设计：①敏感信息不放system prompt（可被提取） ②关键约束重复强调（头尾各一次） ③用XML/分隔符区分不同section"
    ],
    "bullets_ja": [
      "構造テンプレート：<span class=\"highlight\">ロール → タスク → 制約 → 出力フォーマット → 例示</span>（粗から細へ）",
      "言語選択：指示言語と目標出力言語を一致させると効果が高い。多言語シナリオでは出力言語を明示的に指定",
      "長さの制御：System Promptが長すぎるとモデルのユーザー入力への注意力が低下。コアルールを先頭に、詳細は後方に配置",
      "バージョン管理：System Promptは<span class=\"highlight\">バージョン管理+A/Bテスト</span>を行い、安易に変更しない。変更ごとに理由と効果を記録",
      "セキュリティ設計：①機密情報はsystem promptに入れない（抽出される恐れ） ②重要な制約は繰り返し強調（先頭と末尾で各1回） ③XML/デリミタで各セクションを区別"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "pe08",
    "cat": "Prompt工程",
    "q": "Prompt模板库与复用模式",
    "q_ja": "Promptテンプレートライブラリと再利用パターン",
    "bullets": [
      "<span class=\"highlight\">提取模式</span>：从非结构化文本中提取结构化信息 → \"从以下文本中提取[字段列表]，以JSON格式输出\"",
      "<span class=\"highlight\">分类模式</span>：将输入分到预定义类别 → 给出类别列表+每类说明+few-shot示例",
      "<span class=\"highlight\">转换模式</span>：翻译/改写/格式转换 → 明确源格式和目标格式+风格要求",
      "<span class=\"highlight\">推理模式</span>：需要分析判断 → CoT引导+中间步骤约束+最终结论格式",
      "复用原则：模板参数化（用变量占位） → 与代码一起版本管理 → 定期评估效果退化"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">抽出パターン</span>：非構造化テキストから構造化情報を抽出 → 「以下のテキストから[フィールドリスト]を抽出し、JSON形式で出力」",
      "<span class=\"highlight\">分類パターン</span>：入力を事前定義カテゴリに分類 → カテゴリ一覧+各カテゴリの説明+Few-shot例示を提示",
      "<span class=\"highlight\">変換パターン</span>：翻訳/書き換え/フォーマット変換 → ソースフォーマットとターゲットフォーマット+スタイル要件を明示",
      "<span class=\"highlight\">推論パターン</span>：分析・判断が必要 → CoTで誘導+中間ステップの制約+最終結論のフォーマット",
      "再利用の原則：テンプレートをパラメータ化（変数プレースホルダー） → コードと一緒にバージョン管理 → 定期的に効果の劣化を評価"
    ],
    "group": "基础",
    "lv": 2
  },
  {
    "id": "v01",
    "cat": "模型评测",
    "q": "SA做模型评测要回答客户的3个核心问题",
    "q_ja": "SAがモデル評価で顧客に答えるべき3つの核心的な質問",
    "bullets": [
      "① \"哪个模型最适合我的场景？\" → 模型选型评测（多模型对比）",
      "② \"效果到底怎么样？用数字说话。\" → 客户场景定量评估（客户数据构建评测集）",
      "③ \"值不值得花这个钱？\" → 成本-性能 trade-off 分析（Pareto图）",
      "评测在MaaS中的角色：客户场景→SA设计评测→跑对比→出报告→客户选型→发现短板→反馈模型团队→<span class=\"highlight\">数据飞轮</span>"
    ],
    "bullets_ja": [
      "① \"どのモデルが自社のユースケースに最適か？\" → モデル選定評価（複数モデル比較）",
      "② \"実際の効果はどうか？数字で示してほしい\" → 顧客シナリオの定量評価（顧客データで評価セットを構築）",
      "③ \"このコストに見合う価値があるか？\" → コスト・性能のtrade-off分析（Paretoチャート）",
      "評価のMaaSにおける役割：顧客シナリオ→SA評価設計→比較実行→レポート作成→顧客の選定→弱点発見→モデルチームへフィードバック→<span class=\"highlight\">データフライホイール</span>"
    ],
    "group": "工程",
    "lv": 1
  },
  {
    "id": "v02",
    "cat": "模型評測",
    "q": "评测5+1维度框架",
    "q_ja": "評価の5+1次元フレームワーク",
    "bullets": [
      "① 质量（准确率/F1/Recall@K）→ 技术负责人关心",
      "② 延迟（TTFT首token延迟/TPS/P50/P95/P99）→ 工程团队关心",
      "③ 吞吐（QPS每秒请求数）→ 运维关心",
      "④ 成本（$/1M tokens、月度总费用）→ 采购/管理层关心",
      "⑤ 安全合规（幻觉率/拒答率/敏感信息泄漏率）→ 法务关心",
      "+1 鲁棒性（噪声下退化幅度）→ 不同角色关心不同维度，SA帮客户找最优平衡点"
    ],
    "bullets_ja": [
      "① 品質（正解率/F1/Recall@K）→ 技術責任者が注目",
      "② レイテンシ（TTFT初回トークン遅延/TPS/P50/P95/P99）→ エンジニアリングチームが注目",
      "③ スループット（QPS：秒間リクエスト数）→ 運用チームが注目",
      "④ コスト（$/1Mトークン、月額総費用）→ 調達/経営層が注目",
      "⑤ セキュリティ・コンプライアンス（ハルシネーション率/拒否応答率/機密情報漏洩率）→ 法務が注目",
      "+1 ロバスト性（ノイズ下での性能低下幅）→ 役割ごとに注目する次元が異なり、SAが顧客にとって最適なバランス点を見つける"
    ],
    "group": "工程",
    "lv": 2
  },
  {
    "id": "v03",
    "cat": "模型评测",
    "q": "Benchmark vs 客户场景评测",
    "q_ja": "Benchmark vs 顧客シナリオ評価",
    "bullets": [
      "Benchmark（MMLU/HumanEval/MT-Bench）：可比性强但和客户场景可能脱节、有数据污染风险",
      "客户场景评测：直接反映效果但构建成本高",
      "正确做法：<span class=\"highlight\">Benchmark快速初筛 + 客户数据精确验证</span>",
      "永远不要只用benchmark做推荐。MMLU最高的模型在客户日语QA上可能不是最好的",
      "Benchmark局限：数据污染 / 指标游戏 / 和业务脱节 / 静态不更新"
    ],
    "bullets_ja": [
      "Benchmark（MMLU/HumanEval/MT-Bench）：比較性は高いが顧客シナリオと乖離する可能性あり、データ汚染リスクもある",
      "顧客シナリオ評価：効果を直接反映するが構築コストが高い",
      "正しいアプローチ：<span class=\"highlight\">Benchmarkで素早くスクリーニング + 顧客データで精密に検証</span>",
      "Benchmarkだけで推薦してはいけない。MMLUスコア最高のモデルが顧客の日本語QAで最適とは限らない",
      "Benchmarkの限界：データ汚染 / 指標のゲーム化 / ビジネスとの乖離 / 静的で更新されない"
    ],
    "group": "工程",
    "lv": 2
  },
  {
    "id": "v04",
    "cat": "模型评测",
    "q": "4种评测方法（离线→在线）",
    "q_ja": "4種類の評価手法（オフライン→オンライン）",
    "bullets": [
      "① 离线评测：有标准答案→准确率/F1；开放生成→BLEU/ROUGE/BERTScore。适合初筛、PoC",
      "② LLM-as-Judge：强模型评弱模型，比人工便宜100×，比BLEU更接近人工判断",
      "  缺点：Position Bias(打乱) / Self-bias(交叉评估) / 分数不稳定(多次取平均)",
      "③ 人工评测：盲评+对比评，IRR(Cohen's Kappa)衡量一致性，高风险场景最终验证",
      "④ A/B测试：线上真实流量，用业务指标(CTR/転化率/留存)评价——<span class=\"highlight\">金标准</span>"
    ],
    "bullets_ja": [
      "① オフライン評価：正解あり→正解率/F1、自由生成→BLEU/ROUGE/BERTScore。スクリーニングやPoCに適する",
      "② LLM-as-Judge：強いモデルで弱いモデルを評価、人手の100分の1のコスト、BLEUより人間の判断に近い",
      "  欠点：Position Bias（順序をシャッフル）/ Self-bias（クロス評価）/ スコアの不安定性（複数回平均を取る）",
      "③ 人手評価：ブラインド評価+比較評価、IRR（Cohen's Kappa）で一致性を測定、高リスクシナリオの最終検証",
      "④ A/Bテスト：本番の実トラフィックで、ビジネス指標（CTR/コンバージョン率/リテンション）で評価——<span class=\"highlight\">ゴールドスタンダード</span>"
    ],
    "group": "工程",
    "lv": 2
  },
  {
    "id": "v05",
    "cat": "模型评测",
    "q": "SA给客户做评测的8步标准流程",
    "q_ja": "SAが顧客向けに評価を行う8ステップの標準フロー",
    "bullets": [
      "① 需求对齐（质量优先 or 成本优先？合规要求？）",
      "② 数据准备（从客户数据构建50-200条评测集，含gold standard）",
      "③ 指标定义（2-3个核心指标 + 成本指标）",
      "④ 候选模型（3-5个：大/中/小 + 開源/閉源）",
      "⑤ 跑评测 → ⑥ 分析（Pareto图+错误分析+边界案例）",
      "⑦ 出报告（推荐方案+数据支撑+trade-off说明）→ ⑧ 决策支持"
    ],
    "bullets_ja": [
      "① 要件の擦り合わせ（品質優先 or コスト優先？コンプライアンス要件は？）",
      "② データ準備（顧客データから50〜200件の評価セットを構築、gold standard含む）",
      "③ 指標定義（コア指標2〜3個 + コスト指標）",
      "④ 候補モデル（3〜5個：大/中/小 + オープンソース/クローズドソース）",
      "⑤ 評価実行 → ⑥ 分析（Paretoチャート+エラー分析+エッジケース）",
      "⑦ レポート作成（推奨案+データによる裏付け+trade-off説明）→ ⑧ 意思決定支援"
    ],
    "group": "工程",
    "lv": 2
  },
  {
    "id": "v06",
    "cat": "模型评测",
    "q": "成本-性能 Pareto分析",
    "q_ja": "コスト・性能のPareto分析",
    "bullets": [
      "Pareto前沿：同等成本下质量最高的模型组成的曲线，SA帮客户找符合预算的点",
      "月度成本 = 日均请求数 × 平均tokens/请求 × 単価/token × 30",
      "TCO要算全：API費 + GPU租赁(本地部署) + 运维人力 + 数据标注(微调) + 持续监控",
      "案例：SiLR本地14B成本低100×但效果超过GPT-5.4 → 不是最贵的最好"
    ],
    "bullets_ja": [
      "Paretoフロンティア：同等コストで最高品質のモデルが形成する曲線。SAが顧客の予算に合うポイントを見つける",
      "月額コスト = 1日あたりリクエスト数 × 平均トークン/リクエスト × トークン単価 × 30",
      "TCOを全体で計算：API費用 + GPUレンタル（ローカルデプロイ）+ 運用人件費 + データアノテーション（ファインチューニング）+ 継続的モニタリング",
      "事例：SiLRローカル14Bはコストが100分の1だがGPT-5.4を超える性能 → 最も高価なモデルが最良とは限らない"
    ],
    "group": "工程",
    "lv": 3
  },
  {
    "id": "v07",
    "cat": "模型评测",
    "q": "你的4段评测经验（二面核心素材）",
    "q_ja": "あなたの4つの評価経験（二次面接の核心素材）",
    "bullets": [
      "① SiLR：66场景×5模型×3方法消融矩阵 → 发现DPO隐式偏差/14B>32B/few-shot 1>3",
      "② JP-DocRAG：6种检索方案Recall@K矩阵 + LLM-as-Judge 5维度 → BM25小语料王/Reranker均衡器",
      "③ PowerTS：LSTM vs LLM跨范式对比×干净/加噪条件 → 鲁棒性48.51×/RAG回归有害",
      "④ EdgeRouter：准确率×成本×延迟×WAN条件 → 86%成本节省全延迟范围稳定",
      "共同点：不只看\"哪个最好\"，更关注<span class=\"highlight\">\"为什么有些会失败\"</span>——失败模式比最终数字更有价値"
    ],
    "bullets_ja": [
      "① SiLR：66シナリオ×5モデル×3手法のアブレーション行列 → DPOの暗黙的バイアス/14B>32B/few-shot 1>3を発見",
      "② JP-DocRAG：6種類の検索手法のRecall@K行列 + LLM-as-Judgeの5次元評価 → BM25は小規模コーパスで最強/Rerankerはバランサー",
      "③ PowerTS：LSTM vs LLMのクロスパラダイム比較×クリーン/ノイズ付与条件 → ロバスト性48.51倍/RAGは回帰に有害",
      "④ EdgeRouter：正解率×コスト×レイテンシ×WAN条件 → 86%コスト削減で全レイテンシ範囲で安定",
      "共通点：\"どれが最良か\"だけでなく、<span class=\"highlight\">\"なぜ一部は失敗するのか\"</span>に注目——失敗パターンは最終的な数値より価値がある"
    ],
    "group": "工程",
    "lv": 2
  },
  {
    "id": "v08",
    "cat": "模型评测",
    "q": "评测5个常见坑",
    "q_ja": "評価における5つのよくある落とし穴",
    "bullets": [
      "① 评测集太小→统计不显著（50样本，80% vs 82%置信区间重叠）",
      "② 评测≠部署环境（FP32评测但INT4部署→精度下降没反映）",
      "③ 只看均值忽略分布（平均90%但某类问题只有30%，客户刚好是那类）",
      "④ Benchmark分数≠客户场景效果（MMLU最高的模型日语QA可能不是最好的）",
      "⑤ 忽略成本维度（GPT-5.4最好但API成本100×）"
    ],
    "bullets_ja": [
      "① 評価セットが小さすぎる→統計的に有意でない（50サンプルで80% vs 82%は信頼区間が重なる）",
      "② 評価環境≠デプロイ環境（FP32で評価したがINT4でデプロイ→精度低下が反映されない）",
      "③ 平均値だけ見て分布を無視（平均90%だがある種の問題は30%、顧客がまさにその種類）",
      "④ Benchmarkスコア≠顧客シナリオでの効果（MMLUスコア最高のモデルが日本語QAで最適とは限らない）",
      "⑤ コスト次元を無視（GPT-5.4が最良でもAPIコストが100倍）"
    ],
    "group": "工程",
    "lv": 2
  },
  {
    "id": "v09",
    "cat": "模型评测",
    "q": "\"客户应该用GPT-5.4还是开源模型？\"怎么回答",
    "q_ja": "\"顧客はGPT-5.4とオープンソースモデルのどちらを使うべきか？\"への回答方法",
    "bullets": [
      "不能直接回答\"用哪个\"，要先搞清楚4个约束：",
      "① 数据安全：能不能上传第三方？日本金融客户通常不行→开源本地部署",
      "② 预算：月度API费用能接受多少？算TCO",
      "③ 定制需求：需不需要微调？GPT不能微调底层权重",
      "④ 延迟要求：API有网络延迟",
      "然后用客户数据跑对比。14B微调后能超GPT-5.4 few-shot（SiLR就是案例）"
    ],
    "bullets_ja": [
      "\"どちらを使うべきか\"と直接答えてはいけない。まず4つの制約条件を明確にする：",
      "① データセキュリティ：第三者にアップロードできるか？日本の金融顧客は通常不可→オープンソースのローカルデプロイ",
      "② 予算：月額API費用はいくらまで許容できるか？TCOを算出",
      "③ カスタマイズ要件：ファインチューニングが必要か？GPTは基盤の重みをファインチューニングできない",
      "④ レイテンシ要件：APIにはネットワーク遅延がある",
      "その上で顧客データで比較実験を行う。14Bモデルをファインチューニングすればfew-shotのGPT-5.4を超えられる（SiLRがその事例）"
    ],
    "group": "工程",
    "lv": 2
  },
  {
    "id": "v10",
    "cat": "模型评测",
    "q": "评测效果不好，下一步怎么办？（按成本排序）",
    "q_ja": "評価結果が良くない場合、次にどうするか？（コスト順）",
    "bullets": [
      "① 先优化Prompt（免费）：few-shot/CoT/输出约束/角色设定",
      "② 优化Pipeline（低成本）：RAG→检查chunking/embedding/reranker",
      "③ 做Fine-tuning（中等成本）：LoRA微调，需要标注数据",
      "④ 换模型（高成本）：更大模型或不同家族",
      "原则：<span class=\"highlight\">先做便宜的，再做贵的，最后才换模型</span>"
    ],
    "bullets_ja": [
      "① まずPromptを最適化（無料）：few-shot/CoT/出力制約/ロール設定",
      "② Pipelineを最適化（低コスト）：RAG→chunking/embedding/rerankerを見直す",
      "③ Fine-tuningを実施（中程度のコスト）：LoRAファインチューニング、アノテーションデータが必要",
      "④ モデルを変更（高コスト）：より大きなモデルまたは別のモデルファミリー",
      "原則：<span class=\"highlight\">まず安いものから、次に高いもの、最後にモデル変更</span>"
    ],
    "group": "工程",
    "lv": 3
  },
  {
    "id": "v11",
    "cat": "模型评测",
    "q": "常见Benchmark速查",
    "q_ja": "主要Benchmarkクイックリファレンス",
    "bullets": [
      "通用：MMLU(知识广度) / MT-Bench(多轮对话) / Chatbot Arena(人工ELO排名，最接近真实)",
      "代码：HumanEval / MBPP；数学：MATH / GSM8K；常识：ARC / HellaSwag",
      "日语：JGLUE(日本版GLUE) / JCommonsenseQA；多语言：MGSM / XL-Sum",
      "Chatbot Arena是最可信的排名（人工盲评），但样本偏向英语对话场景",
      "SA做法：Benchmark排除明显不行的 → <span class=\"highlight\">客户数据才是最终裁判</span>"
    ],
    "bullets_ja": [
      "汎用：MMLU（知識の広さ）/ MT-Bench（マルチターン対話）/ Chatbot Arena（人手によるELOランキング、最も実態に近い）",
      "コード：HumanEval / MBPP、数学：MATH / GSM8K、常識：ARC / HellaSwag",
      "日本語：JGLUE（日本版GLUE）/ JCommonsenseQA、多言語：MGSM / XL-Sum",
      "Chatbot Arenaは最も信頼性の高いランキング（人手によるブラインド評価）だが、サンプルは英語対話シナリオに偏る",
      "SAのアプローチ：Benchmarkで明らかに不適格なものを除外 → <span class=\"highlight\">顧客データこそが最終的な判断基準</span>"
    ],
    "group": "工程",
    "lv": 1
  },
  {
    "id": "v12",
    "cat": "模型评测",
    "q": "二面主动带出一面反思（加分话术）",
    "q_ja": "二次面接で一次面接の振り返りを自ら提示する（加点トーク術）",
    "bullets": [
      "\"上次和Sun Bojie聊完后我一直在想工程vs模型能力的问题\"",
      "\"我觉得我之前太关注工程层面了，但其实项目中真正有长期价值的是评测方法论和模型边界的发现\"",
      "\"DPO隐式偏差、RAG对回归有害、Token离散化鲁棒性——这些洞察不会因下一代模型过时\"",
      "\"评测是连接工程和模型的桥梁：工程方案产生数据→评测发现短板→反馈模型改进→数据飞轮\"",
      "展示：能反思(成长性) + 区分临时/持久价值(产品化思维) + 理解评测角色(契合二面方向)"
    ],
    "bullets_ja": [
      "\"前回Sun Bojieさんとお話しした後、エンジニアリング能力vsモデル能力についてずっと考えていました\"",
      "\"以前はエンジニアリング面に注目しすぎていましたが、実はプロジェクトで長期的な価値があるのは評価方法論とモデルの限界の発見です\"",
      "\"DPOの暗黙的バイアス、RAGが回帰に有害、トークン離散化のロバスト性——これらの知見は次世代モデルが出ても陳腐化しません\"",
      "\"評価はエンジニアリングとモデルを繋ぐ橋：エンジニアリング方式がデータを生む→評価が弱点を発見→モデル改善にフィードバック→データフライホイール\"",
      "アピール：振り返りができる（成長性）+ 一時的/永続的な価値を区別できる（プロダクト思考）+ 評価の役割を理解している（二次面接の方向性に合致）"
    ],
    "group": "工程",
    "lv": 2
  },
  {
    "id": "me13",
    "cat": "模型评测",
    "q": "A/B测试设计与统计显著性",
    "q_ja": "A/Bテスト設計と統計的有意性",
    "bullets": [
      "<span class=\"highlight\">A/B测试</span>：将用户随机分为对照组和实验组，分别使用不同模型/策略，比较业务指标",
      "关键设计要素：①随机分流（避免选择偏差） ②样本量估算（power analysis，通常需1000+样本） ③单一变量（一次只改一个因素）",
      "统计显著性：p-value < 0.05 表示结果非偶然。<span class=\"highlight\">置信区间不重叠</span>才能说有显著差异",
      "常见陷阱：①过早停止实验（peeking problem）→预设实验周期 ②辛普森悖论（分组后结论反转）→检查子群 ③多重比较（同时测5个指标p值膨胀）→Bonferroni校正",
      "实践：LLM场景常用指标——用户满意度评分、任务完成率、对话轮数、留存率"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">A/Bテスト</span>：ユーザーをコントロール群と実験群にランダムに分け、異なるモデル/戦略を使用してビジネス指標を比較する",
      "重要な設計要素：①ランダム振り分け（選択バイアスの回避） ②サンプルサイズの推定（power analysis、通常1000+サンプルが必要） ③単一変数（一度に変えるのは1要素だけ）",
      "統計的有意性：p-value < 0.05 は結果が偶然でないことを示す。<span class=\"highlight\">信頼区間が重なっていない</span>場合に有意差があると言える",
      "よくある落とし穴：①実験の早期終了（peeking problem）→実験期間を事前設定 ②シンプソンのパラドックス（分群後に結論が逆転）→サブグループを確認 ③多重比較（5指標を同時検定するとp値が膨張）→Bonferroni補正",
      "実践：LLMシナリオでよく使う指標——ユーザー満足度スコア、タスク完了率、対話ターン数、リテンション率"
    ],
    "group": "工程",
    "lv": 3
  },
  {
    "id": "me14",
    "cat": "模型评测",
    "q": "偏差-方差权衡 (Bias-Variance Tradeoff)",
    "q_ja": "バイアス・バリアンストレードオフ (Bias-Variance Tradeoff)",
    "bullets": [
      "总误差 = <span class=\"highlight\">偏差²</span> + <span class=\"highlight\">方差</span> + 不可约噪声",
      "高偏差(欠拟合)：模型太简单，训练集和测试集误差都高 → 增加模型复杂度/特征",
      "高方差(过拟合)：模型太复杂，训练集误差低但测试集高 → 正则化/dropout/更多数据/早停",
      "LLM语境下：小模型高偏差（能力不足）、大模型可能高方差（对prompt措辞敏感）→ 微调=降偏差，prompt ensemble=降方差",
      "诊断方法：学习曲线（训练集/验证集误差随数据量变化）→ 两条线都高=偏差问题，gap大=方差问题"
    ],
    "bullets_ja": [
      "総誤差 = <span class=\"highlight\">バイアス²</span> + <span class=\"highlight\">バリアンス</span> + 削減不可能なノイズ",
      "高バイアス（未学習）：モデルが単純すぎて、訓練セットとテストセットの両方で誤差が高い → モデルの複雑さ/特徴量を増やす",
      "高バリアンス（過学習）：モデルが複雑すぎて、訓練誤差は低いがテスト誤差が高い → 正則化/dropout/データ追加/早期終了",
      "LLMの文脈では：小型モデルは高バイアス（能力不足）、大型モデルは高バリアンスの可能性（promptの表現に敏感）→ ファインチューニング=バイアスを下げる、prompt ensemble=バリアンスを下げる",
      "診断方法：学習曲線（訓練セット/検証セットの誤差がデータ量に応じてどう変化するか）→ 2本の曲線がともに高い=バイアスの問題、ギャップが大きい=バリアンスの問題"
    ],
    "group": "工程",
    "lv": 2
  },
  {
    "id": "me15",
    "cat": "模型评测",
    "q": "评测集构建方法论",
    "q_ja": "評価セット構築の方法論",
    "bullets": [
      "评测集质量决定评测结论的可信度。<span class=\"highlight\">垃圾数据 → 垃圾评测</span>",
      "构建步骤：①从真实业务数据采样（保持分布） ②分层采样覆盖各类型（简单/中等/困难、各领域） ③标注gold standard（多人标注+一致性检查）",
      "规模指南：PoC快速验证50-100条；正式评测200-500条；统计显著性分析需1000+条",
      "注意事项：①避免数据泄漏（评测集不能出现在训练数据中） ②定期更新（防止模型\"记住\"答案） ③包含<span class=\"highlight\">边界案例</span>（空输入/超长输入/対抗样本）",
      "评测集版本管理：用hash标识版本，确保不同时期的评测结果可比"
    ],
    "bullets_ja": [
      "評価セットの品質が評価結論の信頼性を決定する。<span class=\"highlight\">ゴミデータ → ゴミ評価</span>",
      "構築ステップ：①実際のビジネスデータからサンプリング（分布を維持） ②層別サンプリングで各タイプをカバー（簡単/中程度/困難、各ドメイン） ③gold standardのアノテーション（複数人アノテーション+一致性チェック）",
      "規模の目安：PoCの迅速な検証には50〜100件、正式評価には200〜500件、統計的有意性分析には1000件以上",
      "注意事項：①データリークの回避（評価セットが訓練データに含まれてはいけない） ②定期的な更新（モデルが答えを\"覚える\"のを防ぐ） ③<span class=\"highlight\">エッジケース</span>を含める（空入力/超長入力/敵対的サンプル）",
      "評価セットのバージョン管理：ハッシュでバージョンを識別し、異なる時期の評価結果を比較可能にする"
    ],
    "group": "工程",
    "lv": 3
  },
  {
    "id": "t01",
    "cat": "技术概念",
    "q": "FastAPI / Streamlit / SSE 是什么？",
    "q_ja": "FastAPI / Streamlit / SSE とは？",
    "bullets": [
      "FastAPI：Python高性能Web框架，原生异步+自动API文档+类型校验，性能接近Go/Node",
      "FastAPI vs Flask：Flask更老但不支持原生异步，FastAPI更适合AI服务",
      "Streamlit：Python快速搭前端，适合PoC和demo（不适合生产环境）",
      "SSE(Server-Sent Events)：服务器→客户端单向推送，LLM逐token流式输出用SSE就够了",
      "SSE vs WebSocket：SSE单向，WebSocket双向"
    ],
    "bullets_ja": [
      "FastAPI：Python高性能Webフレームワーク、ネイティブ非同期+自動APIドキュメント+型バリデーション、性能はGo/Nodeに近い",
      "FastAPI vs Flask：Flaskは歴史が長いがネイティブ非同期を未サポート、FastAPIはAIサービスに適している",
      "Streamlit：Pythonで素早くフロントエンドを構築、PoCやデモ向け（本番環境には不向き）",
      "SSE（Server-Sent Events）：サーバー→クライアントへの一方向プッシュ、LLMのトークンごとのストリーミング出力にはSSEで十分",
      "SSE vs WebSocket：SSEは一方向、WebSocketは双方向"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "t02",
    "cat": "技术概念",
    "q": "Docker核心概念（5个）",
    "q_ja": "Dockerのコア概念（5つ）",
    "bullets": [
      "Image镜像：打包好的应用模板（安装光盘）",
      "Container容器：镜像的运行实例（安装好的系统）",
      "Dockerfile：描述怎么构建镜像的脚本",
      "Docker Compose：同时管理多个容器（一键部署FastAPI+向量数据库+前端）",
      "Registry仓库：存储和分发镜像的地方（Docker Hub）",
      "核心价值：解决\"在我机器上能跑\"问题，保证交付物稳定运行"
    ],
    "bullets_ja": [
      "Imageイメージ：パッケージ化されたアプリケーションテンプレート（インストールディスク）",
      "Containerコンテナ：イメージの実行インスタンス（インストール済みのシステム）",
      "Dockerfile：イメージの構築方法を記述するスクリプト",
      "Docker Compose：複数のコンテナを同時に管理（FastAPI+ベクトルDB+フロントエンドをワンクリックでデプロイ）",
      "Registryリポジトリ：イメージを保存・配布する場所（Docker Hub）",
      "コアバリュー：\"自分のマシンでは動く\"問題を解決し、納品物の安定稼働を保証"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "t03",
    "cat": "技术概念",
    "q": "Kubernetes(K8s)是什么，为什么用？",
    "q_ja": "Kubernetes（K8s）とは何か、なぜ使うのか？",
    "bullets": [
      "容器编排平台，管理大量Docker容器的部署/扩缩容/负载均衡",
      "Docker解决单机部署，K8s解决\"100台机器上跑1000个容器怎么管\"",
      "自动扩缩容：流量大自动加容器，流量小自动减",
      "自动恢复：容器挂了自动重启；滚动更新：不停机更新服务",
      "SA需要知道的深度：知道是什么、为什么用，不需要会写YAML"
    ],
    "bullets_ja": [
      "コンテナオーケストレーションプラットフォーム。大量のDockerコンテナのデプロイ/スケーリング/ロードバランシングを管理",
      "Dockerは単一マシンのデプロイを解決、K8sは\"100台のマシンで1000個のコンテナをどう管理するか\"を解決",
      "オートスケーリング：トラフィック増加時にコンテナを自動追加、減少時に自動削減",
      "自動復旧：コンテナがダウンしたら自動再起動。ローリングアップデート：無停止でサービスを更新",
      "SAに求められる理解度：何であるか・なぜ使うかを理解していればよく、YAMLを書ける必要はない"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "t04",
    "cat": "技术概念",
    "q": "向量数据库是什么，为什么RAG需要它？",
    "q_ja": "ベクトルデータベースとは何か、なぜRAGに必要なのか？",
    "bullets": [
      "专门存储和检索高维向量（embedding）的数据库",
      "支持相似度搜索（Cosine/L2），比传统数据库快得多",
      "常见：Chroma（轻量级，本地开发）/ Qdrant / Weaviate / Pinecone（云端）/ FAISS（库）",
      "RAG流程：文档→embedding→存向量数据库→查询时检索相似向量→取对应文本",
      "FAISS：Facebook AI的开源库，IndexFlatIP（精确）→IndexIVFPQ（近似，大规模用）"
    ],
    "bullets_ja": [
      "高次元ベクトル（embedding）の保存と検索に特化したデータベース",
      "類似度検索（Cosine/L2）をサポートし、従来のデータベースよりはるかに高速",
      "代表的なもの：Chroma（軽量、ローカル開発向け）/ Qdrant / Weaviate / Pinecone（クラウド）/ FAISS（ライブラリ）",
      "RAGフロー：文書→embedding→ベクトルDB保存→クエリ時に類似ベクトルを検索→対応テキストを取得",
      "FAISS：Facebook AIのオープンソースライブラリ。IndexFlatIP（精密）→IndexIVFPQ（近似、大規模向け）"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "t05",
    "cat": "技术概念",
    "q": "vLLM vs Ollama — 什么场景用哪个？",
    "q_ja": "vLLM vs Ollama — どのシナリオでどちらを使うか？",
    "bullets": [
      "Ollama：优化易用性和本地/边缘部署，支持GGUF(Q4/Q8)，CPU-only可运行，单请求优化",
      "vLLM：优化高吞吐云端服务，Continuous Batching，需要GPU，支持GPTQ/AWQ量化",
      "Prefix Caching：System Prompt对所有请求相同→KV Cache复用，计算量减少~30%",
      "Tensor Parallelism(TP=2)：大模型跨多卡并行，vLLM支持",
      "SA场景：edge用Ollama，cloud/企业API用vLLM"
    ],
    "bullets_ja": [
      "Ollama：使いやすさとローカル/エッジデプロイに最適化、GGUF（Q4/Q8）対応、CPU-onlyで動作可能、単一リクエスト最適化",
      "vLLM：高スループットのクラウドサービスに最適化、Continuous Batching、GPU必須、GPTQ/AWQ量子化対応",
      "Prefix Caching：System Promptが全リクエストで共通→KV Cacheを再利用、計算量約30%削減",
      "Tensor Parallelism（TP=2）：大規模モデルの複数GPU並列処理、vLLMがサポート",
      "SAシナリオ：エッジはOllama、クラウド/企業APIはvLLM"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "t06",
    "cat": "技术概念",
    "q": "LoRA / QLoRA 机制",
    "q_ja": "LoRA / QLoRA の仕組み",
    "bullets": [
      "LoRA：在原始权重旁添加低秩矩阵A和B（秩r），只训练AB，原始权重冻结",
      "可训练参数：r=64时约<1%，大幅减少显存需求",
      "QLoRA：在LoRA基础上，原始权重用4-bit NF4量化，进一步降低显存",
      "lora_alpha：缩放系数，通常=2r（alpha=128对応r=64）",
      "target_modules：q_proj/k_proj/v_proj/o_proj + gate/up/down_proj（7个）"
    ],
    "bullets_ja": [
      "LoRA：元の重みの横に低ランク行列AとB（ランクr）を追加し、ABのみを訓練、元の重みは凍結",
      "訓練可能パラメータ：r=64の場合は約1%未満、VRAM使用量を大幅に削減",
      "QLoRA：LoRAに加えて元の重みを4-bit NF4量子化し、VRAMをさらに削減",
      "lora_alpha：スケーリング係数、通常=2r（alpha=128はr=64に対応）",
      "target_modules：q_proj/k_proj/v_proj/o_proj + gate/up/down_proj（7つ）"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "t07",
    "cat": "技术概念",
    "q": "Agent框架对比（面试时的回答）",
    "q_ja": "Agentフレームワークの比較（面接での回答）",
    "bullets": [
      "LangChain/LangGraph：生态最全，但抽象层重、调试困难、\"黑盒\"感强",
      "LlamaIndex：RAG场景最强，索引检索抽象好，但Agent能力相对弱",
      "AutoGen：多Agent协作好，适合复杂工作流，但上手成本高",
      "ADK(Google)：和Google Cloud集成好，较新",
      "自研：完全可控，但要自己造轮子（SiLR-Agent选择自研的原因）",
      "选哪个取决于客户需求和团队熟悉度，不存在\"最好的框架\""
    ],
    "bullets_ja": [
      "LangChain/LangGraph：エコシステムが最も充実、ただし抽象層が重い・デバッグ困難・\"ブラックボックス\"感が強い",
      "LlamaIndex：RAGシナリオで最強、インデックス・検索の抽象化が優秀、ただしAgent機能は比較的弱い",
      "AutoGen：マルチAgent連携に優れ、複雑なワークフローに適するが、学習コストが高い",
      "ADK（Google）：Google Cloudとの統合が良好、比較的新しい",
      "自社開発：完全にコントロール可能だが、自分で車輪を再発明する必要がある（SiLR-Agentが自社開発を選んだ理由）",
      "どれを選ぶかは顧客の要件とチームの習熟度次第、\"最良のフレームワーク\"は存在しない"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "t08",
    "cat": "技术概念",
    "q": "ReAct / Plan-and-Execute / Multi-Agent 区别",
    "q_ja": "ReAct / Plan-and-Execute / Multi-Agent の違い",
    "bullets": [
      "ReAct：思考-行动-观察循环，适合步骤不确定、需根据反馈调整的任务（SiLR-Agent用这个）",
      "Plan-and-Execute：先整体规划再执行，适合步骤较明确的复杂任务，但计划有误会连锁出错",
      "Multi-Agent：多个专门化Agent协作（规划/执行/审核），适合角色分工明确的场景",
      "实际项目经常混合使用，不是非此即彼"
    ],
    "bullets_ja": [
      "ReAct：思考→行動→観察のループ。ステップが不確定でフィードバックに応じた調整が必要なタスクに適する（SiLR-Agentはこれを採用）",
      "Plan-and-Execute：まず全体計画を立ててから実行。ステップが比較的明確な複雑タスクに適するが、計画ミスが連鎖的なエラーを引き起こす",
      "Multi-Agent：複数の専門化されたAgentが連携（計画/実行/レビュー）。役割分担が明確なシナリオに適する",
      "実際のプロジェクトでは混合して使うことが多く、二者択一ではない"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "t09",
    "cat": "技术概念",
    "q": "RAG vs Fine-tuning — 什么时候用哪个？",
    "q_ja": "RAG vs Fine-tuning — いつどちらを使うか？",
    "bullets": [
      "RAG：知识经常更新 / 需要引用来源 / 数据量大但不能全训练进模型",
      "Fine-tuning：需要特定输出格式和风格 / 领域知识需要内化 / 低延迟（减少prompt长度）",
      "RAG失败场景：回归任务（时序预测）/ 答案需要计算而非检索",
      "结合使用：先RAG检索相关文档，再用fine-tuned模型生成（JP-DocRAG的做法）",
      "帮客户判断：问题是\"找答案\"还是\"计算/推理\"？"
    ],
    "bullets_ja": [
      "RAG：知識が頻繁に更新される / ソースの引用が必要 / データ量は多いが全てをモデルに訓練できない",
      "Fine-tuning：特定の出力フォーマットやスタイルが必要 / ドメイン知識を内在化する必要がある / 低レイテンシ（prompt長の削減）",
      "RAGが失敗するシナリオ：回帰タスク（時系列予測）/ 答えに検索ではなく計算が必要",
      "組み合わせ使用：まずRAGで関連文書を検索し、fine-tunedモデルで生成（JP-DocRAGのアプローチ）",
      "顧客への判断基準：問題は\"答えを見つける\"のか\"計算/推論する\"のか？"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "t10",
    "cat": "技术概念",
    "q": "如何做模型评测（3层框架）",
    "q_ja": "モデル評価の方法（3層フレームワーク）",
    "bullets": [
      "① 自动指标：准确率/Recall@K/MRR/延迟/token成本",
      "② LLM-as-Judge：用强模型评估弱模型输出，适合开放式生成任务",
      "③ 人工评估：领域专家最终验证，金融/医疗等高风险场景必须",
      "关键：先定义\"好\"的标准——电商文案的\"好\"和金融报告的\"好\"差别很大",
      "A/B测试：最终用业务指标（CTR/转化率）验证，不只是技术指标"
    ],
    "bullets_ja": [
      "① 自動指標：正解率/Recall@K/MRR/レイテンシ/トークンコスト",
      "② LLM-as-Judge：強いモデルで弱いモデルの出力を評価、オープンな生成タスクに適する",
      "③ 人手評価：ドメイン専門家による最終検証、金融/医療などの高リスクシナリオでは必須",
      "重要：まず\"良い\"の基準を定義する——ECコピーライティングの\"良い\"と金融レポートの\"良い\"は大きく異なる",
      "A/Bテスト：最終的にはビジネス指標（CTR/コンバージョン率）で検証、技術指標だけではない"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "tc11",
    "cat": "技术概念",
    "q": "REST vs GraphQL vs gRPC — API 设计三种范式",
    "q_ja": "REST vs GraphQL vs gRPC — API設計の3つのパラダイム",
    "bullets": [
      "<span class=\"highlight\">REST</span>：资源导向（URL = 资源），HTTP 动词（GET/POST/PUT/DELETE），JSON 格式，最普遍",
      "<span class=\"highlight\">GraphQL</span>：客户端精确指定需要的字段，一次请求获取多个资源，避免 over-fetching / under-fetching",
      "<span class=\"highlight\">gRPC</span>：Google 开源，基于 HTTP/2 + Protocol Buffers（二进制序列化），高性能，适合微服务间通信",
      "选型：<span class=\"highlight\">公开 API / 简单 CRUD → REST</span> | 复杂嵌套查询的前端 → GraphQL | 内部微服务高频调用 → gRPC",
      "性能对比：gRPC 比 REST 快 2-10 倍（二进制序列化 + HTTP/2 多路复用 + 流式传输）",
      "面试常见追问：REST 的无状态性（stateless）意味着什么？→ 每个请求包含所有信息，服务端不保存会话状态"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">REST</span>：リソース指向（URL = リソース）、HTTP動詞（GET/POST/PUT/DELETE）、JSON形式、最も普及",
      "<span class=\"highlight\">GraphQL</span>：クライアントが必要なフィールドを正確に指定、1回のリクエストで複数リソースを取得、over-fetching / under-fetchingを回避",
      "<span class=\"highlight\">gRPC</span>：Googleオープンソース、HTTP/2 + Protocol Buffers（バイナリシリアライゼーション）ベース、高性能、Microservices間通信に適する",
      "選定：<span class=\"highlight\">公開API / シンプルなCRUD → REST</span> | 複雑なネスト型クエリのフロントエンド → GraphQL | 内部Microservicesの高頻度呼び出し → gRPC",
      "性能比較：gRPCはRESTの2〜10倍高速（バイナリシリアライゼーション + HTTP/2多重化 + ストリーミング転送）",
      "面接でよくある追加質問：RESTのステートレス性（stateless）とは？→ 各リクエストが全情報を含み、サーバー側でセッション状態を保持しない"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "tc12",
    "cat": "技术概念",
    "q": "CI/CD 流水线设计 — GitHub Actions / GitLab CI",
    "q_ja": "CI/CD パイプライン設計 — GitHub Actions / GitLab CI",
    "bullets": [
      "<span class=\"highlight\">CI（持续集成）</span>：每次 push 自动跑 lint + 单元测试 + 构建，确保代码随时可合并",
      "<span class=\"highlight\">CD（持续部署/交付）</span>：CI 通过后自动部署到 staging/production 环境",
      "<pre><span class=\"cm\"># GitHub Actions 基本结构</span>\nname: CI\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: pip install -r requirements.txt\n      - run: pytest tests/</pre>",
      "关键概念：<span class=\"highlight\">Pipeline</span>（流水线）→ <span class=\"highlight\">Stage</span>（阶段：build/test/deploy）→ <span class=\"highlight\">Job</span>（具体任务）→ <span class=\"highlight\">Step</span>（步骤）",
      "最佳实践：快速失败（lint 在前）+ 缓存依赖（加速构建）+ 并行执行（独立 job 同时跑）+ 环境分离（staging → production）",
      "GitHub Actions vs GitLab CI：Actions 用 YAML + Marketplace 生态好；GitLab CI 与 GitLab 深度集成，自建 runner 更灵活"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">CI（継続的インテグレーション）</span>：pushごとにlint + ユニットテスト + ビルドを自動実行し、コードがいつでもマージ可能な状態を保証",
      "<span class=\"highlight\">CD（継続的デプロイ/デリバリー）</span>：CI通過後にstaging/production環境へ自動デプロイ",
      "<pre><span class=\"cm\"># GitHub Actions 基本结构</span>\nname: CI\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: pip install -r requirements.txt\n      - run: pytest tests/</pre>",
      "重要概念：<span class=\"highlight\">Pipeline</span>（パイプライン）→ <span class=\"highlight\">Stage</span>（フェーズ：build/test/deploy）→ <span class=\"highlight\">Job</span>（具体的なタスク）→ <span class=\"highlight\">Step</span>（ステップ）",
      "ベストプラクティス：フェイルファスト（lintを先に）+ 依存関係のキャッシュ（ビルド高速化）+ 並列実行（独立したjobを同時実行）+ 環境の分離（staging → production）",
      "GitHub Actions vs GitLab CI：ActionsはYAML + Marketplaceエコシステムが充実。GitLab CIはGitLabと深く統合し、セルフホストrunnerの柔軟性が高い"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "tc13",
    "cat": "技术概念",
    "q": "Linux 面试高频命令 — 进程/网络/文件操作",
    "q_ja": "Linux面接頻出コマンド — プロセス/ネットワーク/ファイル操作",
    "bullets": [
      "<pre><span class=\"cm\"># 进程管理</span>\nps aux | grep python     <span class=\"cm\"># 查找进程</span>\ntop / htop               <span class=\"cm\"># 实时资源监控</span>\nkill -9 &lt;PID&gt;            <span class=\"cm\"># 强制终止进程</span>\nnohup python train.py &amp;  <span class=\"cm\"># 后台运行，退出终端不停止</span>\nlsof -i :8080            <span class=\"cm\"># 查看端口占用</span></pre>",
      "<pre><span class=\"cm\"># 网络诊断</span>\ncurl -X GET http://api/health   <span class=\"cm\"># HTTP 请求测试</span>\nnetstat -tlnp / ss -tlnp        <span class=\"cm\"># 查看监听端口</span>\nping / traceroute               <span class=\"cm\"># 连通性和路由</span>\nwget / curl -O                  <span class=\"cm\"># 下载文件</span></pre>",
      "<pre><span class=\"cm\"># 文件操作</span>\nfind . -name <span class=\"str\">\"*.log\"</span> -mtime +7 -delete  <span class=\"cm\"># 删除7天前的日志</span>\ngrep -rn <span class=\"str\">\"error\"</span> /var/log/     <span class=\"cm\"># 递归搜索关键词</span>\ntail -f app.log                 <span class=\"cm\"># 实时查看日志</span>\ndu -sh * | sort -rh | head      <span class=\"cm\"># 目录大小排序</span>\nchmod 755 / chown user:group    <span class=\"cm\"># 权限管理</span></pre>",
      "管道与重定向：<code>|</code>（管道）、<code>></code>（覆盖写入）、<code>>></code>（追加）、<code>2>&1</code>（stderr 合并到 stdout）",
      "面试必问：<code>grep</code> + <code>awk</code> + <code>sed</code> 文本三剑客 — 至少能读懂基本用法"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 进程管理</span>\nps aux | grep python     <span class=\"cm\"># 查找进程</span>\ntop / htop               <span class=\"cm\"># 实时资源监控</span>\nkill -9 &lt;PID&gt;            <span class=\"cm\"># 强制终止进程</span>\nnohup python train.py &amp;  <span class=\"cm\"># 后台运行，退出终端不停止</span>\nlsof -i :8080            <span class=\"cm\"># 查看端口占用</span></pre>",
      "<pre><span class=\"cm\"># 网络诊断</span>\ncurl -X GET http://api/health   <span class=\"cm\"># HTTP 请求测试</span>\nnetstat -tlnp / ss -tlnp        <span class=\"cm\"># 查看监听端口</span>\nping / traceroute               <span class=\"cm\"># 连通性和路由</span>\nwget / curl -O                  <span class=\"cm\"># 下载文件</span></pre>",
      "<pre><span class=\"cm\"># 文件操作</span>\nfind . -name <span class=\"str\">\"*.log\"</span> -mtime +7 -delete  <span class=\"cm\"># 删除7天前的日志</span>\ngrep -rn <span class=\"str\">\"error\"</span> /var/log/     <span class=\"cm\"># 递归搜索关键词</span>\ntail -f app.log                 <span class=\"cm\"># 实时查看日志</span>\ndu -sh * | sort -rh | head      <span class=\"cm\"># 目录大小排序</span>\nchmod 755 / chown user:group    <span class=\"cm\"># 权限管理</span></pre>",
      "パイプとリダイレクト：<code>|</code>（パイプ）、<code>></code>（上書き）、<code>>></code>（追記）、<code>2>&1</code>（stderrをstdoutに統合）",
      "面接必出：<code>grep</code> + <code>awk</code> + <code>sed</code> テキスト三種の神器 — 少なくとも基本的な使い方を読めること"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "tc14",
    "cat": "技术概念",
    "q": "网络基础 — HTTP/HTTPS、TCP/UDP、DNS",
    "q_ja": "ネットワーク基礎 — HTTP/HTTPS、TCP/UDP、DNS",
    "bullets": [
      "<span class=\"highlight\">TCP vs UDP</span>：TCP 可靠有序（三次握手/四次挥手）→ Web/API；UDP 快但不保证到达 → 视频/游戏/DNS查询",
      "<span class=\"highlight\">HTTP 状态码</span>：2xx 成功 | 3xx 重定向 | 4xx 客户端错误（400 参数错/401 未认证/403 无权限/404 不存在）| 5xx 服务端错误",
      "<span class=\"highlight\">HTTPS = HTTP + TLS</span>：TLS 握手建立加密通道，证书验证服务器身份，防止中间人攻击",
      "<span class=\"highlight\">DNS 解析流程</span>：浏览器缓存 → OS 缓存 → 本地 DNS → 根域名服务器 → 顶级域 → 权威 DNS → 返回 IP",
      "HTTP/1.1 vs HTTP/2 vs HTTP/3：H2 多路复用（一个 TCP 连接并行多个请求）；H3 基于 QUIC（UDP），更快的连接建立",
      "面试高频问：\"从输入 URL 到页面显示发生了什么？\" → DNS → TCP → TLS → HTTP 请求 → 服务器处理 → 渲染"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">TCP vs UDP</span>：TCPは信頼性があり順序保証（3ウェイハンドシェイク/4ウェイクローズ）→ Web/API。UDPは高速だが到達保証なし → 動画/ゲーム/DNSクエリ",
      "<span class=\"highlight\">HTTPステータスコード</span>：2xx 成功 | 3xx リダイレクト | 4xx クライアントエラー（400 パラメータ不正/401 未認証/403 権限なし/404 存在しない）| 5xx サーバーエラー",
      "<span class=\"highlight\">HTTPS = HTTP + TLS</span>：TLSハンドシェイクで暗号化チャネルを確立、証明書でサーバーの身元を検証、中間者攻撃を防止",
      "<span class=\"highlight\">DNS解決フロー</span>：ブラウザキャッシュ → OSキャッシュ → ローカルDNS → ルートDNSサーバー → TLD → 権威DNS → IPを返却",
      "HTTP/1.1 vs HTTP/2 vs HTTP/3：H2は多重化（1つのTCP接続で複数リクエストを並列処理）、H3はQUIC（UDP）ベースでより高速な接続確立",
      "面接頻出問題：\"URLを入力してからページが表示されるまでに何が起きるか？\" → DNS → TCP → TLS → HTTPリクエスト → サーバー処理 → レンダリング"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "tc15",
    "cat": "技术概念",
    "q": "认证与授权 — OAuth 2.0 / JWT / Session vs Token",
    "q_ja": "認証と認可 — OAuth 2.0 / JWT / Session vs Token",
    "bullets": [
      "<span class=\"highlight\">认证(Authentication)</span>：你是谁？ | <span class=\"highlight\">授权(Authorization)</span>：你能干什么？",
      "<span class=\"highlight\">Session-based</span>：服务端存 session → 返回 session_id cookie → 有状态，需 session 存储，水平扩展难",
      "<span class=\"highlight\">Token-based (JWT)</span>：服务端生成签名 token → 客户端每次携带 → 无状态，易扩展，但 token 无法主动失效",
      "JWT 结构：<code>Header.Payload.Signature</code>（Base64 编码，<span class=\"highlight\">不是加密！</span>只是签名防篡改，不要存敏感信息）",
      "<span class=\"highlight\">OAuth 2.0</span>：第三方授权框架 → \"用 Google 账号登录\"。四种授权模式，最常用 Authorization Code Flow",
      "最佳实践：短期 Access Token（15min）+ 长期 Refresh Token + HTTPS 必须 + HttpOnly Cookie 存 token"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">認証（Authentication）</span>：あなたは誰か？ | <span class=\"highlight\">認可（Authorization）</span>：あなたは何ができるか？",
      "<span class=\"highlight\">Session-based</span>：サーバー側でsessionを保存 → session_id cookieを返却 → ステートフル、sessionストレージが必要、水平スケーリングが困難",
      "<span class=\"highlight\">Token-based（JWT）</span>：サーバー側で署名付きtokenを生成 → クライアントが毎回携帯 → ステートレス、スケーリング容易、ただしtokenを能動的に無効化できない",
      "JWTの構造：<code>Header.Payload.Signature</code>（Base64エンコード、<span class=\"highlight\">暗号化ではない！</span>改ざん防止の署名のみ、機密情報を格納しないこと）",
      "<span class=\"highlight\">OAuth 2.0</span>：サードパーティ認可フレームワーク → \"Googleアカウントでログイン\"。4つの認可モード、最も一般的なのはAuthorization Code Flow",
      "ベストプラクティス：短期Access Token（15分）+ 長期Refresh Token + HTTPS必須 + HttpOnly Cookieでtokenを保存"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "tc16",
    "cat": "技术概念",
    "q": "微服务 vs 单体架构 — 什么时候用哪个？",
    "q_ja": "Microservices vs モノリシックアーキテクチャ — いつどちらを使うか？",
    "bullets": [
      "<span class=\"highlight\">单体(Monolith)</span>：一个代码库一个部署单元，简单直接 → 适合初创期、小团队、快速迭代",
      "<span class=\"highlight\">微服务(Microservices)</span>：按业务拆分独立服务，各自部署 → 适合大团队、高并发、需要独立扩缩容",
      "微服务的代价：网络调用延迟、分布式事务复杂、运维成本高（需要 K8s/服务发现/链路追踪/日志聚合）",
      "服务间通信：<span class=\"highlight\">同步</span> → REST/gRPC | <span class=\"highlight\">异步</span> → 消息队列（Kafka/RabbitMQ/Redis Pub/Sub）",
      "常见模式：API Gateway（统一入口）+ Service Mesh（Istio，管理服务间通信）+ 分布式追踪（Jaeger/Zipkin）",
      "Martin Fowler 原则：<span class=\"highlight\">\"Monolith First\"</span> — 先用单体验证业务，确定边界后再拆微服务"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">モノリス（Monolith）</span>：1つのコードベースに1つのデプロイ単位、シンプルで直接的 → スタートアップ期・小規模チーム・高速イテレーションに適する",
      "<span class=\"highlight\">Microservices</span>：ビジネスごとに独立したサービスに分割し、個別にデプロイ → 大規模チーム・高い並行性・独立したスケーリングが必要な場合に適する",
      "Microservicesの代償：ネットワーク呼び出しのレイテンシ、分散トランザクションの複雑さ、運用コストの増大（K8s/サービスディスカバリ/分散トレーシング/ログ集約が必要）",
      "サービス間通信：<span class=\"highlight\">同期</span> → REST/gRPC | <span class=\"highlight\">非同期</span> → メッセージキュー（Kafka/RabbitMQ/Redis Pub/Sub）",
      "よくあるパターン：API Gateway（統一エントリポイント）+ Service Mesh（Istio、サービス間通信の管理）+ 分散トレーシング（Jaeger/Zipkin）",
      "Martin Fowlerの原則：<span class=\"highlight\">\"Monolith First\"</span> — まずモノリスでビジネスを検証し、境界を確定してからMicroservicesに分割"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "db01",
    "cat": "数据库",
    "q": "SQL 基础查询 — SELECT/WHERE/ORDER BY",
    "q_ja": "SQL基本クエリ — SELECT/WHERE/ORDER BY",
    "bullets": [
      "<pre><span class=\"kw\">SELECT</span> name, age, salary\n<span class=\"kw\">FROM</span> employees\n<span class=\"kw\">WHERE</span> department = <span class=\"str\">'Engineering'</span>\n  <span class=\"kw\">AND</span> age > 25\n  <span class=\"kw\">AND</span> name <span class=\"kw\">LIKE</span> <span class=\"str\">'%zhou%'</span>  <span class=\"cm\">-- 模糊匹配</span>\n<span class=\"kw\">ORDER BY</span> salary <span class=\"kw\">DESC</span>\n<span class=\"kw\">LIMIT</span> 10 <span class=\"kw\">OFFSET</span> 20;  <span class=\"cm\">-- 分页：跳过20条取10条</span></pre>",
      "执行顺序：FROM → WHERE → SELECT → ORDER BY → LIMIT",
      "NULL比较用 IS NULL / IS NOT NULL，不能用 = NULL",
      "LIKE通配符：% 任意字符，_ 单个字符"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">SELECT</span> name, age, salary\n<span class=\"kw\">FROM</span> employees\n<span class=\"kw\">WHERE</span> department = <span class=\"str\">'Engineering'</span>\n  <span class=\"kw\">AND</span> age > 25\n  <span class=\"kw\">AND</span> name <span class=\"kw\">LIKE</span> <span class=\"str\">'%zhou%'</span>  <span class=\"cm\">-- 模糊匹配</span>\n<span class=\"kw\">ORDER BY</span> salary <span class=\"kw\">DESC</span>\n<span class=\"kw\">LIMIT</span> 10 <span class=\"kw\">OFFSET</span> 20;  <span class=\"cm\">-- 分页：跳过20条取10条</span></pre>",
      "実行順序：FROM → WHERE → SELECT → ORDER BY → LIMIT",
      "NULLの比較にはIS NULL / IS NOT NULLを使う。= NULLは使えない",
      "LIKEワイルドカード：%は任意の文字列、_は1文字"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "db02",
    "cat": "数据库",
    "q": "增删改 — INSERT/UPDATE/DELETE",
    "q_ja": "データ操作 — INSERT/UPDATE/DELETE",
    "bullets": [
      "<pre><span class=\"cm\">-- 插入</span>\n<span class=\"kw\">INSERT INTO</span> users (name, email) <span class=\"kw\">VALUES</span> (<span class=\"str\">'Zhou'</span>, <span class=\"str\">'z@mail.com'</span>);\n<span class=\"cm\">-- 批量插入</span>\n<span class=\"kw\">INSERT INTO</span> users (name, email) <span class=\"kw\">VALUES</span>\n  (<span class=\"str\">'A'</span>, <span class=\"str\">'a@m.com'</span>), (<span class=\"str\">'B'</span>, <span class=\"str\">'b@m.com'</span>);\n<span class=\"cm\">-- 更新</span>\n<span class=\"kw\">UPDATE</span> users <span class=\"kw\">SET</span> age = 26 <span class=\"kw\">WHERE</span> id = 1;\n<span class=\"cm\">-- 删除（⚠️ 没有WHERE会删全表！）</span>\n<span class=\"kw\">DELETE FROM</span> users <span class=\"kw\">WHERE</span> id = 1;</pre>",
      "<span class=\"highlight\">永远在UPDATE/DELETE前先用SELECT确认影响范围</span>",
      "TRUNCATE vs DELETE：TRUNCATE清空全表更快（不记录行日志），MySQL中属于DDL隐式提交不能回滚，PostgreSQL中可在事务内回滚"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\">-- 插入</span>\n<span class=\"kw\">INSERT INTO</span> users (name, email) <span class=\"kw\">VALUES</span> (<span class=\"str\">'Zhou'</span>, <span class=\"str\">'z@mail.com'</span>);\n<span class=\"cm\">-- 批量插入</span>\n<span class=\"kw\">INSERT INTO</span> users (name, email) <span class=\"kw\">VALUES</span>\n  (<span class=\"str\">'A'</span>, <span class=\"str\">'a@m.com'</span>), (<span class=\"str\">'B'</span>, <span class=\"str\">'b@m.com'</span>);\n<span class=\"cm\">-- 更新</span>\n<span class=\"kw\">UPDATE</span> users <span class=\"kw\">SET</span> age = 26 <span class=\"kw\">WHERE</span> id = 1;\n<span class=\"cm\">-- 删除（⚠️ 没有WHERE会删全表！）</span>\n<span class=\"kw\">DELETE FROM</span> users <span class=\"kw\">WHERE</span> id = 1;</pre>",
      "<span class=\"highlight\">UPDATE/DELETEの前に必ずSELECTで影響範囲を確認すること</span>",
      "TRUNCATE vs DELETE：TRUNCATEはテーブル全体をより高速にクリア（行レベルのログを記録しない）。MySQLではDDLとして暗黙的にコミットされロールバック不可、PostgreSQLではトランザクション内でロールバック可能"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "db03",
    "cat": "数据库",
    "q": "主键与外键 — 表关系基础",
    "q_ja": "PRIMARY KEYとFOREIGN KEY — テーブル関係の基礎",
    "bullets": [
      "<pre><span class=\"kw\">CREATE TABLE</span> departments (\n    id <span class=\"kw\">INT PRIMARY KEY AUTO_INCREMENT</span>,\n    name <span class=\"kw\">VARCHAR</span>(100) <span class=\"kw\">NOT NULL UNIQUE</span>\n);\n<span class=\"kw\">CREATE TABLE</span> employees (\n    id <span class=\"kw\">INT PRIMARY KEY AUTO_INCREMENT</span>,\n    name <span class=\"kw\">VARCHAR</span>(100) <span class=\"kw\">NOT NULL</span>,\n    dept_id <span class=\"kw\">INT</span>,\n    <span class=\"kw\">FOREIGN KEY</span> (dept_id) <span class=\"kw\">REFERENCES</span> departments(id)\n);</pre>",
      "主键(PK)：唯一标识行，不能为NULL。自增或UUID",
      "外键(FK)：引用另一张表的主键 → 建立表间关系 → 保证参照完整性"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">CREATE TABLE</span> departments (\n    id <span class=\"kw\">INT PRIMARY KEY AUTO_INCREMENT</span>,\n    name <span class=\"kw\">VARCHAR</span>(100) <span class=\"kw\">NOT NULL UNIQUE</span>\n);\n<span class=\"kw\">CREATE TABLE</span> employees (\n    id <span class=\"kw\">INT PRIMARY KEY AUTO_INCREMENT</span>,\n    name <span class=\"kw\">VARCHAR</span>(100) <span class=\"kw\">NOT NULL</span>,\n    dept_id <span class=\"kw\">INT</span>,\n    <span class=\"kw\">FOREIGN KEY</span> (dept_id) <span class=\"kw\">REFERENCES</span> departments(id)\n);</pre>",
      "PRIMARY KEY（PK）：行を一意に識別し、NULLは不可。AUTO_INCREMENTまたはUUID",
      "FOREIGN KEY（FK）：別テーブルのPRIMARY KEYを参照 → テーブル間の関係を構築 → 参照整合性を保証"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "db04",
    "cat": "数据库",
    "q": "JOIN 类型对比 — 图解与场景",
    "q_ja": "JOINの種類の比較 — 図解とユースケース",
    "bullets": [
      "<pre><span class=\"cm\">-- INNER JOIN: 只返回两表都匹配的行</span>\n<span class=\"kw\">SELECT</span> e.name, d.name <span class=\"kw\">AS</span> dept\n<span class=\"kw\">FROM</span> employees e\n<span class=\"kw\">INNER JOIN</span> departments d <span class=\"kw\">ON</span> e.dept_id = d.id;\n\n<span class=\"cm\">-- LEFT JOIN: 左表全部 + 右表匹配（不匹配为NULL）</span>\n<span class=\"kw\">SELECT</span> e.name, d.name\n<span class=\"kw\">FROM</span> employees e\n<span class=\"kw\">LEFT JOIN</span> departments d <span class=\"kw\">ON</span> e.dept_id = d.id;</pre>",
      "INNER：交集 | LEFT：左表全部 | RIGHT：右表全部 | FULL：并集",
      "LEFT JOIN找\"没有部门的员工\" → WHERE d.id IS NULL",
      "性能：JOIN比子查询通常更快（优化器可以选择更好的执行计划）"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\">-- INNER JOIN: 只返回两表都匹配的行</span>\n<span class=\"kw\">SELECT</span> e.name, d.name <span class=\"kw\">AS</span> dept\n<span class=\"kw\">FROM</span> employees e\n<span class=\"kw\">INNER JOIN</span> departments d <span class=\"kw\">ON</span> e.dept_id = d.id;\n\n<span class=\"cm\">-- LEFT JOIN: 左表全部 + 右表匹配（不匹配为NULL）</span>\n<span class=\"kw\">SELECT</span> e.name, d.name\n<span class=\"kw\">FROM</span> employees e\n<span class=\"kw\">LEFT JOIN</span> departments d <span class=\"kw\">ON</span> e.dept_id = d.id;</pre>",
      "INNER：積集合 | LEFT：左テーブル全件 | RIGHT：右テーブル全件 | FULL：和集合",
      "LEFT JOINで\"部署のない従業員\"を検索 → WHERE d.id IS NULL",
      "パフォーマンス：JOINはサブクエリより通常高速（オプティマイザがより良い実行計画を選択できる）"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "db05",
    "cat": "数据库",
    "q": "GROUP BY / HAVING / 聚合函数",
    "q_ja": "GROUP BY / HAVING / 集約関数",
    "bullets": [
      "<pre><span class=\"cm\">-- 每个部门的平均薪资（只显示>50000的）</span>\n<span class=\"kw\">SELECT</span> department,\n       <span class=\"fn\">COUNT</span>(*) <span class=\"kw\">AS</span> cnt,\n       <span class=\"fn\">AVG</span>(salary) <span class=\"kw\">AS</span> avg_sal,\n       <span class=\"fn\">MAX</span>(salary) <span class=\"kw\">AS</span> max_sal\n<span class=\"kw\">FROM</span> employees\n<span class=\"kw\">WHERE</span> age > 20          <span class=\"cm\">-- 先过滤行</span>\n<span class=\"kw\">GROUP BY</span> department\n<span class=\"kw\">HAVING</span> <span class=\"fn\">AVG</span>(salary) > 50000  <span class=\"cm\">-- 再过滤组</span>\n<span class=\"kw\">ORDER BY</span> avg_sal <span class=\"kw\">DESC</span>;</pre>",
      "<span class=\"highlight\">WHERE过滤行（分组前），HAVING过滤组（分组后）</span>",
      "聚合函数：COUNT / SUM / AVG / MAX / MIN",
      "执行顺序：FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\">-- 每个部门的平均薪资（只显示>50000的）</span>\n<span class=\"kw\">SELECT</span> department,\n       <span class=\"fn\">COUNT</span>(*) <span class=\"kw\">AS</span> cnt,\n       <span class=\"fn\">AVG</span>(salary) <span class=\"kw\">AS</span> avg_sal,\n       <span class=\"fn\">MAX</span>(salary) <span class=\"kw\">AS</span> max_sal\n<span class=\"kw\">FROM</span> employees\n<span class=\"kw\">WHERE</span> age > 20          <span class=\"cm\">-- 先过滤行</span>\n<span class=\"kw\">GROUP BY</span> department\n<span class=\"kw\">HAVING</span> <span class=\"fn\">AVG</span>(salary) > 50000  <span class=\"cm\">-- 再过滤组</span>\n<span class=\"kw\">ORDER BY</span> avg_sal <span class=\"kw\">DESC</span>;</pre>",
      "<span class=\"highlight\">WHEREは行をフィルタ（グループ化前）、HAVINGはグループをフィルタ（グループ化後）</span>",
      "集約関数：COUNT / SUM / AVG / MAX / MIN",
      "実行順序：FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "db06",
    "cat": "数据库",
    "q": "索引原理 — B+Tree 与使用场景",
    "q_ja": "インデックスの原理 — B+Treeとユースケース",
    "bullets": [
      "B+Tree：多路平衡树，叶子节点链表相连 → 范围查询高效",
      "为什么不用Hash索引？Hash只支持等值查询，不支持范围(>/</BETWEEN/ORDER BY)",
      "<pre><span class=\"cm\">-- 创建索引</span>\n<span class=\"kw\">CREATE INDEX</span> idx_email <span class=\"kw\">ON</span> users(email);\n<span class=\"cm\">-- 联合索引（最左匹配原则）</span>\n<span class=\"kw\">CREATE INDEX</span> idx_name_age <span class=\"kw\">ON</span> users(name, age);\n<span class=\"cm\">-- 可以加速 WHERE name=? / WHERE name=? AND age=?</span>\n<span class=\"cm\">-- 不能加速 WHERE age=?（没有最左列）</span></pre>",
      "<span class=\"highlight\">最左匹配原则</span>：联合索引(A,B,C)可用于查A / A+B / A+B+C，不能跳过A直接查B",
      "索引代价：写入变慢（要维护索引） + 占存储空间 → 不要滥建"
    ],
    "bullets_ja": [
      "B+Tree：多分岐平衡木、リーフノードがリンクリストで連結 → 範囲クエリが効率的",
      "なぜHashインデックスを使わないのか？Hashは等価クエリのみサポートし、範囲（>/</BETWEEN/ORDER BY）は未対応",
      "<pre><span class=\"cm\">-- 创建索引</span>\n<span class=\"kw\">CREATE INDEX</span> idx_email <span class=\"kw\">ON</span> users(email);\n<span class=\"cm\">-- 联合索引（最左匹配原则）</span>\n<span class=\"kw\">CREATE INDEX</span> idx_name_age <span class=\"kw\">ON</span> users(name, age);\n<span class=\"cm\">-- 可以加速 WHERE name=? / WHERE name=? AND age=?</span>\n<span class=\"cm\">-- 不能加速 WHERE age=?（没有最左列）</span></pre>",
      "<span class=\"highlight\">最左プレフィックスの原則</span>：複合インデックス(A,B,C)はAの検索 / A+B / A+B+Cに使用可能、Aを飛ばしてBだけの検索には使えない",
      "インデックスのコスト：書き込みが遅くなる（インデックスの維持が必要）+ ストレージを消費 → 乱造しないこと"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "db07",
    "cat": "数据库",
    "q": "事务 ACID — 四大特性",
    "q_ja": "トランザクション ACID — 4つの特性",
    "bullets": [
      "<span class=\"highlight\">A</span>tomicity(原子性)：事务要么全成功要么全回滚，不存在做一半",
      "<span class=\"highlight\">C</span>onsistency(一致性)：事务前后数据满足所有约束",
      "<span class=\"highlight\">I</span>solation(隔離性)：并发事务互不干扰",
      "<span class=\"highlight\">D</span>urability(持久性)：提交后数据不丢失（写入磁盘）",
      "<pre><span class=\"kw\">BEGIN TRANSACTION</span>;\n<span class=\"kw\">UPDATE</span> accounts <span class=\"kw\">SET</span> balance = balance - 100 <span class=\"kw\">WHERE</span> id = 1;\n<span class=\"kw\">UPDATE</span> accounts <span class=\"kw\">SET</span> balance = balance + 100 <span class=\"kw\">WHERE</span> id = 2;\n<span class=\"kw\">COMMIT</span>;  <span class=\"cm\">-- 或 ROLLBACK</span></pre>",
      "隔离级别：Read Uncommitted → Read Committed → Repeatable Read(MySQL默认) → Serializable"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">A</span>tomicity（原子性）：トランザクションは全て成功するか全てロールバックするか、中途半端な状態は存在しない",
      "<span class=\"highlight\">C</span>onsistency（一貫性）：トランザクションの前後でデータが全ての制約を満たす",
      "<span class=\"highlight\">I</span>solation（分離性）：並行トランザクションが互いに干渉しない",
      "<span class=\"highlight\">D</span>urability（永続性）：コミット後のデータは失われない（ディスクに書き込み済み）",
      "<pre><span class=\"kw\">BEGIN TRANSACTION</span>;\n<span class=\"kw\">UPDATE</span> accounts <span class=\"kw\">SET</span> balance = balance - 100 <span class=\"kw\">WHERE</span> id = 1;\n<span class=\"kw\">UPDATE</span> accounts <span class=\"kw\">SET</span> balance = balance + 100 <span class=\"kw\">WHERE</span> id = 2;\n<span class=\"kw\">COMMIT</span>;  <span class=\"cm\">-- 或 ROLLBACK</span></pre>",
      "分離レベル：Read Uncommitted → Read Committed → Repeatable Read（MySQLデフォルト）→ Serializable"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "db08",
    "cat": "数据库",
    "q": "EXPLAIN — 查询性能分析",
    "q_ja": "EXPLAIN — クエリパフォーマンス分析",
    "bullets": [
      "<pre><span class=\"kw\">EXPLAIN SELECT</span> * <span class=\"kw\">FROM</span> users <span class=\"kw\">WHERE</span> email = <span class=\"str\">'z@mail.com'</span>;\n<span class=\"cm\">-- 关注: type, key, rows, Extra</span>\n<span class=\"cm\">-- type: ALL(全表扫描,最差) → index → range → ref → const(最好)</span>\n<span class=\"cm\">-- key: 实际使用的索引（NULL=没用索引）</span>\n<span class=\"cm\">-- rows: 预估扫描行数（越少越好）</span>\n<span class=\"cm\">-- Extra: Using filesort(需优化) / Using index(覆盖索引,好)</span></pre>",
      "看到 type=ALL 就要考虑加索引",
      "看到 Using filesort 可能需要调整 ORDER BY 的索引",
      "<span class=\"highlight\">覆盖索引</span>：查询的列都在索引中 → 不需要回表 → 最快"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">EXPLAIN SELECT</span> * <span class=\"kw\">FROM</span> users <span class=\"kw\">WHERE</span> email = <span class=\"str\">'z@mail.com'</span>;\n<span class=\"cm\">-- 关注: type, key, rows, Extra</span>\n<span class=\"cm\">-- type: ALL(全表扫描,最差) → index → range → ref → const(最好)</span>\n<span class=\"cm\">-- key: 实际使用的索引（NULL=没用索引）</span>\n<span class=\"cm\">-- rows: 预估扫描行数（越少越好）</span>\n<span class=\"cm\">-- Extra: Using filesort(需优化) / Using index(覆盖索引,好)</span></pre>",
      "type=ALLが表示されたらインデックス追加を検討すべき",
      "Using filesortが表示されたらORDER BY用のインデックスの調整が必要な可能性がある",
      "<span class=\"highlight\">カバリングインデックス</span>：クエリ対象のカラムが全てインデックスに含まれている → テーブルへの再アクセス不要 → 最速"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "db09",
    "cat": "数据库",
    "q": "SQL 优化 — 常见技巧",
    "q_ja": "SQL最適化 — よくあるテクニック",
    "bullets": [
      "①<span class=\"highlight\">避免SELECT *</span>：只查需要的列 → 减少IO + 可能用覆盖索引",
      "②<span class=\"highlight\">索引失效场景</span>：函数包裹列(WHERE YEAR(date)=2026) / LIKE以%开头 / 隐式类型转换 / OR条件",
      "③<span class=\"highlight\">分页优化</span>：LIMIT 10000,10 很慢 → 改用 WHERE id > last_id LIMIT 10（游标分页）",
      "④<span class=\"highlight\">批量操作</span>：循环INSERT 1000次 → 一条INSERT 1000行（减少网络往返）",
      "⑤<span class=\"highlight\">JOIN优化</span>：小表驱动大表 / 确保JOIN列有索引"
    ],
    "bullets_ja": [
      "①<span class=\"highlight\">SELECT *を避ける</span>：必要なカラムだけクエリ → IOを削減 + カバリングインデックスの活用が可能に",
      "②<span class=\"highlight\">インデックスが無効になるケース</span>：カラムを関数で包む（WHERE YEAR(date)=2026）/ LIKEが%で始まる / 暗黙の型変換 / OR条件",
      "③<span class=\"highlight\">ページネーションの最適化</span>：LIMIT 10000,10は非常に遅い → WHERE id > last_id LIMIT 10に変更（カーソルページネーション）",
      "④<span class=\"highlight\">バッチ操作</span>：INSERTを1000回ループ → 1つのINSERTで1000行（ネットワークラウンドトリップを削減）",
      "⑤<span class=\"highlight\">JOINの最適化</span>：小さいテーブルで大きいテーブルを駆動 / JOINカラムにインデックスがあることを確認"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "db10",
    "cat": "数据库",
    "q": "NoSQL vs SQL — 选型指南",
    "q_ja": "NoSQL vs SQL — 選定ガイド",
    "bullets": [
      "SQL(MySQL/PostgreSQL)：结构化数据、复杂查询、事务要求高 → 金融/ERP/大部分业务",
      "MongoDB(文档型)：半结构化数据、Schema灵活 → 内容管理/日志/用户画像",
      "Redis(KV型)：超低延迟(<1ms)、内存存储 → 缓存/会话/排行榜/限流",
      "Elasticsearch(搜索型)：全文搜索+聚合分析 → 日志分析/搜索引擎",
      "向量数据库(FAISS/Qdrant)：相似度检索 → RAG/推荐/图像搜索",
      "原则：<span class=\"highlight\">先SQL，有明确理由再用NoSQL</span>"
    ],
    "bullets_ja": [
      "SQL（MySQL/PostgreSQL）：構造化データ・複雑なクエリ・トランザクション要件が高い → 金融/ERP/大半のビジネス",
      "MongoDB（ドキュメント型）：半構造化データ・Schemaが柔軟 → コンテンツ管理/ログ/ユーザープロファイル",
      "Redis（KV型）：超低レイテンシ（<1ms）・インメモリストレージ → キャッシュ/セッション/ランキング/レートリミット",
      "Elasticsearch（検索型）：全文検索+集計分析 → ログ分析/検索エンジン",
      "ベクトルDB（FAISS/Qdrant）：類似度検索 → RAG/レコメンド/画像検索",
      "原則：<span class=\"highlight\">まずSQL、明確な理由がある場合にNoSQL</span>"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "db11",
    "cat": "数据库",
    "q": "Redis 核心数据结构与应用",
    "q_ja": "Redisのコアデータ構造と活用",
    "bullets": [
      "<pre><span class=\"cm\"># 5种核心数据结构</span>\nString: SET key val / GET key          <span class=\"cm\"># 缓存/计数器</span>\nHash:   HSET user:1 name Zhou          <span class=\"cm\"># 对象存储</span>\nList:   LPUSH queue task1              <span class=\"cm\"># 消息队列</span>\nSet:    SADD tags python               <span class=\"cm\"># 去重/交并集</span>\nZSet:   ZADD rank 100 user1            <span class=\"cm\"># 排行榜</span></pre>",
      "常用操作复杂度：GET/SET/HGET O(1)，ZSet操作 O(log n)，LRANGE/SMEMBERS O(n)",
      "持久化：RDB(定时快照) + AOF(追加写日志) → 重启后恢复",
      "过期策略：惰性删除 + 定期删除。设置TTL：<code>EXPIRE key 3600</code>",
      "AI项目应用：KV Cache管理 / Agent记忆存储 / API限流 / 特征缓存"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 5种核心数据结构</span>\nString: SET key val / GET key          <span class=\"cm\"># 缓存/计数器</span>\nHash:   HSET user:1 name Zhou          <span class=\"cm\"># 对象存储</span>\nList:   LPUSH queue task1              <span class=\"cm\"># 消息队列</span>\nSet:    SADD tags python               <span class=\"cm\"># 去重/交并集</span>\nZSet:   ZADD rank 100 user1            <span class=\"cm\"># 排行榜</span></pre>",
      "よく使う操作の計算量：GET/SET/HGET O(1)、ZSet操作 O(log n)、LRANGE/SMEMBERS O(n)",
      "永続化：RDB（定期スナップショット）+ AOF（追記型ログ）→ 再起動後に復元",
      "有効期限戦略：遅延削除 + 定期削除。TTL設定：<code>EXPIRE key 3600</code>",
      "AIプロジェクトでの活用：KV Cache管理 / Agentの記憶ストレージ / APIレートリミット / 特徴量キャッシュ"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "db12",
    "cat": "数据库",
    "q": "数据库范式 — 1NF/2NF/3NF/BCNF",
    "q_ja": "データベース正規形 — 1NF/2NF/3NF/BCNF",
    "bullets": [
      "<span class=\"highlight\">1NF</span>：每列原子性，不可再分（不能在一个字段存\"Java,Python\"）",
      "<span class=\"highlight\">2NF</span>：满足1NF + 消除部分依赖（非主键列必须完全依赖整个主键，不能只依赖联合主键的一部分）",
      "<span class=\"highlight\">3NF</span>：满足2NF + 消除传递依赖（非主键列不能依赖另一个非主键列。如：员工表不存部门名，只存dept_id）",
      "<span class=\"highlight\">BCNF</span>：满足3NF + 每个决定因素都是候选键（比3NF更严格，消除主属性对候选键的部分/传递依赖）",
      "面试口诀：<span class=\"highlight\">1NF列原子，2NF消除部分依赖，3NF消除传递依赖</span>",
      "实践中大多遵循3NF，但为了查询性能可适当反范式（冗余字段避免JOIN）"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">1NF</span>：各カラムが原子的であり、さらに分割不可（1つのフィールドに\"Java,Python\"と格納してはいけない）",
      "<span class=\"highlight\">2NF</span>：1NFを満たす + 部分従属の排除（非キーカラムは複合PRIMARY KEY全体に完全従属しなければならず、一部だけに依存してはいけない）",
      "<span class=\"highlight\">3NF</span>：2NFを満たす + 推移従属の排除（非キーカラムが別の非キーカラムに依存してはいけない。例：従業員テーブルに部署名を格納せず、dept_idのみ格納）",
      "<span class=\"highlight\">BCNF</span>：3NFを満たす + 全ての決定要因が候補キーである（3NFより厳格、主属性の候補キーへの部分/推移従属を排除）",
      "面接での暗記ポイント：<span class=\"highlight\">1NFはカラムの原子性、2NFは部分従属の排除、3NFは推移従属の排除</span>",
      "実務では主に3NFに従うが、クエリ性能のためにあえて非正規化する場合もある（冗長フィールドでJOINを回避）"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "db13",
    "cat": "数据库",
    "q": "子查询 vs JOIN — 性能对比与选择",
    "q_ja": "サブクエリ vs JOIN — パフォーマンス比較と選択",
    "bullets": [
      "<pre><span class=\"cm\">-- 子查询写法（相关子查询，每行执行一次，可能慢）</span>\n<span class=\"kw\">SELECT</span> name <span class=\"kw\">FROM</span> employees e\n<span class=\"kw\">WHERE</span> salary > (\n  <span class=\"kw\">SELECT</span> <span class=\"fn\">AVG</span>(salary) <span class=\"kw\">FROM</span> employees\n  <span class=\"kw\">WHERE</span> dept_id = e.dept_id\n);\n\n<span class=\"cm\">-- JOIN改写（通常更快）</span>\n<span class=\"kw\">SELECT</span> e.name\n<span class=\"kw\">FROM</span> employees e\n<span class=\"kw\">JOIN</span> (<span class=\"kw\">SELECT</span> dept_id, <span class=\"fn\">AVG</span>(salary) <span class=\"kw\">AS</span> avg_sal\n      <span class=\"kw\">FROM</span> employees <span class=\"kw\">GROUP BY</span> dept_id) d\n<span class=\"kw\">ON</span> e.dept_id = d.dept_id\n<span class=\"kw\">WHERE</span> e.salary > d.avg_sal;</pre>",
      "<span class=\"highlight\">相关子查询</span>（引用外层表）：每行执行一次 → O(n*m)，大表时极慢",
      "<span class=\"highlight\">非相关子查询</span>（独立执行）：只执行一次，性能可接受",
      "优化器在很多场景下会将子查询自动改写为JOIN，但<span class=\"highlight\">不能依赖优化器</span>",
      "选择原则：能用JOIN就用JOIN；EXISTS比IN对大子查询结果集更高效"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\">-- 子查询写法（相关子查询，每行执行一次，可能慢）</span>\n<span class=\"kw\">SELECT</span> name <span class=\"kw\">FROM</span> employees e\n<span class=\"kw\">WHERE</span> salary > (\n  <span class=\"kw\">SELECT</span> <span class=\"fn\">AVG</span>(salary) <span class=\"kw\">FROM</span> employees\n  <span class=\"kw\">WHERE</span> dept_id = e.dept_id\n);\n\n<span class=\"cm\">-- JOIN改写（通常更快）</span>\n<span class=\"kw\">SELECT</span> e.name\n<span class=\"kw\">FROM</span> employees e\n<span class=\"kw\">JOIN</span> (<span class=\"kw\">SELECT</span> dept_id, <span class=\"fn\">AVG</span>(salary) <span class=\"kw\">AS</span> avg_sal\n      <span class=\"kw\">FROM</span> employees <span class=\"kw\">GROUP BY</span> dept_id) d\n<span class=\"kw\">ON</span> e.dept_id = d.dept_id\n<span class=\"kw\">WHERE</span> e.salary > d.avg_sal;</pre>",
      "<span class=\"highlight\">相関サブクエリ</span>（外部テーブルを参照）：行ごとに1回実行 → O(n*m)、大規模テーブルでは極めて遅い",
      "<span class=\"highlight\">非相関サブクエリ</span>（独立して実行）：1回だけ実行され、パフォーマンスは許容範囲",
      "オプティマイザは多くのケースでサブクエリをJOINに自動書き換えするが、<span class=\"highlight\">オプティマイザに頼ってはいけない</span>",
      "選択の原則：JOINが使える場面ではJOINを使う。EXISTSはINよりも大きなサブクエリ結果セットに対して効率的"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "db14",
    "cat": "数据库",
    "q": "窗口函数 — ROW_NUMBER/RANK/DENSE_RANK",
    "q_ja": "ウィンドウ関数 — ROW_NUMBER/RANK/DENSE_RANK",
    "bullets": [
      "<pre><span class=\"kw\">SELECT</span> name, department, salary,\n  <span class=\"fn\">ROW_NUMBER</span>() <span class=\"kw\">OVER</span>(<span class=\"kw\">PARTITION BY</span> department <span class=\"kw\">ORDER BY</span> salary <span class=\"kw\">DESC</span>) <span class=\"kw\">AS</span> rn,\n  <span class=\"fn\">RANK</span>()       <span class=\"kw\">OVER</span>(<span class=\"kw\">PARTITION BY</span> department <span class=\"kw\">ORDER BY</span> salary <span class=\"kw\">DESC</span>) <span class=\"kw\">AS</span> rk,\n  <span class=\"fn\">DENSE_RANK</span>() <span class=\"kw\">OVER</span>(<span class=\"kw\">PARTITION BY</span> department <span class=\"kw\">ORDER BY</span> salary <span class=\"kw\">DESC</span>) <span class=\"kw\">AS</span> drk\n<span class=\"kw\">FROM</span> employees;</pre>",
      "薪资100,100,90时：ROW_NUMBER → 1,2,3 | RANK → 1,1,3 | DENSE_RANK → 1,1,2",
      "<span class=\"highlight\">ROW_NUMBER</span>：不并列，常用于分页/去重（取每组第一条）",
      "<span class=\"highlight\">RANK</span>：并列后跳号，适合竞赛排名",
      "<span class=\"highlight\">DENSE_RANK</span>：并列不跳号，适合连续等级划分",
      "经典面试题：<span class=\"highlight\">取每个部门薪资TOP 3</span> → ROW_NUMBER + WHERE rn <= 3"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">SELECT</span> name, department, salary,\n  <span class=\"fn\">ROW_NUMBER</span>() <span class=\"kw\">OVER</span>(<span class=\"kw\">PARTITION BY</span> department <span class=\"kw\">ORDER BY</span> salary <span class=\"kw\">DESC</span>) <span class=\"kw\">AS</span> rn,\n  <span class=\"fn\">RANK</span>()       <span class=\"kw\">OVER</span>(<span class=\"kw\">PARTITION BY</span> department <span class=\"kw\">ORDER BY</span> salary <span class=\"kw\">DESC</span>) <span class=\"kw\">AS</span> rk,\n  <span class=\"fn\">DENSE_RANK</span>() <span class=\"kw\">OVER</span>(<span class=\"kw\">PARTITION BY</span> department <span class=\"kw\">ORDER BY</span> salary <span class=\"kw\">DESC</span>) <span class=\"kw\">AS</span> drk\n<span class=\"kw\">FROM</span> employees;</pre>",
      "給与が100,100,90の場合：ROW_NUMBER → 1,2,3 | RANK → 1,1,3 | DENSE_RANK → 1,1,2",
      "<span class=\"highlight\">ROW_NUMBER</span>：同順位なし、ページネーション/重複排除（各グループの先頭行を取得）によく使用",
      "<span class=\"highlight\">RANK</span>：同順位後に番号を飛ばす、競技ランキングに適する",
      "<span class=\"highlight\">DENSE_RANK</span>：同順位でも番号を飛ばさない、連続的なランク分けに適する",
      "定番の面接問題：<span class=\"highlight\">各部門の給与TOP3を取得</span> → ROW_NUMBER + WHERE rn <= 3"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "db15",
    "cat": "数据库",
    "q": "窗口函数 — LAG/LEAD/SUM OVER",
    "q_ja": "ウィンドウ関数 — LAG/LEAD/SUM OVER",
    "bullets": [
      "<pre><span class=\"kw\">SELECT</span> date, revenue,\n  <span class=\"fn\">LAG</span>(revenue, <span class=\"num\">1</span>) <span class=\"kw\">OVER</span>(<span class=\"kw\">ORDER BY</span> date)  <span class=\"kw\">AS</span> prev_rev,  <span class=\"cm\">-- 前一行</span>\n  <span class=\"fn\">LEAD</span>(revenue, <span class=\"num\">1</span>) <span class=\"kw\">OVER</span>(<span class=\"kw\">ORDER BY</span> date) <span class=\"kw\">AS</span> next_rev,  <span class=\"cm\">-- 后一行</span>\n  <span class=\"fn\">SUM</span>(revenue) <span class=\"kw\">OVER</span>(<span class=\"kw\">ORDER BY</span> date\n    <span class=\"kw\">ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</span>\n  ) <span class=\"kw\">AS</span> cumulative_sum  <span class=\"cm\">-- 累计求和</span>\n<span class=\"kw\">FROM</span> daily_sales;</pre>",
      "<span class=\"highlight\">LAG(col, n)</span>：取前n行的值 | <span class=\"highlight\">LEAD(col, n)</span>：取后n行的值",
      "环比计算：(revenue - LAG(revenue,1)) / LAG(revenue,1) * 100",
      "滑动窗口：ROWS BETWEEN 6 PRECEDING AND CURRENT ROW → 7日移动平均",
      "窗口函数<span class=\"highlight\">不减少行数</span>（与GROUP BY的核心区别），在SELECT阶段执行"
    ],
    "bullets_ja": [
      "<pre><span class=\"kw\">SELECT</span> date, revenue,\n  <span class=\"fn\">LAG</span>(revenue, <span class=\"num\">1</span>) <span class=\"kw\">OVER</span>(<span class=\"kw\">ORDER BY</span> date)  <span class=\"kw\">AS</span> prev_rev,  <span class=\"cm\">-- 前一行</span>\n  <span class=\"fn\">LEAD</span>(revenue, <span class=\"num\">1</span>) <span class=\"kw\">OVER</span>(<span class=\"kw\">ORDER BY</span> date) <span class=\"kw\">AS</span> next_rev,  <span class=\"cm\">-- 后一行</span>\n  <span class=\"fn\">SUM</span>(revenue) <span class=\"kw\">OVER</span>(<span class=\"kw\">ORDER BY</span> date\n    <span class=\"kw\">ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</span>\n  ) <span class=\"kw\">AS</span> cumulative_sum  <span class=\"cm\">-- 累计求和</span>\n<span class=\"kw\">FROM</span> daily_sales;</pre>",
      "<span class=\"highlight\">LAG(col, n)</span>：n行前の値を取得 | <span class=\"highlight\">LEAD(col, n)</span>：n行後の値を取得",
      "前期比計算：(revenue - LAG(revenue,1)) / LAG(revenue,1) * 100",
      "スライディングウィンドウ：ROWS BETWEEN 6 PRECEDING AND CURRENT ROW → 7日間移動平均",
      "ウィンドウ関数は<span class=\"highlight\">行数を減らさない</span>（GROUP BYとの核心的な違い）、SELECTフェーズで実行される"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "db16",
    "cat": "数据库",
    "q": "数据库锁 — 类型与死锁",
    "q_ja": "データベースロック — 種類とデッドロック",
    "bullets": [
      "<span class=\"highlight\">共享锁(S锁/读锁)</span>：多个事务可同时读，不能写。SELECT ... LOCK IN SHARE MODE",
      "<span class=\"highlight\">排他锁(X锁/写锁)</span>：持有者独占读写，其他事务不能读写。SELECT ... FOR UPDATE",
      "锁粒度：<span class=\"highlight\">行锁</span>(InnoDB默认，并发高) → <span class=\"highlight\">表锁</span>(MyISAM，开销小但并发差)",
      "<span class=\"highlight\">死锁</span>：事务A锁行1等行2，事务B锁行2等行1 → 循环等待",
      "死锁预防：①固定加锁顺序 ②控制事务大小 ③设置锁超时(innodb_lock_wait_timeout)",
      "InnoDB死锁检测：自动检测并回滚代价较小的事务（wait-for graph算法）"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">共有ロック（Sロック/読み取りロック）</span>：複数のトランザクションが同時に読み取り可能、書き込みは不可。SELECT ... LOCK IN SHARE MODE",
      "<span class=\"highlight\">排他ロック（Xロック/書き込みロック）</span>：保持者が読み書きを独占、他のトランザクションは読み書き不可。SELECT ... FOR UPDATE",
      "ロック粒度：<span class=\"highlight\">行ロック</span>（InnoDBデフォルト、並行性が高い）→ <span class=\"highlight\">テーブルロック</span>（MyISAM、オーバーヘッドは小さいが並行性が低い）",
      "<span class=\"highlight\">デッドロック</span>：トランザクションAが行1をロックし行2を待つ、トランザクションBが行2をロックし行1を待つ → 循環待ち",
      "デッドロックの予防：①ロック取得順序の固定 ②トランザクションサイズの制御 ③ロックタイムアウトの設定（innodb_lock_wait_timeout）",
      "InnoDBのデッドロック検出：自動的に検出し、コストの小さいトランザクションをロールバック（wait-for graphアルゴリズム）"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "db17",
    "cat": "数据库",
    "q": "MySQL vs PostgreSQL — 核心差异",
    "q_ja": "MySQL vs PostgreSQL — コアの違い",
    "bullets": [
      "<span class=\"highlight\">MySQL</span>：更轻量、生态大(LAMP)、主从复制成熟 → 互联网业务首选",
      "<span class=\"highlight\">PostgreSQL</span>：SQL标准更完整、扩展性强(自定义类型/函数)、MVCC实现更优 → 复杂查询/GIS/分析",
      "MVCC区别：MySQL用undo log回滚段 | PG用多版本元组（旧版本留在表中需VACUUM清理）",
      "JSON支持：PG的JSONB原生索引查询，性能远优于MySQL的JSON类型",
      "MySQL默认Repeatable Read(用Gap Lock防幻读) | PG默认Read Committed",
      "选型建议：简单CRUD选MySQL；复杂查询/数据分析/需要丰富数据类型选PostgreSQL"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">MySQL</span>：より軽量、エコシステムが大きい（LAMP）、マスタースレーブレプリケーションが成熟 → インターネットビジネスの第一選択",
      "<span class=\"highlight\">PostgreSQL</span>：SQL標準への準拠度が高い、拡張性が強い（カスタム型/関数）、MVCC実装が優れている → 複雑なクエリ/GIS/分析",
      "MVCCの違い：MySQLはundo logのロールバックセグメント | PGは多版本タプル（旧バージョンがテーブルに残りVACUUMで清掃が必要）",
      "JSONサポート：PGのJSONBはネイティブインデックスクエリに対応し、性能はMySQLのJSON型を大幅に上回る",
      "MySQLデフォルトはRepeatable Read（Gap Lockでファントムリードを防止）| PGデフォルトはRead Committed",
      "選定の目安：シンプルなCRUDにはMySQL、複雑なクエリ/データ分析/豊富なデータ型が必要ならPostgreSQL"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "db18",
    "cat": "数据库",
    "q": "数据库连接池 — 原理与配置",
    "q_ja": "データベースコネクションプール — 原理と設定",
    "bullets": [
      "问题：每次请求新建TCP连接+数据库认证 → 开销大（约10-50ms），高并发下连接数爆炸",
      "连接池：<span class=\"highlight\">预先创建一批连接放入池中，用完归还而非关闭</span>",
      "核心参数：<span class=\"highlight\">minIdle</span>(最小空闲) / <span class=\"highlight\">maxActive</span>(最大连接数) / <span class=\"highlight\">maxWait</span>(获取等待超时)",
      "常见实现：Java(HikariCP/Druid) | Python(SQLAlchemy pool) | Go(database/sql内置)",
      "maxActive经验公式：<span class=\"highlight\">连接数 ≈ CPU核心数 * 2 + 磁盘数</span>（PostgreSQL官方建议，通常10-30足够）",
      "连接泄漏：业务代码未归还连接 → 池耗尽 → 需设置泄漏检测(removeAbandoned)和超时回收"
    ],
    "bullets_ja": [
      "課題：リクエストごとにTCP接続の新規作成+DB認証 → オーバーヘッドが大きい（約10〜50ms）、高並行時にコネクション数が爆発",
      "コネクションプール：<span class=\"highlight\">事前にコネクションをまとめて作成しプールに格納、使用後は閉じずに返却</span>",
      "コアパラメータ：<span class=\"highlight\">minIdle</span>（最小アイドル数）/ <span class=\"highlight\">maxActive</span>（最大コネクション数）/ <span class=\"highlight\">maxWait</span>（取得待ちタイムアウト）",
      "代表的な実装：Java（HikariCP/Druid）| Python（SQLAlchemy pool）| Go（database/sql内蔵）",
      "maxActiveの経験則：<span class=\"highlight\">コネクション数 ≈ CPUコア数 * 2 + ディスク数</span>（PostgreSQL公式推奨、通常10〜30で十分）",
      "コネクションリーク：ビジネスコードがコネクションを返却しない → プール枯渇 → リーク検出（removeAbandoned）とタイムアウト回収の設定が必要"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "db19",
    "cat": "数据库",
    "q": "慢查询排查流程",
    "q_ja": "スロークエリの調査フロー",
    "bullets": [
      "①<span class=\"highlight\">开启慢查询日志</span>：SET GLOBAL slow_query_log = ON; long_query_time = 1（单位秒）",
      "②<span class=\"highlight\">定位慢SQL</span>：mysqldumpslow 或 pt-query-digest 分析慢日志，按耗时/频率排序",
      "③<span class=\"highlight\">EXPLAIN分析</span>：看type(是否ALL全表扫描)、key(是否命中索引)、rows(扫描行数)",
      "④<span class=\"highlight\">常见原因</span>：缺索引 / 索引失效(函数/类型转换) / 返回数据量大 / 锁等待 / 深分页",
      "⑤<span class=\"highlight\">优化手段</span>：加索引 / 改写SQL / 业务层缓存 / 读写分离 / 分库分表",
      "⑥生产环境用 SHOW PROCESSLIST 查看当前执行中的慢查询，必要时 KILL query_id"
    ],
    "bullets_ja": [
      "①<span class=\"highlight\">スロークエリログを有効化</span>：SET GLOBAL slow_query_log = ON; long_query_time = 1（秒単位）",
      "②<span class=\"highlight\">スローSQLの特定</span>：mysqldumpslowまたはpt-query-digestでスローログを分析し、所要時間/頻度でソート",
      "③<span class=\"highlight\">EXPLAIN分析</span>：type（ALLフルテーブルスキャンかどうか）、key（インデックスにヒットしているか）、rows（スキャン行数）を確認",
      "④<span class=\"highlight\">よくある原因</span>：インデックスの欠如 / インデックスの無効化（関数/型変換）/ 返却データ量が大きい / ロック待ち / 深いページネーション",
      "⑤<span class=\"highlight\">最適化手段</span>：インデックス追加 / SQLの書き換え / アプリケーション層のキャッシュ / 読み書き分離 / シャーディング",
      "⑥本番環境ではSHOW PROCESSLISTで実行中のスロークエリを確認し、必要に応じてKILL query_id"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gt01",
    "cat": "Git",
    "q": "Git 基础工作流 — add/commit/status/log",
    "q_ja": "Git基本ワークフロー — add/commit/status/log",
    "bullets": [
      "<pre>git init                     <span class=\"cm\"># 初始化仓库</span>\ngit add file.py              <span class=\"cm\"># 暂存单个文件</span>\ngit add .                    <span class=\"cm\"># 暂存所有变更（慎用）</span>\ngit commit -m <span class=\"str\">\"feat: add X\"</span> <span class=\"cm\"># 提交</span>\ngit status                   <span class=\"cm\"># 查看工作区状态</span>\ngit log --oneline -10        <span class=\"cm\"># 最近10条提交</span>\ngit diff                     <span class=\"cm\"># 工作区 vs 暂存区</span>\ngit diff --staged            <span class=\"cm\"># 暂存区 vs 最新commit</span></pre>",
      "三个区域：<span class=\"highlight\">工作区(Working) → 暂存区(Staging) → 仓库(Repository)</span>",
      "Commit message 规范：type(scope): description → feat/fix/docs/refactor/test"
    ],
    "bullets_ja": [
      "<pre>git init                     <span class=\"cm\"># 初始化仓库</span>\ngit add file.py              <span class=\"cm\"># 暂存单个文件</span>\ngit add .                    <span class=\"cm\"># 暂存所有变更（慎用）</span>\ngit commit -m <span class=\"str\">\"feat: add X\"</span> <span class=\"cm\"># 提交</span>\ngit status                   <span class=\"cm\"># 查看工作区状态</span>\ngit log --oneline -10        <span class=\"cm\"># 最近10条提交</span>\ngit diff                     <span class=\"cm\"># 工作区 vs 暂存区</span>\ngit diff --staged            <span class=\"cm\"># 暂存区 vs 最新commit</span></pre>",
      "3つの領域：<span class=\"highlight\">ワーキングディレクトリ（Working）→ ステージングエリア（Staging）→ リポジトリ（Repository）</span>",
      "コミットメッセージ規約：type(scope): description → feat/fix/docs/refactor/test"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "gt02",
    "cat": "Git",
    "q": ".gitignore — 忽略文件配置",
    "q_ja": ".gitignore — 無視ファイルの設定",
    "bullets": [
      "<pre><span class=\"cm\"># .gitignore 常用模式</span>\n*.pyc              <span class=\"cm\"># 忽略所有.pyc文件</span>\n__pycache__/       <span class=\"cm\"># 忽略目录</span>\n.env               <span class=\"cm\"># 忽略环境变量文件</span>\n*.log              <span class=\"cm\"># 忽略日志</span>\n!important.log     <span class=\"cm\"># 但保留这个</span>\ndata/              <span class=\"cm\"># 忽略数据目录</span>\n.venv/             <span class=\"cm\"># 忽略虚拟环境</span>\n*.pt *.pth *.ckpt  <span class=\"cm\"># 忽略模型权重</span></pre>",
      "已被track的文件需要 <code>git rm --cached file</code> 才能忽略",
      "AI项目必忽略：模型权重/数据集/.env/wandb目录/checkpoint"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># .gitignore 常用模式</span>\n*.pyc              <span class=\"cm\"># 忽略所有.pyc文件</span>\n__pycache__/       <span class=\"cm\"># 忽略目录</span>\n.env               <span class=\"cm\"># 忽略环境变量文件</span>\n*.log              <span class=\"cm\"># 忽略日志</span>\n!important.log     <span class=\"cm\"># 但保留这个</span>\ndata/              <span class=\"cm\"># 忽略数据目录</span>\n.venv/             <span class=\"cm\"># 忽略虚拟环境</span>\n*.pt *.pth *.ckpt  <span class=\"cm\"># 忽略模型权重</span></pre>",
      "既にトラッキング済みのファイルは <code>git rm --cached file</code> を実行しないと無視されない",
      "AIプロジェクトで必ず無視すべきもの：モデル重み/データセット/.env/wandbディレクトリ/チェックポイント"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "gt03",
    "cat": "Git",
    "q": "撤销操作 — restore/reset/revert 区别",
    "q_ja": "取り消し操作 — restore/reset/revert の違い",
    "bullets": [
      "<pre><span class=\"cm\"># 撤销工作区修改（未add）</span>\ngit restore file.py\n<span class=\"cm\"># 取消暂存（已add未commit）</span>\ngit restore --staged file.py\n<span class=\"cm\"># 软重置（撤销commit但保留修改）</span>\ngit reset --soft HEAD~1\n<span class=\"cm\"># 硬重置（丢弃所有修改！危险！）</span>\ngit reset --hard HEAD~1\n<span class=\"cm\"># 创建新commit来撤销（安全，保留历史）</span>\ngit revert HEAD</pre>",
      "<span class=\"highlight\">reset改写历史，revert不改写历史</span>",
      "团队协作中已push的commit用revert，不要reset → 否则队友pull会出问题"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 撤销工作区修改（未add）</span>\ngit restore file.py\n<span class=\"cm\"># 取消暂存（已add未commit）</span>\ngit restore --staged file.py\n<span class=\"cm\"># 软重置（撤销commit但保留修改）</span>\ngit reset --soft HEAD~1\n<span class=\"cm\"># 硬重置（丢弃所有修改！危险！）</span>\ngit reset --hard HEAD~1\n<span class=\"cm\"># 创建新commit来撤销（安全，保留历史）</span>\ngit revert HEAD</pre>",
      "<span class=\"highlight\">resetは履歴を書き換える、revertは履歴を書き換えない</span>",
      "チーム開発で既にpush済みのコミットにはrevertを使い、resetは使わない → さもないとチームメイトのpullで問題が発生する"
    ],
    "lv": 1,
    "group": "工程"
  },
  {
    "id": "gt04",
    "cat": "Git",
    "q": "分支操作与合并策略",
    "q_ja": "ブランチ操作とマージ戦略",
    "bullets": [
      "<pre>git branch feature-x          <span class=\"cm\"># 创建分支</span>\ngit checkout -b feature-x     <span class=\"cm\"># 创建并切换</span>\ngit switch -c feature-x       <span class=\"cm\"># 新语法（推荐）</span>\ngit merge feature-x           <span class=\"cm\"># 合并到当前分支</span>\ngit merge --no-ff feature-x   <span class=\"cm\"># 强制创建merge commit</span>\ngit branch -d feature-x       <span class=\"cm\"># 删除已合并分支</span></pre>",
      "Fast-Forward合并：直线历史，不产生merge commit → 简洁但丢失分支信息",
      "--no-ff：总是产生merge commit → 保留\"这是一个feature\"的信息",
      "原则：主分支用--no-ff，本地整理用ff"
    ],
    "bullets_ja": [
      "<pre>git branch feature-x          <span class=\"cm\"># 创建分支</span>\ngit checkout -b feature-x     <span class=\"cm\"># 创建并切换</span>\ngit switch -c feature-x       <span class=\"cm\"># 新语法（推荐）</span>\ngit merge feature-x           <span class=\"cm\"># 合并到当前分支</span>\ngit merge --no-ff feature-x   <span class=\"cm\"># 强制创建merge commit</span>\ngit branch -d feature-x       <span class=\"cm\"># 删除已合并分支</span></pre>",
      "Fast-Forwardマージ：直線的な履歴でmerge commitが発生しない → シンプルだがブランチ情報が失われる",
      "--no-ff：常にmerge commitを作成 → \"これは1つのfeatureである\"という情報を保持",
      "原則：メインブランチでは--no-ff、ローカルの整理にはffを使用"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "gt05",
    "cat": "Git",
    "q": "合并冲突解决 — 完整流程",
    "q_ja": "マージコンフリクトの解決 — 完全なフロー",
    "bullets": [
      "<pre><span class=\"cm\"># 1. 合并触发冲突</span>\ngit merge feature-x\n<span class=\"cm\"># CONFLICT in file.py</span>\n\n<span class=\"cm\"># 2. 打开冲突文件，手动编辑</span>\n&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\n当前分支的代码\n=======\nfeature-x分支的代码\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-x\n\n<span class=\"cm\"># 3. 解决后</span>\ngit add file.py\ngit commit  <span class=\"cm\"># 自动生成merge commit message</span></pre>",
      "预防冲突：频繁从主分支拉更新(rebase/merge) + 小粒度commit + 避免长生命周期分支",
      "工具：VS Code内置 / git mergetool / IntelliJ三向合并"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 1. 合并触发冲突</span>\ngit merge feature-x\n<span class=\"cm\"># CONFLICT in file.py</span>\n\n<span class=\"cm\"># 2. 打开冲突文件，手动编辑</span>\n&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\n当前分支的代码\n=======\nfeature-x分支的代码\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-x\n\n<span class=\"cm\"># 3. 解决后</span>\ngit add file.py\ngit commit  <span class=\"cm\"># 自动生成merge commit message</span></pre>",
      "コンフリクトの予防：メインブランチから頻繁に更新を取り込む（rebase/merge）+ 小さい粒度のcommit + 長寿命ブランチの回避",
      "ツール：VS Code内蔵 / git mergetool / IntelliJの三方向マージ"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "gt06",
    "cat": "Git",
    "q": "rebase vs merge — 何时用哪个？",
    "q_ja": "rebase vs merge — いつどちらを使うか？",
    "bullets": [
      "<span class=\"highlight\">merge</span>：保留完整历史，产生merge commit → 团队协作、主分支合并",
      "<span class=\"highlight\">rebase</span>：线性历史，把分支的commit\"搬\"到目标分支末端 → 个人分支整理",
      "<pre><span class=\"cm\"># 在feature分支上执行</span>\ngit rebase main\n<span class=\"cm\"># 相当于：把feature的commit摘下来，接在main最新commit后面</span>\n<span class=\"cm\"># ⚠️ 不要rebase已push的公共分支！</span></pre>",
      "<span class=\"highlight\">黄金法则</span>：只rebase自己的本地分支，不rebase公共分支",
      "git pull --rebase：拉取时用rebase而不是merge → 避免无意义的merge commit"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">merge</span>：完全な履歴を保持し、merge commitが発生 → チーム協業、メインブランチへのマージ",
      "<span class=\"highlight\">rebase</span>：線形な履歴にし、ブランチのcommitをターゲットブランチの末尾に\"移動\" → 個人ブランチの整理",
      "<pre><span class=\"cm\"># 在feature分支上执行</span>\ngit rebase main\n<span class=\"cm\"># 相当于：把feature的commit摘下来，接在main最新commit后面</span>\n<span class=\"cm\"># ⚠️ 不要rebase已push的公共分支！</span></pre>",
      "<span class=\"highlight\">ゴールデンルール</span>：rebaseは自分のローカルブランチだけに使い、共有ブランチにはrebaseしない",
      "git pull --rebase：pull時にmergeではなくrebaseを使用 → 無意味なmerge commitを回避"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "gt07",
    "cat": "Git",
    "q": "stash — 暂存未完成的工作",
    "q_ja": "stash — 未完了の作業を一時退避する",
    "bullets": [
      "<pre>git stash                   <span class=\"cm\"># 暂存工作区和暂存区的修改</span>\ngit stash -u                <span class=\"cm\"># 包括untracked文件</span>\ngit stash list              <span class=\"cm\"># 查看所有stash</span>\ngit stash pop               <span class=\"cm\"># 恢复最近的stash并删除</span>\ngit stash apply stash@{1}   <span class=\"cm\"># 恢复指定stash但不删除</span>\ngit stash drop stash@{0}    <span class=\"cm\"># 删除指定stash</span></pre>",
      "场景：正在写feature突然要修bug → stash保存 → 切分支修bug → 切回来pop",
      "注意：stash不会保存.gitignore里的文件，需要用 -a (--all)"
    ],
    "bullets_ja": [
      "<pre>git stash                   <span class=\"cm\"># 暂存工作区和暂存区的修改</span>\ngit stash -u                <span class=\"cm\"># 包括untracked文件</span>\ngit stash list              <span class=\"cm\"># 查看所有stash</span>\ngit stash pop               <span class=\"cm\"># 恢复最近的stash并删除</span>\ngit stash apply stash@{1}   <span class=\"cm\"># 恢复指定stash但不删除</span>\ngit stash drop stash@{0}    <span class=\"cm\"># 删除指定stash</span></pre>",
      "シナリオ：featureを書いている途中で急にバグ修正が必要 → stashで保存 → ブランチを切り替えてバグ修正 → 戻ってpop",
      "注意：stashは.gitignoreに含まれるファイルを保存しない。-a（--all）を使う必要がある"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "gt08",
    "cat": "Git",
    "q": "cherry-pick — 精确选择commit",
    "q_ja": "cherry-pick — コミットの精密な選択",
    "bullets": [
      "<pre>git cherry-pick abc1234        <span class=\"cm\"># 把某个commit复制到当前分支</span>\ngit cherry-pick abc..def       <span class=\"cm\"># 范围(不含abc)</span>\ngit cherry-pick --no-commit abc <span class=\"cm\"># 只应用修改不自动commit</span></pre>",
      "场景①：hotfix在错误的分支上提交了 → cherry-pick到正确分支",
      "场景②：只想从feature分支取某个特定修复 → cherry-pick而非merge整个分支",
      "注意：cherry-pick会创建新commit（不同hash），不是\"移动\"而是\"复制\""
    ],
    "bullets_ja": [
      "<pre>git cherry-pick abc1234        <span class=\"cm\"># 把某个commit复制到当前分支</span>\ngit cherry-pick abc..def       <span class=\"cm\"># 范围(不含abc)</span>\ngit cherry-pick --no-commit abc <span class=\"cm\"># 只应用修改不自动commit</span></pre>",
      "シナリオ①：hotfixを間違ったブランチにコミットしてしまった → 正しいブランチにcherry-pick",
      "シナリオ②：featureブランチから特定の修正だけを取り込みたい → ブランチ全体をmergeするのではなくcherry-pick",
      "注意：cherry-pickは新しいコミットを作成する（異なるhash）。\"移動\"ではなく\"コピー\""
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gt09",
    "cat": "Git",
    "q": "reflog — 恢复误操作的救命工具",
    "q_ja": "reflog — 誤操作からの復旧に使える救命ツール",
    "bullets": [
      "<pre>git reflog                     <span class=\"cm\"># 查看所有HEAD移动历史</span>\n<span class=\"cm\"># 输出: abc1234 HEAD@{0}: reset: moving to HEAD~3</span>\n<span class=\"cm\"># 输出: def5678 HEAD@{1}: commit: add feature</span>\n\n<span class=\"cm\"># 恢复到误操作前</span>\ngit reset --hard def5678       <span class=\"cm\"># 或 HEAD@{1}</span></pre>",
      "reflog记录本地所有引用的变化，<span class=\"highlight\">即使被reset/rebase也能找回</span>",
      "保留约90天 → 不是永久的。重要代码还是要push到remote",
      "场景：git reset --hard后发现删错了 → reflog找到之前的commit → 恢复"
    ],
    "bullets_ja": [
      "<pre>git reflog                     <span class=\"cm\"># 查看所有HEAD移动历史</span>\n<span class=\"cm\"># 输出: abc1234 HEAD@{0}: reset: moving to HEAD~3</span>\n<span class=\"cm\"># 输出: def5678 HEAD@{1}: commit: add feature</span>\n\n<span class=\"cm\"># 恢复到误操作前</span>\ngit reset --hard def5678       <span class=\"cm\"># 或 HEAD@{1}</span></pre>",
      "reflogはローカルの全ての参照の変化を記録する。<span class=\"highlight\">reset/rebaseで消えたものでも復元可能</span>",
      "約90日間保持 → 永久ではない。重要なコードはremoteにpushしておくこと",
      "シナリオ：git reset --hardした後に間違いに気付いた → reflogで以前のcommitを見つける → 復元"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gt10",
    "cat": "Git",
    "q": "bisect — 二分法定位bug",
    "q_ja": "bisect — 二分探索でバグを特定する",
    "bullets": [
      "<pre>git bisect start\ngit bisect bad                 <span class=\"cm\"># 当前commit有bug</span>\ngit bisect good v1.0           <span class=\"cm\"># 这个版本没bug</span>\n<span class=\"cm\"># Git自动checkout中间的commit</span>\n<span class=\"cm\"># 测试后告诉Git:</span>\ngit bisect good  <span class=\"cm\"># 或 bad</span>\n<span class=\"cm\"># 重复直到找到引入bug的commit</span>\ngit bisect reset               <span class=\"cm\"># 结束</span></pre>",
      "O(log n)步找到引入bug的commit — 100个commit只需~7步",
      "自动化：<code>git bisect run pytest test_x.py</code> → 自动根据测试结果判断good/bad",
      "场景：上周还好的功能今天突然坏了，不知道哪个commit引入的"
    ],
    "bullets_ja": [
      "<pre>git bisect start\ngit bisect bad                 <span class=\"cm\"># 当前commit有bug</span>\ngit bisect good v1.0           <span class=\"cm\"># 这个版本没bug</span>\n<span class=\"cm\"># Git自动checkout中间的commit</span>\n<span class=\"cm\"># 测试后告诉Git:</span>\ngit bisect good  <span class=\"cm\"># 或 bad</span>\n<span class=\"cm\"># 重复直到找到引入bug的commit</span>\ngit bisect reset               <span class=\"cm\"># 结束</span></pre>",
      "O(log n)ステップでバグを導入したcommitを特定 — 100個のcommitでも約7ステップ",
      "自動化：<code>git bisect run pytest test_x.py</code> → テスト結果に基づいて自動的にgood/badを判定",
      "シナリオ：先週まで正常だった機能が今日突然壊れた、どのcommitが原因か分からない"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gt11",
    "cat": "Git",
    "q": "工作流对比 — GitFlow vs Trunk-Based",
    "q_ja": "ワークフロー比較 — GitFlow vs Trunk-Based",
    "bullets": [
      "<span class=\"highlight\">GitFlow</span>：main + develop + feature/ + release/ + hotfix/ → 严格流程，适合版本发布软件",
      "<span class=\"highlight\">Trunk-Based</span>：只有main（trunk），短期feature分支快速合并 → 适合CI/CD、互联网公司",
      "GitHub Flow：简化版GitFlow，main + feature/ → 通过PR合并 → 大多数项目推荐",
      "字节/Google/Meta 倾向 Trunk-Based → 小粒度commit + feature flag + 持续部署",
      "选择依据：发布频率高→Trunk / 需要多版本维护→GitFlow"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">GitFlow</span>：main + develop + feature/ + release/ + hotfix/ → 厳格なフロー、バージョンリリース型ソフトウェアに適する",
      "<span class=\"highlight\">Trunk-Based</span>：mainのみ（trunk）、短期featureブランチを迅速にマージ → CI/CD・インターネット企業に適する",
      "GitHub Flow：GitFlowの簡略版、main + feature/ → PRでマージ → 大半のプロジェクトに推奨",
      "ByteDance/Google/MetaはTrunk-Based志向 → 小粒度commit + feature flag + 継続的デプロイ",
      "選択基準：リリース頻度が高い→Trunk / 複数バージョンの保守が必要→GitFlow"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gt12",
    "cat": "Git",
    "q": "git submodule — 在仓库中嵌套管理另一个仓库",
    "q_ja": "git submodule — リポジトリ内に別のリポジトリをネストして管理",
    "bullets": [
      "<pre>git submodule add &lt;url&gt; libs/sdk   <span class=\"cm\"># 添加子模块</span>\ngit submodule init                  <span class=\"cm\"># 初始化（clone后首次）</span>\ngit submodule update --init --recursive <span class=\"cm\"># 拉取所有子模块</span>\ngit clone --recurse-submodules &lt;url&gt;    <span class=\"cm\"># clone时自动拉子模块</span></pre>",
      "使用场景：多个项目共用同一个 SDK/工具库，需要<span class=\"highlight\">锁定特定版本</span>独立演进",
      "子模块记录的是<span class=\"highlight\">具体 commit hash</span>，不会自动更新 — 需要手动 <code>cd libs/sdk &amp;&amp; git pull</code> 然后在父仓库提交新引用",
      "痛点：submodule 操作繁琐、容易忘记更新 — 现代替代方案：<span class=\"highlight\">git subtree</span>（合入历史）、包管理器（npm/pip）、Monorepo",
      "面试回答思路：知道 submodule 的原理和局限性，能说清楚什么时候不该用它"
    ],
    "bullets_ja": [
      "<pre>git submodule add &lt;url&gt; libs/sdk   <span class=\"cm\"># 添加子模块</span>\ngit submodule init                  <span class=\"cm\"># 初始化（clone后首次）</span>\ngit submodule update --init --recursive <span class=\"cm\"># 拉取所有子模块</span>\ngit clone --recurse-submodules &lt;url&gt;    <span class=\"cm\"># clone时自动拉子模块</span></pre>",
      "使用シナリオ：複数のプロジェクトが同一のSDK/ツールライブラリを共有し、<span class=\"highlight\">特定バージョンを固定</span>して独立に発展させる必要がある場合",
      "サブモジュールが記録するのは<span class=\"highlight\">具体的なcommit hash</span>であり、自動更新されない — 手動で<code>cd libs/sdk && git pull</code>した後、親リポジトリで新しい参照をコミットする必要がある",
      "課題点：submoduleの操作は煩雑で更新を忘れやすい — 現代の代替案：<span class=\"highlight\">git subtree</span>（履歴を統合）、パッケージマネージャ（npm/pip）、Monorepo",
      "面接回答のポイント：submoduleの原理と限界を理解し、使うべきでない場面を明確に説明できること"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gt13",
    "cat": "Git",
    "q": "git worktree — 多分支并行开发",
    "q_ja": "git worktree — 複数ブランチの並行開発",
    "bullets": [
      "<pre>git worktree add ../hotfix-dir hotfix/payment  <span class=\"cm\"># 在另一个目录检出分支</span>\ngit worktree list                               <span class=\"cm\"># 查看所有worktree</span>\ngit worktree remove ../hotfix-dir               <span class=\"cm\"># 删除worktree</span></pre>",
      "解决的问题：切分支需要 stash/commit 未完成的工作 → worktree 让你<span class=\"highlight\">同时在不同目录操作不同分支</span>",
      "典型场景：一个目录开发 feature，另一个目录做 code review / hotfix，互不干扰",
      "注意：<span class=\"highlight\">同一个分支不能同时在两个 worktree 中检出</span>，否则会冲突",
      "对比 git clone 多份：worktree 共享 .git 目录，占用更少磁盘空间且 fetch 一次全部可用"
    ],
    "bullets_ja": [
      "<pre>git worktree add ../hotfix-dir hotfix/payment  <span class=\"cm\"># 在另一个目录检出分支</span>\ngit worktree list                               <span class=\"cm\"># 查看所有worktree</span>\ngit worktree remove ../hotfix-dir               <span class=\"cm\"># 删除worktree</span></pre>",
      "解決する課題：ブランチ切り替え時に未完了の作業をstash/commitする必要がある → worktreeなら<span class=\"highlight\">異なるディレクトリで異なるブランチを同時に操作</span>できる",
      "典型的なシナリオ：1つのディレクトリでfeature開発、別のディレクトリでコードレビュー/hotfix修正を並行で行い、互いに干渉しない",
      "注意：<span class=\"highlight\">同じブランチを2つのworktreeで同時にチェックアウトすることはできない</span>。さもないとコンフリクトが発生する",
      "git cloneを複数回するのとの比較：worktreeは.gitディレクトリを共有するため、ディスク使用量が少なく、1回のfetchで全て利用可能"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gt14",
    "cat": "Git",
    "q": "git hooks — 自动化代码质量检查",
    "q_ja": "git hooks — コード品質チェックの自動化",
    "bullets": [
      "<pre><span class=\"cm\"># hooks 存放在 .git/hooks/ 目录</span>\n<span class=\"cm\"># 常用 hooks：</span>\npre-commit    <span class=\"cm\"># commit 前运行（lint/format/测试）</span>\ncommit-msg    <span class=\"cm\"># 校验 commit message 格式</span>\npre-push      <span class=\"cm\"># push 前运行（完整测试套件）</span>\nprepare-commit-msg  <span class=\"cm\"># 自动填充 commit message 模板</span></pre>",
      "<span class=\"highlight\">Husky</span>（JS）/ <span class=\"highlight\">pre-commit</span>（Python）：团队共享 hooks 的工具，配置文件纳入版本控制",
      "<pre><span class=\"cm\"># pre-commit 配置示例 (.pre-commit-config.yaml)</span>\nrepos:\n  - repo: https://github.com/pre-commit/pre-commit-hooks\n    hooks:\n      - id: trailing-whitespace\n      - id: check-yaml\n  - repo: https://github.com/psf/black\n    hooks:\n      - id: black</pre>",
      "CI 门禁 vs 本地 hooks：hooks 是<span class=\"highlight\">第一道防线</span>（快速反馈），CI 是第二道（强制执行）",
      "跳过 hooks：<code>git commit --no-verify</code> — 仅限紧急情况，不要养成习惯"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># hooks 存放在 .git/hooks/ 目录</span>\n<span class=\"cm\"># 常用 hooks：</span>\npre-commit    <span class=\"cm\"># commit 前运行（lint/format/测试）</span>\ncommit-msg    <span class=\"cm\"># 校验 commit message 格式</span>\npre-push      <span class=\"cm\"># push 前运行（完整测试套件）</span>\nprepare-commit-msg  <span class=\"cm\"># 自动填充 commit message 模板</span></pre>",
      "<span class=\"highlight\">Husky</span>（JS）/ <span class=\"highlight\">pre-commit</span>（Python）：チームでhooksを共有するためのツール、設定ファイルをバージョン管理に含める",
      "<pre><span class=\"cm\"># pre-commit 配置示例 (.pre-commit-config.yaml)</span>\nrepos:\n  - repo: https://github.com/pre-commit/pre-commit-hooks\n    hooks:\n      - id: trailing-whitespace\n      - id: check-yaml\n  - repo: https://github.com/psf/black\n    hooks:\n      - id: black</pre>",
      "CIゲート vs ローカルhooks：hooksは<span class=\"highlight\">第一の防衛線</span>（高速フィードバック）、CIは第二の防衛線（強制実行）",
      "hooksのスキップ：<code>git commit --no-verify</code> — 緊急時のみに限り、習慣にしないこと"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "gt15",
    "cat": "Git",
    "q": "git tag — 版本发布与语义化版本",
    "q_ja": "git tag — バージョンリリースとセマンティックバージョニング",
    "bullets": [
      "<pre>git tag v1.0.0                        <span class=\"cm\"># 轻量标签（仅标记）</span>\ngit tag -a v1.0.0 -m <span class=\"str\">\"Release 1.0\"</span>  <span class=\"cm\"># 附注标签（推荐，含作者/日期/信息）</span>\ngit tag -l <span class=\"str\">\"v1.*\"</span>                    <span class=\"cm\"># 列出匹配的标签</span>\ngit push origin v1.0.0                <span class=\"cm\"># 推送单个标签</span>\ngit push origin --tags                <span class=\"cm\"># 推送所有标签</span>\ngit tag -d v1.0.0                     <span class=\"cm\"># 删除本地标签</span>\ngit push origin :refs/tags/v1.0.0     <span class=\"cm\"># 删除远端标签</span></pre>",
      "<span class=\"highlight\">语义化版本 SemVer</span>：MAJOR.MINOR.PATCH — 1.2.3 → 不兼容改动.新功能.修复",
      "tag 与 branch 区别：tag 是<span class=\"highlight\">不可变的快照</span>（指向固定 commit），branch 是可移动的指针",
      "CI/CD 常见模式：push tag 触发自动构建和发布（GitHub Release / Docker Image / PyPI）"
    ],
    "bullets_ja": [
      "<pre>git tag v1.0.0                        <span class=\"cm\"># 轻量标签（仅标记）</span>\ngit tag -a v1.0.0 -m <span class=\"str\">\"Release 1.0\"</span>  <span class=\"cm\"># 附注标签（推荐，含作者/日期/信息）</span>\ngit tag -l <span class=\"str\">\"v1.*\"</span>                    <span class=\"cm\"># 列出匹配的标签</span>\ngit push origin v1.0.0                <span class=\"cm\"># 推送单个标签</span>\ngit push origin --tags                <span class=\"cm\"># 推送所有标签</span>\ngit tag -d v1.0.0                     <span class=\"cm\"># 删除本地标签</span>\ngit push origin :refs/tags/v1.0.0     <span class=\"cm\"># 删除远端标签</span></pre>",
      "<span class=\"highlight\">セマンティックバージョニング SemVer</span>：MAJOR.MINOR.PATCH — 1.2.3 → 互換性のない変更.新機能.バグ修正",
      "tagとbranchの違い：tagは<span class=\"highlight\">不変のスナップショット</span>（固定のcommitを指す）、branchは移動可能なポインタ",
      "CI/CDでよくあるパターン：tag pushで自動ビルドとリリースをトリガー（GitHub Release / Docker Image / PyPI）"
    ],
    "lv": 2,
    "group": "工程"
  },
  {
    "id": "gt16",
    "cat": "Git",
    "q": "Monorepo vs Polyrepo — 代码仓库组织策略",
    "q_ja": "Monorepo vs Polyrepo — コードリポジトリの組織戦略",
    "bullets": [
      "<span class=\"highlight\">Monorepo</span>：所有项目放一个仓库 → Google/Meta/Uber 采用，共享代码方便，原子提交跨项目变更",
      "<span class=\"highlight\">Polyrepo</span>：每个项目独立仓库 → 权限隔离清晰，CI/CD 独立，团队自治度高",
      "Monorepo 工具链：<span class=\"highlight\">Nx</span>（JS）/ <span class=\"highlight\">Turborepo</span>（JS）/ <span class=\"highlight\">Bazel</span>（通用）— 解决构建效率和依赖管理",
      "Monorepo 挑战：仓库体积大、CI 变慢（需增量构建）、权限粒度粗、git clone 慢（用 sparse-checkout / shallow clone 缓解）",
      "选择建议：<span class=\"highlight\">强耦合多模块</span> → Monorepo | <span class=\"highlight\">独立团队独立部署</span> → Polyrepo",
      "面试考点：不是非此即彼，很多公司是混合模式 — 核心服务 Monorepo + 独立产品 Polyrepo"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">Monorepo</span>：全プロジェクトを1つのリポジトリに → Google/Meta/Uberが採用、コード共有が容易、プロジェクト横断の変更をアトミックにコミット",
      "<span class=\"highlight\">Polyrepo</span>：プロジェクトごとに独立したリポジトリ → 権限分離が明確、CI/CDが独立、チームの自律性が高い",
      "Monorepoのツールチェーン：<span class=\"highlight\">Nx</span>（JS）/ <span class=\"highlight\">Turborepo</span>（JS）/ <span class=\"highlight\">Bazel</span>（汎用）— ビルド効率と依存関係管理を解決",
      "Monorepoの課題：リポジトリサイズが大きい、CIが遅くなる（インクリメンタルビルドが必要）、権限粒度が粗い、git cloneが遅い（sparse-checkout / shallow cloneで緩和）",
      "選択の目安：<span class=\"highlight\">強結合な複数モジュール</span> → Monorepo | <span class=\"highlight\">独立チームが独立デプロイ</span> → Polyrepo",
      "面接のポイント：二者択一ではなく、多くの企業はハイブリッドモデル — コアサービスはMonorepo + 独立プロダクトはPolyrepo"
    ],
    "lv": 3,
    "group": "工程"
  },
  {
    "id": "gs01",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你在 feature 分支开发到一半，突然要修一个紧急 bug",
    "q_ja": "シナリオ：featureブランチで開発中に、緊急バグの修正が必要になった",
    "bullets": [
      "<pre><span class=\"cm\"># 1. 暂存当前未完成的工作</span>\ngit stash push -m <span class=\"str\">\"WIP: feature-login halfway\"</span>\n\n<span class=\"cm\"># 2. 切到主分支，创建 hotfix</span>\ngit switch main\ngit switch -c hotfix/payment-crash\n\n<span class=\"cm\"># 3. 修复 bug，提交并合并</span>\ngit add .\ngit commit -m <span class=\"str\">\"fix: payment null pointer crash\"</span>\ngit switch main\ngit merge --no-ff hotfix/payment-crash\n\n<span class=\"cm\"># 4. 回到 feature 分支，恢复工作</span>\ngit switch feature-login\ngit stash pop</pre>",
      "stash 是一个<span class=\"highlight\">栈结构</span>，可以存多个：<code>git stash list</code> 查看所有条目",
      "<code>git stash pop</code> = 恢复并删除 | <code>git stash apply</code> = 恢复但保留（更安全）",
      "给 stash 加 message（<code>-m</code>）是好习惯，否则多个 stash 分不清哪个是哪个",
      "替代方案：直接 <code>git commit -m \"WIP\"</code> 然后走了再 <code>git reset --soft HEAD~1</code> 恢复"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 1. 暂存当前未完成的工作</span>\ngit stash push -m <span class=\"str\">\"WIP: feature-login halfway\"</span>\n\n<span class=\"cm\"># 2. 切到主分支，创建 hotfix</span>\ngit switch main\ngit switch -c hotfix/payment-crash\n\n<span class=\"cm\"># 3. 修复 bug，提交并合并</span>\ngit add .\ngit commit -m <span class=\"str\">\"fix: payment null pointer crash\"</span>\ngit switch main\ngit merge --no-ff hotfix/payment-crash\n\n<span class=\"cm\"># 4. 回到 feature 分支，恢复工作</span>\ngit switch feature-login\ngit stash pop</pre>",
      "stashは<span class=\"highlight\">スタック構造</span>で、複数保存可能：<code>git stash list</code>で全エントリを確認",
      "<code>git stash pop</code> = 復元して削除 | <code>git stash apply</code> = 復元するが保持（より安全）",
      "stashにメッセージ（<code>-m</code>）をつけるのは良い習慣。複数のstashがあるとどれがどれか分からなくなる",
      "代替案：<code>git commit -m \"WIP\"</code>で直接コミットし、戻ってきたら<code>git reset --soft HEAD~1</code>で復元"
    ],
    "lv": 2
  },
  {
    "id": "gs02",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你 commit 了一个包含密码的 .env 文件到 Git 历史",
    "q_ja": "シナリオ：パスワードを含む.envファイルをGit履歴にコミットしてしまった",
    "bullets": [
      "仅仅 <code>git rm --cached .env</code> + 加 .gitignore <span class=\"highlight\">是不够的</span> — 密码仍然在历史 commit 里！",
      "<pre><span class=\"cm\"># 方案A：BFG Repo Cleaner（推荐，快）</span>\njava -jar bfg.jar --delete-files .env\ngit reflog expire --expire=now --all\ngit gc --prune=now --aggressive\n\n<span class=\"cm\"># 方案B：git filter-repo（官方推荐替代 filter-branch）</span>\ngit filter-repo --path .env --invert-paths\n\n<span class=\"cm\"># 清理完必须 force push</span>\ngit push --force --all</pre>",
      "Force push 后<span class=\"highlight\">通知所有团队成员重新 clone</span>，否则他们 push 会把旧历史带回来",
      "善后：<span class=\"highlight\">立即轮换所有泄露的密码/token</span>，因为 Git 历史可能已被 fork 或缓存",
      "预防：.gitignore 模板 + <code>pre-commit</code> hook 扫描敏感关键词（detect-secrets / gitleaks）"
    ],
    "bullets_ja": [
      "<code>git rm --cached .env</code> + .gitignore追加だけでは<span class=\"highlight\">不十分</span> — パスワードは依然として過去のcommit履歴に残っている！",
      "<pre><span class=\"cm\"># 方案A：BFG Repo Cleaner（推荐，快）</span>\njava -jar bfg.jar --delete-files .env\ngit reflog expire --expire=now --all\ngit gc --prune=now --aggressive\n\n<span class=\"cm\"># 方案B：git filter-repo（官方推荐替代 filter-branch）</span>\ngit filter-repo --path .env --invert-paths\n\n<span class=\"cm\"># 清理完必须 force push</span>\ngit push --force --all</pre>",
      "Force push後は<span class=\"highlight\">全チームメンバーに再cloneを通知</span>する。さもないと彼らのpushで旧履歴が戻ってしまう",
      "事後対応：<span class=\"highlight\">漏洩した全てのパスワード/tokenを直ちにローテーション</span>する。Git履歴は既にforkやキャッシュされている可能性がある",
      "予防：.gitignoreテンプレート + <code>pre-commit</code> hookで機密キーワードをスキャン（detect-secrets / gitleaks）"
    ],
    "lv": 2
  },
  {
    "id": "gs03",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你发现昨天的 commit message 写错了",
    "q_ja": "シナリオ：昨日のコミットメッセージが間違っていたことに気付いた",
    "bullets": [
      "<pre><span class=\"cm\"># 情况1：修改最后一条 commit message</span>\ngit commit --amend -m <span class=\"str\">\"fix: correct error handling in payment module\"</span>\n\n<span class=\"cm\"># 情况2：修改更早的 commit（比如倒数第3个）</span>\ngit rebase -i HEAD~3\n<span class=\"cm\"># 在编辑器中把目标 commit 前的 \"pick\" 改成 \"reword\"</span>\n<span class=\"cm\"># 保存退出后 Git 会让你编辑该 commit message</span></pre>",
      "<span class=\"highlight\">黄金法则：只能改还没 push 的 commit！</span>已 push 的 = 改写共享历史 = 队友灾难",
      "如果已经 push 了呢？两个选择：①接受错误 message ②force push 并通知团队",
      "amend 本质是<span class=\"highlight\">替换旧 commit</span>（新 hash），不是\"编辑\" — 旧 commit 仍存在于 reflog 中"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 情况1：修改最后一条 commit message</span>\ngit commit --amend -m <span class=\"str\">\"fix: correct error handling in payment module\"</span>\n\n<span class=\"cm\"># 情况2：修改更早的 commit（比如倒数第3个）</span>\ngit rebase -i HEAD~3\n<span class=\"cm\"># 在编辑器中把目标 commit 前的 \"pick\" 改成 \"reword\"</span>\n<span class=\"cm\"># 保存退出后 Git 会让你编辑该 commit message</span></pre>",
      "<span class=\"highlight\">ゴールデンルール：まだpushしていないcommitだけ修正可能！</span>push済み = 共有履歴の書き換え = チームメイトに災難をもたらす",
      "既にpush済みの場合は？2つの選択肢：①間違ったメッセージを受け入れる ②force pushしてチームに通知",
      "amendの本質は<span class=\"highlight\">旧commitの置き換え</span>（新しいhash）であり、\"編集\"ではない — 旧commitはreflogに残る"
    ],
    "lv": 2
  },
  {
    "id": "gs04",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你的 PR 有 20 个零碎 commit，reviewer 要求整理成 3 个有意义的 commit",
    "q_ja": "シナリオ：PRに20個の細かいcommitがあり、reviewerから意味のある3つのcommitに整理するよう求められた",
    "bullets": [
      "<pre><span class=\"cm\"># 方案A：Interactive rebase（精确控制）</span>\ngit rebase -i HEAD~20\n<span class=\"cm\"># 编辑器中的操作：</span>\n<span class=\"cm\"># pick abc1234 feat: add user model        ← 保留</span>\n<span class=\"cm\"># squash def5678 fix typo in model         ← 合入上一个</span>\n<span class=\"cm\"># squash ghi9012 add validation            ← 合入上一个</span>\n<span class=\"cm\"># pick jkl3456 feat: add user API          ← 第二组开始</span>\n<span class=\"cm\"># fixup mno7890 fix API response format    ← 合入，丢弃message</span>\n<span class=\"cm\"># pick pqr1234 test: add user tests        ← 第三组</span></pre>",
      "<pre><span class=\"cm\"># 方案B：soft reset 重新提交（更简单粗暴）</span>\ngit reset --soft origin/main\n<span class=\"cm\"># 此时所有改动都在暂存区</span>\ngit commit -m <span class=\"str\">\"feat: add user model with validation\"</span>\ngit commit -m <span class=\"str\">\"feat: add user REST API\"</span>\ngit commit -m <span class=\"str\">\"test: add user module tests\"</span></pre>",
      "squash vs fixup：<span class=\"highlight\">squash 保留 message 让你编辑，fixup 直接丢弃 message</span>",
      "整理完后需要 <code>git push --force-with-lease</code>（比 --force 安全，会检查远端是否有新提交）",
      "好的 commit 粒度：一个 commit = 一个逻辑变更 = 能独立 revert 不破坏其他功能"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 方案A：Interactive rebase（精确控制）</span>\ngit rebase -i HEAD~20\n<span class=\"cm\"># 编辑器中的操作：</span>\n<span class=\"cm\"># pick abc1234 feat: add user model        ← 保留</span>\n<span class=\"cm\"># squash def5678 fix typo in model         ← 合入上一个</span>\n<span class=\"cm\"># squash ghi9012 add validation            ← 合入上一个</span>\n<span class=\"cm\"># pick jkl3456 feat: add user API          ← 第二组开始</span>\n<span class=\"cm\"># fixup mno7890 fix API response format    ← 合入，丢弃message</span>\n<span class=\"cm\"># pick pqr1234 test: add user tests        ← 第三组</span></pre>",
      "<pre><span class=\"cm\"># 方案B：soft reset 重新提交（更简单粗暴）</span>\ngit reset --soft origin/main\n<span class=\"cm\"># 此时所有改动都在暂存区</span>\ngit commit -m <span class=\"str\">\"feat: add user model with validation\"</span>\ngit commit -m <span class=\"str\">\"feat: add user REST API\"</span>\ngit commit -m <span class=\"str\">\"test: add user module tests\"</span></pre>",
      "squash vs fixup：<span class=\"highlight\">squashはメッセージを保持して編集させる、fixupはメッセージを直接破棄</span>",
      "整理後は<code>git push --force-with-lease</code>が必要（--forceより安全、リモートに新しいコミットがないか確認する）",
      "良いcommit粒度：1つのcommit = 1つの論理的変更 = 他の機能を壊さずに独立してrevert可能"
    ],
    "lv": 3
  },
  {
    "id": "gs05",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：git pull 后发现一堆合并冲突，你想先回到 pull 之前的状态",
    "q_ja": "シナリオ：git pull後に大量のマージコンフリクトが発生し、pull前の状態に戻したい",
    "bullets": [
      "<pre><span class=\"cm\"># 情况1：merge 还没完成（正在冲突中）</span>\ngit merge --abort\n<span class=\"cm\"># 一切回到 merge 前的状态，冲突标记消失</span>\n\n<span class=\"cm\"># 情况2：merge 已经完成（手滑 commit 了）</span>\ngit reset --hard ORIG_HEAD\n<span class=\"cm\"># ORIG_HEAD 指向 merge/rebase 前的位置</span>\n\n<span class=\"cm\"># 情况3：不确定要回到哪里</span>\ngit reflog\n<span class=\"cm\"># 找到 pull 之前的 commit hash</span>\ngit reset --hard abc1234</pre>",
      "<code>--hard</code> 会<span class=\"highlight\">丢弃所有未提交的修改</span>，确保没有重要的未提交工作",
      "更安全的做法：先 <code>git stash</code> 保存未提交修改，再 reset",
      "<code>git pull --rebase</code> 遇到冲突时用 <code>git rebase --abort</code> 取消",
      "预防：养成 pull 前先 <code>git stash</code> 或先 commit 的习惯"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 情况1：merge 还没完成（正在冲突中）</span>\ngit merge --abort\n<span class=\"cm\"># 一切回到 merge 前的状态，冲突标记消失</span>\n\n<span class=\"cm\"># 情况2：merge 已经完成（手滑 commit 了）</span>\ngit reset --hard ORIG_HEAD\n<span class=\"cm\"># ORIG_HEAD 指向 merge/rebase 前的位置</span>\n\n<span class=\"cm\"># 情况3：不确定要回到哪里</span>\ngit reflog\n<span class=\"cm\"># 找到 pull 之前的 commit hash</span>\ngit reset --hard abc1234</pre>",
      "<code>--hard</code>は<span class=\"highlight\">未コミットの全ての変更を破棄する</span>。重要な未コミットの作業がないことを確認すること",
      "より安全な方法：先に<code>git stash</code>で未コミットの変更を保存してからresetする",
      "<code>git pull --rebase</code>でコンフリクトが発生した場合は<code>git rebase --abort</code>でキャンセル",
      "予防：pull前に<code>git stash</code>またはcommitする習慣をつける"
    ],
    "lv": 2
  },
  {
    "id": "gs06",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你 commit 了但还没 push，发现少了一个文件",
    "q_ja": "シナリオ：コミットしたがまだpushしていない段階で、ファイルを追加し忘れたことに気付いた",
    "bullets": [
      "<pre><span class=\"cm\"># 方案A：amend 追加到上一个 commit（推荐）</span>\ngit add forgotten_file.py\ngit commit --amend --no-edit\n<span class=\"cm\"># --no-edit 保持原来的 commit message 不变</span>\n<span class=\"cm\"># 文件被追加进最后一个 commit</span>\n\n<span class=\"cm\"># 方案B：单独新建一个 commit（更简单）</span>\ngit add forgotten_file.py\ngit commit -m <span class=\"str\">\"chore: add forgotten_file.py\"</span></pre>",
      "amend 实质是<span class=\"highlight\">创建一个新 commit 替换旧的</span>（hash 变了），而不是\"编辑\"",
      "方案A 优点：历史干净 | 方案B 优点：更安全，不改写历史",
      "如果已经 push 了：<span class=\"highlight\">别 amend！直接新建 commit</span>，否则需要 force push"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 方案A：amend 追加到上一个 commit（推荐）</span>\ngit add forgotten_file.py\ngit commit --amend --no-edit\n<span class=\"cm\"># --no-edit 保持原来的 commit message 不变</span>\n<span class=\"cm\"># 文件被追加进最后一个 commit</span>\n\n<span class=\"cm\"># 方案B：单独新建一个 commit（更简单）</span>\ngit add forgotten_file.py\ngit commit -m <span class=\"str\">\"chore: add forgotten_file.py\"</span></pre>",
      "amendの実体は<span class=\"highlight\">新しいcommitを作成して古いものを置き換える</span>（hashが変わる）。\"編集\"ではない",
      "方案Aの利点：履歴がきれい | 方案Bの利点：より安全、履歴を書き換えない",
      "既にpush済みの場合：<span class=\"highlight\">amendしないこと！新しいcommitを作る</span>。さもないとforce pushが必要になる"
    ],
    "lv": 2
  },
  {
    "id": "gs07",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：两个人同时改了同一个文件的同一行，如何解决冲突",
    "q_ja": "シナリオ：2人が同じファイルの同じ行を同時に変更した場合、コンフリクトをどう解決するか",
    "bullets": [
      "<pre><span class=\"cm\"># Git 标记冲突的格式</span>\ndef calculate_price(item):\n&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\n    return item.price * 0.9    <span class=\"cm\"># 你的改动：9折</span>\n=======\n    return item.price * 0.85   <span class=\"cm\"># 同事的改动：85折</span>\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-discount</pre>",
      "<pre><span class=\"cm\"># 解决步骤</span>\n<span class=\"cm\"># 1. 理解双方改动的意图（不要盲目选一个！）</span>\n<span class=\"cm\"># 2. 手动编辑：保留一方 / 合并两者 / 重写</span>\ndef calculate_price(item, vip=False):\n    return item.price * (0.85 if vip else 0.9)\n\n<span class=\"cm\"># 3. 标记解决并提交</span>\ngit add pricing.py\ngit commit  <span class=\"cm\"># Git 自动生成 merge commit message</span></pre>",
      "工具推荐：<span class=\"highlight\">VS Code 三向合并编辑器</span>（上方显示双方，下方编辑结果）、<code>git mergetool</code>",
      "预防冲突的团队实践：小粒度提交 + 频繁 pull/rebase + 模块职责划分清晰",
      "冲突不是错误，是<span class=\"highlight\">正常的协作信号</span> — 解决时要和同事沟通确认意图"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># Git 标记冲突的格式</span>\ndef calculate_price(item):\n&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\n    return item.price * 0.9    <span class=\"cm\"># 你的改动：9折</span>\n=======\n    return item.price * 0.85   <span class=\"cm\"># 同事的改动：85折</span>\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-discount</pre>",
      "<pre><span class=\"cm\"># 解决步骤</span>\n<span class=\"cm\"># 1. 理解双方改动的意图（不要盲目选一个！）</span>\n<span class=\"cm\"># 2. 手动编辑：保留一方 / 合并两者 / 重写</span>\ndef calculate_price(item, vip=False):\n    return item.price * (0.85 if vip else 0.9)\n\n<span class=\"cm\"># 3. 标记解决并提交</span>\ngit add pricing.py\ngit commit  <span class=\"cm\"># Git 自动生成 merge commit message</span></pre>",
      "推奨ツール：<span class=\"highlight\">VS Codeの三方向マージエディタ</span>（上部に双方を表示、下部で結果を編集）、<code>git mergetool</code>",
      "コンフリクト予防のチームプラクティス：小粒度のコミット + 頻繁なpull/rebase + モジュール責務の明確な分担",
      "コンフリクトはエラーではなく、<span class=\"highlight\">正常な協業のシグナル</span> — 解決時には同僚と意図を確認しながらコミュニケーションすること"
    ],
    "lv": 3
  },
  {
    "id": "gs08",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你想查看某一行代码是谁在什么时候写的",
    "q_ja": "シナリオ：ある行のコードを誰がいつ書いたのか確認したい",
    "bullets": [
      "<pre><span class=\"cm\"># 查看每一行的作者和提交信息</span>\ngit blame file.py\n<span class=\"cm\"># 输出示例：</span>\n<span class=\"cm\"># a1b2c3d4 (张三 2025-12-01) def calculate():</span>\n<span class=\"cm\"># e5f6g7h8 (李四 2026-01-15)     return x * 0.9</span>\n\n<span class=\"cm\"># 只看某几行</span>\ngit blame -L 10,20 file.py\n\n<span class=\"cm\"># 搜索某段代码是什么时候加入/删除的</span>\ngit log -p -S <span class=\"str\">\"calculate_price\"</span>\n\n<span class=\"cm\"># 追踪文件改名历史</span>\ngit log --follow --oneline utils/pricing.py</pre>",
      "实际用途：<span class=\"highlight\">线上 bug 定位</span>（谁改的？为什么改？当时的 PR 是什么？）",
      "<code>git log -p -S \"string\"</code> 是\"pickaxe\" 搜索 — 找到<span class=\"highlight\">添加或删除</span>某个字符串的所有 commit",
      "<code>git blame -w</code> 忽略空白变更，<code>-M</code> 检测行移动，<code>-C</code> 检测跨文件复制",
      "VS Code / JetBrains 内置 blame 注解 — 鼠标悬停即可查看，无需命令行"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 查看每一行的作者和提交信息</span>\ngit blame file.py\n<span class=\"cm\"># 输出示例：</span>\n<span class=\"cm\"># a1b2c3d4 (张三 2025-12-01) def calculate():</span>\n<span class=\"cm\"># e5f6g7h8 (李四 2026-01-15)     return x * 0.9</span>\n\n<span class=\"cm\"># 只看某几行</span>\ngit blame -L 10,20 file.py\n\n<span class=\"cm\"># 搜索某段代码是什么时候加入/删除的</span>\ngit log -p -S <span class=\"str\">\"calculate_price\"</span>\n\n<span class=\"cm\"># 追踪文件改名历史</span>\ngit log --follow --oneline utils/pricing.py</pre>",
      "実用的な用途：<span class=\"highlight\">本番バグの特定</span>（誰が変更した？なぜ変更した？当時のPRは？）",
      "<code>git log -p -S \"string\"</code>は\"pickaxe\"検索 — ある文字列を<span class=\"highlight\">追加または削除</span>した全commitを検索",
      "<code>git blame -w</code>は空白変更を無視、<code>-M</code>は行の移動を検出、<code>-C</code>はファイル間のコピーを検出",
      "VS Code / JetBrainsにはblameアノテーションが内蔵 — マウスホバーで確認でき、コマンドライン不要"
    ],
    "lv": 2
  },
  {
    "id": "gs09",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你误用 git reset --hard 丢了本地改动，如何恢复",
    "q_ja": "シナリオ：git reset --hardを誤って使いローカルの変更を失った場合、どう復旧するか",
    "bullets": [
      "<pre><span class=\"cm\"># 情况1：丢失的改动曾经 commit 过</span>\ngit reflog\n<span class=\"cm\"># 找到 reset 之前的 commit hash</span>\n<span class=\"cm\"># e.g. abc1234 HEAD@{1}: commit: add feature X</span>\ngit reset --hard abc1234\n<span class=\"cm\"># 恢复成功！reflog 保留约 90 天</span>\n\n<span class=\"cm\"># 情况2：改动只 git add 过（未 commit）</span>\ngit fsck --lost-found\n<span class=\"cm\"># 在 .git/lost-found/other/ 中寻找 blob</span>\ngit show &lt;blob-hash&gt;  <span class=\"cm\"># 查看内容</span></pre>",
      "情况3：改动<span class=\"highlight\">从未 add 也从未 commit → 无法恢复！Git 从未记录过它</span>",
      "<code>git reflog</code> 是你的<span class=\"highlight\">后悔药</span>：记录 HEAD 的每一次移动（commit/reset/checkout/rebase）",
      "教训：<span class=\"highlight\">commit early, commit often</span> — 哪怕是 WIP commit，有 commit 就有恢复的可能",
      "团队规范：用 <code>git reset --soft</code> 代替 <code>--hard</code>，除非你100%确定要丢弃改动"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 情况1：丢失的改动曾经 commit 过</span>\ngit reflog\n<span class=\"cm\"># 找到 reset 之前的 commit hash</span>\n<span class=\"cm\"># e.g. abc1234 HEAD@{1}: commit: add feature X</span>\ngit reset --hard abc1234\n<span class=\"cm\"># 恢复成功！reflog 保留约 90 天</span>\n\n<span class=\"cm\"># 情况2：改动只 git add 过（未 commit）</span>\ngit fsck --lost-found\n<span class=\"cm\"># 在 .git/lost-found/other/ 中寻找 blob</span>\ngit show &lt;blob-hash&gt;  <span class=\"cm\"># 查看内容</span></pre>",
      "ケース3：変更が<span class=\"highlight\">一度もaddもcommitもされていない場合 → 復旧不可能！Gitに一度も記録されていない</span>",
      "<code>git reflog</code>はあなたの<span class=\"highlight\">セーフティネット</span>：HEADの全ての移動を記録（commit/reset/checkout/rebase）",
      "教訓：<span class=\"highlight\">commit early, commit often</span> — WIPコミットでも、commitがあれば復旧の可能性がある",
      "チーム規約：<code>--hard</code>の代わりに<code>git reset --soft</code>を使う。変更を破棄すると100%確信がある場合を除いて"
    ],
    "lv": 3
  },
  {
    "id": "gs10",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你要把别的分支上的某一个 commit 拿过来，但不要整个分支",
    "q_ja": "シナリオ：別のブランチの特定のcommitだけを取り込みたいが、ブランチ全体はいらない",
    "bullets": [
      "<pre><span class=\"cm\"># 找到目标 commit 的 hash</span>\ngit log --oneline main\n<span class=\"cm\"># abc1234 fix: payment timeout handling</span>\n\n<span class=\"cm\"># cherry-pick 到当前分支</span>\ngit cherry-pick abc1234\n\n<span class=\"cm\"># 如果有冲突</span>\n<span class=\"cm\"># 解决冲突 → git add → git cherry-pick --continue</span>\n<span class=\"cm\"># 或放弃：git cherry-pick --abort</span>\n\n<span class=\"cm\"># cherry-pick 多个 commit</span>\ngit cherry-pick abc1234 def5678\n<span class=\"cm\"># 或连续范围（不含起点）</span>\ngit cherry-pick abc1234..ghi9012</pre>",
      "典型场景：hotfix 已合入 main，release 分支也需要同一个修复",
      "cherry-pick <span class=\"highlight\">创建全新的 commit（不同 hash）</span>，不是引用 — 两个分支上是独立的副本",
      "如果后续两个分支 merge，Git 通常能自动处理重复改动，但偶尔会冲突",
      "替代方案：如果需要拿整个分支的部分改动，考虑 <code>git rebase --onto</code>"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 找到目标 commit 的 hash</span>\ngit log --oneline main\n<span class=\"cm\"># abc1234 fix: payment timeout handling</span>\n\n<span class=\"cm\"># cherry-pick 到当前分支</span>\ngit cherry-pick abc1234\n\n<span class=\"cm\"># 如果有冲突</span>\n<span class=\"cm\"># 解决冲突 → git add → git cherry-pick --continue</span>\n<span class=\"cm\"># 或放弃：git cherry-pick --abort</span>\n\n<span class=\"cm\"># cherry-pick 多个 commit</span>\ngit cherry-pick abc1234 def5678\n<span class=\"cm\"># 或连续范围（不含起点）</span>\ngit cherry-pick abc1234..ghi9012</pre>",
      "典型的なシナリオ：hotfixがmainにマージ済みで、releaseブランチにも同じ修正が必要",
      "cherry-pickは<span class=\"highlight\">全く新しいcommitを作成する（異なるhash）</span>。参照ではなく、2つのブランチ上の独立したコピー",
      "その後2つのブランチをmergeする際、Gitは通常重複した変更を自動処理できるが、まれにコンフリクトが発生する",
      "代替案：ブランチの一部の変更を取得する必要がある場合は<code>git rebase --onto</code>を検討"
    ],
    "lv": 2
  },
  {
    "id": "gs11",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：线上出 bug 了，你需要找出是哪个 commit 引入的",
    "q_ja": "シナリオ：本番でバグが発生し、どのcommitが原因か特定する必要がある",
    "bullets": [
      "<pre><span class=\"cm\"># 1. 启动二分查找</span>\ngit bisect start\ngit bisect bad               <span class=\"cm\"># 当前版本有 bug</span>\ngit bisect good v2.0.0       <span class=\"cm\"># 这个版本是好的</span>\n\n<span class=\"cm\"># 2. Git 自动 checkout 中间的 commit</span>\n<span class=\"cm\">#    你测试 → 告诉 Git 结果</span>\ngit bisect good              <span class=\"cm\"># 这个没 bug</span>\ngit bisect bad               <span class=\"cm\"># 这个有 bug</span>\n<span class=\"cm\"># ... 重复几次</span>\n\n<span class=\"cm\"># 3. Git 定位到罪魁祸首 commit</span>\n<span class=\"cm\"># abc1234 is the first bad commit</span>\n\ngit bisect reset             <span class=\"cm\"># 退出 bisect，回到原分支</span></pre>",
      "<pre><span class=\"cm\"># 自动化：让脚本代替人工测试</span>\ngit bisect start HEAD v2.0.0\ngit bisect run python test_payment.py\n<span class=\"cm\"># Git 自动跑测试，自动标记 good/bad</span>\n<span class=\"cm\"># 退出码 0 = good, 非0 = bad</span></pre>",
      "效率：1000 个 commit 只需测试 ~<span class=\"highlight\">10 次</span>（O(log n) 二分搜索 vs 线性 O(n)）",
      "找到 commit 后：<code>git show abc1234</code> 看改了什么 → <code>git revert abc1234</code> 快速回滚",
      "适用于：能明确判断\"有 bug / 没 bug\"的场景 — 最好有自动化测试脚本配合"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 1. 启动二分查找</span>\ngit bisect start\ngit bisect bad               <span class=\"cm\"># 当前版本有 bug</span>\ngit bisect good v2.0.0       <span class=\"cm\"># 这个版本是好的</span>\n\n<span class=\"cm\"># 2. Git 自动 checkout 中间的 commit</span>\n<span class=\"cm\">#    你测试 → 告诉 Git 结果</span>\ngit bisect good              <span class=\"cm\"># 这个没 bug</span>\ngit bisect bad               <span class=\"cm\"># 这个有 bug</span>\n<span class=\"cm\"># ... 重复几次</span>\n\n<span class=\"cm\"># 3. Git 定位到罪魁祸首 commit</span>\n<span class=\"cm\"># abc1234 is the first bad commit</span>\n\ngit bisect reset             <span class=\"cm\"># 退出 bisect，回到原分支</span></pre>",
      "<pre><span class=\"cm\"># 自动化：让脚本代替人工测试</span>\ngit bisect start HEAD v2.0.0\ngit bisect run python test_payment.py\n<span class=\"cm\"># Git 自动跑测试，自动标记 good/bad</span>\n<span class=\"cm\"># 退出码 0 = good, 非0 = bad</span></pre>",
      "効率：1000個のcommitでもテストは約<span class=\"highlight\">10回</span>だけ（O(log n)の二分探索 vs 線形O(n)）",
      "commit特定後：<code>git show abc1234</code>で変更内容を確認 → <code>git revert abc1234</code>で素早くロールバック",
      "適用場面：\"バグあり/バグなし\"を明確に判定できるケース — 自動テストスクリプトとの併用が最適"
    ],
    "lv": 3
  },
  {
    "id": "gs12",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：团队用 GitFlow，你的 feature 分支落后 develop 50 个 commit，如何同步",
    "q_ja": "シナリオ：チームがGitFlowを使用中、featureブランチがdevelopより50commit遅れている場合の同期方法",
    "bullets": [
      "<pre><span class=\"cm\"># 方案A：Merge（安全，保留完整历史）</span>\ngit switch feature-login\ngit merge develop\n<span class=\"cm\"># 产生一个 merge commit</span>\n<span class=\"cm\"># 历史中能看到\"何时同步了 develop\"</span>\ngit push origin feature-login\n\n<span class=\"cm\"># 方案B：Rebase（历史更干净）</span>\ngit switch feature-login\ngit rebase develop\n<span class=\"cm\"># 你的 commit 被\"搬\"到 develop 最新位置之后</span>\n<span class=\"cm\"># 必须 force push（因为历史被改写了）</span>\ngit push --force-with-lease origin feature-login</pre>",
      "经验法则：<span class=\"highlight\">共享分支 → merge | 个人分支 → rebase</span>",
      "<code>--force-with-lease</code> 比 <code>--force</code> 安全：如果远端有别人新 push 的提交会拒绝，防止覆盖他人工作",
      "Rebase 冲突处理：每个 commit 可能单独冲突 → <code>解决 → git add → git rebase --continue</code>，太多冲突可以 <code>git rebase --abort</code> 放弃",
      "团队应统一策略：在 PR 描述 / CONTRIBUTING.md 中写清楚用 merge 还是 rebase"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 方案A：Merge（安全，保留完整历史）</span>\ngit switch feature-login\ngit merge develop\n<span class=\"cm\"># 产生一个 merge commit</span>\n<span class=\"cm\"># 历史中能看到\"何时同步了 develop\"</span>\ngit push origin feature-login\n\n<span class=\"cm\"># 方案B：Rebase（历史更干净）</span>\ngit switch feature-login\ngit rebase develop\n<span class=\"cm\"># 你的 commit 被\"搬\"到 develop 最新位置之后</span>\n<span class=\"cm\"># 必须 force push（因为历史被改写了）</span>\ngit push --force-with-lease origin feature-login</pre>",
      "経験則：<span class=\"highlight\">共有ブランチ → merge | 個人ブランチ → rebase</span>",
      "<code>--force-with-lease</code>は<code>--force</code>より安全：リモートに他の人の新しいpushがあれば拒否し、他人の作業の上書きを防ぐ",
      "Rebaseのコンフリクト処理：各commitが個別にコンフリクトする可能性がある → <code>解決 → git add → git rebase --continue</code>、コンフリクトが多すぎる場合は<code>git rebase --abort</code>で中止",
      "チームで戦略を統一すべき：PRの説明文 / CONTRIBUTING.mdにmergeとrebaseのどちらを使うか明記する"
    ],
    "lv": 2
  },
  {
    "id": "gs13",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你需要安全地修改已 push 到远端的 commit message",
    "q_ja": "シナリオ：リモートにpush済みのコミットメッセージを安全に修正する必要がある",
    "bullets": [
      "<pre><span class=\"cm\"># 方案A：修改最后一个 commit（个人分支）</span>\ngit commit --amend -m <span class=\"str\">\"fix: correct message here\"</span>\ngit push --force-with-lease\n\n<span class=\"cm\"># 方案B：修改更早的 commit（interactive rebase）</span>\ngit rebase -i HEAD~5\n<span class=\"cm\"># 将目标 commit 的 \"pick\" 改为 \"reword\"</span>\n<span class=\"cm\"># 保存后 Git 打开编辑器让你修改 message</span>\ngit push --force-with-lease</pre>",
      "<span class=\"highlight\">核心风险</span>：改写已 push 的历史 = 所有基于旧 commit 的分支都会失效",
      "安全检查清单：①确认是自己的分支 ②确认没有其他人基于此分支工作 ③用 <code>--force-with-lease</code> 而非 <code>--force</code>",
      "如果是<span class=\"highlight\">共享分支（main/develop）</span>：不要改！错误的 message 比破坏团队历史好得多",
      "GitHub/GitLab 上已合并的 PR：commit message 无法修改，只能接受 — 所以 merge 前要仔细检查"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 方案A：修改最后一个 commit（个人分支）</span>\ngit commit --amend -m <span class=\"str\">\"fix: correct message here\"</span>\ngit push --force-with-lease\n\n<span class=\"cm\"># 方案B：修改更早的 commit（interactive rebase）</span>\ngit rebase -i HEAD~5\n<span class=\"cm\"># 将目标 commit 的 \"pick\" 改为 \"reword\"</span>\n<span class=\"cm\"># 保存后 Git 打开编辑器让你修改 message</span>\ngit push --force-with-lease</pre>",
      "<span class=\"highlight\">コアリスク</span>：push済みの履歴を書き換える = 旧commitに基づく全てのブランチが無効になる",
      "安全チェックリスト：①自分のブランチであることを確認 ②他の人がこのブランチに基づいて作業していないことを確認 ③<code>--force</code>ではなく<code>--force-with-lease</code>を使用",
      "<span class=\"highlight\">共有ブランチ（main/develop）</span>の場合：修正しないこと！間違ったメッセージの方がチーム履歴を壊すよりはるかにまし",
      "GitHub/GitLabで既にマージ済みのPR：コミットメッセージは修正できず、受け入れるしかない — だからマージ前に注意深く確認すること"
    ],
    "lv": 2
  },
  {
    "id": "gs14",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你只想从另一个分支合并某一个文件，而非整个分支",
    "q_ja": "シナリオ：別のブランチからブランチ全体ではなく、特定のファイルだけをマージしたい",
    "bullets": [
      "<pre><span class=\"cm\"># 方案A：checkout 指定文件（最常用）</span>\ngit checkout feature-branch -- path/to/file.py\n<span class=\"cm\"># 把 feature-branch 上的 file.py 复制到当前工作区和暂存区</span>\ngit commit -m <span class=\"str\">\"feat: bring file.py from feature-branch\"</span>\n\n<span class=\"cm\"># 方案B：用 restore（Git 2.23+ 推荐语法）</span>\ngit restore --source feature-branch -- path/to/file.py\ngit add path/to/file.py\ngit commit -m <span class=\"str\">\"feat: bring file.py from feature-branch\"</span>\n\n<span class=\"cm\"># 方案C：只取某个 commit 对该文件的改动</span>\ngit show abc1234:path/to/file.py &gt; path/to/file.py</pre>",
      "checkout/restore 方式是<span class=\"highlight\">整个文件覆盖</span>，不是合并差异 — 会丢弃当前分支对该文件的修改",
      "如果需要<span class=\"highlight\">合并差异而非覆盖</span>：<code>git diff feature-branch -- file.py | git apply</code>",
      "cherry-pick 只能按 commit 粒度操作，不能按文件 — 所以需要上述方法",
      "场景：feature 分支还没准备好合并，但其中某个配置文件 / 工具函数需要立即使用"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 方案A：checkout 指定文件（最常用）</span>\ngit checkout feature-branch -- path/to/file.py\n<span class=\"cm\"># 把 feature-branch 上的 file.py 复制到当前工作区和暂存区</span>\ngit commit -m <span class=\"str\">\"feat: bring file.py from feature-branch\"</span>\n\n<span class=\"cm\"># 方案B：用 restore（Git 2.23+ 推荐语法）</span>\ngit restore --source feature-branch -- path/to/file.py\ngit add path/to/file.py\ngit commit -m <span class=\"str\">\"feat: bring file.py from feature-branch\"</span>\n\n<span class=\"cm\"># 方案C：只取某个 commit 对该文件的改动</span>\ngit show abc1234:path/to/file.py &gt; path/to/file.py</pre>",
      "checkout/restore方式は<span class=\"highlight\">ファイル全体の上書き</span>であり、差分マージではない — 現在のブランチでの当該ファイルへの変更は失われる",
      "上書きではなく<span class=\"highlight\">差分をマージ</span>したい場合：<code>git diff feature-branch -- file.py | git apply</code>",
      "cherry-pickはcommit粒度でしか操作できず、ファイル単位には対応していない — だから上記の方法が必要",
      "シナリオ：featureブランチはまだマージ準備ができていないが、その中の設定ファイル/ユーティリティ関数を今すぐ使う必要がある"
    ],
    "lv": 2
  },
  {
    "id": "gs15",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：仓库里有大文件（模型权重/数据集），clone 越来越慢",
    "q_ja": "シナリオ：リポジトリに大きなファイル（モデル重み/データセット）があり、cloneがどんどん遅くなっている",
    "bullets": [
      "<pre><span class=\"cm\"># Git LFS（Large File Storage）— 标准解决方案</span>\ngit lfs install                          <span class=\"cm\"># 一次性安装</span>\ngit lfs track <span class=\"str\">\"*.pt\"</span> <span class=\"str\">\"*.bin\"</span> <span class=\"str\">\"*.onnx\"</span>  <span class=\"cm\"># 跟踪大文件类型</span>\ngit add .gitattributes                   <span class=\"cm\"># 必须提交此文件</span>\ngit add model.pt\ngit commit -m <span class=\"str\">\"feat: add model with LFS\"</span>\ngit push</pre>",
      "LFS 原理：Git 仓库只存<span class=\"highlight\">指针文件（~130 bytes）</span>，真正的大文件存在 LFS 服务器上，checkout 时按需下载",
      "<pre><span class=\"cm\"># 已有大文件的仓库迁移到 LFS</span>\ngit lfs migrate import --include=<span class=\"str\">\"*.pt,*.bin\"</span> --everything\ngit push --force --all  <span class=\"cm\"># 重写历史，需通知团队</span></pre>",
      "替代方案：<span class=\"highlight\">DVC</span>（Data Version Control）— 更适合 ML 项目，支持 S3/GCS 等远程存储，可版本化数据集和模型",
      "GitHub LFS 免费额度：1 GB 存储 + 1 GB/月带宽 — 超出需付费或自建 LFS 服务器",
      "最佳实践：.gitignore 排除超大文件 + LFS 管理中等大文件 + DVC/云存储管理数据集"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># Git LFS（Large File Storage）— 标准解决方案</span>\ngit lfs install                          <span class=\"cm\"># 一次性安装</span>\ngit lfs track <span class=\"str\">\"*.pt\"</span> <span class=\"str\">\"*.bin\"</span> <span class=\"str\">\"*.onnx\"</span>  <span class=\"cm\"># 跟踪大文件类型</span>\ngit add .gitattributes                   <span class=\"cm\"># 必须提交此文件</span>\ngit add model.pt\ngit commit -m <span class=\"str\">\"feat: add model with LFS\"</span>\ngit push</pre>",
      "LFSの原理：Gitリポジトリには<span class=\"highlight\">ポインタファイル（約130バイト）</span>のみを保存し、実際の大きなファイルはLFSサーバーに格納。checkout時にオンデマンドでダウンロード",
      "<pre><span class=\"cm\"># 已有大文件的仓库迁移到 LFS</span>\ngit lfs migrate import --include=<span class=\"str\">\"*.pt,*.bin\"</span> --everything\ngit push --force --all  <span class=\"cm\"># 重写历史，需通知团队</span></pre>",
      "代替案：<span class=\"highlight\">DVC</span>（Data Version Control）— MLプロジェクトにより適しており、S3/GCSなどのリモートストレージに対応、データセットとモデルのバージョン管理が可能",
      "GitHub LFSの無料枠：1GBストレージ + 月1GB帯域 — 超過分は有料またはLFSサーバーの自前構築が必要",
      "ベストプラクティス：.gitignoreで超大ファイルを除外 + LFSで中程度のファイルを管理 + DVC/クラウドストレージでデータセットを管理"
    ],
    "lv": 3
  },
  {
    "id": "gs16",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：CI/CD 流水线中 Git 操作的最佳实践",
    "q_ja": "シナリオ：CI/CDパイプラインにおけるGit操作のベストプラクティス",
    "bullets": [
      "<pre><span class=\"cm\"># CI 中常见的 Git 优化</span>\ngit clone --depth 1 &lt;repo&gt;         <span class=\"cm\"># Shallow clone（只取最新commit，快）</span>\ngit clone --filter=blob:none &lt;repo&gt; <span class=\"cm\"># Partial clone（按需下载blob）</span>\ngit fetch --tags                    <span class=\"cm\"># 拉取 tag 用于版本号</span></pre>",
      "<span class=\"highlight\">Tag 触发发布</span>：push v1.2.3 tag → CI 自动构建 → 推送 Docker Image / PyPI / npm",
      "PR 检查流程：push → CI 跑 lint + test → status check 通过 → 允许 merge",
      "<pre><span class=\"cm\"># GitHub Actions 示例片段</span>\non:\n  push:\n    tags: ['v*']       <span class=\"cm\"># tag push 触发发布</span>\n  pull_request:\n    branches: [main]   <span class=\"cm\"># PR 到 main 触发检查</span></pre>",
      "保护分支规则：main/develop 禁止直接 push，必须通过 PR + review + CI pass",
      "Git 在 CI 中的陷阱：<span class=\"highlight\">detached HEAD</span>（CI 默认 checkout 的是 commit 而非分支）— 需要时手动 <code>git checkout $BRANCH</code>"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># CI 中常见的 Git 优化</span>\ngit clone --depth 1 &lt;repo&gt;         <span class=\"cm\"># Shallow clone（只取最新commit，快）</span>\ngit clone --filter=blob:none &lt;repo&gt; <span class=\"cm\"># Partial clone（按需下载blob）</span>\ngit fetch --tags                    <span class=\"cm\"># 拉取 tag 用于版本号</span></pre>",
      "<span class=\"highlight\">Tagトリガーのリリース</span>：v1.2.3 tagをpush → CIが自動ビルド → Docker Image / PyPI / npmにプッシュ",
      "PRのチェックフロー：push → CIがlint + testを実行 → status checkパス → マージ許可",
      "<pre><span class=\"cm\"># GitHub Actions 示例片段</span>\non:\n  push:\n    tags: ['v*']       <span class=\"cm\"># tag push 触发发布</span>\n  pull_request:\n    branches: [main]   <span class=\"cm\"># PR 到 main 触发检查</span></pre>",
      "ブランチ保護ルール：main/developへの直接pushを禁止し、PR + レビュー + CI passを必須にする",
      "CIにおけるGitの落とし穴：<span class=\"highlight\">detached HEAD</span>（CIはデフォルトでブランチではなくcommitをcheckout）— 必要に応じて手動で<code>git checkout $BRANCH</code>"
    ],
    "lv": 3
  },
  {
    "id": "gs17",
    "cat": "Git场景题",
    "group": "工程",
    "q": "场景：你 fork 了开源项目，如何与上游仓库保持同步",
    "q_ja": "シナリオ：オープンソースプロジェクトをforkした後、上流リポジトリとどう同期を保つか",
    "bullets": [
      "<pre><span class=\"cm\"># 1. 添加上游仓库为 remote</span>\ngit remote add upstream https://github.com/original/repo.git\ngit remote -v  <span class=\"cm\"># 确认 origin(你的fork) + upstream(原仓库)</span>\n\n<span class=\"cm\"># 2. 同步上游更新到本地</span>\ngit fetch upstream\ngit switch main\ngit merge upstream/main\n<span class=\"cm\"># 或 rebase：git rebase upstream/main</span>\n\n<span class=\"cm\"># 3. 推送到你的 fork</span>\ngit push origin main</pre>",
      "Fork 工作流（开源标准）：fork → clone 自己的 fork → 创建 feature 分支 → 提交 PR 到上游",
      "保持同步的频率：<span class=\"highlight\">提交 PR 前务必同步</span>，否则可能冲突；日常建议每周同步一次",
      "<code>git fetch upstream</code> 只下载不合并，<code>git pull upstream main</code> = fetch + merge 一步到位",
      "GitHub 网页端也能同步：Fork 页面点 \"Sync fork\" 按钮（简单但不如命令行灵活）"
    ],
    "bullets_ja": [
      "<pre><span class=\"cm\"># 1. 添加上游仓库为 remote</span>\ngit remote add upstream https://github.com/original/repo.git\ngit remote -v  <span class=\"cm\"># 确认 origin(你的fork) + upstream(原仓库)</span>\n\n<span class=\"cm\"># 2. 同步上游更新到本地</span>\ngit fetch upstream\ngit switch main\ngit merge upstream/main\n<span class=\"cm\"># 或 rebase：git rebase upstream/main</span>\n\n<span class=\"cm\"># 3. 推送到你的 fork</span>\ngit push origin main</pre>",
      "Forkワークフロー（オープンソースの標準）：fork → 自分のforkをclone → featureブランチを作成 → 上流にPRを提出",
      "同期の頻度：<span class=\"highlight\">PR提出前には必ず同期すること</span>。さもないとコンフリクトの可能性がある。日常的には週1回の同期を推奨",
      "<code>git fetch upstream</code>はダウンロードのみでマージしない。<code>git pull upstream main</code> = fetch + mergeを一度に実行",
      "GitHubのWebインターフェースでも同期可能：Forkページで\"Sync fork\"ボタンをクリック（シンプルだがコマンドラインほど柔軟ではない）"
    ],
    "lv": 2
  },
  {
    "id": "ce01",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC1 两数之和 (Two Sum)",
    "q_ja": "LC1 Two Sum（二数の和）",
    "bullets": [
      "给定整数数组和目标值target，找出数组中和为target的<span class=\"highlight\">两个数的下标</span>",
      "示例：nums=[2,7,11,15], target=9 → 返回[0,1]（因为2+7=9）",
      "核心思路：用<span class=\"highlight\">哈希表</span>存储已遍历的值→下标映射，一次遍历中查找 target-num 是否已存在",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">twoSum</span>(nums, target):\n    seen = {}  <span class=\"cm\"># val -> index</span>\n    <span class=\"kw\">for</span> i, num <span class=\"kw\">in</span> enumerate(nums):\n        complement = target - num\n        <span class=\"kw\">if</span> complement <span class=\"kw\">in</span> seen:\n            <span class=\"kw\">return</span> [seen[complement], i]\n        seen[num] = i\n    <span class=\"kw\">return</span> []</pre>",
      "时间O(n)，空间O(n)。暴力解O(n²)会超时",
      "易错点：不能用同一个元素两次；返回的是下标不是值"
    ],
    "bullets_ja": [
      "整数配列とtarget値が与えられ、配列の中で和がtargetになる<span class=\"highlight\">2つの数のインデックス</span>を求める",
      "例：nums=[2,7,11,15], target=9 → [0,1]を返す（2+7=9のため）",
      "核心アイデア：<span class=\"highlight\">HashMap</span>に走査済みの値→インデックスを格納し、一回の走査でtarget-numが存在するか探索する",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">twoSum</span>(nums, target):\n    seen = {}  <span class=\"cm\"># val -> index</span>\n    <span class=\"kw\">for</span> i, num <span class=\"kw\">in</span> enumerate(nums):\n        complement = target - num\n        <span class=\"kw\">if</span> complement <span class=\"kw\">in</span> seen:\n            <span class=\"kw\">return</span> [seen[complement], i]\n        seen[num] = i\n    <span class=\"kw\">return</span> []</pre>",
      "時間O(n)、空間O(n)。全探索O(n²)はTLEになる",
      "注意点：同じ要素を2回使えない；返すのはインデックスであり値ではない"
    ],
    "lv": 1
  },
  {
    "id": "ce02",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC21 合并两个有序链表 (Merge Two Sorted Lists)",
    "q_ja": "LC21 Merge Two Sorted Lists（2つのソート済みリストの結合）",
    "bullets": [
      "将两个升序链表合并为一个新的<span class=\"highlight\">升序链表</span>并返回",
      "示例：l1=[1,2,4], l2=[1,3,4] → [1,1,2,3,4,4]",
      "核心思路：创建<span class=\"highlight\">dummy head</span>，逐个比较两个链表头节点，较小的接上去",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">mergeTwoLists</span>(l1, l2):\n    dummy = ListNode(0)\n    curr = dummy\n    <span class=\"kw\">while</span> l1 <span class=\"kw\">and</span> l2:\n        <span class=\"kw\">if</span> l1.val <= l2.val:\n            curr.next = l1\n            l1 = l1.next\n        <span class=\"kw\">else</span>:\n            curr.next = l2\n            l2 = l2.next\n        curr = curr.next\n    curr.next = l1 <span class=\"kw\">if</span> l1 <span class=\"kw\">else</span> l2  <span class=\"cm\"># 接上剩余部分</span>\n    <span class=\"kw\">return</span> dummy.next</pre>",
      "时间O(m+n)，空间O(1)。dummy head技巧避免处理头节点为空的边界",
      "变体：LC23 合并K个有序链表（用堆/分治）"
    ],
    "bullets_ja": [
      "2つの昇順リストを結合して新しい<span class=\"highlight\">昇順リスト</span>として返す",
      "例：l1=[1,2,4], l2=[1,3,4] → [1,1,2,3,4,4]",
      "核心アイデア：<span class=\"highlight\">dummy head</span>を作成し、2つのリストの先頭ノードを逐次比較して小さい方を繋げる",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">mergeTwoLists</span>(l1, l2):\n    dummy = ListNode(0)\n    curr = dummy\n    <span class=\"kw\">while</span> l1 <span class=\"kw\">and</span> l2:\n        <span class=\"kw\">if</span> l1.val <= l2.val:\n            curr.next = l1\n            l1 = l1.next\n        <span class=\"kw\">else</span>:\n            curr.next = l2\n            l2 = l2.next\n        curr = curr.next\n    curr.next = l1 <span class=\"kw\">if</span> l1 <span class=\"kw\">else</span> l2  <span class=\"cm\"># 残りを繋げる</span>\n    <span class=\"kw\">return</span> dummy.next</pre>",
      "時間O(m+n)、空間O(1)。dummy headにより先頭ノードがnullの境界処理を回避",
      "派生問題：LC23 K個のソート済みリストの結合（Heap/分割統治）"
    ],
    "lv": 1
  },
  {
    "id": "ce03",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC70 爬楼梯 (Climbing Stairs)",
    "q_ja": "LC70 Climbing Stairs（階段の登り方）",
    "bullets": [
      "每次爬 <span class=\"num\">1</span> 或 <span class=\"num\">2</span> 个台阶，问到第n阶有多少种不同方法",
      "示例：n=3 → 3种（1+1+1, 1+2, 2+1）",
      "核心思路：<span class=\"highlight\">动态规划</span>，状态转移 dp[i]=dp[i-1]+dp[i-2]，本质就是斐波那契数列",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">climbStairs</span>(n):\n    <span class=\"kw\">if</span> n <= 2:\n        <span class=\"kw\">return</span> n\n    a, b = 1, 2  <span class=\"cm\"># dp[1]=1, dp[2]=2</span>\n    <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(3, n + 1):\n        a, b = b, a + b\n    <span class=\"kw\">return</span> b</pre>",
      "时间O(n)，空间O(1)。滚动变量优化掉数组",
      "DP入门经典题，面试常用来考察DP思维。变体：每次可爬1~k步"
    ],
    "bullets_ja": [
      "毎回 <span class=\"num\">1</span> 段または <span class=\"num\">2</span> 段を登れる場合、第n段に到達する方法は何通りあるか",
      "例：n=3 → 3通り（1+1+1, 1+2, 2+1）",
      "核心アイデア：<span class=\"highlight\">動的計画法</span>、状態遷移 dp[i]=dp[i-1]+dp[i-2]、本質はフィボナッチ数列",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">climbStairs</span>(n):\n    <span class=\"kw\">if</span> n <= 2:\n        <span class=\"kw\">return</span> n\n    a, b = 1, 2  <span class=\"cm\"># dp[1]=1, dp[2]=2</span>\n    <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(3, n + 1):\n        a, b = b, a + b\n    <span class=\"kw\">return</span> b</pre>",
      "時間O(n)、空間O(1)。ローリング変数で配列を省略",
      "DP入門の定番問題。面接ではDP思考力を問う。派生：毎回1~k段登れる場合"
    ],
    "lv": 1
  },
  {
    "id": "ce04",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC121 买卖股票的最佳时机 (Best Time to Buy and Sell Stock)",
    "q_ja": "LC121 Best Time to Buy and Sell Stock（株の売買の最適タイミング）",
    "bullets": [
      "给定股价数组，只能买卖<span class=\"highlight\">一次</span>，求最大利润（不能先卖后买）",
      "示例：prices=[7,1,5,3,6,4] → 5（第2天买入价1，第5天卖出价6）",
      "核心思路：一次遍历，维护<span class=\"highlight\">历史最低价min_price</span>，每天计算当前价-最低价更新最大利润",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">maxProfit</span>(prices):\n    min_price = float(<span class=\"str\">'inf'</span>)\n    max_profit = 0\n    <span class=\"kw\">for</span> price <span class=\"kw\">in</span> prices:\n        min_price = min(min_price, price)\n        max_profit = max(max_profit, price - min_price)\n    <span class=\"kw\">return</span> max_profit</pre>",
      "时间O(n)，空间O(1)。贪心思想：在最低点买，在之后的最高点卖",
      "变体：LC122 可多次买卖；LC123 最多两次买卖（DP状态机）"
    ],
    "bullets_ja": [
      "株価配列が与えられ、<span class=\"highlight\">1回</span>だけ売買可能な場合の最大利益を求める（先に売ってから買うのは不可）",
      "例：prices=[7,1,5,3,6,4] → 5（2日目に価格1で買い、5日目に価格6で売却）",
      "核心アイデア：一回の走査で<span class=\"highlight\">過去の最安値min_price</span>を維持し、毎日「現在値-最安値」で最大利益を更新する",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">maxProfit</span>(prices):\n    min_price = float(<span class=\"str\">'inf'</span>)\n    max_profit = 0\n    <span class=\"kw\">for</span> price <span class=\"kw\">in</span> prices:\n        min_price = min(min_price, price)\n        max_profit = max(max_profit, price - min_price)\n    <span class=\"kw\">return</span> max_profit</pre>",
      "時間O(n)、空間O(1)。貪欲法の考え方：最安値で買い、その後の最高値で売る",
      "派生問題：LC122 複数回売買可能；LC123 最大2回売買（DP状態機械）"
    ],
    "lv": 1
  },
  {
    "id": "ce05",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC141 环形链表 (Linked List Cycle)",
    "q_ja": "LC141 Linked List Cycle（連結リストの環検出）",
    "bullets": [
      "判断链表中是否存在<span class=\"highlight\">环</span>",
      "示例：head=[3,2,0,-4], pos=1 → true（尾部连接到第2个节点）",
      "核心思路：<span class=\"highlight\">快慢指针</span>，快指针每次走2步，慢指针走1步，若有环必相遇",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">hasCycle</span>(head):\n    slow = fast = head\n    <span class=\"kw\">while</span> fast <span class=\"kw\">and</span> fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        <span class=\"kw\">if</span> slow == fast:\n            <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n    <span class=\"kw\">return</span> <span class=\"kw\">False</span></pre>",
      "时间O(n)，空间O(1)。用set存访问过的节点也行但空间O(n)",
      "变体：LC142 环形链表II — 找入环节点（相遇后再走一个指针从head出发，再次相遇点即入口）"
    ],
    "bullets_ja": [
      "連結リストに<span class=\"highlight\">環</span>が存在するか判定する",
      "例：head=[3,2,0,-4], pos=1 → true（末尾が2番目のノードに接続）",
      "核心アイデア：<span class=\"highlight\">高速・低速ポインタ</span>、高速ポインタは毎回2歩、低速ポインタは1歩進み、環があれば必ず合流する",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">hasCycle</span>(head):\n    slow = fast = head\n    <span class=\"kw\">while</span> fast <span class=\"kw\">and</span> fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        <span class=\"kw\">if</span> slow == fast:\n            <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n    <span class=\"kw\">return</span> <span class=\"kw\">False</span></pre>",
      "時間O(n)、空間O(1)。setで訪問済みノードを記録する方法もあるが空間O(n)",
      "派生問題：LC142 Linked List Cycle II — 環の入口を探す（合流後headからもう1つポインタを出発させ、再合流点が入口）"
    ],
    "lv": 1
  },
  {
    "id": "ce06",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC206 反转链表 (Reverse Linked List)",
    "q_ja": "LC206 Reverse Linked List（連結リストの反転）",
    "bullets": [
      "将单链表<span class=\"highlight\">就地反转</span>并返回新的头节点",
      "示例：[1,2,3,4,5] → [5,4,3,2,1]",
      "核心思路：<span class=\"highlight\">三指针迭代</span>——prev、curr、nxt，每次把curr.next指向prev，三个指针同步前移",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">reverseList</span>(head):\n    prev = <span class=\"kw\">None</span>\n    curr = head\n    <span class=\"kw\">while</span> curr:\n        nxt = curr.next   <span class=\"cm\"># 先保存下一个</span>\n        curr.next = prev  <span class=\"cm\"># 反转指针</span>\n        prev = curr       <span class=\"cm\"># prev前移</span>\n        curr = nxt        <span class=\"cm\"># curr前移</span>\n    <span class=\"kw\">return</span> prev</pre>",
      "时间O(n)，空间O(1)。递归写法也行但空间O(n)",
      "面试最高频链表题之一。变体：LC92 反转部分链表、LC25 K个一组反转"
    ],
    "bullets_ja": [
      "単方向リストを<span class=\"highlight\">その場で反転</span>し、新しい先頭ノードを返す",
      "例：[1,2,3,4,5] → [5,4,3,2,1]",
      "核心アイデア：<span class=\"highlight\">3ポインタの反復</span>——prev、curr、nxt、毎回curr.nextをprevに向け、3つのポインタを同時に前進させる",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">reverseList</span>(head):\n    prev = <span class=\"kw\">None</span>\n    curr = head\n    <span class=\"kw\">while</span> curr:\n        nxt = curr.next   <span class=\"cm\"># 次を保存</span>\n        curr.next = prev  <span class=\"cm\"># ポインタを反転</span>\n        prev = curr       <span class=\"cm\"># prevを前進</span>\n        curr = nxt        <span class=\"cm\"># currを前進</span>\n    <span class=\"kw\">return</span> prev</pre>",
      "時間O(n)、空間O(1)。再帰でも書けるが空間O(n)",
      "面接で最頻出のリスト問題の一つ。派生：LC92 部分反転、LC25 K個ごとの反転"
    ],
    "lv": 1
  },
  {
    "id": "ce07",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC226 翻转二叉树 (Invert Binary Tree)",
    "q_ja": "LC226 Invert Binary Tree（二分木の反転）",
    "bullets": [
      "将二叉树的每个节点的左右子树<span class=\"highlight\">交换</span>（镜像翻转）",
      "示例：[4,2,7,1,3,6,9] → [4,7,2,9,6,3,1]",
      "核心思路：<span class=\"highlight\">递归</span>——先翻转左右子树，再交换左右子节点",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">invertTree</span>(root):\n    <span class=\"kw\">if not</span> root:\n        <span class=\"kw\">return</span> <span class=\"kw\">None</span>\n    root.left, root.right = invertTree(root.right), invertTree(root.left)\n    <span class=\"kw\">return</span> root</pre>",
      "时间O(n)，空间O(h)，h为树高。最简洁的递归三行代码",
      "也可用BFS/DFS迭代实现。面试经典题，Homebrew作者因此题被Google拒"
    ],
    "bullets_ja": [
      "二分木の各ノードの左右部分木を<span class=\"highlight\">交換</span>する（鏡像反転）",
      "例：[4,2,7,1,3,6,9] → [4,7,2,9,6,3,1]",
      "核心アイデア：<span class=\"highlight\">再帰</span>——まず左右部分木を反転し、次に左右の子ノードを交換する",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">invertTree</span>(root):\n    <span class=\"kw\">if not</span> root:\n        <span class=\"kw\">return</span> <span class=\"kw\">None</span>\n    root.left, root.right = invertTree(root.right), invertTree(root.left)\n    <span class=\"kw\">return</span> root</pre>",
      "時間O(n)、空間O(h)、hは木の高さ。最も簡潔な再帰3行コード",
      "BFS/DFSの反復でも実装可能。面接の定番問題、Homebrewの作者がこの問題でGoogleに落とされた逸話あり"
    ],
    "lv": 1
  },
  {
    "id": "ce08",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC543 二叉树的直径 (Diameter of Binary Tree)",
    "q_ja": "LC543 Diameter of Binary Tree（二分木の直径）",
    "bullets": [
      "求二叉树中任意两节点之间的<span class=\"highlight\">最长路径长度</span>（边数），路径不一定经过根",
      "示例：[1,2,3,4,5] → 3（路径为4→2→1→3或5→2→1→3）",
      "核心思路：<span class=\"highlight\">DFS后序遍历</span>，每个节点处 直径=左深度+右深度，用全局变量记录最大值",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">diameterOfBinaryTree</span>(root):\n    ans = 0\n    <span class=\"kw\">def</span> <span class=\"fn\">depth</span>(node):\n        <span class=\"kw\">nonlocal</span> ans\n        <span class=\"kw\">if not</span> node:\n            <span class=\"kw\">return</span> 0\n        L = depth(node.left)\n        R = depth(node.right)\n        ans = max(ans, L + R)  <span class=\"cm\"># 更新直径</span>\n        <span class=\"kw\">return</span> max(L, R) + 1     <span class=\"cm\"># 返回深度</span>\n    depth(root)\n    <span class=\"kw\">return</span> ans</pre>",
      "时间O(n)，空间O(h)。关键区分：函数返回的是<span class=\"highlight\">深度</span>，但更新的是<span class=\"highlight\">直径</span>",
      "易错点：直径是边数不是节点数；最长路径不一定过根节点"
    ],
    "bullets_ja": [
      "二分木の任意の2ノード間の<span class=\"highlight\">最長パスの長さ</span>（辺の数）を求める。パスは根を通るとは限らない",
      "例：[1,2,3,4,5] → 3（パスは4→2→1→3 または 5→2→1→3）",
      "核心アイデア：<span class=\"highlight\">DFS後順走査</span>、各ノードで 直径=左の深さ+右の深さ とし、グローバル変数で最大値を記録",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">diameterOfBinaryTree</span>(root):\n    ans = 0\n    <span class=\"kw\">def</span> <span class=\"fn\">depth</span>(node):\n        <span class=\"kw\">nonlocal</span> ans\n        <span class=\"kw\">if not</span> node:\n            <span class=\"kw\">return</span> 0\n        L = depth(node.left)\n        R = depth(node.right)\n        ans = max(ans, L + R)  <span class=\"cm\"># 直径を更新</span>\n        <span class=\"kw\">return</span> max(L, R) + 1     <span class=\"cm\"># 深さを返す</span>\n    depth(root)\n    <span class=\"kw\">return</span> ans</pre>",
      "時間O(n)、空間O(h)。重要な区別：関数が返すのは<span class=\"highlight\">深さ</span>、更新するのは<span class=\"highlight\">直径</span>",
      "注意点：直径は辺の数でありノード数ではない；最長パスは必ずしも根を通らない"
    ],
    "lv": 1
  },
  {
    "id": "ce09",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC20 有效的括号 (Valid Parentheses) — 栈",
    "q_ja": "LC20 Valid Parentheses（有効な括弧）— Stack",
    "bullets": [
      "判断只含 <span class=\"str\">'()[]{}'</span> 的字符串中括号是否<span class=\"highlight\">有效匹配</span>",
      "示例：s=\"({[]})\" → true；s=\"([)]\" → false",
      "核心思路：用<span class=\"highlight\">栈</span>，遇到左括号入栈，遇到右括号弹栈检查是否匹配",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">isValid</span>(s):\n    stack = []\n    mapping = {<span class=\"str\">')'</span>: <span class=\"str\">'('</span>, <span class=\"str\">'}'</span>: <span class=\"str\">'{'</span>, <span class=\"str\">']'</span>: <span class=\"str\">'['</span>}\n    <span class=\"kw\">for</span> ch <span class=\"kw\">in</span> s:\n        <span class=\"kw\">if</span> ch <span class=\"kw\">in</span> mapping:\n            top = stack.pop() <span class=\"kw\">if</span> stack <span class=\"kw\">else</span> <span class=\"str\">'#'</span>\n            <span class=\"kw\">if</span> mapping[ch] != top:\n                <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        <span class=\"kw\">else</span>:\n            stack.append(ch)\n    <span class=\"kw\">return</span> <span class=\"kw\">not</span> stack</pre>",
      "时间O(n)，空间O(n)。栈的经典应用题",
      "易错点：最后要检查栈是否为空（如 s=\"(\" 只有左括号）；空字符串返回true"
    ],
    "bullets_ja": [
      "<span class=\"str\">'()[]{}'</span> のみで構成される文字列で括弧が<span class=\"highlight\">正しく対応しているか</span>を判定する",
      "例：s=\"({[]})\" → true；s=\"([)]\" → false",
      "核心アイデア：<span class=\"highlight\">Stack</span>を使い、開き括弧はpush、閉じ括弧はpopして対応を確認",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">isValid</span>(s):\n    stack = []\n    mapping = {<span class=\"str\">')'</span>: <span class=\"str\">'('</span>, <span class=\"str\">'}'</span>: <span class=\"str\">'{'</span>, <span class=\"str\">']'</span>: <span class=\"str\">'['</span>}\n    <span class=\"kw\">for</span> ch <span class=\"kw\">in</span> s:\n        <span class=\"kw\">if</span> ch <span class=\"kw\">in</span> mapping:\n            top = stack.pop() <span class=\"kw\">if</span> stack <span class=\"kw\">else</span> <span class=\"str\">'#'</span>\n            <span class=\"kw\">if</span> mapping[ch] != top:\n                <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        <span class=\"kw\">else</span>:\n            stack.append(ch)\n    <span class=\"kw\">return</span> <span class=\"kw\">not</span> stack</pre>",
      "時間O(n)、空間O(n)。Stackの典型的な応用問題",
      "注意点：最後にStackが空であることを確認する必要がある（例：s=\"(\" のように開き括弧だけの場合）；空文字列はtrueを返す"
    ],
    "lv": 1
  },
  {
    "id": "ce10",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC101 对称二叉树 (Symmetric Tree) — 递归",
    "q_ja": "LC101 Symmetric Tree（対称二分木）— 再帰",
    "bullets": [
      "判断一棵二叉树是否是<span class=\"highlight\">镜像对称</span>的",
      "示例：[1,2,2,3,4,4,3] → true；[1,2,2,null,3,null,3] → false",
      "核心思路：<span class=\"highlight\">递归比较</span>左子树和右子树，left.left与right.right对比，left.right与right.left对比",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">isSymmetric</span>(root):\n    <span class=\"kw\">def</span> <span class=\"fn\">check</span>(left, right):\n        <span class=\"kw\">if not</span> left <span class=\"kw\">and not</span> right:\n            <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n        <span class=\"kw\">if not</span> left <span class=\"kw\">or not</span> right:\n            <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        <span class=\"kw\">return</span> (left.val == right.val\n                <span class=\"kw\">and</span> check(left.left, right.right)\n                <span class=\"kw\">and</span> check(left.right, right.left))\n    <span class=\"kw\">return</span> check(root.left, root.right) <span class=\"kw\">if</span> root <span class=\"kw\">else</span> <span class=\"kw\">True</span></pre>",
      "时间O(n)，空间O(h)。也可用BFS迭代：队列每次取两个节点比较",
      "与LC226翻转二叉树对比：翻转是操作，对称是判断，但递归结构类似"
    ],
    "bullets_ja": [
      "二分木が<span class=\"highlight\">鏡像対称</span>であるか判定する",
      "例：[1,2,2,3,4,4,3] → true；[1,2,2,null,3,null,3] → false",
      "核心アイデア：<span class=\"highlight\">再帰的に比較</span>——左部分木と右部分木を比べ、left.leftとright.right、left.rightとright.leftを対比する",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">isSymmetric</span>(root):\n    <span class=\"kw\">def</span> <span class=\"fn\">check</span>(left, right):\n        <span class=\"kw\">if not</span> left <span class=\"kw\">and not</span> right:\n            <span class=\"kw\">return</span> <span class=\"kw\">True</span>\n        <span class=\"kw\">if not</span> left <span class=\"kw\">or not</span> right:\n            <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        <span class=\"kw\">return</span> (left.val == right.val\n                <span class=\"kw\">and</span> check(left.left, right.right)\n                <span class=\"kw\">and</span> check(left.right, right.left))\n    <span class=\"kw\">return</span> check(root.left, root.right) <span class=\"kw\">if</span> root <span class=\"kw\">else</span> <span class=\"kw\">True</span></pre>",
      "時間O(n)、空間O(h)。BFSの反復でも可：Queueから毎回2ノードを取り出して比較",
      "LC226 Invert Binary Treeとの比較：反転は操作、対称は判定だが、再帰構造は類似"
    ],
    "lv": 1
  },
  {
    "id": "ce11",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC160 相交链表 (Intersection of Two Linked Lists) — 双指针",
    "q_ja": "LC160 Intersection of Two Linked Lists（2つのリストの交差点）— Two Pointers",
    "bullets": [
      "找到两个单链表<span class=\"highlight\">相交的起始节点</span>，不相交则返回null",
      "示例：listA=[4,1,8,4,5], listB=[5,6,1,8,4,5]，交点为节点8",
      "核心思路：<span class=\"highlight\">双指针消除长度差</span>——pA走完A走B，pB走完B走A，两者走过的总长度相同，必在交点相遇",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">getIntersectionNode</span>(headA, headB):\n    pA, pB = headA, headB\n    <span class=\"kw\">while</span> pA != pB:\n        pA = pA.next <span class=\"kw\">if</span> pA <span class=\"kw\">else</span> headB\n        pB = pB.next <span class=\"kw\">if</span> pB <span class=\"kw\">else</span> headA\n    <span class=\"kw\">return</span> pA  <span class=\"cm\"># 相交返回交点，不相交两者同时为None</span></pre>",
      "时间O(m+n)，空间O(1)。数学证明：a+c+b = b+c+a（c为公共部分长度）",
      "易错点：比较的是节点引用相等（同一个节点），不是值相等"
    ],
    "bullets_ja": [
      "2つの単方向リストの<span class=\"highlight\">交差の開始ノード</span>を見つける。交差しなければnullを返す",
      "例：listA=[4,1,8,4,5], listB=[5,6,1,8,4,5]、交差点はノード8",
      "核心アイデア：<span class=\"highlight\">Two Pointersで長さの差を解消</span>——pAはAを走り終えたらBへ、pBはBを走り終えたらAへ。合計歩数が同じになるため、必ず交差点で合流する",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">getIntersectionNode</span>(headA, headB):\n    pA, pB = headA, headB\n    <span class=\"kw\">while</span> pA != pB:\n        pA = pA.next <span class=\"kw\">if</span> pA <span class=\"kw\">else</span> headB\n        pB = pB.next <span class=\"kw\">if</span> pB <span class=\"kw\">else</span> headA\n    <span class=\"kw\">return</span> pA  <span class=\"cm\"># 交差していれば交差点、していなければ両方None</span></pre>",
      "時間O(m+n)、空間O(1)。数学的証明：a+c+b = b+c+a（cは共通部分の長さ）",
      "注意点：比較するのはノードの参照（同一ノード）であり、値の等価性ではない"
    ],
    "lv": 1
  },
  {
    "id": "ce12",
    "cat": "编程题-Easy",
    "group": "编程题",
    "q": "LC234 回文链表 (Palindrome Linked List) — 快慢指针+反转",
    "q_ja": "LC234 Palindrome Linked List（回文リスト）— 高速・低速ポインタ+反転",
    "bullets": [
      "判断单链表是否为<span class=\"highlight\">回文</span>（正读反读相同），要求O(1)空间",
      "示例：[1,2,2,1] → true；[1,2] → false",
      "核心思路：①<span class=\"highlight\">快慢指针</span>找中点 ②<span class=\"highlight\">反转后半段</span> ③逐一比较前后两半",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">isPalindrome</span>(head):\n    <span class=\"cm\"># 1. 快慢指针找中点</span>\n    slow = fast = head\n    <span class=\"kw\">while</span> fast <span class=\"kw\">and</span> fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    <span class=\"cm\"># 2. 反转后半段</span>\n    prev = <span class=\"kw\">None</span>\n    <span class=\"kw\">while</span> slow:\n        nxt = slow.next\n        slow.next = prev\n        prev = slow\n        slow = nxt\n    <span class=\"cm\"># 3. 比较前后两半</span>\n    left, right = head, prev\n    <span class=\"kw\">while</span> right:\n        <span class=\"kw\">if</span> left.val != right.val:\n            <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        left = left.next\n        right = right.next\n    <span class=\"kw\">return</span> <span class=\"kw\">True</span></pre>",
      "时间O(n)，空间O(1)。综合了快慢指针+链表反转两个核心技巧",
      "注意：此方法会修改原链表。面试中可追问如何恢复原链表（再反转回来）"
    ],
    "bullets_ja": [
      "単方向リストが<span class=\"highlight\">回文</span>（前から読んでも後ろから読んでも同じ）であるか判定する。O(1)空間が要件",
      "例：[1,2,2,1] → true；[1,2] → false",
      "核心アイデア：①<span class=\"highlight\">高速・低速ポインタ</span>で中間点を見つける ②<span class=\"highlight\">後半を反転</span> ③前半と後半を逐一比較する",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">isPalindrome</span>(head):\n    <span class=\"cm\"># 1. 高速・低速ポインタで中間点を探す</span>\n    slow = fast = head\n    <span class=\"kw\">while</span> fast <span class=\"kw\">and</span> fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    <span class=\"cm\"># 2. 後半を反転</span>\n    prev = <span class=\"kw\">None</span>\n    <span class=\"kw\">while</span> slow:\n        nxt = slow.next\n        slow.next = prev\n        prev = slow\n        slow = nxt\n    <span class=\"cm\"># 3. 前半と後半を比較</span>\n    left, right = head, prev\n    <span class=\"kw\">while</span> right:\n        <span class=\"kw\">if</span> left.val != right.val:\n            <span class=\"kw\">return</span> <span class=\"kw\">False</span>\n        left = left.next\n        right = right.next\n    <span class=\"kw\">return</span> <span class=\"kw\">True</span></pre>",
      "時間O(n)、空間O(1)。高速・低速ポインタとリスト反転の2つの核心テクニックを組み合わせる",
      "注意：この方法は元のリストを変更する。面接では元のリストの復元方法を追問される可能性がある（再度反転して戻す）"
    ],
    "lv": 1
  },
  {
    "id": "cm01",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC3 无重复字符的最长子串 (Longest Substring Without Repeating Characters)",
    "q_ja": "LC3 Longest Substring Without Repeating Characters（重複のない最長部分文字列）",
    "bullets": [
      "给定字符串，找出不含重复字符的<span class=\"highlight\">最长子串</span>的长度",
      "示例：s=\"abcabcbb\" → 3（子串\"abc\"）",
      "核心思路：<span class=\"highlight\">滑动窗口</span>+哈希集合。右指针扩展窗口，遇到重复字符时左指针收缩直到无重复",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">lengthOfLongestSubstring</span>(s):\n    char_set = set()\n    left = ans = 0\n    <span class=\"kw\">for</span> right <span class=\"kw\">in</span> range(len(s)):\n        <span class=\"kw\">while</span> s[right] <span class=\"kw\">in</span> char_set:\n            char_set.remove(s[left])\n            left += 1\n        char_set.add(s[right])\n        ans = max(ans, right - left + 1)\n    <span class=\"kw\">return</span> ans</pre>",
      "时间O(n)，空间O(min(n,m))，m为字符集大小",
      "优化：用dict记录字符最后出现的位置，left可直接跳转而非逐个移动"
    ],
    "bullets_ja": [
      "与えられた文字列から重複文字を含まない<span class=\"highlight\">最長部分文字列</span>の長さを求める",
      "例：s=\"abcabcbb\" → 3（部分文字列\"abc\"）",
      "核心アイデア：<span class=\"highlight\">Sliding Window</span>+ハッシュ集合。右ポインタでウィンドウを拡張し、重複文字に遭遇したら左ポインタを収縮させて重複を解消",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">lengthOfLongestSubstring</span>(s):\n    char_set = set()\n    left = ans = 0\n    <span class=\"kw\">for</span> right <span class=\"kw\">in</span> range(len(s)):\n        <span class=\"kw\">while</span> s[right] <span class=\"kw\">in</span> char_set:\n            char_set.remove(s[left])\n            left += 1\n        char_set.add(s[right])\n        ans = max(ans, right - left + 1)\n    <span class=\"kw\">return</span> ans</pre>",
      "時間O(n)、空間O(min(n,m))、mは文字集合のサイズ",
      "最適化：dictで各文字の最後の出現位置を記録し、leftを直接ジャンプさせることで逐次移動を省略"
    ],
    "lv": 2
  },
  {
    "id": "cm02",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC15 三数之和 (3Sum)",
    "q_ja": "LC15 3Sum（三数の和）",
    "bullets": [
      "从数组中找出所有和为 <span class=\"num\">0</span> 的<span class=\"highlight\">不重复三元组</span>",
      "示例：nums=[-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]",
      "核心思路：先<span class=\"highlight\">排序</span>，固定一个数，对剩余部分用<span class=\"highlight\">双指针</span>找两数之和。跳过重复值去重",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">threeSum</span>(nums):\n    nums.sort()\n    res = []\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums) - 2):\n        <span class=\"kw\">if</span> i > 0 <span class=\"kw\">and</span> nums[i] == nums[i-1]:  <span class=\"cm\"># 跳过重复</span>\n            <span class=\"kw\">continue</span>\n        l, r = i + 1, len(nums) - 1\n        <span class=\"kw\">while</span> l < r:\n            s = nums[i] + nums[l] + nums[r]\n            <span class=\"kw\">if</span> s < 0:\n                l += 1\n            <span class=\"kw\">elif</span> s > 0:\n                r -= 1\n            <span class=\"kw\">else</span>:\n                res.append([nums[i], nums[l], nums[r]])\n                <span class=\"kw\">while</span> l < r <span class=\"kw\">and</span> nums[l] == nums[l+1]: l += 1\n                <span class=\"kw\">while</span> l < r <span class=\"kw\">and</span> nums[r] == nums[r-1]: r -= 1\n                l += 1; r -= 1\n    <span class=\"kw\">return</span> res</pre>",
      "时间O(n²)，空间O(1)（不计输出）。排序O(n log n)被O(n²)覆盖",
      "易错点：去重逻辑必须在找到解之后和外层循环开头两处都做"
    ],
    "bullets_ja": [
      "配列から和が <span class=\"num\">0</span> になる<span class=\"highlight\">重複しない三つ組</span>をすべて見つける",
      "例：nums=[-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]",
      "核心アイデア：まず<span class=\"highlight\">ソート</span>し、1つの数を固定して残りに対し<span class=\"highlight\">Two Pointers</span>で二数の和を探す。重複値はスキップして重複除去",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">threeSum</span>(nums):\n    nums.sort()\n    res = []\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums) - 2):\n        <span class=\"kw\">if</span> i > 0 <span class=\"kw\">and</span> nums[i] == nums[i-1]:  <span class=\"cm\"># 重複をスキップ</span>\n            <span class=\"kw\">continue</span>\n        l, r = i + 1, len(nums) - 1\n        <span class=\"kw\">while</span> l < r:\n            s = nums[i] + nums[l] + nums[r]\n            <span class=\"kw\">if</span> s < 0:\n                l += 1\n            <span class=\"kw\">elif</span> s > 0:\n                r -= 1\n            <span class=\"kw\">else</span>:\n                res.append([nums[i], nums[l], nums[r]])\n                <span class=\"kw\">while</span> l < r <span class=\"kw\">and</span> nums[l] == nums[l+1]: l += 1\n                <span class=\"kw\">while</span> l < r <span class=\"kw\">and</span> nums[r] == nums[r-1]: r -= 1\n                l += 1; r -= 1\n    <span class=\"kw\">return</span> res</pre>",
      "時間O(n²)、空間O(1)（出力を除く）。ソートO(n log n)はO(n²)に吸収される",
      "注意点：重複除去は解を見つけた直後と外側ループの先頭の2箇所で行う必要がある"
    ],
    "lv": 2
  },
  {
    "id": "cm03",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC46 全排列 (Permutations)",
    "q_ja": "LC46 Permutations（全順列）",
    "bullets": [
      "给定不重复整数数组，返回所有可能的<span class=\"highlight\">全排列</span>",
      "示例：nums=[1,2,3] → [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
      "核心思路：<span class=\"highlight\">回溯法</span>。每次从剩余元素中选一个加入路径，递归到底则收集结果",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">permute</span>(nums):\n    res = []\n    <span class=\"kw\">def</span> <span class=\"fn\">backtrack</span>(path, used):\n        <span class=\"kw\">if</span> len(path) == len(nums):\n            res.append(path[:])\n            <span class=\"kw\">return</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n            <span class=\"kw\">if</span> used[i]:\n                <span class=\"kw\">continue</span>\n            used[i] = <span class=\"kw\">True</span>\n            path.append(nums[i])\n            backtrack(path, used)\n            path.pop()       <span class=\"cm\"># 撤销选择</span>\n            used[i] = <span class=\"kw\">False</span>  <span class=\"cm\"># 恢复状态</span>\n    backtrack([], [<span class=\"kw\">False</span>] * len(nums))\n    <span class=\"kw\">return</span> res</pre>",
      "时间O(n·n!)，空间O(n)。回溯三要素：选择列表、路径、结束条件",
      "变体：LC47 有重复数字的全排列（排序+剪枝）"
    ],
    "bullets_ja": [
      "重複のない整数配列が与えられ、すべての<span class=\"highlight\">順列</span>を返す",
      "例：nums=[1,2,3] → [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
      "核心アイデア：<span class=\"highlight\">バックトラッキング</span>。毎回残りの要素から1つ選んでパスに追加し、末端まで再帰したら結果を収集",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">permute</span>(nums):\n    res = []\n    <span class=\"kw\">def</span> <span class=\"fn\">backtrack</span>(path, used):\n        <span class=\"kw\">if</span> len(path) == len(nums):\n            res.append(path[:])\n            <span class=\"kw\">return</span>\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(nums)):\n            <span class=\"kw\">if</span> used[i]:\n                <span class=\"kw\">continue</span>\n            used[i] = <span class=\"kw\">True</span>\n            path.append(nums[i])\n            backtrack(path, used)\n            path.pop()       <span class=\"cm\"># 選択を取り消す</span>\n            used[i] = <span class=\"kw\">False</span>  <span class=\"cm\"># 状態を復元</span>\n    backtrack([], [<span class=\"kw\">False</span>] * len(nums))\n    <span class=\"kw\">return</span> res</pre>",
      "時間O(n・n!)、空間O(n)。バックトラッキングの三要素：選択リスト、パス、終了条件",
      "派生問題：LC47 重複ありの全順列（ソート+枝刈り）"
    ],
    "lv": 2
  },
  {
    "id": "cm04",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC49 字母异位词分组 (Group Anagrams)",
    "q_ja": "LC49 Group Anagrams（アナグラムのグループ化）",
    "bullets": [
      "将字母异位词（字母相同但顺序不同）<span class=\"highlight\">分组</span>",
      "示例：[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"] → [[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]",
      "核心思路：异位词排序后相同，用<span class=\"highlight\">排序后的字符串做key</span>，哈希表归类",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\n\n<span class=\"kw\">def</span> <span class=\"fn\">groupAnagrams</span>(strs):\n    groups = defaultdict(list)\n    <span class=\"kw\">for</span> s <span class=\"kw\">in</span> strs:\n        key = tuple(sorted(s))  <span class=\"cm\"># 排序作为key</span>\n        groups[key].append(s)\n    <span class=\"kw\">return</span> list(groups.values())</pre>",
      "时间O(n·k·log k)，n为字符串数，k为最长字符串长度。空间O(nk)",
      "优化：用26位字母计数元组做key可降到O(nk)，但实测排序法更快（k通常很小）"
    ],
    "bullets_ja": [
      "アナグラム（同じ文字で構成されるが順番が異なる単語）を<span class=\"highlight\">グループ化</span>する",
      "例：[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"] → [[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]",
      "核心アイデア：アナグラムはソート後に同一文字列になるので、<span class=\"highlight\">ソート済み文字列をkey</span>にHashMapで分類",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\n\n<span class=\"kw\">def</span> <span class=\"fn\">groupAnagrams</span>(strs):\n    groups = defaultdict(list)\n    <span class=\"kw\">for</span> s <span class=\"kw\">in</span> strs:\n        key = tuple(sorted(s))  <span class=\"cm\"># ソートしてkeyにする</span>\n        groups[key].append(s)\n    <span class=\"kw\">return</span> list(groups.values())</pre>",
      "時間O(n・k・log k)、nは文字列数、kは最長文字列の長さ。空間O(nk)",
      "最適化：26文字のカウントタプルをkeyにすればO(nk)に下がるが、実測ではソート法の方が速い（kは通常小さい）"
    ],
    "lv": 2
  },
  {
    "id": "cm05",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC53 最大子数组和 (Maximum Subarray)",
    "q_ja": "LC53 Maximum Subarray（最大部分配列和）",
    "bullets": [
      "找出整数数组中和最大的<span class=\"highlight\">连续子数组</span>并返回其和",
      "示例：nums=[-2,1,-3,4,-1,2,1,-5,4] → 6（子数组[4,-1,2,1]）",
      "核心思路：<span class=\"highlight\">Kadane算法</span>——维护以当前元素结尾的最大子数组和，若前面的和为负则丢弃",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">maxSubArray</span>(nums):\n    curr_sum = max_sum = nums[0]\n    <span class=\"kw\">for</span> num <span class=\"kw\">in</span> nums[1:]:\n        curr_sum = max(num, curr_sum + num)  <span class=\"cm\"># 要么接上，要么重新开始</span>\n        max_sum = max(max_sum, curr_sum)\n    <span class=\"kw\">return</span> max_sum</pre>",
      "时间O(n)，空间O(1)。DP视角：dp[i]=max(nums[i], dp[i-1]+nums[i])",
      "变体：要求返回子数组本身（记录start/end索引）；分治法O(n log n)"
    ],
    "bullets_ja": [
      "整数配列の中で和が最大となる<span class=\"highlight\">連続部分配列</span>を見つけ、その和を返す",
      "例：nums=[-2,1,-3,4,-1,2,1,-5,4] → 6（部分配列[4,-1,2,1]）",
      "核心アイデア：<span class=\"highlight\">Kadaneアルゴリズム</span>——現在の要素で終わる最大部分配列和を維持し、前の和が負なら捨てる",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">maxSubArray</span>(nums):\n    curr_sum = max_sum = nums[0]\n    <span class=\"kw\">for</span> num <span class=\"kw\">in</span> nums[1:]:\n        curr_sum = max(num, curr_sum + num)  <span class=\"cm\"># 繋げるか、新たに始めるか</span>\n        max_sum = max(max_sum, curr_sum)\n    <span class=\"kw\">return</span> max_sum</pre>",
      "時間O(n)、空間O(1)。DPの観点：dp[i]=max(nums[i], dp[i-1]+nums[i])",
      "派生：部分配列自体を返す場合（start/endインデックスを記録）；分割統治法O(n log n)"
    ],
    "lv": 2
  },
  {
    "id": "cm06",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC56 合并区间 (Merge Intervals)",
    "q_ja": "LC56 Merge Intervals（区間の結合）",
    "bullets": [
      "给定若干区间集合，合并所有<span class=\"highlight\">重叠的区间</span>",
      "示例：intervals=[[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]",
      "核心思路：按<span class=\"highlight\">起点排序</span>，遍历时比较当前区间起点与上一个区间终点，重叠则合并（取更大的终点）",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">merge</span>(intervals):\n    intervals.sort(key=<span class=\"kw\">lambda</span> x: x[0])\n    merged = [intervals[0]]\n    <span class=\"kw\">for</span> start, end <span class=\"kw\">in</span> intervals[1:]:\n        <span class=\"kw\">if</span> start <= merged[-1][1]:  <span class=\"cm\"># 有重叠</span>\n            merged[-1][1] = max(merged[-1][1], end)\n        <span class=\"kw\">else</span>:\n            merged.append([start, end])\n    <span class=\"kw\">return</span> merged</pre>",
      "时间O(n log n)排序主导，空间O(n)。注意边界：start <= end（等号意味着相邻也合并）",
      "变体：LC57 插入区间、LC986 区间列表交集"
    ],
    "bullets_ja": [
      "複数の区間が与えられ、<span class=\"highlight\">重複する区間</span>をすべて結合する",
      "例：intervals=[[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]",
      "核心アイデア：<span class=\"highlight\">始点でソート</span>し、走査時に現在の区間の始点と前の区間の終点を比較し、重複があれば結合（より大きい終点を採用）",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">merge</span>(intervals):\n    intervals.sort(key=<span class=\"kw\">lambda</span> x: x[0])\n    merged = [intervals[0]]\n    <span class=\"kw\">for</span> start, end <span class=\"kw\">in</span> intervals[1:]:\n        <span class=\"kw\">if</span> start <= merged[-1][1]:  <span class=\"cm\"># 重複あり</span>\n            merged[-1][1] = max(merged[-1][1], end)\n        <span class=\"kw\">else</span>:\n            merged.append([start, end])\n    <span class=\"kw\">return</span> merged</pre>",
      "時間O(n log n)ソートが支配的、空間O(n)。境界に注意：start <= end（等号は隣接も結合する意味）",
      "派生問題：LC57 Insert Interval、LC986 Interval List Intersections"
    ],
    "lv": 2
  },
  {
    "id": "cm07",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC102 二叉树的层序遍历 (Binary Tree Level Order Traversal)",
    "q_ja": "LC102 Binary Tree Level Order Traversal（二分木のレベル順走査）",
    "bullets": [
      "返回二叉树的<span class=\"highlight\">层序遍历</span>结果（逐层从左到右）",
      "示例：root=[3,9,20,null,null,15,7] → [[3],[9,20],[15,7]]",
      "核心思路：<span class=\"highlight\">BFS</span>用队列，每层处理前记录队列大小，循环该大小次数即为一层",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\n\n<span class=\"kw\">def</span> <span class=\"fn\">levelOrder</span>(root):\n    <span class=\"kw\">if not</span> root:\n        <span class=\"kw\">return</span> []\n    res, queue = [], deque([root])\n    <span class=\"kw\">while</span> queue:\n        level = []\n        <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(len(queue)):  <span class=\"cm\"># 当前层的节点数</span>\n            node = queue.popleft()\n            level.append(node.val)\n            <span class=\"kw\">if</span> node.left:  queue.append(node.left)\n            <span class=\"kw\">if</span> node.right: queue.append(node.right)\n        res.append(level)\n    <span class=\"kw\">return</span> res</pre>",
      "时间O(n)，空间O(n)。BFS模板题，deque比list.pop(0)快（O(1) vs O(n)）",
      "变体：LC107 自底向上层序、LC103 锯齿形层序、LC199 右视图"
    ],
    "bullets_ja": [
      "二分木の<span class=\"highlight\">レベル順走査</span>結果を返す（各レベルを左から右へ）",
      "例：root=[3,9,20,null,null,15,7] → [[3],[9,20],[15,7]]",
      "核心アイデア：<span class=\"highlight\">BFS</span>でQueueを使い、各レベルの処理前にQueueのサイズを記録し、そのサイズ分ループすれば1レベル分",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> deque\n\n<span class=\"kw\">def</span> <span class=\"fn\">levelOrder</span>(root):\n    <span class=\"kw\">if not</span> root:\n        <span class=\"kw\">return</span> []\n    res, queue = [], deque([root])\n    <span class=\"kw\">while</span> queue:\n        level = []\n        <span class=\"kw\">for</span> _ <span class=\"kw\">in</span> range(len(queue)):  <span class=\"cm\"># 現在のレベルのノード数</span>\n            node = queue.popleft()\n            level.append(node.val)\n            <span class=\"kw\">if</span> node.left:  queue.append(node.left)\n            <span class=\"kw\">if</span> node.right: queue.append(node.right)\n        res.append(level)\n    <span class=\"kw\">return</span> res</pre>",
      "時間O(n)、空間O(n)。BFSのテンプレート問題、dequeはlist.pop(0)より高速（O(1) vs O(n)）",
      "派生問題：LC107 下からのレベル順走査、LC103 ジグザグレベル順走査、LC199 右側ビュー"
    ],
    "lv": 2
  },
  {
    "id": "cm08",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC146 LRU缓存 (LRU Cache)",
    "q_ja": "LC146 LRU Cache（LRUキャッシュ）",
    "bullets": [
      "设计一个满足<span class=\"highlight\">LRU(最近最少使用)</span>缓存约束的数据结构，get和put均O(1)",
      "示例：LRUCache(2) → put(1,1) → put(2,2) → get(1)=1 → put(3,3) → get(2)=-1（被淘汰）",
      "核心思路：<span class=\"highlight\">哈希表+双向链表</span>。哈希表O(1)查找，双向链表O(1)增删和调整顺序",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> OrderedDict\n\n<span class=\"kw\">class</span> <span class=\"fn\">LRUCache</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, capacity):\n        self.cache = OrderedDict()\n        self.cap = capacity\n\n    <span class=\"kw\">def</span> <span class=\"fn\">get</span>(self, key):\n        <span class=\"kw\">if</span> key <span class=\"kw\">not in</span> self.cache:\n            <span class=\"kw\">return</span> -1\n        self.cache.move_to_end(key)  <span class=\"cm\"># 标记为最近使用</span>\n        <span class=\"kw\">return</span> self.cache[key]\n\n    <span class=\"kw\">def</span> <span class=\"fn\">put</span>(self, key, value):\n        <span class=\"kw\">if</span> key <span class=\"kw\">in</span> self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        <span class=\"kw\">if</span> len(self.cache) > self.cap:\n            self.cache.popitem(last=<span class=\"kw\">False</span>)  <span class=\"cm\"># 淘汰最久未用</span></pre>",
      "时间O(1)，空间O(capacity)。Python用OrderedDict最简洁，面试可能要求手写双向链表",
      "字节跳动高频题。面试官可能追问：如何手写双向链表实现？线程安全版本？"
    ],
    "bullets_ja": [
      "<span class=\"highlight\">LRU（Least Recently Used）</span>キャッシュの制約を満たすデータ構造を設計する。getとputは共にO(1)",
      "例：LRUCache(2) → put(1,1) → put(2,2) → get(1)=1 → put(3,3) → get(2)=-1（淘汰された）",
      "核心アイデア：<span class=\"highlight\">HashMap+双方向リスト</span>。HashMapでO(1)検索、双方向リストでO(1)の挿入・削除・順序調整",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> OrderedDict\n\n<span class=\"kw\">class</span> <span class=\"fn\">LRUCache</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, capacity):\n        self.cache = OrderedDict()\n        self.cap = capacity\n\n    <span class=\"kw\">def</span> <span class=\"fn\">get</span>(self, key):\n        <span class=\"kw\">if</span> key <span class=\"kw\">not in</span> self.cache:\n            <span class=\"kw\">return</span> -1\n        self.cache.move_to_end(key)  <span class=\"cm\"># 最近使用済みとしてマーク</span>\n        <span class=\"kw\">return</span> self.cache[key]\n\n    <span class=\"kw\">def</span> <span class=\"fn\">put</span>(self, key, value):\n        <span class=\"kw\">if</span> key <span class=\"kw\">in</span> self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        <span class=\"kw\">if</span> len(self.cache) > self.cap:\n            self.cache.popitem(last=<span class=\"kw\">False</span>)  <span class=\"cm\"># 最も長く未使用のものを淘汰</span></pre>",
      "時間O(1)、空間O(capacity)。PythonではOrderedDictが最も簡潔、面接では双方向リストの手書き実装を求められることがある",
      "ByteDanceの頻出問題。面接官の追加質問：双方向リストの手書き実装は？スレッドセーフ版は？"
    ],
    "lv": 2
  },
  {
    "id": "cm09",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC200 岛屿数量 (Number of Islands)",
    "q_ja": "LC200 Number of Islands（島の数）",
    "bullets": [
      "给定 '1'(陆地) 和 '0'(水) 组成的二维网格，计算<span class=\"highlight\">岛屿数量</span>",
      "示例：grid=[[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]] → 2",
      "核心思路：遍历网格，遇到'1'就<span class=\"highlight\">DFS/BFS淹没</span>整个连通区域（标记为'0'），岛屿计数+1",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">numIslands</span>(grid):\n    <span class=\"kw\">if not</span> grid:\n        <span class=\"kw\">return</span> 0\n    rows, cols = len(grid), len(grid[0])\n    count = 0\n\n    <span class=\"kw\">def</span> <span class=\"fn\">dfs</span>(r, c):\n        <span class=\"kw\">if</span> r < 0 <span class=\"kw\">or</span> r >= rows <span class=\"kw\">or</span> c < 0 <span class=\"kw\">or</span> c >= cols <span class=\"kw\">or</span> grid[r][c] != <span class=\"str\">'1'</span>:\n            <span class=\"kw\">return</span>\n        grid[r][c] = <span class=\"str\">'0'</span>  <span class=\"cm\"># 淹没</span>\n        dfs(r+1, c); dfs(r-1, c)\n        dfs(r, c+1); dfs(r, c-1)\n\n    <span class=\"kw\">for</span> r <span class=\"kw\">in</span> range(rows):\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> range(cols):\n            <span class=\"kw\">if</span> grid[r][c] == <span class=\"str\">'1'</span>:\n                dfs(r, c)\n                count += 1\n    <span class=\"kw\">return</span> count</pre>",
      "时间O(m×n)，空间O(m×n)最坏递归栈深度。也可用BFS或并查集",
      "变体：LC695 岛屿最大面积、LC463 岛屿周长、LC827 最大人工岛"
    ],
    "bullets_ja": [
      "'1'（陸地）と'0'（水）で構成される二次元グリッドが与えられ、<span class=\"highlight\">島の数</span>を数える",
      "例：grid=[[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]] → 2",
      "核心アイデア：グリッドを走査し、'1'に遭遇したら<span class=\"highlight\">DFS/BFSで水没</span>させて連結領域全体を'0'にマークし、島カウント+1",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">numIslands</span>(grid):\n    <span class=\"kw\">if not</span> grid:\n        <span class=\"kw\">return</span> 0\n    rows, cols = len(grid), len(grid[0])\n    count = 0\n\n    <span class=\"kw\">def</span> <span class=\"fn\">dfs</span>(r, c):\n        <span class=\"kw\">if</span> r < 0 <span class=\"kw\">or</span> r >= rows <span class=\"kw\">or</span> c < 0 <span class=\"kw\">or</span> c >= cols <span class=\"kw\">or</span> grid[r][c] != <span class=\"str\">'1'</span>:\n            <span class=\"kw\">return</span>\n        grid[r][c] = <span class=\"str\">'0'</span>  <span class=\"cm\"># 水没させる</span>\n        dfs(r+1, c); dfs(r-1, c)\n        dfs(r, c+1); dfs(r, c-1)\n\n    <span class=\"kw\">for</span> r <span class=\"kw\">in</span> range(rows):\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> range(cols):\n            <span class=\"kw\">if</span> grid[r][c] == <span class=\"str\">'1'</span>:\n                dfs(r, c)\n                count += 1\n    <span class=\"kw\">return</span> count</pre>",
      "時間O(m×n)、空間O(m×n)最悪の場合の再帰スタック深さ。BFSやUnion-Findでも可",
      "派生問題：LC695 島の最大面積、LC463 島の周長、LC827 最大人工島"
    ],
    "lv": 2
  },
  {
    "id": "cm10",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC236 二叉树的最近公共祖先 (Lowest Common Ancestor of a Binary Tree)",
    "q_ja": "LC236 Lowest Common Ancestor of a Binary Tree（二分木の最近共通祖先）",
    "bullets": [
      "给定二叉树和两个节点p、q，找到它们的<span class=\"highlight\">最近公共祖先(LCA)</span>",
      "示例：root=[3,5,1,6,2,0,8,null,null,7,4], p=5, q=1 → LCA=3",
      "核心思路：<span class=\"highlight\">后序递归</span>——左右子树分别查找p和q，若分居两侧则当前节点就是LCA",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">lowestCommonAncestor</span>(root, p, q):\n    <span class=\"kw\">if not</span> root <span class=\"kw\">or</span> root == p <span class=\"kw\">or</span> root == q:\n        <span class=\"kw\">return</span> root\n    left = lowestCommonAncestor(root.left, p, q)\n    right = lowestCommonAncestor(root.right, p, q)\n    <span class=\"kw\">if</span> left <span class=\"kw\">and</span> right:  <span class=\"cm\"># p和q分居两侧</span>\n        <span class=\"kw\">return</span> root\n    <span class=\"kw\">return</span> left <span class=\"kw\">if</span> left <span class=\"kw\">else</span> right</pre>",
      "时间O(n)，空间O(h)。递归含义：在以root为根的子树中查找p或q，找到就返回",
      "易错点：LCA可以是p或q本身。变体：LC235 BST的LCA（利用BST性质更简单）"
    ],
    "bullets_ja": [
      "二分木と2つのノードp、qが与えられ、それらの<span class=\"highlight\">最近共通祖先(LCA)</span>を求める",
      "例：root=[3,5,1,6,2,0,8,null,null,7,4], p=5, q=1 → LCA=3",
      "核心アイデア：<span class=\"highlight\">後順再帰</span>——左右部分木でそれぞれpとqを探し、両側に分かれていれば現在のノードがLCA",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">lowestCommonAncestor</span>(root, p, q):\n    <span class=\"kw\">if not</span> root <span class=\"kw\">or</span> root == p <span class=\"kw\">or</span> root == q:\n        <span class=\"kw\">return</span> root\n    left = lowestCommonAncestor(root.left, p, q)\n    right = lowestCommonAncestor(root.right, p, q)\n    <span class=\"kw\">if</span> left <span class=\"kw\">and</span> right:  <span class=\"cm\"># pとqが両側に分かれている</span>\n        <span class=\"kw\">return</span> root\n    <span class=\"kw\">return</span> left <span class=\"kw\">if</span> left <span class=\"kw\">else</span> right</pre>",
      "時間O(n)、空間O(h)。再帰の意味：rootを根とする部分木でpまたはqを探し、見つかれば返す",
      "注意点：LCA自体がpまたはqになりうる。派生：LC235 BSTのLCA（BST特性を活用してより簡単）"
    ],
    "lv": 2
  },
  {
    "id": "cm11",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC322 零钱兑换 (Coin Change)",
    "q_ja": "LC322 Coin Change（コイン両替）",
    "bullets": [
      "给定不同面额硬币和总金额amount，求凑出总金额所需的<span class=\"highlight\">最少硬币数</span>，凑不出返回-1",
      "示例：coins=[1,2,5], amount=11 → 3（5+5+1）",
      "核心思路：<span class=\"highlight\">完全背包DP</span>。dp[i]=凑出金额i的最少硬币数，dp[i]=min(dp[i-c]+1) for c in coins",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">coinChange</span>(coins, amount):\n    dp = [float(<span class=\"str\">'inf'</span>)] * (amount + 1)\n    dp[0] = 0  <span class=\"cm\"># base case: 凑0元需要0枚</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(1, amount + 1):\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> coins:\n            <span class=\"kw\">if</span> c <= i:\n                dp[i] = min(dp[i], dp[i - c] + 1)\n    <span class=\"kw\">return</span> dp[amount] <span class=\"kw\">if</span> dp[amount] != float(<span class=\"str\">'inf'</span>) <span class=\"kw\">else</span> -1</pre>",
      "时间O(amount × n)，空间O(amount)，n为硬币种类数",
      "贪心不可行（如coins=[1,3,4], amount=6，贪心4+1+1=3枚，DP 3+3=2枚）。变体：LC518 零钱兑换II（求方案数）"
    ],
    "bullets_ja": [
      "異なる額面のコインと合計金額amountが与えられ、合計を作るのに必要な<span class=\"highlight\">最少コイン枚数</span>を求める。作れなければ-1を返す",
      "例：coins=[1,2,5], amount=11 → 3（5+5+1）",
      "核心アイデア：<span class=\"highlight\">完全ナップザックDP</span>。dp[i]=金額iを作る最少コイン枚数、dp[i]=min(dp[i-c]+1) for c in coins",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">coinChange</span>(coins, amount):\n    dp = [float(<span class=\"str\">'inf'</span>)] * (amount + 1)\n    dp[0] = 0  <span class=\"cm\"># base case: 0円には0枚</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(1, amount + 1):\n        <span class=\"kw\">for</span> c <span class=\"kw\">in</span> coins:\n            <span class=\"kw\">if</span> c <= i:\n                dp[i] = min(dp[i], dp[i - c] + 1)\n    <span class=\"kw\">return</span> dp[amount] <span class=\"kw\">if</span> dp[amount] != float(<span class=\"str\">'inf'</span>) <span class=\"kw\">else</span> -1</pre>",
      "時間O(amount × n)、空間O(amount)、nはコインの種類数",
      "貪欲法は不可（例：coins=[1,3,4], amount=6、貪欲法4+1+1=3枚、DP 3+3=2枚）。派生：LC518 Coin Change II（方法の数を求める）"
    ],
    "lv": 2
  },
  {
    "id": "cm12",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC560 和为K的子数组 (Subarray Sum Equals K)",
    "q_ja": "LC560 Subarray Sum Equals K（和がKの部分配列）",
    "bullets": [
      "给定整数数组和整数k，统计和为k的<span class=\"highlight\">连续子数组</span>个数",
      "示例：nums=[1,1,1], k=2 → 2（[1,1]出现两次）",
      "核心思路：<span class=\"highlight\">前缀和+哈希表</span>。prefix[j]-prefix[i]=k ↔ prefix[i]=prefix[j]-k，用哈希表记录每个前缀和出现的次数",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\n\n<span class=\"kw\">def</span> <span class=\"fn\">subarraySum</span>(nums, k):\n    count = 0\n    prefix_sum = 0\n    seen = defaultdict(int)\n    seen[0] = 1  <span class=\"cm\"># 前缀和为0出现1次（空前缀）</span>\n    <span class=\"kw\">for</span> num <span class=\"kw\">in</span> nums:\n        prefix_sum += num\n        count += seen[prefix_sum - k]  <span class=\"cm\"># 有多少个前缀和等于当前-k</span>\n        seen[prefix_sum] += 1\n    <span class=\"kw\">return</span> count</pre>",
      "时间O(n)，空间O(n)。注意：数组含负数所以<span class=\"highlight\">不能用滑动窗口</span>",
      "易错点：seen[0]=1不能忘（处理从头开始的子数组）；暴力O(n²)会超时"
    ],
    "bullets_ja": [
      "整数配列と整数kが与えられ、和がkになる<span class=\"highlight\">連続部分配列</span>の個数を数える",
      "例：nums=[1,1,1], k=2 → 2（[1,1]が2回出現）",
      "核心アイデア：<span class=\"highlight\">累積和+HashMap</span>。prefix[j]-prefix[i]=k ↔ prefix[i]=prefix[j]-k、HashMapで各累積和の出現回数を記録",
      "<pre><span class=\"kw\">from</span> collections <span class=\"kw\">import</span> defaultdict\n\n<span class=\"kw\">def</span> <span class=\"fn\">subarraySum</span>(nums, k):\n    count = 0\n    prefix_sum = 0\n    seen = defaultdict(int)\n    seen[0] = 1  <span class=\"cm\"># 累積和0は1回出現（空の接頭辞）</span>\n    <span class=\"kw\">for</span> num <span class=\"kw\">in</span> nums:\n        prefix_sum += num\n        count += seen[prefix_sum - k]  <span class=\"cm\"># 現在の値-kに等しい累積和がいくつあるか</span>\n        seen[prefix_sum] += 1\n    <span class=\"kw\">return</span> count</pre>",
      "時間O(n)、空間O(n)。注意：配列に負数が含まれるため<span class=\"highlight\">Sliding Windowは使えない</span>",
      "注意点：seen[0]=1を忘れてはいけない（先頭から始まる部分配列の処理）；全探索O(n²)はTLE"
    ],
    "lv": 2
  },
  {
    "id": "cm13",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC5 最长回文子串 (Longest Palindromic Substring) — 中心扩展",
    "q_ja": "LC5 Longest Palindromic Substring（最長回文部分文字列）— 中心拡張法",
    "bullets": [
      "给定字符串s，找到s中最长的<span class=\"highlight\">回文子串</span>",
      "示例：s=\"babad\" → \"bab\" 或 \"aba\"；s=\"cbbd\" → \"bb\"",
      "核心思路：<span class=\"highlight\">中心扩展法</span>——枚举每个字符（和每对相邻字符）作为回文中心，向两边扩展",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">longestPalindrome</span>(s):\n    <span class=\"kw\">def</span> <span class=\"fn\">expand</span>(l, r):\n        <span class=\"kw\">while</span> l >= 0 <span class=\"kw\">and</span> r < len(s) <span class=\"kw\">and</span> s[l] == s[r]:\n            l -= 1\n            r += 1\n        <span class=\"kw\">return</span> s[l+1:r]\n    res = <span class=\"str\">\"\"</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(s)):\n        odd = expand(i, i)       <span class=\"cm\"># 奇数长度回文</span>\n        even = expand(i, i + 1)  <span class=\"cm\"># 偶数长度回文</span>\n        res = max(res, odd, even, key=len)\n    <span class=\"kw\">return</span> res</pre>",
      "时间O(n²)，空间O(1)。Manacher算法可O(n)但面试中中心扩展已足够",
      "DP做法：dp[i][j]表示s[i..j]是否回文，时间O(n²)空间O(n²)，不如中心扩展"
    ],
    "bullets_ja": [
      "与えられた文字列sの中で最長の<span class=\"highlight\">回文部分文字列</span>を見つける",
      "例：s=\"babad\" → \"bab\" または \"aba\"；s=\"cbbd\" → \"bb\"",
      "核心アイデア：<span class=\"highlight\">中心拡張法</span>——各文字（および隣接する文字ペア）を回文の中心として列挙し、両側に拡張する",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">longestPalindrome</span>(s):\n    <span class=\"kw\">def</span> <span class=\"fn\">expand</span>(l, r):\n        <span class=\"kw\">while</span> l >= 0 <span class=\"kw\">and</span> r < len(s) <span class=\"kw\">and</span> s[l] == s[r]:\n            l -= 1\n            r += 1\n        <span class=\"kw\">return</span> s[l+1:r]\n    res = <span class=\"str\">\"\"</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(len(s)):\n        odd = expand(i, i)       <span class=\"cm\"># 奇数長の回文</span>\n        even = expand(i, i + 1)  <span class=\"cm\"># 偶数長の回文</span>\n        res = max(res, odd, even, key=len)\n    <span class=\"kw\">return</span> res</pre>",
      "時間O(n²)、空間O(1)。ManacherアルゴリズムならO(n)だが面接では中心拡張法で十分",
      "DP手法：dp[i][j]がs[i..j]の回文判定を表す、時間O(n²)空間O(n²)、中心拡張法には劣る"
    ],
    "lv": 2
  },
  {
    "id": "cm14",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC11 盛最多水的容器 (Container With Most Water) — 双指针",
    "q_ja": "LC11 Container With Most Water（最も水を多く入れられる容器）— Two Pointers",
    "bullets": [
      "给定n条垂直线（height数组），找出两条线与x轴围成的容器能容纳<span class=\"highlight\">最多水</span>",
      "示例：height=[1,8,6,2,5,4,8,3,7] → 49（选第2和第9条线）",
      "核心思路：<span class=\"highlight\">左右双指针</span>从两端向中间收缩，每次移动<span class=\"highlight\">较短</span>的那一侧（移动较长侧面积只会减小）",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">maxArea</span>(height):\n    l, r = 0, len(height) - 1\n    max_water = 0\n    <span class=\"kw\">while</span> l < r:\n        w = r - l\n        h = min(height[l], height[r])\n        max_water = max(max_water, w * h)\n        <span class=\"kw\">if</span> height[l] < height[r]:\n            l += 1\n        <span class=\"kw\">else</span>:\n            r -= 1\n    <span class=\"kw\">return</span> max_water</pre>",
      "时间O(n)，空间O(1)。贪心证明：移动短边可能找到更高的边，移动长边不可能增大面积",
      "与LC42接雨水区分：接雨水需要知道左右最大值，本题只看两端"
    ],
    "bullets_ja": [
      "n本の垂直線（height配列）が与えられ、2本の線とx軸で囲まれた容器が入れられる<span class=\"highlight\">最大の水量</span>を求める",
      "例：height=[1,8,6,2,5,4,8,3,7] → 49（第2本目と第9本目を選択）",
      "核心アイデア：<span class=\"highlight\">左右のTwo Pointers</span>を両端から中央へ収縮させ、毎回<span class=\"highlight\">短い方</span>を移動する（長い方を動かしても面積は増えない）",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">maxArea</span>(height):\n    l, r = 0, len(height) - 1\n    max_water = 0\n    <span class=\"kw\">while</span> l < r:\n        w = r - l\n        h = min(height[l], height[r])\n        max_water = max(max_water, w * h)\n        <span class=\"kw\">if</span> height[l] < height[r]:\n            l += 1\n        <span class=\"kw\">else</span>:\n            r -= 1\n    <span class=\"kw\">return</span> max_water</pre>",
      "時間O(n)、空間O(1)。貪欲法の証明：短い辺を動かせばより高い辺が見つかる可能性があるが、長い辺を動かしても面積は増えない",
      "LC42 Trapping Rain Waterとの区別：雨水は左右の最大値が必要、本題は両端のみを見る"
    ],
    "lv": 2
  },
  {
    "id": "cm15",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC33 搜索旋转排序数组 (Search in Rotated Sorted Array) — 二分",
    "q_ja": "LC33 Search in Rotated Sorted Array（回転ソート済み配列の探索）— Binary Search",
    "bullets": [
      "在旋转过的有序数组中搜索目标值，要求O(log n)。数组无重复元素",
      "示例：nums=[4,5,6,7,0,1,2], target=0 → 4",
      "核心思路：<span class=\"highlight\">改良二分</span>——先判断mid落在哪半段有序区间，再判断target是否在该有序区间内",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">search</span>(nums, target):\n    l, r = 0, len(nums) - 1\n    <span class=\"kw\">while</span> l <= r:\n        mid = (l + r) // 2\n        <span class=\"kw\">if</span> nums[mid] == target:\n            <span class=\"kw\">return</span> mid\n        <span class=\"kw\">if</span> nums[l] <= nums[mid]:  <span class=\"cm\"># 左半段有序</span>\n            <span class=\"kw\">if</span> nums[l] <= target < nums[mid]:\n                r = mid - 1\n            <span class=\"kw\">else</span>:\n                l = mid + 1\n        <span class=\"kw\">else</span>:                     <span class=\"cm\"># 右半段有序</span>\n            <span class=\"kw\">if</span> nums[mid] < target <= nums[r]:\n                l = mid + 1\n            <span class=\"kw\">else</span>:\n                r = mid - 1\n    <span class=\"kw\">return</span> -1</pre>",
      "时间O(log n)，空间O(1)。关键：旋转数组至少有一半是有序的",
      "易错点：边界条件 nums[l] <= nums[mid] 的等号处理（l==mid时左半只有一个元素）"
    ],
    "bullets_ja": [
      "回転されたソート済み配列から目標値を探索する。O(log n)が要件。配列に重複要素はない",
      "例：nums=[4,5,6,7,0,1,2], target=0 → 4",
      "核心アイデア：<span class=\"highlight\">改良Binary Search</span>——まずmidがどちらの有序区間に属するか判定し、次にtargetがその有序区間内にあるか判定する",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">search</span>(nums, target):\n    l, r = 0, len(nums) - 1\n    <span class=\"kw\">while</span> l <= r:\n        mid = (l + r) // 2\n        <span class=\"kw\">if</span> nums[mid] == target:\n            <span class=\"kw\">return</span> mid\n        <span class=\"kw\">if</span> nums[l] <= nums[mid]:  <span class=\"cm\"># 左半分がソート済み</span>\n            <span class=\"kw\">if</span> nums[l] <= target < nums[mid]:\n                r = mid - 1\n            <span class=\"kw\">else</span>:\n                l = mid + 1\n        <span class=\"kw\">else</span>:                     <span class=\"cm\"># 右半分がソート済み</span>\n            <span class=\"kw\">if</span> nums[mid] < target <= nums[r]:\n                l = mid + 1\n            <span class=\"kw\">else</span>:\n                r = mid - 1\n    <span class=\"kw\">return</span> -1</pre>",
      "時間O(log n)、空間O(1)。鍵：回転配列は少なくとも半分がソート済み",
      "注意点：境界条件 nums[l] <= nums[mid] の等号処理（l==midのとき左半分は要素1つだけ）"
    ],
    "lv": 2
  },
  {
    "id": "cm16",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC148 排序链表 (Sort List) — 归并排序",
    "q_ja": "LC148 Sort List（リストのソート）— マージソート",
    "bullets": [
      "对链表进行<span class=\"highlight\">排序</span>，要求O(n log n)时间、O(1)空间",
      "示例：head=[4,2,1,3] → [1,2,3,4]",
      "核心思路：<span class=\"highlight\">归并排序</span>——快慢指针找中点→断开→分别排序→合并两个有序链表",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">sortList</span>(head):\n    <span class=\"kw\">if not</span> head <span class=\"kw\">or not</span> head.next:\n        <span class=\"kw\">return</span> head\n    <span class=\"cm\"># 快慢指针找中点</span>\n    slow, fast = head, head.next\n    <span class=\"kw\">while</span> fast <span class=\"kw\">and</span> fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    mid = slow.next\n    slow.next = <span class=\"kw\">None</span>  <span class=\"cm\"># 断开</span>\n    <span class=\"cm\"># 递归排序+合并</span>\n    left = sortList(head)\n    right = sortList(mid)\n    <span class=\"kw\">return</span> mergeTwoLists(left, right)</pre>",
      "时间O(n log n)，空间O(log n)递归栈。合并函数复用LC21 mergeTwoLists",
      "链表排序首选归并（不需要随机访问）。数组排序首选快排（cache友好）"
    ],
    "bullets_ja": [
      "連結リストを<span class=\"highlight\">ソート</span>する。O(n log n)時間、O(1)空間が要件",
      "例：head=[4,2,1,3] → [1,2,3,4]",
      "核心アイデア：<span class=\"highlight\">マージソート</span>——高速・低速ポインタで中間点を見つける→分断→各々ソート→2つのソート済みリストを結合",
      "<pre><span class=\"kw\">def</span> <span class=\"fn\">sortList</span>(head):\n    <span class=\"kw\">if not</span> head <span class=\"kw\">or not</span> head.next:\n        <span class=\"kw\">return</span> head\n    <span class=\"cm\"># 高速・低速ポインタで中間点を探す</span>\n    slow, fast = head, head.next\n    <span class=\"kw\">while</span> fast <span class=\"kw\">and</span> fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    mid = slow.next\n    slow.next = <span class=\"kw\">None</span>  <span class=\"cm\"># 分断</span>\n    <span class=\"cm\"># 再帰ソート+結合</span>\n    left = sortList(head)\n    right = sortList(mid)\n    <span class=\"kw\">return</span> mergeTwoLists(left, right)</pre>",
      "時間O(n log n)、空間O(log n)再帰スタック。結合関数はLC21 mergeTwoListsを再利用",
      "リストのソートにはマージソートが最適（ランダムアクセス不要）。配列のソートにはクイックソートが最適（キャッシュフレンドリー）"
    ],
    "lv": 2
  },
  {
    "id": "cm17",
    "cat": "编程题-Medium",
    "group": "编程题",
    "q": "LC215 数组中的第K个最大元素 (Kth Largest Element) — 快速选择",
    "q_ja": "LC215 Kth Largest Element in an Array（配列のK番目に大きい要素）— QuickSelect",
    "bullets": [
      "找出未排序数组中<span class=\"highlight\">第k大</span>的元素（不是第k小）",
      "示例：nums=[3,2,1,5,6,4], k=2 → 5",
      "核心思路：<span class=\"highlight\">快速选择(QuickSelect)</span>——基于快排的partition，只递归目标所在的一半",
      "<pre><span class=\"kw\">import</span> random\n\n<span class=\"kw\">def</span> <span class=\"fn\">findKthLargest</span>(nums, k):\n    target = len(nums) - k  <span class=\"cm\"># 转化为第target小</span>\n    <span class=\"kw\">def</span> <span class=\"fn\">quickselect</span>(l, r):\n        pivot = random.randint(l, r)\n        nums[pivot], nums[r] = nums[r], nums[pivot]\n        store = l\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(l, r):\n            <span class=\"kw\">if</span> nums[i] < nums[r]:\n                nums[store], nums[i] = nums[i], nums[store]\n                store += 1\n        nums[store], nums[r] = nums[r], nums[store]\n        <span class=\"kw\">if</span> store == target: <span class=\"kw\">return</span> nums[store]\n        <span class=\"kw\">elif</span> store < target: <span class=\"kw\">return</span> quickselect(store+1, r)\n        <span class=\"kw\">else</span>: <span class=\"kw\">return</span> quickselect(l, store-1)\n    <span class=\"kw\">return</span> quickselect(0, len(nums)-1)</pre>",
      "平均O(n)，最坏O(n²)（随机pivot避免）。堆解法O(n log k)也常用",
      "面试追问：为什么随机pivot？（避免已排序数组退化到O(n²)）。变体：用最小堆维护top-k"
    ],
    "bullets_ja": [
      "ソートされていない配列の中で<span class=\"highlight\">K番目に大きい</span>要素を見つける（K番目に小さいではない）",
      "例：nums=[3,2,1,5,6,4], k=2 → 5",
      "核心アイデア：<span class=\"highlight\">QuickSelect</span>——クイックソートのpartitionに基づき、目標が含まれる半分のみを再帰する",
      "<pre><span class=\"kw\">import</span> random\n\n<span class=\"kw\">def</span> <span class=\"fn\">findKthLargest</span>(nums, k):\n    target = len(nums) - k  <span class=\"cm\"># target番目に小さい要素に変換</span>\n    <span class=\"kw\">def</span> <span class=\"fn\">quickselect</span>(l, r):\n        pivot = random.randint(l, r)\n        nums[pivot], nums[r] = nums[r], nums[pivot]\n        store = l\n        <span class=\"kw\">for</span> i <span class=\"kw\">in</span> range(l, r):\n            <span class=\"kw\">if</span> nums[i] < nums[r]:\n                nums[store], nums[i] = nums[i], nums[store]\n                store += 1\n        nums[store], nums[r] = nums[r], nums[store]\n        <span class=\"kw\">if</span> store == target: <span class=\"kw\">return</span> nums[store]\n        <span class=\"kw\">elif</span> store < target: <span class=\"kw\">return</span> quickselect(store+1, r)\n        <span class=\"kw\">else</span>: <span class=\"kw\">return</span> quickselect(l, store-1)\n    <span class=\"kw\">return</span> quickselect(0, len(nums)-1)</pre>",
      "平均O(n)、最悪O(n²)（ランダムpivotで回避）。Heap解法O(n log k)もよく使われる",
      "面接での追加質問：なぜランダムpivotか？（ソート済み配列でO(n²)に退化するのを防ぐ）。派生：最小Heapでtop-kを維持"
    ],
    "lv": 2
  }
];
