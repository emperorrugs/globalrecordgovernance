import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, BarChart3, Users, Globe, Heart, Zap } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip,
} from "recharts";

const pillars = [
  {
    id: "governance",
    label: "Governance & Accountability",
    icon: Shield,
    description: "Institutional oversight, separation of powers, anti-capture mechanisms, and transparent decision-making structures.",
    questions: [
      { q: "Formal governance charter with separation of powers", max: 5 },
      { q: "Anti-capture clauses preventing vendor/state control", max: 5 },
      { q: "Independent audit committee with external members", max: 5 },
      { q: "Public disclosure of governance decisions", max: 5 },
      { q: "Term limits and rotation for governance positions", max: 5 },
    ],
  },
  {
    id: "trust",
    label: "Trust & Security",
    icon: CheckCircle,
    description: "Cryptographic integrity, zero-trust architecture, tamper-evident records, and independent verification capabilities.",
    questions: [
      { q: "Cryptographic hash verification for all records", max: 5 },
      { q: "Zero-trust security architecture implemented", max: 5 },
      { q: "Independent third-party security audit completed", max: 5 },
      { q: "Tamper-evident record sealing mechanism", max: 5 },
      { q: "Public verification API for record integrity", max: 5 },
    ],
  },
  {
    id: "inclusion",
    label: "Inclusion & Accessibility",
    icon: Users,
    description: "Equitable access, multi-language support, WCAG compliance, and stakeholder consultation mechanisms.",
    questions: [
      { q: "Multi-language support (minimum EN/FR)", max: 5 },
      { q: "WCAG 2.1 AA accessibility compliance", max: 5 },
      { q: "Public stakeholder consultation mechanism", max: 5 },
      { q: "Equitable access regardless of technical capacity", max: 5 },
      { q: "Inclusive governance representation", max: 5 },
    ],
  },
  {
    id: "value",
    label: "Value Creation",
    icon: BarChart3,
    description: "Measurable institutional impact, cost-benefit transparency, efficiency gains, and public value generation.",
    questions: [
      { q: "Published cost-benefit analysis", max: 5 },
      { q: "Measurable efficiency improvements documented", max: 5 },
      { q: "Public value metrics tracked and reported", max: 5 },
      { q: "Institutional capacity building programmes", max: 5 },
      { q: "Cross-border value creation through federation", max: 5 },
    ],
  },
  {
    id: "resilience",
    label: "Resilience & Sustainability",
    icon: Zap,
    description: "Operational continuity, disaster recovery, environmental sustainability, and long-term architectural viability.",
    questions: [
      { q: "Defined RTO/RPO with disaster recovery plan", max: 5 },
      { q: "Offline fallback governance continuity", max: 5 },
      { q: "Post-quantum cryptography readiness roadmap", max: 5 },
      { q: "Environmental sustainability statement", max: 5 },
      { q: "Long-term funding and institutional sustainability", max: 5 },
    ],
  },
];

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

function ScoreLabel({ score }: { score: number }) {
  if (score >= 90) return <span className="text-accent font-semibold">Institutional-Grade</span>;
  if (score >= 70) return <span className="text-accent/80 font-semibold">Advanced</span>;
  if (score >= 50) return <span className="text-muted-foreground font-semibold">Developing</span>;
  return <span className="text-muted-foreground/60 font-semibold">Foundational</span>;
}

