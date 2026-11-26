# Rule 05: Fluid Motion & Astro View Transitions

برای تجربه مدرن و سریع، به جای افزودن کتابخانه‌های سنگین انیمیشن (مثل GSAP یا Framer Motion) از **Astro ClientRouter / Native View Transitions** و ترنزیشن‌های GPU مرورگر استفاده می‌کنیم.

---

## ۱. View Transitions نرم بین کارت محصول و صفحه محصول

در Astro با استفاده از `<ClientRouter />` (یا View Transitions بومی CSS `@view-transition`) و نام‌گذاری اشتراکی `transition:name`:
- عنوان محصول و پیش‌نمایش تصویر از کارت صفحه اصلی به‌صورت نرم به هدر صفحه `/products/[slug]` منتقل می‌شوند.
- کل جاوااسکریپت مورد نیاز در حد چند کیلوبایت بومی Astro است.

---

## ۲. انیمیشن‌های مجاز و ممنوع (`60fps Compositor-Only`)

| ویژگی CSS | تاثیر روی Layout | وضعیت |
| :--- | :--- | :--- |
| `width` / `height` | بازمحاسبه کامل چیدمان و کندی | **ممنوع** |
| `top` / `start` / `margin` | Reflow صفحه | **ممنوع** |
| `transform: translate3d / scale` | اجرا روی GPU Compositor | **مجاز** |
| `opacity` | اجرا روی GPU Compositor | **مجاز** |

---

## ۳. احترام اجباری به `prefers-reduced-motion`

در `global.css` تمام انیمیشن‌ها و View Transitions در صورت فعال بودن تنظیم کاهش حرکت سیستم‌عامل کاربر متوقف می‌شوند:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
