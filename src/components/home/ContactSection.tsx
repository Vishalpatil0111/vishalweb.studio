import ContactForm from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-ink text-paper px-6 md:px-10 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div
          className="ticker font-display font-black text-paper/5 whitespace-nowrap"
          style={{ fontSize: "clamp(8rem, 25vw, 28rem)" }}
        >
          let's build - let's build -
        </div>
      </div>

      <div className="relative grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-paper/60">
          ( Contact - 04 )
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12">
            Have something <br />
            <span className="italic font-light">worth</span> building?
          </h2>

          <div className="mb-16 border-t border-b border-paper/20 py-10">
            <ContactForm />
          </div>

          <div className="text-[10px] uppercase tracking-[0.3em] text-paper/50 mb-3">
            ( Or, the old-fashioned way )
          </div>
          <a href="mailto:hello@vishalpatil.dev" className="inline-block group">
            <div className="font-display text-3xl md:text-5xl font-black border-b-2 border-paper group-hover:text-lime group-hover:border-lime transition-colors pb-2">
              hello@vishalpatil.dev →
            </div>
          </a>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 text-xs uppercase tracking-[0.2em]">
            <div>
              <div className="text-paper/50 mb-2">GitHub</div>
              <a href="#" className="hover:text-lime">@vishalpatil</a>
            </div>
            <div>
              <div className="text-paper/50 mb-2">LinkedIn</div>
              <a href="#" className="hover:text-lime">/in/vishalpatil</a>
            </div>
            <div>
              <div className="text-paper/50 mb-2">Twitter</div>
              <a href="#" className="hover:text-lime">@vishalpatil</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
