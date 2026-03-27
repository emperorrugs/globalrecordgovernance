import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import {
  Home, Shield, Cpu, Globe, Menu, Lock, FileText,
  GraduationCap, Award, BookOpen, Eye, Network,
  Landmark, Languages, ChevronRight, X, Link2,
  Search, BarChart3, Scale, Database, Building,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InstitutionalFooter } from "@/components/InstitutionalFooter";
import { SimulationBanner } from "@/components/SimulationBanner";
import { BackToTop } from "@/components/BackToTop";
import { ReadingProgress } from "@/components/ReadingProgress";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { CookieConsent } from "@/components/CookieConsent";
import { RouteSEO } from "@/components/RouteSEO";
import { useViewMode } from "@/contexts/ViewModeContext";
import { ViewModeBanner, ViewModeFirstVisitTooltip } from "@/components/ViewModeOnboarding";
import { useLanguage } from "@/contexts/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { useIsMobile } from "@/hooks/use-mobile";

/* ── Intelligent Navigation Structure ── */
type NavSection = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: { title: string; path: string; desc?: string }[];
};

const sections: NavSection[] = [
  {
    id: "overview", label: "Overview", icon: Home,
    items: [
      { title: "Home", path: "/", desc: "Framework overview" },
      { title: "The Problem", path: "/the-problem", desc: "Why governance records matter" },
      { title: "Executive Brief", path: "/executive-brief", desc: "For decision makers" },
      { title: "Contact", path: "/contact", desc: "Get in touch" },
    ],
  },
  {
    id: "framework", label: "Framework", icon: Scale,
    items: [
      { title: "Governance Framework", path: "/governance-framework" },
      { title: "Ethics & Safeguards", path: "/ethics" },
      { title: "Standards Compliance", path: "/compliance" },
      { title: "Risk Mitigation", path: "/risk-mitigation" },
      { title: "Recognition & IP", path: "/recognition" },
      { title: "Transparency", path: "/transparency" },
    ],
  },
  {
    id: "standards", label: "International", icon: Globe,
    items: [
      { title: "OECD Alignment", path: "/oecd-alignment" },
      { title: "World Bank", path: "/world-bank-alignment" },
      { title: "UN Alignment", path: "/un-alignment" },
      { title: "UNESCO", path: "/unesco-alignment" },
      { title: "G20 DPI", path: "/g20-dpi-framework" },
      { title: "ITU Standards", path: "/itu-global-standards" },
      { title: "Int'l Compliance", path: "/international-compliance" },
    ],
  },
  {
    id: "anchor-chain", label: "Anchor Chain", icon: Link2,
    items: [
      { title: "Verification System", path: "/anchor-chain", desc: "Core governance verification engine" },
      { title: "Live Chain Monitor", path: "/anchor-chain#live-chain", desc: "Real-time record tracking" },
      { title: "Architecture Layers", path: "/anchor-chain#architecture", desc: "Six-layer deterministic model" },
    ],
  },
  {
    id: "architecture", label: "Architecture", icon: Cpu,
    items: [
      { title: "System Architecture", path: "/architecture" },
      { title: "DPI Stack", path: "/dpi-stack" },
      { title: "Security & Trust", path: "/security-trust" },
      { title: "Interoperability", path: "/interoperability" },
      { title: "Scalability", path: "/scalability" },
      { title: "Technical Blueprints", path: "/blueprints" },
      { title: "Developer Portal", path: "/developer" },
    ],
  },
  {
    id: "deployment", label: "Deployment", icon: Network,
    items: [
      { title: "Deployment Scenarios", path: "/deployment-scenarios" },
      { title: "Canada Hub", path: "/canada" },
      { title: "Sovereign Deployment", path: "/sovereign-deployment" },
      { title: "Deployment Planner", path: "/deployment-planner" },
      { title: "Pilot Evaluation", path: "/pilot-evaluation" },
      { title: "Procurement", path: "/procurement" },
    ],
  },
  {
    id: "intelligence", label: "Intelligence", icon: BarChart3,
    items: [
      { title: "Impact Modeling", path: "/impact-modeling" },
      { title: "Financial Model", path: "/financial-model" },
      { title: "Risk Assessment", path: "/risk-assessment" },
      { title: "Maturity Assessment", path: "/maturity" },
      { title: "Stress Test", path: "/stress-test" },
      { title: "DPI Comparison", path: "/dpi-comparison" },
      { title: "Case Studies", path: "/case-studies" },
    ],
  },
  {
    id: "academy", label: "Academy", icon: GraduationCap,
    items: [
      { title: "GRGF Academy", path: "/academy" },
      { title: "Institutional Readiness", path: "/readiness" },
      { title: "Simulation Engine", path: "/simulation" },
      { title: "Roadmap", path: "/roadmap" },
    ],
  },
  {
    id: "archive", label: "Archive", icon: Database,
    items: [
      { title: "Digital Archive", path: "/archive" },
      { title: "Smart Archive", path: "/archive/intelligent" },
      { title: "Downloads", path: "/archive/downloads" },
      { title: "Submission Hub", path: "/submission-hub" },
      { title: "Research", path: "/research" },
      { title: "Reports", path: "/reports" },
      { title: "Insights", path: "/insights" },
      { title: "Controlled Access", path: "/controlled-access" },
    ],
  },
];

