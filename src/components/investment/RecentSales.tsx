import { RECENT_SALES } from "@/data/recent-comps";
import Badge from "@/components/ui/Badge";

export default function RecentSales() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              Address
            </th>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              Price
            </th>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              $/SF
            </th>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              Cap Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {RECENT_SALES.map((r, i) => (
            <tr key={i} className={r.isKW ? "bg-amber-50" : ""}>
              <td className="border-b border-[#e8e5df] px-3 py-2.5">
                {r.address}
                {r.isKW && (
                  <Badge variant="gold" className="ml-2">
                    KW COMMERCIAL
                  </Badge>
                )}
              </td>
              <td className="border-b border-[#e8e5df] px-3 py-2.5 font-bold">
                {r.price}
              </td>
              <td className="border-b border-[#e8e5df] px-3 py-2.5">
                {r.priceSF}
              </td>
              <td className="border-b border-[#e8e5df] px-3 py-2.5">
                {r.capRate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
