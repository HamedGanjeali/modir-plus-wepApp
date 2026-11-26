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

export interface TrustPillar {
  id: 'privacy' | 'safety' | 'browsers' | 'trial';
  title: string;
  description: string;
}

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  brandName: 'مدیر پلاس',
  brandNameEn: 'Modir Plus',
  domain: 'modir-plus.ir',
  siteUrl: 'https://modir-plus.ir',
  tagline: 'دستیار هوشمند مدیران و معاونین مدارس ایران',
  heroHeadline: 'مدیریت یکپارچه سیدا، برنامه هفتگی و کارنامه مدارس',
  heroDescription:
    'محصول مورد نیاز دفتر مدرسه را انتخاب کنید؛ هر دو ابزار با ۱۰ روز تست رایگان، آموزش‌های کوتاه در ایتا و پشتیبانی در بله همراهند.',
  gatewayCards: {
    'sida-plus': {
      roleBadge: 'ویژه مدیر، معاون اجرایی و آموزشی',
      conciseBullets: [
        'عملیات یک‌کلیکه داخل سیدا (دفتر آمار، گواهی‌ها و تاریخ کارنامه)',
        'چیدمان تمام‌صفحه برنامه هفتگی با ۳ سناریوی بدون تداخل',
        'اسکن، عضویت گروهی و بانک لینک دعوت بیش از ۳۵۰ گروه شاد',
      ],
    },
    'karnameh-plus': {
      roleBadge: 'متوسطه اول • مدیر، معاون، دبیر و اولیا',
      conciseBullets: [
        'داشبورد آفلاین مدیر با استخراج خودکار از سیدا و چاپ A4/A5/A6',
        'پورتال وب دبیران برای ثبت نمره با گوشی + حضورغیاب ۶ زنگی معاون',
        'کارنامه آنلاین اولیا با نمودار مقایسه سه‌گانه و کارتکس انضباط',
      ],
    },
  },
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
    eyebrow: 'انتخاب سریع در ۵ ثانیه',
    title: 'کدام ابزار برای کار امروز شما مناسب‌تر است؟',
    subtitle:
      'مرز بین سیدا پلاس و کارنامه پلاس روشن است؛ بسته به کار امروز دفتر مدرسه انتخاب کنید.',
    tracks: [
      {
        id: 'sida-plus',
        tone: 'primary',
        badge: 'مسیر اول • اتوماسیون سیدا و برنامه',
        title: 'کارهای صفحه سیدا، برنامه هفتگی و شاد',
        recommendedTool: 'سیدا پلاس',
        summary: 'برای سرعت‌بخشی به عملیات داخل سیدا، دفاتر پلمپ و گروه‌های شاد.',
        needs: [
          'شماره‌گذاری و چاپ دفتر آمار و امتحانات بدون بهم‌ریختگی',
          'چیدمان برنامه هفتگی بدون تداخل با خروجی اکسل',
          'عضویت گروهی و بانک لینک دعوت در پیام‌رسان شاد',
        ],
        roles: 'مدیر، معاون اجرایی، معاون آموزشی',
        primaryCtaLabel: 'مشاهده سیدا پلاس',
        primaryCtaHref: '/products/sida-plus',
      },
      {
        id: 'karnameh-plus',
        tone: 'emerald',
        badge: 'مسیر دوم • نمره، انضباط و کارنامه',
        title: 'جمع‌آوری نمره، غیبت ۶ زنگی و کارنامه اولیا',
        recommendedTool: 'کارنامه پلاس',
        summary: 'ویژه متوسطه اول برای اتصال مدیر، دبیران، معاونین و اولیا.',
        needs: [
          'ثبت نمره توسط دبیران در پورتال وب بدون نصب افزونه',
          'ثبت غیبت ۶ زنگی و انضباط با موبایل در پورتال معاون',
          'کارنامه آنلاین اولیا با نمودار مقایسه و چاپ رسمی A4/A5',
        ],
        roles: 'مدیر، معاون انضباطی، دبیران و اولیا',
        primaryCtaLabel: 'مشاهده کارنامه پلاس',
        primaryCtaHref: '/products/karnameh-plus',
      },
      {
        id: 'combined',
        tone: 'combined',
        badge: 'مسیر سوم • کل سال تحصیلی',
        title: 'هماهنگی کامل مدرسه از شهریور تا خرداد',
        recommendedTool: 'استفاده ترکیبی از هر دو',
        summary: 'اتوماسیون آغاز و پایان سال در سیدا در کنار نمره و انضباط طول سال.',
        needs: [
          'شهریور و خرداد: برنامه هفتگی، شاد و دفاتر پلمپ با سیدا پلاس',
          'طول سال: نمره ماهانه دبیران و غیبت ۶ زنگی با کارنامه پلاس',
          'استخراج یک‌باره لیست دانش‌آموزان بدون تایپ مجدد',
        ],
        roles: 'کل کادر اداری و آموزشی مدرسه',
        primaryCtaLabel: 'سیدا پلاس',
        primaryCtaHref: '/products/sida-plus',
        secondaryCtaLabel: 'کارنامه پلاس',
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
  trustSection: {
    eyebrow: 'شفافیت، امنیت و آموزش',
    title: 'اصول اعتماد و حریم خصوصی اطلاعات مدارس',
    subtitle:
      'تمامی ابزارهای مدیر پلاس با اولویت حفاظت از اطلاعات دانش‌آموزان، سازگاری با سیستم‌های اداری مدارس و آموزش سریع برای کادر مدرسه طراحی شده‌اند.',
    pillars: [
      {
        id: 'privacy',
        title: 'نگهداری امن داده‌های دانش‌آموزان',
        description:
          'اطلاعات دانش‌آموزان و نمرات در بستر امن مدرسه مدیریت می‌شود و کارنامه پلاس حتی در زمان قطع اینترنت دفتر مدرسه به کار خود ادامه می‌دهد.',
      },
      {
        id: 'safety',
        title: 'اجرای ایمن روی صفحه باز سیدا',
        description:
          'افزونه سیدا پلاس بدون جابه‌جایی ناخواسته تب‌ها فقط در صفحه‌ای که خودتان در سیدا باز کرده‌اید اجرا می‌شود تا نشست کاری پایدار بماند.',
      },
      {
        id: 'browsers',
        title: 'سازگاری با کروم، اج و فایرفاکس',
        description:
          'روی رایانه‌های ویندوزی دفتر مدرسه با مرورگرهای Chrome، Edge و Firefox نصب می‌شود و بخش دبیران، معاونین و اولیا از موبایل هم در دسترس است.',
      },
      {
        id: 'trial',
        title: '۱۰ روز تست رایگان و تعرفه شفاف در بله',
        description:
          'پیش از خرید اشتراک، هر محصول را ۱۰ روز بدون نیاز به کارت بانکی آزمایش کنید؛ پس از پایان دوره داده‌ها حفظ می‌شوند و تعرفه به‌روز در ربات بله نمایش داده می‌شود.',
      },
    ] satisfies TrustPillar[],
    tutorialTags: [
      { hashtag: '#سیدا_پلاس', topic: '#آموزش_دفتر_آمار', duration: '۰۰:۵۵', productSlug: 'sida-plus' },
      { hashtag: '#سیدا_پلاس', topic: '#آموزش_برنامه_هفتگی', duration: '۰۱:۰۰', productSlug: 'sida-plus' },
      { hashtag: '#کارنامه_پلاس', topic: '#آموزش_ثبت_نمره', duration: '۰۰:۵۵', productSlug: 'karnameh-plus' },
      { hashtag: '#کارنامه_پلاس', topic: '#آموزش_حضور_غیاب', duration: '۰۰:۵۰', productSlug: 'karnameh-plus' },
    ],
  },
  homeFaqs: [
    {
      question: 'تفاوت اصلی سیدا پلاس و کارنامه پلاس چیست؟',
      answer:
        'سیدا پلاس برای سرعت‌بخشی به کارهای داخل سامانه سیدا (چاپ دفتر آمار و امتحانات، گواهی‌ها)، چیدمان برنامه هفتگی و مدیریت گروه‌های شاد است. کارنامه پلاس ویژه مدارس متوسطه اول برای جمع‌آوری نمره از دبیران، حضورغیاب ۶ زنگی معاون، کارنامه آنلاین اولیا و چاپ کارنامه است.',
    },
    {
      question: 'آیا دبیران، معاونین یا اولیا هم باید افزونه مرورگر نصب کنند؟',
      answer:
        'خیر؛ افزونه‌ها فقط روی مرورگر سیستم مدیر یا معاون در دفتر مدرسه نصب می‌شوند. در کارنامه پلاس، دبیران، معاونین و اولیا بدون نصب هیچ افزونه‌ای و با گوشی یا لپ‌تاپ وارد پورتال وب اختصاصی خود می‌شوند.',
    },
    {
      question: 'پس از پایان دوره ۱۰ روزه تست رایگان چه اتفاقی برای اطلاعات می‌افتد؟',
      answer:
        'هیچ اطلاعاتی حذف نمی‌شود. تمام کلاس‌ها، تنظیمات و داده‌های ثبت‌شده محفوظ می‌ماند و پس از فعال‌سازی اشتراک از طریق ربات بله هر محصول، ادامه کار بدون وقفه برقرار می‌شود.',
    },
    {
      question: 'چرا مبلغ اشتراک در سایت نوشته نشده و به ربات بله ارجاع داده می‌شود؟',
      answer:
        'برای جلوگیری از نمایش نرخ‌های قدیمی در طول سال تحصیلی، استعلام تعرفه به‌روز، تخفیف‌ها و مدیریت دستگاه‌های متصل مستقیماً در ربات رسمی بله هر محصول انجام می‌شود.',
    },
  ] satisfies HomeFaqItem[],
  navLinks: [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'سیدا پلاس', href: '/products/sida-plus' },
    { label: 'کارنامه پلاس', href: '/products/karnameh-plus' },
    { label: 'راهنمای نصب و حریم خصوصی', href: '/guide' },
  ] satisfies NavLink[],
} as const;
