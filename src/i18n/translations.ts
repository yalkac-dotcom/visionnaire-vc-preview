export type Locale = "de" | "en";

export interface ServiceItem {
  number: string;
  title: string;
  desc: string;
  details: string[];
  relevantIndustries: string[]; // slugs
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

export interface Translations {
  nav: {
    services: string;
    servicesDropdown: string[];
    industries: string;
    industriesDropdown: { label: string; slug: string }[];
    businessUnits: string;
    about: string;
    insights: string;
    whyUs: string;
    businessCenter: string;
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
    requestCta: string;
    relevantFor: string;
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
    navServices: string;
    navIndustries: string;
    navAbout: string;
    navContact: string;
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
  cta: {
    projectCta: string;
    consultationCta: string;
    contactCta: string;
  };
}

const industriesDe: IndustryItem[] = [
  {
    slug: "real-estate-developments",
    name: "Real Estate & Developments",
    desc: "Strategische Beratung für Immobilienprojekte, Quartiersentwicklungen und Investitionsvorhaben.",
    heroHeadline: "Real Estate & Developments",
    heroSubline: "Strategien für Immobilienprojekte mit internationaler Perspektive und nachhaltiger Wertschöpfung.",
    intro: "Der Immobilienmarkt verlangt heute mehr als Standortanalysen und Renditeprojektionen. Erfolgreiche Projekte verbinden strategische Planung, Markenverständnis und operative Exzellenz. Visionnaire begleitet Entwickler, Investoren und Bestandshalter bei der Positionierung, Konzeption und Umsetzung anspruchsvoller Immobilienvorhaben.",
    consultingFields: [
      "Strategische Projektpositionierung",
      "Konzept- und Nutzungsentwicklung",
      "Marken- und Vermarktungsstrategie",
      "Standortbewertung und Marktanalyse",
      "Partnerschaften und Joint Ventures",
    ],
    challenges: [
      "Differenzierung in wettbewerbsintensiven Märkten",
      "Positionierung von Mixed-Use-Konzepten",
      "Nachhaltige Wertschöpfung über den gesamten Lebenszyklus",
      "Integration von Marke und Architektur",
    ],
    caseStudies: [
      { title: "Quartiersentwicklung Deutschland", desc: "Strategische Positionierung und Markenkonzept für eine Quartiersentwicklung im urbanen Raum." },
      { title: "Hospitality-Konzept Mittelmeerraum", desc: "Entwicklung eines integrierten Nutzungskonzepts mit Fokus auf Hospitality und Wohnen." },
    ],
  },
  {
    slug: "hospitality-business-centers",
    name: "Hospitality & Business Centers",
    desc: "Konzepte für hochwertige Geschäftsräume, Business Center und Hospitality-Projekte.",
    heroHeadline: "Hospitality & Business Centers",
    heroSubline: "Konzeption und Positionierung hochwertiger Geschäfts- und Hospitality-Formate.",
    intro: "Die Grenzen zwischen Arbeit, Gastfreundschaft und Markenerlebnis verschwimmen. Moderne Business Center und Hospitality-Konzepte brauchen eine klare Positionierung, eine starke Servicekultur und ein durchdachtes Raumkonzept. Wir verbinden strategisches Denken mit operativer Umsetzungskompetenz.",
    consultingFields: [
      "Business-Center-Konzeption",
      "Hospitality-Strategie",
      "Servicedesign und Betriebskonzept",
      "Standort- und Zielgruppenanalyse",
      "Markenentwicklung für Hospitality",
    ],
    challenges: [
      "Entwicklung tragfähiger Betriebskonzepte",
      "Positionierung gegenüber Co-Working und Hotellerie",
      "Integration von Technologie und persönlichem Service",
      "Skalierung bei gleichbleibender Qualität",
    ],
    caseStudies: [
      { title: "Premium Business Center", desc: "Strategische Konzeption und Markenentwicklung für ein Business Center mit internationalem Anspruch." },
    ],
  },
  {
    slug: "family-offices-private-capital",
    name: "Family Offices & Private Capital",
    desc: "Diskrete strategische Beratung für Family Offices, Vermögensstrukturen und unternehmerische Familien.",
    heroHeadline: "Family Offices & Private Capital",
    heroSubline: "Diskrete Beratung an der Schnittstelle von Vermögen, Unternehmertum und strategischer Weiterentwicklung.",
    intro: "Family Offices agieren an der Schnittstelle von Kapitalerhalt, unternehmerischer Aktivität und Generationenübergang. Visionnaire unterstützt bei der strategischen Strukturierung, der Entwicklung neuer Geschäftsfelder und der Positionierung im internationalen Umfeld — mit der Diskretion und Tiefe, die dieser Kontext verlangt.",
    consultingFields: [
      "Strategische Portfolioentwicklung",
      "Strukturierung neuer Geschäftsfelder",
      "Marken- und Reputationsmanagement",
      "Generationenübergang und Governance",
      "Internationale Expansion",
    ],
    challenges: [
      "Wahrung von Diskretion bei gleichzeitiger Professionalisierung",
      "Identifikation geeigneter Investitions- und Beteiligungsformate",
      "Aufbau institutioneller Strukturen ohne Verlust von Agilität",
      "Positionierung gegenüber institutionellen Investoren",
    ],
    caseStudies: [
      { title: "Strategische Neuausrichtung", desc: "Begleitung eines Family Office bei der Strukturierung und Positionierung neuer Geschäftsaktivitäten." },
    ],
  },
  {
    slug: "luxury-design-premium-brands",
    name: "Luxury, Design & Premium Brands",
    desc: "Markenentwicklung und strategische Positionierung für Premium- und Luxussegmente.",
    heroHeadline: "Luxury, Design & Premium Brands",
    heroSubline: "Markenstrategien für Unternehmen, die Qualität, Design und Exklusivität als Kernwerte verstehen.",
    intro: "Im Premium- und Luxussegment entscheidet nicht das Produkt allein, sondern die Geschichte, die Haltung und das Markenerlebnis. Visionnaire begleitet Marken bei der strategischen Positionierung, der Entwicklung von Designsystemen und der internationalen Markterschließung — mit einem tiefen Verständnis für Ästhetik, Wertigkeit und kulturelle Relevanz.",
    consultingFields: [
      "Markenstrategie und Positionierung",
      "Designsysteme und visuelle Identität",
      "Internationaler Markenaufbau",
      "Produktstrategie und Kollektion",
      "Retail- und Distributionsstrategie",
    ],
    challenges: [
      "Authentische Differenzierung in einem übersättigten Markt",
      "Bewahrung von Markenwert bei internationalem Wachstum",
      "Balance zwischen Exklusivität und Skalierbarkeit",
      "Digitale Transformation ohne Markenwertverlust",
    ],
    caseStudies: [
      { title: "Premium-Markenlaunch", desc: "Entwicklung einer vollständigen Markenidentität und Go-to-Market-Strategie für ein neues Premium-Label." },
      { title: "Re-Branding Heritage-Marke", desc: "Strategische Neupositionierung einer etablierten Marke für internationale Märkte." },
    ],
  },
  {
    slug: "retail-consumer-concepts",
    name: "Retail & Consumer Concepts",
    desc: "Strategien für den Handel, Omnichannel-Konzepte und innovative Vertriebsformate.",
    heroHeadline: "Retail & Consumer Concepts",
    heroSubline: "Strategische Beratung für moderne Handelskonzepte, Vertriebsarchitekturen und Konsumerlebnisse.",
    intro: "Der Handel befindet sich in einem fundamentalen Strukturwandel. Erfolg entsteht nicht durch Kanäle, sondern durch Relevanz, Erlebnis und Markenbindung. Wir unterstützen Handelsunternehmen bei der strategischen Neuausrichtung, der Entwicklung moderner Vertriebskonzepte und der Integration digitaler und physischer Markenerlebnisse.",
    consultingFields: [
      "Omnichannel-Strategie",
      "Retail-Konzeptentwicklung",
      "Kommerzielle Transformation",
      "Customer Experience Design",
      "Standort- und Expansionsstrategie",
    ],
    challenges: [
      "Integration digitaler und physischer Vertriebswege",
      "Kundenbindung in einem fragmentierten Marktumfeld",
      "Rentabilität bei steigenden Akquisitionskosten",
      "Entwicklung skalierbarer Handelsformate",
    ],
    caseStudies: [
      { title: "Retail-Transformation", desc: "Strategische Neuausrichtung eines Handelsunternehmens mit Fokus auf Omnichannel und Markenerlebnis." },
    ],
  },
  {
    slug: "corporate-transformation-growth",
    name: "Corporate Transformation & Strategic Growth",
    desc: "Begleitung bei Transformationsprozessen, strategischem Wachstum und organisatorischem Wandel.",
    heroHeadline: "Corporate Transformation & Strategic Growth",
    heroSubline: "Strategien für Unternehmen in Phasen des Wandels, des Wachstums und der Neuausrichtung.",
    intro: "Transformation ist kein Projekt, sondern ein kontinuierlicher Prozess. Ob Neuausrichtung, Wachstumsstrategie oder organisatorischer Wandel — Visionnaire begleitet Unternehmen mit einem ganzheitlichen Ansatz, der Strategie, Struktur und Umsetzung verbindet. Pragmatisch, ergebnisorientiert und mit internationalem Blick.",
    consultingFields: [
      "Strategische Neuausrichtung",
      "Wachstumsstrategie und Skalierung",
      "Organisationsentwicklung",
      "Change Management",
      "M&A-Begleitung und Integration",
    ],
    challenges: [
      "Alignment zwischen Vision und operativer Realität",
      "Geschwindigkeit des Wandels bei gleichzeitiger Stabilität",
      "Integration unterschiedlicher Unternehmenskulturen",
      "Messbarkeit von Transformationserfolg",
    ],
    caseStudies: [
      { title: "Unternehmensrestrukturierung", desc: "Begleitung einer umfassenden strategischen Neuausrichtung mit Fokus auf Wachstum und Effizienz." },
    ],
  },
];

const industriesEn: IndustryItem[] = [
  {
    slug: "real-estate-developments",
    name: "Real Estate & Developments",
    desc: "Strategic advisory for real estate projects, urban developments and investment initiatives.",
    heroHeadline: "Real Estate & Developments",
    heroSubline: "Strategies for real estate projects with an international perspective and sustainable value creation.",
    intro: "Today's real estate market demands more than site analysis and yield projections. Successful projects combine strategic planning, brand understanding and operational excellence. Visionnaire supports developers, investors and asset holders in positioning, conceiving and executing sophisticated real estate ventures.",
    consultingFields: [
      "Strategic project positioning",
      "Concept and usage development",
      "Brand and marketing strategy",
      "Site evaluation and market analysis",
      "Partnerships and joint ventures",
    ],
    challenges: [
      "Differentiation in competitive markets",
      "Positioning of mixed-use concepts",
      "Sustainable value creation across the entire lifecycle",
      "Integration of brand and architecture",
    ],
    caseStudies: [
      { title: "Urban quarter development", desc: "Strategic positioning and brand concept for an urban quarter development." },
      { title: "Mediterranean hospitality concept", desc: "Development of an integrated usage concept focusing on hospitality and residential." },
    ],
  },
  {
    slug: "hospitality-business-centers",
    name: "Hospitality & Business Centers",
    desc: "Concepts for premium business spaces, business centers and hospitality projects.",
    heroHeadline: "Hospitality & Business Centers",
    heroSubline: "Conception and positioning of premium business and hospitality formats.",
    intro: "The boundaries between work, hospitality and brand experience are blurring. Modern business centers and hospitality concepts require clear positioning, a strong service culture and a well-designed spatial concept. We combine strategic thinking with operational execution expertise.",
    consultingFields: [
      "Business center conception",
      "Hospitality strategy",
      "Service design and operating concepts",
      "Location and target group analysis",
      "Brand development for hospitality",
    ],
    challenges: [
      "Developing viable operating concepts",
      "Positioning against co-working and hotel segments",
      "Integrating technology with personalised service",
      "Scaling while maintaining quality",
    ],
    caseStudies: [
      { title: "Premium business center", desc: "Strategic conception and brand development for a business center with international ambitions." },
    ],
  },
  {
    slug: "family-offices-private-capital",
    name: "Family Offices & Private Capital",
    desc: "Discreet strategic advisory for family offices, wealth structures and entrepreneurial families.",
    heroHeadline: "Family Offices & Private Capital",
    heroSubline: "Discreet advisory at the intersection of wealth, entrepreneurship and strategic development.",
    intro: "Family offices operate at the intersection of capital preservation, entrepreneurial activity and generational transition. Visionnaire supports strategic structuring, development of new business areas and international positioning — with the discretion and depth this context demands.",
    consultingFields: [
      "Strategic portfolio development",
      "New business area structuring",
      "Brand and reputation management",
      "Generational transition and governance",
      "International expansion",
    ],
    challenges: [
      "Maintaining discretion while professionalising",
      "Identifying suitable investment and participation formats",
      "Building institutional structures without losing agility",
      "Positioning relative to institutional investors",
    ],
    caseStudies: [
      { title: "Strategic realignment", desc: "Guiding a family office through structuring and positioning new business activities." },
    ],
  },
  {
    slug: "luxury-design-premium-brands",
    name: "Luxury, Design & Premium Brands",
    desc: "Brand development and strategic positioning for premium and luxury segments.",
    heroHeadline: "Luxury, Design & Premium Brands",
    heroSubline: "Brand strategies for companies that understand quality, design and exclusivity as core values.",
    intro: "In the premium and luxury segment, success is determined not by the product alone, but by the story, attitude and brand experience. Visionnaire guides brands in strategic positioning, design system development and international market entry — with deep understanding of aesthetics, value and cultural relevance.",
    consultingFields: [
      "Brand strategy and positioning",
      "Design systems and visual identity",
      "International brand building",
      "Product strategy and collections",
      "Retail and distribution strategy",
    ],
    challenges: [
      "Authentic differentiation in an oversaturated market",
      "Preserving brand value during international growth",
      "Balancing exclusivity with scalability",
      "Digital transformation without brand dilution",
    ],
    caseStudies: [
      { title: "Premium brand launch", desc: "Development of a complete brand identity and go-to-market strategy for a new premium label." },
      { title: "Heritage brand repositioning", desc: "Strategic repositioning of an established brand for international markets." },
    ],
  },
  {
    slug: "retail-consumer-concepts",
    name: "Retail & Consumer Concepts",
    desc: "Strategies for retail, omnichannel concepts and innovative distribution formats.",
    heroHeadline: "Retail & Consumer Concepts",
    heroSubline: "Strategic advisory for modern retail concepts, distribution architectures and consumer experiences.",
    intro: "Retail is undergoing fundamental structural change. Success is driven not by channels, but by relevance, experience and brand loyalty. We support retail businesses in strategic realignment, developing modern distribution concepts and integrating digital and physical brand experiences.",
    consultingFields: [
      "Omnichannel strategy",
      "Retail concept development",
      "Commercial transformation",
      "Customer experience design",
      "Location and expansion strategy",
    ],
    challenges: [
      "Integration of digital and physical distribution channels",
      "Customer retention in fragmented markets",
      "Profitability amid rising acquisition costs",
      "Developing scalable retail formats",
    ],
    caseStudies: [
      { title: "Retail transformation", desc: "Strategic realignment of a retail company focusing on omnichannel and brand experience." },
    ],
  },
  {
    slug: "corporate-transformation-growth",
    name: "Corporate Transformation & Strategic Growth",
    desc: "Support in transformation processes, strategic growth and organisational change.",
    heroHeadline: "Corporate Transformation & Strategic Growth",
    heroSubline: "Strategies for companies in phases of change, growth and realignment.",
    intro: "Transformation is not a project but a continuous process. Whether realignment, growth strategy or organisational change — Visionnaire guides companies with a holistic approach that connects strategy, structure and execution. Pragmatic, results-oriented and with an international perspective.",
    consultingFields: [
      "Strategic realignment",
      "Growth strategy and scaling",
      "Organisational development",
      "Change management",
      "M&A support and integration",
    ],
    challenges: [
      "Alignment between vision and operational reality",
      "Speed of change while maintaining stability",
      "Integration of different corporate cultures",
      "Measurability of transformation success",
    ],
    caseStudies: [
      { title: "Corporate restructuring", desc: "Guiding a comprehensive strategic realignment focused on growth and efficiency." },
    ],
  },
];

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
      industriesDropdown: industriesDe.map(i => ({ label: i.name, slug: i.slug })),
      businessUnits: "Unternehmensbereiche",
      about: "Über uns",
      insights: "Insights",
      whyUs: "Warum Visionnaire",
      businessCenter: "Business Center",
      contact: "Kontakt",
      projectCta: "Projekt besprechen",
      contactCta: "Kontakt aufnehmen",
    },
    hero: {
      tagline: "Strategische Beratung · Operative Umsetzung · Internationale Netzwerke",
      headline: "Strategie, Produkte und Marken. International gedacht. Präzise umgesetzt.",
      subline: "Visionnaire Consulting unterstützt Unternehmen bei der Entwicklung von Strategien, Produkten und Marken sowie bei der Umsetzung internationaler Geschäftslösungen.",
      cta: "Projekt besprechen",
      ctaSecondary: "Kontakt aufnehmen",
    },
    expertise: {
      label: "Unsere Expertise",
      headline: "Strategien entwickeln. Märkte erschließen. Marken aufbauen.",
      text: "Visionnaire Consulting verbindet strategische Beratung, operative Umsetzung und internationale Netzwerke. Wir begleiten Unternehmen von der ersten Idee bis zur erfolgreichen Markteinführung — mit Präzision, Erfahrung und einem ganzheitlichen Ansatz.",
    },
    services: {
      label: "Leistungen",
      headline: "Vier Kernbereiche. Ein Ziel.",
      requestCta: "Beratung anfragen",
      relevantFor: "Relevant für",
      items: [
        {
          number: "01",
          title: "Consulting",
          desc: "Analyse der aktuellen Situation, Entwicklung klarer Strategien und Begleitung bei der Umsetzung geschäftlicher Ziele.",
          details: ["Strategieentwicklung", "Markt- und Wettbewerbsanalysen", "Organisationsentwicklung", "Begleitung bei der Umsetzung"],
          relevantIndustries: ["real-estate-developments", "family-offices-private-capital", "corporate-transformation-growth"],
        },
        {
          number: "02",
          title: "Sourcing",
          desc: "Internationales Netzwerk für die Beschaffung und Produktion hochwertiger Textilprodukte.",
          details: ["Internationale Lieferanten", "Produktionskoordination", "Qualitätssicherung", "Lieferkettenoptimierung"],
          relevantIndustries: ["luxury-design-premium-brands", "retail-consumer-concepts"],
        },
        {
          number: "03",
          title: "Produktentwicklung",
          desc: "Entwicklung innovativer Textilprodukte in Zusammenarbeit mit internationalen Partnern, Designern und Bekleidungstechnikern.",
          details: ["Funktionale Textilien", "Materialentwicklung", "Prototyping", "Individuelle Kollektionen"],
          relevantIndustries: ["luxury-design-premium-brands", "retail-consumer-concepts"],
        },
        {
          number: "04",
          title: "Marken- & Konzeptentwicklung",
          desc: "Markenstrategie, Positionierung und die Entwicklung vollständiger Markenidentitäten.",
          details: ["Markenstrategie & Positionierung", "Designsysteme", "Konzeptentwicklung", "Pitch Decks & Businesspläne"],
          relevantIndustries: ["real-estate-developments", "hospitality-business-centers", "luxury-design-premium-brands", "family-offices-private-capital"],
        },
      ],
    },
    industries: {
      label: "Branchenkompetenz",
      headline: "Strategische Tiefe in relevanten Märkten",
      subline: "Wir verstehen die Dynamiken, Strukturen und Anforderungen der Branchen, in denen wir beraten — nicht oberflächlich, sondern mit der Tiefe, die wirksame Strategien erfordern.",
      items: industriesDe,
      matchingServices: "Passende Leistungen",
      challenges: "Typische Herausforderungen",
      projects: "Referenzprojekte",
    },
    whyUs: {
      label: "Warum Visionnaire Consulting",
      headline: "Was uns auszeichnet",
      items: [
        { title: "Ganzheitlicher Ansatz", desc: "Wir denken nicht in Einzelmaßnahmen, sondern in Gesamtlösungen — von der Strategie bis zur Umsetzung." },
        { title: "Internationale Netzwerke", desc: "Ein gewachsenes Netzwerk aus Partnern, Produzenten und Spezialisten auf internationaler Ebene." },
        { title: "Branchenspezialisierung", desc: "Tiefes Verständnis für die Dynamiken und Anforderungen spezifischer Branchen und Märkte." },
        { title: "Praxisorientierte Umsetzung", desc: "Keine Theorie ohne Umsetzung. Unsere Beratung ist auf konkrete, messbare Ergebnisse ausgerichtet." },
      ],
    },
    businessUnits: {
      label: "Verbundene Unternehmensbereiche",
      headline: "Die Visionnaire Gruppe",
      subline: "Ein Markenuniversum mit klarer Struktur — verbunden durch gemeinsame Werte, getragen von spezialisierter Kompetenz.",
      items: [
        { name: "Visionnaire Consulting", desc: "Strategische Beratung, Markenentwicklung und operative Umsetzung für internationale Unternehmen.", href: "/" },
        { name: "Visionnaire Domizil", desc: "Hochwertige Wohn- und Gewerbeimmobilien mit internationalem Anspruch und klarer Markenidentität.", href: "/unternehmensbereiche" },
        { name: "Business Center", desc: "Premium-Büro- und Geschäftsräume für Unternehmen mit Anspruch an Lage, Service und Repräsentation.", href: "/unternehmensbereiche" },
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
      domizilNote: "Ein Geschäftsbereich der Visionnaire Gruppe",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      navServices: "Leistungen",
      navIndustries: "Branchen",
      navAbout: "Über uns",
      navContact: "Kontakt",
    },
    industryPage: {
      backToOverview: "Alle Branchen",
      consultingFields: "Relevante Beratungsfelder",
      challengesLabel: "Typische Herausforderungen",
      projectsLabel: "Ausgewählte Projekte",
      ctaPrimary: "Projekt besprechen",
      ctaSecondary: "Beratung anfragen",
      matchingServices: "Passende Leistungen",
    },
    cta: {
      projectCta: "Projekt besprechen",
      consultationCta: "Beratung anfragen",
      contactCta: "Kontakt aufnehmen",
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
      industriesDropdown: industriesEn.map(i => ({ label: i.name, slug: i.slug })),
      businessUnits: "Business Units",
      about: "About",
      insights: "Insights",
      whyUs: "Why Visionnaire",
      businessCenter: "Business Center",
      contact: "Contact",
      projectCta: "Discuss project",
      contactCta: "Get in touch",
    },
    hero: {
      tagline: "Strategic Consulting · Operational Implementation · International Networks",
      headline: "Strategy, products and brands. Internationally conceived. Precisely executed.",
      subline: "Visionnaire Consulting supports companies in developing strategies, products and brands as well as implementing international business solutions.",
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
      relevantFor: "Relevant for",
      items: [
        {
          number: "01",
          title: "Consulting",
          desc: "Analysis of the current situation, development of clear strategies and support in achieving business goals.",
          details: ["Strategy development", "Market and competitive analysis", "Organisational development", "Implementation support"],
          relevantIndustries: ["real-estate-developments", "family-offices-private-capital", "corporate-transformation-growth"],
        },
        {
          number: "02",
          title: "Sourcing",
          desc: "International network for sourcing and production of high-quality textile products.",
          details: ["International suppliers", "Production coordination", "Quality assurance", "Supply chain optimisation"],
          relevantIndustries: ["luxury-design-premium-brands", "retail-consumer-concepts"],
        },
        {
          number: "03",
          title: "Product Development",
          desc: "Development of innovative textile products in collaboration with international partners, designers and garment technicians.",
          details: ["Functional textiles", "Material development", "Prototyping", "Custom collections"],
          relevantIndustries: ["luxury-design-premium-brands", "retail-consumer-concepts"],
        },
        {
          number: "04",
          title: "Brand & Concept Development",
          desc: "Brand strategy, positioning and development of complete brand identities.",
          details: ["Brand strategy & positioning", "Design systems", "Concept development", "Pitch decks & business plans"],
          relevantIndustries: ["real-estate-developments", "hospitality-business-centers", "luxury-design-premium-brands", "family-offices-private-capital"],
        },
      ],
    },
    industries: {
      label: "Industry Expertise",
      headline: "Strategic depth in relevant markets",
      subline: "We understand the dynamics, structures and requirements of the industries we advise — not superficially, but with the depth that effective strategies demand.",
      items: industriesEn,
      matchingServices: "Matching services",
      challenges: "Key challenges",
      projects: "Reference projects",
    },
    whyUs: {
      label: "Why Visionnaire Consulting",
      headline: "What sets us apart",
      items: [
        { title: "Holistic approach", desc: "We don't think in isolated measures, but in complete solutions — from strategy to execution." },
        { title: "International networks", desc: "An established network of partners, producers and specialists at an international level." },
        { title: "Industry specialisation", desc: "Deep understanding of the dynamics and requirements of specific industries and markets." },
        { title: "Practice-oriented implementation", desc: "No theory without implementation. Our consulting is focused on concrete, measurable results." },
      ],
    },
    businessUnits: {
      label: "Connected Business Units",
      headline: "The Visionnaire Group",
      subline: "A brand universe with clear structure — connected by shared values, carried by specialised expertise.",
      items: [
        { name: "Visionnaire Consulting", desc: "Strategic advisory, brand development and operational implementation for international companies.", href: "/" },
        { name: "Visionnaire Domizil", desc: "Premium residential and commercial properties with international ambition and clear brand identity.", href: "/unternehmensbereiche" },
        { name: "Business Center", desc: "Premium office and business spaces for companies that value location, service and representation.", href: "/unternehmensbereiche" },
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
      navServices: "Services",
      navIndustries: "Industries",
      navAbout: "About",
      navContact: "Contact",
    },
    industryPage: {
      backToOverview: "All industries",
      consultingFields: "Relevant consulting fields",
      challengesLabel: "Key challenges",
      projectsLabel: "Selected projects",
      ctaPrimary: "Discuss project",
      ctaSecondary: "Request consultation",
      matchingServices: "Matching services",
    },
    cta: {
      projectCta: "Discuss project",
      consultationCta: "Request consultation",
      contactCta: "Get in touch",
    },
  },
};
