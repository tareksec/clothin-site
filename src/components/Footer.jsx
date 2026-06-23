'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const { lang, t } = useLanguage();
  const year = new Date().getFullYear();

  const badges = [t.badges.elegant, t.badges.fast, t.badges.quality];

  return (
    <footer id="contact" className="bg-ink text-canvas">
      <div className="container-narrow grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 md:grid-cols-3 md:py-20">
        {/* Brand story */}
        <div>
          <h3 className="text-lg font-bold tracking-wide">{siteConfig.brand[lang]}</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{t.footer.aboutText}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            {t.footer.quickLinks}
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link href="/" className="hover:text-white">{t.nav.home}</Link></li>
            <li><Link href="/#products" className="hover:text-white">{t.nav.products}</Link></li>
            <li><Link href="/about" className="hover:text-white">{t.nav.about}</Link></li>
            <li><Link href="/how-to-order" className="hover:text-white">{t.nav.howToOrder}</Link></li>
          </ul>
        </div>

        {/* Customer support */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            {t.footer.contact}
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp: 01875-148566
              </a>
            </li>
            <li>
              <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <p className="container-narrow text-center text-xs text-white/60">
          © {year} {siteConfig.brand[lang]}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
