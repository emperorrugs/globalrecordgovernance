import { useState } from "react";

export interface ImpactInputs {
  procurementVolume: number;
  operationalBudget: number;
  ministries: number;
  auditBudget: number;
  integrityRisk: number;
  caseVolume: number;
  caseCost: number;
  digitalMaturity: "low" | "medium" | "high";
  improvementRate: number;
  auditEfficiency: number;
  adminEfficiency: number;
  deploymentCost: number;
  discountRate: number;
}

export const defaultInputs: ImpactInputs = {
  procurementVolume: 50_000_000_000,
  operationalBudget: 120_000_000_000,
  ministries: 24,
  auditBudget: 500_000_000,
  integrityRisk: 3,
  caseVolume: 50_000,
  caseCost: 8_000,
  digitalMaturity: "medium",
  improvementRate: 1,
  auditEfficiency: 15,
  adminEfficiency: 15,
  deploymentCost: 50_000_000,
  discountRate: 5,
};

export function useImpactInputs() {
  const [inputs, setInputs] = useState<ImpactInputs>(defaultInputs);
  const update = (partial: Partial<ImpactInputs>) => setInputs((prev) => ({ ...prev, ...partial }));
  return { inputs, update };
}

export function fmt(n: number): string {
  if (Math.abs(n) >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (Math.abs(n) >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  if (Math.abs(n) >= 1e3) return `$${(n / 1e3).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

export function npv(cashflows: number[], rate: number): number {
  return cashflows.reduce((sum, cf, i) => sum + cf / Math.pow(1 + rate / 100, i + 1), 0);
}
