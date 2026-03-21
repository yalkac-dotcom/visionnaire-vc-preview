import { useLanguage } from "@/i18n/LanguageContext";
import heroImage from "@/assets/hero-consulting.jpg";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium corporate architecture"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-2xl">
          <h1
            className="text-primary-foreground text-3xl md:text-4xl lg:text-[3.25rem] font-light leading-[1.15] mb-6 animate-reveal-up"
            style={{ animationDelay: "200ms" }}
          >
            {t.hero.headline}
          </h1>
          <p
            className="text-primary-foreground/60 text-base md:text-lg leading-relaxed max-w-xl mb-10 animate-reveal-up"
            style={{ animationDelay: "400ms" }}
          >
            {t.hero.subline}
          </p>
          <div
            className="flex flex-wrap gap-4 mb-10 animate-reveal-up"
            style={{ animationDelay: "600ms" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">{t.hero.cta}</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">{t.hero.ctaSecondary}</a>
            </Button>
          </div>
          <p
            className="text-primary-foreground/35 text-xs tracking-widest uppercase animate-reveal-up"
            style={{ animationDelay: "800ms" }}
          >
            {t.hero.tagline}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
        <a
          href="#expertise"
          aria-label="Scroll down"
        >
          <div className="w-[22px] h-[36px] rounded-full border border-primary-foreground/25 flex items-start justify-center pt-[7px] animate-scroll-indicator">
            <div className="w-[3px] h-[7px] rounded-full bg-primary-foreground/50 animate-scroll-dot" />
          </div>
        </a>
      </div>

      {/* Subtle bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
    </section>
  );
}
