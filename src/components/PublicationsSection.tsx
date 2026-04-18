import { BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

const PublicationsSection = () => {
  const { t } = useTranslation();

  const publications = [
    {
      title: t("publications.items.0.title"),
      year: t("publications.items.0.year"),
      type: t("publications.items.0.type"),
    },
    {
      title: t("publications.items.1.title"),
      year: t("publications.items.1.year"),
      type: t("publications.items.1.type"),
    },
    {
      title: t("publications.items.2.title"),
      year: t("publications.items.2.year"),
      type: t("publications.items.2.type"),
    },
  ];

  return (
    <section id="publications" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("publications.title")}
          </h2>
          <div className="gold-bar mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {publications.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 border border-border card-hover flex gap-5 items-start"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--gold-gradient)" }}
              >
                <BookOpen className="w-5 h-5 text-primary" />
              </div>

              <div>
                <span className="text-xs font-sans font-semibold text-gold">
                  {p.year} — {p.type}
                </span>

                <h4 className="font-serif font-bold text-foreground mt-1 leading-snug">
                  {p.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;