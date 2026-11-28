import { useState } from 'react';
import type { GalleryPreviewItem, ProductUiMockPreset } from '../../data/products';

interface ProductUiPreviewProps {
  item: GalleryPreviewItem;
  isHero?: boolean;
  detailed?: boolean;
}

function renderPresetMock(preset: ProductUiMockPreset, detailed: boolean) {
  switch (preset) {
    case 'sida-ops':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="flex items-center justify-between gap-2 rounded-xl border border-border bg-card px-3 py-1.5 shadow-xs">
            <div className="flex min-w-0 items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span dir="ltr" className="truncate font-mono text-[10px] text-muted-foreground">
                sida.medu.ir/reports/stat-book
              </span>
            </div>
            <span className="shrink-0 rounded-md bg-primary/12 px-2 py-0.5 text-[10px] font-semibold text-primary">
              سایدبار سیدا پلاس
            </span>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-12 gap-2.5">
            <div className="col-span-5 flex flex-col justify-between rounded-xl border border-border bg-card p-2.5">
              <div className="space-y-1">
                <div className="rounded-lg bg-primary px-2 py-1 text-[10px] font-semibold text-primary-foreground">
                  دفتر آمار و امتحانات
                </div>
                <div className="rounded-lg bg-muted/70 px-2 py-1 text-[10px] text-muted-foreground">
                  تاریخ خودکار کارنامه
                </div>
                <div className="rounded-lg bg-muted/70 px-2 py-1 text-[10px] text-muted-foreground">
                  گواهی فارغ‌التحصیلان
                </div>
                {detailed && (
                  <div className="rounded-lg bg-muted/70 px-2 py-1 text-[10px] text-muted-foreground">
                    رفع قفل جدول‌های سیدا
                  </div>
                )}
              </div>
              <div className="rounded-lg bg-success/12 px-2 py-1 text-center text-[9px] font-semibold text-success">
                اجرا روی صفحه باز سیدا
              </div>
            </div>

            <div className="col-span-7 flex flex-col justify-between rounded-xl border border-border bg-card p-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-foreground">پیش‌نمایش پلمپ A4 افقی</span>
                <span className="rounded-full bg-success/15 px-2 py-0.5 text-[9px] font-semibold text-success tabular-nums">
                  صفحه ۱ از ۲۰۰
                </span>
              </div>

              <div className="space-y-1.5 rounded-lg border border-border/80 bg-muted/40 p-2">
                <div className="grid grid-cols-3 gap-1 border-b border-border pb-1 text-[8px] font-bold text-muted-foreground">
                  <span>نام دانش‌آموز</span>
                  <span>کد نمونه</span>
                  <span>وضعیت</span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-[9px] text-foreground tabular-nums">
                  <span className="truncate">علی رضایی</span>
                  <span dir="ltr">۰۰۱۲۳۴۵۶۷۸</span>
                  <span className="text-success">تایید</span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-[9px] text-foreground tabular-nums">
                  <span className="truncate">محمدحسین کاظمی</span>
                  <span dir="ltr">۰۰۹۸۷۶۵۴۳۲</span>
                  <span className="text-success">تایید</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-primary/10 px-2 py-1 text-[9px] font-semibold text-primary">
                <span>تکرار خودکار سربرگ</span>
                <span>چاپ آماده</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'sida-timetable':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="flex items-center justify-between gap-2 rounded-xl border border-border bg-card px-3 py-1.5">
            <span className="truncate text-[10px] font-bold text-foreground">چیدمان برنامه هفتگی هوشمند</span>
            <div className="flex items-center gap-1">
              <span className="rounded-md bg-primary px-2 py-0.5 text-[9px] font-semibold text-primary-foreground tabular-nums">
                سناریو ۱
              </span>
              <span className="rounded-md bg-muted px-2 py-0.5 text-[9px] text-muted-foreground tabular-nums">
                سناریو ۲
              </span>
            </div>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-4 gap-1.5 rounded-xl border border-border bg-card p-2.5">
            {['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه'].map((day, idx) => (
              <div key={day} className="flex flex-col justify-between gap-1 rounded-lg bg-muted/45 p-1.5">
                <span className="text-center text-[9px] font-bold text-foreground">{day}</span>
                <div className="rounded bg-primary/12 px-1 py-1 text-center text-[8px] font-semibold text-primary tabular-nums">
                  ریاضی • ۷۰۱
                </div>
                <div className="rounded bg-success/12 px-1 py-1 text-center text-[8px] font-semibold text-success tabular-nums">
                  {idx % 2 === 0 ? 'علوم • ۸۰۲' : 'ادبیات • ۹۰۱'}
                </div>
                {detailed && (
                  <div className="rounded bg-card px-1 py-1 text-center text-[8px] text-muted-foreground tabular-nums">
                    عربی • ۷۰۲
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-1.5 text-[9px]">
            <span className="font-semibold text-success tabular-nums">۰ تداخل دبیر و کلاس</span>
            <span className="font-semibold text-primary">خروجی اکسل و چاپ A4 افقی</span>
          </div>
        </div>
      );

    case 'sida-shad':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-1.5">
            <span dir="ltr" className="font-mono text-[10px] text-muted-foreground">
              web.shad.ir
            </span>
            <span className="rounded-md bg-primary/12 px-2 py-0.5 text-[10px] font-semibold text-primary tabular-nums">
              بانک لینک: ۳۵۰+ گروه
            </span>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-12 gap-2">
            <div className="col-span-5 flex flex-col justify-between rounded-xl border border-border bg-card p-2.5">
              <p className="text-[9px] font-bold text-foreground">دسته‌بندی درختی</p>
              <div className="space-y-1 text-[9px]">
                <div className="rounded bg-primary/12 px-2 py-1 font-semibold text-primary tabular-nums">
                  پایه هفتم (۱۲ گروه)
                </div>
                <div className="rounded bg-muted px-2 py-1 text-muted-foreground tabular-nums">
                  پایه هشتم (۱۰ گروه)
                </div>
                <div className="rounded bg-muted px-2 py-1 text-muted-foreground tabular-nums">
                  پایه نهم (۱۲ گروه)
                </div>
              </div>
              <span className="text-[8px] text-success">صف عضویت ایمن فعال</span>
            </div>

            <div className="col-span-7 flex flex-col justify-between rounded-xl border border-border bg-card p-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-foreground">گروه‌های منتخب ریاضی</span>
                <span className="text-[9px] font-semibold text-primary tabular-nums">۲۴ / ۳۰ انجام شد</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[80%] rounded-full bg-primary" />
              </div>
              <div className="space-y-1 text-[9px]">
                <div className="flex items-center justify-between rounded bg-muted/50 px-2 py-1">
                  <span>ریاضی کلاس ۷۰۱</span>
                  <span className="text-success">کپی لینک</span>
                </div>
                <div className="flex items-center justify-between rounded bg-muted/50 px-2 py-1">
                  <span>ریاضی کلاس ۷۰۲</span>
                  <span className="text-success">عضو شد</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'sida-photos':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-1.5">
            <span className="text-[10px] font-bold text-foreground">مدیریت تصاویر دانش‌آموزان</span>
            <span className="rounded-md bg-success/12 px-2 py-0.5 text-[9px] font-semibold text-success">
              تطبیق خودکار حجم
            </span>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-3 gap-2">
            {[
              { name: 'علی رضایی', cls: '۷۰۱', size: '۴۲ کیلوبایت' },
              { name: 'محمدحسین کاظمی', cls: '۷۰۱', size: '۳۸ کیلوبایت' },
              { name: 'امیرحسین مرادی', cls: '۸۰۲', size: '۴۵ کیلوبایت' },
            ].map((st) => (
              <div
                key={st.name}
                className="flex flex-col items-center justify-between rounded-xl border border-border bg-card p-2 text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20a8 8 0 0 1 16 0" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[9px] font-bold text-foreground">{st.name}</p>
                  <p className="text-[8px] text-muted-foreground tabular-nums">کلاس {st.cls}</p>
                </div>
                <span className="rounded bg-success/12 px-1.5 py-0.5 text-[8px] font-semibold text-success tabular-nums">
                  {st.size}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card px-3 py-1.5 text-center text-[9px] font-medium text-muted-foreground">
            نمای نمایشی با آواتار نمونه — بدون اطلاعات واقعی دانش‌آموزان
          </div>
        </div>
      );

    case 'karnameh-dashboard':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-1.5">
            <span className="text-[10px] font-bold text-foreground">داشبورد آفلاین مدیر — نوبت اول</span>
            <span className="rounded-md bg-success/12 px-2 py-0.5 text-[9px] font-semibold text-success">
              همگام‌سازی فعال
            </span>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-12 gap-2">
            <div className="col-span-7 flex flex-col justify-between rounded-xl border border-border bg-card p-2.5">
              <p className="text-[9px] font-bold text-foreground">پیشرفت ثبت نمره کلاس‌ها</p>
              {[
                { cls: 'کلاس ۷۰۱', pct: '۱۰۰٪', widthClass: 'w-full' },
                { cls: 'کلاس ۷۰۲', pct: '۹۴٪', widthClass: 'w-[94%]' },
                { cls: 'کلاس ۸۰۱', pct: '۸۸٪', widthClass: 'w-[88%]' },
              ].map((row) => (
                <div key={row.cls}>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-foreground tabular-nums">{row.cls}</span>
                    <span className="font-bold text-success tabular-nums">{row.pct}</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className={`h-full rounded-full bg-success ${row.widthClass}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-5 flex flex-col justify-between rounded-xl border border-border bg-card p-2.5">
              <p className="text-[9px] font-bold text-foreground">خروجی کارنامه</p>
              <div className="space-y-1 text-[9px]">
                <div className="rounded bg-success/12 px-2 py-1 font-semibold text-success">چاپ دسته‌ای A4 / A5</div>
                <div className="rounded bg-muted px-2 py-1 text-foreground">محاسبه معدل وزنی</div>
                <div className="rounded bg-muted px-2 py-1 text-foreground">اکسل چندشیتی دبیران</div>
              </div>
              <span className="text-[8px] text-muted-foreground tabular-nums">دبیرستان نمونه آزمایشی</span>
            </div>
          </div>
        </div>
      );

    case 'karnameh-teacher-portal':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-1.5">
            <span className="text-[10px] font-bold text-foreground">پورتال وب دبیران — ریاضی ۷۰۱</span>
            <span className="rounded-md bg-primary/12 px-2 py-0.5 text-[9px] font-semibold text-primary">
              بدون نیاز به نصب افزونه
            </span>
          </div>

          <div className="flex-1 space-y-1.5 rounded-xl border border-border bg-card p-2.5">
            {[
              { name: 'علی رضایی', score: '۱۹.۲۵', status: 'ثبت شد' },
              { name: 'محمدحسین کاظمی', score: '۱۸.۵۰', status: 'ثبت شد' },
              { name: 'امیرحسین مرادی', score: '۱۷.۷۵', status: 'در حال ورود' },
            ].map((row) => (
              <div
                key={row.name}
                className="flex items-center justify-between rounded-lg border border-border/80 bg-muted/45 px-2.5 py-1.5 text-[9px]"
              >
                <span className="font-semibold text-foreground">{row.name}</span>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-card px-2 py-0.5 font-bold text-foreground tabular-nums">
                    {row.score}
                  </span>
                  <span className="text-success">{row.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-xl bg-success/12 px-3 py-1.5 text-[9px] font-semibold text-success">
            <span>جابه‌جایی سریع با کلید Enter</span>
            <span>ارسال به داشبورد مدیر</span>
          </div>
        </div>
      );

    case 'karnameh-attendance-6bell':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-1.5">
            <span className="text-[10px] font-bold text-foreground">حضورغیاب ۵ زنگی و انضباط معاون</span>
            <span className="rounded-md bg-warning/15 px-2 py-0.5 text-[9px] font-semibold text-warning">
              موبایل‌پسند
            </span>
          </div>

          <div className="flex-1 space-y-2 rounded-xl border border-border bg-card p-2.5">
            {[
              { name: 'علی رضایی (۷۰۱)', bells: [true, true, true, true, true, true], score: '۲۰' },
              { name: 'امیرحسین مرادی (۷۰۱)', bells: [true, true, false, true, true, true], score: '۱۹.۵' },
            ].map((st) => (
              <div key={st.name} className="rounded-lg border border-border/80 bg-muted/45 p-2">
                <div className="flex items-center justify-between text-[9px]">
                  <span className="font-bold text-foreground">{st.name}</span>
                  <span className="font-semibold text-success tabular-nums">انضباط: {st.score}</span>
                </div>
                <div className="mt-1.5 grid grid-cols-6 gap-1">
                  {st.bells.map((ok, i) => (
                    <span
                      key={i}
                      className={`rounded py-0.5 text-center text-[8px] font-bold tabular-nums ${
                        ok ? 'bg-success/15 text-success' : 'bg-warning/20 text-warning'
                      }`}
                    >
                      زنگ {i + 1 === 1 ? '۱' : i + 1 === 2 ? '۲' : i + 1 === 3 ? '۳' : i + 1 === 4 ? '۴' : i + 1 === 5 ? '۵' : '۶'}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-xl bg-muted px-3 py-1.5 text-[9px] text-muted-foreground">
            <span>ثبت آنی از راهرو با گوشی</span>
            <span className="font-semibold text-foreground">کارتکس تاریخ‌دار</span>
          </div>
        </div>
      );

    case 'karnameh-parent-chart':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-1.5">
            <span className="text-[10px] font-bold text-foreground">پورتال اولیا — نمودار مقایسه سه‌گانه</span>
            <span className="rounded-md bg-success/12 px-2 py-0.5 text-[9px] font-semibold text-success tabular-nums">
              علی رضایی • ۷۰۱
            </span>
          </div>

          <div className="flex-1 space-y-2 rounded-xl border border-border bg-card p-2.5">
            {[
              { subject: 'ریاضی', stu: '۱۹.۲۵', cls: '۱۷.۸۰', grade: '۱۷.۱۰', wStu: 'w-[94%]', wCls: 'w-[84%]' },
              { subject: 'علوم تجربی', stu: '۱۹.۵۰', cls: '۱۸.۱۰', grade: '۱۷.۵۰', wStu: 'w-[96%]', wCls: 'w-[86%]' },
            ].map((item) => (
              <div key={item.subject} className="space-y-1 rounded-lg bg-muted/45 p-2">
                <div className="flex justify-between text-[9px]">
                  <span className="font-bold text-foreground">{item.subject}</span>
                  <span className="text-muted-foreground tabular-nums">
                    دانش‌آموز: <strong className="text-success">{item.stu}</strong> | کلاس: {item.cls} | پایه: {item.grade}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className={`h-full rounded-full bg-success ${item.wStu}`} />
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className={`h-full rounded-full bg-primary ${item.wCls}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-xl bg-success/12 px-3 py-1.5 text-[9px] font-semibold text-success">
            <span>معدل کل: ۱۹.۳۷</span>
            <span>وضعیت انضباط: ۲۰ / ۲۰</span>
          </div>
        </div>
      );
  }
}

export function ProductUiPreview({ item, isHero = false, detailed = false }: ProductUiPreviewProps) {
  const [imgError, setImgError] = useState(false);
  const showRealImage = Boolean(item.imageSrc) && !imgError;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-muted/70">
      {showRealImage ? (
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          width={1280}
          height={800}
          loading={isHero ? 'eager' : 'lazy'}
          decoding={isHero ? 'sync' : 'async'}
          fetchPriority={isHero ? 'high' : 'auto'}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div className="h-full w-full p-2.5 sm:p-3.5">
          {renderPresetMock(item.uiMockPreset, detailed)}
        </div>
      )}
    </div>
  );
}
