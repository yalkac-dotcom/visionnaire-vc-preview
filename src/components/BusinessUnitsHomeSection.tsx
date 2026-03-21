import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroConsulting from "@/assets/hero-consulting.jpg";
import heroDomizil from "@/assets/hero-domizil.jpg";

const unitImages = [heroConsulting, heroDomizil];

export function BusinessUnitsHomeSection() {
  const { t } = useLanguage();

  return (
    <section id="business-units" className="py-24 md:py-28 bg-soft-ivory">
      <div className="container">
        <ScrollReveal>
          <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5">{t.businessUnits.label}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-foreground text-[1.5rem] md:text-[2.125rem] font-normal mb-5 tracking-[-0.02em]">{t.businessUnits.headline}</h2>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="text-muted-foreground text-[15px] leading-[1.7] max-w-xl mb-14">{t.businessUnits.subline}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {t.businessUnits.items.map((unit, i) => (
            <ScrollReveal key={unit.name} delay={i * 100}>
              <div className="bg-background border border-border h-full flex flex-col overflow-hidden">
                {unitImages[i] && (
                  <div className="h-48 overflow-hidden">
                    <img src={unitImages[i]} alt={unit.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                  </div>
                )}
                <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="w-8 h-[2px] bg-[hsl(var(--gold))] mb-6" />
                <span className="text-brand-blue text-[10px] uppercase tracking-[0.18em] mb-2 block">{unit.role}</span>
                <h3 className="text-foreground text-base font-medium mb-3 tracking-[-0.01em]">{unit.name}</h3>
                <p className="text-muted-foreground text-sm leading-[1.7] mb-6 flex-1">{unit.desc.length > 160 ? unit.desc.substring(0, 160) + "…" : unit.desc}</p>
                {i === 0 ? (
                  <Link to="/leistungen" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] hover:text-foreground transition-colors duration-200">
                    {t.cta.consultationCta} <ArrowUpRight size={11} />
                  </Link>
                ) : (
                  <a href={unit.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] hover:text-foreground transition-colors duration-200">
                    {t.cta.contactCta} <ArrowUpRight size={11} />
                  </a>
                )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <Link to="/unternehmensbereiche" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] hover:text-foreground transition-colors duration-200">
              {t.nav.businessUnits} <ArrowUpRight size={11} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
