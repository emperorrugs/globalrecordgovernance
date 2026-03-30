import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Play, CheckCircle, Clock, ChevronRight, Hash, XCircle, Eye, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: 1,
    title: 'Opening Statement',
    duration: '10 sec',
    icon: Play,
    color: '#00A4EF',
    script: '"Today I\'ll show you something simple but powerful: how a government action becomes a permanent, verifiable fact."',
    action: null,
    keyPoints: ['Set the tone: this is infrastructure, not software', 'Emphasize the word "permanent"'],
  },
  {
    id: 2,
    title: 'Create a Governance Record',
    duration: '60 sec',
    icon: Shield,
    color: '#7FBA00',
    script: '"This represents a real government decision at the moment it happens. We\'re recording a procurement approval — the kind of event that, in most governments today, exists only as a PDF buried in a shared drive."',
    action: { label: 'Go to Create Record', path: '/app/records/create' },
    keyPoints: [
      'Use the procurement example: Highway Expansion Contract',
      'Highlight the structured fields: actor, authority, jurisdiction',
      'Emphasize: "This is execution-time capture — not retrospective documentation"',
    ],
  },
  {
    id: 3,
    title: 'System Processing',
    duration: '30 sec',
    icon: Hash,
    color: '#FFB900',
    script: '"As soon as we submit, GRGF does not interpret — it validates, normalizes, hashes, and locks the record into an append-only chain. No human can override this process."',
    action: null,
    keyPoints: [
      'Point to the processing animation',
      'Mention SHA-256, Merkle roots, append-only',
      'Key phrase: "The system does not interpret reality. It records it."',
    ],
  },
  {
    id: 4,
    title: 'Record Confirmation',
    duration: '60 sec',
    icon: CheckCircle,
    color: '#7FBA00',
    script: '"This record now cannot be altered — not by the system, not by users, not by administrators, not by anyone. It is cryptographically sealed with a unique SHA-256 hash linked to every previous record in the chain."',
    action: { label: 'View Records', path: '/app/records' },
    keyPoints: [
      'Show the Record ID, SHA-256 hash, and timestamp',
      'Point to the status: SEALED',
      'Emphasize: "This is the same level of integrity used in blockchain — without the blockchain."',
    ],
  },
  {
    id: 5,
    title: 'Independent Verification',
    duration: '60 sec',
    icon: Eye,
    color: '#00A4EF',
    script: '"Anyone — an auditor, a regulator, a journalist, or a citizen — can verify this record independently, without system access, without an account. This is what we mean by \'public verifiability\'."',
    action: { label: 'Go to Verification', path: '/verify' },
    keyPoints: [
      'Enter the verification token',
      'Show the result: VERIFIED, Hash Match: TRUE',
      'Emphasize: "No sensitive content is exposed. Only integrity is confirmed."',
    ],
  },
  {
    id: 6,
    title: 'Tamper Detection',
    duration: '30 sec',
    icon: XCircle,
    color: '#E74856',
    script: '"Now let me show you what happens if anyone attempts to alter a record after it\'s been sealed."',
    action: { label: 'Go to Tamper Test', path: '/app/tamper-test' },
    keyPoints: [
      'Modify any field in the tamper simulation',
      'Show the instant: ❌ INVALID — Tampering Detected',
      'Key phrase: "If anything changes, the system detects it immediately."',
    ],
  },
  {
    id: 7,
    title: 'Chain Integrity',
    duration: '20 sec',
    icon: Shield,
    color: '#8661C5',
    script: '"Every record is cryptographically linked to the one before it. Breaking one link breaks the entire chain — making retroactive manipulation mathematically impossible."',
    action: { label: 'View Chain', path: '/app/chain' },
    keyPoints: [
      'Show the chain visualization',
      'Point to hash linkage between records',
      'Status: CHAIN INTACT',
    ],
  },
  {
    id: 8,
    title: 'Closing Statement',
    duration: '20 sec',
    icon: Shield,
    color: '#00A4EF',
    script: '"GRGF doesn\'t replace systems. It makes them accountable — permanently. This is the missing trust layer of Digital Public Infrastructure."',
    action: null,
    keyPoints: [
      'Pause for effect',
      'End with: "GRGF does not interpret reality. It records it — immutably."',
      'Open for questions',
    ],
  },
];

