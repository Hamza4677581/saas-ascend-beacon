import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Target, Users, Zap, TrendingUp, ArrowRight } from "lucide-react";

const DoneForYouOutbound = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Done-for-You Multi-Channel Outbound
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Triple Your Qualified Demos
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                In 45 Days
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              No more empty calendars. We reach your best buyers through email, LinkedIn, and cold calls 
              while you focus on closing deals. Guaranteed results or your money back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
                  Book Strategy Call
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Download Framework
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Outbound Engine</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to generate qualified leads consistently without hiring SDRs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Multi-Channel Campaigns",
                description: "Email, LinkedIn, and cold calling sequences that work together for maximum impact."
              },
              {
                icon: Users,
                title: "Lead Qualification",
                description: "We pre-qualify every prospect before they hit your calendar, ensuring high-quality meetings."
              },
              {
                icon: Zap,
                title: "Personalized Outreach",
                description: "Every message is tailored to your prospect's specific pain points and company situation."
              },
              {
                icon: TrendingUp,
                title: "Demo Booking",
                description: "We handle all scheduling and follow-ups, delivering qualified prospects ready to buy."
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

      {/* Results Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-muted-foreground">
              See what happens when you let experts handle your outbound
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "3x", label: "More Qualified Demos" },
              { metric: "45 Days", label: "Time to Results" },
              { metric: "60%", label: "Higher Reply Rates" },
              { metric: "$0", label: "SDR Hiring Costs" }
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
            Ready to Fill Your Calendar?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a strategy call to see how we can triple your qualified demos in the next 45 days.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
              Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DoneForYouOutbound;