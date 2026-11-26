---
name: my-ui-ux-skill
description: Unified Web UI/UX design intelligence and engineering system for Modir Plus (Astro + React + Tailwind v4 + RTL Persian). Combines Dribbble-level visual craft (Bento grids, Glassmorphism, Light/Navy-OLED dual theme, View Transitions) with Vercel zero-CLS standards, WCAG 2.2 accessibility, and Iranian EdTech conversion UX.
---

# My UI/UX Skill — Modir Plus Web Edition

این اسکیل سیستم یکپارچه طراحی و مهندسی رابط کاربری برای پروژه **مدیر پلاس (`modir-plus.ir`)** است (پشته: **Astro + React Islands + Tailwind CSS v4 + TypeScript**).

## ساختار مجموعه قوانین

```text
my-ui-ux-skill/
├── SKILL.md
├── README.md
└── web/
    ├── SKILL.md
    └── rules/
        ├── 01-dribbble-aesthetic-systems.md     (گریدهای بنتو، شیشه‌گرایی، دارک‌مود سرمه‌ای/OLED)
        ├── 02-vercel-engineering-ux.md          (Zero CLS، اعداد تبولار، focus-visible)
        ├── 03-react-composition-patterns.md     (کامپوننت‌های ترکیبی، پرهیز از boolean prop hell)
        ├── 04-tailwind-shadcn-mastery.md        (توکن‌های سه‌لایه Tailwind v4 و تم دوفازی)
        ├── 05-fluid-motion-transitions.md       (Astro View Transitions و انیمیشن‌های GPU)
        ├── 06-accessible-forms-feedback.md      (فوکوس‌تراپ، کنترلرهای دسترس‌پذیر، آکاردئون)
        ├── 07-typography-microcopy.md           (تایپوگرافی خوانا و ادبیات کاربرمحور فارسی)
        ├── 08-rtl-persian-typography.md         (ویژگی‌های منطقی CSS، وزیرمتن، آیکون‌های RTL)
        └── 09-product-showcase-conversion.md    (یوزکیس مدیر/معاون، باکس نصب هوشمند، هاب ایتا)
```

## پروتکل اجرای اجباری پیش از تغییر UI

1. **پایبندی به پالت مصوب `AGENTS.md` بخش ۲.۳:**
   - تم روشن پیش‌فرض (`#f8fafc` و کارت `#ffffff`) + تم تیره سرمه‌ای/OLED (`#0a0f1d` و کارت `#111827`) با رنگ اصلی آبی رویال (`#2563eb`) و تاکیدی سبز زمردی (`#059669`) و کهربایی (`#d97706`).
2. **مسیرهای تخصصی وب:** تمام قوانین داخل [web/SKILL.md](web/SKILL.md) و ۹ دفترچه قاعده `web/rules/` مرجع الزامی هستند.
3. **خط قرمز صفر ایموجی:** در تمام کدها، برچسب‌ها، تیترها و کامپوننت‌ها فقط آیکون‌های برداری SVG (مانند `lucide-react` یا SVG خطی تمیز) استفاده شوند.
4. **چک پایانی:** پیش از تایید هر تغییر UI، عرض‌های ۳۷۵px (موبایل)، ۷۶۸px (تبلت) و ۱۴۴۰px (دسکتاپ)، هر دو تم روشن/تیره و ناوبری کیبورد بررسی شوند.
