'use client';

import { useLanguage } from '@/i18n/LanguageProvider';

const icons = {
  premium: 'M5 3l1.5 4.5L11 9l-4.5 1.5L5 15l-1.5-4.5L-1 9l4.5-1.5L5 3z',
};

export default function Features() {
  const { t } = useLanguage();
  const items = [
    t.features.premium,
    t.features.trendy,
    t.features.affordable,
    t.features.delivery,
    t.features.trusted,
  ];
  return (
    <section className="border-y border-black/5 bg-white py-20 md:py-24">
      <div className="container-narrow">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {t.features.heading}
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center rounded-2xl bg-canvas p-6 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 1l2.6 5.3L18.5 7l-4.2 4.1 1 5.9L10 14.2 4.7 17l1-5.9L1.5 7l5.9-.7L10 1z" />
                </svg>
              </span>
              <p className="text-sm font-medium tracking-wide text-ink/80">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
