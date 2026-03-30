import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import visionnaireLogoSrc from "@/assets/visionnaire-logo.png";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer py-6 md:py-7">
      <div className="container">
        {/* Nav links */}
        <div className="mb-4 pb-6 border-b border-white/12 flex flex-wrap gap-x-8 gap-y-3 text-[12px] uppercase tracking-[0.17em] font-[440]">
          <Link to="/leistungen" className="text-white/80 hover:text-white transition-colors duration-200">{t.footer.navServices}</Link>
          <Link to="/unternehmensbereiche" className="text-white/80 hover:text-white transition-colors duration-200">{t.footer.navBusinessUnits}</Link>
          <Link to="/ueber-uns" className="text-white/80 hover:text-white transition-colors duration-200">{t.footer.navAbout}</Link>
          <Link to="/insights" className="text-white/80 hover:text-white transition-colors duration-200">{t.footer.navInsights}</Link>
          <Link to="/kontakt" className="text-white/80 hover:text-white transition-colors duration-200">{t.footer.navContact}</Link>
        </div>

        {/* Domizil note */}
        <div className="mb-4 pb-6 border-b border-white/10">
          <p className="text-white/55 text-[12px] tracking-[0.12em] uppercase font-[430]">
            {t.footer.domizilNote}:{" "}
            <a href="https://visionnaire.de" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--gold-soft))] hover:text-[hsl(var(--gold))] transition-colors duration-200">{t.footer.domizilLink}</a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="inline-flex flex-col items-center">
              <img src={visionnaireLogoSrc} alt="Visionnaire" className="h-3.5 w-auto mb-0.5 brightness-0 invert opacity-90" />
              <span className="text-white/45 text-[7px] uppercase tracking-[0.35em] font-[600]">Consulting</span>
            </div>
            {t.footer.tagline && (
              <span className="block text-white/40 text-[10px] tracking-[0.15em] font-[430] mt-1 mb-1">{t.footer.tagline}</span>
            )}
            <p className="text-white/50 text-[11.5px] font-[430]">© {year} Visionnaire Consulting GmbH. {t.footer.rights}</p>
          </div>
          <div className="flex flex-wrap gap-8 text-[11.5px] text-white/65 font-[430]">
            <Link to="/impressum" className="hover:text-white/80 transition-colors duration-200">{t.footer.impressum}</Link>
            <Link to="/datenschutz" className="hover:text-white/80 transition-colors duration-200">{t.footer.datenschutz}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
