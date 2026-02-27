import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import TipBox from "@/components/ui/TipBox";
import MetricGrid from "@/components/market/MetricGrid";
import HistoricalChart from "@/components/market/HistoricalChart";
import { StarPricingTable, PropertyTypePricingTable } from "@/components/market/PricingTable";

export const metadata = {
  title: "Market Intelligence | Beaumont Development Guide",
};

export default function MarketPage() {
  return (
    <>
      {/* Market Snapshot */}
      <Card>
        <SectionTitle>Beaumont / Hemet Retail — Market Snapshot</SectionTitle>
        <p className="mb-5 text-[13px] leading-relaxed text-slate-600">
          <strong className="text-gold">Market Sentiment: CAUTIOUS</strong> —
          Pricing stable but volume contracting; yield premium rewards patience.
          Properties trading are 95.7% leased (stabilized), but sellers asking
          too much relative to buyer valuations (-10.8% sale vs. asking). Not
          distress — normalization after a strong 2024 ($97M volume).
        </p>
        <MetricGrid />
      </Card>

      {/* Historical Trends */}
      <Card>
        <SectionTitle>Historical Sales Trends (2015–2030F)</SectionTitle>
        <HistoricalChart />
        <TipBox className="mt-4">
          <strong>Growth Trajectory:</strong> 39% price appreciation since 2015
          ($176→$245/SF, 3.1% CAGR). CoStar projects $279/SF by 2030 — 14%
          upside from current pricing with cap rate compression to 6.5%.
        </TipBox>
      </Card>

      {/* Pricing by Star Rating */}
      <Card>
        <SectionTitle>Pricing by Star Rating</SectionTitle>
        <StarPricingTable />
      </Card>

      {/* Pricing by Property Type */}
      <Card>
        <SectionTitle>Pricing by Property Type (2025)</SectionTitle>
        <PropertyTypePricingTable />
      </Card>

      {/* Submarket Position */}
      <Card>
        <SectionTitle>Submarket Competitive Position</SectionTitle>
        <p className="text-[13px] leading-relaxed text-slate-600">
          Beaumont/Hemet ranks <strong>#12 of 15</strong> IE submarkets by
          volume ($46.8M) but <strong>#2 by transaction count</strong> (40
          deals). The 6.7% cap rate ties for the{" "}
          <strong>highest yield</strong> with Mojave River Valley. Market pricing
          of $245/SF sits 15.5% below the IE average of $290/SF — attracting
          outside capital seeking yield.
        </p>
        <TipBox className="mt-3">
          <strong>The Yield Play:</strong> 30–50 bps premium over primary IE
          corridors for 1031 buyers seeking tax-advantaged returns without
          institutional bidding pressure.
        </TipBox>
      </Card>
    </>
  );
}
