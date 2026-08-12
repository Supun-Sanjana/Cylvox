import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, professionalServiceSchema, baseUrl } from "@/lib/seo";

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
  title: "Next.js Web Development & AI Automation Studio | Cylvox",
  description: "Cylvox Solo Studio engineers high-concurrency Next.js web applications, headless Sanity CMS architectures, and autonomous n8n workflows for modern enterprises.",
  verification: {
    google: "MbW7OSda4rJ-b1SVXUwbjwuheieijZeB4_GUeUJL70Y",
  },
  icons: {
    icon: "/logo.png"
  },
  openGraph: {
    title: "Next.js Web Development & AI Automation Studio | Cylvox",
    description: "Cylvox Solo Studio engineers high-concurrency Next.js web applications, headless Sanity CMS architectures, and autonomous n8n workflows for modern enterprises.",
    url: baseUrl,
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cylvox Solo Studio — Next.js & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Web Development & AI Automation Studio | Cylvox",
    description: "Cylvox Solo Studio engineers high-concurrency Next.js web applications, headless Sanity CMS architectures, and autonomous n8n workflows for modern enterprises.",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "#05080a",
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
        <Analytics />
        <Navbar />
        <main className="overflow-hidden relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
