import Studio from './Studio';

// metadata/viewport must be exported from a Server Component (this file).
export { metadata, viewport } from 'next-sanity/studio';

// Studio is rendered statically per the next-sanity recommended pattern.
export const dynamic = 'force-static';

export default function StudioPage() {
  return <Studio />;
}
