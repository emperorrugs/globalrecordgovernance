import { useState } from 'react';
import { verifyByToken, logVerification } from '@/services/verification';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, XCircle, AlertTriangle, Search } from 'lucide-react';
import { STATUS_COLORS, STATUS_LABELS, type RecordStatus } from '@/lib/types';
import type { PublicVerificationResult } from '@/services/verification';

export default function PublicVerifier() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PublicVerificationResult | null>(null);
  const [error, setError] = useState('');

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!token.trim()) return;

    setLoading(true);
    setResult(null);
    setError('');

    const verificationResult = await verifyByToken(token.trim());

    if (!verificationResult) {
      setError('No verifiable record found with this token. The record may not exist, may not be publicly verifiable, or the token may be invalid.');
      setLoading(false);
      return;
    }

    setResult(verificationResult);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#00A4EF]/10 mb-4">
            <Shield className="h-8 w-8 text-[#00A4EF]" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">GRGF™ Record Verification</h1>
          <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            Independently verify the integrity, provenance, and current status of any publicly verifiable GRGF™ governance record.
          </p>
        </div>

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

        {error && (
          <Card className="p-6 mt-6 border-destructive/30">
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-destructive">Verification Failed</p>
                <p className="text-sm text-muted-foreground mt-1">{error}</p>
              </div>
            </div>
          </Card>
        )}

        {result && (
          <Card className={`p-6 mt-6 ${result.valid ? 'border-green-300' : 'border-yellow-300'}`}>
            <div className="flex items-start gap-3 mb-4">
              {result.valid ? (
                <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
              ) : (
                <AlertTriangle className="h-6 w-6 text-yellow-600 shrink-0" />
              )}
              <div>
                <p className="text-lg font-semibold">{result.valid ? 'Integrity Verified' : 'Not Sealed'}</p>
                <p className="text-sm text-muted-foreground mt-1">{result.message}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm border-t border-border pt-4">
              <div><span className="text-xs text-muted-foreground">Title</span><p className="mt-1 font-medium">{result.title}</p></div>
              <div><span className="text-xs text-muted-foreground">Sector</span><p className="mt-1">{result.sector}</p></div>
              <div><span className="text-xs text-muted-foreground">Status</span>
                <Badge className={`${STATUS_COLORS[result.status]} text-xs mt-1`}>{STATUS_LABELS[result.status]}</Badge>
              </div>
              <div><span className="text-xs text-muted-foreground">Recorded</span><p className="mt-1">{new Date(result.recorded_at).toLocaleDateString()}</p></div>
              {result.sealed_at && (
                <div><span className="text-xs text-muted-foreground">Sealed</span><p className="mt-1">{new Date(result.sealed_at).toLocaleDateString()}</p></div>
              )}
              <div className="col-span-2"><span className="text-xs text-muted-foreground">Integrity Hash (SHA-256)</span><p className="mt-1 font-mono text-xs break-all">{result.current_hash || 'N/A'}</p></div>
            </div>
          </Card>
        )}

        <div className="mt-10 text-center">
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            GRGF™ verification confirms the cryptographic integrity, provenance, and current status of a governance record.
            It does not expose protected confidential content. This verification is provided for transparency and independent
            audit purposes under the Global Record Governance Framework.
          </p>
          <p className="text-[10px] font-mono text-muted-foreground/50 mt-4">GRGF™ v1.0 · SHA-256 · Append-Only Chain</p>
        </div>
      </div>
    </div>
  );
}
