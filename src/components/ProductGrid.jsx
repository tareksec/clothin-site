'use client';

import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';
import ProductCard from './ProductCard';
import ProductCardPlaceholder from './ProductCardPlaceholder';
import ProductModal from './ProductModal';

export default function ProductGrid({ products }) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);
  const hasProducts = Array.isArray(products) && products.length > 0;

  return (
    <section id="products" className="bg-canvas py-20 md:py-24">
      <div className="container-narrow">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-brand">
            {t.badges.quality}
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {t.productsSection.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-pretty text-sm text-ink/55">
            {hasProducts ? t.productsSection.subheading : t.productsSection.empty}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {hasProducts
            ? products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={setSelected}
                />
              ))
            : Array.from({ length: 4 }).map((_, i) => (
                <ProductCardPlaceholder key={`placeholder-${i}`} index={i} />
              ))}
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
