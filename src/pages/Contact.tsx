import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();
  const [subject, setSubject] = useState(t.contact.subjects[0]);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.contact.label}</p>
          <h1 className="text-primary-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.contact.headline}</h1>
          <p className="text-primary-foreground/45 text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.contact.intro || t.contact.text}</p>
        </div>
      </section>

      {/* Form & Contact info */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-16 md:gap-20 max-w-5xl mx-auto">
            <div className="md:col-span-3">
              <ScrollReveal>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-muted-foreground/60 text-[11px] uppercase tracking-[0.18em] mb-3">{t.contact.formName}</label>
                    <input type="text" className="w-full bg-transparent border-b border-border/80 py-3.5 text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200" />
                  </div>
                  <div>
                    <label className="block text-muted-foreground/60 text-[11px] uppercase tracking-[0.18em] mb-3">{t.contact.formEmail}</label>
                    <input type="email" className="w-full bg-transparent border-b border-border/80 py-3.5 text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200" />
                  </div>
                  <div>
                    <label className="block text-muted-foreground/60 text-[11px] uppercase tracking-[0.18em] mb-3">{t.contact.formSubject}</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-transparent border-b border-border/80 py-3.5 text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      {t.contact.subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-muted-foreground/60 text-[11px] uppercase tracking-[0.18em] mb-3">{t.contact.formMessage}</label>
                    <textarea rows={5} className="w-full bg-transparent border-b border-border/80 py-3.5 text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200 resize-none" />
                  </div>
                  <button type="submit" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-accent text-accent-foreground px-8 py-3.5 hover:bg-accent/90 transition-all duration-200 active:scale-[0.97] mt-2">
                    {t.contact.formSend}
                  </button>
                </form>
              </ScrollReveal>
            </div>

            <div className="md:col-span-2">
              <ScrollReveal delay={120}>
                <div className="pt-2">
                  <div className="mb-14">
                    <p className="text-accent text-[11px] uppercase tracking-[0.2em] mb-7">{t.contact.label}</p>
                    <a href={`mailto:${t.contact.email}`} className="flex items-center gap-3 text-foreground text-sm hover:text-accent transition-colors duration-200 mb-5">
                      <Mail size={14} strokeWidth={1.5} className="text-accent/60" />{t.contact.email}
                    </a>
                    <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-foreground text-sm hover:text-accent transition-colors duration-200">
                      <Phone size={14} strokeWidth={1.5} className="text-accent/60" />{t.contact.phone}
                    </a>
                  </div>

                  <div className="pt-8 border-t border-border/60 mb-14">
                    <p className="text-muted-foreground text-sm leading-[1.7]">Visionnaire Consulting GmbH</p>
                  </div>

                  {t.contact.note && (
                    <div className="pt-8 border-t border-border/60">
                      <p className="text-muted-foreground/60 text-[13px] leading-[1.7]">{t.contact.note}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Closing micro-section */}
      {t.contact.closingHeadline && (
        <section className="py-20 md:py-24 bg-warm-gray">
          <div className="container text-center">
            <ScrollReveal>
              <h3 className="text-foreground text-lg md:text-xl font-light leading-[1.3] tracking-[-0.01em] mb-4">{t.contact.closingHeadline}</h3>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="text-muted-foreground text-sm leading-[1.7] max-w-md mx-auto">{t.contact.closingText}</p>
            </ScrollReveal>
          </div>
        </section>
      )}
    </>
  );
}
