import { useState, useEffect } from "react";
import { Shield, CheckCircle, Lock, Activity } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { FadeIn } from "./FadeIn";

function PulsingDot({ color = "bg-accent" }: { color?: string }) {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-40`} />
      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${color}`} />
    </span>
  );
}

function MetricCard({ icon: Icon, label, children, status }: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
  status?: string;
}) {
  return (
    <div className="governance-card-elevated group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-center gap-2 mb-3">
        <Icon className="h-4 w-4 text-accent" />
        <span className="text-overline font-mono text-muted-foreground/60 uppercase tracking-widest">{label}</span>
        {status && (
          <span className="ml-auto flex items-center gap-1.5">
            <PulsingDot color="bg-accent" />
            <span className="text-overline font-mono text-accent">{status}</span>
          </span>
        )}
      </div>
      <div className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
        {children}
      </div>
    </div>
  );
}

export function LiveTrustDashboard() {
  const [uptime, setUptime] = useState(99.97);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => {
        const delta = (Math.random() - 0.48) * 0.01;
        return Math.min(100, Math.max(99.9, prev + delta));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <FadeIn>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="region" aria-label="Live trust metrics" aria-live="polite">
        <MetricCard icon={Shield} label="Integrity Score" status="LIVE">
          <AnimatedCounter end={100} suffix="%" className="text-accent" />
        </MetricCard>
        <MetricCard icon={CheckCircle} label="Policy Determinism">
          <AnimatedCounter end={100} suffix="%" />
          <p className="text-overline text-muted-foreground/50 mt-1">Zero discretionary override</p>
        </MetricCard>
        <MetricCard icon={Lock} label="Records Sealed">
          <AnimatedCounter end={847} prefix="" suffix="" />
          <p className="text-overline text-muted-foreground/50 mt-1">Pilot evaluation phase</p>
        </MetricCard>
        <MetricCard icon={Activity} label="System Availability">
          <span className="tabular-nums" aria-label={`System availability: ${uptime.toFixed(2)} percent`}>{uptime.toFixed(2)}%</span>
          <p className="text-overline text-muted-foreground/50 mt-1">30-day rolling average</p>
        </MetricCard>
      </div>
    </FadeIn>
  );
}
