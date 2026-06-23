'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import { categories } from '@/data/categories';

export default function CategoryStrip() {
  const { lang, t } = useLanguage();
  return (
    <section id="categories" className="bg-gray-50 py-12 md:py-16">
      <div className="container-narrow">
        <h2 className="mb-8 text-center text-2xl font-bold text-brand-dark md:text-3xl">
          {t.nav.categories}
        </h2>
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#products"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              {lang === 'bn' ? cat.bn : cat.en}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
