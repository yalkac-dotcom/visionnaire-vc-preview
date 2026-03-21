import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function IndustriesSection() {
  const { t } = useLanguage();

  return (
    <section id="industries" className="py-28 md:py-36 bg-background">
      <div className="container">
        <ScrollReveal>
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">
            {t.industries.label}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-foreground text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-light leading-[1.2] tracking-[-0.01em] max-w-2xl mb-20">
            {t.industries.headline}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {t.industries.items.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 80}>
              <div className="border-t border-border pt-7">
                <h3 className="text-foreground text-sm font-medium mb-3 tracking-[-0.01em]">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
