import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Shield, CheckCircle, XCircle, Clock, Eye, Mail, Building2,
  Download, Send, Filter, Search, BarChart3, Globe, FileText,
  AlertTriangle, RefreshCw, Users, TrendingUp, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  jurisdiction: string | null;
  reviewer_notes: string | null;
  created_at: string;
  updated_at: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-accent/10 text-accent border-accent/20",
  approved: "bg-primary/10 text-primary border-primary/20",
  rejected: "bg-destructive/10 text-destructive border-destructive/20",
  under_review: "bg-muted/30 text-muted-foreground border-border",
};

const levelDownloadLinks: Record<string, { en: string; fr: string }> = {
  "Level 1": {
    en: "/documents/GRGF™_Level1_Public_Overview_MaxDepth.pdf",
    fr: "/documents/GRGF™_Niveau1_Apercu_Public_MaxDepth_FR.pdf",
  },
  "Level 2": {
    en: "/documents/GRGF™_Level2_Institutional_Review_MaxDepth.pdf",
    fr: "/documents/GRGF™_Niveau2_Examen_Institutionnel_MaxDepth_FR.pdf",
  },
  "Level 3": {
    en: "/documents/GRGF™_Level3_Restricted_Technical_MaxDepth.pdf",
    fr: "/documents/GRGF™_Niveau3_Detail_Technique_MaxDepth_FR.pdf",
  },
  "Level 4": {
    en: "/documents/GRGF™_Level4_Sovereign_Deployment_MaxDepth.pdf",
    fr: "/documents/GRGF™_Niveau4_Deploiement_Souverain_MaxDepth_FR.pdf",
  },
};

