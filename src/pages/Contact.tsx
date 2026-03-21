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
          <p className="text-primary-foreground/45 text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.contact.text}</p>
        </div>
      </section>

      {/* Form & Contact info */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 max-w-4xl mx-auto">
            {/* Form */}
            <ScrollReveal>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-muted-foreground/60 text-[11px] uppercase tracking-[0.18em] mb-2">{t.contact.formName}</label>
                  <input type="text" className="w-full bg-transparent border-b border-border/80 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200" />
                </div>
                <div>
                  <label className="block text-muted-foreground/60 text-[11px] uppercase tracking-[0.18em] mb-2">{t.contact.formEmail}</label>
                  <input type="email" className="w-full bg-transparent border-b border-border/80 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200" />
                </div>
                <div>
                  <label className="block text-muted-foreground/60 text-[11px] uppercase tracking-[0.18em] mb-2">{t.contact.formSubject}</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-transparent border-b border-border/80 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200 appearance-none"
                  >
                    {t.contact.subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-muted-foreground/60 text-[11px] uppercase tracking-[0.18em] mb-2">{t.contact.formMessage}</label>
                  <textarea rows={5} className="w-full bg-transparent border-b border-border/80 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-200 resize-none" />
                </div>
                <button type="submit" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-accent text-accent-foreground px-7 py-3 hover:bg-accent/90 transition-all duration-200 active:scale-[0.97] mt-4">
                  {t.contact.formSend}
                </button>
              </form>
            </ScrollReveal>

            {/* Contact details */}
            <ScrollReveal delay={120}>
              <div className="pt-2">
                <div className="mb-12">
                  <p className="text-muted-foreground/60 text-[11px] uppercase tracking-[0.18em] mb-6">{t.contact.label}</p>
                  <a href={`mailto:${t.contact.email}`} className="flex items-center gap-3 text-foreground text-sm hover:text-accent transition-colors duration-200 mb-4">
                    <Mail size={14} strokeWidth={1.5} className="text-accent/60" />{t.contact.email}
                  </a>
                  <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-foreground text-sm hover:text-accent transition-colors duration-200">
                    <Phone size={14} strokeWidth={1.5} className="text-accent/60" />{t.contact.phone}
                  </a>
                </div>
                <div className="pt-8 border-t border-border/60">
                  <p className="text-muted-foreground/50 text-[11px] tracking-[0.15em] uppercase mb-3">{t.footer.domizilNote}</p>
                  <p className="text-muted-foreground text-sm leading-[1.7]">Visionnaire Consulting GmbH</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
