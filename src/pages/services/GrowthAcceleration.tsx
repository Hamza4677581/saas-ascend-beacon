import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, ArrowRight, Rocket, TrendingUp, Users, Target } from "lucide-react";

const GrowthAcceleration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
              <Zap className="w-4 h-4" />
              Growth Acceleration
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Accelerate Beyond
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Linear Growth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Unlock exponential growth with advanced growth hacking techniques, viral mechanics, and product-led strategies that scale your SaaS business rapidly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
                  Book Growth Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Download Growth Playbook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Strategies */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Growth Acceleration Strategies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Implement proven growth tactics that compound to create exponential business acceleration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Rocket,
                title: "Growth Hacking",
                description: "Creative, low-cost strategies to rapidly acquire and engage users through innovative tactics."
              },
              {
                icon: Users,
                title: "Viral Mechanics",
                description: "Build viral loops and referral systems that turn users into growth drivers for your product."
              },
              {
                icon: Target,
                title: "Product-Led Growth",
                description: "Design product experiences that drive acquisition, activation, and expansion automatically."
              },
              {
                icon: TrendingUp,
                title: "Retention Optimization",
                description: "Maximize customer lifetime value through advanced retention and expansion strategies."
              }
            ].map((strategy, index) => (
              <Card key={strategy.title} className="text-center border-primary/10 hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-xl mx-auto w-fit mb-4">
                    <strategy.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{strategy.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Levers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Growth Levers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We identify and optimize the specific levers that will have the highest impact on your growth trajectory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                category: "Acquisition Levers",
                tactics: ["Viral coefficient optimization", "Referral program design", "Content-driven SEO", "Partnership networks"]
              },
              {
                category: "Activation Levers",
                tactics: ["Onboarding optimization", "Time-to-value reduction", "Feature adoption flows", "User engagement loops"]
              },
              {
                category: "Retention Levers",
                tactics: ["Churn prediction models", "Proactive customer success", "Feature usage analytics", "Loyalty programs"]
              },
              {
                category: "Revenue Levers",
                tactics: ["Pricing optimization", "Upsell automation", "Expansion revenue", "Value-based selling"]
              },
              {
                category: "Viral Levers",
                tactics: ["Social sharing mechanics", "Network effects design", "User-generated content", "Community building"]
              },
              {
                category: "Product Levers",
                tactics: ["Feature prioritization", "Usage analytics", "A/B testing framework", "Product-market fit optimization"]
              }
            ].map((lever, index) => (
              <Card key={lever.category} className="border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg">{lever.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {lever.tactics.map((tactic, tacticIndex) => (
                      <li key={tacticIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm">{tactic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Results */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Acceleration Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our growth acceleration strategies consistently deliver exponential results that compound over time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                metric: "10x",
                description: "Average growth rate improvement"
              },
              {
                metric: "65%",
                description: "Increase in viral coefficient"
              },
              {
                metric: "200%",
                description: "Improvement in user activation"
              },
              {
                metric: "150%",
                description: "Increase in customer lifetime value"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's identify your biggest growth opportunities and implement strategies that create exponential acceleration.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
              Get Growth Acceleration Plan
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrowthAcceleration;