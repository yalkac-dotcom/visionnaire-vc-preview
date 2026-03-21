import { useParams, Link, Navigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const service = t.services.items.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/leistungen" replace />;

  const matchingIndustries = t.industries.items.filter((ind) =>
    service.relevantIndustries.includes(ind.slug)
  );

  return (
    <>
      <section className="bg-soft-ivory pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="container">
          <Link to="/leistungen" className="inline-flex items-center gap-2 text-warm-grey hover:text-[hsl(var(--brand-blue))] text-[11px] uppercase tracking-[0.18em] mb-10 transition-colors duration-200">
            <ArrowLeft size={12} />{t.servicePage.backToOverview}
          </Link>
          <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{service.number}</p>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "200ms" }}>{service.title}</h1>
          <p className="text-soft-charcoal text-[15px] md:text-base leading-[1.7] max-w-xl mb-12 animate-reveal-up" style={{ animationDelay: "350ms" }}>{service.desc}</p>
          <div className="flex flex-wrap gap-4 animate-reveal-up" style={{ animationDelay: "500ms" }}>
            <Link to="/#contact" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-7 py-3 hover:bg-accent transition-all duration-200 active:scale-[0.97]">{t.servicePage.ctaPrimary}</Link>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="container">
          <ScrollReveal>
            <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5">{t.servicePage.whatWeSupport}</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.details.map((detail, i) => (
              <ScrollReveal key={detail} delay={i * 70}>
                <div className="bg-card border border-border p-7 md:p-8">
                  <div className="w-6 h-px bg-border mb-5" />
                  <p className="text-foreground text-sm font-medium tracking-[-0.01em]">{detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cloud-neutral">
        <div className="container">
          <ScrollReveal>
            <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5">{t.servicePage.typicalSituations}</p>
          </ScrollReveal>
          <div className="max-w-2xl mt-10">
            {service.situations.map((situation, i) => (
              <ScrollReveal key={situation} delay={i * 60}>
                <div className="flex items-start gap-4 py-5 border-b border-border last:border-b-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-border mt-[7px] shrink-0" />
                  <p className="text-muted-foreground text-sm leading-[1.7]">{situation}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {matchingIndustries.length > 0 && (
        <section className="py-24 md:py-32 bg-background">
          <div className="container">
            <ScrollReveal>
              <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5">{t.servicePage.relevantIndustries}</p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {matchingIndustries.map((ind, i) => (
                <ScrollReveal key={ind.slug} delay={i * 80}>
                  <Link to={`/branchen/${ind.slug}`} className="block bg-card border border-border p-8 group hover:bg-soft-ivory transition-colors duration-300">
                    <h3 className="text-foreground text-base font-light mb-3 tracking-[-0.01em] group-hover:text-brand-blue transition-colors duration-200">{ind.name}</h3>
                    <p className="text-muted-foreground text-sm leading-[1.7] mb-4">{ind.desc}</p>
                    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/30 group-hover:text-[hsl(var(--brand-blue))] transition-colors duration-200">
                      <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-28 md:py-36 bg-soft-ivory">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em] mb-12">{t.contact.headline}</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#contact" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-7 py-3 hover:bg-accent transition-all duration-200 active:scale-[0.97]">{t.cta.projectCta}</Link>
              <Link to="/#contact" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-[hsl(var(--brand-blue))]/25 text-foreground/70 hover:text-foreground px-7 py-3 hover:bg-[hsl(var(--brand-blue-tint))] transition-all duration-200 active:scale-[0.97]">{t.cta.contactCta}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
