import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { clientConfig } from '@/lib/sanity';
import { schemaTypes } from '@/sanity/schema';

// Full Studio config reusing the hardcoded project IDs from src/lib/sanity.js.
export default defineConfig({
  name: 'dumki-orna-ghor-studio',
  title: 'দুমকি ওড়না ঘর Studio',
  basePath: '/studio',
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  plugins: [structureTool(), visionTool({ defaultApiVersion: clientConfig.apiVersion })],
  schema: {
    types: schemaTypes,
  },
});
