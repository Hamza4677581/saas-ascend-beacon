import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Database, Settings, Zap, TrendingUp, ArrowRight } from "lucide-react";

const GTMRevOpsEngineering = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              GTM & RevOps Engineering
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Clean, Sync & Scale
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Your Revenue Engine
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stop losing deals to messy data and broken processes. We clean, enrich, and sync data 
              between Clay and your CRM while building automated systems that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
                  Book RevOps Audit
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Download Framework
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete RevOps Infrastructure</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From data hygiene to process automation, we build the foundation for predictable revenue growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "CRM Integration",
                description: "Seamless data flow between Clay, your CRM, and all revenue tools with real-time syncing."
              },
              {
                icon: Settings,
                title: "Data Standardization",
                description: "Clean, enrich, and standardize all customer data for accurate reporting and analysis."
              },
              {
                icon: TrendingUp,
                title: "Pipeline Optimization",
                description: "Build automated workflows that move deals through your pipeline without manual intervention."
              },
              {
                icon: Zap,
                title: "System Automation",
                description: "Connect all your revenue tools and automate repetitive tasks to focus on growth."
              }
            ].map((item, index) => (
              <Card key={index} className="text-center bg-gradient-card border-primary/10">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-xl w-fit mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Systems We Connect */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Systems We Connect & Optimize</h2>
            <p className="text-xl text-muted-foreground">
              One unified revenue engine across all your tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "CRM & Sales",
                tools: ["Salesforce", "HubSpot", "Pipedrive", "Outreach", "SalesLoft", "Apollo"]
              },
              {
                category: "Marketing & Data",
                tools: ["Clay", "Marketo", "Pardot", "ZoomInfo", "6sense", "Clearbit"]
              },
              {
                category: "Analytics & Ops",
                tools: ["Tableau", "Looker", "Zapier", "Make", "Segment", "Mixpanel"]
              }
            ].map((group, index) => (
              <Card key={index} className="bg-gradient-card border-primary/10">
                <CardHeader>
                  <CardTitle className="text-center text-lg">{group.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {group.tools.map((tool) => (
                      <div key={tool} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">RevOps Impact</h2>
            <p className="text-xl text-muted-foreground">
              What proper RevOps engineering delivers
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "95%", label: "Data Accuracy" },
              { metric: "60%", label: "Faster Deal Velocity" },
              { metric: "40%", label: "Higher Win Rates" },
              { metric: "80%", label: "Process Efficiency" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fix Your Revenue Engine?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a RevOps audit to identify gaps and build systems that scale with your growth.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
              Book RevOps Audit <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GTMRevOpsEngineering;