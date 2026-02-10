import { AlertTriangle } from "lucide-react";

export function SimulationBanner() {
  return (
    <div className="bg-destructive/10 border-b border-destructive/20 px-4 py-2 flex items-center justify-center gap-2">
      <AlertTriangle className="h-3.5 w-3.5 text-destructive shrink-0" />
      <span className="text-xs font-mono text-destructive font-medium tracking-wide">
        SIMULATION ONLY — No Authoritative Records Are Created
      </span>
    </div>
  );
}
