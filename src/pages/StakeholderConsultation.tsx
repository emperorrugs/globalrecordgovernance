import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Send, Users, Calendar, FileText } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const consultations = [
  {
    id: "GRGF-CON-2026-001",
    title: "Recognition Framework Criteria — Public Review",
    status: "Open",
    opens: "2026-01-15",
    closes: "2026-04-15",
    description: "Public consultation on the three-tier recognition criteria, assessment methodology, and re-certification requirements. Input welcomed from governments, auditors, and institutional stakeholders.",
  },
  {
    id: "GRGF-CON-2026-002",
    title: "Federation Protocol Specification v1.0",
    status: "Open",
    opens: "2026-02-01",
    closes: "2026-05-01",
    description: "Technical specification review for the cross-border federation protocol. Seeking feedback on sovereign node requirements, verification handshake, and data portability guarantees.",
  },
  {
    id: "GRGF-CON-2026-003",
    title: "Environmental Sustainability Targets",
    status: "Planned",
    opens: "2026-04-01",
    closes: "2026-06-30",
    description: "Consultation on proposed environmental sustainability targets, carbon reduction commitments, and green hosting requirements for federation nodes.",
  },
];

const StakeholderConsultation = () => {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [consultation, setConsultation] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fade-in">
      <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Public Engagement</p>
          <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
            Stakeholder Consultation
          </h1>
          <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
            Structured public consultation mechanism for governance standards development. Open, transparent, and inclusive — ensuring all institutional voices contribute to framework evolution.
          </p>
        </div>
      </header>

      {/* Active Consultations */}
      <Sec className="border-b border-border">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Active Consultations</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Current Review Periods</h2>
          <div className="space-y-4">
            {consultations.map(c => (
              <div key={c.id} className="governance-card-elevated hover:border-accent/20 transition-all">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-accent">{c.id}</span>
                  <span className={`px-2 py-0.5 text-xs font-mono ${c.status === "Open" ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"}`}>
                    {c.status}
                  </span>
                </div>
                <h4 className="font-serif text-heading-3 font-semibold mb-2">{c.title}</h4>
                <p className="text-caption text-muted-foreground leading-relaxed mb-3">{c.description}</p>
                <div className="flex items-center gap-4 text-overline text-muted-foreground/50">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Opens: {c.opens}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Closes: {c.closes}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* Submission Process */}
      <Sec className="border-b border-border bg-muted/40">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Consultation Process</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">How Consultations Work</h2>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              { step: "1", title: "Publication", desc: "Draft standards or proposals published with structured feedback templates and clear submission guidelines." },
              { step: "2", title: "Review Period", desc: "Minimum 90-day public review period. Extended on request for complex technical proposals." },
              { step: "3", title: "Analysis", desc: "All submissions reviewed, categorised, and responded to. Summary of feedback published publicly." },
              { step: "4", title: "Incorporation", desc: "Accepted feedback incorporated into standards. Rationale for rejection published transparently." },
            ].map(s => (
              <div key={s.step} className="governance-card-elevated">
                <span className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-mono font-bold mb-3">{s.step}</span>
                <h4 className="font-serif text-heading-3 font-semibold mb-2">{s.title}</h4>
                <p className="text-caption text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* Feedback Form */}
      <Sec className="border-b border-border">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Submit Feedback</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Consultation Response Form</h2>
          {submitted ? (
            <div className="governance-card-elevated border-l-4 border-l-accent max-w-2xl">
              <h3 className="font-serif text-heading-3 font-semibold mb-2 text-accent">Submission Received</h3>
              <p className="text-body text-muted-foreground">
                Thank you for your contribution. Your feedback has been logged and will be reviewed during the analysis phase. A summary of all submissions will be published at the close of the consultation period.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sc-name" className="text-caption font-medium text-foreground block mb-1.5">Name *</label>
                  <input id="sc-name" type="text" required maxLength={100} value={name} onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2.5 bg-card border border-border text-sm text-foreground focus:border-accent focus:outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="sc-org" className="text-caption font-medium text-foreground block mb-1.5">Organisation</label>
                  <input id="sc-org" type="text" maxLength={200} value={org} onChange={e => setOrg(e.target.value)}
                    className="w-full px-3 py-2.5 bg-card border border-border text-sm text-foreground focus:border-accent focus:outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label htmlFor="sc-ref" className="text-caption font-medium text-foreground block mb-1.5">Consultation Reference *</label>
                <select id="sc-ref" required value={consultation} onChange={e => setConsultation(e.target.value)}
                  className="w-full px-3 py-2.5 bg-card border border-border text-sm text-foreground focus:border-accent focus:outline-none transition-colors">
                  <option value="">Select consultation...</option>
                  {consultations.filter(c => c.status === "Open").map(c => (
                    <option key={c.id} value={c.id}>{c.id} — {c.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="sc-feedback" className="text-caption font-medium text-foreground block mb-1.5">Feedback *</label>
                <textarea id="sc-feedback" required maxLength={5000} rows={6} value={feedback} onChange={e => setFeedback(e.target.value)}
                  className="w-full px-3 py-2.5 bg-card border border-border text-sm text-foreground focus:border-accent focus:outline-none transition-colors resize-vertical"
                  placeholder="Please provide structured feedback referencing specific sections or criteria..." />
                <p className="text-overline text-muted-foreground/50 mt-1">{feedback.length}/5000 characters</p>
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors">
                <Send className="h-3.5 w-3.5" /> Submit Feedback
              </button>
              <p className="text-overline text-muted-foreground/40">
                All submissions are logged, reviewed, and responded to within the published timeline. Personal data handled per our Privacy Policy.
              </p>
            </form>
          )}
        </FadeIn>
      </Sec>

      <Sec className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <Users className="h-8 w-8 text-accent mx-auto mb-4" />
          <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">Multi-Stakeholder Governance</h2>
          <p className="text-body text-primary-foreground/60">
            The Foundation is committed to inclusive, evidence-based standards development. Every voice strengthens governance integrity.
          </p>
        </div>
      </Sec>
    </div>
  );
};

export default StakeholderConsultation;
