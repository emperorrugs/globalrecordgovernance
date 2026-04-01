import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/lib/auth-context";
import { ViewModeProvider } from "@/contexts/ViewModeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";

// Layouts
import { PublicLayout } from "@/components/PublicLayout";
import { AppLayout } from "@/components/AppLayout";
import { ArchiveLayout } from "@/components/ArchiveLayout";

// ═══ PUBLIC PORTAL PAGES ═══
import HomePage from "./pages/HomePage";
import PublicFramework from "./pages/PublicFramework";
import PublicDocuments from "./pages/PublicDocuments";
import PublicApplications from "./pages/PublicApplications";
import PublicSectors from "./pages/PublicSectors";
import PublicAbout from "./pages/PublicAbout";
import Contact from "./pages/Contact";

// Architecture & technical (public)
import SystemArchitecture from "./pages/SystemArchitecture";
import SecurityTrust from "./pages/SecurityTrust";
import DPIStack from "./pages/DPIStack";
import Interoperability from "./pages/Interoperability";
import Scalability from "./pages/Scalability";
import TechnicalBlueprints from "./pages/TechnicalBlueprints";
import Developer from "./pages/Developer";

// Framework & standards (public)
import GovernanceFramework from "./pages/GovernanceFramework";
import GovernanceEthics from "./pages/GovernanceEthics";
import StandardsCompliance from "./pages/StandardsCompliance";
import RiskMitigation from "./pages/RiskMitigation";
import Recognition from "./pages/Recognition";
import Transparency from "./pages/Transparency";

// International (public)
import OECDAlignment from "./pages/OECDAlignment";
import WorldBankAlignment from "./pages/WorldBankAlignment";
import UNAlignment from "./pages/UNAlignment";
import UNESCOAlignment from "./pages/UNESCOAlignment";
import G20DPIFramework from "./pages/G20DPIFramework";
import ITUGlobalStandards from "./pages/ITUGlobalStandards";
import InternationalCompliance from "./pages/InternationalCompliance";
import InternationalCooperation from "./pages/InternationalCooperation";

// Deployment (public)
import DeploymentScenarios from "./pages/DeploymentScenarios";
import SectorIntegrationExamples from "./pages/SectorIntegrationExamples";
import CanadaDeployment from "./pages/CanadaDeployment";
import SovereignDeployment from "./pages/SovereignDeployment";
import DeploymentPlanner from "./pages/DeploymentPlanner";
import NationalDeployment from "./pages/NationalDeployment";
import PilotEvaluation from "./pages/PilotEvaluation";
import PilotResults from "./pages/PilotResults";
import Procurement from "./pages/Procurement";

// Intelligence (public)
import ImpactModeling from "./pages/ImpactModeling";
import FinancialModel from "./pages/FinancialModel";
import RiskAssessment from "./pages/RiskAssessment";
import Maturity from "./pages/Maturity";
import StressTest from "./pages/StressTest";
import DPIComparison from "./pages/DPIComparison";
import CaseStudies from "./pages/CaseStudies";
import ImpactROI from "./pages/ImpactROI";

// Academy (public)
import AcademyPage from "./pages/AcademyPage";
import InstitutionalReadiness from "./pages/InstitutionalReadiness";
import Simulation from "./pages/Simulation";
import Roadmap from "./pages/Roadmap";

// Archive (public)
import Archive from "./pages/Archive";
import ReportsStudies from "./pages/ReportsStudies";
import Research from "./pages/Research";
import Partnerships from "./pages/Partnerships";
import ControlledAccess from "./pages/ControlledAccess";
import ArchiveOverview from "./pages/archive/ArchiveOverview";
import ArchivePublic from "./pages/archive/ArchivePublic";
import ArchiveGovernment from "./pages/archive/ArchiveGovernment";
import ArchivePartners from "./pages/archive/ArchivePartners";
import ArchiveLegalIP from "./pages/archive/ArchiveLegalIP";
import ArchiveMasterIndex from "./pages/archive/ArchiveMasterIndex";
import ArchiveDownloads from "./pages/archive/ArchiveDownloads";
import ArchiveIntelligent from "./pages/archive/ArchiveIntelligent";

