'use client';

import { useLanguage } from '@/i18n/LanguageProvider';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="bg-brand-light">
      <div className="container-narrow flex flex-col items-center py-16 text-center md:py-24">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-accent">
          {t.hero.cta}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-brand-dark sm:text-4xl md:text-5xl">
          {t.hero.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-gray-600 md:text-lg">
          {t.hero.subtitle}
        </p>
        <a
          href="#products"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-sm font-medium text-white shadow-lg shadow-brand/20 transition-transform hover:scale-[1.03]"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}
