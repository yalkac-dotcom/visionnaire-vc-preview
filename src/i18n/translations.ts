export type Locale = "de" | "en";

export interface ServiceItem {
  number: string;
  title: string;
  desc: string;
  details: string[];
}

export interface WhyUsItem {
  title: string;
  desc: string;
}

export interface IndustryItem {
  name: string;
  desc: string;
}

export interface Translations {
  nav: {
    services: string;
    servicesDropdown: string[];
    industries: string;
    whyUs: string;
    businessCenter: string;
    contact: string;
    projectCta: string;
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
    requestCta: string;
    items: ServiceItem[];
  };
  industries: {
    label: string;
    headline: string;
    items: IndustryItem[];
  };
  whyUs: {
    label: string;
    headline: string;
    items: WhyUsItem[];
  };
  domizil: {
    label: string;
    headline: string;
    text: string;
    cta: string;
  };
  contact: {
    label: string;
    headline: string;
    text: string;
    cta: string;
    ctaSecondary: string;
    email: string;
    phone: string;
  };
  footer: {
    brand: string;
    consulting: string;
    rights: string;
    domizilLink: string;
    domizilNote: string;
    impressum: string;
    datenschutz: string;
  };
}

export const translations: Record<Locale, Translations> = {
  de: {
    nav: {
      services: "Leistungen",
      servicesDropdown: [
        "Consulting",
        "Sourcing",
        "Produktentwicklung",
        "Marken & Konzeptentwicklung",
      ],
      industries: "Branchen",
      whyUs: "Warum Visionnaire",
      businessCenter: "Business Center",
      contact: "Kontakt",
      projectCta: "Projekt besprechen",
    },
    hero: {
      tagline:
        "Strategische Beratung · Operative Umsetzung · Internationale Netzwerke",
      headline:
        "Strategie, Produkte und Marken. International gedacht. Präzise umgesetzt.",
      subline:
        "Visionnaire Consulting unterstützt Unternehmen bei der Entwicklung von Strategien, Produkten und Marken sowie bei der Umsetzung internationaler Geschäftslösungen.",
      cta: "Projekt besprechen",
      ctaSecondary: "Kontakt aufnehmen",
    },
    expertise: {
      label: "Unsere Expertise",
      headline:
        "Strategien entwickeln. Märkte erschließen. Marken aufbauen.",
      text: "Visionnaire Consulting verbindet strategische Beratung, operative Umsetzung und internationale Netzwerke. Wir begleiten Unternehmen von der ersten Idee bis zur erfolgreichen Markteinführung — mit Präzision, Erfahrung und einem ganzheitlichen Ansatz.",
    },
    services: {
      label: "Leistungen",
      headline: "Vier Kernbereiche. Ein Ziel.",
      requestCta: "Beratung anfragen",
      items: [
        {
          number: "01",
          title: "Consulting",
          desc: "Analyse der aktuellen Situation, Entwicklung klarer Strategien und Begleitung bei der Umsetzung geschäftlicher Ziele.",
          details: [
            "Strategieentwicklung",
            "Markt- und Wettbewerbsanalysen",
            "Organisationsentwicklung",
            "Begleitung bei der Umsetzung",
          ],
        },
        {
          number: "02",
          title: "Sourcing",
          desc: "Internationales Netzwerk für die Beschaffung und Produktion hochwertiger Textilprodukte.",
          details: [
            "Internationale Lieferanten",
            "Produktionskoordination",
            "Qualitätssicherung",
            "Lieferkettenoptimierung",
          ],
        },
        {
          number: "03",
          title: "Produktentwicklung",
          desc: "Entwicklung innovativer Textilprodukte in Zusammenarbeit mit internationalen Partnern, Designern und Bekleidungstechnikern.",
          details: [
            "Funktionale Textilien",
            "Materialentwicklung",
            "Prototyping",
            "Individuelle Kollektionen",
          ],
        },
        {
          number: "04",
          title: "Marken- & Konzeptentwicklung",
          desc: "Markenstrategie, Positionierung und die Entwicklung vollständiger Markenidentitäten.",
          details: [
            "Markenstrategie & Positionierung",
            "Designsysteme",
            "Konzeptentwicklung",
            "Pitch Decks & Businesspläne",
          ],
        },
      ],
    },
    industries: {
      label: "Branchen",
      headline: "Branchenkompetenz mit internationaler Reichweite",
      items: [
        {
          name: "Fashion & Textil",
          desc: "Bekleidung, funktionale Textilien, Kollektionen und nachhaltige Materialien.",
        },
        {
          name: "Konsumgüter",
          desc: "Produktentwicklung, Markenaufbau und Vertriebsstrategien für den Endverbrauchermarkt.",
        },
        {
          name: "Handel & Retail",
          desc: "Omnichannel-Strategien, Vertriebskonzepte und kommerzielle Transformation.",
        },
        {
          name: "Technologie & Innovation",
          desc: "Funktionale Materialien, nachhaltige Lösungen und innovative Produktkonzepte.",
        },
      ],
    },
    whyUs: {
      label: "Warum Visionnaire Consulting",
      headline: "Was uns auszeichnet",
      items: [
        {
          title: "Ganzheitlicher Ansatz",
          desc: "Wir denken nicht in Einzelmaßnahmen, sondern in Gesamtlösungen — von der Strategie bis zur Umsetzung.",
        },
        {
          title: "Internationale Netzwerke",
          desc: "Ein gewachsenes Netzwerk aus Partnern, Produzenten und Spezialisten auf internationaler Ebene.",
        },
        {
          title: "Branchenspezialisierung",
          desc: "Tiefes Verständnis für die Dynamiken und Anforderungen spezifischer Branchen und Märkte.",
        },
        {
          title: "Praxisorientierte Umsetzung",
          desc: "Keine Theorie ohne Umsetzung. Unsere Beratung ist auf konkrete, messbare Ergebnisse ausgerichtet.",
        },
      ],
    },
    domizil: {
      label: "Visionnaire Markenfamilie",
      headline: "Visionnaire Domizil / Business Center",
      text: "Ein Geschäftsbereich der Visionnaire Gruppe: Visionnaire Domizil / Business Center bietet hochwertige Büro- und Geschäftsräume für Unternehmen mit internationalem Anspruch.",
      cta: "Mehr erfahren",
    },
    contact: {
      label: "Kontakt",
      headline: "Lassen Sie uns sprechen",
      text: "Haben Sie ein Projekt, eine Idee oder eine strategische Herausforderung? Wir freuen uns auf den Austausch.",
      cta: "Projekt besprechen",
      ctaSecondary: "Kontakt aufnehmen",
      email: "info@visionnaire.de",
      phone: "+49 (0) 123 456 789",
    },
    footer: {
      brand: "VISIONNAIRE",
      consulting: "Consulting",
      rights: "Alle Rechte vorbehalten.",
      domizilLink: "Visionnaire Domizil",
      domizilNote:
        "Ein Geschäftsbereich der Visionnaire Gruppe",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
    },
  },
  en: {
    nav: {
      services: "Services",
      servicesDropdown: [
        "Consulting",
        "Sourcing",
        "Product Development",
        "Brand & Concept Development",
      ],
      industries: "Industries",
      whyUs: "Why Visionnaire",
      businessCenter: "Business Center",
      contact: "Contact",
      projectCta: "Discuss project",
    },
    hero: {
      tagline:
        "Strategic Consulting · Operational Implementation · International Networks",
      headline:
        "Strategy, products and brands. Internationally conceived. Precisely executed.",
      subline:
        "Visionnaire Consulting supports companies in developing strategies, products and brands as well as implementing international business solutions.",
      cta: "Discuss project",
      ctaSecondary: "Get in touch",
    },
    expertise: {
      label: "Our Expertise",
      headline: "Develop strategies. Enter markets. Build brands.",
      text: "Visionnaire Consulting combines strategic advisory, operational implementation and international networks. We guide companies from the initial idea to successful market entry — with precision, experience and a holistic approach.",
    },
    services: {
      label: "Services",
      headline: "Four core areas. One goal.",
      requestCta: "Request consultation",
      items: [
        {
          number: "01",
          title: "Consulting",
          desc: "Analysis of the current situation, development of clear strategies and support in achieving business goals.",
          details: [
            "Strategy development",
            "Market and competitive analysis",
            "Organisational development",
            "Implementation support",
          ],
        },
        {
          number: "02",
          title: "Sourcing",
          desc: "International network for sourcing and production of high-quality textile products.",
          details: [
            "International suppliers",
            "Production coordination",
            "Quality assurance",
            "Supply chain optimisation",
          ],
        },
        {
          number: "03",
          title: "Product Development",
          desc: "Development of innovative textile products in collaboration with international partners, designers and garment technicians.",
          details: [
            "Functional textiles",
            "Material development",
            "Prototyping",
            "Custom collections",
          ],
        },
        {
          number: "04",
          title: "Brand & Concept Development",
          desc: "Brand strategy, positioning and development of complete brand identities.",
          details: [
            "Brand strategy & positioning",
            "Design systems",
            "Concept development",
            "Pitch decks & business plans",
          ],
        },
      ],
    },
    industries: {
      label: "Industries",
      headline: "Industry expertise with international reach",
      items: [
        {
          name: "Fashion & Textiles",
          desc: "Apparel, functional textiles, collections and sustainable materials.",
        },
        {
          name: "Consumer Goods",
          desc: "Product development, brand building and sales strategies for the consumer market.",
        },
        {
          name: "Trade & Retail",
          desc: "Omnichannel strategies, distribution concepts and commercial transformation.",
        },
        {
          name: "Technology & Innovation",
          desc: "Functional materials, sustainable solutions and innovative product concepts.",
        },
      ],
    },
    whyUs: {
      label: "Why Visionnaire Consulting",
      headline: "What sets us apart",
      items: [
        {
          title: "Holistic approach",
          desc: "We don't think in isolated measures, but in complete solutions — from strategy to execution.",
        },
        {
          title: "International networks",
          desc: "An established network of partners, producers and specialists at an international level.",
        },
        {
          title: "Industry specialisation",
          desc: "Deep understanding of the dynamics and requirements of specific industries and markets.",
        },
        {
          title: "Practice-oriented implementation",
          desc: "No theory without implementation. Our consulting is focused on concrete, measurable results.",
        },
      ],
    },
    domizil: {
      label: "Visionnaire Brand Family",
      headline: "Visionnaire Domizil / Business Center",
      text: "A business unit of the Visionnaire Group: Visionnaire Domizil / Business Center offers premium office and business spaces for companies with international ambitions.",
      cta: "Learn more",
    },
    contact: {
      label: "Contact",
      headline: "Let's talk",
      text: "Do you have a project, an idea or a strategic challenge? We look forward to the exchange.",
      cta: "Discuss project",
      ctaSecondary: "Get in touch",
      email: "info@visionnaire.de",
      phone: "+49 (0) 123 456 789",
    },
    footer: {
      brand: "VISIONNAIRE",
      consulting: "Consulting",
      rights: "All rights reserved.",
      domizilLink: "Visionnaire Domizil",
      domizilNote: "A business unit of the Visionnaire Group",
      impressum: "Legal Notice",
      datenschutz: "Privacy Policy",
    },
  },
};
