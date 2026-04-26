export interface GalleryFrame {
  label: string;
  bg: string;
  dark?: boolean;
  bigText?: string;
  position?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  color: string;
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
    title: "Lumen Studio",
    category: "Agency Template",
    year: "2025",
    color: "bg-lime",
    client: "Creative Studios & Agencies",
    roles: ["Next.js", "Tailwind", "Framer Motion"],
    deliverables: ["6 Pages", "CMS Ready", "SEO Optimised", "Dark Mode"],
    summary:
      "An editorial template for boutique studios — bold type, slow scroll, fast Lighthouse scores.",
    body:
      "Lumen ships as a production-ready Next.js project. Clean component structure, semantic HTML, and a typographic system tuned for long-form case studies. Drop in your content, deploy to Vercel, and you're live in under an hour.",
    link: "https://example.com",
    gallery: [
      { label: "Landing hero", bg: "bg-lime", bigText: "L", position: "top-0 -right-4" },
      { label: "Case study", bg: "bg-ink", dark: true, bigText: "01" },
      { label: "Services grid", bg: "bg-paper" },
      { label: "Mobile view", bg: "bg-ink", dark: true },
      { label: "Contact form", bg: "bg-lime" },
    ],
  },
  {
    id: "02",
    title: "Forge SaaS",
    category: "SaaS Template",
    year: "2025",
    color: "bg-ink",
    client: "Early-stage SaaS founders",
    roles: ["React", "TypeScript", "Stripe"],
    deliverables: ["Landing", "Pricing", "Auth Flows", "Dashboard"],
    summary:
      "Everything a SaaS landing needs — pricing tiers, testimonial slabs, and a dashboard that doesn't look like a template.",
    body:
      "Forge covers the full SaaS surface area: marketing site, pricing page, sign-in/sign-up flows, and a clean dashboard shell. Stripe-ready, fully typed, and built with conversion in mind.",
    gallery: [
      { label: "Hero section", bg: "bg-ink", dark: true, bigText: "F" },
      { label: "Pricing page", bg: "bg-paper" },
      { label: "Dashboard", bg: "bg-lime" },
      { label: "Auth screen", bg: "bg-ink", dark: true },
      { label: "Mobile nav", bg: "bg-paper", bigText: "02" },
    ],
  },
  {
    id: "03",
    title: "Noir Commerce",
    category: "E-commerce Template",
    year: "2024",
    color: "bg-paper border border-ink",
    client: "Niche D2C brands",
    roles: ["Next.js", "Shopify", "Sanity"],
    deliverables: ["PLP", "PDP", "Cart", "Checkout"],
    summary:
      "A storefront for brands that don't shout — long product stories, tasteful motion, conversion-tuned checkout.",
    body:
      "Noir Commerce pairs a Shopify backend with a custom Next.js front-end. Editorial product pages, a quiet cart drawer, and a checkout that respects the brand. Built for D2C teams who want to look like a magazine, not a marketplace.",
    link: "https://example.com",
    gallery: [
      { label: "Product page", bg: "bg-ink", dark: true, bigText: "N" },
      { label: "Collection grid", bg: "bg-paper" },
      { label: "Cart drawer", bg: "bg-paper" },
      { label: "Editorial block", bg: "bg-lime" },
      { label: "Checkout", bg: "bg-ink", dark: true, bigText: "03" },
    ],
  },
  {
    id: "04",
    title: "Field Portfolio",
    category: "Portfolio Template",
    year: "2024",
    color: "bg-ink",
    client: "Designers, devs & freelancers",
    roles: ["Vite", "React", "MDX"],
    deliverables: ["Landing", "Work Grid", "Case Study", "About"],
    summary:
      "A portfolio that gets out of the way — your work first, your words second, your face never.",
    body:
      "Field is the template I use as a baseline for every freelance pitch. MDX-driven case studies, an animated work grid, and a contact section that converts. Lighthouse 100s out of the box.",
    gallery: [
      { label: "Work grid", bg: "bg-ink", dark: true, bigText: "P" },
      { label: "Case study", bg: "bg-paper" },
      { label: "About page", bg: "bg-lime" },
      { label: "Contact", bg: "bg-paper" },
      { label: "Mobile menu", bg: "bg-ink", dark: true, bigText: "04" },
    ],
  },
  {
    id: "05",
    title: "Beacon Blog",
    category: "Blog / Publication",
    year: "2024",
    color: "bg-lime",
    client: "Writers & publications",
    roles: ["Astro", "MDX", "Tailwind"],
    deliverables: ["Index", "Article", "Author", "RSS"],
    summary:
      "A reader-first publication template — serif by default, three densities, archive built to last.",
    body:
      "Beacon is built on Astro for speed and MDX for ergonomics. Calm typography, thoughtful archive, and an article view tuned for long sessions.",
    gallery: [
      { label: "Article view", bg: "bg-lime", bigText: "B" },
      { label: "Index page", bg: "bg-paper" },
      { label: "Author page", bg: "bg-ink", dark: true },
      { label: "Archive", bg: "bg-paper" },
      { label: "Mobile read", bg: "bg-ink", dark: true, bigText: "05" },
    ],
  },
  {
    id: "06",
    title: "Atlas Landing",
    category: "Landing Page",
    year: "2023",
    color: "bg-ink",
    client: "Product launches",
    roles: ["React", "Tailwind", "GSAP"],
    deliverables: ["Hero", "Features", "FAQ", "CTA"],
    summary:
      "A single-page launch template with the kind of hero that makes people stop scrolling.",
    body:
      "Atlas is built for product launches and waitlists. Bold hero, scroll-triggered feature reveals, FAQ accordion, and a CTA that converts. Drop in your copy and ship today.",
    gallery: [
      { label: "Hero", bg: "bg-ink", dark: true, bigText: "A" },
      { label: "Features", bg: "bg-paper" },
      { label: "FAQ", bg: "bg-lime" },
      { label: "Footer CTA", bg: "bg-ink", dark: true, bigText: "06" },
    ],
  },
];
