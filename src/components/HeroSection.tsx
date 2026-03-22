import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-strategy.jpg";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center bg-soft-ivory overflow-hidden">
      {/* Background image — present but refined */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium corporate architecture"
          className="w-full h-full object-cover opacity-[0.48]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--soft-ivory))]/15 via-transparent to-[hsl(var(--soft-ivory))]/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-28 md:pt-44 md:pb-36">
        <div className="max-w-[660px]">
          {/* Gold accent line */}
          <div
            className="w-14 h-[2px] bg-[hsl(var(--gold))] mb-8 animate-reveal-up"
            style={{ animationDelay: "100ms" }}
          />
          <h1
            className="text-foreground text-[1.85rem] md:text-[2.5rem] lg:text-[3.25rem] font-normal leading-[1.12] tracking-[-0.02em] mb-7 animate-reveal-up"
            style={{ animationDelay: "200ms", lineHeight: "1.12" }}
          >
            {t.hero.headline}
          </h1>
          <p
            className="text-foreground/85 text-[15px] md:text-[16px] leading-[1.75] max-w-[520px] mb-12 animate-reveal-up"
            style={{ animationDelay: "400ms" }}
          >
            {t.hero.subline}
          </p>
          <div
            className="flex flex-wrap gap-4 mb-14 animate-reveal-up"
            style={{ animationDelay: "600ms" }}
          >
            <Link
              to="/kontakt"
              className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-8 py-3.5 hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-[0.97]"
            >
              {t.hero.cta}
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-primary/30 text-foreground/70 hover:text-foreground px-8 py-3.5 hover:bg-[hsl(var(--brand-blue-tint))] transition-all duration-200 active:scale-[0.97]"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
          <p
            className="text-foreground/65 text-[11px] tracking-[0.2em] uppercase animate-reveal-up"
            style={{ animationDelay: "800ms" }}
          >
            {t.hero.tagline}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-0 right-0 z-10 flex justify-center">
        <a
          href="#expertise"
          aria-label="Scroll down"
          className="group"
        >
          <div className="w-[22px] h-[36px] rounded-full border-[1.5px] border-[hsl(var(--brand-blue))]/50 flex items-start justify-center pt-[7px] transition-all duration-300 group-hover:border-[hsl(var(--brand-blue))]/80 group-active:scale-[0.95]">
            <div className="w-[3px] h-[7px] rounded-full bg-[hsl(var(--brand-blue))]/60 animate-scroll-dot" />
          </div>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
