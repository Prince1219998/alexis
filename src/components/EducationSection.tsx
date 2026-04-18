import { GraduationCap, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const EducationSection = () => {
  const { t } = useTranslation();

  const education = [
    {
      degree: t("education.items.0.degree"),
      detail: t("education.items.0.detail"),
      school: t("education.items.0.school"),
      period: t("education.items.0.period"),
    },
    {
      degree: t("education.items.1.degree"),
      detail: t("education.items.1.detail"),
      school: t("education.items.1.school"),
      period: t("education.items.1.period"),
    },
    {
      degree: t("education.items.2.degree"),
      detail: t("education.items.2.detail"),
      school: t("education.items.2.school"),
      period: t("education.items.2.period"),
    },
    {
      degree: t("education.items.3.degree"),
      detail: t("education.items.3.detail"),
      school: t("education.items.3.school"),
      period: t("education.items.3.period"),
    },
    {
      degree: t("education.items.4.degree"),
      detail: t("education.items.4.detail"),
      school: t("education.items.4.school"),
      period: t("education.items.4.period"),
    },
    {
      degree: t("education.items.5.degree"),
      detail: t("education.items.5.detail"),
      school: t("education.items.5.school"),
      period: t("education.items.5.period"),
    },
  ];

  const formations = [
    t("education.formations.0"),
    t("education.formations.1"),
    t("education.formations.2"),
    t("education.formations.3"),
    t("education.formations.4"),
    t("education.formations.5"),
    t("education.formations.6"),
    t("education.formations.7"),
    t("education.formations.8"),
    t("education.formations.9"),
    t("education.formations.10"),
  ];

  return (
    <section id="etudes" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("education.title")}
          </h2>
          <div className="gold-bar mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif font-bold text-foreground">
                {t("education.studyTitle")}
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((e, i) => (
                <div key={i} className="bg-card rounded-lg p-5 border border-border card-hover">
                  <span className="text-xs font-sans font-semibold text-gold">
                    {e.period}
                  </span>

                  <h4 className="font-serif font-bold text-foreground mt-1">
                    {e.degree}
                  </h4>

                  {e.detail && (
                    <p className="text-sm text-muted-foreground font-sans">
                      {e.detail}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground font-sans font-medium mt-1">
                    {e.school}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Formations */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif font-bold text-foreground">
                {t("education.otherTitle")}
              </h3>
            </div>

            <p className="text-muted-foreground font-sans text-sm mb-4">
              {t("education.otherDesc")}
            </p>

            <div className="grid gap-3">
              {formations.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-card rounded-lg px-4 py-3 border border-border card-hover"
                >
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
};

export default EducationSection;