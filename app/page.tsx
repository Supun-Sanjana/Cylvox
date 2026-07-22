import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ProofBand from "@/components/Proofband";
import Services from "@/components/Services";


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
    <main className="overflow-hidden bg-[#f2efe9]">
      <Hero />
      <Services />
      <ProofBand />
      <Process />
      <Closing />
      <Footer />
    </main>
  );
}