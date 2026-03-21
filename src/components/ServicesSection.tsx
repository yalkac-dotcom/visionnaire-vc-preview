import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 bg-warm-gray">
      <div className="container">
        <ScrollReveal>
          <p className="text-accent text-xs uppercase tracking-widest mb-4">
            {t.services.label}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-light leading-tight max-w-xl mb-16">
            {t.services.headline}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {t.services.items.map((item, i) => (
            <ScrollReveal key={item.number} delay={i * 100}>
              <div className="bg-background p-8 md:p-10 lg:p-12 h-full group">
                <span className="text-accent text-xs tracking-widest font-medium mb-4 block">
                  {item.number}
                </span>
                <h3 className="text-foreground text-xl md:text-2xl font-light mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <ul className="space-y-2 mb-8">
                  {item.details.map((detail) => (
                    <li key={detail} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-200 group/link"
                >
                  {t.services.requestCta}
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
