import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard, FileText, Activity, Shield, AlertTriangle,
  ListChecks, BarChart3, Play, ChevronLeft, Menu, Eye,
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Dashboard', path: '/demo/app', icon: LayoutDashboard },
  { label: 'Records', path: '/demo/app/records', icon: FileText },
  { label: 'Workflow Queue', path: '/demo/app/workflow', icon: ListChecks },
  { label: 'Audit Trail', path: '/demo/app/audit', icon: Activity },
  { label: 'Verification', path: '/demo/app/verify', icon: Shield },
  { label: 'Disputes', path: '/demo/app/disputes', icon: AlertTriangle },
  { label: 'Reports', path: '/demo/app/reports', icon: BarChart3 },
  { label: 'Guided Demo', path: '/demo/app/demo', icon: Play },
];

export default function GuestDemoLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex bg-background">
      {/* Guest Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-500 text-amber-950 text-center py-1.5 text-xs font-semibold tracking-wide flex items-center justify-center gap-2">
        <Eye className="h-3.5 w-3.5" />
        GUEST DEMO MODE — Read-Only Access · No Signup Required
        <Link to="/auth">
          <Badge className="bg-amber-950 text-amber-100 text-[10px] ml-2 hover:bg-amber-900 cursor-pointer">
            Sign Up for Full Access →
          </Badge>
        </Link>
      </div>

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-60' : 'w-0 overflow-hidden'} bg-card border-r border-border flex flex-col transition-all duration-200 shrink-0 pt-8`}>
        <div className="p-4 border-b border-border">
          <Link to="/demo/app" className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold tracking-tight">GRGF Platform</span>
          </Link>
          <p className="text-[10px] text-muted-foreground mt-1">Ministry of Public Administration</p>
        </div>

        <ScrollArea className="flex-1 px-2 py-3">
          <nav className="space-y-1">
            {navItems.map(item => {
              const isActive = location.pathname === item.path || (item.path !== '/demo/app' && location.pathname.startsWith(item.path));
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    className={`w-full justify-start gap-2.5 text-sm ${isActive ? 'bg-primary/10 text-primary font-medium' : ''}`}
                    size="sm"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>

        <div className="p-3 border-t border-border">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-xs font-medium text-amber-700 dark:text-amber-300">
              G
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium truncate">Guest Evaluator</p>
              <p className="text-[10px] text-muted-foreground truncate">Read-Only Access</p>
            </div>
          </div>
          <Link to="/auth">
            <Button variant="outline" size="sm" className="w-full justify-start gap-2 text-xs">
              <Shield className="h-3.5 w-3.5" /> Request Full Access
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 pt-8">
        <header className="h-12 border-b border-border flex items-center px-4 gap-3 shrink-0">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
          <Badge variant="outline" className="text-[10px] font-mono">SIMULATION ENVIRONMENT</Badge>
          <div className="flex-1" />
          <p className="text-[10px] font-mono text-muted-foreground/50">GRGF v1.0 · Guest Demo</p>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
