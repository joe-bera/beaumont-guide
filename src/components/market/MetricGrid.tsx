import { MARKET_METRICS } from "@/data/market-metrics";

export default function MetricGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {MARKET_METRICS.map((m, i) => (
        <div
          key={i}
          className="rounded-xl border border-[#e8e5df] bg-[#fafaf8] px-3.5 py-4 text-center"
        >
          <div className="text-[26px] font-bold text-navy">{m.value}</div>
          <div className="mt-1 text-[11px] font-medium text-slate-500">
            {m.label}
          </div>
          <div
            className={`mt-1 text-[11px] font-semibold ${
              m.direction === "up"
                ? "text-green-600"
                : m.direction === "down"
                ? "text-red-600"
                : "text-slate-500"
            }`}
          >
            {m.direction === "up"
              ? "▲"
              : m.direction === "down"
              ? "▼"
              : "●"}{" "}
            {m.delta}
          </div>
        </div>
      ))}
    </div>
  );
}
