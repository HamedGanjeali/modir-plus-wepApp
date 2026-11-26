import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Modir Plus — Fast Syntax & Type Check Script
 * بررسی TypeScript / Astro check و اسکریپت‌های Node پیش از بیلد و کامیت
 */

const ROOT_DIR = process.cwd();

function checkNodeScriptsSyntax() {
  const dirs = ['scripts', 'tests'];
  for (const dirName of dirs) {
    const fullDir = path.join(ROOT_DIR, dirName);
    if (!fs.existsSync(fullDir)) continue;
    for (const file of fs.readdirSync(fullDir)) {
      if (!file.endsWith('.js') && !file.endsWith('.mjs')) continue;
      const filePath = path.join(fullDir, file);
      const res = spawnSync(process.execPath, ['--check', filePath], { stdio: 'inherit' });
      if (res.status !== 0) {
        process.exit(res.status ?? 1);
      }
    }
  }
}

console.log('[Syntax] Checking Node scripts & tests...');
checkNodeScriptsSyntax();

const astroCli = path.join(ROOT_DIR, 'node_modules', 'astro', 'bin', 'astro.mjs');
if (!fs.existsSync(astroCli)) {
  console.error('[FAILED] astro CLI not found in node_modules. Run npm install first.');
  process.exit(1);
}

console.log('[Syntax] Running astro check...');
const astroCheck = spawnSync(process.execPath, [astroCli, 'check'], { stdio: 'inherit' });
if (astroCheck.status !== 0) {
  console.error('[FAILED] astro check reported errors.');
  process.exit(astroCheck.status ?? 1);
}

console.log('[PASSED] Syntax and type checks passed.');
