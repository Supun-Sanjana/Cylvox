import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cylvox — Digital systems that move",
  description: "Cylvox is an independent digital agency building high-performing experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}