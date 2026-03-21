import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-about.jpg";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero — lighter, more airy */}
      <section className="relative min-h-[60vh] flex items-end bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Premium corporate interior" className="w-full h-full object-cover opacity-35" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="container relative z-10 pb-20 md:pb-28 pt-40">
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.about.label}</p>
          <h1 className="text-primary-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.about.headline}</h1>
          <p className="text-primary-foreground/55 text-[15px] md:text-base leading-[1.7] max-w-xl mb-12 animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.about.subline}</p>
          <div className="animate-reveal-up" style={{ animationDelay: "550ms" }}>
            <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-primary-foreground/25 text-primary-foreground/75 hover:text-primary-foreground px-7 py-3 hover:bg-primary-foreground/5 transition-all duration-200 active:scale-[0.97]">
              {t.cta.contactCta}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/8 to-transparent" />
      </section>

      {/* Haltung & Anspruch — light bg */}
      <section className="py-32 md:py-40 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">{t.about.approach.label}</p>
                <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em]">{t.about.approach.headline}</h2>
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={120}>
                <p className="text-muted-foreground text-[15px] md:text-base leading-[1.9]">{t.about.approach.text}</p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Wie wir denken — warm gray */}
      <section className="py-32 md:py-40 bg-warm-gray">
        <div className="container">
          <ScrollReveal>
            <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">{t.about.thinking.label}</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em] max-w-lg mb-6">{t.about.thinking.headline}</h2>
          </ScrollReveal>
          {t.about.thinking.text && (
            <ScrollReveal delay={120}>
              <p className="text-muted-foreground text-[15px] md:text-base leading-[1.8] max-w-2xl mb-20">{t.about.thinking.text}</p>
            </ScrollReveal>
          )}
          <div className="grid md:grid-cols-2 gap-16 md:gap-14">
            {t.about.thinking.points.map((point, i) => (
              <ScrollReveal key={point.title} delay={150 + i * 90}>
                <div>
                  <div className="w-10 h-px bg-accent/30 mb-8" />
                  <h3 className="text-foreground text-sm font-medium mb-3 tracking-[-0.01em]">{point.title}</h3>
                  <p className="text-muted-foreground text-sm leading-[1.7]">{point.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wie wir arbeiten — light bg */}
      {t.about.working && (
        <section className="py-32 md:py-40 bg-background">
          <div className="container">
            <ScrollReveal>
              <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">{t.about.working.label}</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em] max-w-lg mb-20">{t.about.working.headline}</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border/50">
              {t.about.working.principles.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 70}>
                  <div className="bg-warm-gray p-7 md:p-8 h-full">
                    <span className="text-accent/30 text-[11px] tracking-[0.2em] font-light mb-5 block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-foreground text-[13px] font-medium mb-3 tracking-[-0.01em]">{p.title}</h3>
                    <p className="text-muted-foreground text-[13px] leading-[1.7]">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Position — single dark accent section */}
      <section className="py-32 md:py-40 bg-warm-gray-dark">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">{t.about.position.label}</p>
                <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em]">{t.about.position.headline}</h2>
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={120}>
                <p className="text-muted-foreground text-[15px] md:text-base leading-[1.9]">{t.about.position.text}</p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Connection — light */}
      {t.about.connection && (
        <section className="py-32 md:py-40 bg-background">
          <div className="container">
            <div className="max-w-3xl">
              <ScrollReveal>
                <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5">{t.about.connection.label}</p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em] mb-8">{t.about.connection.headline}</h2>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p className="text-muted-foreground text-[15px] md:text-base leading-[1.8] mb-12">{t.about.connection.text}</p>
              </ScrollReveal>
              <ScrollReveal delay={220}>
                <Link to="/unternehmensbereiche" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/50 hover:text-accent transition-colors duration-200">
                  {t.nav.businessUnits} <ArrowUpRight size={12} />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* CTA — light warm section */}
      <section className="py-28 md:py-36 bg-warm-gray">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-light leading-[1.2] tracking-[-0.01em] mb-5">{t.contact.headline}</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-muted-foreground text-[15px] leading-[1.7] max-w-md mx-auto mb-12">{t.contact.text}</p>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-accent text-accent-foreground px-7 py-3 hover:bg-accent/85 transition-all duration-200 active:scale-[0.97]">{t.cta.projectCta}</Link>
              <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-foreground/15 text-foreground/60 hover:text-foreground px-7 py-3 hover:bg-foreground/3 transition-all duration-200 active:scale-[0.97]">{t.cta.contactCta}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
