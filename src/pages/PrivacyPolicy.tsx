import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { Shield, Globe, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="animate-fade-in">
      <SEOHead
        title="Privacy Policy"
        description="Privacy Policy for the Global Record Governance Framework (GRGF). Comprehensive data protection commitments aligned with GDPR, ISO 27701, and OECD Privacy Guidelines."
      />
      <PageHeader
        title="Privacy Policy"
        subtitle="Data protection commitments of the Global Record Governance Framework (GRGF), aligned with international privacy standards."
      />

      <Section>
        <div className="max-w-3xl space-y-10">
          {/* Effective date banner */}
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">Effective Date:</span> February 13, 2026 &nbsp;|&nbsp;
                  <span className="font-semibold text-foreground">Last Reviewed:</span> February 14, 2026
                </p>
                <p className="mt-2">
                  This Privacy Policy applies to all visitors, users, and institutional parties accessing
                  <span className="font-medium text-foreground"> globalrecordgovernance.com</span> and
                  all associated services, platforms, and digital resources operated by the Global Record
                  Governance Framework (&quot;GRGF&quot;, &quot;the Framework&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
                </p>
                <p className="mt-2">
                  This policy is drafted in alignment with the <span className="font-medium text-foreground">EU General Data Protection Regulation (GDPR)</span>,
                  the <span className="font-medium text-foreground">OECD Privacy Guidelines (2013)</span>,
                  <span className="font-medium text-foreground"> ISO/IEC 27701:2019</span> (Privacy Information Management),
                  and the <span className="font-medium text-foreground">Canadian Personal Information Protection and Electronic Documents Act (PIPEDA)</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <PolicySection
            number="1"
            title="Data Controller & Governance Authority"
            icon={<UserCheck className="h-4 w-4" />}
          >
            <p>
              The Global Record Governance Framework (&quot;GRGF&quot;) is the data controller responsible
              for the processing of personal data collected through this website and associated services.
            </p>
            <p className="mt-3">
              GRGF operates as a sovereign-grade Digital Public Infrastructure trust layer. It does not
              act as a data processor on behalf of third parties unless a formal Data Processing Agreement
              (DPA) is executed with an institutional partner under the Controlled Distribution Protocol.
            </p>
            <div className="mt-4 p-3 bg-muted/30 rounded-md text-xs">
              <p className="font-semibold text-foreground mb-1">Data Protection Contact</p>
              <p>Global Record Governance Framework</p>
              <p>Email: <a href="mailto:privacy@globalrecordgovernance.com" className="text-accent hover:underline">privacy@globalrecordgovernance.com</a></p>
              <p>General: <a href="mailto:contact@globalrecordgovernance.com" className="text-accent hover:underline">contact@globalrecordgovernance.com</a></p>
            </div>
          </PolicySection>

          {/* Section 2 */}
          <PolicySection
            number="2"
            title="Categories of Personal Data Collected"
            icon={<Database className="h-4 w-4" />}
          >
            <p>
              GRGF adheres to the principle of <span className="font-medium text-foreground">data minimization</span> (GDPR Article 5(1)(c); OECD Collection Limitation Principle).
              We collect only the minimum personal data necessary for legitimate institutional purposes.
            </p>

            <div className="mt-4 space-y-4">
              <DataCategory
                label="2.1 Technical & Access Data"
                items={[
                  "IP addresses (anonymized after 72 hours for analytics; retained up to 90 days for security)",
                  "Browser type, operating system, device identifiers",
                  "Access timestamps, referring URLs, and page navigation paths",
                  "TLS session metadata (encryption protocol version, cipher suite — no content)",
                ]}
              />
              <DataCategory
                label="2.2 Inquiry & Communication Data"
                items={[
                  "Name, institutional affiliation, professional title (when voluntarily provided)",
                  "Email address (for contact form submissions and institutional correspondence)",
                  "Content of messages submitted through contact or inquiry forms",
                  "Institutional access requests submitted under the Controlled Distribution Protocol (CRP)",
                ]}
              />
              <DataCategory
                label="2.3 Usage & Analytics Data"
                items={[
                  "Anonymized and aggregated page-view statistics",
                  "Session duration and navigation flow patterns (no individual tracking)",
                  "Feature usage telemetry for platform improvement (opt-out available)",
                ]}
              />
              <DataCategory
                label="2.4 Data We Do NOT Collect"
                items={[
                  "We do not collect biometric data, financial information, health data, or political opinions",
                  "We do not purchase or acquire personal data from third-party data brokers",
                  "We do not engage in behavioural profiling, ad targeting, or cross-site tracking",
                  "We do not deploy facial recognition, keystroke logging, or device fingerprinting",
                ]}
              />
            </div>
          </PolicySection>

          {/* Section 3 */}
          <PolicySection
            number="3"
            title="Legal Basis for Processing"
            icon={<Shield className="h-4 w-4" />}
          >
            <p>
              In accordance with GDPR Article 6 and the OECD Purpose Specification Principle,
              we process personal data exclusively under the following legal bases:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Legal Basis</th>
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">GDPR Reference</th>
                    <th className="text-left py-2 font-semibold text-foreground">Application</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-foreground">Legitimate Interest</td>
                    <td className="py-2 pr-4">Article 6(1)(f)</td>
                    <td className="py-2">Platform security, fraud prevention, infrastructure monitoring, service improvement</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-foreground">Consent</td>
                    <td className="py-2 pr-4">Article 6(1)(a)</td>
                    <td className="py-2">Contact form submissions, newsletter subscriptions, voluntary institutional inquiries</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-foreground">Legal Obligation</td>
                    <td className="py-2 pr-4">Article 6(1)(c)</td>
                    <td className="py-2">Compliance with Canadian law, PIPEDA requirements, regulatory obligations</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-foreground">Public Interest</td>
                    <td className="py-2 pr-4">Article 6(1)(e)</td>
                    <td className="py-2">Institutional governance transparency and Digital Public Infrastructure operations</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Where processing is based on consent, you have the right to withdraw consent at any time
              without affecting the lawfulness of processing carried out prior to withdrawal (GDPR Article 7(3)).
            </p>
          </PolicySection>

          {/* Section 4 */}
          <PolicySection number="4" title="Purpose Limitation & Data Use">
            <p>
              Collected data is used exclusively for the following specified, explicit, and legitimate purposes
              (GDPR Article 5(1)(b); OECD Use Limitation Principle):
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Responding to institutional inquiries and managing stakeholder communications",
                "Maintaining platform security, integrity, availability, and resilience",
                "Processing and evaluating institutional access requests under the CRP",
                "Improving website functionality, user experience, and information architecture",
                "Producing anonymized, aggregated analytics for platform governance reporting",
                "Fulfilling legal obligations under applicable Canadian and international law",
                "Supporting institutional pilot programme administration (where formally agreed)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-destructive/5 border border-destructive/20 rounded-md text-xs">
              <p className="font-semibold text-foreground">Prohibition on Secondary Use</p>
              <p className="mt-1">
                Personal data is never sold, rented, traded, or shared with third parties for marketing,
                advertising, profiling, or any purpose incompatible with the stated purposes above.
                This prohibition is absolute and unconditional.
              </p>
            </div>
          </PolicySection>

          {/* Section 5 */}
          <PolicySection number="5" title="Data Retention Schedule">
            <p>
              Data is retained only for as long as necessary to fulfil the purposes for which it was collected,
              in accordance with GDPR Article 5(1)(e) (Storage Limitation) and ISO 15489 (Records Management):
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Data Category</th>
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Retention Period</th>
                    <th className="text-left py-2 font-semibold text-foreground">Justification</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Inquiry & correspondence data</td>
                    <td className="py-2 pr-4">Duration of relationship + 3 years</td>
                    <td className="py-2">Institutional follow-up and legal compliance</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Security & access logs</td>
                    <td className="py-2 pr-4">90 days (IP anonymized at 72 hours)</td>
                    <td className="py-2">Incident response and forensic capability</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">CRP access request records</td>
                    <td className="py-2 pr-4">Duration of authorization + 5 years</td>
                    <td className="py-2">Institutional audit trail and accountability</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Anonymized analytics</td>
                    <td className="py-2 pr-4">Indefinite (non-personal data)</td>
                    <td className="py-2">Long-term platform governance and trend analysis</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Cookie consent preferences</td>
                    <td className="py-2 pr-4">13 months</td>
                    <td className="py-2">GDPR/ePrivacy Directive compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Upon expiry of the retention period, personal data is securely deleted or irreversibly anonymized
              using methods consistent with NIST SP 800-88 (Guidelines for Media Sanitization).
            </p>
          </PolicySection>

          {/* Section 6 */}
          <PolicySection
            number="6"
            title="Data Security Measures"
            icon={<Lock className="h-4 w-4" />}
          >
            <p>
              GRGF implements technical and organizational measures appropriate to the risk,
              in accordance with GDPR Article 32 and ISO/IEC 27001:2022:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Encryption in Transit", detail: "TLS 1.3 enforced for all connections; HSTS enabled with minimum 1-year max-age" },
                { label: "Encryption at Rest", detail: "AES-256 encryption for stored data; key management via sovereign-controlled procedures" },
                { label: "Access Controls", detail: "Role-Based Access Control (RBAC) with principle of least privilege; multi-factor authentication for administrative access" },
                { label: "Audit Logging", detail: "All access events logged immutably with timestamps, actor identification, and action classification" },
                { label: "Incident Response", detail: "Documented incident response plan with detection, containment, eradication, recovery, and post-incident review phases" },
                { label: "Privacy by Design", detail: "Data minimization, pseudonymization, and purpose limitation embedded in system architecture from inception" },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-muted/20 rounded-md">
                  <p className="text-xs font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </PolicySection>

          {/* Section 7 */}
          <PolicySection
            number="7"
            title="International Data Transfers"
            icon={<Globe className="h-4 w-4" />}
          >
            <p>
              As a globally-oriented Digital Public Infrastructure framework, personal data may be
              processed in jurisdictions outside your country of residence. Where international
              transfers occur, we ensure compliance through one or more of the following mechanisms:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Adequacy decisions by relevant data protection authorities (GDPR Article 45)",
                "Standard Contractual Clauses (SCCs) approved by the European Commission (GDPR Article 46(2)(c))",
                "Binding Corporate Rules where applicable (GDPR Article 47)",
                "Derogations for specific situations, including explicit consent or necessity for institutional cooperation (GDPR Article 49)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              A record of international data transfers, including the legal mechanism relied upon,
              is maintained and available upon request to supervisory authorities.
            </p>
          </PolicySection>

          {/* Section 8 */}
          <PolicySection
            number="8"
            title="Your Data Protection Rights"
            icon={<Eye className="h-4 w-4" />}
          >
            <p>
              Under GDPR Chapter III and applicable national laws, you have the following rights
              in relation to your personal data:
            </p>
            <div className="mt-4 space-y-3">
              {[
                { right: "Right of Access (Article 15)", desc: "Obtain confirmation of whether your personal data is being processed and receive a copy of that data." },
                { right: "Right to Rectification (Article 16)", desc: "Request correction of inaccurate personal data or completion of incomplete data." },
                { right: "Right to Erasure (Article 17)", desc: "Request deletion of your personal data where there is no compelling reason for continued processing ('right to be forgotten')." },
                { right: "Right to Restriction (Article 18)", desc: "Request restriction of processing while accuracy is contested, processing is unlawful, or data is needed for legal claims." },
                { right: "Right to Data Portability (Article 20)", desc: "Receive your personal data in a structured, commonly used, machine-readable format (JSON or CSV)." },
                { right: "Right to Object (Article 21)", desc: "Object to processing based on legitimate interests or public interest, including profiling." },
                { right: "Right to Withdraw Consent (Article 7(3))", desc: "Withdraw consent at any time without affecting the lawfulness of prior processing." },
                { right: "Right to Lodge a Complaint", desc: "Lodge a complaint with a supervisory authority in your jurisdiction if you believe your rights have been violated." },
              ].map((item) => (
                <div key={item.right} className="border-l-2 border-border pl-3">
                  <p className="text-xs font-semibold text-foreground">{item.right}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-muted/30 rounded-md text-xs">
              <p className="font-semibold text-foreground">Exercising Your Rights</p>
              <p className="mt-1">
                To exercise any of these rights, submit a request to{" "}
                <a href="mailto:privacy@globalrecordgovernance.com" className="text-accent hover:underline">
                  privacy@globalrecordgovernance.com
                </a>.
                We will respond within <span className="font-medium text-foreground">30 calendar days</span> (extendable
                to 90 days for complex requests, with notification). Identity verification may be required
                to prevent unauthorized disclosure.
              </p>
            </div>
          </PolicySection>

          {/* Section 9 */}
          <PolicySection number="9" title="Cookies & Tracking Technologies">
            <p>
              This website uses a minimal, privacy-respecting approach to cookies and tracking:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Cookie Type</th>
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Purpose</th>
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Duration</th>
                    <th className="text-left py-2 font-semibold text-foreground">Legal Basis</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-foreground">Strictly Necessary</td>
                    <td className="py-2 pr-4">Session management, CSRF protection, cookie consent state</td>
                    <td className="py-2 pr-4">Session / 13 months</td>
                    <td className="py-2">Exempt (ePrivacy Art. 5(3))</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-foreground">Functional</td>
                    <td className="py-2 pr-4">Language preference, view mode, UI state</td>
                    <td className="py-2 pr-4">12 months</td>
                    <td className="py-2">Legitimate interest</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-foreground">Analytics</td>
                    <td className="py-2 pr-4">Anonymized page-view statistics (no cross-site tracking)</td>
                    <td className="py-2 pr-4">Session</td>
                    <td className="py-2">Consent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              We do <span className="font-medium text-foreground">not</span> use third-party advertising cookies,
              social media tracking pixels, cross-site tracking technologies, or device fingerprinting.
              Users may manage cookie preferences through their browser settings or the cookie consent
              mechanism provided on this website.
            </p>
          </PolicySection>

          {/* Section 10 */}
          <PolicySection number="10" title="Third-Party Services & Sub-processors">
            <p>
              We may engage a limited number of third-party service providers to support platform operations.
              Any third party with access to personal data is:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Bound by a Data Processing Agreement (DPA) compliant with GDPR Article 28",
                "Required to implement equivalent technical and organizational security measures",
                "Prohibited from processing personal data for any purpose other than the contracted service",
                "Subject to regular compliance reviews and audit rights",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              A list of current sub-processors is available upon written request to{" "}
              <a href="mailto:privacy@globalrecordgovernance.com" className="text-accent hover:underline">
                privacy@globalrecordgovernance.com
              </a>.
            </p>
          </PolicySection>

          {/* Section 11 */}
          <PolicySection number="11" title="Children's Privacy">
            <p>
              GRGF services are directed exclusively at institutional parties, government entities,
              and professional stakeholders. They are not intended for individuals under the age of 18.
              We do not knowingly collect, store, or process personal data from minors.
            </p>
            <p className="mt-2">
              If we become aware that personal data has been inadvertently collected from a minor,
              we will take immediate steps to delete that data and notify the relevant supervisory
              authority where required by law.
            </p>
          </PolicySection>

          {/* Section 12 */}
          <PolicySection number="12" title="Data Breach Notification">
            <p>
              In the event of a personal data breach likely to result in a risk to the rights
              and freedoms of individuals, GRGF will:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Notify the relevant supervisory authority within 72 hours of becoming aware of the breach (GDPR Article 33)",
                "Notify affected individuals without undue delay where the breach is likely to result in a high risk to their rights and freedoms (GDPR Article 34)",
                "Document the breach, its effects, and remedial actions taken in the internal breach register",
                "Conduct a post-incident review to prevent recurrence and update security measures as necessary",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </PolicySection>

          {/* Section 13 */}
          <PolicySection number="13" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy to reflect changes in our data practices, legal
              requirements, or operational needs. When material changes are made:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "The updated policy will be published on this page with a revised effective date",
                "Material changes will be highlighted in a change summary",
                "Where required by law, we will notify affected individuals directly",
                "Continued use of the platform after the updated effective date constitutes acceptance of the revised policy",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </PolicySection>

          {/* Section 14 */}
          <PolicySection
            number="14"
            title="Contact & Supervisory Authority"
            icon={<Mail className="h-4 w-4" />}
          >
            <p>
              For privacy-related inquiries, data subject access requests, or complaints:
            </p>
            <div className="mt-4 p-4 bg-muted/30 rounded-md text-xs space-y-3">
              <div>
                <p className="font-semibold text-foreground">Data Protection Contact</p>
                <p className="text-muted-foreground">Global Record Governance Framework</p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:privacy@globalrecordgovernance.com" className="text-accent hover:underline">privacy@globalrecordgovernance.com</a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Canadian Supervisory Authority</p>
                <p className="text-muted-foreground">Office of the Privacy Commissioner of Canada (OPC)</p>
                <p className="text-muted-foreground">
                  Website: <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.priv.gc.ca</a>
                </p>
              </div>
            </div>
            <p className="mt-4">
              We aim to respond to all privacy requests within <span className="font-medium text-foreground">30 calendar days</span>.
              If you are unsatisfied with our response, you have the right to lodge a complaint
              with the supervisory authority in your jurisdiction.
            </p>
          </PolicySection>

          {/* Compliance alignment footer */}
          <div className="mt-8 p-4 border border-border rounded-md text-xs text-muted-foreground">
            <p className="font-semibold text-foreground mb-2">Standards Alignment</p>
            <p>
              This Privacy Policy is aligned with: EU General Data Protection Regulation (GDPR) 2016/679 •
              OECD Guidelines on the Protection of Privacy and Transborder Flows of Personal Data (2013) •
              ISO/IEC 27701:2019 (Privacy Information Management) •
              ISO/IEC 27001:2022 (Information Security Management) •
              Canadian PIPEDA •
              ISO 15489 (Records Management).
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

/* ── Helper Components ── */

function PolicySection({
  number,
  title,
  icon,
  children,
}: {
  number: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className="text-accent">{icon}</span>}
        <h2 className="font-serif text-lg font-semibold">{number}. {title}</h2>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function DataCategory({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold text-foreground mb-2">{label}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrivacyPolicy;
