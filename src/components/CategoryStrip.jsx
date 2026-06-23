'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import { categories } from '@/data/categories';

export default function CategoryStrip() {
  const { lang, t } = useLanguage();
  return (
    <section id="categories" className="bg-canvas py-20 md:py-24">
      <div className="container-narrow">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {t.nav.categories}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#products"
              className="rounded-full border border-ink/15 bg-transparent px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-ink/70 transition-all duration-300 hover:border-ink hover:bg-ink hover:text-canvas"
            >
              {lang === 'bn' ? cat.bn : cat.en}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
