export interface Property {
  address: string;
  type: string;
  price: string;
  size: string;
  zoning: string;
  lat: number;
  lng: number;
  status: string;
  link: string;
}

export const PROPERTIES: Property[] = [
  {
    address: "1100 E 6th St, Beaumont, CA",
    type: "Commercial",
    price: "Contact",
    size: "12,000 SF",
    zoning: "6th Street Mixed Use-Residential",
    lat: 33.9295,
    lng: -116.9714,
    status: "For Sale",
    link: "https://apex-res.com",
  },
  {
    address: "1101 E 1st St, Beaumont, CA",
    type: "Commercial Land",
    price: "$1,695,000",
    size: "4.81 Acres",
    zoning: "TOD",
    lat: 33.931,
    lng: -116.969,
    status: "For Sale",
    link: "https://apex-res.com",
  },
];
