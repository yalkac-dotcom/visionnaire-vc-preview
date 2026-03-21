import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export function DomizilSection() {
  const { t } = useLanguage();

  return (
    <section id="business-center" className="py-24 md:py-28 bg-warm-gray">
      <div className="container">
        <ScrollReveal>
          <div className="border border-border/80 bg-background p-10 md:p-14 max-w-3xl mx-auto">
            <p className="text-muted-foreground/60 text-[11px] uppercase tracking-[0.2em] mb-5">
              {t.domizil.label}
            </p>
            <h2 className="text-foreground text-xl md:text-2xl font-light mb-5 tracking-[-0.01em]">
              {t.domizil.headline}
            </h2>
            <p className="text-muted-foreground text-sm leading-[1.7] mb-8 max-w-xl">
              {t.domizil.text}
            </p>
            <a
              href="https://visionnaire.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-foreground/70 hover:text-accent transition-colors duration-200"
            >
              {t.domizil.cta}
              <ArrowUpRight size={13} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
