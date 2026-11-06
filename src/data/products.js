// Each product: id, brand, category (for filtering), name, blurb, packs (display only, no prices)
export const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "cement-paint", label: "Cement Paint" },
  { id: "distemper", label: "Distempers" },
  { id: "emulsion", label: "Emulsions" },
  { id: "primer", label: "Primers" },
  { id: "putty", label: "Wall Putty" },
];

export const PRODUCTS = [
  {
    id: "suncem-cement-paint",
    brand: "Suncem",
    category: "cement-paint",
    name: "Super Suncem Waterproof Cement Paint",
    blurb:
      "Our original 1977 launch — a tough, waterproof cement-based paint for exteriors, in standard and special shades (Sun Green, Yellow Green, Brick Red).",
    packs: ["1 kg", "5 kg", "20 kg"],
  },
  {
    id: "suncoat-distemper",
    brand: "Suncoat",
    category: "distemper",
    name: "Suncoat Synthetic Distemper",
    blurb:
      "An economical, smooth-finish distemper for interior walls, available in regular, dark and special colour ranges.",
    packs: ["1 kg", "2 kg", "5 kg", "10 kg", "20 kg"],
  },
  {
    id: "suncoat-matt",
    brand: "Suncoat",
    category: "emulsion",
    name: "Suncoat Matt",
    blurb:
      "A smooth matt-finish interior emulsion in light and dark shades — offwhite, ivory, wedgewood, marble grey, bone white, peach and light biscuit.",
    packs: ["1 kg", "4 kg", "10 kg", "20 kg"],
  },
  {
    id: "suncoat-exterior-emulsion",
    brand: "Suncoat",
    category: "emulsion",
    name: "Suncoat Exterior Emulsion Paint",
    blurb:
      "Weather-resistant exterior emulsion in Renaissance, Revel, Mehendi, Terracotta and other popular shades.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "suncoat-gold-series",
    brand: "Suncoat",
    category: "emulsion",
    name: "Suncoat Exterior Emulsion Gold Series",
    blurb:
      "Our premium exterior emulsion range with vivid shades — Sunrise, Mohul Green, Jolly Holly, Phantom, Sapphire Blue and more.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "suncoat-flora",
    brand: "Suncoat",
    category: "emulsion",
    name: "Suncoat Flora Exterior Emulsion",
    blurb:
      "A rich base-white exterior emulsion built for long-lasting exterior colour and finish.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "suncoat-wall-primer",
    brand: "Suncoat",
    category: "primer",
    name: "Suncoat Exterior Wall Primer",
    blurb:
      "A water-base primer that preps exterior walls for even topcoat coverage.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "suncoat-cement-primer",
    brand: "Suncoat",
    category: "primer",
    name: "Suncoat Cement Primer (Water Base)",
    blurb:
      "A water-base cement primer for interior walls, sealing surfaces before painting.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "suncoat-oil-primers",
    brand: "Suncoat",
    category: "primer",
    name: "Suncoat Oil-Base Primers",
    blurb:
      "Red Oxide (I.Q.), Zinc Phosphate Yellow Chrome, Primer Grey, C.P.O.B., S.K.P.S. Grey & White, and Wood Primer in White and Pink.",
    packs: ["1 kg", "2 kg", "4 kg", "20 kg"],
  },
  {
    id: "sudarshan-putty-powder",
    brand: "Sudarshan",
    category: "putty",
    name: "Sudarshan Dry Plaster Cement-Based Wall Putty Powder",
    blurb:
      "A cement-based putty powder that gives walls a smooth, crack-resistant finish before painting.",
    packs: ["1 kg", "5 kg", "40 kg"],
  },
  {
    id: "sudarshan-acrylic-putty",
    brand: "Sudarshan",
    category: "putty",
    name: "Sudarshan Acrylic Wall Putty",
    blurb:
      "A ready-to-use acrylic paste putty for fine wall finishing, indoors and out.",
    packs: ["1 kg", "5 kg", "10 kg", "20 kg"],
  },
  {
    id: "sudarshan-universal-primer",
    brand: "Sudarshan",
    category: "primer",
    name: "Sudarshan Universal Cement Primer",
    blurb:
      "A water-base primer for both interior and exterior use — one primer, every wall.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "sudarshan-exterior-primer",
    brand: "Sudarshan",
    category: "primer",
    name: "Sudarshan Exterior Wall Primer",
    blurb:
      "A dedicated exterior-grade primer for lasting adhesion under harsh weather.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "sudarshan-ae3",
    brand: "Sudarshan",
    category: "emulsion",
    name: "Sudarshan Super Acrylic Emulsion AE3",
    blurb:
      "A premium acrylic emulsion in base white, built for durability and colour retention.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "sudarshan-sc1",
    brand: "Sudarshan",
    category: "emulsion",
    name: "Sudarshan Exterior Emulsion SC-1",
    blurb:
      "A reliable base-white exterior emulsion for everyday exterior painting needs.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "sudarshan-flora",
    brand: "Sudarshan",
    category: "emulsion",
    name: "Sudarshan Flora Exterior Emulsion",
    blurb:
      "Our Flora exterior range (FE-10, FE-13, FE-17, FE-20, SFE-2) for rich, weather-ready exterior colour.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "sudarshan-exterior-paint",
    brand: "Sudarshan",
    category: "emulsion",
    name: "Sudarshan Exterior Emulsion Paint",
    blurb:
      "Available in Renaissance, Revel, Mehendi, Terracotta, Special Signal Red and other shades.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "sudarshan-gold-series",
    brand: "Sudarshan",
    category: "emulsion",
    name: "Sudarshan Exterior Emulsion Gold Series",
    blurb:
      "Our premium exterior emulsion range under the Sudarshan name — same vivid Gold Series shades.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "sudarshan-surprise",
    brand: "Sudarshan",
    category: "emulsion",
    name: "Sudarshan Surprise Interior Emulsion",
    blurb:
      "A smooth, vibrant interior emulsion in base white SB-2, for interior walls that need to stand out.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "fivestar-exterior-primer",
    brand: "Fivestar",
    category: "primer",
    name: "Fivestar Exterior Wall Primer",
    blurb:
      "A dependable exterior wall primer for dealers who trust the Fivestar name.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
  {
    id: "bluehill-universal-primer",
    brand: "Bluehill",
    category: "primer",
    name: "Bluehill Universal Cement Primer",
    blurb:
      "A universal primer for interior and exterior use under the Bluehill brand.",
    packs: ["1 L", "4 L", "10 L", "20 L"],
  },
];

// Brand accent used for the card's top border and tag
export const BRAND_COLOUR = {
  Suncem: "terracotta",
  Suncoat: "saffron",
  Sudarshan: "teal",
  Fivestar: "accent",
  Bluehill: "accent-2",
};
