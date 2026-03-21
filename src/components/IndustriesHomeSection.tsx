import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function IndustriesHomeSection() {
  const { t } = useLanguage();
  const items = t.industries.items.slice(0, 6);

  return (
    <section id="industries" className="py-28 md:py-36 bg-background">
      <div className="container">
        <ScrollReveal>
          <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5">{t.industries.label}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-foreground text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-light leading-[1.2] tracking-[-0.01em] max-w-2xl mb-6">{t.industries.headline}</h2>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="text-muted-foreground text-[15px] leading-[1.7] max-w-xl mb-16">{t.industries.subline}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 70}>
              <Link to={`/branchen/${item.slug}`} className="block bg-card p-7 md:p-9 h-full group hover:bg-soft-ivory transition-colors duration-300">
                <h3 className="text-foreground text-sm md:text-base font-light mb-3 tracking-[-0.01em] group-hover:text-[hsl(var(--gold))] transition-colors duration-200">{item.name}</h3>
                <p className="text-muted-foreground text-sm leading-[1.7] mb-6">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/30 group-hover:text-[hsl(var(--gold-deep))] transition-colors duration-200">
                  <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-14 text-center">
            <Link to="/branchen" className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--gold-deep))] hover:text-[hsl(var(--gold))] transition-colors duration-200">
              {t.industryPage.backToOverview} <ArrowRight size={12} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
