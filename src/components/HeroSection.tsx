import profileImg from "@/assets/profile-placeholder.jpg";
import { Mail, Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-8 md:py-16 flex items-center" style={{ background: "var(--hero-gradient)" }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-gold/30" />
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full border border-gold/20" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0 mt-20 md:mt-0">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gold/40 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Alexis Bahungа - Député Provincial"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
             <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "var(--gold-gradient)" }}>
  <span className="text-primary text-center leading-tight font-serif font-black text-xl tracking-wider">ABM</span>
</div>
            </div>
          </div>

          {/* Info */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-gold font-sans font-semibold tracking-widest uppercase text-sm mb-3">
              Député Provincial du Nord-Kivu
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              Alexis <span className="text-gradient-gold">Bahunga</span>
            </h1>
            <p className="text-sm md:text-base text-primary-foreground/80 font-sans leading-relaxed mb-6 text-justify">
              Je suis politologue de formation ; doctorant à l’Université de Kinshasa en Sciences Politiques et Administratives, et détenteur d’un Master en Gouvernance, Défense et Sécurité de l’Université de Goma, accompagné de plusieurs autres formations.
Ceci a permis mon ouverture dans plusieurs autres domaines tels que les finances publiques, les institutions financières, le droit fiscal, la logistique et la sécurité. 
J’ai une vaste expérience de 19 ans de travail dans le domaine public que privé notamment en matière de gestion des administrations fiscales, finances publiques et d’administration publique, des institutions financières, de gestion des conflits et de gouvernance des organisations non gouvernementales. 
Grace aux études de gouvernance, défense et sécurité, l’appréhension rapide du contexte sécuritaire est aussi de mon apanage.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-primary-foreground/70 font-sans text-sm">
              <a href="mailto:alexisbanhunga@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail className="w-4 h-4" /> alexisbanhunga@gmail.com
              </a>
              <a href="tel:+243814163471" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" /> +243 995 000 064
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Goma, Nord-Kivu, RDC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;