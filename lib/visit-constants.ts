export const VISIT_HERO = {
  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCknXEKVQdVIjGcHiaJesxr7L4ipxZUNE0hoagUMp3evYxH2rkC8LmPWuiLmnEGn4YIblOJjUQADCOTPWeVPIgtVGLSofWjuqXpxLc8Pm6OVZ7H9DFoP3YXjixd3L4ueQz_34aBSYY4y3_tX6_4Ru899NWtYgV9zdRYpGhM1aXJnibV0zcfoXk-sfRW9XvpAzi4nBCKLxqV6qXbueCA4oejH_h9DFHvoSRiDBvd7tFo8j5cvlFKaQ",
    alt: "Monumental western portal entrance and facade of Talibon Cathedral with dramatic natural stone texture",
    plate: "PLATE 01 — SACRED FAÇADE & BELFRY",
  },
  cta: "PLAN YOUR PILGRIMAGE",
  meta: {
    section: "01 / PILGRIMAGE GUIDE",
    epoch: "( 1858 )",
  },
  editorial: {
    eyebrow: "EPITAPH // MONUMENTUM",
    headline: "STEP INTO THREE CENTURIES OF LIVING BOHOLANO HERITAGE.",
    body:
      "The Most Holy Trinity Cathedral stands as northern Bohol's paramount coral-stone monolith \\\\\\\\ Welcoming pilgrims, scholars, and wanderers daily for holy mass, silent contemplation, and archival architecture tours.",
    footnote:
      "// Consecrated under Spanish Augustinian Recollect stewardship · Intact marine limestone masonry & hardwood transepts.",
  },
  specs: [
    { label: "DIOCESE", value: "Diocese of Talibon" },
    { label: "CANONICAL STATUS", value: "Cathedral Monolith (1858)" },
  ],
  display: {
    line1: "CRADLE OF FAITH",
    star: "✦",
    badge: "OPEN DAILY FOR LITURGY",
    badgeStar: "✱",
    line2Left: "SACRED",
    line2Right: "ACCESS",
    insetImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGqHz7c0-g3gNFVB1WYdisgCxRgrFefP8soNoVJ3HkqqWSbEaoM_EQs6Ys4rHgJL5gL9kCP05opJ4WVb9kYwDO0hv58HIaAofbWb-wqNMdQyiRZCRcVY_cV3FnTRfEYJkHoNOnbmcgK8VxZgrhPGU-sqf4WMeC46uVHHdFcHiY-kYRyxp6CTw6HZ12bbFYkIX5JNwNtwYiEcKxRqprZ15rYF2n4eCBTMk_4Auog1kV4WRMr6_SReo",
    insetAlt: "Archival inset plate of carved molave portal timbers",
    insetTag: "PORTA",
  },
} as const;

export const PRACTICAL_INFO = {
  section: "02 / PRACTICAL INFO",
  right: "( liturgical schedule & protocols )",
  rows: [
    {
      label: "LOCATION",
      primary: "Barangay Poblacion, Talibon, Bohol",
      secondary: "Adjacent to the municipal seawall and parish convent.",
    },
    {
      label: "MASS TIMES",
      primaryLines: [
        { prefix: "Daily:", value: " 6:00 AM" },
        {
          prefix: "Sunday:",
          value: " 5:00 AM · 7:00 AM · 9:00 AM · 4:00 PM",
        },
      ],
      secondary: "Visayan & English liturgy with native acoustic choir.",
    },
    {
      label: "HISTORICAL TOURS",
      primary: "Monday – Friday, 8:00 AM – 5:00 PM",
      secondary:
        "Free admission; docent-guided archival walks through the belfry and nave. Prior booking recommended for delegations.",
      small: true,
    },
    {
      label: "DRESS CODE",
      primary: "Modest attire required",
      secondary:
        "Shoulders and knees must remain covered inside consecrated coral-stone chambers.",
    },
  ],
  archivalNoteLabel: "ARCHIVAL ACCESS NOTE",
  archivalNote:
    "Researchers seeking access to the parish baptismal records from 1722 must submit an advance credential request to the Chancellery.",
  plate: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGqHz7c0-g3gNFVB1WYdisgCxRgrFefP8soNoVJ3HkqqWSbEaoM_EQs6Ys4rHgJL5gL9kCP05opJ4WVb9kYwDO0hv58HIaAofbWb-wqNMdQyiRZCRcVY_cV3FnTRfEYJkHoNOnbmcgK8VxZgrhPGU-sqf4WMeC46uVHHdFcHiY-kYRyxp6CTw6HZ12bbFYkIX5JNwNtwYiEcKxRqprZ15rYF2n4eCBTMk_4Auog1kV4WRMr6_SReo",
    alt: "High contrast black and white architectural detail of massive carved molave timber double doors and heavy relief stone portal arch",
    caption: "PORTA PRINCIPALIS — MAIN PORTAL TIMBERS & SURROUND",
    material: "Molave & Marine Calcite",
  },
} as const;

