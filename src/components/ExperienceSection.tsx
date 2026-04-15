import { Building2, Briefcase } from "lucide-react";

interface Experience {
  title: string;
  org: string;
  period: string;
  desc: string;
}

const publicExp: Experience[] = [
  { title: "Député Provincial du Nord-Kivu", org: "Assemblée Provinciale du Nord-Kivu", period: "Janvier 2019 - Présent", desc: "Représenter toute la population du territoire de Masisi à l'assemblée provinciale, légiférer dans les matières de la compétence provinciale, contrôler l'exécutif provincial et mener des démarches du couloir aux fins de régler certaines questions de la population." },
  { title: "Président du Groupe Parlementaire UDPS/TSHISEKEDI", org: "Assemblée Provinciale du Nord-Kivu", period: "Mars 2024 - Présent", desc: "Cordonner, conduire et orienter la dynamique politique des députés provinciaux du parti dans les institutions politiques de la province." },
  { title: "Rapporteur de la commission ECOFIN", org: "Assemblée Provinciale du Nord-Kivu", period: "2019 - Février 2024", desc: "Préparer la feuille de route de la commission, contrôler la gestion et l'affectation des ressources de la province notamment les finances, les matériels et le personnel, préparer et faire le suivi des budgets des institutions provinciales." },
  { title: "Inspecteur des finances et chef de division", org: "DGR-NK", period: "Janvier 2018 - Janvier 2019", desc: "Préparer les missions d'inspection ou de contrôle à mener auprès des assujettis et initier des missions d'audit de service, faire le recoupement, préparer la note technique à soumettre au Directeur Général." },
  { title: "Inspecteur des finances et chef de division", org: "DGR-NK", period: "Avril 2014 - Février 2017", desc: "Préparer les missions d'inspection ou de contrôle à mener auprès des assujettis et initier des missions d'audit de service." },
  { title: "Chef de Centre Opérationnel des Recettes", org: "DGR-NK", period: "Janvier 2011 - Mars 2014", desc: "Cordonner et gérer les ressources humaines, matérielles et financières du centre des recettes, préparer le plan stratégique et opérationnel du centre des recettes en vue de mobiliser les recettes." },
  { title: "Chef de Bureau recouvrement", org: "DGR-NK", period: "Octobre 2009 - Décembre 2010", desc: "Faire le suivi des assujettis ou des redevables, identifier les défaillants, les mettre en demeure et en avis de mise en recouvrement." },
  { title: "Inspecteur des finances", org: "Brigade Provinciale des Finances du Nord Kivu", period: "2008 - Octobre 2009", desc: "Mener des missions d'inspection et de contrôle financier." },
  { title: "Président des étudiants de l'UNIGOM", org: "Université de Goma", period: "2004", desc: "Cordonner les activités des étudiants et être leur porte-parole auprès des autorités académiques." },
  { title: "Président des étudiants - Faculté Sc. Politiques", org: "Université de Goma", period: "2002-2003", desc: "Cordonner les activités des étudiants de la faculté et être leur porte-parole auprès du doyen." },
];

const privateExp: Experience[] = [
  { title: "Président du Conseil d'Administration (PCA)", org: "COOPEC IMARA GOMA", period: "Mars 2013 - Février 2019", desc: "Mener la politique générale de la coopérative, représenter la coopérative et ses membres auprès de tiers, préparer les assemblées générales et recruter le directeur ou gérant de la coopérative." },
  { title: "Administrateur", org: "IEDA Relief en RD Congo", period: "Janvier 2017 - Juillet 2017", desc: "Représenter l'organisation auprès de tiers, administrer et gérer les ressources humaines, matérielles et financières de l'organisation, veiller au respect des normes humanitaires." },
  { title: "Assistant d'enseignement supérieur", org: "ISAD Walikale", period: "2009 - 2015", desc: "Préparer la matière à enseigner selon la charge horaire, faire de recherche pour actualiser le cours, dispenser cours et faire des évaluations." },
  { title: "Coordonnateur", org: "ONG APEDI", period: "2003 - Fin 2004", desc: "Représenter l'organisation auprès des partenaires, cordonner les activités, faire une planification stratégique et opérationnelle, élaborer le budget et faire le suivi de son exécution." },
];

const TimelineItem = ({ exp, index }: { exp: Experience; index: number }) => (
  <div className="relative pl-8 pb-10 last:pb-0 group">
    <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-gold bg-card group-hover:bg-gold transition-colors" />
    <div className="absolute left-[7px] top-5 bottom-0 w-[2px] bg-border last:hidden" />
    <div className="bg-card rounded-lg p-5 border border-border card-hover">
      <span className="text-xs font-sans font-semibold text-gold tracking-wide">{exp.period}</span>
      <h4 className="font-serif font-bold text-foreground mt-1">{exp.title}</h4>
      <p className="text-sm text-muted-foreground font-sans font-medium">{exp.org}</p>
      <p className="text-sm text-muted-foreground font-sans mt-2 leading-relaxed">{exp.desc}</p>
    </div>
  </div>
);

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Expériences professionnelles</h2>
        <div className="gold-bar mx-auto" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-6 h-6 text-gold" />
            <h3 className="text-xl font-serif font-bold text-foreground">Institutions publiques</h3>
          </div>
          {publicExp.map((e, i) => <TimelineItem key={i} exp={e} index={i} />)}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-gold" />
            <h3 className="text-xl font-serif font-bold text-foreground">Institutions privées</h3>
          </div>
          {privateExp.map((e, i) => <TimelineItem key={i} exp={e} index={i} />)}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
