import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, professionalServiceSchema, websiteSchema, baseUrl } from "@/lib/seo";
import Wisp from "@/components/Wisp";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Technical SEO, Core Web Vitals & Search Automation | Cylvox",
  description: "Cylvox is an independent technical SEO studio for crawlability, structured data, Core Web Vitals, and search automation on complex websites.",
  authors: [{ name: "Supun Sanjana", url: `${baseUrl}/about` }],
  verification: {
    google: "MbW7OSda4rJ-b1SVXUwbjwuheieijZeB4_GUeUJL70Y",
  },
  icons: {
    icon: "/logo.png"
  },
  openGraph: {
    title: "Technical SEO, Core Web Vitals & Search Automation | Cylvox",
    description: "Technical SEO architecture, performance engineering, and search automation for complex websites.",
    url: baseUrl,
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Cylvox Technical SEO, Core Web Vitals, and Search Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO, Core Web Vitals & Search Automation | Cylvox",
    description: "Technical SEO architecture, performance engineering, and search automation for complex websites.",
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export const viewport = {
  themeColor: "#0A0F14",
  colorScheme: "dark" as const,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="bg-background text-foreground">
        <JsonLd data={organizationSchema} />
        <JsonLd data={professionalServiceSchema} />
        <Suspense fallback={null}>
        <JsonLd data={websiteSchema} />
          <Analytics />
        </Suspense>
        <Navbar />
        <main className="overflow-hidden relative">
          {children}
          <Wisp />
        </main>
        <Footer />
      </body>
    </html>
  );
}
