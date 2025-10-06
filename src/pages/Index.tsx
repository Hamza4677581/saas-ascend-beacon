import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ComparisonSection from "@/components/ComparisonSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <ExpertiseSection />
      <ComparisonSection />
      <ServicesSection />
      <BenefitsSection />
      
      {/* C-Level Connections Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">C-Level Network & Connections</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Established relationships and meeting opportunities across Fortune 500 companies and industry leaders
            </p>
            
            <div className="space-y-12">
              {/* Technology & SaaS */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">Technology & SaaS</h3>
                <div className="overflow-hidden">
                  <div className="flex animate-marquee-fast space-x-4">
                    {[
                      "Microsoft", "Google", "Amazon", "Salesforce", "Oracle", "SAP",
                      "Adobe", "IBM", "ServiceNow", "Workday", "Snowflake", "HubSpot",
                      "Atlassian", "Zoom", "Slack", "Dropbox", "Box", "Twilio"
                    ].concat([
                      "Microsoft", "Google", "Amazon", "Salesforce", "Oracle", "SAP",
                      "Adobe", "IBM", "ServiceNow", "Workday", "Snowflake", "HubSpot"
                    ]).map((company, index) => (
                      <div key={`${company}-${index}`} className="flex-shrink-0 p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300 min-w-[200px]">
                        <div className="text-sm font-medium text-center">{company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FMCG Companies */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">FMCG & Consumer Goods</h3>
                <div className="overflow-hidden">
                  <div className="flex animate-[scroll-left_30s_linear_infinite] space-x-4">
                    {[
                      "Procter & Gamble", "Unilever", "Nestlé", "Coca-Cola", "PepsiCo", "Kraft Heinz",
                      "Mondelez", "General Mills", "Kellogg's", "Mars", "Danone", "L'Oréal",
                      "Johnson & Johnson", "Colgate-Palmolive", "Reckitt", "Henkel"
                    ].concat([
                      "Procter & Gamble", "Unilever", "Nestlé", "Coca-Cola", "PepsiCo", "Kraft Heinz",
                      "Mondelez", "General Mills", "Kellogg's", "Mars", "Danone", "L'Oréal"
                    ]).map((company, index) => (
                      <div key={`${company}-${index}`} className="flex-shrink-0 p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300 min-w-[200px]">
                        <div className="text-sm font-medium text-center">{company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pharma Companies */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">Pharmaceutical & Healthcare</h3>
                <div className="overflow-hidden">
                  <div className="flex animate-[scroll-right_25s_linear_infinite] space-x-4">
                    {[
                      "Pfizer", "Johnson & Johnson", "Roche", "Novartis", "Merck", "AbbVie",
                      "Bristol Myers Squibb", "AstraZeneca", "GlaxoSmithKline", "Eli Lilly", "Sanofi", "Gilead Sciences"
                    ].concat([
                      "Pfizer", "Johnson & Johnson", "Roche", "Novartis", "Merck", "AbbVie",
                      "Bristol Myers Squibb", "AstraZeneca"
                    ]).map((company, index) => (
                      <div key={`${company}-${index}`} className="flex-shrink-0 p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300 min-w-[200px]">
                        <div className="text-sm font-medium text-center">{company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consulting & Big 4 */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">Consulting & Professional Services</h3>
                <div className="overflow-hidden">
                  <div className="flex animate-[scroll-left_20s_linear_infinite] space-x-4">
                    {[
                      "McKinsey & Company", "Boston Consulting Group", "Bain & Company", "Deloitte",
                      "PwC", "KPMG", "EY", "Accenture", "Oliver Wyman", "Roland Berger"
                    ].concat([
                      "McKinsey & Company", "Boston Consulting Group", "Bain & Company", "Deloitte",
                      "PwC", "KPMG"
                    ]).map((company, index) => (
                      <div key={`${company}-${index}`} className="flex-shrink-0 p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300 min-w-[200px]">
                        <div className="text-sm font-medium text-center">{company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Private Equity & Finance */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">Private Equity & Investment</h3>
                <div className="overflow-hidden">
                  <div className="flex animate-[scroll-right_35s_linear_infinite] space-x-4">
                    {[
                      "Blackstone", "KKR", "Carlyle Group", "Apollo Global", "TPG", "Warburg Pincus",
                      "Bain Capital", "CVC Capital", "Advent International", "General Atlantic"
                    ].concat([
                      "Blackstone", "KKR", "Carlyle Group", "Apollo Global", "TPG", "Warburg Pincus"
                    ]).map((company, index) => (
                      <div key={`${company}-${index}`} className="flex-shrink-0 p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300 min-w-[200px]">
                        <div className="text-sm font-medium text-center">{company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Banking & Financial Services */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">Banking & Financial Services</h3>
                <div className="overflow-hidden">
                  <div className="flex animate-[scroll-left_40s_linear_infinite] space-x-4">
                    {[
                      "JPMorgan Chase", "Bank of America", "Wells Fargo", "Goldman Sachs", "Morgan Stanley", "Citigroup",
                      "HSBC", "Deutsche Bank", "Credit Suisse", "UBS", "Barclays", "Standard Chartered"
                    ].concat([
                      "JPMorgan Chase", "Bank of America", "Wells Fargo", "Goldman Sachs", "Morgan Stanley", "Citigroup"
                    ]).map((company, index) => (
                      <div key={`${company}-${index}`} className="flex-shrink-0 p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300 min-w-[200px]">
                        <div className="text-sm font-medium text-center">{company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Insurance Companies */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">Insurance & Risk Management</h3>
                <div className="overflow-hidden">
                  <div className="flex animate-[scroll-right_30s_linear_infinite] space-x-4">
                    {[
                      "Berkshire Hathaway", "Allianz", "AXA", "Ping An", "China Life", "Prudential",
                      "MetLife", "AIG", "Zurich", "Munich Re", "Swiss Re", "Aviva"
                    ].concat([
                      "Berkshire Hathaway", "Allianz", "AXA", "Ping An", "China Life", "Prudential"
                    ]).map((company, index) => (
                      <div key={`${company}-${index}`} className="flex-shrink-0 p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300 min-w-[200px]">
                        <div className="text-sm font-medium text-center">{company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Telecommunications & Media */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">Telecommunications & Media</h3>
                <div className="overflow-hidden">
                  <div className="flex animate-[scroll-left_35s_linear_infinite] space-x-4">
                    {[
                      "Verizon", "AT&T", "T-Mobile", "Comcast", "Charter Communications", "Vodafone",
                      "Orange", "Telefónica", "Deutsche Telekom", "BT Group", "Netflix", "Disney"
                    ].concat([
                      "Verizon", "AT&T", "T-Mobile", "Comcast", "Charter Communications", "Vodafone"
                    ]).map((company, index) => (
                      <div key={`${company}-${index}`} className="flex-shrink-0 p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300 min-w-[200px]">
                        <div className="text-sm font-medium text-center">{company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Retail & E-commerce */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">Retail & E-commerce</h3>
                <div className="overflow-hidden">
                  <div className="flex animate-[scroll-right_30s_linear_infinite] space-x-4">
                    {[
                      "Walmart", "Amazon", "Costco", "Target", "Home Depot", "Kroger",
                      "Alibaba", "JD.com", "Tesco", "Carrefour", "IKEA", "Best Buy"
                    ].concat([
                      "Walmart", "Amazon", "Costco", "Target", "Home Depot", "Kroger"
                    ]).map((company, index) => (
                      <div key={`${company}-${index}`} className="flex-shrink-0 p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300 min-w-[200px]">
                        <div className="text-sm font-medium text-center">{company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Real Estate & Power */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-6">Real Estate</h3>
                  <div className="overflow-hidden">
                    <div className="flex animate-[scroll-left_25s_linear_infinite] space-x-4">
                      {[
                        "CBRE Group", "Jones Lang LaSalle", "Cushman & Wakefield", "Colliers International",
                        "Brookfield Asset Management", "Simon Property Group"
                      ].concat([
                        "CBRE Group", "Jones Lang LaSalle", "Cushman & Wakefield"
                      ]).map((company, index) => (
                        <div key={`${company}-${index}`} className="flex-shrink-0 p-3 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300 min-w-[180px]">
                          <div className="text-sm font-medium text-center">{company}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-6">Energy & Utilities</h3>
                  <div className="overflow-hidden">
                    <div className="flex animate-[scroll-right_25s_linear_infinite] space-x-4">
                      {[
                        "ExxonMobil", "Shell", "BP", "Chevron", "TotalEnergies", "NextEra Energy",
                        "Duke Energy", "Dominion Energy"
                      ].concat([
                        "ExxonMobil", "Shell", "BP", "Chevron"
                      ]).map((company, index) => (
                        <div key={`${company}-${index}`} className="flex-shrink-0 p-3 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300 min-w-[180px]">
                          <div className="text-sm font-medium text-center">{company}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Manufacturing & Automotive */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">Manufacturing & Automotive</h3>
                <div className="overflow-hidden">
                  <div className="flex animate-marquee-fast space-x-4">
                    {[
                      "Toyota", "Volkswagen", "General Motors", "Ford", "Tesla", "BMW",
                      "Mercedes-Benz", "Honda", "Nissan", "Siemens", "GE", "3M"
                    ].concat([
                      "Toyota", "Volkswagen", "General Motors", "Ford", "Tesla", "BMW"
                    ]).map((company, index) => (
                      <div key={`${company}-${index}`} className="flex-shrink-0 p-4 bg-gradient-card rounded-lg border border-primary/10 hover:shadow-card transition-all duration-300 min-w-[200px]">
                        <div className="text-sm font-medium text-center">{company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-card rounded-xl p-8 border border-primary/20">
              <h4 className="text-xl font-semibold mb-4">Executive Access & Strategic Partnerships</h4>
              <p className="text-muted-foreground">
                Through my extensive network and proven track record, I maintain active relationships with C-level executives 
                across these industry-leading organizations. This enables rapid market validation, strategic partnerships, 
                and accelerated business development opportunities for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;