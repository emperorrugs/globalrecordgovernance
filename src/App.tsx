import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { ViewModeProvider } from "@/contexts/ViewModeContext";
import Index from "./pages/Index";
import WhatIsGRGF from "./pages/WhatIsGRGF";
import Architecture from "./pages/Architecture";
import Simulator from "./pages/Simulator";
import Verification from "./pages/Verification";
import UseCases from "./pages/UseCases";
import ArchivePage from "./pages/Archive";
import GovernancePage from "./pages/Governance";
import Security from "./pages/Security";
import Origin from "./pages/Origin";
import Contact from "./pages/Contact";
import Countries from "./pages/Countries";
import Academy from "./pages/Academy";
import NotFound from "./pages/NotFound";

// Legacy routes
import Framework from "./pages/Framework";
import Systems from "./pages/Systems";
import Processes from "./pages/Processes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ViewModeProvider>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/what-is-grgf" element={<WhatIsGRGF />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/simulator" element={<Simulator />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/countries" element={<Countries />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/governance" element={<GovernancePage />} />
              <Route path="/security" element={<Security />} />
              <Route path="/origin" element={<Origin />} />
              <Route path="/contact" element={<Contact />} />
              {/* Legacy routes */}
              <Route path="/framework" element={<Framework />} />
              <Route path="/systems" element={<Systems />} />
              <Route path="/processes" element={<Processes />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </ViewModeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
