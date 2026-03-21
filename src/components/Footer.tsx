import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-primary-foreground tracking-brand text-sm font-light mb-1">
              {t.footer.brand}
              <span className="text-primary-foreground/40 ml-1 tracking-normal text-xs">
                {t.footer.consulting}
              </span>
            </p>
            <p className="text-primary-foreground/35 text-xs">
              © {year} Visionnaire Consulting GmbH. {t.footer.rights}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-primary-foreground/40">
            <a
              href="https://visionnaire.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/70 transition-colors"
            >
              {t.footer.domizilLink}
            </a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">
              {t.footer.impressum}
            </a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">
              {t.footer.datenschutz}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