/* ── Smart Search ── */
const allItems = sections.flatMap(s => s.items.map(i => ({ ...i, section: s.label })));

function CommandSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const filtered = query.length > 0
    ? allItems.filter(i => i.title.toLowerCase().includes(query.toLowerCase()) || i.section.toLowerCase().includes(query.toLowerCase()))
    : allItems.slice(0, 8);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]" onClick={onClose}>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl" />
      <div
        className="relative w-full max-w-lg mx-4 bg-card border border-border/40 shadow-2xl overflow-hidden"
        style={{ borderRadius: "16px" }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border/30">
          <Search className="h-4 w-4 text-muted-foreground/40 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search pages..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/30 outline-none"
          />
          <kbd className="text-[10px] font-mono text-muted-foreground/30 px-1.5 py-0.5 border border-border/30 rounded">ESC</kbd>
        </div>
        <div className="max-h-[320px] overflow-y-auto py-2">
          {filtered.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="flex items-center justify-between px-5 py-2.5 hover:bg-accent/5 transition-colors"
            >
              <div>
                <p className="text-sm text-foreground">{item.title}</p>
                <p className="text-[11px] text-muted-foreground/30">{item.section}</p>
              </div>
              <ChevronRight className="h-3 w-3 text-muted-foreground/20" />
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="px-5 py-8 text-sm text-muted-foreground/30 text-center">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Navigation Section (collapsible) ── */
function NavSection({ section, collapsed, onNavigate }: { section: NavSection; collapsed?: boolean; onNavigate?: () => void }) {
  const location = useLocation();
  const hasActive = section.items.some(i => location.pathname === i.path);
  const [open, setOpen] = useState(hasActive);

  return (
    <div className="mb-0.5">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "w-full flex items-center gap-2.5 px-4 py-2 text-[12px] font-medium transition-colors duration-200",
          hasActive ? "text-accent" : "text-muted-foreground/40 hover:text-muted-foreground/70"
        )}
      >
        <section.icon className="h-3.5 w-3.5 shrink-0" />
        {!collapsed && (
          <>
            <span className="flex-1 text-left">{section.label}</span>
            <ChevronRight className={cn("h-3 w-3 transition-transform duration-200", open && "rotate-90")} />
          </>
        )}
      </button>
      {!collapsed && open && (
        <div className="ml-4 pl-3 border-l border-border/15 space-y-px">
          {section.items.map(item => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onNavigate}
                className={cn(
                  "block px-3 py-[6px] text-[13px] rounded-md transition-all duration-200",
                  isActive
                    ? "text-accent font-medium bg-accent/8"
                    : "text-muted-foreground/40 hover:text-foreground/70 hover:bg-muted/30"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── Sidebar ── */
function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex-1 overflow-y-auto py-3 scrollbar-thin" aria-label="Main navigation">
      {sections.map(s => (
        <NavSection key={s.id} section={s} onNavigate={onNavigate} />
      ))}
    </nav>
  );
}

/* ── Main Layout ── */
export function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { mode, toggle, isPlain } = useViewMode();
  const { lang, setLang, t, isRTL } = useLanguage();
  const isMobile = useIsMobile();

  const nextLang = () => {
    const cycle: Record<string, "en" | "fr" | "ar"> = { en: "fr", fr: "ar", ar: "en" };
    setLang(cycle[lang]);
  };

  // Keyboard shortcut: Cmd/Ctrl+K for search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className={cn("flex min-h-screen w-full")} dir={isRTL ? "rtl" : "ltr"}>
      <RouteSEO />
      <CookieConsent />
      <ReadingProgress />
      <KeyboardShortcuts />
      <BackToTop />
      <CommandSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:text-sm focus:rounded-md">
        Skip to main content
      </a>

      {/* ── Desktop Sidebar ── */}
      {!isMobile && (
        <aside className="sticky top-0 h-screen w-[240px] flex flex-col bg-sidebar border-r border-sidebar-border/30 z-50 shrink-0 overflow-hidden">
          {/* Logo */}
          <div className="px-5 py-5 border-b border-sidebar-border/20 shrink-0">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500">
                <span className="text-accent text-xs font-bold">G</span>
              </div>
              <div>
                <h1 className="text-[13px] font-bold tracking-tight text-foreground">GRGF</h1>
                <p className="text-[9px] text-muted-foreground/25 tracking-[0.06em]">Governance Framework</p>
              </div>
            </Link>
          </div>

          {/* Search trigger */}
          <div className="px-3 pt-3 pb-1 shrink-0">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-[12px] text-muted-foreground/30 bg-muted/20 border border-border/15 rounded-lg hover:border-border/30 hover:text-muted-foreground/50 transition-all duration-200"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="flex-1 text-left">Search</span>
              <kbd className="text-[9px] font-mono text-muted-foreground/20 px-1 py-0.5 border border-border/20 rounded">⌘K</kbd>
            </button>
          </div>

          <SidebarContent />

          {/* Footer */}
          <div className="px-5 py-3 border-t border-sidebar-border/15 shrink-0">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse" />
              <p className="text-[9px] text-muted-foreground/25 tracking-wide">Active</p>
            </div>
            <p className="text-[8px] text-muted-foreground/15 leading-relaxed">
              DPI Standards Authority
            </p>
          </div>
        </aside>
      )}

      {/* ── Mobile Sidebar Overlay ── */}
      {isMobile && mobileOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-[280px] h-full bg-sidebar border-r border-sidebar-border/30 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-sidebar-border/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center">
                  <span className="text-accent text-xs font-bold">G</span>
                </div>
                <h1 className="text-[13px] font-bold tracking-tight">GRGF</h1>
              </div>
              <button onClick={() => setMobileOpen(false)} className="p-1.5 hover:bg-muted/30 rounded-lg transition-colors">
                <X className="h-4 w-4 text-muted-foreground/40" />
              </button>
            </div>
            <SidebarContent onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      {/* ── Main Content ── */}
      <div className="flex-1 min-w-0 flex flex-col">
        <ViewModeBanner />
        <SimulationBanner />

        {/* Top Bar — minimal Apple style */}
        <div className="sticky top-0 z-40 acrylic-subtle border-b border-border/15">
          <div className="flex items-center justify-between px-4 py-2 gap-3">
            <div className="flex items-center gap-2 min-w-0">
              {isMobile && (
                <button
                  onClick={() => setMobileOpen(true)}
                  className="p-2 hover:bg-muted/30 rounded-lg transition-colors shrink-0"
                >
                  <Menu className="h-4.5 w-4.5" />
                </button>
              )}
              <Breadcrumbs />
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {!isMobile && (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 hover:bg-muted/30 rounded-lg transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4 text-muted-foreground/40" />
                </button>
              )}
              <button
                onClick={nextLang}
                className="flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground/35 hover:text-accent rounded-lg hover:bg-muted/20 transition-all duration-200"
                aria-label={`Switch language`}
              >
                <Languages className="h-3.5 w-3.5" />
                <span className="font-semibold">{lang.toUpperCase()}</span>
              </button>
              <ViewModeFirstVisitTooltip>
                <div className="flex items-center gap-1.5">
                  <span className={cn("text-[10px] font-medium", isPlain ? "text-accent" : "text-muted-foreground/25")}>
                    {isMobile ? "P" : t("topbar.plain")}
                  </span>
                  <Switch checked={!isPlain} onCheckedChange={toggle} />
                  <span className={cn("text-[10px] font-medium", !isPlain ? "text-accent" : "text-muted-foreground/25")}>
                    {isMobile ? "T" : t("topbar.technical")}
                  </span>
                </div>
              </ViewModeFirstVisitTooltip>
              <Link
                to="/controlled-access"
                className="apple-button bg-accent text-accent-foreground px-3.5 py-1.5 text-[11px] font-semibold hover:brightness-110 duration-300 ml-1"
              >
                <Lock className="h-3 w-3" />
                {isMobile ? "" : "Access"}
              </Link>
            </div>
          </div>
        </div>

        <main id="main-content" className="flex-1" role="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <InstitutionalFooter />
      </div>
    </div>
  );
}
