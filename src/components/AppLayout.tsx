import { Link, useLocation } from "react-router-dom";
import {
  Home, BookOpen, Layers, Play, ShieldCheck, Briefcase, Archive,
  Shield, Lock, Fingerprint, Mail, ChevronLeft, ChevronRight, Globe, GraduationCap,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InstitutionalFooter } from "@/components/InstitutionalFooter";
import { useViewMode } from "@/contexts/ViewModeContext";
import { Switch } from "@/components/ui/switch";

const navItems = [
  { title: "Home", path: "/", icon: Home },
  { title: "What Is GRGF", path: "/what-is-grgf", icon: BookOpen },
  { title: "How It Works", path: "/architecture", icon: Layers },
  { title: "Simulator", path: "/simulator", icon: Play },
  { title: "Verification", path: "/verification", icon: ShieldCheck },
  { title: "Use Cases", path: "/use-cases", icon: Briefcase },
  { title: "Countries", path: "/countries", icon: Globe },
  { title: "Academy", path: "/academy", icon: GraduationCap },
  { title: "Documents", path: "/archive", icon: Archive },
  { title: "Governance", path: "/governance", icon: Shield },
  { title: "Security", path: "/security", icon: Lock },
  { title: "Attribution", path: "/origin", icon: Fingerprint },
  { title: "Contact", path: "/contact", icon: Mail },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { mode, toggle, isPlain } = useViewMode();

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <aside
        className={cn(
          "sticky top-0 h-screen flex flex-col bg-primary text-primary-foreground border-r border-sidebar-border transition-all duration-300 z-50",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Header */}
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

        {/* Navigation */}
        <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-all duration-150",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary font-medium"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                )}
                title={collapsed ? item.title : undefined}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
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

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top bar with toggle */}
        <div className="flex items-center justify-between border-b border-border px-4 py-2">
          <Breadcrumbs />
          <div className="flex items-center gap-2 shrink-0">
            <span className={cn("text-xs font-mono", isPlain ? "text-accent font-semibold" : "text-muted-foreground")}>
              Plain English
            </span>
            <Switch checked={!isPlain} onCheckedChange={toggle} />
            <span className={cn("text-xs font-mono", !isPlain ? "text-accent font-semibold" : "text-muted-foreground")}>
              Technical
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
