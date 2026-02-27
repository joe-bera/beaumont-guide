export interface StarPricing {
  tier: string;
  range: string;
  cap: string;
  note: string;
}

export const STAR_PRICING: StarPricing[] = [
  { tier: "4-5 Star", range: "$260–$300/SF", cap: "6.0–6.4%", note: "Institutional quality, NNN anchored" },
  { tier: "3 Star", range: "$200–$260/SF", cap: "6.4–6.8%", note: "Sweet spot for private capital" },
  { tier: "1-2 Star", range: "$150–$200/SF", cap: "6.8–7.5%+", note: "Value-add, repositioning plays" },
];

export interface PropertyTypePricing {
  type: string;
  priceSF: string;
  deals: number;
}

export const PROPERTY_PRICING: PropertyTypePricing[] = [
  { type: "General Retail", priceSF: "$260", deals: 12 },
  { type: "Strip Center", priceSF: "$250", deals: 15 },
  { type: "Power Center", priceSF: "$239", deals: 5 },
  { type: "Neighborhood Center", priceSF: "$220", deals: 8 },
];
