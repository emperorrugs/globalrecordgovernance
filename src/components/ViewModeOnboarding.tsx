import { useState, useEffect } from "react";
import { X, Eye, Code2 } from "lucide-react";
import { useViewMode } from "@/contexts/ViewModeContext";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const STORAGE_KEY = "grgf_viewmode_onboarded";

export function ViewModeBanner() {
  const [visible, setVisible] = useState(false);
  const { isPlain, toggle } = useViewMode();

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) setVisible(true);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  if (!visible) return null;

  return (
    <div className="bg-accent/10 border-b border-accent/20 px-4 py-3 flex items-center justify-between gap-3 animate-in slide-in-from-top-2 duration-300">
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex items-center gap-1.5 shrink-0">
          <Eye className="h-4 w-4 text-accent" />
          <span className="text-accent font-mono text-xs font-bold tracking-wide">TWO VIEWING MODES</span>
        </div>
        <p className="text-xs text-muted-foreground leading-snug hidden sm:block">
          Switch between <button onClick={() => { if (!isPlain) toggle(); }} className="font-semibold text-foreground underline underline-offset-2 hover:text-accent transition-colors">Plain English</button> for
          executive stakeholders and <button onClick={() => { if (isPlain) toggle(); }} className="font-semibold text-foreground underline underline-offset-2 hover:text-accent transition-colors">Technical / Audit</button> mode
          for detailed specifications — use the toggle in the top bar.
        </p>
        <p className="text-xs text-muted-foreground leading-snug sm:hidden">
          Use the toggle above to switch between Plain and Technical views.
        </p>
      </div>
      <button
        onClick={dismiss}
        className="shrink-0 p-1 rounded hover:bg-accent/20 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Dismiss viewing mode hint"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

export function ViewModeFirstVisitTooltip({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const TOOLTIP_KEY = "grgf_viewmode_tooltip_seen";

  useEffect(() => {
    const seen = localStorage.getItem(TOOLTIP_KEY);
    if (!seen) {
      const timer = setTimeout(() => setOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setOpen(false);
    localStorage.setItem(TOOLTIP_KEY, "true");
  };

  // Auto-dismiss after 8 seconds
  useEffect(() => {
    if (open) {
      const timer = setTimeout(dismiss, 8000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Popover open={open} onOpenChange={(v) => { if (!v) dismiss(); }}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        className="w-64 p-3 text-xs bg-card border-accent/30 shadow-lg"
        onPointerDownOutside={dismiss}
      >
        <div className="flex items-start gap-2">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5 text-accent shrink-0" />
              <span className="font-semibold text-foreground">Switch Viewing Mode</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Plain English</strong> — accessible summaries for decision-makers.
              <br />
              <strong>Technical</strong> — full specifications for auditors & engineers.
            </p>
          </div>
          <button onClick={dismiss} className="shrink-0 p-0.5 hover:text-accent">
            <X className="h-3 w-3" />
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
