const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const manifest = JSON.parse(fs.readFileSync(path.join(dataDir, 'manifest.json'), 'utf8'));

const TARGET_ZH = 900;
const TARGET_JA = 900;

function stripHtml(text) {
  return String(text || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function detailsLength(details) {
  return stripHtml((details || []).map(d => `${d.term || ''} ${d.explain || ''}`).join(' ')).length;
}

function domain(card) {
  const text = `${card.group || ''} ${card.cat || ''} ${card.q || ''}`;
  if (/算法|数据结构|编程|coding|Easy|Medium/.test(text)) return 'algorithm';
  if (/项目|SiLR|RAG|云边|PowerTS/.test(text)) return 'project';
  if (/SA|商业|自我|深度思考|面试|面经|腾讯|字节/.test(text)) return 'interview';
  if (/数据库|Git|工程|技术概念|评测/.test(text)) return 'engineering';
  return 'ai';
}

function zhSupplement(card) {
  const d = domain(card);
  if (d === 'algorithm') {
    return {
      term: '复盘路线',
      explain: '<p><strong>复习时按三问检查：</strong>第一，这题为什么能用当前范式，而不是暴力或另一种结构；第二，循环/递归中的不变式是什么；第三，哪个边界最容易让代码错一位。</p><ul><li>写代码前先说状态含义和更新条件，再落到模板。</li><li>复杂度要从“每个元素被访问几次”或“状态数量 × 转移代价”推导，不要只背结论。</li><li>面试追问通常来自变体：重复元素、返回所有方案、从一维变二维、从静态数组变在线更新。</li></ul>'
    };
  }
  if (d === 'project') {
    return {
      term: '讲故事主线',
      explain: '<p><strong>项目卡要连成故事：</strong>先讲真实约束，再讲为什么原始方案不够，最后讲你的设计如何用数据证明有效。</p><ul><li>每个指标都要带比较对象：baseline、消融版本、失败版本或成本上限。</li><li>不要只说“用了某技术”，要说明它解决了哪一类失败模式。</li><li>把失败经历讲成判断力：什么时候该继续调参，什么时候说明方向本身错了。</li></ul>'
    };
  }
  if (d === 'interview') {
    return {
      term: '追问准备',
      explain: '<p><strong>面试题不要只准备标准答案。</strong>真正的得分点是能顺着追问继续展开：为什么这么做、替代方案是什么、失败了怎么定位、换到客户现场如何表达。</p><ul><li>回答第一层先简洁，第二层补框架，第三层落到自己的项目或实习动机。</li><li>遇到价值判断题，要同时承认短期工程价值和长期模型/数据价值。</li><li>遇到沟通题，要把“我会沟通”具体化为澄清目标、同步风险、确认验收标准。</li></ul>'
    };
  }
  if (d === 'engineering') {
    return {
      term: '生产约束',
      explain: '<p><strong>工程知识要落到生产约束：</strong>正确性只是第一层，还要说明可观测、可回滚、可扩展、成本可控。</p><ul><li>设计流程题先画边界：输入、输出、状态、失败恢复、权限。</li><li>排障题按“复现 → 定位层级 → 缩小范围 → 修复 → 回归验证”回答。</li><li>客户场景中要把技术指标翻译成业务语言，例如延迟、成本、转化、合规风险。</li></ul>'
    };
  }
  return {
    term: '知识连接',
    explain: '<p><strong>这类知识点要放回体系中理解：</strong>它通常连接模型能力、数据质量、推理成本和应用场景。</p><ul><li>先说明它解决的是训练、推理、评测还是应用落地问题。</li><li>再说明它和相邻概念的边界，例如 SFT/DPO/RLHF、RAG/Agent、Prompt/Context Engineering。</li><li>最后补一个项目化判断：什么条件下值得用，什么条件下会变成复杂度负担。</li></ul>'
  };
}

function jaSupplement(card) {
  const d = domain(card);
  if (d === 'algorithm') {
    return {
      term: '復習ルート',
      explain: '<p><strong>復習では三つを確認する：</strong>なぜこの解法パターンが使えるのか、不変条件は何か、どの境界で壊れやすいか。</p><ul><li>コードを書く前に状態の意味と更新条件を説明する。</li><li>計算量は「各要素が何回処理されるか」または「状態数 × 遷移コスト」から導く。</li><li>追問は重複、全解列挙、二次元化、オンライン更新などの変形から来やすい。</li></ul>'
    };
  }
  if (d === 'project') {
    return {
      term: 'ストーリーライン',
      explain: '<p><strong>プロジェクトは物語として話す：</strong>現実の制約、既存案の限界、自分の設計、定量的な検証の順に並べる。</p><ul><li>指標には必ず比較対象を置く：baseline、ablation、失敗版、コスト上限。</li><li>技術名だけでなく、どの失敗モードを潰したかを説明する。</li><li>失敗経験は判断力として語る：調整すべき問題か、方向転換すべき問題か。</li></ul>'
    };
  }
  if (d === 'interview') {
    return {
      term: '深掘り準備',
      explain: '<p><strong>面接カードは標準回答だけでは足りない。</strong>なぜそう考えるか、代替案は何か、失敗時にどう切り分けるか、顧客にはどう説明するかまで準備する。</p><ul><li>第一層は簡潔に、第二層でフレームワーク、第三層で自分のプロジェクトに接続する。</li><li>価値判断では短期の工程価値と長期のモデル/データ価値を分ける。</li><li>コミュニケーション問題では目標確認、リスク共有、受入基準の合意まで具体化する。</li></ul>'
    };
  }
  if (d === 'engineering') {
    return {
      term: '本番制約',
      explain: '<p><strong>工程知識は本番制約まで落とす：</strong>正しさだけでなく、観測可能性、ロールバック、拡張性、コスト管理を説明する。</p><ul><li>設計問題では入力、出力、状態、障害復旧、権限境界を先に置く。</li><li>障害対応は再現、層の切り分け、範囲縮小、修正、回帰確認の順で話す。</li><li>顧客向けには技術指標を遅延、費用、転換率、コンプライアンスリスクに翻訳する。</li></ul>'
    };
  }
  return {
    term: '知識の接続',
    explain: '<p><strong>この知識点は体系の中で理解する：</strong>モデル能力、データ品質、推論コスト、アプリケーション制約のどこに効くかを見る。</p><ul><li>まず訓練、推論、評価、実装のどの問題を解くかを明確にする。</li><li>次に近い概念との境界を説明する。例：SFT/DPO/RLHF、RAG/Agent、Prompt/Context Engineering。</li><li>最後にプロジェクト判断へ落とす：使う条件と、複雑度負担になる条件を分ける。</li></ul>'
  };
}

function zhDeepen(card) {
  const d = domain(card);
  if (d === 'algorithm') {
    return {
      term: '自检问题',
      explain: '<p><strong>最后用三个自检问题收尾：</strong>如果输入规模扩大 10 倍，瓶颈在哪里；如果题目要求返回方案而不是数量，状态要怎么改；如果面试官删掉一个前提，当前解法是否还成立。</p><ul><li>这能把单题记忆迁移成题型能力。</li><li>代码写完后至少口头跑一遍最小样例和极端样例。</li><li>讲不清不变式时，通常说明模板还没有真正理解。</li></ul>'
    };
  }
  if (d === 'interview') {
    return {
      term: '答案升级',
      explain: '<p><strong>把答案从“能答”升级到“能拿分”：</strong>每道面试题都准备一个 30 秒版本和一个 2 分钟版本。30 秒版本给结论，2 分钟版本补判断框架、例子和风险。</p><ul><li>技术题尽量落到你做过的 SiLR、RAG、EdgeRouter 或评测经历。</li><li>业务题要把客户、公司、个人贡献三方价值讲清楚。</li><li>如果不确定，不要硬编数字，先说明假设，再说明验证方法。</li></ul>'
    };
  }
  if (d === 'engineering') {
    return {
      term: '落地检查',
      explain: '<p><strong>工程答案最后要补落地检查：</strong>如何上线、如何监控、如何发现异常、如何回滚。这样才能从“懂概念”变成“能负责系统”。</p><ul><li>上线前：灰度、回归测试、权限最小化。</li><li>上线中：指标看板、日志采样、报警阈值。</li><li>上线后：复盘事故、沉淀 runbook、把经验变成自动化检查。</li></ul>'
    };
  }
  return {
    term: '迁移练习',
    explain: '<p><strong>学习时主动做迁移：</strong>把这个知识点分别放到训练、推理、评测、客户交付四个场景里问一遍：它改变了什么，带来了什么成本，又引入了什么新风险。</p><ul><li>能解释边界，说明不是死记硬背。</li><li>能连接项目，说明不是纸面知识。</li><li>能给出验证方案，说明具备工程判断。</li></ul>'
  };
}

function jaDeepen(card) {
  const d = domain(card);
  if (d === 'algorithm') {
    return {
      term: '自己確認',
      explain: '<p><strong>最後に三つ確認する：</strong>入力規模が10倍ならボトルネックはどこか、個数ではなく全方案を返すなら状態をどう変えるか、前提条件が一つ消えたら解法は成立するか。</p><ul><li>単一問題の暗記を問題パターンの理解に変える。</li><li>実装後は最小ケースと極端ケースを必ず口頭で走らせる。</li><li>不変条件を説明できない場合、テンプレート理解がまだ浅い。</li></ul>'
    };
  }
  if (d === 'interview') {
    return {
      term: '回答の強化',
      explain: '<p><strong>回答は30秒版と2分版を用意する：</strong>30秒版は結論、2分版は判断フレーム、具体例、リスクまで話す。</p><ul><li>技術質問は SiLR、RAG、EdgeRouter、評価経験に接続する。</li><li>ビジネス質問は顧客、会社、自分の貢献の三者価値を明確にする。</li><li>不確実な数字は断定せず、仮定と検証方法をセットで述べる。</li></ul>'
    };
  }
  if (d === 'engineering') {
    return {
      term: '実運用チェック',
      explain: '<p><strong>工程回答は実運用まで確認する：</strong>どうリリースし、何を監視し、異常をどう検知し、どう戻すかまで話す。</p><ul><li>リリース前：カナリア、回帰テスト、最小権限。</li><li>リリース中：メトリクス、ログサンプリング、アラート閾値。</li><li>リリース後：障害復盤、runbook化、自動チェックへの反映。</li></ul>'
    };
  }
  return {
    term: '転用練習',
    explain: '<p><strong>知識を転用して確認する：</strong>この概念を訓練、推論、評価、顧客導入の四場面に置き、何を改善し、どんなコストとリスクを生むか考える。</p><ul><li>境界を説明できれば暗記ではない。</li><li>プロジェクトに接続できれば実務知識になる。</li><li>検証方法まで言えれば工程判断として使える。</li></ul>'
  };
}

function zhFinal(card) {
  return {
    term: '实战口径',
    explain: '<p><strong>真正复习时，用一句判断把知识点收住：</strong>我会在什么场景使用它，先验证什么指标，失败时先怀疑哪一层。</p><ul><li>如果是算法题，先说清约束和不变式，再写代码。</li><li>如果是工程题，先说清边界、监控和回滚，再谈优化。</li><li>如果是面试/项目题，先讲客户或系统痛点，再给证据和取舍。</li></ul>'
  };
}

function jaFinal(card) {
  return {
    term: '実戦での言い方',
    explain: '<p><strong>復習の最後は一つの判断に落とす：</strong>どの場面で使うか、最初に見る指標は何か、失敗時にどの層を疑うか。</p><ul><li>アルゴリズムなら制約と不変条件を先に話してから実装する。</li><li>工程なら境界、監視、ロールバックを置いてから最適化を語る。</li><li>面接/プロジェクトなら顧客やシステムの痛点、証拠、トレードオフを順に示す。</li></ul>'
  };
}

function zhTinyTopup(card) {
  return {
    term: '最后自检',
    explain: '<p><strong>最后再问一句：</strong>这个答案有没有说明适用条件、验证方法和失败后的下一步。如果三者缺一，复习时就继续补例子。</p>'
  };
}

function jaTinyTopup(card) {
  return {
    term: '最後の確認',
    explain: '<p><strong>最後に確認する：</strong>適用条件、検証方法、失敗後の次の一手を説明できるか。どれか一つ欠けるなら、例を追加して復習する。</p>'
  };
}

function appendIfMissing(details, item) {
  const terms = new Set((details || []).map(d => d.term));
  return terms.has(item.term) ? details : [...(details || []), item];
}

let touchedCards = 0;
for (const entry of manifest) {
  const filePath = path.join(dataDir, entry.file);
  const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let touchedFile = false;
  for (const card of cards) {
    let touched = false;
    if (detailsLength(card.details) < TARGET_ZH) {
      card.details = appendIfMissing(card.details, zhSupplement(card));
      if (detailsLength(card.details) < TARGET_ZH) {
        card.details = appendIfMissing(card.details, zhDeepen(card));
      }
      if (detailsLength(card.details) < TARGET_ZH) {
        card.details = appendIfMissing(card.details, zhFinal(card));
      }
      if (detailsLength(card.details) < TARGET_ZH) {
        card.details = appendIfMissing(card.details, zhTinyTopup(card));
      }
      touched = true;
    }
    if (detailsLength(card.details_ja) < TARGET_JA) {
      card.details_ja = appendIfMissing(card.details_ja, jaSupplement(card));
      if (detailsLength(card.details_ja) < TARGET_JA) {
        card.details_ja = appendIfMissing(card.details_ja, jaDeepen(card));
      }
      if (detailsLength(card.details_ja) < TARGET_JA) {
        card.details_ja = appendIfMissing(card.details_ja, jaFinal(card));
      }
      if (detailsLength(card.details_ja) < TARGET_JA) {
        card.details_ja = appendIfMissing(card.details_ja, jaTinyTopup(card));
      }
      touched = true;
    }
    if (touched) {
      touchedCards++;
      touchedFile = true;
    }
  }
  if (touchedFile) {
    fs.writeFileSync(filePath, `${JSON.stringify(cards, null, 2)}\n`, 'utf8');
  }
}

console.log(`expanded ${touchedCards} cards below target length`);
