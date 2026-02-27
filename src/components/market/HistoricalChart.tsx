"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { HISTORICAL } from "@/data/historical-sales";

function PriceSFChart() {
  return (
    <div>
      <div className="mb-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-slate-500">
        Avg $/SF
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={HISTORICAL} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <XAxis
            dataKey="year"
            tick={{ fontSize: 9, fill: "#94a3b8" }}
            angle={-45}
            textAnchor="end"
            height={50}
            interval={0}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#94a3b8" }}
            domain={[100, 300]}
            tickFormatter={(v) => `$${v}`}
            width={45}
          />
          <Tooltip
            formatter={(value: number) => [`$${value}/SF`, "Avg $/SF"]}
            contentStyle={{ fontSize: 12, borderRadius: 8 }}
          />
          <Bar dataKey="priceSF" radius={[4, 4, 0, 0]}>
            {HISTORICAL.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.year.includes("F") ? "#1B365D40" : "#1B365D"}
                stroke={entry.year.includes("F") ? "#1B365D" : "none"}
                strokeDasharray={entry.year.includes("F") ? "4 4" : "none"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function CapRateChart() {
  return (
    <div>
      <div className="mb-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-slate-500">
        Cap Rate %
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={HISTORICAL} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <XAxis
            dataKey="year"
            tick={{ fontSize: 9, fill: "#94a3b8" }}
            angle={-45}
            textAnchor="end"
            height={50}
            interval={0}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#94a3b8" }}
            domain={[5, 8]}
            tickFormatter={(v) => `${v}%`}
            width={40}
          />
          <Tooltip
            formatter={(value: number) => [`${value}%`, "Cap Rate"]}
            contentStyle={{ fontSize: 12, borderRadius: 8 }}
          />
          <Bar dataKey="capRate" radius={[4, 4, 0, 0]}>
            {HISTORICAL.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.year.includes("F") ? "#C5A25840" : "#C5A258"}
                stroke={entry.year.includes("F") ? "#C5A258" : "none"}
                strokeDasharray={entry.year.includes("F") ? "4 4" : "none"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function HistoricalChart() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <PriceSFChart />
      <CapRateChart />
    </div>
  );
}
