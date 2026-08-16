import { useState } from "react";
import { Reveal } from "./reveal";
import { media, CONTACT } from "@/lib/site-data";

/* 01 — STATEMENT ------------------------------------------------------- */

export function Statement() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-44">
      <Reveal>
        <h2 className="display text-[13vw] leading-[0.84] md:text-[8.5vw]">
          You bring
          <br />
          the occasion.
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="display mt-2 text-[13vw] leading-[0.84] text-primary md:mt-4 md:pl-[22vw] md:text-[8.5vw]">
          We build
          <br />
          the experience.
        </h2>
      </Reveal>
      <Reveal delay={220}>
        <p className="mt-14 max-w-lg text-sm leading-relaxed text-muted-foreground md:ml-auto md:mt-20">
          From concept and décor to production, logistics and execution, we handle the
          moving parts so you can experience the event instead of managing it.
        </p>
      </Reveal>
    </section>
  );
}

/* 02 — TRANSFORMATION -------------------------------------------------- */

export function Transformation() {
  const [stage, setStage] = useState(0);
  const stages = [
    { key: "Before", img: media.empty, note: "An empty room, a date and an idea." },
    { key: "During", img: media.setup, note: "Décor, rigging, lighting, vendors, timing." },
    { key: "After", img: media.heroVenue, note: "The room does the talking." },
  ];
  const active = stages[stage] ?? stages[0]!;

  return (
    <section className="border-y border-border bg-graphite/40">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <h2 className="display text-[12vw] leading-[0.86] md:text-[6vw]">
              Before.
              <br />
              During.
              <br />
              After<span className="text-primary">.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="flex gap-6">
            {stages.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setStage(i)}
                aria-pressed={stage === i}
                className={`label border-b pb-2 transition-colors ${
                  stage === i
                    ? "border-primary text-primary"
                    : "border-transparent hover:text-foreground"
                }`}
              >
                0{i + 1} {s.key}
              </button>
            ))}
          </Reveal>
        </div>

        <Reveal mask className="mt-12">
          <figure className="relative">
            <img
              key={active.img.id}
              src={active.img.src}
              alt={active.img.alt}
              width={active.img.w}
              height={active.img.h}
              loading="lazy"
              className="h-[46vh] w-full object-cover md:h-[70vh]"
            />
            <figcaption className="mt-4 flex flex-wrap justify-between gap-4">
              <span className="label text-foreground">{active.note}</span>
              <span className="label">{active.img.id}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* 03 — WORK ------------------------------------------------------------ */

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-6">
        <h2 className="display text-[10vw] leading-none md:text-[4.5vw]">Selected work</h2>
        <p className="label">Weddings · Corporate · Celebrations · Destination · Production</p>
      </Reveal>

      {/* 01 wedding — full bleed */}
      <article id="weddings" className="pt-20 md:pt-28">
        <Reveal className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <p className="label">01 — Wedding</p>
            <h3 className="display mt-4 text-[11vw] leading-[0.86] md:text-[4.8vw]">
              Weddings
              <br />
              without
              <br />
              the chaos<span className="text-primary">.</span>
            </h3>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              From intimate ceremonies to large-scale celebrations, we coordinate the
              details, vendors, décor and production that keep the day moving.
            </p>
            <ul className="label mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {["Planning", "Coordination", "Décor", "Production", "Entertainment", "Logistics"].map(
                (s) => (
                  <li key={s}>{s}</li>
                ),
              )}
            </ul>
            <a
              href="#enquiry"
              className="mt-8 inline-block border border-border px-6 py-3 font-display text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
            >
              Plan a wedding
            </a>
          </div>
          <figure className="reveal-mask" data-shown="true">
            <img
              src={media.heroMain.src}
              alt="Wedding reception stage with floral installation"
              width={912}
              height={1312}
              loading="lazy"
              className="h-[55vh] w-full object-cover md:h-[80vh]"
            />
          </figure>
        </Reveal>
      </article>

      {/* 02 corporate — full width dark */}
      <article id="corporate" className="pt-24 md:pt-36">
        <Reveal mask>
          <img
            src={media.corporate.src}
            alt={media.corporate.alt}
            width={media.corporate.w}
            height={media.corporate.h}
            loading="lazy"
            className="h-[45vh] w-full object-cover md:h-[78vh]"
          />
        </Reveal>
        <Reveal className="mt-8 grid gap-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="label">02 — Corporate experience</p>
            <h3 className="display mt-4 text-[11vw] leading-[0.86] md:text-[4.8vw]">
              Make the room
              <br />
              remember<span className="text-primary">.</span>
            </h3>
          </div>
          <div>
            <ul className="label grid grid-cols-2 gap-y-3">
              {[
                "Conferences",
                "Brand launches",
                "Product launches",
                "Exhibitions",
                "Corporate celebrations",
                "Technical production",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <a
              href="#enquiry"
              className="mt-8 inline-block border border-border px-6 py-3 font-display text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
            >
              Plan a corporate event
            </a>
          </div>
        </Reveal>
      </article>

      {/* 03 celebrations — asymmetric pair */}
      <article className="grid gap-10 pt-24 md:grid-cols-[0.9fr_1.1fr] md:items-center md:pt-36">
        <Reveal>
          <p className="label">03 — Celebrations</p>
          <h3 className="display mt-4 text-[11vw] leading-[0.86] md:text-[4.4vw]">
            Some events
            <br />
            don&apos;t need
            <br />
            a reason<span className="text-primary">.</span>
          </h3>
          <ul className="label mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {["Birthdays", "Private parties", "Themed celebrations", "Social events"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <a
            href="#enquiry"
            className="mt-8 inline-block border border-border px-6 py-3 font-display text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
          >
            Create a celebration
          </a>
        </Reveal>
        <Reveal mask delay={100} className="md:-mt-16">
          <img
            src={media.guests.src}
            alt={media.guests.alt}
            width={media.guests.w}
            height={media.guests.h}
            loading="lazy"
            className="h-[50vh] w-full object-cover md:h-[72vh]"
          />
        </Reveal>
      </article>

      {/* 04 destination — expansive */}
      <article className="pt-24 md:pt-36">
        <Reveal mask>
          <figure className="relative">
            <img
              src={media.destination.src}
              alt={media.destination.alt}
              width={media.destination.w}
              height={media.destination.h}
              loading="lazy"
              className="h-[50vh] w-full object-cover md:h-[85vh]"
            />
            <figcaption className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8">
              <p className="label text-foreground">04 — Destination</p>
              <h3 className="display mt-2 text-[10vw] leading-[0.86] md:text-[5.5vw]">
                Take the event
                <br />
                somewhere else<span className="text-primary">.</span>
              </h3>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal className="mt-8 grid gap-8 md:grid-cols-[1fr_1fr]">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Planning beyond Delhi? We&apos;ll coordinate the details from the first site
            visit to the final teardown.
          </p>
          <div>
            <p className="label">
              Delhi NCR · Noida · Gurugram · Faridabad · Jaipur · Chandigarh · Uttarakhand
              — among others
            </p>
            <a
              href="#enquiry"
              className="mt-8 inline-block border border-border px-6 py-3 font-display text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
            >
              Plan a destination event
            </a>
          </div>
        </Reveal>
      </article>
    </section>
  );
}

