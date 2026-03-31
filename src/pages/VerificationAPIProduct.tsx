import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Zap, Globe, Lock, Code, Server, ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import { PatentNotice } from "@/components/PatentNotice";

const VerificationAPIProduct = () => {
  const pricingTiers = [
    {
      name: "Developer",
      price: "Free",
      period: "up to 1,000 queries/mo",
      features: ["Public verification endpoint", "JSON response format", "Rate-limited sandbox", "Community documentation"],
      cta: "Get API Key",
      highlight: false,
    },
    {
      name: "Institutional",
      price: "$2,500",
      period: "/month",
      features: ["50,000 queries/mo", "Authenticated verification", "Inclusion + consistency proofs", "SLA 99.9% uptime", "Dedicated support channel"],
      cta: "Request Access",
      highlight: true,
    },
    {
      name: "Sovereign",
      price: "Custom",
      period: "bilateral agreement",
      features: ["Unlimited queries", "On-premise deployment option", "HSM-backed key verification", "Cross-node federation proofs", "24/7 institutional support", "Custom SLA"],
      cta: "Contact Us",
      highlight: false,
    },
  ];

  const endpoints = [
    { method: "GET", path: "/v1/verify/{token}", desc: "Public verification by token — returns status, hash, and sealed timestamp" },
    { method: "GET", path: "/v1/proof/inclusion/{event_id}", desc: "Request cryptographic inclusion proof for a specific governance event" },
    { method: "GET", path: "/v1/proof/consistency/{cp_a}/{cp_b}", desc: "Request consistency proof between two checkpoints" },
    { method: "GET", path: "/v1/checkpoint/latest", desc: "Retrieve latest signed Merkle root checkpoint" },
    { method: "GET", path: "/v1/policy/{id}/version/{v}", desc: "Retrieve policy version hash for audit reconstruction" },
    { method: "POST", path: "/v1/verify/batch", desc: "Batch verification of up to 100 records per request" },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Verification API"
        subtitle="Standalone verification-as-a-service. Enable any system to confirm governance record integrity without accessing the core ledger."
      />

      {/* Value Proposition */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-3 max-w-5xl">
          {[
            { icon: Zap, title: "Sub-100ms Response", desc: "Cryptographic verification at enterprise speed. No blockchain latency." },
            { icon: Lock, title: "Zero Data Exposure", desc: "Confirms existence and integrity without revealing record content." },
            { icon: Globe, title: "Federation-Ready", desc: "Cross-node verification across sovereign jurisdictions." },
          ].map((item) => (
            <div key={item.title} className="governance-card">
              <item.icon className="h-5 w-5 text-accent mb-3" />
              <h3 className="font-serif text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* API Endpoints */}
      <Section title="API Reference" className="border-t border-border">
        <p className="text-muted-foreground text-sm mb-6 max-w-3xl">
          RESTful API with versioned endpoints. All responses include cryptographic proof artifacts.
        </p>
        <div className="space-y-3 max-w-4xl">
          {endpoints.map((ep) => (
            <div key={ep.path} className="governance-card flex items-start gap-4">
              <span className={`text-xs font-mono font-bold px-2 py-1 rounded shrink-0 ${
                ep.method === "GET" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
              }`}>
                {ep.method}
              </span>
              <div className="min-w-0">
                <code className="text-xs font-mono text-foreground break-all">{ep.path}</code>
                <p className="text-xs text-muted-foreground mt-1">{ep.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Live Example */}
      <Section title="Response Format" className="border-t border-border">
        <div className="governance-card max-w-3xl bg-card/80">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="h-4 w-4 text-accent" />
            <span className="text-xs font-mono text-muted-foreground">GET /v1/verify/abc123-def456</span>
          </div>
          <pre className="text-xs font-mono text-foreground/80 overflow-x-auto leading-relaxed">
{`{
  "verified": true,
  "status": "sealed",
  "integrity": {
    "algorithm": "SHA-256",
    "hash": "a1b2c3d4e5f6...",
    "chain_valid": true,
    "checkpoint_id": "cp-2026-0331-1200"
  },
  "authority": {
    "jurisdiction": "CA-ON",
    "institution": "Ministry of Public Administration"
  },
  "sealed_at": "2026-03-15T14:30:00Z",
  "proof": {
    "type": "inclusion",
    "merkle_path": ["h1", "h2", "h3"],
    "root_hash": "sha256:ef789..."
  }
}`}
          </pre>
        </div>
      </Section>

      {/* Integration */}
      <Section title="Integration" className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
          <div className="governance-card">
            <Code className="h-5 w-5 text-accent mb-3" />
            <h3 className="font-serif text-sm font-semibold">SDK Libraries</h3>
            <div className="mt-3 space-y-2">
              {["TypeScript / JavaScript", "Python", "Java / Kotlin", "Go", "C# / .NET"].map((lang) => (
                <div key={lang} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 text-accent" />
                  <span className="text-xs text-muted-foreground">{lang}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="governance-card">
            <Server className="h-5 w-5 text-accent mb-3" />
            <h3 className="font-serif text-sm font-semibold">Authentication</h3>
            <div className="mt-3 space-y-2">
              {[
                "Public: No auth required for existence proofs",
                "Institutional: Bearer token + mTLS",
                "Sovereign: X.509 certificate chain",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section title="Pricing" className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-3 max-w-5xl">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className={`governance-card ${tier.highlight ? "border-accent border-2 relative" : ""}`}>
              {tier.highlight && (
                <span className="absolute -top-3 left-4 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded">
                  RECOMMENDED
                </span>
              )}
              <h3 className="font-serif text-sm font-semibold">{tier.name}</h3>
              <div className="mt-2">
                <span className="text-2xl font-bold text-foreground">{tier.price}</span>
                <span className="text-xs text-muted-foreground ml-1">{tier.period}</span>
              </div>
              <div className="mt-4 space-y-2">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <button className={`mt-5 w-full text-xs font-semibold py-2 px-4 rounded transition-colors ${
                tier.highlight
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}>
                {tier.cta} <ArrowRight className="inline h-3 w-3 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Security Guarantees */}
      <Section title="Security Guarantees" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
          {[
            { label: "Encryption", value: "TLS 1.3 in transit, AES-256 at rest" },
            { label: "Authentication", value: "OAuth 2.0, mTLS, X.509 certificates" },
            { label: "Rate Limiting", value: "Per-key throttling with burst allowance" },
            { label: "Audit", value: "Every API call logged immutably" },
            { label: "Compliance", value: "SOC 2 Type II, ISO 27001 aligned" },
            { label: "Availability", value: "99.99% SLA for sovereign tier" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <Shield className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-foreground">{item.label}</span>
                <p className="text-xs text-muted-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <PatentNotice />
    </div>
  );
};

export default VerificationAPIProduct;
