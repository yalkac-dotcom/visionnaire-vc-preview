import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-warm-gray-dark py-16 md:py-20 border-t border-border/50">
      <div className="container">
        {/* Nav links */}
        <div className="mb-12 pb-12 border-b border-border/40 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.18em]">
          <Link to="/leistungen" className="text-foreground/30 hover:text-accent transition-colors duration-200">{t.footer.navServices}</Link>
          <Link to="/branchen" className="text-foreground/30 hover:text-accent transition-colors duration-200">{t.footer.navIndustries}</Link>
          <Link to="/unternehmensbereiche" className="text-foreground/30 hover:text-accent transition-colors duration-200">{t.footer.navBusinessUnits}</Link>
          <Link to="/ueber-uns" className="text-foreground/30 hover:text-accent transition-colors duration-200">{t.footer.navAbout}</Link>
          <Link to="/insights" className="text-foreground/30 hover:text-accent transition-colors duration-200">{t.footer.navInsights}</Link>
          <Link to="/#contact" className="text-foreground/30 hover:text-accent transition-colors duration-200">{t.footer.navContact}</Link>
        </div>

        {/* Domizil note */}
        <div className="mb-12 pb-12 border-b border-border/40">
          <p className="text-foreground/20 text-[11px] tracking-[0.15em] uppercase">
            {t.footer.domizilNote}:{" "}
            <a href="https://visionnaire.de" target="_blank" rel="noopener noreferrer" className="text-foreground/35 hover:text-accent transition-colors duration-200">{t.footer.domizilLink}</a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-foreground/70 tracking-[0.3em] text-[12px] font-light mb-2">
              {t.footer.brand}<span className="text-foreground/25 ml-1.5 tracking-normal text-[11px]">{t.footer.consulting}</span>
            </p>
            <p className="text-foreground/20 text-[11px]">© {year} Visionnaire Consulting GmbH. {t.footer.rights}</p>
          </div>
          <div className="flex flex-wrap gap-8 text-[11px] text-foreground/25">
            <a href="https://visionnaire.de" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200">{t.footer.domizilLink}</a>
            <a href="#" className="hover:text-accent transition-colors duration-200">{t.footer.impressum}</a>
            <a href="#" className="hover:text-accent transition-colors duration-200">{t.footer.datenschutz}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
