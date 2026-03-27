import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import {
  Home, Layers, Shield, Cpu, Globe, Menu, Users, Lock, FileText,
  GraduationCap, Award, BookOpen, Handshake, Eye, Building, Network,
  Database, Landmark, Languages, TrendingUp, Code, BarChart3, ClipboardList,
  ChevronUp, ChevronDown,
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
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

/* ── Navigation Layers (IBM Carbon UI Shell pattern) ── */
const layer1 = [
  { title: "Home", path: "/", icon: Home },
  { title: "The Problem", path: "/the-problem", icon: Eye },
  { title: "Transparency", path: "/transparency", icon: Eye },
  { title: "Governance", path: "/governance-framework", icon: Landmark },
  { title: "Membership", path: "/membership", icon: Building },
  { title: "Contact", path: "/contact", icon: Users },
];

const layer2 = [
  { title: "Recognition", path: "/recognition", icon: Award },
  { title: "OECD Alignment", path: "/oecd-alignment", icon: Layers },
  { title: "World Bank", path: "/world-bank-alignment", icon: Landmark },
  { title: "UN Alignment", path: "/un-alignment", icon: Globe },
  { title: "Ethics", path: "/ethics", icon: Shield },
  { title: "Compliance", path: "/compliance", icon: FileText },
  { title: "Int'l Compliance", path: "/international-compliance", icon: Globe },
];

const layer3 = [
  { title: "Architecture", path: "/architecture", icon: Cpu },
  { title: "DPI Stack", path: "/dpi-stack", icon: Layers },
  { title: "Security & Trust", path: "/security-trust", icon: Lock },
  { title: "Safeguards", path: "/safeguards-trust", icon: Shield },
  { title: "Scalability", path: "/scalability", icon: TrendingUp },
  { title: "Deployment", path: "/deployment-scenarios", icon: Globe },
  { title: "Interoperability", path: "/interoperability", icon: Network },
  { title: "Developer", path: "/developer", icon: Code },
  { title: "Academy", path: "/academy", icon: GraduationCap },
  { title: "Simulation", path: "/simulation", icon: Cpu },
];

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

const layer5 = [
  { title: "Submission Hub", path: "/submission-hub", icon: Globe },
  { title: "Insights", path: "/insights", icon: BookOpen },
  { title: "Institutional Review", path: "/institutional-review", icon: ClipboardList },
  { title: "Archive", path: "/archive", icon: FileText },
  { title: "Reports", path: "/reports", icon: BookOpen },
  { title: "Research", path: "/research", icon: BookOpen },
  { title: "Whitepaper", path: "/whitepaper", icon: FileText },
  { title: "Partnerships", path: "/partnerships", icon: Handshake },
  { title: "Controlled Access", path: "/controlled-access", icon: Lock },
];

type NavItem = { title: string; path: string; icon: React.ComponentType<{ className?: string }> };

function NavGroup({ items, collapsed, onNavigate, label }: { items: NavItem[]; collapsed?: boolean; onNavigate?: () => void; label?: string }) {
  const location = useLocation();
  return (
    <div>
      {label && !collapsed && (
        <p className="px-5 pt-6 pb-1.5 text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.12em] font-medium">{label}</p>
      )}
      {items.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            key={item.path}
            to={item.path}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 px-4 py-[7px] mx-2 text-[13px] rounded-md transition-all duration-200",
              isActive
                ? "bg-accent/10 text-accent font-medium"
                : "text-sidebar-foreground/50 hover:text-sidebar-foreground/90 hover:bg-sidebar-accent/40"
            )}
            title={collapsed ? item.title : undefined}
          >
            <item.icon className={cn("h-[14px] w-[14px] shrink-0", isActive ? "text-accent" : "")} />
            {!collapsed && <span>{item.title}</span>}
          </Link>
        );
      })}
    </div>
  );
}