// Other public pages
import TheProblem from "./pages/TheProblem";
import ExecutiveBrief from "./pages/ExecutiveBrief";
import ExecutiveSummary from "./pages/ExecutiveSummary";
import ExecutiveDossier from "./pages/ExecutiveDossier";
import InstitutionalBriefing from "./pages/InstitutionalBriefing";
import InstitutionalReview from "./pages/InstitutionalReview";
import InstitutionalBlueprint from "./pages/InstitutionalBlueprint";
import CredibilitySignals from "./pages/CredibilitySignals";
import UnifiedTransformation from "./pages/UnifiedTransformation";
import SubmissionReady from "./pages/SubmissionReady";
import SubmissionHub from "./pages/SubmissionHub";
import StakeholderSolutions from "./pages/StakeholderSolutions";
import StakeholderConsultation from "./pages/StakeholderConsultation";
import ValidationPathway from "./pages/ValidationPathway";
import GovernanceInterface from "./pages/GovernanceInterface";
import CriticalQuestions from "./pages/CriticalQuestions";
import StrategicGovernance from "./pages/StrategicGovernance";
import OperationalModel from "./pages/OperationalModel";
import SafeguardsTrust from "./pages/SafeguardsTrust";
import FutureProofing from "./pages/FutureProofing";
import OutreachMessages from "./pages/OutreachMessages";
import InternationalWhitepaper from "./pages/InternationalWhitepaper";
import AnchorChain from "./pages/AnchorChain";
import AnchorChainPrototype from "./pages/AnchorChainPrototype";
import Pricing from "./pages/Pricing";
import Marketplace from "./pages/Marketplace";
import Membership from "./pages/Membership";
import BeforeAfter from "./pages/BeforeAfter";
import AdvisoryBoard from "./pages/AdvisoryBoard";
import AdminDashboard from "./pages/AdminDashboard";
import Accessibility from "./pages/Accessibility";
import IPStatus from "./pages/IPStatus";
import Sitemap from "./pages/Sitemap";
import Simulator from "./pages/Simulator";
import Records from "./pages/Records";
import DataEntry from "./pages/DataEntry";
import WorkflowDemo from "./pages/WorkflowDemo";
import APIMock from "./pages/APIMock";
import Verification from "./pages/Verification";
import Systems from "./pages/Systems";
import Processes from "./pages/Processes";
import TRLTracker from "./pages/TRLTracker";
import CertificationReadiness from "./pages/CertificationReadiness";
import VerificationAPIProduct from "./pages/VerificationAPIProduct";
import SDKDeveloperHub from "./pages/SDKDeveloperHub";
import StandardsSubmission from "./pages/StandardsSubmission";
import LimitationsTransparency from "./pages/LimitationsTransparency";
import PartnerCertification from "./pages/PartnerCertification";
import MediaRoom from "./pages/MediaRoom";
import DeploymentEngine from "./pages/DeploymentEngine";

// Insights
import InsightsIndex from "./pages/InsightsIndex";
import MissingTrustLayer from "./pages/insights/MissingTrustLayer";
import InstitutionalMemoryFails from "./pages/insights/InstitutionalMemoryFails";
import AntiCaptureMechanisms from "./pages/insights/AntiCaptureMechanisms";
import AppendOnlyRecords from "./pages/insights/AppendOnlyRecords";
import SovereignTrustArchitecture from "./pages/insights/SovereignTrustArchitecture";

// OECD extras
import OECDSafeguards from "./pages/OECDSafeguards";
import OpenStandards from "./pages/OpenStandards";
import RiskRegister from "./pages/RiskRegister";
import Sustainability from "./pages/Sustainability";
import HumanRightsImpact from "./pages/HumanRightsImpact";

