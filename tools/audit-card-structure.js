const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const manifest = JSON.parse(fs.readFileSync(path.join(dataDir, 'manifest.json'), 'utf8'));

const stopWords = new Set('的 了 和 是 在 与 及 一个 一种 什么 如何 为什么 怎么 核心 区别 原理 实现 机制 系统 面试 详细 vs'.split(/\s+/));

function stripHtml(text) {
  return String(text || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function tokenize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[\[\]（）()：:？?·,，/]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length > 1 && !stopWords.has(token));
}

function similarity(a, b) {
  const setA = new Set(tokenize(a));
  const setB = new Set(tokenize(b));
  if (!setA.size || !setB.size) return 0;
  let overlap = 0;
  for (const token of setA) if (setB.has(token)) overlap++;
  return overlap / new Set([...setA, ...setB]).size;
}

const cards = [];
for (const entry of manifest) {
  const filePath = path.join(dataDir, entry.file);
  const fileCards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  for (const card of fileCards) cards.push({ ...card, file: entry.file });
}

const byFile = {};
const byCat = {};
for (const card of cards) {
  byFile[card.file] = (byFile[card.file] || 0) + 1;
  byCat[card.cat] = (byCat[card.cat] || 0) + 1;
}

const duplicateCandidates = [];
for (let i = 0; i < cards.length; i++) {
  for (let j = i + 1; j < cards.length; j++) {
    const score = similarity(cards[i].q, cards[j].q);
    if (score >= 0.38) {
      const alreadyRelated = (cards[i].related || []).some(rel => rel.id === cards[j].id)
        || (cards[j].related || []).some(rel => rel.id === cards[i].id);
      duplicateCandidates.push({
        score: Number(score.toFixed(2)),
        alreadyRelated,
        a: `${cards[i].file}:${cards[i].id}`,
        aq: cards[i].q,
        b: `${cards[j].file}:${cards[j].id}`,
        bq: cards[j].q,
      });
    }
  }
}

const broadCandidates = cards
  .map(card => {
    const detailChars = (card.details || []).reduce((sum, detail) => sum + stripHtml(detail.explain).length, 0);
    return {
      ref: `${card.file}:${card.id}`,
      q: card.q,
      bullets: (card.bullets || []).length,
      details: (card.details || []).length,
      detailChars,
      related: (card.related || []).length,
    };
  })
  .filter(item => item.bullets > 5 || item.detailChars > 3000 || item.q.length > 45)
  .sort((a, b) => b.detailChars - a.detailChars);

const relationCount = cards.reduce((sum, card) => sum + (card.related || []).length, 0);
const structureNoteCount = cards.filter(card => card.structure && Array.isArray(card.structure.notes) && card.structure.notes.length).length;

console.log(JSON.stringify({
  cards: cards.length,
  files: byFile,
  categories: byCat,
  relationCount,
  structureNoteCount,
  duplicateCandidates: duplicateCandidates.sort((a, b) => b.score - a.score).slice(0, 30),
  unlinkedDuplicateCandidates: duplicateCandidates.filter(item => !item.alreadyRelated).slice(0, 30),
  broadCandidates: broadCandidates.slice(0, 40),
}, null, 2));
