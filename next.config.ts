import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://cylvox.com/:path*",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.cylvox.com",
          },
        ],
        destination: "https://cylvox.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
