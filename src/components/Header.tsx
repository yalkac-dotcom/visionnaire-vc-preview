import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleLocale = () => setLocale(locale === "de" ? "en" : "de");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const serviceAnchors = [
    "#service-consulting",
    "#service-sourcing",
    "#service-produktentwicklung",
    "#service-marken",
  ];

  const linkClass =
    "text-primary-foreground/60 hover:text-primary-foreground text-[11px] uppercase tracking-[0.18em] transition-colors duration-200";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/98 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--primary-foreground)/0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="text-primary-foreground tracking-[0.3em] text-[13px] font-light select-none"
        >
          VISIONNAIRE
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Leistungen dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`${linkClass} inline-flex items-center gap-1`}
            >
              {t.nav.services}
              <ChevronDown
                size={11}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 min-w-[240px] bg-primary border border-primary-foreground/8 shadow-lg">
                {t.nav.servicesDropdown.map((item, i) => (
                  <a
                    key={item}
                    href={serviceAnchors[i] || "#services"}
                    onClick={() => setServicesOpen(false)}
                    className="block px-6 py-3.5 text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/5 text-[11px] uppercase tracking-[0.18em] transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#industries" className={linkClass}>
            {t.nav.industries}
          </a>
          <a href="#why-us" className={linkClass}>
            {t.nav.whyUs}
          </a>
          <a href="#business-center" className={linkClass}>
            {t.nav.businessCenter}
          </a>
          <a href="#contact" className={linkClass}>
            {t.nav.contact}
          </a>

          <button
            onClick={toggleLocale}
            className="text-primary-foreground/30 hover:text-primary-foreground/70 text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ml-2"
          >
            {locale === "de" ? "EN" : "DE"}
          </button>

          <a
            href="#contact"
            className="ml-2 text-[11px] uppercase tracking-[0.18em] border border-primary-foreground/20 text-primary-foreground/80 hover:text-primary-foreground px-6 py-2.5 hover:bg-primary-foreground/5 transition-all duration-200 active:scale-[0.97]"
          >
            {t.nav.projectCta}
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleLocale}
            className="text-primary-foreground/35 text-[11px] uppercase tracking-[0.18em]"
          >
            {locale === "de" ? "EN" : "DE"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-primary-foreground/70 p-1"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-primary border-t border-primary-foreground/8 pb-8">
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex items-center justify-between px-8 py-4 text-primary-foreground/60 text-xs uppercase tracking-[0.18em]"
          >
            {t.nav.services}
            <ChevronDown
              size={12}
              className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileServicesOpen && (
            <div className="pl-14 pb-2">
              {t.nav.servicesDropdown.map((item, i) => (
                <a
                  key={item}
                  href={serviceAnchors[i] || "#services"}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-primary-foreground/40 text-[11px] uppercase tracking-[0.18em]"
                >
                  {item}
                </a>
              ))}
            </div>
          )}

          {[
            { href: "#industries", label: t.nav.industries },
            { href: "#why-us", label: t.nav.whyUs },
            { href: "#business-center", label: t.nav.businessCenter },
            { href: "#contact", label: t.nav.contact },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-8 py-4 text-primary-foreground/60 text-xs uppercase tracking-[0.18em]"
            >
              {link.label}
            </a>
          ))}

          <div className="px-8 pt-4">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-block text-[11px] uppercase tracking-[0.18em] border border-primary-foreground/20 text-primary-foreground/80 px-6 py-2.5"
            >
              {t.nav.projectCta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
