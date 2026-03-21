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
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-2xl">
          <p
            className="text-primary-foreground/50 text-xs md:text-sm tracking-widest uppercase mb-6 animate-reveal-up"
            style={{ animationDelay: "200ms" }}
          >
            {t.hero.tagline}
          </p>
          <h1
            className="text-primary-foreground text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6 animate-reveal-up"
            style={{ animationDelay: "400ms" }}
          >
            {t.hero.headline}
          </h1>
          <p
            className="text-primary-foreground/65 text-base md:text-lg leading-relaxed max-w-xl mb-10 animate-reveal-up"
            style={{ animationDelay: "600ms" }}
          >
            {t.hero.subline}
          </p>
          <div
            className="flex flex-wrap gap-4 animate-reveal-up"
            style={{ animationDelay: "800ms" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">{t.hero.cta}</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">{t.hero.ctaSecondary}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
    </section>
  );
}
