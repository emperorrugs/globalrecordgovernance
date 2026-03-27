import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home, Layers, Shield, Cpu, Globe, Menu, Users, Lock, FileText,
  GraduationCap, Award, BookOpen, Handshake, Eye, Building, Network,
  Database, Landmark, Languages, TrendingUp, Code, BarChart3, ClipboardList,
  ChevronUp, ChevronDown, Sparkles,
} from "lucide-react";
import { useState } from "react";
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
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

/* ── LAYER 1: Institutional Authority ── */
const layer1 = [
  { title: "Home", path: "/", icon: Home },
  { title: "The Problem", path: "/the-problem", icon: Eye },
  { title: "Transparency & Governance", path: "/transparency", icon: Eye },
  { title: "Governance Framework", path: "/governance-framework", icon: Landmark },
  { title: "Membership & Advisory", path: "/membership", icon: Building },
  { title: "Contact", path: "/contact", icon: Users },
];

/* ── LAYER 2: Standards & Recognition ── */
const layer2 = [
  { title: "Recognition Framework", path: "/recognition", icon: Award },
  { title: "OECD Alignment", path: "/oecd-alignment", icon: Layers },
  { title: "World Bank Alignment", path: "/world-bank-alignment", icon: Landmark },
  { title: "UN Alignment", path: "/un-alignment", icon: Globe },
  { title: "Governance Ethics", path: "/ethics", icon: Shield },
  { title: "Compliance Mapping", path: "/compliance", icon: FileText },
  { title: "International Compliance", path: "/international-compliance", icon: Globe },
];

/* ── LAYER 3: DPI Platform ── */
const layer3 = [
  { title: "Architecture", path: "/architecture", icon: Cpu },
  { title: "DPI Stack", path: "/dpi-stack", icon: Layers },
  { title: "Security & Trust", path: "/security-trust", icon: Lock },
  { title: "Safeguards & Trust", path: "/safeguards-trust", icon: Shield },
  { title: "Scalability", path: "/scalability", icon: TrendingUp },
  { title: "Deployment Model", path: "/deployment-scenarios", icon: Globe },
  { title: "Interoperability", path: "/interoperability", icon: Network },
  { title: "Developer Portal", path: "/developer", icon: Code },
  { title: "Academy", path: "/academy", icon: GraduationCap },
  { title: "Simulation", path: "/simulation", icon: Cpu },
];

/* ── LAYER 4: Decision Tools ── */
const layer4 = [
  { title: "Impact Modeling", path: "/impact-modeling", icon: BarChart3 },
  { title: "Financial Model", path: "/financial-model", icon: BarChart3 },
  { title: "Risk Assessment", path: "/risk-assessment", icon: Shield },
  { title: "Risk Mitigation", path: "/risk-mitigation", icon: Shield },
  { title: "Deployment Planner", path: "/deployment-planner", icon: Globe },
  { title: "Procurement", path: "/procurement", icon: ClipboardList },
  { title: "Maturity", path: "/maturity", icon: TrendingUp },
  { title: "Stress Test", path: "/stress-test", icon: Shield },
  { title: "Executive Brief", path: "/executive-brief", icon: FileText },
  { title: "DPI Comparison", path: "/dpi-comparison", icon: Layers },
];

/* ── LAYER 5: Digital Archive & Insights ── */
const layer5 = [
  { title: "Submission Hub", path: "/submission-hub", icon: Globe },
  { title: "Insights & Research", path: "/insights", icon: BookOpen },
  { title: "Institutional Review", path: "/institutional-review", icon: ClipboardList },
  { title: "Archive", path: "/archive", icon: FileText },
  { title: "Reports & Studies", path: "/reports", icon: BookOpen },
  { title: "Research & Publications", path: "/research", icon: BookOpen },
  { title: "Whitepaper", path: "/whitepaper", icon: FileText },
  { title: "Global Partnerships", path: "/partnerships", icon: Handshake },
  { title: "Controlled Access", path: "/controlled-access", icon: Lock },
];

