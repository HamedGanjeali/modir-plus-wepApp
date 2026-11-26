# راهنمای نگهداری و استقرار مدیر پلاس (`modir-plus.ir`)

این سند روش نگهداری داده‌ها، بررسی کیفیت، انتشار روی Cloudflare Pages (`modir-plus.pages.dev`) و اتصال دامنه اصلی `modir-plus.ir` را توضیح می‌دهد.

---

## ۱. دستورات بررسی کیفیت و بیلد

پیش از هر انتشار، دستورات زیر را در ریشه پروژه اجرا کنید:

```bash
npm run check
npm run build
```

- `npm run verify` (`node scripts/verify-zero-emoji.mjs`): اسکن کل مخزن برای اطمینان از نبود ایموجی.
- `npm run check:syntax` (`node scripts/check-syntax.mjs`): بررسی سینتکس اسکریپت‌ها و `astro check`.
- `npm test`: اجرای تست‌های یکپارچگی داده‌های محصول در `tests/data-integrity.test.mjs`.
- `npm run build`: تولید خروجی استاتیک نهایی داخل پوشه `dist/`.

---

## ۲. انتشار (Deploy) روی Cloudflare Pages

پروژه `modir-plus` روی Cloudflare Pages ساخته شده و با دستور زیر به‌روزرسانی می‌شود:

```bash
npx wrangler pages deploy dist --project-name modir-plus --branch main
```

- آدرس پیش‌فرض پیش‌نمایش آنلاین: `https://modir-plus.pages.dev/`
- فایل `public/_headers` هدرهای امنیتی (`X-Frame-Options`، `X-Content-Type-Options`، `Referrer-Policy`) و کش `immutable` فایل‌های `_astro/*` را تنظیم می‌کند.

---

## ۳. اتصال دامنه اصلی `modir-plus.ir`

1. در داشبورد Cloudflare (همان اکانتی که پروژه `modir-plus` در آن ایجاد شده) از بخش **Add a domain** دامنه `modir-plus.ir` را روی پلن Free ثبت کنید.
2. دو آدرس Nameserver داده‌شده توسط Cloudflare را در پنل سایت واسط یا پنل ایرنیک (`nic.ir`) جایگزین نیم‌سرورهای قبلی کنید و منتظر فعال شدن وضعیت `Active` بمانید.
3. در داشبورد Cloudflare به مسیر **Workers & Pages -> `modir-plus` -> Custom domains -> Set up a custom domain** بروید و `modir-plus.ir` (و در صورت نیاز `www.modir-plus.ir`) را اضافه کنید.
4. در بخش **SSL/TLS** حالت **Full (strict)** و گزینه **Always Use HTTPS** را فعال بگذارید.

---

## ۴. چک‌لیست به‌روزرسانی لینک‌ها و تصاویر واقعی

پس از آماده شدن لینک‌های نهایی، موارد دارای علامت `isPlaceholderUrl: true` را به‌روزرسانی کرده و دوباره `npm run check && npm run build` و دستور دیپلوی بخش ۲ را اجرا کنید:

- `src/data/site.ts`: آدرس نهایی کانال ایتای مدیر پلاس (`SITE_CONFIG.eitaaHub.url`)
- `src/data/products.ts`:
  - لینک استورهای Chrome، Edge و Firefox در `installTargets[*].installUrl`
  - لینک مستقیم پست هر آموزش در ایتا در `tutorials[*].postUrl`
  - قرار دادن تصاویر بهینه `WebP` در `public/images/products/` و تنظیم `imageSrc` در `galleryItems` (بدون نمایش نام، کد ملی یا اطلاعات واقعی دانش‌آموزان و مدارس).
