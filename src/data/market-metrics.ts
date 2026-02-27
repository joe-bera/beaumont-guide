export type MetricDirection = "up" | "down" | "neutral";

export interface MarketMetric {
  label: string;
  value: string;
  delta: string;
  direction: MetricDirection;
}

export const MARKET_METRICS: MarketMetric[] = [
  { label: "Total Asset Value", value: "$2.9B", delta: "-0.4% YoY", direction: "down" },
  { label: "12-Mo Sales Volume", value: "$46.8M", delta: "-38% vs 5yr avg", direction: "down" },
  { label: "Market Cap Rate", value: "6.7%", delta: "+20 bps YoY", direction: "up" },
  { label: "Market $/SF", value: "$245", delta: "-0.4% YoY", direction: "down" },
  { label: "Sale vs Asking", value: "-10.8%", delta: "Buyer's market", direction: "down" },
  { label: "Avg % Leased at Sale", value: "95.7%", delta: "Stabilized", direction: "up" },
  { label: "Median Months to Sale", value: "5.9", delta: "6 mo avg cycle", direction: "neutral" },
  { label: "IE Avg Cap Rate", value: "6.4%", delta: "30 bps spread", direction: "neutral" },
];
