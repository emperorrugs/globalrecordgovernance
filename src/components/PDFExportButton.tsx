import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { exportElementToPDF } from "@/lib/pdf-export";

interface PDFExportButtonProps {
  /** CSS selector for the content area to capture. Defaults to "main". */
  selector?: string;
  filename?: string;
  label?: string;
}

export function PDFExportButton({
  selector = "main",
  filename = "GRGF™-Document",
  label = "Export PDF",
}: PDFExportButtonProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el) {
      toast({ title: "Export failed", description: "Could not find content to export.", variant: "destructive" });
      return;
    }

    setLoading(true);
    toast({ title: "Generating PDF", description: "Please wait while your document is prepared..." });

    try {
      await exportElementToPDF(el, filename);
      toast({ title: "PDF Downloaded", description: `${filename}.pdf has been saved.` });
    } catch {
      toast({ title: "Export failed", description: "Could not generate PDF. Try using your browser's Print dialog instead.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleExport}
      disabled={loading}
      className="gap-2 text-xs font-mono print:hidden"
    >
      {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
      {loading ? "Generating..." : label}
    </Button>
  );
}
