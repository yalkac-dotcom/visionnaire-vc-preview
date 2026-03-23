import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroScrollIndicator } from "@/components/HeroScrollIndicator";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";
import { supabase } from "@/integrations/supabase/client";

const successMessages: Record<string, string> = {
  de: "Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen.",
  en: "Thank you for your message. We will get back to you shortly.",
  it: "Grazie per il Suo messaggio. La ricontatteremo al più presto.",
  es: "Gracias por su mensaje. Nos pondremos en contacto con usted en breve.",
  ja: "メッセージをありがとうございます。近日中にご連絡いたします。",
  zh: "感谢您的留言。我们会尽快回复。",
  ar: "شكراً لرسالتكم. سنعود إليكم قريباً.",
};

const errorMessages: Record<string, string> = {
  de: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
  en: "An error occurred while sending. Please try again.",
  it: "Si è verificato un errore durante l'invio. Riprovi.",
  es: "Se produjo un error al enviar. Por favor, inténtelo de nuevo.",
  ja: "送信中にエラーが発生しました。もう一度お試しください。",
  zh: "发送时出现错误。请重试。",
  ar: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.",
};

export default function Contact() {
  const { t, locale } = useLanguage();
  const [subject, setSubject] = useState(t.contact.subjects[0]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("loading");
    const { error } = await supabase.from("contact_submissions").insert({
      name: name.trim(),
      company: company.trim() || null,
      email: email.trim(),
      phone: phone.trim() || null,
      subject,
      message: message.trim(),
      locale,
    });

    if (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } else {
      setStatus("success");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-soft-ivory pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroContact} alt="Contact Visionnaire" className="w-full h-full object-cover opacity-[0.45]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--soft-ivory))]/15 via-transparent to-[hsl(var(--soft-ivory))]/35" />
        </div>
        <div className="container relative z-10">
          <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-5 animate-reveal-up" style={{ animationDelay: "100ms" }}>{t.contact.label}</p>
          <h1 className="text-foreground text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-normal leading-[1.15] tracking-[-0.015em] max-w-2xl mb-7 animate-reveal-up" style={{ animationDelay: "250ms" }}>{t.contact.headline}</h1>
          <p className="text-foreground/70 text-[15px] md:text-base leading-[1.7] max-w-xl animate-reveal-up" style={{ animationDelay: "400ms" }}>{t.contact.text}</p>
        </div>
        <HeroScrollIndicator />
      </section>

      {/* Intro + Subject options */}
      {t.contact.introHeadline && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-3xl">
              <ScrollReveal>
                <h2 className="text-foreground text-lg md:text-xl font-normal leading-[1.3] tracking-[-0.01em] mb-6">{t.contact.introHeadline}</h2>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <p className="text-foreground/65 text-[15px] md:text-base leading-[1.8] mb-14">{t.contact.introText}</p>
              </ScrollReveal>

              {t.contact.subjectDescriptions && (
                <div className="grid md:grid-cols-3 gap-px bg-border">
                  {t.contact.subjects.map((s, i) => (
                    <ScrollReveal key={s} delay={120 + i * 70}>
                      <div className="bg-card p-7 md:p-8 h-full">
                        <h3 className="text-foreground text-sm font-medium mb-3 tracking-[-0.01em]">{s}</h3>
                        <p className="text-foreground/70 text-[13px] leading-[1.7]">{t.contact.subjectDescriptions![i]}</p>
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
      <section className="py-20 md:py-28 bg-cloud-neutral">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-16 md:gap-20 max-w-5xl mx-auto">
            <div className="md:col-span-7">
              <ScrollReveal>
                {status === "success" ? (
                  <div className="flex items-start gap-4 bg-emerald-50 border border-emerald-200 rounded p-6">
                    <CheckCircle size={20} className="text-emerald-600 mt-0.5 shrink-0" />
                    <p className="text-emerald-800 text-sm leading-[1.6]">{successMessages[locale] ?? successMessages.de}</p>
                  </div>
                ) : (
                <form className="space-y-10" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-foreground/65 text-[11px] uppercase tracking-[0.18em] mb-3">{t.contact.formName}</label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-background border-b border-input py-3.5 text-foreground text-sm focus:outline-none focus:border-[hsl(var(--gold))] focus:shadow-[0_1px_0_0_hsl(var(--gold))] transition-all duration-200 placeholder:text-foreground/20" />
                  </div>
                  {t.contact.formCompany && (
                    <div>
                      <label className="block text-foreground/65 text-[11px] uppercase tracking-[0.18em] mb-3">{t.contact.formCompany}</label>
                      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full bg-background border-b border-input py-3.5 text-foreground text-sm focus:outline-none focus:border-[hsl(var(--gold))] focus:shadow-[0_1px_0_0_hsl(var(--gold))] transition-all duration-200" />
                    </div>
                  )}
                  <div>
                    <label className="block text-foreground/65 text-[11px] uppercase tracking-[0.18em] mb-3">{t.contact.formEmail}</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-background border-b border-input py-3.5 text-foreground text-sm focus:outline-none focus:border-[hsl(var(--gold))] focus:shadow-[0_1px_0_0_hsl(var(--gold))] transition-all duration-200" />
                  </div>
                  {t.contact.formPhone && (
                    <div>
                      <label className="block text-foreground/65 text-[11px] uppercase tracking-[0.18em] mb-3">{locale === "de" ? "Telefon" : locale === "en" ? "Phone" : locale === "it" ? "Telefono" : locale === "es" ? "Teléfono" : locale === "ja" ? "電話" : locale === "zh" ? "电话" : locale === "ar" ? "هاتف" : "Phone"}</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.contact.formPhone} className="w-full bg-background border-b border-input py-3.5 text-foreground text-sm focus:outline-none focus:border-[hsl(var(--gold))] focus:shadow-[0_1px_0_0_hsl(var(--gold))] transition-all duration-200 placeholder:text-foreground/30" />
                    </div>
                  )}
                  <div>
                    <label className="block text-foreground/65 text-[11px] uppercase tracking-[0.18em] mb-3">{t.contact.formSubject}</label>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-background border-b border-input py-3.5 text-foreground text-sm focus:outline-none focus:border-[hsl(var(--gold))] transition-all duration-200 appearance-none cursor-pointer">
                      {t.contact.subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-foreground/65 text-[11px] uppercase tracking-[0.18em] mb-3">{t.contact.formMessage}</label>
                    <textarea rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-background border-b border-input py-3.5 text-foreground text-sm focus:outline-none focus:border-[hsl(var(--gold))] transition-all duration-200 resize-none" />
                  </div>

                  {status === "error" && (
                    <div className="flex items-start gap-3 text-red-700 text-sm">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <p>{errorMessages[locale] ?? errorMessages.de}</p>
                    </div>
                  )}

                  <button type="submit" disabled={status === "loading"} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-8 py-3.5 hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-[0.97] mt-2 disabled:opacity-60 disabled:pointer-events-none">
                    {status === "loading" && <Loader2 size={14} className="animate-spin" />}
                    {t.contact.formSend}
                  </button>
                </form>
                )}
              </ScrollReveal>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <ScrollReveal delay={150}>
                <div className="md:pt-4">
                  <div className="mb-14">
                    <p className="text-brand-blue text-[11px] uppercase tracking-[0.2em] font-medium mb-7">{t.contact.label}</p>
                    {t.contact.address && (
                      <div className="flex items-start gap-3 text-foreground text-sm mb-5">
                        <MapPin size={14} strokeWidth={1.5} className="text-foreground/40 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">{t.contact.address}</p>
                          {t.contact.addressLines?.map((line) => (
                            <p key={line} className="text-foreground/60">{line}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mb-14 pb-14 border-b border-border">
                    <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-foreground text-sm hover:text-[hsl(var(--brand-blue))] transition-colors duration-200 mb-4">
                      <Phone size={14} strokeWidth={1.5} className="text-foreground/40" />
                      {t.contact.phone}
                    </a>
                    <a href={`mailto:${t.contact.email}`} className="flex items-center gap-3 text-foreground text-sm hover:text-[hsl(var(--brand-blue))] transition-colors duration-200">
                      <Mail size={14} strokeWidth={1.5} className="text-foreground/40" />
                      {t.contact.email}
                    </a>
                  </div>

                  {t.contact.noteHeadline && (
                    <div>
                      <p className="text-foreground text-sm font-medium mb-3">{t.contact.noteHeadline}</p>
                      <p className="text-foreground/70 text-[13px] leading-[1.8]">{t.contact.note}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {t.contact.closingHeadline && (
        <section className="py-24 md:py-32 bg-soft-ivory">
          <div className="container text-center">
            <ScrollReveal>
              <h3 className="text-foreground text-lg md:text-xl font-normal leading-[1.3] tracking-[-0.01em] mb-4">{t.contact.closingHeadline}</h3>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="text-foreground/60 text-sm leading-[1.7] max-w-md mx-auto">{t.contact.closingText}</p>
            </ScrollReveal>
          </div>
        </section>
      )}
    </>
  );
}
