import { useId, useState } from 'react';

export interface FaqEntry {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqEntry[];
  defaultOpenIndex?: number | null;
}

const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

function toPersianNumber(num: number): string {
  return String(num)
    .split('')
    .map((digit) => PERSIAN_DIGITS[Number(digit)] ?? digit)
    .join('');
}

export function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-faq-btn-${index}`;
        const panelId = `${baseId}-faq-panel-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/35"
          >
            <h3 className="text-sm font-bold text-foreground sm:text-base">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => handleToggle(index)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-start transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary tabular-nums">
                    {toPersianNumber(index + 1)}
                  </span>
                  <span className="min-w-0 leading-snug text-foreground">{item.question}</span>
                </span>

                <svg
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-primary' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="border-t border-border/80 bg-muted/25 px-5 py-4 text-sm leading-[1.85] text-muted-foreground"
            >
              <p className="max-w-prose text-pretty">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
