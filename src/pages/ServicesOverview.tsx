import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroServices from "@/assets/hero-services.jpg";

export default function ServicesOverview() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative bg-soft-ivory pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroServices} alt="Strategic consulting environment" className="w-full h-full object-cover opacity-[0.15]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--soft-ivory))]/50 via-transparent to-[hsl(var(--soft-ivory))]/70" />
        </div>
        <div className="container relative z-10">
          <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.services.label}</p>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-normal leading-[1.15] tracking-[-0.015em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.services.headline}</h1>
          <p className="text-[hsl(var(--soft-charcoal))] text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.services.subline}</p>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {t.services.items.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 70}>
                <Link to={`/leistungen/${item.slug}`} className="block bg-background p-8 md:p-10 lg:p-14 h-full group hover:bg-card transition-colors duration-300">
                  <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.2em] font-medium mb-5 block">{item.number}</span>
                  <h3 className="text-foreground text-lg md:text-xl font-normal mb-4 tracking-[-0.01em] group-hover:text-brand-blue transition-colors duration-200">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-[1.7] mb-7">{item.desc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {item.details.slice(0, 3).map((d) => (
                      <li key={d} className="text-muted-foreground text-sm flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-[hsl(var(--gold))]/50 mt-[7px] shrink-0" />{d}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/30 group-hover:text-[hsl(var(--brand-blue))] transition-colors duration-200">
                    {t.services.requestCta} <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
