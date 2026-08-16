import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/site-data";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Weddings", href: "#weddings" },
  { label: "Corporate", href: "#corporate" },
  { label: "Services", href: "#capabilities" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid ? "bg-obsidian/92 backdrop-blur-[2px] border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10">
          <a href="#top" className="display text-[0.95rem] tracking-[0.16em] md:text-base">
            Awesome<span className="text-primary">·</span>Event
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="label link-underline hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#enquiry"
              className="hidden rounded-none border border-primary bg-primary px-5 py-2.5 font-display text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary sm:inline-block"
            >
              Plan an Event
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-border lg:hidden"
            >
              <span className="block h-px w-4 bg-foreground" />
              <span className="block h-px w-4 bg-foreground" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-obsidian">
          <div className="flex h-16 items-center justify-between px-5">
            <span className="display text-[0.95rem] tracking-[0.16em]">Awesome·Event</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center border border-border text-xl"
            >
              ×
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-2 px-5">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display border-b border-border py-4 text-[13vw] leading-none"
              >
                <span className="mr-3 align-super font-sans text-[0.6rem] tracking-[0.2em] text-primary">
                  0{i + 1}
                </span>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="px-5 pb-10">
            <a href={CONTACT.tel} className="label block py-3 text-foreground">
              {CONTACT.phoneDisplay}
            </a>
            <a
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="block bg-primary py-4 text-center font-display text-xs uppercase tracking-[0.2em] text-primary-foreground"
            >
              Plan an Event
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-obsidian/95 backdrop-blur-[2px] sm:hidden">
      <a
        href={CONTACT.tel}
        className="py-4 text-center font-display text-[0.7rem] uppercase tracking-[0.2em]"
      >
        Call
      </a>
      <a
        href="#enquiry"
        className="bg-primary py-4 text-center font-display text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground"
      >
        Plan an Event
      </a>
    </div>
  );
}
