import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import ProofBand from "@/components/Proofband";
import Process from "@/components/Process";
import Closing from "@/components/Closing";

export const metadata = {
  title:       "Cylvox — Solo Studio | Digital systems that move",
  description: "An independent solo studio engineering high-concurrency web systems, autonomous n8n workflows, and interfaces that move. From vibe-coded to enterprise-ready.",
  alternates: { canonical: "/" },
  openGraph: {
    title:       "Cylvox — Solo Studio | Digital systems that move",
    description: "An independent solo studio engineering high-concurrency web systems, autonomous n8n workflows, and interfaces that move. From vibe-coded to enterprise-ready.",
    url:         "/",
    siteName:    "Cylvox",
    locale:      "en_US",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Cylvox — Solo Studio | Digital systems that move",
    description: "An independent solo studio engineering high-concurrency web systems, autonomous n8n workflows, and interfaces that move. From vibe-coded to enterprise-ready.",
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
