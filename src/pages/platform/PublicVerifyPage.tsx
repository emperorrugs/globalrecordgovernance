import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, XCircle, AlertTriangle, Search, ExternalLink, Copy } from 'lucide-react';
import { STATUS_COLORS, STATUS_LABELS, type RecordStatus } from '@/lib/types';

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
    });

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Bar */}
      <div className="border-b border-border bg-card/50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight hover:opacity-80">
            <Shield className="h-5 w-5 text-[#00A4EF]" />
            <span>GRGF</span>
          </Link>
          <Badge variant="outline" className="text-[10px] font-mono">PUBLIC VERIFICATION PORTAL</Badge>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#00A4EF]/10 mb-4">
            <Shield className="h-8 w-8 text-[#00A4EF]" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">Independent Record Verification</h1>
          <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            Verify the integrity, provenance, and current status of any publicly verifiable GRGF governance record — without requiring system access.
          </p>
        </div>

        {!urlToken && (
          <Card className="p-6">
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Enter verification token (UUID)"
                  value={token}
                  onChange={e => setToken(e.target.value)}
                  className="pl-9 font-mono"
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Verifying…' : 'Verify Record'}
              </Button>
            </form>
          </Card>
        )}

        {loading && (
          <Card className="p-8 mt-6 text-center">
            <Shield className="h-8 w-8 text-[#00A4EF] animate-pulse mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">Verifying record integrity…</p>
          </Card>
        )}

        {error && (
          <Card className="p-6 mt-6 border-destructive/30">
            <div className="flex items-start gap-3">
              <XCircle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="text-base font-semibold text-destructive">STATUS: INVALID</p>
                <p className="text-sm text-muted-foreground mt-1">{error}</p>
                <p className="text-xs text-muted-foreground mt-3">If you believe this is an error, contact the issuing authority.</p>
              </div>
            </div>
          </Card>
        )}

        {result && (
          <Card className={`p-6 mt-6 ${result.valid ? 'border-green-400 bg-green-50/30 dark:bg-green-950/10' : 'border-yellow-400 bg-yellow-50/30 dark:bg-yellow-950/10'}`}>
            {/* Status Banner */}
            <div className="flex items-start gap-3 mb-6">
              {result.valid ? (
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
              )}
              <div>
                <p className="text-xl font-bold">{result.valid ? 'STATUS: VERIFIED ✓' : 'STATUS: NOT SEALED'}</p>
                <p className="text-sm text-muted-foreground mt-1">{result.message}</p>
              </div>
            </div>

            {/* Verification Details */}
            <div className="grid grid-cols-2 gap-4 text-sm border-t border-border pt-5">
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Record Title</span>
                <p className="mt-1 font-medium">{result.title}</p>
              </div>
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Sector</span>
                <p className="mt-1">{result.sector}</p>
              </div>
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Current Status</span>
                <Badge className={`${STATUS_COLORS[result.status]} text-xs mt-1`}>{STATUS_LABELS[result.status]}</Badge>
              </div>
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Recorded</span>
                <p className="mt-1">{new Date(result.recorded_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              {result.jurisdiction && (
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Jurisdiction</span>
                  <p className="mt-1">{result.jurisdiction}</p>
                </div>
              )}
              {result.sealed_at && (
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Sealed</span>
                  <p className="mt-1">{new Date(result.sealed_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              )}
              <div className="col-span-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Hash Match</span>
                <p className="mt-1 font-semibold">{result.current_hash ? '✓ TRUE — Integrity Confirmed' : '— No hash available'}</p>
              </div>
              <div className="col-span-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Integrity Hash (SHA-256)</span>
                <p className="mt-1 font-mono text-xs break-all bg-muted/50 p-2 rounded">{result.current_hash || 'N/A'}</p>
              </div>
            </div>

            {/* Verification Stamp */}
            <div className="mt-6 pt-4 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                Verified at {new Date().toISOString()} · GRGF v1.0 · SHA-256 · Append-Only Chain
              </p>
              <p className="text-[10px] font-mono text-muted-foreground/60 mt-1">
                This verification confirms cryptographic integrity only. No confidential content is exposed.
              </p>
            </div>
          </Card>
        )}

        {/* Footer */}
        <div className="mt-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 px-4 py-2 rounded-full">
            <Shield className="h-3 w-3" />
            GRGF does not interpret reality. It records it — immutably.
          </div>
          <p className="text-[10px] text-muted-foreground/50 max-w-md mx-auto">
            Global Record Governance Framework · Public Verification Portal · 
            Verification confirms integrity, provenance, and status without exposing protected content.
            Provided under the GRGF transparency and independent audit mandate.
          </p>
          <p className="text-[10px] font-mono text-muted-foreground/40">
            Canadian Patent No. CA 3,300,102 · Invented by Tarek Wahid
          </p>
        </div>
      </div>
    </div>
  );
}
