export interface Document {
  name: string;
  url: string;
}

export interface DocumentCategory {
  category: string;
  items: Document[];
}

export const DOCUMENTS: DocumentCategory[] = [
  {
    category: "Planning Applications",
    items: [
      { name: "Planning Application (General)", url: "https://www.beaumontca.gov/261/Planning-Applications" },
      { name: "Conditional Use Permit Application", url: "https://www.beaumontca.gov/261/Planning-Applications" },
      { name: "Variance Application", url: "https://www.beaumontca.gov/261/Planning-Applications" },
      { name: "Tentative Parcel Map Application", url: "https://www.beaumontca.gov/261/Planning-Applications" },
    ],
  },
  {
    category: "Building Permits",
    items: [
      { name: "Commercial Building Permit Application", url: "https://www.beaumontca.gov/258/Building-Division" },
      { name: "Grading Permit Application", url: "https://www.beaumontca.gov/258/Building-Division" },
      { name: "Demolition Permit Application", url: "https://www.beaumontca.gov/258/Building-Division" },
    ],
  },
  {
    category: "Fee Schedules & Resources",
    items: [
      { name: "Planning Fee Schedule", url: "https://www.beaumontca.gov/261/Planning-Applications" },
      { name: "Building Fee Schedule", url: "https://www.beaumontca.gov/258/Building-Division" },
      { name: "Development Impact Fee Schedule", url: "https://www.beaumontca.gov/258/Building-Division" },
      { name: "Beaumont Municipal Code Ch. 17 (Zoning)", url: "https://library.qcode.us/lib/beaumont_ca/pub/municipal_code" },
      { name: "Beaumont General Plan 2040", url: "https://www.beaumontca.gov/1050/General-Plan" },
    ],
  },
  {
    category: "Environmental & Land Development",
    items: [
      { name: "CEQA Guidelines & Resources", url: "https://www.beaumontca.gov/261/Planning-Applications" },
      { name: "MSHCP Information", url: "https://www.wrc-rca.org/" },
      { name: "Potrero Interchange Project Info", url: "https://www.beaumontca.gov/992/Potrero-Interchange" },
    ],
  },
];
