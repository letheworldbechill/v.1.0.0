# Code Review – Website Editor

## Scope
- Reviewed the editor implementation in `index.html`.
- Focus areas: security, maintainability, and runtime robustness.

## Findings

### 1) Inconsistent output escaping in preview export (high)
**Status:** fixed.

A preview/export code path inserted `settings.faviconEmoji` directly into generated HTML without escaping. This could break generated markup and opened the door for injection payloads in exported preview HTML.

**Fix:** `escapeHtml(...)` is now applied in the preview generator as well.

---

### 2) Attribute serialization hardening for preview body metadata (medium)
**Status:** fixed.

`stylePreset` and `designDensity` were written into HTML attributes in preview mode without escaping. While these values are expected to be controlled enums, escaping at serialization points is safer and keeps behavior consistent with the main export path.

**Fix:** `escapeHtml(...)` is now used for both attributes.

---

### 3) Architecture/maintainability note: duplicate HTML generation paths (medium)
**Status:** open recommendation.

There are multiple HTML generation helpers with partially overlapping behavior (for example `generateHTML(...)` and `generatePreviewHTML(...)`). Security fixes had to be applied in both places, which is a sign of logic drift risk.

**Recommendation:** centralize escaping and serialization into a shared helper (single source of truth for HTML attributes/text interpolation).

## Suggested next steps
1. Add a tiny set of regression checks around generated markup escaping (especially metadata and favicon fields).
2. Refactor duplicated generators toward a common rendering utility for head/body serialization.
3. Consider a strict schema validation step for `settings` before export.
