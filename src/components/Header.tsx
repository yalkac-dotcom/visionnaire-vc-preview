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
  const dropdownPanelRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleLocale = () => setLocale(locale === "de" ? "en" : "de");
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const inServices = servicesRef.current?.contains(target);
      const inIndustries = industriesRef.current?.contains(target);
      const inPanel = dropdownPanelRef.current?.contains(target);
      if (!inServices && !inPanel) setServicesOpen(false);
      if (!inIndustries && !inPanel) setIndustriesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const headerBg = scrolled
    ? "bg-[hsl(40_30%_96%/0.92)] backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--border))]"
    : "bg-background";

  const linkClass = "text-foreground/60 hover:text-[hsl(var(--brand-blue))] text-[11px] uppercase tracking-[0.18em] transition-colors duration-200";

  const dropdownBg = "bg-card border border-border";
  const dropdownTextClass = "text-foreground/60 hover:text-[hsl(var(--brand-blue))] hover:bg-secondary";
  const dropdownItemClass = `block px-6 py-3.5 ${dropdownTextClass} text-[11px] uppercase tracking-[0.18em] transition-colors duration-200`;

  const SmartLink = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => {
    if (to.startsWith("/#")) {
      return <a href={isHome ? to.replace("/", "") : to} className={className} onClick={() => setMobileOpen(false)}>{children}</a>;
    }
    return <Link to={to} className={className} onClick={() => setMobileOpen(false)}>{children}</Link>;
  };

  const anyDropdownOpen = servicesOpen || industriesOpen;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="text-foreground tracking-[0.3em] text-[13px] font-light select-none transition-colors duration-300">
          VISIONNAIRE
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <div ref={servicesRef} className="relative">
            <button onClick={() => { setServicesOpen(!servicesOpen); setIndustriesOpen(false); }} className={`${linkClass} inline-flex items-center gap-1`}>
              {t.nav.services}
              <ChevronDown size={11} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div ref={industriesRef} className="relative">
            <button onClick={() => { setIndustriesOpen(!industriesOpen); setServicesOpen(false); }} className={`${linkClass} inline-flex items-center gap-1`}>
              {t.nav.industries}
              <ChevronDown size={11} className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          <Link to="/unternehmensbereiche" className={linkClass}>{t.nav.businessUnits}</Link>
          <Link to="/ueber-uns" className={linkClass}>{t.nav.about}</Link>
          <Link to="/insights" className={linkClass}>{t.nav.insights}</Link>
          <Link to="/kontakt" className={linkClass}>{t.nav.contact}</Link>

          <button onClick={toggleLocale} className="text-foreground/20 hover:text-foreground/50 text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ml-1">
            {locale === "de" ? "EN" : "DE"}
          </button>

          <Link to="/kontakt" className="ml-1 text-[11px] uppercase tracking-[0.18em] border border-[hsl(var(--brand-blue))]/25 text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2.5 transition-all duration-200 active:scale-[0.97]">
            {t.nav.projectCta}
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button onClick={toggleLocale} className="text-foreground/25 text-[11px] uppercase tracking-[0.18em]">{locale === "de" ? "EN" : "DE"}</button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground/60 p-1">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>

      {/* Full-width dropdown panel */}
      {anyDropdownOpen && (
        <div className="hidden lg:block absolute left-0 right-0 top-full bg-[hsl(40_30%_96%/0.97)] backdrop-blur-md border-t border-border shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)]">
          <div className="container py-6">
            {servicesOpen && (
              <div className="flex flex-wrap gap-x-10 gap-y-1">
                <Link to="/leistungen" onClick={() => setServicesOpen(false)} className={`${dropdownItemClass} text-foreground/80 font-medium`}>
                  {locale === "de" ? "Alle Leistungen" : "All Services"}
                </Link>
                <div className="w-px bg-border self-stretch mx-2" />
                {t.nav.servicesDropdown.map((item) => (
                  <Link key={item.slug} to={`/leistungen/${item.slug}`} onClick={() => setServicesOpen(false)} className={dropdownItemClass}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            {industriesOpen && (
              <div className="flex flex-wrap gap-x-10 gap-y-1">
                <Link to="/branchen" onClick={() => setIndustriesOpen(false)} className={`${dropdownItemClass} text-foreground/80 font-medium`}>
                  {locale === "de" ? "Alle Branchen" : "All Industries"}
                </Link>
                <div className="w-px bg-border self-stretch mx-2" />
                {t.nav.industriesDropdown.map((item) => (
                  <Link key={item.slug} to={`/branchen/${item.slug}`} onClick={() => setIndustriesOpen(false)} className={dropdownItemClass}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-background border-t border-border pb-8 max-h-[80vh] overflow-y-auto">
          <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full flex items-center justify-between px-8 py-4 text-foreground/60 text-xs uppercase tracking-[0.18em]">
            {t.nav.services}
            <ChevronDown size={12} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="pl-14 pb-2">
              <Link to="/leistungen" onClick={() => setMobileOpen(false)} className="block py-2.5 text-foreground/35 text-[11px] uppercase tracking-[0.18em]">
                {locale === "de" ? "Alle Leistungen" : "All Services"}
              </Link>
              {t.nav.servicesDropdown.map((item) => (
                <Link key={item.slug} to={`/leistungen/${item.slug}`} onClick={() => setMobileOpen(false)} className="block py-2.5 text-foreground/35 text-[11px] uppercase tracking-[0.18em]">
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <button onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)} className="w-full flex items-center justify-between px-8 py-4 text-foreground/60 text-xs uppercase tracking-[0.18em]">
            {t.nav.industries}
            <ChevronDown size={12} className={`transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileIndustriesOpen && (
            <div className="pl-14 pb-2">
              <Link to="/branchen" onClick={() => setMobileOpen(false)} className="block py-2.5 text-foreground/35 text-[11px] uppercase tracking-[0.18em]">
                {locale === "de" ? "Alle Branchen" : "All Industries"}
              </Link>
              {t.nav.industriesDropdown.map((item) => (
                <Link key={item.slug} to={`/branchen/${item.slug}`} onClick={() => setMobileOpen(false)} className="block py-2.5 text-foreground/35 text-[11px] uppercase tracking-[0.18em]">
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {[
            { to: "/unternehmensbereiche", label: t.nav.businessUnits },
            { to: "/ueber-uns", label: t.nav.about },
            { to: "/insights", label: t.nav.insights },
            { to: "/kontakt", label: t.nav.contact },
          ].map((link) => (
            <SmartLink key={link.to} to={link.to} className="block px-8 py-4 text-foreground/60 text-xs uppercase tracking-[0.18em]">
              {link.label}
            </SmartLink>
          ))}

          <div className="px-8 pt-4">
            <Link to="/kontakt" className="inline-block text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-6 py-2.5 active:scale-[0.97]">
              {t.nav.projectCta}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
