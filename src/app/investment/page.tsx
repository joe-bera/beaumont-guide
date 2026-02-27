import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import TipBox from "@/components/ui/TipBox";
import BuyerAnalysis from "@/components/investment/BuyerAnalysis";
import RecentSales from "@/components/investment/RecentSales";
import TopOwners from "@/components/investment/TopOwners";
import MarketingAngles from "@/components/investment/MarketingAngles";

export const metadata = {
  title: "Investment Analysis | Beaumont Development Guide",
};

export default function InvestmentPage() {
  return (
    <>
      {/* Buyer & Owner Analysis */}
      <Card>
        <SectionTitle>Buyer &amp; Owner Analysis</SectionTitle>
        <BuyerAnalysis />
      </Card>

      {/* Recent Sales */}
      <Card>
        <SectionTitle>Recent Significant Sales</SectionTitle>
        <RecentSales />
      </Card>

      {/* Top Owners */}
      <Card>
        <SectionTitle>Top Owners by Square Footage</SectionTitle>
        <TopOwners />
        <TipBox className="mt-3">
          <strong>Key Insight:</strong> Zero of the top 42 owners showed any
          12-month transaction activity — stable, long-hold ownership base.
          Dispositions will come through relationship-driven off-market deals.
        </TipBox>
      </Card>

      {/* Marketing Angles */}
      <Card gold>
        <SectionTitle goldBorder>
          5 Content Marketing Angles — Pre-Built
        </SectionTitle>
        <MarketingAngles />
      </Card>
    </>
  );
}
