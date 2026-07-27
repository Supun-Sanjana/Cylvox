import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import ProofBand from "@/components/Proofband";
import Process from "@/components/Process";
import Closing from "@/components/Closing";

export const metadata = {
  title:       "Cylvox - Digital Agency",
  description: "We design, develop, and optimize digital systems for ambitious brands ready to be impossible to ignore.",
  alternates: { canonical: "/" },
  openGraph: {
    title:       "Cylvox - Digital Agency",
    description: "Design, development, and performance for brands that refuse to be ordinary.",
    url:         "/",
    siteName:    "Cylvox",
    locale:      "en_US",
    type:        "website",
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <ProofBand />
      <Process />
      <Closing />
    </>
  );
}
