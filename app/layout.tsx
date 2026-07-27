import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, baseUrl } from "@/lib/seo";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Cylvox - Digital systems that move",
  description: "Cylvox is an independent digital agency building high-performing experiences.",
  verification: {
    google: "MbW7OSda4rJ-b1SVXUwbjwuheieijZeB4_GUeUJL70Y",
  },
  icons: {
    icon: "/logo.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={syne.variable}>
      <body className="bg-[#070913]">
        <JsonLd data={organizationSchema} />
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
