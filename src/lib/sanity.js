import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Hardcoded client config so no external Vercel env vars are required.
// projectId/dataset are public-safe values (exposed in browser requests).
export const clientConfig = {
  projectId: 'ukgacqwg',
  dataset: 'production',
  apiVersion: '2024-03-01',
  useCdn: true,
};

export const sanityClient = createClient(clientConfig);

// Image URL builder helper.
const builder = imageUrlBuilder(sanityClient);

// Usage: urlFor(source).width(600).url()
export function urlFor(source) {
  return builder.image(source);
}
