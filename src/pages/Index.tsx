import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import PublicationsSection from "@/components/PublicationsSection";
import LanguagesSection from "@/components/LanguagesSection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";
import ScrollButton from "@/components/ScrollToTop";
import Reveal from "@/components/Reveal";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  const lastHiddenTime = useRef<number | null>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        lastHiddenTime.current = Date.now();
      }

      if (document.visibilityState === "visible") {
        if (
          lastHiddenTime.current &&
          Date.now() - lastHiddenTime.current > 5 * 60 * 1000
        ) {
          window.location.reload();
        }
      }
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Reveal>
          <HeroSection />
        </Reveal>

        <Reveal>
          <SkillsSection />
        </Reveal>

        <Reveal>
          <ExperienceSection />
        </Reveal>

        <Reveal>
          <EducationSection />
        </Reveal>

        <Reveal>
          <PublicationsSection />
        </Reveal>

        <Reveal>
          <LanguagesSection />
        </Reveal>

        <Reveal>
          <ReferencesSection />
        </Reveal>

        <Reveal>
          <ContactSection />
        </Reveal>

        <footer className="bg-primary py-6 text-center">
          <p className="text-primary-foreground/50 font-sans text-sm">
            © {new Date().getFullYear()} Alexis Bahungа — {t("footer.title")}
          </p>
        </footer>
      </main>

      <ScrollButton />
    </div>
  );
};

export default Index;