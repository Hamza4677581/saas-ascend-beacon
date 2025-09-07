import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart3, ArrowRight, DollarSign, Users, TrendingUp, Target } from "lucide-react";

const RevenueOperations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
              <BarChart3 className="w-4 h-4" />
              Revenue Operations
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Align Teams for
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Predictable Revenue
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Optimize your sales, marketing, and customer success operations to create a unified revenue engine that drives consistent, scalable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
                  Book RevOps Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Download RevOps Framework
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revenue Operations Focus Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We align your entire revenue organization to eliminate friction and accelerate growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Sales Process",
                description: "Streamline sales workflows, optimize territory management, and improve deal velocity."
              },
              {
                icon: Target,
                title: "Pipeline Management",
                description: "Create predictable pipeline generation with clear qualification criteria and stages."
              },
              {
                icon: BarChart3,
                title: "Revenue Analytics",
                description: "Implement comprehensive reporting and forecasting for data-driven decisions."
              },
              {
                icon: DollarSign,
                title: "Team Alignment",
                description: "Align sales, marketing, and CS teams with unified goals and processes."
              }
            ].map((area, index) => (
              <Card key={area.title} className="text-center border-primary/10 hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-xl mx-auto w-fit mb-4">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{area.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RevOps Framework */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our RevOps Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to building revenue operations that scale with your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                phase: "Assessment",
                description: "Audit current processes, systems, and team alignment to identify optimization opportunities."
              },
              {
                phase: "Strategy Design",
                description: "Create unified revenue strategy with clear KPIs, processes, and technology requirements."
              },
              {
                phase: "Process Implementation",
                description: "Deploy optimized workflows, sales playbooks, and cross-team collaboration frameworks."
              },
              {
                phase: "Technology Integration",
                description: "Implement and integrate CRM, marketing automation, and analytics tools for seamless operations."
              },
              {
                phase: "Performance Optimization",
                description: "Continuously monitor, measure, and optimize revenue operations for maximum efficiency."
              }
            ].map((step, index) => (
              <div key={step.phase} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <Badge variant="secondary" className="text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center">
                    {String(index + 1).padStart(2, '0')}
                  </Badge>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.phase}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">RevOps Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Companies with aligned revenue operations achieve superior growth and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                metric: "38%",
                description: "Higher revenue growth rate"
              },
              {
                metric: "15%",
                description: "Improvement in sales productivity"
              },
              {
                metric: "27%",
                description: "Better forecast accuracy"
              },
              {
                metric: "3x",
                description: "Faster sales cycle"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Revenue Operations?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's assess your current RevOps maturity and design a system that drives predictable growth.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
              Get RevOps Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RevenueOperations;