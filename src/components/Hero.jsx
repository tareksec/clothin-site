'use client';

import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';

// High-quality, copyright-free South Asian / traditional boutique fashion image.
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=80';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Full-bleed background banner image */}
      <div className="relative h-[78vh] min-h-[460px] w-full md:h-[86vh]">
        <Image
          src={HERO_IMAGE}
          alt={t.hero.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Elegant gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-brand-dark/70" />

        {/* Overlay content */}
        <div className="container-narrow absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-accent sm:text-sm">
            {t.badges.elegant}
          </p>
          <h1 className="max-w-4xl text-2xl font-bold leading-snug text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            {t.hero.banner}
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-white/85 sm:text-base md:text-lg">
            {t.hero.subtitle}
          </p>
          <a
            href="#products"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-medium text-white shadow-xl shadow-black/30 transition-transform hover:scale-[1.04] sm:text-base"
          >
            {t.hero.cta}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        {/* Soft fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
}
