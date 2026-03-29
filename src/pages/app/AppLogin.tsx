import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Shield, Lock, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function AppLogin() {
  const { user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Shield className="h-8 w-8 text-primary animate-pulse" />
      </div>
    );
  }

  if (user) return <Navigate to="/app" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (isForgot) {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        toast.success("Check your email for a password reset link.");
        setIsForgot(false);
      } else if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast.success("Check your email to verify your account.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err: any) {
      toast.error(err.message || "Authentication failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left — Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-foreground text-background flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--background)) 0.5px, transparent 0)",
          backgroundSize: "24px 24px",
        }} />
        <div className="relative">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center">
              <span className="text-background text-lg font-bold">G</span>
            </div>
            <div>
              <span className="text-lg font-bold text-background">GRGF</span>
              <p className="text-[11px] text-background/50">Global Record Governance Framework</p>
            </div>
          </Link>
        </div>
        <div className="relative max-w-md">
          <h2 className="text-3xl font-bold text-background mb-4 leading-tight">
            Core System
            <br />
            <span className="text-background/50">Secure Access</span>
          </h2>
          <p className="text-sm text-background/60 leading-relaxed">
            The operational governance platform for authorized institutional users.
            Create records, manage workflows, verify integrity, and audit
            institutional actions within a sovereign-grade environment.
          </p>
        </div>
        <div className="relative">
          <p className="text-[11px] text-background/30">
            GRGF v1.0 · Sovereign-Grade Governance Infrastructure
          </p>
        </div>
      </div>

      {/* Right — Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Framework Portal
          </Link>

          <div className="mb-8">
            <div className="lg:hidden flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">G</span>
              </div>
              <span className="text-[15px] font-bold">GRGF</span>
            </div>
            <h1 className="text-heading-1 font-bold text-foreground mb-2">
              {isForgot ? "Reset Password" : isSignUp ? "Create Account" : "Sign In"}
            </h1>
            <p className="text-body text-muted-foreground">
              {isForgot
                ? "Enter your email and we'll send a secure reset link."
                : isSignUp
                ? "Register for authorized institutional access."
                : "Authorized institutional users only."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                placeholder="name@institution.gov"
              />
            </div>
            {!isForgot && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium text-foreground">Password</label>
                {!isSignUp && (
                  <button type="button" onClick={() => setIsForgot(true)} className="text-[11px] text-primary hover:underline">
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all disabled:opacity-60"
            >
              <Lock className="h-4 w-4" />
              {submitting ? "Processing…" : isForgot ? "Send Reset Link" : isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            {isForgot ? (
              <button
                onClick={() => setIsForgot(false)}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                ← Back to Sign In
              </button>
            ) : (
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Need an account? Request access"}
            </button>
            )}
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-border text-center">
            <p className="text-[10px] text-muted-foreground/60 leading-relaxed">
              This system is for authorized institutional users.
              <br />
              Unauthorized access attempts are logged and monitored.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
