const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const manifest = JSON.parse(fs.readFileSync(path.join(dataDir, 'manifest.json'), 'utf8'));

function cleanText(value) {
  return String(value || '')
    .replace(/<pre[\s\S]*?<\/pre>/g, '代码模板')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function bulletList(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function domainGuide(card, lang) {
  const text = `${card.cat} ${card.q} ${card.group}`;
  const isJa = lang === 'ja';
  const t = isJa ? {
    algorithm: '<p><strong>理解の軸：</strong>入力条件、維持する不変条件、計算量、境界ケースの4点で説明する。</p><ul><li>前提：ソート済みか、重複を許すか、原地処理が必要かを最初に確認する。</li><li>過程：ポインタ、状態、キュー/スタックなどが何を表すかを言語化する。</li><li>検証：空入力、1要素、全重複、最大サイズで破綻しないかを見る。</li></ul>',
    llm: '<p><strong>理解の軸：</strong>原理、システム実装、評価指標、失敗モードを分けて説明する。</p><ul><li>原理：モデル内部で何が起きるかを一文で定義する。</li><li>実装：データ、プロンプト、推論基盤、コストのどこに効くかを述べる。</li><li>評価：精度だけでなく、遅延、コスト、安全性、再現性を含める。</li></ul>',
    project: '<p><strong>理解の軸：</strong>背景、設計判断、定量結果、失敗から得た学びの順で話す。</p><ul><li>背景：なぜその問題が重要だったかを一文で置く。</li><li>設計：採用した方法だけでなく、採用しなかった選択肢も説明する。</li><li>結果：数字、比較対象、失敗例をセットで出すと説得力が出る。</li></ul>',
    engineering: '<p><strong>理解の軸：</strong>正しさ、運用性、コスト、障害時の戻し方をセットで考える。</p><ul><li>正しさ：正常系だけでなく異常系の挙動を確認する。</li><li>運用性：監視、ログ、権限、ロールバックを含める。</li><li>顧客説明：技術指標を事業指標に接続して話す。</li></ul>'
  } : {
    algorithm: '<p><strong>理解轴：</strong>算法题不要只背代码，要按「输入前提 → 不变式/状态 → 复杂度 → 边界用例」来掌握。</p><ul><li>前提：是否有序、是否允许重复、是否要求原地、是否存在负数或空输入。</li><li>过程：明确每个指针、状态、队列/栈元素代表什么，为什么不会漏解或重复。</li><li>验证：用空数组、单元素、全重复、极端规模测试边界。</li></ul>',
    llm: '<p><strong>理解轴：</strong>AI 知识点要拆成「原理 → 工程实现 → 评测 → 失败模式」。</p><ul><li>原理：先用一句话定义它解决什么问题。</li><li>工程：说明它影响数据、prompt、推理系统、成本或安全的哪一层。</li><li>评测：不要只说准确率，还要看延迟、成本、鲁棒性、安全性和可复现性。</li></ul>',
    project: '<p><strong>理解轴：</strong>项目题按「背景 → 设计选择 → 定量结果 → 失败教训」来讲，避免只罗列技术名词。</p><ul><li>背景：先解释为什么这个问题值得做。</li><li>设计：说明为什么选这个方案，以及替代方案的取舍。</li><li>结果：数字、对比基线、失败案例要一起讲，可信度最高。</li></ul>',
    engineering: '<p><strong>理解轴：</strong>工程题要同时覆盖正确性、可运维性、成本和故障恢复。</p><ul><li>正确性：正常流程、异常流程、边界输入都要有答案。</li><li>运维性：监控、日志、权限、回滚、灰度发布是生产环境必问点。</li><li>客户表达：把技术指标翻译成业务影响，例如成本下降、延迟下降、转化率提升。</li></ul>'
  };

  if (/算法|数据结构|编程|coding|Easy|Medium/.test(text)) return t.algorithm;
  if (/LLM|Agent|RAG|Prompt|模型|评测|ML|DL|PowerTS|SiLR/.test(text)) return t.llm;
  if (/项目|面试|面经|自我|Byte|Tencent|SA商/.test(text)) return t.project;
  return t.engineering;
}

function makeDetails(card, lang) {
  const isJa = lang === 'ja';
  const q = isJa ? (card.q_ja || card.q) : card.q;
  const bullets = isJa ? (card.bullets_ja || card.bullets || []) : (card.bullets || []);
  const cleanBullets = bullets.map(cleanText).filter(Boolean);
  const summary = cleanBullets.slice(0, 4).join(isJa ? '；' : '；');

  if (isJa) {
    return [
      {
        term: '核心ロジック',
        explain: `<p><strong>要点：</strong>${cleanText(q)} は、結論だけでなく「何を解決するか」「どの条件で成り立つか」「どこで失敗するか」まで説明できる状態を目標にする。</p>${bulletList(bullets)}<p>一言でまとめると：<span class="key-point">${summary}</span></p>`
      },
      {
        term: '展開して説明する観点',
        explain: domainGuide(card, 'ja')
      },
      {
        term: '面接での答え方',
        explain: '<p><strong>話す順番：</strong>まず定義を一文で置き、次に仕組み、最後に実務上の注意点を述べる。</p><ul><li>「結論から言うと...」で始める。</li><li>数字・制約・比較対象を入れて、抽象論で終わらせない。</li><li>最後に「したがって、この場面ではこう選ぶ」と判断基準まで示す。</li></ul>'
      }
    ];
  }

  return [
    {
      term: '核心逻辑',
      explain: `<p><strong>要点：</strong>${cleanText(q)} 不能只背结论，要能说明「它解决什么问题、为什么成立、什么时候会失效」。</p>${bulletList(bullets)}<p>一句话压缩：<span class="key-point">${summary}</span></p>`
    },
    {
      term: '展开讲解',
      explain: domainGuide(card, 'zh')
    },
    {
      term: '面试表达模板',
      explain: '<p><strong>回答顺序：</strong>先给定义，再讲机制，然后补充边界和取舍，最后落到项目或业务价值。</p><ul><li>开头：这个问题本质上是在问什么。</li><li>中段：分 2-4 点讲清结构、流程或公式。</li><li>结尾：说明常见坑、适用条件，以及你会如何在真实项目中验证。</li></ul>'
    }
  ];
}

let changedCards = 0;
for (const entry of manifest) {
  const filePath = path.join(dataDir, entry.file);
  const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let touched = false;

  for (const card of cards) {
    if (!Array.isArray(card.details) || card.details.length === 0) {
      card.details = makeDetails(card, 'zh');
      touched = true;
      changedCards++;
    }
    if (!Array.isArray(card.details_ja) || card.details_ja.length === 0) {
      card.details_ja = makeDetails(card, 'ja');
      touched = true;
    }
  }

  if (touched) {
    fs.writeFileSync(filePath, `${JSON.stringify(cards, null, 2)}\n`, 'utf8');
  }
}

console.log(`enriched ${changedCards} cards with missing Chinese details; Japanese details completed where missing.`);
