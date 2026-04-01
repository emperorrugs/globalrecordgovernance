import { useState } from "react";
import { Play, Copy, Check, ChevronDown } from "lucide-react";
import { generateHash } from "@/core/crypto/sha256";

interface Endpoint {
  method: "GET" | "POST";
  path: string;
  label: string;
  description: string;
  body?: string;
}

const endpoints: Endpoint[] = [
  {
    method: "POST",
    path: "/v1/records",
    label: "Create Record",
    description: "Record an institutional event with authority binding and SHA-256 integrity seal.",
    body: JSON.stringify({
      actor: "Ministry of Finance",
      action: "budget_approval",
      authority: "FIN-2026-AUTH-047",
      subject: "Q2 Infrastructure Budget",
      occurred_at: new Date().toISOString(),
    }, null, 2),
  },
  {
    method: "GET",
    path: "/v1/records/GOV-2026-0847",
    label: "Get Record",
    description: "Retrieve a sealed governance record by ID, including its integrity proof.",
  },
  {
    method: "POST",
    path: "/v1/verify",
    label: "Verify Record",
    description: "Independently verify a record's integrity by token or record ID.",
    body: JSON.stringify({
      token: "abc123-def456-ghi789",
    }, null, 2),
  },
  {
    method: "GET",
    path: "/v1/records/GOV-2026-0847/proof",
    label: "Get Merkle Proof",
    description: "Retrieve the Merkle inclusion proof for a sealed record.",
  },
  {
    method: "GET",
    path: "/v1/audit?entity_id=GOV-2026-0847",
    label: "Audit Trail",
    description: "Retrieve the complete audit trail for a record or entity.",
  },
];

