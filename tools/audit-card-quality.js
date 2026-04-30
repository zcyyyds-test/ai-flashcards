const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const manifest = JSON.parse(fs.readFileSync(path.join(dataDir, 'manifest.json'), 'utf8'));

const genericPatterns = [
  /不能只背结论/,
  /面试表达模板/,
  /理解轴/,
  /結論だけでなく/,
  /面接での答え方/,
  /理解の軸/
];

const qualitySignals = [
  /为什么|原因|本质|机制|流程|公式|复杂度|边界|失败|反例|取舍|关联|项目|面试|追问|验证|指标|成本|延迟/,
  /なぜ|本質|仕組み|流れ|式|計算量|境界|失敗|反例|トレードオフ|関連|面接|追問|検証|指標|コスト|遅延/
];

function flattenDetails(card, key) {
  return (card[key] || [])
    .map(detail => `${detail.term || ''}\n${detail.explain || ''}`)
    .join('\n');
}

function stripHtml(text) {
  return String(text || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const issues = [];
let total = 0;
let generic = 0;

for (const entry of manifest) {
  const filePath = path.join(dataDir, entry.file);
  const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  for (const card of cards) {
    total++;
    for (const key of ['details', 'details_ja']) {
      const details = card[key];
      const label = `${entry.file}:${card.id}:${key}`;
      if (!Array.isArray(details) || details.length === 0) {
        issues.push(`${label} missing details`);
        continue;
      }

      const raw = flattenDetails(card, key);
      const text = stripHtml(raw);
      const isGeneric = genericPatterns.some(pattern => pattern.test(raw));
      if (isGeneric) {
        generic++;
        issues.push(`${label} still template-like`);
      }
      if (text.length < 900) {
        issues.push(`${label} too short (${text.length} chars)`);
      }
      if (!qualitySignals.some(pattern => pattern.test(text))) {
        issues.push(`${label} lacks reasoning/edge-case signals`);
      }
    }
  }
}

const byFile = new Map();
for (const issue of issues) {
  const file = issue.split(':')[0];
  byFile.set(file, (byFile.get(file) || 0) + 1);
}

console.log(JSON.stringify({
  cards: total,
  issues: issues.length,
  templateLikeOccurrences: generic,
  byFile: Object.fromEntries([...byFile.entries()].sort((a, b) => b[1] - a[1]))
}, null, 2));

if (process.argv.includes('--list')) {
  console.log('\n' + issues.join('\n'));
}

if (issues.length > 0) process.exitCode = 1;
