import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, Target, Users, BarChart3, Zap, ArrowRight } from "lucide-react";

const RevenueGrowthConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Revenue Growth Consulting
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Scalable Systems
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                That Outperform SDRs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Strategic consulting to build revenue systems that outperform traditional SDR teams by 300%+. 
              Stop hiring and start scaling with proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
                  Book Strategy Call
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Download Growth Framework
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Growth Consulting</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting to build and optimize your entire revenue generation system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Growth Strategy",
                description: "Develop comprehensive strategies that align with your business goals and market position."
              },
              {
                icon: Users,
                title: "Team Optimization",
                description: "Optimize your existing team structure and processes for maximum efficiency and output."
              },
              {
                icon: BarChart3,
                title: "Process Design",
                description: "Design scalable processes that eliminate bottlenecks and accelerate growth."
              },
              {
                icon: Zap,
                title: "Performance Tracking",
                description: "Implement metrics and KPIs that drive accountability and continuous improvement."
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

      {/* Consulting Framework */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Growth Consulting Framework</h2>
            <p className="text-xl text-muted-foreground">
              Proven methodology for sustainable revenue growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                phase: "Phase 1",
                title: "Revenue Audit & Assessment",
                description: "Comprehensive analysis of your current revenue systems, processes, and performance to identify gaps and opportunities.",
                duration: "Week 1-2"
              },
              {
                phase: "Phase 2", 
                title: "Strategy Development",
                description: "Create a customized growth strategy based on your market, ICP, and business goals with clear roadmap and milestones.",
                duration: "Week 3-4"
              },
              {
                phase: "Phase 3",
                title: "System Implementation",
                description: "Deploy new processes, tools, and workflows while training your team on best practices and methodologies.",
                duration: "Week 5-8"
              },
              {
                phase: "Phase 4",
                title: "Optimization & Scale",
                description: "Continuously optimize performance, scale successful initiatives, and establish long-term growth mechanisms.",
                duration: "Week 9-12"
              }
            ].map((item, index) => (
              <Card key={index} className="mb-6 bg-gradient-card border-primary/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-2">{item.phase}</Badge>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                    <div className="text-sm text-muted-foreground">{item.duration}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Areas */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Growth Areas We Optimize</h2>
            <p className="text-xl text-muted-foreground">
              Every aspect of your revenue engine, optimized for maximum performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                area: "Revenue Operations",
                focus: ["Process optimization", "Tool integration", "Data analytics", "Performance tracking"]
              },
              {
                area: "Sales & Marketing",
                focus: ["Lead generation", "Conversion optimization", "Customer acquisition", "Pipeline management"]
              },
              {
                area: "Team & Culture",
                focus: ["Team structure", "Training programs", "Performance metrics", "Compensation design"]
              }
            ].map((group, index) => (
              <Card key={index} className="bg-gradient-card border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg">{group.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {group.focus.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{item}</span>
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Growth Consulting Results</h2>
            <p className="text-xl text-muted-foreground">
              What strategic consulting delivers for revenue growth
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "300%", label: "Revenue Increase" },
              { metric: "65%", label: "Cost Reduction" },
              { metric: "12 Weeks", label: "Time to Results" },
              { metric: "95%", label: "Client Satisfaction" }
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
            Ready to Scale Your Revenue?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a strategy call to discuss how we can build systems that outperform traditional SDR teams.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
              Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RevenueGrowthConsulting;