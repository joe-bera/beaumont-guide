export interface CityContact {
  dept: string;
  phone: string;
  email: string;
}

export const CONTACTS: CityContact[] = [
  { dept: "Planning Division", phone: "(951) 769-8520", email: "planning@beaumontca.gov" },
  { dept: "Building Division", phone: "(951) 769-8524", email: "building@beaumontca.gov" },
  { dept: "Public Works", phone: "(951) 769-8515", email: "publicworks@beaumontca.gov" },
  { dept: "Economic Development", phone: "(951) 769-8393", email: "econdev@beaumontca.gov" },
  { dept: "Fire (RCFD)", phone: "(951) 940-6900", email: "" },
  { dept: "City Manager", phone: "(951) 769-8520", email: "" },
];
