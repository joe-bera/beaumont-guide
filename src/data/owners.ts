export interface TopOwner {
  name: string;
  sf: string;
  type: "REIT" | "User" | "Private";
}

export const TOP_OWNERS: TopOwner[] = [
  { name: "Simon Property Group", sf: "651K", type: "REIT" },
  { name: "Walmart Inc.", sf: "640K", type: "User" },
  { name: "Strauss Investments", sf: "258K", type: "Private" },
  { name: "Regency Centers", sf: "245K", type: "REIT" },
  { name: "Stater Bros Holdings", sf: "220K", type: "User" },
];
