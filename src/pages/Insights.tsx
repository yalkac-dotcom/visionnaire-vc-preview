import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-soft-ivory pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="container">
          <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.insights.label}</p>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.insights.headline}</h1>
          <p className="text-soft-charcoal text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.insights.subline}</p>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {t.insights.items.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 80}>
                <article className="bg-background p-8 md:p-10 lg:p-14 h-full flex flex-col group">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-brand-blue text-[10px] uppercase tracking-[0.2em]">{item.category}</span>
                    <span className="text-warm-grey text-[10px] tracking-[0.15em]">{item.date}</span>
                  </div>
                  <h2 className="text-foreground text-lg md:text-xl font-light mb-4 tracking-[-0.01em] leading-[1.3]">{item.title}</h2>
                  <p className="text-muted-foreground text-sm leading-[1.7] mb-8 flex-1">{item.excerpt}</p>
                  <span className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-foreground/30 group-hover:text-[hsl(var(--brand-blue))] transition-colors duration-200">
                    {t.insights.readMore}
                    <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
