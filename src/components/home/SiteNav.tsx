type SiteNavProps = {
  time: string;
};

export function SiteNav({ time }: SiteNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between mix-blend-difference text-paper">
      <a href="#" className="font-display text-2xl font-black tracking-tighter">
        V.Patil<span className="text-lime">.</span>
      </a>
      <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em]">
        <a href="#projects" className="hover:text-lime transition-colors">Projects</a>
        <a href="#services" className="hover:text-lime transition-colors">Services</a>
        <a href="#about" className="hover:text-lime transition-colors">About</a>
        <a href="#contact" className="hover:text-lime transition-colors">Contact</a>
      </div>
      <div className="text-xs uppercase tracking-[0.2em] hidden sm:block">{time}</div>
    </nav>
  );
}
