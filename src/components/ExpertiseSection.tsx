import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ExpertiseSection() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="py-24 md:py-32 bg-background">
      <div className="container">
        <ScrollReveal>
          <p className="text-accent text-xs uppercase tracking-widest mb-4">
            {t.expertise.label}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-light leading-tight max-w-2xl mb-8">
            {t.expertise.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
            {t.expertise.text}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
