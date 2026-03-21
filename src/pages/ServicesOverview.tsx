import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesOverview() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-soft-ivory pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="container">
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.services.label}</p>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.services.headline}</h1>
          <p className="text-muted-foreground text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.services.subline}</p>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {t.services.items.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 70}>
                <Link to={`/leistungen/${item.slug}`} className="block bg-background p-8 md:p-10 lg:p-14 h-full group hover:bg-cloud-neutral transition-colors duration-300">
                  <span className="text-accent/50 text-[11px] tracking-[0.2em] font-light mb-5 block">{item.number}</span>
                  <h3 className="text-foreground text-lg md:text-xl font-light mb-4 tracking-[-0.01em] group-hover:text-accent transition-colors duration-200">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-[1.7] mb-7">{item.desc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {item.details.slice(0, 3).map((d) => (
                      <li key={d} className="text-muted-foreground text-sm flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-accent/40 mt-[7px] shrink-0" />{d}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/35 group-hover:text-accent transition-colors duration-200">
                    {t.services.requestCta} <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
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
