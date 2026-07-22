import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Align",
    text: "We get close to the ambition, audience, and constraints before making a thing.",
  },
  {
    number: "02",
    title: "Shape",
    text: "We make the strategy visible through a distinctive system and an experience map.",
  },
  {
    number: "03",
    title: "Build",
    text: "We develop the site with performance, accessibility, and content operations built in.",
  },
  {
    number: "04",
    title: "Refine",
    text: "We measure, learn, and keep moving the parts that make the biggest difference.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="px-[clamp(24px,8.5vw,140px)] py-[clamp(96px,13vw,190px)]"
    >
      {/* Section header — 2-col on desktop */}
      <Reveal>
        <div
          className="grid grid-cols-[1fr_1.4fr] items-end gap-x-[8vw] max-w-none
                     max-sm:block"
        >
          <div>
            <p className="flex items-center gap-2 mb-5.75 text-[10px] font-extrabold
                          tracking-[0.15em] uppercase text-[#706a63]
                          col-span-full">
              How we work
            </p>
            <h2
              className="font-[family-name:var(--font-syne)] font-bold tracking-[-0.075em] leading-[0.98]
                         text-[clamp(42px,5.5vw,82px)] mb-0"
            >
              A clear path from{" "}
              <em className="font-[Georgia,serif] font-normal tracking-[-0.085em] text-[#7c3aed] not-italic">
                idea to impact.
              </em>
            </h2>
          </div>

          <p className="max-w-71.25 text-[14px] leading-normal text-[#706a63] mb-[5px]
                        max-sm:mt-5.75 max-sm:max-w-none">
            Small senior team. Direct conversations. No handoffs into a black box.
          </p>
        </div>
      </Reveal>

      {/* Steps track */}
      <div
        className="grid grid-cols-4 mt-[clamp(60px,9vw,130px)] border-t border-[#1c191722]
                   max-sm:grid-cols-1"
      >
        {steps.map((step, i) => (
          <Reveal key={step.number}>
            {/* step-line uses CSS class — width animates on .is-visible */}
            <div
              className={`relative min-h-82.5 py-6.75
                          ${i > 0
                            ? "pl-7 border-l border-[#1c191722] max-sm:pl-0 max-sm:border-l-0 max-sm:border-t max-sm:border-[#1c191722]"
                            : "pr-7 max-sm:pr-0"
                          }
                          max-sm:min-h-61.25 max-sm:py-6.25`}
            >
              <span className="block mb-20.5 font-[Georgia,serif] text-[15px] text-[#7c3aed]
                               max-sm:mb-11.25">
                {step.number}
              </span>
              <h3
                className="font-[family-name:var(--font-syne)] font-bold tracking-[-0.06em]
                           text-[31px] leading-none mb-4 max-sm:text-[30px]"
              >
                {step.title}
              </h3>
              <p className="text-[13px] leading-[1.55] text-[#706a63] max-w-[220px] mb-0">
                {step.text}
              </p>

              {/* Violet underline — animated via CSS (.is-visible .step-line) */}
              <div className="step-line" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}