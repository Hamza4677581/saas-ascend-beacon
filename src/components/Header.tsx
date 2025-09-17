import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

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
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10">
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-96 p-4">
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

          {/* CTA Button */}
          <Button variant="hero" size="sm" asChild>
            <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer">
              Book Call
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;