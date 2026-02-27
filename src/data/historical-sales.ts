export interface HistoricalDataPoint {
  year: string;
  deals: number | null;
  volume: number | null;
  priceSF: number;
  capRate: number;
}

export const HISTORICAL: HistoricalDataPoint[] = [
  { year: "2015", deals: 49, volume: 43.5, priceSF: 176, capRate: 7.2 },
  { year: "2016", deals: 40, volume: 46.2, priceSF: 183, capRate: 7.0 },
  { year: "2017", deals: 42, volume: 52.8, priceSF: 191, capRate: 6.9 },
  { year: "2018", deals: 55, volume: 75.4, priceSF: 200, capRate: 6.7 },
  { year: "2019", deals: 44, volume: 61.3, priceSF: 208, capRate: 6.6 },
  { year: "2020", deals: 38, volume: 54.7, priceSF: 215, capRate: 6.5 },
  { year: "2021", deals: 67, volume: 110.8, priceSF: 228, capRate: 6.3 },
  { year: "2022", deals: 52, volume: 89.2, priceSF: 238, capRate: 6.4 },
  { year: "2023", deals: 45, volume: 72.1, priceSF: 243, capRate: 6.5 },
  { year: "2024", deals: 51, volume: 97.0, priceSF: 246, capRate: 6.6 },
  { year: "YTD 25", deals: 40, volume: 46.8, priceSF: 245, capRate: 6.7 },
  { year: "2026F", deals: null, volume: null, priceSF: 252, capRate: 6.6 },
  { year: "2028F", deals: null, volume: null, priceSF: 265, capRate: 6.5 },
  { year: "2030F", deals: null, volume: null, priceSF: 279, capRate: 6.5 },
];