function SidebarNav({ collapsed, onNavigate }: { collapsed?: boolean; onNavigate?: () => void }) {
  const navRef = useRef<HTMLElement>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  const checkScroll = useCallback(() => {
    const el = navRef.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 20);
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 20);
  }, []);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    checkScroll();
    const t1 = setTimeout(checkScroll, 200);
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      clearTimeout(t1);
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
        <button onClick={() => scrollTo("top")}
          className="absolute top-0 left-0 right-0 z-10 flex justify-center py-1.5 bg-gradient-to-b from-sidebar via-sidebar/90 to-transparent text-muted-foreground/20 hover:text-accent transition-colors"
          aria-label="Scroll navigation up">
          <ChevronUp className="h-3 w-3" />
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
        <button onClick={() => scrollTo("bottom")}
          className="absolute bottom-0 left-0 right-0 z-10 flex justify-center py-1.5 bg-gradient-to-t from-sidebar via-sidebar/90 to-transparent text-muted-foreground/20 hover:text-accent transition-colors"
          aria-label="Scroll navigation down">
          <ChevronDown className="h-3 w-3" />
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
    <div className={cn("flex min-h-screen w-full")} dir={isRTL ? "rtl" : "ltr"}>
      <RouteSEO />
      <CookieConsent />
      <ReadingProgress />
      <KeyboardShortcuts />
      <BackToTop />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:text-sm focus:rounded-md">
        Skip to main content
      </a>

      {/* ── Desktop Sidebar ── */}
      {!isMobile && (
        <aside className="sticky top-0 h-screen w-[260px] flex flex-col bg-sidebar border-r border-sidebar-border/50 z-50 shrink-0 overflow-hidden">
          {/* Header */}
          <div className="px-5 py-5 border-b border-sidebar-border/40 shrink-0">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center group-hover:bg-accent/15 transition-all duration-500">
                <span className="text-accent text-sm font-bold">G</span>
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-tight text-foreground">GRGF</h1>
                <p className="text-[9px] text-muted-foreground/25 tracking-[0.08em]">
                  Governance Framework
                </p>
              </div>
            </Link>
          </div>

          <SidebarNav />

          {/* Footer */}
          <div className="px-5 py-4 border-t border-sidebar-border/30 shrink-0">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-pulse-glow" />
              <p className="text-[9px] text-accent/40 tracking-[0.08em]">System Active</p>
            </div>
            <p className="text-[9px] text-muted-foreground/15 leading-relaxed">
              Digital Public Infrastructure<br />Standards Authority · Est. 2024
            </p>
          </div>
        </aside>
      )}

      {/* ── Main Content ── */}
      <div className="flex-1 min-w-0 flex flex-col">
        <ViewModeBanner />
        <SimulationBanner />

        {/* Top Bar */}
        <div className="sticky top-0 z-40 acrylic-subtle border-b border-border/20">
          <div className="flex items-center justify-between px-5 py-2.5 gap-3">
            <div className="flex items-center gap-2 min-w-0">
              {isMobile && (
                <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                  <SheetTrigger asChild>
                    <button className="p-2 hover:bg-foreground/[0.04] rounded-lg transition-colors duration-300 shrink-0">
                      <Menu className="h-5 w-5" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[280px] bg-sidebar text-sidebar-foreground p-0 flex flex-col border-r border-sidebar-border/50">
                    <SheetTitle className="sr-only">Navigation</SheetTitle>
                    <div className="px-5 py-5 border-b border-sidebar-border/40">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                          <span className="text-accent text-sm font-bold">G</span>
                        </div>
                        <div>
                          <h1 className="text-sm font-bold tracking-tight">GRGF</h1>
                          <p className="text-[9px] text-muted-foreground/25 tracking-[0.08em]">
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
                className="apple-button bg-accent text-accent-foreground px-4 py-1.5 text-[12px] font-semibold hover:brightness-110 hover:shadow-lg hover:shadow-accent/15 duration-500"
              >
                <Lock className="h-3 w-3" />
                {isMobile ? "Access" : "Request Assessment"}
              </Link>
              <button
                onClick={nextLang}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground/40 hover:text-accent rounded-lg hover:bg-foreground/[0.04] transition-all duration-300"
                aria-label={`Switch language (current: ${lang.toUpperCase()})`}
              >
                <Languages className="h-3.5 w-3.5" />
                <span className="font-semibold">{langLabel[lang]}</span>
              </button>
              <ViewModeFirstVisitTooltip>
                <div className="flex items-center gap-1.5 ml-0.5">
                  <span className={cn("text-[11px] font-medium", isPlain ? "text-accent" : "text-muted-foreground/30")}>
                    {isMobile ? t("topbar.plain_short") : t("topbar.plain")}
                  </span>
                  <Switch checked={!isPlain} onCheckedChange={toggle} />
                  <span className={cn("text-[11px] font-medium", !isPlain ? "text-accent" : "text-muted-foreground/30")}>
                    {isMobile ? t("topbar.tech_short") : t("topbar.technical")}
                  </span>
                </div>
              </ViewModeFirstVisitTooltip>
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