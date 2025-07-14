import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Target, 
  BarChart3, 
  Users, 
  Zap, 
  TrendingUp,
  ChartLine,
  Lightbulb 
} from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Product Launch Strategy",
    description: "Complete go-to-market planning from positioning to launch execution, ensuring maximum market impact.",
    features: ["Market Research", "Positioning", "Launch Planning", "Campaign Execution"]
  },
  {
    icon: Target,
    title: "Customer Acquisition",
    description: "Build scalable customer acquisition engines with optimized funnels and conversion strategies.",
    features: ["Lead Generation", "Funnel Optimization", "Conversion Rate Optimization", "A/B Testing"]
  },
  {
    icon: BarChart3,
    title: "Revenue Operations",
    description: "Align sales, marketing, and customer success for predictable revenue growth and operational efficiency.",
    features: ["Sales Process", "Pipeline Management", "Revenue Analytics", "Team Alignment"]
  },
  {
    icon: Users,
    title: "Market Expansion",
    description: "Scale into new markets, segments, and geographies with data-driven expansion strategies.",
    features: ["Market Analysis", "Expansion Planning", "Localization", "Partnership Strategy"]
  },
  {
    icon: Zap,
    title: "Growth Acceleration",
    description: "Identify and optimize growth levers to accelerate your SaaS business beyond linear growth.",
    features: ["Growth Hacking", "Viral Mechanics", "Product-Led Growth", "Retention Optimization"]
  },
  {
    icon: TrendingUp,
    title: "Metrics & Analytics",
    description: "Implement comprehensive measurement frameworks to track and optimize your GTM performance.",
    features: ["KPI Dashboards", "Attribution Modeling", "Cohort Analysis", "Predictive Analytics"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
            <ChartLine className="w-4 h-4" />
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete GTM Solutions for
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              SaaS Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From strategy to execution, we cover every aspect of your go-to-market journey with proven methodologies and expert guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="relative group hover:shadow-card transition-all duration-300 bg-gradient-card border-primary/10 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Lightbulb className="w-5 h-5" />
            <span className="font-medium">Need a custom solution?</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Every SaaS is unique. Let's discuss how we can tailor our approach to your specific challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;