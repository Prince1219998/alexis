import { Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      icon: Mail,
      label: t("contact.items.email"),
      value: "alexisbanhunga@gmail.com",
      href: "mailto:alexisbanhunga@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.items.phone"),
      value: "+243 995 000 064",
      href: "tel:+243995000064",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-4"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
          {t("contact.title")}
        </h2>
        <div className="gold-bar mx-auto mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              className="bg-primary-foreground/10 backdrop-blur rounded-xl p-5 border border-primary-foreground/10 hover:border-gold/50 transition-colors block"
            >
              <c.icon className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="text-xs text-primary-foreground/60 font-sans mb-1">
                {c.label}
              </p>
              <p className="text-sm text-primary-foreground font-sans font-medium">
                {c.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <p className="text-primary-foreground/80 font-sans text-sm mb-4">
            {t("contact.socialText")}
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/243995000064"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 backdrop-blur rounded-lg px-5 py-3 border border-primary-foreground/10 hover:border-gold/50 transition-colors flex items-center gap-3"
            >
              <FaWhatsapp className="w-5 h-5 text-green-400" />
              <span className="text-sm text-primary-foreground font-sans">
                WhatsApp
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/alexis-bahunga"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 backdrop-blur rounded-lg px-5 py-3 border border-primary-foreground/10 hover:border-gold/50 transition-colors flex items-center gap-3"
            >
              <FaLinkedin className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-primary-foreground font-sans">
                LinkedIn
              </span>
            </a>

            <a
              href="https://www.facebook.com/alexis.bahunga"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 backdrop-blur rounded-lg px-5 py-3 border border-primary-foreground/10 hover:border-gold/50 transition-colors flex items-center gap-3"
            >
              <FaFacebook className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-primary-foreground font-sans">
                Facebook
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;