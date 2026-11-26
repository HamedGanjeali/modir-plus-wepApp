# Rule 03: React Architecture & Composition Patterns

برای کامپوننت‌های تعاملی React Islands در پروژه **مدیر پلاس**، به جای انباشتن ده‌ها پراپ بولی (`isCompact`, `hasBadge`, `showFooter`) از **کامپوننت‌های ترکیبی (Compound Components)** استفاده کنید.

---

## ۱. پرهیز از انفجار پراپ‌های بولی

```tsx
{/* اشتباه: کامپوننت یکپارچه با ده پراپ شرطی */}
<ProductDialog isOpen={true} showFooter={true} isCompact={false} hasCaption={true} />

{/* درست: ترکیب زیرکامپوننت‌های هدفمند */}
<Dialog>
  <Dialog.Header>
    <Dialog.Title>پیش‌نمایش برنامه هفتگی</Dialog.Title>
  </Dialog.Header>
  <Dialog.Body>...</Dialog.Body>
  <Dialog.Footer>...</Dialog.Footer>
</Dialog>
```

---

## ۲. قرارداد سه‌بخشی کانتکست (`state`, `actions`, `meta`)

هر کامپوننت ترکیبی پیچیده (مانند `ProductLightboxGallery` یا `WorkflowScenarioTabs`) در صورت نیاز به Context مشترک، باید کانتکست را به سه بخش روشن تفکیک کند:
- `state`: وضعیت خواندنی فعلی (`activeIndex`, `isOpen`)
- `actions`: توابع پایدار تغییر وضعیت (`openAt`, `close`, `next`, `prev`)
- `meta`: ارجاع‌ها و شناسه‌های دسترس‌پذیری (`triggerRef`, `dialogId`)

---

## ۳. استانداردهای React 19 و Astro Islands

1. نیازی به `forwardRef` در کامپوننت‌های جدید React 19 نیست؛ `ref` به‌صورت مستقیم در پراپ‌ها قابل دریافت است.
2. فقط کامپوننت‌هایی که واقعاً تعامل سمت کلاینت دارند با `client:load` یا `client:visible` در Astro هیدراته شوند (اولویت با `client:visible` برای بخش‌های پایین صفحه مانند آکاردئون و گالری تا بار JS اولیه حداقل باشد).
3. منطق ساده یا لیست‌های ثابت را در کامپوننت‌های `.astro` بدون JS اضافه نگه دارید.
