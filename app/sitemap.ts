import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.cylvox.com';

  const routes = [
    // Home
    '',
    // Case Studies
    '/case-studies/zymgut',
    '/case-studies/join-outquest',
    '/case-studies/sg-plantation-erp',
    '/case-studies/micro-credit-erp',
    '/case-studies/nvti-baddegama',
    // Services
    '/services',
    '/services/web-development',
    '/services/technical-seo',
    '/services/ai-automation',
    '/services/optimization',
    '/services/ui-ux-design',
    // Product & Plugin Legal
    '/trust-signal-auditor',
    '/trust-signal-auditor/terms',
    '/trust-signal-auditor/privacy',
    // Partnership
    '/agency-partners',
    // Content
    '/blog',
    '/blog/why-n8n-for-automation',
    '/blog/nextjs-app-router-seo',
    '/work',
    '/products',
    // Company
    '/about',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'yearly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
