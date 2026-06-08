"use client";

import { useLanguage } from "../i18n/LanguageProvider";

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "en" ? "sq" : "en")}
      className="grid h-11 min-w-11 place-items-center rounded-full border border-border-strong bg-surface px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:border-ink"
      aria-label={t.languageToggle.ariaLabel}
    >
      {t.languageToggle.label}
    </button>
  );
}
