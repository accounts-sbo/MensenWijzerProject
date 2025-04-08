
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutMe from "./pages/AboutMe";
import IdentityBranding from "./pages/IdentityBranding";
import CommunicationMedia from "./pages/CommunicationMedia";
import PresentationProfiling from "./pages/PresentationProfiling";
import Approach from "./pages/Approach";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/over-mij" element={<AboutMe />} />
          <Route path="/identiteit-merkontwikkeling" element={<IdentityBranding />} />
          <Route path="/communicatie-mediastrategie" element={<CommunicationMedia />} />
          <Route path="/presentatie-profilering" element={<PresentationProfiling />} />
          <Route path="/werkwijze" element={<Approach />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
