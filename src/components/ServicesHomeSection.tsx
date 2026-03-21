import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ServicesHomeSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-28 md:py-36 bg-soft-ivory">
      <div className="container">
        <ScrollReveal>
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">{t.services.label}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-foreground text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-light leading-[1.2] tracking-[-0.01em] max-w-lg mb-6">{t.services.headline}</h2>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="text-muted-foreground text-[15px] leading-[1.7] max-w-xl mb-16">{t.services.subline}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {t.services.items.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 70}>
              <Link to={`/leistungen/${item.slug}`} className="block bg-background p-7 md:p-9 h-full group hover:bg-cloud-neutral transition-colors duration-300">
                <span className="text-accent/50 text-[11px] tracking-[0.2em] font-light mb-4 block">{item.number}</span>
                <h3 className="text-foreground text-sm md:text-base font-light mb-3 tracking-[-0.01em] group-hover:text-accent transition-colors duration-200">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-[1.7] mb-6">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/35 group-hover:text-accent transition-colors duration-200">
                  <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-14 text-center">
            <Link to="/leistungen" className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-foreground/50 hover:text-accent transition-colors duration-200">
              {t.servicePage.backToOverview} <ArrowRight size={12} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
