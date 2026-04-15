import { Shield, Landmark, BadgeDollarSign, Scale, Briefcase } from "lucide-react";

const skills = [
  { icon: Landmark, title: "Administration Publique", desc: "Gestion des administrations fiscales, finances publiques" },
  { icon: Scale, title: "Législation", desc: "Député Provincial, expertise en contrôle budgétaire" },
  { icon: BadgeDollarSign, title: "Gestion Financière", desc: "Expérience dans les institutions financières et coopératives" },
  { icon: Shield, title: "Gestion des Conflits", desc: "Formation en gouvernance, défense et sécurité" },
];

const SkillsSection = () => (
  <section id="competences" className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Compétences</h2>
        <div className="gold-bar mx-auto" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((s) => (
          <div key={s.title} className="bg-card rounded-xl p-6 card-hover text-center border border-border">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: "var(--gold-gradient)" }}>
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm font-sans">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Current Position */}
      <div className="mt-12 bg-card rounded-xl p-8 border border-gold/30 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="w-6 h-6 text-gold" />
          <h3 className="text-2xl font-serif font-bold text-foreground">Poste Actuel</h3>
        </div>
        <div className="font-sans space-y-1 text-foreground">
          <p className="font-semibold text-lg">Député Provincial du Nord-Kivu</p>
          <p className="text-muted-foreground">Élu de la Circonscription électorale du Territoire de Masisi</p>
          <p className="text-muted-foreground">Président du Groupe Parlementaire UDPS/TSHISEKEDI</p>
          <p className="text-muted-foreground">Assemblée Provinciale du Nord-Kivu — Depuis Janvier 2019</p>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
