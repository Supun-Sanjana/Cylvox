export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between gap-5 flex-wrap
                 min-h-35 px-[clamp(24px,8.5vw,140px)] py-7.5
                 bg-[#151313] text-[#f7f2ec]
                 max-sm:min-h-40 max-sm:flex-col max-sm:items-start max-sm:justify-center"
    >
      <a
        href="#top"
        className="font-[family-name:var(--font-syne)] text-[18px] font-extrabold tracking-[-0.08em]"
      >
        CYLVOX<span className="text-[#7c3aed]">.</span>
      </a>

      <p className="m-0 text-[11px] text-[#aaa19a]">
        Designing better ways forward.
      </p>

      <p className="m-0 text-[11px] text-[#aaa19a]">
        &copy; 2026 Cylvox
      </p>
    </footer>
  );
}