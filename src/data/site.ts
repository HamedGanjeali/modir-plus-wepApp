export interface NavLink {
  label: string;
  href: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export const SITE_CONFIG = {
  brandName: 'مدیر پلاس',
  brandNameEn: 'Modir Plus',
  domain: 'modir-plus.ir',
  siteUrl: 'https://modir-plus.ir',
  tagline: 'دستیار هوشمند مدیران و معاونین مدارس ایران',
  heroHeadline: 'حذف کارهای تکراری سیدا، برنامه هفتگی و کارنامه در دفتر مدرسه',
  heroDescription:
    'مجموعه ابزارهای تخصصی برای انجام سریع عملیات سامانه سیدا، چیدمان بدون تداخل برنامه هفتگی، مدیریت گروه‌های شاد، جمع‌آوری نمره دبیران و صدور کارنامه آنلاین اولیا.',
  heroMetrics: [
    { value: '۲ محصول', label: 'سیدا پلاس و کارنامه پلاس فعال' },
    { value: '۳ مرورگر', label: 'سازگار با کروم، اج و فایرفاکس' },
    { value: '۱۰ روز', label: 'تست رایگان بدون کارت بانکی' },
  ] satisfies HeroMetric[],
  trialPolicy: {
    days: 10,
    badgeLabel: '۱۰ روز تست رایگان یکپارچه — بدون نیاز به کارت بانکی',
    summary:
      'هر دو محصول دارای ۱۰ روز استفاده آزمایشی رایگان بدون نیاز به کارت بانکی هستند. پس از پایان دوره آزمایشی، اطلاعات شما حفظ می‌شود و تعرفه به‌روز از طریق ربات بله هر محصول قابل استعلام است.',
  },
  eitaaHub: {
    name: 'کانال رسمی مدیر پلاس در ایتا',
    handle: '@modir_plus',
    /**
     * TODO: لینک واقعی کانال ایتا پس از تغییر نام و عکس کانال جایگزین شود.
     */
    url: 'https://eitaa.com/modir_plus',
    isPlaceholderUrl: true,
    description:
      'تمامی ویدیوهای آموزشی کوتاه ۳۰ تا ۶۰ ثانیه‌ای، راهنمای نصب و اطلاع‌رسانی آپدیت‌ها در یک کانال یکپارچه با تفکیک هشتگ محصولات منتشر می‌شوند.',
  },
  navLinks: [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'سیدا پلاس', href: '/products/sida-plus' },
    { label: 'کارنامه پلاس', href: '/products/karnameh-plus' },
    { label: 'راهنمای نصب و حریم خصوصی', href: '/guide' },
  ] satisfies NavLink[],
} as const;
