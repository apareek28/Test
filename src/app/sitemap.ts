import type { MetadataRoute } from 'next';
import { allSiteLinks } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.aetherautomate.com';
  return allSiteLinks.map((path) => ({ url: `${base}${path}`, changeFrequency: 'weekly', priority: path === '/' ? 1 : 0.7 }));
}
