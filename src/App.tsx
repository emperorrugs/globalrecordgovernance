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

// Core institutional pages
import SystemArchitecture from "./pages/SystemArchitecture";
import SecurityTrust from "./pages/SecurityTrust";
import GovernanceFramework from "./pages/GovernanceFramework";
import NationalDeployment from "./pages/NationalDeployment";
import ImpactROI from "./pages/ImpactROI";
import StakeholderSolutions from "./pages/StakeholderSolutions";
import StandardsCompliance from "./pages/StandardsCompliance";
import InstitutionalBriefing from "./pages/InstitutionalBriefing";
import CanadaDeployment from "./pages/CanadaDeployment";
import GovernanceEthics from "./pages/GovernanceEthics";
import ExecutiveDossier from "./pages/ExecutiveDossier";
import GovernanceInterface from "./pages/GovernanceInterface";
import CriticalQuestions from "./pages/CriticalQuestions";
import InstitutionalReadiness from "./pages/InstitutionalReadiness";
import ValidationPathway from "./pages/ValidationPathway";

// New OECD-aligned pages
import DPIStack from "./pages/DPIStack";
import SafeguardsTrust from "./pages/SafeguardsTrust";
import StrategicGovernance from "./pages/StrategicGovernance";
import OperationalModel from "./pages/OperationalModel";
import DeploymentScenarios from "./pages/DeploymentScenarios";
import RiskMitigation from "./pages/RiskMitigation";
import OECDAlignment from "./pages/OECDAlignment";
import InternationalCooperation from "./pages/InternationalCooperation";

// Standalone governance pages
import Systems from "./pages/Systems";
import Processes from "./pages/Processes";
import TechnicalBlueprints from "./pages/TechnicalBlueprints";
import PilotProgramme from "./pages/PilotProgramme";
import AcademyPage from "./pages/AcademyPage";
import DPIComparison from "./pages/DPIComparison";
import Sitemap from "./pages/Sitemap";
import ControlledAccess from "./pages/ControlledAccess";
import PilotEvaluation from "./pages/PilotEvaluation";
import Archive from "./pages/Archive";
import ExecutiveSummary from "./pages/ExecutiveSummary";
import OutreachMessages from "./pages/OutreachMessages";
import ImpactModeling from "./pages/ImpactModeling";
import TheProblem from "./pages/TheProblem";
import Contact from "./pages/Contact";
import FutureProofing from "./pages/FutureProofing";

