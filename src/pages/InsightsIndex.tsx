import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    slug: "missing-trust-layer",
    title: "The Missing Trust Layer in Digital Public Infrastructure",
    category: "Architecture",
    date: "January 2026",
    excerpt: "Current DPI initiatives focus on identity, payments, and data exchange — but none address the governance integrity layer that should underpin them all. This analysis examines the structural gap.",
  },
  {
    slug: "institutional-memory-fails",
    title: "Why Institutional Memory Fails",
    category: "Governance",
    date: "January 2026",
    excerpt: "Political transitions routinely erase governance continuity. This paper examines the mechanisms through which institutional knowledge is lost and proposes architectural solutions for perpetual memory.",
  },
  {
    slug: "anti-capture-mechanisms",
    title: "Anti-Capture Governance Mechanisms",
    category: "Safeguards",
    date: "February 2026",
    excerpt: "How do you prevent a neutral governance infrastructure from being captured by vendors, governments, or interest groups? A structural analysis of GRGF's five Anti-Capture Clauses (AC-01–05).",
  },
  {
    slug: "append-only-records",
    title: "Append-Only Records vs Traditional Databases",
    category: "Technology",
    date: "February 2026",
    excerpt: "Traditional databases allow deletion and modification. Governance requires permanence. This technical comparison examines why append-only architectures are essential for institutional trust.",
  },
  {
    slug: "sovereign-trust-architecture",
    title: "Sovereign Digital Trust Architecture",
    category: "Strategy",
    date: "February 2026",
    excerpt: "How nations can build sovereign trust layers that preserve institutional independence while participating in global verification networks. A framework for digital governance sovereignty.",
  },
];

const InsightsIndex = () => (
  <div className="animate-fade-in">
    <SEOHead
      title="Institutional Insights — GRGF"
      description="Research, analysis, and thought leadership from the Global Record Governance Framework. Institutional governance, DPI architecture, and digital trust."
    />
    <PageHeader
      title="Institutional Insights"
      subtitle="Research and analysis from the GRGF knowledge base on governance integrity, digital trust architecture, and institutional accountability."
    />

    <Section>
      <div className="space-y-6 max-w-4xl">
        {articles.map((article, i) => (
          <FadeIn key={article.slug} delay={i * 80}>
            <Link
              to={`/insights/${article.slug}`}
              className="block governance-card-elevated group hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <BookOpen className="h-5 w-5 text-accent shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-overline font-mono text-accent uppercase">{article.category}</span>
                    <span className="text-overline text-muted-foreground/50">{article.date}</span>
                  </div>
                  <h2 className="font-serif text-lg font-semibold group-hover:text-accent transition-colors">{article.title}</h2>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{article.excerpt}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all mt-1 shrink-0" />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  </div>
);

export default InsightsIndex;
