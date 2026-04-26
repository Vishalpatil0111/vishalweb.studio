"use client";

import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { MarqueeSection } from "./MarqueeSection";
import { ServicesSection } from "./ServicesSection";
import { ShowcaseProjects } from "./ShowcaseProjects";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { useClock } from "./useClock";

export function HomePage() {
  const time = useClock();

  return (
    <div className="grain min-h-screen bg-paper text-ink overflow-x-hidden">
      <SiteNav time={time} />
      <HeroSection />
      <MarqueeSection />
      <ShowcaseProjects />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter time={time} />
    </div>
  );
}
