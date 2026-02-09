import { PageHeader, Section } from "@/components/PageComponents";
import { BookOpen, FileSearch, AlertTriangle, Scale, ShieldCheck } from "lucide-react";

const WhatIsGRGF = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="What Is GRGF"
        subtitle="A global governance infrastructure for recording verifiable institutional facts — not a product, platform, or service."
      />

      {/* Canonical Definition */}
      <Section title="Definition">
        <div className="canonical-quote text-base md:text-lg leading-relaxed max-w-3xl">
          "Global Record Governance Framework (GRGF) is a sovereign-grade Digital Public
          Infrastructure trust layer for recording, preserving, and verifying institutional
          actions, decisions, and omissions over time — without interpretation, enforcement,
          or decision authority."
        </div>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          GRGF is the world's first unified global Digital Public Infrastructure (DPI) trust layer.
          It operates as neutral governance infrastructure that can exist in every country under one
          common name and structure, while adapting to each country's level of digital maturity.
          GRGF integrates with national DPI initiatives — it does not replace them.
        </p>
      </Section>

      {/* Records vs Evidence vs Trust */}
      <Section title="Records, Evidence, and Trust" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          GRGF distinguishes between three concepts that are often conflated in governance systems.
          This distinction is foundational to the framework's architecture.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="h-4 w-4 text-accent shrink-0" />
              <h3 className="font-serif text-sm font-semibold">Records</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Verifiable, immutable accounts of what occurred, what was decided, what was transacted,
              and what was omitted. Records are facts — they carry no interpretation or judgment.
            </p>
            <p className="hash-text mt-3">GRGF FUNCTION: RECORD</p>
          </div>
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-center gap-3 mb-3">
              <FileSearch className="h-4 w-4 text-accent shrink-0" />
              <h3 className="font-serif text-sm font-semibold">Evidence</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Records become evidence when presented in a legal, regulatory, or audit context.
              GRGF does not determine evidentiary value — it preserves records with sufficient
              integrity for external parties to make that determination.
            </p>
            <p className="hash-text mt-3">GRGF FUNCTION: PRESERVE</p>
          </div>
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
              <h3 className="font-serif text-sm font-semibold">Trust</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Trust is the outcome of verifiable integrity over time. GRGF builds institutional
              trust by ensuring records are tamper-proof, independently verifiable, and
              consistently governed across jurisdictions.
            </p>
            <p className="hash-text mt-3">GRGF FUNCTION: VERIFY</p>
          </div>
        </div>
      </Section>

      {/* Why Omission Recording Matters */}
      <Section title="Why Omission Recording Matters" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Most governance systems record only what happened. GRGF also records what
                <span className="font-semibold text-foreground"> did not happen</span> — actions
                that were required but not taken, decisions that were deferred, and obligations
                that expired without fulfilment.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Omission recording addresses a critical gap in institutional accountability.
                Regulatory failures, procurement delays, and governance breakdowns are often
                characterised not by what institutions did, but by what they failed to do.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By treating omissions as first-class governance records — with the same integrity,
                immutability, and verifiability as positive actions — GRGF enables auditors,
                courts, and oversight bodies to assess institutional performance comprehensively.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What GRGF Is Not */}
      <Section title="What GRGF Is Not" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Not a database product", desc: "GRGF is governance infrastructure, not commercial software. Its value derives from institutional integrity, not features." },
            { label: "Not a compliance tool", desc: "GRGF does not enforce regulations or monitor adherence. It records institutional facts for independent verification." },
            { label: "Not a ranking system", desc: "GRGF does not evaluate, score, or compare institutions. It rejects league tables, indices, and performance rankings." },
            { label: "Not an enforcement mechanism", desc: "GRGF has no decision authority. It preserves the factual record — interpretation and action belong to sovereign institutions." },
          ].map((item) => (
            <div key={item.label} className="governance-card">
              <div className="flex items-start gap-3">
                <Scale className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold">{item.label}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
          <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance
          Framework — Invented and Owned by Tarek Wahid.
        </p>
      </Section>
    </div>
  );
};

export default WhatIsGRGF;
