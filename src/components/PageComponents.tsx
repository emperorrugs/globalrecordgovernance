import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="border-b border-border bg-surface/50 px-8 py-10 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-muted-foreground text-lg leading-relaxed max-w-2xl">{subtitle}</p>
        )}
        {children}
        <div className="section-divider mt-6" />
      </div>
    </header>
  );
}

interface SectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <section className={cn("px-8 py-10 md:px-12 lg:px-16", className)}>
      <div className="max-w-5xl">
        {title && (
          <h2 className="institutional-heading text-xl md:text-2xl font-semibold mb-6">{title}</h2>
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
