import { FadeIn } from "@/components/FadeIn";
import { Layers, Fingerprint, Database, Eye, Globe, Search, ArrowDown } from "lucide-react";

const layers = [
  { icon: Layers, name: "Event Normalization", desc: "Translates institutional actions, decisions, and omissions into structured governance events with temporal proof and contextual metadata.", tech: "Event Schema v3.0 · JSON-LD · W3C Provenance", color: "#0078D4" },
  { icon: Fingerprint, name: "Authority Context", desc: "Binds decision-maker identity, mandate scope, delegation chain, and institutional role using X.509 certificates and authority attestation.", tech: "X.509 PKI · SAML 2.0 · Delegation Graphs", color: "#D83B01" },
  { icon: Database, name: "Immutable Record Layer", desc: "Append-only storage with Merkle hash-chain integrity, WORM compliance, and cryptographic sealing. Records can never be deleted — only superseded.", tech: "Merkle Trees · SHA-256 · WORM Storage", color: "#107C10" },
  { icon: Eye, name: "Verification Engine", desc: "Cryptographic proof of record existence (or non-existence) without content exposure. Supports positive, negative, and zero-knowledge verification.", tech: "ZKP · Inclusion Proofs · Consistency Proofs", color: "#FFB900" },
  { icon: Globe, name: "Federation Protocol", desc: "Cross-jurisdictional checkpoint witnessing. Nodes validate each other's Merkle roots to prevent split-view attacks without centralized authority.", tech: "Cross-Witness Protocol · Merkle Checkpoints", color: "#5C2D91" },
  { icon: Search, name: "Audit Intelligence", desc: "Independent reconstruction, compliance verification, and forensic analysis. Full audit trail without access to underlying operational data.", tech: "OPA/Rego · Compliance API · Forensic Replay", color: "#E3008C" },
];

export function ArchitectureLayers() {
  return (
    <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
      <div className="max-w-5xl">
        <FadeIn>
          <h2 className="font-serif text-xl font-semibold mb-2">Six-Layer Deterministic Architecture</h2>
          <p className="text-sm text-muted-foreground mb-8">Every governance record passes through six independent, auditable layers — each architecturally isolated and independently verifiable.</p>
        </FadeIn>
        <div className="space-y-3">
          {layers.map((layer, i) => (
            <FadeIn key={layer.name} delay={i * 60}>
              <div className="relative">
                <div className="governance-card-elevated border-l-4 transition-all hover:border-accent/30" style={{ borderLeftColor: layer.color }}>
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg border shrink-0" style={{ backgroundColor: `${layer.color}10`, borderColor: `${layer.color}30` }}>
                      <layer.icon className="h-5 w-5" style={{ color: layer.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono tracking-wider" style={{ color: layer.color }}>LAYER {String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <h4 className="text-base font-semibold">{layer.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{layer.desc}</p>
                      <p className="mt-2 text-[10px] font-mono text-muted-foreground/50 tracking-wider">{layer.tech}</p>
                    </div>
                  </div>
                </div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="h-4 w-4 text-accent/30" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
