import { useId, useState, type KeyboardEvent } from 'react';
import type { UseCaseItem } from '../../data/products';

interface WorkflowScenarioTabsProps {
  productName: string;
  accentTone: 'primary' | 'emerald';
  useCases: UseCaseItem[];
}

const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

function toPersianDigit(num: number): string {
  return String(num)
    .split('')
    .map((d) => PERSIAN_DIGITS[Number(d)] ?? d)
    .join('');
}

export function WorkflowScenarioTabs({
  productName,
  accentTone,
  useCases,
}: WorkflowScenarioTabsProps) {
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const isPrimary = accentTone === 'primary';
  const activeCase = useCases[activeIndex] ?? useCases[0];

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;
    if (event.key === 'ArrowLeft') {
      nextIndex = (index + 1) % useCases.length;
    } else if (event.key === 'ArrowRight') {
      nextIndex = (index - 1 + useCases.length) % useCases.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = useCases.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setActiveIndex(nextIndex);
      const nextBtn = document.getElementById(`${baseId}-tab-${nextIndex}`);
      nextBtn?.focus();
    }
  }

  return (
    <div className="space-y-5">
      <div
        role="tablist"
        aria-label={`ماژول‌ها و سناریوهای ${productName}`}
        className="flex flex-wrap gap-2 rounded-2xl border border-border bg-card/85 p-2"
      >
        {useCases.map((item, index) => {
          const isSelected = index === activeIndex;
          const tabId = `${baseId}-tab-${index}`;
          const panelId = `${baseId}-panel-${index}`;

          return (
            <button
              key={item.moduleLabel}
              type="button"
              id={tabId}
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => handleTabKeyDown(e, index)}
              className={`flex min-w-0 items-center gap-2 rounded-xl px-3.5 py-2.5 text-start text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm ${
                isSelected
                  ? isPrimary
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'bg-success text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <span
                className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px] font-bold tabular-nums ${
                  isSelected ? 'bg-white/20 text-primary-foreground' : 'bg-muted text-foreground'
                }`}
              >
                {toPersianDigit(index + 1)}
              </span>
              <span className="truncate">{item.moduleLabel}</span>
            </button>
          );
        })}
      </div>

      {activeCase && (
        <div
          id={`${baseId}-panel-${activeIndex}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${activeIndex}`}
          className="card-surface rounded-3xl border border-border bg-card p-6 sm:p-7"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="min-w-0 lg:col-span-7">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                  isPrimary ? 'bg-primary/10 text-primary' : 'bg-success/10 text-success'
                }`}
              >
                نقش کاربر: {activeCase.role}
              </span>

              <h3 className="mt-3 text-xl font-extrabold text-foreground sm:text-2xl text-balance">
                {activeCase.scenarioTitle}
              </h3>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-border bg-muted/45 p-4">
                  <p className="text-xs font-bold text-muted-foreground">مسئله روزمره</p>
                  <p className="mt-1 text-sm leading-[1.8] text-foreground/90 text-pretty">
                    {activeCase.problem}
                  </p>
                </div>

                <div
                  className={`rounded-2xl border p-4 ${
                    isPrimary
                      ? 'border-primary/25 bg-primary/8'
                      : 'border-success/25 bg-success/8'
                  }`}
                >
                  <p
                    className={`text-xs font-bold ${
                      isPrimary ? 'text-primary' : 'text-success'
                    }`}
                  >
                    نتیجه در {productName}
                  </p>
                  <p className="mt-1 text-sm leading-[1.8] text-foreground text-pretty">
                    {activeCase.outcome}
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <div className="rounded-2xl border border-border bg-muted/50 p-5">
                <p className="text-xs font-bold text-foreground">گام‌های اجرایی در این ماژول</p>
                <ol className="mt-4 space-y-3">
                  {activeCase.steps.map((stepText, stepIdx) => (
                    <li
                      key={stepText}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card px-3.5 py-3"
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold tabular-nums ${
                          isPrimary ? 'bg-primary/15 text-primary' : 'bg-success/15 text-success'
                        }`}
                      >
                        {toPersianDigit(stepIdx + 1)}
                      </span>
                      <span className="text-xs font-medium leading-relaxed text-foreground sm:text-sm">
                        {stepText}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
