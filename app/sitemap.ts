import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.cylvox.com';
  const lastModified = new Date('2026-08-26');

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
    '/products/n8n-templates',
    '/products/trust-signal-auditor',
    '/products/trust-signal-auditor/terms',
    '/products/trust-signal-auditor/privacy',
    // Partnership
    '/agency-partners',
    // Content — Blog Hub + All Posts
    '/blog',
    '/blog/why-n8n-for-automation',
    '/blog/nextjs-app-router-seo',
    '/blog/technical-seo-audit-checklist',
    '/blog/fix-core-web-vitals',
    '/blog/json-ld-structured-data-nextjs',
    '/work',
    '/products',
    // Company
    '/about',
    '/contact',
  ];

  return routes.map((route) => {
    // Priority tiers: Home > Technical SEO > Services > Blog Posts > Everything Else
    let priority: number;
    if (route === '') priority = 1;
    else if (route === '/services/technical-seo') priority = 0.95;
    else if (route === '/services') priority = 0.9;
    else if (route.startsWith('/blog/') && route !== '/blog') priority = 0.85;
    else if (route === '/blog') priority = 0.85;
    else priority = 0.7;

    // Blog and home updated more frequently
    let changeFrequency: 'weekly' | 'monthly';
    if (route === '' || route === '/blog' || route.startsWith('/blog/')) {
      changeFrequency = 'weekly';
    } else {
      changeFrequency = 'monthly';
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
