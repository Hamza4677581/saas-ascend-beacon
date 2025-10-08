const TrustedBySection = () => {
  const trustedCompanies = [
    "Y Combinator Portfolio",
    "Thoma Bravo Portfolio",
    "General Catalyst Portfolio",
    "Accel Portfolio",
    "Sequoia Portfolio",
    "Andreessen Horowitz Portfolio",
    "Kleiner Perkins Portfolio",
    "Greylock Portfolio",
    "Lightspeed Portfolio",
    "Benchmark Portfolio",
    "Index Ventures Portfolio",
    "NEA Portfolio",
    "Bessemer Portfolio",
    "IVP Portfolio",
    "Insight Partners Portfolio",
    "Tiger Global Portfolio",
  ];

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by PortCo's of leading VC firms and some enterprises
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-fast">
            {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
              <div 
                key={`${company}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 min-w-[200px]"
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