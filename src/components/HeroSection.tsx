import { useLanguage } from "@/i18n/LanguageContext";
import heroImage from "@/assets/hero-consulting.jpg";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center bg-soft-ivory overflow-hidden">
      {/* Background image — light, airy */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium corporate architecture"
          className="w-full h-full object-cover opacity-[0.18]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--warm-white))]/60 via-transparent to-[hsl(var(--soft-ivory))]/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-28 md:pt-44 md:pb-36">
        <div className="max-w-[640px]">
          <h1
            className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] mb-7 animate-reveal-up"
            style={{ animationDelay: "200ms" }}
          >
            {t.hero.headline}
          </h1>
          <p
            className="text-soft-charcoal text-[15px] md:text-base leading-[1.7] max-w-[520px] mb-12 animate-reveal-up"
            style={{ animationDelay: "400ms" }}
          >
            {t.hero.subline}
          </p>
          <div
            className="flex flex-wrap gap-4 mb-14 animate-reveal-up"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-7 py-3 hover:bg-accent transition-all duration-200 active:scale-[0.97]"
            >
              {t.hero.cta}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-primary/30 text-foreground/70 hover:text-foreground px-7 py-3 hover:bg-[hsl(var(--gold-tint))] transition-all duration-200 active:scale-[0.97]"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
          <p
            className="text-warm-grey text-[11px] tracking-[0.2em] uppercase animate-reveal-up"
            style={{ animationDelay: "800ms" }}
          >
            {t.hero.tagline}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-0 right-0 z-10 flex justify-center">
        <a href="#expertise" aria-label="Scroll down">
          <div className="w-[20px] h-[32px] rounded-full border border-foreground/15 flex items-start justify-center pt-[6px] animate-scroll-indicator">
            <div className="w-[2.5px] h-[6px] rounded-full bg-foreground/25 animate-scroll-dot" />
          </div>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
