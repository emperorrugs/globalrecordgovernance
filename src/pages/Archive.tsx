import { PageHeader, Section } from "@/components/PageComponents";
import { FileText, Lock, ShieldCheck, Hash } from "lucide-react";
import { useViewMode } from "@/contexts/ViewModeContext";
import { Link } from "react-router-dom";

const publicDocs = [
  { title: "Framework Overview", desc: "What GRGF is, how it works, and why it matters." },
  { title: "Governance Principles", desc: "Core rules, neutrality mandate, and stewardship model." },
  { title: "Simulator Guide", desc: "How to use the Live Simulator for demonstration." },
  { title: "Verification Protocol", desc: "How SHA-256 integrity verification works." },
];

const institutionalDocs = [
  { title: "Country Deployment Packages", desc: "Pre-built deployment ZIPs for low/mid/advanced maturity." },
  { title: "Legal Templates", desc: "NDAs, licensing, federation agreements, attribution mandates." },
  { title: "Security Architecture", desc: "Access tiers, cryptographic key management, disclosure protocols." },
  { title: "Valuation Models", desc: "Institutional and public value assessment frameworks." },
];

const Archive = () => {
  const { isPlain } = useViewMode();

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Documentation"
        subtitle={isPlain
          ? "All GRGF documents, policies, and governance records — public and institutional."
          : "Centralised document repository with public reference materials and access-controlled institutional archives."
        }
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Public Column */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              Public
            </h3>
            <div className="space-y-3">
              {publicDocs.map((doc) => (
                <div key={doc.title} className="governance-card">
                  <h4 className="font-serif text-sm font-semibold">{doc.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{doc.desc}</p>
                  <p className="hash-text mt-2">ACCESS: OPEN</p>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Column */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
              <Lock className="h-5 w-5 text-muted-foreground" />
              Institutional (Restricted)
            </h3>
            <div className="space-y-3">
              {institutionalDocs.map((doc) => (
                <div key={doc.title} className="governance-card opacity-75">
                  <h4 className="font-serif text-sm font-semibold">{doc.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{doc.desc}</p>
                  <p className="hash-text mt-2">ACCESS: RESTRICTED · GOVERNANCE-CONTROLLED</p>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 border border-border text-sm font-medium rounded-sm hover:bg-card transition-colors"
            >
              <Lock className="h-4 w-4" />
              Request Access
            </Link>
          </div>
        </div>
      </Section>

      {/* Hash Manifest */}
      <Section title="Hash Manifest" className="border-t border-border">
        <p className="text-muted-foreground text-sm mb-4 max-w-3xl">
          {isPlain
            ? "Every sealed document has a unique fingerprint (hash) that proves it hasn't been changed."
            : "Complete verifiable index of sealed records with corresponding SHA-256 integrity proofs."}
        </p>
        <div className="governance-card overflow-x-auto">
          <table className="w-full text-xs font-mono">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-accent/70 font-medium">RECORD ID</th>
                <th className="text-left py-2 pr-4 text-accent/70 font-medium">SEALED</th>
                <th className="text-left py-2 text-accent/70 font-medium">SHA-256</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "GRGF-2024-0001", date: "15 Jan 2024", hash: "a7f3c2d1e8b4f6a9c3d5e7f1a2b4c6d8e0f2a4b6c8d0e2f4a6b8c0d2e4f6a8" },
                { id: "GRGF-2024-0002", date: "01 Feb 2024", hash: "b8e4d3c2f1a5b7c9d1e3f5a7b9c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3b5" },
                { id: "GRGF-2024-0003", date: "10 Mar 2024", hash: "c9f5e4d3a2b6c8d0e2f4a6b8c0d2e4f6a8b0c2d4e6f8a0b2c4d6e8f0a2b4c6" },
              ].map((r) => (
                <tr key={r.id} className="border-b border-border/50 last:border-0">
                  <td className="py-2 pr-4 text-foreground">{r.id}</td>
                  <td className="py-2 pr-4 text-muted-foreground">{r.date}</td>
                  <td className="py-2 text-muted-foreground break-all">{r.hash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
};

export default Archive;
