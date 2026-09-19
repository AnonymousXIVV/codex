import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { scrollToId } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { useSiteConfig } from "@/context/SiteConfigContext";

const services = [
  {
    id: "web-dev",
    kicker: "01  /  Build",
    title: "Web Development",
    description:
      "Custom websites and web applications — React, TypeScript, and the quiet craft that makes a page feel inevitable. Fast, accessible, and wired for analytics from day one.",
    points: ["Websites & web apps", "React · TypeScript", "Performance as a feature"],
    src: "/hero/web-dev.mp4",
    poster: "/hero/web-dev.jpg",
  },
  {
    id: "web-design",
    kicker: "02  /  Form",
    title: "Web Design",
    description:
      "Interfaces that feel expensive. Type, color, motion, and a system the whole brand can live in — designed as one material, not a pile of screens.",
    points: ["Identity & type", "Design systems", "Pages that convert"],
    src: "/hero/design.mp4",
    poster: "/hero/design.jpg",
  },
  {
    id: "social",
    kicker: "03  /  Signal",
    title: "Social Media Marketing",
    description:
      "Content, creative, and campaigns that match the site. Feeds, stories, and ads treated like a product — tested weekly, killed fast, grown on purpose.",
    points: ["Content systems", "Paid + organic", "Creative that compounds"],
    src: "/hero/social.mp4",
    poster: "/hero/social.jpg",
  },
];

export function Services() {
  const { config } = useSiteConfig();
  const items = config.services?.items?.length ? config.services.items : services;

  return (
    <section
      id="capabilities"
      aria-label="Services"
      className="scroll-mt-24 bg-fill-elevated py-16 sm:py-24"
    >
      <div className="shell">
        <Reveal>
          <p className="mb-3 text-[11px] font-medium tracking-[0.22em] text-subtle uppercase">
            {config.services?.badge || "Services"}
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-label sm:text-5xl">
            {config.services?.title || "Three things. Done as one."}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {config.services?.subtitle || "Web development, web design, and social media marketing — the site, the system, and the signal that grows it."}
          </p>
        </Reveal>

        <div className="mt-14 space-y-5">
          {items.map((service, i) => (
            <Reveal key={service.id} delay={i * 70}>
              <article
                className={cn(
                  "surface-lift grid overflow-hidden rounded-xl bg-card lg:grid-cols-2 lg:items-stretch",
                )}
              >
                <div
                  className={cn(
                    "media-zoom relative min-h-56 overflow-hidden bg-ink sm:min-h-72",
                    i % 2 === 1 && "lg:order-2",
                  )}
                >
                  <video
                    src={service.src}
                    poster={service.poster}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <p className="text-[11px] font-medium tracking-[0.22em] text-subtle uppercase">
                    {service.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-label sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-label"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => scrollToId("contact")}
                    className="mt-8 inline-flex min-h-11 items-center gap-1 self-start text-sm font-medium text-blue hover:opacity-70 cursor-pointer"
                  >
                    Start a project
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
