export const DONATE_HERO = {
  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYoJSggw09l7V9tgdCVy9AImJhx1bOOodlVa6OUw3V1FLnaudATRK76tSgvgXLBCIDB1bzztHOSYKZMvYDTPj7v2cPANjDmV1tF5xbRi1PwV706aW0elkgkudAGZKhobzyN8PiCSJro22qjigJSDK6hGUdiEx-qACcDCJbij-ajXysptPAdvUcupuLJTeUzvIvuY6LND6Nr4YYWUzvS9yZWL_7aHyZ4lMFUKa6SFQxLxjKmmse9Vk",
    alt: "Historic Spanish Colonial Coral Stone Campanile and Belfry Masonry Restoration",
    plate: "Plate THF-DON-2025 · Perpetual Endowment",
  },
  cta: "PRESERVE THE STONES",
  meta: {
    section: "01 // Conservation Endowment",
    epoch: "( 1852 — Perpetual )",
  },
  editorial: {
    eyebrow: "Fiscal Stewardship & Living Coral",
    headline:
      "EVERY PESO SECURES A MORTAR JOINT. EVERY CONTRIBUTION DEFENDS THREE CENTURIES.",
    body:
      "The 1852 Most Holy Trinity Cathedral was built not by imperial decree, but through coral stone quarried offshore by Boholano fishermen and masons. Following Typhoon Odette and perpetual marine humidity, maintenance is an unbroken chain.",
    footnote:
      "// All contributions are deposited directly into the audited Perpetual Cathedral Maintenance Endowment (SEC Reg. CN202209148) under Diocesan Heritage oversight.",
  },
  stats: [
    { label: "Fiscal Integrity", value: "100% Directed to Works" },
    { label: "Tax Status", value: "Deductible Heritage Trust" },
  ],
  display: {
    line1: "KEEP THE",
    line2Left: "STONES",
    line2Right: "STANDING",
    badge: "OFFICIAL PRESERVATION TRUST",
    badgeStar: "✱",
    insetImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYoJSggw09l7V9tgdCVy9AImJhx1bOOodlVa6OUw3V1FLnaudATRK76tSgvgXLBCIDB1bzztHOSYKZMvYDTPj7v2cPANjDmV1tF5xbRi1PwV706aW0elkgkudAGZKhobzyN8PiCSJro22qjigJSDK6hGUdiEx-qACcDCJbij-ajXysptPAdvUcupuLJTeUzvIvuY6LND6Nr4YYWUzvS9yZWL_7aHyZ4lMFUKa6SFQxLxjKmmse9Vk",
    insetAlt: "Masons dressing coral stone",
  },
} as const;

export const TIERS = [
  {
    id: "tier-01",
    label: "Tier 01",
    name: "Coral Mortar Patron",
    amount: 1500,
    usd: "~$27 USD",
    description:
      "Funds traditional slaked lime and volcanic pozzolan compounding for 1 square meter of weather-beaten exterior walling.",
    impact: "1m² Slaked Lime Compounding",
  },
  {
    id: "tier-02",
    label: "Tier 02 · Recommended",
    name: "Belfry Masonry Benefactor",
    amount: 5000,
    usd: "~$90 USD",
    description:
      "Directly underwrites one full day of master stonemason labor, desalinization poultice, and scaffolding on the 1875 octagonal campanile.",
    impact: "1 Day Master Mason + Poultice",
  },
  {
    id: "tier-03",
    label: "Tier 03",
    name: "Pediment Guardian",
    amount: 15000,
    usd: "~$270 USD",
    description:
      "Covers delicate relief carving stabilization, niche saint canopy waterproofing, and high-tensile structural seismic tying.",
    impact: "Relief Stabilization + Seismic Tying",
  },
  {
    id: "tier-04",
    label: "Tier 04 · Monumental",
    name: "Archival Pillar Society",
    amount: 50000,
    usd: "~$900 USD",
    description:
      "Endows permanent bronze donor nameplate inside the south transept archives and full humidity monitoring sensors for 12 months.",
    impact: "Bronze Nameplate + 12mo Sensors",
  },
] as const;

export const PAYMENT_CHANNELS = [
  { id: "gcash", label: "GCash / Maya" },
  { id: "bdo", label: "BDO / Bank Transfer" },
  { id: "card", label: "Credit Card (Visa/MC)" },
  { id: "wire", label: "International Wire" },
] as const;

export const ALLOCATIONS = [
  {
    percentage: "62%",
    title: "Coral Stone Interventions",
    description:
      "Direct stonemason honoraria, quarrying permits, slaked hydraulic lime mortars, desalination chemical compresses, and scaffolding.",
  },
  {
    percentage: "18%",
    title: "Structural & Seismic Monitoring",
    description:
      "Laser scanning, tiltmeter checks on the 1875 belfry, seismic tied joints, and humidity telemetry sensors across the nave.",
  },
  {
    percentage: "12%",
    title: "Archival Manuscript Preservation",
    description:
      "Deacidification and climate storage for 1722–1899 Jesuit and Augustinian parish registers, baptismal folios, and blueprint plates.",
  },
  {
    percentage: "08%",
    title: "Public Education & Docents",
    description:
      "Free youth architectural tours, conservation workshops with local Boholano high schools, and academic documentation.",
  },
] as const;

export const DEPOSITORIES = [
  {
    bank: "Bank of the Philippine Islands (BPI)",
    accountName: "Talibon Heritage Foundation Inc.",
    branch: "Branch: Tagbilaran Main · Current Account",
    accountNumber: "Acct: 1290-0834-21",
    swift: "Swift: BOPIPHMM",
  },
  {
    bank: "Banco de Oro (BDO)",
    accountName: "Diocese of Talibon — Cathedral Restoration Trust",
    branch: "Branch: Ubay Bohol Branch · Special Trust",
    accountNumber: "Acct: 0041-9821-0044",
    swift: "Swift: BNORPHMM",
  },
  {
    bank: "GCash QR Merchant / Maya",
    accountName: "Talibon Cathedral Heritage fund",
    branch: "Verified Merchant ID: THF-PH-99201",
    accountNumber: "Mobile: 0917-824-3019",
    swift: "Instant BIR Form 2322 Issued",
  },
] as const;

export const COVENANT_CTA = {
  marker: "( A Covenant Across Epochs )",
  headline:
    "WE DO NOT INHERIT THE CHURCH FROM OUR ANCESTORS. WE BORROW IT FROM OUR DESCENDANTS.",
  body:
    "Your gift ensures that 170 years after the first coral block was hoisted onto the northern Bohol shore, the bells of Most Holy Trinity Cathedral will ring for the next century of Boholanos.",
  cta: "BECOME A GUARDIAN OF TALIBON ↗",
} as const;