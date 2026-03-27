import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="relative border-b border-border px-8 py-14 md:px-12 lg:px-16 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-[0.02]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }} />
      <div className="relative max-w-4xl">
        <h1 className="institutional-heading text-heading-1 font-semibold">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-muted-foreground text-body-lg leading-relaxed max-w-2xl">{subtitle}</p>
        )}
        {children}
        <div className="section-divider mt-8" />
      </div>
    </header>
  );
}

interface SectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ title, children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("px-8 py-12 md:px-12 lg:px-16", className)}>
      <div className="max-w-5xl">
        {title && (
          <h2 className="institutional-heading text-heading-2 font-semibold mb-8">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}

interface InfoCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  meta?: string;
}

export function InfoCard({ title, description, icon, meta }: InfoCardProps) {
  return (
    <div className="governance-card">
      <div className="flex items-start gap-4">
        {icon && <div className="text-accent mt-0.5 shrink-0">{icon}</div>}
        <div className="min-w-0">
          <h3 className="font-serif text-base font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
          {meta && <p className="hash-text mt-3">{meta}</p>}
        </div>
      </div>
    </div>
  );
}
