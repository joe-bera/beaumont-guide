import { TOP_OWNERS } from "@/data/owners";
import Badge from "@/components/ui/Badge";

const TYPE_VARIANT: Record<string, "blue" | "green" | "gold"> = {
  REIT: "blue",
  User: "green",
  Private: "gold",
};

export default function TopOwners() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              Owner
            </th>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              SF
            </th>
            <th className="bg-navy px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {TOP_OWNERS.map((o, i) => (
            <tr key={i}>
              <td className="border-b border-[#e8e5df] px-3 py-2.5">{o.name}</td>
              <td className="border-b border-[#e8e5df] px-3 py-2.5 font-bold">
                {o.sf}
              </td>
              <td className="border-b border-[#e8e5df] px-3 py-2.5">
                <Badge variant={TYPE_VARIANT[o.type]}>{o.type}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
