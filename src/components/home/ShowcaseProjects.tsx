"use client";

import { motion } from "framer-motion";
import { showcaseProjects } from "./home-data";

export function ShowcaseProjects() {
  return (
    <section id="projects" className="px-6 md:px-10 py-24 md:py-32 border-b border-ink">
      <div className="grid grid-cols-12 gap-4 mb-16">
        <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-ink/60">
          ( Showcase Projects - Live )
        </div>
        <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl font-black tracking-tighter leading-none">
          Things I&apos;ve <span className="italic font-light">shipped.</span>
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-8">
        {showcaseProjects.map((project, i) => (
          <motion.a
            key={project.n}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={`group col-span-12 ${i % 2 === 0 ? "md:col-span-7" : "md:col-span-5"}`}
          >
            <div className="hover-lift">
              <div className={`relative aspect-[4/3] ${project.color} mb-4 overflow-hidden border border-ink`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`font-display text-[8rem] font-black tracking-tighter ${
                      project.color === "bg-ink" ? "text-paper/10" : "text-ink/10"
                    }`}
                  >
                    {project.n}
                  </span>
                </div>
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
                  <span
                    className={`text-[10px] uppercase tracking-[0.25em] ${
                      project.color === "bg-ink" ? "text-paper/70" : "text-ink/70"
                    }`}
                  >
                    {project.tag}
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-2 text-[10px] uppercase tracking-[0.2em] border ${
                      project.status === "live"
                        ? "bg-lime text-ink border-lime"
                        : "bg-paper text-ink border-ink"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.status === "live" ? "bg-ink" : "bg-ink animate-pulse"
                      }`}
                    />
                    {project.status === "live" ? "Live" : "In progress"}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className={`text-[10px] uppercase tracking-[0.2em] px-2 py-1 ${
                        project.color === "bg-ink" ? "bg-paper/10 text-paper" : "bg-ink/10 text-ink"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-baseline justify-between border-b border-ink pb-3 mb-3">
                <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight">{project.title}</h3>
                <span className="text-xs tabular-nums">{project.year}</span>
              </div>
              <p className="text-sm leading-relaxed text-ink/70 max-w-md">{project.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
