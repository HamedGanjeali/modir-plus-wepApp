---
name: text-first-async-image-loading
description: >
  Mandatory web engineering standards for Text-First Immediate Rendering, Hero LCP priority,
  zero Cumulative Layout Shift (CLS = 0), optimized WebP/AVIF screenshots, and smooth Lightbox loading in Modir Plus.
---

# Text-First Rendering & Web Media Optimization — Modir Plus Edition

این استاندارد تضمین می‌کند که صفحات **مدیر پلاس** روی اینترنت موبایل و سیستم‌های اداری مدارس، بلافاصله متن و ساختار را بدون معطلی نمایش دهند و لود اسکرین‌شات‌ها یا ماکاپ‌های محصول هیچ پرش چیدمانی (`CLS > 0`) ایجاد نکند.

---

## ۱. قواعد بنیادین سرعت و ثبات چیدمان (`CLS = 0`)

1. **جداسازی کامل متن از باینری (Text-First HTML):**
   - متون کلیدی Hero، ارزش پیشنهادی، نام محصولات، دکمه‌های نصب و مراحل سناریو به‌صورت HTML استاتیک فوری رندر می‌شوند و هرگز منتظر دانلود تصاویر یا هیدراته‌شدن جاوااسکریپت نمی‌مانند.
2. **رزرو قطعی ابعاد کانتینر (Fixed Aspect Ratio):**
   - تمام اسکرین‌شات‌ها، کارت‌های گالری و پیش‌نمایش‌های UI باید دارای نسبت ابعاد قفل‌شده (مانند `aspect-[16/10]` یا `aspect-video`) به همراه صفات صریح `width` و `height` باشند.
   - استفاده از کانتینر تصویر با ارتفاع نامشخص (`height: auto` بدون `aspect-ratio`) ممنوع است.
3. **تست فونت بدون پرش (Zero FOIT):**
   - بارگذاری `Vazirmatn` همیشه با `font-display: swap` انجام شود تا متن بلافاصله خوانا باشد.

---

## ۲. اولویت‌بندی لود تصاویر در صفحات وب (`LCP` vs `Below-the-Fold`)

1. **تصاویر Hero (بالای خط تا / Above the Fold):**
   - برای اسکرین‌شات یا ویزوال اصلی بالای صفحه از `loading="eager"` و `fetchpriority="high"` و `decoding="sync"` استفاده کنید تا شاخص `LCP` زیر ۱.۵ ثانیه بماند.
2. **تصاویر گالری، کارت‌های سناریو و پایین صفحه:**
   - همیشه از `loading="lazy"` و `decoding="async"` استفاده کنید.
3. **فرمت‌های مدرن و بهینه:**
   - تصاویر واقعی محصولات پیش از قرار گرفتن در `public/images/products/` به `WebP` یا `AVIF` بهینه‌سازی شوند (حجم هدف هر اسکرین‌شات دسکتاپ زیر ۱۲۰ کیلوبایت) و در کنار پس‌زمینه Skeleton شیشه‌ای لود شوند.

---

## ۳. الگوی استاندارد کامپوننت تصویر وب (Astro / React)

```tsx
<div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-muted">
  <img
    src={item.imageSrc}
    alt={item.imageAlt}
    width={1280}
    height={800}
    loading={isHero ? 'eager' : 'lazy'}
    decoding={isHero ? 'sync' : 'async'}
    fetchPriority={isHero ? 'high' : 'auto'}
    className="h-full w-full object-cover object-top transition-opacity duration-300"
  />
</div>
```

---

## ۴. استاندارد گالری لایت‌باکس و پیش‌نمایش‌های تعاملی UI

1. **اسکلتون هم‌اندازه تا لحظه آماده شدن تصویر:** تا زمانی که عکس لود نشده یا در حالت پیش‌نمایش ماکاپ قرار دارد، کانتینر با رنگ سطح `--muted` و یک شیار تمیز نمایش داده شود (هرگز کادر سفید خالی یا آیکون شکسته نمایش ندهید).
2. **لایت‌باکس سبک با فوکوس‌تراپ:** هنگام باز شدن تصویر بزرگ در Lightbox، اسکرول پس‌زمینه قفل شود، کلیدهای `Escape` و جهت‌های راست/چپ (`ArrowRight` تصویر قبلی و `ArrowLeft` تصویر بعدی در چیدمان RTL) پشتیبانی شوند و پس از بستن، فوکوس دقیقاً به دکمه بازکننده برگردد.
3. **کنترل خطای لود (Graceful Fallback):** در صورت نبود فایل تصویر در `public/images/products/` یا خطای شبکه، کامپوننت به‌صورت خودکار کارت گرافیکی پیش‌نمایش واقعی رابط کاربری محصول (UI Preview Card) را نشان دهد تا صفحه هیچ‌گاه شکسته یا خالی دیده نشود.

---

## ۵. موارد اکیداً ممنوع

- بارگذاری تصاویر PNG سنگین چندمگابایتی بدون فشرده‌سازی در `public/images/`.
- استفاده از `loading="lazy"` روی تصویر اصلی بالای صفحه (Hero LCP).
- قرار دادن کد `base64` تصاویر سنگین داخل فایل‌های `src/data/*.ts`.
- تغییر ناگهانی ارتفاع کادر هنگام جابه‌جایی بین اسلایدهای گالری یا تب‌های سناریو.
