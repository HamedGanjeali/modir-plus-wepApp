# Rule 02: Vercel Engineering & UX Quality Standards

رابط کاربری زیبا بدون ثبات چیدمان، فوکوس کیبوردی و رفتار پیش‌بینی‌پذیر ناقص است. این دفترچه استانداردهای مهندسی کیفیت وب در پروژه **مدیر پلاس** را تعیین می‌کند.

---

## ۱. صفر پرش چیدمان (`CLS = 0`)

1. **اعلام قطعی ابعاد و نسبت تصویر (`aspect-ratio`):**
   ```tsx
   {/* اشتباه: تغییر ارتفاع پس از لود عکس */}
   <img src="/images/products/sida-hero.webp" className="w-full rounded-2xl" />

   {/* درست: رزرو قطعی فضا پیش از دریافت بایت‌های تصویر */}
   <img
     src="/images/products/sida-hero.webp"
     alt="پیش‌نمایش محیط کار سیدا پلاس"
     width={1280}
     height={800}
     className="aspect-[16/10] w-full rounded-2xl object-cover object-top"
   />
   ```
2. **اسکلتون‌های هم‌اندازه:** پیش‌نمایش موقت باید دقیقاً ارتفاع و گردی گوشه محتوای نهایی را داشته باشد.
3. **فونت با `font-display: swap`:** متن فارسی بلافاصله نمایش داده شود و هنگام بارگذاری `Vazirmatn` پرش عمودی شدید ایجاد نکند.

---

## ۲. وضعیت فوکوس کیبورد (`focus-visible`)

هرگز `outline-none` را بدون جایگزین پرکنتراست به کار نبرید:
```ts
export const FOCUS_RING_CLASSES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background';
```
- از `focus-visible` به جای `focus` استفاده کنید تا کلیک ماوس حلقه مزاحم باقی نگذارد.
- هدر چسبان (`sticky top-0`) نباید روی المان فوکوس‌شده هنگام اسکرول با `Tab` بیفتد؛ از `scroll-mt-24` روی بخش‌های دارای `#id` استفاده کنید.

---

## ۳. اعداد `tabular-nums`

در تمام شمارنده‌ها، مدت ویدیوها، شماره نسخه‌ها، جدول مقایسه و شاخص‌های آماری از کلاس `tabular-nums` استفاده کنید تا عرض رقم‌ها ثابت بماند و هنگام تغییر وضعیت یا انیمیشن لرزش افقی رخ ندهد.

---

## ۴. محافظت در برابر متن‌های طولانی (Defensive Layout)

برای جلوگیری از بیرون‌زدگی لینک‌ها، هشتگ‌ها یا آیدی‌های بله/ایتا در کارت‌های فلکس، همیشه `min-w-0` را روی والد فلکس بگذارید:
```tsx
<div className="flex min-w-0 items-center gap-3">
  <span className="shrink-0" aria-hidden="true">...</span>
  <div className="min-w-0 flex-1">
    <p className="truncate text-sm font-medium text-foreground">
      عنوان آموزش یا نام ماژول
    </p>
    <p className="line-clamp-2 text-xs text-muted-foreground">
      توضیح کوتاه سناریوی اجرایی برای معاون مدرسه
    </p>
  </div>
</div>
```

---

## ۵. مدیریت حالت در URL (`URL-First State`)

- صفحات محصولات باید آدرس یکتا و مستقیم (`/products/sida-plus` و `/products/karnameh-plus`) داشته باشند.
- فیلترها یا تب‌های اشتراک‌پذیر (مانند اسکرول مستقیم به بخش دانلود `#download` یا `#tutorials`) با لنگرهای استاندارد URL همگام باشند تا مدیر بتواند لینک مستقیم را به همکارش ارسال کند.
