import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

// Studio needs to be dynamically rendered (not statically generated).
export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
