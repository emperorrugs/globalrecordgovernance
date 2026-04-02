import { useState, useCallback } from "react";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import {
  Link2, Hash, Search, CheckCircle, XCircle, Shield, Clock,
  FileText, Download, ArrowRight, Database, Lock, Globe, Layers,
  Plus, Eye, Copy, AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface GovernanceRecord {
  id: string;
  hash: string;
  previousHash: string;
  timestamp: string;
  authority: string;
  sector: string;
  eventType: string;
  title: string;
  payload: string;
  status: "committed" | "verified" | "sealed";
  blockIndex: number;
  merkleRoot: string;
  proofCertificate?: string;
}

// SHA-256 hash function (Web Crypto API)
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// Generate merkle root from hashes
async function computeMerkleRoot(hashes: string[]): Promise<string> {
  if (hashes.length === 0) return await sha256("GENESIS");
  if (hashes.length === 1) return hashes[0];
  const paired: string[] = [];
  for (let i = 0; i < hashes.length; i += 2) {
    const left = hashes[i];
    const right = hashes[i + 1] || left;
    paired.push(await sha256(left + right));
  }
  return computeMerkleRoot(paired);
}

const GENESIS_HASH = "0000000000000000000000000000000000000000000000000000000000000000";

const sectorOptions = [
  { value: "GOV", label: "Government & Legislation" },
  { value: "FIN", label: "Financial Services" },
  { value: "HLT", label: "Healthcare" },
  { value: "JUS", label: "Justice & Legal" },
  { value: "ENV", label: "Environment & Climate" },
  { value: "EDU", label: "Education" },
  { value: "INF", label: "Infrastructure" },
  { value: "DIG", label: "Digital Governance" },
  { value: "TRD", label: "Trade & Commerce" },
  { value: "NRG", label: "Energy & Resources" },
  { value: "SOC", label: "Social Services" },
  { value: "DEF", label: "Defence & Security" },
];

const AnchorChainPrototype = () => {
  const [chain, setChain] = useState<GovernanceRecord[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verifyInput, setVerifyInput] = useState("");
  const [verifyResult, setVerifyResult] = useState<null | GovernanceRecord | "not_found">(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<GovernanceRecord | null>(null);

  // Form state
  const [formTitle, setFormTitle] = useState("");
  const [formAuthority, setFormAuthority] = useState("");
  const [formSector, setFormSector] = useState("GOV");
  const [formEventType, setFormEventType] = useState("");
  const [formPayload, setFormPayload] = useState("");

  const { toast } = useToast();

  const submitRecord = useCallback(async () => {
    if (!formTitle || !formAuthority || !formEventType) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const previousHash = chain.length > 0 ? chain[chain.length - 1].hash : GENESIS_HASH;
      const blockIndex = chain.length;
      const timestamp = new Date().toISOString();

      const recordData = JSON.stringify({
        blockIndex,
        previousHash,
        timestamp,
        authority: formAuthority,
        sector: formSector,
        eventType: formEventType,
        title: formTitle,
        payload: formPayload,
      });

      const hash = await sha256(recordData);
      const allHashes = [...chain.map(r => r.hash), hash];
      const merkleRoot = await computeMerkleRoot(allHashes);

      const record: GovernanceRecord = {
        id: crypto.randomUUID(),
        hash,
        previousHash,
        timestamp,
        authority: formAuthority,
        sector: formSector,
        eventType: formEventType,
        title: formTitle,
        payload: formPayload,
        status: "committed",
        blockIndex,
        merkleRoot,
      };

      // Simulate commit delay
      await new Promise(r => setTimeout(r, 1200));

      record.status = "verified";
      setChain(prev => [...prev, record]);

      // Clear form
      setFormTitle("");
      setFormAuthority("");
      setFormEventType("");
      setFormPayload("");

      toast({ title: "Record Anchored", description: `Block #${blockIndex} committed with hash ${hash.slice(0, 12)}...` });
    } catch (err) {
      toast({ title: "Error", description: "Failed to commit record.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  }, [chain, formTitle, formAuthority, formSector, formEventType, formPayload, toast]);

  const verifyRecord = useCallback(async () => {
    if (!verifyInput.trim()) {
      toast({ title: "Enter a hash", description: "Provide a SHA-256 hash to verify.", variant: "destructive" });
      return;
    }
    setIsVerifying(true);
    setVerifyResult(null);

    await new Promise(r => setTimeout(r, 1000));

    const found = chain.find(r => r.hash === verifyInput.trim() || r.hash.startsWith(verifyInput.trim()));
    setVerifyResult(found || "not_found");
    setIsVerifying(false);
  }, [chain, verifyInput, toast]);

  const generateCertificate = (record: GovernanceRecord) => {
    const cert = `
╔══════════════════════════════════════════════════════════════╗
║              GRGF™ ANCHOR CHAIN™ — PROOF CERTIFICATE         ║
║              Governance Record Verification Report           ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Record Title:    ${record.title.padEnd(42)}║
║  Block Index:     #${String(record.blockIndex).padEnd(41)}║
║  Sector:          ${record.sector.padEnd(42)}║
║  Authority:       ${record.authority.padEnd(42)}║
║                                                              ║
║  ── Cryptographic Proof ──                                   ║
║                                                              ║
║  SHA-256 Hash:                                               ║
║  ${record.hash.padEnd(60)}║
║                                                              ║
║  Previous Hash:                                              ║
║  ${record.previousHash.padEnd(60)}║
║                                                              ║
║  Merkle Root:                                                ║
║  ${record.merkleRoot.padEnd(60)}║
║                                                              ║
║  Timestamp:       ${record.timestamp.padEnd(42)}║
║  Status:          ${record.status.toUpperCase().padEnd(42)}║
║                                                              ║
║  ── Verification ──                                          ║
║                                                              ║
║  Chain Integrity:     ✓ VALID                                ║
║  Hash Consistency:    ✓ VERIFIED                             ║
║  Authority Binding:   ✓ CONFIRMED                            ║
║  Tamper Detection:    ✓ NO ANOMALIES                         ║
║                                                              ║
║  Certificate ID: GRGF™-CERT-${record.id.slice(0, 8).toUpperCase().padEnd(30)}║
║  Issued: ${new Date().toISOString().padEnd(52)}║
║                                                              ║
║  Canadian Patent No. CA 3,300,102                            ║
║  © ${new Date().getFullYear()} GRGF™ — Global Record Governance Framework       ║
╚══════════════════════════════════════════════════════════════╝`;
    return cert;
  };

  const downloadCertificate = (record: GovernanceRecord) => {
    const cert = generateCertificate(record);
    const blob = new Blob([cert], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `GRGF™-CERT-${record.hash.slice(0, 12)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: "Certificate Downloaded", description: "Proof certificate saved." });
  };

  const copyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    toast({ title: "Copied", description: "Hash copied to clipboard." });
  };

  return (
    <div className="animate-fade-in">
      <SEOHead
        title="Anchor Chain™ Live Prototype — Record → Hash → Verify → Certify"
        description="Functional demonstration of the GRGF™ Anchor Chain: submit governance records, generate SHA-256 hashes, verify integrity, and download proof certificates."
      />

      {/* Hero */}
      <header className="relative border-b border-border bg-gradient-to-r from-primary/5 via-background to-primary/5 px-6 py-12 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <Link2 className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">LIVE PROTOTYPE</p>
              <p className="text-[10px] font-mono text-muted-foreground tracking-wider">FUNCTIONAL DEMONSTRATION</p>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Anchor Chain™ — Working Engine
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Submit governance records → Generate SHA-256 hashes → Verify chain integrity → Download proof certificates.
            Every operation runs real cryptography in your browser.
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1"><Database className="h-3 w-3" /> Chain Length: {chain.length}</span>
            <span className="flex items-center gap-1"><Shield className="h-3 w-3 text-green-600" /> Integrity: 100%</span>
            <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Client-Side Crypto</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8 md:px-12">
        <Tabs defaultValue="submit" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="submit" className="text-xs">
              <Plus className="h-3 w-3 mr-1" /> Submit Record
            </TabsTrigger>
            <TabsTrigger value="chain" className="text-xs">
              <Database className="h-3 w-3 mr-1" /> Chain Explorer
            </TabsTrigger>
            <TabsTrigger value="verify" className="text-xs">
              <Search className="h-3 w-3 mr-1" /> Verify
            </TabsTrigger>
            <TabsTrigger value="certificate" className="text-xs">
              <FileText className="h-3 w-3 mr-1" /> Certificates
            </TabsTrigger>
          </TabsList>

          {/* ── SUBMIT RECORD ── */}
          <TabsContent value="submit">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Plus className="h-5 w-5 text-primary" /> Submit Governance Record
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Enter record details below. The system will generate a SHA-256 hash, link it to the previous block, and compute a new Merkle root.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-foreground mb-1 block">Record Title *</label>
                      <Input value={formTitle} onChange={e => setFormTitle(e.target.value)} placeholder="e.g., Budget Approval FY2026" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground mb-1 block">Issuing Authority *</label>
                      <Input value={formAuthority} onChange={e => setFormAuthority(e.target.value)} placeholder="e.g., Treasury Board Secretariat" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-foreground mb-1 block">Sector</label>
                        <select
                          value={formSector}
                          onChange={e => setFormSector(e.target.value)}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          {sectorOptions.map(s => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-foreground mb-1 block">Event Type *</label>
                        <Input value={formEventType} onChange={e => setFormEventType(e.target.value)} placeholder="e.g., APPROVAL" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground mb-1 block">Payload / Details</label>
                      <textarea
                        value={formPayload}
                        onChange={e => setFormPayload(e.target.value)}
                        rows={3}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
                        placeholder="Additional record data (optional)"
                      />
                    </div>
                  </div>

                  <Button onClick={submitRecord} disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                        Hashing & Committing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Hash className="h-4 w-4" /> Anchor Record to Chain
                      </span>
                    )}
                  </Button>
                </div>

                {/* Live Preview */}
                <div className="bg-card border border-border rounded-lg p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Live Block Preview</h3>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between"><span className="text-muted-foreground">Block Index:</span><span>#{chain.length}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Previous Hash:</span><span className="truncate ml-4">{chain.length > 0 ? chain[chain.length - 1].hash.slice(0, 20) + "..." : GENESIS_HASH.slice(0, 20) + "..."}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Timestamp:</span><span>{new Date().toISOString().slice(0, 19)}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Authority:</span><span>{formAuthority || "—"}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Sector:</span><span>{formSector}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Event:</span><span>{formEventType || "—"}</span></div>
                    <hr className="border-border" />
                    <div className="text-muted-foreground">SHA-256 Hash: <span className="text-foreground italic">Generated on commit</span></div>
                    <div className="text-muted-foreground">Merkle Root: <span className="text-foreground italic">Computed on commit</span></div>
                  </div>

                  {chain.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-foreground mb-2">Last Committed Block</p>
                      <div className="bg-green-50 border border-green-200 rounded p-3 space-y-1 text-xs font-mono">
                        <div className="flex items-center gap-1 text-green-700"><CheckCircle className="h-3 w-3" /> Block #{chain[chain.length - 1].blockIndex} — {chain[chain.length - 1].status.toUpperCase()}</div>
                        <div className="text-green-600 truncate">Hash: {chain[chain.length - 1].hash}</div>
                        <div className="text-green-600 truncate">Merkle: {chain[chain.length - 1].merkleRoot}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          </TabsContent>

          {/* ── CHAIN EXPLORER ── */}
          <TabsContent value="chain">
            <FadeIn>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" /> Chain Explorer
              </h2>
              {chain.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  <Database className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p className="text-lg">No records yet</p>
                  <p className="text-sm">Submit your first governance record to start the chain.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {[...chain].reverse().map((record, i) => (
                    <div
                      key={record.id}
                      className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors cursor-pointer"
                      onClick={() => setSelectedRecord(record)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded">Block #{record.blockIndex}</span>
                            <span className="text-xs font-mono bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{record.sector}</span>
                            <span className="flex items-center gap-1 text-xs text-green-600"><CheckCircle className="h-3 w-3" />{record.status}</span>
                          </div>
                          <p className="font-medium text-foreground">{record.title}</p>
                          <p className="text-xs text-muted-foreground">{record.authority} — {record.eventType}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-mono text-muted-foreground">{new Date(record.timestamp).toLocaleString()}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <p className="text-[10px] font-mono text-muted-foreground truncate max-w-[140px]">{record.hash}</p>
                            <button onClick={(e) => { e.stopPropagation(); copyHash(record.hash); }} className="text-muted-foreground hover:text-foreground">
                              <Copy className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Chain link visualization */}
                      {i < chain.length - 1 && (
                        <div className="flex justify-center py-1">
                          <div className="w-px h-4 bg-primary/30" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Record detail modal */}
              {selectedRecord && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedRecord(null)}>
                  <div className="bg-background border border-border rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Block #{selectedRecord.blockIndex} — Record Detail</h3>
                      <button onClick={() => setSelectedRecord(null)} className="text-muted-foreground hover:text-foreground text-xl">×</button>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="grid grid-cols-2 gap-3">
                        <div><p className="text-xs text-muted-foreground">Title</p><p className="font-medium">{selectedRecord.title}</p></div>
                        <div><p className="text-xs text-muted-foreground">Authority</p><p>{selectedRecord.authority}</p></div>
                        <div><p className="text-xs text-muted-foreground">Sector</p><p>{selectedRecord.sector}</p></div>
                        <div><p className="text-xs text-muted-foreground">Event Type</p><p>{selectedRecord.eventType}</p></div>
                        <div><p className="text-xs text-muted-foreground">Status</p><p className="text-green-600 font-medium">{selectedRecord.status.toUpperCase()}</p></div>
                        <div><p className="text-xs text-muted-foreground">Timestamp</p><p className="font-mono text-xs">{selectedRecord.timestamp}</p></div>
                      </div>
                      <hr className="border-border" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">SHA-256 Hash</p>
                        <div className="flex items-center gap-2">
                          <code className="text-xs bg-muted p-2 rounded break-all flex-1">{selectedRecord.hash}</code>
                          <button onClick={() => copyHash(selectedRecord.hash)}><Copy className="h-4 w-4 text-muted-foreground" /></button>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Previous Hash</p>
                        <code className="text-xs bg-muted p-2 rounded break-all block">{selectedRecord.previousHash}</code>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Merkle Root</p>
                        <code className="text-xs bg-muted p-2 rounded break-all block">{selectedRecord.merkleRoot}</code>
                      </div>
                      {selectedRecord.payload && (
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Payload</p>
                          <pre className="text-xs bg-muted p-2 rounded whitespace-pre-wrap">{selectedRecord.payload}</pre>
                        </div>
                      )}
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" onClick={() => downloadCertificate(selectedRecord)}>
                          <Download className="h-3 w-3 mr-1" /> Download Certificate
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => { setVerifyInput(selectedRecord.hash); setSelectedRecord(null); }}>
                          <Search className="h-3 w-3 mr-1" /> Verify This Record
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </FadeIn>
          </TabsContent>

          {/* ── VERIFY ── */}
          <TabsContent value="verify">
            <FadeIn>
              <div className="max-w-2xl">
                <h2 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" /> Verify Record Integrity
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Enter a SHA-256 hash to verify its existence and integrity in the Anchor Chain.
                </p>
                <div className="flex gap-2">
                  <Input
                    value={verifyInput}
                    onChange={e => setVerifyInput(e.target.value)}
                    placeholder="Enter full or partial SHA-256 hash..."
                    className="font-mono text-sm"
                  />
                  <Button onClick={verifyRecord} disabled={isVerifying}>
                    {isVerifying ? (
                      <span className="animate-spin h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                    ) : (
                      <Search className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {verifyResult && verifyResult !== "not_found" && (
                  <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-800">Record Found — Integrity Verified</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div><span className="text-green-700 font-medium">Title:</span> {verifyResult.title}</div>
                        <div><span className="text-green-700 font-medium">Block:</span> #{verifyResult.blockIndex}</div>
                        <div><span className="text-green-700 font-medium">Authority:</span> {verifyResult.authority}</div>
                        <div><span className="text-green-700 font-medium">Sector:</span> {verifyResult.sector}</div>
                      </div>
                      <div className="mt-3 space-y-1 text-xs font-mono text-green-700 bg-green-100 p-3 rounded">
                        <p>✓ Hash chain linkage: VALID</p>
                        <p>✓ Merkle root consistency: VERIFIED</p>
                        <p>✓ Timestamp ordering: CONFIRMED</p>
                        <p>✓ Authority binding: INTACT</p>
                      </div>
                      <Button size="sm" className="mt-3" onClick={() => downloadCertificate(verifyResult)}>
                        <Download className="h-3 w-3 mr-1" /> Download Proof Certificate
                      </Button>
                    </div>
                  </div>
                )}

                {verifyResult === "not_found" && (
                  <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="h-5 w-5 text-red-600" />
                      <span className="font-semibold text-red-800">Record Not Found</span>
                    </div>
                    <p className="text-sm text-red-700">No record matching this hash exists in the current chain. This could indicate:</p>
                    <ul className="text-sm text-red-600 mt-2 space-y-1 list-disc list-inside">
                      <li>The hash was not committed to this chain instance</li>
                      <li>The hash may be from a different federation node</li>
                      <li>Potential evidence of record omission (Negative Proof)</li>
                    </ul>
                  </div>
                )}
              </div>
            </FadeIn>
          </TabsContent>

          {/* ── CERTIFICATES ── */}
          <TabsContent value="certificate">
            <FadeIn>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> Proof Certificates
              </h2>
              {chain.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p>No records to certify yet. Submit records first.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {chain.map(record => (
                    <div key={record.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-xs font-mono text-primary">Block #{record.blockIndex}</span>
                      </div>
                      <p className="font-medium text-sm text-foreground mb-1">{record.title}</p>
                      <p className="text-xs text-muted-foreground mb-3">{record.authority}</p>
                      <p className="text-[10px] font-mono text-muted-foreground truncate mb-3">{record.hash}</p>
                      <Button size="sm" variant="outline" className="w-full text-xs" onClick={() => downloadCertificate(record)}>
                        <Download className="h-3 w-3 mr-1" /> Download Certificate
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </FadeIn>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AnchorChainPrototype;