type NavItem = { title: string; path: string; icon: React.ComponentType<{ className?: string }> };

function NavGroup({ items, collapsed, onNavigate, label }: { items: NavItem[]; collapsed?: boolean; onNavigate?: () => void; label?: string }) {
  const location = useLocation();
  return (
    <div>
      {label && !collapsed && (
        <p className="px-4 pt-6 pb-2 text-overline font-mono text-accent/40 uppercase tracking-[0.15em]">{label}</p>
      )}
      {items.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link aria-current={isActive ? "page" : undefined}
            key={item.path}
            to={item.path}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 px-4 py-2 mx-2 text-sm rounded-md transition-all duration-300",
              isActive
                ? "bg-accent/10 text-accent font-medium"
                : "text-sidebar-foreground/50 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
            )}
            title={collapsed ? item.title : undefined}
          >
            <item.icon className={cn("h-3.5 w-3.5 shrink-0 transition-colors", isActive ? "text-accent" : "")} />
            {!collapsed && <span className="text-caption">{item.title}</span>}
          </Link>
        );
      })}
    </div>
  );
}

function SidebarNav({ collapsed, onNavigate }: { collapsed?: boolean; onNavigate?: () => void }) {
  const navRef = React.useRef<HTMLElement>(null);
  const [canScrollUp, setCanScrollUp] = React.useState(false);
  const [canScrollDown, setCanScrollDown] = React.useState(true);

  const checkScroll = React.useCallback(() => {
    const el = navRef.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 20);
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 20);
  }, []);

  React.useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    checkScroll();
    const t1 = setTimeout(checkScroll, 200);
    const t2 = setTimeout(checkScroll, 600);
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);

  const scrollTo = (dir: "top" | "bottom") => {
    navRef.current?.scrollTo({ top: dir === "top" ? 0 : navRef.current.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
      {canScrollUp && (
        <button
          onClick={() => scrollTo("top")}
          className="absolute top-0 left-0 right-0 z-10 flex justify-center py-1.5 bg-gradient-to-b from-sidebar via-sidebar/90 to-transparent text-sidebar-foreground/30 hover:text-accent transition-colors"
          aria-label="Scroll navigation up"
        >
          <ChevronUp className="h-3.5 w-3.5" />
        </button>
      )}
      <nav ref={navRef} className="h-0 flex-grow py-2 overflow-y-auto" aria-label="Main navigation">
        <NavGroup items={layer1} collapsed={collapsed} onNavigate={onNavigate} label="Authority" />
        <NavGroup items={layer2} collapsed={collapsed} onNavigate={onNavigate} label="Standards" />
        <NavGroup items={layer3} collapsed={collapsed} onNavigate={onNavigate} label="Platform" />
        <NavGroup items={layer4} collapsed={collapsed} onNavigate={onNavigate} label="Decision Tools" />
        <NavGroup items={layer5} collapsed={collapsed} onNavigate={onNavigate} label="Archive" />
      </nav>
      {canScrollDown && (
        <button
          onClick={() => scrollTo("bottom")}
          className="absolute bottom-0 left-0 right-0 z-10 flex justify-center py-1.5 bg-gradient-to-t from-sidebar via-sidebar/90 to-transparent text-sidebar-foreground/30 hover:text-accent transition-colors"
          aria-label="Scroll navigation down"
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { mode, toggle, isPlain } = useViewMode();
  const { lang, setLang, t, isRTL } = useLanguage();
  const isMobile = useIsMobile();

  const nextLang = () => {
    const cycle: Record<string, "en" | "fr" | "ar"> = { en: "fr", fr: "ar", ar: "en" };
    setLang(cycle[lang]);
  };

  const langLabel: Record<string, string> = { en: "FR", fr: "AR", ar: "EN" };

  return (
    <div className={cn("flex min-h-screen w-full", isRTL && "font-sans")} dir={isRTL ? "rtl" : "ltr"}>
      <RouteSEO />
      <CookieConsent />
      <ReadingProgress />
      <KeyboardShortcuts />
      <BackToTop />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:text-sm focus:rounded-md">
        Skip to main content
      </a>

      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside className="sticky top-0 h-screen w-72 flex flex-col bg-sidebar border-r border-sidebar-border z-50 shrink-0 overflow-hidden">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border shrink-0">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                <span className="text-accent text-sm font-mono font-bold">G</span>
              </div>
              <div>
                <h1 className="font-serif text-base font-semibold tracking-wide text-foreground">GRGF</h1>
                <p className="text-[10px] font-mono text-sidebar-foreground/30 uppercase tracking-[0.12em] leading-tight">
                  Governance Framework
                </p>
              </div>
            </Link>
          </div>

          <SidebarNav />

          {/* Bottom */}
          <div className="p-5 border-t border-sidebar-border shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
              <p className="text-[10px] font-mono text-accent/60 uppercase tracking-widest">System Active</p>
            </div>
            <p className="text-[10px] text-sidebar-foreground/25 font-mono leading-relaxed">
              Digital Public Infrastructure
              <br />
              Standards Authority · Est. 2024
            </p>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        <ViewModeBanner />
        <SimulationBanner />
        
        {/* Top Bar */}
        <div className="sticky top-0 z-40 glass-subtle border-b border-border/50">
          <div className="flex items-center justify-between px-5 py-2.5 gap-2">
            <div className="flex items-center gap-2 min-w-0">
              {isMobile && (
                <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                  <SheetTrigger asChild>
                    <button className="p-2 hover:bg-accent/10 rounded-md transition-colors shrink-0">
                      <Menu className="h-5 w-5" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-72 bg-sidebar text-sidebar-foreground p-0 flex flex-col border-r border-sidebar-border">
                    <SheetTitle className="sr-only">Navigation</SheetTitle>
                    <div className="p-5 border-b border-sidebar-border">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                          <span className="text-accent text-xs font-mono font-bold">G</span>
                        </div>
                        <div>
                          <h1 className="font-serif text-sm font-semibold tracking-wide">GRGF</h1>
                          <p className="text-[10px] font-mono text-sidebar-foreground/30 uppercase tracking-widest leading-tight">
                            Governance Framework
                          </p>
                        </div>
                      </div>
                    </div>
                    <SidebarNav onNavigate={() => setMobileOpen(false)} />
                  </SheetContent>
                </Sheet>
              )}
              <Breadcrumbs />
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/controlled-access"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent text-accent-foreground text-overline font-semibold tracking-wide rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02]"
              >
                <Lock className="h-3 w-3" />
                {isMobile ? "Access" : "Request Assessment"}
              </Link>
              <button
                onClick={nextLang}
                className="flex items-center gap-1 px-2.5 py-1.5 text-overline font-mono text-muted-foreground hover:text-accent rounded-md hover:bg-accent/5 transition-all duration-300"
                aria-label={`Switch language (current: ${lang.toUpperCase()})`}
              >
                <Languages className="h-3.5 w-3.5" />
                <span className="font-semibold">{langLabel[lang]}</span>
              </button>
              <ViewModeFirstVisitTooltip>
                <div className="flex items-center gap-1.5 ml-1">
                  <span className={cn("text-overline font-mono", isPlain ? "text-accent font-semibold" : "text-muted-foreground")}>
                    {isMobile ? t("topbar.plain_short") : t("topbar.plain")}
                  </span>
                  <Switch checked={!isPlain} onCheckedChange={toggle} />
                  <span className={cn("text-overline font-mono", !isPlain ? "text-accent font-semibold" : "text-muted-foreground")}>
                    {isMobile ? t("topbar.tech_short") : t("topbar.technical")}
                  </span>
                </div>
              </ViewModeFirstVisitTooltip>
            </div>
          </div>
        </div>

        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <InstitutionalFooter />
      </div>
    </div>
  );
}
