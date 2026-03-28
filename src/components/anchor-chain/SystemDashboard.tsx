import { FadeIn } from "@/components/FadeIn";
import { Database, Search, Globe, ShieldCheck, Layers, Activity, Lock, Cpu } from "lucide-react";

const stats = [
  { label: "Records Anchored", value: "1,247,893", icon: Database, color: "#0078D4" },
  { label: "Verification Queries", value: "3,891,204", icon: Search, color: "#107C10" },
  { label: "Federated Nodes", value: "47", icon: Globe, color: "#D83B01" },
  { label: "Integrity Score", value: "100%", icon: ShieldCheck, color: "#FFB900" },
  { label: "Active Modules", value: "12", icon: Layers, color: "#5C2D91" },
  { label: "Applications", value: "126", icon: Activity, color: "#E3008C" },
  { label: "Compliance Standards", value: "14", icon: Lock, color: "#0078D4" },
  { label: "Processing Latency", value: "<50ms", icon: Cpu, color: "#107C10" },
];

export function SystemDashboard() {
  return (
    <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border bg-muted/20">
      <div className="max-w-6xl">
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-xl font-semibold">System Dashboard</h2>
              <p className="text-sm text-muted-foreground mt-1">Real-time operational metrics across all modules</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono text-green-500/80 tracking-wider">ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon, color }, i) => (
            <FadeIn key={label} delay={i * 40}>
              <div className="governance-card-elevated text-center group hover:border-accent/30 transition-all">
                <Icon className="h-5 w-5 mx-auto mb-3" style={{ color }} />
                <p className="text-2xl font-mono font-bold" style={{ color }}>{value}</p>
                <p className="text-[10px] font-mono text-muted-foreground/70 mt-1 tracking-wider uppercase">{label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
