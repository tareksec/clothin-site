// Sanity schema for a product, matching the storefront's dual-language fields.
export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title_bn',
      title: 'Title (Bangla)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title_en',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'description_bn',
      title: 'Description (Bangla)',
      type: 'text',
    },
    {
      name: 'description_en',
      title: 'Description (English)',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: 'title_en',
      subtitle: 'title_bn',
      media: 'image',
    },
  },
};

export const schemaTypes = [product];
