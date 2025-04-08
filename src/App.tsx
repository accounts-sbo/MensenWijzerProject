
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmailJSProvider from "./components/EmailJSProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <EmailJSProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/over-mij" element={<Index />} />
            <Route path="/identiteit-merkontwikkeling" element={<Index />} />
            <Route path="/communicatie-mediastrategie" element={<Index />} />
            <Route path="/presentatie-profilering" element={<Index />} />
            <Route path="/werkwijze" element={<Index />} />
            <Route path="/contact" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </EmailJSProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
