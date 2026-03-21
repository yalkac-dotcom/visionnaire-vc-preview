import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business-units.jpg";

export default function BusinessUnits() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero with background image */}
      <section className="relative min-h-[65vh] flex items-end bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Modern corporate architecture" className="w-full h-full object-cover opacity-25" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/40" />
        </div>
        <div className="container relative z-10 pb-20 md:pb-28 pt-40">
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.businessUnits.label}</p>
          <h1 className="text-primary-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.businessUnits.headline}</h1>
          <p className="text-primary-foreground/45 text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.businessUnits.subline}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/8 to-transparent" />
      </section>

      {/* Unit panels — horizontal layout */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container">
          <div className="space-y-0 divide-y divide-border/60">
            {t.businessUnits.items.map((unit, i) => (
              <ScrollReveal key={unit.name} delay={i * 100}>
                <div className="py-12 md:py-16 first:pt-0 last:pb-0 grid md:grid-cols-12 gap-8 md:gap-16">
                  <div className="md:col-span-4">
                    <div className="w-10 h-px bg-accent/40 mb-6" />
                    {unit.role && (
                      <span className="text-accent/45 text-[11px] uppercase tracking-[0.2em] block mb-3">{unit.role}</span>
                    )}
                    <h3 className="text-foreground text-lg md:text-xl font-light tracking-[-0.01em]">{unit.name}</h3>
                  </div>
                  <div className="md:col-span-7 md:col-start-6">
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
      {t.businessUnits.architectureLabel && (
        <section className="py-28 md:py-36 bg-warm-gray">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <div className="md:col-span-4">
                <ScrollReveal>
                  <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">{t.businessUnits.architectureLabel}</p>
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
