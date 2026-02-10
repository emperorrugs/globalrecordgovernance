import { PageHeader, Section } from "@/components/PageComponents";
import { ShieldCheck, FileText, Monitor, AlertTriangle } from "lucide-react";

const SourceOfTruth = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Source of Truth"
        subtitle="Definitive separation of authoritative and non-authoritative system components."
      />

      {/* Core Mandatory Statement */}
      <Section>
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <p className="text-sm text-foreground leading-relaxed">
            The Global Record Governance Framework operates through formally documented governance rules and sealed records. Public websites, simulations, and dashboards exist solely to explain, demonstrate, and support understanding of the framework and do not create, modify, or replace authoritative records.
          </p>
        </div>
      </Section>

      {/* What IS Authoritative */}
      <Section title="What IS Authoritative" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Authoritative governance components are document-based, hash-sealed, and independent of any digital platform or interface.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-sm font-semibold">Sealed Governance Archives</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Permanently sealed records with cryptographic integrity proofs. Once sealed, they cannot be changed — only verified.
                </p>
                <p className="hash-text mt-3">STATUS: AUTHORITATIVE</p>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-sm font-semibold">Governance Operating Documents</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  The formal rules, charters, and policies that define how governance works. These are the source of authority.
                </p>
                <p className="hash-text mt-3">STATUS: AUTHORITATIVE</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What is NOT Authoritative */}
      <Section title="What is NOT Authoritative" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Non-authoritative components serve reference, demonstration, and training functions only. They carry no governance authority.
        </p>
        <div className="grid gap-4 sm:grid-cols-3 max-w-4xl">
          {[
            {
              title: "This Website",
              desc: "Public reference interface for explaining the framework.",
              status: "NON-AUTHORITATIVE",
            },
            {
              title: "Simulation System",
              desc: "Interactive demonstration and training environment.",
              status: "NON-AUTHORITATIVE",
            },
            {
              title: "Dashboards & Mock APIs",
              desc: "Visualisation and integration demonstrations.",
              status: "NON-AUTHORITATIVE",
            },
          ].map((item) => (
            <div key={item.title} className="governance-card">
              <Monitor className="h-5 w-5 text-muted-foreground mb-3" />
              <h3 className="font-serif text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              <p className="hash-text mt-3 text-destructive">STATUS: {item.status}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* This App Exists For */}
      <Section title="This Application Exists For" className="border-t border-border">
        <div className="space-y-3 max-w-2xl">
          {[
            "Demonstration — showing how the GRGF framework operates",
            "Training — helping practitioners understand governance workflows",
            "Review support — enabling auditors and institutions to evaluate the framework",
            "Public reference — providing clear, citable explanations of governance architecture",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="hash-text shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final Mandatory Statement */}
      <Section className="border-t border-border bg-card/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            <span className="font-semibold text-foreground">Governance authority derives from rules, accountability, and verifiable records — not from software execution.</span>{" "}
            No content displayed on this website constitutes an authoritative governance record. The authoritative system exists independently as sealed archives and governance operating documents.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default SourceOfTruth;
