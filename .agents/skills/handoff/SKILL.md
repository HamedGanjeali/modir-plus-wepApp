---
name: handoff
description: Maintain a verified project handoff so coding agents can resume work without repeated discovery, false assumptions, or scope violations.
---

# HANDOFF Skill — Modir Plus Edition

این اسکیل در آغاز و پایان هر جلسه کاری مهم، هنگام تحویل کار به ایجنت بعدی یا گزارش وضعیت مخزن اجرا می‌شود.

## اصول غیرقابل مذاکره
1. **تبعیت از استراتژی گیت (`AGENTS.md` بخش ۲.۷):** در پروژه مدیر پلاس حالت `Direct-to-Main` فعال است؛ پس از هر گام تاییدشده و پاس شدن چک‌ها، تغییرات به همراه `HANDOFF.md` روی `main` کامیت و به `origin/main` پوش می‌شوند.
2. **گیت امنیت قبل از کامیت (`security-zero-leak`):** هرگز هیچ سکرت، توکن، شماره شخصی یا داده واقعی دانش‌آموزان در `HANDOFF.md` یا فایل‌های گیت ثبت نشود.
3. **صداقت و اتکا به شواهد:** فقط فایل‌ها، دستورات، تست‌ها و خروجی‌هایی را ثبت کنید که واقعاً در همان نشست اجرا و مشاهده شده‌اند.
4. **پرهیز از دستورات مخرب:** استفاده از `git reset --hard`، `git clean` و `git push --force` اکیداً ممنوع است.
5. **خط قرمز صفر ایموجی:** متن `HANDOFF.md` باید کاملاً عاری از ایموجی باشد.

## روال آغاز کار (Start-of-Session)
1. خواندن `HANDOFF.md` در ریشه پروژه.
2. مطالعه `AGENTS.md`، `ARCHITECTURE.md`، `GLOSSARY.md` و نقشه راه فعال در `.agents/roadmaps/v1.0.0/`.
3. بررسی وضعیت محلی مخزن با دستورات فقط-خواندنی (`git status --short --branch` و `git log -5 --oneline`).
4. راستی‌آزمایی ادعاهای `HANDOFF.md` در برابر فایل‌های واقعی و ادامه از اولین تسک `PENDING` یا `IN_PROGRESS` بدون تکرار کارهای کامل‌شده.

## روال پایان کار (End-of-Session)
1. اجرای چک‌های کیفیت:
   - `node scripts/verify-zero-emoji.mjs`
   - `node scripts/check-syntax.mjs`
   - `npm test`
   - `npm run build`
2. به‌روزرسانی وضعیت تسک در نقشه راه مربوطه داخل `.agents/roadmaps/v1.0.0/`.
3. به‌روزرسانی `HANDOFF.md` با:
   - خلاصه وضعیت فعلی و هدف
   - ماتریس وضعیت فازها و تسک‌ها
   - فایل‌های تغییریافته در همین نشست و دلیل تغییر
   - نتایج دقیق دستورات و تست‌های اجراشده (`PASS` / `FAIL` / `NOT RUN`)
   - باگ‌ها، تصمیمات، ریسک‌ها و **دقیقاً گام بعدی آماده اجرا (Next Actionable Task)**
4. کامیت و پوش به `origin/main`.
