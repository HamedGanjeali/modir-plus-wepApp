export type BrowserId = 'chrome' | 'edge' | 'firefox';

export type ProductUiMockPreset =
  | 'sida-ops'
  | 'sida-timetable'
  | 'sida-shad'
  | 'sida-photos'
  | 'karnameh-dashboard'
  | 'karnameh-teacher-portal'
  | 'karnameh-attendance-6bell'
  | 'karnameh-parent-chart';

export interface BrowserDownloadTarget {
  browser: BrowserId;
  label: string;
  installUrl: string;
  isPlaceholderUrl?: boolean;
  note: string;
}

export interface TutorialItem {
  id: string;
  title: string;
  duration: string;
  hashtag: string;
  summary: string;
  postUrl: string;
  isPlaceholderUrl?: boolean;
}

export interface UseCaseItem {
  role: string;
  moduleLabel: string;
  scenarioTitle: string;
  problem: string;
  outcome: string;
  steps: string[];
}

export interface BeforeAfterItem {
  task: string;
  before: string;
  after: string;
}

export interface GalleryPreviewItem {
  id: string;
  title: string;
  caption: string;
  imageAlt: string;
  /**
   * مسیر تصویر واقعی (مثلاً /images/products/sida-plus-ops.webp).
   * تا زمان قرار گرفتن تصویر واقعی، کامپوننت ماکاپ وفادار به رابط کاربری واقعی را نمایش می‌دهد.
   */
  imageSrc?: string;
  uiMockPreset: ProductUiMockPreset;
}

