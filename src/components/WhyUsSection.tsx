import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Globe, Layers, Target, Wrench } from "lucide-react";

const icons = [Layers, Globe, Target, Wrench];

export function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-24 md:py-32 bg-primary">
      <div className="container">
        <ScrollReveal>
          <p className="text-accent text-xs uppercase tracking-widest mb-4">
            {t.whyUs.label}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-primary-foreground text-2xl md:text-3xl lg:text-4xl font-light leading-tight max-w-xl mb-16">
            {t.whyUs.headline}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {t.whyUs.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="group">
                  <div className="w-10 h-10 flex items-center justify-center border border-primary-foreground/15 mb-5">
                    <Icon size={18} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-primary-foreground text-base font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/55 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
