import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { name: "Done-for-You Multi-Channel Outbound", href: "/services/done-for-you-outbound" },
  { name: "End-to-End Clay Playbooks", href: "/services/clay-playbooks" },
  { name: "GTM & RevOps Engineering", href: "/services/gtm-revops-engineering" },
  { name: "C-Level Network Activation", href: "/services/c-level-network-activation" },
  { name: "AI-Powered Sales Acceleration", href: "/services/ai-powered-sales-acceleration" },
  { name: "Revenue Growth Consulting", href: "/services/revenue-growth-consulting" }
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10">
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-96 p-4 bg-background">
                      <div className="grid gap-3">
                        {services.map((service) => (
                          <NavigationMenuLink key={service.name} asChild>
                            <a
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                            </a>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefits
            </button>
            
            <a href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
              Case Studies
            </a>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <Button variant="hero" size="sm" asChild className="hidden md:inline-flex">
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
              Book Call
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                {/* Services Dropdown for Mobile */}
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-foreground">Services</span>
                  <div className="flex flex-col space-y-2 pl-4">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                <a 
                  href="/about" 
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  About
                </a>
                
                <a 
                  href="/#benefits"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => scrollToSection('benefits'), 100);
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Benefits
                </a>
                
                <a 
                  href="/case-studies"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Case Studies
                </a>
                
                <a 
                  href="/#contact"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => scrollToSection('contact'), 100);
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Contact
                </a>

                <Button variant="hero" size="lg" asChild className="mt-4">
                  <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
                    Book Call
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;