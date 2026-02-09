import { PageHeader, Section, InfoCard } from "@/components/PageComponents";
import { BookOpen, Layers, Play, ShieldCheck, Briefcase, Archive, Shield, Lock, Fingerprint, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "What Is GRGF",
    description: "Definition, purpose, and the distinction between records, evidence, and trust.",
    icon: <BookOpen className="h-5 w-5" />,
    path: "/what-is-grgf",
  },
  {
    title: "System Architecture",
    description: "Three interdependent layers: Immutable Archive, Governance OS, and Digital Platform.",
    icon: <Layers className="h-5 w-5" />,
    path: "/architecture",
  },
  {
    title: "Live Simulator",
    description: "Demonstration-only governance workflow visualisation. No real data processed.",
    icon: <Play className="h-5 w-5" />,
    path: "/simulator",
  },
  {
    title: "Verification",
    description: "How record integrity is established, maintained, and independently verified.",
    icon: <ShieldCheck className="h-5 w-5" />,
    path: "/verification",
  },
  {
    title: "Use Cases",
    description: "Government decisions, procurement, regulatory actions, courts, and multilateral programmes.",
    icon: <Briefcase className="h-5 w-5" />,
    path: "/use-cases",
  },
  {
    title: "Documents & Archive",
    description: "Centralised repository of policies, contracts, technical documents, and frozen archives.",
    icon: <Archive className="h-5 w-5" />,
    path: "/archive",
  },
  {
    title: "Governance & Compliance",
    description: "Stewardship, neutrality principles, anti-capture protections, and independence safeguards.",
    icon: <Shield className="h-5 w-5" />,
    path: "/governance",
  },
  {
    title: "Security & Confidentiality",
    description: "Controlled access, disclosure principles, and owner-controlled governance.",
    icon: <Lock className="h-5 w-5" />,
    path: "/security",
  },
  {
    title: "Inventor & Attribution",
    description: "Origin authority, intellectual property notice, and attribution mandate.",
    icon: <Fingerprint className="h-5 w-5" />,
    path: "/origin",
  },
  {
    title: "Institutional Access",
    description: "Professional inquiry channel for governments and qualified institutional parties.",
    icon: <Mail className="h-5 w-5" />,
    path: "/contact",
  },
];

const Index = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Global Record Governance Framework"
        subtitle="Sovereign-grade Digital Public Infrastructure for institutional record integrity."
      >
        <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
          <FileText className="h-3.5 w-3.5" />
          <span>Public Reference Platform · Read-Only · Citable</span>
        </div>
      </PageHeader>

      {/* Purpose */}
      <Section title="What Problem GRGF Solves">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
          Institutions around the world make decisions, take actions, and — critically — fail to act.
          Yet most governance systems record only positive actions, leaving gaps that undermine
          accountability, audit integrity, and public trust.
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          GRGF provides a unified, neutral trust layer that records verifiable facts about actions,
          decisions, transactions, and omissions — without interpretation, enforcement, or decision
          authority. It operates as infrastructure that can exist in every country under one common
          architecture, adapting to each country's level of digital maturity.
        </p>
      </Section>

      {/* Who It Is For */}
      <Section title="Who It Is For" className="border-t border-border">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Governments & Ministries", "Courts & Judicial Bodies", "Auditors & Regulators", "Multilateral Institutions"].map((who) => (
            <div key={who} className="governance-card text-center py-4">
              <p className="text-sm font-semibold text-foreground">{who}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What Makes It Different */}
      <Section title="What Makes It Different" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Omission Recording", desc: "Records what did not happen — a critical gap in existing governance systems." },
            { label: "Cryptographic Integrity", desc: "Every record is hash-sealed and independently verifiable." },
            { label: "Sovereign Neutrality", desc: "No interpretation, enforcement, ranking, or decision authority." },
            { label: "Global Architecture", desc: "One common framework adaptable to any country's digital maturity." },
          ].map((d) => (
            <div key={d.label} className="governance-card border-l-2 border-l-accent">
              <h3 className="font-serif text-sm font-semibold">{d.label}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Canonical Definition */}
      <Section className="border-t border-border">
        <div className="canonical-quote text-base md:text-lg leading-relaxed max-w-3xl">
          "Global Record Governance Framework (GRGF) is a sovereign-grade Digital Public
          Infrastructure trust layer for recording, preserving, and verifying institutional
          actions, decisions, and omissions over time — without interpretation, enforcement,
          or decision authority."
        </div>
      </Section>

      {/* Navigation Grid */}
      <Section title="Reference Sections" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((s) => (
            <Link key={s.path} to={s.path} className="block">
              <InfoCard title={s.title} description={s.description} icon={s.icon} />
            </Link>
          ))}
        </div>
      </Section>

      {/* Origin */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
          <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance
          Framework — Invented and Owned by Tarek Wahid.
        </p>
      </Section>
    </div>
  );
};

export default Index;
