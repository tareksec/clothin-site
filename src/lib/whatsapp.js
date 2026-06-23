import { siteConfig } from '@/config/site';

// Builds a URL-safe WhatsApp order link for a given product and language.
export function buildWhatsAppOrderUrl(product, lang) {
  const brand = siteConfig.brand[lang];
  const title = lang === 'bn' ? product.title_bn : product.title_en;
  const description = lang === 'bn' ? product.description_bn : product.description_en;
  const currency = siteConfig.currency[lang];

  // First 60 characters of the active-language description.
  const shortDesc = (description || '').slice(0, 60).trim();

  const message =
    `🛍️ *New Order Request from ${brand}*\n` +
    `• *Product:* ${title}\n` +
    `• *Price:* ${product.price} ${currency}\n` +
    `• *Details:* ${shortDesc}...`;

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
