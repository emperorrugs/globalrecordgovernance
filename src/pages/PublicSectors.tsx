import { Link } from "react-router-dom";
import { Building2, Heart, Scale, Landmark, GraduationCap, Zap, Leaf, Users, ShoppingCart, Gavel, Globe, Shield, ArrowRight } from "lucide-react";

const sectors = [
  { name: "Government", icon: Landmark, count: 18, desc: "Executive orders, ministerial decisions, policy issuance, budget allocation, cabinet records." },
  { name: "Healthcare", icon: Heart, count: 12, desc: "Clinical inspections, drug authorization, patient safety, hospital compliance, research ethics." },
  { name: "Finance", icon: Scale, count: 14, desc: "Regulatory compliance, transaction audit, sanctions screening, prudential review, licensing." },
  { name: "Infrastructure", icon: Building2, count: 10, desc: "Permit issuance, site inspections, safety compliance, environmental assessments, asset transfers." },
  { name: "Justice", icon: Gavel, count: 11, desc: "Court decisions, evidence custody, judicial review, sentencing records, legal aid allocation." },
  { name: "Education", icon: GraduationCap, count: 9, desc: "Accreditation, examination integrity, scholarship allocation, institutional audit." },
  { name: "Public Safety", icon: Shield, count: 8, desc: "Incident reporting, use-of-force records, emergency response, surveillance authorization." },
  { name: "Environment", icon: Leaf, count: 8, desc: "Impact assessments, emission monitoring, conservation permits, pollution incidents." },
  { name: "Social Services", icon: Users, count: 10, desc: "Benefit allocation, case management, child welfare, housing assistance." },
  { name: "Procurement", icon: ShoppingCart, count: 9, desc: "Vendor evaluation, contract awards, bid integrity, payment authorization." },
  { name: "Trade", icon: Globe, count: 10, desc: "Trade certification, customs clearance, sanctions compliance, origin verification." },
  { name: "Energy", icon: Zap, count: 10, desc: "Grid compliance, safety inspections, license renewals, emission verification." },
];

export default function PublicSectors() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="max-w-2xl mb-14">
        <p className="text-overline font-semibold text-primary tracking-widest uppercase mb-4">Sectors</p>
        <h1 className="text-display font-bold text-foreground mb-4">Governance Across Every Sector</h1>
        <p className="text-body-lg text-muted-foreground leading-relaxed">
          GRGF provides a unified governance architecture that adapts to the specific requirements
          of each sector while maintaining consistent integrity, verification, and audit standards.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sectors.map((s) => (
          <div key={s.name} className="p-6 bg-card border border-border rounded-xl hover:border-primary/20 hover:shadow-sm transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">{s.name}</h3>
                <p className="text-[11px] text-muted-foreground">{s.count} applications</p>
              </div>
            </div>
            <p className="text-caption text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/applications" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
          View Full Applications Catalog <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
