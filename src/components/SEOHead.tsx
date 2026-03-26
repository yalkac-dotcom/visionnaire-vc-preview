import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://consulting.visionnaire.de";
const LOCALES = ["de", "en", "it", "es", "ja", "zh", "ar"] as const;

interface SEOHeadProps {
  title?: string;
  description?: string;
  noSuffix?: boolean;
}

export function SEOHead({ title, description, noSuffix }: SEOHeadProps) {
  const { t, locale } = useLanguage();
  const { pathname } = useLocation();

  const suffix = t.seo.titleSuffix;
  const pageTitle = title
    ? noSuffix
      ? title
      : `${title} — ${suffix}`
    : t.seo.defaultTitle;

  const pageDescription = description || t.seo.defaultDescription;
  const canonicalUrl = `${BASE_URL}${pathname}`;
  const ogImage = `${BASE_URL}/og-image.jpg`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} />

      {LOCALES.map((loc) => (
        <link
          key={loc}
          rel="alternate"
          hrefLang={loc}
          href={`${BASE_URL}${pathname}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${pathname}`} />
    </Helmet>
  );
}
