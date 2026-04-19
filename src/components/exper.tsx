import { Building2, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Experience {
  title: string;
  org: string;
  period: string;
  desc: string;
}

const INITIAL_VISIBLE = 3;

const TimelineItem = ({ exp, isLast }: { exp: Experience; isLast: boolean }) => (
  <div className="relative pl-8 pb-10 last:pb-0 group">
    <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-gold bg-card group-hover:bg-gold transition-colors" />
    {!isLast && <div className="absolute left-[7px] top-5 bottom-0 w-[2px] bg-border" />}
    <div className="bg-card rounded-lg p-5 border border-border card-hover">
      <span className="text-xs font-sans font-semibold text-gold tracking-wide">
        {exp.period}
      </span>
      <h4 className="font-serif font-bold text-foreground mt-1">{exp.title}</h4>
      <p className="text-sm text-muted-foreground font-sans font-medium">{exp.org}</p>
      <p className="text-sm text-muted-foreground font-sans mt-2 leading-relaxed">
        {exp.desc}
      </p>
    </div>
  </div>
);

const ExperienceColumn = ({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Building2;
  title: string;
  items: Experience[];
}) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = Math.max(0, items.length - INITIAL_VISIBLE);
  const visible = expanded ? items : items.slice(0, INITIAL_VISIBLE);

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Icon className="w-6 h-6 text-gold" />
        <h3 className="text-xl font-serif font-bold text-foreground">{title}</h3>
        {hiddenCount > 0 && !expanded && (
          <span
            className="ml-auto inline-flex items-center justify-center min-w-9 h-9 px-2 rounded-full bg-gold/10 border border-gold text-gold text-sm font-sans font-bold tracking-wide"
            aria-label={`${hiddenCount} ${t("experience.more", { defaultValue: "more" })}`}
          >
            +{hiddenCount}
          </span>
        )}
      </div>

      <div className="relative">
        {visible.map((e, i) => (
          <TimelineItem key={i} exp={e} isLast={i === visible.length - 1 && !expanded && hiddenCount === 0} />
        ))}

        {!expanded && hiddenCount > 0 && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
        )}
      </div>

      {hiddenCount > 0 && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold text-gold text-sm font-sans font-semibold hover:bg-gold hover:text-background transition-colors"
          >
            {expanded ? (
              <>
                {t("experience.showLess", { defaultValue: "Voir moins" })}
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                {t("experience.showMore", { defaultValue: "Voir plus" })} ({hiddenCount})
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

const ExperienceSection = () => {
  const { t } = useTranslation();

  const publicExp: Experience[] = Array.from({ length: 10 }, (_, i) => ({
    title: t(`experience.public.items.${i}.title`),
    org: t(`experience.public.items.${i}.org`),
    period: t(`experience.public.items.${i}.period`),
    desc: t(`experience.public.items.${i}.desc`),
  }));

  const privateExp: Experience[] = Array.from({ length: 4 }, (_, i) => ({
    title: t(`experience.private.items.${i}.title`),
    org: t(`experience.private.items.${i}.org`),
    period: t(`experience.private.items.${i}.period`),
    desc: t(`experience.private.items.${i}.desc`),
  }));

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("experience.title")}
          </h2>
          <div className="gold-bar mx-auto" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <ExperienceColumn
            icon={Building2}
            title={t("experience.public.title")}
            items={publicExp}
          />
          <ExperienceColumn
            icon={Briefcase}
            title={t("experience.private.title")}
            items={privateExp}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;