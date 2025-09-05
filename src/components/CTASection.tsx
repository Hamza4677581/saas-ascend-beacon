import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Mail, MessageSquare, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main CTA Card */}
        <Card className="relative overflow-hidden bg-gradient-hero border-primary/20 shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/20" />
          <div className="absolute top-4 right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-primary-glow/10 rounded-full blur-2xl" />
          
          <CardContent className="relative z-10 p-12 text-center bg-black">
            <Badge variant="outline" className="border-primary/30 text-primary mb-6">
              Ready to Scale?
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Accelerate Your
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                SaaS Growth Journey
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your SaaS startup into a market leader? 
              Book a strategy session and discover your path to exponential growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="group">
                Book Strategy Session
                <Calendar className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
                Download GTM Guide
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            {/* Contact Options */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>Quick 15-min call</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>No commitment required</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-4">
            <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm">hamza@gtmaccelerators.co</p>
              <p className="text-muted-foreground text-sm">Response within 2 hours</p>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Book a Call</h3>
              <p className="text-muted-foreground text-sm">Free 30-min consultation</p>
              <p className="text-muted-foreground text-sm">Available today</p>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-muted-foreground text-sm">Instant support</p>
              <p className="text-muted-foreground text-sm">Available 9AM-6PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;