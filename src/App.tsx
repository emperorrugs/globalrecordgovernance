import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { ViewModeProvider } from "@/contexts/ViewModeContext";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import GovernancePage from "./pages/Governance";
import Simulation from "./pages/Simulation";
import Dashboards from "./pages/Dashboards";
import SourceOfTruth from "./pages/SourceOfTruth";

// Simulation sub-pages (accessed from Simulation hub)
import Simulator from "./pages/Simulator";
import Records from "./pages/Records";
import DataEntry from "./pages/DataEntry";
import WorkflowDemo from "./pages/WorkflowDemo";
import APIMock from "./pages/APIMock";
import Verification from "./pages/Verification";

import NotFound from "./pages/NotFound";

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
              {/* Primary navigation */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/governance" element={<GovernancePage />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/dashboards" element={<Dashboards />} />
              <Route path="/source-of-truth" element={<SourceOfTruth />} />

              {/* Simulation sub-pages */}
              <Route path="/simulator" element={<Simulator />} />
              <Route path="/records" element={<Records />} />
              <Route path="/data-entry" element={<DataEntry />} />
              <Route path="/workflow" element={<WorkflowDemo />} />
              <Route path="/api-mock" element={<APIMock />} />
              <Route path="/verification" element={<Verification />} />

              {/* Legacy redirects */}
              <Route path="/what-is-grgf" element={<Navigate to="/about" replace />} />
              <Route path="/architecture" element={<Navigate to="/how-it-works" replace />} />
              <Route path="/dashboard" element={<Navigate to="/dashboards" replace />} />
              <Route path="/countries" element={<Navigate to="/about" replace />} />
              <Route path="/academy" element={<Navigate to="/about" replace />} />
              <Route path="/archive" element={<Navigate to="/source-of-truth" replace />} />
              <Route path="/security" element={<Navigate to="/governance" replace />} />
              <Route path="/origin" element={<Navigate to="/governance" replace />} />
              <Route path="/contact" element={<Navigate to="/" replace />} />
              <Route path="/framework" element={<Navigate to="/how-it-works" replace />} />
              <Route path="/systems" element={<Navigate to="/how-it-works" replace />} />
              <Route path="/processes" element={<Navigate to="/how-it-works" replace />} />
              <Route path="/use-cases" element={<Navigate to="/about" replace />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </ViewModeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
