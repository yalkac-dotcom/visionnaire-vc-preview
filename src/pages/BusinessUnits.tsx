import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BusinessUnits() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-soft-ivory pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="container">
          <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.businessUnits.label}</p>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.businessUnits.headline}</h1>
          <p className="text-muted-foreground text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.businessUnits.subline}</p>
        </div>
      </section>

      {/* Unit panels */}
      <section className="py-32 md:py-40 bg-background">
        <div className="container">
          <div className="space-y-0 divide-y divide-border">
            {t.businessUnits.items.map((unit, i) => (
              <ScrollReveal key={unit.name} delay={i * 100}>
                <div className="py-14 md:py-18 first:pt-0 last:pb-0 grid md:grid-cols-12 gap-8 md:gap-16">
                  <div className="md:col-span-4">
                    <div className="w-10 h-px bg-border mb-6" />
                    {unit.role && (
                      <span className="text-muted-foreground text-[11px] uppercase tracking-[0.2em] block mb-3">{unit.role}</span>
                    )}
                    <h3 className="text-foreground text-lg md:text-xl font-light tracking-[-0.01em]">{unit.name}</h3>
                  </div>
                  <div className="md:col-span-7 md:col-start-6">
                    <p className="text-muted-foreground text-[15px] leading-[1.8] mb-8">{unit.desc}</p>
                    {i === 0 ? (
                      <Link to="/leistungen" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] hover:text-foreground transition-colors duration-200">
                        {t.cta.consultationCta} <ArrowUpRight size={12} />
                      </Link>
                    ) : (
                      <a href={unit.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] hover:text-foreground transition-colors duration-200">
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
      {t.businessUnits.architectureLabel && (
        <section className="py-32 md:py-40 bg-cloud-neutral">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <div className="md:col-span-4">
                <ScrollReveal>
                  <p className="text-[hsl(var(--gold))] text-[11px] uppercase tracking-[0.2em] mb-5">{t.businessUnits.architectureLabel}</p>
                  <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em]">{t.businessUnits.architectureHeadline}</h2>
                </ScrollReveal>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <ScrollReveal delay={120}>
                  <p className="text-muted-foreground text-[15px] md:text-base leading-[1.9]">{t.businessUnits.architectureText}</p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-28 md:py-36 bg-soft-ivory">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em] mb-5">{t.contact.headline}</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-muted-foreground text-[15px] leading-[1.7] max-w-md mx-auto mb-12">{t.contact.text}</p>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-7 py-3 hover:bg-accent transition-all duration-200 active:scale-[0.97]">{t.cta.projectCta}</Link>
              <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-border text-foreground/70 hover:text-foreground px-7 py-3 hover:bg-subtle-surface transition-all duration-200 active:scale-[0.97]">{t.cta.contactCta}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
