export interface RecentSale {
  address: string;
  price: string;
  priceSF: string;
  capRate: string;
  isKW: boolean;
}

export const RECENT_SALES: RecentSale[] = [
  { address: "3308 W Florida Ave, Hemet", price: "$6.9M", priceSF: "$4,548", capRate: "N/A", isKW: false },
  { address: "1535 E 2nd St, Beaumont (Raising Cane's)", price: "$3.7M", priceSF: "N/A", capRate: "4.8%", isKW: false },
  { address: "1100 E 6th St, Beaumont", price: "$1.7M", priceSF: "$142", capRate: "7.2%", isKW: true },
  { address: "2811 W Florida Ave, Hemet", price: "$2.8M", priceSF: "$198", capRate: "6.9%", isKW: false },
  { address: "1301 S State St, Hemet", price: "$1.4M", priceSF: "$165", capRate: "7.4%", isKW: false },
];
