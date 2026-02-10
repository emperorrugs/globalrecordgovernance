import { useState } from "react";
import { FileText, ChevronDown, ChevronRight, Download } from "lucide-react";

interface DocEntry {
  id: string;
  title: string;
  section: string;
  updated: string;
  content: React.ReactNode;
  downloadPath?: string;
}

function ExpandableDoc({ doc }: { doc: DocEntry }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="governance-card">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-start gap-4">
        <FileText className="h-4 w-4 text-accent shrink-0 mt-1" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-mono text-accent/60 tracking-wider mb-0.5">{doc.section}</p>
              <h3 className="font-serif text-sm font-semibold">{doc.title}</h3>
            </div>
            {open ? <ChevronDown className="h-4 w-4 text-accent shrink-0 mt-0.5" /> : <ChevronRight className="h-4 w-4 text-muted-foreground/30 shrink-0 mt-0.5" />}
          </div>
          <div className="mt-2 flex items-center gap-3">
            <span className="hash-text">{doc.id}</span>
            <span className="text-muted-foreground/30">·</span>
            <span className="text-[10px] text-muted-foreground/60">Last updated: {doc.updated}</span>
          </div>
        </div>
      </button>
      {open && (
        <div className="mt-4 ml-8 border-l-2 border-accent/20 pl-5 text-sm text-muted-foreground leading-relaxed space-y-4">
          {doc.content}
          {doc.downloadPath && (
            <a href={doc.downloadPath} download className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent/80 transition-colors mt-2">
              <Download className="h-3.5 w-3.5" /> Download source document
            </a>
          )}
        </div>
      )}
    </div>
  );
}

