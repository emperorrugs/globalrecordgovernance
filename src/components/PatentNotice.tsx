import { Shield } from "lucide-react";

export const PatentNotice = () => (
  <div className="text-center py-8 space-y-2 border-t border-border mt-12">
    <div className="flex items-center justify-center gap-2">
      <Shield className="h-3 w-3 text-muted-foreground/50" />
      <p className="text-xs text-muted-foreground">
        Global Record Governance Framework — Invented and Owned by Tarek Wahid
      </p>
    </div>
    <p className="text-[10px] text-muted-foreground/50">
      Canadian Patent Application No. CA 3,300,102 · All rights reserved
    </p>
  </div>
);
