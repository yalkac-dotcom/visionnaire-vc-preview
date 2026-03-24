import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroScrollIndicator } from "@/components/HeroScrollIndicator";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { industryImages } from "@/lib/industry-images";
import heroInternational from "@/assets/hero-international.jpg";

export default function IndustriesOverview() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative bg-soft-ivory pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroInternational} alt="Industries overview" className="w-full h-full object-cover opacity-[0.45]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--soft-ivory))]/15 via-transparent to-[hsl(var(--soft-ivory))]/35" />
        </div>
        <div className="container relative z-10">
          <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.industries.label}</p>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-normal leading-[1.15] tracking-[-0.015em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.industries.headline}</h1>
          <p className="text-foreground/70 text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.industries.subline}</p>
        </div>
        <HeroScrollIndicator />
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.industries.items.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 70}>
                <Link to={`/branchen/${item.slug}`} className="block bg-background border border-border h-full group hover:bg-card transition-colors duration-300">
                  {industryImages[item.slug] && (
                    <div className="h-44 overflow-hidden">
                      <img src={industryImages[item.slug]} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                    </div>
                  )}
                  <div className="p-8 md:p-10">
                    <h3 className="text-foreground text-base md:text-lg font-normal mb-4 tracking-[-0.01em] group-hover:text-brand-blue transition-colors duration-200">{item.name}</h3>
                    <p className="text-foreground/60 text-sm leading-[1.7] mb-8">{item.desc}</p>
                    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/25 group-hover:text-[hsl(var(--brand-blue))] transition-colors duration-200">
                      {t.industryPage.ctaSecondary} <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
