# Rule 01: Modern Aesthetic Systems & Bento Architecture

طراحی رابط کاربری مدرن در **مدیر پلاس** بر پایه چهار اصل کنترل‌شده و بدون شلوغی پیاده می‌شود:
1. **گرید بنتو نامتقارن (Asymmetric Bento Grid)** برای نمایش ساختاریافته محصولات و ماژول‌ها
2. **شیشه‌گرایی لایه‌ای با حاشیه ظریف (`1px`)** و کنتراست خوانا در هر دو تم روشن و تیره
3. **تم دوفازی سازمانی** (سفید صدفی `#f8fafc` در تم روشن اداری و سرمه‌ای متالیک `#0a0f1d` در تم تیره)
4. **درخشش محیطی ملایم (Ambient Glow)** صرفاً با رنگ آبی رویال (`#2563eb`) و زمردی (`#059669`)

---

## ۱. الگوی گرید بنتو در چیدمان RTL

```tsx
export function ModirBentoGrid() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 p-4 sm:p-6 md:grid-cols-12 lg:p-8">
      {/* کارت اصلی برجسته (۸ ستون در دسکتاپ) */}
      <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-colors duration-300 hover:border-primary/40 md:col-span-8">
        <div className="pointer-events-none absolute top-0 end-0 -me-16 -mt-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          اتوماسیون مدرسه
        </span>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
          صرفه‌جویی چندساعته در کارهای سیدا و کارنامه
        </h3>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground text-pretty">
          تمامی فرآیندهای تکراری دفتر مدرسه در یک بستر یکپارچه و بدون خطا انجام می‌شوند.
        </p>
      </div>

      {/* کارت کناری آمار (۴ ستون) */}
      <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-primary/40 md:col-span-4">
        <div>
          <span className="text-xs font-semibold text-muted-foreground">دوره آزمایشی یکپارچه</span>
          <div className="mt-2 text-4xl font-bold tracking-tight text-foreground tabular-nums">
            ۱۰ روز رایگان
          </div>
        </div>
        <div className="mt-6 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          حفظ کامل داده‌ها پس از پایان دوره
        </div>
      </div>
    </div>
  );
}
```

---

## ۲. قواعد ضدطراحی کلیشه‌ای (Anti-AI Slop)

- استفاده از گرادیان‌های بنفش/صورتی تکراری ممنوع است؛ فقط از طیف مصوب آبی رویال، سرمه‌ای، زمردی و کهربایی استفاده کنید.
- کارت‌های هم‌اندازه تکراری بدون سلسله‌مراتب بصری نسازید؛ کارت محصول یا ماژول کلیدی باید وزن فضایی بیشتری بگیرد.
- حاشیه‌های کارت در تم تیره نباید از سایه غلیظ سیاه استفاده کنند؛ از `border-border` و تغییر ظریف کنتراست سطح بهره ببرید.
- همه کدهای رنگ از توکن‌های `global.css` (`bg-background`, `bg-card`, `text-foreground`, `border-border`) خوانده شوند.
