import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();
  const [subject, setSubject] = useState(t.contact.subjects[0]);

  return (
    <>
      {/* Hero */}
      <section className="bg-soft-ivory pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="container">
          <p
            className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-5 animate-reveal-up"
            style={{ animationDelay: "100ms" }}
          >
            {t.contact.label}
          </p>
          <h1
            className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-light leading-[1.18] tracking-[-0.01em] max-w-2xl mb-7 animate-reveal-up"
            style={{ animationDelay: "250ms" }}
          >
            {t.contact.headline}
          </h1>
          <p
            className="text-soft-charcoal text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up"
            style={{ animationDelay: "400ms" }}
          >
            {t.contact.text}
          </p>
        </div>
      </section>

      {/* Intro + Subject options */}
      {t.contact.introHeadline && (
        <section className="py-24 md:py-32 bg-background">
          <div className="container">
            <div className="max-w-3xl">
              <ScrollReveal>
                <h2 className="text-foreground text-lg md:text-xl font-light leading-[1.3] tracking-[-0.01em] mb-6">
                  {t.contact.introHeadline}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <p className="text-muted-foreground text-[15px] md:text-base leading-[1.8] mb-20">
                  {t.contact.introText}
                </p>
              </ScrollReveal>

              {/* Subject cards */}
              {t.contact.subjectDescriptions && (
                <div className="grid md:grid-cols-3 gap-px bg-border">
                  {t.contact.subjects.map((s, i) => (
                    <ScrollReveal key={s} delay={120 + i * 70}>
                      <div className="bg-card p-7 md:p-8 h-full">
                        <h3 className="text-foreground text-sm font-medium mb-3 tracking-[-0.01em]">
                          {s}
                        </h3>
                        <p className="text-muted-foreground text-[13px] leading-[1.7]">
                          {t.contact.subjectDescriptions![i]}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Form + Contact info */}
      <section className="py-28 md:py-36 bg-cloud-neutral">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-16 md:gap-20 max-w-5xl mx-auto">
            {/* Form */}
            <div className="md:col-span-7">
              <ScrollReveal>
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-warm-grey text-[11px] uppercase tracking-[0.18em] mb-3">
                      {t.contact.formName}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-background border-b border-input py-3.5 text-foreground text-sm focus:outline-none focus:border-[hsl(var(--gold))] focus:shadow-[0_1px_0_0_hsl(var(--gold))] transition-all duration-200 placeholder:text-muted-foreground/25"
                    />
                  </div>
                  {t.contact.formCompany && (
                    <div>
                      <label className="block text-warm-grey text-[11px] uppercase tracking-[0.18em] mb-3">
                        {t.contact.formCompany}
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background border-b border-input py-3.5 text-foreground text-sm focus:outline-none focus:border-[hsl(var(--gold))] focus:shadow-[0_1px_0_0_hsl(var(--gold))] transition-all duration-200"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-warm-grey text-[11px] uppercase tracking-[0.18em] mb-3">
                      {t.contact.formEmail}
                    </label>
                    <input
                      type="email"
                      className="w-full bg-background border-b border-input py-3.5 text-foreground text-sm focus:outline-none focus:border-[hsl(var(--gold))] focus:shadow-[0_1px_0_0_hsl(var(--gold))] transition-all duration-200"
                    />
                  </div>
                  {t.contact.formPhone && (
                    <div>
                      <label className="block text-warm-grey text-[11px] uppercase tracking-[0.18em] mb-3">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        placeholder={t.contact.formPhone}
                        className="w-full bg-background border-b border-input py-3.5 text-foreground text-sm focus:outline-none focus:border-[hsl(var(--gold))] focus:shadow-[0_1px_0_0_hsl(var(--gold))] transition-all duration-200 placeholder:text-muted-foreground/40"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-warm-grey text-[11px] uppercase tracking-[0.18em] mb-3">
                      {t.contact.formSubject}
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-background border-b border-input py-3.5 text-foreground text-sm focus:outline-none focus:border-[hsl(var(--gold))] transition-all duration-200 appearance-none cursor-pointer"
                    >
                      {t.contact.subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-warm-grey text-[11px] uppercase tracking-[0.18em] mb-3">
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-background border-b border-input py-3.5 text-foreground text-sm focus:outline-none focus:border-[hsl(var(--gold))] transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-8 py-3.5 hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-[0.97] mt-2"
                  >
                    {t.contact.formSend}
                  </button>
                </form>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-4 md:col-start-9">
              <ScrollReveal delay={150}>
                <div className="md:pt-4">
                  {/* Address */}
                  <div className="mb-14">
                    <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] mb-7">
                      {t.contact.label}
                    </p>
                    {t.contact.address && (
                      <div className="flex items-start gap-3 text-foreground text-sm mb-5">
                        <MapPin size={14} strokeWidth={1.5} className="text-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">{t.contact.address}</p>
                          {t.contact.addressLines?.map((line) => (
                            <p key={line} className="text-muted-foreground">{line}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Phone + Email */}
                  <div className="mb-14 pb-14 border-b border-border">
                    <a
                      href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-foreground text-sm hover:text-[hsl(var(--brand-blue))] transition-colors duration-200 mb-4"
                    >
                      <Phone size={14} strokeWidth={1.5} className="text-muted-foreground" />
                      {t.contact.phone}
                    </a>
                    <a
                      href={`mailto:${t.contact.email}`}
                      className="flex items-center gap-3 text-foreground text-sm hover:text-[hsl(var(--brand-blue))] transition-colors duration-200"
                    >
                      <Mail size={14} strokeWidth={1.5} className="text-muted-foreground" />
                      {t.contact.email}
                    </a>
                  </div>

                  {/* Note */}
                  {t.contact.noteHeadline && (
                    <div>
                      <p className="text-foreground text-sm font-medium mb-3">
                        {t.contact.noteHeadline}
                      </p>
                      <p className="text-warm-grey text-[13px] leading-[1.8]">
                        {t.contact.note}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      {t.contact.closingHeadline && (
        <section className="py-24 md:py-32 bg-soft-ivory">
          <div className="container text-center">
            <ScrollReveal>
              <h3 className="text-foreground text-lg md:text-xl font-light leading-[1.3] tracking-[-0.01em] mb-4">
                {t.contact.closingHeadline}
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="text-muted-foreground text-sm leading-[1.7] max-w-md mx-auto">
                {t.contact.closingText}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}
    </>
  );
}
