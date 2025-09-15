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
    title: "Done-for-You Multi-Channel Outbound",
    description: "Triple your qualified demos in 45 days without hiring new SDRs. We reach your best buyers by email, LinkedIn, and cold calls.",
    features: ["Personalized Outreach", "Multi-Channel Campaigns", "Lead Qualification", "Demo Booking"]
  },
  {
    icon: Target,
    title: "End-to-End Clay Playbooks",
    description: "Automated workflows that find, enrich, and score your best opportunities while you sleep. No more manual prospecting.",
    features: ["Automated Prospecting", "Data Enrichment", "Lead Scoring", "Workflow Automation"]
  },
  {
    icon: BarChart3,
    title: "GTM & RevOps Engineering",
    description: "Clean, enrich, and sync data between Clay and your CRM. Keep your revenue engine running smoothly with automated systems.",
    features: ["CRM Integration", "Data Standardization", "Pipeline Optimization", "System Automation"]
  },
  {
    icon: Users,
    title: "C-Level Network Activation",
    description: "Leverage our extensive C-level connections across Fortune 500 companies for warm introductions and strategic partnerships.",
    features: ["Executive Introductions", "Strategic Partnerships", "Board Connections", "Investment Networks"]
  },
  {
    icon: Zap,
    title: "AI-Powered Sales Acceleration",
    description: "Use advanced AI to write personalized outreach at scale and identify the highest-value prospects automatically.",
    features: ["AI Messaging", "Prospect Intelligence", "Predictive Analytics", "Automated Follow-ups"]
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth Consulting",
    description: "Strategic consulting to build scalable revenue systems that outperform traditional SDR teams by 300%+.",
    features: ["Growth Strategy", "Team Optimization", "Process Design", "Performance Tracking"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
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
          {services.map((service, index) => {
            const serviceSlug = service.title.toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/&/g, 'and')
              .replace(/'/g, '');
            const servicePath = `/services/${serviceSlug}`;
            
            return (
              <Card 
                key={service.title}
                className="relative group hover:shadow-card transition-all duration-300 bg-gradient-card border-primary/10 hover:border-primary/20 cursor-pointer"
                onClick={() => window.location.href = servicePath}
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
            );
          })}
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