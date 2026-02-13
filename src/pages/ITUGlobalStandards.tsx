import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, Shield, Wifi, Radio, FileText, Server, Lock } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const ituStandards = [
  { standard: "ITU-T X.509", area: "Public Key Infrastructure", alignment: "GRGF cryptographic anchoring uses standard PKI certificate chains for institutional attestation and verification." },
  { standard: "ITU-T X.1252", area: "Identity Management", alignment: "Content-blind verification model complements identity assurance frameworks without duplicating identity infrastructure." },
  { standard: "ITU-T Y.2060", area: "IoT Architecture", alignment: "Event-driven architecture compatible with IoT governance event capture for smart city and infrastructure applications." },
  { standard: "ITU-T SG17", area: "Security Standards", alignment: "Zero-trust architecture, cryptographic integrity, and tamper-evident records exceed ITU security baseline requirements." },
  { standard: "ITU-T FG-DPM", area: "Digital Currency/Payments", alignment: "Governance integrity verification for digital payment authorization, disbursement tracking, and omission detection." },
];

const regionalBodies = [
  { body: "African Union (AU)", framework: "Digital Transformation Strategy 2020-2030", alignment: "Governance integrity infrastructure for AU institutional capacity building, pan-African data governance, and cross-border recognition via federation protocol.", region: "Africa" },
  { body: "ASEAN", framework: "ASEAN Digital Framework Agreement", alignment: "Interoperability protocol supports ASEAN cross-border data governance. Non-invasive integration respects varying national regulatory environments.", region: "Asia-Pacific" },
  { body: "European Union", framework: "EU Digital Decade / eIDAS 2.0", alignment: "GDPR-compliant architecture. Federation protocol compatible with EU cross-border digital identity and trust services framework.", region: "Europe" },
  { body: "Inter-American Development Bank", framework: "Digital Government Strategy", alignment: "GovTech governance integrity for Latin American institutional modernization. Phased deployment model suited to varying capacity levels.", region: "Americas" },
  { body: "GCC", framework: "GCC Digital Cooperation Framework", alignment: "Sovereign-compatible deployment for Gulf state institutional governance. Arabic localization roadmap. Federation node readiness.", region: "Middle East" },
  { body: "Pacific Islands Forum", framework: "Pacific Digital Economy Framework", alignment: "Lightweight deployment model designed for smaller nations. Offline-capable governance continuity for Pacific island connectivity challenges.", region: "Pacific" },
];

const ITUGlobalStandards = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Global Standards Bodies</p>
        <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
          ITU & Regional DPI Standards
        </h1>
        <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
          Alignment with International Telecommunication Union standards, regional digital governance frameworks, and bilateral DPI cooperation initiatives worldwide.
        </p>
      </div>
    </header>

    {/* ITU Standards */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">ITU Standards</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">ITU-T Standard Alignment</h2>
        <div className="space-y-4">
          {ituStandards.map((s, i) => (
            <FadeIn key={s.standard} delay={i * 60}>
              <div className="governance-card-elevated hover:border-accent/20 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 bg-accent/15 text-accent text-xs font-mono font-bold">{s.standard}</span>
                  <h4 className="font-serif text-heading-3 font-semibold">{s.area}</h4>
                </div>
                <p className="text-caption text-muted-foreground leading-relaxed">{s.alignment}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* WSIS Alignment */}
    <Sec className="border-b border-border bg-muted/40">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">WSIS+20 Alignment</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">World Summit on the Information Society</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { line: "C1: Government Role", icon: Shield, desc: "GRGF strengthens government capacity for transparent, accountable governance through structural integrity infrastructure." },
            { line: "C7: ICT Applications", icon: Server, desc: "Governance integrity as critical ICT infrastructure for e-Government, enabling verifiable institutional accountability." },
            { line: "C10: Ethical Dimensions", icon: Lock, desc: "Anti-capture clauses, human rights impact assessment, and institutional neutrality ensure ethical governance infrastructure." },
          ].map(({ line, icon: Icon, desc }) => (
            <div key={line} className="governance-card-elevated group hover:border-accent/30 transition-all">
              <Icon className="h-5 w-5 text-accent mb-3" />
              <h4 className="font-serif text-heading-3 font-semibold mb-2">{line}</h4>
              <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* Regional Bodies */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Regional Frameworks</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Regional Digital Governance Alignment</h2>
        <div className="space-y-4">
          {regionalBodies.map((r, i) => (
            <FadeIn key={r.body} delay={i * 60}>
              <div className="governance-card-elevated hover:border-accent/20 transition-all">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h4 className="font-serif text-heading-3 font-semibold">{r.body}</h4>
                  <span className="px-2 py-0.5 bg-muted text-xs font-mono text-muted-foreground">{r.region}</span>
                </div>
                <p className="text-overline text-accent/70 mb-2">{r.framework}</p>
                <p className="text-caption text-muted-foreground leading-relaxed">{r.alignment}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* Global Governance Bodies */}
    <Sec className="border-b border-border bg-muted/40">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Multilateral Governance</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Additional Multilateral Alignment</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { body: "FATF", focus: "Anti-Money Laundering", alignment: "Governance integrity verification supports FATF institutional transparency requirements for beneficial ownership and authorization trails." },
            { body: "UNCITRAL", focus: "Electronic Commerce", alignment: "Cryptographic evidence and hash-sealed records meet UNCITRAL Model Law requirements for electronic records admissibility." },
            { body: "ISO/TC 307", focus: "Blockchain & DLT", alignment: "GRGF achieves distributed trust verification without blockchain energy costs — alignment with ISO governance objectives, not implementation approach." },
            { body: "Transparency International", focus: "Anti-Corruption", alignment: "Structural anti-corruption through omission-awareness — making institutional silence visible without relying on whistleblowers or investigations." },
          ].map(({ body, focus, alignment }) => (
            <div key={body} className="governance-card-elevated hover:border-accent/20 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-accent/15 text-accent text-xs font-mono font-bold">{body}</span>
                <span className="text-caption text-muted-foreground">{focus}</span>
              </div>
              <p className="text-caption text-muted-foreground leading-relaxed">{alignment}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    <Sec className="bg-primary text-primary-foreground">
      <FadeIn>
        <div className="text-center max-w-2xl mx-auto">
          <Globe className="h-8 w-8 text-accent mx-auto mb-4" />
          <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">International Standards Engagement</h2>
          <p className="text-body text-primary-foreground/60 mb-8">
            For ITU study groups, regional standards bodies, or international organizations evaluating governance integrity infrastructure alignment.
          </p>
          <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-accent/20">
            Request Standards Brief <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </FadeIn>
    </Sec>
  </div>
);

export default ITUGlobalStandards;
