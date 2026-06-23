'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  const { t } = useLanguage();
  return (
    <section id="products" className="py-12 md:py-16">
      <div className="container-narrow">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
            {t.productsSection.heading}
          </h2>
          <p className="mt-2 text-sm text-gray-500">{t.productsSection.subheading}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
