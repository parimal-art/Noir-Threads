export const IMAGES = [
  "https://poe.net.in/cdn/shop/files/ISA_8011_3000x.jpg?v=1717489565",
  "https://poe.net.in/cdn/shop/files/ISA_8008_3000x.jpg?v=1717489565",
  "https://poe.net.in/cdn/shop/files/ISA_8012_3000x.jpg?v=1717489565",
  "https://poe.net.in/cdn/shop/files/ISA_8014_3000x.jpg?v=1717489565",
  "https://poe.net.in/cdn/shop/files/ISA_8004_3000x.jpg?v=1717489565",
  
];

export const DETAILS = [
  {
    title: "Key Features",
    content: [ "Premium 98% cotton, 2% elastane – soft stretch", "Classic spread collar, reinforced placket", "Tailored fit with rounded hem", "Colour: Jet Black", "SKU: SHRT-091" ],
  },
  {
    title: "Fit & Size",
    content: [ "S – Chest 38", "M – Chest 40", "L – Chest 42", "XL – Chest 44", "XXL – Chest 46" ],
  },
  {
    title: "Fabric & Care",
    content: [ "Machine wash cold, gentle cycle", "Do not bleach; warm iron inside out", "Dry in shade to retain deep colour" ],
  },
  {
    title: "Shipping",
    content: [ "Ships in 2–4 business days", "Free shipping on orders over ₹999", "COD available in select locations" ],
  },
  {
    title: "Returns",
    content: [ "7‑day easy exchange/return", "Item must be unused with all tags" ],
  },
];

const NAMES = ["Amit S.", "Nisha P.", "Karan R.", "Priya S.", "Ananya S.", "Meera A.", "Divya I."];
const TITLES = ["Perfect black shirt", "Sharp and comfortable", "Great stitch quality", "Goes with everything", "Premium feel, true to size", "Subtle stretch works"];
const BODIES = [
  "Fabric feels premium and the black doesn’t fade after wash. Fit is tailored without being tight.",
  "Wore it to an evening event — looks classy under warm light. Collar sits crisp.",
  "Buttons are solid, stitching is neat. No loose threads. Value for money.",
  "Pairs with denim and chinos. Loved the matte buttons and rounded hem.",
  "Good for office and dates alike. Breathable even in Kolkata weather.",
];

export const ALL_REVIEWS = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  name: NAMES[i % NAMES.length],
  rating: [5, 4, 5, 3, 4, 5, 2][i % 7],
  title: TITLES[i % TITLES.length],
  body: BODIES[i % BODIES.length],
  when: `${1 + (i % 3)} year${(i % 3) ? "s" : ""} ago`,
  helpful: 1 + ((i * 3) % 17),
  verified: i % 2 === 0,
}));