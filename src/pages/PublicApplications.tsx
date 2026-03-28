import { Link } from "react-router-dom";
import { ArrowRight, Shield, Building2, Heart, Scale, Landmark, GraduationCap, Zap, Wrench, Leaf, Users, ShoppingCart, Gavel, Globe, Radio } from "lucide-react";

const sectorApps: Record<string, { icon: any; apps: string[] }> = {
  Government: { icon: Landmark, apps: ["Procurement Approval", "Budget Allocation", "Ministerial Decision Logging", "Policy Issuance", "Executive Order Tracking", "Cabinet Decision Records"] },
  Healthcare: { icon: Heart, apps: ["Clinical Inspection", "Drug Authorization", "Patient Safety Reports", "Hospital Compliance", "Research Ethics Review", "Incident Disclosure"] },
  Finance: { icon: Scale, apps: ["Regulatory Compliance", "Transaction Audit", "Sanctions Screening", "Risk Assessment Records", "License Issuance", "Prudential Reviews"] },
  Infrastructure: { icon: Building2, apps: ["Permit Issuance", "Site Inspection", "Safety Compliance", "Environmental Assessment", "Project Milestone Verification", "Asset Transfer"] },
  Justice: { icon: Gavel, apps: ["Court Decision Records", "Evidence Chain of Custody", "Judicial Review Tracking", "Sentencing Records", "Appeal Documentation", "Legal Aid Allocation"] },
  Education: { icon: GraduationCap, apps: ["Accreditation Records", "Examination Integrity", "Scholarship Allocation", "Institutional Audit", "Research Grant Tracking"] },
  "Public Safety": { icon: Shield, apps: ["Incident Reporting", "Use-of-Force Records", "Emergency Response Logs", "Surveillance Authorization", "Complaint Investigation"] },
  Environment: { icon: Leaf, apps: ["Environmental Impact Assessments", "Emission Monitoring", "Conservation Permits", "Pollution Incident Reports", "Climate Compliance"] },
  "Social Services": { icon: Users, apps: ["Benefit Allocation", "Case Management Records", "Child Welfare Documentation", "Housing Assistance", "Employment Program Tracking"] },
  Procurement: { icon: ShoppingCart, apps: ["Vendor Evaluation", "Contract Award Records", "Bid Integrity Verification", "Payment Authorization", "Dispute Resolution"] },
  Trade: { icon: Globe, apps: ["Trade Certification", "Customs Clearance", "Sanctions Compliance", "Origin Verification", "Export License Tracking"] },
  Energy: { icon: Zap, apps: ["Grid Compliance Records", "Safety Inspection Logs", "License Renewal Tracking", "Incident Reports", "Emission Verification"] },
};

export default function PublicApplications() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="max-w-2xl mb-14">
        <p className="text-overline font-semibold text-primary tracking-widest uppercase mb-4">Applications</p>
        <h1 className="text-display font-bold text-foreground mb-4">126 Applications Across 12 Sectors</h1>
        <p className="text-body-lg text-muted-foreground leading-relaxed">
          GRGF applies across the full spectrum of governance systems. Each application uses the same
          core architecture — event capture, authority binding, integrity sealing, and independent verification.
        </p>
      </div>

      <div className="space-y-6">
        {Object.entries(sectorApps).map(([sector, data]) => (
          <div key={sector} className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <data.icon className="h-4 w-4 text-primary" />
              </div>
              <h2 className="text-heading-3 font-bold text-foreground">{sector}</h2>
              <span className="text-[11px] text-muted-foreground ml-auto">{data.apps.length} applications</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {data.apps.map((app) => (
                <div key={app} className="px-3 py-2 bg-muted/30 rounded-lg text-sm text-foreground">
                  {app}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/documents"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
        >
          Download Full Catalog
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
