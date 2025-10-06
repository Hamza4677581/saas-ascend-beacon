const ExpertiseSection = () => {
  const techStack = [
    "Salesforce",
    "Clay",
    "GoHighLevel",
    "Make",
    "n8n",
    "HubSpot",
    "Attio",
    "Marketo",
    "Apollo",
    "Wiza",
    "Gong",
    "Cognism",
    "Bombora",
    "Customer.io",
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Tech Stack Expertise</span>
          </h2>
          <p className="text-muted-foreground">
            Expert implementation and integration across leading GTM and automation platforms
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <div 
                key={`${tech}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-20 min-w-[180px] bg-gradient-card rounded-lg border border-primary/20 px-6 hover:shadow-card transition-all duration-300"
              >
                <span className="text-lg font-semibold hover:scale-110 transition-transform duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            We specialize in building and optimizing GTM operations using best-in-class tools for CRM, outbound automation, data enrichment, and revenue intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;