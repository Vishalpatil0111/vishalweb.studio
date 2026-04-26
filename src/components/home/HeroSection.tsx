"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen px-6 md:px-10 pt-32 pb-10 flex flex-col justify-between">
      <div className="grid grid-cols-12 gap-4 text-[10px] uppercase tracking-[0.25em] text-ink/60">
        <div className="col-span-6 md:col-span-3">
          <div className="mb-1">[ Index 001 ]</div>
          <div>Web Developer - 2y</div>
        </div>
        <div className="col-span-6 md:col-span-3 md:col-start-10 md:text-right">
          <div className="mb-1">India - Remote</div>
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
          Fast,
          <br />
          <span className="italic font-light">SEO-ready</span>
          <span className="text-lime">,</span>
          <br />
          <span className="text-stroke">built to grow.</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-12 gap-4 items-end">
        <div className="col-span-12 md:col-span-4">
          <p className="text-sm leading-relaxed max-w-xs">
            I build fast, SEO-optimized websites that help businesses grow online - from idea to launch,
            designed to attract users, rank better, and convert visitors into customers.
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
          <a href="#contact" className="inline-flex items-center gap-2 group text-xs uppercase tracking-[0.2em]">
            <span className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-lime group-hover:text-ink transition-colors">
              <ArrowUpRight size={16} />
            </span>
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