export function APIPlayground() {
  const [selected, setSelected] = useState(0);
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [bodyEdit, setBodyEdit] = useState(endpoints[0].body || "");

  const ep = endpoints[selected];

  const handleSelect = (i: number) => {
    setSelected(i);
    setResponse(null);
    setBodyEdit(endpoints[i].body || "");
  };

  const handleExecute = async () => {
    setLoading(true);
    setResponse(null);

    // Simulate API response with real hash computation
    await new Promise((r) => setTimeout(r, 800));

    try {
      const hash = await generateHash(bodyEdit || ep.path);
      const now = new Date().toISOString();

      let result: object;
      if (ep.path.includes("/verify")) {
        result = {
          verified: true,
          record_id: "GOV-2026-0847",
          status: "sealed",
          integrity: { algorithm: "SHA-256", hash: hash.slice(0, 64), match: true },
          authority: { institution: "Ministry of Finance", legal_basis: "FIN-2026-AUTH-047" },
          verified_at: now,
        };
      } else if (ep.path.includes("/proof")) {
        result = {
          record_id: "GOV-2026-0847",
          proof_type: "merkle_inclusion",
          tree_size: 2847,
          leaf_index: 1293,
          root_hash: hash.slice(0, 64),
          proof_hashes: [hash.slice(0, 16), hash.slice(16, 32), hash.slice(32, 48)],
          algorithm: "SHA-256",
          generated_at: now,
        };
      } else if (ep.path.includes("/audit")) {
        result = {
          entity_id: "GOV-2026-0847",
          events: [
            { action: "record.created", actor: "records_officer@mof.gov", at: "2026-03-15T09:12:00Z" },
            { action: "record.submitted", actor: "records_officer@mof.gov", at: "2026-03-15T09:14:00Z" },
            { action: "record.approved", actor: "approver@mof.gov", at: "2026-03-15T10:30:00Z" },
            { action: "record.sealed", actor: "system", at: "2026-03-15T10:30:01Z", hash: hash.slice(0, 32) },
          ],
          total: 4,
        };
      } else if (ep.method === "GET") {
        result = {
          id: "GOV-2026-0847",
          status: "sealed",
          title: "Q2 Infrastructure Budget Approval",
          actor: "Ministry of Finance",
          authority: "FIN-2026-AUTH-047",
          sealed_at: "2026-03-15T10:30:01Z",
          integrity: { algorithm: "SHA-256", hash: hash.slice(0, 64) },
          public_verifiable: true,
          verification_token: "abc123-def456-ghi789",
        };
      } else {
        result = {
          id: "GOV-2026-" + String(Math.floor(Math.random() * 9000) + 1000),
          status: "sealed",
          hash: hash.slice(0, 64),
          sealed_at: now,
          verification_token: crypto.randomUUID().slice(0, 23),
          verification_url: "https://verify.grgf.gov/abc123",
        };
      }

      setResponse(JSON.stringify(result, null, 2));
    } catch {
      setResponse(JSON.stringify({ error: "Simulation error" }, null, 2));
    }

    setLoading(false);
  };

  const handleCopy = () => {
    if (response) {
      navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-muted/30">
        <h3 className="text-sm font-semibold text-foreground">API Playground</h3>
        <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded bg-muted border border-border">
          SIMULATION MODE
        </span>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] divide-x divide-border">
        {/* Endpoint List */}
        <div className="bg-muted/20">
          <div className="p-3 border-b border-border">
            <p className="text-[10px] font-mono text-muted-foreground tracking-wider">ENDPOINTS</p>
          </div>
          {endpoints.map((e, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left px-4 py-3 border-b border-border transition-colors ${
                selected === i ? "bg-primary/5 border-l-2 border-l-primary" : "hover:bg-muted/50 border-l-2 border-l-transparent"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  e.method === "POST" ? "bg-emerald-500/10 text-emerald-600" : "bg-blue-500/10 text-blue-600"
                }`}>
                  {e.method}
                </span>
                <span className="text-xs font-mono text-muted-foreground truncate">{e.path}</span>
              </div>
              <p className="text-xs text-foreground font-medium">{e.label}</p>
            </button>
          ))}
        </div>

        {/* Request / Response */}
        <div className="flex flex-col">
          {/* Description */}
          <div className="px-5 py-3 border-b border-border">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                ep.method === "POST" ? "bg-emerald-500/10 text-emerald-600" : "bg-blue-500/10 text-blue-600"
              }`}>
                {ep.method}
              </span>
              <code className="text-sm font-mono text-foreground">https://api.grgf.gov{ep.path}</code>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{ep.description}</p>
          </div>

          {/* Request Body */}
          {ep.body && (
            <div className="border-b border-border">
              <div className="px-5 py-2 bg-muted/20 flex items-center gap-1">
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
                <span className="text-[10px] font-mono text-muted-foreground tracking-wider">REQUEST BODY</span>
              </div>
              <textarea
                value={bodyEdit}
                onChange={(e) => setBodyEdit(e.target.value)}
                className="w-full px-5 py-3 text-xs font-mono bg-[hsl(var(--primary)/0.02)] text-foreground resize-none focus:outline-none min-h-[140px]"
                spellCheck={false}
              />
            </div>
          )}

          {/* Execute */}
          <div className="px-5 py-3 border-b border-border">
            <button
              onClick={handleExecute}
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-all disabled:opacity-50"
            >
              <Play className="h-3.5 w-3.5" />
              {loading ? "Executing..." : "Send Request"}
            </button>
          </div>

          {/* Response */}
          <div className="flex-1 min-h-[200px]">
            <div className="px-5 py-2 bg-muted/20 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
                <span className="text-[10px] font-mono text-muted-foreground tracking-wider">RESPONSE</span>
                {response && (
                  <span className="ml-2 text-[10px] font-mono text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    200 OK
                  </span>
                )}
              </div>
              {response && (
                <button onClick={handleCopy} className="text-muted-foreground hover:text-foreground transition-colors">
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              )}
            </div>
            <pre className="px-5 py-3 text-xs font-mono text-foreground/80 whitespace-pre-wrap overflow-auto max-h-[300px]">
              {response || "// Click 'Send Request' to execute the API call"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
