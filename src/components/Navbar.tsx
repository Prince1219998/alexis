import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Compétences", href: "#competences" },
  { label: "Expérience", href: "#experience" },
  { label: "Études", href: "#etudes" },
  { label: "Publications", href: "#publications" },
  { label: "Langues", href: "#langues" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-serif font-bold text-primary-foreground text-lg">
          A. <span className="text-gradient-gold">Bahungа</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary/98 border-t border-primary-foreground/10 px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
