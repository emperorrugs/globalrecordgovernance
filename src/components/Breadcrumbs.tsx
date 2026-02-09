import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/framework": "Framework",
  "/systems": "Systems",
  "/processes": "Processes",
  "/countries": "Countries",
  "/academy": "Academy",
  "/archive": "Archive",
  "/governance": "Governance",
};

export function Breadcrumbs() {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  const label = routeLabels[pathname] || "Page";

  return (
    <nav
      aria-label="Breadcrumb"
      className="px-8 md:px-12 lg:px-16 py-3 text-xs text-muted-foreground border-b border-border bg-card/30"
    >
      <ol className="flex items-center gap-1.5 font-mono tracking-wide">
        <li>
          <Link to="/" className="hover:text-foreground transition-colors">
            GRGF
          </Link>
        </li>
        <li>
          <ChevronRight className="h-3 w-3" />
        </li>
        <li className="text-foreground font-medium">{label}</li>
      </ol>
    </nav>
  );
}
