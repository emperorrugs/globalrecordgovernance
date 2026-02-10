import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/about": "About GRGF",
  "/how-it-works": "How It Works",
  "/governance": "Governance",
  "/simulation": "Simulation",
  "/dashboards": "Dashboards",
  "/source-of-truth": "Source of Truth",
};

export function Breadcrumbs() {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  const label = routeLabels[pathname] || "Page";

  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex items-center gap-1.5 font-mono tracking-wide">
        <li>
          <Link to="/" className="hover:text-foreground transition-colors">GRGF</Link>
        </li>
        <li><ChevronRight className="h-3 w-3" /></li>
        <li className="text-foreground font-medium">{label}</li>
      </ol>
    </nav>
  );
}
