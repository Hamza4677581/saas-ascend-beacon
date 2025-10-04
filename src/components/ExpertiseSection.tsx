import salesAssistLogo from "@/assets/logos/salesassist.png";
import rstechLogo from "@/assets/logos/rstech.png";
import taloflowLogo from "@/assets/logos/taloflow.png";
import cloudflowLogo from "@/assets/logos/cloudflow.png";
import datasyncLogo from "@/assets/logos/datasync.png";
import secureguardLogo from "@/assets/logos/secureguard.png";
import workflowLogo from "@/assets/logos/workflow.png";
import insightiqLogo from "@/assets/logos/insightiq.png";

const ExpertiseSection = () => {
  const portfolioCompanies = [
    { name: "SalesAssist", logo: salesAssistLogo },
    { name: "RS Tech Studio", logo: rstechLogo },
    { name: "Taloflow", logo: taloflowLogo },
    { name: "CloudFlow SaaS", logo: cloudflowLogo },
    { name: "DataSync Analytics", logo: datasyncLogo },
    { name: "SecureGuard Enterprise", logo: secureguardLogo },
    { name: "WorkFlow Automation Co", logo: workflowLogo },
    { name: "InsightIQ Platform", logo: insightiqLogo },
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio Companies</span>
          </h2>
          <p className="text-muted-foreground">
            Successfully partnered with innovative companies across industries
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {[...portfolioCompanies, ...portfolioCompanies, ...portfolioCompanies].map((company, index) => (
              <div 
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-20 min-w-[180px] bg-gradient-card rounded-lg border border-primary/20 px-6 hover:shadow-card transition-all duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-14 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            We partner with innovative SaaS companies to build scalable, data-driven GTM engines that accelerate growth and achieve measurable results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;