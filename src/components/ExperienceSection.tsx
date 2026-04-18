import { Building2, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Experience {
  title: string;
  org: string;
  period: string;
  desc: string;
}

const TimelineItem = ({ exp }: { exp: Experience }) => (
  <div className="relative pl-8 pb-10 last:pb-0 group">
    <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-gold bg-card group-hover:bg-gold transition-colors" />
    <div className="absolute left-[7px] top-5 bottom-0 w-[2px] bg-border last:hidden" />
    <div className="bg-card rounded-lg p-5 border border-border card-hover">
      <span className="text-xs font-sans font-semibold text-gold tracking-wide">
        {exp.period}
      </span>
      <h4 className="font-serif font-bold text-foreground mt-1">{exp.title}</h4>
      <p className="text-sm text-muted-foreground font-sans font-medium">
        {exp.org}
      </p>
      <p className="text-sm text-muted-foreground font-sans mt-2 leading-relaxed">
        {exp.desc}
      </p>
    </div>
  </div>
);

const ExperienceSection = () => {
  const { t } = useTranslation();

  const publicExp: Experience[] = [
    {
      title: t("experience.public.items.0.title"),
      org: t("experience.public.items.0.org"),
      period: t("experience.public.items.0.period"),
      desc: t("experience.public.items.0.desc"),
    },
    {
      title: t("experience.public.items.1.title"),
      org: t("experience.public.items.1.org"),
      period: t("experience.public.items.1.period"),
      desc: t("experience.public.items.1.desc"),
    },
    {
      title: t("experience.public.items.2.title"),
      org: t("experience.public.items.2.org"),
      period: t("experience.public.items.2.period"),
      desc: t("experience.public.items.2.desc"),
    },
    {
      title: t("experience.public.items.3.title"),
      org: t("experience.public.items.3.org"),
      period: t("experience.public.items.3.period"),
      desc: t("experience.public.items.3.desc"),
    },
    {
      title: t("experience.public.items.4.title"),
      org: t("experience.public.items.4.org"),
      period: t("experience.public.items.4.period"),
      desc: t("experience.public.items.4.desc"),
    },
    {
      title: t("experience.public.items.5.title"),
      org: t("experience.public.items.5.org"),
      period: t("experience.public.items.5.period"),
      desc: t("experience.public.items.5.desc"),
    },
    {
      title: t("experience.public.items.6.title"),
      org: t("experience.public.items.6.org"),
      period: t("experience.public.items.6.period"),
      desc: t("experience.public.items.6.desc"),
    },
    {
      title: t("experience.public.items.7.title"),
      org: t("experience.public.items.7.org"),
      period: t("experience.public.items.7.period"),
      desc: t("experience.public.items.7.desc"),
    },
    {
      title: t("experience.public.items.8.title"),
      org: t("experience.public.items.8.org"),
      period: t("experience.public.items.8.period"),
      desc: t("experience.public.items.8.desc"),
    },
    {
      title: t("experience.public.items.9.title"),
      org: t("experience.public.items.9.org"),
      period: t("experience.public.items.9.period"),
      desc: t("experience.public.items.9.desc"),
    },
  ];

  const privateExp: Experience[] = [
    {
      title: t("experience.private.items.0.title"),
      org: t("experience.private.items.0.org"),
      period: t("experience.private.items.0.period"),
      desc: t("experience.private.items.0.desc"),
    },
    {
      title: t("experience.private.items.1.title"),
      org: t("experience.private.items.1.org"),
      period: t("experience.private.items.1.period"),
      desc: t("experience.private.items.1.desc"),
    },
    {
      title: t("experience.private.items.2.title"),
      org: t("experience.private.items.2.org"),
      period: t("experience.private.items.2.period"),
      desc: t("experience.private.items.2.desc"),
    },
    {
      title: t("experience.private.items.3.title"),
      org: t("experience.private.items.3.org"),
      period: t("experience.private.items.3.period"),
      desc: t("experience.private.items.3.desc"),
    },
  ];

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
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif font-bold text-foreground">
                {t("experience.public.title")}
              </h3>
            </div>
            {publicExp.map((e, i) => (
              <TimelineItem key={i} exp={e} />
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif font-bold text-foreground">
                {t("experience.private.title")}
              </h3>
            </div>
            {privateExp.map((e, i) => (
              <TimelineItem key={i} exp={e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;