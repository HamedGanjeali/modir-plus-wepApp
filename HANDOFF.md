# Handoff State: مدیر پلاس (Modir Plus — modir-plus.ir)

## ۱. مرور کلی و معماری پروژه
- **هدف:** وب‌سایت معرفی، مستندسازی، راهنمای نصب و نمایش سناریوهای واقعی مجموعه محصولات مدیریتی مدارس تحت برند چتری **مدیر پلاس (`modir-plus.ir`)**.
- **مخاطبان:** مدیران، معاونین اجرایی، معاونین آموزشی و معاونین انضباطی/پرورشی مدارس ایران.
- **پشته فنی:** Astro 7 (`output: 'static'`) + React 19 Islands + Tailwind CSS v4 + TypeScript + فونت‌های خودمیزبان `@fontsource-variable/estedad` (تیترها) و `@fontsource-variable/vazirmatn` (متن و ارقام).
- **مسیرهای کلیدی:**
  - `/`: صفحه اصلی معرفی برند، گرید محصولات و ماتریس انتخاب ابزار (`src/pages/index.astro`)
  - `/products/sida-plus`: صفحه اختصاصی **سیدا پلاس (نسخه ۲.۵.۰)** (`src/pages/products/[slug].astro`)
  - `/products/karnameh-plus`: صفحه اختصاصی **کارنامه پلاس (نسخه ۱.۰.۰)** (`src/pages/products/[slug].astro`)
  - `/guide`: صفحه راهنمای نصب مرورگرها و سیاست حفظ حریم خصوصی مدارس (`src/pages/guide.astro`)

## ۲. قوانین و تصمیمات مصوب (Constraints & Decisions)
- **سیاست صفر ایموجی (`AGENTS.md` بند ۲.۱):** بدون استثنا در کل مخزن (شامل `.agents/skills/` و `HANDOFF.md`). تمام آیکون‌ها فقط SVG وکتور هستند.
- **مدل Trial-First بدون قیمت عددی ثابت (`ADR-002`):** هر دو محصول دارای **۱۰ روز تست رایگان یکپارچه** هستند (بدون ذکر هدیه ۶۰ روزه قدیمی و بدون درج قیمت عددی ثابت در سایت). استعلام تعرفه و فعال‌سازی اشتراک در ربات‌های بله:
  - سیدا پلاس: `@sidayar_license_bot` (`https://ble.ir/sidayar_license_bot`)
  - کارنامه پلاس: `@Karnameh_plus_bot` (`https://ble.ir/Karnameh_plus_bot`)
- **هاب آموزشی ایتا (`ADR-002`):** تغییر کاربری کانال دارای عضو به برند واحد **مدیر پلاس** و تفکیک ویدیوها با هشتگ محصولات (`#سیدا_پلاس` و `#کارنامه_پلاس`) همراه با دیپ‌لینک موضوعی از صفحات سایت.
- **پالت دوفازی (`AGENTS.md` بند ۲.۳):** تم روشن Porcelain (`#f6f8fc` / `#ffffff`) به‌عنوان پیش‌فرض + تم تیره Obsidian Cobalt-Navy (`#070b14` / `#0f172a`) با رنگ اصلی آبی کُبالت (`#1d4ed8` / `#3b82f6`) و تاکیدی زمردی (`#047857` / `#10b981`) و کهربایی (`#b45309` / `#f59e0b`).
- **گردش‌کار گیت (`AGENTS.md` بند ۲.۷):** **`Direct-to-Main`** (کامیت و پوش مستقیم هر گام تاییدشده روی `main`).
- **وضعیت ADRها:** [ADR-001](docs/decisions/ADR-001-tech-stack-and-product-routes.md)، [ADR-002](docs/decisions/ADR-002-trial-first-and-eitaa-hub.md) و [ADR-003](docs/decisions/ADR-003-obsidian-porcelain-dual-font-and-focused-hub.md) با وضعیت `PROPOSED` ثبت شده‌اند و در انتظار تایید رسمی وضعیت به `ACCEPTED` هستند.

