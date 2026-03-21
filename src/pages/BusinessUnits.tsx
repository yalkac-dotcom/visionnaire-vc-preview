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
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.businessUnits.label}</p>
          <h1 className="text-primary-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.businessUnits.headline}</h1>
          <p className="text-primary-foreground/45 text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.businessUnits.subline}</p>
        </div>
      </section>

      {/* Unit panels */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="space-y-px bg-border/50">
            {t.businessUnits.items.map((unit, i) => (
              <ScrollReveal key={unit.name} delay={i * 100}>
                <div className="bg-background p-8 md:p-12 lg:p-16 flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
                  <div className="md:w-1/3 shrink-0">
                    <div className="w-8 h-px bg-accent/40 mb-6" />
                    <span className="text-accent/50 text-[11px] uppercase tracking-[0.2em] block mb-3">{unit.role}</span>
                    <h3 className="text-foreground text-lg md:text-xl font-light tracking-[-0.01em]">{unit.name}</h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground text-[15px] leading-[1.8] mb-8">{unit.desc}</p>
                    {i === 0 ? (
                      <Link to="/leistungen" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/60 hover:text-accent transition-colors duration-200">
                        {t.cta.consultationCta} <ArrowUpRight size={12} />
                      </Link>
                    ) : (
                      <a href="https://visionnaire.de" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/60 hover:text-accent transition-colors duration-200">
                        {t.cta.contactCta} <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Architecture */}
      <section className="py-24 md:py-32 bg-warm-gray">
        <div className="container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">{t.businessUnits.architectureLabel}</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em] mb-8">{t.businessUnits.architectureHeadline}</h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="text-muted-foreground text-[15px] md:text-base leading-[1.8]">{t.businessUnits.architectureText}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em] mb-5">{t.contact.headline}</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-primary-foreground/40 text-[15px] leading-[1.7] max-w-md mx-auto mb-10">{t.contact.text}</p>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-accent text-accent-foreground px-7 py-3 hover:bg-accent/90 transition-all duration-200 active:scale-[0.97]">{t.cta.projectCta}</Link>
              <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground px-7 py-3 hover:bg-primary-foreground/5 transition-all duration-200 active:scale-[0.97]">{t.cta.contactCta}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
