import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ProductLaunchStrategy from "./pages/services/ProductLaunchStrategy";
import CustomerAcquisition from "./pages/services/CustomerAcquisition";
import RevenueOperations from "./pages/services/RevenueOperations";
import MarketExpansion from "./pages/services/MarketExpansion";
import GrowthAcceleration from "./pages/services/GrowthAcceleration";
import MetricsAnalytics from "./pages/services/MetricsAnalytics";
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
          <Route path="/services/product-launch-strategy" element={<ProductLaunchStrategy />} />
          <Route path="/services/customer-acquisition" element={<CustomerAcquisition />} />
          <Route path="/services/revenue-operations" element={<RevenueOperations />} />
          <Route path="/services/market-expansion" element={<MarketExpansion />} />
          <Route path="/services/growth-acceleration" element={<GrowthAcceleration />} />
          <Route path="/services/metrics-and-analytics" element={<MetricsAnalytics />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
