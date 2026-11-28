# نقشه راه نسخه ۱.۱.۰ مدیر پلاس (`ROADMAP-v1.1.0.md`)

**هدف:** تکمیل محتوای رسانه‌ای، لینک‌های رسمی استورهای مرورگر، ویدیوهای آموزشی لقمه‌ای ایتا، اسکرین‌شات‌های واقعی محصولات و اتصال دامنه اصلی `modir-plus.ir` پس از آماده شدن آن‌ها توسط مالک محصول.

> نکته: در نسخه `1.0.0`، تمامی بخش‌هایی که لینک یا فایل واقعی آن‌ها هنوز آماده نبود (ویدیوهای آموزشی، لینک استورها و تصاویر `WebP`) از خروجی قابل مشاهده کاربر پنهان شده‌اند تا هیچ دکمه یا لینک ناقصی در سایت نباشد. با تکمیل هر مورد در این نقشه راه، کامپوننت مربوطه به‌صورت خودکار آن بخش را نمایش خواهد داد.

---

## فهرست گام‌های یادآوری نسخه ۱.۱.۰

- **`[TASK-CNT-501]` [STATUS: IN_PROGRESS]** جایگزینی لینک‌های رسمی استور مرورگرها (`Chrome Web Store`، `Microsoft Edge Add-ons`، `Firefox Add-ons`):
  - لینک‌های رسمی **سیدا پلاس** در `Firefox Add-ons` و `Microsoft Edge Add-ons` و لینک **کارنامه پلاس** در `Firefox Add-ons` متصل شدند؛ دکمه‌های `Chrome` (برای هر دو محصول) و `Edge` (برای کارنامه پلاس) فعلاً با فلگ `isDisabled: true` غیرفعال (`به‌زودی`) تنظیم شده‌اند و پس از انتشار استورهای باقیمانده فعال می‌شوند.

- **`[TASK-CNT-502]` [STATUS: PENDING]** انتشار و اتصال ویدیوی راهنمای نصب و آموزش‌های لقمه‌ای در ایتا (`@modir_plus_ir`):
  - ویدیوی ۴۰ تا ۴۵ ثانیه‌ای نصب را در کانال `https://eitaa.com/modir_plus_ir` منتشر کرده، لینک مستقیم پست را در `installVideoUrl` قرار دهید و `installVideoIsPlaceholder: true` را بردارید.
  - لینک مستقیم پست هر یک از آموزش‌های کوتاه (`tutorials[*].postUrl`) را جایگزین کرده و `isPlaceholderUrl: true` را حذف کنید تا کارت‌های آموزش در `EitaaTutorialsSection.astro` به‌طور خودکار نمایش داده شوند.

- **`[TASK-CNT-503]` [STATUS: PENDING]** افزودن اسکرین‌شات‌های واقعی و بهینه (`WebP`) محصولات:
  - اسکرین‌شات‌های باکیفیت و کم‌حجم (`WebP` با حجم زیر ۱۲۰ کیلوبایت) بدون هیچ نام، کد ملی، شماره تماس یا تصویر واقعی دانش‌آموزان و مدارس (طبق استاندارد `security-zero-leak`) در پوشه `public/images/products/` قرار گیرند.
  - فیلد `imageSrc` هر مورد در `galleryItems` داخل `src/data/products.ts` تنظیم شود تا `ProductUiPreview.tsx` تصویر واقعی را جایگزین ماکاپ کند.

- **`[TASK-DEP-504]` [STATUS: PENDING]** اتصال دامنه نهایی `modir-plus.ir`، تایید ADRها و انتشار نسخه `1.1.0`:
  - تنظیم Nameserverهای Cloudflare در ایرنیک (`nic.ir`) یا پنل سایت واسط و افزودن `modir-plus.ir` در بخش Custom Domains پروژه `modir-plus` طبق `docs/DEPLOYMENT-GUIDE.md`.
  - تغییر وضعیت `ADR-001`، `ADR-002` و `ADR-003` در `docs/decisions/` از `PROPOSED` به `ACCEPTED`.
  - اجرای `npm run check && npm run build` و انتشار روی Cloudflare Pages با `npx wrangler pages deploy dist --project-name modir-plus --branch main`.
