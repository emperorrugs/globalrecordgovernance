import { PageHeader, Section } from "@/components/PageComponents";
import { useViewMode } from "@/contexts/ViewModeContext";
import { Code, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const ENDPOINTS = [
  {
    method: "POST",
    path: "/records",
    description: "Create a new governance record (simulated)",
    request: {
      record_type: "Government Decision",
      description: "Annual budget allocation approved by cabinet",
      actor: "Ministry of Finance",
      date: "2024-06-15",
      authority_scope: "National",
    },
    response: {
      status: "CREATED",
      record_id: "GRGF-SIM-0042",
      hash: "a7f3c2d8e9b1f4a6c3d7e8f2a5b9c1d4e7f0a3b6c9d2e5f8a1b4c7d0e3f6a8",
      sealed_at: "2024-06-15T14:30:00Z",
      authority: "Ministry of Finance",
      classification: "INSTITUTIONAL_ACTION",
      integrity: "SHA-256",
    },
  },
  {
    method: "GET",
    path: "/records/{id}",
    description: "Retrieve a specific governance record by ID",
    request: null,
    response: {
      record_id: "GRGF-SIM-0042",
      record_type: "Government Decision",
      status: "APPROVED",
      institution: "Ministry of Finance",
      date: "2024-06-15",
      hash: "a7f3c2d8e9b1f4a6c3d7e8f2a5b9c1d4e7f0a3b6c9d2e5f8a1b4c7d0e3f6a8",
      sealed_at: "2024-06-15T14:30:00Z",
      version: 1,
      verification_url: "/verify/GRGF-SIM-0042",
    },
  },
  {
    method: "GET",
    path: "/audit-log",
    description: "Retrieve the audit trail for governance operations",
    request: null,
    response: {
      total_entries: 5,
      entries: [
        { timestamp: "2024-06-01T09:14:22Z", actor: "J. Okafor", action: "RECORD_CREATED", record_id: "GRGF-SIM-0042" },
        { timestamp: "2024-06-02T14:30:05Z", actor: "M. Chen", action: "REVIEW_INITIATED", record_id: "GRGF-SIM-0042" },
        { timestamp: "2024-06-04T16:45:11Z", actor: "Dr. A. Nkosi", action: "APPROVED_SEALED", record_id: "GRGF-SIM-0042" },
      ],
    },
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="text-muted-foreground hover:text-foreground transition-colors"
      title="Copy"
    >
      {copied ? <CheckCircle className="h-3.5 w-3.5 text-accent" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

const APIMock = () => {
  const { isPlain } = useViewMode();

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="API Reference (Mock)"
        subtitle={
          isPlain
            ? "See how GRGF could integrate with other systems — these are example API formats, not live endpoints."
            : "Mock API specification for GRGF record operations. No backend, no live data. For technical review and integration planning."
        }
      >
        <div className="mt-4 flex items-center gap-2 text-xs font-mono bg-destructive/10 text-destructive px-3 py-2 rounded-sm w-fit border border-destructive/20">
          <Code className="h-3.5 w-3.5 shrink-0" />
          <span>MOCK API — No backend, no live data</span>
        </div>
      </PageHeader>

      <Section>
        <div className="space-y-8">
          {ENDPOINTS.map((ep) => (
            <div key={ep.path + ep.method} className="governance-card">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-2 py-0.5 rounded-sm text-xs font-mono font-bold ${
                  ep.method === "POST" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"
                }`}>
                  {ep.method}
                </span>
                <code className="text-sm font-mono text-foreground">{ep.path}</code>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{ep.description}</p>

              {ep.request && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Request Body</p>
                    <CopyButton text={JSON.stringify(ep.request, null, 2)} />
                  </div>
                  <pre className="bg-background border border-border rounded-sm p-4 text-xs font-mono text-muted-foreground overflow-x-auto">
                    {JSON.stringify(ep.request, null, 2)}
                  </pre>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Response</p>
                  <CopyButton text={JSON.stringify(ep.response, null, 2)} />
                </div>
                <pre className="bg-background border border-border rounded-sm p-4 text-xs font-mono text-muted-foreground overflow-x-auto">
                  {JSON.stringify(ep.response, null, 2)}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground italic">
          These endpoints are illustrative only. No backend service exists. No data is transmitted, stored, or processed.
        </p>
      </Section>
    </div>
  );
};

export default APIMock;
