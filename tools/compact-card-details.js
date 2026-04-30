const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const manifest = JSON.parse(fs.readFileSync(path.join(dataDir, 'manifest.json'), 'utf8'));

function mergeDetails(details, lang) {
  if (!Array.isArray(details) || details.length <= 5) return details || [];

  const head = details.slice(0, 4);
  const tail = details.slice(4);
  const term = lang === 'ja' ? '補足と実戦整理' : '补充与实战整理';
  const explain = tail.map(item => {
    const title = item.term ? `<p><strong>${item.term}</strong></p>` : '';
    return `${title}${item.explain || ''}`;
  }).join('');

  return [...head, { term, explain }];
}

let compacted = 0;
for (const entry of manifest) {
  const filePath = path.join(dataDir, entry.file);
  const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let touched = false;

  for (const card of cards) {
    const beforeZh = (card.details || []).length;
    const beforeJa = (card.details_ja || []).length;
    card.details = mergeDetails(card.details, 'zh');
    card.details_ja = mergeDetails(card.details_ja, 'ja');
    if ((card.details || []).length !== beforeZh || (card.details_ja || []).length !== beforeJa) {
      compacted++;
      touched = true;
    }
  }

  if (touched) {
    fs.writeFileSync(filePath, `${JSON.stringify(cards, null, 2)}\n`, 'utf8');
  }
}

console.log(`compacted ${compacted} cards to <=5 detail entries`);
