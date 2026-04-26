import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ProjectModal from "@/components/ProjectModal";
import ContactForm from "@/components/ContactForm";
import { projects, type Project } from "@/data/projects";

const services = [
  { n: "01", t: "Websites", d: "Fast, responsive marketing sites and web apps — clean code, polished UI, shipped on time." },
  { n: "02", t: "SEO", d: "Technical SEO, on-page structure and Core Web Vitals tuning so your site is found, not just built." },
];

const Index = () => {
  const [time, setTime] = useState("");
  const [active, setActive] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }) + " IST"
      );
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  const scrollCarousel = (dir: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <div className="grain min-h-screen bg-paper text-ink overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between mix-blend-difference text-paper">
        <a href="#" className="font-display text-2xl font-black tracking-tighter">
          V.Patil<span className="text-lime">.</span>
        </a>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em]">
          <a href="#work" className="hover:text-lime transition-colors">Templates</a>
          <a href="#services" className="hover:text-lime transition-colors">Services</a>
          <a href="#about" className="hover:text-lime transition-colors">About</a>
          <a href="#contact" className="hover:text-lime transition-colors">Contact</a>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] hidden sm:block">{time}</div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen px-6 md:px-10 pt-32 pb-10 flex flex-col justify-between">
        <div className="grid grid-cols-12 gap-4 text-[10px] uppercase tracking-[0.25em] text-ink/60">
          <div className="col-span-6 md:col-span-3">
            <div className="mb-1">[ Index 001 ]</div>
            <div>Web Developer · 2y</div>
          </div>
          <div className="col-span-6 md:col-span-3 md:col-start-10 md:text-right">
            <div className="mb-1">India → Remote</div>
            <div className="flex md:justify-end items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              Open for work
            </div>
          </div>
        </div>

        <div className="py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black leading-[0.85] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 13vw, 13rem)" }}
          >
            Building
            <br />
            <span className="italic font-light">sleek</span>
            <span className="text-lime">,</span>
            <br />
            <span className="text-stroke">shipping fast.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 md:col-span-4">
            <p className="text-sm leading-relaxed max-w-xs">
              Web developer crafting high-performance websites and applications —
              clean code, intuitive design, real digital products that work.
            </p>
          </div>
          <div className="hidden md:block md:col-span-4 md:col-start-6 text-center">
            <div className="text-[10px] uppercase tracking-[0.3em] text-ink/50">Scroll</div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="font-display text-3xl"
            >
              ↓
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10 md:text-right">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 group text-xs uppercase tracking-[0.2em]"
            >
              <span className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-lime group-hover:text-ink transition-colors">
                <ArrowUpRight size={16} />
              </span>
              Start a project
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-ink py-6 overflow-hidden bg-ink text-paper">
        <div className="flex marquee whitespace-nowrap font-display text-6xl md:text-8xl font-black tracking-tighter">
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="px-8">Websites</span>
              <Sparkles className="text-lime" size={48} />
              <span className="px-8 italic font-light">SEO</span>
              <span className="text-lime px-8">✦</span>
              <span className="px-8">Web Apps</span>
              <Sparkles className="text-lime" size={48} />
              <span className="px-8 italic font-light">React</span>
              <span className="text-lime px-8">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* TEMPLATES — CAROUSEL */}
      <section id="work" className="px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-ink/60">
            ( Templates Showcase )
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl font-black tracking-tighter leading-none">
            Templates, <span className="italic font-light">ready to ship.</span>
          </h2>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-ink/60 max-w-md">
            A growing library of production-ready templates. Click any card to
            see the case study.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous template"
              onClick={() => scrollCarousel(-1)}
              className="w-12 h-12 border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next template"
              onClick={() => scrollCarousel(1)}
              className="w-12 h-12 border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 md:-mx-10 px-6 md:px-10 scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              data-card
              type="button"
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group text-left shrink-0 snap-start w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw]"
            >
              <div className="hover-lift">
                <div className={`relative aspect-[4/3] ${p.color} mb-4 overflow-hidden border border-ink`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`font-display text-[8rem] font-black tracking-tighter ${
                        p.color === "bg-ink" ? "text-paper" : "text-ink/10"
                      }`}
                    >
                      {p.id}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 inline-flex items-center gap-2 bg-paper text-ink px-3 py-2 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                    View case <ArrowUpRight size={12} />
                  </div>
                </div>
                <div className="flex items-baseline justify-between border-b border-ink pb-3">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] mt-1 text-ink/60">
                      {p.category}
                    </p>
                  </div>
                  <span className="text-xs tabular-nums">{p.year}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-ink text-paper px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-paper/60">
            ( What I Do )
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl font-black tracking-tighter leading-none">
            Two lanes. <span className="italic font-light text-lime">Done right.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/20 border border-paper/20">
          {services.map((s) => (
            <div
              key={s.n}
              className="group bg-ink p-8 md:p-12 hover:bg-lime hover:text-ink transition-colors duration-500 cursor-default"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs tracking-[0.3em]">{s.n}</span>
                <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-black tracking-tighter mb-4">
                {s.t}
              </h3>
              <p className="text-sm leading-relaxed opacity-70 max-w-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-ink/60">
            ( About )
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="font-display text-3xl md:text-5xl font-light leading-[1.15] tracking-tight">
              Hello, my name is <span className="font-black">Vishal Patil</span>.
              I'm a web developer with <span className="font-black">2 years</span> of
              experience, dedicated to creating <span className="italic">sleek,
              high-performance websites and applications.</span>
              <span className="text-ink/40"> I combine clean code with intuitive
              design to deliver seamless user experiences — transforming concepts
              into real, polished digital products that truly work.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-ink text-paper px-6 md:px-10 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="ticker font-display font-black text-paper/5 whitespace-nowrap" style={{ fontSize: "clamp(8rem, 25vw, 28rem)" }}>
            let's build · let's build ·
          </div>
        </div>

        <div className="relative grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-paper/60">
            ( Contact — 04 )
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12">
              Have something <br />
              <span className="italic font-light">worth</span> building?
            </h2>

            <div className="mb-16 border-t border-b border-paper/20 py-10">
              <ContactForm />
            </div>

            <div className="text-[10px] uppercase tracking-[0.3em] text-paper/50 mb-3">
              ( Or, the old-fashioned way )
            </div>
            <a
              href="mailto:hello@vishalpatil.dev"
              className="inline-block group"
            >
              <div className="font-display text-3xl md:text-5xl font-black border-b-2 border-paper group-hover:text-lime group-hover:border-lime transition-colors pb-2">
                hello@vishalpatil.dev →
              </div>
            </a>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 text-xs uppercase tracking-[0.2em]">
              <div>
                <div className="text-paper/50 mb-2">GitHub</div>
                <a href="#" className="hover:text-lime">@vishalpatil</a>
              </div>
              <div>
                <div className="text-paper/50 mb-2">LinkedIn</div>
                <a href="#" className="hover:text-lime">/in/vishalpatil</a>
              </div>
              <div>
                <div className="text-paper/50 mb-2">Twitter</div>
                <a href="#" className="hover:text-lime">@vishalpatil</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-paper/20 bg-ink text-paper px-6 md:px-10 py-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-[10px] uppercase tracking-[0.25em]">
        <div>© 2025 Vishal Patil — Web Developer</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          {time}
        </div>
        <div>Built by hand, not by template.</div>
      </footer>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
};

export default Index;
