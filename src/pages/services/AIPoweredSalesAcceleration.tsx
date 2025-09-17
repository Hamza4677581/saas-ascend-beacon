import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Brain, Target, Rocket, TrendingUp, ArrowRight } from "lucide-react";

const AIPoweredSalesAcceleration = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Sales Acceleration
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Scale Personalization
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                With AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Use advanced AI to write personalized outreach at scale and identify the highest-value 
              prospects automatically. No more generic messages or wasted time on low-quality leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
                  Book AI Demo
                </a>
              </Button>
              <Button variant="outline" size="lg">
                See AI in Action
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Sales Engine</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology that makes every outreach message feel personally crafted
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Messaging",
                description: "Advanced AI writes personalized messages that feel human and drive responses."
              },
              {
                icon: Target,
                title: "Prospect Intelligence",
                description: "AI analyzes prospects to identify pain points, timing, and buying signals."
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "Machine learning predicts which prospects are most likely to convert."
              },
              {
                icon: Rocket,
                title: "Automated Follow-ups",
                description: "Smart sequences that adapt based on prospect behavior and engagement."
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

      {/* AI Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Capabilities & Intelligence</h2>
            <p className="text-xl text-muted-foreground">
              What our AI can do for your sales process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Message Personalization",
                features: [
                  "Company-specific research",
                  "Role-based messaging",
                  "Industry pain points",
                  "Recent news & events",
                  "Mutual connections",
                  "Technology stack analysis"
                ]
              },
              {
                category: "Prospect Scoring",
                features: [
                  "Buying signal detection",
                  "Engagement prediction",
                  "Budget qualification",
                  "Decision maker identification",
                  "Timing analysis",
                  "Competition mapping"
                ]
              },
              {
                category: "Response Optimization",
                features: [
                  "A/B testing automation",
                  "Subject line optimization",
                  "Send time intelligence",
                  "Channel prioritization",
                  "Follow-up timing",
                  "Conversion tracking"
                ]
              }
            ].map((group, index) => (
              <Card key={index} className="bg-gradient-card border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg">{group.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {group.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Acceleration Results</h2>
            <p className="text-xl text-muted-foreground">
              The power of AI-driven sales acceleration
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "5x", label: "More Responses" },
              { metric: "80%", label: "Time Saved" },
              { metric: "300%", label: "Higher Conversion" },
              { metric: "24/7", label: "AI Working" }
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
            Ready to Accelerate with AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book an AI demo to see how we can scale your personalization and identify your best prospects.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
              Book AI Demo <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredSalesAcceleration;