export interface NavLink {
  label: string;
  href: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export interface UpcomingToolTeaser {
  title: string;
  targetRole: string;
}

export interface DecisionTrack {
  id: 'sida-plus' | 'karnameh-plus' | 'combined';
  tone: 'primary' | 'emerald' | 'combined';
  badge: string;
  title: string;
  recommendedTool: string;
  summary: string;
  needs: string[];
  roles: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export interface DecisionTaskRow {
  task: string;
  toolName: string;
  toolHref: string;
  executionMode: string;
  tone: 'primary' | 'emerald';
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
  upcomingTools: {
    badge: 'محصولات در دست توسعه (به‌زودی)',
    title: 'ابزارهای آینده سبد مدیر پلاس در حال آماده‌سازی است',
    description:
      'بر اساس نیازهای اعلام‌شده مدیران و معاونین در ربات‌های پشتیبانی، ابزارهای جدید با همان استاندارد سرعت، سادگی و دوره تست ۱۰ روزه به خانواده مدیر پلاس اضافه می‌شوند.',
    items: [
      { title: 'دستیار صورت‌جلسات و مصوبات شورا', targetRole: 'ویژه مدیر و دبیر شورا' },
      { title: 'گزارش‌ساز دوره‌ای پیشرفت تحصیلی', targetRole: 'ویژه معاون آموزشی' },
      { title: 'بایگانی هوشمند فرم‌های اداری مدرسه', targetRole: 'ویژه دفتر مدرسه' },
    ] satisfies UpcomingToolTeaser[],
  },
  decisionMatrix: {
    eyebrow: 'ماتریس تصمیم‌گیری ۳۰ ثانیه‌ای',
    title: 'کدام ابزار مشکل امروز شما را حل می‌کند؟',
    subtitle:
      'مرز بین سیدا پلاس و کارنامه پلاس شفاف است؛ بر اساس نیاز امروز دفتر مدرسه یکی از ابزارها یا ترکیب هر دو را انتخاب کنید.',
    tracks: [
      {
        id: 'sida-plus',
        tone: 'primary',
        badge: 'مسیر اول • اتوماسیون سیدا و برنامه',
        title: 'کارهای صفحه سیدا، دفتر آمار، برنامه هفتگی و شاد',
        recommendedTool: 'سیدا پلاس',
        summary:
          'مناسب زمانی که بیشترین زمان شما در سامانه سیدا، شماره‌گذاری دفاتر، چیدمان برنامه هفتگی یا مدیریت گروه‌های پیام‌رسان شاد می‌گذرد.',
        needs: [
          'رفع قفل جدول‌ها، تاریخ کارنامه و گواهی فارغ‌التحصیلان روی صفحه سیدا',
          'صفحه‌بندی و چاپ پلمپ دفتر آمار و دفتر امتحانات در قطع A4 افقی',
          'چیدمان برنامه هفتگی با ۳ سناریوی بدون تداخل دبیر و کلاس',
          'اسکن، عضویت گروهی ایمن و بانک متمرکز لینک دعوت در شاد',
        ],
        roles: 'مدیر مدرسه، معاون اجرایی، معاون آموزشی، رابط فناوری',
        primaryCtaLabel: 'بررسی و دانلود سیدا پلاس',
        primaryCtaHref: '/products/sida-plus',
      },
      {
        id: 'karnameh-plus',
        tone: 'emerald',
        badge: 'مسیر دوم • نمره، انضباط و کارنامه',
        title: 'جمع‌آوری نمره از دبیران، انضباط ۶ زنگی و چاپ کارنامه',
        recommendedTool: 'کارنامه پلاس',
        summary:
          'مناسب مدارس متوسطه اول که جمع‌آوری نمره مستمر و پایانی از دبیران، ثبت غیبت زنگ‌به‌زنگ و کارنامه آنلاین اولیا را دنبال می‌کنند.',
        needs: [
          'ثبت سریع نمره توسط دبیران در پورتال وب با موبایل یا لپ‌تاپ',
          'ثبت حضورغیاب ۶ زنگی و محاسبه خودکار نمره انضباط در پورتال معاون',
          'کارنامه آنلاین اولیا با نمودار مقایسه نمره دانش‌آموز، کلاس و پایه',
          'چاپ کارنامه‌های رسمی A4، A5 و A6 همراه با محاسبه معدل وزنی',
        ],
        roles: 'مدیر متوسطه اول، معاون انضباطی و آموزشی، دبیران و اولیا',
        primaryCtaLabel: 'بررسی و دانلود کارنامه پلاس',
        primaryCtaHref: '/products/karnameh-plus',
      },
      {
        id: 'combined',
        tone: 'combined',
        badge: 'مسیر سوم • مدیریت کامل سال تحصیلی',
        title: 'هماهنگی کامل مدرسه از شهریور تا پایان امتحانات خرداد',
        recommendedTool: 'استفاده ترکیبی از هر دو',
        summary:
          'برای مدارسی که آغاز سال و دفاتر پلمپ را با سیدا پلاس می‌بندند و در طول سال تحصیلی نمره، غیبت و کارنامه را با کارنامه پلاس پیش می‌برند.',
        needs: [
          'شهریور: چیدمان برنامه هفتگی و سازمان‌دهی گروه‌های شاد با سیدا پلاس',
          'طول سال: دریافت نمره ماهانه دبیران و غیبت ۶ زنگی با کارنامه پلاس',
          'بدون ورود تکراری: استخراج یک‌باره لیست کلاس‌ها و دانش‌آموزان از سیدا',
          'پایان نوبت: صدور کارنامه اولیا و تکمیل دفاتر امتحانات و آمار در سیدا',
        ],
        roles: 'تمام کادر اداری و آموزشی مدرسه',
        primaryCtaLabel: 'شروع با سیدا پلاس',
        primaryCtaHref: '/products/sida-plus',
        secondaryCtaLabel: 'مشاهده کارنامه پلاس',
        secondaryCtaHref: '/products/karnameh-plus',
      },
    ] satisfies DecisionTrack[],
    quickTaskRows: [
      {
        task: 'شماره‌گذاری فارسی و چاپ ۲۰۰ صفحه دفتر آمار برای پلمپ اداره',
        toolName: 'سیدا پلاس',
        toolHref: '/products/sida-plus',
        executionMode: 'افزونه مرورگر روی صفحه سیدا',
        tone: 'primary',
      },
      {
        task: 'چیدمان برنامه هفتگی بدون تداخل و خروجی اکسل ابلاغ دبیران',
        toolName: 'سیدا پلاس',
        toolHref: '/products/sida-plus',
        executionMode: 'بخش تمام‌صفحه افزونه',
        tone: 'primary',
      },
      {
        task: 'عضویت همکار جدید در ده‌ها گروه شاد و استخراج لینک دعوت',
        toolName: 'سیدا پلاس',
        toolHref: '/products/sida-plus',
        executionMode: 'ماژول مدیریت شاد در افزونه',
        tone: 'primary',
      },
      {
        task: 'ثبت نمره مستمر و پایانی توسط دبیران با گوشی و تایید در داشبورد',
        toolName: 'کارنامه پلاس',
        toolHref: '/products/karnameh-plus',
        executionMode: 'پورتال وب دبیران + افزونه مدیر',
        tone: 'emerald',
      },
      {
        task: 'ثبت غیبت ۶ زنگی با موبایل از راهرو و صدور کارتکس انضباط',
        toolName: 'کارنامه پلاس',
        toolHref: '/products/karnameh-plus',
        executionMode: 'پورتال وب معاونین',
        tone: 'emerald',
      },
      {
        task: 'مشاهده کارنامه آنلاین اولیا با نمودار مقایسه و چاپ رسمی A4/A5',
        toolName: 'کارنامه پلاس',
        toolHref: '/products/karnameh-plus',
        executionMode: 'پورتال وب اولیا + موتور چاپ مدیر',
        tone: 'emerald',
      },
    ] satisfies DecisionTaskRow[],
  },
  navLinks: [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'سیدا پلاس', href: '/products/sida-plus' },
    { label: 'کارنامه پلاس', href: '/products/karnameh-plus' },
    { label: 'راهنمای نصب و حریم خصوصی', href: '/guide' },
  ] satisfies NavLink[],
} as const;
