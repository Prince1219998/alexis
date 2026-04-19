import { GraduationCap, Award, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface EducationItem {
  degree: string;
  detail: string;
  school: string;
  period: string;
}

const INITIAL_EDU = 3;
const INITIAL_FORM = 5;

// SectionHeader sans badge (conforme à la demande)
const SectionHeader = ({
  icon: Icon,
  title,
}: {
  icon: typeof GraduationCap;
  title: string;
}) => (
  <div className="flex items-end justify-between gap-3 mb-6 pb-3 border-b border-border">
    <div className="flex items-center gap-3">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gold/10 border border-gold/30">
        <Icon className="w-5 h-5 text-gold" />
      </span>
      <h3 className="text-lg md:text-xl font-serif font-bold text-foreground tracking-tight">
        {title}
      </h3>
    </div>
  </div>
);

// ToggleButton avec le style exact de ExperienceSection
const ToggleButton = ({
  expanded,
  hidden,
  onClick,
  t,
}: {
  expanded: boolean;
  hidden: number;
  onClick: () => void;
  t: ReturnType<typeof useTranslation>["t"];
}) => (
  <div className="mt-6 flex justify-center">
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold text-gold text-sm font-sans font-semibold hover:bg-gold hover:text-background transition-colors"
    >
      {expanded ? (
    <>
      {t("experience.showLess", { defaultValue: "Voir moins" })}
      <ChevronUp className="w-4 h-4" />
    </>
  ) : (
    <>
      {t("experience.showMore", { defaultValue: "Voir plus" })} ({hidden})
      <ChevronDown className="w-4 h-4" />
    </>
  )}
    </button>
  </div>
);

const EducationSection = () => {
  const { t } = useTranslation();
  const [eduExpanded, setEduExpanded] = useState(false);
  const [formExpanded, setFormExpanded] = useState(false);

  const education: EducationItem[] = Array.from({ length: 6 }, (_, i) => ({
    degree: t(`education.items.${i}.degree`),
    detail: t(`education.items.${i}.detail`),
    school: t(`education.items.${i}.school`),
    period: t(`education.items.${i}.period`),
  }));

  const formations: string[] = Array.from({ length: 11 }, (_, i) =>
    t(`education.formations.${i}`),
  );

  const eduHidden = Math.max(0, education.length - INITIAL_EDU);
  const formHidden = Math.max(0, formations.length - INITIAL_FORM);
  const visibleEdu = eduExpanded ? education : education.slice(0, INITIAL_EDU);
  const visibleForm = formExpanded ? formations : formations.slice(0, INITIAL_FORM);

  return (
    <section id="etudes" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 tracking-tight">
            {t("education.title")}
          </h2>
          <div className="gold-bar mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Colonne Études / Diplômes */}
          <div>
            <SectionHeader
              icon={GraduationCap}
              title={t("education.studyTitle")}
            />

            <div className="relative">
              <div className="space-y-4">
                {visibleEdu.map((e, i) => (
                  <article
                    key={i}
                    className="group relative bg-card rounded-lg p-5 border border-border card-hover overflow-hidden"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold/40 group-hover:bg-gold transition-colors"
                    />
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <span className="text-[11px] font-sans font-bold text-gold tracking-[0.15em] uppercase">
                        {e.period}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-foreground leading-snug">
                      {e.degree}
                    </h4>
                    {e.detail && (
                      <p className="text-sm text-muted-foreground font-sans mt-1 leading-relaxed">
                        {e.detail}
                      </p>
                    )}
                    <p className="text-sm text-foreground/70 font-sans font-medium mt-2 italic">
                      {e.school}
                    </p>
                  </article>
                ))}
              </div>

              {!eduExpanded && eduHidden > 0 && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-section-alt via-section-alt/80 to-transparent" />
              )}
            </div>

            {eduHidden > 0 && (
              <ToggleButton
                expanded={eduExpanded}
                hidden={eduHidden}
                onClick={() => setEduExpanded((v) => !v)}
                t={t}
              />
            )}
          </div>

          {/* Colonne Formations complémentaires */}
          <div>
            <SectionHeader
              icon={Award}
              title={t("education.otherTitle")}
            />

            <p className="text-muted-foreground font-sans text-sm mb-5 leading-relaxed">
              {t("education.otherDesc")}
            </p>

            <div className="relative">
              <ul className="grid gap-2.5">
                {visibleForm.map((f, i) => (
                  <li
                    key={i}
                    className="group flex items-center gap-3 bg-card rounded-md px-4 py-3 border border-border hover:border-gold/50 transition-colors"
                  >
                    <span
                      aria-hidden
                      className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold/60 group-hover:bg-gold group-hover:scale-125 transition-all"
                    />
                    <span className="text-sm font-sans text-foreground/90 leading-snug">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {!formExpanded && formHidden > 0 && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-section-alt via-section-alt/80 to-transparent" />
              )}
            </div>

            {formHidden > 0 && (
              <ToggleButton
                expanded={formExpanded}
                hidden={formHidden}
                onClick={() => setFormExpanded((v) => !v)}
                t={t}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;