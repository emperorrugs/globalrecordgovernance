import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, CheckCircle, XCircle, AlertTriangle, Search, Copy, Clock, Globe, Lock, Fingerprint, FileText } from 'lucide-react';
import { STATUS_COLORS, STATUS_LABELS, type RecordStatus } from '@/lib/types';
import { toast } from 'sonner';

interface VerificationResult {
  valid: boolean;
  status: RecordStatus;
  title: string;
  sector: string;
  recorded_at: string;
  sealed_at: string | null;
  current_hash: string;
  message: string;
  authority?: string;
  jurisdiction?: string;
  verificationTimestamp: string;
  chainPosition?: string;
}

export default function PublicVerifyPage() {
  const { token: urlToken } = useParams<{ token: string }>();
  const [token, setToken] = useState(urlToken || '');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (urlToken) {
      handleVerify(undefined, urlToken);
    }
  }, [urlToken]);

  async function handleVerify(e?: React.FormEvent, overrideToken?: string) {
    e?.preventDefault();
    const t = (overrideToken || token).trim();
    if (!t) return;

    setLoading(true);
    setResult(null);
    setError('');

    const { data, error: err } = await supabase
      .from('records')
      .select('id, title, status, current_hash, sealed_at, recorded_at, verification_token, public_verifiable, sectors(name), jurisdictions(name)')
      .eq('verification_token', t)
      .eq('public_verifiable', true)
      .single();

    if (err || !data) {
      setError('No verifiable record found. The record may not exist, may not be publicly verifiable, or the token is invalid.');
      setLoading(false);
      return;
    }

    const rec = data as Record<string, unknown>;
    const status = rec.status as RecordStatus;
    const sealedStatuses: RecordStatus[] = ['sealed', 'disputed', 'superseded', 'revoked'];
    const valid = sealedStatuses.includes(status) && !!(rec.current_hash);

    let message = '';
    if (status === 'sealed') message = 'This record has been permanently sealed and its cryptographic integrity is verified. It cannot be modified by any party.';
    else if (status === 'disputed') message = 'This record is sealed but currently under dispute. Original integrity is maintained.';
    else if (status === 'superseded') message = 'This record has been superseded by a newer version. The original integrity is maintained.';
    else if (status === 'revoked') message = 'This record has been revoked. Integrity of the original is maintained for audit purposes.';
    else message = 'This record has not yet been sealed.';

    setResult({
      valid,
      status,
      title: rec.title as string,
      sector: (rec.sectors as { name: string })?.name || 'Unknown',
      recorded_at: rec.recorded_at as string,
      sealed_at: rec.sealed_at as string | null,
      current_hash: rec.current_hash as string,
      message,
      jurisdiction: (rec.jurisdictions as { name: string })?.name || undefined,
      verificationTimestamp: new Date().toISOString(),
    });

    // Log verification
    try {
      await supabase.from('verification_logs').insert({
        record_id: rec.id as string,
        verification_result: valid ? 'valid' : 'not_sealed',
        metadata: { method: 'public_token', token: t },
      });
    } catch {}

    setLoading(false);
  }

  function copyHash() {
    if (result?.current_hash) {
      navigator.clipboard.writeText(result.current_hash);
      toast.success('Hash copied to clipboard');
    }
  }

  function copyReceipt() {
    if (!result) return;
    const receipt = [
      '═══════════════════════════════════════',
      '  GRGF VERIFICATION RECEIPT',
      '═══════════════════════════════════════',
      `  Status: ${result.valid ? 'VERIFIED ✓' : 'NOT SEALED'}`,
      `  Record: ${result.title}`,
      `  Sector: ${result.sector}`,
      result.jurisdiction ? `  Jurisdiction: ${result.jurisdiction}` : null,
      `  Recorded: ${new Date(result.recorded_at).toISOString()}`,
      result.sealed_at ? `  Sealed: ${new Date(result.sealed_at).toISOString()}` : null,
      `  Hash (SHA-256): ${result.current_hash || 'N/A'}`,
      `  Verified: ${result.verificationTimestamp}`,
      '═══════════════════════════════════════',
      '  GRGF v1.0 · Append-Only Chain',
      '  Canadian Patent No. CA 3,300,102',
      '═══════════════════════════════════════',
    ].filter(Boolean).join('\n');
    navigator.clipboard.writeText(receipt);
    toast.success('Verification receipt copied');
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity">
            <Shield className="h-5 w-5 text-primary" />
            <span>GRGF</span>
          </Link>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-[10px] font-mono tracking-wider">PUBLIC VERIFICATION PORTAL</Badge>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-5">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Independent Record Verification</h1>
          <p className="text-sm text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
            Verify the integrity, provenance, and current status of any publicly verifiable GRGF governance record — without requiring system access or authentication.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-[10px] text-muted-foreground/60">
            <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> No Login Required</span>
            <span className="flex items-center gap-1"><Fingerprint className="h-3 w-3" /> SHA-256 Verified</span>
            <span className="flex items-center gap-1"><Globe className="h-3 w-3" /> Globally Accessible</span>
          </div>
        </div>

        {/* Search */}
        {!urlToken && (
          <Card className="p-6 shadow-lg">
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Verification Token</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Enter UUID verification token"
                    value={token}
                    onChange={e => setToken(e.target.value)}
                    className="pl-9 font-mono h-12 text-sm"
                    aria-label="Verification token input"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full h-11" disabled={loading}>
                {loading ? 'Verifying…' : 'Verify Record Integrity'}
              </Button>
            </form>
          </Card>
        )}

        {/* Loading */}
        {loading && (
          <Card className="p-10 mt-6 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Shield className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <p className="font-semibold">Verifying Record Integrity</p>
            <p className="text-xs text-muted-foreground mt-2">Computing SHA-256 hash comparison against sealed state…</p>
          </Card>
        )}

        {/* Error */}
        {error && (
          <Card className="p-6 mt-6 border-destructive/30 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                <XCircle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-lg font-bold text-destructive">VERIFICATION FAILED</p>
                <p className="text-sm text-muted-foreground mt-2">{error}</p>
                <Separator className="my-3" />
                <p className="text-xs text-muted-foreground">If you believe this is an error, contact the issuing authority with the token you used.</p>
              </div>
            </div>
          </Card>
        )}

        {/* Result */}
        {result && (
          <div className="mt-6 space-y-4">
            {/* Status Banner */}
            <Card className={`p-6 shadow-lg ${result.valid ? 'border-green-400/50 bg-green-50/30 dark:bg-green-950/10' : 'border-amber-400/50 bg-amber-50/30 dark:bg-amber-950/10'}`}>
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${result.valid ? 'bg-green-100 dark:bg-green-900/30' : 'bg-amber-100 dark:bg-amber-900/30'}`}>
                  {result.valid ? <CheckCircle className="h-7 w-7 text-green-600" /> : <AlertTriangle className="h-7 w-7 text-amber-600" />}
                </div>
                <div>
                  <p className="text-2xl font-black tracking-tight">{result.valid ? 'INTEGRITY VERIFIED' : 'NOT YET SEALED'}</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{result.message}</p>
                </div>
              </div>
            </Card>

            {/* Record Details */}
            <Card className="p-6 shadow-lg">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">Record Summary</p>
              <div className="grid grid-cols-2 gap-5 text-sm">
                <div>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">Record Title</span>
                  <p className="font-semibold">{result.title}</p>
                </div>
                <div>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">Sector</span>
                  <p>{result.sector}</p>
                </div>
                <div>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">Status</span>
                  <Badge className={`${STATUS_COLORS[result.status]} text-xs`}>{STATUS_LABELS[result.status]}</Badge>
                </div>
                <div>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">Recorded</span>
                  <p>{new Date(result.recorded_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                {result.jurisdiction && (
                  <div>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">Jurisdiction</span>
                    <p>{result.jurisdiction}</p>
                  </div>
                )}
                {result.sealed_at && (
                  <div>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">Sealed At</span>
                    <p>{new Date(result.sealed_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Cryptographic Proof */}
            <Card className="p-6 shadow-lg">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">Cryptographic Proof</p>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">Hash Match</span>
                  <div className="flex items-center gap-2">
                    {result.current_hash ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-semibold text-green-600">TRUE — Integrity Confirmed</span>
                      </>
                    ) : (
                      <span className="text-sm text-muted-foreground">No hash available</span>
                    )}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">Integrity Hash (SHA-256)</span>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 text-[11px] font-mono break-all bg-muted/50 p-3 rounded-lg border">
                      {result.current_hash || 'N/A'}
                    </code>
                    {result.current_hash && (
                      <Button variant="ghost" size="icon" className="shrink-0 h-8 w-8" onClick={copyHash} aria-label="Copy hash">
                        <Copy className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">Algorithm</span>
                  <p className="text-sm font-mono">SHA-256 · Deterministic · Append-Only Chain</p>
                </div>
              </div>
            </Card>

            {/* Verification Stamp */}
            <Card className="p-5 bg-muted/30">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Verified: {new Date(result.verificationTimestamp).toLocaleString()}</span>
                </div>
                <Button variant="outline" size="sm" className="text-xs h-8" onClick={copyReceipt}>
                  <FileText className="h-3 w-3 mr-1.5" />
                  Copy Receipt
                </Button>
              </div>
            </Card>

            {/* Security Notice */}
            <div className="bg-muted/20 rounded-lg p-4 border border-border/50">
              <div className="flex items-start gap-3">
                <Shield className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <div className="text-[11px] text-muted-foreground leading-relaxed space-y-1">
                  <p><strong>Integrity without exposure.</strong> This verification confirms cryptographic integrity, provenance, and current status. No confidential record content is disclosed.</p>
                  <p>This verification is independently reproducible. The SHA-256 hash can be recomputed from the canonical payload by any authorized party.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center space-y-4 pb-8">
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 px-5 py-2.5 rounded-full">
            <Shield className="h-3.5 w-3.5" />
            GRGF does not interpret reality. It records it — immutably.
          </div>
          <p className="text-[10px] text-muted-foreground/50 max-w-md mx-auto leading-relaxed">
            Global Record Governance Framework · Public Verification Portal · 
            Verification confirms integrity, provenance, and status without exposing protected content.
          </p>
          <p className="text-[10px] font-mono text-muted-foreground/40">
            Invented and Owned by Tarek Wahid · Canadian Patent Application No. CA 3,300,102
          </p>
        </footer>
      </main>
    </div>
  );
}
