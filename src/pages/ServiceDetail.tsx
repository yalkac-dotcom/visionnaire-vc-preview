import { useParams, Link, Navigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { serviceImages } from "@/lib/service-images";
import ctaAmbient from "@/assets/cta-ambient.jpg";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const service = t.services.items.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/leistungen" replace />;

  const matchingIndustries = t.industries.items.filter((ind) =>
    service.relevantIndustries.includes(ind.slug)
  );

  const heroImg = slug ? serviceImages[slug] : undefined;

  return (
    <>
      <section className="relative bg-soft-ivory pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        {heroImg && (
          <div className="absolute inset-0">
            <img src={heroImg} alt={service.title} className="w-full h-full object-cover opacity-[0.38]" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--soft-ivory))]/20 via-transparent to-[hsl(var(--soft-ivory))]/45" />
          </div>
        )}
        <div className="container relative z-10">
          <Link to="/leistungen" className="inline-flex items-center gap-2 text-foreground/50 hover:text-[hsl(var(--brand-blue))] text-[11px] uppercase tracking-[0.18em] mb-10 transition-colors duration-200">
            <ArrowLeft size={12} />{t.servicePage.backToOverview}
          </Link>
          <p className="text-[hsl(var(--gold))] text-[11px] uppercase tracking-[0.2em] font-medium mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{service.number}</p>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-normal leading-[1.15] tracking-[-0.015em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "200ms" }}>{service.title}</h1>
          <p className="text-foreground/70 text-[15px] md:text-base leading-[1.7] max-w-xl mb-12 animate-reveal-up" style={{ animationDelay: "350ms" }}>{service.desc}</p>
          <div className="flex flex-wrap gap-4 animate-reveal-up" style={{ animationDelay: "500ms" }}>
            <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-7 py-3 hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-[0.97]">{t.servicePage.ctaPrimary}</Link>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="container">
          <ScrollReveal>
            <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.servicePage.whatWeSupport}</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.details.map((detail, i) => (
              <ScrollReveal key={detail} delay={i * 70}>
                <div className="bg-card border border-border p-7 md:p-8">
                  <div className="w-6 h-px bg-[hsl(var(--gold))]/60 mb-5" />
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
            <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.servicePage.typicalSituations}</p>
          </ScrollReveal>
          <div className="max-w-2xl mt-10">
            {service.situations.map((situation, i) => (
              <ScrollReveal key={situation} delay={i * 60}>
                <div className="flex items-start gap-4 py-5 border-b border-border last:border-b-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))]/50 mt-[7px] shrink-0" />
                  <p className="text-foreground/65 text-sm leading-[1.7]">{situation}</p>
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
              <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.servicePage.relevantIndustries}</p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {matchingIndustries.map((ind, i) => (
                <ScrollReveal key={ind.slug} delay={i * 80}>
                  <Link to={`/branchen/${ind.slug}`} className="block bg-card border border-border p-8 group hover:bg-soft-ivory transition-colors duration-300">
                    <h3 className="text-foreground text-base font-normal mb-3 tracking-[-0.01em] group-hover:text-brand-blue transition-colors duration-200">{ind.name}</h3>
                    <p className="text-foreground/60 text-sm leading-[1.7] mb-4">{ind.desc}</p>
                    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/25 group-hover:text-[hsl(var(--brand-blue))] transition-colors duration-200">
                      <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-28 md:py-36 bg-soft-ivory overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaAmbient} alt="" className="w-full h-full object-cover opacity-[0.20]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--soft-ivory))]/35 via-transparent to-[hsl(var(--soft-ivory))]/50" />
        </div>
        <div className="container text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-normal leading-[1.2] tracking-[-0.01em] mb-12">{t.contact.headline}</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-7 py-3 hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-[0.97]">{t.cta.projectCta}</Link>
              <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-primary/30 text-foreground/70 hover:text-foreground px-7 py-3 hover:bg-[hsl(var(--brand-blue-tint))] transition-all duration-200 active:scale-[0.97]">{t.cta.contactCta}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
