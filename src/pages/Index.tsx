import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default Index;
