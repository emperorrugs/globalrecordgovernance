import { PageHeader, Section } from "@/components/PageComponents";
import { useViewMode } from "@/contexts/ViewModeContext";
import { Eye, Search } from "lucide-react";
import { useState } from "react";

const SIMULATED_RECORDS = [
  { id: "GRGF-SIM-0001", type: "Government Decision", status: "Approved", institution: "Ministry of Finance", date: "2024-03-15", lifecycle: ["Draft", "Review", "Approved"] },
  { id: "GRGF-SIM-0002", type: "Procurement Action", status: "Closed", institution: "National Procurement Authority", date: "2024-04-02", lifecycle: ["Draft", "Review", "Approved", "Closed"] },
  { id: "GRGF-SIM-0003", type: "Regulatory Filing", status: "Denied", institution: "Central Regulatory Office", date: "2024-05-10", lifecycle: ["Draft", "Review", "Denied"] },
  { id: "GRGF-SIM-0004", type: "Omission Event", status: "Recorded", institution: "Health Safety Board", date: "2024-06-01", lifecycle: ["Obligation Deadline", "No Action Filed", "Omission Recorded"] },
  { id: "GRGF-SIM-0005", type: "Judicial Ruling", status: "Approved", institution: "Federal Court", date: "2024-06-15", lifecycle: ["Draft", "Review", "Approved"] },
  { id: "GRGF-SIM-0006", type: "Audit Report", status: "Review", institution: "Office of the Auditor General", date: "2024-07-20", lifecycle: ["Draft", "Review"] },
];

const statusColor: Record<string, string> = {
  Draft: "text-muted-foreground",
  Review: "text-accent",
  Approved: "text-accent",
  Closed: "text-muted-foreground",
  Denied: "text-destructive",
  Recorded: "text-accent-foreground",
};

const Records = () => {
  const { isPlain } = useViewMode();
  const [selected, setSelected] = useState<typeof SIMULATED_RECORDS[0] | null>(null);
  const [search, setSearch] = useState("");

  const filtered = SIMULATED_RECORDS.filter(
    (r) =>
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      r.type.toLowerCase().includes(search.toLowerCase()) ||
      r.institution.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Record Simulator"
        subtitle={
          isPlain
            ? "Browse simulated governance records to understand how the system tracks institutional actions."
            : "Simulated record registry demonstrating GRGF record lifecycle, classification, and status management."
        }
      />

      <Section>
        {/* Search */}
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search records…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-border bg-background rounded-sm pl-9 pr-3 py-2 text-sm"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-border rounded-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-card border-b border-border">
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground tracking-wider">RECORD ID</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground tracking-wider">TYPE</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground tracking-wider">STATUS</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground tracking-wider">INSTITUTION</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground tracking-wider">DATE</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-b border-border hover:bg-card/50 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-accent">{r.id}</td>
                  <td className="px-4 py-3">{r.type}</td>
                  <td className={`px-4 py-3 font-semibold ${statusColor[r.status] || "text-foreground"}`}>{r.status}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.institution}</td>
                  <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{r.date}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setSelected(r)}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      title="View lifecycle"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">No records match your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Lifecycle Modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm" onClick={() => setSelected(null)}>
            <div className="bg-background border border-border rounded-sm p-8 max-w-md w-full mx-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-serif text-lg font-semibold mb-1">{selected.id}</h3>
              <p className="text-sm text-muted-foreground mb-6">{selected.type} — {selected.institution}</p>

              <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-3">Simulated Lifecycle</p>
              <div className="space-y-2">
                {selected.lifecycle.map((stage, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full shrink-0 ${i === selected.lifecycle.length - 1 ? "bg-accent" : "bg-border"}`} />
                    <span className={`text-sm ${i === selected.lifecycle.length - 1 ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                      {stage}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground italic">
                  This lifecycle is simulated. No authoritative record was created.
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="mt-4 w-full px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Section>

      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground italic">
          All records shown are simulated for demonstration purposes only. No authoritative governance records are created or stored.
        </p>
      </Section>
    </div>
  );
};

export default Records;
