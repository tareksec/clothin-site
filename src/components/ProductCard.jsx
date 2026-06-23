'use client';

import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import { siteConfig } from '@/config/site';
import { buildWhatsAppOrderUrl } from '@/lib/whatsapp';

export default function ProductCard({ product, onSelect }) {
  const { lang, t } = useLanguage();

  const title = lang === 'bn' ? product.title_bn : product.title_en;
  const description = lang === 'bn' ? product.description_bn : product.description_en;
  const currency = siteConfig.currency[lang];
  const price = Number(product.price).toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-US');

  const orderUrl = buildWhatsAppOrderUrl(product, lang);

  const open = () => onSelect?.(product);

  return (
    <article className="group flex flex-col">
      <button
        type="button"
        onClick={open}
        aria-label={`${title} — ${t.product.viewDetails}`}
        className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-brand-light text-left"
      >
        <Image
          src={product.imageUrl}
          alt={title}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        {/* Soft inner shadow on hover */}
        <span className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] transition-shadow duration-500 group-hover:shadow-[inset_0_-60px_50px_-20px_rgba(0,0,0,0.45)]" />
        {/* Hidden-until-hover details cue (desktop) */}
        <span className="absolute inset-x-0 bottom-0 flex items-center justify-center py-3 text-xs font-medium uppercase tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
          {t.product.viewDetails}
        </span>
      </button>

      <div className="flex flex-1 flex-col pt-3">
        <button type="button" onClick={open} className="text-left">
          <h3 className="line-clamp-1 text-sm font-medium tracking-wide text-ink transition-colors hover:text-brand sm:text-base">
            {title}
          </h3>
        </button>
        <p className="mt-1 line-clamp-1 text-xs text-ink/45">{description}</p>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-ink/40">{currency}</span>
          <span className="text-base font-semibold tracking-tight text-ink">{price}</span>
        </div>
        <a
          href={orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-3 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.041zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          </svg>
          {t.product.order}
        </a>
      </div>
    </article>
  );
}