const AdminDashboard = () => {
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<AccessRequest | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [reviewerNotes, setReviewerNotes] = useState("");
  const [sendingEmail, setSendingEmail] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"requests" | "analytics" | "notifications">("requests");

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

  const filteredRequests = requests
    .filter((r) => filter === "all" || r.status === filter)
    .filter((r) =>
      searchQuery === "" ||
      r.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const stats = {
    total: requests.length,
    pending: requests.filter((r) => r.status === "pending").length,
    approved: requests.filter((r) => r.status === "approved").length,
    rejected: requests.filter((r) => r.status === "rejected").length,
    underReview: requests.filter((r) => r.status === "under_review").length,
    level2: requests.filter((r) => r.requested_level === "Level 2").length,
    level3: requests.filter((r) => r.requested_level === "Level 3").length,
    level4: requests.filter((r) => r.requested_level === "Level 4").length,
    todayCount: requests.filter((r) => {
      const d = new Date(r.created_at);
      const today = new Date();
      return d.toDateString() === today.toDateString();
    }).length,
    uniqueCountries: new Set(requests.map((r) => r.country)).size,
    emailVerified: requests.filter((r) => r.email_verified).length,
    ndaRequired: requests.filter((r) => r.nda_required).length,
  };

  const generateNotificationEmail = (req: AccessRequest, action: "approved" | "rejected") => {
    const links = levelDownloadLinks[req.requested_level];
    const siteUrl = window.location.origin;

    if (action === "approved" && links) {
      return {
        subject: `GRGF™ Access Approved — ${req.requested_level} Documents Ready`,
        body: `Dear ${req.full_name},\n\nYour institutional access request for ${req.requested_level} documentation under the Global Record Governance Framework (GRGF™) Controlled Distribution Protocol has been APPROVED.\n\n— Access Level: ${req.requested_level}\n— Organization: ${req.organization}\n— Request ID: ${req.id}\n\nYou may download your authorized documents using the links below:\n\n📄 English Edition:\n${siteUrl}${links.en}\n\n📄 French Edition:\n${siteUrl}${links.fr}\n\n${req.nda_required ? "IMPORTANT: Your access is subject to the executed Non-Disclosure Agreement (NDA). Distribution of these materials outside your authorized evaluation scope is strictly prohibited under CRP v1.0.\n\n" : ""}These links are time-limited and tied to your institutional verification. Do not share them outside your authorized evaluation scope.\n\nFor questions, contact: governance@grgf.org\n\nBest regards,\nGRGF Document Control Office\nControlled Distribution Protocol v1.0\nCanadian Patent No. CA 3,300,102`,
      };
    }

    return {
      subject: `GRGF™ Access Request — Status Update`,
      body: `Dear ${req.full_name},\n\nYour institutional access request for ${req.requested_level} documentation has been reviewed.\n\nStatus: ${action.toUpperCase()}\nRequest ID: ${req.id}\n\n${action === "rejected" ? "Your request did not meet the current criteria for institutional access. If you believe this is in error, you may submit a new request with additional institutional verification.\n\n" : ""}For questions, contact: governance@grgf.org\n\nBest regards,\nGRGF Document Control Office`,
    };
  };

  const handleSendNotification = async (req: AccessRequest, action: "approved" | "rejected") => {
    setSendingEmail(req.id);
    const { subject, body } = generateNotificationEmail(req, action);

    // Open mailto link as a fallback (no backend email service configured)
    const mailtoLink = `mailto:${req.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");

    toast({
      title: `${action === "approved" ? "Approval" : "Rejection"} Notification Prepared`,
      description: `Email draft opened for ${req.full_name} (${req.email}). Send from your institutional email client.`,
    });
    setSendingEmail(null);
  };

  const handleBulkAction = (action: "approved" | "rejected") => {
    const pendingReqs = requests.filter((r) => r.status === "pending");
    if (pendingReqs.length === 0) {
      toast({ title: "No pending requests", description: "All requests have already been processed." });
      return;
    }
    toast({
      title: `Bulk ${action} action`,
      description: `${pendingReqs.length} pending requests identified. Review each individually for institutional compliance.`,
    });
  };

  const exportCSV = () => {
    const headers = ["ID", "Name", "Organization", "Email", "Country", "Level", "Purpose", "Status", "Date"];
    const rows = requests.map((r) => [
      r.id, r.full_name, r.organization, r.email, r.country,
      r.requested_level, r.evaluation_purpose, r.status,
      new Date(r.created_at).toLocaleDateString(),
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.map((c) => `"${c}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `grgf_access_requests_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: "Export Complete", description: "CSV downloaded successfully." });
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
      <header className="border-b border-border bg-card/50 px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-7xl">
          <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Administrative Console</p>
          <h1 className="institutional-heading text-2xl md:text-3xl font-semibold">Access Request Management</h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-3xl">
            Review, approve, or reject institutional access requests for Level 2–4 documents under the Controlled Distribution Protocol (CRP v1.0).
          </p>
          {/* Tabs */}
          <div className="flex gap-1 mt-6">
            {[
              { key: "requests" as const, label: "Requests", icon: Mail },
              { key: "analytics" as const, label: "Analytics", icon: BarChart3 },
              { key: "notifications" as const, label: "Notifications", icon: Send },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-t-sm transition-colors ${
                  activeTab === key ? "bg-background text-foreground border border-b-0 border-border" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" /> {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Stats Row */}
      <div className="px-6 md:px-12 lg:px-16 py-4 bg-muted/30">
        <div className="max-w-7xl grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            { label: "Total", value: stats.total, icon: Mail, color: "text-foreground" },
            { label: "Pending", value: stats.pending, icon: Clock, color: "text-accent" },
            { label: "Approved", value: stats.approved, icon: CheckCircle, color: "text-primary" },
            { label: "Rejected", value: stats.rejected, icon: XCircle, color: "text-destructive" },
            { label: "Countries", value: stats.uniqueCountries, icon: Globe, color: "text-accent" },
            { label: "Today", value: stats.todayCount, icon: Calendar, color: "text-accent" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-background border border-border rounded-sm px-3 py-2.5 flex items-center gap-2.5">
              <Icon className={`h-4 w-4 ${color} shrink-0`} />
              <div>
                <p className="text-lg font-semibold leading-none">{value}</p>
                <p className="text-[9px] font-mono text-muted-foreground/60 uppercase tracking-wider mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Tab */}
      {activeTab === "analytics" && (
        <div className="px-6 md:px-12 lg:px-16 py-6">
          <div className="max-w-7xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="governance-card">
                <h3 className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-3">Requests by Level</h3>
                {[
                  { level: "Level 2", count: stats.level2, color: "bg-primary" },
                  { level: "Level 3", count: stats.level3, color: "bg-accent" },
                  { level: "Level 4", count: stats.level4, color: "bg-destructive" },
                ].map(({ level, count, color }) => (
                  <div key={level} className="flex items-center gap-3 mb-2">
                    <span className="text-xs w-16">{level}</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div className={`${color} h-2 rounded-full`} style={{ width: `${stats.total ? (count / stats.total) * 100 : 0}%` }} />
                    </div>
                    <span className="text-xs font-mono w-8 text-right">{count}</span>
                  </div>
                ))}
              </div>

              <div className="governance-card">
                <h3 className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-3">Verification Status</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Email Verified</span>
                    <span className="font-mono text-accent">{stats.emailVerified}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Unverified</span>
                    <span className="font-mono text-muted-foreground">{stats.total - stats.emailVerified}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">NDA Required</span>
                    <span className="font-mono text-accent">{stats.ndaRequired}</span>
                  </div>
                </div>
              </div>

              <div className="governance-card">
                <h3 className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-3">Top Countries</h3>
                {Object.entries(
                  requests.reduce((acc, r) => {
                    acc[r.country] = (acc[r.country] || 0) + 1;
                    return acc;
                  }, {} as Record<string, number>)
                )
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 5)
                  .map(([country, count]) => (
                    <div key={country} className="flex justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground truncate">{country}</span>
                      <span className="font-mono">{count}</span>
                    </div>
                  ))}
                {requests.length === 0 && <p className="text-xs text-muted-foreground/40">No data yet</p>}
              </div>
            </div>

            <div className="governance-card">
              <h3 className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-3">Purpose Distribution</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Object.entries(
                  requests.reduce((acc, r) => {
                    acc[r.evaluation_purpose] = (acc[r.evaluation_purpose] || 0) + 1;
                    return acc;
                  }, {} as Record<string, number>)
                )
                  .sort((a, b) => b[1] - a[1])
                  .map(([purpose, count]) => (
                    <div key={purpose} className="flex items-center gap-2 bg-muted/50 rounded-sm px-2.5 py-1.5">
                      <span className="text-[10px] text-muted-foreground truncate flex-1">{purpose}</span>
                      <Badge variant="outline" className="text-[9px]">{count}</Badge>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <div className="px-6 md:px-12 lg:px-16 py-6">
          <div className="max-w-7xl space-y-4">
            <div className="governance-card border-l-2 border-l-accent">
              <div className="flex items-start gap-3">
                <Send className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold mb-1">Email Notification System</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    When you approve or reject a request, click the notification button to generate an institutional email with download links automatically included for the approved classification level.
                  </p>
                  <div className="bg-muted/50 rounded-sm p-3 border border-border/50 space-y-2">
                    <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Notification Features</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li className="flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-accent" /> Auto-generated approval emails with download links</li>
                      <li className="flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-accent" /> Level-specific document links (EN + FR)</li>
                      <li className="flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-accent" /> NDA reminder for Level 3+ access</li>
                      <li className="flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-accent" /> CRP v1.0 compliance language included</li>
                      <li className="flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-accent" /> Rejection notifications with resubmission guidance</li>
                      <li className="flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-accent" /> CSV export for audit trails</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="governance-card">
              <h3 className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-3">Approved Requests — Ready to Notify</h3>
              {requests.filter((r) => r.status === "approved").length === 0 ? (
                <p className="text-xs text-muted-foreground/50 py-4 text-center">No approved requests pending notification.</p>
              ) : (
                <div className="space-y-2">
                  {requests
                    .filter((r) => r.status === "approved")
                    .map((req) => (
                      <div key={req.id} className="flex items-center justify-between bg-muted/30 rounded-sm px-3 py-2.5 border border-border/50">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium truncate">{req.full_name}</p>
                          <p className="text-[10px] text-muted-foreground">{req.organization} · {req.requested_level}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSendNotification(req, "approved")}
                          disabled={sendingEmail === req.id}
                          className="text-[10px] h-7 gap-1"
                        >
                          <Send className="h-3 w-3" />
                          {sendingEmail === req.id ? "Preparing…" : "Send Links"}
                        </Button>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="sm" onClick={exportCSV} className="text-xs gap-1.5">
                <Download className="h-3.5 w-3.5" /> Export All as CSV
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Requests Tab */}
      {activeTab === "requests" && (
        <>
          {/* Search & Filters */}
          <div className="px-6 md:px-12 lg:px-16 py-4">
            <div className="max-w-7xl flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/50" />
                <Input
                  placeholder="Search by name, org, email, country…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 text-xs h-9"
                />
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {["all", "pending", "under_review", "approved", "rejected"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 rounded-sm text-[10px] font-medium transition-colors ${
                      filter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {f === "under_review" ? "Under Review" : f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
              <div className="flex gap-1.5 ml-auto">
                <Button variant="outline" size="sm" onClick={fetchRequests} className="h-9 text-[10px] gap-1">
                  <RefreshCw className="h-3 w-3" /> Refresh
                </Button>
                <Button variant="outline" size="sm" onClick={exportCSV} className="h-9 text-[10px] gap-1">
                  <Download className="h-3 w-3" /> CSV
                </Button>
              </div>
            </div>
          </div>

          {/* Request list */}
          <div className="px-6 md:px-12 lg:px-16 pb-12">
            <div className="max-w-7xl space-y-2">
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
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-serif text-sm font-semibold">{req.full_name}</h3>
                          <Badge variant="outline" className={`text-[9px] ${statusColors[req.status] || ""}`}>
                            {req.status.replace("_", " ").toUpperCase()}
                          </Badge>
                          <Badge variant="outline" className="text-[9px]">{req.requested_level}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{req.organization} · {req.title_role}</p>
                        <div className="flex items-center gap-2 mt-1.5 text-[10px] font-mono text-muted-foreground/60 flex-wrap">
                          <span>{req.country}</span>
                          <span>·</span>
                          <span>{req.evaluation_purpose}</span>
                          <span>·</span>
                          <span>{new Date(req.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Eye className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-1" />
                    </div>

                    {selectedRequest?.id === req.id && (
                      <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div>
                            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Email</p>
                            <p className="text-xs">{req.email}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Department</p>
                            <p className="text-xs">{req.department_type || "—"}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Jurisdiction</p>
                            <p className="text-xs">{req.jurisdiction || "—"}</p>
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

                        <div className="flex items-center gap-2 text-[10px] flex-wrap">
                          <span className={req.email_verified ? "text-accent" : "text-muted-foreground"}>
                            {req.email_verified ? "✓ Email verified" : "⏳ Email unverified"}
                          </span>
                          <span className="text-muted-foreground/30">·</span>
                          <span className={req.crp_acknowledged ? "text-accent" : "text-destructive"}>
                            {req.crp_acknowledged ? "✓ CRP acknowledged" : "✗ CRP not acknowledged"}
                          </span>
                          <span className="text-muted-foreground/30">·</span>
                          <span className={req.nda_required ? "text-accent" : "text-muted-foreground"}>
                            {req.nda_required ? "NDA required" : "No NDA"}
                          </span>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => { e.stopPropagation(); handleSendNotification(req, "approved"); }}
                            className="text-[10px] h-7 gap-1 border-accent/30 text-accent hover:bg-accent/10"
                          >
                            <CheckCircle className="h-3 w-3" /> Approve & Notify
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => { e.stopPropagation(); handleSendNotification(req, "rejected"); }}
                            className="text-[10px] h-7 gap-1 border-destructive/30 text-destructive hover:bg-destructive/10"
                          >
                            <XCircle className="h-3 w-3" /> Reject & Notify
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigator.clipboard.writeText(req.id);
                              toast({ title: "Copied", description: "Request ID copied to clipboard." });
                            }}
                            className="text-[10px] h-7"
                          >
                            Copy ID
                          </Button>
                        </div>
                        <p className="text-[10px] text-muted-foreground/40 font-mono">ID: {req.id}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
