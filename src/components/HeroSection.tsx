import { useLanguage } from "@/i18n/LanguageContext";
import heroImage from "@/assets/hero-consulting.jpg";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium corporate architecture"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-28 md:pt-44 md:pb-36">
        <div className="max-w-[640px]">
          <h1
            className="text-primary-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] mb-7 animate-reveal-up"
            style={{ animationDelay: "200ms" }}
          >
            {t.hero.headline}
          </h1>
          <p
            className="text-primary-foreground/50 text-[15px] md:text-base leading-[1.7] max-w-[520px] mb-12 animate-reveal-up"
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
              className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-accent text-accent-foreground px-7 py-3 hover:bg-accent/90 transition-all duration-200 active:scale-[0.97]"
            >
              {t.hero.cta}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground px-7 py-3 hover:bg-primary-foreground/5 transition-all duration-200 active:scale-[0.97]"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
          <p
            className="text-primary-foreground/25 text-[11px] tracking-[0.2em] uppercase animate-reveal-up"
            style={{ animationDelay: "800ms" }}
          >
            {t.hero.tagline}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-0 right-0 z-10 flex justify-center">
        <a href="#expertise" aria-label="Scroll down">
          <div className="w-[20px] h-[32px] rounded-full border border-primary-foreground/20 flex items-start justify-center pt-[6px] animate-scroll-indicator">
            <div className="w-[2.5px] h-[6px] rounded-full bg-primary-foreground/40 animate-scroll-dot" />
          </div>
        </a>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/8 to-transparent" />
    </section>
  );
}