export const TRANSIT = {
  section: "03 / HOW TO GET HERE",
  right: "( northern bohol transit )",
  headline: ["From anywhere", "in Bohol."],
  routes: [
    {
      id: "t01",
      number: "01",
      eyebrow: "SOUTHERN HIGHWAY ROUTE",
      title: "From Tagbilaran",
      body:
        "1.5 hours via direct provincial air-conditioned bus or commuter van from Dao Integrated Bus Terminal.",
      footerLeft: "Departures every 30 mins",
      footerRight: "ROUTE T-01 ↗",
      /** map node coords + path label */
      pathId: "path-tagbilaran",
    },
    {
      id: "t02",
      number: "02",
      eyebrow: "CEBU STRAIT MARITIME LINK",
      title: "From Tubigon Port",
      body:
        "45 minutes along the northwestern scenic coastal artery by van, directly following fast-craft arrival from Cebu City.",
      footerLeft: "Fast-craft connection",
      footerRight: "ROUTE T-02 ↗",
      pathId: "path-tubigon",
    },
    {
      id: "t03",
      number: "03",
      eyebrow: "EASTERN PENINSULA CORRIDOR",
      title: "From Ubay Airport",
      body:
        "1 hour by van westward along the quiet northern agricultural plain and mangrove coastline.",
      footerLeft: "Provincial transit",
      footerRight: "ROUTE T-03 ↗",
      pathId: "path-ubay",
    },
  ],
  map: {
    title: "TOPOGRAPHICAL CHART — NORTHERN BOHOL APEX",
    coords: "Coordinates: 10°09′N 124°20′E · Camotes Sea Coastline",
    legendPrimary: "TALIBON (CATHEDRAL SITE)",
    legendSecondary: "REGIONAL HUB",
  },
} as const;

export const NEARBY = {
  section: "04 / NEARBY",
  right: "( historical circuit & crafts )",
  headline: ["While you're", "in Talibon."],
  cards: [
    {
      eyebrow: "SITE 01 · HISTORIC MONUMENT",
      title: "Carlos P. Garcia House",
      body:
        "Birthplace of the 8th President of the Philippines and author of the landmark \"Filipino First\" economic policy. Preserved archival memorabilia and family library.",
      footerLeft: "5 min walk from Plaza",
      footerRight: "VISIT",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBE4DnuhT28435ShvpvgNxp7kWRyW0k2es_SvQe1pCx4NLAuDXmaaHDaVInmdPbU_enYkbGQpr-p0lVYVFCvAnKRT4rj6-TNeXuSI4dsqlHfqCbclPrQvx1HkrHfREgwbh731PJIAlY1e1HPBqDIizEU574QCpWFCZZ7nEsVybsODgrt6aMHteO_HuW9z1xIgmQWrEqUGf41ev1408IGHe3oLQ9REoJnAnJuy2aM6mBAKNfA7yScOU",
      alt: "Vintage black and white photograph of an ancestral wooden Philippine heritage house with capiz shell windows",
    },
    {
      eyebrow: "SITE 02 · LIVING TRADITION",
      title: "Bagacay Pottery Village",
      body:
        "A working tradition of red earthenware clay pottery sustained continuously since pre-colonial trade eras. Hand-thrown water jars and traditional wood-firing kilns.",
      footerLeft: "12 min via tricycle",
      footerRight: "EXPLORE",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuChMVsqTtbuD5ZxgkjMdFk0Rh5kHfaiuZlPjW6IoabKPYjuS01AVJy09daUrR5Puj4VHS-V0-bgCR0LDhIIxA2Th9vZYUdMqPluDxYi8D7hEHqy9S54YH7NCb-j4IGYn-PUZdulOHprwQNJ3OLc6L9UXEeKG4ZJPASqaTxAcMY9CPKmWUu2EsCTOK-iUBhDL2_w2cP-yaYDAXBbg1i-q_YlNzK6wPAsV_tFrNM5Wd5p061NdKn2bZo",
      alt: "Artisanal black and white documentary photo of an elderly craftsman molding unglazed terracotta clay pots",
    },
    {
      eyebrow: "SITE 03 · CIVIC LIFE",
      title: "Talibon Public Market",
      body:
        "The sensory epicentre of northern Bohol's coastal harvest: fresh sea urchin, sun-cured danggit fish, native sticky rice cakes, and woven nipa basketry.",
      footerLeft: "Harborside port area",
      footerRight: "HOURS",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDlLxqJLjL_a9IVvXbHNZJlJR5tktSynZAmTk5pPZQT9OsZbT92OI2sClJuwP7i_QAXyXieUw1SIf5eo9Eno7FBHFXaQYsWdkS9zTwdFuC1PgO9RKQsKan5kNai_iLWZ0IolQfAi5wuLz4lW5PTW35OZqWMEApLTNaOwUiQIBdyJRL80GnVQw1FXHInjCClCVJQqsABrXQXyvZpvMH1ZVy7d2LV0a-84iM8yqoSFEBCDzIsa91QIZ4",
      alt: "Documentary black and white photograph of an open coastal market in Talibon Bohol with rows of wicker baskets",
    },
  ],
} as const;

export const BOOK_TOUR = {
  marker: "( guided tours & documentation )",
  tag: "ARCHIVE EXPEDITION 2025",
  headline: [
    "Come stand",
    "where three",
    "centuries of faith",
    "have stood.",
  ],
  body:
    "Our docents guide small groups through the intact 1858 coral-stone belfry, the sacristy reliquaries, and the private convent archives. All tours support ongoing stone conservation works.",
  cta: "BOOK A TOUR ↗",
  ctaFootnote: "No admission fee · Voluntary donations accepted",
  specs: [
    { label: "GROUP CAPACITY", value: "Maximum 15 pilgrims / group" },
    { label: "TOUR DURATION", value: "75 minutes comprehensive" },
    { label: "LANGUAGES", value: "Cebuano / English / Spanish" },
    { label: "DOCENT DESK", value: "Parish Office (South Transept)" },
  ],
} as const;