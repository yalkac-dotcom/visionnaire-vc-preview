import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function IndustriesOverview() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>
            {t.industries.label}
          </p>
          <h1 className="text-primary-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>
            {t.industries.headline}
          </h1>
          <p className="text-primary-foreground/45 text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>
            {t.industries.subline}
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60">
            {t.industries.items.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 70}>
                <Link
                  to={`/branchen/${item.slug}`}
                  className="block bg-background p-8 md:p-10 h-full group hover:bg-warm-gray transition-colors duration-300"
                >
                  <h3 className="text-foreground text-base md:text-lg font-light mb-4 tracking-[-0.01em] group-hover:text-accent transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-[1.7] mb-8">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/50 group-hover:text-accent transition-colors duration-200">
                    {t.industryPage.ctaSecondary}
                    <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
