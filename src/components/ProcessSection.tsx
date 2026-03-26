import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-10 md:py-12 bg-cloud-neutral">
      <div className="container">
        <ScrollReveal>
          <div className="w-10 h-[2px] bg-[hsl(var(--gold))] mb-6" />
          <p className="text-brand-blue text-[12px] uppercase tracking-[0.2em] font-medium mb-5">
            {t.process.label}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-foreground text-[1.5rem] md:text-[2.125rem] font-normal leading-[1.18] tracking-[-0.02em] max-w-lg mb-10">
            {t.process.headline}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {t.process.steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={120 + i * 70}>
              <div className="bg-background p-7 md:p-8 h-full">
                <span className="text-[hsl(var(--gold))] text-[12px] tracking-[0.2em] font-medium mb-5 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-foreground text-sm font-medium mb-3 tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="text-foreground/60 text-[13.5px] leading-[1.7]">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
