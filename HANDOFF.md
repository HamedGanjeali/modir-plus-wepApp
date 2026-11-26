# Handoff State: مدیر پلاس (Modir Plus — modir-plus.ir)

## ۱. مرور کلی و معماری پروژه
- **هدف:** وب‌سایت معرفی، مستندسازی، راهنمای نصب و نمایش سناریوهای واقعی مجموعه محصولات مدیریتی مدارس تحت برند چتری **مدیر پلاس (`modir-plus.ir`)**.
- **مخاطبان:** مدیران، معاونین اجرایی، معاونین آموزشی و معاونین انضباطی/پرورشی مدارس ایران.
- **پشته فنی:** Astro 7 (`output: 'static'`) + React 19 Islands + Tailwind CSS v4 + TypeScript + فونت خودمیزبان `@fontsource-variable/vazirmatn`.
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
- **پالت دوفازی (`AGENTS.md` بند ۲.۳):** تم روشن اداری (`#f8fafc` / `#ffffff`) به‌عنوان پیش‌فرض + تم تیره سرمه‌ای/OLED (`#0a0f1d` / `#111827`) با رنگ اصلی آبی رویال (`#2563eb`) و تاکیدی زمردی (`#059669`) و کهربایی (`#d97706`).
- **گردش‌کار گیت (`AGENTS.md` بند ۲.۷):** **`Direct-to-Main`** (کامیت و پوش مستقیم هر گام تاییدشده روی `main`).
- **وضعیت ADRها:** [ADR-001](docs/decisions/ADR-001-tech-stack-and-product-routes.md) و [ADR-002](docs/decisions/ADR-002-trial-first-and-eitaa-hub.md) با وضعیت `PROPOSED` ثبت شده‌اند و در انتظار تایید رسمی وضعیت به `ACCEPTED` هستند.

## ۳. ماتریس وضعیت فازها (`v1.0.0`)
- **فاز ۱ (زیرساخت، `.agents/` ارتقایافته، سیستم طراحی و لایه داده):** `[STATUS: DONE]` (`TASK-COR-101` تا `TASK-UIX-103`)
- **فاز ۲ (صفحه اصلی `/`، گرید محصولات و ماتریس تصمیم‌گیری):** `[STATUS: IN_PROGRESS]`
  - `[TASK-LND-201]`: `DONE` (بخش Hero صفحه اصلی و کارت وضعیت اکوسیستم مدیر پلاس)
  - `[TASK-LND-202]`: `DONE` (گرید بنتوی ویترین محصولات `ProductShowcaseGrid`، پیش‌نمایش مینیاتوری UI هر دو محصول و کارت محصولات آتی)
  - `[TASK-LND-203]`: `DONE` (ماتریس تصمیم‌گیری ۳۰ ثانیه‌ای و جدول تطبیق سریع نیازهای مدرسه با سیدا پلاس، کارنامه پلاس یا ترکیب هر دو)
  - `[TASK-LND-204]`: `PENDING`
- **فاز ۳ (صفحات اختصاصی محصولات، ماکاپ UI واقعی، لایت‌باکس، باکس نصب و آموزش‌های ایتا):** `[STATUS: PENDING]`
- **فاز ۴ (صفحه `/guide`، سئو/JSON-LD، ممیزی مرورگر و استقرار Cloudflare Pages):** `[STATUS: PENDING]`

## ۴. فایل‌های فعال و تغییریافته در نشست جاری
- `src/data/site.ts`: افزودن تیتر و آمار Hero، داده‌های کارت محصولات آتی (`upcomingTools`) و داده‌های ماتریس تصمیم‌گیری (`decisionMatrix`).
- `src/components/landing/HeroSection.astro`: پیاده‌سازی بخش Hero صفحه اصلی با کارت خلاصه وضعیت ابزارهای مدیر پلاس.
- `src/components/landing/ProductMiniMock.astro`: پیش‌نمایش مینیاتوری `aspect-[16/10]` وفادار به رابط کاربری سیدا پلاس و کارنامه پلاس با داده‌های کاملاً ساختگی (`CLS = 0`).
- `src/components/landing/ProductShowcaseGrid.astro`: گرید بنتوی معرفی محصولات فعال با `transition:name` و کارت متوازن محصولات آتی.
- `src/components/landing/DecisionMatrixSection.astro`: پیاده‌سازی ماتریس تصمیم‌گیری سه‌مسیره (سیدا پلاس، کارنامه پلاس، استفاده ترکیبی) و جدول تطبیق سریع ۶ سناریوی مدرسه.
- `src/pages/index.astro`: اتصال `HeroSection`، `ProductShowcaseGrid` و `DecisionMatrixSection`.
- `.agents/roadmaps/v1.0.0/ROADMAP-MASTER-v1.0.0.md` و `ROADMAP-PHASE-2-LANDING-HOME.md`: به‌روزرسانی وضعیت `TASK-LND-201` تا `TASK-LND-203` به `DONE`.

## ۵. نتایج بررسی‌ها و بیلد (TASK-LND-203)
- اجرای کامل پس از ویرایش کد:
  - `npm run verify` (`node scripts/verify-zero-emoji.mjs`): اسکن ۵۱ فایل -> `PASS`
  - `npm run check:syntax` (`node scripts/check-syntax.mjs`): بررسی سینتکس و `astro check` (۱۵ فایل) -> `PASS` (`0 errors, 0 warnings, 0 hints`)
  - `npm test` (`node --test tests/*.test.mjs`): `4 passed, 0 failed, 0 skipped` -> `PASS`
  - `npm run build` (`astro build`): ساخت ۴ صفحه استاتیک در `dist/` -> `PASS`

## ۶. موارد در انتظار جایگزینی توسط مالک محصول (Placeholders)
- در `src/data/site.ts` و `src/data/products.ts`:
  - لینک نهایی کانال ایتا پس از تغییر نام به مدیر پلاس (`SITE_CONFIG.eitaaHub.url` با فلگ `isPlaceholderUrl: true`)
  - لینک مستقیم پست هر آموزش در ایتا (`tutorials[*].postUrl`)
  - لینک‌های نهایی استور Chrome / Edge / Firefox در `installTargets[*].installUrl`
  - تصاویر اسکرین‌شات واقعی `WebP` محصولات در `public/images/products/` (در فاز ۳ ابتدا با پیش‌نمایش UI وفادار به رابط واقعی دو افزونه رندر می‌شوند تا بعداً با تنظیم `imageSrc` جایگزین شوند).

## ۷. گام بعدی (Next Actionable Task)
- ادامه **فاز ۲** از [ROADMAP-PHASE-2-LANDING-HOME.md](.agents/roadmaps/v1.0.0/ROADMAP-PHASE-2-LANDING-HOME.md):
  اجرای `[TASK-LND-204]` (بخش سیاست شفافیت، حریم خصوصی مدارس، دعوت به هاب ایتا و آکاردئون سوالات متداول `FaqAccordion.tsx`).
