import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const recordData = [
  { month: "Jan", records: 120, verified: 115 },
  { month: "Feb", records: 180, verified: 172 },
  { month: "Mar", records: 245, verified: 238 },
  { month: "Apr", records: 310, verified: 305 },
  { month: "May", records: 420, verified: 412 },
  { month: "Jun", records: 580, verified: 574 },
  { month: "Jul", records: 710, verified: 702 },
  { month: "Aug", records: 840, verified: 835 },
];

const sectorData = [
  { name: "Government", value: 34, fill: "hsl(212, 100%, 50%)" },
  { name: "Healthcare", value: 22, fill: "hsl(152, 55%, 48%)" },
  { name: "Finance", value: 18, fill: "hsl(42, 85%, 55%)" },
  { name: "Infrastructure", value: 14, fill: "hsl(4, 80%, 55%)" },
  { name: "Justice", value: 12, fill: "hsl(262, 60%, 55%)" },
];

const integrityData = [
  { hour: "00:00", score: 100 },
  { hour: "04:00", score: 100 },
  { hour: "08:00", score: 99.98 },
  { hour: "12:00", score: 100 },
  { hour: "16:00", score: 100 },
  { hour: "20:00", score: 99.99 },
  { hour: "Now", score: 100 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-md px-3 py-2 shadow-lg">
      <p className="text-[10px] text-muted-foreground mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} className="text-xs font-semibold" style={{ color: p.color }}>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
};

export function LiveDashboardCharts() {
  return (
    <div className="grid lg:grid-cols-3 gap-4 mt-6">
      {/* Record Growth Chart */}
      <motion.div
        className="governance-card-elevated"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-semibold text-foreground">Record Growth</h3>
          <span className="text-[10px] font-mono text-success">+147% YTD</span>
        </div>
        <ResponsiveContainer width="100%" height={140}>
          <AreaChart data={recordData}>
            <defs>
              <linearGradient id="recordGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(212, 100%, 50%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(212, 100%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="records" stroke="hsl(212, 100%, 50%)" fill="url(#recordGrad)" strokeWidth={2} name="Records" />
            <Area type="monotone" dataKey="verified" stroke="hsl(152, 55%, 48%)" fill="transparent" strokeWidth={1.5} strokeDasharray="4 4" name="Verified" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Sector Distribution */}
      <motion.div
        className="governance-card-elevated"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xs font-semibold text-foreground mb-4">Sector Distribution</h3>
        <div className="flex items-center gap-4">
          <ResponsiveContainer width={100} height={100}>
            <PieChart>
              <Pie data={sectorData} cx="50%" cy="50%" innerRadius={28} outerRadius={45} paddingAngle={2} dataKey="value" strokeWidth={0}>
                {sectorData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 flex-1">
            {sectorData.map((s) => (
              <div key={s.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: s.fill }} />
                <span className="text-[10px] text-muted-foreground flex-1">{s.name}</span>
                <span className="text-[10px] font-semibold text-foreground tabular-nums">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Integrity Score */}
      <motion.div
        className="governance-card-elevated"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-semibold text-foreground">Integrity Score (24h)</h3>
          <span className="text-[10px] font-mono text-success">100%</span>
        </div>
        <ResponsiveContainer width="100%" height={140}>
          <AreaChart data={integrityData}>
            <defs>
              <linearGradient id="integrityGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(152, 55%, 48%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(152, 55%, 48%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="hour" tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
            <YAxis domain={[99.9, 100.1]} tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} width={35} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="score" stroke="hsl(152, 55%, 48%)" fill="url(#integrityGrad)" strokeWidth={2} name="Integrity" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
