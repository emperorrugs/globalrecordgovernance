import { PageHeader, Section } from "@/components/PageComponents";
import { Lock, Scale, Globe, ArrowDown, Layers } from "lucide-react";
import { useViewMode } from "@/contexts/ViewModeContext";

const HowItWorks = () => {
  const { isPlain } = useViewMode();

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="How It Works"
        subtitle={
          isPlain
            ? "A clear guide to GRGF's three-layer architecture."
            : "Three interdependent layers: Authoritative Governance, Simulation & Demonstration, and Transparency & Insight."
        }
      />

      {/* Conceptual Diagram */}
      <Section>
        <div className="max-w-2xl mx-auto">
          {/* Layer 1 */}
          <div className="governance-card border-l-4 border-l-accent">
            <div className="flex items-center gap-3 mb-2">
              <Lock className="h-5 w-5 text-accent" />
              <div>
                <p className="hash-text text-accent">LAYER 1 — AUTHORITATIVE</p>
                <h3 className="font-serif text-base font-semibold mt-1">Authoritative Governance Layer</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed ml-8">
              {isPlain
                ? "Where records are permanently sealed and governance rules are documented. This is the actual source of authority — not software."
                : "Hash-sealed immutable archives, governance operating rules, versioning and change control, and full audit trail preservation. Document-based authority."}
            </p>
            <div className="mt-4 ml-8 space-y-1.5">
              {[
                "Sealed governance archives",
                "Governance operating rules and charters",
                "Versioning and change control",
                "Full auditability and integrity proofs",
              ].map((item) => (
                <p key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-0.5">·</span>
                  {item}
                </p>
              ))}
            </div>
            <p className="hash-text mt-4 ml-8">STATUS: AUTHORITATIVE</p>
          </div>

          <div className="flex justify-center py-2">
            <ArrowDown className="h-5 w-5 text-accent/40" />
          </div>

          {/* Layer 2 */}
          <div className="governance-card border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="h-5 w-5 text-primary" />
              <div>
                <p className="hash-text text-primary">LAYER 2 — DEMONSTRATION</p>
                <h3 className="font-serif text-base font-semibold mt-1">Simulation & Demonstration Layer</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed ml-8">
              {isPlain
                ? "Interactive tools for training, review, and explanation. Everything here is simulated — no real governance records are created."
                : "Non-authoritative interactive environment for governance workflow demonstration, practitioner training, and institutional review support."}
            </p>
            <div className="mt-4 ml-8 space-y-1.5">
              {[
                "Interactive workflow simulations",
                "Training and review environments",
                "No authoritative effect on real records",
              ].map((item) => (
                <p key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">·</span>
                  {item}
                </p>
              ))}
            </div>
            <p className="hash-text mt-4 ml-8 text-destructive">STATUS: NON-AUTHORITATIVE</p>
          </div>

          <div className="flex justify-center py-2">
            <ArrowDown className="h-5 w-5 text-accent/40" />
          </div>

          {/* Layer 3 */}
          <div className="governance-card border-l-4 border-l-muted-foreground">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="hash-text">LAYER 3 — TRANSPARENCY</p>
                <h3 className="font-serif text-base font-semibold mt-1">Transparency & Insight Layer</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed ml-8">
              {isPlain
                ? "Dashboards and indicators that visualise simulated governance data. Useful for understanding patterns — but not authoritative."
                : "Aggregate analytics, compliance indicators, and simulated metrics for governance pattern analysis. Non-authoritative visualisation."}
            </p>
            <div className="mt-4 ml-8 space-y-1.5">
              {[
                "Dashboards and aggregate indicators",
                "Simulated record volume and status metrics",
                "Governance compliance visualisation",
                "Version history and lifecycle tracking",
              ].map((item) => (
                <p key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-muted-foreground mt-0.5">·</span>
                  {item}
                </p>
              ))}
            </div>
            <p className="hash-text mt-4 ml-8 text-destructive">STATUS: NON-AUTHORITATIVE</p>
          </div>
        </div>
      </Section>

      {/* Governance authority statement */}
      <Section className="border-t border-border bg-card/30">
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <p className="text-sm text-foreground leading-relaxed">
            Governance authority derives from documented rules, accountability, and verifiable records — not from software execution.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default HowItWorks;
