export interface MarketplaceProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  icon: string;
  tier: "core" | "professional" | "enterprise" | "sovereign";
  deploymentTypes: ("SaaS" | "On-Premise" | "API" | "Hybrid")[];
  pricing: { model: string; startingAt: string };
  capabilities: string[];
  integrations: string[];
  compliance: string[];
  impactMetrics: { label: string; value: string }[];
  sector: string;
  featured?: boolean;
}

export const marketplaceCategories = [
  { id: "anti-corruption", name: "Anti-Corruption Systems", icon: "Shield", count: 8 },
  { id: "public-sector", name: "Public Sector Solutions", icon: "Landmark", count: 12 },
  { id: "financial", name: "Financial Governance", icon: "Banknote", count: 9 },
  { id: "inspection", name: "Inspection & Compliance", icon: "ClipboardCheck", count: 7 },
  { id: "crisis", name: "Crisis & Incident Tracking", icon: "AlertTriangle", count: 6 },
  { id: "legal", name: "Legal Evidence Systems", icon: "Scale", count: 8 },
  { id: "ai-governance", name: "AI Governance Modules", icon: "Brain", count: 5 },
  { id: "healthcare", name: "Healthcare Governance", icon: "Heart", count: 7 },
  { id: "infrastructure", name: "Infrastructure Oversight", icon: "HardHat", count: 6 },
  { id: "developer", name: "Developer Tools", icon: "Code", count: 4 },
];

