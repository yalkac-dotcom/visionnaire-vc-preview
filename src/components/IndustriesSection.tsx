import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";

const industriesDE = [
  { name: "Fashion & Textil", desc: "Bekleidung, funktionale Textilien, Kollektionen und nachhaltige Materialien." },
  { name: "Konsumgüter", desc: "Produktentwicklung, Markenaufbau und Vertriebsstrategien für den Endverbrauchermarkt." },
  { name: "Handel & Retail", desc: "Omnichannel-Strategien, Vertriebskonzepte und kommerzielle Transformation." },
  { name: "Technologie & Innovation", desc: "Funktionale Materialien, nachhaltige Lösungen und innovative Produktkonzepte." },
];

const industriesEN = [
  { name: "Fashion & Textiles", desc: "Apparel, functional textiles, collections and sustainable materials." },
  { name: "Consumer Goods", desc: "Product development, brand building and sales strategies for the consumer market." },
  { name: "Trade & Retail", desc: "Omnichannel strategies, distribution concepts and commercial transformation." },
  { name: "Technology & Innovation", desc: "Functional materials, sustainable solutions and innovative product concepts." },
];

export function IndustriesSection() {
  const { locale } = useLanguage();
  const industries = locale === "de" ? industriesDE : industriesEN;
  const label = locale === "de" ? "Branchen" : "Industries";
  const headline = locale === "de"
    ? "Branchenkompetenz mit internationaler Reichweite"
    : "Industry expertise with international reach";

  return (
    <section id="industries" className="py-24 md:py-32 bg-background">
      <div className="container">
        <ScrollReveal>
          <p className="text-accent text-xs uppercase tracking-widest mb-4">{label}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-light leading-tight max-w-2xl mb-16">
            {headline}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 80}>
              <div className="border-t border-border pt-6">
                <h3 className="text-foreground text-base font-medium mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
