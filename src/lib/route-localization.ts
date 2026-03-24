import type { Locale } from "@/i18n/types";
import { servicesDe, servicesEn } from "@/i18n/services";

const serviceDeToEn = new Map(
  servicesDe.map((service, index) => [service.slug, servicesEn[index]?.slug ?? service.slug])
);
const serviceEnToDe = new Map(
  servicesEn.map((service, index) => [service.slug, servicesDe[index]?.slug ?? service.slug])
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

  return pathname;
}
