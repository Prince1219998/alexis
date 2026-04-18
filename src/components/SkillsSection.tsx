import { Shield, Landmark, BadgeDollarSign, Scale, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

const SkillsSection = () => {
  const { t } = useTranslation();

  const skills = [
    {
      icon: Landmark,
      title: t("skills.items.admin.title"),
      desc: t("skills.items.admin.desc")
    },
    {
      icon: Scale,
      title: t("skills.items.law.title"),
      desc: t("skills.items.law.desc")
    },
    {
      icon: BadgeDollarSign,
      title: t("skills.items.finance.title"),
      desc: t("skills.items.finance.desc")
    },
    {
      icon: Shield,
      title: t("skills.items.conflict.title"),
      desc: t("skills.items.conflict.desc")
    }
  ];

  return (
    <section id="competences" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("skills.title")}
          </h2>
          <div className="gold-bar mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, index) => (
            <div key={index} className="bg-card rounded-xl p-6 card-hover text-center border border-border">
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: "var(--gold-gradient)" }}
              >
                <s.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                {s.title}
              </h3>

              <p className="text-muted-foreground text-sm font-sans">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Current Position */}
        <div className="mt-12 bg-card rounded-xl p-8 border border-gold/30 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-gold" />
            <h3 className="text-2xl font-serif font-bold text-foreground">
              {t("skills.current.title")}
            </h3>
          </div>

          <div className="font-sans space-y-1 text-foreground">
            <p className="font-semibold text-lg">
              {t("skills.current.role")}
            </p>
            <p className="text-muted-foreground">
              {t("skills.current.constituency")}
            </p>
            <p className="text-muted-foreground">
              {t("skills.current.group")}
            </p>
            <p className="text-muted-foreground">
              {t("skills.current.since")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;