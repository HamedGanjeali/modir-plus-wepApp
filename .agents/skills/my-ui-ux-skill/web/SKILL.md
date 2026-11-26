---
name: web-ui-ux-master
description: Production-grade Web UI/UX architecture for Modir Plus combining Dribbble visual craft with Vercel zero-CLS engineering, WCAG 2.2 accessibility, Persian RTL precision, and B2G/EdTech product showcase patterns.
---

# Web UI/UX Master Skill — Modir Plus Edition

ماموریت: ساخت رابط کاربری مدرن، باوقار و اداری-تحلیلی برای مدیران و معاونین مدارس که در عین زیبایی تراز اول (Bento Grids، لایه‌های شیشه‌ای ظریف، تم دوفازی روشن/سرمه‌ای تیره)، بدون پرش چیدمان (`CLS = 0`)، کاملاً RTL-بومی و فوق‌العاده سریع باشد.

## سه ستون مهندسی UI/UX مدیر پلاس

| ۱. زیبایی‌شناسی کنترل‌شده | ۲. مهندسی و سرعت وب | ۳. کاربری واقعی مدیر/معاون (RTL & UX) |
| :--- | :--- | :--- |
| گرید بنتو نامتقارن برای نمایش ماژول‌ها | خروجی استاتیک Astro با React Islands | استاندارد کامل `dir="rtl"` و Logical CSS |
| شیشه‌گرایی ظریف با حاشیه ۱ پیکسلی | `CLS = 0` و اولویت `LCP` برای Hero | سناریوهای واقعی دفتر مدرسه (قبل/بعد) |
| تم روشن اداری + تم تیره سرمه‌ای/OLED | `View Transitions` نرم بین صفحات | باکس نصب هوشمند مرورگر + لینک موبایل |
| مبارزه با کارت‌های تکراری AI Slop | فوکوس رینگ دقیق (`focus-visible`) | دسترسی فوری به هاب ایتا و ربات بله |

## فهرست دفترچه‌های قانون (`rules/`)

1. `01-dribbble-aesthetic-systems.md` — گرید بنتو، لایه‌بندی شیشه‌ای، پالت روشن و تیره، دوری از طرح‌های کلیشه‌ای.
2. `02-vercel-engineering-ux.md` — ثبات چیدمان (`CLS < 0.1`)، اعداد `tabular-nums`، کوتاه‌سازی امن متن (`min-w-0`) و مدیریت حالت در URL.
3. `03-react-composition-patterns.md` — الگوی Compound Components و پرهیز از انفجار پراپ‌های بولی.
4. `04-tailwind-shadcn-mastery.md` — معماری توکن سه‌لایه در Tailwind CSS v4 (`@theme` و متغیرهای معنایی).
5. `05-fluid-motion-transitions.md` — Astro View Transitions، انیمیشن‌های GPU-only و احترام به `prefers-reduced-motion`.
6. `06-accessible-forms-feedback.md` — لیبل‌های پایدار، فوکوس‌تراپ در لایت‌باکس، دکمه‌های بدون پرش عرض.
7. `07-typography-microcopy.md` — مقیاس تایپوگرافی، `text-wrap: balance/pretty` و لحن مستقیم فارسی (حذف کلمات شعاری و کلیشه‌ای).
8. `08-rtl-persian-typography.md` — ویژگی‌های منطقی CSS، فونت `Vazirmatn`، ارقام فارسی و جهت‌دهی آیکون‌ها.
9. `09-product-showcase-conversion.md` — الگوی صفحه محصول سیدا پلاس و کارنامه پلاس، پیش‌نمایش UI واقعی، باکس نصب و فهرست آموزش‌های ایتا.

## پنج فرمان طلایی هنگام پیاده‌سازی

1. هیچ صفحه یا کارتی شبیه قالب‌های تکراری SaaS با گرادیان بنفش نباشد؛ از پالت رسمی آبی رویال/سرمه‌ای/زمردی استفاده کنید.
2. هرگز `outline-none` را بدون جایگزین پرکنتراست `:focus-visible` نگذارید.
3. هرگز ویژگی‌های Layout-triggering (`width`, `height`, `top`, `margin`) را انیمیت نکنید؛ فقط `transform` و `opacity`.
4. هرگز قابلیت‌های بومی مرورگر (Copy/Paste، کلیک میانی برای تب جدید، دکمه Back) را مختل نکنید.
5. تمام اسکرین‌شات‌ها و ماکاپ‌ها باید ابعاد رزروشده و داده‌های کاملاً ساختگی بدون اطلاعات واقعی دانش‌آموزان داشته باشند.
