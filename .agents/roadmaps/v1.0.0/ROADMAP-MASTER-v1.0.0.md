# نقشه راه جامع مدیر پلاس — نسخه ۱.۰.۰ (`ROADMAP-MASTER-v1.0.0.md`)

این سند مرجع مرکزی و تک‌منبع (Single Source of Truth) برای تمامی فازها و تسک‌های ساخت وب‌سایت **مدیر پلاس (`modir-plus.ir`)** در نسخه `1.0.0` است.

---

## ماتریس کلان فازها

| فاز | عنوان | شناسه تسک‌ها | وضعیت | فایل جزئیات |
| :--- | :--- | :--- | :--- | :--- |
| **فاز ۱** | اسکلت پروژه، `.agents/` ارتقایافته، سیستم طراحی دوفازی و لایه داده یکپارچه | `COR-101` تا `UIX-103` | `DONE` | [PHASE-1](ROADMAP-PHASE-1-FOUNDATION.md) |
| **فاز ۲** | صفحه اصلی اولیه (`/`)، ساختار داده‌ها، ماتریس انتخاب و اجزای پایه | `LND-201` تا `LND-204` | `DONE` | [PHASE-2](ROADMAP-PHASE-2-LANDING-HOME.md) |
| **فاز ۲.۵** | ارتقای پالت Porcelain/Obsidian، فونت دوگانه `Estedad+Vazirmatn`، هاب دوکارتی و پیش‌نمایش `pages.dev` | `UIX-205` تا `DEP-207` | `DONE` | [PHASE-2.5](ROADMAP-PHASE-2.5-DESIGN-POLISH-AND-PREVIEW.md) |
| **فاز ۳** | صفحات اختصاصی محصولات (`sida-plus` و `karnameh-plus`)، ماکاپ واقعی، گالری و باکس نصب | `PRD-301` تا `PRD-305` | `DONE` | [PHASE-3](ROADMAP-PHASE-3-PRODUCT-PAGES.md) |
| **فاز ۴** | صفحه راهنمای نصب و حریم خصوصی (`/guide`)، سئو، ممیزی نهایی و اتصال دامنه `modir-plus.ir` | `SUP-401` تا `SEO-404` | `PENDING` | [PHASE-4](ROADMAP-PHASE-4-GUIDE-SEO-DEPLOY.md) |

---

## قوانین اجرایی برای ایجنت ادامه‌دهنده

1. پیش از شروع هر فاز، [HANDOFF.md](../../../HANDOFF.md)، [AGENTS.md](../../AGENTS.md) و [GLOSSARY.md](../../GLOSSARY.md) را مطالعه کنید.
2. پس از پایان هر تسک یا فاز، حتماً دستورهای زیر را اجرا کنید:
   - `node scripts/verify-zero-emoji.mjs`
   - `node scripts/check-syntax.mjs`
   - `npm test`
   - `npm run build`
3. بر اساس استراتژی **`Direct-to-Main`** (`AGENTS.md` بخش ۲.۷)، پس از تایید سلامت و به‌روزرسانی وضعیت تسک در همین نقشه راه و `HANDOFF.md`، تغییرات را مستقیماً روی `main` کامیت و به `origin/main` پوش کنید.
4. هنگام تولید ماکاپ‌های اولیه UI برای **سیدا پلاس** و **کارنامه پلاس**، به شکل واقعی رابط کاربری این دو محصول وفادار بمانید و هرگونه داده نمایشی را عاری از اطلاعات واقعی دانش‌آموزان و مدارس نگه دارید.
