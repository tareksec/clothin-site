'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import { siteConfig } from '@/config/site';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#products', label: t.nav.products },
    { href: '#categories', label: t.nav.categories },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="container-narrow flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.brand[lang]}
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-contain"
          />
          <span className="text-lg font-bold tracking-tight text-brand">
            {siteConfig.brand[lang]}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            type="button"
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="container-narrow flex flex-col gap-1 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-light hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
