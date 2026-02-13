import { PageHeader, Section } from "@/components/PageComponents";
import { CheckCircle, Building2, Globe, Shield, Users, FileCheck, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: "CS-001",
    title: "Procurement Approval Verification",
    sector: "Public Finance",
    jurisdiction: "National — Federal Ministry of Finance",
    icon: FileCheck,
    challenge: "A federal ministry awarded $12M in contracts annually without centralized, tamper-evident audit trails. Post-award disputes averaged 18 months to resolve due to missing or contradictory authorization records.",
    solution: "GRGF sealed every procurement event — requisition, approval, award, and denial — with SHA-256 hash chains. Dual-authority thresholds were enforced deterministically. All denials generated machine-readable reasoning.",
    outcomes: [
      { metric: "Dispute Resolution Time", before: "18 months average", after: "< 3 weeks", improvement: "97% reduction" },
      { metric: "Unauthorized Single-Authority Awards", before: "~14% of contracts", after: "0%", improvement: "100% elimination" },
      { metric: "Audit Reconstruction Time", before: "6–12 weeks", after: "< 30 minutes", improvement: "99.5% faster" },
      { metric: "Evidentiary Completeness", before: "~68% of records", after: "100%", improvement: "Full chain-of-custody" },
    ],
    comparativeAdvantage: "Traditional ERP audit logs are editable by administrators. GRGF's append-only backbone ensures no party — including IT administrators — can modify records post-seal.",
  },
  {
    id: "CS-002",
    title: "Cross-Ministry Policy Authorization",
    sector: "Inter-Governmental Coordination",
    jurisdiction: "National — Multi-Ministry Policy Office",
    icon: Building2,
    challenge: "Policy directives requiring multi-ministry sign-off lacked verifiable authorization chains. Conflicting institutional claims about directive scope created inter-departmental disputes and delayed public service delivery by an average of 9 months.",
    solution: "GRGF captured each ministry's authorization event with institutional scope tagging, legal references, and timestamp sealing. The policy engine enforced mandatory multi-authority sign-off rules before directives were marked as authorized.",
    outcomes: [
      { metric: "Authorization Chain Completeness", before: "~42% traceable", after: "100% sealed", improvement: "Full accountability" },
      { metric: "Inter-Ministry Disputes", before: "~23 per year", after: "0 evidence-based disputes", improvement: "100% resolution" },
      { metric: "Directive Processing Time", before: "9+ months", after: "< 6 weeks", improvement: "85% faster" },
      { metric: "Public Confidence Index", before: "32% (survey)", after: "78% (post-pilot survey)", improvement: "+46 points" },
    ],
    comparativeAdvantage: "Unlike shared document systems, GRGF structurally prevents retroactive modification of authorization records and proves when authorization was absent — evidence of omission.",
  },
  {
    id: "CS-003",
    title: "Regulatory Compliance Audit Trail",
    sector: "Financial Regulation",
    jurisdiction: "National — Financial Services Authority",
    icon: Shield,
    challenge: "A financial regulator processed 4,200+ compliance reports annually. Audit trail fragmentation across legacy systems made regulatory reconstruction take 6–12 weeks per investigation, with 15% of cases lacking complete evidence chains.",
    solution: "GRGF normalized all compliance events into structured schemas with mandatory metadata (actor role, institutional scope, legal reference). Merkle tree verification enabled batch integrity checks across the entire evidence base.",
    outcomes: [
      { metric: "Audit Reconstruction Time", before: "6–12 weeks", after: "< 45 minutes", improvement: "99.4% reduction" },
      { metric: "Evidence Chain Completeness", before: "85%", after: "100%", improvement: "Full integrity" },
      { metric: "Annual Compliance Cost", before: "$2.8M (staff + systems)", after: "$0.9M projected", improvement: "68% reduction" },
      { metric: "Cross-System Data Integrity", before: "Manual reconciliation", after: "Automated hash verification", improvement: "Zero manual effort" },
    ],
    comparativeAdvantage: "Legacy GRC platforms rely on self-reported compliance data. GRGF captures the actual institutional action — not the reported version — ensuring evidentiary integrity independent of institutional claims.",
  },
  {
    id: "CS-004",
    title: "Social Benefit Eligibility Verification",
    sector: "Social Protection",
    jurisdiction: "National — Ministry of Social Services",
    icon: Users,
    challenge: "A national benefits program serving 1.2M recipients lacked verifiable decision trails for eligibility determinations. Appeals took 14 months on average, and 22% of denials could not be reconstructed to identify the deciding authority.",
    solution: "GRGF recorded every eligibility decision with deterministic policy evaluation results, denial codes, and human-readable explanations. Zero-knowledge verification allowed recipients to confirm their case status without exposing personal data.",
    outcomes: [
      { metric: "Appeal Resolution Time", before: "14 months", after: "< 4 weeks", improvement: "93% faster" },
      { metric: "Unreconstructable Denials", before: "22%", after: "0%", improvement: "100% elimination" },
      { metric: "Denial Clarity Index", before: "Not measured", after: "98.7% clear explanation", improvement: "Full transparency" },
      { metric: "Recipient Trust Score", before: "29% (survey)", after: "71% (post-pilot survey)", improvement: "+42 points" },
    ],
    comparativeAdvantage: "Conventional case management systems record outcomes but not the policy logic that produced them. GRGF seals the decision reasoning itself — enabling independent verification of whether rules were correctly applied.",
  },
  {
    id: "CS-005",
    title: "Cross-Border Institutional Recognition",
    sector: "International Federation",
    jurisdiction: "Multi-National — 3-Country Pilot Federation",
    icon: Globe,
    challenge: "Three nations sought mutual recognition of institutional governance records for trade compliance. Existing bilateral agreements required manual verification averaging 8 weeks per recognition request, with no standardized integrity verification.",
    solution: "GRGF federation nodes in each jurisdiction provided interoperable trust verification via shared hash manifests and standardized event schemas. Tier 1 (Full) and Tier 2 (Partial) participation models preserved sovereign data residency while enabling cross-border proof-of-existence queries.",
    outcomes: [
      { metric: "Cross-Border Verification Time", before: "8 weeks manual", after: "< 15 seconds automated", improvement: "99.99% faster" },
      { metric: "Recognition Request Volume", before: "~180/year (capacity-limited)", after: "Unlimited (API-based)", improvement: "Scalable" },
      { metric: "Data Sovereignty Compliance", before: "Case-by-case legal review", after: "Structural enforcement", improvement: "Automated compliance" },
      { metric: "Federation Onboarding Time", before: "18–24 months (bilateral)", after: "< 90 days (GRGF node)", improvement: "87% faster" },
    ],
    comparativeAdvantage: "Bilateral verification agreements are slow, expensive, and non-scalable. GRGF federation enables N-to-N interoperability through a shared integrity protocol — without centralizing data or governance authority.",
  },
];

