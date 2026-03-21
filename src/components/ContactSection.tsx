import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-28 md:py-36 bg-primary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">
              {t.contact.label}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-primary-foreground text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-light leading-[1.2] tracking-[-0.01em] mb-6">
              {t.contact.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="text-primary-foreground/40 text-[15px] md:text-base leading-[1.7] mb-12 max-w-lg mx-auto">
              {t.contact.text}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="flex flex-wrap justify-center gap-4 mb-14">
              <Link
                to="/kontakt"
                className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-accent text-accent-foreground px-7 py-3 hover:bg-accent/90 transition-all duration-200 active:scale-[0.97]"
              >
                {t.contact.cta}
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground px-7 py-3 hover:bg-primary-foreground/5 transition-all duration-200 active:scale-[0.97]"
              >
                {t.contact.ctaSecondary}
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm text-primary-foreground/35">
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center gap-2.5 hover:text-primary-foreground/70 transition-colors duration-200"
              >
                <Mail size={14} strokeWidth={1.5} />
                {t.contact.email}
              </a>
              <a
                href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2.5 hover:text-primary-foreground/70 transition-colors duration-200"
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
