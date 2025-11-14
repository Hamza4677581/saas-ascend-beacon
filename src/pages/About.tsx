import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { 
  ArrowRight, 
  Linkedin, 
  TrendingUp, 
  Users, 
  Rocket, 
  Target,
  CheckCircle,
  DollarSign,
  Building
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge variant="outline" className="border-primary/20 text-primary">
                    Meet the Founders
                  </Badge>
                  
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Hamza Maqsood
                    <span className="block bg-gradient-primary bg-clip-text text-transparent text-2xl md:text-3xl mt-2">
                      GTM Architect | Technology Advisor | Automation Expert
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground">
                    Specialized in scaling B2B startups in the AI and Vertical SaaS space through intelligent automation 
                    and revenue engineering. Transformed 50+ companies from early-stage to million-dollar ARR with proven 
                    GTM systems and cutting-edge automation strategies that eliminate growth bottlenecks.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gradient-card rounded-lg border border-primary/10">
                    <div className="text-3xl font-bold text-primary mb-1">7+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-card rounded-lg border border-primary/10">
                    <div className="text-3xl font-bold text-primary mb-1">$50M+</div>
                    <div className="text-sm text-muted-foreground">Revenue Generated</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
                      Schedule a Strategy Call
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://www.linkedin.com/in/hamza-maqsood-b936811b7/" target="_blank" rel="noopener noreferrer" className="group">
                      <Linkedin className="mr-2 w-5 h-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right - Photo */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-glow">
                  <img 
                    src="/lovable-uploads/a3628c63-1944-49a1-beb2-a0cf7e8664d6.png" 
                    alt="Hamza Maqsood - SaaS Growth Strategist" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
                
                {/* Floating Achievement Card */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-card border border-primary/20 rounded-xl p-6 shadow-card backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">Million Dollar</div>
                      <div className="text-sm text-muted-foreground">MRR Achieved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey in B2B SaaS</h2>
            <p className="text-xl text-muted-foreground">
              From startup challenges to scaling success, I've navigated every stage of the SaaS growth journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Startup Genesis",
                description: "Helped early-stage SaaS companies find product-market fit and establish their go-to-market foundation."
              },
              {
                icon: Users,
                title: "Team Building",
                description: "Built and scaled high-performing GTM teams across sales, marketing, and customer success functions."
              },
              {
                icon: DollarSign,
                title: "Revenue Growth",
                description: "Consistently delivered 300%+ revenue growth through strategic GTM optimization and execution."
              },
              {
                icon: Building,
                title: "Enterprise Scale",
                description: "Guided companies from initial revenue to million-dollar MRR with sustainable, repeatable processes."
              }
            ].map((milestone, index) => (
              <Card key={milestone.title} className="text-center border-primary/10 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-xl mx-auto w-fit mb-4">
                    <milestone.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Expertise */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
                  <p className="text-xl text-muted-foreground">
                    My deep understanding of B2B SaaS dynamics enables me to identify growth levers 
                    and implement strategies that drive sustainable, scalable success.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Go-to-Market Strategy Development",
                    "Product-Market Fit Optimization", 
                    "Revenue Operations & Sales Process",
                    "Customer Acquisition & Retention",
                    "Pricing Strategy & Revenue Models",
                    "Team Building & Leadership Development",
                    "Market Expansion & Scaling Operations",
                    "Data-Driven Growth Optimization"
                  ].map((expertise) => (
                    <div key={expertise} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{expertise}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Results */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Track Record of Success</h3>
                  <p className="text-muted-foreground mb-8">
                    Consistent results across various B2B SaaS verticals and company stages.
                  </p>
                </div>

                <div className="grid gap-6">
                  {[
                    {
                      metric: "50+",
                      description: "B2B SaaS Companies Scaled",
                      icon: Building
                    },
                    {
                      metric: "300%",
                      description: "Average Revenue Growth",
                      icon: TrendingUp
                    },
                    {
                      metric: "90%",
                      description: "Client Retention Rate",
                      icon: Target
                    }
                  ].map((result) => (
                    <Card key={result.description} className="border-primary/10">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <result.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{result.metric}</div>
                          <div className="text-sm text-muted-foreground">{result.description}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack Expertise</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Expert in selecting and implementing the right sales tech and mar tech solutions for optimal GTM performance
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">Sales Tech</h3>
                <div className="grid gap-4">
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Salesforce</div>
                    <div className="text-sm text-muted-foreground">CRM & Sales Automation</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">HubSpot</div>
                    <div className="text-sm text-muted-foreground">Inbound Sales Platform</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Clay</div>
                    <div className="text-sm text-muted-foreground">Data Enrichment</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Outreach</div>
                    <div className="text-sm text-muted-foreground">Sales Engagement</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Attio</div>
                    <div className="text-sm text-muted-foreground">Modern CRM</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Apollo</div>
                    <div className="text-sm text-muted-foreground">Sales Intelligence</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">Automation</h3>
                <div className="grid gap-4">
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Make</div>
                    <div className="text-sm text-muted-foreground">Workflow Automation</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Zapier</div>
                    <div className="text-sm text-muted-foreground">App Integration</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">n8n</div>
                    <div className="text-sm text-muted-foreground">Advanced Automation</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">GoHighLevel</div>
                    <div className="text-sm text-muted-foreground">All-in-One Platform</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Notion</div>
                    <div className="text-sm text-muted-foreground">Workspace Automation</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Airtable</div>
                    <div className="text-sm text-muted-foreground">Database Automation</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">Mar Tech & Intent</h3>
                <div className="grid gap-4">
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">6sense</div>
                    <div className="text-sm text-muted-foreground">Intent Data Platform</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">ZoomInfo</div>
                    <div className="text-sm text-muted-foreground">B2B Database</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Marketo</div>
                    <div className="text-sm text-muted-foreground">Marketing Automation</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Pardot</div>
                    <div className="text-sm text-muted-foreground">B2B Marketing</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Customer.io</div>
                    <div className="text-sm text-muted-foreground">Customer Messaging</div>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300">
                    <div className="text-lg font-semibold mb-2">Segment</div>
                    <div className="text-sm text-muted-foreground">Customer Data Platform</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-xl p-8 border border-primary/20">
              <h4 className="text-xl font-semibold mb-4">Strategic Technology Selection</h4>
              <p className="text-muted-foreground">
                I help you choose the right combination of tools for your specific business needs, ensuring seamless 
                integration across your entire GTM stack. From lead generation to customer success, every tool is 
                strategically selected to maximize ROI and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Philosophy</h2>
            <blockquote className="text-2xl font-medium text-muted-foreground italic mb-8">
              "Success in B2B SaaS isn't just about having a great product—it's about building 
              systems, processes, and teams that can scale sustainably while delivering exceptional value to customers."
            </blockquote>
            <div className="text-lg text-muted-foreground">
              <p className="mb-4">
                I believe in a data-driven, customer-centric approach to growth. Every strategy I develop 
                is grounded in deep market research, competitive analysis, and a thorough understanding 
                of your unique value proposition.
              </p>
              <p>
                My goal isn't just to help you grow—it's to build the foundation for long-term, 
                sustainable success that positions your company as a market leader.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Your SaaS?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how my experience and proven methodologies can accelerate your growth journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/hamzamaqsood334/30min" target="_blank" rel="noopener noreferrer" className="group">
                  Book a Strategy Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/case-studies">
                  View Success Stories
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;