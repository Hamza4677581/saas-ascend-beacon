import salesAssistLogo from "@/assets/logos/salesassist.png";
import rstechLogo from "@/assets/logos/rstech.png";
import taloflowLogo from "@/assets/logos/taloflow.png";
import cloudflowLogo from "@/assets/logos/cloudflow.png";
import datasyncLogo from "@/assets/logos/datasync.png";
import secureguardLogo from "@/assets/logos/secureguard.png";
import workflowLogo from "@/assets/logos/workflow.png";
import insightiqLogo from "@/assets/logos/insightiq.png";

const TrustedBySection = () => {
  const trustedLogos = [
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
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by portfolio companies
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-fast">
            {[...trustedLogos, ...trustedLogos].map((company, index) => (
              <div 
                key={`${company.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 min-w-[160px]"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;