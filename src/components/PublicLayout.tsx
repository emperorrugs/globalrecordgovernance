import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, ChevronRight, ChevronDown, Lock, Globe, Layers, BarChart3, FileText, Cpu, Scale, GraduationCap, Store, Calculator, BookOpen, Database, Eye, Code2, Briefcase, Image } from "lucide-react";
import { cn } from "@/lib/utils";
import { InstitutionalFooter } from "@/components/InstitutionalFooter";
import { PageTransition } from "@/components/PageTransition";
import { BackToTop } from "@/components/BackToTop";
import { ReadingProgress } from "@/components/ReadingProgress";
import { CookieConsent } from "@/components/CookieConsent";
import { GlobalSearch } from "@/components/GlobalSearch";
import { RouteSEO } from "@/components/RouteSEO";

const navGroups = [
  {
    label: "Platform",
    items: [
      { label: "Dashboard", path: "/dashboard", icon: BarChart3 },
      { label: "Marketplace", path: "/marketplace", icon: Store },
      { label: "Applications", path: "/applications", icon: Layers },
      { label: "Calculator", path: "/value-calculator", icon: Calculator },
    ],
  },
  {
    label: "Framework",
    items: [
      { label: "Overview", path: "/framework", icon: Scale },
      { label: "Architecture", path: "/architecture", icon: Cpu },
      { label: "Anchor Chain", path: "/anchor-chain", icon: Database },
      { label: "Sectors", path: "/sectors", icon: Globe },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Documents", path: "/documents", icon: FileText },
      { label: "Media Room", path: "/media-room", icon: Image },
      { label: "Academy", path: "/academy", icon: GraduationCap },
      { label: "Developer", path: "/developer", icon: Code2 },
      { label: "Verification", path: "/verify", icon: Eye },
    ],
  },
  {
    label: "Enterprise",
    items: [
      { label: "Security & Trust", path: "/security-trust", icon: Shield },
      { label: "About", path: "/about", icon: BookOpen },
      { label: "Contact", path: "/contact", icon: Briefcase },
    ],
  },
];

export function PublicLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <RouteSEO />
      <CookieConsent />
      <ReadingProgress />
      <BackToTop />

      {/* ── Enterprise Header ── */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-200",
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-background border-b border-border/50"
        )}
      >
        {/* Top utility bar */}
        <div className="hidden lg:block border-b border-border/40 bg-muted/30">
          <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between h-8">
            <span className="text-[10px] font-mono text-muted-foreground/60 tracking-wider">
              GLOBAL RECORD GOVERNANCE FRAMEWORK · SOVEREIGN INFRASTRUCTURE
            </span>
            <div className="flex items-center gap-4">
              <Link to="/contact" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">
                Request Assessment
              </Link>
              <span className="text-border">|</span>
              <Link to="/documents" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
            </div>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center group-hover:shadow-md group-hover:shadow-primary/20 transition-all">
                <span className="text-primary-foreground text-sm font-bold">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-foreground leading-none">GRGF</span>
                <span className="hidden sm:block text-[9px] text-muted-foreground tracking-wide leading-none mt-0.5">
                  Enterprise Platform
                </span>
              </div>
            </Link>

            {/* Desktop Nav — Mega menu style */}
            <nav className="hidden xl:flex items-center gap-0.5 h-full">
              {navGroups.map((group) => (
                <div
                  key={group.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setOpenDropdown(group.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors",
                      openDropdown === group.label
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {group.label}
                    <ChevronDown className={cn(
                      "h-3 w-3 transition-transform duration-200",
                      openDropdown === group.label && "rotate-180"
                    )} />
                  </button>

                  {/* Dropdown */}
                  {openDropdown === group.label && (
                    <div className="absolute top-full left-0 pt-1 z-50">
                      <div className="bg-card border border-border rounded-lg shadow-xl shadow-foreground/5 p-1.5 min-w-[220px] animate-fade-in">
                        {group.items.map((item) => {
                          const isActive = location.pathname === item.path;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={cn(
                                "flex items-center gap-2.5 px-3 py-2 text-[13px] rounded-md transition-all duration-150",
                                isActive
                                  ? "text-primary bg-primary/8 font-medium"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                              )}
                            >
                              <item.icon className="h-3.5 w-3.5 shrink-0" />
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search + CTAs */}
            <div className="flex items-center gap-2 shrink-0">
              <GlobalSearch />
              <Link
                to="/app/login"
                className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all shadow-sm"
              >
                <Lock className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Sign In</span>
                <span className="sm:hidden">Login</span>
              </Link>

              {/* Mobile menu */}
              <button
                className="xl:hidden p-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-border bg-background max-h-[80vh] overflow-auto">
            <nav className="max-w-[1440px] mx-auto px-6 py-4 space-y-4">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-[10px] font-semibold text-muted-foreground/60 uppercase tracking-[0.1em] mb-1.5 px-2">{group.label}</p>
                  <div className="space-y-0.5">
                    {group.items.map((item) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2.5 text-sm rounded-md transition-colors",
                            isActive
                              ? "text-primary bg-primary/5 font-medium"
                              : "text-foreground hover:bg-muted/50"
                          )}
                        >
                          <item.icon className="h-4 w-4 text-muted-foreground" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
              <div className="pt-3 border-t border-border">
                <Link
                  to="/app/login"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground rounded-md text-sm font-semibold"
                >
                  <Lock className="h-4 w-4" />
                  Sign In to Platform
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>

      {/* ── Footer ── */}
      <InstitutionalFooter />
    </div>
  );
}
