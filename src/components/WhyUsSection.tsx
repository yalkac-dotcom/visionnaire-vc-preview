import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-20 md:py-28 bg-brand-blue">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 mb-14">
          <div className="md:col-span-5">
            <ScrollReveal>
              <div className="w-10 h-[2px] bg-[hsl(var(--gold))] mb-6" />
              <p className="text-white/45 text-[11px] uppercase tracking-[0.2em] font-medium mb-5">
                {t.whyUs.label}
              </p>
              <h2 className="text-white text-[1.5rem] md:text-[2.125rem] lg:text-[2.625rem] font-light leading-[1.18] tracking-[-0.015em]">
                {t.whyUs.headline}
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
          {t.whyUs.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 90}>
              <div>
                <div className="w-10 h-px bg-[hsl(var(--gold))]/40 mb-8" />
                <h3 className="text-white text-sm font-medium mb-3 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-[1.7]">
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
