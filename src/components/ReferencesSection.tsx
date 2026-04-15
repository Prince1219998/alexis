import { UserCheck, Mail, Phone } from "lucide-react";

const references = [
  { name: "Honorable Mwisha Kasiwa Janvier", role: "Sénateur de la RDC", email: "mwishakas@yahoo.fr", phone: "+243970775250" },
  { name: "Phil Maanulwa", role: "CEO de l'ONGI Iedarelief", email: "philma@iedarelief.org", phone: "+17134106111" },
];

const ReferencesSection = () => (
  <section id="references" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Références</h2>
        <div className="gold-bar mx-auto" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {references.map((r, i) => (
          <div key={i} className="bg-card rounded-xl p-6 border border-border card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--gold-gradient)" }}>
                <UserCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-foreground">{r.name}</h4>
                <p className="text-sm text-muted-foreground font-sans">{r.role}</p>
              </div>
            </div>
            <div className="space-y-2 font-sans text-sm text-muted-foreground">
              <a href={`mailto:${r.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail className="w-4 h-4" /> {r.email}
              </a>
              <a href={`tel:${r.phone}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" /> {r.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReferencesSection;
