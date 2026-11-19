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
import Script from "next/script";

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
  title: { default: "Technical SEO Consultant & Software Development | Cylvox", template: "%s" },
  description: "Technical SEO consulting, audits, and implementation for complex websites, with performance-focused software development.",
  authors: [{ name: "Supun Sanjana", url: `${baseUrl}/about` }],
  verification: {
    google: "MbW7OSda4rJ-b1SVXUwbjwuheieijZeB4_GUeUJL70Y",
  },
  icons: {
    icon: "/logo.png"
  },
  openGraph: {
    title: "Technical SEO Consultant & Software Development | Cylvox",
    description: "Technical SEO consulting, audits, and implementation for complex websites, with performance-focused software development.",
    url: baseUrl,
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Cylvox technical SEO consulting and software development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO Consultant & Software Development | Cylvox",
    description: "Technical SEO consulting, audits, and implementation for complex websites, with performance-focused software development.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3SXPM1PVCS"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3SXPM1PVCS');
  `}
        </Script>

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
