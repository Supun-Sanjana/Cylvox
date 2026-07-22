import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    title: "Design systems",
    text: "Distinct visual systems and conversion-led interfaces that give your brand a clear point of view.",
  },
  {
    number: "02",
    title: "Web development",
    text: "Fast, scalable Next.js sites engineered around the experience your customers actually need.",
  },
  {
    number: "03",
    title: "Performance + SEO",
    text: "Technical optimization that makes pages load fast, surface clearly, and turn traffic into action.",
  },
  {
    number: "04",
    title: "CMS + automation",
    text: "Sanity CMS and n8n workflows that let your team publish, connect systems, and move faster after launch.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-[clamp(24px,8.5vw,140px)] py-[clamp(96px,13vw,190px)]"
    >
      {/* Header */}
      <Reveal>
        <p className="flex items-center gap-2 mb-[23px] text-[10px] font-extrabold
                      tracking-[0.15em] uppercase text-[#706a63]">
          What we do
        </p>
        <h2
          className="font-[family-name:var(--font-syne)] font-bold tracking-[-0.075em]
                     leading-[0.98] text-[clamp(42px,5.5vw,82px)] max-w-[850px] mb-0"
        >
          Every part of your site should{" "}
          <em className="font-[Georgia,serif] font-normal tracking-[-0.085em] text-[#7c3aed] not-italic">
            pull forward.
          </em>
        </h2>
      </Reveal>

      {/* 2-col grid */}
      <div
        className="grid grid-cols-2 mt-[clamp(60px,8vw,110px)] border-t border-[#1c191722]
                   max-sm:grid-cols-1"
      >
        {services.map((service, i) => (
          <Reveal key={service.number}>
            <div
              className={`group relative grid grid-cols-[65px_1fr_24px] gap-5
                          min-h-[265px] py-[30px] border-b border-[#1c191722]
                          hover:bg-[#e9e1f5a3] transition-colors duration-200
                          ${i % 2 === 0
                            ? "pr-[46px] border-r border-[#1c191722] max-sm:border-r-0"
                            : "pl-[46px]"
                          }
                          max-sm:grid-cols-[42px_1fr_20px] max-sm:min-h-[205px]
                          max-sm:py-[27px] max-sm:px-0`}
            >
              <span className="font-[Georgia,serif] text-[15px] text-[#7c3aed]">
                {service.number}
              </span>

              <div>
                <h3
                  className="font-[family-name:var(--font-syne)] font-bold tracking-[-0.06em]
                             leading-[1] text-[clamp(26px,2.7vw,38px)] mb-[18px]"
                >
                  {service.title}
                </h3>
                <p className="max-w-[315px] text-[14px] leading-[1.55] text-[#706a63] mb-0">
                  {service.text}
                </p>
              </div>

              <span className="pt-[3px] text-[#7c3aed]">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}