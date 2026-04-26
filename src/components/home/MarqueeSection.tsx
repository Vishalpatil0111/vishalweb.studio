const marqueeItems = ["Websites", "SEO", "Web Apps"];

export function MarqueeSection() {
  return (
    <section className="border-y border-ink py-6 overflow-hidden bg-ink text-paper">
      <div className="flex marquee whitespace-nowrap font-display text-6xl md:text-8xl font-black tracking-tighter">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {marqueeItems.map((item) => (
              <div key={`${i}-${item}`} className="flex items-center">
                <span className="text-lime px-8">✦</span>
                <span className={`px-8 ${item === "SEO" ? "italic font-light" : ""}`}>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
