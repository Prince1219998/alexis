import {
  Shield,
  Landmark,
  BadgeDollarSign,
  Scale,
  Briefcase,
  TrendingUp,
  BookOpen,
  FileText,
  Eye,
  EyeOff,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
  const { t } = useTranslation();

  const skills = [
    {
      icon: Landmark,
      title: t("skills.items.admin.title"),
      desc: t("skills.items.admin.desc"),
    },
    {
      icon: Scale,
      title: t("skills.items.law.title"),
      desc: t("skills.items.law.desc"),
    },
    {
      icon: BadgeDollarSign,
      title: t("skills.items.finance.title"),
      desc: t("skills.items.finance.desc"),
    },
    {
      icon: Shield,
      title: t("skills.items.conflict.title"),
      desc: t("skills.items.conflict.desc"),
    },
  ];

  // Statistiques clés (3 indicateurs)
  const stats = [
    { icon: TrendingUp, value: "15+", label: "Expériences", targetId: "experience" },
    { icon: BookOpen, value: "12+", label: "Formations", targetId: "etudes" },
    { icon: FileText, value: "3+", label: "Publications", targetId: "publications" },
  ];

  const skillsGridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [showCurrentPosition, setShowCurrentPosition] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Fonction de scroll fluide
  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Section #${targetId} non trouvée. Veuillez créer un élément avec cet id.`);
    }
  };

  return (
    <section id="competences" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 tracking-tight">
            {t("skills.title")}
          </h2>
          <div className="gold-bar mx-auto" />
        </div>

        {/* Grille des compétences */}
        <div ref={skillsGridRef} id="skills-grid" className="scroll-mt-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 card-hover text-center border border-border"
              >
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
        </div>

        {/* Position actuelle masquable */}
        <div className="mt-12">
          <button
            onClick={() => setShowCurrentPosition(!showCurrentPosition)}
            className="mx-auto flex items-center gap-2 px-4 py-2 rounded-sm border border-gold/50 text-gold text-sm font-sans font-medium hover:bg-gold hover:text-background transition-colors focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none"
          >
            {showCurrentPosition ? (
              <>
                <EyeOff className="w-4 h-4" />
                {t("skills.current.title")}
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                {t("skills.current.title")}
              </>
            )}
          </button>

          {showCurrentPosition && (
            <div className="mt-6 relative bg-card rounded-xl border border-border overflow-hidden shadow-sm animate-fade-in">
              <span
                aria-hidden
                className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent"
              />
              <span
                aria-hidden
                className="absolute top-0 bottom-0 left-0 w-[3px] bg-gold/70"
              />
              <div className="p-6 md:p-8 md:pl-10">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--gold-gradient)" }}
                  >
                    <Briefcase className="w-5 h-5 text-primary" strokeWidth={2} />
                  </div>
                  <div>

                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
                      {t("skills.current.title")}
                    </h3>
                  </div>
                </div>
                <p className="font-sans font-semibold text-base md:text-lg text-foreground mb-3">
                  {t("skills.current.role")}
                </p>
                <div className="grid sm:grid-cols-3 gap-3 text-sm font-sans">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 mb-0.5">
                      {t("skills.current.constituencyLabel", { defaultValue: "Circonscription" })}
                    </span>
                    <span className="text-foreground">{t("skills.current.constituency")}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 mb-0.5">
                      {t("skills.current.groupLabel", { defaultValue: "Groupe parlementaire" })}
                    </span>
                    <span className="text-foreground">{t("skills.current.group")}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 mb-0.5">
                      {t("skills.current.sinceLabel", { defaultValue: "Depuis" })}
                    </span>
                    <span className="text-foreground">{t("skills.current.since")}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Indicateurs circulaires cliquables - plus de contour */}
        <div ref={statsRef} className="mt-14 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
  {stats.map((stat, idx) => {
    const Icon = stat.icon;
    return (
      <button
        key={idx}
        type="button"
        onClick={() => scrollToSection(stat.targetId)}
        className="appearance-none bg-transparent border-0 p-0 m-0 flex flex-col items-center text-center group transition-all duration-700 ease-out outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none active:ring-0 active:bg-transparent select-none"
        style={{
          opacity: statsVisible ? 1 : 0,
          transform: statsVisible ? "translateY(0)" : "translateY(1.5rem)",
          transitionDelay: statsVisible ? `${idx * 180}ms` : "0ms",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <div className="relative w-20 h-20 md:w-24 md:h-24">
          <div
            className="absolute inset-0 rounded-full p-[2px] transition-transform duration-500 group-hover:scale-105"
            style={{ background: "var(--gold-gradient)" }}
          >
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center shadow-sm transition-shadow duration-300 group-hover:shadow-gold/30">
              <div className="text-center">
                <Icon
                  className="w-4 h-4 md:w-5 md:h-5 text-gold mx-auto mb-0.5 transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.75}
                />
                <span className="block text-lg md:text-xl font-serif font-bold text-foreground leading-none">
                  {stat.value}
                </span>
              </div>
            </div>
          </div>
        </div>

        <span className="mt-3 text-[10px] md:text-xs font-sans uppercase tracking-[0.15em] text-muted-foreground">
          {stat.label}
        </span>
      </button>
    );
  })}
</div>
      </div>
    </section>
  );
};

export default SkillsSection;