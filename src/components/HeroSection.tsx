import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, TrendingUp } from "lucide-react";
import dashboardImage from "@/assets/dashboard-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 md:pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                <Rocket className="w-4 h-4" />
                Launch & Scale Faster
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  GTM Excellence
                </span>
                <span className="block text-foreground mt-2">
                  for SaaS, AI, B2B & Tech
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl pt-2">
                Build scalable revenue engines that outperform traditional sales teams by 300%+
              </p>
              
              <p className="text-base text-muted-foreground max-w-xl">
                From strategy to execution, we deliver proven systems that transform companies into market leaders.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild className="group">
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary/20 hover:bg-primary/10">
                <a href="/case-studies">
                  View Case Studies
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-8 justify-center lg:justify-start pt-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary">300%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Avg Growth</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary">90%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Retention</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Success Stories</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={dashboardImage} 
                alt="GTM Dashboard Analytics" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-gradient-card border border-primary/20 rounded-xl p-4 lg:p-6 shadow-card backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <div>
                  <div className="text-base lg:text-lg font-bold">$50M+</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Revenue Generated</div>
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