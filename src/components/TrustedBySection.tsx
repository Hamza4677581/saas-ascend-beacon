const TrustedBySection = () => {
  const trustedCompanies = [
    "SalesAssist",
    "RS Tech Studio",
    "Taloflow",
    "CloudFlow SaaS",
    "DataSync Analytics",
    "SecureGuard Enterprise",
    "WorkFlow Automation Co",
    "InsightIQ Platform",
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
            {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
              <div 
                key={`${company}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 min-w-[160px]"
              >
                <span className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;