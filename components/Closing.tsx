import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Closing() {
  return (
    <section
      id="contact"
      className="px-[clamp(24px,8.5vw,140px)] py-[clamp(105px,13vw,190px)]"
      style={{
        background: "linear-gradient(135deg, #251a37, #101010 65%)",
        color: "#f7f2ec",
      }}
    >
      <Reveal>
        <p className="flex items-center gap-2 mb-5.75 text-[10px] font-extrabold
                      tracking-[0.15em] uppercase text-[#bdb5ae]">
          Have a project in mind?
        </p>

        <h2
          className="font-[family-name:var(--font-syne)] font-bold tracking-[-0.075em] leading-[0.98]
                     text-[clamp(42px,5.5vw,82px)] max-w-200 mb-9.5 text-[#f7f2ec]"
        >
          Let&apos;s build the thing
          <br />
          people{" "}
          <em className="font-[Georgia,serif] font-normal tracking-[-0.085em] text-[#bc9dff] not-italic">
            remember.
          </em>
        </h2>

        <a
          href="mailto:hello@cylvox.com"
          className="inline-flex items-center gap-2 bg-[#f7f2ec] text-[#1c1917] rounded-full
                     text-[13px] font-bold px-5.75 py-4 pr-4.75
                     hover:-translate-y-0.5 hover:bg-white hover:text-[#1c1917]
                     transition-all duration-200"
        >
          Start a conversation <ArrowUpRight className="w-4 h-4" />
        </a>
      </Reveal>
    </section>
  );
}