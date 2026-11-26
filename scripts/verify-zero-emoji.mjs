import fs from 'node:fs';
import path from 'node:path';

/**
 * Modir Plus — Zero-Emoji Policy Validator
 * اسکن کل مخزن از جمله src، docs، tests، scripts و .agents (شامل تمام اسکیل‌ها)
 */

const ROOT_DIR = process.cwd();
const EXCLUDE_DIRS = new Set(['.git', 'node_modules', 'dist', '.astro', '.wrangler', '.vscode']);
const ALLOWED_EXTS = new Set(['.astro', '.ts', '.tsx', '.js', '.mjs', '.json', '.html', '.css', '.md']);
const EMOJI_REGEX = /\p{Extended_Pictographic}/u;

let filesChecked = 0;
let violations = 0;

function scanDir(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (!EXCLUDE_DIRS.has(entry.name)) {
        scanDir(fullPath);
      }
      continue;
    }

    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (!ALLOWED_EXTS.has(ext) || entry.name === 'package-lock.json') continue;

    filesChecked++;
    const content = fs.readFileSync(fullPath, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      if (EMOJI_REGEX.test(line)) {
        const relPath = path.relative(ROOT_DIR, fullPath).replace(/\\/g, '/');
        console.error(`[VIOLATION] Emoji found in ${relPath}:${index + 1}`);
        console.error(`  > ${line.trim()}`);
        violations++;
      }
    });
  }
}

console.log('[Zero-Emoji] Starting full repository scan (including .agents/skills)...');
scanDir(ROOT_DIR);
console.log(`[Zero-Emoji] Scanned ${filesChecked} files.`);

if (violations > 0) {
  console.error(`[FAILED] Found ${violations} emoji violations.`);
  process.exit(1);
}

console.log('[PASSED] 100% Zero-Emoji Policy compliant.');
