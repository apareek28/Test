import type { MetadataRoute } from 'next';
import { blogPosts, brand, servicePages } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    '',
    '/services',
    '/industries',
    '/case-studies',
    '/about',
    '/blog',
    '/contact',
    '/book-strategy-call',
    '/resources',
    '/faq',
    '/careers',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
    '/gdpr-compliance',
    '/ccpa-notice',
    '/disclaimer',
    '/html-sitemap'
  ];

  return [
    ...staticPages.map((path) => ({ url: `${brand.url}${path}`, lastModified: now })),
    ...servicePages.map((service) => ({ url: `${brand.url}${service.href}`, lastModified: now })),
    ...blogPosts.map((post) => ({ url: `${brand.url}/blog/${post.slug}`, lastModified: now }))
  ];
}
