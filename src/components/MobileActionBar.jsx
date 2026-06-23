'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import { siteConfig } from '@/config/site';

// Sticky fixed-action element for easy navigation on mobile devices.
export default function MobileActionBar() {
  const { t } = useLanguage();
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white/95 px-4 py-2.5 backdrop-blur md:hidden">
      <div className="flex items-center gap-2">
        <a
          href="/#products"
          className="flex-1 rounded-full border border-brand px-4 py-2.5 text-center text-sm font-medium text-brand"
        >
          {t.nav.products}
        </a>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex-1"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
          </svg>
          {t.product.order}
        </a>
      </div>
    </div>
  );
}
