import { PageHeader, Section, InfoCard } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import {
  Shield, Database, FileText, Globe, Server, Lock, Cpu, Eye,
  ArrowRight, CheckCircle, AlertTriangle, Layers, GitBranch,
} from "lucide-react";

const TechnicalBlueprints = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Technical Blueprints"
        subtitle="Detailed architecture documentation for System A (Evidence Backbone) and System B (Document Processing Pipeline) — the two technical pillars underpinning GRGF."
      />

      {/* System A */}
      <Section title="System A — Evidence Backbone" className="border-b border-border">
        <div className="governance-card border-l-2 border-l-accent mb-6">
          <p className="text-sm text-foreground leading-relaxed">
            A verifiable event evidence backbone that records actions and omissions with cryptographic proofs and public verification. System A establishes integrity, policy evaluation, and public proofs.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          {[
            { icon: <Server className="h-5 w-5" />, title: "Event Ingestion", description: "Captures governance events (actions, decisions, omissions) and processes them through the integrity pipeline.", meta: "PROTOCOL: REST API · ASYNC PROCESSING" },
            { icon: <Shield className="h-5 w-5" />, title: "Policy Engine (OPA)", description: "Evaluates incoming events against codified governance policy rules using Open Policy Agent. Produces deterministic, auditable policy decisions.", meta: "ENGINE: OPEN POLICY AGENT · DETERMINISTIC" },
            { icon: <Lock className="h-5 w-5" />, title: "Cryptographic Proofs", description: "Generates SHA-256 hashes and Merkle proof bundles for every sealed event, enabling independent verification without system access.", meta: "INTEGRITY: SHA-256 · MERKLE TREES · WORM STORAGE" },
            { icon: <Eye className="h-5 w-5" />, title: "Public Verification", description: "Publishes proof bundles to a public verifier endpoint. Any party can independently verify record integrity.", meta: "ACCESS: PUBLIC · READ-ONLY · INDEPENDENT" },
          ].map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>

        <h3 className="institutional-heading text-lg font-semibold mb-4">Key APIs</h3>
        <div className="space-y-2 mb-6">
          {[
            { api: "Event Ingestion API", desc: "Submit governance events for processing and sealing" },
            { api: "Proof Retrieval API", desc: "Retrieve cryptographic proofs and Merkle bundles for sealed events" },
            { api: "Policy Decision API", desc: "Query policy evaluation results for specific events" },
            { api: "CICE Attestation API", desc: "Generate Continuous Compliance Evidence attestations" },
            { api: "Verifiable Credentials API", desc: "Issue W3C-compatible verifiable credentials for governance events" },
          ].map((item, i) => (
            <div key={item.api} className="governance-card">
              <div className="flex items-start gap-3">
                <span className="hash-text shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4 className="font-serif text-sm font-semibold">{item.api}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="institutional-heading text-lg font-semibold mb-4">Security & Compliance</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Canada-only AWS regions",
            "Object-lock (WORM) storage",
            "Encryption at rest and in transit",
            "Pseudonymisation of identifiers",
            "WCAG 2.2 accessibility compliance",
            "SCIM/SSO identity management",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
              <span className="text-xs">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* System B */}
      <Section title="System B — Document Processing Pipeline" className="border-b border-border bg-card/30">
        <div className="governance-card border-l-2 border-l-accent mb-6">
          <p className="text-sm text-foreground leading-relaxed">
            An air-gapped offline pipeline that ingests documents, extracts content, runs classification and omission detection, and emits only hashed metadata to System A. Original documents remain in local institutional custody.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          {[
            { icon: <FileText className="h-5 w-5" />, title: "Document Ingestion", description: "Accepts institutional documents in multiple formats. Documents are processed locally and never leave institutional custody.", meta: "MODE: AIR-GAPPED · LOCAL CUSTODY" },
            { icon: <Cpu className="h-5 w-5" />, title: "Content Extraction & NER", description: "Extracts text, performs Named Entity Recognition, and classifies content according to governance taxonomy.", meta: "PROCESSING: NLP · CLASSIFICATION · NER" },
            { icon: <AlertTriangle className="h-5 w-5" />, title: "Omission Detection", description: "Identifies expected governance actions that are absent from the record — a unique GRGF capability that provides evidence for governance gaps.", meta: "CAPABILITY: OMISSION-AWARE · GAP DETECTION" },
            { icon: <GitBranch className="h-5 w-5" />, title: "Metadata Emission", description: "Emits only hashed metadata and audit events to System A. No document content crosses the air gap — preserving sovereignty and confidentiality.", meta: "OUTPUT: HASHES ONLY · NO CONTENT TRANSFER" },
          ].map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>

        <div className="governance-card">
          <p className="text-sm text-foreground font-medium">
            <span className="text-accent">Design principle:</span> System B operates in strict isolation. It emits only cryptographic hashes and structured metadata — never document content. This preserves institutional sovereignty while enabling verifiable governance.
          </p>
        </div>
      </Section>

      {/* Architecture Flow */}
      <Section title="Event → Proof → Verification Flow" className="border-b border-border">
        <div className="flex flex-wrap items-center gap-2 justify-center mb-8">
          {["Event Capture", "Policy Evaluation", "Hash & Seal", "Merkle Proof", "Public Verification"].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-2">
              <span className="px-4 py-2 border border-border rounded-sm text-xs font-mono text-foreground bg-card">{step}</span>
              {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-accent shrink-0" />}
            </div>
          ))}
        </div>

        <h3 className="institutional-heading text-lg font-semibold mb-4">Deployment Topology</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Ingress Layer", desc: "API Gateway, rate limiting, authentication, and request validation." },
            { title: "Processing Layer", desc: "Event processing, policy evaluation, hash generation, and proof construction." },
            { title: "Data Plane", desc: "WORM storage, encrypted databases, Merkle tree management, and event logs." },
            { title: "Access Layer", desc: "Read-only APIs, public verifier, credential issuance, and audit endpoints." },
            { title: "Operations Layer", desc: "Monitoring, alerting, observability, and infrastructure management." },
            { title: "Federation Layer", desc: "Cross-jurisdiction interoperability, Tier 1/2/Observer node management." },
          ].map((item) => (
            <div key={item.title} className="governance-card">
              <h4 className="font-serif text-sm font-semibold mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Deployment Recommendation */}
      <Section title="Recommended Deployment Sequence" className="border-b border-border bg-card/30">
        <div className="space-y-4">
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-start gap-3">
              <span className="hash-text shrink-0 mt-0.5">PHASE 1</span>
              <div>
                <h4 className="font-serif text-sm font-semibold">Deploy System A First</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Establish integrity infrastructure, policy engine, and public proof publication. This creates the verifiable evidence backbone that all subsequent components depend on.
                </p>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <span className="hash-text shrink-0 mt-0.5">PHASE 2</span>
              <div>
                <h4 className="font-serif text-sm font-semibold">Add System B for Document Processing</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Integrate the air-gapped document pipeline for institutions with heavy document governance requirements. System B feeds metadata into the already-operational System A backbone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section className="bg-card/30">
        <div className="flex flex-wrap gap-3">
          <Link to="/systems" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors">
            <Layers className="h-4 w-4" /> View Systems
          </Link>
          <Link to="/processes" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors">
            <GitBranch className="h-4 w-4" /> View Processes
          </Link>
          <Link to="/pilot" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
            <Globe className="h-4 w-4" /> 90-Day Pilot Programme
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default TechnicalBlueprints;
