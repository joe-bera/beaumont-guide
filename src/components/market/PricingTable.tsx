import { STAR_PRICING, PROPERTY_PRICING } from "@/data/pricing";

function StarPricingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              Tier
            </th>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              Price Range
            </th>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              Cap Rate
            </th>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              Commentary
            </th>
          </tr>
        </thead>
        <tbody>
          {STAR_PRICING.map((r, i) => (
            <tr key={i}>
              <td className="border-b border-[#e8e5df] px-3 py-2.5 font-bold">
                {r.tier}
              </td>
              <td className="border-b border-[#e8e5df] px-3 py-2.5">{r.range}</td>
              <td className="border-b border-[#e8e5df] px-3 py-2.5">{r.cap}</td>
              <td className="border-b border-[#e8e5df] px-3 py-2.5">{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PropertyTypePricingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              Type
            </th>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              Avg $/SF
            </th>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              2025 Deals
            </th>
          </tr>
        </thead>
        <tbody>
          {PROPERTY_PRICING.map((r, i) => (
            <tr key={i}>
              <td className="border-b border-[#e8e5df] px-3 py-2.5">{r.type}</td>
              <td className="border-b border-[#e8e5df] px-3 py-2.5 font-bold">
                {r.priceSF}
              </td>
              <td className="border-b border-[#e8e5df] px-3 py-2.5">{r.deals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { StarPricingTable, PropertyTypePricingTable };
