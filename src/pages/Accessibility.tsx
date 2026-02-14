import { PageHeader, Section } from "@/components/PageComponents";
import { Eye, Keyboard, Monitor, MessageSquare, RefreshCw, CheckCircle } from "lucide-react";

const Accessibility = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Accessibility Statement"
      subtitle="GRGF is committed to providing an accessible website experience consistent with WCAG 2.2 Level AA."
    />

    <Section>
      <div className="governance-card border-l-2 border-l-accent max-w-3xl">
        <p className="text-sm text-muted-foreground leading-relaxed">
          The Global Record Governance Framework (GRGF) is committed to ensuring that its digital platform is accessible to all users, including those with disabilities. We design, develop, and maintain our platform to conform with the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA.
        </p>
      </div>
    </Section>

    <Section title="Accessibility Features" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Keyboard, title: "Keyboard Navigation", desc: "All interactive elements are fully operable via keyboard. Focus indicators are visible on every focusable element. Keyboard shortcuts are available for rapid navigation (press '?' for reference)." },
          { icon: Eye, title: "Contrast & Typography", desc: "Text meets WCAG AA contrast ratio requirements (4.5:1 for normal text, 3:1 for large text). Body text is set at 16px minimum with 1.6+ line height for readability." },
          { icon: Monitor, title: "Responsive Design", desc: "Content reflows to accommodate viewport sizes from 320px upward without loss of information or functionality. No horizontal scrolling is required at standard zoom levels." },
          { icon: MessageSquare, title: "Alt Text & Labels", desc: "All images include descriptive alternative text. Form controls have associated labels. Interactive elements provide accessible names and state information." },
          { icon: CheckCircle, title: "Semantic Structure", desc: "Pages use semantic HTML5 elements (header, main, nav, section, article). Heading hierarchy is logically ordered (H1–H6) without skipping levels." },
          { icon: RefreshCw, title: "Ongoing Improvement", desc: "We conduct periodic accessibility audits and welcome feedback. Known issues are tracked and prioritized for remediation in our development cycle." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h3 className="font-serif text-sm font-semibold mb-2">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Known Limitations" className="border-t border-border">
      <div className="governance-card max-w-3xl">
        <ul className="space-y-2">
          {[
            "Some PDF documents in the Digital Archive may not be fully tagged for screen reader accessibility. We are working to remediate these over time.",
            "Third-party embedded components (if any) may not fully conform to WCAG 2.2 AA. We evaluate third-party tools for accessibility before integration.",
            "Complex data visualizations in interactive tools provide text-based summaries as alternatives.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="text-accent mt-0.5 shrink-0">·</span>{item}
            </li>
          ))}
        </ul>
      </div>
    </Section>

    <Section title="Feedback & Contact" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent max-w-3xl">
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          If you encounter an accessibility barrier or have suggestions for improvement, please contact us:
        </p>
        <p className="text-sm font-mono text-foreground">contact@globalrecordgovernance.com</p>
        <p className="mt-3 text-xs text-muted-foreground">
          We aim to respond to accessibility feedback within 5 business days and will work to provide the information in an accessible format.
        </p>
      </div>
    </Section>

    <Section title="Conformance Status" className="border-t border-border">
      <div className="governance-card max-w-3xl">
        <table className="w-full text-xs font-mono">
          <tbody>
            {[
              { label: "Standard", value: "WCAG 2.2 Level AA" },
              { label: "Status", value: "Partial conformance — ongoing remediation" },
              { label: "Last reviewed", value: "February 2026" },
              { label: "Assessment method", value: "Internal review + automated tooling" },
            ].map(({ label, value }) => (
              <tr key={label} className="border-b border-border/50 last:border-0">
                <td className="py-2 pr-4 text-muted-foreground/60 w-40">{label}</td>
                <td className="py-2 text-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default Accessibility;
