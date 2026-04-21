export interface GalleryFrame {
  label: string;
  bg: string; // tailwind bg class
  dark?: boolean; // text on dark bg
  bigText?: string;
  position?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  color: string; // card hero bg
  client: string;
  roles: string[];
  deliverables: string[];
  summary: string;
  body: string;
  link?: string;
  gallery: GalleryFrame[];
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Lunar Commerce",
    category: "Brand × Web",
    year: "2025",
    color: "bg-lime",
    client: "Lunar Co. — Aerospace Retail",
    roles: ["Lead Designer", "Art Director", "Type Wrangler"],
    deliverables: ["Identity", "E-commerce", "Motion", "Packaging"],
    summary:
      "A retail house for the post-Earth shopper — built around weight, gravity and the strange comfort of a quiet checkout.",
    body:
      "Lunar arrived with a deck full of references and one constraint: no purple, no chrome, no rocket emoji. We built an editorial identity around a single custom display cut, paired with a monospaced order language. The site reads like a catalogue: long pages, oversized type, deliberate pauses. Conversion lifted 38% in the first quarter without a single discount banner.",
    link: "https://example.com",
    gallery: [
      { label: "Wordmark study", bg: "bg-lime", bigText: "L", position: "top-0 -right-4" },
      { label: "Editorial spread", bg: "bg-ink", dark: true, bigText: "01" },
      { label: "Product detail", bg: "bg-paper" },
      { label: "Packaging system", bg: "bg-ink", dark: true },
      { label: "Motion frame", bg: "bg-lime" },
    ],
  },
  {
    id: "02",
    title: "Atlas Studio",
    category: "Identity System",
    year: "2024",
    color: "bg-ink",
    client: "Atlas — Architecture Practice",
    roles: ["Identity Designer", "Type Designer", "Print Director"],
    deliverables: ["Wordmark", "Custom Type", "Stationery", "80-pg Book"],
    summary:
      "A wordmark that sits like a load-bearing wall — and a brand book that doubles as a coffee-table object.",
    body:
      "Atlas designs unfussy buildings in unfussy places. We mirrored that with a wordmark drawn on a strict grid, then loosened the rules just once for an italic that breathes. The 80-page brand book ships as a softcover with a dust jacket — clients keep it on the shelf instead of in a drive.",
    gallery: [
      { label: "Logotype grid", bg: "bg-ink", dark: true, bigText: "A" },
      { label: "Stationery suite", bg: "bg-paper" },
      { label: "Book cover", bg: "bg-lime" },
      { label: "Architectural spread", bg: "bg-ink", dark: true },
      { label: "Signage mockup", bg: "bg-paper", bigText: "02" },
    ],
  },
  {
    id: "03",
    title: "Noir & Co.",
    category: "E-commerce",
    year: "2024",
    color: "bg-paper border border-ink",
    client: "Noir & Co. — Niche Fragrance",
    roles: ["Art Director", "Web Designer", "Photo Director"],
    deliverables: ["Shopify Build", "Photography", "Packaging", "Launch Film"],
    summary:
      "A fragrance house that smells like 3am — and a site that takes its time getting to the buy button.",
    body:
      "Noir wanted Sephora gone from the conversation. We art-directed a photo series shot entirely on tungsten film, then built a Shopify theme around long, scroll-led product stories. The bottle and the box arrived together as a single sealed object — open it once, never the same way twice.",
    link: "https://example.com",
    gallery: [
      { label: "Bottle study", bg: "bg-ink", dark: true, bigText: "N" },
      { label: "Editorial photo", bg: "bg-paper" },
      { label: "Product page", bg: "bg-paper" },
      { label: "Packaging", bg: "bg-lime" },
      { label: "Launch film still", bg: "bg-ink", dark: true, bigText: "03" },
    ],
  },
  {
    id: "04",
    title: "Field Notes",
    category: "Editorial / UX",
    year: "2023",
    color: "bg-ink",
    client: "Field Notes Magazine — Quarterly",
    roles: ["UX Lead", "Designer", "Reading Mode Engineer"],
    deliverables: ["Digital Edition", "Reading Mode", "Archive", "Contributor Portal"],
    summary:
      "A quarterly that respects your attention — long-form, reader-tunable, and quietly indexed for the next decade.",
    body:
      "Field Notes' web edition replaces the usual scroll-jack with a calmer reading mode: serif by default, three densities, and a typographic palette that survives at any width. The archive is searchable by colour, mood and contributor — useful for editors, addictive for readers.",
    gallery: [
      { label: "Cover system", bg: "bg-ink", dark: true, bigText: "F" },
      { label: "Reading mode", bg: "bg-paper" },
      { label: "Archive grid", bg: "bg-lime" },
      { label: "Contributor portal", bg: "bg-paper" },
      { label: "Type specimen", bg: "bg-ink", dark: true, bigText: "04" },
    ],
  },
];
