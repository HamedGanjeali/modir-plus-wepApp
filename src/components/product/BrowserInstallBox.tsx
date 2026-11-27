import { useEffect, useState } from 'react';
import type { BrowserDownloadTarget, BrowserId, ExternalPortalLink } from '../../data/products';

interface BrowserInstallBoxProps {
  productName: string;
  accentTone: 'primary' | 'emerald';
  installTargets: BrowserDownloadTarget[];
  installVideoUrl: string;
  installVideoIsPlaceholder?: boolean;
  installVideoDuration: string;
  externalPortals?: ExternalPortalLink[];
  baleBotHandle: string;
  baleBotUrl: string;
  trialBadgeLabel: string;
  trialSummary: string;
}

const BROWSER_NAMES: Record<BrowserId, string> = {
  chrome: 'Google Chrome',
  edge: 'Microsoft Edge',
  firefox: 'Mozilla Firefox',
};

export function BrowserInstallBox({
  productName,
  accentTone,
  installTargets,
  installVideoUrl,
  installVideoIsPlaceholder = false,
  installVideoDuration,
  externalPortals,
  baleBotHandle,
  baleBotUrl,
  trialBadgeLabel,
  trialSummary,
}: BrowserInstallBoxProps) {
  const defaultBrowser = installTargets[0]?.browser ?? 'chrome';
  const [selectedBrowser, setSelectedBrowser] = useState<BrowserId>(defaultBrowser);
  const [detectedBrowser, setDetectedBrowser] = useState<BrowserId | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');

  const isPrimary = accentTone === 'primary';

  useEffect(() => {
    const ua = navigator.userAgent;
    const mobileDetected = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
    setIsMobile(mobileDetected);

    let browser: BrowserId | null = null;
    if (/Edg\//i.test(ua)) {
      browser = 'edge';
    } else if (/Firefox\//i.test(ua)) {
      browser = 'firefox';
    } else if (/Chrome\//i.test(ua) || /CriOS\//i.test(ua)) {
      browser = 'chrome';
    }

    if (browser && installTargets.some((t) => t.browser === browser)) {
      setDetectedBrowser(browser);
      setSelectedBrowser(browser);
    }
  }, [installTargets]);

  const activeTarget =
    installTargets.find((t) => t.browser === selectedBrowser) ?? installTargets[0];

  async function handleCopyPageUrl() {
    const pageUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopyState('copied');
      window.setTimeout(() => setCopyState('idle'), 2000);
    } catch {
      setCopyState('error');
      window.setTimeout(() => setCopyState('idle'), 3000);
    }
  }

  return (
    <div className="space-y-6">
      {isMobile && (
        <div className="card-surface rounded-2xl border border-warning/35 bg-warning/10 p-4 sm:p-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="min-w-0">
              <p className="text-sm font-bold text-foreground">
                شما با گوشی وارد شده‌اید؛ افزونه {productName} روی مرورگر رایانه دفتر مدرسه نصب می‌شود
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                آدرس این صفحه را کپی کرده و در ایتا یا بله برای خودتان بفرستید تا روی سیستم مدرسه باز کنید.
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopyPageUrl}
              className="inline-flex min-w-[240px] shrink-0 items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-xs font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span>
                {copyState === 'copied'
                  ? 'لینک کپی شد'
                  : copyState === 'error'
                    ? 'لینک را از نوار مرورگر کپی کنید'
                    : 'کپی لینک برای سیستم مدرسه'}
              </span>
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="card-surface rounded-3xl border border-border bg-card p-6 lg:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-extrabold text-foreground sm:text-xl">
              دریافت و نصب افزونه {productName} (نسخه دسکتاپ)
            </h3>
            {detectedBrowser && (
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                  isPrimary ? 'bg-primary/10 text-primary' : 'bg-success/10 text-success'
                }`}
              >
                مرورگر فعلی: {BROWSER_NAMES[detectedBrowser]}
              </span>
            )}
          </div>

          <div
            role="tablist"
            aria-label="انتخاب مرورگر برای نصب"
            className="mt-4 flex flex-wrap gap-2 rounded-2xl border border-border bg-muted/50 p-1.5"
          >
            {installTargets.map((target) => {
              const isSelected = target.browser === selectedBrowser;
              const isDetected = target.browser === detectedBrowser;

              return (
                <button
                  key={target.browser}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedBrowser(target.browser)}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm ${
                    isSelected
                      ? isPrimary
                        ? 'bg-primary text-primary-foreground shadow-xs'
                        : 'bg-success text-primary-foreground shadow-xs'
                      : 'text-muted-foreground hover:bg-card hover:text-foreground'
                  }`}
                >
                  <span dir="ltr">{BROWSER_NAMES[target.browser]}</span>
                  {isDetected && (
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] ${
                        isSelected ? 'bg-white/20 text-primary-foreground' : 'bg-primary/10 text-primary'
                      }`}
                    >
                      شما
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {activeTarget && (
            <div className="mt-5 rounded-2xl border border-border bg-muted/35 p-5">
              <p className="text-base font-bold text-foreground">{activeTarget.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                {activeTarget.note}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                {activeTarget.isPlaceholderUrl ? (
                  <a
                    href={baleBotUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      isPrimary ? 'bg-primary' : 'bg-success'
                    }`}
                  >
                    <span>دریافت بسته {BROWSER_NAMES[activeTarget.browser]} در بله</span>
                    <svg className="h-4 w-4 rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ) : (
                  <a
                    href={activeTarget.installUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      isPrimary ? 'bg-primary' : 'bg-success'
                    }`}
                  >
                    <span>نصب روی {BROWSER_NAMES[activeTarget.browser]}</span>
                    <svg className="h-4 w-4 rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}

                {!installVideoIsPlaceholder ? (
                  <a
                    href={installVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
                  >
                    <span>ویدیوی راهنمای نصب ({installVideoDuration})</span>
                  </a>
                ) : (
                  <a
                    href="/guide#install-steps"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
                  >
                    <span>راهنمای گام‌به‌گام نصب دستی</span>
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <a
              href="/guide"
              className="text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded"
            >
              مشاهده راهنمای گام‌به‌گام نصب در مرورگرها
            </a>

            {!isMobile && (
              <button
                type="button"
                onClick={handleCopyPageUrl}
                className="inline-flex min-w-[235px] items-center justify-center rounded-xl border border-border bg-background px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {copyState === 'copied'
                  ? 'لینک کپی شد'
                  : copyState === 'error'
                    ? 'آدرس را از نوار مرورگر کپی کنید'
                    : 'کپی لینک صفحه برای ارسال به سیستم مدرسه'}
              </button>
            )}
          </div>
        </div>

        <div className="card-surface flex flex-col justify-between rounded-3xl border border-border bg-card p-6 lg:col-span-5">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
              {trialBadgeLabel}
            </span>

            <h3 className="mt-4 text-lg font-extrabold text-foreground">
              فعال‌سازی تست ۱۰ روزه و استعلام تعرفه در بله
            </h3>

            <p className="mt-2.5 text-sm leading-[1.85] text-muted-foreground text-pretty">
              {trialSummary}
            </p>
          </div>

          <div className="mt-6 space-y-3 border-t border-border pt-5">
            <a
              href={baleBotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span>ورود به ربات بله {productName}</span>
              <span dir="ltr" className="font-mono text-xs">
                {baleBotHandle}
              </span>
            </a>

            <p className="text-center text-xs text-muted-foreground">
              دریافت کد تست رایگان، استعلام تعرفه به‌روز و مدیریت دستگاه‌های متصل
            </p>
          </div>
        </div>
      </div>

      {externalPortals && externalPortals.length > 0 && (
        <div className="card-surface rounded-3xl border border-success/30 bg-card p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
                بدون نیاز به نصب افزونه
              </span>
              <h3 className="mt-2 text-lg font-extrabold text-foreground">
                درگاه‌های وب اختصاصی دبیران، معاونین و اولیا
              </h3>
            </div>
            <p className="text-xs text-muted-foreground">
              قابل باز کردن مستقیم با گوشی موبایل یا لپ‌تاپ
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {externalPortals.map((portal) => (
              <a
                key={portal.url}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-border bg-muted/35 p-4 transition-colors hover:border-success/50 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div>
                  <p className="text-sm font-bold text-foreground group-hover:text-success">
                    {portal.label}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{portal.role}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-success">
                  <span>ورود به درگاه وب</span>
                  <svg className="h-3.5 w-3.5 rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
