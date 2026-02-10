import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ViewModeProvider } from "@/contexts/ViewModeContext";
import { AppLayout } from "@/components/AppLayout";
import { ArchiveLayout } from "@/components/ArchiveLayout";
import Index from "./pages/Index";

// Archive pages
import ArchiveOverview from "./pages/archive/ArchiveOverview";
import ArchivePublic from "./pages/archive/ArchivePublic";
import ArchiveGovernment from "./pages/archive/ArchiveGovernment";
import ArchivePartners from "./pages/archive/ArchivePartners";
import ArchiveLegalIP from "./pages/archive/ArchiveLegalIP";
import ArchiveMasterIndex from "./pages/archive/ArchiveMasterIndex";
import ArchiveDownloads from "./pages/archive/ArchiveDownloads";

// Simulation sub-pages (accessed from Launch Simulation button)
import Simulation from "./pages/Simulation";
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
          <Routes>
            {/* One-page home */}
            <Route path="/" element={<Index />} />

            {/* Simulation pages wrapped in AppLayout */}
            <Route path="/simulation" element={<AppLayout><Simulation /></AppLayout>} />
            <Route path="/simulator" element={<AppLayout><Simulator /></AppLayout>} />
            <Route path="/records" element={<AppLayout><Records /></AppLayout>} />
            <Route path="/data-entry" element={<AppLayout><DataEntry /></AppLayout>} />
            <Route path="/workflow" element={<AppLayout><WorkflowDemo /></AppLayout>} />
            <Route path="/api-mock" element={<AppLayout><APIMock /></AppLayout>} />
            <Route path="/verification" element={<AppLayout><Verification /></AppLayout>} />

            {/* Archive pages */}
            <Route path="/archive" element={<ArchiveLayout><ArchiveOverview /></ArchiveLayout>} />
            <Route path="/archive/public" element={<ArchiveLayout><ArchivePublic /></ArchiveLayout>} />
            <Route path="/archive/government" element={<ArchiveLayout><ArchiveGovernment /></ArchiveLayout>} />
            <Route path="/archive/partners" element={<ArchiveLayout><ArchivePartners /></ArchiveLayout>} />
            <Route path="/archive/legal-ip" element={<ArchiveLayout><ArchiveLegalIP /></ArchiveLayout>} />
            <Route path="/archive/master-index" element={<ArchiveLayout><ArchiveMasterIndex /></ArchiveLayout>} />
            <Route path="/archive/downloads" element={<ArchiveLayout><ArchiveDownloads /></ArchiveLayout>} />

            {/* Legacy redirects — all go to home now */}
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/how-it-works" element={<Navigate to="/" replace />} />
            <Route path="/governance" element={<Navigate to="/" replace />} />
            <Route path="/dashboards" element={<Navigate to="/" replace />} />
            <Route path="/source-of-truth" element={<Navigate to="/" replace />} />
            <Route path="/what-is-grgf" element={<Navigate to="/" replace />} />
            <Route path="/architecture" element={<Navigate to="/" replace />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="/countries" element={<Navigate to="/" replace />} />
            <Route path="/academy" element={<Navigate to="/" replace />} />
            {/* /archive is now a real route above */}
            <Route path="/security" element={<Navigate to="/" replace />} />
            <Route path="/origin" element={<Navigate to="/" replace />} />
            <Route path="/contact" element={<Navigate to="/" replace />} />
            <Route path="/framework" element={<Navigate to="/" replace />} />
            <Route path="/systems" element={<Navigate to="/" replace />} />
            <Route path="/processes" element={<Navigate to="/" replace />} />
            <Route path="/use-cases" element={<Navigate to="/" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ViewModeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
