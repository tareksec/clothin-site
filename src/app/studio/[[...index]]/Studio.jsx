'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

// NextStudio uses React Context, so it must run as a Client Component.
export default function Studio() {
  return <NextStudio config={config} />;
}
