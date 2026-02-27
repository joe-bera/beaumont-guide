import { MARKETING_ANGLES } from "@/data/marketing-angles";

export default function MarketingAngles() {
  return (
    <div>
      {MARKETING_ANGLES.map((a, i) => (
        <div
          key={i}
          className={`py-2.5 ${
            i < MARKETING_ANGLES.length - 1 ? "border-b border-gold-light" : ""
          }`}
        >
          <div className="text-sm font-bold text-navy">
            <span className="mr-2 text-gold">{i + 1}.</span>
            {a.title}
          </div>
          <div className="mt-0.5 text-xs text-slate-600">{a.desc}</div>
        </div>
      ))}
    </div>
  );
}
