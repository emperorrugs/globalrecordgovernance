import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

/**
 * Renders a DOM element to a multi-page A4 PDF and triggers download.
 * Falls back to window.print() if rendering fails.
 */
export async function exportElementToPDF(
  element: HTMLElement,
  filename: string = "GRGF™-Document"
): Promise<void> {
  try {
    // Temporarily expand the element for full capture
    const originalOverflow = element.style.overflow;
    const originalMaxHeight = element.style.maxHeight;
    element.style.overflow = "visible";
    element.style.maxHeight = "none";

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      windowWidth: 1200,
    });

    // Restore
    element.style.overflow = originalOverflow;
    element.style.maxHeight = originalMaxHeight;

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const pdf = new jsPDF("p", "mm", "a4");
    const imgData = canvas.toDataURL("image/jpeg", 0.95);

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${filename}.pdf`);
  } catch (err) {
    console.error("PDF generation failed, falling back to print:", err);
    window.print();
  }
}
