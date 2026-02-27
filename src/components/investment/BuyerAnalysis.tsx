const BUYER_TYPES = [
  { label: "Private Buyers", pct: 60, color: "bg-navy" },
  { label: "Owner-Users", pct: 40, color: "bg-gold" },
  { label: "Institutional", pct: 1, color: "bg-slate-400" },
];

export default function BuyerAnalysis() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {/* Buyer Type Breakdown */}
      <div>
        <div className="mb-3 text-[13px] font-bold text-navy">
          Buyer Type Breakdown
        </div>
        {BUYER_TYPES.map((b, i) => (
          <div key={i} className="mb-2.5">
            <div className="mb-1 flex justify-between text-xs">
              <span>{b.label}</span>
              <span className="font-bold">{b.pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full ${b.color} transition-all duration-700`}
                style={{ width: `${b.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Capital Origin */}
      <div>
        <div className="mb-3 text-[13px] font-bold text-navy">
          Capital Origin (12-Month)
        </div>
        <div className="rounded-xl border border-[#e8e5df] bg-[#fafaf8] p-4 text-left">
          <div className="text-4xl font-bold text-gold">75%</div>
          <div className="mt-1 text-xs text-slate-600">
            of 12-month volume from{" "}
            <strong>national (non-local) buyers</strong>
          </div>
          <div className="mt-3 text-xs leading-relaxed text-slate-500">
            National capital has been a consistent net buyer since 2016. Local
            owners are net sellers — signaling a valuation gap outside investors
            are exploiting.
          </div>
        </div>
      </div>
    </div>
  );
}
