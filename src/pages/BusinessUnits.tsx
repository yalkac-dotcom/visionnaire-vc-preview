import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroScrollIndicator } from "@/components/HeroScrollIndicator";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroDomizil from "@/assets/hero-domizil.jpg";
import domizilOffice from "@/assets/domizil-office.jpg";
import domizilMeeting from "@/assets/domizil-meeting.jpg";
import domizilLobby from "@/assets/domizil-lobby.jpg";
import domizilWorkspace from "@/assets/domizil-workspace.jpg";
import ctaAmbient from "@/assets/cta-ambient.jpg";

export default function BusinessUnits() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-soft-ivory pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroDomizil} alt="Premium business environment" className="w-full h-full object-cover opacity-[0.45]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--soft-ivory))]/15 via-transparent to-[hsl(var(--soft-ivory))]/35" />
        </div>
        <div className="container relative z-10">
          <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.businessUnits.label}</p>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-normal leading-[1.15] tracking-[-0.015em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.businessUnits.headline}</h1>
          <p className="text-foreground/70 text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.businessUnits.subline}</p>
        </div>
        <HeroScrollIndicator />
      </section>

      {/* Unit panels */}
      <section className="py-24 md:py-28 bg-background">
        <div className="container">
          {t.businessUnits.items.map((unit, i) => (
            <ScrollReveal key={unit.name} delay={i * 100}>
              <div className={`grid md:grid-cols-12 gap-12 md:gap-24 ${i > 0 ? "mt-24 md:mt-32 pt-24 md:pt-32 border-t border-border/60" : ""}`}>
                <div className="md:col-span-4">
                  <div className="w-10 h-[2px] bg-[hsl(var(--gold))]/50 mb-10" />
                  {unit.role && (
                    <span className="text-[hsl(var(--brand-blue-muted))] text-[10.5px] uppercase tracking-[0.22em] font-[440] block mb-6">{unit.role}</span>
                  )}
                  <h3 className="text-foreground text-[1.35rem] md:text-[1.65rem] font-normal tracking-[-0.015em] leading-[1.2]">{unit.name}</h3>
                </div>
                <div className="md:col-span-7 md:col-start-6 md:pt-2">
                  <p className="text-foreground/65 text-[15px] leading-[1.9] mb-10">{unit.desc}</p>
                  {i === 0 ? (
                    <Link to="/leistungen" className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] hover:text-foreground transition-colors duration-200">
                      {t.cta.consultationCta} <ArrowUpRight size={12} />
                    </Link>
                  ) : (
                    <a href={unit.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] hover:text-foreground transition-colors duration-200">
                      {t.cta.contactCta} <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Domizil Visual Gallery */}
      <section className="py-18 md:py-24 bg-soft-ivory">
        <div className="container">
          <ScrollReveal>
            <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.businessUnits.galleryLabel ?? "Raumqualität"}</p>
            <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-normal leading-[1.2] tracking-[-0.01em] max-w-lg mb-6">{t.businessUnits.galleryHeadline ?? "Repräsentative Arbeitsumgebungen auf höchstem Niveau"}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: domizilLobby, alt: t.businessUnits.galleryItems?.[0]?.alt ?? "Eleganter Empfangsbereich", label: t.businessUnits.galleryItems?.[0]?.label ?? "Empfang" },
              { src: domizilOffice, alt: t.businessUnits.galleryItems?.[1]?.alt ?? "Hochwertige Büroflächen", label: t.businessUnits.galleryItems?.[1]?.label ?? "Büroflächen" },
              { src: domizilMeeting, alt: t.businessUnits.galleryItems?.[2]?.alt ?? "Stilvoller Meetingraum", label: t.businessUnits.galleryItems?.[2]?.label ?? "Konferenz" },
              { src: domizilWorkspace, alt: t.businessUnits.galleryItems?.[3]?.alt ?? "Ruhiger Arbeitsbereich", label: t.businessUnits.galleryItems?.[3]?.label ?? "Arbeitsplatz" },
            ].map((img, i) => (
              <ScrollReveal key={img.label} delay={i * 80}>
                <div className="group relative overflow-hidden aspect-[4/5]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(var(--brand-blue))]/60 to-transparent h-1/3" />
                  <span className="absolute bottom-4 left-4 text-white/90 text-[11px] uppercase tracking-[0.18em]">{img.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {t.businessUnits.architectureLabel && (
        <section className="py-10 md:py-12 bg-cloud-neutral">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <div className="md:col-span-4">
                <ScrollReveal>
                  <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">{t.businessUnits.architectureLabel}</p>
                  <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-normal leading-[1.2] tracking-[-0.01em]">{t.businessUnits.architectureHeadline}</h2>
                </ScrollReveal>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <ScrollReveal delay={120}>
                  <p className="text-foreground/65 text-[15px] md:text-base leading-[1.9]">{t.businessUnits.architectureText}</p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-14 md:py-18 bg-soft-ivory overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaAmbient} alt="" className="w-full h-full object-cover opacity-[0.24]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--soft-ivory))]/25 via-transparent to-[hsl(var(--soft-ivory))]/40" />
        </div>
        <div className="container text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-foreground text-[1.5rem] md:text-[2rem] font-normal leading-[1.2] tracking-[-0.01em] mb-5">{t.contact.headline}</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-foreground/60 text-[15px] leading-[1.7] max-w-md mx-auto mb-6">{t.contact.text}</p>
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
