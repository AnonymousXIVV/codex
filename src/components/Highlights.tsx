import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    href: "#work",
    kicker: "Work",
    title: "Sites that convert.",
    copy: "Storefronts, web apps, and campaigns built as one product.",
  },
  {
    href: "#process",
    kicker: "Process",
    title: "Brief to live campaigns.",
    copy: "Design, development, and social media in a single loop.",
  },
  {
    href: "#studio",
    kicker: "Studio",
    title: "One standard.",
    copy: "The same care on the page, in the brand, and in the feed.",
  },
];

export function Highlights() {
  return (
    <section
      aria-label="Highlights"
      className="relative z-20 bg-background pt-7 pb-3 sm:pt-9"
    >
      <div className="shell grid gap-3 md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.href} delay={i * 80}>
            <a
              href={item.href}
              className="surface-lift shine group flex h-full flex-col rounded-xl bg-card p-6 sm:p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[11px] font-medium tracking-[0.2em] text-subtle uppercase">
                  {item.kicker}
                </span>
                <ArrowUpRight className="size-4 text-subtle transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-label">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.copy}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
