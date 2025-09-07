import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, ArrowRight, Users, TrendingUp, Zap, BarChart3 } from "lucide-react";

const CustomerAcquisition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
              <Target className="w-4 h-4" />
              Customer Acquisition
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Scalable
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Acquisition Engines
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Create high-converting customer acquisition systems with optimized funnels, proven strategies, and data-driven growth tactics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
                  Book Acquisition Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Acquisition Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive customer acquisition strategies designed to scale your SaaS business profitably.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Lead Generation",
                description: "Multi-channel lead generation strategies that consistently fill your pipeline with qualified prospects."
              },
              {
                icon: TrendingUp,
                title: "Funnel Optimization",
                description: "Convert more prospects with scientifically optimized sales funnels and conversion paths."
              },
              {
                icon: Zap,
                title: "Conversion Rate Optimization",
                description: "Increase conversion rates through systematic testing and optimization of key touchpoints."
              },
              {
                icon: BarChart3,
                title: "A/B Testing",
                description: "Data-driven experimentation framework to continuously improve acquisition performance."
              }
            ].map((service, index) => (
              <Card key={service.title} className="text-center border-primary/10 hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-xl mx-auto w-fit mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Channels */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Acquisition Channels We Master</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help you identify and optimize the most effective channels for your specific market and product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Content Marketing",
              "SEO & Organic Search",
              "Paid Advertising (PPC)",
              "Social Media Marketing",
              "Email Marketing",
              "Partnership Marketing",
              "Influencer Outreach",
              "Referral Programs",
              "Product-Led Growth"
            ].map((channel, index) => (
              <div key={channel} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-primary/10">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-medium">{channel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Acquisition Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach to customer acquisition delivers consistent, measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                metric: "5x",
                description: "Average increase in qualified leads"
              },
              {
                metric: "67%",
                description: "Average improvement in conversion rates"
              },
              {
                metric: "45%",
                description: "Reduction in customer acquisition cost"
              },
              {
                metric: "320%",
                description: "Average increase in monthly recurring revenue"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Your Acquisition?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's analyze your current acquisition strategy and build a scalable system for sustainable growth.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
              Get Free Acquisition Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerAcquisition;