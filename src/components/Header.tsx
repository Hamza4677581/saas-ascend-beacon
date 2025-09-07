import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/130cdfb4-5ad5-49e7-9336-8ec96fb873f1.png" 
              alt="GTM Accelerators Logo" 
              className="h-8 w-8"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">GTM</span>
              <span className="text-xs text-muted-foreground -mt-1">ACCELERATORS</span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="hero" size="sm">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;