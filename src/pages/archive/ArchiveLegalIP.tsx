import { FileText, ChevronRight, Lock, ShieldAlert } from "lucide-react";

const documents = [
  { id: "LIP-001", title: "Inventor Attribution (Tarek Wahid)", desc: "Formal attribution record establishing Tarek Wahid as the inventor and owner of the Global Record Governance Framework." },
  { id: "LIP-002", title: "Intellectual Property Scope", desc: "Comprehensive definition of the intellectual property boundaries, protected elements, and derivative work limitations." },
  { id: "LIP-003", title: "Originality & Non-Substitutability", desc: "Evidence and documentation establishing the originality and unique positioning of GRGF among governance frameworks." },
  { id: "LIP-004", title: "Governance Authority Proof", desc: "Formal proof chain demonstrating the framework's governance authority model and its structural independence." },
  { id: "LIP-005", title: "Record Integrity & Immutability Logic", desc: "Technical and governance documentation of the immutability model used for sealed governance records." },
  { id: "LIP-006", title: "Licensing & Usage Principles", desc: "Principles governing how GRGF may be licensed, referenced, or adopted by institutions and sovereign entities." },
  { id: "LIP-007", title: "Controlled Disclosure Rules", desc: "Rules and procedures governing the controlled release of sensitive governance materials to authorized institutions." },
];

const ArchiveLegalIP = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Legal & IP Archive</p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">
          Legal, IP & Assurance
        </h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Protection, proof, and ownership documentation. This section contains controlled materials related to intellectual property, legal authority, and governance assurance. Access is restricted to authorized institutional stakeholders.
        </p>
        <div className="section-divider mt-6" />
      </div>
    </header>

    {/* Access banner */}
    <div className="px-8 md:px-12 lg:px-16 py-4">
      <div className="max-w-5xl bg-destructive/10 border border-destructive/20 rounded-sm px-4 py-3 flex items-center gap-3">
        <ShieldAlert className="h-4 w-4 text-destructive shrink-0" />
        <p className="text-xs font-mono text-destructive font-medium tracking-wide">
          🔒 CONTROLLED ACCESS · INSTITUTIONAL USE ONLY · INVITATION REQUIRED
        </p>
      </div>
    </div>

    <section className="px-8 py-6 md:px-12 lg:px-16">
      <div className="max-w-5xl space-y-3">
        {documents.map((doc) => (
          <div key={doc.id} className="governance-card opacity-80">
            <div className="flex items-start gap-4">
              <Lock className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-sm font-semibold">{doc.title}</h3>
                  <ChevronRight className="h-4 w-4 text-muted-foreground/30 shrink-0 mt-0.5" />
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{doc.desc}</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="hash-text">{doc.id}</span>
                  <span className="text-muted-foreground/30">·</span>
                  <span className="text-[10px] text-destructive/70 font-mono">RESTRICTED</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-8 governance-card border-l-2 border-l-accent">
          <p className="text-sm text-foreground leading-relaxed">
            Access to controlled documents requires formal institutional authorization. For access requests, please contact the GRGF governance office through official institutional channels.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default ArchiveLegalIP;
