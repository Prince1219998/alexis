import { GraduationCap, Award } from "lucide-react";

const education = [
  { degree: "Doctorant en Sciences Politiques et Administratives", detail: "Recherches doctorales sur : 'Gouvernance provinciale et dynamiques locales : regard sur les enjeux institutionnels en provinces du Nord Kivu, Sud Kivu et Ituri'", school: "Université de Kinshasa", period: "2025 - présent" },
  { degree: "Master en Sciences Politiques et Administratives", detail: "Filière de Gouvernance, Défense et Sécurité", school: "Université de Goma", period: "2023-2024" },
  { degree: "Licence en Sciences Politiques et Administratives", detail: "", school: "Université de Goma", period: "2003-2005" },
  { degree: "Graduat en Sciences Politiques et Administratives", detail: "", school: "Université de Goma", period: "2000-2002" },
  { degree: "Diplôme d'État", detail: "Section technique, option commerciale et administratives", school: "Institut Kishondja", period: "1992-1998" },
  { degree: "Certificat d'Études Primaires", detail: "", school: "EP Kilambo", period: "1985-1992" },
];

const formations = [
  "Gestion et règlement des conflits",
  "Gestion et évaluation des projets",
  "Gestion Accès sur le Résultat (GAR)",
  "Gestion d'une administration publique",
  "Gouvernance, contrôle interne et gestion des Crédits d'une Coopérative",
  "Gestion d'une Administration fiscale provinciale",
  "Budget programme",
  "Fiscalité interne et externe : législation fiscale et douanière",
  "Inspection des finances",
  "Officers Security protection country",
  "Finances Publiques",
];

const EducationSection = () => (
  <section id="etudes" className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Formation académique</h2>
        <div className="gold-bar mx-auto" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-gold" />
            <h3 className="text-xl font-serif font-bold text-foreground">Études</h3>
          </div>
          <div className="space-y-4">
            {education.map((e, i) => (
              <div key={i} className="bg-card rounded-lg p-5 border border-border card-hover">
                <span className="text-xs font-sans font-semibold text-gold">{e.period}</span>
                <h4 className="font-serif font-bold text-foreground mt-1">{e.degree}</h4>
                {e.detail && <p className="text-sm text-muted-foreground font-sans">{e.detail}</p>}
                <p className="text-sm text-muted-foreground font-sans font-medium mt-1">{e.school}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other formations */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-gold" />
            <h3 className="text-xl font-serif font-bold text-foreground">Autres Formations</h3>
          </div>
          <p className="text-muted-foreground font-sans text-sm mb-4">En RDC comme à l'étranger, plusieurs formations ont été faites notamment en :</p>
          <div className="grid gap-3">
            {formations.map((f, i) => (
              <div key={i} className="flex items-center gap-3 bg-card rounded-lg px-4 py-3 border border-border card-hover">
                <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <span className="text-sm font-sans text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;