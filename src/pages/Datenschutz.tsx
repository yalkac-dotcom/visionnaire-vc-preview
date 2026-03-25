import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Datenschutz() {
  const { t } = useLanguage();
  const ds = t.datenschutz;

  return (
    <>
      {/* Hero */}
      <section className="bg-soft-ivory pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container">
          <p
            className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up"
            style={{ animationDelay: "100ms" }}
          >
            {ds.label}
          </p>
          <h1
            className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-xl animate-reveal-up"
            style={{ animationDelay: "250ms" }}
          >
            {ds.headline}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-18 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl">
            {ds.sections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 40}>
                <div className="mb-12 last:mb-0">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-px bg-border mt-[0.6em] shrink-0" />
                    <h2 className="text-foreground text-base font-medium tracking-[-0.01em] leading-[1.4]">
                      {section.title}
                    </h2>
                  </div>
                  <div className="pl-12">
                    {section.content.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-muted-foreground text-sm leading-[1.85] mb-4 last:mb-0 whitespace-pre-line"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
