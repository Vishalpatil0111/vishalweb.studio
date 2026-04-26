type SiteFooterProps = {
  time: string;
};

export function SiteFooter({ time }: SiteFooterProps) {
  return (
    <footer className="border-t border-paper/20 bg-ink text-paper px-6 md:px-10 py-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-[10px] uppercase tracking-[0.25em]">
      <div>© 2025 Vishal Patil - Web Developer</div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
        {time}
      </div>
      <div>Built by hand, not by template.</div>
    </footer>
  );
}
