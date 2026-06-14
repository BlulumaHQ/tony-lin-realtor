// src/data/listings.ts
// Tony Lin — UniLife Realty Inc. listing data
// Routing: each listing detail page is /listings/:id  (id = slug below)
//
// PHOTOS:
//   coverImage below = working myRealPage CDN URL (use for now so the site renders).
//   ⚠️ Do NOT rely on myRealPage CDN hotlinks long-term — they rot when a listing
//   sells / is delisted. Best practice (matches the manual-upload CMS approach):
//   download each listing's full photo set, drop the files into /public/listings/<id>/
//   and replace coverImage + photos[] with local paths e.g. "/listings/central-ave/01.jpg".
//
//   Photo counts on source: Studio = 10, Sold house = 10, Retail = 1, Land = 1 (aerial).
//   The `photos` arrays start with the cover only — add the rest after download.

export type ListingStatus = "Active" | "Sold";

export interface Listing {
  id: string;                 // slug for /listings/:id
  mlsNumber: string;          // may hold two numbers for the merged dual-listing
  status: ListingStatus;
  soldDate?: string;          // only for Sold
  category: string;           // short label shown on the card badge
  price: number;
  address: string;
  neighbourhood: string;
  city: string;
  postalCode: string;
  beds?: number;
  baths?: number;
  sqft?: number;              // building / living area
  lotSize?: string;
  acres?: number;
  yearBuilt?: number;
  propertyType: string;
  zoning?: string;
  taxes?: string;
  strataFee?: string;
  capRate?: string;
  highlights: string[];       // 3–5 quick bullets for the detail page
  description: string;
  listedBy: string;
  coverImage: string;
  photos: string[];           // start = [coverImage]; append downloaded gallery
  isFeaturedResult?: boolean; // true => surface in homepage "Recent Results"
}

