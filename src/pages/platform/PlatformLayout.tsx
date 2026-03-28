import { ReactNode } from 'react';
import { Navigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard, FileText, Plus, Activity, Shield, AlertTriangle,
  Users, Settings, LogOut, ChevronLeft, Menu, Search,
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Dashboard', path: '/app', icon: LayoutDashboard },
  { label: 'Records', path: '/app/records', icon: FileText },
  { label: 'Create Record', path: '/app/records/create', icon: Plus },
  { label: 'Audit Trail', path: '/app/audit', icon: Activity },
  { label: 'Verification', path: '/app/verify', icon: Shield },
  { label: 'Disputes', path: '/app/disputes', icon: AlertTriangle },
];

export default function PlatformLayout({ children }: { children: ReactNode }) {
  const { user, profile, organization, loading, signOut } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-8 w-8 text-primary animate-pulse mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Loading GRGF Platform…</p>
        </div>
      </div>
    );
  }

  if (!user) return <Navigate to="/auth" replace />;

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-60' : 'w-0 overflow-hidden'} bg-card border-r border-border flex flex-col transition-all duration-200 shrink-0`}>
        <div className="p-4 border-b border-border">
          <Link to="/app" className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#00A4EF]" />
            <span className="text-sm font-semibold tracking-tight">GRGF Platform</span>
          </Link>
          {organization && (
            <p className="text-[10px] text-muted-foreground mt-1 truncate">{organization.name}</p>
          )}
        </div>

        <ScrollArea className="flex-1 px-2 py-3">
          <nav className="space-y-1">
            {navItems.map(item => {
              const isActive = location.pathname === item.path || (item.path !== '/app' && location.pathname.startsWith(item.path));
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
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
              {profile?.full_name?.charAt(0) || '?'}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium truncate">{profile?.full_name || 'User'}</p>
              <p className="text-[10px] text-muted-foreground truncate">{user.email}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-xs text-muted-foreground" onClick={signOut}>
            <LogOut className="h-3.5 w-3.5" /> Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-12 border-b border-border flex items-center px-4 gap-3 shrink-0">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
          <div className="flex-1" />
          <p className="text-[10px] font-mono text-muted-foreground/50">GRGF v1.0 · Sovereign-Grade Governance Infrastructure</p>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
