import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Handshake, Building, Crown, TrendingUp, ArrowRight } from "lucide-react";

const CLevelNetworkActivation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Users className="w-4 h-4 mr-2" />
              C-Level Network Activation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Access Fortune 500
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                C-Level Executives
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Skip the gatekeepers. Get warm introductions to C-level executives across 
              Fortune 500 companies through our extensive network and proven relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
                  Book Network Call
                </a>
              </Button>
              <Button variant="outline" size="lg">
                View Network Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Executive Access & Connections</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leverage 15+ years of executive relationships for strategic partnerships and accelerated growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Handshake,
                title: "Executive Introductions",
                description: "Direct warm introductions to C-level executives at your target accounts."
              },
              {
                icon: Building,
                title: "Strategic Partnerships",
                description: "Help establish partnerships with industry leaders and Fortune 500 companies."
              },
              {
                icon: Crown,
                title: "Board Connections",
                description: "Access to board members and advisory positions at high-growth companies."
              },
              {
                icon: TrendingUp,
                title: "Investment Networks",
                description: "Connections to VCs, PEs, and angel investors for funding opportunities."
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

      {/* Network Industries */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries & Sectors</h2>
            <p className="text-xl text-muted-foreground">
              Deep connections across multiple industries and sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "FMCG & Consumer Goods",
                companies: ["P&G", "Unilever", "Nestlé", "Coca-Cola", "PepsiCo", "L'Oréal"]
              },
              {
                industry: "Pharmaceutical & Healthcare",
                companies: ["Pfizer", "J&J", "Roche", "Novartis", "Merck", "AbbVie"]
              },
              {
                industry: "Consulting & Big 4",
                companies: ["McKinsey", "BCG", "Bain", "Deloitte", "PwC", "KPMG"]
              },
              {
                industry: "Banking & Finance",
                companies: ["JPMorgan", "Goldman Sachs", "Morgan Stanley", "Citi", "Wells Fargo"]
              },
              {
                industry: "Private Equity",
                companies: ["Blackstone", "KKR", "Carlyle", "Apollo", "TPG", "Bain Capital"]
              },
              {
                industry: "Technology & SaaS",
                companies: ["Microsoft", "Salesforce", "Adobe", "ServiceNow", "Workday"]
              }
            ].map((sector, index) => (
              <Card key={index} className="bg-gradient-card border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg">{sector.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {sector.companies.map((company) => (
                      <div key={company} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{company}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Network Activation Results</h2>
            <p className="text-xl text-muted-foreground">
              What happens when you leverage executive relationships
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "48hrs", label: "Average Response Time" },
              { metric: "85%", label: "Meeting Success Rate" },
              { metric: "$50M+", label: "Deals Facilitated" },
              { metric: "500+", label: "Executive Connections" }
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
            Ready to Access C-Level Executives?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a network call to discuss how we can connect you with the right executives for your business.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
              Book Network Call <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CLevelNetworkActivation;