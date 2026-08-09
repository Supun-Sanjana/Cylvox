import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.cylvox.com';

  const routes = [
    '',
    '/services',
    '/services/web-development',
    '/services/ui-ux-design',
    '/services/optimization',
    '/services/technical-seo',
    '/services/ai-automation',
    '/products',
    '/work',
    '/about',
    '/contact',
    '/trust-signal-auditor',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'yearly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
