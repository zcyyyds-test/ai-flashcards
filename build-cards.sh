#!/bin/bash
# Rebuild data/cards.js from data/*.json files
# Usage: bash build-cards.sh

python3 -c "
import json, os, datetime
data_dir = os.path.join(os.path.dirname(os.path.abspath('$0')), 'data')
if not os.path.isdir(data_dir):
    data_dir = 'data'
manifest = json.load(open(os.path.join(data_dir, 'manifest.json'), encoding='utf-8'))
all_cards = []
for entry in manifest:
    cards = json.load(open(os.path.join(data_dir, entry['file']), encoding='utf-8'))
    all_cards.extend(cards)
js = '// Auto-generated from data/*.json — edit the JSON files, then run: bash build-cards.sh\n'
js += '// Generated: ' + datetime.datetime.now().isoformat()[:19] + '\n'
js += 'const BUILTIN_CARDS = ' + json.dumps(all_cards, ensure_ascii=False, indent=2) + ';\n'
out = os.path.join(data_dir, 'cards.js')
open(out, 'w', encoding='utf-8').write(js)
print(f'✓ {len(all_cards)} cards -> {out}')
"