const documents: DocEntry[] = [
  // Section 02
  {
    id: "GOV-001", title: "GRGF DPI Architecture (Full)", section: "SECTION 02 — SYSTEM ARCHITECTURE", updated: "February 2026",
    content: (
      <>
        <p>The Global Record Governance Framework (GRGF) is architected as a foundational, horizontal Digital Public Infrastructure (DPI) that operates independently of sectoral systems while remaining interoperable with them.</p>
        <p className="font-medium text-foreground">GRGF is not a transactional system. It is a record-of-record system.</p>
        <p>GRGF sits above operational systems, beside registries and workflows, and outside political or organizational control. Its function is to record governance-relevant events, not to execute them.</p>
        <p><strong>Core Architectural Layers:</strong></p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Event Normalization Layer</strong> — Translates real-world institutional actions and omissions into structured governance events.</li>
          <li><strong>Authority Context Layer</strong> — Captures who acted, under what mandate, at what time, and with what scope.</li>
          <li><strong>Record Layer</strong> — Stores immutable representations of events without interpretation or scoring.</li>
          <li><strong>Verification Layer</strong> — Enables independent confirmation that a record exists, or does not exist.</li>
        </ol>
      </>
    ),
  },
  {
    id: "GOV-002", title: "Governance & Authority Model", section: "SECTION 03 — GOVERNANCE & POLICY", updated: "February 2026",
    content: (
      <>
        <p>GRGF explicitly distinguishes between institutional authority, individual actors, and delegated mandates. Authority is treated as a recordable attribute, not an assumption.</p>
        <p>This prevents informal power misuse, post-hoc justification, and ambiguity in accountability.</p>
        <p>GRGF formally separates decisions (intent), actions (execution), and omissions (failure to decide or act). Each is recorded differently, because each carries different governance implications.</p>
        <p className="font-medium text-foreground">Omissions are not inferred — they are explicitly recognized when conditions are met.</p>
      </>
    ),
  },
  {
    id: "GOV-003", title: "Decision, Action & Omission Framework", section: "SECTION 03 — GOVERNANCE & POLICY", updated: "February 2026",
    content: (
      <>
        <p>GRGF enables accountability by preserving chain of authority, temporal responsibility, and jurisdictional scope.</p>
        <p>It does not assign blame. It preserves traceability. This allows accountability mechanisms to function without political distortion.</p>
        <p><strong>Oversight bodies may:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Verify records</li>
          <li>Confirm absence of records</li>
          <li>Audit authority chains</li>
        </ul>
        <p><strong>They may not:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Alter records</li>
          <li>Suppress records</li>
          <li>Rewrite governance history</li>
        </ul>
        <p className="font-medium text-foreground">Stewardship is separated from control by design.</p>
      </>
    ),
  },
  {
    id: "GOV-004", title: "Auditability & Verification Logic", section: "SECTION 02 — SYSTEM ARCHITECTURE", updated: "February 2026",
    content: (
      <>
        <p>GRGF supports negative and positive verification:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Positive verification:</strong> confirming a record exists</li>
          <li><strong>Negative verification:</strong> confirming no record exists for a claimed event</li>
        </ul>
        <p>This capability is essential for audits, oversight, courts, anti-corruption processes, and public trust.</p>
        <p className="font-medium text-foreground">Verification does not expose sensitive content — only existence, scope, and integrity.</p>
        <p>The Evidence Backbone represents a persistent, append-only record fabric, independent of any single institution, resistant to retroactive alteration.</p>
      </>
    ),
  },
  {
    id: "GOV-005", title: "Deployment Models (National / Incremental)", section: "SECTION 05 — DEPLOYMENT MODELS", updated: "February 2026",
    content: (
      <>
        <p>A typical national deployment follows three stages:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Foundational Stage</strong> — GRGF is introduced as an independent record layer attached to selected high-risk governance processes (e.g. procurement, licensing, approvals).</li>
          <li><strong>Expansion Stage</strong> — Additional institutions and sectors begin recording governance events under a shared authority framework.</li>
          <li><strong>Federation Stage</strong> — GRGF operates as a national governance memory layer, supporting audits, courts, and oversight bodies.</li>
        </ol>
        <p className="font-medium text-foreground">At no stage does GRGF replace existing systems.</p>
        <p>In low-capacity environments, GRGF can be deployed with minimal technical integration, using manual or semi-automated event capture, focused on high-impact governance risks.</p>
      </>
    ),
  },
  {
    id: "GOV-006", title: "Integration with Existing Systems", section: "SECTION 04 — DPI & STANDARDS ALIGNMENT", updated: "February 2026",
    content: (
      <>
        <p>GRGF is designed to integrate with identity systems, procurement platforms, regulatory workflows, and case management systems.</p>
        <p className="font-medium text-foreground">Integration is non-intrusive. Systems do not change how they work — they gain verifiability.</p>
        <p>GRGF aligns with core DPI principles: universality, interoperability, public value orientation, long-term sustainability, and institutional neutrality.</p>
        <p>It functions as shared civic infrastructure, not a vendor platform.</p>
      </>
    ),
  },
  {
    id: "GOV-007", title: "Risk, Safeguards & Oversight", section: "SECTION 04 — DPI & STANDARDS ALIGNMENT", updated: "February 2026",
    content: (
      <>
        <p><strong>Primary risks addressed:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Record tampering</li>
          <li>Institutional memory loss</li>
          <li>Authority ambiguity</li>
          <li>Retroactive narrative manipulation</li>
        </ul>
        <p className="font-medium text-foreground">Safeguards are architectural, not procedural.</p>
        <p>Transparency is governed by legal context, privacy obligations, and institutional role. GRGF supports public verification without disclosure, and confidential records with public existence proofs.</p>
      </>
    ),
  },
  {
    id: "GOV-008", title: "Public Value & ROI Logic", section: "SECTION 07 — VALUE & IMPACT", updated: "February 2026",
    content: (
      <>
        <p>GRGF creates public value by reducing ambiguity, increasing trust, strengthening institutions, and protecting lawful decision-makers. Value is systemic, not transactional.</p>
        <p>By making governance actions provable: fraud becomes harder, cover-ups become harder, and honest behavior becomes safer.</p>
        <p>GRGF's cost profile is modest relative to anti-corruption programs, failed IT reforms, and litigation costs. Benefits compound over time as institutional memory accumulates.</p>
        <p className="font-medium text-foreground">Trust increases when records exist, omissions are visible, and authority is explicit. GRGF restores trust by design, not messaging.</p>
      </>
    ),
  },
  // Uploaded governance documents
  {
    id: "GOV-009", title: "Data Protection & Access Control Policy", section: "SECTION 06 — SECURITY & COMPLIANCE", updated: "February 2026",
    downloadPath: "/documents/Data_Protection_and_Access_Control_Policy.md",
    content: (
      <>
        <p><strong>Security Model:</strong> Defense-in-depth with encryption at rest and in transit.</p>
        <p><strong>Access Control:</strong> Role-Based and Attribute-Based Access Control (RBAC/ABAC).</p>
        <p><strong>Key Management:</strong> Keys managed via sovereign-controlled HSMs.</p>
        <p><strong>Auditing:</strong> All access events logged immutably.</p>
        <p className="font-medium text-foreground">Aligned with ISO/IEC 27001 and 27701.</p>
      </>
    ),
  },
  {
    id: "GOV-010", title: "Privacy Impact Assessment (PIA)", section: "SECTION 06 — SECURITY & COMPLIANCE", updated: "February 2026",
    downloadPath: "/documents/Privacy_Impact_Assessment.md",
    content: (
      <>
        <p>Assessment of personal data processing within GRGF. Only event metadata strictly required for evidentiary integrity is captured.</p>
        <p><strong>Lawful Basis:</strong> Public interest, legal obligation, and consent where applicable.</p>
        <p><strong>Risk Mitigations:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Re-identification risk mitigated via pseudonymization</li>
          <li>Access misuse mitigated via audited RBAC/ABAC</li>
        </ul>
        <p className="font-medium text-foreground">Residual privacy risk is low and acceptable under international standards.</p>
      </>
    ),
  },
  {
    id: "GOV-011", title: "Feasibility Study", section: "SECTION 07 — VALUE & IMPACT", updated: "February 2026",
    downloadPath: "/documents/Feasibility_Study.md",
    content: (
      <>
        <p>This feasibility study assesses the technical, legal, financial, and operational viability of GRGF as a sovereign-grade DPI.</p>
        <p><strong>Technical:</strong> Leverages mature technologies (event logging, cryptographic hashing, interoperability APIs) with novel governance-layer orchestration.</p>
        <p><strong>Legal:</strong> Aligned with ISO 23081, ISO/IEC 27701, OECD DPI principles, and World Bank GovTech guidance.</p>
        <p><strong>Financial:</strong> Projected ROI positive within 24–36 months under conservative assumptions.</p>
        <p className="font-medium text-foreground">GRGF is technically, legally, and financially feasible for pilot and national-scale deployment.</p>
      </>
    ),
  },
  {
    id: "GOV-012", title: "Incident Response Plan", section: "SECTION 06 — SECURITY & COMPLIANCE", updated: "February 2026",
    downloadPath: "/documents/Incident_Response_Plan.md",
    content: (
      <>
        <p><strong>Severity Levels:</strong> Low, Medium, High, Critical.</p>
        <p><strong>Response Phases:</strong> Detection → Containment → Eradication → Recovery → Post-Incident Review.</p>
        <p className="font-medium text-foreground">Governed by an Incident Oversight Committee with mandatory reporting.</p>
      </>
    ),
  },
  {
    id: "GOV-013", title: "Procurement Strategy (PSPC)", section: "SECTION 05 — DEPLOYMENT MODELS", updated: "February 2026",
    downloadPath: "/documents/Procurement_Strategy_PSPC.md",
    content: (
      <>
        <p>Enables compliant pilot procurement under Canadian federal rules.</p>
        <p><strong>Pathways:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Innovation pilot</li>
          <li>Phased competitive procurement</li>
        </ul>
        <p className="font-medium text-foreground">Evaluation criteria: Security, interoperability, sovereignty, value-for-money.</p>
      </>
    ),
  },
  {
    id: "GOV-014", title: "Records Retention Schedule", section: "SECTION 03 — GOVERNANCE & POLICY", updated: "February 2026",
    downloadPath: "/documents/Records_Retention_Schedule.md",
    content: (
      <>
        <p>Retention aligned with legal, fiscal, and historical value.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Operational Records:</strong> 7 years</li>
          <li><strong>Legal/Evidentiary Records:</strong> Permanent</li>
          <li><strong>Audit Logs:</strong> Minimum 10 years</li>
        </ul>
        <p className="font-medium text-foreground">Disposition is controlled, logged, and reviewable.</p>
      </>
    ),
  },
  {
    id: "GOV-015", title: "System Data-Flow Architecture", section: "SECTION 02 — SYSTEM ARCHITECTURE", updated: "February 2026",
    downloadPath: "/documents/1_Data_Flow_Architecture.md",
    content: (
      <>
        <p>End-to-end flow from source systems to GRGF custody, retention, access, and disclosure.</p>
        <p className="font-medium text-foreground">Includes minimization, pseudonymization, and boundary controls.</p>
      </>
    ),
  },
  {
    id: "GOV-016", title: "Threat Model (STRIDE)", section: "SECTION 06 — SECURITY & COMPLIANCE", updated: "February 2026",
    downloadPath: "/documents/2_Threat_Model_STRIDE.md",
    content: (
      <>
        <p>Analyzes spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege threats against GRGF.</p>
        <p className="font-medium text-foreground">Includes risk treatment plan.</p>
      </>
    ),
  },
  {
    id: "GOV-017", title: "Connector Minimization Standard", section: "SECTION 06 — SECURITY & COMPLIANCE", updated: "February 2026",
    downloadPath: "/documents/3_Connector_Minimization_Standard.md",
    content: (
      <>
        <p>Defines mandatory exclusion rules for personal and operational data.</p>
        <p className="font-medium text-foreground">Ensures least-collection-by-default.</p>
      </>
    ),
  },
  {
    id: "GOV-018", title: "Chain of Custody & Legal Hold", section: "SECTION 03 — GOVERNANCE & POLICY", updated: "February 2026",
    downloadPath: "/documents/4_Chain_of_Custody_OPS.md",
    content: (
      <>
        <p>Defines evidence custody, integrity, disclosure, and court survivability procedures.</p>
        <p className="font-medium text-foreground">Ensures records meet legal admissibility standards.</p>
      </>
    ),
  },
  {
    id: "GOV-019", title: "Interoperability Profile", section: "SECTION 04 — DPI & STANDARDS ALIGNMENT", updated: "February 2026",
    downloadPath: "/documents/5_Interoperability_Profile.md",
    content: (
      <>
        <p>Canonical schemas, APIs, versioning, and conformance testing framework.</p>
        <p className="font-medium text-foreground">Ensures cross-system and cross-jurisdiction interoperability.</p>
      </>
    ),
  },
  {
    id: "GOV-020", title: "Resilience & Disaster Recovery", section: "SECTION 06 — SECURITY & COMPLIANCE", updated: "February 2026",
    downloadPath: "/documents/6_Resilience_RTO_RPO_DR.md",
    content: (
      <>
        <p>Defines RTO/RPO targets, integrity recovery procedures, and offline survivability.</p>
        <p className="font-medium text-foreground">Ensures continuity under adverse conditions.</p>
      </>
    ),
  },
  {
    id: "GOV-021", title: "Pilot SOW & Acceptance Criteria", section: "SECTION 05 — DEPLOYMENT MODELS", updated: "February 2026",
    downloadPath: "/documents/7_Pilot_SOW_Acceptance.md",
    content: (
      <>
        <p>Defines scope, milestones, security/privacy gates, and success metrics for the 90-day pilot engagement.</p>
        <p className="font-medium text-foreground">Formal statement of work with acceptance criteria.</p>
      </>
    ),
  },
  {
    id: "GOV-022", title: "Independent Assurance Plan", section: "SECTION 06 — SECURITY & COMPLIANCE", updated: "February 2026",
    downloadPath: "/documents/8_Independent_Assurance_Plan.md",
    content: (
      <>
        <p>External audits, penetration testing, SOC-equivalent assurance, and reporting cadence.</p>
        <p className="font-medium text-foreground">Ensures continuous third-party validation of GRGF integrity.</p>
      </>
    ),
  },
  {
    id: "GOV-023", title: "Executive Decision Memo", section: "SECTION 07 — VALUE & IMPACT", updated: "February 2026",
    downloadPath: "/documents/Executive_Decision_Memo.md",
    content: (
      <>
        <p><strong>Recommendation:</strong> APPROVE PILOT & PHASED SCALE</p>
        <p className="font-medium text-foreground">Decision: Authorize pilot deployment and preparatory procurement.</p>
      </>
    ),
  },
  {
    id: "GOV-024", title: "Oral Defense Briefing Deck", section: "SECTION 07 — VALUE & IMPACT", updated: "February 2026",
    downloadPath: "/documents/Oral_Defense_Briefing_Deck.md",
    content: (
      <>
        <p>Structured briefing following the Problem → Solution → Value → Ask framework for institutional presentation and defense.</p>
        <p className="font-medium text-foreground">Designed for executive and procurement audiences.</p>
      </>
    ),
  },
  {
    id: "GOV-025", title: "Executive Visual Binder (PPTX)", section: "SECTION 07 — VALUE & IMPACT", updated: "February 2026",
    downloadPath: "/documents/GRGF_Executive_Visual_Binder.pptx",
    content: (
      <>
        <p>10-slide board/ministerial briefing deck covering: What GRGF is, the governance gap, solution overview, Policy→Control→Evidence flow, system architecture, security & privacy, public value, risks & mitigations, and go-live recommendation.</p>
        <p className="font-medium text-foreground">Recommendation: APPROVE PILOT@SCALE GO-LIVE. (PowerPoint format)</p>
      </>
    ),
  },
  {
    id: "GOV-026", title: "Executive Visual Binder (ZIP)", section: "SECTION 07 — VALUE & IMPACT", updated: "February 2026",
    downloadPath: "/documents/GRGF_Executive_Visual_Binder_RESEND.zip",
    content: (
      <>
        <p>Complete executive visual binder package for board, ministerial, and multilateral briefing. ZIP archive with all supporting materials.</p>
        <p className="font-medium text-foreground">Full briefing package for institutional distribution.</p>
      </>
    ),
  },
  {
    id: "GOV-027", title: "Phase 3 — Visual Operating Model (PDF)", section: "SECTION 02 — SYSTEM ARCHITECTURE", updated: "February 2026",
    downloadPath: "/documents/GRGF_Phase_3_Visual_Operating_Model.pdf",
    content: (
      <>
        <p>Single authoritative model for policy, legal, technical, audit, and partner alignment. Maps the full flow: Law/Policy → Control → Event → Evidence → Verification.</p>
        <p className="font-medium text-foreground">Core design principles: Neutral witness, evidence-first governance, privacy-by-design, append-only integrity, public verifiability without personal data exposure.</p>
      </>
    ),
  },
  {
    id: "GOV-028", title: "DPI Deployment Kit", section: "SECTION 05 — DEPLOYMENT MODELS", updated: "January 2026",
    downloadPath: "/documents/dpi_deploy_kit_20260130_231918.zip",
    content: (
      <>
        <p>Complete deployment kit for institutional DPI rollout including configuration templates, integration guides, and operational checklists.</p>
        <p className="font-medium text-foreground">Ready-to-use deployment package for pilot and scale engagements. (ZIP archive)</p>
      </>
    ),
  },
  {
    id: "GOV-029", title: "DPI Pilot Starter Kit", section: "SECTION 05 — DEPLOYMENT MODELS", updated: "January 2026",
    downloadPath: "/documents/dpi_pilot_starter_20260130_231249.zip",
    content: (
      <>
        <p>Starter package for 90-day pilot engagements including scope templates, milestone definitions, and initial configuration guides.</p>
        <p className="font-medium text-foreground">Designed for rapid institutional onboarding. (ZIP archive)</p>
      </>
    ),
  },
  {
    id: "GOV-030", title: "DPI Pilot — Full Package", section: "SECTION 05 — DEPLOYMENT MODELS", updated: "January 2026",
    downloadPath: "/documents/dpi_pilot_FULL_20260131_061641.zip",
    content: (
      <>
        <p>Comprehensive pilot package with all governance, technical, and operational materials for a complete 90-day pilot engagement.</p>
        <p className="font-medium text-foreground">Full institutional pilot package including acceptance criteria and reporting templates. (ZIP archive)</p>
      </>
    ),
  },
  {
    id: "GOV-031", title: "DPI Upgrades — Complete Archive", section: "SECTION 02 — SYSTEM ARCHITECTURE", updated: "January 2026",
    downloadPath: "/documents/dpi_upgrades_ALL_20260131_054630.zip",
    content: (
      <>
        <p>Complete archive of all DPI system upgrades, patches, and configuration changes applied through January 2026.</p>
        <p className="font-medium text-foreground">Full upgrade history for audit and compliance review. (ZIP archive)</p>
      </>
    ),
  },
  {
    id: "GOV-032", title: "GRGF DPI Final v4 — Hardest Tests Passed", section: "SECTION 06 — SECURITY & COMPLIANCE", updated: "January 2026",
    downloadPath: "/documents/GRGF_DPI_FINAL_v4_Hardest_Tests_Passed_2026-01-30.zip",
    content: (
      <>
        <p>Final v4 release archive documenting successful completion of the most rigorous validation tests across security, integrity, and governance logic.</p>
        <p className="font-medium text-foreground">Formal test evidence package for procurement and audit review. (ZIP archive)</p>
      </>
    ),
  },
  {
    id: "GOV-033", title: "Value Breakdown — Per-Organization Benefits (CSV)", section: "SECTION 07 — VALUE & IMPACT", updated: "January 2026",
    downloadPath: "/documents/dpi_value_breakdown_expected.csv",
    content: (
      <>
        <p>Detailed per-organization benefit analysis across six categories: audit prep time saved, incident forensics speed, regulatory fines risk reduction, breach likelihood reduction, ops toil reduction, and faster partner onboarding.</p>
        <p><strong>Canada (120 orgs):</strong> $26.85M total · <strong>Worldwide (1,500 orgs):</strong> $335.6M total</p>
        <p className="font-medium text-foreground">Granular ROI data for institutional business case development.</p>
      </>
    ),
  },
  {
    id: "GOV-034", title: "Value Breakdown — Segment Analysis (CSV)", section: "SECTION 07 — VALUE & IMPACT", updated: "January 2026",
    downloadPath: "/documents/dpi_value_common_breakdown_expected.csv",
    content: (
      <>
        <p>Segment-level value analysis by organization size:</p>
        <p><strong>Canada:</strong> Large orgs (25) — $625M · SMEs (95) — $142.5M</p>
        <p><strong>Worldwide:</strong> Large orgs (300) — $7.5B · SMEs (1,200) — $1.8B</p>
        <p className="font-medium text-foreground">Total projected annual benefit: $767.5M (Canada) · $9.3B (Worldwide).</p>
      </>
    ),
  },
  {
    id: "GOV-035", title: "GC Submission Pack", section: "SECTION 05 — DEPLOYMENT MODELS", updated: "January 2026",
    downloadPath: "/documents/GC_Submission_Pack_20260131_072144.zip",
    content: (
      <>
        <p>Government of Canada formal submission package for institutional review, procurement evaluation, and policy alignment assessment.</p>
        <p className="font-medium text-foreground">Complete submission-ready package for Canadian federal review. (ZIP archive)</p>
      </>
    ),
  },
  {
    id: "GOV-036", title: "Value Totals — Scenario Analysis (CSV)", section: "SECTION 07 — VALUE & IMPACT", updated: "January 2026",
    downloadPath: "/documents/dpi_value_common_totals.csv",
    content: (
      <>
        <p>Three-scenario value analysis (Conservative / Expected / Aggressive):</p>
        <p><strong>Canada:</strong> $397.7M – $1.51B net annual benefit</p>
        <p><strong>Worldwide:</strong> $4.8B – $18.3B net annual benefit</p>
        <p className="font-medium text-foreground">One-time costs: $124M (Canada) / $1.5B (Worldwide). Annualized costs well under 7% of benefits.</p>
      </>
    ),
  },
  {
    id: "GOV-037", title: "Value Totals — Canada & World Per-Org (CSV)", section: "SECTION 07 — VALUE & IMPACT", updated: "January 2026",
    downloadPath: "/documents/dpi_value_canada_world_totals.csv",
    content: (
      <>
        <p>Per-organization annual benefit across scenarios:</p>
        <p><strong>Conservative:</strong> $71,600/org · <strong>Expected:</strong> $223,750/org · <strong>Aggressive:</strong> $447,500/org</p>
        <p className="font-medium text-foreground">Canada total (120 orgs): $8.6M – $53.7M · Worldwide (1,500 orgs): $107.4M – $671.3M.</p>
      </>
    ),
  },
  {
    id: "GOV-038", title: "System Architecture & Catalog (PDF)", section: "SECTION 02 — SYSTEM ARCHITECTURE", updated: "January 2026",
    downloadPath: "/documents/System_Architecture_and_Catalog.pdf",
    content: (
      <>
        <p>End-to-end DPI component diagram, API catalog, and AWS Canada deployment topology. Covers Collector API, Pseudonymization, OPA Policy Engine, Merkle/Proof Builder, Admin Console (GCWeb EN/FR), Public Proof Portal, VC Issuer/Verifier, and CICE Agent.</p>
        <p><strong>Key APIs:</strong> POST /ingest · GET /schemas · POST /tokenize · POST /policy/decide · GET /proofs · POST /vc/issue · POST /vc/verify</p>
        <p className="font-medium text-foreground">Region ca-central-1 with optional ca-west-1 DR. PBMM-aligned, SCP deny non-CA.</p>
      </>
    ),
  },
  {
    id: "GOV-039", title: "Canvas Folder — Visual Assets", section: "SECTION 07 — VALUE & IMPACT", updated: "January 2026",
    downloadPath: "/documents/Canvas_Folder_20260131_124718.zip",
    content: (
      <>
        <p>Visual design assets and canvas materials for institutional presentations, reports, and stakeholder communications.</p>
        <p className="font-medium text-foreground">Brand-consistent visual materials for institutional use. (ZIP archive)</p>
      </>
    ),
  },
  {
    id: "GOV-040", title: "Pilot Starter + Upgrades Package", section: "SECTION 05 — DEPLOYMENT MODELS", updated: "January 2026",
    downloadPath: "/documents/dpi_pilot_starter_PLUS_upgrades_20260131_060829.zip",
    content: (
      <>
        <p>Combined pilot starter kit with all system upgrades applied through January 2026. Single package for rapid deployment.</p>
        <p className="font-medium text-foreground">Ready-to-deploy pilot package with latest patches included. (ZIP archive)</p>
      </>
    ),
  },
  {
    id: "GOV-041", title: "Optimum Two-Week Backlog (CSV)", section: "SECTION 05 — DEPLOYMENT MODELS", updated: "January 2026",
    downloadPath: "/documents/optimum_two_week_backlog.csv",
    content: (
      <>
        <p>15-item sprint backlog for two-week pilot build-out covering: landing zone & guardrails, network hardening, data plane (Aurora/S3), KMS/CloudHSM, Collector service, pseudonymization, OPA policies, observability, Merkle/proof builder, SSO/SCIM, Admin Console, Public Proof Portal, PIA/TRA & pen test, DR game-day, and cutover.</p>
        <p className="font-medium text-foreground">Total estimated effort: ~156 hours across Platform, Backend, Security, Frontend, and PM.</p>
      </>
    ),
  },
];

