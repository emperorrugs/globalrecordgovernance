import { Link, useLocation } from "react-router-dom";
import {
  Home, Layers, Shield, Cpu, Globe, Menu, Users, Lock, FileText,
  GraduationCap, Award, BookOpen, Handshake, Eye, Building, Network,
  Database, Landmark, Languages, TrendingUp, Code, BarChart3, ClipboardList,
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
import { useLanguage } from "@/contexts/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
/* ── LAYER 1: Institutional Authority ── */
const layer1 = [
  { title: "Home", path: "/", icon: Home },
  { title: "Transparency & Governance", path: "/transparency", icon: Eye },
  { title: "Membership & Advisory", path: "/membership", icon: Building },
  { title: "Contact", path: "/contact", icon: Users },
];

/* ── LAYER 2: Standards & Recognition ── */
const layer2 = [
  { title: "Recognition Framework", path: "/recognition", icon: Award },
  { title: "Institutional Alignment", path: "/oecd-alignment", icon: Layers },
  { title: "Governance Ethics", path: "/ethics", icon: Shield },
  { title: "Compliance", path: "/compliance", icon: FileText },
];

/* ── LAYER 3: DPI Platform ── */
const layer3 = [
  { title: "Architecture", path: "/architecture", icon: Cpu },
  { title: "DPI Stack", path: "/dpi-stack", icon: Layers },
  { title: "Scalability", path: "/scalability", icon: TrendingUp },
  { title: "Safeguards & Trust", path: "/safeguards-trust", icon: Shield },
  { title: "Deployment Model", path: "/deployment-scenarios", icon: Globe },
  { title: "Developer Portal", path: "/developer", icon: Code },
  { title: "Academy", path: "/academy", icon: GraduationCap },
];

/* ── LAYER 4: Digital Archive ── */
const layer4 = [
  { title: "Institutional Review", path: "/institutional-review", icon: ClipboardList },
  { title: "Financial Model", path: "/financial-model", icon: BarChart3 },
  { title: "Archive", path: "/archive", icon: FileText },
  { title: "Research & Publications", path: "/research", icon: BookOpen },
  { title: "Global Partnerships", path: "/partnerships", icon: Handshake },
  { title: "Controlled Access", path: "/controlled-access", icon: Lock },
];

type NavItem = { title: string; path: string; icon: React.ComponentType<{ className?: string }> };

function NavGroup({ items, collapsed, onNavigate, label }: { items: NavItem[]; collapsed?: boolean; onNavigate?: () => void; label?: string }) {
  const location = useLocation();
  return (
    <div>
      {label && !collapsed && (
        <p className="px-3 pt-5 pb-2 text-overline font-mono text-sidebar-foreground/30 uppercase tracking-widest">{label}</p>
      )}
      {items.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link aria-current={isActive ? "page" : undefined}
            key={item.path}
            to={item.path}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-200",
              isActive
                ? "bg-sidebar-accent text-accent font-medium border-l-2 border-accent -ml-px"
                : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/40 border-l-2 border-transparent -ml-px"
            )}
            title={collapsed ? item.title : undefined}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {!collapsed && <span className="text-caption">{item.title}</span>}
          </Link>
        );
      })}
    </div>
  );
}

function SidebarNav({ collapsed, onNavigate }: { collapsed?: boolean; onNavigate?: () => void }) {
  return (
    <nav className="flex-1 py-2 px-2 overflow-y-auto min-h-0" aria-label="Main navigation">
      <NavGroup items={layer1} collapsed={collapsed} onNavigate={onNavigate} label="Authority" />
      <NavGroup items={layer2} collapsed={collapsed} onNavigate={onNavigate} label="Standards" />
      <NavGroup items={layer3} collapsed={collapsed} onNavigate={onNavigate} label="Platform" />
      <NavGroup items={layer4} collapsed={collapsed} onNavigate={onNavigate} label="Archive" />
    </nav>
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
      {/* Skip to content - accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:text-sm">
        Skip to main content
      </a>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside className="sticky top-0 h-screen w-64 flex flex-col bg-primary border-r border-border z-50 shrink-0 overflow-hidden">
          <div className="p-5 border-b border-sidebar-border">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground text-xs font-mono font-bold">G</span>
              </div>
              <div>
                <h1 className="font-serif text-sm font-semibold tracking-wide text-primary-foreground">GRGF</h1>
                <p className="text-overline text-sidebar-foreground/40 leading-tight">
                  Governance Foundation
                </p>
              </div>
            </Link>
          </div>

          <SidebarNav />

          <div className="p-5 border-t border-sidebar-border">
            <p className="text-overline text-sidebar-foreground/30 leading-relaxed">
              Digital Public Infrastructure
              <br />
              Standards Authority · Est. 2024
            </p>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        <SimulationBanner />
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border px-5 py-2.5 gap-2 bg-card">
          <div className="flex items-center gap-2 min-w-0">
            {/* Mobile hamburger */}
            {isMobile && (
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <button className="p-1.5 hover:bg-muted transition-colors shrink-0">
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 bg-primary text-primary-foreground p-0">
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <div className="p-5 border-b border-sidebar-border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent flex items-center justify-center">
                        <span className="text-accent-foreground text-xs font-mono font-bold">G</span>
                      </div>
                      <div>
                        <h1 className="font-serif text-sm font-semibold tracking-wide">GRGF</h1>
                        <p className="text-overline text-sidebar-foreground/40 leading-tight">
                          Governance Foundation
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
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              to="/controlled-access"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent text-accent-foreground text-overline font-semibold tracking-wide transition-colors hover:bg-accent/90"
            >
              <Lock className="h-3 w-3" />
              {isMobile ? "Access" : "Request Assessment"}
            </Link>
            <button
              onClick={nextLang}
              className="flex items-center gap-1 px-2 py-1 text-overline font-mono text-muted-foreground hover:text-accent transition-colors"
              aria-label={`Switch language (current: ${lang.toUpperCase()})`}
            >
              <Languages className="h-3.5 w-3.5" />
              <span className="font-semibold">{langLabel[lang]}</span>
            </button>
            <div className="flex items-center gap-1.5 ml-1">
              <span className={cn("text-overline font-mono", isPlain ? "text-accent font-semibold" : "text-muted-foreground")}>
                {isMobile ? t("topbar.plain_short") : t("topbar.plain")}
              </span>
              <Switch checked={!isPlain} onCheckedChange={toggle} />
              <span className={cn("text-overline font-mono", !isPlain ? "text-accent font-semibold" : "text-muted-foreground")}>
                {isMobile ? t("topbar.tech_short") : t("topbar.technical")}
              </span>
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
