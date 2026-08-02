import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, professionalServiceSchema, baseUrl } from "@/lib/seo";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
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
    <html lang="en" className={`${chakraPetch.variable} ${chakraPetch.style.fontFamily}`}>
      <body className="bg-background">
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
