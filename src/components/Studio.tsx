import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/lib/site";
import { useSiteConfig } from "@/context/SiteConfigContext";

const principles = [
  {
    title: "Clarity over noise",
    copy: "If it does not serve the offer, it does not ship. Hierarchy, type, and motion are decided — never decorated.",
  },
  {
    title: "One system",
    copy: "The website, the brand, and the social account share a language. No three-vendor tax. No stale PDFs.",
  },
  {
    title: "Built to be measured",
    copy: "Pixels, events, and pages that a board can read. We optimize for conversion, not applause.",
  },
];

export function Studio() {
  const { config, primaryAddress } = useSiteConfig();
  const principleList = config.studio?.principles?.length ? config.studio.principles : principles;
  const currentAddress = primaryAddress || {
    id: "addr-default",
    label: "Kyiv Studio",
    city: "Kyiv",
    street: CONTACT.addressStreet,
    fullAddress: CONTACT.addressFull,
    lat: 50.4385,
    lng: 30.5235,
  };
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(currentAddress.fullAddress || `${currentAddress.street}, ${currentAddress.city}`)}`;

  return (
    <section
      id="studio"
      aria-label="Studio"
      className="scroll-mt-24 bg-background py-16 sm:py-24"
    >
      <div className="shell">
        <Reveal>
          <p className="mb-3 text-[11px] font-medium tracking-[0.22em] text-subtle uppercase">
            {config.studio?.badge || "The studio"}
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-label sm:text-5xl">
            {config.studio?.title || "A small team. A high standard."}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {config.studio?.subtitle || "Codex Dynamics is a studio, not a hiring board. Senior design, development, and social sit on the same desk — and stay on the work until it performs."}
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-10">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-lift media-zoom group relative block overflow-hidden rounded-xl bg-muted"
          >
            <ImageWithFallback
              src={config.studio?.image || "/studio/interior.jpg"}
              alt={config.studio?.title || "Codex Dynamics studio"}
              className="aspect-[16/8] h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5 sm:p-7">
              <p className="text-[11px] font-medium tracking-[0.18em] text-paper/70 uppercase">
                {currentAddress.city || "Studio Location"}
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-paper">
                {currentAddress.street || CONTACT.addressStreet}
              </p>
              <p className="text-sm text-paper/75">
                {currentAddress.label || "Open in Maps"}
              </p>
            </div>
          </a>
        </Reveal>

        <div className="mt-4 grid gap-px overflow-hidden rounded-xl bg-hairline sm:grid-cols-3">
          {principleList.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="bg-card">
              <div className="flex h-full flex-col p-8 transition-colors duration-200 hover:bg-fill sm:p-9">
                <span className="text-sm font-medium tracking-[0.18em] text-subtle tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-7 text-2xl font-semibold tracking-tight text-label">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
