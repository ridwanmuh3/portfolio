const navigation = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header
      className="fixed top-0 z-20 border-b border-white/10 w-full bg-primary/75 backdrop-blur-[18px]"
      data-header
    >
      <nav
        className="mx-auto flex min-h-18 w-[min(100%-48px,1120px)] items-center justify-between gap-6 max-md:w-[min(100%-32px,1120px)] max-md:py-3.5 max-sm:w-[min(100%-24px,1120px)] max-sm:gap-3"
        aria-label="Main navigation"
      >
        <a
          className="inline-flex size-11 flex-none items-center justify-center rounded-lg border border-white/15 bg-accent-lime font-extrabold text-primary no-underline hover:text-primary max-md:size-10"
          href="#main-content"
          aria-label="Ridwan Muhammad Raihan home"
        >
          RM
        </a>
        <div className="flex min-w-0 flex-nowrap justify-end gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-md:justify-start max-md:gap-1">
          {navigation.map((item) => (
            <a
              className="flex-none rounded px-2.5 py-2 text-sm font-bold text-muted no-underline hover:bg-accent-lime/10 hover:text-surface max-md:px-1 max-md:py-1.5 max-md:text-xs"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
