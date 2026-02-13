import { useState, useEffect } from "react";
import { Shield, X } from "lucide-react";

const COOKIE_KEY = "grgf_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const respond = (choice: "accepted" | "rejected") => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ choice, timestamp: new Date().toISOString() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6 animate-fade-in" role="dialog" aria-label="Cookie consent">
      <div className="max-w-3xl mx-auto bg-card border border-border shadow-2xl shadow-primary/10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-5 pt-5 pb-3">
          <div className="flex items-center gap-2.5">
            <Shield className="h-4 w-4 text-accent shrink-0" />
            <h3 className="font-serif text-sm font-semibold text-foreground">Privacy & Cookie Notice</h3>
          </div>
          <button onClick={() => respond("rejected")} className="p-1 hover:bg-muted transition-colors" aria-label="Dismiss">
            <X className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 pb-4">
          <p className="text-caption text-muted-foreground leading-relaxed">
            This site uses strictly necessary cookies for session management and user preferences (e.g., view mode). 
            We do not use tracking, advertising, or third-party analytics cookies. Your privacy is protected by design.
          </p>

          {showDetails && (
            <div className="mt-3 p-3 bg-muted/50 border border-border text-xs space-y-2">
              <div>
                <p className="font-semibold text-foreground">Essential Cookies</p>
                <p className="text-muted-foreground">UI preferences (view mode toggle, cookie consent status). Stored locally, never transmitted to external servers.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Analytics & Tracking</p>
                <p className="text-muted-foreground">None. This platform does not deploy any analytics, fingerprinting, or behavioural tracking technologies.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Third-Party Cookies</p>
                <p className="text-muted-foreground">None. No external scripts, pixels, or embedded content that sets cookies.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Legal Basis</p>
                <p className="text-muted-foreground">Essential cookies: Legitimate interest (GDPR Art. 6(1)(f)). No consent required for strictly necessary functionality.</p>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t border-border bg-muted/30">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
          >
            {showDetails ? "Hide details" : "Learn more"}
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => respond("rejected")}
              className="px-4 py-2 text-xs font-medium border border-border text-muted-foreground hover:bg-muted transition-colors"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={() => respond("accepted")}
              className="px-4 py-2 text-xs font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>

        {/* Regulatory notice */}
        <div className="px-5 py-2 border-t border-border">
          <p className="text-[10px] text-muted-foreground/50 font-mono">
            GDPR · ePrivacy Directive · PIPEDA · CCPA compliant. See our{" "}
            <a href="/privacy-policy" className="underline hover:text-foreground transition-colors">Privacy Policy</a> for full details.
          </p>
        </div>
      </div>
    </div>
  );
}
