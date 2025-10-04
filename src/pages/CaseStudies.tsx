import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, ArrowRight, Users, DollarSign, Clock, Target } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "SalesAssist",
      industry: "Secondary Sales Solution",
      challenge: "CPG, FMCG, Pharma, and Retail companies needed to cover their Total Addressable Market efficiently and secure Fortune 500 clients.",
      solution: "Implemented comprehensive GTM strategy with targeted outbound campaigns and strategic positioning to reach enterprise decision-makers.",
      results: [
        { metric: "300+", description: "Qualified meetings booked" },
        { metric: "Fortune 500", description: "Client acquisitions" },
        { metric: "100%", description: "TAM coverage in 1 year" }
      ],
      timeline: "1 year",
      logo: "SA"
    },
    {
      company: "RS Tech Studio",
      industry: "Technology Services",
      challenge: "Staff augmentation and development firm specialized in web, mobile, Gen AI, and LLM needed to break into Fortune 500 and government sectors.",
      solution: "Developed enterprise-focused GTM strategy with targeted account-based marketing and thought leadership positioning in emerging AI technologies.",
      results: [
        { metric: "200+", description: "Strategic meetings secured" },
        { metric: "Fortune 500", description: "& Government clients" },
        { metric: "2x", description: "Revenue growth achieved" }
      ],
      timeline: "2 years",
      logo: "RS"
    },
    {
      company: "Taloflow",
      industry: "Tech Vendor Evaluation",
      challenge: "Y Combinator-backed startup needed to establish credibility with consulting firms, enterprises, and PE firms for tech vendor evaluation services.",
      solution: "Strategic positioning and outbound campaign targeting Big Four consulting firms and enterprise decision-makers across multiple categories.",
      results: [
        { metric: "200+", description: "High-value meetings" },
        { metric: "Big Four", description: "Consulting firms onboarded" },
        { metric: "Multiple", description: "Enterprise PE clients" }
      ],
      timeline: "18 months",
      logo: "TF"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
              <TrendingUp className="w-4 h-4" />
              Success Stories
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Results from
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Real Companies
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how we've helped SaaS companies achieve remarkable growth through strategic go-to-market execution and proven methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.company} className="max-w-6xl mx-auto">
                <Card className="border-primary/10 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center font-bold text-primary">
                          {study.logo}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{study.company}</h3>
                          <Badge variant="secondary">{study.industry}</Badge>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            Challenge
                          </h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            Our Solution
                          </h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>Timeline: {study.timeline}</span>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="p-8 bg-gradient-to-br from-primary/5 to-transparent">
                      <h4 className="font-semibold mb-6 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Results Achieved
                      </h4>
                      
                      <div className="space-y-6">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center justify-between">
                            <div>
                              <div className="text-3xl font-bold text-primary">{result.metric}</div>
                              <div className="text-sm text-muted-foreground">{result.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-primary/10">
                        <Button variant="outline" asChild className="w-full">
                          <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
                            Book Free Strategy Call
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Track Record</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach consistently delivers exceptional results across various SaaS verticals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: DollarSign,
                metric: "$50M+",
                description: "Total revenue generated for clients"
              },
              {
                icon: TrendingUp,
                metric: "300%",
                description: "Average revenue growth"
              },
              {
                icon: Users,
                metric: "50+",
                description: "SaaS companies accelerated"
              },
              {
                icon: Target,
                metric: "90%",
                description: "Client success rate"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="p-3 bg-primary/10 rounded-xl mx-auto w-fit mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.metric}
                </div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the ranks of successful SaaS companies that have transformed their growth with our proven methodologies.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
              Start Your Growth Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;