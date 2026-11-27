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
- **هاب آموزشی ایتا (`ADR-002`):** کانال رسمی مدیر پلاس در ایتا (`@modir_plus_ir` -> `https://eitaa.com/modir_plus_ir`) فعال و در سایت متصل شده است؛ کارت‌های ویدیویی جزئی تا زمان انتشار ویدیوها طبق نقشه راه `v1.1.0` مخفی شده‌اند.
- **پالت دوفازی (`AGENTS.md` بند ۲.۳):** تم روشن Porcelain (`#f6f8fc` / `#ffffff`) به‌عنوان پیش‌فرض + تم تیره Obsidian Cobalt-Navy (`#070b14` / `#0f172a`) با رنگ اصلی آبی کُبالت (`#1d4ed8` / `#3b82f6`) و تاکیدی زمردی (`#047857` / `#10b981`) و کهربایی (`#b45309` / `#f59e0b`).
- **گردش‌کار گیت (`AGENTS.md` بند ۲.۷):** **`Direct-to-Main`** (کامیت و پوش مستقیم هر گام تاییدشده روی `main`).
- **وضعیت ADRها:** [ADR-001](docs/decisions/ADR-001-tech-stack-and-product-routes.md)، [ADR-002](docs/decisions/ADR-002-trial-first-and-eitaa-hub.md) و [ADR-003](docs/decisions/ADR-003-obsidian-porcelain-dual-font-and-focused-hub.md) با وضعیت `PROPOSED` ثبت شده‌اند و در انتظار تایید رسمی وضعیت به `ACCEPTED` هستند.

## ۳. ماتریس وضعیت فازها (`v1.0.0`)
- **فاز ۱ (زیرساخت، `.agents/` ارتقایافته، سیستم طراحی و لایه داده):** `[STATUS: DONE]` (`TASK-COR-101` تا `TASK-UIX-103`)
- **فاز ۲ (صفحه اصلی اولیه `/`، داده‌های پایه و اجزا):** `[STATUS: DONE]` (`TASK-LND-201` تا `TASK-LND-204`)
- **فاز ۲.۵ (ارتقای بصری Porcelain/Obsidian، فونت دوگانه، هاب دوکارتی کانونی و پیش‌نمایش Cloudflare):** `[STATUS: DONE]` (`TASK-UIX-205` تا `TASK-DEP-207`)
  - `[TASK-UIX-205]`: `DONE` (پالت Porcelain Light / Obsidian Cobalt-Navy، نصب `@fontsource-variable/estedad`، بافت شبکه‌ای، اصلاح منوی موبایل و هم‌ترازی ADR-003 و نقشه‌ها)
  - `[TASK-LND-206]`: `DONE` (بازطراحی صفحه اصلی `/` به هاب دوکارتی کانونی، ماکاپ‌های پنجره‌ای لایه‌دار، نوار انتخاب ۵ ثانیه‌ای و بخش اعتماد/ایتا/FAQ فشرده + رفع باگ بک‌دراپ منوی موبایل)
  - `[TASK-DEP-207]`: `DONE` (ایجاد پروژه `modir-plus` روی Cloudflare Pages، افزودن `public/_headers` و دیپلوی زنده روی `https://modir-plus.pages.dev`)
- **فاز ۳ (صفحات اختصاصی محصولات، ماکاپ UI واقعی، لایت‌باکس، باکس نصب و آموزش‌های ایتا):** `[STATUS: DONE]` (`TASK-PRD-301` تا `TASK-PRD-305`)
  - `[TASK-PRD-301]`: `DONE` (پیاده‌سازی `ProductHero.astro` و الگوی صفحه `/products/[slug]` با بردکرامب، `transition:name` هماهنگ برای عنوان و پیش‌نمایش، نقش‌های هدف و دکمه‌های نصب/تست بله)
  - `[TASK-PRD-302]`: `DONE` (بخش مقایسه قبل/بعد `BeforeAfterSection.astro` و تب‌های تعاملی سناریوی کاری `WorkflowScenarioTabs.tsx` شامل ۳ ماژول سیدا پلاس و ۴ ماژول کارنامه پلاس)
  - `[TASK-PRD-303]`: `DONE` (کامپوننت `ProductUiPreview.tsx` با ۸ پریست UI واقعی و پشتیبانی خودکار از `imageSrc` + گالری لایت‌باکس `ProductLightboxGallery.tsx` با Focus Trap، Escape و ناوبری RTL)
  - `[TASK-PRD-304]`: `DONE` (کادر نصب هوشمند مرورگر `BrowserInstallBox.tsx` با تشخیص خودکار Chrome/Edge/Firefox/موبایل، دکمه کپی لینک با عرض ثابت، درگاه‌های وب کارنامه پلاس و باکس ۱۰ روز تست رایگان در بله)
  - `[TASK-PRD-305]`: `DONE` (بخش آموزش‌های لقمه‌ای ایتا `EitaaTutorialsSection.astro`، اتصال `FaqAccordion.tsx` به سوالات اختصاصی محصول و آپدیت پیش‌نمایش زنده روی `https://modir-plus.pages.dev/`)