export const listings: Listing[] = [
  {
    id: "central-ave-2312",
    mlsNumber: "R3132938",
    status: "Active",
    category: "Condo",
    price: 299000,
    address: "2312 – 13350 Central Avenue",
    neighbourhood: "Whalley (North Surrey)",
    city: "Surrey, BC",
    postalCode: "V3T 0S1",
    beds: 0,
    baths: 1,
    sqft: 350,
    yearBuilt: 2023,
    propertyType: "Apartment / Condo (Studio)",
    zoning: "CD",
    taxes: "$1,705.76 (2025)",
    strataFee: "$275.88 / month",
    highlights: [
      "ONE CENTRAL TOWER — steps to Surrey Central SkyTrain",
      "Premium Fulgor Milano kitchen appliances",
      "Resort-style amenities incl. One Club Sky fitness",
      "Rentals allowed — strong investor / first-buyer entry",
    ],
    description:
      "Welcome to ONE CENTRAL TOWER. This modern, functional studio features an open-concept living, dining, and kitchen layout with stylish laminate flooring throughout. The gourmet kitchen is equipped with premium Fulgor Milano appliances, including a gas cooktop, integrated refrigerator, and dishwasher. Residents enjoy exceptional amenities: fitness centre, outdoor garden, bike room, private work lounge, meeting room, club room, party kitchen, table-tennis area, and the exclusive One Club Sky fitness facility. Centrally located steps from SkyTrain, restaurants, shops, Central City Shopping Centre, T&T Supermarket, SFU Surrey campus, and Kwantlen Polytechnic University.",
    listedBy: "UniLife Realty Inc.",
    coverImage:
      "https://iss-cdn.myrealpage.com/vnT_wODxJURkc7QYT4Mw7sXEGxwDOI1ka1kQciH8EwU/rs:auto:800:600:0/g:sm/aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbXJwLWxpc3RpbmdzLzcvOC81LzEwODk4MDU4Ny9kMDgyZWQ2YWE3M2YyZTZmOGY2NGU2ODI4NzMzNzM1Ni5qcGVn",
    photos: [
      "https://iss-cdn.myrealpage.com/vnT_wODxJURkc7QYT4Mw7sXEGxwDOI1ka1kQciH8EwU/rs:auto:800:600:0/g:sm/aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbXJwLWxpc3RpbmdzLzcvOC81LzEwODk4MDU4Ny9kMDgyZWQ2YWE3M2YyZTZmOGY2NGU2ODI4NzMzNzM1Ni5qcGVn",
      // TODO: download remaining 9 photos from the source listing and add local paths here
    ],
  },
  {
    id: "capstan-way-8328",
    mlsNumber: "C8074525",
    status: "Active",
    category: "Retail / Commercial",
    price: 5400000,
    address: "1161–1163 – 8328 Capstan Way",
    neighbourhood: "West Cambie",
    city: "Richmond, BC",
    postalCode: "V6X 2H6",
    sqft: 3858,
    yearBuilt: 1998,
    propertyType: "Retail — Strip Mall (2 storeys)",
    zoning: "CA",
    taxes: "$10,596.51 (2025)",
    capRate: "Over 5.5%",
    highlights: [
      "CAP rate over 5.5% — income-producing",
      "Prime corner unit, heavy foot traffic",
      "2-min walk to new Capstan SkyTrain station",
      "Projected area population 16,000 on completion",
    ],
    description:
      "Exceptional investment opportunity with a CAP rate over 5.5%. Prime corner unit in Richmond's bustling strip mall with unbeatable street exposure and easy access to No. 3 Road and Garden City Road. Situated in a rapidly expanding neighbourhood with thousands of new condo units and a projected population of 16,000 upon completion — just a 2-minute walk from the newly operational Capstan SkyTrain station. Ideal for a large restaurant, with additional signage space and heavy foot traffic. (Please respect tenant privacy.)",
    listedBy: "UniLife Realty Inc.",
    coverImage:
      "https://iss-cdn.myrealpage.com/huh6X8dKULMXtWk5PursPOAcXyclOjJGSr60mJeS_8Y/rs:auto:800:600:0/g:sm/aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbXJwLWxpc3RpbmdzLzQvMS81LzEwNzQ3NzUxNC85MTM4MTBhYzAyYjU3ZGE3YzBlYjUzNWQ3NzljNzUyMi5qcGVn",
    photos: [
      "https://iss-cdn.myrealpage.com/huh6X8dKULMXtWk5PursPOAcXyclOjJGSr60mJeS_8Y/rs:auto:800:600:0/g:sm/aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbXJwLWxpc3RpbmdzLzQvMS81LzEwNzQ3NzUxNC85MTM4MTBhYzAyYjU3ZGE3YzBlYjUzNWQ3NzljNzUyMi5qcGVn",
    ],
  },
  {
    id: "176-street-8171",
    // Same 11.02-acre property, dual-listed as Agri-Business/Commercial AND Residential Land.
    mlsNumber: "C8075238 / R3080368",
    status: "Active",
    category: "Land / Agri-Business",
    price: 3400000,
    address: "8171 176 Street",
    neighbourhood: "Fleetwood Tynehead",
    city: "Surrey, BC",
    postalCode: "V4N 6G6",
    acres: 11.02,
    propertyType: "Land / Agri-Business (Farm)",
    zoning: "A1 (Agricultural Land Reserve)",
    taxes: "$690.23 (2025)",
    highlights: [
      "11.02 acres — first time on market in ~30 years",
      "~9 acres fenced, suited for livestock",
      "Currently leased to a hobby farmer (chickens & sheep)",
      "Exceptionally low property taxes — efficient long-term hold",
    ],
    description:
      "Available for the first time in nearly 30 years, this rare 11.02-acre property offers the opportunity to build your dream home while establishing an agribusiness operation in a prime Fleetwood Tynehead location. Approximately 9 acres are fenced and well-suited for livestock, ideal for small-scale farming or agribusiness use. The land is currently leased to a hobby farmer raising chickens and sheep, preserving its agricultural use. Exceptionally low property taxes make this a cost-effective long-term holding — a unique chance to create a private rural retreat and become part of Fleetwood Tynehead's farming heritage. Listed as both Agri-Business / Commercial (C8075238) and Residential Land (R3080368).",
    listedBy: "UniLife Realty Inc.",
    coverImage:
      "https://iss-cdn.myrealpage.com/Jk_63W5k3k3UKs5qv9uiz2apWPoHFlg5iJjQbkBt-3M/rs:auto:800:600:0/g:sm/aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbXJwLWxpc3RpbmdzLzQvOS85LzEwNzY2Mzk5NC9mYzBhZDI2NzVkZjA2MzFiMDE5MjNlY2Y3MTIzMTNmMS5qcGVn",
    photos: [
      "https://iss-cdn.myrealpage.com/Jk_63W5k3k3UKs5qv9uiz2apWPoHFlg5iJjQbkBt-3M/rs:auto:800:600:0/g:sm/aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbXJwLWxpc3RpbmdzLzQvOS85LzEwNzY2Mzk5NC9mYzBhZDI2NzVkZjA2MzFiMDE5MjNlY2Y3MTIzMTNmMS5qcGVn",
    ],
  },
  {
    id: "w-36th-2995",
    mlsNumber: "R2768003",
    status: "Sold",
    soldDate: "April 14, 2023",
    category: "Residential House",
    price: 4350000,
    address: "2995 W 36th Avenue",
    neighbourhood: "MacKenzie Heights (Vancouver West)",
    city: "Vancouver, BC",
    postalCode: "V6N 2R2",
    beds: 6,
    baths: 6,
    sqft: 4639,
    lotSize: "7,736 sq. ft.",
    yearBuilt: 1996,
    propertyType: "Single Family Residence",
    highlights: [
      "Custom-built family home, held 28 years",
      "Maple & rosewood floors, handmade oak moulding",
      "6 beds (3 ensuites) + 2 offices large enough for beds",
      "Steps to Crofton House, Point Grey Secondary, Kerrisdale Elementary",
    ],
    description:
      "High-quality custom home in one of Vancouver West's most desirable neighbourhoods. Built by the seller and held as a family home for 28 years. Exceptional detail and materials throughout — maple flooring, custom handmade oak moulding, and maple and rosewood floors. 6 bedrooms including 3 ensuites and a semi-ensuite, plus 2 spacious offices large enough for beds. Steps from top-ranked schools including Crofton House School, Point Grey Secondary, and Kerrisdale Elementary, with parks, shopping, and recreation nearby.",
    listedBy: "UniLife Realty Inc.",
    isFeaturedResult: true,
    coverImage:
      "https://iss-cdn.myrealpage.com/9VaAZTCmbnkY_oSnC6FzpL2F0AxfnCYDMvzAaEPbcFE/rs:auto:800:600:0/g:sm/aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbXJwLWxpc3RpbmdzLzMvMi8xLzEwNTEwNTEyMy9mNWQ4ZTk4NzAwYjZlNDEwYWRiNDZjYzVmMjlmOTMwMS5qcGVn",
    photos: [
      "https://iss-cdn.myrealpage.com/9VaAZTCmbnkY_oSnC6FzpL2F0AxfnCYDMvzAaEPbcFE/rs:auto:800:600:0/g:sm/aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbXJwLWxpc3RpbmdzLzMvMi8xLzEwNTEwNTEyMy9mNWQ4ZTk4NzAwYjZlNDEwYWRiNDZjYzVmMjlmOTMwMS5qcGVn",
      // TODO: download remaining 9 photos from the source listing and add local paths here
    ],
  },
];

export const activeListings = listings.filter((l) => l.status === "Active");
export const soldListings = listings.filter((l) => l.status === "Sold");
export const featuredResults = listings.filter((l) => l.isFeaturedResult);
export const getListingById = (id: string) => listings.find((l) => l.id === id);