const OECDSafeguards = () => {
  const { t } = useLanguage();
  const [scores, setScores] = useState<Record<string, number[]>>(
    Object.fromEntries(pillars.map(p => [p.id, p.questions.map(() => 0)]))
  );
  const [activeTab, setActiveTab] = useState(pillars[0].id);

  const pillarScores = pillars.map(p => {
    const total = scores[p.id].reduce((a, b) => a + b, 0);
    const max = p.questions.length * 5;
    return { id: p.id, label: p.label, score: Math.round((total / max) * 100), fullMark: 100 };
  });

  const overallScore = Math.round(pillarScores.reduce((a, b) => a + b.score, 0) / pillarScores.length);

  const radarData = pillarScores.map(p => ({ subject: p.label.split(" ")[0], score: p.score, fullMark: 100 }));

  const setScore = (pillarId: string, qIndex: number, value: number) => {
    setScores(prev => ({
      ...prev,
      [pillarId]: prev[pillarId].map((v, i) => i === qIndex ? value : v),
    }));
  };

  return (
    <div className="animate-fade-in">
      <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("oecd.overline")}</p>
          <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
            {t("oecd.title")}
          </h1>
          <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
            {t("oecd.subtitle")}
          </p>
        </div>
      </header>

      {/* Overall Score */}
      <Sec className="border-b border-border">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("oecd.overall")}</p>
              <div className="flex items-end gap-4 mb-4">
                <span className="text-6xl font-serif font-bold text-foreground tabular-nums">{overallScore}</span>
                <span className="text-2xl text-muted-foreground/50 mb-2">/100</span>
              </div>
              <div className="mb-4">
                <ScoreLabel score={overallScore} />
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden mb-6">
                <div
                  className="h-full bg-accent transition-all duration-700 rounded-full"
                  style={{ width: `${overallScore}%` }}
                  role="progressbar"
                  aria-valuenow={overallScore}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Overall score: ${overallScore}%`}
                />
              </div>
              <div className="space-y-3">
                {pillarScores.map(p => (
                  <div key={p.id} className="flex items-center gap-3">
                    <span className="text-caption text-muted-foreground w-32 shrink-0">{p.label.split("&")[0].trim()}</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent/70 transition-all duration-500 rounded-full" style={{ width: `${p.score}%` }} />
                    </div>
                    <span className="text-caption font-mono text-foreground w-10 text-right tabular-nums">{p.score}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-80" aria-label="Radar chart showing scores across five OECD DPI safeguard pillars">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Score" dataKey="score" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.2} strokeWidth={2} />
                  <Tooltip
                    contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", fontSize: "12px" }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </FadeIn>
      </Sec>

      {/* Pillar Assessment */}
      <Sec className="border-b border-border">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("oecd.pillar_assessment")}</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("oecd.score_each")}</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="OECD DPI safeguard pillars">
          {pillars.map(p => (
            <button
              key={p.id}
              role="tab"
              aria-selected={activeTab === p.id}
              aria-controls={`panel-${p.id}`}
              onClick={() => setActiveTab(p.id)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeTab === p.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {p.label.split("&")[0].trim()}
            </button>
          ))}
        </div>

        {/* Active panel */}
        {pillars.map(p => activeTab === p.id && (
          <div key={p.id} id={`panel-${p.id}`} role="tabpanel" aria-labelledby={p.id}>
            <FadeIn>
              <div className="governance-card-elevated mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <p.icon className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-heading-2 font-semibold">{p.label}</h3>
                </div>
                <p className="text-body text-muted-foreground">{p.description}</p>
              </div>
              <div className="space-y-4">
                {p.questions.map((q, qi) => (
                  <div key={qi} className="governance-card group hover:border-accent/20 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                      <p className="text-body text-foreground">{q.q}</p>
                      <div className="flex gap-1.5 shrink-0" role="radiogroup" aria-label={q.q}>
                        {[0, 1, 2, 3, 4, 5].map(v => (
                          <button
                            key={v}
                            role="radio"
                            aria-checked={scores[p.id][qi] === v}
                            aria-label={`Score ${v}`}
                            onClick={() => setScore(p.id, qi, v)}
                            className={`w-9 h-9 text-xs font-mono font-bold transition-all duration-200 ${
                              scores[p.id][qi] === v
                                ? "bg-accent text-accent-foreground scale-110"
                                : scores[p.id][qi] > v
                                  ? "bg-accent/20 text-accent"
                                  : "bg-muted text-muted-foreground hover:bg-accent/10"
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        ))}
      </Sec>

      {/* Methodology */}
      <Sec className="border-b border-border bg-muted/40">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("oecd.methodology")}</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("oecd.framework")}</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { score: "0–25%", label: "Foundational", desc: "Initial awareness. Basic governance structures being established." },
            { score: "26–50%", label: "Developing", desc: "Core capabilities present. Gaps in coverage or independence." },
            { score: "51–75%", label: "Advanced", desc: "Comprehensive capability. Most safeguards operational." },
            { score: "76–100%", label: "Institutional-Grade", desc: "Full maturity. Independent verification, federation-ready." },
          ].map(({ score, label, desc }) => (
            <div key={label} className="governance-card-elevated">
              <span className="text-overline font-mono text-accent">{score}</span>
              <h4 className="font-serif text-heading-3 font-semibold mt-2 mb-2">{label}</h4>
              <p className="text-caption text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-caption text-muted-foreground/50 mt-6">
          This self-assessment is aligned with the OECD Recommendation on Digital Government Strategies (2014), the OECD Going Digital Toolkit, and the emerging OECD DPI Safeguards Framework. Results are indicative and should be validated through formal institutional review.
        </p>
      </Sec>

      {/* CTA */}
      <Sec className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">{t("oecd.request_formal")}</h2>
          <p className="text-body text-primary-foreground/60 mb-8">
            {t("oecd.cta_desc")}
          </p>
          <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-accent/20">
            {t("oecd.request_assessment")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Sec>
    </div>
  );
};

export default OECDSafeguards;
