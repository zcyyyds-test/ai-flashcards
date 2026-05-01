const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const manifest = JSON.parse(fs.readFileSync(path.join(dataDir, 'manifest.json'), 'utf8'));

const bannedPhrases = [
  '把这题往个人经历上拉',
  '答案会更像复盘而不是背诵',
  '成本/稳定性/安全/可解释性之一',
  '帮助我更快做方案取舍、排障或和团队对齐',
  'trace、日志、回放、灰度和人工接管',
  '先给边界条件，再给实现/公式/流程，最后说明怎么验证',
  '不要陷入零散名词',
];

const rigidInterviewShape = '问题意图|答题结构|深挖追问|易错点|补充与实战整理';

function flatten(card) {
  return JSON.stringify(card);
}

const issues = [];

for (const entry of manifest) {
  const filePath = path.join(dataDir, entry.file);
  const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  for (const card of cards) {
    const raw = flatten(card);
    for (const phrase of bannedPhrases) {
      if (raw.includes(phrase)) {
        issues.push(`${entry.file}:${card.id} banned phrase: ${phrase}`);
      }
    }

    const shape = (card.details || []).map(detail => detail.term).join('|');
    if (shape === rigidInterviewShape) {
      issues.push(`${entry.file}:${card.id} rigid interview detail shape`);
    }
  }
}

console.log(JSON.stringify({
  issues: issues.length,
  bannedPhrases: bannedPhrases.length,
}, null, 2));

if (process.argv.includes('--list')) {
  console.log(issues.join('\n'));
}

if (issues.length > 0) process.exitCode = 1;
