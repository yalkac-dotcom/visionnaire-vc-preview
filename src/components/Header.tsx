import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleLocale = () => setLocale(locale === "de" ? "en" : "de");

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) setIndustriesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const serviceAnchors = [
    "/#service-consulting",
    "/#service-sourcing",
    "/#service-produktentwicklung",
    "/#service-marken",
  ];

  const linkClass =
    "text-primary-foreground/60 hover:text-primary-foreground text-[11px] uppercase tracking-[0.18em] transition-colors duration-200";

  const dropdownItemClass =
    "block px-6 py-3.5 text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/5 text-[11px] uppercase tracking-[0.18em] transition-colors duration-200";

  const NavLink = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => {
    if (to.startsWith("/#")) {
      return <a href={isHome ? to.replace("/", "") : to} className={className}>{children}</a>;
    }
    return <Link to={to} className={className}>{children}</Link>;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/98 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--primary-foreground)/0.06)]"
          : "bg-primary"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="text-primary-foreground tracking-[0.3em] text-[13px] font-light select-none"
        >
          VISIONNAIRE
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Leistungen */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => { setServicesOpen(!servicesOpen); setIndustriesOpen(false); }}
              className={`${linkClass} inline-flex items-center gap-1`}
            >
              {t.nav.services}
              <ChevronDown size={11} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 min-w-[260px] bg-primary border border-primary-foreground/8 shadow-lg">
                {t.nav.servicesDropdown.map((item, i) => (
                  <NavLink key={item} to={serviceAnchors[i] || "/#services"} className={dropdownItemClass}>
                    {item}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Branchen */}
          <div ref={industriesRef} className="relative">
            <button
              onClick={() => { setIndustriesOpen(!industriesOpen); setServicesOpen(false); }}
              className={`${linkClass} inline-flex items-center gap-1`}
            >
              {t.nav.industries}
              <ChevronDown size={11} className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
            </button>
            {industriesOpen && (
              <div className="absolute top-full left-0 mt-3 min-w-[300px] bg-primary border border-primary-foreground/8 shadow-lg">
                <Link
                  to="/branchen"
                  onClick={() => setIndustriesOpen(false)}
                  className={`${dropdownItemClass} border-b border-primary-foreground/6`}
                >
                  {locale === "de" ? "Alle Branchen" : "All Industries"}
                </Link>
                {t.nav.industriesDropdown.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/branchen/${item.slug}`}
                    onClick={() => setIndustriesOpen(false)}
                    className={dropdownItemClass}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/unternehmensbereiche" className={linkClass}>
            {t.nav.businessUnits}
          </Link>

          <NavLink to="/#why-us" className={linkClass}>
            {t.nav.whyUs}
          </NavLink>

          <NavLink to="/#contact" className={linkClass}>
            {t.nav.contact}
          </NavLink>

          <button
            onClick={toggleLocale}
            className="text-primary-foreground/30 hover:text-primary-foreground/70 text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ml-1"
          >
            {locale === "de" ? "EN" : "DE"}
          </button>

          <Link
            to="/#contact"
            className="ml-1 text-[11px] uppercase tracking-[0.18em] border border-primary-foreground/20 text-primary-foreground/80 hover:text-primary-foreground px-6 py-2.5 hover:bg-primary-foreground/5 transition-all duration-200 active:scale-[0.97]"
          >
            {t.nav.projectCta}
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button onClick={toggleLocale} className="text-primary-foreground/35 text-[11px] uppercase tracking-[0.18em]">
            {locale === "de" ? "EN" : "DE"}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-primary-foreground/70 p-1">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-primary border-t border-primary-foreground/8 pb-8 max-h-[80vh] overflow-y-auto">
          {/* Services */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex items-center justify-between px-8 py-4 text-primary-foreground/60 text-xs uppercase tracking-[0.18em]"
          >
            {t.nav.services}
            <ChevronDown size={12} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="pl-14 pb-2">
              {t.nav.servicesDropdown.map((item, i) => (
                <NavLink key={item} to={serviceAnchors[i] || "/#services"} className="block py-2.5 text-primary-foreground/40 text-[11px] uppercase tracking-[0.18em]">
                  {item}
                </NavLink>
              ))}
            </div>
          )}

          {/* Industries */}
          <button
            onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
            className="w-full flex items-center justify-between px-8 py-4 text-primary-foreground/60 text-xs uppercase tracking-[0.18em]"
          >
            {t.nav.industries}
            <ChevronDown size={12} className={`transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileIndustriesOpen && (
            <div className="pl-14 pb-2">
              <Link to="/branchen" className="block py-2.5 text-primary-foreground/40 text-[11px] uppercase tracking-[0.18em]">
                {locale === "de" ? "Alle Branchen" : "All Industries"}
              </Link>
              {t.nav.industriesDropdown.map((item) => (
                <Link key={item.slug} to={`/branchen/${item.slug}`} className="block py-2.5 text-primary-foreground/40 text-[11px] uppercase tracking-[0.18em]">
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {[
            { to: "/unternehmensbereiche", label: t.nav.businessUnits },
            { to: "/#why-us", label: t.nav.whyUs },
            { to: "/#contact", label: t.nav.contact },
          ].map((link) => (
            <NavLink key={link.to} to={link.to} className="block px-8 py-4 text-primary-foreground/60 text-xs uppercase tracking-[0.18em]">
              {link.label}
            </NavLink>
          ))}

          <div className="px-8 pt-4">
            <NavLink
              to="/#contact"
              className="inline-block text-[11px] uppercase tracking-[0.18em] border border-primary-foreground/20 text-primary-foreground/80 px-6 py-2.5"
            >
              {t.nav.projectCta}
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
