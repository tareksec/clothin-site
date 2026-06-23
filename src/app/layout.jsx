import './globals.css';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'দুমকি ওড়না ঘর | Dumki Orna Ghor',
  description:
    "বাংলাদেশের বিশ্বস্ত ফ্যাশন ডেস্টিনেশন। প্রিমিয়াম কোয়ালিটির পোশাক ও আধুনিক ডিজাইনের এক্সক্লুসিভ কালেকশন।",
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'দুমকি ওড়না ঘর | Dumki Orna Ghor',
    description: 'Fashion that defines you',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#7c3a52',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className="font-bangla">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
