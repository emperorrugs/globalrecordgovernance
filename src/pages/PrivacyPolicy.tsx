import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="animate-fade-in">
      <SEOHead
        title="Privacy Policy"
        description="Privacy Policy for the Global Record Governance Framework. How we handle data, protect privacy, and comply with international data protection standards."
      />
      <PageHeader
        title="Privacy Policy"
        subtitle="Data protection commitments of the Global Record Governance Framework."
      />

      <Section>
        <div className="max-w-3xl space-y-8">
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Effective Date:</span> February 13, 2026.
                This policy applies to all visitors and users of globalrecordgovernance.com
                and all associated services operated by the Global Record Governance Framework.
              </p>
            </div>
          </div>

          {[
            {
              title: "1. Data Controller",
              content: "The Global Record Governance Framework (\"GRGF\", \"we\", \"us\") is the data controller for information collected through this website. For inquiries: contact@globalrecordgovernance.com."
            },
            {
              title: "2. Information We Collect",
              content: "We collect minimal information necessary for institutional operations: (a) Technical data — IP addresses, browser type, device information, and access logs for security and availability monitoring; (b) Inquiry data — name, institutional affiliation, and email address when voluntarily submitted through our contact forms; (c) Usage analytics — anonymized page-view and navigation data to improve site structure. We do not collect personal data beyond what is strictly necessary for legitimate institutional purposes."
            },
            {
              title: "3. Legal Basis for Processing",
              content: "We process personal data under the following legal bases: (a) Legitimate interest — to maintain platform security, analyze usage patterns, and improve institutional services; (b) Consent — when individuals voluntarily submit inquiry forms; (c) Legal obligation — to comply with applicable laws and regulatory requirements."
            },
            {
              title: "4. Data Use & Purpose Limitation",
              content: "Collected data is used exclusively for: responding to institutional inquiries, maintaining platform security and integrity, improving website functionality, and complying with legal obligations. Data is never sold, rented, or shared with third parties for marketing purposes."
            },
            {
              title: "5. Data Retention",
              content: "Inquiry data is retained for the duration of the institutional relationship plus a reasonable period for legal compliance. Technical logs are retained for a maximum of 90 days. Anonymized analytics data may be retained indefinitely for trend analysis."
            },
            {
              title: "6. Data Security",
              content: "We implement industry-standard security measures including TLS encryption for data in transit, access controls for data at rest, and regular security assessments. Our platform architecture follows the principles of data minimization and privacy by design."
            },
            {
              title: "7. International Data Transfers",
              content: "As a globally-oriented institution, data may be processed in jurisdictions outside your country of residence. We ensure appropriate safeguards are in place for any international data transfers in compliance with applicable data protection laws."
            },
            {
              title: "8. Your Rights",
              content: "Depending on your jurisdiction, you may have the right to: access your personal data, request correction of inaccurate data, request deletion of your data, object to or restrict processing, data portability, and withdraw consent. To exercise these rights, contact: contact@globalrecordgovernance.com."
            },
            {
              title: "9. Cookies & Tracking",
              content: "This website uses essential cookies for session management and UI preferences only. We do not use third-party advertising cookies or cross-site tracking technologies. Analytics, where implemented, use privacy-respecting, anonymized methodologies."
            },
            {
              title: "10. Children's Privacy",
              content: "Our services are directed at institutional parties and are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors."
            },
            {
              title: "11. Changes to This Policy",
              content: "We may update this policy to reflect changes in our practices or legal requirements. Material changes will be posted on this page with an updated effective date. Continued use of the site constitutes acceptance of the revised policy."
            },
            {
              title: "12. Contact",
              content: "For privacy-related inquiries, data access requests, or complaints: Global Record Governance Framework — contact@globalrecordgovernance.com. We aim to respond to all privacy requests within 30 days."
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-lg font-semibold mb-3">{section.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
