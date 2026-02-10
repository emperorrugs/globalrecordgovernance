import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface PDFExportButtonProps {
  /** CSS selector for the content area to print. Defaults to "main". */
  selector?: string;
  filename?: string;
  label?: string;
}

export function PDFExportButton({
  selector = "main",
  filename = "GRGF-Document",
  label = "Export PDF",
}: PDFExportButtonProps) {
  const { toast } = useToast();

  const handleExport = () => {
    // Set a data attribute so print styles can target the right content
    document.documentElement.setAttribute("data-pdf-export", "true");
    document.title = filename;

    toast({
      title: "Preparing PDF Export",
      description: "Your browser's print dialog will open. Choose 'Save as PDF' to download.",
    });

    // Small delay to allow toast to render before print dialog blocks UI
    setTimeout(() => {
      window.print();
      // Clean up after printing
      setTimeout(() => {
        document.documentElement.removeAttribute("data-pdf-export");
      }, 500);
    }, 300);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleExport}
      className="gap-2 text-xs font-mono print:hidden"
    >
      <Download className="h-3.5 w-3.5" />
      {label}
    </Button>
  );
}
