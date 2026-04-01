import { Link } from "react-router-dom";
import { Landmark, Code, Eye, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const personas = [
  {
    icon: Landmark,
    title: "Government Official",
    subtitle: "CIO · Minister · Policy Director",
    description: "Understand the system, evaluate deployment readiness, and assess institutional impact for sovereign adoption.",
    cta: "View Institutional Brief",
    route: "/executive-dossier",
    highlights: ["Deployment Simulator", "Impact & ROI", "Use Case Gallery"],
    color: "from-blue-600/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40",
    iconBg: "bg-blue-600/10 text-blue-600",
  },
  {
    icon: Code,
    title: "Developer",
    subtitle: "Engineer · Architect · Integrator",
    description: "Explore the SDK, API documentation, architecture details, and integration guides for system interoperability.",
    cta: "Open Developer Hub",
    route: "/sdk",
    highlights: ["SDK Libraries", "API Explorer", "Architecture Docs"],
    color: "from-emerald-600/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-500/40",
    iconBg: "bg-emerald-600/10 text-emerald-600",
  },
  {
    icon: Eye,
    title: "Auditor / Evaluator",
    subtitle: "Inspector · Compliance Officer · Reviewer",
    description: "Review compliance alignment, verification protocols, audit capabilities, and institutional integrity mechanisms.",
    cta: "View Compliance Suite",
    route: "/international-compliance",
    highlights: ["ISO Alignment", "Verification Portal", "Audit Trail"],
    color: "from-amber-600/10 to-amber-600/5 border-amber-500/20 hover:border-amber-500/40",
    iconBg: "bg-amber-600/10 text-amber-600",
  },
];

export function PersonaOnboarding() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs font-mono tracking-wider mb-4 text-muted-foreground">
              GUIDED ENTRY
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-3">
              Start With Your Role
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose your path to explore GRGF through the lens that matters most to your institutional role.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <Link
                to={p.route}
                className={`block p-6 rounded-xl border bg-gradient-to-b ${p.color} transition-all duration-300 group h-full`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${p.iconBg} mb-5`}>
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground font-medium mb-3">{p.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.highlights.map((h) => (
                    <span key={h} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">
                      {h}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:gap-2.5 transition-all">
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
