const fs = require('fs');
const path = require('path');

const targets = [
  'interview-engineering.json',
  'interview-tencent-sa.json',
];

const dataDir = path.join(__dirname, '..', 'data');

function bulletsHtml(card) {
  return `<ul>${(card.bullets || []).map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function stripProjectSection(html) {
  return String(html || '')
    .replace(/^<p><strong>项目\/岗位连接<\/strong><\/p><p>[\s\S]*?<\/ul>/, '')
    .trim();
}

function extractSections(html) {
  const cleaned = stripProjectSection(html);
  const matches = [...cleaned.matchAll(/<p><strong>([^<]+)<\/strong><\/p>/g)];
  if (!matches.length) return cleaned ? [{ title: '本题展开', body: cleaned }] : [];

  return matches.map((match, index) => {
    const start = match.index + match[0].length;
    const end = index + 1 < matches.length ? matches[index + 1].index : cleaned.length;
    return {
      title: match[1].trim(),
      body: cleaned.slice(start, end).trim(),
    };
  }).filter(section => section.title && section.body);
}

function cleanPitfalls(card) {
  const raw = (card.details || []).find(detail => detail.term === '易错点')?.explain || '';
  const text = raw
    .replace(/<[^>]+>/g, '\n')
    .split(/\n+/)
    .map(line => line.trim())
    .filter(Boolean)
    .filter(line => !line.includes('把结论说得太满'))
    .filter(line => !line.includes('忽略反例'))
    .filter(line => !line.includes('成本/稳定性/安全/可解释性之一'))
    .slice(0, 4);
  return text.length ? `<ul>${text.map(line => `<li>${line}</li>`).join('')}</ul>` : '';
}

function sectionHtml(section) {
  return `<p><strong>${section.title}</strong></p>${section.body}`;
}

function buildDetails(card, file) {
  const supplement = (card.details || []).find(detail => detail.term === '补充与实战整理')?.explain || '';
  const sections = extractSections(supplement);
  const coreTerm = file === 'interview-tencent-sa.json' ? '回答框架' : '核心框架';
  const details = [{
    term: coreTerm,
    explain: bulletsHtml(card),
  }];

  if (sections.length <= 3) {
    for (const section of sections) {
      details.push({ term: section.title, explain: section.body });
    }
  } else {
    for (const section of sections.slice(0, 2)) {
      details.push({ term: section.title, explain: section.body });
    }
    details.push({
      term: file === 'interview-tencent-sa.json' ? '延伸场景与边界' : '追问与边界',
      explain: sections.slice(2).map(sectionHtml).join(''),
    });
  }

  if (details.length < 4) {
    const pitfalls = cleanPitfalls(card);
    if (pitfalls) {
      details.push({
        term: file === 'interview-tencent-sa.json' ? '沟通失分点' : '面试检查点',
        explain: pitfalls,
      });
    }
  }

  return details.slice(0, 4);
}

for (const file of targets) {
  const filePath = path.join(dataDir, file);
  const currentCards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const currentHasOriginalSupplement = currentCards.some(card =>
    (card.details || []).some(detail => detail.term === '补充与实战整理')
  );
  if (!currentHasOriginalSupplement) {
    console.log(`Skipped ${file}; it already looks cleaned.`);
    continue;
  }
  const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  for (const card of cards) {
    const details = buildDetails(card, file);
    card.details = details;
    card.details_ja = details;
  }
  fs.writeFileSync(filePath, JSON.stringify(cards, null, 2) + '\n', 'utf8');
  console.log(`Cleaned ${cards.length} cards in ${file}`);
}
