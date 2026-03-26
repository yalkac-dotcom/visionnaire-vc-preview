import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead title="404" noSuffix />
      <section className="min-h-[80vh] flex items-center bg-soft-ivory">
        <div className="container">
          <div className="max-w-xl">
            <div className="w-12 h-[2px] bg-[hsl(var(--gold))] mb-8" />
            <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5">
              404
            </p>
            <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-normal leading-[1.15] tracking-[-0.015em] mb-6">
              {t.notFound.headline}
            </h1>
            <p className="text-foreground/65 text-[15px] md:text-base leading-[1.7] mb-10 max-w-md">
              {t.notFound.text}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/"
                className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-8 py-3.5 hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-[0.97]"
              >
                {t.notFound.ctaHome}
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] border border-primary/30 text-foreground/70 hover:text-foreground px-8 py-3.5 hover:bg-[hsl(var(--brand-blue-tint))] transition-all duration-200 active:scale-[0.97]"
              >
                {t.notFound.ctaServices}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
