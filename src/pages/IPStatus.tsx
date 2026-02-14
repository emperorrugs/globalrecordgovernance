import { PageHeader, Section } from "@/components/PageComponents";
import { Scale, FileText, Clock, ExternalLink, AlertTriangle } from "lucide-react";

const IPStatus = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Intellectual Property Status"
      subtitle="Legal clarity on patent application status, IP ownership, and institutional licensing terms."
    />

    <Section>
      <div className="governance-card border-l-2 border-l-accent max-w-3xl">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            This page provides transparent disclosure of the current intellectual property status of the Global Record Governance Framework. All statements are factual and verifiable through public records once the application is published.
          </p>
        </div>
      </div>
    </Section>

    <Section title="Patent Application Status" className="border-t border-border">
      <div className="governance-card max-w-3xl">
        <table className="w-full text-xs font-mono">
          <tbody>
            {[
              { label: "Application No.", value: "Canadian Patent Application No. 3,300,102" },
              { label: "Title", value: "Global Record Governance Framework for Tamper-Evident Logging" },
              { label: "Filing Date", value: "January 28, 2026" },
              { label: "Status", value: "Filed — Publication Pending" },
              { label: "Inventor", value: "Tarek Wahid" },
              { label: "Jurisdiction", value: "Canada (CIPO)" },
            ].map(({ label, value }) => (
              <tr key={label} className="border-b border-border/50 last:border-0">
                <td className="py-2.5 pr-4 text-muted-foreground/60 w-40">{label}</td>
                <td className="py-2.5 text-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="governance-card max-w-3xl mt-4 bg-muted/30">
        <div className="flex items-start gap-3">
          <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Publication timeline:</span> Canadian patent applications are typically published approximately 18 months after filing. Once published, the application will be publicly searchable through the Canadian Intellectual Property Office (CIPO) database.
            </p>
            <a
              href="https://www.ic.gc.ca/opic-cipo/cpd/eng/introduction.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-xs text-accent hover:underline"
            >
              CIPO Patent Database <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </Section>

    <Section title="Important Distinctions" className="border-t border-border">
      <div className="space-y-3 max-w-3xl">
        {[
          {
            title: "Filed ≠ Granted",
            desc: "A patent application filing establishes a priority date and initiates the examination process. It does not imply that a patent has been granted. GRGF will update this page upon any change in status.",
          },
          {
            title: "Scope of Protection",
            desc: "The patent application covers the core architectural innovation of tamper-evident governance logging. It does not claim ownership of general concepts such as hashing, append-only databases, or digital public infrastructure.",
          },
          {
            title: "Institutional Licensing",
            desc: "Sovereign institutions evaluating or piloting GRGF should contact contact@globalrecordgovernance.com to discuss licensing terms. Evaluation access to documentation and tools is provided under the Controlled Distribution Protocol.",
          },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-1">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Additional IP Assets" className="border-t border-border">
      <div className="governance-card max-w-3xl">
        <ul className="space-y-2">
          {[
            "All GRGF documentation, architecture diagrams, governance schemas, and operational playbooks are the intellectual property of Tarek Wahid.",
            "The Controlled Distribution Protocol (CRP) does not transfer intellectual property rights.",
            "Published materials are available for institutional evaluation purposes only unless otherwise agreed in writing.",
            "The GRGF name and associated marks are used to identify the framework and its standards body.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
              <Scale className="h-3 w-3 text-accent shrink-0 mt-0.5" />{item}
            </li>
          ))}
        </ul>
      </div>
    </Section>

    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground italic leading-relaxed max-w-3xl">
        This page is provided for transparency and informational purposes. It should be reviewed with legal counsel for specific IP-related questions.
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default IPStatus;
