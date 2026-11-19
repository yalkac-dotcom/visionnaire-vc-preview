import { HeroSection } from "@/components/HeroSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ServicesHomeSection } from "@/components/ServicesHomeSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <main>
      <SEOHead />
      <HeroSection />
      <ExpertiseSection />
      <ServicesHomeSection />
      <WhyUsSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
};

export default Index;
