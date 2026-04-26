"use client";

import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";
import { type Project } from "@/data/projects";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { MarqueeSection } from "./MarqueeSection";
import { ServicesSection } from "./ServicesSection";
import { ShowcaseProjects } from "./ShowcaseProjects";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { TemplatesCarousel } from "./TemplatesCarousel";
import { useClock } from "./useClock";

export function HomePage() {
  const time = useClock();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="grain min-h-screen bg-paper text-ink overflow-x-hidden">
      <SiteNav time={time} />
      <HeroSection />
      <MarqueeSection />
      <ShowcaseProjects />
      <TemplatesCarousel onSelectProject={setActiveProject} />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter time={time} />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
