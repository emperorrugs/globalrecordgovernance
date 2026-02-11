export function DPIAlignmentPanel() {
  const alignments = [
    {
      principle: "Interoperability",
      impact: "Standardized event schemas. RESTful verification API. Federation protocol for cross-system governance.",
      strength: "Strong",
    },
    {
      principle: "Security & Trust",
      impact: "Zero Trust architecture. Cryptographic hash chaining. No centralized override. Append-only evidence backbone.",
      strength: "Strong",
    },
    {
      principle: "Scalability",
      impact: "Modular six-layer architecture. Nation-level nodes. Horizontal scaling via federation. No single point of failure.",
      strength: "Strong",
    },
    {
      principle: "Public Value",
      impact: "Structural reduction of corruption risk. Measurable audit efficiency gains. Fiscal discipline through conservative modeling.",
      strength: "Strong",
    },
    {
      principle: "Trust Infrastructure",
      impact: "Deterministic governance enforcement. Independent verification capability. Proof-of-existence and proof-of-absence.",
      strength: "Foundational",
    },
    {
      principle: "Inclusion",
      impact: "Jurisdiction-neutral design. Supports all digital maturity levels. Tiered federation model (Full, Partial, Observer).",
      strength: "Moderate",
    },
    {
      principle: "Governance Neutrality",
      impact: "Anti-capture clauses (AC-01–05). Custodial neutrality. No vendor, government, or operator override capability.",
      strength: "Strong",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="institutional-heading text-xl font-semibold mb-1">World Bank DPI Alignment Panel</h3>
        <p className="text-xs text-muted-foreground">Structured mapping of GRGF capabilities to World Bank Digital Public Infrastructure principles.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-mono text-muted-foreground w-1/5">DPI Principle</th>
              <th className="text-left py-3 px-4 font-mono text-muted-foreground w-3/5">GRGF Structural Alignment</th>
              <th className="text-left py-3 px-4 font-mono text-muted-foreground w-1/5">Alignment</th>
            </tr>
          </thead>
          <tbody>
            {alignments.map((a) => (
              <tr key={a.principle} className="border-b border-border/50">
                <td className="py-3 px-4 font-serif font-semibold">{a.principle}</td>
                <td className="py-3 px-4 text-muted-foreground leading-relaxed">{a.impact}</td>
                <td className="py-3 px-4">
                  <span className={`text-[10px] font-mono tracking-wider px-2 py-1 rounded-sm ${
                    a.strength === "Foundational" ? "bg-accent/15 text-accent" :
                    a.strength === "Strong" ? "bg-accent/10 text-accent/80" :
                    "bg-secondary text-muted-foreground"
                  }`}>
                    {a.strength}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Positioning.</span> GRGF addresses a gap in the current DPI stack: while digital ID, payments, and data exchange layers exist, no equivalent infrastructure exists for governance integrity — the verifiable recording of institutional actions and omissions.
        </p>
      </div>

      {/* Standards mapping */}
      <div>
        <h4 className="font-serif text-sm font-semibold mb-4">International Standards Alignment</h4>
        <div className="space-y-2">
          {[
            { standard: "ISO 27001", area: "Information Security", alignment: "Cryptographic integrity, access controls, audit trails" },
            { standard: "ISO 42001", area: "AI Management Systems", alignment: "Deterministic enforcement — no AI, no probabilistic logic" },
            { standard: "ISO 37000", area: "Governance of Organizations", alignment: "Custodial neutrality, role separation, anti-capture" },
            { standard: "OECD Principles", area: "Public Governance", alignment: "Transparency, accountability, human-centered values" },
          ].map((s) => (
            <div key={s.standard} className="governance-card py-3 flex items-start gap-4">
              <span className="text-xs font-mono text-accent shrink-0 w-20">{s.standard}</span>
              <div className="flex-1">
                <span className="text-xs font-semibold">{s.area}</span>
                <p className="text-[11px] text-muted-foreground mt-0.5">{s.alignment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground/60 italic">Alignment mapping does not constitute certification. Independent validation required.</p>
    </div>
  );
}
