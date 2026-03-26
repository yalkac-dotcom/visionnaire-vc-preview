import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { Locale } from "@/i18n/types";
import { getLocalizedPath } from "@/lib/route-localization";
import visionnaireLogoSrc from "@/assets/visionnaire-logo.png";

const localeOptions: { code: Locale; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "it", label: "IT" },
  { code: "es", label: "ES" },
  { code: "ja", label: "JA" },
  { code: "zh", label: "ZH" },
  { code: "ar", label: "AR" },
];

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const langRefMobile = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!servicesRef.current?.contains(target) && !dropdownPanelRef.current?.contains(target)) setServicesOpen(false);
      if (!langRef.current?.contains(target) && !langRefMobile.current?.contains(target)) setLangOpen(false);
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

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setLangOpen(false);
    navigate({
      pathname: getLocalizedPath(location.pathname, nextLocale),
      search: location.search,
      hash: location.hash,
    });
  };

  const headerBg = scrolled
    ? "bg-[hsl(40_30%_96%/0.92)] backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--border))]"
    : "bg-background";

  const linkClass = "text-foreground/80 hover:text-[hsl(var(--brand-blue))] text-[11px] uppercase tracking-[0.18em] font-[450] transition-colors duration-200";

  const dropdownItemClass = "block px-5 py-3 text-foreground/70 hover:text-[hsl(var(--brand-blue))] text-[10.5px] uppercase tracking-[0.16em] font-[430] transition-colors duration-200 rounded-sm";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="select-none transition-opacity duration-300 hover:opacity-80 flex flex-col items-center">
          <img src={visionnaireLogoSrc} alt="Visionnaire" className="h-4 md:h-5 w-auto" />
          <span className="text-foreground/50 text-[7px] md:text-[8px] uppercase tracking-[0.35em] font-[600] mt-0.5">Consulting</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <div ref={servicesRef} className="relative">
            <button onClick={() => { setServicesOpen(!servicesOpen); }} className={`${linkClass} inline-flex items-center gap-1`}>
              {t.nav.services}
              <ChevronDown size={11} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          <Link to="/unternehmensbereiche" className={linkClass}>{t.nav.businessUnits}</Link>
          <Link to="/ueber-uns" className={linkClass}>{t.nav.about}</Link>
          <Link to="/insights" className={linkClass}>{t.nav.insights}</Link>
          <Link to="/kontakt" className={linkClass}>{t.nav.contact}</Link>

          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-foreground/90 hover:text-foreground text-[11px] uppercase tracking-[0.18em] font-[500] transition-colors duration-200 ml-1 inline-flex items-center gap-0.5"
            >
              {locale.toUpperCase()}
              <ChevronDown size={10} className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-3 bg-[hsl(var(--soft-ivory))]/[0.97] backdrop-blur-xl border border-border/50 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] py-1.5 min-w-[52px]">
                {localeOptions.filter(l => l.code !== locale).map(l => (
                  <button
                    key={l.code}
                    onClick={() => handleLocaleChange(l.code)}
                    className="block w-full px-4 py-2 text-foreground/60 hover:text-foreground text-[10.5px] uppercase tracking-[0.16em] font-[450] transition-colors duration-200 text-center"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/kontakt" className="ml-1 text-[11px] uppercase tracking-[0.18em] border border-[hsl(var(--brand-blue))]/25 text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2.5 transition-all duration-200 active:scale-[0.97]">
            {t.nav.projectCta}
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <div ref={langRefMobile} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-foreground/90 text-[11px] uppercase tracking-[0.18em] font-[500] inline-flex items-center gap-0.5"
            >
              {locale.toUpperCase()}
              <ChevronDown size={9} className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-background border border-border/50 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] py-1.5 min-w-[48px] z-50">
                {localeOptions.filter(l => l.code !== locale).map(l => (
                  <button
                    key={l.code}
                    onClick={() => handleLocaleChange(l.code)}
                    className="block w-full px-3 py-1.5 text-foreground/60 hover:text-foreground text-[10.5px] uppercase tracking-[0.16em] font-[450] transition-colors duration-200 text-center"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? t.a11y.closeMenu : t.a11y.openMenu} className="text-foreground/60 p-1">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>

      {/* Full-width dropdown panel */}
      {servicesOpen && (
        <div ref={dropdownPanelRef} className="hidden lg:block absolute left-0 right-0 top-full bg-[hsl(var(--soft-ivory))]/[0.97] backdrop-blur-xl border-t border-border/60 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)]">
          <div className="container py-5">
            <div className="flex items-center gap-8">
              <Link to="/leistungen" onClick={() => setServicesOpen(false)} className="block px-4 py-2.5 text-foreground/80 text-[10.5px] uppercase tracking-[0.16em] font-medium hover:text-[hsl(var(--brand-blue))] transition-colors duration-200">
                {locale === "de" ? "Alle Leistungen" : t.servicePage.backToOverview}
              </Link>
              <div className="w-px h-5 bg-border/80" />
              {t.nav.servicesDropdown.map((item) => (
                <Link key={item.slug} to={`/leistungen/${item.slug}`} onClick={() => setServicesOpen(false)} className={dropdownItemClass}>
                  {item.label}
                </Link>
              ))}
            </div>
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
                {locale === "de" ? "Alle Leistungen" : t.servicePage.backToOverview}
              </Link>
              {t.nav.servicesDropdown.map((item) => (
                <Link key={item.slug} to={`/leistungen/${item.slug}`} onClick={() => setMobileOpen(false)} className="block py-2.5 text-foreground/35 text-[11px] uppercase tracking-[0.18em]">
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
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block px-8 py-4 text-foreground/60 text-xs uppercase tracking-[0.18em]"
            >
              {link.label}
            </Link>
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
