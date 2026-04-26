"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { showcaseProjects } from "./home-data";

export function ShowcaseProjects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollPrev(scrollLeft > 4);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 4);

    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : clientWidth;
    setActiveIndex(Math.round(scrollLeft / step));
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section id="projects" className="px-6 md:px-10 py-24 md:py-32 border-b border-ink overflow-hidden">
      <div className="grid grid-cols-12 gap-4 mb-12">
        <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-ink/60">
          ( Showcase Projects )
        </div>
        <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl font-black tracking-tighter leading-none">
          Things I&apos;ve <span className="italic font-light">shipped.</span>
        </h2>
      </div>

      <div className="flex items-center justify-between mb-6 gap-6">
        <p className="text-sm text-ink/60 max-w-md">
          A mix of live builds, in-progress work and ready-to-ship templates. Drag, scroll or use the arrows.
        </p>
        <div className="flex items-center gap-3">
          <span className="text-xs tabular-nums text-ink/60 hidden sm:inline">
            {String(activeIndex + 1).padStart(2, "0")}
            <span className="text-ink/30"> / {String(showcaseProjects.length).padStart(2, "0")}</span>
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollPrev}
              className="w-12 h-12 border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => scrollByCard(1)}
              disabled={!canScrollNext}
              className="w-12 h-12 border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 md:-mx-10 px-6 md:px-10 scrollbar-none cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none" }}
      >
        {showcaseProjects.map((project, i) => (
          <motion.a
            key={project.n}
            data-card
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="group text-left shrink-0 snap-start w-[85vw] sm:w-[60vw] md:w-[48vw] lg:w-[36vw]"
          >
            <motion.div
              className={`relative aspect-[4/3] ${project.color} mb-4 overflow-hidden border border-ink`}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} homepage preview`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/5 to-ink/55" />

              <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
                <span
                  className="bg-paper/90 px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-ink"
                >
                  {project.tag}
                </span>
                <span
                  className={`inline-flex items-center gap-2 px-3 py-2 text-[10px] uppercase tracking-[0.2em] border ${
                    project.status === "completed"
                      ? "bg-lime text-ink border-lime"
                      : project.status === "template"
                      ? "bg-ink text-paper border-ink"
                      : "bg-paper text-ink border-ink"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      project.status === "completed"
                        ? "bg-ink"
                        : project.status === "template"
                        ? "bg-lime"
                        : "bg-ink animate-pulse"
                    }`}
                  />
                  {project.status === "completed"
                    ? "Completed"
                    : project.status === "template"
                    ? "Template"
                    : "In progress"}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="bg-paper/90 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <AnimatePresence>
                {project.status === "completed" && (
                  <motion.span
                    key="visit-completed"
                    initial={{ opacity: 0, y: 8 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0, y: 8 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-end justify-end p-4 pointer-events-none"
                  >
                    <span className="inline-flex items-center gap-2 bg-paper text-ink px-3 py-2 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit live <ArrowUpRight size={12} />
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            <div className="flex items-baseline justify-between border-b border-ink pb-3 mb-3">
              <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight">{project.title}</h3>
              <span className="text-xs tabular-nums">{project.year}</span>
            </div>
            <p className="text-sm leading-relaxed text-ink/70 max-w-md">{project.desc}</p>
          </motion.a>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2">
        {showcaseProjects.map((p, i) => (
          <span
            key={p.n}
            className="relative h-px flex-1 bg-ink/15 overflow-hidden"
            aria-hidden
          >
            <motion.span
              className="absolute inset-y-0 left-0 bg-ink"
              initial={false}
              animate={{ width: i === activeIndex ? "100%" : "0%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