- **فاز ۴ (صفحه `/guide`، سئو/JSON-LD، ممیزی مرورگر و اتصال دامنه `modir-plus.ir`):** `[STATUS: DONE]` (`TASK-SUP-401` تا `TASK-SEO-404`)
  - `[TASK-SUP-401]`: `DONE` (پیاده‌سازی صفحه یکپارچه راهنمای نصب در Chrome/Edge/Firefox به‌صورت استور و فایل `.zip`، اصول حریم خصوصی مدارس، کارت‌های پشتیبانی ایتا/بله و آکاردئون FAQ)
  - `[TASK-SEO-402]`: `DONE` (تولید `sitemap.xml`، تنظیم `robots.txt`، اسکیماهای `JSON-LD` نوع `Organization` / `SoftwareApplication` / `FAQPage` و تصاویر OpenGraph اختصاصی در `public/og/`)
  - `[TASK-SEO-403]`: `DONE` (ممیزی کامل مرورگر روی تمام مسیرها در ۳۷۵، ۷۶۸ و ۱۴۴۰ پیکسل، تم روشن و تیره، تست کیبورد `FaqAccordion` و Focus Trap + ناوبری RTL در `ProductLightboxGallery`)
  - `[TASK-SEO-404]`: `DONE` (نگارش `docs/DEPLOYMENT-GUIDE.md`، تکمیل بیلد و چک‌های نسخه `1.0.0` روی `main`؛ دیپلوی نهایی فاز ۴ روی `modir-plus.pages.dev` به دلیل تایم‌اوت اتصال اینترنت به API کلادفلر در انتظار اجرای مجدد دستور `wrangler pages deploy` است)

## ۴. فایل‌های فعال و تغییریافته در بهینه‌سازی سرعت (گام ۱ تا گام ۳)
- **گام ۱ (`6f8fcc0`):** `src/components/ThemeToggle.astro` و `src/components/FaqAccordion.astro` جایگزین نسخه‌های React شدند تا باندل `215 KB` React از `/` و `/guide/` حذف شود.
- **گام ۲ (`9b29d89`):** `astro.config.mjs` (`inlineStylesheets: 'always'`) و جایگزینی `ClientRouter` با `@view-transition` بومی CSS (حذف فایل مسدودکننده CSS و اسکریپت روتر).
- **گام ۳:** `public/_headers` با سیاست کش `stale-while-revalidate` برای صفحات HTML و `immutable` برای `/_astro/*`، همراه با ممیزی زنده دامنه اصلی.
- **دامنه متصل‌شده:** `https://modir-plus.ir/` (و پیش‌نمایش `https://modir-plus.pages.dev/`).

