# Verification Hooks

**Classification:** Partner  
**Version:** 1.0.0  
**Date:** February 2026  
**Author:** Tarek Wahid  

---

## Verification Capabilities

GRGF supports both positive and negative verification:

- **Positive verification:** confirming a record exists for a claimed governance event
- **Negative verification:** confirming no record exists for a claimed event

Verification does not expose sensitive content — only existence, scope, and integrity.

## Integration Points

External systems can query record existence without accessing record content through defined verification hooks:

### Endpoint Specifications

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/log/checkpoint/latest` | GET | Retrieve latest signed checkpoint |
| `/proof/inclusion` | GET | Request inclusion proof for a specific event |
| `/proof/consistency` | GET | Request consistency proof between checkpoints |
| `/policy/{id}/version/{v}` | GET | Retrieve policy version hash |
| `/federation/witness/{node}/checkpoint/{id}` | GET | Retrieve witness attestation |

### Authentication
All verification endpoints support:
- Public access (for existence proofs)
- Authenticated access (for detailed proofs)
- Institutional access (for audit-grade verification)

## Proof Artifacts

Each verification request returns cryptographic proof artifacts:

```json
{
  "proof_type": "inclusion",
  "event_id": "evt-2026-0131-001",
  "checkpoint_id": "cp-2026-0131-1200",
  "merkle_path": ["h1", "h2", "h3"],
  "root_hash": "sha256:abc123...",
  "verified": true
}
```

## Integration Patterns

| Pattern | Use Case |
|---------|----------|
| Webhook callback | Real-time verification after event recording |
| Polling | Periodic batch verification |
| On-demand query | Ad-hoc audit and investigation |
| Federation sync | Cross-node checkpoint verification |

---

*Global Record Governance Framework — Invented and Owned by Tarek Wahid*
