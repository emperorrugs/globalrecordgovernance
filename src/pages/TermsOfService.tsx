import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { FileText, Shield, Scale, Globe, AlertTriangle, Gavel } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="animate-fade-in">
      <SEOHead
        title="Terms of Service"
        description="Terms of Service for the Global Record Governance Framework (GRGF). Comprehensive conditions governing institutional access, intellectual property, and use of sovereign-grade DPI resources."
      />
      <PageHeader
        title="Terms of Service"
        subtitle="Conditions governing access to and use of the Global Record Governance Framework platform and associated institutional resources."
      />

      <Section>
        <div className="max-w-3xl space-y-10">
          {/* Effective date banner */}
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">Effective Date:</span> February 13, 2026 &nbsp;|&nbsp;
                  <span className="font-semibold text-foreground">Last Reviewed:</span> February 14, 2026
                </p>
                <p className="mt-2">
                  By accessing, browsing, or using <span className="font-medium text-foreground">globalrecordgovernance.com</span> or
                  any associated services, platforms, or digital resources operated by the Global Record Governance
                  Framework (&quot;GRGF&quot;, &quot;the Framework&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;),
                  you acknowledge that you have read, understood, and agree to be bound by these Terms of Service
                  (&quot;Terms&quot;). If you do not agree, you must discontinue use immediately.
                </p>
                <p className="mt-2">
                  These Terms are governed by the laws of Canada and are supplemented by our{" "}
                  <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>,
                  which forms an integral part of this agreement.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <TermsSection number="1" title="Definitions" icon={<FileText className="h-4 w-4" />}>
            <p>In these Terms, the following definitions apply:</p>
            <div className="mt-3 space-y-2">
              {[
                { term: "\"GRGF\" or \"the Framework\"", def: "The Global Record Governance Framework, including its platform, documentation, specifications, methodologies, and associated intellectual property." },
                { term: "\"Platform\"", def: "The website at globalrecordgovernance.com and all associated digital services, APIs, tools, and resources." },
                { term: "\"User\" or \"you\"", def: "Any individual, institution, government entity, or organization accessing the Platform." },
                { term: "\"Controlled Materials\"", def: "Technical documentation, pilot kits, deployment packages, and restricted resources subject to the Controlled Distribution Protocol (CRP)." },
                { term: "\"Institutional Party\"", def: "A government entity, international organization, accredited research institution, or formally recognized professional body." },
              ].map((item) => (
                <div key={item.term} className="border-l-2 border-border pl-3">
                  <p className="text-xs font-semibold text-foreground">{item.term}</p>
                  <p className="text-xs text-muted-foreground">{item.def}</p>
                </div>
              ))}
            </div>
          </TermsSection>

          {/* Section 2 */}
          <TermsSection number="2" title="Service Description">
            <p>
              The Global Record Governance Framework provides a sovereign-grade Digital Public Infrastructure
              trust layer for recording, preserving, and verifying institutional actions, decisions, and omissions
              over time — without interpretation, enforcement, or decision authority.
            </p>
            <p className="mt-3">The Platform provides access to:</p>
            <ul className="mt-2 space-y-1.5">
              {[
                "Institutional information, governance framework documentation, and standards publications",
                "Interactive simulation tools, impact calculators, and demonstration interfaces",
                "Architecture specifications, compliance mapping tables, and alignment matrices",
                "Controlled distribution of technical pilot kits and deployment resources (subject to CRP authorization)",
                "Research publications, institutional insights, and governance analysis",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-muted/30 rounded-md text-xs">
              <p className="font-semibold text-foreground">Platform Status</p>
              <p className="mt-1">
                The Platform is currently in <span className="font-medium text-foreground">pilot evaluation phase</span>.
                It is not production-certified. No claims of live government deployment or operational status
                in any jurisdiction are made unless explicitly documented with verifiable evidence.
              </p>
            </div>
          </TermsSection>

          {/* Section 3 */}
          <TermsSection number="3" title="Intellectual Property Rights" icon={<Shield className="h-4 w-4" />}>
            <p>
              The Global Record Governance Framework architecture is invented and owned by
              <span className="font-medium text-foreground"> Tarek Wahid</span>.
            </p>
            <div className="mt-4 p-4 border border-border rounded-md text-xs space-y-3">
              <div>
                <p className="font-semibold text-foreground">Patent Protection</p>
                <p className="text-muted-foreground">
                  Canadian Patent No. <span className="font-mono font-medium text-foreground">CA 3,300,102</span> —
                  &quot;Global Record Governance Framework for Tamper-Evident Logging&quot;
                </p>
                <p className="text-muted-foreground">Filed: January 28, 2026</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Copyright</p>
                <p className="text-muted-foreground">
                  All content, documentation, specifications, methodologies, visual assets, software code,
                  and materials published on this Platform are protected by Canadian and international
                  intellectual property laws, including copyright, patent, and trade secret protections.
                </p>
              </div>
            </div>
            <p className="mt-4">
              No licence, right, title, or interest in any GRGF intellectual property is granted by
              access to this Platform, except as explicitly stated in a written agreement signed by
              an authorized representative of GRGF.
            </p>
            <p className="mt-2">
              <span className="font-medium text-foreground">Prohibited without authorization:</span> reproduction,
              distribution, modification, adaptation, translation, reverse engineering, decompilation,
              or creation of derivative works from any GRGF materials.
            </p>
          </TermsSection>

          {/* Section 4 */}
          <TermsSection number="4" title="Permitted Use & Restrictions">
            <p className="font-medium text-foreground text-xs mb-3">4.1 Permitted Use</p>
            <p>You may access this Platform for:</p>
            <ul className="mt-2 space-y-1.5">
              {[
                "Legitimate institutional evaluation, research, and informational purposes",
                "Due diligence in connection with potential institutional adoption or partnership",
                "Academic research and scholarly citation (with proper attribution)",
                "Standard search engine indexing (robots.txt compliant)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="font-medium text-foreground text-xs mt-5 mb-3">4.2 Restrictions</p>
            <p>You may <span className="font-medium text-foreground">not</span>:</p>
            <ul className="mt-2 space-y-1.5">
              {[
                "Copy, reproduce, distribute, or publicly display Platform content without written authorization",
                "Use automated systems (bots, scrapers, crawlers) to extract data beyond standard search engine indexing",
                "Attempt to gain unauthorized access to restricted areas, systems, or Controlled Materials",
                "Misrepresent your affiliation with, endorsement by, or authorization from GRGF",
                "Use Platform content to develop competing frameworks, products, or services",
                "Remove, alter, or obscure any copyright, patent, or proprietary notices",
                "Interfere with Platform security, integrity, or availability through technical means",
                "Use the Platform for any unlawful purpose or in violation of applicable laws",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-destructive/80">
                  <span className="mt-0.5 shrink-0">✕</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </TermsSection>

          {/* Section 5 */}
          <TermsSection number="5" title="Controlled Distribution Protocol (CRP)">
            <p>
              Certain materials are classified under the GRGF Controlled Distribution Protocol
              and are available only through formal institutional authorization:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Classification</th>
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Access Level</th>
                    <th className="text-left py-2 font-semibold text-foreground">Requirements</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-foreground">Level 1 — Public</td>
                    <td className="py-2 pr-4">Open access</td>
                    <td className="py-2">No requirements</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-foreground">Level 2 — Institutional Review</td>
                    <td className="py-2 pr-4">Verified institutional parties</td>
                    <td className="py-2">Institutional verification</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-foreground">Level 3 — NDA Required</td>
                    <td className="py-2 pr-4">Authorized partners</td>
                    <td className="py-2">Executed NDA + institutional verification</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-foreground">Level 4 — Restricted</td>
                    <td className="py-2 pr-4">Deployment partners only</td>
                    <td className="py-2">Formal partnership agreement + security clearance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Unauthorized access to, distribution of, or disclosure of Controlled Materials constitutes
              a material breach of these Terms and may result in legal action.
            </p>
          </TermsSection>

          {/* Section 6 */}
          <TermsSection number="6" title="Simulation & Demonstration Disclaimer" icon={<AlertTriangle className="h-4 w-4" />}>
            <p>
              The Platform includes interactive simulation tools, impact calculators, demonstration interfaces,
              and non-authoritative components for institutional evaluation purposes.
            </p>
            <div className="mt-3 p-3 bg-destructive/5 border border-destructive/20 rounded-md text-xs">
              <p className="font-semibold text-foreground">Important Disclaimer</p>
              <p className="mt-1">
                Simulation and demonstration components do <span className="font-medium text-foreground">not</span> create
                authoritative governance records. They carry no legal weight, evidentiary value, or
                institutional authority. All simulation content is clearly labelled with appropriate disclaimers.
                Outputs from simulation tools should not be relied upon for institutional decision-making.
              </p>
            </div>
          </TermsSection>

          {/* Section 7 */}
          <TermsSection number="7" title="Disclaimer of Warranties" icon={<Scale className="h-4 w-4" />}>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
            </p>
            <div className="mt-3 p-4 border border-border rounded-md text-xs space-y-3">
              <p>
                The Platform and all content, materials, and services are provided{" "}
                <span className="font-semibold text-foreground">&quot;AS IS&quot;</span> and{" "}
                <span className="font-semibold text-foreground">&quot;AS AVAILABLE&quot;</span> without
                warranties of any kind, whether express, implied, statutory, or otherwise.
              </p>
              <p>GRGF expressly disclaims all implied warranties, including without limitation:</p>
              <ul className="space-y-1.5 ml-2">
                {[
                  "Warranties of merchantability and fitness for a particular purpose",
                  "Warranties of non-infringement",
                  "Warranties of accuracy, completeness, reliability, or timeliness of content",
                  "Warranties of uninterrupted, error-free, or secure operation",
                  "Warranties of freedom from viruses, malware, or harmful components",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-muted-foreground mt-0.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TermsSection>

          {/* Section 8 */}
          <TermsSection number="8" title="Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GRGF, ITS FOUNDER, OFFICERS, ADVISORS,
              AND AFFILIATES SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="mt-3 space-y-1.5">
              {[
                "Any indirect, incidental, special, consequential, or punitive damages",
                "Loss of data, revenue, profits, goodwill, or institutional outcomes",
                "Costs of procurement of substitute services",
                "Any damages arising from unauthorized access to or alteration of your data",
                "Any damages arising from your reliance on Platform content or simulation outputs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="text-muted-foreground mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              In no event shall GRGF&apos;s total aggregate liability exceed the amount paid by you
              to GRGF in the twelve (12) months preceding the claim, or CAD $100, whichever is greater.
            </p>
          </TermsSection>

          {/* Section 9 */}
          <TermsSection number="9" title="Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless GRGF, its founder, officers, advisors,
              and affiliates from and against any and all claims, liabilities, damages, losses, costs,
              and expenses (including reasonable legal fees) arising from or related to:
            </p>
            <ul className="mt-3 space-y-1.5">
              {[
                "Your use of the Platform in violation of these Terms",
                "Your violation of any applicable law, regulation, or third-party right",
                "Your unauthorized distribution of Controlled Materials",
                "Any misrepresentation of your affiliation with or endorsement by GRGF",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TermsSection>

          {/* Section 10 */}
          <TermsSection number="10" title="Third-Party Links & Resources">
            <p>
              The Platform may contain links to external websites, resources, or services operated by
              third parties. GRGF:
            </p>
            <ul className="mt-3 space-y-1.5">
              {[
                "Does not endorse, verify, or assume responsibility for third-party content",
                "Is not liable for any loss or damage arising from your interaction with third-party sites",
                "Provides such links solely for informational convenience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TermsSection>

          {/* Section 11 */}
          <TermsSection number="11" title="Termination">
            <p>
              GRGF reserves the right to suspend or terminate your access to the Platform,
              without notice, for any reason, including but not limited to:
            </p>
            <ul className="mt-3 space-y-1.5">
              {[
                "Breach of these Terms or the Privacy Policy",
                "Unauthorized access to or distribution of Controlled Materials",
                "Conduct that GRGF reasonably believes may expose it to legal liability",
                "Requests by law enforcement or government authorities",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Upon termination, your right to access the Platform ceases immediately. Provisions
              that by their nature should survive termination (including intellectual property,
              limitation of liability, indemnification, and governing law) shall survive.
            </p>
          </TermsSection>

          {/* Section 12 */}
          <TermsSection number="12" title="Modifications to Terms">
            <p>
              GRGF reserves the right to modify these Terms at any time. When material changes are made:
            </p>
            <ul className="mt-3 space-y-1.5">
              {[
                "The updated Terms will be published on this page with a revised effective date",
                "Material changes will be highlighted in a change summary where practicable",
                "Continued use of the Platform after the updated effective date constitutes acceptance",
                "If you do not agree to the revised Terms, you must discontinue use of the Platform",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TermsSection>

          {/* Section 13 */}
          <TermsSection number="13" title="Governing Law & Dispute Resolution" icon={<Gavel className="h-4 w-4" />}>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of
              <span className="font-medium text-foreground"> Canada</span> and the Province of
              <span className="font-medium text-foreground"> Ontario</span>,
              without regard to conflict of law principles.
            </p>
            <div className="mt-4 space-y-3">
              <div className="border-l-2 border-border pl-3">
                <p className="text-xs font-semibold text-foreground">Dispute Resolution</p>
                <p className="text-xs text-muted-foreground">
                  Any dispute arising from or relating to these Terms shall first be submitted to
                  good-faith negotiation between the parties for a period of thirty (30) days.
                  If unresolved, disputes shall be submitted to binding arbitration administered
                  under the rules of the ADR Institute of Canada, with the seat of arbitration
                  in Ontario, Canada.
                </p>
              </div>
              <div className="border-l-2 border-border pl-3">
                <p className="text-xs font-semibold text-foreground">Jurisdiction</p>
                <p className="text-xs text-muted-foreground">
                  Notwithstanding the foregoing, GRGF retains the right to seek injunctive or
                  other equitable relief in any court of competent jurisdiction to prevent
                  infringement of intellectual property rights or breach of confidentiality obligations.
                </p>
              </div>
            </div>
          </TermsSection>

          {/* Section 14 */}
          <TermsSection number="14" title="Severability & Entire Agreement">
            <p>
              If any provision of these Terms is found to be unenforceable or invalid by a court
              of competent jurisdiction, that provision shall be limited or eliminated to the minimum
              extent necessary, and the remaining provisions shall continue in full force and effect.
            </p>
            <p className="mt-3">
              These Terms, together with the Privacy Policy and any applicable CRP agreements,
              constitute the entire agreement between you and GRGF regarding your use of the Platform
              and supersede all prior or contemporaneous communications, proposals, and representations.
            </p>
          </TermsSection>

          {/* Section 15 */}
          <TermsSection number="15" title="Contact" icon={<Globe className="h-4 w-4" />}>
            <p>For questions regarding these Terms of Service:</p>
            <div className="mt-4 p-4 bg-muted/30 rounded-md text-xs space-y-2">
              <p className="font-semibold text-foreground">Global Record Governance Framework</p>
              <p className="text-muted-foreground">
                General: <a href="mailto:contact@globalrecordgovernance.com" className="text-accent hover:underline">contact@globalrecordgovernance.com</a>
              </p>
              <p className="text-muted-foreground">
                Legal: <a href="mailto:legal@globalrecordgovernance.com" className="text-accent hover:underline">legal@globalrecordgovernance.com</a>
              </p>
              <p className="text-muted-foreground">
                Privacy: <a href="mailto:privacy@globalrecordgovernance.com" className="text-accent hover:underline">privacy@globalrecordgovernance.com</a>
              </p>
            </div>
          </TermsSection>

          {/* Legal alignment footer */}
          <div className="mt-8 p-4 border border-border rounded-md text-xs text-muted-foreground">
            <p className="font-semibold text-foreground mb-2">Legal Framework Alignment</p>
            <p>
              These Terms of Service are drafted in alignment with: Canadian Federal and Provincial Law •
              Personal Information Protection and Electronic Documents Act (PIPEDA) •
              Canadian Intellectual Property Law (Patent Act, Copyright Act) •
              ADR Institute of Canada Arbitration Rules •
              International best practices for institutional Digital Public Infrastructure governance.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

/* ── Helper Component ── */

function TermsSection({
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

export default TermsOfService;
