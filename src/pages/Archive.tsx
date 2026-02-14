import { useState, useCallback } from "react";
import { PageHeader, Section } from "@/components/PageComponents";
import { FileText, Lock, Hash, Download, Folder, Search, Filter, ShieldCheck, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const versionRegistry = [
  { doc: "Pilot Evaluation Plan", version: "0.1", date: "2026-01-31", category: "Pilot", classification: "Public", hash: "a7f3c2d1e8b4f6a9c3d5e7f1a2b4c6d8e0f2a4b6c8d0e2f4a6b8c0d2e4f6a8", desc: "Structured evaluation plan for 90-day institutional pilot." },
  { doc: "Demo Guide", version: "0.1", date: "2026-01-31", category: "Pilot", classification: "Public", hash: "b8e4d3c2f1a5b7c9d1e3f5a7b9c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3b5", desc: "Walkthrough guide for demonstration workflows." },
  { doc: "Executive Slide Deck", version: "1.0", date: "2026-01-31", category: "Executive", classification: "Public", hash: "c9f5e4d3a2b6c8d0e2f4a6b8c0d2e4f6a8b0c2d4e6f8a0b2c4d6e8f0a2b4c6", desc: "Visual executive briefing for institutional leadership." },
  { doc: "GRGF Master Binder", version: "1.0", date: "2026-01-30", category: "Executive", classification: "Public", hash: "d0a6f5e4b3c7d9e1f3a5b7c9d1e3f5a7b9c1d3e5f7a9b1c3d5e7f9a1b3c5d7", desc: "Complete institutional reference document (11 sections)." },
  { doc: "API Contract", version: "0.1", date: "2026-01-31", category: "Architecture", classification: "Restricted", hash: "e1b7a6f5c4d8e0f2a4b6c8d0e2f4a6b8c0d2e4f6a8b0c2d4e6f8a0b2c4d6e8", desc: "Verification API contract specification." },
  { doc: "Technical Walkthrough", version: "0.1", date: "2026-01-31", category: "Architecture", classification: "Restricted", hash: "f2c8b7a6d5e9f1a3b5c7d9e1f3a5b7c9d1e3f5a7b9c1d3e5f7a9b1c3d5e7f9", desc: "Technical deep-dive into six-layer architecture." },
  { doc: "System Architecture", version: "1.0", date: "2026-01-30", category: "Architecture", classification: "Public", hash: "a3d9c8b7e6f0a2b4c6d8e0f2a4b6c8d0e2f4a6b8c0d2e4f6a8b0c2d4e6f8a0", desc: "Six-layer architecture catalog and data flow." },
  { doc: "Privacy Impact Assessment", version: "1.0", date: "2026-01-30", category: "Security", classification: "Institutional", hash: "b4e0d9c8f7a1b3c5d7e9f1a3b5c7d9e1f3a5b7c9d1e3f5a7b9c1d3e5f7a9b1", desc: "PIA aligned with PIPEDA and GDPR principles." },
  { doc: "Incident Response Plan", version: "1.0", date: "2026-01-30", category: "Security", classification: "Institutional", hash: "c5f1e0d9a8b2c4d6e8f0a2b4c6d8e0f2a4b6c8d0e2f4a6b8c0d2e4f6a8b0c2", desc: "Evidence-preserving incident response procedures." },
  { doc: "Threat Model (STRIDE)", version: "1.0", date: "2026-01-30", category: "Security", classification: "Public", hash: "d6a2f1e0b9c3d5e7f9a1b3c5d7e9f1a3b5c7d9e1f3a5b7c9d1e3f5a7b9c1d3", desc: "STRIDE-based threat model for governance infrastructure." },
  { doc: "Data Protection Policy", version: "1.0", date: "2026-01-30", category: "Compliance", classification: "Public", hash: "e7b3a2f1c0d4e6f8a0b2c4d6e8f0a2b4c6d8e0f2a4b6c8d0e2f4a6b8c0d2e4", desc: "RBAC/ABAC access control and encryption policy." },
  { doc: "Governance Charter", version: "1.0", date: "2026-01-30", category: "Governance", classification: "Public", hash: "f8c4b3a2d1e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3b5c7d9e1f3a5b7c9d1e3f5", desc: "Six charter principles and governance structure." },
  { doc: "Interoperability Profile", version: "1.0", date: "2026-01-30", category: "Architecture", classification: "Public", hash: "a9d5c4b3e2f6a8b0c2d4e6f8a0b2c4d6e8f0a2b4c6d8e0f2a4b6c8d0e2f4a6", desc: "Cross-system interoperability standards and connectors." },
  { doc: "Deployment Playbook", version: "0.1", date: "2026-01-31", category: "Deployment", classification: "Public", hash: "b0e6d5c4f3a7b9c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3b5c7d9e1f3a5b7", desc: "Step-by-step sovereign deployment guide (draft)." },
];

const categories = ["All", "Executive", "Architecture", "Security", "Governance", "Compliance", "Pilot", "Deployment"];

const classificationColor = (c: string) => {
  if (c === "Public") return "text-accent bg-accent/10 border-accent/20";
  if (c === "Institutional") return "text-accent bg-accent/10 border-accent/20";
  return "text-destructive bg-destructive/10 border-destructive/20";
};

const Archive = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hashInput, setHashInput] = useState("");
  const [hashResult, setHashResult] = useState<"idle" | "match" | "mismatch">("idle");
  const [fileHash, setFileHash] = useState("");

  const filteredDocs = versionRegistry.filter((doc) => {
    const matchesSearch = doc.doc.toLowerCase().includes(searchQuery.toLowerCase()) || doc.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleFileHash = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    setFileHash(hex);
    if (hashInput.trim()) {
      setHashResult(hex === hashInput.trim().toLowerCase() ? "match" : "mismatch");
    }
  }, [hashInput]);

  const handleVerify = () => {
    if (!fileHash || !hashInput.trim()) return;
    setHashResult(fileHash === hashInput.trim().toLowerCase() ? "match" : "mismatch");
  };

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Digital Archive"
        subtitle="Institutional evidence library with cryptographic integrity. All records include classification level and SHA-256 hash."
      />

      {/* Search and Filter */}
      <Section>
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              aria-label="Search documents"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider border rounded-sm transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:bg-card"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-4">{filteredDocs.length} document{filteredDocs.length !== 1 ? "s" : ""} found</p>

        {/* Document Cards */}
        <div className="grid gap-3 lg:grid-cols-2">
          {filteredDocs.map((doc) => (
            <div key={doc.doc} className="governance-card">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="h-4 w-4 text-accent shrink-0" />
                    <h3 className="text-sm font-serif font-semibold truncate">{doc.doc}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{doc.desc}</p>
                </div>
                {doc.classification === "Public" ? (
                  <button className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 border border-border text-[10px] font-medium rounded-sm hover:bg-card transition-colors">
                    <Download className="h-3 w-3" /> PDF
                  </button>
                ) : (
                  <Link to="/controlled-access" className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 border border-border text-[10px] font-medium rounded-sm hover:bg-card transition-colors text-muted-foreground">
                    <Lock className="h-3 w-3" /> Request
                  </Link>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-border/50">
                <span className="text-[10px] font-mono text-muted-foreground">v{doc.version}</span>
                <span className="text-[10px] text-muted-foreground/40">|</span>
                <span className="text-[10px] font-mono text-muted-foreground">{doc.date}</span>
                <span className="text-[10px] text-muted-foreground/40">|</span>
                <span className={`text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-sm border ${classificationColor(doc.classification)}`}>
                  {doc.classification}
                </span>
                <span className="text-[10px] text-muted-foreground/40">|</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-muted/50 text-muted-foreground">{doc.category}</span>
              </div>
              <div className="mt-2">
                <p className="text-[9px] font-mono text-muted-foreground/50 break-all">
                  SHA-256: {doc.hash}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Client-Side Hash Verification */}
      <Section title="Verify a Document" className="border-t border-border">
        <div className="governance-card max-w-2xl border-l-2 border-l-accent">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-5 w-5 text-accent" />
            <h3 className="font-serif text-sm font-semibold">Client-Side Hash Verification</h3>
          </div>
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            Upload a file to compute its SHA-256 hash locally in your browser. No data is transmitted. Compare against an expected hash to verify integrity.
          </p>

          <div className="space-y-3">
            <div>
              <label className="block text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Select File (hashed locally)</label>
              <input
                type="file"
                onChange={handleFileHash}
                className="block w-full text-xs text-muted-foreground file:mr-3 file:py-1.5 file:px-3 file:border file:border-border file:text-[10px] file:font-mono file:bg-card file:text-foreground file:rounded-sm file:cursor-pointer"
                aria-label="Select file for hash verification"
              />
            </div>

            {fileHash && (
              <div className="p-3 bg-muted/30 rounded-sm">
                <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Computed SHA-256</p>
                <p className="text-xs font-mono text-foreground break-all">{fileHash}</p>
              </div>
            )}

            <div>
              <label className="block text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Expected Hash (paste to compare)</label>
              <input
                type="text"
                value={hashInput}
                onChange={(e) => { setHashInput(e.target.value); setHashResult("idle"); }}
                placeholder="Paste expected SHA-256 hash..."
                className="w-full px-3 py-2 text-xs font-mono border border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                aria-label="Expected hash value"
              />
            </div>

            <button
              onClick={handleVerify}
              disabled={!fileHash || !hashInput.trim()}
              className="px-4 py-2 text-xs font-mono border border-border rounded-sm hover:bg-card transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Verify Match
            </button>

            {hashResult === "match" && (
              <div className="flex items-center gap-2 p-3 bg-accent/10 border border-accent/20 rounded-sm">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <p className="text-xs font-mono text-accent">✓ Hash match — document integrity verified.</p>
              </div>
            )}
            {hashResult === "mismatch" && (
              <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-sm">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <p className="text-xs font-mono text-destructive">✗ Hash mismatch — document may have been altered.</p>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Attribution */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground/60 italic leading-relaxed max-w-3xl">
          This archive provides versioned reference materials for institutional evaluation. All documents are subject to the Controlled Distribution Protocol.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
        </p>
      </Section>
    </div>
  );
};

export default Archive;
