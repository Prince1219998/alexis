import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import PublicationsSection from "@/components/PublicationsSection";
import LanguagesSection from "@/components/LanguagesSection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <SkillsSection />
    <ExperienceSection />
    <EducationSection />
    <PublicationsSection />
    <LanguagesSection />
    <ReferencesSection />
    <ContactSection />
    <footer className="bg-primary py-6 text-center">
      <p className="text-primary-foreground/50 font-sans text-sm">
        © {new Date().getFullYear()} Alexis Bahunга — Député Provincial du Nord-Kivu
      </p>
    </footer>
  </div>
);

export default Index;
