import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, TrendingUp } from "lucide-react";
import dashboardImage from "@/assets/dashboard-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                <Rocket className="w-4 h-4" />
                Launch & Scale Faster
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Go-to-Market
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Excellence
                </span>
                for SaaS Startups
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                We accelerate SaaS growth with proven GTM strategies, from product-market fit to scalable revenue engines. 
                Transform your startup into a market leader.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Start Your Growth Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
                View Case Studies
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">300%</div>
                <div className="text-sm text-muted-foreground">Avg Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">90%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">SaaS Success Stories</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={dashboardImage} 
                alt="GTM Dashboard Analytics" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-card border border-primary/20 rounded-xl p-6 shadow-card backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold">$50M+</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;