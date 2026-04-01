import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Shield, Database, Eye, Network, BarChart3, ArrowRight } from "lucide-react";

const layers = [
  {
    id: "normalize",
    step: "01",
    icon: Layers,
    label: "Event Normalization",
    desc: "Raw institutional events transformed into canonical, reproducible schema format",
    detail: "ISO 8601 timestamps · Alphabetical field ordering · Pseudonymized actors",
    color: "from-primary/20 to-primary/5",
    accent: "text-primary",
    borderColor: "border-primary/30",
  },
  {
    id: "authority",
    step: "02",
    icon: Shield,
    label: "Authority Binding",
    desc: "Legal basis and delegation chain cryptographically bound to every record",
    detail: "X.509 certificates · OPA policy engine · Mandate verification",
    color: "from-accent/20 to-accent/5",
    accent: "text-accent",
    borderColor: "border-accent/30",
  },
  {
    id: "record",
    step: "03",
    icon: Database,
    label: "Immutable Ledger",
    desc: "SHA-256 hash-sealed into append-only evidence backbone with chain linking",
    detail: "Recursive hash chain · WORM storage · Zero-deletion architecture",
    color: "from-destructive/20 to-destructive/5",
    accent: "text-destructive",
    borderColor: "border-destructive/30",
  },
  {
    id: "verify",
    step: "04",
    icon: Eye,
    label: "Verification Engine",
    desc: "Independent proof generation for existence, consistency, and non-existence",
    detail: "Merkle inclusion proofs · Consistency proofs · Zero-knowledge attestations",
    color: "from-success/20 to-success/5",
    accent: "text-success",
    borderColor: "border-success/30",
  },
  {
    id: "federation",
    step: "05",
    icon: Network,
    label: "Federation Protocol",
    desc: "Cross-jurisdiction interoperability with sovereign data isolation guarantees",
    detail: "Merkle root cross-witnessing · Split-view prevention · Sovereign nodes",
    color: "from-info/20 to-info/5",
    accent: "text-info",
    borderColor: "border-info/30",
  },
  {
    id: "audit",
    step: "06",
    icon: BarChart3,
    label: "Audit Intelligence",
    desc: "Anomaly detection, omission alerts, and institutional compliance reporting",
    detail: "Real-time monitoring · Omission detection · Pattern analysis",
    color: "from-warning/20 to-warning/5",
    accent: "text-warning",
    borderColor: "border-warning/30",
  },
];

export function InteractiveArchitecturePipeline() {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {/* Pipeline flow indicator */}
      <div className="flex items-center justify-center gap-1 mb-6">
        <span className="text-[10px] font-mono text-muted-foreground">INPUT</span>
        <ArrowRight className="h-3 w-3 text-muted-foreground/50" />
        <div className="flex items-center gap-0.5">
          {layers.map((l, i) => (
            <div key={l.id} className="flex items-center">
              <motion.div
                className={`w-6 h-1.5 rounded-full transition-all duration-300 ${
                  hoveredLayer === l.id ? "bg-primary" : "bg-muted"
                }`}
                animate={hoveredLayer === l.id ? { scaleY: 2 } : { scaleY: 1 }}
              />
              {i < layers.length - 1 && <div className="w-0.5" />}
            </div>
          ))}
        </div>
        <ArrowRight className="h-3 w-3 text-muted-foreground/50" />
        <span className="text-[10px] font-mono text-muted-foreground">VERIFIED</span>
      </div>

      {/* Layer cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {layers.map((layer, i) => {
          const Icon = layer.icon;
          const isHovered = hoveredLayer === layer.id;

          return (
            <motion.div
              key={layer.id}
              className={`relative rounded-xl border p-5 cursor-default transition-all duration-300 ${
                isHovered ? `${layer.borderColor} shadow-lg` : "border-border"
              }`}
              onMouseEnter={() => setHoveredLayer(layer.id)}
              onMouseLeave={() => setHoveredLayer(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${layer.color} opacity-0 transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : ""
                }`}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center"
                    animate={isHovered ? { rotate: [0, -5, 5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`h-5 w-5 ${layer.accent}`} />
                  </motion.div>
                  <span className={`text-[10px] font-mono tracking-wider ${layer.accent} font-bold`}>
                    LAYER {layer.step}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-foreground mb-1.5">{layer.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{layer.desc}</p>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-border/50">
                        <p className="text-[10px] font-mono text-muted-foreground leading-relaxed">{layer.detail}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
