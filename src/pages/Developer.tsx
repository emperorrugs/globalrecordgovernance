import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { Code, Globe, Shield, Layers, Zap, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const API_ENDPOINTS = [
  { method: "GET", path: "/v1/records/{id}/verify", desc: "Verify integrity of a governance record by hash comparison." },
  { method: "POST", path: "/v1/events", desc: "Submit a governance event for processing and cryptographic anchoring." },
  { method: "GET", path: "/v1/audit/{id}/reconstruct", desc: "Reconstruct complete audit trail for a governance decision." },
  { method: "GET", path: "/v1/federation/attestation/{node}", desc: "Request cross-border verification attestation certificate." },
  { method: "GET", path: "/v1/policy/evaluate", desc: "Evaluate a governance action against encoded policy rules." },
  { method: "GET", path: "/v1/omissions/detect", desc: "Check for detected omissions in governance event sequences." },
];

const SDK_FEATURES = [
  { icon: Shield, title: "Record Verification", desc: "Client library for independent hash verification and integrity proofs. Supports SHA-256/512 and CICE attestations." },
  { icon: Layers, title: "Policy Integration", desc: "SDK for encoding governance rules as deterministic policy configurations. Compatible with OPA engine format." },
  { icon: Globe, title: "Federation Client", desc: "Cross-border verification client for federated node communication. Handles attestation exchange and trust verification." },
  { icon: Zap, title: "Event Submission", desc: "Typed event schemas for governance action submission. Includes validation, normalization, and delivery confirmation." },
];

const STANDARDS = [
  { std: "REST/JSON", desc: "All APIs follow RESTful conventions with JSON request/response format." },
  { std: "OAuth 2.0", desc: "Authentication and authorization using standard OAuth 2.0 flows." },
  { std: "OpenAPI 3.0", desc: "Complete API specification available in OpenAPI 3.0 format." },
  { std: "ISO 8601", desc: "All timestamps use ISO 8601 format with timezone information." },
  { std: "SHA-256/512", desc: "Cryptographic hashing follows NIST FIPS 180-4 standards." },
  { std: "X.509", desc: "Certificate-based identity verification for federation nodes." },
];

const Developer = () => (
  <div className="animate-fade-in">
    <SEOHead
      title="Developer & Integration Portal — GRGF"
      description="API documentation, SDK concepts, and integration patterns for governance infrastructure developers and system integrators."
    />
    <PageHeader
      title="Developer & Open Integration Layer"
      subtitle="Technical integration documentation for system architects and developers. API previews, SDK concepts, and interoperability standards."
    />

    <Section title="API Endpoint Preview" className="border-t border-border">
      <FadeIn>
        <div className="overflow-x-auto governance-card-elevated">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-accent/30">
                <th className="text-left py-3 px-4 font-serif font-semibold w-20">Method</th>
                <th className="text-left py-3 px-4 font-serif font-semibold">Endpoint</th>
                <th className="text-left py-3 px-4 font-serif font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {API_ENDPOINTS.map((e) => (
                <tr key={e.path} className="border-b border-border/60 hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 ${e.method === "POST" ? "bg-accent/15 text-accent" : "bg-primary/10 text-primary"}`}>
                      {e.method}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-sm text-muted-foreground">{e.path}</td>
                  <td className="py-3 px-4 text-muted-foreground">{e.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3 font-mono">
          * API endpoints shown are conceptual previews. Production API access requires institutional partnership agreement.
        </p>
      </FadeIn>
    </Section>

    <Section title="Sample Integration Flow" className="border-t border-border">
      <FadeIn>
        <div className="governance-card-elevated max-w-3xl">
          <h4 className="font-serif text-lg font-semibold mb-4">Record Verification Flow</h4>
          <pre className="bg-primary text-primary-foreground p-6 text-sm font-mono overflow-x-auto leading-relaxed rounded-sm">
{`// 1. Initialize client
const grgf = new GRGFClient({
  nodeUrl: "https://node.ca.grgf.gov",
  apiKey: process.env.GRGF_API_KEY,
});

// 2. Submit governance event
const event = await grgf.events.submit({
  type: "PROCUREMENT_AUTHORIZATION",
  authority: "ministry-finance",
  payload: { contractId: "PO-2026-4412", value: 2500000 },
});

// 3. Verify record integrity
const proof = await grgf.records.verify(event.recordId);
console.log(proof.valid);       // true
console.log(proof.hash);        // "sha256:a1b2c3..."
console.log(proof.attestation); // CICE certificate`}
          </pre>
        </div>
      </FadeIn>
    </Section>

    <Section title="Interoperability SDK" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2">
        {SDK_FEATURES.map(({ icon: Icon, title, desc }, i) => (
          <FadeIn key={title} delay={i * 80}>
            <div className="governance-card-elevated group hover:border-accent/30 transition-all duration-300">
              <Icon className="h-5 w-5 text-accent mb-3" />
              <h4 className="font-serif text-lg font-semibold mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>

    <Section title="Open Standards Roadmap" className="border-t border-border">
      <FadeIn>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
          {STANDARDS.map(({ std, desc }) => (
            <div key={std} className="governance-card">
              <p className="font-mono text-sm font-semibold text-accent mb-1">{std}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>

    <Section title="Sandbox & Testing" className="border-t border-border">
      <FadeIn>
        <div className="governance-card-elevated max-w-3xl">
          <div className="flex items-start gap-4">
            <Code className="h-6 w-6 text-accent shrink-0 mt-1" />
            <div>
              <h4 className="font-serif text-lg font-semibold mb-2">Governance Simulation Sandbox</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Explore the governance event lifecycle, policy evaluation, and verification workflows through the interactive simulation environment.
                The sandbox uses non-authoritative demonstration data and is designed for technical evaluation purposes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/simulator" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold transition-colors hover:bg-accent/90">
                  Open Simulator <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link to="/api-mock" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium hover:bg-muted transition-colors">
                  API Mock Demo <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>

    <Section className="border-t border-border bg-muted/30">
      <div className="flex items-start gap-3">
        <BookOpen className="h-4 w-4 text-accent shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Integration Note.</span>{" "}
          Production API access and SDK distribution require formal institutional partnership.
          The documentation presented here is for technical evaluation and integration planning purposes.
        </p>
      </div>
    </Section>
  </div>
);

export default Developer;