/* 04 — CAPABILITIES ---------------------------------------------------- */

const CAPS = [
  ["Concept", "Creative direction and event vision."],
  ["Design", "Décor, styling, themes and visual atmosphere."],
  ["Production", "Stage, lighting, technical requirements and event infrastructure."],
  ["Logistics", "Vendors, schedules, setup and coordination."],
  ["Execution", "On-ground event management."],
];

export function Capabilities() {
  return (
    <section id="capabilities" className="border-y border-border bg-graphite/40">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-5 py-24 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-32">
        <div>
          <Reveal>
            <h2 className="display text-[12vw] leading-[0.86] md:text-[6vw]">
              From idea
              <br />
              to execution<span className="text-primary">.</span>
            </h2>
          </Reveal>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {CAPS.map(([title, desc], i) => (
              <Reveal as="li" key={title} delay={i * 70}>
                <div className="group grid grid-cols-[auto_1fr] items-baseline gap-6 py-6 transition-colors hover:bg-obsidian/40 md:grid-cols-[3rem_11rem_1fr]">
                  <span className="label text-primary">0{i + 1}</span>
                  <h3 className="display text-2xl md:text-3xl">{title}</h3>
                  <p className="col-span-2 text-sm text-muted-foreground md:col-span-1">{desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal mask delay={120} className="self-end">
          <img
            src={media.production.src}
            alt={media.production.alt}
            width={media.production.w}
            height={media.production.h}
            loading="lazy"
            className="h-[40vh] w-full object-cover md:h-[62vh]"
          />
          <p className="label mt-3">Technical production · {media.production.id}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* 05 — BE AT THE EVENT -------------------------------------------------- */

export function BeThere() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-44">
      <Reveal>
        <h2 className="display text-[15vw] leading-[0.82] md:text-[9.5vw]">
          You should
          <br />
          be at the
          <br />
          event<span className="text-primary">.</span>
        </h2>
      </Reveal>
      <Reveal delay={150} className="mt-12 grid gap-6 md:ml-auto md:max-w-md">
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>Not checking the stage.</p>
          <p>Not calling the caterer.</p>
          <p>Not asking where the photographer is.</p>
          <p>Not wondering whether the guests have arrived.</p>
        </div>
        <p className="display text-xl text-primary">That&apos;s our job.</p>
      </Reveal>
    </section>
  );
}

/* 06 — PROCESS ---------------------------------------------------------- */

const PROCESS = [
  ["Discover", "What are we building?"],
  ["Design", "What should it look and feel like?"],
  ["Plan", "What needs to happen behind the scenes?"],
  ["Build", "Vendors. Décor. Production. Logistics."],
  ["Execute", "The doors open. We take over."],
  ["Deliver", "The last guest leaves. The work is done."],
];

export function Process() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="label">The sequence</p>
        </Reveal>
        <div className="mt-10 md:grid md:grid-cols-6">
          {PROCESS.map(([title, desc], i) => (
            <Reveal
              key={title}
              delay={i * 60}
              className="group border-t border-border py-8 md:border-l md:border-t-0 md:px-5 md:py-0"
            >
              <span className="label text-primary">0{i + 1}</span>
              <h3 className="display mt-3 text-2xl transition-colors group-hover:text-primary md:text-[1.6vw]">
                {title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground md:min-h-24">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 07 — PROOF ------------------------------------------------------------ */

export function Proof() {
  return (
    <section className="border-y border-border bg-graphite/40">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
          <div className="label space-y-2">
            <p className="display text-5xl text-foreground tracking-tight">4.9 / 5</p>
            <p>60+ public reviews</p>
          </div>
          <div>
            <blockquote className="display text-[7vw] leading-[0.95] md:text-[3.4vw]">
              “Prompt responses, reasonable pricing and a very professional team.”
            </blockquote>
            <p className="label mt-6">Verified public review · Justdial</p>
            <a
              href="https://www.justdial.com/Delhi/Awesome-Event-Sangam-Vihar/nct-11957560"
              target="_blank"
              rel="noopener noreferrer"
              className="label link-underline mt-4 inline-block text-primary"
            >
              Read all reviews ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 08 — ABOUT ------------------------------------------------------------ */

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
      <Reveal>
        <h2 className="display text-[13vw] leading-[0.86] md:text-[7vw]">
          The people
          <br />
          behind
          <br />
          the scene<span className="text-primary">.</span>
        </h2>
      </Reveal>
      <Reveal delay={140} className="mt-12 grid gap-8 md:grid-cols-2">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Events look effortless when someone is thinking about everything at once.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          That&apos;s what we do — plan the details, coordinate the people, build the
          environment and keep the day moving.
        </p>
      </Reveal>
      <Reveal delay={220} className="mt-16 border-t border-border pt-8">
        <h3 className="display text-[9vw] leading-none md:text-[4vw]">
          Every event has its own scale.
        </h3>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Tell us what you&apos;re planning, where it&apos;s happening and what you need
          handled. We&apos;ll build the right scope around it.
        </p>
        <a
          href="#enquiry"
          className="mt-8 inline-block border border-primary px-6 py-3 font-display text-[0.7rem] uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Request a proposal
        </a>
      </Reveal>
    </section>
  );
}

/* 09 — ENQUIRY ---------------------------------------------------------- */

const EVENT_TYPES = [
  "Wedding",
  "Corporate",
  "Brand Launch",
  "Conference",
  "Exhibition",
  "Birthday",
  "Private Celebration",
  "Destination Event",
  "Other",
];

const SERVICES = [
  "Planning",
  "Décor",
  "Production",
  "Entertainment",
  "Logistics",
  "Photography",
  "Videography",
  "Full Event Management",
  "Not Sure",
];

const field =
  "w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export function Enquiry() {
  const [sent, setSent] = useState(false);

  return (
    <section id="enquiry" className="border-t border-border bg-graphite/40">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-32">
        <Reveal>
          <p className="label">Enquiry</p>
          <h2 className="display mt-4 text-[12vw] leading-[0.86] md:text-[4.6vw]">
            Plan an
            <br />
            event<span className="text-primary">.</span>
          </h2>
          <div className="mt-10 space-y-4">
            <a href={CONTACT.tel} className="label link-underline block text-foreground">
              Call · {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="label link-underline block text-foreground"
            >
              Get directions ↗
            </a>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
              {CONTACT.address}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          {sent ? (
            <div className="rule-frame p-8">
              <p className="display text-2xl">Brief received.</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Thanks — we&apos;ll be in touch. For anything urgent, call us directly.
              </p>
              <a
                href={CONTACT.tel}
                className="mt-6 inline-block border border-primary bg-primary px-6 py-3 font-display text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground"
              >
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-8 md:grid-cols-2"
            >
              <div>
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input id="name" name="name" required className={field} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone" className="label">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className={field}
                  placeholder="+91"
                />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input id="email" name="email" type="email" className={field} placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="type" className="label">
                  Event type
                </label>
                <select id="type" name="type" required className={`${field} text-foreground`}>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-obsidian">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="label">
                  Event date
                </label>
                <input id="date" name="date" type="date" className={field} />
              </div>
              <div>
                <label htmlFor="venue" className="label">
                  Location / venue
                </label>
                <input id="venue" name="venue" className={field} placeholder="City or venue" />
              </div>
              <div>
                <label htmlFor="guests" className="label">
                  Estimated guests
                </label>
                <input id="guests" name="guests" type="number" min="1" className={field} placeholder="250" />
              </div>
              <div>
                <label htmlFor="budget" className="label">
                  Budget (optional)
                </label>
                <input id="budget" name="budget" className={field} placeholder="₹" />
              </div>

              <fieldset className="md:col-span-2">
                <legend className="label">Services required</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <label
                      key={s}
                      className="cursor-pointer border border-border px-3 py-2 text-xs transition-colors hover:border-primary has-checked:border-primary has-checked:text-primary"
                    >
                      <input type="checkbox" name="services" value={s} className="sr-only" />
                      {s}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="md:col-span-2">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea id="message" name="message" rows={3} className={field} placeholder="Tell us what you're planning" />
              </div>

              <button
                type="submit"
                className="md:col-span-2 border border-primary bg-primary px-6 py-4 font-display text-[0.7rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
              >
                Start planning
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* 10 — FOOTER ----------------------------------------------------------- */

export function Footer() {
  return (
    <footer className="border-t border-border bg-obsidian">
      <div className="mx-auto max-w-[1600px] px-5 pb-28 pt-20 md:px-10 md:pb-16">
        <h2 className="display text-[16vw] leading-[0.82] md:text-[11vw]">
          Awesome Event
        </h2>
        <p className="label mt-4">Weddings · Corporate · Celebrations · Production</p>

        <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-4">
          <nav aria-label="Footer" className="label flex flex-col gap-3">
            {[
              ["Work", "#work"],
              ["Weddings", "#weddings"],
              ["Corporate", "#corporate"],
              ["Services", "#capabilities"],
              ["About", "#about"],
              ["Contact", "#enquiry"],
            ].map(([l, h]) => (
              <a key={l} href={h} className="link-underline w-fit hover:text-foreground">
                {l}
              </a>
            ))}
          </nav>

          <div className="label flex flex-col gap-3">
            <a href={CONTACT.tel} className="link-underline w-fit hover:text-foreground">
              {CONTACT.phoneDisplay}
            </a>
            <span>Sangam Vihar, Delhi</span>
            <a
              href={CONTACT.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline w-fit hover:text-foreground"
            >
              Google Maps ↗
            </a>
          </div>

          <div className="label flex flex-col gap-3">
            <a
              href="https://www.justdial.com/Delhi/Awesome-Event-Sangam-Vihar/nct-11957560"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline w-fit hover:text-foreground"
            >
              Justdial ↗
            </a>
            <a
              href="https://www.wedmegood.com/vendors/delhi-ncr/wedding-planners"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline w-fit hover:text-foreground"
            >
              WedMeGood ↗
            </a>
          </div>

          <div>
            <a
              href="#enquiry"
              className="inline-block border border-primary bg-primary px-6 py-3 font-display text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              Plan an event
            </a>
          </div>
        </div>

        <p className="label mt-12 text-[0.6rem]">© 2026 Awesome Event. All rights reserved.</p>
      </div>
    </footer>
  );
}
