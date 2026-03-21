import { useParams, Link, Navigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const industry = t.industries.items.find((i) => i.slug === slug);
  if (!industry) return <Navigate to="/branchen" replace />;

  const matchingServices = t.services.items.filter((s) =>
    s.relevantIndustries.includes(industry.slug)
  );

  return (
    <>
      <section className="bg-soft-ivory pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="container">
          <Link to="/branchen" className="inline-flex items-center gap-2 text-muted-foreground/50 hover:text-accent text-[11px] uppercase tracking-[0.18em] mb-10 transition-colors duration-200">
            <ArrowLeft size={12} />
            {t.industryPage.backToOverview}
          </Link>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "150ms" }}>
            {industry.heroHeadline}
          </h1>
          <p className="text-muted-foreground text-[15px] md:text-base leading-[1.7] max-w-xl mb-12 animate-reveal-up" style={{ animationDelay: "300ms" }}>
            {industry.heroSubline}
          </p>
          <div className="flex flex-wrap gap-4 animate-reveal-up" style={{ animationDelay: "450ms" }}>
            <Link to="/#contact" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-accent text-accent-foreground px-7 py-3 hover:bg-[hsl(var(--gold-deep))] transition-all duration-200 active:scale-[0.97]">
              {t.industryPage.ctaPrimary}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-muted-foreground text-[15px] md:text-base leading-[1.8]">
                {industry.intro}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-soft-ivory">
        <div className="container">
          <ScrollReveal>
            <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">
              {t.industryPage.consultingFields}
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industry.consultingFields.map((field, i) => (
              <ScrollReveal key={field} delay={i * 70}>
                <div className="bg-background p-7 md:p-8">
                  <div className="w-6 h-px bg-accent/30 mb-5" />
                  <p className="text-foreground text-sm font-medium tracking-[-0.01em]">
                    {field}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <ScrollReveal>
            <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">
              {t.industryPage.challengesLabel}
            </p>
          </ScrollReveal>
          <div className="max-w-2xl mt-10">
            {industry.challenges.map((challenge, i) => (
              <ScrollReveal key={challenge} delay={i * 60}>
                <div className="flex items-start gap-4 py-5 border-b border-border last:border-b-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/35 mt-[7px] shrink-0" />
                  <p className="text-muted-foreground text-sm leading-[1.7]">
                    {challenge}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {industry.caseStudies.length > 0 && (
        <section className="py-24 md:py-32 bg-soft-ivory">
          <div className="container">
            <ScrollReveal>
              <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-12">
                {t.industryPage.projectsLabel}
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {industry.caseStudies.map((cs, i) => (
                <ScrollReveal key={cs.title} delay={i * 80}>
                  <div className="bg-background p-8 md:p-10">
                    <h3 className="text-foreground text-base font-light mb-3 tracking-[-0.01em]">
                      {cs.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-[1.7]">
                      {cs.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {matchingServices.length > 0 && (
        <section className="py-24 md:py-32 bg-background">
          <div className="container">
            <ScrollReveal>
              <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">
                {t.industryPage.matchingServices}
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {matchingServices.map((service, i) => (
                <ScrollReveal key={service.number} delay={i * 80}>
                  <Link
                    to={`/leistungen/${service.slug}`}
                    className="block bg-cloud-neutral p-8 md:p-10 group hover:bg-soft-ivory transition-colors duration-300"
                  >
                    <span className="text-accent/50 text-[11px] tracking-[0.2em] font-light mb-3 block">
                      {service.number}
                    </span>
                    <h3 className="text-foreground text-base font-light mb-3 tracking-[-0.01em] group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-[1.7]">
                      {service.desc}
                    </p>
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
            <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em] mb-12">
              {t.contact.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#contact" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-accent text-accent-foreground px-7 py-3 hover:bg-[hsl(var(--gold-deep))] transition-all duration-200 active:scale-[0.97]">
                {t.cta.projectCta}
              </Link>
              <Link to="/#contact" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-foreground/15 text-foreground/60 hover:text-foreground px-7 py-3 hover:bg-foreground/3 transition-all duration-200 active:scale-[0.97]">
                {t.cta.contactCta}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