export interface ExternalPortalLink {
  label: string;
  role: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductDefinition {
  slug: 'sida-plus' | 'karnameh-plus';
  name: string;
  nameEn: string;
  version: string;
  categoryLabel: string;
  shortTagline: string;
  heroSummary: string;
  targetRoles: string[];
  accentTone: 'primary' | 'emerald';
  baleBotHandle: string;
  baleBotUrl: string;
  eitaaProductHashtag: string;
  installVideoUrl: string;
  installVideoIsPlaceholder?: boolean;
  installVideoDuration: string;
  highlights: string[];
  beforeAfter: BeforeAfterItem[];
  useCases: UseCaseItem[];
  galleryItems: GalleryPreviewItem[];
  installTargets: BrowserDownloadTarget[];
  externalPortals?: ExternalPortalLink[];
  faqs: FaqItem[];
  tutorials: TutorialItem[];
}

export const PRODUCTS: ProductDefinition[] = [
  {
    slug: 'sida-plus',
    name: 'سیدا پلاس',
    nameEn: 'Sida Plus',
    version: '۲.۵.۰',
    categoryLabel: 'افزونه اتوماسیون سیدا، برنامه هفتگی و شاد',
    shortTagline: 'انجام کارهای چندساعته سامانه سیدا، برنامه هفتگی و شاد در چند کلیک',
    heroSummary:
      'افزونه تخصصی مرورگر برای حذف عملیات تکراری داخل سامانه سیدا، شماره‌گذاری رسمی دفتر آمار و امتحانات، چیدمان هوشمند برنامه هفتگی و مدیریت گروه‌های پیام‌رسان شاد.',
    targetRoles: ['مدیر مدرسه', 'معاون اجرایی', 'معاون آموزشی'],
    accentTone: 'primary',
    baleBotHandle: '@sidayar_license_bot',
    baleBotUrl: 'https://ble.ir/sidayar_license_bot',
    eitaaProductHashtag: '#سیدا_پلاس',
    installVideoUrl: 'https://eitaa.com/modir_plus_ir',
    installVideoIsPlaceholder: true,
    installVideoDuration: '۴۰ ثانیه',
    highlights: [
      'عملیات یک‌کلیکه روی صفحه سیدا (رفع قفل جدول‌ها، تاریخ کارنامه، گواهی فارغ‌التحصیلان و دفتر آمار/امتحانات)',
      'سامانه تمام‌صفحه چیدمان هوشمند برنامه هفتگی متوسطه اول با رعایت زنگ پنجره دبیران و چاپ A4 افقی',
      'اسکن، عضویت گروهی ایمن با صف ترتیبی و بانک لینک دعوت بیش از ۳۵۰ گروه در پیام‌رسان شاد',
    ],
    beforeAfter: [
      {
        task: 'شماره‌گذاری و چاپ دفتر آمار و دفتر امتحانات',
        before: 'شماره‌زنی دستی صفحات، بهم‌ریختگی هدر در پرینت A4 افقی و خطای صفحه تکراری',
        after: 'صفحه‌بندی خودکار متناسب با ارتفاع واقعی A4 افقی با تکرار سربرگ و شماره فارسی',
      },
      {
        task: 'تنظیم برنامه هفتگی و ابلاغ دبیران',
        before: 'ساعت‌ها آزمون و خطا روی کاغذ و اکسل همراه با تداخل ناخواسته کلاس یا دبیر',
        after: 'تولید ۳ سناریوی بهینه بدون تداخل، جابه‌جایی دستی زنگ و خروجی رسمی اکسل و چاپ',
      },
      {
        task: 'افزودن همکار جدید به گروه‌های کلاسی در شاد',
        before: 'جستجو و باز کردن تک‌تک گروه‌ها و کپی دستی لینک دعوت در ده‌ها گروه درسی',
        after: 'دسته‌بندی خودکار بر اساس سال و درس، صف اجرای ایمن و بانک متمرکز لینک دعوت',
      },
    ],
    useCases: [
      {
        role: 'معاون اجرایی',
        moduleLabel: 'عملیات خودکار صفحه سیدا',
        scenarioTitle: 'آماده‌سازی دفاتر پلمپ و گواهی فارغ‌التحصیلان',
        problem: 'در پایان فصل امتحانات، درج تاریخ در صدها ریزنمره، مرتب‌سازی گواهی‌های سیکل و چاپ دفتر آمار زمان زیادی می‌گیرد.',
        outcome: 'اجرای عملیات روی همان صفحه باز سیدا بدون جابه‌جایی خودکار تب و چاپ آماده تحویل اداره.',
        steps: ['باز کردن صفحه گزارش در سیدا', 'تنظیم سربرگ تکراری و شماره فارسی', 'چاپ آماده پلمپ در قطع A4 افقی'],
      },
      {
        role: 'معاون آموزشی',
        moduleLabel: 'چیدمان هوشمند برنامه هفتگی',
        scenarioTitle: 'چیدمان برنامه هفتگی ابتدای سال تحصیلی',
        problem: 'هماهنگی روزهای حضور دبیران چندمدرسه‌ای و جلوگیری از تکرار درس در یک روز کاری طاقت‌فرساست.',
        outcome: 'تعریف کلاس‌ها و ابلاغ دبیران، مقایسه سه برنامه پیشنهادی و صدور جدول کلاسی و دبیران.',
        steps: ['ثبت ساعت ابلاغ و روزهای حضور دبیر', 'تولید ۳ سناریوی بدون تداخل', 'خروجی اکسل و چاپ برنامه کلاس‌ها'],
      },
      {
        role: 'مدیر و رابط فناوری',
        moduleLabel: 'مدیریت چندگروهی و بانک لینک شاد',
        scenarioTitle: 'مدیریت عکس دانش‌آموزان و گروه‌های شاد',
        problem: 'ارسال یا اصلاح تصاویر دانش‌آموزان در سیدا و عضویت کادر مدرسه در ده‌ها گروه شاد بسیار وقت‌گیر است.',
        outcome: 'فشرده‌سازی و مدیریت خودکار تصاویر در سیدا و اجرای خودکار عضویت در گروه‌های منتخب شاد.',
        steps: ['اسکن و دسته‌بندی گروه‌های شاد', 'اجرای صف عضویت ایمن همکاران', 'کپی سریع از بانک لینک دعوت'],
      },
    ],
    galleryItems: [
      {
        id: 'sida-ops',
        title: 'پنل عملیات سیدا (سایدبار مرورگر)',
        caption: 'دسترسی سریع به ابزارهای دفتر آمار، دفتر امتحانات، کارنامه‌ها، گواهی فارغ‌التحصیلان و خروجی کلاس‌بندی روی صفحه سیدا.',
        imageAlt: 'نمای پنل عملیات سیدا پلاس در سایدبار مرورگر',
        uiMockPreset: 'sida-ops',
      },
      {
        id: 'sida-timetable',
        title: 'چیدمان هوشمند برنامه هفتگی',
        caption: 'تعریف دروس و روزهای حضور دبیران، تولید سه سناریوی برتر بدون تداخل و امکان جابه‌جایی دستی زنگ‌ها.',
        imageAlt: 'نمای ماتریس برنامه هفتگی هوشمند سیدا پلاس',
        uiMockPreset: 'sida-timetable',
      },
      {
        id: 'sida-shad',
        title: 'مدیریت چندگروهی و بانک لینک شاد',
        caption: 'دسته‌بندی درختی گروه‌ها بر اساس سال تحصیلی و درس همراه با استخراج و کپی سریع لینک‌های دعوت.',
        imageAlt: 'نمای سامانه مدیریت گروه‌های شاد در سیدا پلاس',
        uiMockPreset: 'sida-shad',
      },
      {
        id: 'sida-photos',
        title: 'مدیریت و بهینه‌سازی تصاویر در سیدا',
        caption: 'تطبیق و ارسال سریع تصاویر دانش‌آموزان متناسب با محدودیت حجمی سامانه سیدا با داده‌های نمونه.',
        imageAlt: 'نمای ابزار مدیریت تصاویر دانش‌آموزان در سیدا پلاس',
        uiMockPreset: 'sida-photos',
      },
    ],
    installTargets: [
      {
        browser: 'chrome',
        label: 'نصب در Google Chrome',
        installUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
        note: 'پیشنهادی برای رایانه دفتر مدرسه (قابل سنجاق به‌صورت سایدبار)',
      },
      {
        browser: 'edge',
        label: 'نصب در Microsoft Edge',
        installUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
        note: 'سازگار کامل با ویندوز ۱۰ و ۱۱ بدون نیاز به نصب نرم‌افزار جانبی',
      },
      {
        browser: 'firefox',
        label: 'نصب در Mozilla Firefox',
        installUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
        note: 'پشتیبانی از نسخه ۱۰۹ به بالا',
      },
    ],
    faqs: [
      {
        question: 'آیا سیدا پلاس به جای کاربر در صفحات سیدا جابه‌جا می‌شود؟',
        answer: 'خیر؛ مدیر یا معاون خودش وارد سیدا شده و صفحه مورد نظر را باز می‌کند، سپس دستور دلخواه را از پنل افزونه اجرا می‌کند تا نشست کاری سیدا پایدار بماند.',
      },
      {
        question: 'دوره آزمایشی ۱۰ روزه شامل چه محدودیتی است؟',
        answer: 'در شروع کار می‌توانید به مدت ۱۰ روز بدون نیاز به کارت بانکی محصول را تست کنید. پس از پایان مهلت، برای ادامه استفاده کافی است از طریق ربات بله سیدا پلاس اشتراک تهیه کنید.',
      },
      {
        question: 'اگر ویندوز یا مرورگر مدرسه تعویض شود وضعیت لایسنس چه می‌شود؟',
        answer: 'مدیریت دستگاه‌های متصل و بازیابی وضعیت لایسنس از طریق ربات بله @sidayar_license_bot انجام می‌شود.',
      },
    ],
    tutorials: [
      {
        id: 'sida-tut-install',
        title: 'نحوه نصب و پین کردن سیدا پلاس در سایدبار',
        duration: '۰۰:۴۰',
        hashtag: '#آموزش_نصب',
        summary: 'آموزش سریع نصب افزونه و فعال‌سازی ۱۰ روز تست رایگان با ربات بله.',
        postUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
      },
      {
        id: 'sida-tut-amar',
        title: 'شماره‌گذاری و چاپ ۲۰۰ صفحه دفتر آمار برای پلمپ',
        duration: '۰۰:۵۵',
        hashtag: '#آموزش_دفتر_آمار',
        summary: 'تنظیم سربرگ تکراری، ارتفاع A4 افقی و شماره صفحه فارسی در چند ثانیه.',
        postUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
      },
      {
        id: 'sida-tut-timetable',
        title: 'چیدمان برنامه هفتگی بدون تداخل دبیر و کلاس',
        duration: '۰۱:۰۰',
        hashtag: '#آموزش_برنامه_هفتگی',
        summary: 'ثبت ساعات ابلاغ، انتخاب بین سه سناریوی برتر و خروجی اکسل.',
        postUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
      },
      {
        id: 'sida-tut-shad',
        title: 'عضویت گروهی و بانک لینک دعوت در پیام‌رسان شاد',
        duration: '۰۰:۵۰',
        hashtag: '#آموزش_شاد',
        summary: 'اسکن گروه‌های کلاسی، فیلتر درس/سال و کپی دسته‌ای لینک‌های دعوت.',
        postUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
      },
    ],
  },
  {
    slug: 'karnameh-plus',
    name: 'کارنامه پلاس',
    nameEn: 'Karnameh Plus',
    version: '۱.۰.۰',
    categoryLabel: 'مدیریت نمرات، کارنامه آنلاین و حضورغیاب متوسطه اول',
    shortTagline: 'استخراج از سیدا، ثبت نمره دبیران، انضباط ۶ زنگی و کارنامه تحلیلی اولیا',
    heroSummary:
      'سامانه یکپارچه ویژه مدارس متوسطه اول (پایه‌های هفتم، هشتم و نهم) که داشبورد آفلاین مدیر را به پورتال‌های تحت وب دبیران، معاونین و اولیا و ربات بله متصل می‌کند.',
    targetRoles: ['مدیر متوسطه اول', 'معاون انضباطی و آموزشی', 'دبیران', 'اولیا'],
    accentTone: 'emerald',
    baleBotHandle: '@Karnameh_plus_bot',
    baleBotUrl: 'https://ble.ir/Karnameh_plus_bot',
    eitaaProductHashtag: '#کارنامه_پلاس',
    installVideoUrl: 'https://eitaa.com/modir_plus_ir',
    installVideoIsPlaceholder: true,
    installVideoDuration: '۴۵ ثانیه',
    highlights: [
      'داشبورد مستقل در افزونه مدیر با ذخیره‌سازی محلی آفلاین، خروجی چندشیتی اکسل دبیران و چاپ رسمی A4/A5/A6',
      'پورتال وب اختصاصی دبیران و معاونین بدون نیاز به نصب افزونه (ثبت سریع نمرات با کیبورد و حضورغیاب ۶ زنگی)',
      'پورتال اولیا با کارنامه آنلاین، نمودار مقایسه سه‌گانه (نمره دانش‌آموز، میانگین کلاس، میانگین پایه) و کارتکس انضباط',
    ],
    beforeAfter: [
      {
        task: 'جمع‌آوری نمرات مستمر ماهانه و پایان نوبت از دبیران',
        before: 'ارسال فایل‌های پراکنده، تماس‌های مکرر برای گرفتن لیست و وارد کردن دستی یک‌به‌یک',
        after: 'ثبت مستقیم نمره توسط دبیر در پورتال وب یا اکسل چندشیتی و تایید یک‌کلیکه در داشبورد مدیر',
      },
      {
        task: 'ثبت غیبت زنگ‌به‌زنگ و محاسبه نمره انضباط',
        before: 'دفاتر کاغذی غیبت، جمع‌زدن دستی موارد انضباطی و دشواری تهیه کارتکس دانش‌آموز',
        after: 'ماتریس ۶ زنگی موبایل‌پسند معاون با محاسبه خودکار نمره انضباط و خروجی کارتکس تاریخ‌دار',
      },
      {
        task: 'صدور کارنامه و پاسخ به پیگیری اولیا',
        before: 'چاپ پرهزینه تمام کارنامه‌ها و صف مراجعان برای اطلاع از وضعیت درسی میان‌دوره',
        after: 'کارنامه آنلاین اختصاصی برای هر ولی با نمودار تحلیلی و موتور چاپ انعطاف‌پذیر A4/A5/A6',
      },
    ],
    useCases: [
      {
        role: 'مدیر مدرسه',
        moduleLabel: 'داشبورد آفلاین مدیر و استخراج سیدا',
        scenarioTitle: 'پایش لحظه‌ای تکمیل نمرات و چاپ کارنامه‌ها',
        problem: 'نزدیک امتحانات مشخص نیست کدام دبیر نمراتش را تحویل داده و تجمیع معدل وزنی زمان‌بر است.',
        outcome: 'نمایش درصد تکمیل نمرات هر کلاس در داشبورد، محاسبه دقیق معدل وزنی/رتبه و چاپ دسته‌ای کارنامه‌ها.',
        steps: ['استخراج یک‌باره لیست کلاس‌ها از سیدا', 'تایید نمرات ارسالی دبیران', 'چاپ کارنامه در قطع A4 / A5 / A6'],
      },
      {
        role: 'دبیر مدرسه',
        moduleLabel: 'پورتال ثبت نمره دبیران',
        scenarioTitle: 'ورود نمره یک کلاس زیر یک دقیقه',
        problem: 'دبیران چندمدرسه‌ای هر بار باید فایل‌های مختلف را بین مدارس مدیریت کنند.',
        outcome: 'ورود به پورتال وب دبیران با موبایل یا لپ‌تاپ، انتخاب مدرسه فعال و ثبت سریع با کلیدهای Enter و جهت‌نما.',
        steps: ['ورود به پورتال وب بدون نصب افزونه', 'انتخاب کلاس و آزمون مستمر یا پایانی', 'ثبت کیبوردی و ارسال برای تایید مدیر'],
      },
      {
        role: 'معاون انضباطی',
        moduleLabel: 'انضباط و غیبت ۶ زنگی معاون',
        scenarioTitle: 'ثبت سریع غیبت و موارد انضباطی از راهرو با موبایل',
        problem: 'ثبت موارد کلاسی در طول زنگ‌ها روی کاغذ باعث جا افتادن یا تاخیر در اطلاع‌رسانی به اولیا می‌شود.',
        outcome: 'ثبت ۶ زنگی با موبایل در پورتال معاون، همگام‌سازی فوری با داشبورد مدرسه و آماده‌سازی پیام اطلاع‌رسانی.',
        steps: ['ثبت غیبت یا تاخیر برای هر زنگ', 'محاسبه خودکار کسر نمره انضباط', 'خروجی کارتکس تاریخ‌دار دانش‌آموز'],
      },
      {
        role: 'اولیا و دانش‌آموزان',
        moduleLabel: 'کارنامه آنلاین و نمودار سه‌گانه اولیا',
        scenarioTitle: 'مشاهده تحلیلی پیشرفت تحصیلی و وضعیت انضباط',
        problem: 'اولیا برای اطلاع از وضعیت میان‌دوره ناچار به مراجعه حضوری یا انتظار تا پایان نوبت هستند.',
        outcome: 'نمایش کارنامه آنلاین اختصاصی همراه با نمودار مقایسه نمره دانش‌آموز با میانگین کلاس و پایه.',
        steps: ['ورود امن به پورتال اولیا با موبایل', 'مشاهده نمودار مقایسه سه‌گانه دروس', 'پیگیری وضعیت غیبت‌ها و انضباط'],
      },
    ],
    galleryItems: [
      {
        id: 'karnameh-dashboard',
        title: 'داشبورد آفلاین مدیر و وضعیت تکمیل نمرات',
        caption: 'مدیریت کلاس‌ها، آزمون‌های ماهانه و نوبت، پروفایل ۳۶۰ درجه دانش‌آموز و همگام‌سازی ابری بدون قطعی کار.',
        imageAlt: 'نمای داشبورد مدیر در افزونه کارنامه پلاس',
        uiMockPreset: 'karnameh-dashboard',
      },
      {
        id: 'karnameh-teacher-portal',
        title: 'پورتال ثبت نمره دبیران (موبایل و دسکتاپ)',
        caption: 'انتخاب سریع مدرسه و کلاس با ورود کیبوردی نمرات و انتقال خودکار برای تایید مدیر.',
        imageAlt: 'نمای پورتال وب دبیران کارنامه پلاس',
        uiMockPreset: 'karnameh-teacher-portal',
      },
      {
        id: 'karnameh-attendance-6bell',
        title: 'ماتریس حضورغیاب ۶ زنگی و انضباط معاون',
        caption: 'ثبت غیبت به تفکیک هر زنگ، جستجوی سریع بین تمام کلاس‌ها و محاسبه آنی نمره انضباط.',
        imageAlt: 'نمای پورتال معاون و ماتریس حضورغیاب ۶ زنگی',
        uiMockPreset: 'karnameh-attendance-6bell',
      },
      {
        id: 'karnameh-parent-chart',
        title: 'کارنامه آنلاین اولیا و نمودار مقایسه سه‌گانه',
        caption: 'نمایش نمره دانش‌آموز در کنار میانگین کلاس و میانگین کل پایه با جزئیات انضباط و غیبت.',
        imageAlt: 'نمای کارنامه تحلیلی اولیا در کارنامه پلاس',
        uiMockPreset: 'karnameh-parent-chart',
      },
    ],
    installTargets: [
      {
        browser: 'edge',
        label: 'نصب در Microsoft Edge',
        installUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
        note: 'بسته آماده افزونه مدیر برای ویندوز و مرورگر اج',
      },
      {
        browser: 'firefox',
        label: 'نصب در Mozilla Firefox',
        installUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
        note: 'بسته مستقل فایرفاکس با پشتیبانی کامل از IndexedDB آفلاین',
      },
      {
        browser: 'chrome',
        label: 'نصب در Google Chrome',
        installUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
        note: 'نصب سریع برای سیستم اداری مدیر مدرسه',
      },
    ],
    externalPortals: [
      {
        label: 'ورود به پورتال اولیا',
        role: 'والدین و دانش‌آموزان',
        url: 'https://karnameh.medu-plus.workers.dev/parent/',
      },
      {
        label: 'ورود به پورتال دبیران',
        role: 'ثبت نمرات بدون نصب افزونه',
        url: 'https://karnameh.medu-plus.workers.dev/teacher/',
      },
      {
        label: 'ورود به پورتال معاونین',
        role: 'ثبت غیبت ۶ زنگی و انضباط با موبایل',
        url: 'https://karnameh.medu-plus.workers.dev/deputy/',
      },
    ],
    faqs: [
      {
        question: 'آیا دبیران و معاونین هم باید افزونه نصب کنند؟',
        answer: 'خیر؛ افزونه فقط روی مرورگر مدیر مدرسه نصب می‌شود. دبیران، معاونین و اولیا از طریق پورتال تحت وب با گوشی یا کامپیوتر خودشان وارد می‌شوند.',
      },
      {
        question: 'در دوره ۱۰ روزه تست رایگان کارنامه پلاس چه چیزی باز است؟',
        answer: 'مدت دوره آزمایشی ۱۰ روز است و به مدیر امکان تست کامل جریان کار روی ۱ کلاس انتخابی تا سقف ۴۰ دانش‌آموز اول را می‌دهد؛ پس از خرید اشتراک کل کلاس‌ها بدون از دست رفتن اطلاعات باز می‌شوند.',
      },
      {
        question: 'اگر اینترنت دفتر مدرسه قطع شود چه اتفاقی می‌افتد؟',
        answer: 'داشبورد افزونه مدیر با معماری آفلاین‌محور کار می‌کند؛ ثبت نمره، چاپ کارنامه و گزارش‌ها روی سیستم محلی ادامه می‌یابد و به محض اتصال اینترنت همگام‌سازی می‌شود.',
      },
    ],
    tutorials: [
      {
        id: 'kp-tut-extract',
        title: 'استخراج اطلاعات کلاس‌ها و دانش‌آموزان از سیدا',
        duration: '۰۰:۴۵',
        hashtag: '#آموزش_استخراج_سیدا',
        summary: 'ساخت پایگاه داده سال تحصیلی و دریافت لیست کلاس‌ها بدون ورود دستی.',
        postUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
      },
      {
        id: 'kp-tut-teacher',
        title: 'ثبت نمره توسط دبیران در پورتال وب و اکسل چندشیتی',
        duration: '۰۰:۵۵',
        hashtag: '#آموزش_ثبت_نمره',
        summary: 'ارسال دسترسی به دبیران، تایید نمرات ارسالی و ویرایش سریع با کیبورد.',
        postUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
      },
      {
        id: 'kp-tut-attendance',
        title: 'مدیریت حضورغیاب ۶ زنگی و کارتکس انضباط',
        duration: '۰۰:۵۰',
        hashtag: '#آموزش_حضور_غیاب',
        summary: 'ثبت موارد انضباطی، محاسبه خودکار نمره انضباط و چاپ گزارش غایبین.',
        postUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
      },
      {
        id: 'kp-tut-print',
        title: 'طراحی و چاپ کارنامه چندآزمونه و انتشار در پورتال اولیا',
        duration: '۰۱:۰۰',
        hashtag: '#آموزش_چاپ_کارنامه',
        summary: 'تنظیم فرمت A4/A5/A6، لوگو و نمودار مقایسه‌ای برای مشاهده اولیا.',
        postUrl: 'https://eitaa.com/modir_plus_ir',
        isPlaceholderUrl: true,
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductDefinition | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}
