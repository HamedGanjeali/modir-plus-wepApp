import { useEffect, useId, useRef, useState } from 'react';
import type { GalleryPreviewItem } from '../../data/products';
import { ProductUiPreview } from './ProductUiPreview';

interface ProductLightboxGalleryProps {
  productName: string;
  accentTone: 'primary' | 'emerald';
  items: GalleryPreviewItem[];
}

const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

function toPersianDigit(num: number): string {
  return String(num)
    .split('')
    .map((d) => PERSIAN_DIGITS[Number(d)] ?? d)
    .join('');
}

export function ProductLightboxGallery({
  productName,
  accentTone,
  items,
}: ProductLightboxGalleryProps) {
  const dialogId = useId();
  const titleId = `${dialogId}-title`;
  const descId = `${dialogId}-desc`;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const isOpen = activeIndex !== null;
  const activeItem = activeIndex !== null ? items[activeIndex] : null;
  const isPrimary = accentTone === 'primary';

  function openLightbox(index: number, triggerElement: HTMLButtonElement) {
    triggerRef.current = triggerElement;
    setActiveIndex(index);
  }

  function closeLightbox() {
    setActiveIndex(null);
    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }

  function goNext() {
    setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % items.length));
  }

  function goPrev() {
    setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + items.length) % items.length));
  }

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
        return;
      }

      // RTL keyboard navigation: ArrowLeft advances forward, ArrowRight returns
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goNext();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goPrev();
        return;
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, items.length]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={item.id}
            className="card-surface group flex flex-col justify-between rounded-3xl border border-border bg-card p-4 transition-colors hover:border-primary/45 sm:p-5"
          >
            <button
              type="button"
              onClick={(e) => openLightbox(index, e.currentTarget)}
              aria-label={`بزرگ‌نمایی ${item.title}`}
              className="relative block w-full cursor-zoom-in rounded-2xl text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              <ProductUiPreview item={item} />
              <span className="pointer-events-none absolute end-3 bottom-3 inline-flex items-center gap-1 rounded-lg border border-border bg-card/90 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 sm:opacity-90">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>بزرگ‌نمایی</span>
              </span>
            </button>

            <div className="mt-4 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-base font-bold text-foreground sm:text-lg">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm text-pretty">
                  {item.caption}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-lg px-2 py-0.5 text-xs font-bold tabular-nums ${
                  isPrimary ? 'bg-primary/10 text-primary' : 'bg-success/10 text-success'
                }`}
              >
                {toPersianDigit(index + 1)} از {toPersianDigit(items.length)}
              </span>
            </div>
          </article>
        ))}
      </div>

      {isOpen && activeItem && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-4 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            className="card-surface w-full max-w-4xl rounded-3xl border border-border bg-card p-4 shadow-2xl sm:p-6"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold tabular-nums ${
                      isPrimary ? 'bg-primary/10 text-primary' : 'bg-success/10 text-success'
                    }`}
                  >
                    {toPersianDigit(activeIndex + 1)} از {toPersianDigit(items.length)}
                  </span>
                  <span className="text-xs text-muted-foreground">{productName}</span>
                </div>
                <h3 id={titleId} className="mt-1.5 text-lg font-extrabold text-foreground sm:text-xl">
                  {activeItem.title}
                </h3>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                aria-label="بستن پیش‌نمایش"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="mt-4">
              <ProductUiPreview item={activeItem} detailed />
            </div>

            <div className="mt-4 flex flex-col justify-between gap-4 border-t border-border pt-4 sm:flex-row sm:items-center">
              <p id={descId} className="max-w-prose text-xs leading-relaxed text-muted-foreground sm:text-sm text-pretty">
                {activeItem.caption}
              </p>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>قبلی</span>
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>بعدی</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
