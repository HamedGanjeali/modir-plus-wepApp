# Architecture Decision Records (ADRs) — Format Specification

این سند قالب رسمی ثبت تصمیمات معماری در پروژه **مدیر پلاس** را مشخص می‌کند.

## ۱. نام‌گذاری فایل‌ها
- مسیر نگهداری: `docs/decisions/ADR-NNN-short-title.md`
- شماره‌گذاری متوالی (`ADR-001`, `ADR-002`, ...) بدون استفاده مجدد از شماره‌های قبلی.
- پس از ساخت یا ویرایش هر ADR، فهرست `docs/DECISIONS.md` حتماً به‌روزرسانی شود.

## ۲. وضعیت‌ها (`Status`)
- `PROPOSED`: پیش‌نویس جدید در انتظار تایید نهایی انسان/مالک محصول
- `ACCEPTED`: تصمیم نهایی تاییدشده
- `DEPRECATED`: منسوخ‌شده
- `SUPERSEDED by ADR-XXX`: جایگزین‌شده با تصمیم جدیدتر

## ۳. قالب استاندارد

```markdown
# ADR-NNN: Short Title

## Status

PROPOSED | ACCEPTED | DEPRECATED | SUPERSEDED by ADR-XXX

## Date

YYYY-MM-DD

## Context

مسئله یا نیاز معماری که منجر به طرح این تصمیم شد.

## Options Considered

### Option A: ...
- Pros: ...
- Cons: ...

### Option B: ...
- Pros: ...
- Cons: ...

## Decision

گزینه انتخاب‌شده و دلیل فنی/محصولی آن.

## Consequences

- پیامدهای مثبت و محدودیت‌های ایجادشده
- اقدامات بعدی موردنیاز
```
