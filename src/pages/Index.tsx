import { HeroSection } from "@/components/HeroSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ServicesSection } from "@/components/ServicesSection";
import { IndustriesHomeSection } from "@/components/IndustriesHomeSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { BusinessUnitsHomeSection } from "@/components/BusinessUnitsHomeSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ExpertiseSection />
      <ServicesSection />
      <IndustriesHomeSection />
      <WhyUsSection />
      <BusinessUnitsHomeSection />
      <ContactSection />
    </main>
  );
};

export default Index;
