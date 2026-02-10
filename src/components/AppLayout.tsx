import { Link, useLocation } from "react-router-dom";
import {
  Home, BookOpen, Layers, Shield, Play, BarChart3, FileCheck,
  ChevronLeft, ChevronRight, Cpu, GitBranch, GraduationCap, Globe, Menu, Users, Lock, CheckCircle, FileText, AlertTriangle, Building2,
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

const navItems = [
  { title: "Home", path: "/", icon: Home },
  { title: "Architecture", path: "/architecture", icon: Layers },
  { title: "Security & Trust", path: "/security-trust", icon: Shield },
  { title: "Governance", path: "/governance-framework", icon: GitBranch },
  { title: "Risk & Ethics", path: "/ethics", icon: AlertTriangle },
  { title: "Deployment", path: "/deployment", icon: Globe },
  { title: "Canada Federal", path: "/canada", icon: Building2 },
  { title: "Impact & ROI", path: "/impact", icon: BarChart3 },
  { title: "Stakeholders", path: "/stakeholders", icon: Users },
  { title: "Compliance", path: "/compliance", icon: CheckCircle },
  { title: "Executive Dossier", path: "/dossier", icon: FileText },
  { title: "Briefing Request", path: "/briefing", icon: Lock },
  { title: "Simulation", path: "/simulation", icon: Play },
  { title: "Systems", path: "/systems", icon: Cpu },
  { title: "Processes", path: "/processes", icon: GitBranch },
  { title: "Blueprints", path: "/blueprints", icon: Layers },
  { title: "Pilot Programme", path: "/pilot", icon: Globe },
  { title: "Academy", path: "/academy", icon: GraduationCap },
  { title: "Digital Archive", path: "/archive", icon: Shield },
];

function SidebarNav({ collapsed, onNavigate }: { collapsed?: boolean; onNavigate?: () => void }) {
  const location = useLocation();

  return (
    <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
      {navItems.map((item) => {
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
            "sticky top-0 h-screen flex flex-col bg-primary text-primary-foreground border-r border-sidebar-border transition-all duration-300 z-50",
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