export default function DemoScript() {
  const [activeStep, setActiveStep] = useState(0);
  const totalDuration = '4–5 minutes';

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <Badge variant="outline" className="mb-3 text-xs font-mono">PRESENTATION GUIDE</Badge>
        <h1 className="text-2xl font-bold tracking-tight">GRGF Live Demo Script</h1>
        <p className="text-sm text-muted-foreground mt-2">
          A structured walkthrough for government officials, investors, and institutional evaluators.
          Total duration: <strong>{totalDuration}</strong>.
        </p>
      </div>

      {/* Quick Nav */}
      <Card className="p-4">
        <div className="flex items-center gap-2 flex-wrap">
          {steps.map((step, i) => (
            <Button
              key={step.id}
              variant={activeStep === i ? 'default' : 'ghost'}
              size="sm"
              className="text-xs gap-1"
              onClick={() => setActiveStep(i)}
            >
              <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold">{step.id}</span>
              <span className="hidden sm:inline">{step.title}</span>
            </Button>
          ))}
        </div>
      </Card>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isActive = activeStep === i;
          return (
            <Card
              key={step.id}
              className={`p-5 transition-all cursor-pointer ${isActive ? 'ring-2 ring-primary shadow-lg' : 'opacity-70 hover:opacity-100'}`}
              onClick={() => setActiveStep(i)}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${step.color}15` }}>
                  <Icon className="h-5 w-5" style={{ color: step.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">Step {step.id}: {step.title}</h3>
                    <Badge variant="secondary" className="text-[10px] gap-1"><Clock className="h-3 w-3" />{step.duration}</Badge>
                  </div>

                  {isActive && (
                    <div className="mt-4 space-y-4">
                      {/* Script */}
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4" style={{ borderColor: step.color }}>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Say This</p>
                        <p className="text-sm italic leading-relaxed">{step.script}</p>
                      </div>

                      {/* Key Points */}
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Key Points</p>
                        <ul className="space-y-1.5">
                          {step.keyPoints.map((kp, ki) => (
                            <li key={ki} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ChevronRight className="h-4 w-4 shrink-0 mt-0.5" style={{ color: step.color }} />
                              {kp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action */}
                      {step.action && (
                        <Link to={step.action.path}>
                          <Button variant="outline" className="gap-2 text-sm">
                            {step.action.label} <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Audience Tips */}
      <Card className="p-6 bg-muted/30">
        <h3 className="font-semibold mb-4 flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Audience-Specific Tips</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Badge className="bg-[#00A4EF]/10 text-[#00A4EF] text-xs">Government CIO</Badge>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Emphasize data sovereignty</li>
              <li>• Highlight on-premise deployment</li>
              <li>• Show multi-tenant isolation</li>
              <li>• Reference OECD/World Bank alignment</li>
            </ul>
          </div>
          <div className="space-y-2">
            <Badge className="bg-[#7FBA00]/10 text-[#7FBA00] text-xs">Investor</Badge>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Lead with the $1B+ market opportunity</li>
              <li>• Show 126 applications × 12 sectors</li>
              <li>• Emphasize patent protection (CA 3,300,102)</li>
              <li>• Highlight recurring revenue model</li>
            </ul>
          </div>
          <div className="space-y-2">
            <Badge className="bg-[#E74856]/10 text-[#E74856] text-xs">Multilateral Body</Badge>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Frame as DPI Layer 3 (Governance)</li>
              <li>• Show federation capabilities</li>
              <li>• Reference UN/UNESCO alignment</li>
              <li>• Emphasize public verifiability</li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="text-center pt-4">
        <p className="text-xs text-muted-foreground">GRGF does not interpret reality. It records it — immutably.</p>
      </div>
    </div>
  );
}
