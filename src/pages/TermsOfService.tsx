import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="animate-fade-in">
      <SEOHead
        title="Terms of Service"
        description="Terms of Service for the Global Record Governance Framework. Conditions governing the use of GRGF institutional services and digital public infrastructure resources."
      />
      <PageHeader
        title="Terms of Service"
        subtitle="Conditions governing access to and use of the Global Record Governance Framework platform."
      />

      <Section>
        <div className="max-w-3xl space-y-8">
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Effective Date:</span> February 13, 2026.
                By accessing or using globalrecordgovernance.com, you agree to these Terms of Service.
              </p>
            </div>
          </div>

          {[
            {
              title: "1. Acceptance of Terms",
              content: "By accessing, browsing, or using this website or any associated services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, you must discontinue use immediately."
            },
            {
              title: "2. Service Description",
              content: "The Global Record Governance Framework (\"GRGF\") provides an institutional information platform, governance framework documentation, standards publications, and associated digital public infrastructure resources. The platform is currently in pilot evaluation phase and is not production-certified."
            },
            {
              title: "3. Intellectual Property",
              content: "The Global Record Governance Framework architecture is invented and owned by Tarek Wahid. All content, documentation, specifications, methodologies, and materials on this platform are protected by intellectual property laws, including but not limited to Canadian Patent No. CA 3,300,102. No license or right is granted to use, reproduce, distribute, or create derivative works from any GRGF materials without explicit written authorization."
            },
            {
              title: "4. Permitted Use",
              content: "You may access this platform for legitimate institutional evaluation, research, and informational purposes. You may not: (a) copy, reproduce, or distribute platform content without authorization; (b) use automated systems to scrape, crawl, or extract data beyond standard search engine indexing; (c) attempt to gain unauthorized access to restricted areas or systems; (d) misrepresent your affiliation with or endorsement by GRGF."
            },
            {
              title: "5. Controlled Access Protocol",
              content: "Certain materials, including technical pilot kits, deployment packages, and restricted documentation, are available only through the Controlled Distribution Protocol (CRP). Access to such materials requires institutional verification and formal authorization. Unauthorized distribution of controlled materials is prohibited."
            },
            {
              title: "6. Disclaimer of Warranties",
              content: "This platform and all content are provided \"as is\" and \"as available\" without warranties of any kind, whether express or implied. GRGF does not warrant that the platform will be uninterrupted, error-free, or free of harmful components. The platform is in pilot stage — no production-certification claims are made."
            },
            {
              title: "7. Limitation of Liability",
              content: "To the maximum extent permitted by law, GRGF shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of this platform, including but not limited to loss of data, revenue, or institutional outcomes."
            },
            {
              title: "8. Simulation & Demonstration Content",
              content: "This platform includes simulation tools, interactive demonstrations, and non-authoritative interfaces for evaluation purposes. Such components do not create authoritative records and carry no legal weight. All simulation content is clearly labeled with appropriate disclaimers."
            },
            {
              title: "9. Third-Party Links",
              content: "This platform may contain links to external websites or resources. GRGF does not endorse and is not responsible for the content, accuracy, or practices of third-party sites."
            },
            {
              title: "10. Modifications",
              content: "GRGF reserves the right to modify these Terms at any time. Material changes will be reflected by an updated effective date. Continued use after modifications constitutes acceptance."
            },
            {
              title: "11. Governing Law",
              content: "These Terms shall be governed by and construed in accordance with the laws of Canada, without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts of Canada."
            },
            {
              title: "12. Contact",
              content: "For questions regarding these Terms of Service: Global Record Governance Framework — contact@globalrecordgovernance.com."
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

export default TermsOfService;
