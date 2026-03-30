import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-strategy.jpg";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center bg-[hsl(30,20%,18%)] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={t.hero.headline}
          className="w-full h-full object-cover opacity-[0.65]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,20%,18%)]/30 via-transparent to-[hsl(30,20%,18%)]/45" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-[660px]">
          {/* Gold accent line */}
          <div
            className="w-14 h-[2px] bg-[hsl(var(--gold))] mb-8 animate-reveal-up"
            style={{ animationDelay: "100ms" }}
          />
          <h1
            className="text-white text-[1.85rem] md:text-[2.5rem] lg:text-[3.25rem] font-normal leading-[1.12] tracking-[-0.02em] mb-7 animate-reveal-up"
            style={{ animationDelay: "200ms", lineHeight: "1.12" }}
          >
            {t.hero.headline}
          </h1>
          <p
            className="text-white/80 text-[15px] md:text-[16px] leading-[1.75] max-w-[520px] mb-8 animate-reveal-up"
            style={{ animationDelay: "400ms" }}
          >
            {t.hero.subline}
          </p>
          <div
            className="flex justify-start mb-6 animate-reveal-up"
            style={{ animationDelay: "600ms" }}
          >
            <Link
              to="/kontakt"
              className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-8 py-3.5 hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-[0.97]"
            >
              {t.hero.cta}
            </Link>
          </div>
          <p
            className="text-white/70 text-[12px] tracking-[0.2em] uppercase font-[470] mt-6 animate-reveal-up"
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
          aria-label={t.a11y.scrollDown}
          className="group"
        >
          <div className="w-[28px] h-[44px] rounded-full border-2 border-white/50 flex items-start justify-center pt-[9px] transition-all duration-300 group-hover:border-white/80 group-active:scale-[0.95]">
            <div className="w-[3.5px] h-[10px] rounded-full bg-white/60 animate-scroll-dot" />
          </div>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
