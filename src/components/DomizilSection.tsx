import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export function DomizilSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-24 bg-warm-gray">
      <div className="container">
        <ScrollReveal>
          <div className="border border-border bg-background p-8 md:p-12 max-w-3xl mx-auto">
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">
              {t.domizil.label}
            </p>
            <h2 className="text-foreground text-xl md:text-2xl font-light mb-4">
              {t.domizil.headline}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t.domizil.text}
            </p>
            <a
              href="https://visionnaire.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-200"
            >
              {t.domizil.cta}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
