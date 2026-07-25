import Process from "@/components/Process";

export const metadata = {
  title: "About Us | Cylvox Digital Agency",
  description: "Learn about our modern, high-performance web development process and why we are an independent digital agency that builds digital systems that move.",
};

export default function AboutPage() {
  return (
    <>
      {/* We add a padding top to account for the fixed Navbar */}
      <div className="pt-24 min-h-screen">
        <Process />
      </div>
    </>
  );
}
