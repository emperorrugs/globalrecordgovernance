import { useState } from "react";
import { FileText, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocEntry {
  id: string;
  title: string;
  updated: string;
  content: React.ReactNode;
}

function ExpandableDoc({ doc }: { doc: DocEntry }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="governance-card">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-start gap-4">
        <FileText className="h-4 w-4 text-accent shrink-0 mt-1" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-sm font-semibold">{doc.title}</h3>
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
        </div>
      )}
    </div>
  );
}

const documents: DocEntry[] = [
  {
    id: "PUB-001", title: "GRGF Vision & Purpose", updated: "February 2026",
    content: (
      <>
        <p>The Global Record Governance Framework (GRGF) is a sovereign-grade Digital Public Infrastructure designed to establish a verifiable, enduring record of institutional actions, decisions, and omissions.</p>
        <p>Modern governance depends not only on what decisions are made, but on the ability to prove:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>What occurred</li>
          <li>Who had authority</li>
          <li>What did not occur when it should have</li>
        </ul>
        <p className="font-medium text-foreground">GRGF exists to make governance provable, not rhetorical.</p>
      </>
    ),
  },
  {
    id: "PUB-002", title: "What Is a Governance Record", updated: "February 2026",
    content: (
      <>
        <p>A governance record is a structured, immutable representation of an institutional event — a decision taken, an action executed, or an omission formally recognized.</p>
        <p>GRGF recognizes multiple classes of governance events:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Decisions taken</li>
          <li>Actions executed</li>
          <li>Approvals granted or denied</li>
          <li>Processes initiated or abandoned</li>
          <li>Deadlines missed</li>
          <li>Authority absent or exceeded</li>
        </ul>
        <p>Each event is normalized into: event type, time context, institutional context, authority context, and status (occurred / not occurred).</p>
        <p className="font-medium text-foreground">GRGF does not assess correctness or legality — only factual existence.</p>
      </>
    ),
  },
  {
    id: "PUB-003", title: "Why Recording Actions & Omissions Matters", updated: "February 2026",
    content: (
      <>
        <p>In governance, omissions can be as consequential as actions.</p>
        <p>GRGF formally recognizes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Recorded actions</li>
          <li>Recorded decisions</li>
          <li>Recorded non-decisions</li>
          <li>Recorded delays</li>
          <li>Recorded absences of authority</li>
        </ul>
        <p>This distinction is essential for accountability, oversight, and judicial review.</p>
        <p>GRGF strengthens institutions by protecting honest actors, clarifying responsibility, reducing ambiguity, and preserving institutional memory. It supports democracy, rule of law, and administrative continuity without politicization.</p>
      </>
    ),
  },
  {
    id: "PUB-004", title: "High-Level Architecture (Non-Technical)", updated: "February 2026",
    content: (
      <>
        <p>GRGF operates as a horizontal trust layer across government systems. It does not replace registries, workflow tools, or decision systems.</p>
        <p>Instead, it records that they acted — or failed to act — within a defined governance context.</p>
        <p>The architecture comprises three layers:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Authoritative Governance Layer</strong> — Sealed governance records, formal operating rules, versioning, and change control.</li>
          <li><strong>Simulation & Demonstration Layer</strong> — Interactive workflows for training and institutional review. No authoritative effect.</li>
          <li><strong>Transparency & Insight Layer</strong> — Dashboards and aggregate indicators. No personal or sensitive data.</li>
        </ol>
        <p className="font-medium text-foreground">Authority never resides in software execution.</p>
      </>
    ),
  },
  {
    id: "PUB-005", title: "Public Use-Case Narratives", updated: "February 2026",
    content: (
      <>
        <p><strong>Public Procurement</strong> — GRGF records tender issuance, bid evaluation milestones, approvals, denials, and missing approvals or delays. This enables anti-corruption oversight, post-award audits, and protection of compliant officials.</p>
        <p><strong>Regulatory Decisions</strong> — Regulators may record licensing decisions, enforcement actions, and failure to act within statutory timelines, protecting both regulators and regulated entities.</p>
        <p><strong>Courts & Oversight</strong> — Courts benefit from independent verification of administrative actions, proof of omission, and non-repudiable timelines.</p>
        <p><strong>Crisis Governance</strong> — In emergencies, GRGF records emergency powers invoked, decisions taken, and decisions not taken — preserving democratic accountability without slowing response.</p>
      </>
    ),
  },
  {
    id: "PUB-006", title: "Frequently Asked Questions", updated: "February 2026",
    content: (
      <>
        <div className="space-y-3">
          <div><p className="font-medium text-foreground">Is this a live system?</p><p>No. This website and its simulation are reference and demonstration tools only. No live governance records are created, stored, or modified.</p></div>
          <div><p className="font-medium text-foreground">Does it store records?</p><p>No. The website does not store any governance records. Authoritative records exist only in sealed governance archives maintained outside this platform.</p></div>
          <div><p className="font-medium text-foreground">Can governments use it?</p><p>Yes. Governments and institutions may reference GRGF as a governance standard, align policies to its principles, and use the simulation for training and review.</p></div>
          <div><p className="font-medium text-foreground">Is it auditable?</p><p>Yes, by design. The framework is built to support independent audit and verification at every level.</p></div>
        </div>
      </>
    ),
  },
];

const ArchivePublic = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Public Archive · Section 01</p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">Public & Civil Society</h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Transparency and understanding. These documents are openly available to the public, media, academia, and civil society. They provide clear, non-technical explanations of the framework's purpose, structure, and relevance.
        </p>
        <p className="hash-text mt-4">ACCESS: OPEN · NO SENSITIVE OR PROPRIETARY DETAILS</p>
        <div className="section-divider mt-6" />
      </div>
    </header>

    {/* Integrity banner */}
    <div className="px-8 md:px-12 lg:px-16 pt-6">
      <div className="max-w-5xl bg-muted/50 border border-border rounded-sm px-4 py-2.5 flex items-center justify-between">
        <span className="text-[10px] font-mono text-muted-foreground/70 tracking-wider">VERSION 1.0.0 · AUTHORITATIVE INITIAL ARCHIVE · FEBRUARY 2026</span>
        <span className="text-[10px] font-mono text-accent/60 tracking-wider">6 DOCUMENTS</span>
      </div>
    </div>

    <section className="px-8 py-6 md:px-12 lg:px-16">
      <div className="max-w-5xl space-y-3">
        {documents.map((doc) => <ExpandableDoc key={doc.id} doc={doc} />)}
      </div>

      <div className="max-w-5xl mt-8 text-[10px] font-mono text-muted-foreground/40 text-right">
        GRGF DIGITAL ARCHIVE · PUBLIC SECTION · REFERENCE ONLY
      </div>
    </section>
  </div>
);

export default ArchivePublic;
