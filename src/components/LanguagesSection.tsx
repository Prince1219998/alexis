import { Globe } from "lucide-react";

const languages = ["Français", "Anglais", "Lingala", "Swahili", "Autres langues locales"];

const LanguagesSection = () => (
  <section id="langues" className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Langues parlées</h2>
        <div className="gold-bar mx-auto" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {languages.map((lang) => (
          <div
            key={lang}
            className="bg-card border border-border rounded-xl p-6 flex flex-col items-center gap-3 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <span className="font-sans font-semibold text-foreground text-sm">{lang}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LanguagesSection;