import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.insights.label}</p>
          <h1 className="text-primary-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.insights.headline}</h1>
          <p className="text-primary-foreground/45 text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.insights.subline}</p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-px bg-border/50">
            {t.insights.items.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 80}>
                <article className="bg-background p-8 md:p-10 lg:p-14 h-full flex flex-col group">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-accent text-[10px] uppercase tracking-[0.2em]">{item.category}</span>
                    <span className="text-muted-foreground/40 text-[10px] tracking-[0.15em]">{item.date}</span>
                  </div>
                  <h2 className="text-foreground text-lg md:text-xl font-light mb-4 tracking-[-0.01em] leading-[1.3]">{item.title}</h2>
                  <p className="text-muted-foreground text-sm leading-[1.7] mb-8 flex-1">{item.excerpt}</p>
                  <span className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-foreground/50 group-hover:text-accent transition-colors duration-200">
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
