import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-28 md:py-36 bg-primary">
      <div className="container">
        <ScrollReveal>
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">
            {t.whyUs.label}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-primary-foreground text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-light leading-[1.2] tracking-[-0.01em] max-w-lg mb-20">
            {t.whyUs.headline}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
          {t.whyUs.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 90}>
              <div>
                <div className="w-8 h-px bg-accent/50 mb-7" />
                <h3 className="text-primary-foreground text-sm font-medium mb-3 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/45 text-sm leading-[1.7]">
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
