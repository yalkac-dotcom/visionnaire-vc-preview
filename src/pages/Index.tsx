import { HeroSection } from "@/components/HeroSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ServicesHomeSection } from "@/components/ServicesHomeSection";
import { IndustriesHomeSection } from "@/components/IndustriesHomeSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { BusinessUnitsHomeSection } from "@/components/BusinessUnitsHomeSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ExpertiseSection />
      <ServicesHomeSection />
      <IndustriesHomeSection />
      <WhyUsSection />
      <BusinessUnitsHomeSection />
      <ContactSection />
    </main>
  );
};

export default Index;
