import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-accent text-xs uppercase tracking-widest mb-4">
              {t.contact.label}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6">
              {t.contact.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              {t.contact.text}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="premium" size="lg" asChild>
                <a href={`mailto:${t.contact.email}`}>{t.contact.cta}</a>
              </Button>
              <Button variant="premium-outline" size="lg" asChild>
                <a href={`mailto:${t.contact.email}`}>{t.contact.ctaSecondary}</a>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-muted-foreground">
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail size={15} strokeWidth={1.5} />
                {t.contact.email}
              </a>
              <a
                href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone size={15} strokeWidth={1.5} />
                {t.contact.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
