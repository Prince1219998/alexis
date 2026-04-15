import { BookOpen } from "lucide-react";

const publications = [
  { title: "Gouvernance locale à l'épreuve du démembrement de la Province du Nord-Kivu : enjeux, risques et défis", year: "2024", type: "Mémoire de Master" },
  { title: "La problématique de l'implantation des partis politiques dans la ville de Goma", year: "2005", type: "Mémoire de licence" },
  { title: "La problématique de la gestion du Pouvoir coutumier dans la collectivité chefferie des Bashali en Territoire de Masisi", year: "2002", type: "Travail de fin de cycle" },
];

const PublicationsSection = () => (
  <section id="publications" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Publications</h2>
        <div className="gold-bar mx-auto" />
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {publications.map((p, i) => (
          <div key={i} className="bg-card rounded-xl p-6 border border-border card-hover flex gap-5 items-start">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--gold-gradient)" }}>
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs font-sans font-semibold text-gold">{p.year} — {p.type}</span>
              <h4 className="font-serif font-bold text-foreground mt-1 leading-snug">{p.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PublicationsSection;
