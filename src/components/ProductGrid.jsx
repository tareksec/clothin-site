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
    <section id="products" className="py-12 md:py-16">
      <div className="container-narrow">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
            {t.productsSection.heading}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            {hasProducts ? t.productsSection.subheading : t.productsSection.empty}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
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
