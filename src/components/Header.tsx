import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/translations";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleLocale = () => setLocale(locale === "de" ? "en" : "de");

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const serviceAnchors = ["#service-consulting", "#service-sourcing", "#service-produktentwicklung", "#service-marken"];

  const linkClass = "text-primary-foreground/70 hover:text-primary-foreground text-xs uppercase tracking-widest transition-colors duration-200";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="text-primary-foreground tracking-brand text-sm md:text-base font-light">
          VISIONNAIRE
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Leistungen with dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`${linkClass} inline-flex items-center gap-1`}
            >
              {t.nav.services}
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 min-w-[220px] bg-primary border border-primary-foreground/10 shadow-lg">
                {t.nav.servicesDropdown.map((item, i) => (
                  <a
                    key={item}
                    href={serviceAnchors[i] || "#services"}
                    onClick={() => setServicesOpen(false)}
                    className="block px-5 py-3 text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/5 text-xs uppercase tracking-widest transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#industries" className={linkClass}>{t.nav.industries}</a>
          <a href="#why-us" className={linkClass}>{t.nav.whyUs}</a>
          <a href="#business-center" className={linkClass}>{t.nav.businessCenter}</a>
          <a href="#contact" className={linkClass}>{t.nav.contact}</a>

          <button
            onClick={toggleLocale}
            className="text-primary-foreground/40 hover:text-primary-foreground text-xs uppercase tracking-widest transition-colors duration-200 ml-1"
          >
            {locale === "de" ? "EN" : "DE"}
          </button>

          <a
            href="#contact"
            className="ml-1 text-xs uppercase tracking-widest border border-primary-foreground/25 text-primary-foreground px-5 py-2.5 hover:bg-primary-foreground/10 transition-all duration-200 active:scale-[0.97]"
          >
            {t.nav.projectCta}
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleLocale}
            className="text-primary-foreground/40 text-xs uppercase tracking-widest"
          >
            {locale === "de" ? "EN" : "DE"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-primary-foreground p-1"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-primary border-t border-primary-foreground/10 pb-6">
          {/* Leistungen with sub-items */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex items-center justify-between px-8 py-3 text-primary-foreground/70 text-sm uppercase tracking-widest"
          >
            {t.nav.services}
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileServicesOpen && (
            <div className="pl-12">
              {t.nav.servicesDropdown.map((item, i) => (
                <a
                  key={item}
                  href={serviceAnchors[i] || "#services"}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-primary-foreground/50 text-xs uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
            </div>
          )}

          <a href="#industries" onClick={() => setMobileOpen(false)} className="block px-8 py-3 text-primary-foreground/70 text-sm uppercase tracking-widest">
            {t.nav.industries}
          </a>
          <a href="#why-us" onClick={() => setMobileOpen(false)} className="block px-8 py-3 text-primary-foreground/70 text-sm uppercase tracking-widest">
            {t.nav.whyUs}
          </a>
          <a href="#business-center" onClick={() => setMobileOpen(false)} className="block px-8 py-3 text-primary-foreground/70 text-sm uppercase tracking-widest">
            {t.nav.businessCenter}
          </a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block px-8 py-3 text-primary-foreground/70 text-sm uppercase tracking-widest">
            {t.nav.contact}
          </a>
          <div className="px-8 pt-3">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-block text-xs uppercase tracking-widest border border-primary-foreground/25 text-primary-foreground px-5 py-2.5"
            >
              {t.nav.projectCta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
