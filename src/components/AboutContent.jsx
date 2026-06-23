'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1200&q=80';

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="pb-8">
      {/* Header */}
      <section className="bg-brand-light/60">
        <div className="container-narrow py-14 text-center md:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            {a.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-brand-dark md:text-4xl text-balance">
            {a.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base text-pretty">
            {a.intro}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container-narrow grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-2 md:py-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-100">
          <Image
            src={ABOUT_IMAGE}
            alt={a.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">{a.storyTitle}</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base text-pretty">
            {a.storyText}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="container-narrow grid grid-cols-1 gap-5 pb-12 sm:grid-cols-3 md:pb-16">
        {a.values.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold text-brand">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.text}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="container-narrow">
        <div className="rounded-3xl bg-brand-dark px-6 py-12 text-center text-white md:py-16">
          <h2 className="text-2xl font-bold md:text-3xl text-balance">{a.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/80 text-pretty">{a.ctaText}</p>
          <Link
            href="/#products"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-sm font-medium text-brand-dark transition-transform hover:scale-[1.04]"
          >
            {a.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
