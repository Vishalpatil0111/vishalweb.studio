import { approachItems } from "./home-data";

export function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-ink/60">
          ( About )
        </div>
        <div className="col-span-12 md:col-span-9 space-y-10">
          <p className="font-display text-3xl md:text-5xl font-light leading-[1.15] tracking-tight">
            Hi, I&apos;m <span className="font-black">Vishal Patil</span> - a web developer focused on building{" "}
            <span className="italic">modern, scalable, and performance-driven</span> websites.
            <span className="text-ink/40">
              {" "}
              I specialize in website development and SEO optimization, helping businesses establish a strong online
              presence.
            </span>
          </p>

          <div className="grid grid-cols-12 gap-6 md:gap-10 pt-4 border-t border-ink">
            <div className="col-span-12 md:col-span-5">
              <p className="text-sm leading-relaxed text-ink/70 max-w-md">
                Over the past few years, I&apos;ve worked on multiple projects where I&apos;ve transformed ideas into fully
                functional, user-friendly digital products. I don&apos;t just build websites - I build solutions designed to
                perform.
              </p>
              <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-ink/50">My approach</p>
            </div>

            <ul className="col-span-12 md:col-span-7 divide-y divide-ink/20 border-y border-ink/20">
              {approachItems.map(([n, title, description]) => (
                <li key={n} className="py-5 grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-2 md:col-span-1 text-xs tracking-[0.3em] text-ink/50">{n}</span>
                  <div className="col-span-10 md:col-span-11">
                    <h3 className="font-display text-xl md:text-2xl font-black tracking-tight">{title}</h3>
                    <p className="text-sm text-ink/60 mt-1">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
