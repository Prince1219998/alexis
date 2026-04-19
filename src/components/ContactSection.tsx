import { Send } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "Alexis-bahunga-Bio";
const EMAILJS_TEMPLATE_ID = "template_xaei1hs";
const EMAILJS_PUBLIC_KEY = "Ps4lVurXwRGXElNW9";

interface SocialLink {
  icon: typeof FaWhatsapp;
  label: string;
  href: string;
  hoverColor: string;
}

const socials: SocialLink[] = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/243995000064",
    hoverColor: "hover:text-[#25D366]",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href : "https://www.linkedin.com/in/alexis-bahunga",
    hoverColor: "hover:text-[#0A66C2]",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
     href : "https://www.facebook.com/alexis.bahunga",
    hoverColor: "hover:text-[#1877F2]",
  },
];

const ContactSection = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback(null);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY,
      );
      setFeedback({
        type: "success",
        message: t("contact.success", {
          defaultValue: "Message envoyé ! Je vous répondrai rapidement.",
        }),
      });
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setFeedback({
        type: "error",
        message: t("contact.error", {
          defaultValue:
            "Erreur d'envoi. Veuillez réessayer ou utiliser un autre moyen de contact.",
        }),
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-section-alt">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 tracking-tight">
            {t("contact.title")}
          </h2>
          <div className="gold-bar mx-auto" />
          <p className="text-muted-foreground font-sans text-sm md:text-base mt-5 max-w-xl mx-auto leading-relaxed">
            {t("contact.subtitle", {
              defaultValue:
                "Une question, une opportunité ou simplement envie d'échanger ? Écrivez-moi.",
            })}
          </p>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 relative overflow-hidden">
          <span
            aria-hidden
            className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent"
          />

          <h3 className="text-lg md:text-xl font-serif font-bold text-foreground tracking-tight mb-5 text-center">
            {t("contact.formTitle", {
              defaultValue: "Envoyez-nous un message",
            })}
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
            <div className="grid md:grid-cols-2 gap-3">
              <input
                type="text"
                name="user_name"
                required
                aria-label={t("contact.name", { defaultValue: "Nom" })}
                className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm text-foreground font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-colors"
                placeholder={t("contact.name", { defaultValue: "Nom" }) + " *"}
              />
              <input
                type="email"
                name="user_email"
                required
                aria-label={t("contact.email", { defaultValue: "Email" })}
                className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm text-foreground font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-colors"
                placeholder="email@exemple.com *"
              />
            </div>

            <textarea
              name="message"
              required
              rows={5}
              aria-label={t("contact.message", { defaultValue: "Message" })}
              className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm text-foreground font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-colors resize-none"
              placeholder={t("contact.messagePlaceholder", {
                defaultValue: "Votre message... *",
              })}
            />

            <button
              type="submit"
              disabled={isSending}
              className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-background font-sans font-semibold text-sm tracking-wider uppercase py-2.5 px-4 rounded-md transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              {isSending ? (
                <span className="animate-pulse">
                  {t("contact.sending", { defaultValue: "Envoi..." })}
                </span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t("contact.send", { defaultValue: "Envoyer" })}
                </>
              )}
            </button>

            {feedback && (
              <div
                role="status"
                className={`text-center text-xs font-sans py-2 px-3 rounded-md border ${
                  feedback.type === "success"
                    ? "bg-gold/10 border-gold/40 text-foreground"
                    : "bg-destructive/10 border-destructive/40 text-destructive"
                }`}
              >
                {feedback.message}
              </div>
            )}
          </form>
        </div>

        {/* Socials - icônes compactes sans contour */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <span className="text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground">
            {t("contact.followMe", { defaultValue: "Suivez-nous" })}
          </span>
          <div className="flex items-center gap-6">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className={`text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 ${s.hoverColor}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;