const CaseStudies = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Institutional Case Studies"
      subtitle="Structured deployment scenarios with measurable governance outcomes and comparative analysis."
    />

    <Section>
      <div className="governance-card border-l-2 border-l-accent mb-8">
        <p className="text-sm text-foreground leading-relaxed">
          The following case studies represent structured institutional scenarios based on the GRGF pilot evaluation framework. Outcomes reflect projected performance metrics derived from the system's deterministic architecture and controlled pilot assessments. They do not represent live production deployments.
        </p>
      </div>
    </Section>

    {caseStudies.map((cs, idx) => (
      <Section key={cs.id} title={`${cs.id} — ${cs.title}`} className="border-t border-border">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-card border border-border rounded-sm text-xs font-mono text-accent">{cs.sector}</span>
            <span className="px-3 py-1 bg-card border border-border rounded-sm text-xs font-mono text-muted-foreground">{cs.jurisdiction}</span>
          </div>

          {/* Challenge */}
          <div className="governance-card">
            <h4 className="text-xs font-serif font-semibold text-foreground mb-2">Challenge</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
          </div>

          {/* Solution */}
          <div className="governance-card">
            <h4 className="text-xs font-serif font-semibold text-foreground mb-2">GRGF Solution</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
          </div>

          {/* Outcomes Table */}
          <div>
            <h4 className="text-xs font-serif font-semibold text-foreground mb-3">Measurable Outcomes</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-2 px-2 font-serif font-semibold text-foreground">Metric</th>
                    <th className="text-left py-2 px-2 font-serif font-semibold text-foreground">Before GRGF</th>
                    <th className="text-left py-2 px-2 font-serif font-semibold text-foreground">After GRGF</th>
                    <th className="text-left py-2 px-2 font-serif font-semibold text-accent">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {cs.outcomes.map((o, i) => (
                    <tr key={i} className={`border-b border-border ${i % 2 === 0 ? "bg-card/40" : ""}`}>
                      <td className="py-2 px-2 font-medium text-foreground">{o.metric}</td>
                      <td className="py-2 px-2 text-muted-foreground font-mono">{o.before}</td>
                      <td className="py-2 px-2 text-muted-foreground font-mono">{o.after}</td>
                      <td className="py-2 px-2 text-accent font-semibold">{o.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Comparative Advantage */}
          <div className="governance-card border-l-2 border-l-accent">
            <h4 className="text-xs font-serif font-semibold text-foreground mb-2">Comparative Advantage</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{cs.comparativeAdvantage}</p>
          </div>
        </div>
      </Section>
    ))}

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Note.</span> These case studies represent structured institutional scenarios and projected metrics based on the GRGF deterministic architecture. They are intended as evaluation reference material — not as claims of deployed production outcomes. Independent pilot assessment is recommended.
        </p>
      </div>
      <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default CaseStudies;