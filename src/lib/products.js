import { sanityClient, urlFor } from '@/lib/sanity';

// GROQ query for all products from the live Sanity backend.
const PRODUCTS_QUERY = `*[_type == "product"]{
  _id,
  title_bn,
  title_en,
  price,
  description_bn,
  description_en,
  image
}`;

// Fetches products and maps backend docs to the existing frontend fields.
export async function getProducts() {
  const docs = await sanityClient.fetch(PRODUCTS_QUERY);

  return (docs || []).map((doc) => ({
    id: doc._id,
    title_bn: doc.title_bn,
    title_en: doc.title_en,
    price: doc.price,
    description_bn: doc.description_bn,
    description_en: doc.description_en,
    // Resolve the Sanity image reference to a string URL for the UI layer.
    imageUrl: doc.image ? urlFor(doc.image).width(600).quality(80).url() : '',
  }));
}
