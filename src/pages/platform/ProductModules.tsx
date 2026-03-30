import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Shield, Database, Globe, Search, FileCheck, Activity, Eye,
  Server, Cloud, Building2, CheckCircle, ArrowRight, Layers,
  Lock, Zap, Users, BarChart3,
} from 'lucide-react';

const modules = [
  {
    id: 'core-ledger',
    name: 'GRGF Core Ledger',
    tagline: 'The Append-Only Evidence Backbone',
    description: 'Immutable record storage with SHA-256 hash chaining, Merkle proofs, and deterministic event capture. The foundational truth layer for all governance operations.',
    icon: Database,
    color: '#00A4EF',
    users: ['Records Officers', 'System Administrators', 'CIOs'],
    deployments: ['Cloud', 'On-Premise', 'Sovereign Node'],
    capabilities: ['Append-only record storage', 'SHA-256 hash chaining', 'Merkle root computation', 'Event normalization', 'Multi-tenant isolation'],
    trustFeatures: ['Tamper-evident architecture', 'Zero-override policy', 'Cryptographic integrity proofs'],
    sector: 'All Sectors',
    function: 'Records',
  },
  {
    id: 'verification-api',
    name: 'GRGF Verification API',
    tagline: 'Public Validation Endpoint',
    description: 'Enable any external party to independently verify record integrity, provenance, and status without system access. The trust bridge between institutions and the public.',
    icon: Search,
    color: '#7FBA00',
    users: ['Public Verifiers', 'Auditors', 'Regulators', 'Citizens'],
    deployments: ['Cloud', 'Sovereign Node'],
    capabilities: ['Token-based verification', 'QR code validation', 'Inclusion proofs', 'Consistency proofs', 'Non-existence proofs'],
    trustFeatures: ['No content exposure', 'Cryptographic proof artifacts', 'Independent verification'],
    sector: 'All Sectors',
    function: 'Verification',
  },
  {
    id: 'institutional-node',
    name: 'GRGF Institutional Node',
    tagline: 'Multi-Tenant Deployment Unit',
    description: 'Deploy GRGF within a single institution with complete tenant isolation, role-based access, workflow automation, and jurisdiction-specific configuration.',
    icon: Building2,
    color: '#FFB900',
    users: ['Ministries', 'Agencies', 'Regulators', 'Hospitals'],
    deployments: ['On-Premise', 'Sovereign Node', 'Cloud'],
    capabilities: ['Multi-department support', 'Role-based access (9 roles)', 'Workflow automation', 'Jurisdiction configuration', 'Audit trail'],
    trustFeatures: ['Data sovereignty', 'Air-gapped option', 'Local encryption'],
    sector: 'Government',
    function: 'Records',
  },
  {
    id: 'federation-node',
    name: 'GRGF Federation Node',
    tagline: 'Cross-Jurisdiction Interoperability',
    description: 'Enable sovereign interoperability between institutions and jurisdictions through cross-witnessed Merkle roots, preventing split-view attacks while maintaining data sovereignty.',
    icon: Globe,
    color: '#E74856',
    users: ['Federation Regulators', 'Multilateral Bodies', 'Cross-Border Agencies'],
    deployments: ['Sovereign Node'],
    capabilities: ['Cross-node Merkle witnessing', 'Bilateral data sharing', 'Jurisdiction mapping', 'Treaty-level interoperability', 'Split-view prevention'],
    trustFeatures: ['No centralized override', 'Sovereign data custody', 'Mutual verification'],
    sector: 'International',
    function: 'Compliance',
  },
  {
    id: 'compliance-suite',
    name: 'GRGF Compliance Suite',
    tagline: 'Standards Alignment Engine',
    description: 'Automated compliance checking against OECD, World Bank, UN, and national governance standards. Policy-as-code evaluation with real-time gap analysis.',
    icon: FileCheck,
    color: '#8661C5',
    users: ['Compliance Officers', 'Auditors', 'Legal Teams'],
    deployments: ['Cloud', 'On-Premise'],
    capabilities: ['101-point compliance testing', 'OECD alignment scoring', 'Gap analysis reports', 'Policy-as-code (OPA/Rego)', 'Retention scheduling'],
    trustFeatures: ['Automated standard mapping', 'Evidence-backed compliance', 'Continuous monitoring'],
    sector: 'All Sectors',
    function: 'Compliance',
  },
  {
    id: 'integrity-monitor',
    name: 'GRGF Integrity Monitor',
    tagline: 'Real-Time System Health',
    description: 'Continuous monitoring of chain integrity, hash consistency, and system health. Instant detection of anomalies, tampering attempts, and integrity degradation.',
    icon: Activity,
    color: '#00B294',
    users: ['System Administrators', 'Security Officers', 'CISOs'],
    deployments: ['Cloud', 'On-Premise', 'Sovereign Node'],
    capabilities: ['Real-time chain validation', 'Tamper detection alerts', 'Hash consistency checks', 'System health dashboard', 'Anomaly detection'],
    trustFeatures: ['Zero-delay detection', 'Immutable alert log', 'Forensic replay'],
    sector: 'All Sectors',
    function: 'Verification',
  },
  {
    id: 'public-gateway',
    name: 'GRGF Public Verification Gateway',
    tagline: 'Citizen-Facing Trust Portal',
    description: 'A branded, white-label public interface allowing citizens, journalists, and oversight bodies to verify governance records independently.',
    icon: Eye,
    color: '#0078D4',
    users: ['Citizens', 'Journalists', 'Oversight Bodies', 'NGOs'],
    deployments: ['Cloud'],
    capabilities: ['White-label portal', 'QR code scanning', 'Multi-language support', 'Accessibility compliant', 'Mobile-first design'],
    trustFeatures: ['No account required', 'No data collection', 'Transparent verification'],
    sector: 'All Sectors',
    function: 'Verification',
  },
];

