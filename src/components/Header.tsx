import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/translations";
import { Menu, X } from "lucide-react";

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const toggleLocale = () => setLocale(locale === "de" ? "en" : "de");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="text-primary-foreground tracking-brand text-sm md:text-base font-light">
          VISIONNAIRE
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary-foreground/70 hover:text-primary-foreground text-xs uppercase tracking-widest transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleLocale}
            className="text-primary-foreground/50 hover:text-primary-foreground text-xs uppercase tracking-widest transition-colors duration-200 ml-2"
          >
            {locale === "de" ? "EN" : "DE"}
          </button>
          <a
            href="#contact"
            className="ml-2 text-xs uppercase tracking-widest border border-primary-foreground/25 text-primary-foreground px-5 py-2.5 hover:bg-primary-foreground/10 transition-all duration-200 active:scale-[0.97]"
          >
            {t.nav.projectCta}
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLocale}
            className="text-primary-foreground/50 text-xs uppercase tracking-widest"
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
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 pb-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-8 py-3 text-primary-foreground/70 hover:text-primary-foreground text-sm uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
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
