import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Archive, Users, Building2, Handshake, Lock, List } from "lucide-react";
import { cn } from "@/lib/utils";

const archiveNav = [
  { path: "/archive", label: "Overview", icon: Archive },
  { path: "/archive/public", label: "Public & Civil Society", icon: Users },
  { path: "/archive/government", label: "Government & Multilateral", icon: Building2 },
  { path: "/archive/partners", label: "Partners & Integrators", icon: Handshake },
  { path: "/archive/legal-ip", label: "Legal, IP & Assurance", icon: Lock },
  { path: "/archive/master-index", label: "Master Index", icon: List },
];

export function ArchiveLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-serif font-semibold text-foreground">GRGF</span>
            <span className="text-muted-foreground/50">·</span>
            <span className="text-xs">Digital Archive</span>
          </Link>
          <p className="text-[10px] font-mono text-muted-foreground/60 tracking-wider hidden sm:block">
            REFERENCE ARCHIVE · NON-AUTHORITATIVE
          </p>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 border-r border-border bg-card/50 hidden md:block">
          <div className="sticky top-12 py-6 px-3">
            <p className="px-3 text-[10px] font-mono text-muted-foreground/60 uppercase tracking-[0.15em] mb-4">
              Archive Sections
            </p>
            <nav className="space-y-0.5">
              {archiveNav.map(({ path, label, icon: Icon }) => {
                const isActive = pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    {label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-8 px-3">
              <p className="text-[10px] text-muted-foreground/40 leading-relaxed">
                Documents are organized by stakeholder role. Controlled sections require institutional access.
              </p>
            </div>
          </div>
        </aside>

        {/* Mobile nav */}
        <div className="md:hidden border-b border-border bg-card/50 w-full">
          <div className="flex overflow-x-auto gap-1 px-4 py-2 scrollbar-hide">
            {archiveNav.map(({ path, label, icon: Icon }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[11px] whitespace-nowrap transition-colors shrink-0",
                    isActive
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="h-3 w-3 shrink-0" />
                  {label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0 flex flex-col">
          <div className="flex-1">{children}</div>

          {/* Archive footer */}
          <footer className="border-t border-border bg-primary text-primary-foreground px-8 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-primary-foreground/60">
                    Global Record Governance Framework — Digital Archive
                  </p>
                  <p className="text-[10px] text-primary-foreground/40 mt-1">
                    Invented and Owned by Tarek Wahid · No personal data collected · Reference only
                  </p>
                </div>
                <Link to="/" className="text-[10px] text-accent hover:underline font-mono uppercase tracking-wider">
                  Return to GRGF ↗
                </Link>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
