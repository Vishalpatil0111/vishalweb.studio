import { ArrowUpRight } from "lucide-react";
import { services } from "./home-data";

export function ServicesSection() {
  return (
    <section id="services" className="bg-ink text-paper px-6 md:px-10 py-24 md:py-32">
      <div className="grid grid-cols-12 gap-4 mb-16">
        <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-paper/60">
          ( What I Do )
        </div>
        <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl font-black tracking-tighter leading-none">
          Two lanes. <span className="italic font-light text-lime">Done right.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/20 border border-paper/20">
        {services.map((service) => (
          <div
            key={service.n}
            className="group bg-ink p-8 md:p-12 hover:bg-lime hover:text-ink transition-colors duration-500 cursor-default"
          >
            <div className="flex items-start justify-between mb-8">
              <span className="text-xs tracking-[0.3em]">{service.n}</span>
              <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-black tracking-tighter mb-4">{service.t}</h3>
            <p className="text-sm leading-relaxed opacity-70 max-w-sm">{service.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