## ۳. ماتریس وضعیت فازها (`v1.0.0`)
- **فاز ۱ (زیرساخت، `.agents/` ارتقایافته، سیستم طراحی و لایه داده):** `[STATUS: DONE]` (`TASK-COR-101` تا `TASK-UIX-103`)
- **فاز ۲ (صفحه اصلی اولیه `/`، داده‌های پایه و اجزا):** `[STATUS: DONE]` (`TASK-LND-201` تا `TASK-LND-204`)
- **فاز ۲.۵ (ارتقای بصری Porcelain/Obsidian، فونت دوگانه، هاب دوکارتی کانونی و پیش‌نمایش Cloudflare):** `[STATUS: IN_PROGRESS]`
  - `[TASK-UIX-205]`: `DONE` (پالت Porcelain Light / Obsidian Cobalt-Navy، نصب `@fontsource-variable/estedad`، بافت شبکه‌ای، اصلاح منوی موبایل و هم‌ترازی ADR-003 و نقشه‌ها)
  - `[TASK-LND-206]`: `IN_PROGRESS`
  - `[TASK-DEP-207]`: `PENDING`
- **فاز ۳ (صفحات اختصاصی محصولات، ماکاپ UI واقعی، لایت‌باکس، باکس نصب و آموزش‌های ایتا):** `[STATUS: PENDING]`
- **فاز ۴ (صفحه `/guide`، سئو/JSON-LD، ممیزی مرورگر و اتصال دامنه `modir-plus.ir`):** `[STATUS: PENDING]`

## ۴. فایل‌های فعال و تغییریافته در فاز ۲.۵ (TASK-UIX-205)
- `package.json` و `package-lock.json`: افزودن `@fontsource-variable/estedad` (`OFL-1.1`).
- `src/styles/global.css`: ارتقای توکن‌های تم به Porcelain Light و Obsidian Cobalt-Navy و تعریف `--font-display` (`Estedad Variable`)، `--font-sans` (`Vazirmatn Variable`)، `.bg-dot-grid` و `.card-surface`.
- `src/layouts/BaseLayout.astro`: ایمپورت فونت خودمیزبان `Estedad Variable`.
- `src/components/Header.astro`: ناوبری کپسولی دسکتاپ و پنل تمام‌عرض بدون همپوشانی برای منوی موبایل `375px` همراه با بسته‌شدن با `Escape` یا کلیک پس‌زمینه.
- `docs/decisions/ADR-003-obsidian-porcelain-dual-font-and-focused-hub.md` و `docs/DECISIONS.md`: ثبت تصمیم معماری ارتقای بصری و پیش‌نمایش آنلاین.
- `.agents/AGENTS.md`، `.agents/skills/my-ui-ux-skill/web/rules/04-tailwind-shadcn-mastery.md` و `08-rtl-persian-typography.md` و نقشه‌های راه `v1.0.0`: هم‌ترازی استانداردها و اضافه شدن فاز ۲.۵ (شامل گام دیپلوی پیش‌نمایش `pages.dev`).

## ۵. نتایج بررسی‌ها و بیلد (TASK-UIX-205)
- `npm run verify`: اسکن ۵۵ فایل -> `PASS`
- `npm run check:syntax`: ۱۷ فایل، `0 errors, 0 warnings, 0 hints` -> `PASS`
- `npm test`: `5 passed, 0 failed` -> `PASS`
- `npm run build`: ساخت ۴ صفحه استاتیک در `dist/` -> `PASS`

## ۶. موارد در انتظار جایگزینی توسط مالک محصول (Placeholders)
- در `src/data/site.ts` و `src/data/products.ts`:
  - لینک نهایی کانال ایتا پس از تغییر نام به مدیر پلاس (`SITE_CONFIG.eitaaHub.url` با فلگ `isPlaceholderUrl: true`)
  - لینک مستقیم پست هر آموزش در ایتا (`tutorials[*].postUrl`)
  - لینک‌های نهایی استور Chrome / Edge / Firefox در `installTargets[*].installUrl`
  - تصاویر اسکرین‌شات واقعی `WebP` محصولات در `public/images/products/`.

## ۷. گام بعدی (Next Actionable Task)
- اجرای `[TASK-LND-206]` از [ROADMAP-PHASE-2.5-DESIGN-POLISH-AND-PREVIEW.md](.agents/roadmaps/v1.0.0/ROADMAP-PHASE-2.5-DESIGN-POLISH-AND-PREVIEW.md): بازطراحی صفحه اصلی به هاب دوکارتی کانونی و نوار تصمیم‌گیری ۵ ثانیه‌ای.