// Simulation sub-pages
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

            {/* New OECD-aligned primary pages */}
            <Route path="/dpi-stack" element={<AppLayout><DPIStack /></AppLayout>} />
            <Route path="/safeguards-trust" element={<AppLayout><SafeguardsTrust /></AppLayout>} />
            <Route path="/strategic-governance" element={<AppLayout><StrategicGovernance /></AppLayout>} />
            <Route path="/operational-model" element={<AppLayout><OperationalModel /></AppLayout>} />
            <Route path="/deployment-scenarios" element={<AppLayout><DeploymentScenarios /></AppLayout>} />
            <Route path="/risk-mitigation" element={<AppLayout><RiskMitigation /></AppLayout>} />
            <Route path="/oecd-alignment" element={<AppLayout><OECDAlignment /></AppLayout>} />
            <Route path="/international-cooperation" element={<AppLayout><InternationalCooperation /></AppLayout>} />

            {/* Core institutional pages (retained) */}
            <Route path="/architecture" element={<AppLayout><SystemArchitecture /></AppLayout>} />
            <Route path="/security-trust" element={<AppLayout><SecurityTrust /></AppLayout>} />
            <Route path="/governance-framework" element={<AppLayout><GovernanceFramework /></AppLayout>} />
            <Route path="/deployment" element={<AppLayout><NationalDeployment /></AppLayout>} />
            <Route path="/impact" element={<AppLayout><ImpactROI /></AppLayout>} />
            <Route path="/stakeholders" element={<AppLayout><StakeholderSolutions /></AppLayout>} />
            <Route path="/compliance" element={<AppLayout><StandardsCompliance /></AppLayout>} />
            <Route path="/briefing" element={<AppLayout><InstitutionalBriefing /></AppLayout>} />
            <Route path="/canada" element={<AppLayout><CanadaDeployment /></AppLayout>} />
            <Route path="/ethics" element={<AppLayout><GovernanceEthics /></AppLayout>} />
            <Route path="/dossier" element={<AppLayout><ExecutiveDossier /></AppLayout>} />
            <Route path="/governance-interface" element={<AppLayout><GovernanceInterface /></AppLayout>} />
            <Route path="/critical-questions" element={<AppLayout><CriticalQuestions /></AppLayout>} />
            <Route path="/readiness" element={<AppLayout><InstitutionalReadiness /></AppLayout>} />
            <Route path="/validation" element={<AppLayout><ValidationPathway /></AppLayout>} />

            {/* Simulation pages */}
            <Route path="/simulation" element={<AppLayout><Simulation /></AppLayout>} />
            <Route path="/simulator" element={<AppLayout><Simulator /></AppLayout>} />
            <Route path="/records" element={<AppLayout><Records /></AppLayout>} />
            <Route path="/data-entry" element={<AppLayout><DataEntry /></AppLayout>} />
            <Route path="/workflow" element={<AppLayout><WorkflowDemo /></AppLayout>} />
            <Route path="/api-mock" element={<AppLayout><APIMock /></AppLayout>} />
            <Route path="/verification" element={<AppLayout><Verification /></AppLayout>} />

            {/* Standalone governance pages */}
            <Route path="/systems" element={<AppLayout><Systems /></AppLayout>} />
            <Route path="/processes" element={<AppLayout><Processes /></AppLayout>} />
            <Route path="/blueprints" element={<AppLayout><TechnicalBlueprints /></AppLayout>} />
            <Route path="/pilot" element={<AppLayout><PilotEvaluation /></AppLayout>} />
            <Route path="/pilot-evaluation" element={<AppLayout><PilotEvaluation /></AppLayout>} />
            <Route path="/academy" element={<AppLayout><AcademyPage /></AppLayout>} />
            <Route path="/dpi-comparison" element={<AppLayout><DPIComparison /></AppLayout>} />
            <Route path="/sitemap" element={<AppLayout><Sitemap /></AppLayout>} />
            <Route path="/controlled-access" element={<AppLayout><ControlledAccess /></AppLayout>} />
            <Route path="/executive-summary" element={<ExecutiveSummary />} />
            <Route path="/outreach" element={<AppLayout><OutreachMessages /></AppLayout>} />
            <Route path="/impact-modeling" element={<AppLayout><ImpactModeling /></AppLayout>} />
            <Route path="/the-problem" element={<AppLayout><TheProblem /></AppLayout>} />
            <Route path="/contact" element={<AppLayout><Contact /></AppLayout>} />
            <Route path="/future-proofing" element={<AppLayout><FutureProofing /></AppLayout>} />

            {/* Archive pages */}
            <Route path="/archive" element={<AppLayout><Archive /></AppLayout>} />
            <Route path="/archive/public" element={<ArchiveLayout><ArchivePublic /></ArchiveLayout>} />
            <Route path="/archive/government" element={<ArchiveLayout><ArchiveGovernment /></ArchiveLayout>} />
            <Route path="/archive/partners" element={<ArchiveLayout><ArchivePartners /></ArchiveLayout>} />
            <Route path="/archive/legal-ip" element={<ArchiveLayout><ArchiveLegalIP /></ArchiveLayout>} />
            <Route path="/archive/master-index" element={<ArchiveLayout><ArchiveMasterIndex /></ArchiveLayout>} />
            <Route path="/archive/downloads" element={<ArchiveLayout><ArchiveDownloads /></ArchiveLayout>} />

            {/* Legacy redirects */}
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/how-it-works" element={<Navigate to="/" replace />} />
            <Route path="/governance" element={<Navigate to="/governance-framework" replace />} />
            <Route path="/dashboards" element={<Navigate to="/" replace />} />
            <Route path="/source-of-truth" element={<Navigate to="/" replace />} />
            <Route path="/what-is-grgf" element={<Navigate to="/" replace />} />
            <Route path="/architecture-old" element={<Navigate to="/architecture" replace />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="/countries" element={<Navigate to="/" replace />} />
            <Route path="/security" element={<Navigate to="/security-trust" replace />} />
            <Route path="/origin" element={<Navigate to="/" replace />} />
            <Route path="/framework" element={<Navigate to="/governance-framework" replace />} />
            <Route path="/use-cases" element={<Navigate to="/stakeholders" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ViewModeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
