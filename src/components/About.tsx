import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Reveal } from "@/components/Reveal";
import { useSiteConfig } from "@/context/SiteConfigContext";

const processSteps = [
  {
    number: "01",
    title: "Brief",
    description:
      "Goals, audience, offer, and the social data we already have.",
  },
  {
    number: "02",
    title: "Web Design",
    description:
      "Wireframes, brand system, and high-fidelity pages that convert.",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Production websites and web apps — fast, accessible, built to last.",
  },
  {
    number: "04",
    title: "Launch",
    description: "QA, analytics, pixels, and a cutover that does not break ads.",
  },
  {
    number: "05",
    title: "Social Growth",
    description:
      "Creative tests, audiences, and landing-page loops after ship.",
  },
];

const gallery = [
  {
    src: "/studio/interior.jpg",
    alt: "The Codex Dynamics studio overlooking the city",
    className: "col-span-2 min-h-44 sm:min-h-56",
  },
  {
    src: "/studio/code.jpg",
    alt: "Engineer writing production code",
    className: "col-span-2 min-h-44 sm:min-h-56",
  },
  {
    src: "/studio/design.jpg",
    alt: "Designer reviewing a web interface",
    className: "min-h-36 sm:min-h-44",
  },
  {
    src: "/studio/wireframes.jpg",
    alt: "Website wireframes on a desk",
    className: "min-h-36 sm:min-h-44",
  },
  {
    src: "/studio/social.jpg",
    alt: "Social media creative on a phone",
    className: "min-h-36 sm:min-h-44",
  },
  {
    src: "/studio/analytics.jpg",
    alt: "Performance dashboard and analytics",
    className: "min-h-36 sm:min-h-44",
  },
];

export function About() {
  const { config } = useSiteConfig();
  const steps = config.about?.steps?.length ? config.about.steps : processSteps;
  const shots = config.about?.gallery?.length ? config.about.gallery : gallery;

  return (
    <section
      id="process"
      aria-label="Process"
      className="scroll-mt-24 bg-background py-16 sm:py-24"
    >
      <div className="shell">
        <Reveal>
          <p className="mb-3 text-[11px] font-medium tracking-[0.22em] text-subtle uppercase">
            {config.about?.badge || "How we work"}
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-label sm:text-5xl">
            {config.about?.title || "From brief to live campaigns."}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {config.about?.subtitle || "Design, development, and social media in one loop — not a handoff graveyard. Typical engagement: four to six weeks."}
          </p>
        </Reveal>

        <ol className="mt-12 divide-y divide-hairline border-y border-hairline">
          {steps.map((step, i) => (
            <li key={step.number}>
              <Reveal delay={i * 40}>
                <div className="process-row grid gap-3 rounded-lg px-2 py-7 sm:grid-cols-[5.5rem_minmax(0,0.9fr)_minmax(0,1.2fr)] sm:items-baseline sm:gap-10">
                  <span className="text-sm font-medium tracking-[0.18em] text-subtle tabular-nums">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-label sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-16">
          <p className="mb-5 text-sm text-muted-foreground">Inside the studio</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {shots.map((shot, i) => (
              <div
                key={shot.src + i}
                className={`media-zoom overflow-hidden rounded-lg bg-muted ${shot.className || (i < 2 ? "col-span-2 min-h-44 sm:min-h-56" : "min-h-36 sm:min-h-44")}`}
              >
                <ImageWithFallback
                  src={shot.src}
                  alt={shot.alt}
                  className="h-full min-h-36 w-full object-cover sm:min-h-44"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
