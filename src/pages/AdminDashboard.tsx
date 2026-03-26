import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Shield, CheckCircle, XCircle, Clock, Eye, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

interface AccessRequest {
  id: string;
  full_name: string;
  organization: string;
  title_role: string;
  email: string;
  country: string;
  requested_level: string;
  evaluation_purpose: string;
  purpose_detail: string | null;
  department_type: string | null;
  document_categories: string[] | null;
  status: string;
  email_verified: boolean;
  crp_acknowledged: boolean;
  nda_required: boolean;
  reviewer_notes: string | null;
  created_at: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  approved: "bg-green-500/10 text-green-600 border-green-500/20",
  rejected: "bg-red-500/10 text-red-600 border-red-500/20",
  under_review: "bg-blue-500/10 text-blue-600 border-blue-500/20",
};

const AdminDashboard = () => {
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<AccessRequest | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [adminKey, setAdminKey] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const ADMIN_PASSPHRASE = "grgf-admin-2026";

  const handleAuth = () => {
    if (adminKey === ADMIN_PASSPHRASE) {
      setAuthenticated(true);
      fetchRequests();
    } else {
      toast({ title: "Access Denied", description: "Invalid admin passphrase.", variant: "destructive" });
    }
  };

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("access_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Error", description: "Failed to load requests.", variant: "destructive" });
    } else {
      setRequests((data as AccessRequest[]) || []);
    }
    setLoading(false);
  };

  const filteredRequests = filter === "all" ? requests : requests.filter((r) => r.status === filter);

  const stats = {
    total: requests.length,
    pending: requests.filter((r) => r.status === "pending").length,
    approved: requests.filter((r) => r.status === "approved").length,
    rejected: requests.filter((r) => r.status === "rejected").length,
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full governance-card text-center">
          <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
          <h1 className="font-serif text-2xl font-semibold mb-2">Admin Access</h1>
          <p className="text-xs text-muted-foreground mb-6">Enter the admin passphrase to access the request management dashboard.</p>
          <input
            type="password"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAuth()}
            placeholder="Admin passphrase"
            className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm mb-4 focus:outline-none focus:ring-1 focus:ring-accent"
          />
          <Button onClick={handleAuth} className="w-full">Authenticate</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <header className="border-b border-border bg-card/50 px-8 py-10 md:px-12 lg:px-16">
        <div className="max-w-6xl">
          <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Administrative Console</p>
          <h1 className="institutional-heading text-3xl font-semibold">Access Request Management</h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-3xl">
            Review, approve, or reject institutional access requests for Level 2–4 documents under the Controlled Distribution Protocol (CRP v1.0).
          </p>
        </div>
      </header>

      {/* Stats */}
      <div className="px-8 md:px-12 lg:px-16 py-6">
        <div className="max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Requests", value: stats.total, icon: Mail, color: "text-foreground" },
            { label: "Pending Review", value: stats.pending, icon: Clock, color: "text-yellow-600" },
            { label: "Approved", value: stats.approved, icon: CheckCircle, color: "text-green-600" },
            { label: "Rejected", value: stats.rejected, icon: XCircle, color: "text-red-600" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="governance-card flex items-center gap-3">
              <Icon className={`h-5 w-5 ${color} shrink-0`} />
              <div>
                <p className="text-2xl font-semibold">{value}</p>
                <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl flex gap-2 mb-6">
          {["all", "pending", "approved", "rejected"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Request list */}
      <div className="px-8 md:px-12 lg:px-16 pb-12">
        <div className="max-w-6xl space-y-3">
          {loading ? (
            <p className="text-sm text-muted-foreground text-center py-12">Loading requests…</p>
          ) : filteredRequests.length === 0 ? (
            <div className="governance-card text-center py-12">
              <Mail className="h-8 w-8 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">No {filter === "all" ? "" : filter} requests found.</p>
            </div>
          ) : (
            filteredRequests.map((req) => (
              <div
                key={req.id}
                className="governance-card cursor-pointer hover:border-accent/30 transition-colors"
                onClick={() => setSelectedRequest(selectedRequest?.id === req.id ? null : req)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-serif text-sm font-semibold">{req.full_name}</h3>
                      <Badge variant="outline" className={`text-[9px] ${statusColors[req.status] || ""}`}>
                        {req.status.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{req.organization} · {req.title_role}</p>
                    <div className="flex items-center gap-3 mt-1.5 text-[10px] font-mono text-muted-foreground/60">
                      <span>{req.requested_level}</span>
                      <span>·</span>
                      <span>{req.country}</span>
                      <span>·</span>
                      <span>{new Date(req.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Eye className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-1" />
                </div>

                {selectedRequest?.id === req.id && (
                  <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Email</p>
                        <p className="text-xs">{req.email}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Department Type</p>
                        <p className="text-xs">{req.department_type || "—"}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Evaluation Purpose</p>
                        <p className="text-xs">{req.evaluation_purpose}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Jurisdiction</p>
                        <p className="text-xs">{(req as any).jurisdiction || "—"}</p>
                      </div>
                    </div>
                    {req.purpose_detail && (
                      <div>
                        <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Purpose Detail</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{req.purpose_detail}</p>
                      </div>
                    )}
                    {req.document_categories && req.document_categories.length > 0 && (
                      <div>
                        <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Requested Categories</p>
                        <div className="flex flex-wrap gap-1.5">
                          {req.document_categories.map((cat) => (
                            <span key={cat} className="text-[10px] font-mono bg-muted px-2 py-0.5 rounded-sm">{cat}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-[10px]">
                      <span className={req.email_verified ? "text-green-600" : "text-yellow-600"}>
                        {req.email_verified ? "✓ Email verified" : "⏳ Email unverified"}
                      </span>
                      <span className="text-muted-foreground/30">·</span>
                      <span className={req.crp_acknowledged ? "text-green-600" : "text-red-600"}>
                        {req.crp_acknowledged ? "✓ CRP acknowledged" : "✗ CRP not acknowledged"}
                      </span>
                      <span className="text-muted-foreground/30">·</span>
                      <span className={req.nda_required ? "text-accent" : "text-muted-foreground"}>
                        {req.nda_required ? "NDA required" : "No NDA"}
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground/40 font-mono">ID: {req.id}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
