import { PageHeader, Section } from "@/components/PageComponents";
import { useViewMode } from "@/contexts/ViewModeContext";
import { CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const RECORD_TYPES = [
  "Government Decision",
  "Procurement Action",
  "Regulatory Filing",
  "Judicial Ruling",
  "Audit Report",
  "Omission Event",
];

const DataEntry = () => {
  const { isPlain } = useViewMode();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    type: RECORD_TYPES[0],
    description: "",
    actor: "",
    date: new Date().toISOString().split("T")[0],
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ type: RECORD_TYPES[0], description: "", actor: "", date: new Date().toISOString().split("T")[0], notes: "" });
  };

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Data Entry Simulation"
        subtitle={
          isPlain
            ? "See how a governance record would be entered into the system."
            : "Demonstration of the GRGF record submission interface. No authoritative records are created."
        }
      />

      <Section>
        <div className="max-w-xl">
          {submitted ? (
            <div className="governance-card text-center py-12">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2">Simulation Complete</h3>
              <p className="text-sm text-muted-foreground mb-2">
                No authoritative record was created.
              </p>
              <p className="text-xs text-muted-foreground mb-6">
                In a live system, this submission would be processed through the Governance Operating System
                for classification, authority validation, and hash-sealing.
              </p>
              <div className="governance-card bg-background text-left mb-6">
                <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-2">Simulated Record Summary</p>
                <dl className="space-y-1 text-sm">
                  <div className="flex gap-2"><dt className="text-muted-foreground font-mono text-xs min-w-[80px]">Type:</dt><dd>{form.type}</dd></div>
                  <div className="flex gap-2"><dt className="text-muted-foreground font-mono text-xs min-w-[80px]">Actor:</dt><dd>{form.actor || "—"}</dd></div>
                  <div className="flex gap-2"><dt className="text-muted-foreground font-mono text-xs min-w-[80px]">Date:</dt><dd>{form.date}</dd></div>
                  <div className="flex gap-2"><dt className="text-muted-foreground font-mono text-xs min-w-[80px]">ID:</dt><dd className="font-mono text-accent">GRGF-SIM-{Math.floor(Math.random() * 9000 + 1000)}</dd></div>
                </dl>
              </div>
              <button onClick={handleReset} className="px-6 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="governance-card space-y-5">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Record Type</label>
                <div className="relative">
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm appearance-none pr-8"
                  >
                    {RECORD_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Describe the institutional action, decision, or event…"
                  required
                  maxLength={500}
                  className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm h-24 resize-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Actor / Institution</label>
                <input
                  type="text"
                  value={form.actor}
                  onChange={(e) => setForm({ ...form, actor: e.target.value })}
                  placeholder="e.g. Ministry of Finance"
                  required
                  maxLength={100}
                  className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Notes (Optional)</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Additional context or observations…"
                  maxLength={300}
                  className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm h-16 resize-none"
                />
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
                Submit Simulated Record
              </button>
              <p className="text-xs text-muted-foreground text-center italic">
                This form is for demonstration only. No data is stored or transmitted.
              </p>
            </form>
          )}
        </div>
      </Section>
    </div>
  );
};

export default DataEntry;