export const marketplaceProducts: MarketplaceProduct[] = [
  {
    id: "anchor-chain-engine",
    name: "Anchor Chain™ Engine",
    tagline: "The cryptographic backbone of institutional truth",
    description: "Core governance record engine with SHA-256 hash-chaining, authority binding, and append-only evidence logs. The foundational layer for all GRGF deployments.",
    category: "public-sector",
    icon: "Link",
    tier: "core",
    deploymentTypes: ["On-Premise", "Hybrid"],
    pricing: { model: "License", startingAt: "$150,000/yr" },
    capabilities: [
      "SHA-256 hash-chain integrity",
      "Authority context binding",
      "Append-only event log",
      "Multi-tenant isolation",
      "Real-time Merkle root computation",
      "Tamper-evident audit trail"
    ],
    integrations: ["REST API", "gRPC", "AMQP", "Webhook"],
    compliance: ["ISO 27001", "ISO 15489", "SOC 2 Type II", "GDPR"],
    impactMetrics: [
      { label: "Evidence Retrieval", value: "99% faster" },
      { label: "Audit Cost Reduction", value: "78%" },
      { label: "Integrity Assurance", value: "100%" }
    ],
    sector: "Government",
    featured: true,
  },
  {
    id: "grgf-verify",
    name: "GRGF Verify",
    tagline: "Public verification without confidential exposure",
    description: "Enable citizens, auditors, and institutions to independently verify the integrity and provenance of sealed governance records — without revealing confidential content.",
    category: "public-sector",
    icon: "CheckCircle",
    tier: "core",
    deploymentTypes: ["SaaS", "API"],
    pricing: { model: "Per-verification", startingAt: "$0.02/check" },
    capabilities: [
      "Record integrity validation",
      "Provenance chain verification",
      "Status confirmation (sealed/disputed/revoked)",
      "Zero-knowledge proof support",
      "Public verification portal",
      "Bulk verification API"
    ],
    integrations: ["REST API", "Widget embed", "Mobile SDK"],
    compliance: ["ISO 27001", "WCAG 2.1 AA"],
    impactMetrics: [
      { label: "Verification Speed", value: "<200ms" },
      { label: "Public Trust Score", value: "+94%" },
      { label: "Fraud Detection", value: "Real-time" }
    ],
    sector: "All Sectors",
    featured: true,
  },
  {
    id: "anti-corruption-shield",
    name: "Anti-Corruption Shield",
    tagline: "Deterministic accountability for public institutions",
    description: "Comprehensive anti-corruption system that captures every decision, approval, and omission with cryptographic proof. Prevents retroactive manipulation and ensures complete accountability chains.",
    category: "anti-corruption",
    icon: "ShieldAlert",
    tier: "enterprise",
    deploymentTypes: ["On-Premise", "Hybrid"],
    pricing: { model: "National License", startingAt: "$2,000,000/yr" },
    capabilities: [
      "Decision audit trail",
      "Omission detection engine",
      "Whistleblower-safe evidence capture",
      "Cross-institution correlation",
      "Retroactive manipulation detection",
      "Authority delegation tracking"
    ],
    integrations: ["SAP GRC", "Oracle GRC", "Custom ERP"],
    compliance: ["UNCAC", "OECD Anti-Bribery", "ISO 37001"],
    impactMetrics: [
      { label: "Corruption Risk Reduction", value: "85%" },
      { label: "Investigation Time", value: "72% faster" },
      { label: "Evidence Admissibility", value: "100%" }
    ],
    sector: "Government",
    featured: true,
  },
  {
    id: "financial-integrity-suite",
    name: "Financial Integrity Suite",
    tagline: "Sovereign-grade financial governance",
    description: "Complete financial governance platform for central banks, regulators, and treasury departments. Captures every financial decision with ISO 20022 compliant evidence chains.",
    category: "financial",
    icon: "Banknote",
    tier: "sovereign",
    deploymentTypes: ["On-Premise"],
    pricing: { model: "Sovereign License", startingAt: "$5,000,000/yr" },
    capabilities: [
      "Transaction evidence capture",
      "Regulatory decision binding",
      "ISO 20022 integration",
      "Cross-border compliance",
      "Real-time risk monitoring",
      "Sanctions screening integration"
    ],
    integrations: ["SWIFT", "ISO 20022", "FIX Protocol", "Bloomberg"],
    compliance: ["Basel III", "MiFID II", "FATF", "ISO 20022"],
    impactMetrics: [
      { label: "Compliance Cost Reduction", value: "65%" },
      { label: "Regulatory Response Time", value: "90% faster" },
      { label: "Audit Readiness", value: "Always-on" }
    ],
    sector: "Finance",
    featured: true,
  },
  {
    id: "healthcare-governance",
    name: "Healthcare Governance Engine",
    tagline: "Clinical decision evidence for patient safety",
    description: "HL7 FHIR-native governance engine for hospitals, health authorities, and pharmaceutical regulators. Captures clinical decisions, inspections, and compliance events with full chain-of-custody.",
    category: "healthcare",
    icon: "Heart",
    tier: "enterprise",
    deploymentTypes: ["SaaS", "On-Premise", "Hybrid"],
    pricing: { model: "Per-bed License", startingAt: "$50/bed/month" },
    capabilities: [
      "Clinical decision capture",
      "HL7 FHIR event ingestion",
      "Medication chain-of-custody",
      "Inspection evidence recording",
      "Patient safety incident tracking",
      "Cross-facility governance"
    ],
    integrations: ["HL7 FHIR", "Epic", "Cerner", "MEDITECH"],
    compliance: ["HIPAA", "PHIPA", "ISO 13485", "GxP"],
    impactMetrics: [
      { label: "Documentation Time", value: "60% reduction" },
      { label: "Audit Preparation", value: "85% faster" },
      { label: "Incident Response", value: "4x faster" }
    ],
    sector: "Healthcare",
  },
  {
    id: "inspection-compliance",
    name: "Inspection & Compliance Engine",
    tagline: "Field-to-record integrity in real time",
    description: "Mobile-first inspection platform that captures field evidence with GPS, timestamp, and photographic proof — sealed into the Anchor Chain™ at the point of observation.",
    category: "inspection",
    icon: "ClipboardCheck",
    tier: "professional",
    deploymentTypes: ["SaaS", "API"],
    pricing: { model: "Subscription", startingAt: "$2,500/month" },
    capabilities: [
      "Mobile evidence capture",
      "GPS-stamped observations",
      "Photo/video evidence sealing",
      "Automated compliance scoring",
      "Inspector assignment engine",
      "Real-time dashboard"
    ],
    integrations: ["REST API", "Mobile SDK (iOS/Android)", "SAP"],
    compliance: ["ISO 9001", "ISO 14001", "OSHA"],
    impactMetrics: [
      { label: "Inspection Throughput", value: "3x increase" },
      { label: "Evidence Integrity", value: "100%" },
      { label: "Report Generation", value: "Automated" }
    ],
    sector: "Infrastructure",
  },
  {
    id: "crisis-response",
    name: "Crisis Response Tracker",
    tagline: "Evidence-grade crisis management",
    description: "Real-time crisis and incident tracking with tamper-proof event logs. Designed for emergency management agencies, disaster response, and public safety operations.",
    category: "crisis",
    icon: "AlertTriangle",
    tier: "professional",
    deploymentTypes: ["SaaS", "Hybrid"],
    pricing: { model: "Subscription", startingAt: "$5,000/month" },
    capabilities: [
      "Real-time incident recording",
      "Multi-agency coordination",
      "Resource allocation tracking",
      "After-action evidence preservation",
      "Public communication audit",
      "Offline-capable operation"
    ],
    integrations: ["CAP Protocol", "MQTT", "WebSocket", "Radio APIs"],
    compliance: ["NIMS/ICS", "ISO 22301", "Sendai Framework"],
    impactMetrics: [
      { label: "Response Coordination", value: "55% faster" },
      { label: "Evidence Preservation", value: "100%" },
      { label: "After-Action Analysis", value: "Automated" }
    ],
    sector: "Public Safety",
  },
  {
    id: "legal-evidence",
    name: "Legal Evidence Vault",
    tagline: "Court-admissible digital governance evidence",
    description: "Purpose-built evidence management for courts, prosecutors, and regulatory enforcement. Every record meets chain-of-custody requirements for legal admissibility.",
    category: "legal",
    icon: "Scale",
    tier: "enterprise",
    deploymentTypes: ["On-Premise"],
    pricing: { model: "License", startingAt: "$500,000/yr" },
    capabilities: [
      "Chain-of-custody enforcement",
      "Legal hold management",
      "Evidence disclosure controls",
      "Court-ready export formats",
      "Witness attestation binding",
      "Jurisdiction-aware retention"
    ],
    integrations: ["Case Management Systems", "e-Discovery", "Court APIs"],
    compliance: ["Federal Rules of Evidence", "ISO 27037", "GDPR"],
    impactMetrics: [
      { label: "Evidence Admissibility", value: "100%" },
      { label: "Discovery Time", value: "80% reduction" },
      { label: "Case Resolution", value: "40% faster" }
    ],
    sector: "Justice",
  },
  {
    id: "ai-governance-module",
    name: "AI Governance Module",
    tagline: "Govern the ungovernable",
    description: "Capture and verify AI model decisions, training data provenance, and deployment approvals. Built for AI regulators and responsible AI officers.",
    category: "ai-governance",
    icon: "Brain",
    tier: "enterprise",
    deploymentTypes: ["SaaS", "API"],
    pricing: { model: "Per-model", startingAt: "$10,000/model/yr" },
    capabilities: [
      "Model decision audit trail",
      "Training data provenance",
      "Bias detection evidence",
      "Deployment approval chain",
      "Incident recording for AI failures",
      "Regulatory reporting automation"
    ],
    integrations: ["MLflow", "Kubernetes", "REST API", "Python SDK"],
    compliance: ["EU AI Act", "NIST AI RMF", "OECD AI Principles"],
    impactMetrics: [
      { label: "Compliance Coverage", value: "100%" },
      { label: "Audit Preparation", value: "90% faster" },
      { label: "Incident Response", value: "Real-time" }
    ],
    sector: "Technology",
  },
  {
    id: "procurement-integrity",
    name: "Procurement Integrity Engine",
    tagline: "Every bid, every decision, every dollar — verified",
    description: "End-to-end procurement governance from tender publication to contract award. Prevents bid-rigging, ensures fair evaluation, and creates an unbreakable audit trail.",
    category: "anti-corruption",
    icon: "FileCheck",
    tier: "enterprise",
    deploymentTypes: ["SaaS", "Hybrid"],
    pricing: { model: "Per-contract", startingAt: "$500/contract" },
    capabilities: [
      "Tender publication sealing",
      "Bid submission integrity",
      "Evaluation committee tracking",
      "Award decision binding",
      "Vendor performance evidence",
      "Cross-reference anomaly detection"
    ],
    integrations: ["SAP Ariba", "Oracle Procurement", "BuyandSell.gc.ca"],
    compliance: ["WTO GPA", "UNCITRAL", "PSPC Standards"],
    impactMetrics: [
      { label: "Procurement Savings", value: "12-18%" },
      { label: "Bid Protest Reduction", value: "65%" },
      { label: "Cycle Time", value: "40% faster" }
    ],
    sector: "Procurement",
  },
  {
    id: "federation-node",
    name: "Federation Node",
    tagline: "Sovereign interoperability without centralized control",
    description: "Deploy a federated governance node that cross-witnesses Merkle roots with partner jurisdictions. Enables multi-country governance transparency without data pooling.",
    category: "public-sector",
    icon: "Globe",
    tier: "sovereign",
    deploymentTypes: ["On-Premise"],
    pricing: { model: "Bilateral Agreement", startingAt: "Custom" },
    capabilities: [
      "Merkle root cross-witnessing",
      "Split-view attack prevention",
      "Sovereign data residency",
      "Bilateral sync protocols",
      "Inclusion/consistency proofs",
      "Non-existence verification"
    ],
    integrations: ["X.509 PKI", "mTLS", "Custom bilateral APIs"],
    compliance: ["ISO 27001", "OECD DPI", "Geneva Conventions"],
    impactMetrics: [
      { label: "Cross-border Trust", value: "Cryptographic" },
      { label: "Sync Latency", value: "<5 seconds" },
      { label: "Data Sovereignty", value: "100% preserved" }
    ],
    sector: "International",
    featured: true,
  },
  {
    id: "grgf-api-gateway",
    name: "GRGF API Gateway",
    tagline: "Integrate governance integrity into any system",
    description: "RESTful API gateway for developers building governance-aware applications. Submit records, verify integrity, query audit trails, and embed verification widgets.",
    category: "developer",
    icon: "Code",
    tier: "professional",
    deploymentTypes: ["SaaS", "API"],
    pricing: { model: "API Calls", startingAt: "$0.001/call" },
    capabilities: [
      "Record submission API",
      "Integrity verification endpoint",
      "Audit trail query API",
      "Webhook event streaming",
      "SDK (Python, JS, Java, Go)",
      "Sandbox environment"
    ],
    integrations: ["REST", "GraphQL", "WebSocket", "gRPC"],
    compliance: ["OpenAPI 3.0", "OAuth 2.0", "ISO 27001"],
    impactMetrics: [
      { label: "Integration Time", value: "< 1 day" },
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Latency", value: "<50ms p99" }
    ],
    sector: "Developer",
  },
];
