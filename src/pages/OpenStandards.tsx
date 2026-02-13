import { Link } from "react-router-dom";
import { ArrowRight, FileText, Globe, Code, Database, Shield, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const OpenStandards = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Interoperability</p>
        <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
          Open Standards & Interoperability
        </h1>
        <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
          Machine-readable schema declarations, API standards, data portability commitments, and interoperability guarantees for sovereign governance infrastructure.
        </p>
      </div>
    </header>

    {/* Data Standards */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Data Standards</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Governance Event Schema</h2>
        <div className="governance-card-elevated mb-6">
          <p className="text-body text-muted-foreground mb-4">
            All GRGF governance events conform to a standardized, machine-readable schema. The schema is published as JSON-LD with RDF compatibility for semantic web integration.
          </p>
          <pre className="bg-primary text-primary-foreground p-4 text-xs font-mono overflow-x-auto rounded" role="code" aria-label="JSON-LD governance event schema">
{`{
  "@context": "https://schema.grgf.org/v1",
  "@type": "GovernanceEvent",
  "eventId": "GRGF-2024-0001",
  "eventType": ["ACTION", "DECISION", "OMISSION"],
  "timestamp": "ISO 8601",
  "authorityScope": "INSTITUTIONAL | DEPARTMENTAL | MINISTERIAL",
  "policyReference": "GOS-RULE-XXX",
  "integrityProof": {
    "algorithm": "SHA-256",
    "hash": "a3f2...",
    "sealedAt": "ISO 8601",
    "verificationEndpoint": "/api/v1/verify/{eventId}"
  },
  "evidenceStatus": "SEALED | DENIED | OMISSION",
  "chainOfCustody": {
    "previous": "GRGF-2024-0000",
    "sequence": 1
  }
}`}
          </pre>
        </div>
      </FadeIn>
    </Sec>

    {/* API Standards */}
    <Sec className="border-b border-border bg-muted/40">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">API Standards</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Verification API Specification</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { method: "GET", path: "/api/v1/verify/{eventId}", desc: "Verify integrity of a specific governance event record", response: "IntegrityProof object with hash, timestamp, and authority scope" },
            { method: "GET", path: "/api/v1/manifest/{date}", desc: "Retrieve daily SHA-256 hash manifest for bulk verification", response: "Array of event hashes for the specified date" },
            { method: "GET", path: "/api/v1/status", desc: "System health and availability status", response: "Availability metrics, version, and federation status" },
            { method: "POST", path: "/api/v1/federation/verify", desc: "Cross-border verification via federation protocol", response: "Federated integrity proof with multi-node attestation" },
          ].map(({ method, path, desc, response }) => (
            <div key={path} className="governance-card-elevated">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-accent/15 text-accent text-xs font-mono font-bold">{method}</span>
                <code className="text-xs font-mono text-foreground">{path}</code>
              </div>
              <p className="text-caption text-muted-foreground mb-2">{desc}</p>
              <p className="text-overline text-muted-foreground/50">Response: {response}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 governance-card border-l-2 border-l-accent">
          <p className="text-caption text-muted-foreground">
            <strong className="text-foreground">API Versioning:</strong> All endpoints are versioned (v1, v2). Breaking changes require minimum 12-month deprecation notice. Authentication via institutional API keys with rate limiting.
          </p>
        </div>
      </FadeIn>
    </Sec>

    {/* Data Portability */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Data Portability</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Portability Commitments</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Database, title: "Full Data Export", desc: "Complete governance record export in JSON-LD, CSV, and XML formats at any time. No vendor lock-in." },
            { icon: Code, title: "Open Source Compatible", desc: "Schema definitions, verification algorithms, and federation protocols published under open licence." },
            { icon: Globe, title: "Federation Portability", desc: "Sovereign nodes can migrate between hosting environments while maintaining cryptographic chain integrity." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="governance-card-elevated group hover:border-accent/30 transition-all">
              <Icon className="h-5 w-5 text-accent mb-3" />
              <h4 className="font-serif text-heading-3 font-semibold mb-2">{title}</h4>
              <p className="text-caption text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* Standards Alignment */}
    <Sec className="border-b border-border bg-muted/40">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Standards Alignment</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">International Standards Compliance</h2>
        <div className="space-y-3">
          {[
            { standard: "ISO 15489", title: "Records Management", status: "Aligned" },
            { standard: "ISO 27001", title: "Information Security Management", status: "Architecture-compliant" },
            { standard: "ISO 19011", title: "Auditing Management Systems", status: "Audit methodology aligned" },
            { standard: "W3C JSON-LD", title: "Linked Data Standard", status: "Native support" },
            { standard: "IETF RFC 6962", title: "Certificate Transparency", status: "Architectural influence" },
            { standard: "OASIS ebXML", title: "Electronic Business", status: "Interoperability target" },
            { standard: "OECD DPI", title: "Digital Public Infrastructure Standards", status: "Full alignment" },
            { standard: "GC EARB", title: "Canadian Enterprise Architecture Review Board", status: "Submission-ready" },
          ].map(({ standard, title, status }) => (
            <div key={standard} className="flex items-center justify-between py-3 px-4 border border-border hover:border-accent/20 transition-colors">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                <span className="text-xs font-mono font-bold text-accent">{standard}</span>
                <span className="text-body text-foreground">{title}</span>
              </div>
              <span className="text-overline font-mono text-muted-foreground">{status}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* CTA */}
    <Sec className="bg-primary text-primary-foreground">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">Integration Support</h2>
        <p className="text-body text-primary-foreground/60 mb-8">
          For technical integration guidance, schema documentation, or API access credentials, contact the GRGF Technical Review Panel.
        </p>
        <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-accent/20">
          Request API Access <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Sec>
  </div>
);

export default OpenStandards;
