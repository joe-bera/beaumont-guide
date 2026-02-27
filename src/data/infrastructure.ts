export interface InfrastructureProject {
  name: string;
  cost: string;
  status: string;
  timeline: string;
  desc: string;
}

export const INFRASTRUCTURE: InfrastructureProject[] = [
  {
    name: "Potrero Blvd Interchange Phase II",
    cost: "$79.3M",
    status: "Fully Funded",
    timeline: "Fall 2025",
    desc: "Widening to 6 lanes, new on/off ramps at SR-60",
  },
  {
    name: "Pennsylvania Ave Grade Separation",
    cost: "$50.4M",
    status: "CTC Funded",
    timeline: "2026–2028",
    desc: "Railroad grade separation improving north-south connectivity",
  },
  {
    name: "Beaumont Pointe",
    cost: "$1.5B",
    status: "Approved",
    timeline: "Multi-phase",
    desc: "622 acres, 5.3M SF industrial/commercial, 5,400 jobs",
  },
  {
    name: "Downtown Revitalization",
    cost: "$14M+",
    status: "In Progress",
    timeline: "2025–2027",
    desc: "Walkable downtown, diagonal parking, medians, lighting",
  },
  {
    name: "Sports Park Renovations",
    cost: "TBD",
    status: "Construction",
    timeline: "Jul 2025",
    desc: "Synthetic turf, sports lighting, grading, landscaping",
  },
];
