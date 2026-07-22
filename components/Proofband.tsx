import Reveal from "./Reveal";

const metrics = [
  { value: "54", arrow: true, value2: "99", label: "PageSpeed score" },
  { value: "13.4s", arrow: true, value2: "0.8s", label: "Largest Contentful Paint" },
  { value: "100%", arrow: false, value2: "", label: "Built around your team" },
];

export default function ProofBand() {
  return (
    <section
      id="proof"
      className="bg-[#1c1917] text-[#f7f2ec]"
    >
      <div className="px-[clamp(24px,8.5vw,140px)] py-[clamp(96px,13vw,190px)]">

        {/* Header */}
        <Reveal>
          <p className="flex items-center gap-2 mb-[23px] text-[10px] font-extrabold
                        tracking-[0.15em] uppercase text-[#bdb5ae]">
            The cost of slow
          </p>
          <h2
            className="font-[family-name:var(--font-syne)] font-bold tracking-[-0.075em] leading-[0.98]
                       text-[clamp(42px,5.5vw,82px)] max-w-[800px] mb-0 text-[#f7f2ec]"
          >
            Good work deserves a{" "}
            <em className="font-[Georgia,serif] font-normal tracking-[-0.085em] text-[#b99aff] not-italic">
              fast
            </em>{" "}
            home.
          </h2>
        </Reveal>

        {/* Metrics grid */}
        <div
          className="grid grid-cols-3 mt-[clamp(65px,8vw,120px)]
                     border-t border-b border-[#f7f2ec33]
                     max-sm:grid-cols-1"
        >
          {metrics.map((m, i) => (
            <Reveal key={i}>
              <div
                className={`flex flex-col justify-between min-h-[185px] py-[31px]
                            ${i > 0 ? "pl-[35px] border-l border-[#f7f2ec33] max-sm:pl-0 max-sm:border-l-0 max-sm:border-t max-sm:border-[#f7f2ec33]" : "pr-[35px] max-sm:pr-0"}
                            max-sm:min-h-[142px] max-sm:py-[27px]`}
              >
                <strong
                  className="font-[family-name:var(--font-syne)] font-bold tracking-[-0.065em] leading-[1]
                             text-[clamp(30px,3.8vw,56px)]"
                >
                  {m.value}
                  {m.arrow && (
                    <i className="not-italic text-[#a986ff]"> → </i>
                  )}
                  {m.value2}
                </strong>
                <span className="text-[12px] text-[#bdb5ae]">{m.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Proof note */}
        <Reveal>
          <p className="flex items-center gap-2 mt-[25px] mb-0 text-[11px] text-[#bdb5ae]">
            <span
              className="w-[7px] h-[7px] rounded-full bg-[#a986ff]
                         shadow-[0_0_0_5px_#a986ff26] flex-shrink-0"
            />
            One anonymous case study. Real numbers. No smoke and mirrors.
          </p>
        </Reveal>

      </div>
    </section>
  );
}