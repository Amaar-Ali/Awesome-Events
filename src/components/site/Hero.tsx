import { useEffect, useState } from "react";
import { media } from "@/lib/site-data";

export function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const p = Math.min(y / 700, 1);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={media.heroVenue.src}
        alt={media.heroVenue.alt}
        width={media.heroVenue.w}
        height={media.heroVenue.h}
        fetchPriority="high"
        className="enter-unmask absolute inset-0 h-full w-full object-cover opacity-45"
        style={{ transform: `scale(${1 + p * 0.08})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/85 via-obsidian/55 to-obsidian" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-5 pt-24 md:px-10 md:pt-28">
        <div className="enter-rise flex items-center gap-4" style={{ animationDelay: "1.1s" }}>
          <span className="h-px w-10 bg-primary" />
          <p className="label">Events · Weddings · Corporate</p>
        </div>

        {/* Composition */}
        <div className="relative mt-6 flex-1 md:mt-10">
          <h1
            className="display relative z-20 text-[19vw] leading-[0.82] md:text-[13.5vw]"
            style={{ transform: `translateY(${-p * 70}px)` }}
          >
            <span
              className="enter-rise block"
              style={{ animationDelay: "0.9s" }}
            >
              We Build
            </span>
            <span
              className="enter-rise block md:pl-[26vw]"
              style={{ animationDelay: "1.05s" }}
            >
              The Moment<span className="text-primary">.</span>
            </span>
          </h1>

          {/* Central image panel */}
          <figure
            className="enter-unmask absolute left-1/2 top-[6%] z-10 hidden w-[27vw] max-w-[380px] -translate-x-1/2 md:block"
            style={{ animationDelay: "0.35s", transform: `translate(-50%, ${-p * 40}px) scale(${1 + p * 0.1})` }}
          >
            <img
              src={media.heroMain.src}
              alt={media.heroMain.alt}
              width={media.heroMain.w}
              height={media.heroMain.h}
              className="h-[62vh] w-full object-cover"
            />
          </figure>

          {/* Left offset frame */}
          <figure
            className="enter-unmask absolute left-0 top-[52%] z-30 hidden w-[15vw] max-w-[230px] rule-frame p-1.5 backdrop-blur-[1px] lg:block"
            style={{ animationDelay: "0.6s", transform: `translateX(${-p * 90}px)` }}
          >
            <img
              src={media.setup.src}
              alt={media.setup.alt}
              width={media.setup.w}
              height={media.setup.h}
              loading="lazy"
              className="h-[24vh] w-full object-cover"
            />
            <figcaption className="label mt-2 flex justify-between px-0.5 text-[0.6rem]">
              <span>01 / Build</span>
              <span className="text-primary">Delhi</span>
            </figcaption>
          </figure>

          {/* Right offset frame */}
          <figure
            className="enter-unmask absolute right-0 top-[30%] z-30 hidden w-[16vw] max-w-[250px] lg:block"
            style={{ animationDelay: "0.75s", transform: `translateX(${p * 90}px)` }}
          >
            <img
              src={media.guests.src}
              alt={media.guests.alt}
              width={media.guests.w}
              height={media.guests.h}
              loading="lazy"
              className="h-[22vh] w-full object-cover"
            />
            <figcaption className="label mt-2 flex justify-between text-[0.6rem]">
              <span>02 / The Moment</span>
              <span className="text-primary">Live</span>
            </figcaption>
          </figure>
        </div>

        {/* Mobile image */}
        <figure className="enter-unmask relative z-10 mt-6 md:hidden" style={{ animationDelay: "0.4s" }}>
          <img
            src={media.heroMain.src}
            alt={media.heroMain.alt}
            width={media.heroMain.w}
            height={media.heroMain.h}
            className="h-[38vh] w-full object-cover object-top"
          />
        </figure>

        <div
          className="enter-rise relative z-20 mb-24 mt-8 grid gap-8 border-t border-border pt-6 md:mb-12 md:grid-cols-[1fr_auto] md:items-end"
          style={{ animationDelay: "1.3s" }}
        >
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Weddings, corporate experiences and celebrations — planned, designed and
            executed from the first idea to the final guest.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <span className="label">4.9 ★ · 60+ reviews · Delhi NCR</span>
            <a
              href="#enquiry"
              className="border border-primary bg-primary px-6 py-3 font-display text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              Plan an Event
            </a>
            <a
              href="#work"
              className="label link-underline text-foreground"
            >
              View our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
