import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PageHeader } from "@/components/PageComponents";
import { PDFExportButton } from "@/components/PDFExportButton";
import { Module1Calculator } from "@/components/impact/Module1Calculator";
import { Module2Procurement } from "@/components/impact/Module2Procurement";
import { Module3Determinism } from "@/components/impact/Module3Determinism";
import { Module4Maturity } from "@/components/impact/Module4Maturity";
import { Module5Federation } from "@/components/impact/Module5Federation";
import { Module6RiskExposure } from "@/components/impact/Module6RiskExposure";
import { Module7Breakeven } from "@/components/impact/Module7Breakeven";
import { Module8MacroSimulation } from "@/components/impact/Module8MacroSimulation";
import { DPIAlignmentPanel } from "@/components/impact/DPIAlignmentPanel";

const ImpactModeling = () => {
  const [activeTab, setActiveTab] = useState("calculator");

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Governance Impact Modeling Suite"
        subtitle="Sovereign-grade decision-support system for structured pilot evaluation. Conservative modeling. Transparent assumptions."
      >
        <div className="mt-4">
          <PDFExportButton filename="GRGF-Impact-Model" label="Export Briefing" />
        </div>
      </PageHeader>

      <div className="px-4 py-6 md:px-8 lg:px-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent p-0 mb-8">
            {[
              { value: "calculator", label: "Impact Calculator" },
              { value: "procurement", label: "Procurement Leakage" },
              { value: "determinism", label: "Determinism Score" },
              { value: "maturity", label: "Maturity Index" },
              { value: "federation", label: "Federation Readiness" },
              { value: "risk", label: "Risk Exposure" },
              { value: "breakeven", label: "Break-even" },
              { value: "macro", label: "Macro Simulation" },
              { value: "dpi", label: "DPI Alignment" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-xs font-mono px-3 py-2 rounded-sm border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary bg-card"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="calculator"><Module1Calculator /></TabsContent>
          <TabsContent value="procurement"><Module2Procurement /></TabsContent>
          <TabsContent value="determinism"><Module3Determinism /></TabsContent>
          <TabsContent value="maturity"><Module4Maturity /></TabsContent>
          <TabsContent value="federation"><Module5Federation /></TabsContent>
          <TabsContent value="risk"><Module6RiskExposure /></TabsContent>
          <TabsContent value="breakeven"><Module7Breakeven /></TabsContent>
          <TabsContent value="macro"><Module8MacroSimulation /></TabsContent>
          <TabsContent value="dpi"><DPIAlignmentPanel /></TabsContent>
        </Tabs>
      </div>

      {/* Footer disclaimer */}
      <div className="border-t border-border px-8 py-6 md:px-12">
        <p className="text-[11px] text-muted-foreground italic max-w-4xl">
          This modeling platform provides scenario-based projections for structured pilot evaluation. Actual fiscal and operational outcomes require institutional validation and independent audit.
        </p>
        <p className="text-[10px] text-muted-foreground/60 mt-2">
          Global Record Governance Framework — Invented and Owned by Tarek Wahid
        </p>
      </div>
    </div>
  );
};

export default ImpactModeling;
