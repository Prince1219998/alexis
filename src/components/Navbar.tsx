import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { label: t("navbar.skills"), href: "#competences" },
    { label: t("navbar.experience"), href: "#experience" },
    { label: t("navbar.education"), href: "#etudes" },
    { label: t("navbar.publications"), href: "#publications" },
    { label: t("navbar.languages"), href: "#langues" },
    { label: t("navbar.contact"), href: "#contact" },
  ];

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-serif font-bold text-primary-foreground text-lg">
          A. <span className="text-gradient-gold">Bahungа</span>
        </a>

        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={toggleLanguage}
            className="text-sm font-sans px-3 py-1 rounded border border-primary-foreground/20 text-primary-foreground/70 hover:text-gold hover:border-gold transition-colors"
          >
            {i18n.language === "fr" ? "EN" : "FR"}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="text-xs font-sans px-2 py-1 rounded border border-primary-foreground/20 text-primary-foreground/70 hover:text-gold hover:border-gold transition-colors"
          >
            {i18n.language === "fr" ? "EN" : "FR"}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-primary-foreground"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-primary/98 border-t border-primary-foreground/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;