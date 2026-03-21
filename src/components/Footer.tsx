import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary py-14 md:py-18">
      <div className="container">
        {/* Nav links */}
        <div className="mb-10 pb-10 border-b border-primary-foreground/6 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.18em]">
          <Link to="/#services" className="text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors duration-200">
            {t.footer.navServices}
          </Link>
          <Link to="/branchen" className="text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors duration-200">
            {t.footer.navIndustries}
          </Link>
          <Link to="/unternehmensbereiche" className="text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors duration-200">
            {t.nav.businessUnits}
          </Link>
          <Link to="/#why-us" className="text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors duration-200">
            {t.nav.whyUs}
          </Link>
          <Link to="/#contact" className="text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors duration-200">
            {t.footer.navContact}
          </Link>
        </div>

        {/* Domizil note */}
        <div className="mb-10 pb-10 border-b border-primary-foreground/6">
          <p className="text-primary-foreground/25 text-[11px] tracking-[0.15em] uppercase">
            {t.footer.domizilNote}:{" "}
            <a
              href="https://visionnaire.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors duration-200"
            >
              {t.footer.domizilLink}
            </a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-primary-foreground/80 tracking-[0.3em] text-[12px] font-light mb-2">
              {t.footer.brand}
              <span className="text-primary-foreground/30 ml-1.5 tracking-normal text-[11px]">
                {t.footer.consulting}
              </span>
            </p>
            <p className="text-primary-foreground/25 text-[11px]">
              © {year} Visionnaire Consulting GmbH. {t.footer.rights}
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-[11px] text-primary-foreground/30">
            <a
              href="https://visionnaire.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/60 transition-colors duration-200"
            >
              {t.footer.domizilLink}
            </a>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors duration-200">
              {t.footer.impressum}
            </a>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors duration-200">
              {t.footer.datenschutz}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