## ۵. نتایج بررسی‌ها، بیلد و ممیزی جامع (TASK-SEO-403)
- `npm run verify`: اسکن ۶۲ فایل -> `PASS`
- `npm run check:syntax`: ۲۴ فایل، `0 errors, 0 warnings, 0 hints` -> `PASS`
- `npm test`: `5 passed, 0 failed` -> `PASS`
- **ممیزی مرورگر روی بیلد نهایی (`/`، `/products/sida-plus/`، `/products/karnameh-plus/`، `/guide/`، `/sitemap.xml`، `/robots.txt`):**
  - تمامی مسیرها با کد `200`، `0` خطای کنسول و `0` درخواست شبکه ناموفق لود شدند؛ وجود `canonical`، `og:image` و `JSON-LD` در همه صفحات تایید شد.
  - نبود اسکرول افقی در عرض‌های `1440px`، `768px` و `375px` در هر دو تم روشن و تیره تایید شد.
  - تست کیبوردی `FaqAccordion` (`Tab`, `Enter`, `Space`) و `ProductLightboxGallery` (`Tab` Focus Trap، `ArrowLeft`/`ArrowRight` RTL، `Escape` و بازگشت فوکوس به دکمه مبدا) بدون خطا پاس شد.

## ۵. نتایج بررسی‌ها، بیلد و ممیزی زنده (پایان فاز ۳)
- `npm run verify`: اسکن ۶۱ فایل -> `PASS`
- `npm run check:syntax`: ۲۳ فایل، `0 errors, 0 warnings, 0 hints` -> `PASS`
- `npm test`: `5 passed, 0 failed` -> `PASS`
- `npm run build`: ساخت ۴ صفحه استاتیک در `dist/` -> `PASS`
- **ممیزی زنده روی `https://modir-plus.pages.dev/products/sida-plus/` و `/products/karnameh-plus/`:**
  - دریافت کد `200` بدون خطای کنسول و بدون اسکرول افقی در `1440px` و `375px`.
  - تایید عملکرد تب‌های سناریو (`WorkflowScenarioTabs`)، لایت‌باکس (`ProductLightboxGallery` با `ArrowLeft` و `Escape`)، تب مرورگرها و لینک‌های پورتال وب کارنامه پلاس، و آکاردئون `FaqAccordion`.

## ۵. نتایج بررسی‌ها، بیلد و ممیزی زنده (پایان فاز ۲.۵)
- `npm run verify`: اسکن ۵۴ فایل -> `PASS`
- `npm run check:syntax`: ۱۶ فایل، `0 errors, 0 warnings, 0 hints` -> `PASS`
- `npm test`: `5 passed, 0 failed` -> `PASS`
- `npm run build`: ساخت ۴ صفحه استاتیک در `dist/` -> `PASS`
- **ممیزی مرورگر روی `https://modir-plus.pages.dev/`:**
  - دریافت کد `200` در مسیرهای `/`، `/products/sida-plus/`، `/products/karnameh-plus/` و `/guide/` بدون خطای کنسول و با لود فونت‌های `Estedad Variable` و `Vazirmatn Variable`.
  - تایید تغییر تم روشن/تیره، نبود اسکرول افقی در `1440px` و `375px` و بسته‌شدن صحیح منوی موبایل با کلیک روی پس‌زمینه.

## ۶. موارد برنامه‌ریزی‌شده برای نسخه ۱.۱.۰ (Roadmap v1.1.0)
- تمام موارد در انتظار محتوا/لینک واقعی در [ROADMAP-v1.1.0.md](.agents/roadmaps/v1.1.0/ROADMAP-v1.1.0.md) ثبت شده‌اند و در نسخه `1.0.0` از رابط کاربری مخفی شده‌اند تا هیچ لینک یا دکمه ناتمامی نمایش داده نشود:
  - `TASK-CNT-501`: لینک‌های استور Chrome / Edge / Firefox (`installTargets[*].installUrl`)
  - `TASK-CNT-502`: ویدیوی راهنمای نصب و پست‌های آموزش لقمه‌ای ایتا (`installVideoUrl` و `tutorials[*].postUrl`)
  - `TASK-CNT-503`: اسکرین‌شات‌های واقعی `WebP` در `public/images/products/` و تنظیم `imageSrc`
  - `TASK-DEP-504`: اتصال دامنه نهایی `modir-plus.ir` و تایید نهایی ADRها.

## ۷. گام بعدی (Next Actionable Task)
- **نسخه `1.0.0` آماده انتشار است** (فقط با محتوای واقعی و آماده فعلی).
- برای ادامه در نسخه بعدی، [ROADMAP-v1.1.0.md](.agents/roadmaps/v1.1.0/ROADMAP-v1.1.0.md) را با `TASK-CNT-501` دنبال کنید.
