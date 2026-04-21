import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const budgets = ["< 5k", "5–15k", "15–40k", "40k+"];
const services = ["Brand", "Web", "Art Direction", "Other"];

const ContactForm = () => {
  const [budget, setBudget] = useState(budgets[1]);
  const [service, setService] = useState(services[0]);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in name, email and a short message.");
      return;
    }

    setSubmitting(true);
    // Open a prefilled email — no backend required
    const subject = `New project — ${service} (${budget}) · from ${name}`;
    const body = `Hi Mara,\n\n${message}\n\n— ${name}\nBudget: ${budget}\nScope: ${service}\nReply to: ${email}`;
    window.location.href =
      `mailto:hello@maravale.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      toast.success("Email draft opened. Talk soon.");
      form.reset();
      setSubmitting(false);
    }, 400);
  };

  const fieldBase =
    "w-full bg-transparent border-0 border-b border-paper/30 py-3 text-paper placeholder:text-paper/40 focus:outline-none focus:border-lime transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.3em] text-paper/50">( 01 ) Name</span>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            autoComplete="name"
            className={fieldBase}
          />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.3em] text-paper/50">( 02 ) Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@studio.com"
            autoComplete="email"
            className={fieldBase}
          />
        </label>
      </div>

      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-paper/50 mb-3">( 03 ) Scope</div>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setService(s)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${
                service === s
                  ? "bg-lime text-ink border-lime"
                  : "border-paper/30 text-paper hover:border-paper"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-paper/50 mb-3">( 04 ) Budget · USD</div>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              type="button"
              key={b}
              onClick={() => setBudget(b)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${
                budget === b
                  ? "bg-lime text-ink border-lime"
                  : "border-paper/30 text-paper hover:border-paper"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.3em] text-paper/50">( 05 ) Tell me about it</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="A sentence or three about the project, timeline, links…"
          className={`${fieldBase} resize-none`}
        />
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-paper/40">
          Replies within 48h · Lisbon hours
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center gap-3 bg-paper text-ink pl-5 pr-2 py-2.5 hover:bg-lime transition-colors disabled:opacity-60"
        >
          <span className="font-display text-lg md:text-xl font-black tracking-tight">
            {submitting ? "Sending…" : "Send enquiry"}
          </span>
          <span className="w-9 h-9 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-paper group-hover:text-ink transition-colors">
            <ArrowUpRight size={14} />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
