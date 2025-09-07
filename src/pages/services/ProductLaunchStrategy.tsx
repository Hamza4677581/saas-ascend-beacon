import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Rocket, ArrowRight, CheckCircle, Target, BarChart3, Users } from "lucide-react";

const ProductLaunchStrategy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
              <Rocket className="w-4 h-4" />
              Product Launch Strategy
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Launch Your Product with
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Maximum Impact
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Complete go-to-market planning from positioning to launch execution, ensuring your product hits the market with precision and drives immediate adoption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
                  Book Strategy Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Download Framework
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive product launch strategy covers every aspect of bringing your product to market successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Market Research",
                description: "Deep dive into your target market, competitors, and positioning opportunities."
              },
              {
                icon: Rocket,
                title: "Positioning Strategy",
                description: "Craft compelling messaging that resonates with your ideal customers."
              },
              {
                icon: BarChart3,
                title: "Launch Planning",
                description: "Detailed roadmap with timelines, milestones, and success metrics."
              },
              {
                icon: Users,
                title: "Campaign Execution",
                description: "Multi-channel launch campaigns designed for maximum reach and impact."
              }
            ].map((item, index) => (
              <Card key={item.title} className="text-center border-primary/10">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-xl mx-auto w-fit mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Launch Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 6-step methodology that has launched over 100 successful SaaS products.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Market Analysis",
                description: "Comprehensive research of your target market, competitive landscape, and customer needs."
              },
              {
                step: "02",
                title: "Positioning Framework",
                description: "Develop unique value proposition and messaging that differentiates your product."
              },
              {
                step: "03",
                title: "Launch Strategy",
                description: "Create detailed launch plan with timeline, channels, and resource allocation."
              },
              {
                step: "04",
                title: "Content & Campaigns",
                description: "Develop launch materials, PR strategy, and multi-channel marketing campaigns."
              },
              {
                step: "05",
                title: "Execution & Launch",
                description: "Coordinate launch across all channels with real-time monitoring and optimization."
              },
              {
                step: "06",
                title: "Post-Launch Optimization",
                description: "Analyze results, gather feedback, and optimize for sustained growth."
              }
            ].map((process, index) => (
              <div key={process.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <Badge variant="secondary" className="text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center">
                    {process.step}
                  </Badge>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Launch Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategic approach consistently delivers exceptional launch outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                metric: "85%",
                description: "Average first-month user adoption rate"
              },
              {
                metric: "3.2x",
                description: "Faster time to product-market fit"
              },
              {
                metric: "$2.4M",
                description: "Average ARR within 12 months"
              }
            ].map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {result.metric}
                </div>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Successfully?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your product launch strategy and create a plan that ensures market success.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
              Schedule Launch Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductLaunchStrategy;