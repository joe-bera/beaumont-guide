export interface EntitlementPhase {
  phase: number;
  name: string;
  time: string;
  cost: string;
  steps: string[];
  tips: string[];
}

export const ENTITLEMENT_PHASES: EntitlementPhase[] = [
  {
    phase: 1,
    name: "Pre-Application & Due Diligence",
    time: "1–3 months",
    cost: "$5K–$25K",
    steps: [
      "Title search & preliminary title report",
      "Zoning verification with City of Beaumont Planning Dept",
      "General Plan consistency check (GP 2040)",
      "Environmental desktop review (Phase I ESA)",
      "Utility capacity verification (water, sewer, electric)",
      "Preliminary traffic analysis for access points",
      "Pre-application meeting with Planning Division",
    ],
    tips: [
      "Beaumont's Planning Dept offers free 30-min pre-application consultations — always take them",
      "Check the TOD Overlay Zone for density bonuses near transit corridors",
      "Verify MSHCP compliance early — San Gorgonio Pass area has habitat sensitivities",
    ],
  },
  {
    phase: 2,
    name: "Entitlement Applications",
    time: "2–6 months",
    cost: "$15K–$75K",
    steps: [
      "Submit planning application package with site plan",
      "Conditional Use Permit (CUP) if required by zone",
      "Development Agreement negotiation (larger projects)",
      "Specific Plan Amendment (if applicable)",
      "Environmental review: IS/MND or EIR (CEQA)",
      "Traffic Impact Analysis (TIA) if >100 peak trips",
      "Public noticing & neighborhood outreach",
    ],
    tips: [
      "Beaumont Planning Commission meets 2nd & 4th Tuesday monthly",
      "City Council meets 1st & 3rd Tuesday — appeal window is 15 calendar days",
      "Projects under 10K SF commercial may qualify for ministerial review (no public hearing)",
    ],
  },
  {
    phase: 3,
    name: "Design Review & Approvals",
    time: "1–3 months",
    cost: "$10K–$50K",
    steps: [
      "Architectural design review per Beaumont Design Guidelines",
      "Landscape plan review (water-efficient required)",
      "Signage plan review per Chapter 17.07",
      "Fire Department plan check (RCFD)",
      "Public Works conditions of approval",
      "Planning Commission public hearing",
      "City Council approval (if CUP or DA required)",
    ],
    tips: [
      "Beaumont requires enhanced architecture for buildings visible from I-10 corridor",
      "Include photovoltaic-ready infrastructure per 2022 CA Building Code",
      "Fire flow requirements: 1,500–3,000 GPM depending on building size",
    ],
  },
  {
    phase: 4,
    name: "Building Permits & Construction",
    time: "2–4 months + build",
    cost: "$50K–$300K+",
    steps: [
      "Grading permit application",
      "Building permit application with full construction documents",
      "Plan check review (8–12 weeks typical)",
      "Encroachment permit for public ROW work",
      "Utility connection permits (BCVWD water, city sewer)",
      "Stormwater/WQMP compliance (MS4 permit)",
      "Construction start — inspections per IBC schedule",
    ],
    tips: [
      "Beaumont plan check currently running 8–10 weeks; budget accordingly",
      "Request a pre-construction meeting with Building Division for projects >$1M",
      "Development Impact Fees due at permit issuance — currently ~$15K–$25K per 1,000 SF commercial",
    ],
  },
  {
    phase: 5,
    name: "Certificate of Occupancy",
    time: "1–2 months",
    cost: "$5K–$15K",
    steps: [
      "Final inspections (building, fire, planning, public works)",
      "Fire Department final clearance",
      "Planning condition compliance verification",
      "Business license application",
      "Certificate of Occupancy issuance",
      "Bond release processing (if applicable)",
      "As-built drawings submission",
    ],
    tips: [
      "Schedule final inspections 2 weeks ahead — inspectors book fast",
      "Ensure all landscape installation matches approved plans before Planning final",
      "Keep condition compliance matrix updated throughout construction",
    ],
  },
];
