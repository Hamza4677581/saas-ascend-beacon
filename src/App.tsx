import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DoneForYouOutbound from "./pages/services/DoneForYouOutbound";
import ClayPlaybooks from "./pages/services/ClayPlaybooks";
import GTMRevOpsEngineering from "./pages/services/GTMRevOpsEngineering";
import CLevelNetworkActivation from "./pages/services/CLevelNetworkActivation";
import AIPoweredSalesAcceleration from "./pages/services/AIPoweredSalesAcceleration";
import RevenueGrowthConsulting from "./pages/services/RevenueGrowthConsulting";
import CaseStudies from "./pages/CaseStudies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/done-for-you-outbound" element={<DoneForYouOutbound />} />
          <Route path="/services/clay-playbooks" element={<ClayPlaybooks />} />
          <Route path="/services/gtm-revops-engineering" element={<GTMRevOpsEngineering />} />
          <Route path="/services/c-level-network-activation" element={<CLevelNetworkActivation />} />
          <Route path="/services/ai-powered-sales-acceleration" element={<AIPoweredSalesAcceleration />} />
          <Route path="/services/revenue-growth-consulting" element={<RevenueGrowthConsulting />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
