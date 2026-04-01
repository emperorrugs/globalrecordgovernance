import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog, CommandInput, CommandList,
  CommandEmpty, CommandGroup, CommandItem, CommandSeparator,
} from "@/components/ui/command";
import {
  Search, Globe, Shield, Landmark, Database, FileText, Server,
  Code, BookOpen, Scale, Gavel, Users, Store, Eye, Network,
  BarChart3, Building2, FileCheck, HardHat, Zap, Award,
} from "lucide-react";

interface SearchItem {
  label: string;
  route: string;
  group: string;
  icon: React.ComponentType<{ className?: string }>;
  keywords?: string;
}

const searchItems: SearchItem[] = [
  // Platform
  { label: "Homepage", route: "/", group: "Platform", icon: Globe, keywords: "home main landing" },
  { label: "Marketplace", route: "/marketplace", group: "Platform", icon: Store, keywords: "products modules buy deploy" },
  { label: "Deployment Engine", route: "/deploy", group: "Platform", icon: Server, keywords: "deploy provision node sovereign" },
  { label: "Media Room", route: "/media-room", group: "Platform", icon: FileText, keywords: "pdf documents download brochure" },
  { label: "Contact & Assessment", route: "/contact", group: "Platform", icon: Users, keywords: "demo request contact sales" },
  { label: "Pricing", route: "/pricing", group: "Platform", icon: BarChart3, keywords: "cost pricing tiers license" },

  // Core System
  { label: "Core System — Login", route: "/app/login", group: "Core System", icon: Shield, keywords: "login sign in authenticate" },
  { label: "Dashboard", route: "/app/dashboard", group: "Core System", icon: BarChart3, keywords: "dashboard overview metrics" },
  { label: "Records", route: "/app/records", group: "Core System", icon: Database, keywords: "records list manage governance" },
  { label: "Create Record", route: "/app/records/create", group: "Core System", icon: FileCheck, keywords: "create new record event" },
  { label: "Workflow Queue", route: "/app/workflow", group: "Core System", icon: Zap, keywords: "workflow approve review pending" },
  { label: "Audit Trail", route: "/app/audit", group: "Core System", icon: Eye, keywords: "audit log trail history" },
  { label: "Disputes Console", route: "/app/disputes", group: "Core System", icon: Gavel, keywords: "dispute challenge resolve" },
  { label: "Verification Portal", route: "/verify", group: "Core System", icon: Shield, keywords: "verify check integrity hash" },

  // Architecture & Technical
  { label: "System Architecture", route: "/architecture", group: "Architecture", icon: Building2, keywords: "six layer architecture pipeline" },
  { label: "Security & Trust", route: "/security-trust", group: "Architecture", icon: Shield, keywords: "security trust iso 27001 encryption" },
  { label: "DPI Stack", route: "/dpi-stack", group: "Architecture", icon: Network, keywords: "digital public infrastructure oecd" },
  { label: "Interoperability", route: "/interoperability", group: "Architecture", icon: Network, keywords: "interop api schema integration" },
  { label: "Scalability", route: "/scalability", group: "Architecture", icon: Server, keywords: "scalable performance load" },
  { label: "Anchor Chain™ Engine", route: "/anchor-chain", group: "Architecture", icon: Database, keywords: "anchor chain engine hash ledger" },

  // Developer
  { label: "SDK Developer Hub", route: "/sdk", group: "Developer", icon: Code, keywords: "sdk api developer typescript python java" },
  { label: "Verification API", route: "/verification-api", group: "Developer", icon: Zap, keywords: "api rest endpoint verify" },
  { label: "API Explorer", route: "/api-mock", group: "Developer", icon: Code, keywords: "api playground test console" },
  { label: "Developer Portal", route: "/developer", group: "Developer", icon: Code, keywords: "developer docs guide" },

  // Framework & Standards
  { label: "Governance Framework", route: "/governance-framework", group: "Standards", icon: Scale, keywords: "governance framework policy" },
  { label: "International Compliance", route: "/international-compliance", group: "Standards", icon: Globe, keywords: "compliance iso oecd world bank un" },
  { label: "OECD Alignment", route: "/oecd-alignment", group: "Standards", icon: Globe, keywords: "oecd digital government" },
  { label: "World Bank Alignment", route: "/world-bank-alignment", group: "Standards", icon: Landmark, keywords: "world bank govtech gtmi" },
  { label: "UN SDG 16 Alignment", route: "/un-alignment", group: "Standards", icon: Globe, keywords: "united nations sdg 16 peace justice" },
  { label: "Standards & IP Strategy", route: "/standards-submission", group: "Standards", icon: Award, keywords: "patent ip standards iso submission" },
  { label: "TRL Tracker", route: "/trl-tracker", group: "Standards", icon: BarChart3, keywords: "technology readiness level trl maturity" },
  { label: "Certification Readiness", route: "/certification-readiness", group: "Standards", icon: FileCheck, keywords: "soc2 iso 27001 certification audit" },

  // Intelligence
  { label: "Applications Catalog (126)", route: "/applications", group: "Intelligence", icon: BookOpen, keywords: "126 applications sectors catalog" },
  { label: "Sector Integration", route: "/sector-integration", group: "Intelligence", icon: HardHat, keywords: "sector integration healthcare finance government" },
  { label: "Impact & ROI Modeling", route: "/impact", group: "Intelligence", icon: BarChart3, keywords: "impact roi cost benefit analysis" },
  { label: "Global Peer Comparison", route: "/comparison", group: "Intelligence", icon: Scale, keywords: "comparison benchmark govstack x-road mosip" },
  { label: "Limitations & Transparency", route: "/limitations", group: "Intelligence", icon: Eye, keywords: "limitations trl disclosure transparency" },

  // Archive
  { label: "Smart Archive", route: "/archive/intelligent", group: "Archive", icon: Database, keywords: "archive documents download smart" },
  { label: "Partner Certification", route: "/partner-certification", group: "Archive", icon: Award, keywords: "partner certification integrator" },

  // Legal
  { label: "Privacy Policy", route: "/privacy-policy", group: "Legal", icon: Shield, keywords: "privacy gdpr pipeda data protection" },
  { label: "Terms of Service", route: "/terms-of-service", group: "Legal", icon: FileText, keywords: "terms conditions legal" },
  { label: "Accessibility", route: "/accessibility", group: "Legal", icon: Users, keywords: "accessibility wcag a11y" },
  { label: "IP Status", route: "/ip-status", group: "Legal", icon: Award, keywords: "patent intellectual property ip status" },
];

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const groups = useMemo(() => {
    const map = new Map<string, SearchItem[]>();
    searchItems.forEach((item) => {
      const list = map.get(item.group) || [];
      list.push(item);
      map.set(item.group, list);
    });
    return map;
  }, []);

  const handleSelect = (route: string) => {
    setOpen(false);
    navigate(route);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground bg-muted/50 border border-border rounded-md hover:bg-muted transition-colors"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Search platform...</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-background border border-border rounded">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages, features, documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Array.from(groups.entries()).map(([group, items], i) => (
            <div key={group}>
              {i > 0 && <CommandSeparator />}
              <CommandGroup heading={group}>
                {items.map((item) => (
                  <CommandItem
                    key={item.route}
                    value={`${item.label} ${item.keywords || ""}`}
                    onSelect={() => handleSelect(item.route)}
                  >
                    <item.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{item.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
