import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer py-16 md:py-20">
      <div className="container">
        {/* Nav links */}
        <div className="mb-12 pb-12 border-b border-white/12 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.18em] font-[430]">
          <Link to="/leistungen" className="text-white/75 hover:text-white/95 transition-colors duration-200">{t.footer.navServices}</Link>
          <Link to="/branchen" className="text-white/75 hover:text-white/95 transition-colors duration-200">{t.footer.navIndustries}</Link>
          <Link to="/unternehmensbereiche" className="text-white/75 hover:text-white/95 transition-colors duration-200">{t.footer.navBusinessUnits}</Link>
          <Link to="/ueber-uns" className="text-white/75 hover:text-white/95 transition-colors duration-200">{t.footer.navAbout}</Link>
          <Link to="/insights" className="text-white/75 hover:text-white/95 transition-colors duration-200">{t.footer.navInsights}</Link>
          <Link to="/kontakt" className="text-white/75 hover:text-white/95 transition-colors duration-200">{t.footer.navContact}</Link>
        </div>

        {/* Domizil note */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <p className="text-white/55 text-[11px] tracking-[0.15em] uppercase font-[420]">
            {t.footer.domizilNote}:{" "}
            <a href="https://visionnaire.de" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--gold-soft))] hover:text-[hsl(var(--gold))] transition-colors duration-200">{t.footer.domizilLink}</a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-white/90 tracking-[0.3em] text-[13px] font-[450] mb-2">
              {t.footer.brand}<span className="text-white/50 ml-1.5 tracking-normal text-[11px] font-[400]">{t.footer.consulting}</span>
            </p>
            <p className="text-white/50 text-[11px] font-[420]">© {year} Visionnaire Consulting GmbH. {t.footer.rights}</p>
          </div>
          <div className="flex flex-wrap gap-8 text-[11px] text-white/65 font-[420]">
            <a href="https://visionnaire.de" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--gold-soft))] transition-colors duration-200">{t.footer.domizilLink}</a>
            <Link to="/impressum" className="hover:text-white/85 transition-colors duration-200">{t.footer.impressum}</Link>
            <Link to="/datenschutz" className="hover:text-white/85 transition-colors duration-200">{t.footer.datenschutz}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
