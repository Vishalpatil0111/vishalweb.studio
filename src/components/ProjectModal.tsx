import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  // Lock body scroll & ESC to close
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] bg-ink/60 backdrop-blur-sm flex items-stretch md:items-center justify-center md:p-6"
          onClick={onClose}
        >
          <motion.article
            key="panel"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-paper text-ink w-full md:max-w-5xl max-h-screen md:max-h-[90vh] overflow-y-auto border border-ink shadow-[12px_12px_0_0_hsl(var(--ink))]"
          >
            {/* Sticky header */}
            <header className="sticky top-0 z-10 bg-paper border-b border-ink px-6 md:px-10 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4 min-w-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60 shrink-0">
                  Case · {project.id}
                </span>
                <span className="hidden sm:inline truncate font-display text-base font-black tracking-tight">
                  {project.title}
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-10 h-10 flex items-center justify-center border border-ink hover:bg-ink hover:text-paper transition-colors"
              >
                <X size={16} />
              </button>
            </header>

            {/* Hero */}
            <div className={`relative ${project.color} border-b border-ink aspect-[16/8] flex items-end overflow-hidden`}>
              <span
                className={`absolute -bottom-8 -right-4 font-display font-black tracking-tighter leading-none ${
                  project.color === "bg-ink" ? "text-paper/15" : "text-ink/10"
                }`}
                style={{ fontSize: "clamp(10rem, 28vw, 22rem)" }}
              >
                {project.id}
              </span>
              <div className={`relative p-6 md:p-10 ${project.color === "bg-ink" ? "text-paper" : "text-ink"}`}>
                <p className="text-[10px] uppercase tracking-[0.3em] mb-3 opacity-70">
                  {project.category} · {project.year}
                </p>
                <h2 className="font-display font-black tracking-tighter leading-[0.9]" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Body grid */}
            <div className="px-6 md:px-10 py-10 md:py-14 grid grid-cols-12 gap-6 md:gap-10">
              {/* Left: meta */}
              <aside className="col-span-12 md:col-span-4 space-y-8 text-xs">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-2">( Client )</div>
                  <div className="font-display text-xl font-black">{project.client}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-2">( Year )</div>
                  <div className="font-display text-xl font-black">{project.year}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-2">( Roles )</div>
                  <ul className="space-y-1">
                    {project.roles.map((r) => (
                      <li key={r} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-lime inline-block" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-2">( Deliverables )</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.deliverables.map((d) => (
                      <span key={d} className="border border-ink px-2 py-1 text-[10px] uppercase tracking-wider">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b border-ink pb-1 hover:text-lime hover:border-lime transition-colors"
                  >
                    <span className="font-display text-base font-black">Visit live site</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </aside>

              {/* Right: narrative */}
              <div className="col-span-12 md:col-span-8 space-y-6">
                <p className="font-display text-2xl md:text-3xl font-light leading-[1.2] tracking-tight">
                  {project.summary}
                </p>
                <p className="text-sm leading-relaxed text-ink/80">{project.body}</p>
              </div>
            </div>

            {/* Gallery */}
            <div className="border-t border-ink px-6 md:px-10 py-10">
              <div className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-6">
                ( Gallery — {project.gallery.length} frames )
              </div>
              <div className="grid grid-cols-12 gap-4 md:gap-6">
                {project.gallery.map((g, i) => {
                  // Asymmetric layout
                  const span =
                    i % 5 === 0 ? "md:col-span-12" :
                    i % 5 === 1 || i % 5 === 2 ? "md:col-span-6" :
                    "md:col-span-4";
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                      className={`relative col-span-12 ${span} aspect-[4/3] ${g.bg} border border-ink overflow-hidden flex items-end p-4 md:p-6`}
                    >
                      <div className={`relative z-10 ${g.dark ? "text-paper" : "text-ink"}`}>
                        <div className="text-[9px] uppercase tracking-[0.3em] opacity-70">Frame {String(i + 1).padStart(2, "0")}</div>
                        <div className="font-display text-lg md:text-xl font-black tracking-tight mt-1">{g.label}</div>
                      </div>
                      {g.bigText && (
                        <span
                          className={`absolute font-display font-black tracking-tighter leading-none pointer-events-none ${
                            g.dark ? "text-paper/15" : "text-ink/10"
                          } ${g.position ?? "top-2 right-3"}`}
                          style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
                        >
                          {g.bigText}
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-ink px-6 md:px-10 py-10 md:py-14 bg-paper">
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-12 md:col-span-7">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-3">
                    ( Like what you see? )
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl font-black tracking-tighter leading-[0.95]">
                    Let's build the <span className="italic font-light">next</span> one
                    <span className="text-lime">.</span>
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5 md:text-right">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      // wait for modal exit + scroll lock release
                      setTimeout(() => {
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 320);
                    }}
                    className="group inline-flex items-center gap-4 bg-ink text-paper pl-6 pr-3 py-3 hover:bg-lime hover:text-ink transition-colors"
                  >
                    <span className="font-display text-xl md:text-2xl font-black tracking-tight">
                      Discuss a project
                    </span>
                    <span className="w-10 h-10 rounded-full bg-paper text-ink flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-colors">
                      <ArrowUpRight size={16} />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-ink bg-ink text-paper px-6 md:px-10 py-6 flex flex-col sm:flex-row justify-between gap-3 text-[10px] uppercase tracking-[0.25em]">
              <span>Case {project.id} — {project.title}</span>
              <button onClick={onClose} className="hover:text-lime text-left sm:text-right">
                Close case ✕
              </button>
            </footer>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
