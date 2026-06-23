'use client';

import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';

// High-quality, copyright-free South Asian / traditional boutique fashion image.
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1280&q=80';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-canvas">
      <div className="container-narrow grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:gap-14 md:py-24 lg:py-28">
        {/* Editorial typographic column */}
        <div className="order-2 flex flex-col md:order-1">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-brand sm:text-sm">
            {t.badges.elegant}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t.hero.banner}
          </h1>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-ink/60 sm:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#products" className="btn-ink group">
              {t.hero.cta}
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a href="/how-to-order" className="btn-outline">
              {t.nav.howToOrder}
            </a>
          </div>
        </div>

        {/* High-fashion image column */}
        <div className="relative order-1 md:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl shadow-ink/10">
            <Image
              src={HERO_IMAGE}
              alt={t.hero.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          {/* Subtle rose-gold accent frame */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-brand-accent/40" />
        </div>
      </div>
    </section>
  );
}
