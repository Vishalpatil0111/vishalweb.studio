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

export type ProjectStatus = "completed" | "in-progress" | "template";

export type ShowcaseProject = {
  n: string;
  title: string;
  tag: string;
  year: string;
  stack: string[];
  desc: string;
  color: string;
  image: string;
  link: string;
  status: ProjectStatus;
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    n: "01",
    title: "23D Studio",
    tag: "Design Studio",
    year: "2026",
    stack: ["Next.js", "Tailwind", "Motion"],
    desc: "A visual studio website with immersive home sections, service storytelling and a polished brand-first interface.",
    color: "bg-lime",
    image: "/projects/23d-studio.webp",
    link: "https://www.23dstudio.com/",
    status: "completed",
  },
  {
    n: "02",
    title: "The Collective Co",
    tag: "Hospitality",
    year: "2026",
    stack: ["Next.js", "Responsive UI", "Brand Site"],
    desc: "A refined hospitality website built around atmosphere, clear navigation and a calm booking-ready presentation.",
    color: "bg-ink",
    image: "/projects/the-collective-co.jpg",
    link: "https://thecollectiveco.in/",
    status: "completed",
  },
  {
    n: "03",
    title: "Pure Atelier Design",
    tag: "Interior Design",
    year: "2026",
    stack: ["Vercel", "React", "Tailwind"],
    desc: "An elegant interiors website in progress, focused on premium visual presentation and project discovery.",
    color: "bg-paper border border-ink",
    image: "/projects/pure-atelier-design.png",
    link: "https://pure-atelier-design.vercel.app/",
    status: "in-progress",
  },
  {
    n: "04",
    title: "Altraah Tech",
    tag: "Tech Company",
    year: "2026",
    stack: ["Vercel", "Responsive UI", "SEO"],
    desc: "A technology company website in progress with service sections, trust signals and a direct conversion path.",
    color: "bg-ink",
    image: "/projects/altraah-tech.avif",
    link: "https://altraah-tech.vercel.app/",
    status: "in-progress",
  },
  {
    n: "05",
    title: "E-commerce Template",
    tag: "Storefront",
    year: "2026",
    stack: ["Next.js", "E-commerce", "Template"],
    desc: "A ready-to-customize storefront template with product-led sections and a modern electronics shopping feel.",
    color: "bg-lime",
    image: "/projects/e-commerce-template.png",
    link: "https://e-commerce-nine-roan-85.vercel.app/",
    status: "template",
  },
];

export const approachItems = [
  ["01", "Clean & maintainable code", "Readable, typed, and built to last beyond the launch."],
  ["02", "Fast-loading, responsive design", "Optimised for Core Web Vitals on every device."],
  ["03", "SEO-friendly structure from day one", "Semantic markup, schema, and content that ranks."],
];
