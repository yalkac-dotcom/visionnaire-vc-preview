import { LanguageProvider } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { DomizilSection } from "@/components/DomizilSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ServicesSection />
        <WhyUsSection />
        <DomizilSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default Index;
