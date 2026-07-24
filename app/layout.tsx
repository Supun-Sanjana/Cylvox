import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Cylvox - Digital systems that move",
  description: "Cylvox is an independent digital agency building high-performing experiences.",
   verification: {
    google: "MbW7OSda4rJ-b1SVXUwbjwuheieijZeB4_GUeUJL70Y",
  },
  icons:{
    icon: "/logo.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={syne.variable}>
      <body>{children}</body>
    </html>
  );
}