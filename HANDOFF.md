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
  - `[TASK-LND-206]`: `DONE` (بازطراحی صفحه اصلی `/` به هاب دوکارتی کانونی، ماکاپ‌های پنجره‌ای لایه‌دار، نوار انتخاب ۵ ثانیه‌ای و بخش اعتماد/ایتا/FAQ فشرده + رفع باگ بک‌دراپ منوی موبایل)
  - `[TASK-DEP-207]`: `IN_PROGRESS`
- **فاز ۳ (صفحات اختصاصی محصولات، ماکاپ UI واقعی، لایت‌باکس، باکس نصب و آموزش‌های ایتا):** `[STATUS: PENDING]`
- **فاز ۴ (صفحه `/guide`، سئو/JSON-LD، ممیزی مرورگر و اتصال دامنه `modir-plus.ir`):** `[STATUS: PENDING]`

## ۴. فایل‌های فعال و تغییریافته در فاز ۲.۵ (TASK-LND-206)
- `src/data/site.ts`: فشرده‌سازی تیترها، افزودن `gatewayCards` برای کارت‌های دو محصول، خلاصه‌سازی ماتریس تصمیم‌گیری ۵ ثانیه‌ای و ۴ سوال متداول کلیدی صفحه اصلی.
- `src/components/landing/HeroProductGateway.astro`: بخش Hero یکپارچه با بافت شبکه‌ای ظریف و نمایش فوری دو کارت شاخص سیدا پلاس و کارنامه پلاس در کانون توجه.
- `src/components/landing/ProductMiniMock.astro`: ارتقای ماکاپ‌های مینیاتوری پنجره‌ای با سایه سطحی و خوانایی بدون برش در عرض ۳۷۵px.
- `src/components/landing/DecisionMatrixSection.astro`: نوار تصمیم‌گیری ۵ ثانیه‌ای فشرده و نوار محصولات آتی بدون طولانی کردن صفحه.
- `src/components/landing/TrustPrivacyHubSection.astro`: ردیف اعتماد ۴ ستونه فشرده، کارت هاب آموزشی ایتا و ۴ سوال متداول صفحه اصلی.
- `src/components/Header.astro`: انتقال `backdrop-blur-xl` به لایه پس‌زمینه تا `position: fixed` بک‌دراپ منوی موبایل نسبت به کل ویوپورت عمل کند.
- `src/pages/index.astro`: اتصال سه بخش جدید صفحه اصلی و حذف کامپوننت‌های منسوخ `HeroSection.astro` و `ProductShowcaseGrid.astro`.

## ۵. نتایج بررسی‌ها و بیلد (TASK-LND-206)
- `npm run verify`: اسکن ۵۴ فایل -> `PASS`
- `npm run check:syntax`: ۱۶ فایل، `0 errors, 0 warnings, 0 hints` -> `PASS`
- `npm test`: `5 passed, 0 failed` -> `PASS`
- `npm run build`: ساخت ۴ صفحه استاتیک در `dist/` -> `PASS`

## ۶. موارد در انتظار جایگزینی توسط مالک محصول (Placeholders)
- در `src/data/site.ts` و `src/data/products.ts`:
  - لینک نهایی کانال ایتا پس از تغییر نام به مدیر پلاس (`SITE_CONFIG.eitaaHub.url` با فلگ `isPlaceholderUrl: true`)
  - لینک مستقیم پست هر آموزش در ایتا (`tutorials[*].postUrl`)
  - لینک‌های نهایی استور Chrome / Edge / Firefox در `installTargets[*].installUrl`
  - تصاویر اسکرین‌شات واقعی `WebP` محصولات در `public/images/products/`.

## ۷. گام بعدی (Next Actionable Task)
- اجرای `[TASK-DEP-207]` از [ROADMAP-PHASE-2.5-DESIGN-POLISH-AND-PREVIEW.md](.agents/roadmaps/v1.0.0/ROADMAP-PHASE-2.5-DESIGN-POLISH-AND-PREVIEW.md): ایجاد پروژه `modir-plus` روی Cloudflare Pages و دیپلوی پیش‌نمایش روی `modir-plus.pages.dev`.
