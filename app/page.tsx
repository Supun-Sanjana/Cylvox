import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProofBand from "@/components/Proofband";
import Process from "@/components/Process";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export const metadata = {
  title:       "Cylvox — Digital Agency",
  description: "We design, develop, and optimize digital systems for ambitious brands ready to be impossible to ignore.",
  openGraph: {
    title:       "Cylvox — Digital Agency",
    description: "Design, development, and performance for brands that refuse to be ordinary.",
    url:         "https://cylvox.com",
    siteName:    "Cylvox",
    locale:      "en_US",
    type:        "website",
  },
};

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#f2efe9] relative">
      <Navbar />
      <Hero />
      <Services />
      <ProofBand />
      <Process />
      <Closing />
      <Footer />
    </main>
  );
}