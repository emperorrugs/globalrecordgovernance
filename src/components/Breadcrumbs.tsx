import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/what-is-grgf": "What Is GRGF",
  "/architecture": "How It Works",
  "/simulator": "Simulator",
  "/verification": "Verification",
  "/use-cases": "Use Cases",
  "/countries": "Countries",
  "/academy": "Academy",
  "/archive": "Documents",
  "/governance": "Governance",
  "/security": "Security",
  "/origin": "Attribution",
  "/contact": "Contact",
  "/framework": "Framework",
  "/systems": "Systems",
  "/processes": "Processes",
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
