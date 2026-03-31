import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Search, Download, FileText, Presentation, Megaphone, Mail,
  BookOpen, Newspaper, Image, Video, Globe, Building2,
  ArrowRight, Printer, ExternalLink, Filter, Loader2, FolderDown,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { PatentNotice } from "@/components/PatentNotice";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { useToast } from "@/hooks/use-toast";

/* ────────────────────────────────────────────────────────────
   MEDIA ROOM DATA
   ──────────────────────────────────────────────────────────── */

interface MediaFile {
  name: string;
  path: string;
  type: "pdf" | "pptx" | "docx" | "csv" | "zip" | "md" | "txt";
  badge?: string;
}

interface MediaCategory {
  id: string;
  title: string;
  desc: string;
  icon: typeof FileText;
  color: string;
  files: MediaFile[];
}

const mediaCategories: MediaCategory[] = [
  {
    id: "brochures",
    title: "Brochures & One-Pagers",
    desc: "Quick-read institutional summaries for executives, partners, and media.",
    icon: Newspaper,
    color: "from-blue-500/20 to-blue-600/10",
    files: [
      { name: "GRGF One Pager", path: "/documents/GRGF_One_Pager.pdf", type: "pdf", badge: "Essential" },
      { name: "Executive Summary — LinkedIn Brief", path: "/documents/GRGF_Executive_Summary_LinkedIn_Brief.pdf", type: "pdf" },
      { name: "GRGF Public Overview", path: "/documents/GRGF_Public_Overview.pdf", type: "pdf" },
      { name: "Institutional Brochure", path: "/documents/templates/GRGF_Institutional_Brochure.pdf", type: "pdf", badge: "Template" },
      { name: "GRGF FAQ", path: "/documents/GRGF_FAQ.pdf", type: "pdf" },
      { name: "Vision and Purpose", path: "/documents/GRGF_Vision_and_Purpose.pdf", type: "pdf" },
      { name: "Une Page — FR", path: "/documents/GRGF_Une_Page_FR.pdf", type: "pdf" },
      { name: "Résumé Exécutif LinkedIn — FR", path: "/documents/GRGF_Resume_Executif_LinkedIn_FR.pdf", type: "pdf" },
    ],
  },
  {
    id: "catalogs",
    title: "Product Catalogs & Marketplace",
    desc: "Full product catalog, pricing architecture, and marketplace materials.",
    icon: BookOpen,
    color: "from-emerald-500/20 to-emerald-600/10",
    files: [
      { name: "Marketplace Product Catalog 2026", path: "/documents/GRGF_Marketplace_Catalog_2026.pdf", type: "pdf", badge: "New" },
      { name: "Project Catalog & Proposal 2026", path: "/documents/GRGF_Project_Catalog_Proposal_2026.pdf", type: "pdf" },
      { name: "Project Catalog Deck 2026 (PPTX)", path: "/documents/GRGF_Project_Catalog_Deck_2026.pptx", type: "pptx" },
      { name: "Project Catalog Deck 2026 (PDF)", path: "/documents/GRGF_Project_Catalog_Deck_2026.pdf", type: "pdf" },
      { name: "Commercial Architecture & Pricing Strategy", path: "/documents/GRGF_Commercial_Architecture_Pricing_Strategy.pdf", type: "pdf" },
      { name: "Value Proposition 2026", path: "/documents/GRGF_Value_Proposition_Complete_2026.pdf", type: "pdf" },
      { name: "126 Applications Professional Proposal", path: "/documents/GRGF_126_Applications_Professional_Proposal_2026.pdf", type: "pdf" },
    ],
  },
  {
    id: "presentations",
    title: "Presentation Decks",
    desc: "Investor decks, executive binders, and institutional briefing materials.",
    icon: Presentation,
    color: "from-violet-500/20 to-violet-600/10",
    files: [
      { name: "Investor Deck 2026 (PPTX)", path: "/documents/GRGF_Investor_Deck_2026.pptx", type: "pptx", badge: "Essential" },
      { name: "Investor Pitch Deck 2026 (PPTX)", path: "/documents/GRGF_Investor_Pitch_Deck_2026.pptx", type: "pptx" },
      { name: "Executive Visual Binder (PPTX)", path: "/documents/GRGF_Executive_Visual_Binder.pptx", type: "pptx" },
      { name: "Enterprise Joint Presentation 2026", path: "/documents/GRGF_Enterprise_Joint_Presentation_2026.pdf", type: "pdf" },
      { name: "Executive Briefing Booklet", path: "/documents/GRGF_Executive_Briefing_Booklet.pdf", type: "pdf" },
      { name: "Oral Defense Briefing Deck", path: "/documents/Oral_Defense_Briefing_Deck.pdf", type: "pdf" },
    ],
  },
  {
    id: "outreach",
    title: "Outreach & Communication",
    desc: "Institutional engagement letters, communication plans, and stakeholder templates.",
    icon: Mail,
    color: "from-amber-500/20 to-amber-600/10",
    files: [
      { name: "Outreach Templates", path: "/documents/GRGF_Outreach_Templates.pdf", type: "pdf" },
      { name: "Communication Plan", path: "/documents/templates/GRGF_Communication_Plan.pdf", type: "pdf", badge: "Template" },
      { name: "Stakeholder Engagement Plan", path: "/documents/templates/GRGF_Stakeholder_Engagement_Plan.pdf", type: "pdf", badge: "Template" },
      { name: "Change Management Plan", path: "/documents/templates/GRGF_Change_Management_Plan.pdf", type: "pdf", badge: "Template" },
      { name: "Video Walkthrough Script", path: "/documents/GRGF_Video_Walkthrough_Script.pdf", type: "pdf" },
    ],
  },
  {
    id: "government",
    title: "Government Submissions & Proposals",
    desc: "Sovereign-grade submission packages for government evaluation.",
    icon: Building2,
    color: "from-red-500/20 to-red-600/10",
    files: [
      { name: "Canada Government Submission 2026", path: "/documents/GRGF_Canada_Government_Submission_2026.pdf", type: "pdf", badge: "Official" },
      { name: "Complete Proposal 2026 (Expanded)", path: "/documents/GRGF_Complete_Proposal_2026_Expanded.pdf", type: "pdf" },
      { name: "Complete Project Proposal 2026", path: "/documents/GRGF_Complete_Project_Proposal_2026.pdf", type: "pdf" },
      { name: "Institutional Application Package", path: "/documents/GRGF_Institutional_Application_Package.pdf", type: "pdf" },
      { name: "Procurement Strategy (PSPC)", path: "/documents/Procurement_Strategy_PSPC.pdf", type: "pdf" },
      { name: "Executive Decision Memo", path: "/documents/Executive_Decision_Memo.pdf", type: "pdf" },
      { name: "Proposition complète 2026 — FR", path: "/documents/GRGF_Complete_Proposal_2026_Expanded_FR.pdf", type: "pdf" },
      { name: "الاقتراح الكامل 2026 — AR", path: "/documents/GRGF_Complete_Proposal_2026_Expanded_AR.pdf", type: "pdf" },
    ],
  },
  {
    id: "case-studies",
    title: "Case Studies & Economic Analysis",
    desc: "Evidence-based economic studies, ROI models, and institutional case studies.",
    icon: Megaphone,
    color: "from-cyan-500/20 to-cyan-600/10",
    files: [
      { name: "Economic Case Study — World Bank Edition", path: "/documents/GRGF_Economic_Case_Study_World_Bank_Edition.pdf", type: "pdf" },
      { name: "Evidence-Based Economic Study 2026", path: "/documents/GRGF_Evidence_Based_Economic_Study_2026.pdf", type: "pdf" },
      { name: "Canadian Case Studies & Value Analysis", path: "/documents/GRGF_Canadian_Case_Studies_Value_Analysis.pdf", type: "pdf" },
      { name: "Financial Model Summary", path: "/documents/GRGF_Financial_Model_Summary.pdf", type: "pdf" },
      { name: "Public Value & ROI", path: "/documents/Public_Value_ROI.pdf", type: "pdf" },
      { name: "TTC Value — Before & After", path: "/documents/GRGF_TTC_Value_Before_After.pdf", type: "pdf" },
      { name: "UHN Value — Before & After", path: "/documents/GRGF_UHN_Value_Before_After.pdf", type: "pdf" },
      { name: "Valuation — 5-Year Scenarios", path: "/documents/Valuation_5yr_Scenarios.pdf", type: "pdf" },
    ],
  },
  {
    id: "international",
    title: "International & Multilateral",
    desc: "OECD, World Bank, UN, and G20 alignment materials for global distribution.",
    icon: Globe,
    color: "from-indigo-500/20 to-indigo-600/10",
    files: [
      { name: "DPI Integration Guide", path: "/documents/DPI_Integration_Guide.pdf", type: "pdf" },
      { name: "Feasibility Study", path: "/documents/Feasibility_Study.pdf", type: "pdf" },
      { name: "GovTech Executive Committee Review 2026", path: "/documents/GRGF_GovTech_Executive_Committee_Review_2026.pdf", type: "pdf" },
      { name: "Service Canada Pilot Complete", path: "/documents/GRGF_Service_Canada_Pilot_Complete.pdf", type: "pdf" },
      { name: "Pilot Results — Republic of Novaris", path: "/documents/GRGF_Pilot_Results_Republic_of_Novaris.pdf", type: "pdf" },
      { name: "Interoperability Profile", path: "/documents/5_Interoperability_Profile.pdf", type: "pdf" },
    ],
  },
  {
    id: "legal",
    title: "Legal & Agreements",
    desc: "NDA, MOU, licensing, partnership agreements, and IP documentation.",
    icon: FileText,
    color: "from-slate-500/20 to-slate-600/10",
    files: [
      { name: "NDA Template", path: "/documents/GRGF_NDA_Template.pdf", type: "pdf", badge: "Template" },
      { name: "Pilot MOU Template", path: "/documents/templates/GRGF_Pilot_MOU_Template.pdf", type: "pdf", badge: "Template" },
      { name: "Partnership Agreement", path: "/documents/templates/GRGF_Partnership_Agreement_Template.pdf", type: "pdf", badge: "Template" },
      { name: "Licensing Agreement", path: "/documents/templates/GRGF_Licensing_Agreement_Template.pdf", type: "pdf", badge: "Template" },
      { name: "Data Processing Agreement", path: "/documents/templates/GRGF_Data_Processing_Agreement.pdf", type: "pdf", badge: "Template" },
      { name: "RFP Template", path: "/documents/templates/GRGF_RFP_Template.pdf", type: "pdf", badge: "Template" },
      { name: "SLA Template", path: "/documents/templates/GRGF_SLA_Template.pdf", type: "pdf", badge: "Template" },
      { name: "Pilot Agreement Template", path: "/documents/GRGF_Pilot_Agreement_Template.pdf", type: "pdf", badge: "Template" },
      { name: "IP Scope and Attribution", path: "/documents/IP_Scope_and_Attribution.pdf", type: "pdf" },
    ],
  },
];

