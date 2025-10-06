const TrustedBySection = () => {
  const trustedVCs = [
    "Y Combinator",
    "Thoma Bravo",
    "General Catalyst",
    "Accel",
    "Sequoia Capital",
    "Andreessen Horowitz",
    "Kleiner Perkins",
    "Greylock Partners",
    "Lightspeed Venture Partners",
    "Benchmark",
    "Index Ventures",
    "NEA",
    "Bessemer Venture Partners",
    "IVP",
    "Insight Partners",
    "Tiger Global",
  ];

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-medium">
            Backed by leading venture capital firms
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-fast">
            {[...trustedVCs, ...trustedVCs].map((vc, index) => (
              <div 
                key={`${vc}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 min-w-[200px]"
              >
                <span className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {vc}
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