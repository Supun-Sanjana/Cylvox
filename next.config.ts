import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/case-studies',
        destination: '/work',
        permanent: true,
      },
      { source: "/trust-signal-auditor", destination: "/products/trust-signal-auditor", permanent: true },
      { source: "/trust-signal-auditor/terms", destination: "/products/trust-signal-auditor/terms", permanent: true },
      { source: "/trust-signal-auditor/privacy", destination: "/products/trust-signal-auditor/privacy", permanent: true },
      { source: "/case-studies/outquest-technical-seo", destination: "/case-studies/join-outquest", permanent: true },
    ]
  },
};

export default nextConfig;
