import { Building2, Briefcase, ChevronDown, ChevronUp, Plus, Minus, Maximize2, Minimize2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

interface Experience {
  title: string;
  org: string;
  period: string;
  desc: string;
}

const INITIAL_VISIBLE = 3; // Nombre d'expériences visibles au départ (vous pouvez passer à 8)

const TimelineItem = ({
  exp,
  isLast,
  isOpen,
  onToggle,
}: {
  exp: Experience;
  isLast: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative pl-8 pb-10 last:pb-0 group">
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-gold bg-card group-hover:bg-gold transition-colors" />
      {!isLast && <div className="absolute left-[7px] top-5 bottom-0 w-[2px] bg-border" />}
      <div className="bg-card rounded-lg p-5 border border-border card-hover">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <span className="text-xs font-sans font-semibold text-gold tracking-wide">
              {exp.period}
            </span>
            <h4 className="font-serif font-bold text-foreground mt-1">{exp.title}</h4>
            <p className="text-sm text-muted-foreground font-sans font-medium">{exp.org}</p>
          </div>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Masquer les détails" : "Voir les détails"}
            className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full border border-gold text-gold hover:bg-gold hover:text-background transition-colors"
          >
            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>

        <div
          className={`grid transition-all duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  const [expandedList, setExpandedList] = useState(false);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const hiddenCount = Math.max(0, items.length - INITIAL_VISIBLE);
  const visibleItems = expandedList ? items : items.slice(0, INITIAL_VISIBLE);

  const allOpen = useMemo(
    () => visibleItems.length > 0 && visibleItems.every((_, idx) => openItems[idx]),
    [visibleItems, openItems]
  );

  const toggleAll = () => {
    if (allOpen) {
      setOpenItems({});
    } else {
      const newState: Record<number, boolean> = {};
      visibleItems.forEach((_, idx) => (newState[idx] = true));
      setOpenItems(newState);
    }
  };

  const toggleOne = (idx: number) => {
    setOpenItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div>
      {/* En-tête de colonne : plus aucun badge circulaire */}
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-gold" />
        <h3 className="text-xl font-serif font-bold text-foreground">{title}</h3>
      </div>

      {/* Bouton Tout déplier / Tout replier (si au moins un élément visible) */}
      {visibleItems.length > 0 && (
        <div className="mb-5 flex justify-end">
          <button
            type="button"
            onClick={toggleAll}
            aria-pressed={allOpen}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/60 text-gold text-xs font-sans font-semibold tracking-wide hover:bg-gold hover:text-background transition-colors"
          >
            {allOpen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5" />
                {t("experience.collapseAll", "")}
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" />
                {t("experience.expandAll", "")}
              </>
            )}
          </button>
        </div>
      )}

      {/* Liste des expériences */}
      <div className="relative">
        {visibleItems.map((exp, idx) => (
          <TimelineItem
            key={idx}
            exp={exp}
            isLast={idx === visibleItems.length - 1 && !expandedList && hiddenCount === 0}
            isOpen={!!openItems[idx]}
            onToggle={() => toggleOne(idx)}
          />
        ))}

        {/* Dégradé visuel quand des expériences sont masquées */}
        {!expandedList && hiddenCount > 0 && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/90 to-transparent" />
        )}
      </div>

      {/* Bouton Voir plus / Voir moins avec le nombre d'éléments masqués */}
      {hiddenCount > 0 && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setExpandedList((prev) => !prev)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold text-gold text-sm font-sans font-semibold hover:bg-gold hover:text-background transition-colors"
          >
            {expandedList ? (
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
    title: t(`experience.public.items.${i}.title`, `Expérience publique ${i + 1}`),
    org: t(`experience.public.items.${i}.org`, `Organisation ${i + 1}`),
    period: t(`experience.public.items.${i}.period`, `Période ${i + 1}`),
    desc: t(`experience.public.items.${i}.desc`, `Description détaillée de l'expérience ${i + 1}.`),
  }));

  const privateExp: Experience[] = Array.from({ length: 4 }, (_, i) => ({
    title: t(`experience.private.items.${i}.title`, `Mission privée ${i + 1}`),
    org: t(`experience.private.items.${i}.org`, `Client confidentiel`),
    period: t(`experience.private.items.${i}.period`, `Période ${i + 1}`),
    desc: t(`experience.private.items.${i}.desc`, `Description de la mission privée ${i + 1}.`),
  }));

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("experience.title", "Expérience")}
          </h2>
          <div className="gold-bar mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ExperienceColumn
            icon={Building2}
            title={t("experience.public.title", "Expériences publiques")}
            items={publicExp}
          />
          <ExperienceColumn
            icon={Briefcase}
            title={t("experience.private.title", "Expériences privées")}
            items={privateExp}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;