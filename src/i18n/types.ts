export type Locale = "de" | "en";

export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  desc: string;
  details: string[];
  situations: string[];
  relevantIndustries: string[];
}

export interface WhyUsItem {
  title: string;
  desc: string;
}

export interface IndustryItem {
  slug: string;
  name: string;
  desc: string;
  heroHeadline: string;
  heroSubline: string;
  intro: string;
  consultingFields: string[];
  challenges: string[];
  caseStudies: { title: string; desc: string }[];
}

export interface BusinessUnit {
  name: string;
  desc: string;
  href: string;
}

export interface InsightItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

export interface Translations {
  nav: {
    services: string;
    servicesDropdown: { label: string; slug: string }[];
    industries: string;
    industriesDropdown: { label: string; slug: string }[];
    businessUnits: string;
    about: string;
    insights: string;
    contact: string;
    projectCta: string;
    contactCta: string;
  };
  hero: {
    tagline: string;
    headline: string;
    subline: string;
    cta: string;
    ctaSecondary: string;
  };
  expertise: {
    label: string;
    headline: string;
    text: string;
  };
  services: {
    label: string;
    headline: string;
    subline: string;
    requestCta: string;
    relevantFor: string;
    whatWeSupport: string;
    typicalSituations: string;
    relevantIndustries: string;
    items: ServiceItem[];
  };
  industries: {
    label: string;
    headline: string;
    subline: string;
    items: IndustryItem[];
    matchingServices: string;
    challenges: string;
    projects: string;
  };
  whyUs: {
    label: string;
    headline: string;
    items: WhyUsItem[];
  };
  businessUnits: {
    label: string;
    headline: string;
    subline: string;
    items: BusinessUnit[];
  };
  about: {
    label: string;
    headline: string;
    subline: string;
    approach: {
      label: string;
      headline: string;
      text: string;
    };
    thinking: {
      label: string;
      headline: string;
      points: { title: string; desc: string }[];
    };
    position: {
      label: string;
      headline: string;
      text: string;
    };
  };
  insights: {
    label: string;
    headline: string;
    subline: string;
    items: InsightItem[];
    readMore: string;
  };
  contact: {
    label: string;
    headline: string;
    text: string;
    cta: string;
    ctaSecondary: string;
    email: string;
    phone: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSend: string;
    subjects: string[];
  };
  footer: {
    brand: string;
    consulting: string;
    rights: string;
    domizilLink: string;
    domizilNote: string;
    impressum: string;
    datenschutz: string;
    navServices: string;
    navIndustries: string;
    navAbout: string;
    navInsights: string;
    navContact: string;
    navBusinessUnits: string;
  };
  industryPage: {
    backToOverview: string;
    consultingFields: string;
    challengesLabel: string;
    projectsLabel: string;
    ctaPrimary: string;
    ctaSecondary: string;
    matchingServices: string;
  };
  servicePage: {
    backToOverview: string;
    whatWeSupport: string;
    typicalSituations: string;
    relevantIndustries: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  cta: {
    projectCta: string;
    consultationCta: string;
    contactCta: string;
  };
}
