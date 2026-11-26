import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const productsSource = fs.readFileSync(path.join(ROOT, 'src/data/products.ts'), 'utf8');
const siteSource = fs.readFileSync(path.join(ROOT, 'src/data/site.ts'), 'utf8');

test('brand identity is Modir Plus (modir-plus.ir) and not legacy names', () => {
  assert.match(siteSource, /مدیر پلاس/);
  assert.match(siteSource, /modir-plus\.ir/);
  assert.doesNotMatch(siteSource, /کارنامه‌یار|کارنامه یار|medu-plus-wepApp/i);
  assert.doesNotMatch(productsSource, /کارنامه‌یار|کارنامه یار/);
});

test('both core products and their real Bale bots are registered', () => {
  assert.match(productsSource, /slug:\s*'sida-plus'/);
  assert.match(productsSource, /slug:\s*'karnameh-plus'/);
  assert.match(productsSource, /@sidayar_license_bot/);
  assert.match(productsSource, /@Karnameh_plus_bot/);
  assert.match(productsSource, /https:\/\/ble\.ir\/sidayar_license_bot/);
  assert.match(productsSource, /https:\/\/ble\.ir\/Karnameh_plus_bot/);
});

test('unified 10-day free trial policy with zero legacy 60-day claims or hardcoded numeric prices', () => {
  assert.match(siteSource, /days:\s*10/);
  assert.match(siteSource, /۱۰ روز/);
  assert.doesNotMatch(productsSource + siteSource, /۶۰ روز|60 روز|تومان|ریال/i);
});

test('karnameh-plus includes real portal links on medu-plus.workers.dev', () => {
  assert.match(productsSource, /https:\/\/karnameh\.medu-plus\.workers\.dev\/parent\//);
  assert.match(productsSource, /https:\/\/karnameh\.medu-plus\.workers\.dev\/teacher\//);
  assert.match(productsSource, /https:\/\/karnameh\.medu-plus\.workers\.dev\/deputy\//);
});

test('home landing decision matrix, trust pillars and FAQs are configured in site.ts', () => {
  assert.match(siteSource, /decisionMatrix:/);
  assert.match(siteSource, /upcomingTools:/);
  assert.match(siteSource, /trustSection:/);
  assert.match(siteSource, /homeFaqs:/);
  assert.doesNotMatch(siteSource, /خیلی راحت|به‌سادگی|تضمینی ۱۰۰٪|فوق‌العاده|معجزه‌آسا|بی‌رقیب/);
});
