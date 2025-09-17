import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Zap, Database, Settings, TrendingUp, ArrowRight } from "lucide-react";

const ClayPlaybooks = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Target className="w-4 h-4 mr-2" />
              End-to-End Clay Playbooks
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automated Prospecting
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                While You Sleep
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Custom Clay workflows that find, enrich, and score your best opportunities automatically. 
              No more manual prospecting - let AI do the heavy lifting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
                  Book Clay Audit
                </a>
              </Button>
              <Button variant="outline" size="lg">
                See Sample Workflow
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Clay Automation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From lead discovery to final qualification, we automate your entire prospecting pipeline
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "Automated Prospecting",
                description: "AI-powered lead discovery that finds your ideal customers across multiple data sources."
              },
              {
                icon: Zap,
                title: "Data Enrichment",
                description: "Complete prospect profiles with contact info, company data, and behavioral insights."
              },
              {
                icon: TrendingUp,
                title: "Lead Scoring",
                description: "Intelligent scoring algorithms that prioritize your highest-value prospects automatically."
              },
              {
                icon: Settings,
                title: "Workflow Automation",
                description: "Custom triggers and actions that keep your pipeline flowing without manual intervention."
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

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clay Implementation Process</h2>
            <p className="text-xl text-muted-foreground">
              From setup to optimization, we handle everything
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Workflow Design",
                description: "We analyze your ICP and design custom Clay workflows tailored to your specific needs."
              },
              {
                step: "02", 
                title: "Data Integration",
                description: "Connect multiple data sources and set up enrichment processes for complete prospect profiles."
              },
              {
                step: "03",
                title: "Automation Setup",
                description: "Build triggers, conditions, and actions that run your prospecting on autopilot."
              },
              {
                step: "04",
                title: "Testing & Optimization",
                description: "We test everything thoroughly and optimize for maximum accuracy and efficiency."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Clay Automation Results</h2>
            <p className="text-xl text-muted-foreground">
              What happens when you automate your prospecting
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "90%", label: "Time Saved on Prospecting" },
              { metric: "5x", label: "More Qualified Leads" },
              { metric: "24/7", label: "Automated Discovery" },
              { metric: "85%", label: "Data Accuracy" }
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
            Ready to Automate Your Prospecting?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a Clay audit to see how we can build custom workflows for your specific needs.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
              Book Clay Audit <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ClayPlaybooks;