import { useParams, Link, Navigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroScrollIndicator } from "@/components/HeroScrollIndicator";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { industryImages } from "@/lib/industry-images";
import ctaAmbient from "@/assets/cta-ambient.jpg";

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const industry = t.industries.items.find((i) => i.slug === slug);
  if (!industry) return <Navigate to="/branchen" replace />;

  const matchingServices = t.services.items.filter((s) =>
    s.relevantIndustries.includes(industry.slug)
  );

  const heroImg = slug ? industryImages[slug] : undefined;

  return (
    <>
      <section className="relative bg-soft-ivory pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {heroImg && (
          <div className="absolute inset-0">
            <img src={heroImg} alt={industry.heroHeadline} className="w-full h-full object-cover opacity-[0.48]" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--soft-ivory))]/12 via-transparent to-[hsl(var(--soft-ivory))]/35" />
          </div>
        )}
        <div className="container relative z-10">
          <Link to="/branchen" className="inline-flex items-center gap-2 text-foreground/50 hover:text-[hsl(var(--brand-blue))] text-[11px] uppercase tracking-[0.18em] mb-10 transition-colors duration-200">
            <ArrowLeft size={12} />{t.industryPage.backToOverview}
          </Link>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-normal leading-[1.15] tracking-[-0.015em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "150ms" }}>{industry.heroHeadline}</h1>
          <p className="text-foreground/70 text-[15px] md:text-base leading-[1.7] max-w-xl mb-12 animate-reveal-up" style={{ animationDelay: "300ms" }}>{industry.heroSubline}</p>
          <div className="flex flex-wrap gap-4 animate-reveal-up" style={{ animationDelay: "450ms" }}>
            <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-7 py-3 hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-[0.97]">{t.industryPage.ctaPrimary}</Link>
          </div>
        </div>
        <HeroScrollIndicator />
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-foreground/65 text-[15px] md:text-base leading-[1.8]">{industry.intro}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-cloud-neutral">
        <div className="container">
          <ScrollReveal>
            <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.industryPage.consultingFields}</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industry.consultingFields.map((field, i) => (
              <ScrollReveal key={field} delay={i * 70}>
                <div className="bg-background border border-border p-7 md:p-8">
                  <div className="w-6 h-px bg-[hsl(var(--gold))]/60 mb-5" />
                  <p className="text-foreground text-sm font-medium tracking-[-0.01em]">{field}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <ScrollReveal>
            <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.industryPage.challengesLabel}</p>
          </ScrollReveal>
          <div className="max-w-2xl mt-10">
            {industry.challenges.map((challenge, i) => (
              <ScrollReveal key={challenge} delay={i * 60}>
                <div className="flex items-start gap-4 py-5 border-b border-border last:border-b-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))]/50 mt-[7px] shrink-0" />
                  <p className="text-foreground/65 text-sm leading-[1.7]">{challenge}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {industry.caseStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-cloud-neutral">
          <div className="container">
            <ScrollReveal>
              <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-12">{t.industryPage.projectsLabel}</p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {industry.caseStudies.map((cs, i) => (
                <ScrollReveal key={cs.title} delay={i * 80}>
                  <div className="bg-background border border-border p-8 md:p-10">
                    <h3 className="text-foreground text-base font-normal mb-3 tracking-[-0.01em]">{cs.title}</h3>
                    <p className="text-foreground/60 text-sm leading-[1.7]">{cs.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {matchingServices.length > 0 && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <ScrollReveal>
              <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.industryPage.matchingServices}</p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {matchingServices.map((service, i) => (
                <ScrollReveal key={service.number} delay={i * 80}>
                  <Link to={`/leistungen/${service.slug}`} className="block bg-card border border-border p-8 md:p-10 group hover:bg-soft-ivory transition-colors duration-300">
                    <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.2em] font-medium mb-3 block">{service.number}</span>
                    <h3 className="text-foreground text-base font-normal mb-3 tracking-[-0.01em] group-hover:text-brand-blue transition-colors duration-200">{service.title}</h3>
                    <p className="text-foreground/60 text-sm leading-[1.7]">{service.desc}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-20 md:py-28 bg-soft-ivory overflow-hidden">
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
