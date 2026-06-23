'use client';

import { useLanguage } from '@/i18n/LanguageProvider';

export default function LanguageToggle({ className = '' }) {
  const { t, toggleLang } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Toggle language"
      className={`rounded-full border border-brand/30 px-3 py-1.5 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white ${className}`}
    >
      {t.langToggle}
    </button>
  );
}
