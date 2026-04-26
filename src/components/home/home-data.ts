export const services = [
  {
    n: "01",
    t: "Websites",
    d: "Fast, responsive marketing sites and web apps - clean code, polished UI, shipped on time.",
  },
  {
    n: "02",
    t: "SEO",
    d: "Technical SEO, on-page structure and Core Web Vitals tuning so your site is found, not just built.",
  },
];

export type ProjectStatus = "live" | "in-progress";

export type ShowcaseProject = {
  n: string;
  title: string;
  tag: string;
  year: string;
  stack: string[];
  desc: string;
  color: string;
  link: string;
  status: ProjectStatus;
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    n: "01",
    title: "Kairo Analytics",
    tag: "SaaS Dashboard",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Supabase"],
    desc: "Real-time analytics dashboard with custom charting, role-based auth and a marketing site that converts.",
    color: "bg-lime",
    link: "#",
    status: "live",
  },
  {
    n: "02",
    title: "Saanvi Boutique",
    tag: "E-commerce",
    year: "2024",
    stack: ["React", "Shopify", "Tailwind"],
    desc: "Headless Shopify storefront for a D2C fashion label - long product stories, fast checkout, ranks page-one for brand terms.",
    color: "bg-ink",
    link: "#",
    status: "live",
  },
  {
    n: "03",
    title: "Northwind Studio",
    tag: "Agency Site",
    year: "2024",
    stack: ["Astro", "Sanity", "GSAP"],
    desc: "Editorial agency website with case-study CMS, scroll-triggered motion and 100/100 Lighthouse across all pages.",
    color: "bg-paper border border-ink",
    link: "#",
    status: "in-progress",
  },
  {
    n: "04",
    title: "Pulse Fitness",
    tag: "Web App",
    year: "2023",
    stack: ["React", "Node", "MongoDB"],
    desc: "Workout-tracking PWA with offline mode, custom plan builder and social leaderboard for a gym chain in Pune.",
    color: "bg-ink",
    link: "#",
    status: "in-progress",
  },
];

export const approachItems = [
  ["01", "Clean & maintainable code", "Readable, typed, and built to last beyond the launch."],
  ["02", "Fast-loading, responsive design", "Optimised for Core Web Vitals on every device."],
  ["03", "SEO-friendly structure from day one", "Semantic markup, schema, and content that ranks."],
];
