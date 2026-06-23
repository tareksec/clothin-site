'use client';

import Image from 'next/image';

// Curated copyright-free traditional/ethnic fashion images for the empty state.
const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1610189019281-c7a8c1f3a4a3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1612722432474-b971cdcea546?auto=format&fit=crop&w=600&q=80',
];

// A premium-looking placeholder card used when no products are available yet.
export default function ProductCardPlaceholder({ index = 0 }) {
  const image = PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-light">
        <Image
          src={image}
          alt=""
          fill
          loading="lazy"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <div className="h-4 w-3/4 rounded-full bg-gray-200" />
        <div className="h-3 w-full rounded-full bg-gray-100" />
        <div className="mt-1 h-5 w-1/3 rounded-full bg-brand-light" />
        <div className="mt-3 h-9 w-full rounded-full bg-gray-100" />
      </div>
    </article>
  );
}
