# দুমকি ওড়না ঘর (Dumki Orna Ghor)

Elegant, mobile-first, ultra-lightweight clothing eCommerce storefront built with **Next.js (App Router)** and **Tailwind CSS**.

## Features

- 🌐 Bangla / English localization (default Bangla) with a navbar toggle
- ✒️ `SolaimanLipi` font applied dynamically for Bangla, modern sans-serif for English
- 📱 Mobile-first responsive grid (2 cols mobile → 3/4 cols desktop)
- 🖼️ Consistent 3:4 product images with lazy-loading
- 💬 Dynamic WhatsApp ordering with `encodeURIComponent`
- 🧩 Sanity-ready dual-language product data (`title_bn`, `title_en`, `description_bn`, `description_en`, `imageUrl`)
- 🚀 Production-ready, deployable on Vercel

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Configuration

Edit `src/config/site.js` to set the WhatsApp number, brand name, and social links.

## Connecting Sanity later

Product objects in `src/data/products.js` already mirror the headless CMS schema:
`id`, `title_bn`, `title_en`, `price`, `description_bn`, `description_en`, `imageUrl`.
Swap the static array for a Sanity query and the UI keeps working.

## Deploy

Deploy to Vercel with zero config: import the repo and click **Deploy**.
