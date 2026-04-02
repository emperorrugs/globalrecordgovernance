import { PageHeader, Section } from "@/components/PageComponents";
import { Lock, Shield, FileText, Users, AlertTriangle, CheckCircle, Globe, Building2, BookOpen, Mail } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { submitAccessRequest } from "@/services/access";

const levels = [
  {
    level: "Level 1",
    title: "Public Overview",
    desc: "General framework overview, public architecture summaries, and non-technical governance descriptions. Available without restriction.",
    access: "Open access",
    tag: "PUBLIC",
    tagClass: "text-success",
    documents: [
      "GRGF™ Public Overview",
      "Executive Summary",
      "Public Use Case Narratives",
      "GRGF™ FAQ",
      "Public Value & ROI Summary",
    ],
  },
  {
    level: "Level 2",
    title: "Institutional Review",
    desc: "Detailed technical architecture, compliance mappings, deployment models, and governance specifications. Requires institutional affiliation.",
    access: "Institutional approval required",
    tag: "APPROVAL",
    tagClass: "text-accent",
    documents: [
      "GRGF™ Master Binder (Full Framework)",
      "System Architecture & Catalog",
      "Data Flow Architecture",
      "Threat Model (STRIDE Analysis)",
      "Governance Authority Model",
      "Deployment Models & Scenarios",
      "Resilience & Disaster Recovery (RTO/RPO)",
      "Interoperability Profile",
      "Privacy Impact Assessment",
      "Incident Response Plan",
      "Training & Capacity Building Guide",
      "Procurement Strategy (PSPC-aligned)",
      "Records Retention Schedule",
      "Standards Compliance Matrix",
    ],
  },
  {
    level: "Level 3",
    title: "NDA Required",
    desc: "Database schemas, policy engine specifications, API endpoint documentation, and security architecture details. NDA required.",
    access: "NDA and institutional verification required",
    tag: "NDA",
    tagClass: "text-warning",
    documents: [
      "Connector Minimization Standard",
      "Chain of Custody Operations",
      "Verification Hooks & Logic",
      "Auditability Verification Logic",
      "DPI Integration Guide (Technical)",
      "Data Protection & Access Control Policy",
      "IP Scope & Attribution (Full)",
      "Governance Record Definition Schema",
      "Pilot SOW & Acceptance Criteria",
    ],
  },
  {
    level: "Level 4",
    title: "Restricted Deployment",
    desc: "Production deployment configurations, key management protocols, federation setup documentation, and sovereign node specifications.",
    access: "Government-level authorization required",
    tag: "RESTRICTED",
    tagClass: "text-destructive",
    documents: [
      "Sovereign Node Configuration",
      "Federation Protocol Specification",
      "Key Management & HSM Integration",
      "Production Deployment Runbook",
      "National-Scale Stress Test Results",
    ],
  },
];

const purposeOptions = [
  "Pilot assessment",
  "Compliance review",
  "Technical evaluation",
  "Policy alignment study",
  "Institutional due diligence",
  "Academic research",
  "Procurement evaluation",
  "Standards development input",
  "Multilateral program alignment",
  "Other",
];

const departmentTypes = [
  "National Government Ministry",
  "Sub-National / Provincial Government",
  "Central Bank / Financial Authority",
  "Audit / Accountability Office",
  "Multilateral Development Bank",
  "United Nations Agency",
  "OECD / International Organization",
  "Standards Body (ISO, ITU, etc.)",
  "Academic / Research Institution",
  "Civil Society / NGO",
  "Other",
];

const documentCategories = [
  { id: "architecture", label: "System Architecture & Technical Design" },
  { id: "security", label: "Security, Threat Model & Compliance" },
  { id: "governance", label: "Governance Model & Authority Framework" },
  { id: "deployment", label: "Deployment & Pilot Documentation" },
  { id: "financial", label: "Financial Model & ROI Analysis" },
  { id: "standards", label: "Standards Alignment & Compliance Matrices" },
  { id: "legal", label: "Legal, IP & Licensing Documentation" },
  { id: "interop", label: "Interoperability & Federation Protocols" },
  { id: "privacy", label: "Privacy Impact & Data Protection" },
  { id: "all", label: "Full Document Package (All Categories)" },
];

