'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/i18n/LanguageProvider';
import { siteConfig } from '@/config/site';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const { lang, t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/#products', label: t.nav.products },
    { href: '/about', label: t.nav.about },
    { href: '/how-to-order', label: t.nav.howToOrder },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-canvas/70 backdrop-blur-lg">
      <nav className="container-narrow flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.brand[lang]}
            width={40}
            height={40}
            className="h-9 w-9 rounded-full object-contain md:h-10 md:w-10"
          />
          <span className="text-base font-bold tracking-wide text-ink md:text-lg">
            {siteConfig.brand[lang]}
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                data-active={isActive(link.href)}
                className="nav-underline text-sm font-medium uppercase tracking-wide text-ink/70 transition-colors hover:text-ink data-[active=true]:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            type="button"
            className="md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="container-narrow flex flex-col gap-1 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium uppercase tracking-wide text-ink/80 transition-colors hover:bg-brand-light hover:text-brand"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
