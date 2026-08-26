type FaqItem = { question: string; answer: string };

type FAQProps = {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
};

export default function FAQ({ faqs, title, subtitle }: FAQProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-muted-foreground text-base max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-surface border border-border rounded-2xl overflow-hidden transition-colors duration-200 hover:border-[#ccff00]/30"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-bold text-foreground leading-snug pr-4">
                  {faq.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 w-6 h-6 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground transition-transform duration-300 group-open:rotate-45"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current"
                  >
                    <line x1="6" y1="1" x2="6" y2="11" strokeWidth="2" strokeLinecap="round" />
                    <line x1="1" y1="6" x2="11" y2="6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>

              <div className="px-6 pb-6 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