// Legal
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// ═══ CORE SYSTEM (APP) PAGES ═══
import AppLogin from "./pages/app/AppLogin";
import ResetPassword from "./pages/platform/ResetPassword";
import PlatformLayout from "./pages/platform/PlatformLayout";
import PlatformDashboard from "./pages/platform/PlatformDashboard";
import RecordsList from "./pages/platform/RecordsList";
import CreateRecord from "./pages/platform/CreateRecord";
import RecordDetail from "./pages/platform/RecordDetail";
import AuditTrail from "./pages/platform/AuditTrail";
import PublicVerifier from "./pages/platform/PublicVerifier";
import WorkflowQueue from "./pages/platform/WorkflowQueue";
import DisputesConsole from "./pages/platform/DisputesConsole";
import Reports from "./pages/platform/Reports";
import ValueCalculator from "./pages/platform/ValueCalculator";
import GuidedDemo from "./pages/platform/GuidedDemo";
import GuestDemoLayout from "./pages/platform/GuestDemoLayout";
import GuestDashboard from "./pages/platform/GuestDashboard";
import TamperSimulation from "./pages/platform/TamperSimulation";
import UseCaseSimulations from "./pages/platform/UseCaseSimulations";
import ChainIntegrity from "./pages/platform/ChainIntegrity";
import PublicVerifyPage from "./pages/platform/PublicVerifyPage";
import ProductModules from "./pages/platform/ProductModules";
import DemoScript from "./pages/platform/DemoScript";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
        <LanguageProvider>
        <ViewModeProvider>
          <ScrollToTop />
          <Routes>

            {/* ═══════════════════════════════════════════
                CORE SYSTEM — /app/* (Authenticated)
            ═══════════════════════════════════════════ */}
            <Route path="/app/login" element={<AppLogin />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/app" element={<PlatformLayout><PlatformDashboard /></PlatformLayout>} />
            <Route path="/app/dashboard" element={<PlatformLayout><PlatformDashboard /></PlatformLayout>} />
            <Route path="/app/records" element={<PlatformLayout><RecordsList /></PlatformLayout>} />
            <Route path="/app/records/create" element={<PlatformLayout><CreateRecord /></PlatformLayout>} />
            <Route path="/app/records/:id" element={<PlatformLayout><RecordDetail /></PlatformLayout>} />
            <Route path="/app/workflow" element={<PlatformLayout><WorkflowQueue /></PlatformLayout>} />
            <Route path="/app/audit" element={<PlatformLayout><AuditTrail /></PlatformLayout>} />
            <Route path="/app/verifications" element={<PlatformLayout><PublicVerifier /></PlatformLayout>} />
            <Route path="/app/disputes" element={<PlatformLayout><DisputesConsole /></PlatformLayout>} />
            <Route path="/app/reports" element={<PlatformLayout><Reports /></PlatformLayout>} />
            <Route path="/app/calculator" element={<PlatformLayout><ValueCalculator /></PlatformLayout>} />
            <Route path="/app/demo" element={<PlatformLayout><GuidedDemo /></PlatformLayout>} />
            <Route path="/app/tamper-test" element={<PlatformLayout><TamperSimulation /></PlatformLayout>} />
            <Route path="/app/use-cases" element={<PlatformLayout><UseCaseSimulations /></PlatformLayout>} />
            <Route path="/app/chain" element={<PlatformLayout><ChainIntegrity /></PlatformLayout>} />
            <Route path="/app/demo-script" element={<PlatformLayout><DemoScript /></PlatformLayout>} />

            {/* Guest Demo (no auth) */}
            <Route path="/demo/app" element={<GuestDemoLayout><GuestDashboard /></GuestDemoLayout>} />
            <Route path="/demo/app/records" element={<GuestDemoLayout><RecordsList /></GuestDemoLayout>} />
            <Route path="/demo/app/workflow" element={<GuestDemoLayout><WorkflowQueue /></GuestDemoLayout>} />
            <Route path="/demo/app/audit" element={<GuestDemoLayout><AuditTrail /></GuestDemoLayout>} />
            <Route path="/demo/app/verify" element={<GuestDemoLayout><PublicVerifier /></GuestDemoLayout>} />
            <Route path="/demo/app/disputes" element={<GuestDemoLayout><DisputesConsole /></GuestDemoLayout>} />
            <Route path="/demo/app/reports" element={<GuestDemoLayout><Reports /></GuestDemoLayout>} />

            {/* ═══════════════════════════════════════════
                PUBLIC FRAMEWORK PORTAL — /*
            ═══════════════════════════════════════════ */}

            {/* Homepage */}
            <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />

            {/* Primary public portal nav */}
            <Route path="/framework" element={<PublicLayout><PublicFramework /></PublicLayout>} />
            <Route path="/architecture" element={<PublicLayout><SystemArchitecture /></PublicLayout>} />
            <Route path="/applications" element={<PublicLayout><PublicApplications /></PublicLayout>} />
            <Route path="/sectors" element={<PublicLayout><PublicSectors /></PublicLayout>} />
            <Route path="/documents" element={<PublicLayout><PublicDocuments /></PublicLayout>} />
            <Route path="/verify" element={<PublicLayout><PublicVerifier /></PublicLayout>} />
            <Route path="/verify/public/:token" element={<PublicVerifyPage />} />
            <Route path="/modules" element={<PublicLayout><ProductModules /></PublicLayout>} />
            <Route path="/security-trust" element={<PublicLayout><SecurityTrust /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><PublicAbout /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

            {/* Extended public pages — using AppLayout (sidebar) for deep content */}
            <Route path="/the-problem" element={<AppLayout><TheProblem /></AppLayout>} />
            <Route path="/executive-brief" element={<AppLayout><ExecutiveBrief /></AppLayout>} />
            <Route path="/executive-summary" element={<ExecutiveSummary />} />
            <Route path="/governance-framework" element={<AppLayout><GovernanceFramework /></AppLayout>} />
            <Route path="/ethics" element={<AppLayout><GovernanceEthics /></AppLayout>} />
            <Route path="/compliance" element={<AppLayout><StandardsCompliance /></AppLayout>} />
            <Route path="/risk-mitigation" element={<AppLayout><RiskMitigation /></AppLayout>} />
            <Route path="/recognition" element={<AppLayout><Recognition /></AppLayout>} />
            <Route path="/transparency" element={<AppLayout><Transparency /></AppLayout>} />

            {/* International */}
            <Route path="/oecd-alignment" element={<AppLayout><OECDAlignment /></AppLayout>} />
            <Route path="/world-bank-alignment" element={<AppLayout><WorldBankAlignment /></AppLayout>} />
            <Route path="/un-alignment" element={<AppLayout><UNAlignment /></AppLayout>} />
            <Route path="/unesco-alignment" element={<AppLayout><UNESCOAlignment /></AppLayout>} />
            <Route path="/g20-dpi-framework" element={<AppLayout><G20DPIFramework /></AppLayout>} />
            <Route path="/itu-global-standards" element={<AppLayout><ITUGlobalStandards /></AppLayout>} />
            <Route path="/international-compliance" element={<AppLayout><InternationalCompliance /></AppLayout>} />
            <Route path="/international-cooperation" element={<AppLayout><InternationalCooperation /></AppLayout>} />

            {/* Architecture deep pages */}
            <Route path="/dpi-stack" element={<AppLayout><DPIStack /></AppLayout>} />
            <Route path="/interoperability" element={<AppLayout><Interoperability /></AppLayout>} />
            <Route path="/scalability" element={<AppLayout><Scalability /></AppLayout>} />
            <Route path="/blueprints" element={<AppLayout><TechnicalBlueprints /></AppLayout>} />
            <Route path="/developer" element={<AppLayout><Developer /></AppLayout>} />

            {/* Deployment */}
            <Route path="/deployment-scenarios" element={<AppLayout><DeploymentScenarios /></AppLayout>} />
            <Route path="/sector-integration" element={<AppLayout><SectorIntegrationExamples /></AppLayout>} />
            <Route path="/deployment" element={<AppLayout><NationalDeployment /></AppLayout>} />
            <Route path="/canada" element={<AppLayout><CanadaDeployment /></AppLayout>} />
            <Route path="/sovereign-deployment" element={<AppLayout><SovereignDeployment /></AppLayout>} />
            <Route path="/deployment-planner" element={<AppLayout><DeploymentPlanner /></AppLayout>} />
            <Route path="/pilot-evaluation" element={<AppLayout><PilotEvaluation /></AppLayout>} />
            <Route path="/pilot-results" element={<AppLayout><PilotResults /></AppLayout>} />
            <Route path="/procurement" element={<AppLayout><Procurement /></AppLayout>} />
            <Route path="/deploy" element={<PublicLayout><DeploymentEngine /></PublicLayout>} />

            {/* Intelligence */}
            <Route path="/impact-modeling" element={<AppLayout><ImpactModeling /></AppLayout>} />
            <Route path="/financial-model" element={<AppLayout><FinancialModel /></AppLayout>} />
            <Route path="/risk-assessment" element={<AppLayout><RiskAssessment /></AppLayout>} />
            <Route path="/maturity" element={<AppLayout><Maturity /></AppLayout>} />
            <Route path="/stress-test" element={<AppLayout><StressTest /></AppLayout>} />
            <Route path="/dpi-comparison" element={<AppLayout><DPIComparison /></AppLayout>} />
            <Route path="/case-studies" element={<AppLayout><CaseStudies /></AppLayout>} />
            <Route path="/impact" element={<AppLayout><ImpactROI /></AppLayout>} />
            <Route path="/value-calculator" element={<AppLayout><ValueCalculator /></AppLayout>} />

            {/* Academy */}
            <Route path="/academy" element={<AppLayout><AcademyPage /></AppLayout>} />
            <Route path="/readiness" element={<AppLayout><InstitutionalReadiness /></AppLayout>} />
            <Route path="/simulation" element={<AppLayout><Simulation /></AppLayout>} />
            <Route path="/roadmap" element={<AppLayout><Roadmap /></AppLayout>} />

            {/* Archive */}
            <Route path="/archive" element={<AppLayout><Archive /></AppLayout>} />
            <Route path="/reports" element={<AppLayout><ReportsStudies /></AppLayout>} />
            <Route path="/research" element={<AppLayout><Research /></AppLayout>} />
            <Route path="/partnerships" element={<AppLayout><Partnerships /></AppLayout>} />
            <Route path="/controlled-access" element={<AppLayout><ControlledAccess /></AppLayout>} />
            <Route path="/archive/public" element={<ArchiveLayout><ArchivePublic /></ArchiveLayout>} />
            <Route path="/archive/government" element={<ArchiveLayout><ArchiveGovernment /></ArchiveLayout>} />
            <Route path="/archive/partners" element={<ArchiveLayout><ArchivePartners /></ArchiveLayout>} />
            <Route path="/archive/legal-ip" element={<ArchiveLayout><ArchiveLegalIP /></ArchiveLayout>} />
            <Route path="/archive/master-index" element={<ArchiveLayout><ArchiveMasterIndex /></ArchiveLayout>} />
            <Route path="/archive/downloads" element={<ArchiveLayout><ArchiveDownloads /></ArchiveLayout>} />
            <Route path="/archive/intelligent" element={<ArchiveLayout><ArchiveIntelligent /></ArchiveLayout>} />

            {/* Standalone institutional pages */}
            <Route path="/briefing" element={<AppLayout><InstitutionalBriefing /></AppLayout>} />
            <Route path="/institutional-review" element={<AppLayout><InstitutionalReview /></AppLayout>} />
            <Route path="/institutional-blueprint" element={<AppLayout><InstitutionalBlueprint /></AppLayout>} />
            <Route path="/dossier" element={<AppLayout><ExecutiveDossier /></AppLayout>} />
            <Route path="/credibility-signals" element={<AppLayout><CredibilitySignals /></AppLayout>} />
            <Route path="/unified-transformation" element={<AppLayout><UnifiedTransformation /></AppLayout>} />
            <Route path="/submission-ready" element={<AppLayout><SubmissionReady /></AppLayout>} />
            <Route path="/submission-hub" element={<AppLayout><SubmissionHub /></AppLayout>} />
            <Route path="/stakeholders" element={<AppLayout><StakeholderSolutions /></AppLayout>} />
            <Route path="/stakeholder-consultation" element={<AppLayout><StakeholderConsultation /></AppLayout>} />
            <Route path="/validation" element={<AppLayout><ValidationPathway /></AppLayout>} />
            <Route path="/governance-interface" element={<AppLayout><GovernanceInterface /></AppLayout>} />
            <Route path="/critical-questions" element={<AppLayout><CriticalQuestions /></AppLayout>} />
            <Route path="/strategic-governance" element={<AppLayout><StrategicGovernance /></AppLayout>} />
            <Route path="/operational-model" element={<AppLayout><OperationalModel /></AppLayout>} />
            <Route path="/safeguards-trust" element={<AppLayout><SafeguardsTrust /></AppLayout>} />
            <Route path="/future-proofing" element={<AppLayout><FutureProofing /></AppLayout>} />
            <Route path="/outreach" element={<AppLayout><OutreachMessages /></AppLayout>} />
            <Route path="/whitepaper" element={<AppLayout><InternationalWhitepaper /></AppLayout>} />
            <Route path="/anchor-chain" element={<AppLayout><AnchorChain /></AppLayout>} />
            <Route path="/anchor-chain-prototype" element={<AppLayout><AnchorChainPrototype /></AppLayout>} />
            <Route path="/pricing" element={<AppLayout><Pricing /></AppLayout>} />
            <Route path="/marketplace" element={<PublicLayout><Marketplace /></PublicLayout>} />
            <Route path="/membership" element={<AppLayout><Membership /></AppLayout>} />
            <Route path="/before-after" element={<AppLayout><BeforeAfter /></AppLayout>} />
            <Route path="/advisory-board" element={<AppLayout><AdvisoryBoard /></AppLayout>} />
            <Route path="/admin" element={<AppLayout><AdminDashboard /></AppLayout>} />
            <Route path="/accessibility" element={<AppLayout><Accessibility /></AppLayout>} />
            <Route path="/ip-status" element={<AppLayout><IPStatus /></AppLayout>} />
            <Route path="/sitemap" element={<AppLayout><Sitemap /></AppLayout>} />
            <Route path="/trl-tracker" element={<AppLayout><TRLTracker /></AppLayout>} />
            <Route path="/verification-api" element={<AppLayout><VerificationAPIProduct /></AppLayout>} />
            <Route path="/sdk" element={<AppLayout><SDKDeveloperHub /></AppLayout>} />
            <Route path="/standards-submission" element={<AppLayout><StandardsSubmission /></AppLayout>} />
            <Route path="/limitations" element={<AppLayout><LimitationsTransparency /></AppLayout>} />
            <Route path="/partner-certification" element={<AppLayout><PartnerCertification /></AppLayout>} />
            <Route path="/media-room" element={<AppLayout><MediaRoom /></AppLayout>} />
            <Route path="/certification-readiness" element={<AppLayout><CertificationReadiness /></AppLayout>} />

            {/* Simulation / demo pages */}
            <Route path="/simulator" element={<AppLayout><Simulator /></AppLayout>} />
            <Route path="/records" element={<AppLayout><Records /></AppLayout>} />
            <Route path="/data-entry" element={<AppLayout><DataEntry /></AppLayout>} />
            <Route path="/workflow" element={<AppLayout><WorkflowDemo /></AppLayout>} />
            <Route path="/api-mock" element={<AppLayout><APIMock /></AppLayout>} />
            <Route path="/verification" element={<AppLayout><Verification /></AppLayout>} />
            <Route path="/systems" element={<AppLayout><Systems /></AppLayout>} />
            <Route path="/processes" element={<AppLayout><Processes /></AppLayout>} />
            <Route path="/tamper-test" element={<AppLayout><TamperSimulation /></AppLayout>} />
            <Route path="/use-cases-demo" element={<AppLayout><UseCaseSimulations /></AppLayout>} />

            {/* Insights */}
            <Route path="/insights" element={<AppLayout><InsightsIndex /></AppLayout>} />
            <Route path="/insights/missing-trust-layer" element={<AppLayout><MissingTrustLayer /></AppLayout>} />
            <Route path="/insights/institutional-memory-fails" element={<AppLayout><InstitutionalMemoryFails /></AppLayout>} />
            <Route path="/insights/anti-capture-mechanisms" element={<AppLayout><AntiCaptureMechanisms /></AppLayout>} />
            <Route path="/insights/append-only-records" element={<AppLayout><AppendOnlyRecords /></AppLayout>} />
            <Route path="/insights/sovereign-trust-architecture" element={<AppLayout><SovereignTrustArchitecture /></AppLayout>} />

            {/* OECD extras */}
            <Route path="/oecd-safeguards" element={<AppLayout><OECDSafeguards /></AppLayout>} />
            <Route path="/open-standards" element={<AppLayout><OpenStandards /></AppLayout>} />
            <Route path="/risk-register" element={<AppLayout><RiskRegister /></AppLayout>} />
            <Route path="/sustainability" element={<AppLayout><Sustainability /></AppLayout>} />
            <Route path="/human-rights-impact" element={<AppLayout><HumanRightsImpact /></AppLayout>} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<PublicLayout><PrivacyPolicy /></PublicLayout>} />
            <Route path="/terms-of-service" element={<PublicLayout><TermsOfService /></PublicLayout>} />

            {/* Legacy redirects */}
            <Route path="/auth" element={<Navigate to="/app/login" replace />} />
            <Route path="/how-it-works" element={<Navigate to="/framework" replace />} />
            <Route path="/governance" element={<Navigate to="/governance-framework" replace />} />
            <Route path="/dashboards" element={<Navigate to="/" replace />} />
            <Route path="/source-of-truth" element={<Navigate to="/" replace />} />
            <Route path="/what-is-grgf" element={<Navigate to="/framework" replace />} />
            <Route path="/dashboard" element={<Navigate to="/app" replace />} />
            <Route path="/countries" element={<Navigate to="/sectors" replace />} />
            <Route path="/security" element={<Navigate to="/security-trust" replace />} />
            <Route path="/origin" element={<Navigate to="/about" replace />} />
            <Route path="/use-cases" element={<Navigate to="/applications" replace />} />
            <Route path="/framework-old" element={<Navigate to="/framework" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ViewModeProvider>
        </LanguageProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
