import { PageHeader, Section } from "@/components/PageComponents";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Users, Globe, GraduationCap, Building2, Scale, Shield,
  ArrowRight, Clock, CheckCircle, BookOpen, Landmark,
} from "lucide-react";

const boardPositions = [
  {
    role: "Chair — Governance Architecture",
    profile: "Former senior official from a national digital transformation agency or multilateral governance body. 15+ years in public sector digital infrastructure.",
    status: "Recruitment in progress",
    statusColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    icon: Landmark,
  },
  {
    role: "Technical Integrity & Cryptographic Standards",
    profile: "PhD-level cryptography or information security researcher. Published in SHA-256 hash chain integrity, append-only data structures, or formal verification.",
    status: "Recruitment in progress",
    statusColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    icon: Shield,
  },
  {
    role: "International DPI & Standards Alignment",
    profile: "Experienced contributor to OECD, World Bank GovTech, or UN DESA digital public infrastructure programmes. Deep understanding of DPG and GTMI frameworks.",
    status: "Recruitment in progress",
    statusColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    icon: Globe,
  },
  {
    role: "Legal & Regulatory Compliance",
    profile: "International law or regulatory compliance specialist with expertise in data protection (GDPR/PIPEDA), administrative law, and digital evidence admissibility.",
    status: "Recruitment in progress",
    statusColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    icon: Scale,
  },
  {
    role: "Academic & Research Validation",
    profile: "Professor or senior researcher at a recognized institution. Focus on digital governance, public administration, or institutional design.",
    status: "Recruitment in progress",
    statusColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    icon: GraduationCap,
  },
  {
    role: "Public Sector Implementation",
    profile: "Former CIO, CDO, or Director of a government IT or records management department. Direct experience deploying enterprise systems in sovereign environments.",
    status: "Recruitment in progress",
    statusColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    icon: Building2,
  },
];

const partnerCategories = [
  {
    category: "Institutional Evaluation Partners",
    description: "Government bodies, multilateral organizations, and regulatory agencies invited to conduct structured evaluation of the GRGF Pilot Node.",
    targets: ["National digital transformation agencies", "Treasury and public administration ministries", "Multilateral development organizations"],
    status: "Engagement in progress",
  },
  {
    category: "Academic Research Partners",
    description: "Universities and research institutions invited to conduct independent analysis, peer review, and academic validation of the governance framework.",
    targets: ["Public administration and governance research centres", "Information security and cryptography departments", "Digital government research groups"],
    status: "Outreach initiated",
  },
  {
    category: "Technology Validation Partners",
    description: "Independent security firms and standards organizations invited to conduct technical assessment, penetration testing, and compliance audit.",
    targets: ["Accredited security assessment firms", "Standards bodies (ISO, NIST alignment)", "Open-source security audit organizations"],
    status: "Planning",
  },
  {
    category: "Pilot Implementation Partners",
    description: "Municipal, regional, or institutional entities willing to participate in a structured 90-day pilot deployment of the GRGF system.",
    targets: ["Municipal governments", "University administrative offices", "Regional regulatory bodies"],
    status: "Engagement in progress",
  },
];

const statusBadge = (status: string) => {
  const colors: Record<string, string> = {
    "Engagement in progress": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "Outreach initiated": "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
    "Planning": "bg-muted text-muted-foreground",
  };
  return colors[status] || "bg-muted text-muted-foreground";
};

const AdvisoryBoard = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Advisory Board & Institutional Partners"
      subtitle="Building the coalition required for sovereign-grade institutional credibility."
    />

    {/* Governance Statement */}
    <Section title="Governance Statement" className="border-b border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed mb-4">
          GRGF is designed as neutral, sovereign-grade infrastructure. To ensure institutional credibility, independence, and anti-capture compliance (AC-01 through AC-05), the framework is governed by an independent Advisory Board composed of recognized experts from governance, security, law, academia, and public sector implementation.
        </p>
        <p className="text-sm text-foreground leading-relaxed">
          The Advisory Board provides strategic oversight, technical validation, and institutional endorsement. Board members serve in an advisory capacity and do not hold operational authority over the framework's architecture or deployment decisions.
        </p>
      </div>
    </Section>

    {/* Advisory Board */}
    <Section title="Advisory Board Positions" className="border-b border-border">
      <p className="text-xs text-muted-foreground mb-6">
        The following positions define the composition of the GRGF Advisory Board. Recruitment is conducted through formal institutional outreach.
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        {boardPositions.map((p) => (
          <Card key={p.role} className="p-5">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-muted shrink-0">
                <p.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-foreground leading-tight">{p.role}</h3>
                  <Badge className={`${p.statusColor} text-[9px] shrink-0 whitespace-nowrap`}>
                    <Clock className="h-2.5 w-2.5 mr-1" />
                    {p.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.profile}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>

    {/* Institutional Partners */}
    <Section title="Institutional Partner Programme" className="border-b border-border">
      <p className="text-xs text-muted-foreground mb-6">
        GRGF institutional partnerships are structured to ensure independent validation without compromising the framework's neutrality or anti-capture principles.
      </p>
      <div className="space-y-4">
        {partnerCategories.map((pc) => (
          <Card key={pc.category} className="p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-foreground">{pc.category}</h3>
              <Badge className={`${statusBadge(pc.status)} text-[10px]`}>{pc.status}</Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{pc.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {pc.targets.map((t) => (
                <Badge key={t} variant="outline" className="text-[10px]">{t}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>

    {/* Engagement Process */}
    <Section title="Engagement Process" className="border-b border-border">
      <div className="governance-card">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { step: "1", title: "Identification", desc: "Candidates identified through institutional networks and formal outreach" },
            { step: "2", title: "Evaluation", desc: "Expertise, independence, and alignment with anti-capture principles assessed" },
            { step: "3", title: "Invitation", desc: "Formal invitation with terms of reference and advisory mandate" },
            { step: "4", title: "Onboarding", desc: "NDA execution, platform access, and initial briefing session" },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-2 text-xs font-bold">{s.step}</div>
              <p className="text-xs font-semibold text-foreground mb-1">{s.title}</p>
              <p className="text-[11px] text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* CTA */}
    <Section title="Express Interest">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed mb-4">
          If you represent a government body, academic institution, standards organization, or security firm and are interested in contributing to the GRGF Advisory Board or Institutional Partner Programme, we welcome formal expressions of interest.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary text-xs font-medium rounded-sm hover:bg-accent/90 transition-colors">
            Express Interest <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link to="/briefing" className="inline-flex items-center gap-2 px-4 py-2 border border-border text-xs font-medium rounded-sm hover:bg-muted transition-colors">
            Request Institutional Briefing
          </Link>
        </div>
      </div>
      <p className="mt-6 text-[10px] font-mono text-muted-foreground/40 tracking-wider text-center">
        ADVISORY BOARD COMPOSITION ALIGNED WITH GRGF ANTI-CAPTURE CLAUSES AC-01 THROUGH AC-05
      </p>
    </Section>
  </div>
);

export default AdvisoryBoard;
