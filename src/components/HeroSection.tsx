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
          alt="Premium corporate architecture"
          className="w-full h-full object-cover opacity-[0.55]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(20,10%,12%)]/40 via-transparent to-[hsl(20,10%,12%)]/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-44 pb-24 md:pt-60 md:pb-32">
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
            className="text-white/80 text-[15px] md:text-[16px] leading-[1.75] max-w-[520px] mb-12 animate-reveal-up"
            style={{ animationDelay: "400ms" }}
          >
            {t.hero.subline}
          </p>
          <div
            className="flex flex-wrap gap-4 mb-16 animate-reveal-up"
            style={{ animationDelay: "600ms" }}
          >
            <Link
              to="/kontakt"
              className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-white text-[hsl(20,10%,12%)] px-8 py-3.5 hover:bg-white/90 transition-all duration-200 active:scale-[0.97]"
            >
              {t.hero.cta}
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-white/30 text-white/70 hover:text-white px-8 py-3.5 hover:border-white/50 transition-all duration-200 active:scale-[0.97]"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
          <p
            className="text-white/70 text-[11px] tracking-[0.2em] uppercase font-[470] mt-6 animate-reveal-up"
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
          <div className="w-[28px] h-[44px] rounded-full border-2 border-white/50 flex items-start justify-center pt-[9px] transition-all duration-300 group-hover:border-white/80 group-active:scale-[0.95]">
            <div className="w-[3.5px] h-[10px] rounded-full bg-white/60 animate-scroll-dot" />
          </div>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
