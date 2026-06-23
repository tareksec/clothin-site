'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'dog-lang';

export function LanguageProvider({ children }) {
  // Default language is Bangla.
  const [lang, setLang] = useState('bn');

  useEffect(() => {
    const saved = typeof window !== 'undefined' && window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'bn' || saved === 'en') setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = lang;
    // Toggle the global Bangla font class on <body>.
    document.body.classList.toggle('font-bangla', lang === 'bn');
    document.body.classList.toggle('font-sans', lang !== 'bn');
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
