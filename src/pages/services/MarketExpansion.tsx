import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, ArrowRight, Globe, MapPin, Target, TrendingUp } from "lucide-react";

const MarketExpansion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
              <Users className="w-4 h-4" />
              Market Expansion
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Scale Into New
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Markets & Segments
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expand your SaaS business into new markets, customer segments, and geographies with data-driven strategies that minimize risk and maximize opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
                  Book Expansion Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Download Expansion Playbook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Types */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expansion Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Identify and execute the right expansion strategy for your business stage and market position.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Market Analysis",
                description: "Deep research into new market opportunities, competition, and customer needs assessment."
              },
              {
                icon: Globe,
                title: "Expansion Planning",
                description: "Comprehensive roadmap for market entry including timelines, resources, and risk mitigation."
              },
              {
                icon: MapPin,
                title: "Localization",
                description: "Adapt your product, messaging, and operations for local markets and cultural preferences."
              },
              {
                icon: Users,
                title: "Partnership Strategy",
                description: "Build strategic partnerships to accelerate market penetration and reduce expansion costs."
              }
            ].map((type, index) => (
              <Card key={type.title} className="text-center border-primary/10 hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-xl mx-auto w-fit mb-4">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{type.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Framework */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Expansion Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology for successful market expansion with minimal risk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                phase: "Market Research",
                items: ["Market sizing & potential", "Competitive landscape analysis", "Customer persona research", "Regulatory requirements"]
              },
              {
                phase: "Strategy Development",
                items: ["Go-to-market strategy", "Pricing localization", "Distribution channels", "Partnership identification"]
              },
              {
                phase: "Execution & Scale",
                items: ["Pilot market launch", "Performance monitoring", "Iterative optimization", "Full market rollout"]
              }
            ].map((phase, index) => (
              <Card key={phase.phase} className="border-primary/10">
                <CardHeader>
                  <div className="text-center">
                    <Badge variant="secondary" className="text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
                      {index + 1}
                    </Badge>
                    <CardTitle className="text-xl">{phase.phase}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expansion Success Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our market expansion strategies deliver measurable results across key performance indicators.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                metric: "250%",
                description: "Average market reach increase"
              },
              {
                metric: "18 mos",
                description: "Average time to market profitability"
              },
              {
                metric: "85%",
                description: "Success rate in new markets"
              },
              {
                metric: "40%",
                description: "Reduction in expansion costs"
              }
            ].map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {result.metric}
                </div>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Expand Your Market Reach?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's identify your best expansion opportunities and create a strategic plan for sustainable growth.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
              Schedule Expansion Strategy Session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketExpansion;