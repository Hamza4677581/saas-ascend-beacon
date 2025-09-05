const TrustedBySection = () => {
  const trustedLogos = [
    { name: "Y Combinator", logo: "YC" },
    { name: "Sequoia Capital", logo: "SEQUOIA" },
    { name: "Andreessen Horowitz", logo: "a16z" },
    { name: "Techstars", logo: "TECHSTARS" },
    { name: "Vista Equity Partners", logo: "VISTA" },
    { name: "Thoma Bravo", logo: "THOMA BRAVO" },
    { name: "Accel", logo: "ACCEL" },
    { name: "Bessemer", logo: "BESSEMER" },
    { name: "General Catalyst", logo: "GENERAL CATALYST" },
    { name: "Kleiner Perkins", logo: "KLEINER PERKINS" },
    { name: "Index Ventures", logo: "INDEX" },
    { name: "Lightspeed", logo: "LIGHTSPEED" }
  ];

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by portfolio companies from
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...trustedLogos, ...trustedLogos].map((company, index) => (
              <div 
                key={`${company.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 min-w-[160px]"
              >
                <div className="text-muted-foreground/60 font-semibold text-lg tracking-wide hover:text-primary transition-colors duration-300">
                  {company.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;