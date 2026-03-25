import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ExpertiseSection() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="py-20 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">
              {t.expertise.label}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-foreground text-[1.5rem] md:text-[2.125rem] lg:text-[2.625rem] font-normal leading-[1.18] tracking-[-0.02em] mb-8">
              {t.expertise.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="text-foreground/70 text-[15px] md:text-[16px] leading-[1.8] mb-6">
              {t.expertise.text}
            </p>
          </ScrollReveal>
          {t.expertise.text2 && (
            <ScrollReveal delay={220}>
              <p className="text-foreground/70 text-[15px] md:text-[16px] leading-[1.8]">
                {t.expertise.text2}
              </p>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
