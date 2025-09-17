import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  Check, 
  DollarSign, 
  Mail, 
  Clock, 
  Calendar,
  Zap,
  Target,
  Users,
  TrendingUp
} from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "SDR Salary Burn",
    description: "$18k – $24k spent every month on 3 to 4 reps' pay",
    color: "text-destructive"
  },
  {
    icon: Mail,
    title: "Cold Email Silence", 
    description: "Generic blasts get only 0 – 1% reply rates",
    color: "text-destructive"
  },
  {
    icon: Clock,
    title: "Research Time Sink",
    description: "Roughly 70% of sales hours vanish into list-building", 
    color: "text-destructive"
  },
  {
    icon: Calendar,
    title: "Empty Demo Calendar",
    description: "Few or no qualified meetings land each month",
    color: "text-destructive"
  }
];

const solutions = [
  {
    icon: Zap,
    title: "10× Output, 1× Cost",
    description: "We do the work of ten SDRs for a fraction of the cost",
    color: "text-primary"
  },
  {
    icon: Target,
    title: "4 – 8% Reply Rates",
    description: "Personalized sequences that lift reply rates and turn 40–50% of replies into meetings",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Your Team Only Sells",
    description: "We deliver enriched, scored leads so reps spend all day selling",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Calendar Filling Fast",
    description: "Triple demos in 45 days, or we refund the pilot",
    color: "text-primary"
  }
];

const ComparisonSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-6">
            The Problem vs The Solution
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Sales Team is Not Booking 
            <span className="block text-destructive">Any Demos From Outbound</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            You're not alone, here's what's stalling sales teams and how we solve it.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Problems Side */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center lg:justify-start gap-3">
                <X className="w-6 h-6 text-destructive" />
                Hidden Cost of Manual Outbound
              </h3>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded-lg">
                        <problem.icon className={`w-5 h-5 ${problem.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{problem.title}</h4>
                        <p className="text-muted-foreground text-sm">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-destructive/40 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => window.location.href = '/about'}
              >
                See How We're Different
              </Button>
            </div>
          </div>

          {/* Solutions Side */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center lg:justify-start gap-3">
                <Check className="w-6 h-6 text-primary" />
                Flip the Equation in 45 Days
              </h3>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all duration-300 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <solution.icon className={`w-5 h-5 ${solution.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{solution.title}</h4>
                        <p className="text-muted-foreground text-sm">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <Button 
                size="lg" 
                className="w-full bg-gradient-primary text-white"
                onClick={() => window.open('https://calendly.com/hamzamaqsood334/30min', '_blank')}
              >
                Start Your 45-Day Transformation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => window.open('https://calendly.com/hamzamaqsood334/30min', '_blank')}
              >
                Book Strategy Call
              </Button>
            </div>
          </div>
        </div>

        {/* VS Badge */}
        <div className="flex justify-center mt-8 lg:mt-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-1/2">
          <Badge variant="secondary" className="text-lg px-6 py-2 font-bold bg-background border-2">
            VS
          </Badge>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-card p-8 rounded-xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to 3× Your Qualified Demos?
            </h3>
            <p className="text-muted-foreground mb-6">
              We get you 2 proof of concept sales calls in 45 days, or you get your money back
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white"
                onClick={() => window.open('https://calendly.com/hamzamaqsood334/30min', '_blank')}
              >
                Book Discovery Call
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://calendly.com/hamzamaqsood334/30min', '_blank')}
              >
                Book Free Consultation
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              2 demos guaranteed • Takes 90 seconds to apply
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;