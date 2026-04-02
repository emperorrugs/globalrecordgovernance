import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Shield, Landmark, Banknote, ClipboardCheck, AlertTriangle, Scale,
  Brain, Heart, HardHat, Code, Search, ArrowRight, ChevronDown,
  Globe, CheckCircle, Link as LinkIcon, ShieldAlert, FileCheck,
  Star, Zap, Lock, Server, Cloud, Layers, ExternalLink,
  Play, Download, TrendingUp, Award, Eye, Hash, Clock
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { marketplaceCategories, marketplaceProducts, type MarketplaceProduct } from "@/data/marketplaceProducts";

const iconMap: Record<string, any> = {
  Shield, Landmark, Banknote, ClipboardCheck, AlertTriangle, Scale,
  Brain, Heart, HardHat, Code, Link: LinkIcon, CheckCircle, ShieldAlert,
  FileCheck, Globe, Star,
};

const tierColors: Record<string, string> = {
  core: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  professional: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  enterprise: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  sovereign: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

const deployIcon: Record<string, any> = {
  SaaS: Cloud,
  "On-Premise": Server,
  API: Code,
  Hybrid: Layers,
};

function ProductCard({ product, onSelect }: { product: MarketplaceProduct; onSelect: () => void }) {
  const Icon = iconMap[product.icon] || Shield;
  return (
    <div
      onClick={onSelect}
      className="group relative bg-card border border-border rounded-2xl p-6 cursor-pointer
        hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300
        hover:-translate-y-1"
    >
      {product.featured && (
        <div className="absolute -top-3 right-4">
          <Badge className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5 gap-1">
            <Star className="w-3 h-3" /> Featured
          </Badge>
        </div>
      )}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0
          group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-foreground text-[15px] leading-tight">{product.name}</h3>
          <p className="text-muted-foreground text-xs mt-0.5">{product.tagline}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {product.deploymentTypes.map(d => {
          const DIcon = deployIcon[d];
          return (
            <span key={d} className="inline-flex items-center gap-1 text-[10px] text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
              <DIcon className="w-3 h-3" /> {d}
            </span>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <Badge variant="outline" className={`text-[10px] ${tierColors[product.tier]}`}>
          {product.tier.toUpperCase()}
        </Badge>
        <span className="text-xs text-muted-foreground">{product.pricing.startingAt}</span>
      </div>

      <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-2">
        {product.impactMetrics.slice(0, 2).map(m => (
          <span key={m.label} className="text-[10px] text-muted-foreground">
            <span className="text-primary font-semibold">{m.value}</span> {m.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProductDetail({ product, onClose }: { product: MarketplaceProduct; onClose: () => void }) {
  const Icon = iconMap[product.icon] || Shield;
  const [activeTab, setActiveTab] = useState<"overview" | "deploy" | "evidence">("overview");
  const [deploying, setDeploying] = useState(false);
  const [deployed, setDeployed] = useState(false);
  const [deployStep, setDeployStep] = useState(0);

  const startDeploy = () => {
    setDeploying(true);
    setDeployStep(0);
    const steps = [1, 2, 3, 4, 5];
    steps.forEach((s, i) => {
      setTimeout(() => {
        setDeployStep(s);
        if (s === 5) {
          setTimeout(() => { setDeploying(false); setDeployed(true); }, 800);
        }
      }, (i + 1) * 1200);
    });
  };

  const deploySteps = [
    "Initializing secure environment…",
    "Provisioning Anchor Chain™ node…",
    "Configuring authority bindings…",
    "Deploying evidence backbone…",
    "Activating verification layer…",
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-8 px-4">
      <div className="bg-card border border-border rounded-2xl max-w-4xl w-full shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="relative p-8 pb-6 border-b border-border">
          <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-xl">✕</button>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-bold text-foreground">{product.name}</h2>
                <Badge variant="outline" className={`text-[10px] ${tierColors[product.tier]}`}>
                  {product.tier.toUpperCase()}
                </Badge>
              </div>
              <p className="text-muted-foreground">{product.tagline}</p>
              <div className="flex items-center gap-3 mt-3">
                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">{product.sector}</Badge>
                {product.deploymentTypes.map(d => (
                  <span key={d} className="text-[11px] text-muted-foreground">{d}</span>
                ))}
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex gap-1 mt-6">
            {(["overview", "deploy", "evidence"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {tab === "overview" ? "Overview" : tab === "deploy" ? "Deploy" : "Evidence Layer"}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {product.impactMetrics.map(m => (
                  <div key={m.label} className="bg-muted/30 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Core Capabilities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.capabilities.map(c => (
                    <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrations & Compliance */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Integrations</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.integrations.map(i => (
                      <Badge key={i} variant="outline" className="text-xs">{i}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Compliance</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.compliance.map(c => (
                      <Badge key={c} variant="outline" className="text-xs bg-emerald-500/5 text-emerald-500 border-emerald-500/20">{c}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-muted/30 rounded-xl p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pricing Model: <span className="text-foreground font-medium">{product.pricing.model}</span></p>
                  <p className="text-2xl font-bold text-foreground mt-1">{product.pricing.startingAt}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><Play className="w-4 h-4 mr-1" /> Live Demo</Button>
                  <Button size="sm" onClick={() => setActiveTab("deploy")}><Download className="w-4 h-4 mr-1" /> Deploy</Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "deploy" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Deployment Simulation</h3>
              <p className="text-sm text-muted-foreground">Experience the deployment workflow for {product.name}. This simulation demonstrates the provisioning pipeline.</p>

              {!deploying && !deployed && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Country / Jurisdiction</label>
                      <Input placeholder="e.g. Canada" className="bg-muted/30" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Institution</label>
                      <Input placeholder="e.g. Treasury Board" className="bg-muted/30" />
                    </div>
                  </div>
                  <Button onClick={startDeploy} className="w-full">
                    <Zap className="w-4 h-4 mr-2" /> Start Deployment Simulation
                  </Button>
                </div>
              )}

              {deploying && (
                <div className="space-y-3">
                  {deploySteps.map((step, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-500 ${
                      deployStep > i ? "bg-primary/10 text-foreground" : deployStep === i ? "bg-muted/50 text-foreground animate-pulse" : "bg-muted/20 text-muted-foreground/50"
                    }`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        deployStep > i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}>
                        {deployStep > i ? "✓" : i + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              )}

              {deployed && (
                <div className="text-center space-y-4 py-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Deployment Complete</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    {product.name} has been successfully provisioned. The Anchor Chain™ evidence backbone is active and recording governance events.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="bg-muted/30 rounded-lg p-3">
                      <Hash className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Hash Chain</p>
                      <p className="text-sm font-mono text-foreground">Active</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <Eye className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Verification</p>
                      <p className="text-sm font-mono text-foreground">Online</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Latency</p>
                      <p className="text-sm font-mono text-foreground">&lt;50ms</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => { setDeployed(false); setDeployStep(0); }}>
                    Reset Simulation
                  </Button>
                </div>
              )}
            </div>
          )}

          {activeTab === "evidence" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Evidence Backbone Integration</h3>
              <p className="text-sm text-muted-foreground">Every action in {product.name} is captured by the GRGF™ Evidence Backbone.</p>

              <div className="space-y-3">
                {[
                  { time: "00:00:01", event: "System initialized", hash: "a4f8e2..." },
                  { time: "00:00:03", event: "Authority context bound", hash: "b7c1d9..." },
                  { time: "00:00:05", event: "First record ingested", hash: "c3e4f1..." },
                  { time: "00:00:08", event: "Merkle root computed", hash: "d9a2b5..." },
                  { time: "00:00:10", event: "Verification endpoint active", hash: "e1f7c8..." },
                ].map((log, i) => (
                  <div key={i} className="flex items-center gap-4 bg-muted/30 rounded-lg p-3 font-mono text-xs">
                    <span className="text-muted-foreground w-16">{log.time}</span>
                    <span className="text-foreground flex-1">{log.event}</span>
                    <span className="text-primary/70">SHA-256: {log.hash}</span>
                  </div>
                ))}
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <h4 className="text-xs font-semibold text-foreground mb-2">Integrity Proof</h4>
                <div className="font-mono text-[11px] text-muted-foreground space-y-1">
                  <p>Merkle Root: <span className="text-primary">7f8a9b2c4d...</span></p>
                  <p>Chain Length: <span className="text-foreground">5 events</span></p>
                  <p>Algorithm: <span className="text-foreground">SHA-256</span></p>
                  <p>Status: <span className="text-emerald-400">✓ Verified</span></p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<MarketplaceProduct | null>(null);

  const filtered = useMemo(() => {
    return marketplaceProducts.filter(p => {
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.tagline.toLowerCase().includes(search.toLowerCase()) ||
        p.sector.toLowerCase().includes(search.toLowerCase());
      const matchCat = !selectedCategory || p.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [search, selectedCategory]);

  const featured = marketplaceProducts.filter(p => p.featured);

  const catIcons: Record<string, any> = {
    "anti-corruption": Shield, "public-sector": Landmark, "financial": Banknote,
    "inspection": ClipboardCheck, "crisis": AlertTriangle, "legal": Scale,
    "ai-governance": Brain, "healthcare": Heart, "infrastructure": HardHat,
    "developer": Code,
  };

  return (
    <div className="min-h-screen bg-background">

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <FadeIn>
            <Badge className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 mb-6">
              <Globe className="w-3 h-3 mr-1" /> Global Infrastructure Marketplace
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              The Global Marketplace for<br />
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Governance Infrastructure
              </span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Discover, deploy, and verify sovereign-grade governance systems.
              From anti-corruption engines to AI governance modules — built on the
              GRGF™ Evidence Backbone.
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search solutions, sectors, capabilities…"
                className="pl-12 h-14 text-base bg-background/10 border-primary-foreground/20 text-primary-foreground
                  placeholder:text-primary-foreground/40 rounded-xl backdrop-blur-sm"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CATEGORIES ═══ */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {marketplaceCategories.map(cat => {
            const CIcon = catIcons[cat.id] || Shield;
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(active ? null : cat.id)}
                className={`flex items-center gap-2 p-3 rounded-xl border transition-all text-left ${
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-card border-border hover:border-primary/40 hover:shadow-md"
                }`}
              >
                <CIcon className="w-4 h-4 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-medium truncate">{cat.name}</p>
                  <p className={`text-[10px] ${active ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{cat.count} solutions</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ═══ FEATURED ═══ */}
      {!search && !selectedCategory && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <FadeIn>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Featured Solutions</h2>
                <p className="text-sm text-muted-foreground">Flagship governance infrastructure products</p>
              </div>
              <Badge variant="outline" className="text-xs"><Star className="w-3 h-3 mr-1" /> Curated</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map(p => (
                <ProductCard key={p.id} product={p} onSelect={() => setSelectedProduct(p)} />
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      {/* ═══ ALL PRODUCTS ═══ */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {selectedCategory ? marketplaceCategories.find(c => c.id === selectedCategory)?.name : "All Solutions"}
              </h2>
              <p className="text-sm text-muted-foreground">{filtered.length} solutions available</p>
            </div>
            {selectedCategory && (
              <Button variant="ghost" size="sm" onClick={() => setSelectedCategory(null)}>
                Clear filter
              </Button>
            )}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onSelect={() => setSelectedProduct(p)} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-10 h-10 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">No solutions match your criteria</p>
            </div>
          )}
        </FadeIn>
      </section>

      {/* ═══ DEVELOPER CTA ═══ */}
      <section className="bg-muted/30 border-t border-border py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <Code className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">Developer Ecosystem</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Build governance-aware applications with the GRGF™ API. Access SDKs, submit certified modules, and join the governance infrastructure developer community.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button variant="outline" asChild>
                <Link to="/developer">API Documentation</Link>
              </Button>
              <Button asChild>
                <Link to="/anchor-chain-prototype">Try the Engine <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ TRUST FOOTER ═══ */}
      <section className="border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            {["ISO 27001", "ISO 15489", "OECD DPI", "SOC 2 Type II", "GDPR", "HIPAA", "Basel III", "EU AI Act"].map(s => (
              <span key={s} className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-primary/50" /> {s}
              </span>
            ))}
          </div>
          <p className="text-center text-[11px] text-muted-foreground/60 mt-6">
            Global Record Governance Framework — Invented and Owned by Tarek Wahid · Canadian Patent No. CA 3,300,102
          </p>
        </div>
      </section>

      {/* ═══ PRODUCT DETAIL MODAL ═══ */}
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
