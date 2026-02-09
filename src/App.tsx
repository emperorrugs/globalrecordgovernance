import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import Index from "./pages/Index";
import Framework from "./pages/Framework";
import Systems from "./pages/Systems";
import Processes from "./pages/Processes";
import Countries from "./pages/Countries";
import Academy from "./pages/Academy";
import ArchivePage from "./pages/Archive";
import GovernancePage from "./pages/Governance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/processes" element={<Processes />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/governance" element={<GovernancePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
