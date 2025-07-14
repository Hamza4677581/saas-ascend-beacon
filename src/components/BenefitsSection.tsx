import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  DollarSign, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Faster Time-to-Market",
    description: "Launch 3x faster with our proven GTM playbooks and execution frameworks.",
    metric: "67% faster launches",
    color: "text-blue-400"
  },
  {
    icon: DollarSign,
    title: "Revenue Predictability",
    description: "Build sustainable revenue engines with predictable growth trajectories.",
    metric: "$50M+ generated",
    color: "text-green-400"
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Avoid costly mistakes with battle-tested strategies and market insights.",
    metric: "90% success rate",
    color: "text-purple-400"
  },
  {
    icon: Zap,
    title: "Scalable Systems",
    description: "Build operations and processes that scale with your growth ambitions.",
    metric: "10x growth achieved",
    color: "text-orange-400"
  }
];

const achievements = [
  "Market-leading retention rates",
  "Exponential growth trajectories", 
  "Operational excellence",
  "Competitive positioning",
  "Data-driven optimization",
  "Team alignment & execution"
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="border-primary/20 text-primary">
                Why Choose Us
              </Badge>
              
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                The Strategic
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Advantage
                </span>
                Your SaaS Deserves
              </h2>
              
              <p className="text-xl text-muted-foreground">
                We don't just provide services - we become your strategic growth partner, 
                combining deep SaaS expertise with proven methodologies to deliver exceptional results.
              </p>
            </div>

            {/* Achievement List */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                What You'll Achieve
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((achievement) => (
                  <div key={achievement} className="flex items-center gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Benefits Cards */}
          <div className="grid gap-6">
            {benefits.map((benefit) => (
              <Card 
                key={benefit.title}
                className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-primary/10 hover:border-primary/20"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {benefit.metric}
                    </Badge>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;