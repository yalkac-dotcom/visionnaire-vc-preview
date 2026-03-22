import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import ctaAmbient from "@/assets/cta-ambient.jpg";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-soft-ivory pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroAbout} alt="Visionnaire Consulting" className="w-full h-full object-cover opacity-[0.45]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--soft-ivory))]/15 via-transparent to-[hsl(var(--soft-ivory))]/35" />
        </div>
        <div className="container relative z-10">
          <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.about.label}</p>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-normal leading-[1.15] tracking-[-0.015em] max-w-3xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.about.headline}</h1>
          <p className="text-foreground/70 text-[15px] md:text-base leading-[1.7] max-w-xl mb-12 animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.about.subline}</p>
          <div className="flex flex-wrap gap-4 animate-reveal-up" style={{ animationDelay: "550ms" }}>
            <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-7 py-3 hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-[0.97]">{t.cta.projectCta}</Link>
            <Link to="/kontakt" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-primary/30 text-foreground/70 hover:text-foreground px-7 py-3 hover:bg-[hsl(var(--brand-blue-tint))] transition-all duration-200 active:scale-[0.97]">{t.cta.contactCta}</Link>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-32 md:py-40 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <div className="w-10 h-[2px] bg-[hsl(var(--gold))]/50 mb-6" />
                <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.about.approach.label}</p>
                <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-normal leading-[1.2] tracking-[-0.01em]">{t.about.approach.headline}</h2>
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={120}>
                {t.about.approach.text.split("\n\n").map((para, i) => (
                  <p key={i} className="text-foreground/65 text-[15px] md:text-base leading-[1.9] mb-6 last:mb-0">{para}</p>
                ))}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Thinking */}
      <section className="py-32 md:py-40 bg-cloud-neutral">
        <div className="container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.about.thinking.label}</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-normal leading-[1.2] tracking-[-0.01em] mb-8">{t.about.thinking.headline}</h2>
            </ScrollReveal>
            {t.about.thinking.text && (
              <ScrollReveal delay={140}>
                {t.about.thinking.text.split("\n\n").map((para, i) => (
                  <p key={i} className="text-foreground/65 text-[15px] md:text-base leading-[1.9] mb-6 last:mb-0">{para}</p>
                ))}
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* How we work */}
      {t.about.working && (
        <section className="py-32 md:py-40 bg-background">
          <div className="container">
            <ScrollReveal>
              <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.about.working.label}</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-normal leading-[1.2] tracking-[-0.01em] max-w-lg mb-20">{t.about.working.headline}</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
              {t.about.working.principles.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 70}>
                  <div className="bg-card p-7 md:p-8 h-full">
                    <span className="text-[hsl(var(--gold))] text-[11px] tracking-[0.2em] font-medium mb-5 block">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-foreground text-[13px] font-medium mb-3 tracking-[-0.01em]">{p.title}</h3>
                    <p className="text-foreground/60 text-[13px] leading-[1.7]">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* International perspective */}
      <section className="py-32 md:py-40 bg-soft-ivory">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.about.position.label}</p>
                <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-normal leading-[1.2] tracking-[-0.01em]">{t.about.position.headline}</h2>
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={120}>
                <p className="text-foreground/65 text-[15px] md:text-base leading-[1.9]">{t.about.position.text}</p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Brand universe */}
      {t.about.connection && (
        <section className="py-32 md:py-40 bg-background">
          <div className="container">
            <div className="max-w-3xl">
              <ScrollReveal>
                <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.about.connection.label}</p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-normal leading-[1.2] tracking-[-0.01em] mb-8">{t.about.connection.headline}</h2>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p className="text-foreground/65 text-[15px] md:text-base leading-[1.8] mb-12">{t.about.connection.text}</p>
              </ScrollReveal>
              <ScrollReveal delay={220}>
                <Link to="/unternehmensbereiche" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] hover:text-foreground transition-colors duration-200">
                  {t.nav.businessUnits} <ArrowUpRight size={12} />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-28 md:py-36 bg-cloud-neutral overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaAmbient} alt="" className="w-full h-full object-cover opacity-[0.22]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--cloud-neutral))]/25 via-transparent to-[hsl(var(--cloud-neutral))]/40" />
        </div>
        <div className="container text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-normal leading-[1.2] tracking-[-0.01em] mb-5">Wir freuen uns auf den Austausch</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-foreground/60 text-[15px] leading-[1.7] max-w-lg mx-auto mb-12">Wenn Sie ein Vorhaben mit strategischer Tiefe, diskreter Beratung und hochwertiger Positionierung begleiten lassen möchten, kommen wir gerne mit Ihnen ins Gespräch.</p>
          </ScrollReveal>
          <ScrollReveal delay={160}>
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
