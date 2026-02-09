import { PageHeader, Section } from "@/components/PageComponents";
import { Mail, Building2, FileText, AlertTriangle } from "lucide-react";

const Contact = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Institutional Access"
        subtitle="Professional inquiry channel for governments, multilateral institutions, auditors, and qualified institutional parties."
      />

      {/* Access Notice */}
      <Section>
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-start gap-3">
            <Building2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                GRGF institutional access is available to government agencies, courts,
                multilateral organisations, audit bodies, and qualified institutional
                parties with a legitimate governance interest. Access requests are
                reviewed under the framework's governance rules.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This channel is for institutional inquiries only. GRGF does not accept
                unsolicited commercial proposals, marketing partnerships, or media
                enquiries through this interface.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Inquiry Categories */}
      <Section title="Inquiry Categories" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Sovereign Deployment",
              desc: "Inquiries regarding GRGF deployment within a national Digital Public Infrastructure framework.",
            },
            {
              title: "Federation Membership",
              desc: "Applications for Tier 1, Tier 2, or Observer status within the GRGF federation model.",
            },
            {
              title: "Institutional Audit",
              desc: "Requests for access to sealed records or hash manifests for audit or judicial purposes.",
            },
            {
              title: "Technical Review",
              desc: "Technical architecture review for institutional evaluation or integration assessment.",
            },
          ].map((cat) => (
            <div key={cat.title} className="governance-card">
              <h3 className="font-serif text-sm font-semibold">{cat.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section title="Institutional Inquiry" className="border-t border-border">
        <div className="governance-card max-w-2xl">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm placeholder:text-muted-foreground/50"
                  placeholder="Name and title"
                  disabled
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Institution</label>
                <input
                  type="text"
                  className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm placeholder:text-muted-foreground/50"
                  placeholder="Organisation or government body"
                  disabled
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1.5">Institutional Email</label>
              <input
                type="email"
                className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm placeholder:text-muted-foreground/50"
                placeholder="official@institution.gov"
                disabled
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1.5">Inquiry Category</label>
              <select className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm text-muted-foreground" disabled>
                <option>Select category…</option>
                <option>Sovereign Deployment</option>
                <option>Federation Membership</option>
                <option>Institutional Audit</option>
                <option>Technical Review</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1.5">Inquiry Details</label>
              <textarea
                className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm placeholder:text-muted-foreground/50 h-24 resize-none"
                placeholder="Describe the nature and purpose of your institutional inquiry…"
                disabled
              />
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button className="px-5 py-2 bg-muted text-muted-foreground text-sm rounded-sm cursor-not-allowed" disabled>
                Submit Inquiry (Coming Soon)
              </button>
              <span className="text-xs text-muted-foreground">Form submission requires backend integration</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Notice */}
      <Section className="border-t border-border bg-card/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            <span className="font-semibold text-foreground">Notice.</span> All communications through
            this channel are subject to GRGF governance rules. Inquiries are processed in the order
            received. Response times vary based on inquiry complexity and institutional verification
            requirements. GRGF does not guarantee response to inquiries that fall outside the defined
            categories or that lack verifiable institutional standing.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
