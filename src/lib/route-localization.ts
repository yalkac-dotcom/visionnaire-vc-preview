import type { Locale } from "@/i18n/types";
import { servicesDe, servicesEn } from "@/i18n/services";
import { industriesDe, industriesEn } from "@/i18n/industries";

const serviceDeToEn = new Map(
  servicesDe.map((service, index) => [service.slug, servicesEn[index]?.slug ?? service.slug])
);
const serviceEnToDe = new Map(
  servicesEn.map((service, index) => [service.slug, servicesDe[index]?.slug ?? service.slug])
);

const industryDeToEn = new Map(
  industriesDe.map((industry, index) => [industry.slug, industriesEn[index]?.slug ?? industry.slug])
);
const industryEnToDe = new Map(
  industriesEn.map((industry, index) => [industry.slug, industriesDe[index]?.slug ?? industry.slug])
);

export function getLocalizedPath(pathname: string, locale: Locale) {
  const serviceMatch = pathname.match(/^\/leistungen\/([^/]+)$/);
  if (serviceMatch) {
    const [, slug] = serviceMatch;
    const localizedSlug = locale === "en"
      ? serviceDeToEn.get(slug) ?? slug
      : serviceEnToDe.get(slug) ?? slug;

    return `/leistungen/${localizedSlug}`;
  }

  const industryMatch = pathname.match(/^\/branchen\/([^/]+)$/);
  if (industryMatch) {
    const [, slug] = industryMatch;
    const localizedSlug = locale === "en"
      ? industryDeToEn.get(slug) ?? slug
      : industryEnToDe.get(slug) ?? slug;

    return `/branchen/${localizedSlug}`;
  }

  return pathname;
}
