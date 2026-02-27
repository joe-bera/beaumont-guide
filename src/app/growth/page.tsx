import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { INFRASTRUCTURE } from "@/data/infrastructure";

export const metadata = {
  title: "Growth Pipeline | Beaumont Development Guide",
};

function statusVariant(status: string): "green" | "blue" | "gold" {
  if (status.includes("Fund")) return "green";
  if (status === "Approved") return "blue";
  return "gold";
}

export default function GrowthPage() {
  return (
    <>
      {/* Infrastructure Projects */}
      <Card>
        <SectionTitle>Major Infrastructure &amp; Development Projects</SectionTitle>
        <p className="mb-5 text-[13px] leading-relaxed text-slate-600">
          Over <strong>$1.6B in active development projects</strong> are
          reshaping Beaumont&apos;s economic profile. The Potrero interchange and
          Pennsylvania Avenue grade separation will unlock industrial land and
          improve I-10 corridor access — directly benefiting retail demand.
        </p>

        {INFRASTRUCTURE.map((proj, i) => (
          <div
            key={i}
            className={`py-4 ${
              i < INFRASTRUCTURE.length - 1 ? "border-b border-[#e8e5df]" : ""
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="text-[15px] font-bold text-navy">
                  {proj.name}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-slate-600">
                  {proj.desc}
                </div>
              </div>
              <div className="flex flex-shrink-0 gap-1.5">
                <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1.5 text-[13px] font-bold text-amber-800">
                  {proj.cost}
                </span>
                <Badge variant={statusVariant(proj.status)}>
                  {proj.status}
                </Badge>
              </div>
            </div>
            <div className="mt-1.5 text-[11px] text-slate-400">
              Timeline: {proj.timeline}
            </div>
          </div>
        ))}
      </Card>

      {/* Why It Matters */}
      <Card gold>
        <h3 className="mb-3 font-display text-base font-bold text-navy">
          Why This Matters for Investors
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { metric: "23M+ SF", label: "Industrial pipeline in San Gorgonio Pass" },
            { metric: "5,400", label: "New jobs from Beaumont Pointe alone" },
            { metric: "$130M+", label: "In funded transportation infrastructure" },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-[28px] font-bold text-gold">{item.metric}</div>
              <div className="mt-1 text-[11px] leading-snug text-slate-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-slate-600">
          Industrial development drives retail demand through workforce spending,
          service needs, and population growth. Every 1M SF of industrial creates
          demand for approximately 30,000–50,000 SF of supporting retail.
        </p>
      </Card>
    </>
  );
}