const ArchiveGovernment = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Government Archive · Sections 02–07</p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">Governments & Multilateral Institutions</h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Evaluation, adoption, and DPI alignment materials. These documents are intended for governments, the World Bank, regulators, and multilateral institutions assessing GRGF for policy alignment or sovereign adoption.
        </p>
        <p className="hash-text mt-4">ACCESS: INSTITUTIONAL · FORMAL · POLICY-GRADE</p>
        <div className="section-divider mt-6" />
      </div>
    </header>

    <div className="px-8 md:px-12 lg:px-16 pt-6">
      <div className="max-w-5xl bg-muted/50 border border-border rounded-sm px-4 py-2.5 flex items-center justify-between">
        <span className="text-[10px] font-mono text-muted-foreground/70 tracking-wider">VERSION 1.0.0 · AUTHORITATIVE INITIAL ARCHIVE · FEBRUARY 2026</span>
        <span className="text-[10px] font-mono text-accent/60 tracking-wider">41 DOCUMENTS</span>
      </div>
    </div>

    <section className="px-8 py-6 md:px-12 lg:px-16">
      <div className="max-w-5xl space-y-3">
        {documents.map((doc) => <ExpandableDoc key={doc.id} doc={doc} />)}
      </div>
      <div className="max-w-5xl mt-8 text-[10px] font-mono text-muted-foreground/40 text-right">
        GRGF DIGITAL ARCHIVE · GOVERNMENT SECTION · REFERENCE ONLY
      </div>
    </section>
  </div>
);

export default ArchiveGovernment;
