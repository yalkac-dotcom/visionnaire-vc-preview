import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroScrollIndicator } from "@/components/HeroScrollIndicator";
import { SEOHead } from "@/components/SEOHead";
import heroInsights from "@/assets/hero-insights.jpg";

export default function Insights() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative bg-soft-ivory pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroInsights} alt="Insights" className="w-full h-full object-cover opacity-[0.45]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--soft-ivory))]/15 via-transparent to-[hsl(var(--soft-ivory))]/35" />
        </div>
        <div className="container relative z-10">
          <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.insights.label}</p>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-normal leading-[1.15] tracking-[-0.015em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.insights.headline}</h1>
          <p className="text-foreground/70 text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.insights.subline}</p>
        </div>
        <HeroScrollIndicator />
      </section>

      <section className="py-14 md:py-18 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {t.insights.items.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 80}>
                <article className="bg-background p-8 md:p-10 lg:p-14 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-brand-blue text-[10px] uppercase tracking-[0.2em] font-medium">{item.category}</span>
                    <span className="text-foreground/35 text-[10px] tracking-[0.15em]">{item.date}</span>
                  </div>
                  <h2 className="text-foreground text-lg md:text-xl font-normal mb-4 tracking-[-0.01em] leading-[1.3]">{item.title}</h2>
                  <p className="text-foreground/60 text-sm leading-[1.7] flex-1">{item.excerpt}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
