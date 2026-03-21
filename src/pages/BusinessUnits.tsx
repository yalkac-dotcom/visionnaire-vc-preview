import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BusinessUnits() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>
            {t.businessUnits.label}
          </p>
          <h1 className="text-primary-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>
            {t.businessUnits.headline}
          </h1>
          <p className="text-primary-foreground/45 text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>
            {t.businessUnits.subline}
          </p>
        </div>
      </section>

      {/* Units */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-px bg-border/60">
            {t.businessUnits.items.map((unit, i) => (
              <ScrollReveal key={unit.name} delay={i * 90}>
                <div className="bg-background p-8 md:p-10 lg:p-12 h-full flex flex-col">
                  <div className="w-8 h-px bg-accent/40 mb-7" />
                  <h3 className="text-foreground text-base md:text-lg font-light mb-4 tracking-[-0.01em]">
                    {unit.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-[1.7] mb-8 flex-1">
                    {unit.desc}
                  </p>
                  {i === 0 ? (
                    <Link
                      to={unit.href}
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/60 hover:text-accent transition-colors duration-200"
                    >
                      {t.domizil.cta}
                      <ArrowUpRight size={12} />
                    </Link>
                  ) : (
                    <a
                      href="https://visionnaire.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/60 hover:text-accent transition-colors duration-200"
                    >
                      {t.domizil.cta}
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Brand family note */}
          <ScrollReveal>
            <div className="mt-16 pt-10 border-t border-border/60 text-center">
              <p className="text-muted-foreground/50 text-[11px] tracking-[0.15em] uppercase">
                {t.footer.domizilNote}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em] mb-10">
              {t.contact.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-accent text-accent-foreground px-7 py-3 hover:bg-accent/90 transition-all duration-200 active:scale-[0.97]"
              >
                {t.cta.projectCta}
              </Link>
              <Link
                to="/#contact"
                className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground px-7 py-3 hover:bg-primary-foreground/5 transition-all duration-200 active:scale-[0.97]"
              >
                {t.cta.contactCta}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
