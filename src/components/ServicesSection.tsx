import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const serviceIds = [
  "service-consulting",
  "service-sourcing",
  "service-produktentwicklung",
  "service-marken",
];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-28 md:py-36 bg-warm-gray">
      <div className="container">
        <ScrollReveal>
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">
            {t.services.label}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-foreground text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-light leading-[1.2] tracking-[-0.01em] max-w-lg mb-20">
            {t.services.headline}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-px bg-border/60">
          {t.services.items.map((item, i) => (
            <ScrollReveal key={item.number} delay={i * 90}>
              <div
                id={serviceIds[i]}
                className="bg-background p-8 md:p-10 lg:p-14 h-full"
              >
                <span className="text-accent/70 text-[11px] tracking-[0.2em] font-light mb-5 block">
                  {item.number}
                </span>
                <h3 className="text-foreground text-lg md:text-xl font-light mb-4 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.7] mb-7">
                  {item.desc}
                </p>
                <ul className="space-y-2.5 mb-9">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-muted-foreground text-sm flex items-start gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/50 mt-[7px] shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-foreground/70 hover:text-accent transition-colors duration-200 group"
                >
                  {t.services.requestCta}
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