/* ────────────────────────────────────────────────────────────
   HELPER
   ──────────────────────────────────────────────────────────── */
const typeStyles: Record<string, string> = {
  pdf: "bg-red-500/15 text-red-400",
  pptx: "bg-orange-500/15 text-orange-400",
  docx: "bg-blue-500/15 text-blue-400",
  csv: "bg-green-500/15 text-green-400",
  zip: "bg-purple-500/15 text-purple-400",
  md: "bg-gray-500/15 text-gray-400",
  txt: "bg-gray-500/15 text-gray-400",
};

const badgeStyles: Record<string, string> = {
  Essential: "bg-primary/15 text-primary border-primary/30",
  New: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Official: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Template: "bg-violet-500/15 text-violet-400 border-violet-500/30",
};

/* ────────────────────────────────────────────────────────────
   DOWNLOAD ALL BUTTON
   ──────────────────────────────────────────────────────────── */
function DownloadAllButton({ category }: { category: MediaCategory }) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleDownloadAll = useCallback(async () => {
    setLoading(true);
    toast({ title: "Preparing ZIP", description: `Bundling ${category.files.length} files from "${category.title}"…` });

    try {
      const zip = new JSZip();
      const results = await Promise.allSettled(
        category.files.map(async (file) => {
          const res = await fetch(file.path);
          if (!res.ok) throw new Error(`Failed: ${file.path}`);
          const blob = await res.blob();
          const fileName = file.path.split("/").pop() || file.name;
          zip.file(fileName, blob);
        })
      );

      const failed = results.filter((r) => r.status === "rejected").length;
      if (failed > 0) {
        toast({ title: "Partial download", description: `${failed} file(s) could not be fetched. The rest are included.`, variant: "destructive" });
      }

      const content = await zip.generateAsync({ type: "blob" });
      const safeName = category.title.replace(/[^a-zA-Z0-9]+/g, "_");
      saveAs(content, `GRGF_${safeName}.zip`);
      toast({ title: "Download complete", description: `GRGF_${safeName}.zip saved.` });
    } catch {
      toast({ title: "Download failed", description: "Could not generate ZIP. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }, [category, toast]);

  return (
    <button
      onClick={handleDownloadAll}
      disabled={loading}
      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-background/80 border border-border text-xs font-medium text-foreground hover:bg-background hover:border-primary/30 transition-colors shrink-0 disabled:opacity-50"
    >
      {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <FolderDown className="h-3.5 w-3.5" />}
      <span className="hidden sm:inline">{loading ? "Zipping…" : "Download All"}</span>
    </button>
  );
}

/* ────────────────────────────────────────────────────────────
   PAGE COMPONENT
   ──────────────────────────────────────────────────────────── */
export default function MediaRoom() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const totalFiles = mediaCategories.reduce((s, c) => s + c.files.length, 0);

  const filtered = useMemo(() => {
    let cats = mediaCategories;

    if (activeFilter !== "all") {
      cats = cats.filter((c) => c.id === activeFilter);
    }

    if (!search.trim()) return cats;
    const q = search.toLowerCase();
    return cats
      .map((cat) => ({
        ...cat,
        files: cat.files.filter(
          (f) =>
            f.name.toLowerCase().includes(q) ||
            f.path.toLowerCase().includes(q) ||
            f.type.includes(q)
        ),
      }))
      .filter((cat) => cat.files.length > 0);
  }, [search, activeFilter]);

  const filteredCount = filtered.reduce((s, c) => s + c.files.length, 0);

  return (
    <>
      <SEOHead
        title="Media Room — GRGF"
        description="Download GRGF marketing materials, brochures, catalogs, presentations, outreach templates, and institutional communication documents."
      />

      <div className="min-h-screen">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }} />

          <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                <Image className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-xs font-mono tracking-[0.25em] uppercase text-primary font-semibold">
                Media & Communications
              </p>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-4">
              Media Room
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-2">
              The official distribution hub for GRGF marketing materials, institutional
              brochures, product catalogs, presentation decks, and communication documents.
            </p>
            <p className="text-sm text-muted-foreground/70">
              {totalFiles} files across {mediaCategories.length} categories — all downloadable and print-ready.
            </p>
          </div>
        </section>

        {/* ── SEARCH & FILTERS ── */}
        <section className="border-b border-border bg-card/40 sticky top-0 z-20 backdrop-blur-xl">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search materials..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                />
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
                <Filter className="h-3.5 w-3.5 text-muted-foreground shrink-0 mr-1" />
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                    activeFilter === "all"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  All ({totalFiles})
                </button>
                {mediaCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                      activeFilter === cat.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {cat.title.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>
            {(search || activeFilter !== "all") && (
              <p className="text-xs text-muted-foreground mt-2">
                Showing {filteredCount} of {totalFiles} files
              </p>
            )}
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
          <div className="space-y-8">
            {filtered.map((cat) => (
              <div
                key={cat.id}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 transition-colors"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${cat.color} px-6 lg:px-8 py-5 border-b border-border/50`}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-background/80 border border-border flex items-center justify-center shrink-0">
                        <cat.icon className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-foreground">{cat.title}</h2>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {cat.desc} · {cat.files.length} files
                        </p>
                      </div>
                    </div>
                    <DownloadAllButton category={cat} />
                  </div>
                </div>

                {/* File List */}
                <div className="divide-y divide-border/50">
                  {cat.files.map((file) => (
                    <div
                      key={file.path}
                      className="flex items-center justify-between px-6 lg:px-8 py-3.5 hover:bg-muted/40 transition-colors group/file"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-md font-semibold shrink-0 ${
                            typeStyles[file.type] || "bg-muted text-muted-foreground"
                          }`}
                        >
                          {file.type}
                        </span>
                        <span className="text-sm text-foreground truncate">{file.name}</span>
                        {file.badge && (
                          <span
                            className={`text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border shrink-0 ${
                              badgeStyles[file.badge] || "bg-muted text-muted-foreground border-border"
                            }`}
                          >
                            {file.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 shrink-0 ml-4">
                        <a
                          href={file.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md hover:bg-primary/10 transition-colors"
                          title="View"
                        >
                          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground hover:text-primary transition-colors" />
                        </a>
                        <a
                          href={file.path}
                          download
                          className="p-1.5 rounded-md hover:bg-primary/10 transition-colors"
                          title="Download"
                        >
                          <Download className="h-3.5 w-3.5 text-muted-foreground hover:text-primary transition-colors" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-16 rounded-2xl border border-dashed border-border">
                <Search className="h-8 w-8 text-muted-foreground/40 mx-auto mb-3" />
                <p className="text-muted-foreground font-medium">
                  No materials matching "{search}"
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  Try a different search term or clear the filter.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="border-t border-border bg-muted/20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-card border border-border">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Need the complete document library?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Access 170+ institutional documents including restricted technical files and sovereign deployment guides.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  to="/documents"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted text-foreground text-sm font-semibold rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Full Library
                </Link>
                <Link
                  to="/archive/intelligent"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Smart Archive
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── PATENT NOTICE ── */}
        <PatentNotice />
      </div>
    </>
  );
}
