import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { industryImages } from "@/lib/industry-images";

export function IndustriesHomeSection() {
  const { t } = useLanguage();
  const items = t.industries.items.slice(0, 6);

  return (
    <section id="industries" className="py-32 md:py-40 bg-cloud-neutral">
      <div className="container">
        <ScrollReveal>
          <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.industries.label}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-normal leading-[1.18] tracking-[-0.02em] max-w-2xl mb-6">{t.industries.headline}</h2>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="text-foreground/55 text-[15px] leading-[1.7] max-w-xl mb-12">{t.industries.subline}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 70}>
              <Link to={`/branchen/${item.slug}`} className="block bg-background border border-border/60 h-full group hover:bg-soft-ivory transition-colors duration-300">
                {industryImages[item.slug] && (
                  <div className="h-36 overflow-hidden">
                    <img src={industryImages[item.slug]} alt={item.name} className="w-full h-full object-cover opacity-[0.7] group-hover:opacity-[0.82] group-hover:scale-[1.02] transition-all duration-500" loading="lazy" />
                  </div>
                )}
                <div className="p-7 md:p-9">
                  <h3 className="text-foreground text-sm font-medium mb-3 tracking-[-0.01em] group-hover:text-brand-blue transition-colors duration-200">{item.name}</h3>
                  <p className="text-foreground/50 text-[13px] leading-[1.7] mb-6">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/20 group-hover:text-[hsl(var(--brand-blue))] transition-colors duration-200">
                    <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <Link to="/branchen" className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] hover:text-foreground transition-colors duration-200">
              {t.industryPage.backToOverview} <ArrowRight size={12} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
