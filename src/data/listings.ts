export type ListingStatus = "Active" | "Sold";

export interface Listing {
  id: string;
  address: string;
  city: string;
  area: string;
  price: string;
  type: string;
  status: ListingStatus;
  mls: string;
  beds?: number;
  baths?: number;
  floorArea?: string;
  buildingType?: string;
  description: string;
  visual: "retail" | "farm" | "land" | "luxury";
}

export const listings: Listing[] = [
  {
    id: "capstan-way",
    address: "1161–1163 8328 Capstan Way",
    city: "Richmond, BC V6X 2H6",
    area: "West Cambie",
    price: "$5,400,000",
    type: "Retail",
    status: "Active",
    mls: "C8074525",
    buildingType: "Strip Mall",
    floorArea: "3,858 sq. ft.",
    description:
      "Exceptional investment opportunity with a CAP rate over 5.5%. Prime corner unit in Richmond's bustling strip mall with strong street exposure and easy access to No. 3 Road and Garden City Road. Located near the newly operational Capstan SkyTrain station. Suitable for a large restaurant, with additional signage potential and heavy foot traffic.",
    visual: "retail",
  },
  {
    id: "176-agri",
    address: "8171 176 Street",
    city: "Surrey, BC V4N 6G6",
    area: "Fleetwood Tynehead",
    price: "$3,400,000",
    type: "Agri-Business / Land Commercial",
    status: "Active",
    mls: "C8075238",
    description:
      "Available for the first time in nearly 30 years. An 11.02-acre property offering an opportunity to build a dream home while establishing an agribusiness operation. Approximately 9 acres are fenced and suitable for farm animals. Currently leased to a hobby farmer raising chickens and sheep. Strong long-term holding potential with low property taxes.",
    visual: "farm",
  },
  {
    id: "176-land",
    address: "8171 176 Street",
    city: "Surrey, BC V4N 6G6",
    area: "Fleetwood Tynehead",
    price: "$3,400,000",
    type: "Land",
    status: "Active",
    mls: "R3080368",
    description:
      "Rare 11.02-acre land opportunity in Fleetwood Tynehead. Suitable for a private rural retreat, small-scale farming, agribusiness, or long-term land holding. Approximately 9 acres are fenced and suitable for livestock. Currently leased to a hobby farmer.",
    visual: "land",
  },
  {
    id: "36th-mackenzie",
    address: "2995 W 36th Avenue",
    city: "Vancouver, BC V6N 2R2",
    area: "MacKenzie Heights, Vancouver West",
    price: "$4,350,000",
    type: "Residential House",
    status: "Sold",
    mls: "R2768003",
    beds: 6,
    baths: 6,
    floorArea: "4,639 sq. ft.",
    description:
      "High-quality custom home in one of Vancouver West's most desirable neighbourhoods. Built by the seller and held as a family home for 28 years. Features include maple flooring, custom handmade oak moulding, maple and rosewood flooring, 6 bedrooms, multiple ensuites, and spacious office areas. Close to Crofton House School, Point Grey Secondary, Kerrisdale Elementary, parks, shopping, and recreation.",
    visual: "luxury",
  },
];
