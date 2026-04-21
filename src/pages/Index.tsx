import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  { id: "01", title: "Lunar Commerce", category: "Brand × Web", year: "2025", color: "bg-lime" },
  { id: "02", title: "Atlas Studio", category: "Identity System", year: "2024", color: "bg-ink" },
  { id: "03", title: "Noir & Co.", category: "E-commerce", year: "2024", color: "bg-paper border border-ink" },
  { id: "04", title: "Field Notes", category: "Editorial / UX", year: "2023", color: "bg-ink" },
];

const services = [
  { n: "01", t: "Brand Identity", d: "Logos, systems, voice — built to last a decade, not a quarter." },
  { n: "02", t: "Web Design", d: "Editorial, performant, conversion-tuned. No templates, ever." },
  { n: "03", t: "Art Direction", d: "Campaigns, photography direction, motion. The whole gesture." },
  { n: "04", t: "Consulting", d: "Strategy sessions for founders who'd rather get it right once." },
];

const Index = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }) + " GMT"
      );
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="grain min-h-screen bg-paper text-ink overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between mix-blend-difference text-paper">
        <a href="#" className="font-display text-2xl font-black tracking-tighter">
          M.Vale<span className="text-lime">.</span>
        </a>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em]">
          <a href="#work" className="hover:text-lime transition-colors">Work</a>
          <a href="#services" className="hover:text-lime transition-colors">Services</a>
          <a href="#about" className="hover:text-lime transition-colors">About</a>
          <a href="#contact" className="hover:text-lime transition-colors">Contact</a>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] hidden sm:block">{time}</div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen px-6 md:px-10 pt-32 pb-10 flex flex-col justify-between">
        {/* Top meta row */}
        <div className="grid grid-cols-12 gap-4 text-[10px] uppercase tracking-[0.25em] text-ink/60">
          <div className="col-span-6 md:col-span-3">
            <div className="mb-1">[ Index 001 ]</div>
            <div>Independent Designer</div>
          </div>
          <div className="col-span-6 md:col-span-3 md:col-start-10 md:text-right">
            <div className="mb-1">Lisbon → Anywhere</div>
            <div className="flex md:justify-end items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              Booking Q3 / 2025
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black leading-[0.85] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 13vw, 13rem)" }}
          >
            Designing
            <br />
            <span className="italic font-light">quietly</span>
            <span className="text-lime">,</span>
            <br />
            <span className="text-stroke">building loud.</span>
          </motion.h1>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 md:col-span-4">
            <p className="text-sm leading-relaxed max-w-xs">
              Freelance designer & art director crafting identities and digital
              products for founders who refuse to look like everyone else.
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
              <span className="px-8">Brand Systems</span>
              <Sparkles className="text-lime" size={48} />
              <span className="px-8 italic font-light">Web Design</span>
              <span className="text-lime px-8">✦</span>
              <span className="px-8">Art Direction</span>
              <Sparkles className="text-lime" size={48} />
              <span className="px-8 italic font-light">Type</span>
              <span className="text-lime px-8">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-ink/60">
            ( Selected Work — 2023 / 2025 )
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl font-black tracking-tighter leading-none">
            A small catalogue of <span className="italic font-light">obsessions.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group col-span-12 ${
                i % 3 === 0 ? "md:col-span-7" : i % 3 === 1 ? "md:col-span-5" : "md:col-span-6"
              }`}
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
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-paper text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} />
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
            </motion.a>
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
            Four lanes. <span className="italic font-light text-lime">No detours.</span>
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
            <div className="mt-8 space-y-2">
              <div>— 8 years independent</div>
              <div>— 60+ shipped projects</div>
              <div>— ADC, Awwwards SOTD</div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="font-display text-3xl md:text-5xl font-light leading-[1.15] tracking-tight">
              I'm <span className="font-black">Mara Vale</span>, a designer who treats
              every brief like a manuscript: <span className="italic">read carefully,
              edit ruthlessly,</span> then set it in type that breathes.
              <span className="text-ink/40"> I work with a tight roster of clients
              each year — by choice, not shortage.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-ink text-paper px-6 md:px-10 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="ticker font-display font-black text-paper/5 whitespace-nowrap" style={{ fontSize: "clamp(8rem, 25vw, 28rem)" }}>
            let's make · let's make ·
          </div>
        </div>

        <div className="relative grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-paper/60">
            ( Contact — 04 )
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12">
              Have something <br />
              <span className="italic font-light">worth</span> making?
            </h2>

            <a
              href="mailto:hello@maravale.studio"
              className="inline-block group"
            >
              <div className="font-display text-3xl md:text-5xl font-black border-b-2 border-paper group-hover:text-lime group-hover:border-lime transition-colors pb-2">
                hello@maravale.studio →
              </div>
            </a>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs uppercase tracking-[0.2em]">
              <div>
                <div className="text-paper/50 mb-2">Instagram</div>
                <a href="#" className="hover:text-lime">@mara.vale</a>
              </div>
              <div>
                <div className="text-paper/50 mb-2">Are.na</div>
                <a href="#" className="hover:text-lime">/mara-vale</a>
              </div>
              <div>
                <div className="text-paper/50 mb-2">LinkedIn</div>
                <a href="#" className="hover:text-lime">/in/maravale</a>
              </div>
              <div>
                <div className="text-paper/50 mb-2">Read</div>
                <a href="#" className="hover:text-lime">CV / PDF</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-paper/20 bg-ink text-paper px-6 md:px-10 py-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-[10px] uppercase tracking-[0.25em]">
        <div>© 2025 Mara Vale — Independent Studio</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          Currently in Lisbon · {time}
        </div>
        <div>Built by hand, not by template.</div>
      </footer>
    </div>
  );
};

export default Index;
