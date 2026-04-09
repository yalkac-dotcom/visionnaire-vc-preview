import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SEOHead } from "@/components/SEOHead";

export default function Impressum() {
  const { t } = useLanguage();
  const im = t.impressum;

  return (
    <>
      <SEOHead title={im.headline} />
      {/* Hero */}
      <section className="bg-soft-ivory pt-20 pb-10 md:pt-28 md:pb-14">
        <div className="container">
          <p
            className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up"
            style={{ animationDelay: "100ms" }}
          >
            {im.label}
          </p>
          <h1
            className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-xl animate-reveal-up"
            style={{ animationDelay: "250ms" }}
          >
            {im.headline}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-18 bg-background">
        <div className="container">
          <div className="max-w-xl">
            {/* Angaben gemäß § 5 DDG */}
            <ScrollReveal>
              <h2 className="text-foreground text-base font-medium mb-6 tracking-[-0.01em]">
                {im.angabenTitle}
              </h2>
              <div className="text-muted-foreground text-sm leading-[1.8] mb-6">
                {im.companyBlock.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-[1.8] mb-6">
                {im.brandNote}
              </p>
              <div className="text-muted-foreground text-sm leading-[1.8] mb-6">
                {im.contactBlock.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="text-muted-foreground text-sm leading-[1.8] mb-6">
                {im.registerBlock.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-[1.8] mb-10">
                {im.vatLine}
              </p>
            </ScrollReveal>

            {/* Verantwortlich für den Inhalt */}
            <ScrollReveal delay={80}>
              <div className="mb-10 pb-14 border-b border-border">
                <h2 className="text-foreground text-base font-medium mb-6 tracking-[-0.01em]">
                  {im.contentResponsibilityTitle}
                </h2>
                <div className="text-muted-foreground text-sm leading-[1.8]">
                  {im.contentResponsibilityBlock.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Supplementary Legal Notices */}
            {im.supplementaryTitle && (
              <ScrollReveal delay={100}>
                <h2 className="text-foreground text-lg font-medium mb-8 mt-4 tracking-[-0.01em]">
                  {im.supplementaryTitle}
                </h2>
              </ScrollReveal>
            )}

            {/* Legal sections */}
            {im.sections.map((section, idx) => (
              <ScrollReveal key={idx} delay={120 + idx * 40}>
                <div className="mb-10 pb-14 border-b border-border">
                  <h2 className="text-foreground text-base font-medium mb-6 tracking-[-0.01em]">
                    {section.title}
                  </h2>
                  {section.content.map((paragraph, pi) => (
                    <p
                      key={pi}
                      className="text-muted-foreground text-sm leading-[1.8] mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollReveal>
            ))}

            {/* Binding language note (non-DE only) */}
            {im.bindingLanguageNote && (
              <ScrollReveal delay={300}>
                <p className="text-muted-foreground text-sm leading-[1.8] italic mt-6">
                  {im.bindingLanguageNote}
                </p>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
