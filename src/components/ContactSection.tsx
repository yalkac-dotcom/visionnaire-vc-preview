import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 md:py-40 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <div className="w-12 h-[2px] bg-[hsl(var(--gold))] mx-auto mb-6" />
            <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">
              {t.contact.label}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-foreground text-[1.5rem] md:text-[2.125rem] lg:text-[2.625rem] font-normal leading-[1.18] tracking-[-0.02em] mb-6">
              {t.contact.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="text-foreground/65 text-[15px] md:text-[16px] leading-[1.7] mb-14 max-w-lg mx-auto">
              {t.contact.text}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link
                to="/kontakt"
                className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-8 py-3.5 hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-[0.97]"
              >
                {t.contact.cta}
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-primary/30 text-foreground/70 hover:text-foreground px-8 py-3.5 hover:bg-[hsl(var(--brand-blue-tint))] transition-all duration-200 active:scale-[0.97]"
              >
                {t.contact.ctaSecondary}
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm text-foreground/60">
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center gap-2.5 hover:text-[hsl(var(--brand-blue))] transition-colors duration-200"
              >
                <Mail size={14} strokeWidth={1.5} />
                {t.contact.email}
              </a>
              <a
                href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2.5 hover:text-[hsl(var(--brand-blue))] transition-colors duration-200"
              >
                <Phone size={14} strokeWidth={1.5} />
                {t.contact.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
