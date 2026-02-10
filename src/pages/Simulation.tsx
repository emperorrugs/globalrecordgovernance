import { PageHeader, Section } from "@/components/PageComponents";
import { Play, Database, FileInput, GitBranch, Code, ShieldCheck, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Simulation = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Simulation"
        subtitle="Interactive demonstration and training environment for the GRGF governance workflow."
      />

      {/* Purpose */}
      <Section>
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-foreground leading-relaxed font-semibold">
                Simulation Only — No Authoritative Records Are Created
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The simulation system exists for demonstration, training, and institutional review. All actions, records, and workflows within the simulation are non-authoritative and carry no governance effect.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Purpose List */}
      <Section title="Purpose" className="border-t border-border">
        <div className="space-y-3 max-w-2xl">
          {[
            "Demonstrate how the GRGF governance workflow operates end-to-end",
            "Train practitioners on record submission, review, and verification processes",
            "Support institutional review and audit evaluation of the framework",
            "Provide a safe environment for exploring governance concepts without risk",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="hash-text shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Simulation Tools */}
      <Section title="Simulation Tools" className="border-t border-border">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
          {[
            { label: "Live Simulator", path: "/simulator", desc: "Run governance checks interactively", icon: Play },
            { label: "Record Browser", path: "/records", desc: "Browse simulated record registry", icon: Database },
            { label: "Data Entry", path: "/data-entry", desc: "Simulated record submission", icon: FileInput },
            { label: "Workflow Demo", path: "/workflow", desc: "Lifecycle visualisation", icon: GitBranch },
            { label: "API Reference", path: "/api-mock", desc: "Mock integration specification", icon: Code },
            { label: "Verification", path: "/verification", desc: "Check simulated record integrity", icon: ShieldCheck },
          ].map((item) => (
            <Link key={item.path} to={item.path} className="group governance-card flex items-center justify-between">
              <div className="flex items-start gap-3">
                <item.icon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold">{item.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </Section>

      {/* Reminder */}
      <Section className="border-t border-border bg-card/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            <span className="font-semibold text-foreground">Reminder.</span> All simulation tools on this platform are non-authoritative. They demonstrate governance concepts and workflows but do not create, modify, or verify real governance records.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Simulation;
