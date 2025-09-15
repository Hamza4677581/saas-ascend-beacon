import { Mail, Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/130cdfb4-5ad5-49e7-9336-8ec96fb873f1.png" 
                alt="GTM Accelerators Logo" 
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">GTM</span>
                <span className="text-sm text-muted-foreground -mt-1">ACCELERATORS</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md">
              We accelerate SaaS growth with proven GTM strategies, from product-market fit to scalable revenue engines.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hamza@gtmaccelerators.co" className="hover:text-primary transition-colors">
                  hamza@gtmaccelerators.co
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/services/done-for-you-multi-channel-outbound" className="hover:text-primary transition-colors">Multi-Channel Outbound</a></li>
              <li><a href="/services/end-to-end-clay-playbooks" className="hover:text-primary transition-colors">Clay Playbooks</a></li>
              <li><a href="/services/gtm-revops-engineering" className="hover:text-primary transition-colors">RevOps Engineering</a></li>
              <li><a href="/services/revenue-growth-consulting" className="hover:text-primary transition-colors">Growth Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get Started</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Book Consultation</a></li>
              <li><a href="/case-studies" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">All Services</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 GTM Accelerators. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;