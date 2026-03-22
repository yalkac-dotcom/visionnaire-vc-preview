export type Locale = "de" | "en" | "it" | "es" | "ja" | "zh" | "ar";

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
  role?: string;
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
    text2?: string;
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
    architectureLabel?: string;
    architectureHeadline?: string;
    architectureText?: string;
    galleryLabel?: string;
    galleryHeadline?: string;
    galleryItems?: { label: string; alt: string }[];
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
      text?: string;
      points: { title: string; desc: string }[];
    };
    working?: {
      label: string;
      headline: string;
      principles: { title: string; desc: string }[];
    };
    position: {
      label: string;
      headline: string;
      text: string;
    };
    connection?: {
      label: string;
      headline: string;
      text: string;
    };
    attitude?: {
      headline: string;
      text: string;
    };
    leadership?: {
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
    intro?: string;
    introHeadline?: string;
    introText?: string;
    cta: string;
    ctaSecondary: string;
    email: string;
    phone: string;
    fax?: string;
    address?: string;
    addressLines?: string[];
    formName: string;
    formCompany?: string;
    formEmail: string;
    formPhone?: string;
    formSubject: string;
    formMessage: string;
    formSend: string;
    subjects: string[];
    subjectDescriptions?: string[];
    note?: string;
    noteHeadline?: string;
    closingHeadline?: string;
    closingText?: string;
  };
  impressum: {
    label: string;
    headline: string;
    company: string;
    address: string[];
    phone: string;
    fax: string;
    email: string;
    representedBy: string;
    representedByName: string;
    registerLabel: string;
    registerValue: string;
    registerCourt: string;
    vatLabel: string;
    vatValue: string;
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
  datenschutz: {
    label: string;
    headline: string;
    sections: { title: string; content: string[] }[];
  };
}
