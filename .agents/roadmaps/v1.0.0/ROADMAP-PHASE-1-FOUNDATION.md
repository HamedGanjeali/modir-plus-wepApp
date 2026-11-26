# فاز ۱: زیرساخت، سیستم طراحی دوفازی و لایه داده یکپارچه

**هدف:** استقرار ساختار بهبودیافته `.agents/`، راه‌اندازی Astro + React Islands + Tailwind CSS v4 + TypeScript، تعریف لایه داده تایپ‌شده محصولات (`سیدا پلاس` و `کارنامه پلاس`)، توکن‌های تم روشن/تیره، هدر/فوتر و اسکریپت‌های کیفیت.

---

## فهرست تسک‌ها

- **`[TASK-COR-101]` [STATUS: DONE]** راه‌اندازی فایل‌های `.agents/` ارتقایافته (`AGENTS.md`، `ARCHITECTURE.md`، `GLOSSARY.md`، اسکیل‌های پاک‌سازی‌شده، `docs/decisions/` و نقشه‌های راه `v1.0.0`).
- **`[TASK-COR-102]` [STATUS: DONE]** پیکربندی پروژه پایه (`package.json`، `astro.config.mjs`، `tsconfig.json`، `src/styles/global.css` با Tailwind v4 و توکن‌های سه‌لایه روشن/تیره).
- **`[TASK-COR-103]` [STATUS: DONE]** طراحی مدل داده و داده‌های واقعی بدون قیمت عددی در `src/data/site.ts` و `src/data/products.ts` (شامل `@sidayar_license_bot`، `@Karnameh_plus_bot`، سیاست ۱۰ روز تست رایگان، پورتال‌های کارنامه پلاس، ماژول‌های سیدا پلاس و سرفصل‌های آموزش لقمه‌ای ایتا).
- **`[TASK-UIX-101]` [STATUS: DONE]** پیاده‌سازی `BaseLayout.astro` (RTL، فونت `Vazirmatn`، اسکریپت ضد-FOUC تغییر تم، View Transitions و متادیتای سئو).
- **`[TASK-UIX-102]` [STATUS: DONE]** پیاده‌سازی `Header.astro`، `Footer.astro` و جزیره `ThemeToggle.tsx` (دکمه دایره‌ای آیکون خورشید/ماه بدون متن اضافی و با `focus-visible`).
- **`[TASK-UIX-103]` [STATUS: DONE]** ایجاد مسیرهای اسکلت اولیه (`/`, `/products/sida-plus`, `/products/karnameh-plus`, `/guide`) + اسکریپت‌های راستی‌آزمایی (`verify-zero-emoji.mjs`، `check-syntax.mjs`) و تست‌های یکپارچگی داده (`tests/data-integrity.test.mjs`).

## معیار پذیرش فاز ۱
- `npm run build` خروجی استاتیک بدون خطا برای تمام مسیرها تولید کند.
- `node scripts/verify-zero-emoji.mjs` بدون خطا و با اسکن `.agents/` پاس شود.
- `npm test` همه تست‌های اعتبارسنجی مدل داده (نبود ۶۰ روزه قدیمی، نبود قیمت ثابت، یکتایی اسلاگ‌ها و لینک‌های بله) را پاس کند.
