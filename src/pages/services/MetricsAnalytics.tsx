import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, ArrowRight, BarChart3, Target, Users, PieChart } from "lucide-react";

const MetricsAnalytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
              <TrendingUp className="w-4 h-4" />
              Metrics & Analytics
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Measure What
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Matters Most
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Implement comprehensive measurement frameworks that track, analyze, and optimize your GTM performance with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
                  Book Analytics Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Download Metrics Framework
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Services */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics & Measurement</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build a comprehensive measurement system that provides actionable insights for every aspect of your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart3,
                title: "KPI Dashboards",
                description: "Real-time dashboards that track critical business metrics and performance indicators."
              },
              {
                icon: Target,
                title: "Attribution Modeling",
                description: "Multi-touch attribution to understand the customer journey and optimize marketing spend."
              },
              {
                icon: Users,
                title: "Cohort Analysis",
                description: "Track user behavior over time to identify retention patterns and growth opportunities."
              },
              {
                icon: PieChart,
                title: "Predictive Analytics",
                description: "Forecast future performance using machine learning and statistical modeling."
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

      {/* Key Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential SaaS Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help you track and optimize the metrics that directly impact your business growth and profitability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                category: "Revenue Metrics",
                metrics: ["Monthly Recurring Revenue (MRR)", "Annual Recurring Revenue (ARR)", "Revenue Growth Rate", "Average Revenue Per User (ARPU)"]
              },
              {
                category: "Customer Metrics",
                metrics: ["Customer Acquisition Cost (CAC)", "Customer Lifetime Value (CLV)", "Churn Rate", "Net Promoter Score (NPS)"]
              },
              {
                category: "Product Metrics",
                metrics: ["Daily/Monthly Active Users", "Feature Adoption Rate", "Time to Value", "Product Qualified Leads (PQLs)"]
              },
              {
                category: "Sales Metrics",
                metrics: ["Lead Conversion Rate", "Sales Cycle Length", "Win Rate", "Pipeline Velocity"]
              },
              {
                category: "Marketing Metrics",
                metrics: ["Cost Per Lead (CPL)", "Marketing Qualified Leads (MQLs)", "Attribution by Channel", "Return on Ad Spend (ROAS)"]
              },
              {
                category: "Financial Metrics",
                metrics: ["Gross Margin", "Burn Rate", "Runway", "Cash Flow"]
              }
            ].map((category, index) => (
              <Card key={category.category} className="border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Impact */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Companies with comprehensive analytics frameworks make better decisions and achieve superior performance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                metric: "60%",
                description: "Improvement in decision-making speed"
              },
              {
                metric: "25%",
                description: "Increase in marketing ROI"
              },
              {
                metric: "40%",
                description: "Better forecast accuracy"
              },
              {
                metric: "35%",
                description: "Reduction in customer churn"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Analytics?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build a comprehensive measurement framework that drives data-driven growth for your SaaS business.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
              Get Analytics Strategy Session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MetricsAnalytics;