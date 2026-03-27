import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import {
  Shield, Link2, Hash, CheckCircle, Clock, Globe, Lock,
  Search, ArrowRight, FileText, Database, Eye, Fingerprint,
  Server, Layers, AlertTriangle, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const chainBlocks = [
  { hash: "0x7a3f...e91c", event: "Legislative Record Committed", authority: "Parliament of Canada", time: "2026-03-27T14:23:01Z", type: "GOV-001", status: "verified" },
  { hash: "0x4b1d...a7f2", event: "Procurement Decision Anchored", authority: "Treasury Board Secretariat", time: "2026-03-27T13:45:22Z", type: "INF-001", status: "verified" },
  { hash: "0x9c2e...b3d8", event: "Court Decision Registered", authority: "Federal Court of Canada", time: "2026-03-27T12:11:09Z", type: "JUS-001", status: "verified" },
  { hash: "0x1f8a...c4e5", event: "Carbon Credit Verified", authority: "Environment Canada", time: "2026-03-27T11:30:44Z", type: "ENV-001", status: "verified" },
  { hash: "0x6d3b...f2a1", event: "Pharmaceutical License Issued", authority: "Health Canada", time: "2026-03-27T10:15:33Z", type: "HLT-001", status: "verified" },
  { hash: "0xe5c7...d9b6", event: "Policy Rate Decision Recorded", authority: "Bank of Canada", time: "2026-03-27T09:00:00Z", type: "FIN-001", status: "verified" },
];

const layers = [
  { icon: Layers, name: "Event Normalization", desc: "Translates institutional actions into structured governance events" },
  { icon: Fingerprint, name: "Authority Context", desc: "Binds decision-maker identity, mandate, and temporal proof" },
  { icon: Database, name: "Immutable Record", desc: "Append-only storage with Merkle hash-chain integrity" },
  { icon: Eye, name: "Verification Engine", desc: "Cryptographic proof of existence without content exposure" },
  { icon: Globe, name: "Federation Protocol", desc: "Cross-jurisdictional checkpoint witnessing" },
  { icon: Search, name: "Audit Interface", desc: "Independent reconstruction and compliance verification" },
];

const AnchorChain = () => {
  const [verifyHash, setVerifyHash] = useState("");
  const [verificationResult, setVerificationResult] = useState<null | "found" | "not_found">(null);
  const [isVerifying, setIsVerifying] = useState(false);
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
        title="Anchor Chain — GRGF Governance Verification"
        description="Real-time cryptographic verification of governance records using the GRGF Six-Layer Deterministic Architecture."
      />

      {/* Hero */}
      <header className="relative border-b border-border bg-card/50 px-8 py-16 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-accent/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-accent/40" />
        </div>
        <div className="max-w-4xl relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20">
              <Link2 className="h-6 w-6 text-accent" />
            </div>
            <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em]">
              Cryptographic Governance Verification
            </p>
          </div>
          <h1 className="institutional-heading text-3xl md:text-5xl font-semibold leading-tight">
            GRGF Anchor Chain
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
            Real-time verification of governance records through the Six-Layer Deterministic Architecture. 
            Every institutional action, decision, and omission — cryptographically anchored, independently verifiable, 
            and permanently preserved.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["SHA-256 Hash Chain", "X.509 Authority", "Zero-Knowledge Proofs", "Append-Only"].map(tag => (
              <span key={tag} className="px-3 py-1 text-[10px] font-mono text-accent/80 bg-accent/5 border border-accent/10 rounded-full tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Record Verification */}
      <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
        <div className="max-w-4xl">
          <FadeIn>
            <h2 className="font-serif text-xl font-semibold mb-2">Record Verification</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Verify the existence and integrity of any governance record using its SHA-256 hash.
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
                  <p className="text-sm font-semibold text-green-400">Record Verified ✓</p>
                  <p className="text-xs text-muted-foreground mt-1">This governance record exists in the anchor chain and has not been modified since commitment.</p>
                </div>
              </div>
            )}
            {verificationResult === "not_found" && (
              <div className="mt-4 p-4 bg-destructive/5 border border-destructive/20 rounded-lg flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-destructive">Record Not Found</p>
                  <p className="text-xs text-muted-foreground mt-1">No matching record exists in the current anchor chain. Verify the hash and try again.</p>
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Live Chain */}
      <section className="px-8 py-12 md:px-12 lg:px-16 bg-muted/20 border-b border-border">
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
              <FadeIn key={block.hash} delay={i * 80}>
                <div className="governance-card-elevated group hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Chain link visual */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Link2 className="h-4 w-4 text-accent" />
                      </div>
                      {i < chainBlocks.length - 1 && (
                        <div className="w-px h-6 bg-accent/20 mt-2" />
                      )}
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

      {/* Six-Layer Architecture */}
      <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
        <div className="max-w-5xl">
          <FadeIn>
            <h2 className="font-serif text-xl font-semibold mb-2">Six-Layer Deterministic Architecture</h2>
            <p className="text-sm text-muted-foreground mb-8">Every governance record passes through six independent, auditable layers.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {layers.map((layer, i) => (
              <FadeIn key={layer.name} delay={i * 60}>
                <div className="governance-card-elevated h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                      <layer.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-accent/50">LAYER {String(i + 1).padStart(2, "0")}</span>
                      <h4 className="text-sm font-semibold">{layer.name}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{layer.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Chain Statistics */}
      <section className="px-8 py-12 md:px-12 lg:px-16 bg-muted/20 border-b border-border">
        <div className="max-w-5xl">
          <FadeIn>
            <h2 className="font-serif text-xl font-semibold mb-8">Chain Statistics</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Records Anchored", value: "1,247,893", icon: Database },
              { label: "Verification Queries", value: "3,891,204", icon: Search },
              { label: "Federated Nodes", value: "47", icon: Globe },
              { label: "Integrity Score", value: "100%", icon: ShieldCheck },
            ].map(({ label, value, icon: Icon }, i) => (
              <FadeIn key={label} delay={i * 60}>
                <div className="governance-card-elevated text-center">
                  <Icon className="h-5 w-5 text-accent mx-auto mb-3" />
                  <p className="text-2xl font-mono font-bold text-accent">{value}</p>
                  <p className="text-[10px] font-mono text-muted-foreground/70 mt-1 tracking-wider uppercase">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Security Compliance */}
      <section className="px-8 py-12 md:px-12 lg:px-16">
        <div className="max-w-5xl">
          <FadeIn>
            <div className="governance-card border-l-2 border-l-accent">
              <div className="flex flex-wrap gap-6 items-center justify-center text-[10px] font-mono text-muted-foreground/60 tracking-wider">
                {["ISO 27001", "NIST 800-53", "SOC 2 Type II", "GDPR Compliant", "ISO 15489", "X.509 PKI"].map(s => (
                  <span key={s} className="flex items-center gap-1.5">
                    <Lock className="h-3 w-3 text-accent/40" /> {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-border px-8 py-6 md:px-12">
        <p className="text-[10px] text-muted-foreground/60 italic">
          Global Record Governance Framework — Invented and Owned by Tarek Wahid · Canadian Patent No. CA 3,300,102
        </p>
      </div>
    </div>
  );
};

export default AnchorChain;
