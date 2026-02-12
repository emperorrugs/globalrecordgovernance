import { Link, useLocation } from "react-router-dom";
import {
  Home, Layers, Shield, Cpu, Globe, Menu, Users, Lock, FileText,
  GraduationCap,
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

/* ── Primary navigation (8-item institutional structure) ── */
const primaryNav = [
  { title: "Home", path: "/", icon: Home },
  { title: "Architecture", path: "/architecture", icon: Cpu },
  { title: "Institutional Alignment", path: "/oecd-alignment", icon: Layers },
  { title: "Deployment Model", path: "/deployment-scenarios", icon: Globe },
  { title: "Evidence & Assurance", path: "/safeguards-trust", icon: Shield },
  { title: "Archive", path: "/archive", icon: FileText },
  { title: "Academy", path: "/academy", icon: GraduationCap },
  { title: "Contact", path: "/contact", icon: Users },
];

/* ── Extended navigation (secondary / deep-dive pages) ── */
const secondaryNav = [
  { title: "DPI Stack Position", path: "/dpi-stack", icon: Layers },
  { title: "Strategic Governance", path: "/strategic-governance", icon: Shield },
  { title: "Operational Model", path: "/operational-model", icon: Cpu },
  { title: "Risk & Mitigation", path: "/risk-mitigation", icon: Shield },
  { title: "International", path: "/international-cooperation", icon: Globe },
  { title: "Pilot Evaluation", path: "/pilot-evaluation", icon: FileText },
  { title: "DPI Comparison", path: "/dpi-comparison", icon: Layers },
  { title: "Controlled Access", path: "/controlled-access", icon: Lock },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { mode, toggle, isPlain } = useViewMode();
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen w-full">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside className="sticky top-0 h-screen w-64 flex flex-col bg-primary border-r border-border z-50 shrink-0">
          <div className="p-4 border-b border-sidebar-border">
            <h1 className="font-serif text-sm font-semibold tracking-wide text-primary-foreground">GRGF</h1>
            <p className="text-[10px] text-sidebar-foreground/60 mt-0.5 leading-tight">
              Global Record Governance Framework
            </p>
          </div>

          <SidebarNav />

          <div className="p-4 border-t border-sidebar-border">
            <p className="text-[10px] text-sidebar-foreground/40 leading-relaxed">
              Digital Public Infrastructure
              <br />
              Est. 2024 · Read-Only Reference
            </p>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        <SimulationBanner />
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border px-4 py-2 gap-2 bg-card">
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-[11px] font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              <Lock className="h-3 w-3" />
              {isMobile ? "Access" : "Request Pilot Access"}
            </Link>
            <span className={cn("text-xs font-mono", isPlain ? "text-primary font-semibold" : "text-muted-foreground")}>
              {isMobile ? "Plain" : "Plain English"}
            </span>
            <Switch checked={!isPlain} onCheckedChange={toggle} />
            <span className={cn("text-xs font-mono", !isPlain ? "text-primary font-semibold" : "text-muted-foreground")}>
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