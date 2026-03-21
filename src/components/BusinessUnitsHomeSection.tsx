import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function BusinessUnitsHomeSection() {
  const { t } = useLanguage();

  return (
    <section id="business-units" className="py-24 md:py-28 bg-warm-gray">
      <div className="container">
        <ScrollReveal>
          <p className="text-muted-foreground/60 text-[11px] uppercase tracking-[0.2em] mb-5">
            {t.businessUnits.label}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-foreground text-xl md:text-2xl font-light mb-5 tracking-[-0.01em]">
            {t.businessUnits.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="text-muted-foreground text-sm leading-[1.7] max-w-xl mb-14">
            {t.businessUnits.subline}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-px bg-border/60">
          {t.businessUnits.items.map((unit, i) => (
            <ScrollReveal key={unit.name} delay={i * 80}>
              <div className="bg-background p-7 md:p-9 h-full flex flex-col">
                <div className="w-6 h-px bg-accent/40 mb-5" />
                <h3 className="text-foreground text-sm font-medium mb-3 tracking-[-0.01em]">{unit.name}</h3>
                <p className="text-muted-foreground text-sm leading-[1.7] mb-6 flex-1">{unit.desc}</p>
                {i === 0 ? (
                  <Link to={unit.href} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/50 hover:text-accent transition-colors duration-200">
                    {t.cta.consultationCta} <ArrowUpRight size={11} />
                  </Link>
                ) : (
                  <a href="https://visionnaire.de" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/50 hover:text-accent transition-colors duration-200">
                    {t.cta.contactCta} <ArrowUpRight size={11} />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <Link to="/unternehmensbereiche" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/50 hover:text-accent transition-colors duration-200">
              {t.nav.businessUnits} <ArrowUpRight size={11} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
