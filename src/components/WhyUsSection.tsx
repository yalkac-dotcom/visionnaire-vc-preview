import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-28 md:py-36 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-20">
          <div className="md:col-span-5">
            <ScrollReveal>
              <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5">
                {t.whyUs.label}
              </p>
              <h2 className="text-foreground text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-light leading-[1.2] tracking-[-0.01em]">
                {t.whyUs.headline}
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
          {t.whyUs.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 90}>
              <div>
                <div className="w-10 h-px bg-accent/40 mb-8" />
                <h3 className="text-foreground text-sm font-medium mb-3 tracking-[-0.01em]">
                  {item.title}
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
