const ExpertiseSection = () => {
  const expertiseTools = [
    { name: "Clay", logo: "CLAY" },
    { name: "Make", logo: "MAKE" },
    { name: "n8n", logo: "N8N" },
    { name: "Zapier", logo: "ZAPIER" },
    { name: "GoHighLevel", logo: "GHL" },
    { name: "HubSpot", logo: "HUBSPOT" },
    { name: "Salesforce", logo: "SALESFORCE" },
    { name: "Attio", logo: "ATTIO" },
    { name: "Marketo", logo: "MARKETO" },
    { name: "Customer.io", logo: "CUSTOMER.IO" },
    { name: "Notion", logo: "NOTION" },
    { name: "Airtable", logo: "AIRTABLE" },
    { name: "CRM Systems", logo: "CRM" },
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Technology Expertise</span>
          </h2>
          <p className="text-muted-foreground">
            Certified experts in the most powerful automation and GTM tools
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {[...expertiseTools, ...expertiseTools, ...expertiseTools].map((tool, index) => (
              <div 
                key={`${tool.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-20 min-w-[180px] bg-gradient-card rounded-lg border border-primary/20 px-6 hover:shadow-card transition-all duration-300"
              >
                <div className="text-muted-foreground font-bold text-lg tracking-wide hover:text-primary transition-colors duration-300">
                  {tool.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge automation platforms, CRM systems, and marketing tools to build scalable, 
            data-driven GTM engines that accelerate your growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;