const deploymentModels = [
  { icon: Globe, name: 'National Deployment', desc: 'Full sovereign infrastructure for national governance frameworks across all ministries and agencies.', scale: '50M+ citizens' },
  { icon: Building2, name: 'Ministry-Level', desc: 'Dedicated deployment for a single ministry or regulatory body with full isolation.', scale: '10K–500K users' },
  { icon: Server, name: 'Agency-Level', desc: 'Targeted deployment for specific agencies, oversight bodies, or public institutions.', scale: '500–10K users' },
  { icon: Layers, name: 'Multilateral Integration', desc: 'Cross-border deployment for multilateral governance frameworks and treaty compliance.', scale: 'Multi-nation' },
];

const filters = {
  sector: ['All Sectors', 'Government', 'International'],
  function: ['All Functions', 'Records', 'Verification', 'Compliance'],
  deployment: ['All Deployments', 'Cloud', 'On-Premise', 'Sovereign Node'],
};

export default function ProductModules() {
  const [sectorFilter, setSectorFilter] = useState('All Sectors');
  const [funcFilter, setFuncFilter] = useState('All Functions');
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const filtered = modules.filter(m => {
    if (sectorFilter !== 'All Sectors' && m.sector !== sectorFilter && m.sector !== 'All Sectors') return false;
    if (funcFilter !== 'All Functions' && m.function !== funcFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="border-b border-border bg-gradient-to-b from-card to-background">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <Badge variant="outline" className="mb-4 text-xs font-mono">SOVEREIGN INFRASTRUCTURE MODULES</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">GRGF Product Modules</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Deployable governance infrastructure. Each module is a production-ready component of the Global Record Governance Framework — built for sovereign institutions.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Lock className="h-4 w-4" /> Sovereign-Grade</span>
            <span className="flex items-center gap-1.5"><Zap className="h-4 w-4" /> Production-Ready</span>
            <span className="flex items-center gap-1.5"><Shield className="h-4 w-4" /> Cryptographically Verified</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mr-2">Filter:</span>
          {filters.sector.map(s => (
            <Button key={s} variant={sectorFilter === s ? 'default' : 'outline'} size="sm" onClick={() => setSectorFilter(s)} className="text-xs">{s}</Button>
          ))}
          <span className="text-muted-foreground">·</span>
          {filters.function.map(f => (
            <Button key={f} variant={funcFilter === f ? 'default' : 'outline'} size="sm" onClick={() => setFuncFilter(f)} className="text-xs">{f}</Button>
          ))}
        </div>

        {/* Module Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(mod => {
            const Icon = mod.icon;
            const expanded = expandedModule === mod.id;
            return (
              <Card
                key={mod.id}
                className={`p-6 transition-all duration-200 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 ${expanded ? 'ring-2 ring-primary col-span-1 md:col-span-2 lg:col-span-3' : ''}`}
                onClick={() => setExpandedModule(expanded ? null : mod.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${mod.color}15` }}>
                    <Icon className="h-6 w-6" style={{ color: mod.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold tracking-tight">{mod.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{mod.tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">{mod.description}</p>

                {/* Deployment badges */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {mod.deployments.map(d => (
                    <Badge key={d} variant="secondary" className="text-[10px]">
                      {d === 'Cloud' && <Cloud className="h-3 w-3 mr-1" />}
                      {d === 'On-Premise' && <Server className="h-3 w-3 mr-1" />}
                      {d === 'Sovereign Node' && <Shield className="h-3 w-3 mr-1" />}
                      {d}
                    </Badge>
                  ))}
                </div>

                {/* Expanded details */}
                {expanded && (
                  <div className="mt-6 pt-6 border-t border-border grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Capabilities</h4>
                      <ul className="space-y-2">
                        {mod.capabilities.map(c => (
                          <li key={c} className="flex items-start gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />{c}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Trust Features</h4>
                      <ul className="space-y-2">
                        {mod.trustFeatures.map(f => (
                          <li key={f} className="flex items-start gap-2 text-sm"><Shield className="h-4 w-4 text-[#00A4EF] shrink-0 mt-0.5" />{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Primary Users</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.users.map(u => (
                          <Badge key={u} variant="outline" className="text-xs"><Users className="h-3 w-3 mr-1" />{u}</Badge>
                        ))}
                      </div>
                      <Button className="w-full mt-6 gap-2" onClick={(e) => { e.stopPropagation(); }}>
                        Request Deployment <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Deployment Models */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight">Deployment Models</h2>
            <p className="text-sm text-muted-foreground mt-2">Flexible deployment to match institutional scale and sovereignty requirements</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deploymentModels.map(dm => {
              const Icon = dm.icon;
              return (
                <Card key={dm.name} className="p-5 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{dm.name}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{dm.desc}</p>
                  <Badge variant="secondary" className="mt-3 text-[10px]">{dm.scale}</Badge>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center border-t border-border pt-12">
          <p className="text-xs text-muted-foreground">
            GRGF does not interpret reality. It records it — immutably.
          </p>
          <p className="text-[10px] font-mono text-muted-foreground/50 mt-2">
            Canadian Patent No. CA 3,300,102 · Invented by Tarek Wahid
          </p>
        </div>
      </div>
    </div>
  );
}
