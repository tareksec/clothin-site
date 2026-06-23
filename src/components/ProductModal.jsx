'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import { siteConfig } from '@/config/site';
import { buildWhatsAppOrderUrl } from '@/lib/whatsapp';

export default function ProductModal({ product, onClose }) {
  const { lang, t } = useLanguage();
  const [zoomed, setZoomed] = useState(false);

  const open = Boolean(product);

  // Lock body scroll while the modal is open and close on Escape.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  // Reset zoom whenever the displayed product changes.
  useEffect(() => {
    setZoomed(false);
  }, [product?.id]);

  if (!open) return null;

  const title = lang === 'bn' ? product.title_bn : product.title_en;
  const description = lang === 'bn' ? product.description_bn : product.description_en;
  const currency = siteConfig.currency[lang];
  const orderUrl = buildWhatsAppOrderUrl(product, lang);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 backdrop-blur-sm animate-fade-in sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-canvas shadow-2xl animate-slide-up sm:max-h-[88vh] sm:rounded-3xl sm:animate-scale-in md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.product.close}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-canvas hover:text-brand"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image — 100% on mobile, 50% on desktop */}
        <div className="relative w-full shrink-0 overflow-hidden bg-brand-light md:w-1/2">
          <button
            type="button"
            onClick={() => setZoomed((v) => !v)}
            className="group relative block aspect-[3/4] w-full cursor-zoom-in"
            aria-label={t.product.zoomHint}
          >
            <Image
              src={product.imageUrl}
              alt={title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-transform duration-500 ${
                zoomed ? 'scale-150 cursor-zoom-out' : 'group-hover:scale-105'
              }`}
            />
            <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              {t.product.zoomHint}
            </span>
          </button>
        </div>

        {/* Details */}
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            <h2 className="text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
              {title}
            </h2>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-sm font-medium uppercase tracking-wide text-ink/40">{currency}</span>
              <span className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
                {Number(product.price).toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-US')}
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
                {t.product.details}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">
                {description}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[t.badges.elegant, t.badges.quality, t.badges.fast].map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Sticky-on-mobile order action */}
          <div className="sticky bottom-0 border-t border-black/5 bg-canvas/95 p-4 backdrop-blur sm:p-5">
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.041zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              </svg>
              {t.product.order}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
