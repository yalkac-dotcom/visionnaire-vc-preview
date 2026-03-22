import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Locale, type Translations } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");
  const t = translations[locale];

  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

const fallback: LanguageContextType = {
  locale: "de",
  setLocale: () => {},
  t: translations.de,
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  return ctx ?? fallback;
}
