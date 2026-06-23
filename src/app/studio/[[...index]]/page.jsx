import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export { metadata, viewport } from 'next-sanity/studio';

// Studio is rendered statically per the next-sanity recommended pattern.
export const dynamic = 'force-static';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
