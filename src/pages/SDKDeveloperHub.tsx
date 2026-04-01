import { PageHeader, Section } from "@/components/PageComponents";
import { Code, Terminal, BookOpen, Package, GitBranch, CheckCircle2, ArrowRight, Shield } from "lucide-react";
import { PatentNotice } from "@/components/PatentNotice";
import { APIPlayground } from "@/components/APIPlayground";

const SDKDeveloperHub = () => {
  const sdks = [
    {
      lang: "TypeScript / JavaScript",
      install: "npm install @grgf/sdk",
      snippet: `import { GRGFClient } from '@grgf/sdk';

const client = new GRGFClient({
  apiKey: process.env.GRGF_API_KEY,
  endpoint: 'https://api.grgf.gov',
});

// Verify a record by token
const result = await client.verify('abc123-def456');
console.log(result.verified); // true
console.log(result.integrity.hash); // sha256:...`,
    },
    {
      lang: "Python",
      install: "pip install grgf-sdk",
      snippet: `from grgf import GRGFClient

client = GRGFClient(
    api_key=os.environ["GRGF_API_KEY"],
    endpoint="https://api.grgf.gov"
)

# Verify a record
result = client.verify("abc123-def456")
assert result.verified is True
print(f"Hash: {result.integrity.hash}")`,
    },
    {
      lang: "Java",
      install: "implementation 'io.grgf:sdk:1.0.0'",
      snippet: `GRGFClient client = GRGFClient.builder()
    .apiKey(System.getenv("GRGF_API_KEY"))
    .endpoint("https://api.grgf.gov")
    .build();

VerificationResult result = client.verify("abc123-def456");
System.out.println(result.isVerified()); // true
System.out.println(result.getIntegrity().getHash());`,
    },
  ];

  const resources = [
    { icon: BookOpen, title: "API Reference", desc: "Complete endpoint documentation with request/response schemas", link: "/verification-api" },
    { icon: Terminal, title: "Interactive Console", desc: "Test API calls directly in the browser with live responses", link: "/api-mock" },
    { icon: GitBranch, title: "Open Schemas", desc: "Canonical event schemas, record envelopes, and proof formats", link: "/interoperability" },
    { icon: Shield, title: "Security Guide", desc: "Authentication, rate limits, mTLS setup, and best practices", link: "/security-trust" },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Developer Hub"
        subtitle="Everything needed to integrate GRGF verification into your systems. SDKs, APIs, schemas, and guides."
      />

      {/* Quick Start */}
      <Section title="Quick Start">
        <div className="governance-card max-w-3xl border-l-2 border-l-accent">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="h-4 w-4 text-accent" />
            <span className="text-xs font-semibold text-foreground">3 steps to verify your first record</span>
          </div>
          <div className="space-y-3">
            {[
              { step: "01", action: "Obtain an API key from the institutional portal" },
              { step: "02", action: "Install the SDK for your language" },
              { step: "03", action: "Call client.verify(token) — receive cryptographic proof" },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-3">
                <span className="hash-text shrink-0">{s.step}</span>
                <p className="text-sm text-muted-foreground">{s.action}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SDK Libraries */}
      <Section title="SDK Libraries" className="border-t border-border">
        <div className="space-y-6 max-w-4xl">
          {sdks.map((sdk) => (
            <div key={sdk.lang} className="governance-card">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-accent" />
                  <h3 className="font-serif text-sm font-semibold">{sdk.lang}</h3>
                </div>
                <code className="text-[10px] font-mono bg-muted px-2 py-1 rounded text-muted-foreground">{sdk.install}</code>
              </div>
              <pre className="text-xs font-mono text-foreground/80 bg-card/50 p-4 rounded overflow-x-auto leading-relaxed">
                {sdk.snippet}
              </pre>
            </div>
          ))}
        </div>
      </Section>

      {/* Interactive API Playground */}
      <Section title="API Playground" className="border-t border-border">
        <div className="max-w-5xl">
          <p className="text-sm text-muted-foreground mb-6">
            Test GRGF API endpoints directly in the browser. All responses use real SHA-256 hash computation in simulation mode.
          </p>
          <APIPlayground />
        </div>
      </Section>

      {/* API Versioning Policy */}
      <Section title="API Versioning Policy" className="border-t border-border">
        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground mb-4">
            GRGF follows strict semantic versioning with explicit deprecation timelines. Enterprise clients receive minimum 18-month migration windows.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Version</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Status</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Support Until</th>
                  <th className="text-left py-2 font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono">v1</td>
                  <td className="py-2 pr-4"><span className="text-accent font-semibold">CURRENT</span></td>
                  <td className="py-2 pr-4">2029-12-31</td>
                  <td className="py-2">Stable release — full feature set</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono">v2</td>
                  <td className="py-2 pr-4 text-muted-foreground/60">PLANNED</td>
                  <td className="py-2 pr-4">—</td>
                  <td className="py-2">Federation proofs, batch streaming</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 governance-card bg-muted/30">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Deprecation Policy:</strong> Breaking changes require a new major version. 
              Deprecated versions receive security patches for 18 months after successor release. 
              All deprecation notices are published 12 months in advance.
            </p>
          </div>
        </div>
      </Section>

      {/* Canonical Schemas */}
      <Section title="Canonical Schemas" className="border-t border-border">
        <div className="governance-card max-w-3xl">
          <h3 className="font-serif text-sm font-semibold mb-3">Record Event Schema</h3>
          <pre className="text-xs font-mono text-foreground/80 bg-card/50 p-4 rounded overflow-x-auto leading-relaxed">
{`{
  "event_id": "string (UUID v4)",
  "event_type": "enum: decision | approval | inspection | ...",
  "actor_ref": "string (pseudonymized)",
  "authority_context": "string (mandate reference)",
  "institution": "string",
  "jurisdiction": "string (ISO 3166-2)",
  "action_type": "string",
  "subject": "string (reference)",
  "occurred_at": "string (ISO 8601)",
  "payload_hash": "string (SHA-256)",
  "prev_hash": "string | null",
  "policy_version": "string (semver)"
}`}
          </pre>
        </div>
      </Section>

      {/* Resources */}
      <Section title="Resources" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
          {resources.map((r) => (
            <a key={r.title} href={r.link} className="governance-card group hover:border-accent/30 transition-colors">
              <div className="flex items-start gap-3">
                <r.icon className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <h3 className="font-serif text-sm font-semibold group-hover:text-accent transition-colors">
                    {r.title} <ArrowRight className="inline h-3 w-3 ml-1" />
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <PatentNotice />
    </div>
  );
};

export default SDKDeveloperHub;
