import { Link, useLocation } from "react-router-dom";
import {
  Home, BookOpen, Layers, Shield, Play, BarChart3, FileCheck, Monitor, HelpCircle, ClipboardCheck, Search,
  ChevronLeft, ChevronRight, Cpu, GitBranch, GraduationCap, Globe, Menu, Users, Lock, CheckCircle, FileText, AlertTriangle, Building2, Server,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InstitutionalFooter } from "@/components/InstitutionalFooter";
import { SimulationBanner } from "@/components/SimulationBanner";
import { useViewMode } from "@/contexts/ViewModeContext";
import { Switch } from "@/components/ui/switch";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

/* ── Primary navigation (12-item OECD-aligned structure) ── */
const primaryNav = [
  { title: "Executive Overview", path: "/", icon: Home },
  { title: "DPI Stack Position", path: "/dpi-stack", icon: Layers },
  { title: "Technical Architecture", path: "/architecture", icon: Cpu },
  { title: "Safeguards & Trust", path: "/safeguards-trust", icon: Shield },
  { title: "Strategic Governance", path: "/strategic-governance", icon: GitBranch },
  { title: "Operational Model", path: "/operational-model", icon: BarChart3 },
  { title: "Deployment Scenarios", path: "/deployment-scenarios", icon: Globe },
  { title: "Risk & Mitigation", path: "/risk-mitigation", icon: AlertTriangle },
  { title: "OECD Alignment", path: "/oecd-alignment", icon: CheckCircle },
  { title: "International", path: "/international-cooperation", icon: Globe },
  { title: "Archive & API", path: "/archive", icon: FileText },
  { title: "Institutional Contact", path: "/contact", icon: Users },
];

/* ── Extended navigation (secondary pages) ── */
const secondaryNav = [
  { title: "The Problem", path: "/the-problem", icon: AlertTriangle },
  { title: "Impact & ROI", path: "/impact-modeling", icon: BarChart3 },
  { title: "Pilot Evaluation", path: "/pilot-evaluation", icon: Server },
  { title: "Controlled Access", path: "/controlled-access", icon: Lock },
  { title: "Canada Federal", path: "/canada", icon: Building2 },
  { title: "Stakeholders", path: "/stakeholders", icon: Users },
  { title: "Compliance", path: "/compliance", icon: CheckCircle },
  { title: "Readiness", path: "/readiness", icon: ClipboardCheck },
  { title: "Simulation", path: "/simulation", icon: Play },
  { title: "DPI Comparison", path: "/dpi-comparison", icon: BarChart3 },
  { title: "Academy", path: "/academy", icon: GraduationCap },
  { title: "Sitemap", path: "/sitemap", icon: FileCheck },
];

function NavGroup({ items, collapsed, onNavigate }: { items: typeof primaryNav; collapsed?: boolean; onNavigate?: () => void }) {
  const location = useLocation();
  return (
    <>
      {items.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-all duration-150",
              isActive
                ? "bg-sidebar-accent text-sidebar-primary font-medium"
                : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
            )}
            title={collapsed ? item.title : undefined}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {!collapsed && <span className="text-xs">{item.title}</span>}
          </Link>
        );
      })}
    </>
  );
}

function SidebarNav({ collapsed, onNavigate }: { collapsed?: boolean; onNavigate?: () => void }) {
  return (
    <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
      <NavGroup items={primaryNav} collapsed={collapsed} onNavigate={onNavigate} />
      {!collapsed && (
        <div className="pt-3 mt-3 border-t border-sidebar-border">
          <p className="px-3 text-[9px] font-mono text-sidebar-foreground/40 uppercase tracking-wider mb-2">Extended</p>
        </div>
      )}
      <NavGroup items={secondaryNav} collapsed={collapsed} onNavigate={onNavigate} />
    </nav>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { mode, toggle, isPlain } = useViewMode();
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen w-full">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside
          className={cn(
            "sticky top-0 h-screen flex flex-col bg-primary border-r border-border transition-all duration-300 z-50",
            collapsed ? "w-16" : "w-64"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            {!collapsed && (
              <div>
                <h1 className="font-serif text-sm font-semibold tracking-wide">GRGF</h1>
                <p className="text-[10px] text-sidebar-foreground/60 mt-0.5 leading-tight">
                  Global Record Governance Framework
                </p>
              </div>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1.5 rounded-sm hover:bg-sidebar-accent transition-colors text-sidebar-foreground/70 hover:text-sidebar-foreground"
            >
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
          </div>

          <SidebarNav collapsed={collapsed} />

          {!collapsed && (
            <div className="p-4 border-t border-sidebar-border">
              <p className="text-[10px] text-sidebar-foreground/40 leading-relaxed">
                Digital Public Infrastructure
                <br />
                Est. 2024 · Read-Only Reference
              </p>
            </div>
          )}
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        <SimulationBanner />
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border px-4 py-2 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            {/* Mobile hamburger */}
            {isMobile && (
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <button className="p-1.5 rounded-sm hover:bg-muted transition-colors shrink-0">
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 bg-primary text-primary-foreground p-0">
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <div className="p-4 border-b border-sidebar-border">
                    <h1 className="font-serif text-sm font-semibold tracking-wide">GRGF</h1>
                    <p className="text-[10px] text-sidebar-foreground/60 mt-0.5 leading-tight">
                      Global Record Governance Framework
                    </p>
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground text-[11px] font-medium rounded-sm hover:bg-accent/90 transition-colors"
            >
              <Lock className="h-3 w-3" />
              {isMobile ? "Access" : "Request Pilot Access"}
            </Link>
            <span className={cn("text-xs font-mono", isPlain ? "text-accent font-semibold" : "text-muted-foreground")}>
              {isMobile ? "Plain" : "Plain English"}
            </span>
            <Switch checked={!isPlain} onCheckedChange={toggle} />
            <span className={cn("text-xs font-mono", !isPlain ? "text-accent font-semibold" : "text-muted-foreground")}>
              {isMobile ? "Tech" : "Technical"}
            </span>
          </div>
        </div>
        <main className="flex-1">
          {children}
        </main>
        <InstitutionalFooter />
      </div>
    </div>
  );
}
