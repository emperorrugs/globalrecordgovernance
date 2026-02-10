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
        <span className="text-[10px] font-mono text-accent/60 tracking-wider">14 DOCUMENTS</span>
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
