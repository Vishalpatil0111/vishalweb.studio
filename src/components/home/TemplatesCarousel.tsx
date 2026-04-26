"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { projects, type Project } from "@/data/projects";

type TemplatesCarouselProps = {
  onSelectProject: (project: Project) => void;
};

export function TemplatesCarousel({ onSelectProject }: TemplatesCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
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
          A growing library of production-ready templates. Click any card to see the case study.
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
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            data-card
            type="button"
            onClick={() => onSelectProject(project)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group text-left shrink-0 snap-start w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw]"
          >
            <div className="hover-lift">
              <div className={`relative aspect-[4/3] ${project.color} mb-4 overflow-hidden border border-ink`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`font-display text-[8rem] font-black tracking-tighter ${
                      project.color === "bg-ink" ? "text-paper" : "text-ink/10"
                    }`}
                  >
                    {project.id}
                  </span>
                </div>
                <div className="absolute top-4 right-4 inline-flex items-center gap-2 bg-paper text-ink px-3 py-2 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                  View case <ArrowUpRight size={12} />
                </div>
              </div>
              <div className="flex items-baseline justify-between border-b border-ink pb-3">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight">{project.title}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] mt-1 text-ink/60">{project.category}</p>
                </div>
                <span className="text-xs tabular-nums">{project.year}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
