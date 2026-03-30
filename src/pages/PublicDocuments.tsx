import { Link } from "react-router-dom";
import { Download, ArrowRight, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { documentCategories } from "@/data/documentCatalog";

export default function PublicDocuments() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return documentCategories;
    const q = search.toLowerCase();
    return documentCategories
      .map((cat) => ({
        ...cat,
        files: cat.files.filter(
          (f) => f.name.toLowerCase().includes(q) || f.path.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.files.length > 0);
  }, [search]);

  const totalFiles = documentCategories.reduce((sum, cat) => sum + cat.files.length, 0);

  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="max-w-2xl mb-10">
        <p className="text-overline font-semibold text-primary tracking-widest uppercase mb-4">Resources</p>
        <h1 className="text-display font-bold text-foreground mb-4">Official GRGF Documents</h1>
        <p className="text-body-lg text-muted-foreground leading-relaxed">
          Access the complete institutional document library — {totalFiles} documents
          across {documentCategories.length} categories. All files are downloadable and printable.
        </p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search documents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="space-y-8">
        {filtered.map((cat) => (
          <div key={cat.title} className="bg-card border border-border rounded-xl p-6 lg:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <cat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-heading-3 font-bold text-foreground">{cat.title}</h2>
                <p className="text-caption text-muted-foreground mt-1">
                  {cat.desc} · {cat.files.length} files
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {cat.files.map((file) => (
                <a
                  key={file.path}
                  href={file.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/60 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase px-1.5 py-0.5 bg-muted rounded">
                      {file.path.split(".").pop()}
                    </span>
                    <span className="text-sm text-foreground">{file.name}</span>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No documents matching "{search}"</p>
        )}
      </div>

      <div className="mt-12 p-8 bg-muted/30 border border-border rounded-xl text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Looking for restricted institutional documents? Level 2+ access requires authorization.
        </p>
        <Link
          to="/controlled-access"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Request Institutional Access
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-6 text-center">
        <p className="text-[10px] text-muted-foreground/60">
          Global Record Governance Framework — Invented and Owned by Tarek Wahid · Canadian Patent Application No. CA 3,300,102
        </p>
      </div>
    </div>
  );
}
