import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import {
  Link2, Hash, Search, Clock, Shield, CheckCircle,
  AlertTriangle, ShieldCheck, Lock, Database, Globe,
  ArrowRight, Layers, Activity, BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { sectorModules, totalApplications, totalValue } from "@/components/anchor-chain/sectorModules";
import { ModuleCard } from "@/components/anchor-chain/ModuleCard";
import { SystemDashboard } from "@/components/anchor-chain/SystemDashboard";
import { ArchitectureLayers } from "@/components/anchor-chain/ArchitectureLayers";

const chainBlocks = [
  { hash: "0x7a3f...e91c", event: "Legislative Record Committed", authority: "Parliament of Canada", time: "2026-03-28T14:23:01Z", type: "GOV-001", status: "verified" },
  { hash: "0x4b1d...a7f2", event: "Procurement Decision Anchored", authority: "Treasury Board Secretariat", time: "2026-03-28T13:45:22Z", type: "INF-001", status: "verified" },
  { hash: "0x9c2e...b3d8", event: "Court Decision Registered", authority: "Federal Court of Canada", time: "2026-03-28T12:11:09Z", type: "JUS-001", status: "verified" },
  { hash: "0x1f8a...c4e5", event: "Carbon Credit Verified", authority: "Environment Canada", time: "2026-03-28T11:30:44Z", type: "ENV-001", status: "verified" },
  { hash: "0xe5c7...d9b6", event: "Pharmaceutical License Issued", authority: "Health Canada", time: "2026-03-28T10:15:33Z", type: "HLT-001", status: "verified" },
  { hash: "0x3d9f...b1a4", event: "AI Model Deployment Anchored", authority: "Digital Governance Board", time: "2026-03-28T09:42:17Z", type: "DIG-001", status: "verified" },
  { hash: "0x8e2c...f5d7", event: "Nuclear Inspection Completed", authority: "Nuclear Safety Commission", time: "2026-03-28T09:00:00Z", type: "NRG-002", status: "verified" },
  { hash: "0xa1b4...c8e3", event: "Trade Agreement Compliance Verified", authority: "Global Affairs Canada", time: "2026-03-28T08:30:11Z", type: "TRD-001", status: "verified" },
];

const AnchorChain = () => {
  const [verifyHash, setVerifyHash] = useState("");
  const [verificationResult, setVerificationResult] = useState<null | "found" | "not_found">(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();

  const handleVerify = () => {
    if (!verifyHash.trim()) {
      toast({ title: "Enter a record hash", description: "Please provide a SHA-256 hash to verify.", variant: "destructive" });
      return;
    }
    setIsVerifying(true);
    setVerificationResult(null);
    setTimeout(() => {
      const found = chainBlocks.some(b => b.hash.includes(verifyHash.slice(0, 6)));
      setVerificationResult(found ? "found" : "not_found");
      setIsVerifying(false);
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      <SEOHead
        title="GRGF Anchor Chain™ — Core Governance Verification System"
        description="The complete six-layer deterministic architecture with 126 sovereign applications across 12 sectors. Real-time cryptographic verification of institutional governance records."
      />

      {/* Hero */}
      <header className="relative border-b border-border bg-card/50 px-8 py-16 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-accent/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-accent/40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-accent/50" />
        </div>
        <div className="max-w-5xl relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
              <Link2 className="h-7 w-7 text-accent" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em]">Core System</p>
              <p className="text-[10px] font-mono text-muted-foreground/50 tracking-wider">EXECUTION-TIME TRUTH INFRASTRUCTURE</p>
            </div>
          </div>
          <h1 className="institutional-heading text-3xl md:text-5xl font-semibold leading-tight">
            GRGF Anchor Chain™
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-3xl">
            The world's first sovereign-grade governance verification system. {totalApplications} applications across 12 sectors, 
            anchoring {totalValue} in annual institutional value through cryptographic proof of actions, decisions, and omissions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["SHA-256 Hash Chain", "X.509 Authority", "Zero-Knowledge Proofs", "Merkle Trees", "Post-Quantum Ready", "Append-Only"].map(tag => (
              <span key={tag} className="px-3 py-1 text-[10px] font-mono text-accent/80 bg-accent/5 border border-accent/10 rounded-full tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          {/* Key metrics */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Sectors", value: "12", icon: Layers },
              { label: "Applications", value: String(totalApplications), icon: Activity },
              { label: "Annual Value", value: totalValue, icon: BarChart3 },
              { label: "Integrity", value: "100%", icon: ShieldCheck },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="p-3 rounded-lg bg-accent/5 border border-accent/10 text-center">
                <Icon className="h-4 w-4 text-accent mx-auto mb-1" />
                <p className="text-lg font-mono font-bold text-accent">{value}</p>
                <p className="text-[9px] font-mono text-muted-foreground/60 tracking-wider uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-border bg-card/30 sticky top-0 z-20 backdrop-blur-sm">
        <div className="px-8 md:px-12 lg:px-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start h-auto p-0 bg-transparent rounded-none gap-0 overflow-x-auto">
              {[
                { id: "overview", label: "Overview" },
                { id: "verify", label: "Verify" },
                { id: "modules", label: "Modules" },
                { id: "architecture", label: "Architecture" },
                { id: "chain", label: "Live Chain" },
              ].map(tab => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none px-5 py-3 text-xs font-mono tracking-wider uppercase"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Tab Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        {/* Overview Tab */}
        <TabsContent value="overview" className="m-0">
          <SystemDashboard />
          
          {/* Module Overview Grid */}
          <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
            <div className="max-w-6xl">
              <FadeIn>
                <h2 className="font-serif text-xl font-semibold mb-2">{totalApplications} Applications Across 12 Sectors</h2>
                <p className="text-sm text-muted-foreground mb-8">Comprehensive sovereign governance coverage with {totalValue} annual institutional value.</p>
              </FadeIn>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sectorModules.map((mod, i) => {
                  const Icon = mod.icon;
                  return (
                    <FadeIn key={mod.id} delay={i * 40}>
                      <button
                        onClick={() => setActiveTab("modules")}
                        className="w-full text-left governance-card-elevated group hover:border-accent/30 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg border shrink-0" style={{ backgroundColor: `${mod.color}10`, borderColor: `${mod.color}30` }}>
                            <Icon className="h-4 w-4" style={{ color: mod.color }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-semibold group-hover:text-accent transition-colors">{mod.name}</h4>
                              <span className="text-sm font-mono font-bold" style={{ color: mod.color }}>{mod.totalValue}</span>
                            </div>
                            <p className="text-[10px] font-mono text-muted-foreground/60 mt-1">{mod.appCount} APPLICATIONS</p>
                            <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{mod.description}</p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-accent/60 group-hover:text-accent transition-colors">
                          <span>EXPLORE MODULE</span>
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </button>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Compliance Bar */}
          <section className="px-8 py-8 md:px-12 lg:px-16">
            <div className="max-w-5xl">
              <div className="governance-card border-l-2 border-l-accent">
                <div className="flex flex-wrap gap-6 items-center justify-center text-[10px] font-mono text-muted-foreground/60 tracking-wider">
                  {["ISO 27001", "NIST 800-53", "SOC 2 Type II", "GDPR", "ISO 15489", "ISO 37000", "X.509 PKI", "OECD DPI", "World Bank GTMI"].map(s => (
                    <span key={s} className="flex items-center gap-1.5">
                      <Lock className="h-3 w-3 text-accent/40" /> {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Verify Tab */}
        <TabsContent value="verify" className="m-0">
          <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
            <div className="max-w-4xl">
              <FadeIn>
                <h2 className="font-serif text-xl font-semibold mb-2">Record Verification</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Verify the existence and integrity of any governance record using its SHA-256 hash. 
                  Supports positive verification (record exists) and negative verification (no record exists for a claimed event).
                </p>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                    <Input
                      value={verifyHash}
                      onChange={(e) => { setVerifyHash(e.target.value); setVerificationResult(null); }}
                      placeholder="Enter SHA-256 record hash (e.g., 0x7a3f...)"
                      className="pl-10 font-mono text-xs bg-card border-border"
                    />
                  </div>
                  <Button onClick={handleVerify} disabled={isVerifying} className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                    {isVerifying ? <Clock className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                    Verify
                  </Button>
                </div>
                {verificationResult === "found" && (
                  <div className="mt-4 p-4 bg-green-500/5 border border-green-500/20 rounded-lg flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-green-600">Record Verified ✓</p>
                      <p className="text-xs text-muted-foreground mt-1">This governance record exists in the anchor chain and has not been modified since commitment. Integrity confirmed via SHA-256 hash verification.</p>
                      <div className="mt-3 grid grid-cols-2 gap-3 text-[10px] font-mono text-muted-foreground/70">
                        <div>
                          <p className="text-muted-foreground/50">VERIFICATION TYPE</p>
                          <p>Positive (Inclusion Proof)</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground/50">TIMESTAMP</p>
                          <p>{new Date().toISOString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {verificationResult === "not_found" && (
                  <div className="mt-4 p-4 bg-destructive/5 border border-destructive/20 rounded-lg flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-destructive">No Verifiable Record Exists</p>
                      <p className="text-xs text-muted-foreground mt-1">No matching record exists in the current anchor chain. This constitutes a negative verification — evidence of absence for the queried hash.</p>
                      <div className="mt-3 grid grid-cols-2 gap-3 text-[10px] font-mono text-muted-foreground/70">
                        <div>
                          <p className="text-muted-foreground/50">VERIFICATION TYPE</p>
                          <p>Negative (Non-Existence Proof)</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground/50">TIMESTAMP</p>
                          <p>{new Date().toISOString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </FadeIn>
            </div>
          </section>

          {/* Verification Types */}
          <section className="px-8 py-12 md:px-12 lg:px-16">
            <div className="max-w-5xl">
              <FadeIn>
                <h2 className="font-serif text-xl font-semibold mb-6">Verification Capabilities</h2>
              </FadeIn>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Positive Verification", desc: "Confirm a governance record exists in the chain with cryptographic proof of inclusion via Merkle tree path.", icon: CheckCircle, color: "#107C10" },
                  { title: "Negative Verification", desc: "Prove that no record exists for a claimed governance event — evidence of institutional omission.", icon: AlertTriangle, color: "#D83B01" },
                  { title: "Zero-Knowledge Proof", desc: "Verify record existence and integrity without revealing any content, authority, or operational details.", icon: Shield, color: "#5C2D91" },
                ].map(({ title, desc, icon: Icon, color }, i) => (
                  <FadeIn key={title} delay={i * 60}>
                    <div className="governance-card-elevated h-full border-t-2" style={{ borderTopColor: color }}>
                      <Icon className="h-5 w-5 mb-3" style={{ color }} />
                      <h4 className="font-semibold text-sm mb-2">{title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Modules Tab */}
        <TabsContent value="modules" className="m-0">
          <section className="px-8 py-12 md:px-12 lg:px-16">
            <div className="max-w-5xl">
              <FadeIn>
                <h2 className="font-serif text-xl font-semibold mb-2">{totalApplications} Sovereign Applications</h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Click any module to expand and explore all applications with problem definitions, GRGF mechanisms, quantified impact, and economic value.
                </p>
              </FadeIn>
              <div className="space-y-4">
                {sectorModules.map((mod, i) => (
                  <ModuleCard key={mod.id} module={mod} index={i} />
                ))}
              </div>
              {/* Total Value */}
              <FadeIn delay={600}>
                <div className="mt-8 governance-card-elevated border-l-4 border-l-accent text-center py-6">
                  <p className="text-[10px] font-mono text-muted-foreground/60 tracking-wider uppercase mb-2">Total Annual Global Value</p>
                  <p className="text-4xl font-mono font-bold text-accent">{totalValue}</p>
                  <p className="text-sm text-muted-foreground mt-2">{totalApplications} applications across {sectorModules.length} sectors</p>
                </div>
              </FadeIn>
            </div>
          </section>
        </TabsContent>

        {/* Architecture Tab */}
        <TabsContent value="architecture" className="m-0">
          <ArchitectureLayers />

          {/* Technical Stack */}
          <section className="px-8 py-12 md:px-12 lg:px-16">
            <div className="max-w-5xl">
              <FadeIn>
                <h2 className="font-serif text-xl font-semibold mb-6">Technical Stack</h2>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "System A — Evidence Backbone", items: ["Merkle Tree Hash Chains", "SHA-256 Cryptographic Sealing", "WORM-Compliant Storage", "OPA/Rego Policy Engine", "HSM Key Management", "CICE Attestations"], color: "#0078D4" },
                  { title: "System B — Document Pipeline", items: ["Air-Gapped Processing", "Document Classification", "Omission Detection Engine", "Pseudonymization Layer", "Metadata-Only Emission", "Custody Chain Preservation"], color: "#D83B01" },
                  { title: "Federation Layer", items: ["Cross-Witness Protocol", "Merkle Root Checkpoints", "Split-View Attack Prevention", "Sovereignty-Preserving Sync", "Multi-Node Architecture", "Independent Verification"], color: "#107C10" },
                  { title: "Security & Compliance", items: ["Post-Quantum Readiness", "Zero-Knowledge Proofs", "X.509 PKI Infrastructure", "Role-Based Access (RBAC/ABAC)", "Deterministic Denial Logic", "No-Override Principle"], color: "#FFB900" },
                ].map(({ title, items, color }, i) => (
                  <FadeIn key={title} delay={i * 60}>
                    <div className="governance-card-elevated border-t-2" style={{ borderTopColor: color }}>
                      <h4 className="font-semibold text-sm mb-3" style={{ color }}>{title}</h4>
                      <ul className="space-y-1.5">
                        {items.map(item => (
                          <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Live Chain Tab */}
        <TabsContent value="chain" className="m-0">
          <section className="px-8 py-12 md:px-12 lg:px-16">
            <div className="max-w-5xl">
              <FadeIn>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-serif text-xl font-semibold">Live Anchor Chain</h2>
                    <p className="text-sm text-muted-foreground mt-1">Most recent governance records committed to the chain</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-green-500/80 tracking-wider">LIVE</span>
                  </div>
                </div>
              </FadeIn>
              <div className="space-y-3">
                {chainBlocks.map((block, i) => (
                  <FadeIn key={block.hash} delay={i * 60}>
                    <div className="governance-card-elevated group hover:border-accent/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                            <Link2 className="h-4 w-4 text-accent" />
                          </div>
                          {i < chainBlocks.length - 1 && <div className="w-px h-6 bg-accent/20 mt-2" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono text-accent/60 bg-accent/5 px-2 py-0.5 rounded">{block.type}</span>
                            <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                            <span className="text-[10px] font-mono text-green-500/80">VERIFIED</span>
                          </div>
                          <h4 className="text-sm font-semibold group-hover:text-accent transition-colors">{block.event}</h4>
                          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-muted-foreground">
                            <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> {block.authority}</span>
                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {new Date(block.time).toLocaleString()}</span>
                          </div>
                          <p className="mt-2 font-mono text-[10px] text-muted-foreground/50 tracking-wider">{block.hash}</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <div className="border-t border-border px-8 py-6 md:px-12">
        <p className="text-[10px] text-muted-foreground/60 italic">
          GRGF Anchor Chain™ — Core Governance Verification System · Invented and Owned by Tarek Wahid · Canadian Patent No. CA 3,300,102
        </p>
        <p className="text-[9px] text-muted-foreground/40 mt-1">
          SIMULATION ONLY — No live governance records are created, stored, or modified through this interface.
        </p>
      </div>
    </div>
  );
};

export default AnchorChain;
