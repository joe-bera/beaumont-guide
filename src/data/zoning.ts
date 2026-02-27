export interface ZoningStandard {
  height: string;
  far: string;
  setback: string;
  parking: string;
  uses: string;
}

export const ZONING: Record<string, ZoningStandard> = {
  "C-1 (Neighborhood Commercial)": {
    height: "35 ft",
    far: "0.35",
    setback: "15 ft front, 0 side, 10 rear",
    parking: "1/250 SF retail, 1/200 SF office",
    uses: "Retail, restaurant, personal services, medical office",
  },
  "C-2 (General Commercial)": {
    height: "45 ft",
    far: "0.50",
    setback: "15 ft front, 0 side, 0 rear",
    parking: "1/250 SF retail, 1/100 SF restaurant",
    uses: "Retail, auto sales, entertainment, hotel, office",
  },
  "M-1 (Light Industrial)": {
    height: "45 ft",
    far: "0.55",
    setback: "20 ft front, 10 side, 10 rear",
    parking: "1/500 SF warehouse, 1/250 SF office",
    uses: "Light manufacturing, warehouse, distribution, R&D",
  },
  "M-2 (Heavy Industrial)": {
    height: "60 ft",
    far: "0.55",
    setback: "25 ft front, 15 side, 15 rear",
    parking: "1/500 SF warehouse, 1/1,000 SF outdoor storage",
    uses: "Manufacturing, processing, outdoor storage, logistics",
  },
  "MU-R (Mixed Use Residential)": {
    height: "55 ft",
    far: "2.0",
    setback: "10 ft front, 5 side, 10 rear",
    parking: "1/unit residential + 1/300 SF commercial",
    uses: "Residential over retail, live-work, office, restaurant",
  },
  "TOD (Transit Oriented District)": {
    height: "65 ft",
    far: "2.5",
    setback: "0–10 ft front, 0 side, 10 rear",
    parking: "Reduced 25–50% per TOD standards",
    uses: "High-density mixed use, transit-adjacent development",
  },
};
