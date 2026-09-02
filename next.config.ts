import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Inlines CSS into <head> as <style> tags instead of separate <link>
    // stylesheets. Best fit for atomic CSS (Tailwind) + mostly first-time
    // visitor traffic (search/AI referrals) — eliminates the CSS
    // request waterfall that was blocking LCP/Speed Index. Experimental
    // per Next.js docs — worth a visual smoke test after deploy.
    inlineCss: true,
  },
  async redirects() {
    return [
      {
        source: '/case-studies',
        destination: '/work',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
