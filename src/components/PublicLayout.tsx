import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, ChevronRight, Lock, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { InstitutionalFooter } from "@/components/InstitutionalFooter";
import { PageTransition } from "@/components/PageTransition";
import { BackToTop } from "@/components/BackToTop";
import { ReadingProgress } from "@/components/ReadingProgress";
import { CookieConsent } from "@/components/CookieConsent";
import { RouteSEO } from "@/components/RouteSEO";

const navItems = [
  { label: "Framework", path: "/framework" },
  { label: "Architecture", path: "/architecture" },
  { label: "Applications", path: "/applications" },
  { label: "Sectors", path: "/sectors" },
  { label: "Calculator", path: "/value-calculator" },
  { label: "Documents", path: "/documents" },
  { label: "Verification", path: "/verify" },
  { label: "Security & Trust", path: "/security-trust" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export function PublicLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <RouteSEO />
      <CookieConsent />
      <ReadingProgress />
      <BackToTop />

      {/* ── Header ── */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background border-b border-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center group-hover:shadow-md group-hover:shadow-primary/20 transition-all">
                <span className="text-primary-foreground text-sm font-bold tracking-tight">G</span>
              </div>
              <div>
                <span className="text-[15px] font-bold tracking-tight text-foreground">GRGF</span>
                <span className="hidden sm:block text-[10px] text-muted-foreground tracking-wide leading-none mt-0.5">
                  Global Record Governance Framework
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "px-3 py-2 text-[13px] font-medium rounded-md transition-colors",
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center px-4 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted/50 transition-all"
              >
                Request Demo
              </Link>
              <Link
                to="/app/login"
                className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-sm"
              >
                <Lock className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Access Core System</span>
                <span className="sm:hidden">Login</span>
              </Link>

              {/* Mobile menu */}
              <button
                className="xl:hidden p-2 hover:bg-muted rounded-md transition-colors ml-1"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-border bg-background">
            <nav className="max-w-[1400px] mx-auto px-6 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center justify-between px-3 py-2.5 text-sm rounded-md transition-colors",
                      isActive
                        ? "text-primary bg-primary/5 font-medium"
                        : "text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.label}
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-border mt-3">
                <Link
                  to="/app/login"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold"
                >
                  <Lock className="h-4 w-4" />
                  Access Core System
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