const ControlledAccess = () => {
  const [acknowledged, setAcknowledged] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    titleRole: "",
    email: "",
    country: "",
    requestedLevel: "Level 2",
    purpose: "",
    purposeDetail: "",
    jurisdiction: "",
    departmentType: "",
  });

  const toggleCategory = (id: string) => {
    if (id === "all") {
      setSelectedCategories(prev => 
        prev.includes("all") ? [] : documentCategories.map(c => c.id)
      );
      return;
    }
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev.filter(c => c !== "all"), id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const result = await submitAccessRequest({
        fullName: formData.fullName,
        organization: formData.organization,
        titleRole: formData.titleRole,
        email: formData.email,
        country: formData.country,
        requestedLevel: formData.requestedLevel,
        purpose: formData.purpose,
        purposeDetail: formData.purposeDetail,
        jurisdiction: formData.jurisdiction,
        departmentType: formData.departmentType,
        documentCategories: selectedCategories.length > 0 ? selectedCategories : undefined,
      });

      if (!result.success) throw new Error(result.error);

      setSubmitted(true);
      toast({
        title: "Access Request Submitted",
        description: "Your institutional access request has been recorded. A verification email will be sent to your institutional address.",
      });
    } catch (err) {
      console.error("Submission error:", err);
      toast({
        title: "Submission Error",
        description: "Unable to submit your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Institutional Document Access — Controlled Distribution"
        subtitle="Access to GRGF™ framework documentation is governed by the Controlled Distribution Protocol (CRP). All requests are subject to institutional verification and classification-level review."
      />

      {/* Classification Levels with Document Lists */}
      <Section title="Document Classification & Available Materials">
        <div className="space-y-4">
          {levels.map((l) => (
            <div key={l.level} className="governance-card border-l-2 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-16">
                  <p className={`text-[10px] font-mono uppercase tracking-wider ${l.tagClass}`}>{l.level}</p>
                  <p className={`text-[9px] font-mono mt-0.5 ${l.tagClass}/70`}>{l.tag}</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-sm font-semibold mb-1">{l.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{l.desc}</p>
                  <div className="bg-background/50 rounded-sm p-3 border border-border/50">
                    <p className="text-[10px] font-mono text-muted-foreground/70 uppercase tracking-wider mb-2">Available Documents</p>
                    <ul className="grid gap-1 sm:grid-cols-2">
                      {l.documents.map((doc) => (
                        <li key={doc} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                          <FileText className="h-3 w-3 shrink-0 mt-0.5 text-accent/60" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-2 text-[10px] font-mono text-muted-foreground/60 tracking-wider flex items-center gap-1">
                    <Lock className="h-3 w-3" /> {l.access}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Access Governance Principles */}
      <Section title="Access Governance Principles" className="border-t border-border bg-secondary/30">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, title: "Identity Verification", desc: "Formal institutional identity verification required. Personal or commercial email addresses are not accepted." },
            { icon: FileText, title: "Declaration of Intent", desc: "Requestors must declare the intended evaluation purpose and scope of institutional review." },
            { icon: Shield, title: "Protocol Adherence", desc: "Access is conditional upon acknowledgment and adherence to the Controlled Distribution Protocol." },
            { icon: Globe, title: "Jurisdictional Context", desc: "Deployment-related materials require jurisdictional context to ensure sovereign compliance alignment." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="governance-card">
              <Icon className="h-5 w-5 text-accent mb-3" />
              <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Request Form */}
      <Section title="Request Institutional Access" className="border-t border-border">
        {submitted ? (
          <div className="governance-card border-l-2 border-l-success max-w-2xl">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-success shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground font-medium mb-2">Access Request Submitted Successfully</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  Your institutional access request has been recorded and assigned a unique tracking identifier. 
                  A verification email will be sent to <span className="font-mono text-accent">{formData.email}</span> within 24 hours.
                </p>
                <div className="bg-background/50 rounded-sm p-3 border border-border/50 space-y-2">
                  <p className="text-[10px] font-mono text-muted-foreground/70 uppercase tracking-wider">Next Steps</p>
                  <ol className="text-xs text-muted-foreground space-y-1.5 list-decimal list-inside">
                    <li>Verify your institutional email address via the confirmation link</li>
                    <li>An intake review will validate your identity and affiliation (1–3 business days)</li>
                    {(formData.requestedLevel === "Level 3" || formData.requestedLevel === "Level 4") && (
                      <li>A mutual NDA will be executed before restricted materials are shared</li>
                    )}
                    <li>Approved reviewers receive time-limited access links and evaluation instructions</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="governance-card border-l-2 border-l-accent max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-5 w-5 text-accent" />
              <p className="text-sm font-serif font-semibold">Institutional Access Request Form</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-6">
              Access to Level 2 and above requires formal institutional request. No public signups are accepted. 
              All fields marked are mandatory for institutional verification compliance.
            </p>

            <div className="space-y-5">
              {/* Requestor Information */}
              <div>
                <p className="text-[10px] font-mono text-accent uppercase tracking-wider mb-3 border-b border-border/50 pb-1">Requestor Information</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="fullname" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Full Name *</Label>
                    <Input id="fullname" type="text" placeholder="Dr. Jane Doe" className="mt-1" required
                      value={formData.fullName} onChange={e => setFormData(prev => ({...prev, fullName: e.target.value}))} />
                  </div>
                  <div>
                    <Label htmlFor="role" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Title / Role *</Label>
                    <Input id="role" type="text" placeholder="Chief Information Officer" className="mt-1" required
                      value={formData.titleRole} onChange={e => setFormData(prev => ({...prev, titleRole: e.target.value}))} />
                  </div>
                </div>
              </div>

              {/* Institutional Affiliation */}
              <div>
                <p className="text-[10px] font-mono text-accent uppercase tracking-wider mb-3 border-b border-border/50 pb-1">Institutional Affiliation</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="org" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Organization *</Label>
                    <Input id="org" type="text" placeholder="Ministry of Finance, Audit Office, etc." className="mt-1" required
                      value={formData.organization} onChange={e => setFormData(prev => ({...prev, organization: e.target.value}))} />
                  </div>
                  <div>
                    <Label htmlFor="deptType" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Department Type *</Label>
                    <select id="deptType" required
                      value={formData.departmentType} onChange={e => setFormData(prev => ({...prev, departmentType: e.target.value}))}
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Select type...</option>
                      {departmentTypes.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Institutional Email *</Label>
                    <Input id="email" type="email" placeholder="name@institution.gov" className="mt-1" required
                      value={formData.email} onChange={e => setFormData(prev => ({...prev, email: e.target.value}))} />
                    <p className="text-[9px] text-muted-foreground/50 mt-1 flex items-center gap-1">
                      <Mail className="h-2.5 w-2.5" /> Verification email will be sent to this address
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="country" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Country / Region *</Label>
                    <Input id="country" type="text" placeholder="Canada, United Kingdom, etc." className="mt-1" required
                      value={formData.country} onChange={e => setFormData(prev => ({...prev, country: e.target.value}))} />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="jurisdiction" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Jurisdiction (if applicable)</Label>
                    <Input id="jurisdiction" type="text" placeholder="Federal, Provincial, Municipal, or specific jurisdiction" className="mt-1"
                      value={formData.jurisdiction} onChange={e => setFormData(prev => ({...prev, jurisdiction: e.target.value}))} />
                  </div>
                </div>
              </div>

              {/* Access Request Details */}
              <div>
                <p className="text-[10px] font-mono text-accent uppercase tracking-wider mb-3 border-b border-border/50 pb-1">Access Request Details</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="level" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Requested Classification Level *</Label>
                    <select id="level" required
                      value={formData.requestedLevel} onChange={e => setFormData(prev => ({...prev, requestedLevel: e.target.value}))}
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="Level 2">Level 2 — Institutional Review</option>
                      <option value="Level 3">Level 3 — NDA Required</option>
                      <option value="Level 4">Level 4 — Restricted Deployment</option>
                    </select>
                    {(formData.requestedLevel === "Level 3" || formData.requestedLevel === "Level 4") && (
                      <p className="text-[9px] text-warning mt-1 flex items-center gap-1">
                        <AlertTriangle className="h-2.5 w-2.5" /> NDA execution required before materials are shared
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="purpose" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Evaluation Purpose *</Label>
                    <select id="purpose" required
                      value={formData.purpose} onChange={e => setFormData(prev => ({...prev, purpose: e.target.value}))}
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Select purpose...</option>
                      {purposeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                </div>
                {formData.purpose === "Other" && (
                  <div className="mt-4">
                    <Label htmlFor="purposeDetail" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Please Specify *</Label>
                    <Input id="purposeDetail" type="text" placeholder="Describe your evaluation purpose" className="mt-1" required
                      value={formData.purposeDetail} onChange={e => setFormData(prev => ({...prev, purposeDetail: e.target.value}))} />
                  </div>
                )}
              </div>

              {/* Document Categories */}
              <div>
                <p className="text-[10px] font-mono text-accent uppercase tracking-wider mb-3 border-b border-border/50 pb-1">Requested Document Categories</p>
                <p className="text-xs text-muted-foreground mb-3">Select the document categories relevant to your institutional review:</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {documentCategories.map(cat => (
                    <label key={cat.id} className={`flex items-center gap-2 p-2 rounded-sm border cursor-pointer transition-colors text-xs ${
                      selectedCategories.includes(cat.id) 
                        ? "border-accent bg-accent/10 text-foreground" 
                        : "border-border/50 text-muted-foreground hover:border-accent/50"
                    }`}>
                      <input type="checkbox" checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)} className="shrink-0" />
                      {cat.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Compliance Acknowledgments */}
              <div>
                <p className="text-[10px] font-mono text-accent uppercase tracking-wider mb-3 border-b border-border/50 pb-1">Compliance Acknowledgments</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <input id="crp" type="checkbox" checked={acknowledged} onChange={e => setAcknowledged(e.target.checked)}
                      className="mt-1 shrink-0" required />
                    <label htmlFor="crp" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                      I acknowledge the GRGF™ Controlled Distribution Protocol (CRP) and agree not to publicly redistribute restricted artifacts. 
                      I confirm that access is sought for legitimate institutional evaluation purposes only.
                    </label>
                  </div>
                  <div className="flex items-start gap-2">
                    <input id="privacy" type="checkbox" className="mt-1 shrink-0" required />
                    <label htmlFor="privacy" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                      I consent to the processing of the information provided above for the purpose of institutional access verification, 
                      in accordance with the <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a> and 
                      applicable data protection regulations (GDPR, PIPEDA).
                    </label>
                  </div>
                  <div className="flex items-start gap-2">
                    <input id="terms" type="checkbox" className="mt-1 shrink-0" required />
                    <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to the <a href="/terms-of-service" className="text-accent hover:underline">Terms of Service</a> and 
                      understand that access may be revoked if classification boundaries are violated.
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" disabled={!acknowledged || submitting}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                <Lock className="h-4 w-4" />
                {submitting ? "Submitting..." : "Submit Institutional Access Request"}
              </button>
            </div>

            <p className="mt-4 text-[10px] text-muted-foreground/50 italic">
              Access requests are reviewed within 1–5 business days. Approval is subject to institutional verification and classification compliance.
            </p>
          </form>
        )}
      </Section>

      {/* Review Process */}
      <Section title="Institutional Review Process" className="border-t border-border bg-secondary/30">
        <div className="max-w-2xl space-y-0">
          {[
            { step: "1", title: "Email Verification", desc: "A verification link is sent to the institutional email address provided. Personal email addresses (Gmail, Yahoo, etc.) are not accepted for Level 3+ access." },
            { step: "2", title: "Institutional Intake Review", desc: "Validation of identity, organizational affiliation, jurisdictional context, and stated evaluation purpose against CRP requirements." },
            { step: "3", title: "Classification Compliance Check", desc: "Requested materials are assessed against the classification level. Level 3+ requests trigger NDA execution workflow." },
            { step: "4", title: "NDA Execution (if required)", desc: "For Level 3 and Level 4 access, a mutual Non-Disclosure Agreement is executed between GRGF™ and the requesting institution." },
            { step: "5", title: "Controlled Distribution", desc: "Approved reviewers receive time-limited access links, evaluation instructions, and document integrity verification hashes (SHA-256)." },
          ].map((s, i, arr) => (
            <div key={s.step}>
              <div className="flex items-start gap-4 py-4">
                <div className="shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-sm flex items-center justify-center text-xs font-mono font-bold">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold mb-1">{s.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
              {i < arr.length - 1 && <div className="ml-4 w-px h-3 bg-border" />}
            </div>
          ))}
        </div>
      </Section>

      {/* International Standards Compliance */}
      <Section title="Access Governance — Standards Alignment" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "ISO 27001", desc: "Information security management controls applied to document classification and access governance." },
            { title: "ISO 27701", desc: "Privacy information management ensuring data minimization in access request processing." },
            { title: "GDPR / PIPEDA", desc: "Data protection compliance for EU and Canadian privacy regulations governing personal data." },
            { title: "OECD Digital Government", desc: "Open, user-driven access aligned with OECD Digital Government Principles." },
            { title: "World Bank GovTech", desc: "Sovereign infrastructure readiness standards for government technology evaluation." },
            { title: "Treasury Board (GC)", desc: "Canadian federal digital standards for interoperability, accessibility, and security." },
          ].map(item => (
            <div key={item.title} className="governance-card">
              <BookOpen className="h-4 w-4 text-accent mb-2" />
              <h4 className="font-mono text-xs font-semibold mb-1">{item.title}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* No Public Signup Notice */}
      <Section className="border-t border-border">
        <div className="governance-card">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-foreground font-medium mb-2">No public signups. No open registration. No self-service access.</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                GRGF™ operates under a controlled distribution model aligned with international best practices for sovereign-grade infrastructure documentation. 
                Access is granted exclusively to verified institutional representatives with documented evaluation purposes. 
                This ensures the integrity and appropriate use of governance infrastructure documentation.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
        </p>
      </Section>
    </div>
  );
};

export default ControlledAccess;
