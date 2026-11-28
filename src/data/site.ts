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

export interface BrowserGuideItem {
  id: 'chrome' | 'edge' | 'firefox';
  browserName: string;
  recommendedFor: string;
  storeSteps: string[];
  zipSteps: string[];
}

export interface PrivacyGuarantee {
  title: string;
  description: string;
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
        'پورتال وب دبیران برای ثبت نمره با گوشی + حضورغیاب ۵ زنگی معاون',
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
    handle: '@modir_plus_ir',
    url: 'https://eitaa.com/modir_plus_ir',
    isPlaceholderUrl: false,
    description:
      'اطلاع‌رسانی آپدیت‌ها، راهنمای کار با ابزارها و آموزش‌های کاربردی برای مدیران و معاونین مدارس در کانال رسمی ایتای مدیر پلاس منتشر می‌شوند.',
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
        title: 'جمع‌آوری نمره، غیبت ۵ زنگی و کارنامه اولیا',
        recommendedTool: 'کارنامه پلاس',
        summary: 'ویژه متوسطه اول برای اتصال مدیر، دبیران، معاونین و اولیا.',
        needs: [
          'ثبت نمره توسط دبیران در پورتال وب بدون نصب افزونه',
          'ثبت غیبت ۵ زنگی و انضباط با موبایل در پورتال معاون',
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
          'طول سال: نمره ماهانه دبیران و غیبت ۵ زنگی با کارنامه پلاس',
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
        task: 'ثبت غیبت ۵ زنگی با موبایل از راهرو و صدور کارتکس انضباط',
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
      question: 'آیا دبیران، معاونین یا اولیا هم باید افزونه نصب کنند؟',
      answer:
        'خیر؛ افزونه‌ها فقط روی مرورگر سیستم مدیر یا معاون نصب می‌شوند. در کارنامه پلاس، دبیران، معاونین و اولیا بدون نصب افزونه از طریق پورتال وب وارد می‌شوند.',
    },
    {
      question: 'پس از پایان دوره ۱۰ روزه تست رایگان چه اتفاقی برای داده‌ها می‌افتد؟',
      answer:
        'هیچ اطلاعاتی حذف نمی‌شود. تمام کلاس‌ها، تنظیمات و سوابق ثبت‌شده حفظ می‌مانند و پس از فعال‌سازی اشتراک در ربات بله، کار بدون وقفه ادامه می‌یابد.',
    },
    {
      question: 'چرا مبلغ اشتراک در سایت نوشته نشده و به ربات بله ارجاع داده می‌شود؟',
      answer:
        'برای جلوگیری از نمایش نرخ‌های قدیمی در طول سال تحصیلی، استعلام تعرفه به‌روز، تخفیف‌ها و مدیریت دستگاه‌ها مستقیماً در ربات رسمی بله هر محصول انجام می‌شود.',
    },
  ] satisfies HomeFaqItem[],
  guidePage: {
    browserGuides: [
      {
        id: 'chrome',
        browserName: 'Google Chrome',
        recommendedFor: 'پیشنهادی برای سیستم‌های ویندوز دفتر مدرسه',
        storeSteps: [
          'لینک نصب از صفحه محصول را در مرورگر کروم باز کنید و دکمه Add to Chrome را بزنید.',
          'پس از پایان نصب، آیکون پازل بالای مرورگر را باز کرده و افزونه را پین (Pin) کنید.',
          'وارد سامانه سیدا شوید و روی آیکون پین‌شده کلیک کنید تا پنل یا سایدبار باز شود.',
        ],
        zipSteps: [
          'فایل فشرده (.zip) افزونه را از ربات بله یا کانال ایتا دریافت و در یک پوشه ثابت از حالت فشرده خارج کنید.',
          'در نوار آدرس کروم عبارت chrome://extensions را وارد کنید و کلید Developer mode را در گوشه بالا روشن کنید.',
          'دکمه Load unpacked را بزنید و پوشه استخراج‌شده افزونه را انتخاب کنید.',
          'پوشه افزونه را پاک نکنید و آیکون افزونه را در نوار بالای کروم سنجاق کنید.',
        ],
      },
      {
        id: 'edge',
        browserName: 'Microsoft Edge',
        recommendedFor: 'نصب سریع روی ویندوز ۱۰ و ۱۱ بدون نیاز به ابزار اضافه',
        storeSteps: [
          'صفحه افزونه را در مرورگر Edge باز کنید و دکمه Get را بزنید.',
          'در پنجره تایید، گزینه Add extension را انتخاب کنید تا نصب کامل شود.',
          'از منوی افزونه‌ها در نوار بالا، نمایش آیکون افزونه را فعال کنید.',
        ],
        zipSteps: [
          'بسته فشرده (.zip) افزونه را دانلود کرده و در پوشه‌ای مطمئن (مثلاً درایو D) استخراج کنید.',
          'در نوار آدرس Edge عبارت edge://extensions را بنویسید و Developer mode را فعال کنید.',
          'گزینه Load unpacked را انتخاب کرده و پوشه استخراج‌شده را معرفی کنید.',
          'برای دسترسی دائمی، آیکون افزونه را در نوار ابزار نمایش دهید.',
        ],
      },
      {
        id: 'firefox',
        browserName: 'Mozilla Firefox',
        recommendedFor: 'مناسب کاربران فایرفاکس (نسخه ۱۰۹ به بالا)',
        storeSteps: [
          'لینک نصب فایرفاکس را از صفحه محصول باز کنید و دکمه Add to Firefox را بزنید.',
          'در کادر دسترسی مرورگر، گزینه Add را تایید کنید.',
          'از آیکون افزونه‌ها در نوار بالا، دسترسی سریع به افزونه را فعال کنید.',
        ],
        zipSteps: [
          'فایل بسته فایرفاکس (.xpi یا .zip) را از ربات بله یا کانال ایتا دریافت کنید.',
          'در صورت دریافت فایل .xpi، آن را به داخل پنجره باز فایرفاکس بکشید و تایید کنید.',
          'برای فایل موقت توسعه‌دهنده، در نوار آدرس about:debugging#/runtime/this-firefox را باز کرده و Load Temporary Add-on را بزنید.',
          'برای استفاده همیشگی در دفتر مدرسه، نصب از لینک رسمی یا فایل امضاشده .xpi پیشنهاد می‌شود.',
        ],
      },
    ] satisfies BrowserGuideItem[],
    privacyGuarantees: [
      {
        title: 'نگهداری اطلاعات روی سیستم مدرسه',
        description:
          'در کارنامه پلاس، پایگاه داده اصلی دانش‌آموزان و نمرات روی رایانه مدیر مدرسه ذخیره می‌شود تا در زمان قطعی اینترنت هم کار متوقف نشود.',
      },
      {
        title: 'عدم جابه‌جایی خودکار در سامانه سیدا',
        description:
          'در سیدا پلاس، شما خودتان وارد صفحه مورد نظر در سیدا می‌شوید و افزونه فقط دستور همان صفحه را اجرا می‌کند تا نشست کاری شما امن بماند.',
      },
      {
        title: 'تفکیک دسترسی دبیران، معاونین و اولیا',
        description:
          'دبیران فقط کلاس‌های خودشان را می‌بینند، معاون انضباطی دسترسی متمرکز ثبت غیبت دارد و هر ولی فقط کارنامه فرزند خود را مشاهده می‌کند.',
      },
      {
        title: 'حفظ کامل داده‌ها پس از دوره ۱۰ روزه',
        description:
          'در پایان دوره آزمایشی ۱۰ روزه هیچ داده یا تنظیمی پاک نمی‌شود و پس از فعال‌سازی اشتراک در ربات بله، ادامه کار بدون وقفه برقرار است.',
      },
    ] satisfies PrivacyGuarantee[],
    faqs: [
      {
        question: 'اگر ویندوز مدرسه عوض شود یا بخواهیم روی سیستم دیگری نصب کنیم چه می‌شود؟',
        answer:
          'از طریق ربات بله هر محصول می‌توانید وضعیت دستگاه‌های متصل به لایسنس خود را مدیریت و منتقل کنید.',
      },
      {
        question: 'آیا نصب دستی فایل .zip نیاز به دانش فنی دارد؟',
        answer:
          'خیر؛ کافی است فایل را در یک پوشه ثابت استخراج کنید و طبق ۴ مرحله بالا گزینه Load unpacked را بزنید و در صورت نیاز از طریق ربات بله راهنمایی بگیرید.',
      },
      {
        question: 'آیا در دموها و راهنماها از اطلاعات واقعی مدارس استفاده می‌شود؟',
        answer:
          'خیر؛ تمامی تصاویر و پیش‌نمایش‌های وب‌سایت مدیر پلاس صرفاً با اسامی و کدهای نمونه ساختگی تهیه شده‌اند و هیچ اطلاعات واقعی از دانش‌آموزان یا مدارس منتشر نمی‌شود.',
      },
    ] satisfies HomeFaqItem[],
  },
  navLinks: [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'سیدا پلاس', href: '/products/sida-plus' },
    { label: 'کارنامه پلاس', href: '/products/karnameh-plus' },
    { label: 'راهنمای نصب و حریم خصوصی', href: '/guide' },
  ] satisfies NavLink[],
} as const;
