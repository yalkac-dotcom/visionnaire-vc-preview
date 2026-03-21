import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, Phone } from "lucide-react";

export default function Impressum() {
  const { t } = useLanguage();
  const im = t.impressum;

  return (
    <>
      {/* Hero */}
      <section className="bg-soft-ivory pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container">
          <p
            className="text-[hsl(var(--gold))] text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up"
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
      <section className="py-28 md:py-36 bg-background">
        <div className="container">
          <div className="max-w-xl">
            <ScrollReveal>
              <h2 className="text-foreground text-base font-medium mb-6 tracking-[-0.01em]">
                {im.company}
              </h2>
              <div className="text-muted-foreground text-sm leading-[1.8] mb-14">
                {im.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="grid sm:grid-cols-2 gap-10 mb-14 pb-14 border-b border-border">
                <div>
                  <p className="text-warm-grey text-[11px] uppercase tracking-[0.18em] mb-3">Telefon</p>
                  <a
                    href={`tel:${im.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2.5 text-foreground text-sm hover:text-[hsl(var(--gold-deep))] transition-colors duration-200"
                  >
                    <Phone size={13} strokeWidth={1.5} className="text-[hsl(var(--gold-soft))]" />
                    {im.phone}
                  </a>
                </div>
                <div>
                  <p className="text-warm-grey text-[11px] uppercase tracking-[0.18em] mb-3">Fax</p>
                  <p className="text-foreground text-sm">{im.fax}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="mb-14 pb-14 border-b border-border">
                <p className="text-warm-grey text-[11px] uppercase tracking-[0.18em] mb-3">E-Mail</p>
                <a
                  href={`mailto:${im.email}`}
                  className="inline-flex items-center gap-2.5 text-foreground text-sm hover:text-[hsl(var(--gold-deep))] transition-colors duration-200"
                >
                  <Mail size={13} strokeWidth={1.5} className="text-[hsl(var(--gold-soft))]" />
                  {im.email}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="mb-14 pb-14 border-b border-border">
                <p className="text-warm-grey text-[11px] uppercase tracking-[0.18em] mb-3">
                  {im.representedBy}
                </p>
                <p className="text-foreground text-sm">{im.representedByName}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid sm:grid-cols-2 gap-10 mb-14 pb-14 border-b border-border">
                <div>
                  <p className="text-warm-grey text-[11px] uppercase tracking-[0.18em] mb-3">
                    {im.registerLabel}
                  </p>
                  <p className="text-foreground text-sm">{im.registerValue}</p>
                  <p className="text-muted-foreground text-sm mt-1">{im.registerCourt}</p>
                </div>
                <div>
                  <p className="text-warm-grey text-[11px] uppercase tracking-[0.18em] mb-3">
                    {im.vatLabel}
                  </p>
                  <p className="text-foreground text-sm">{im.vatValue}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
