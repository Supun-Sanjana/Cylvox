import CaseStudies from "@/components/CaseStudies";

export const metadata = {
  title: "Our Work | Next.js Portfolio & Web Development Case Studies",
  description: "View our portfolio of high-performance Next.js web applications, digital products, and modern websites built by Cylvox.",
};

export default function WorkPage() {
  return (
    <>
      <div className="pt-24 min-h-screen">
        <CaseStudies />
      </div>
    </>
  );
}
