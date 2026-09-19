import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Code2,
  Palette,
  TrendingUp,
  ShieldCheck,
  Clock,
  Sparkles,
  Zap,
  HelpCircle,
  FileCheck,
  Users2,
  Lock,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { scrollToId } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { useContactModal } from "@/context/ContactModalContext";
import type { ServiceItem } from "@/types/site-editor";

const fallbackServices: ServiceItem[] = [
  {
    id: "web-dev",
    kicker: "01  /  Engineering",
    title: "Custom Web Development",
    role: "Full-Stack Development, Fast Web Apps & Custom Storefronts",
    description:
      "We build and code custom, lightning-fast websites and web applications tailored specifically to your business operations. Whether you need a high-converting corporate website, an e-commerce store, or an interactive web app, we write clean, scalable code that loads in under a second and turns visitors into paying customers.",
    whatWeDo:
      "We take full ownership of your technical build — from database architecture and API connections to custom front-end implementation, checkout gateways, and turnkey cloud deployment. You receive a fast, secure digital asset that you 100% own.",
    points: [
      "Custom React & TypeScript Code",
      "Sub-Second Page Load Speed (95+ Score)",
      "Secure Stripe & PayPal Checkout",
      "Automated Lead Capture & CRM Sync",
      "No Bloated Plugins or Builders",
    ],
    deliverables: [
      {
        title: "Custom Responsive Web Application",
        desc: "Bespoke frontend built with React, TypeScript, and Tailwind CSS that renders seamlessly on iPhones, Androids, tablets, laptops, and 4K displays.",
      },
      {
        title: "Client-Friendly Content Management (CMS)",
        desc: "An intuitive administration panel so you and your team can effortlessly update copy, team members, blog posts, and projects with zero coding.",
      },
      {
        title: "Secure Payment & Checkout Integrations",
        desc: "Turnkey Stripe, PayPal, or Apple Pay processing with automatic customer receipts, invoicing, and webhook fulfillment.",
      },
      {
        title: "Instant Lead & Inquiry Routing",
        desc: "Contact forms that instantly ping your WhatsApp, Telegram, or CRM the second an inquiry arrives so you never miss a deal.",
      },
      {
        title: "Core Web Vitals & Speed Optimization",
        desc: "Image compression pipelines (WebP/AVIF), code-splitting, and caching headers configured to achieve 95+ Google PageSpeed benchmarks.",
      },
      {
        title: "Production Deployment & Security",
        desc: "Domain DNS routing, SSL certificate setup, automated database backups, and DDoS protection so your site stays online 24/7.",
      },
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "SQLite / Postgres", "Stripe API", "Vite", "Cloudflare"],
    timeline: "Typical Delivery: 2 to 4 Weeks",
    idealFor: "Businesses, startups, and founders needing high-performing sites that scale without monthly builder subscription lock-ins.",
    offYourPlate: "No wrestling with broken WordPress plugins, outdated PHP versions, or unreliable offshore developers.",
    src: "/hero/web-dev.mp4",
    poster: "/hero/web-dev.jpg",
  },
  {
    id: "web-design",
    kicker: "02  /  Visual Identity",
    title: "Web Design & UI/UX",
    role: "Conversion-Focused Interfaces & Complete Brand Systems",
    description:
      "We design premium, conversion-optimized interfaces that instantly position your company as the premier leader in your industry. Every color, font, button state, and layout is strategically crafted in Figma to guide visitors toward booking calls and purchasing your offers.",
    whatWeDo:
      "We research your target audience, analyze your top competitors, and build comprehensive wireframes and high-fidelity mockups. You get to review interactive prototypes and request adjustments before any coding begins.",
    points: [
      "Bespoke High-Fidelity Figma UI",
      "User Experience & Frictionless Journeys",
      "Design Systems & Brand Guidelines",
      "Mobile-First Interaction Patterns",
      "Conversion Rate Optimization (CRO)",
    ],
    deliverables: [
      {
        title: "Strategic Wireframing & Site Architecture",
        desc: "Information hierarchy that leads visitors naturally from problem identification to solution, social proof, and compelling call-to-action.",
      },
      {
        title: "Pixel-Perfect Mobile & Desktop Screens",
        desc: "Custom high-fidelity mockups for all viewports, crafted with precision typography, generous negative space, and polished visual contrast.",
      },
      {
        title: "Cohesive Brand Identity & UI Kit",
        desc: "Brand color palettes, accessible font hierarchies, button states, form inputs, badges, and icon libraries ready for development.",
      },
      {
        title: "Clickable Figma Prototype",
        desc: "An interactive prototype allowing you to click through and experience the entire user journey on your phone and desktop before development.",
      },
      {
        title: "Conversion Elements & Social Proof Layouts",
        desc: "High-trust testimonial sliders, statistical counter ribbons, trust badges, and comparison matrices designed to overcome objections.",
      },
      {
        title: "Production Asset Suite",
        desc: "Full vector SVG exports, favicon suites, high-resolution social share preview cards (OpenGraph), and marketing assets.",
      },
    ],
    techStack: ["Figma", "Adobe Creative Suite", "Illustrator", "Tailwind Typography", "Framer Motion"],
    timeline: "Typical Delivery: 1 to 3 Weeks",
    idealFor: "Established companies looking to rebrand, elevate their perceived value, and charge premium prices for their services.",
    offYourPlate: "No guessing whether your website looks professional or trustworthy. We deliver an elevated aesthetic that converts.",
    src: "/hero/design.mp4",
    poster: "/hero/design.jpg",
  },
  {
    id: "social",
    kicker: "03  /  Acquisition",
    title: "Social Media Marketing",
    role: "Paid Ad Campaigns & Organic Content Growth",
    description:
      "A great website only produces revenue when high-intent prospects see it. We create your content, run your paid ad campaigns on Meta and Google, and drive qualified leads directly into your sales pipeline with measurable return on ad spend.",
    whatWeDo:
      "We plan monthly content strategies, produce scroll-stopping video and graphic creatives, set up tracking pixels, write conversion copy, and actively manage your paid ad budgets to generate predictable client inquiries.",
    points: [
      "Full-Funnel Meta & Google Ads",
      "Scroll-Stopping Video & Graphic Creatives",
      "Monthly Content Calendar & Copywriting",
      "Pixel & Conversion API Tracking",
      "Weekly A/B Split Testing & Scaling",
    ],
    deliverables: [
      {
        title: "Targeted Paid Ad Campaign Management",
        desc: "Complete ad setup, custom audience segmentation, retargeting funnels, and daily optimization on Meta (Instagram & Facebook) and Google Ads.",
      },
      {
        title: "High-Converting Creative Production",
        desc: "Attention-grabbing short-form video reels, multi-slide carousels, and promotional graphic banners designed to stop the feed scroll.",
      },
      {
        title: "Strategic Copywriting & Content Scheduling",
        desc: "Captions, headlines, and call-to-actions written using proven direct-response frameworks, scheduled across your primary channels.",
      },
      {
        title: "Tracking Pixels & Funnel Attribution",
        desc: "Installation of Meta Pixel, Google Analytics 4, and Conversion API so you see exactly which campaigns produce leads and sales.",
      },
      {
        title: "A/B Testing & Cost-Per-Lead Optimization",
        desc: "Continuous testing of creative variations, headlines, and target audiences to lower your cost-per-acquisition and scale winning ads.",
      },
      {
        title: "Transparent Monthly ROI Reporting",
        desc: "Clear, jargon-free monthly performance reports detailing ad spend, reach, click-through rates, qualified leads, and return on investment.",
      },
    ],
    techStack: ["Meta Ads Manager", "Google Ads", "Google Analytics 4", "CapCut / Premiere", "Canva Pro", "Buffer"],
    timeline: "Ongoing Monthly Sprints",
    idealFor: "Business owners who want a consistent pipeline of inbound inquiries without having to spend hours every day posting on social media.",
    offYourPlate: "No more wondering what to post, wasting money on unoptimized boosted posts, or struggling with confusing ad managers.",
    src: "/hero/social.mp4",
    poster: "/hero/social.jpg",
  },
];

const serviceIcons: Record<string, typeof Code2> = {
  "web-dev": Code2,
  "web-design": Palette,
  social: TrendingUp,
};

const serviceFaqs = [
  {
    q: "Do I own the website and source code after completion?",
    a: "Yes, 100%. Once final sign-off is completed, you own all source code, design files in Figma, domain registrations, and assets with zero licensing fees or vendor lock-in.",
  },
  {
    q: "Can my team edit content without knowing how to code?",
    a: "Absolutely. We provide an intuitive administrative dashboard where you can easily modify text, upload images, add case studies, publish blog posts, and manage inquiries.",
  },
  {
    q: "How long does a complete project take from start to finish?",
    a: "Most custom web design and development projects launch within 2 to 4 weeks. Social media ad campaigns typically launch within 5 business days after strategy approval.",
  },
  {
    q: "What do I need to prepare before we get started?",
    a: "Just your business objectives, target audience details, and any existing logo or imagery you have. We handle the copywriting, structuring, design mockups, and technical coding.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Yes. Every build includes 30 days of complimentary post-launch support and bug fixes. We also offer monthly maintenance and growth retainers to keep your systems running at peak speed.",
  },
];

export function Services() {
  const { config } = useSiteConfig();
  const { openContactModal } = useContactModal();
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({
    "web-dev": true,
    "web-design": false,
    social: false,
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const rawItems = config.services?.items?.length ? config.services.items : fallbackServices;

  // Merge with fallbackServices to ensure rich detailed properties exist even if database only had brief fields
  const items: ServiceItem[] = rawItems.map((item) => {
    const fallback = fallbackServices.find((f) => f.id === item.id);
    if (!fallback) return item;
    return {
      ...fallback,
      ...item,
      role: item.role || fallback.role,
      whatWeDo: item.whatWeDo || fallback.whatWeDo,
      deliverables: item.deliverables && item.deliverables.length > 0 ? item.deliverables : fallback.deliverables,
      techStack: item.techStack && item.techStack.length > 0 ? item.techStack : fallback.techStack,
      timeline: item.timeline || fallback.timeline,
      idealFor: item.idealFor || fallback.idealFor,
      offYourPlate: item.offYourPlate || fallback.offYourPlate,
    };
  });

  const toggleExpand = (id: string) => {
    setExpandedServices((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="capabilities"
      aria-label="Services"
      className="scroll-mt-24 bg-fill-elevated py-16 sm:py-24"
    >
      <div className="shell">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-blue uppercase">
              <Sparkles className="size-3" />
              {config.services?.badge || "What We Do For You"}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-label sm:text-5xl">
              {config.services?.title || "Complete Digital Services Built & Managed For You"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {config.services?.subtitle ||
                "We don't just hand you templates or tell you what to do. Our team does the actual heavy lifting — custom coding your website, designing your brand, and managing your social media campaigns so you get real clients."}
            </p>
          </div>
        </Reveal>

        {/* Value Proposition Pills */}
        <Reveal delay={40}>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex items-center gap-2.5 rounded-lg border border-hairline bg-card p-3 sm:p-4">
              <Code2 className="size-4 shrink-0 text-blue" />
              <div>
                <p className="text-xs font-semibold text-label">100% Custom Code</p>
                <p className="text-[11px] text-muted-foreground">No slow page builders</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-lg border border-hairline bg-card p-3 sm:p-4">
              <Zap className="size-4 shrink-0 text-amber-500" />
              <div>
                <p className="text-xs font-semibold text-label">Sub-Second Speed</p>
                <p className="text-[11px] text-muted-foreground">95+ PageSpeed score</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-lg border border-hairline bg-card p-3 sm:p-4">
              <Lock className="size-4 shrink-0 text-emerald-500" />
              <div>
                <p className="text-xs font-semibold text-label">You Own 100%</p>
                <p className="text-[11px] text-muted-foreground">Full code & IP ownership</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-lg border border-hairline bg-card p-3 sm:p-4">
              <Users2 className="size-4 shrink-0 text-purple-500" />
              <div>
                <p className="text-xs font-semibold text-label">Direct Team Access</p>
                <p className="text-[11px] text-muted-foreground">No account manager telephone</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Detailed Service Cards */}
        <div className="mt-12 space-y-8">
          {items.map((service, i) => {
            const Icon = serviceIcons[service.id] || Code2;
            const isExpanded = expandedServices[service.id] ?? false;

            return (
              <Reveal key={service.id} delay={i * 60}>
                <article
                  id={`service-${service.id}`}
                  className="surface-lift overflow-hidden rounded-2xl border border-hairline bg-card shadow-sm transition-all"
                >
                  {/* Top Header & Visual Overview */}
                  <div className="grid lg:grid-cols-12 lg:items-stretch">
                    {/* Media Column */}
                    <div
                      className={cn(
                        "media-zoom relative min-h-64 overflow-hidden bg-ink sm:min-h-80 lg:col-span-5",
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
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-paper">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-black/60 px-2.5 py-1 text-xs font-medium backdrop-blur-md">
                          <Icon className="size-3.5 text-blue" />
                          {service.kicker}
                        </span>
                        {service.timeline && (
                          <span className="inline-flex items-center gap-1 text-xs text-paper/80">
                            <Clock className="size-3" />
                            {service.timeline}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Summary & Core Offer */}
                    <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-7">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] font-semibold tracking-[0.2em] text-subtle uppercase">
                            {service.kicker}
                          </span>
                          {service.role && (
                            <span className="rounded-full bg-blue/10 px-2.5 py-0.5 text-xs font-medium text-blue">
                              {service.role}
                            </span>
                          )}
                        </div>

                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-label sm:text-3xl">
                          {service.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {service.description}
                        </p>

                        {/* What We Actually Do For You Callout */}
                        {service.whatWeDo && (
                          <div className="mt-5 rounded-xl border border-hairline bg-fill p-4 sm:p-5">
                            <p className="text-xs font-semibold text-label">
                              What our team handles for your business:
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                              {service.whatWeDo}
                            </p>
                          </div>
                        )}

                        {/* Quick Highlights / Bullet Tags */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {service.points.map((point) => (
                            <span
                              key={point}
                              className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-card px-3 py-1 text-xs font-medium text-label shadow-2xs"
                            >
                              <CheckCircle2 className="size-3 text-blue" />
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-hairline pt-6">
                        <button
                          type="button"
                          onClick={() => openContactModal(service.title)}
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue px-5 text-sm font-semibold text-paper shadow-sm transition-all hover:bg-blue/90 cursor-pointer"
                        >
                          Book {service.title}
                          <ChevronRight className="size-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => toggleExpand(service.id)}
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-hairline bg-card px-4 text-sm font-medium text-label hover:bg-fill cursor-pointer"
                        >
                          {isExpanded ? "Hide Detailed Scope" : "View Detailed Scope & Deliverables"}
                          {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Form: In-Depth Scope & Deliverables (Collapsible / Expandable) */}
                  {isExpanded && (
                    <div className="border-t border-hairline bg-fill p-7 sm:p-10">
                      <div className="grid gap-8 lg:grid-cols-12">
                        {/* Concrete Deliverables Checklist */}
                        <div className="lg:col-span-8">
                          <div className="flex items-center gap-2">
                            <FileCheck className="size-4 text-blue" />
                            <h4 className="text-sm font-semibold tracking-tight text-label uppercase">
                              Complete Scope of Deliverables Included
                            </h4>
                          </div>

                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {service.deliverables?.map((item) => (
                              <div
                                key={item.title}
                                className="rounded-xl border border-hairline bg-card p-4 transition-colors"
                              >
                                <div className="flex items-start gap-2.5">
                                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                                  <div>
                                    <p className="text-xs font-semibold text-label sm:text-sm">
                                      {item.title}
                                    </p>
                                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                      {item.desc}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Sidebar Details: Stack, Ideal For, Off-Plate */}
                        <div className="space-y-4 lg:col-span-4">
                          {/* What We Take Off Your Plate */}
                          {service.offYourPlate && (
                            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                              <p className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                                What We Take Off Your Plate:
                              </p>
                              <p className="mt-1 text-xs leading-relaxed text-amber-900/80 dark:text-amber-300/80">
                                {service.offYourPlate}
                              </p>
                            </div>
                          )}

                          {/* Ideal For */}
                          {service.idealFor && (
                            <div className="rounded-xl border border-hairline bg-card p-4">
                              <p className="text-xs font-semibold text-label">
                                Who This Is Ideal For:
                              </p>
                              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                {service.idealFor}
                              </p>
                            </div>
                          )}

                          {/* Tech Stack / Tools */}
                          {service.techStack && (
                            <div className="rounded-xl border border-hairline bg-card p-4">
                              <p className="text-xs font-semibold text-label">
                                Technologies & Tools Used:
                              </p>
                              <div className="mt-2 flex flex-wrap gap-1.5">
                                {service.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="rounded bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Instant Action */}
                          <div className="rounded-xl border border-blue/20 bg-blue/5 p-4 text-center">
                            <p className="text-xs font-semibold text-label">
                              Ready to get this built for you?
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              Let's review your requirements on a quick strategy call.
                            </p>
                            <button
                              type="button"
                              onClick={() => openContactModal(service.title)}
                              className="mt-3 inline-flex w-full min-h-10 items-center justify-center gap-1.5 rounded-lg bg-blue px-3 text-xs font-semibold text-paper hover:bg-blue/90 cursor-pointer"
                            >
                              Request Free Proposal
                              <ChevronRight className="size-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* How We Deliver It For You (Done-For-You Process) */}
        <Reveal delay={100} className="mt-16 sm:mt-24">
          <div className="rounded-2xl border border-hairline bg-card p-8 sm:p-12">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-blue uppercase">
                Our Done-For-You Delivery Model
              </span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-label sm:text-4xl">
                How we take your project from idea to live revenue.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                You don't need to manage freelancers, deal with code, or guess what to do next. We follow a battle-tested 4-phase execution loop.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-hairline bg-fill p-5">
                <span className="font-mono text-xs font-bold text-blue">01 / DISCOVERY</span>
                <h4 className="mt-2 text-base font-semibold text-label">Goals & Strategy</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  We hop on a consultation to define your target customer, commercial offer, technical requirements, and deliverable milestones.
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-fill p-5">
                <span className="font-mono text-xs font-bold text-blue">02 / DESIGN</span>
                <h4 className="mt-2 text-base font-semibold text-label">Custom UI/UX in Figma</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  We design responsive mockups and interactive prototypes. You review every screen and request adjustments until you love it.
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-fill p-5">
                <span className="font-mono text-xs font-bold text-blue">03 / BUILD</span>
                <h4 className="mt-2 text-base font-semibold text-label">Clean Code & Testing</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  We hand-code your platform, connect payment gateways and lead capture, and test rigorously across real mobile devices.
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-fill p-5">
                <span className="font-mono text-xs font-bold text-blue">04 / LAUNCH</span>
                <h4 className="mt-2 text-base font-semibold text-label">Turnkey Handover & Ads</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  We connect your custom domain, set up analytics, launch your marketing campaigns, and train your team on updating content.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Client Guarantees */}
        <Reveal delay={120} className="mt-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl border border-hairline bg-card p-6">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-emerald-500" />
              <div>
                <h4 className="text-sm font-semibold text-label">100% Intellectual Property Ownership</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  You own all code, designs, and content upon completion. No recurring licensing fees or vendor lock-in.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-hairline bg-card p-6">
              <Zap className="mt-0.5 size-5 shrink-0 text-blue" />
              <div>
                <h4 className="text-sm font-semibold text-label">Fixed-Scope & Transparent Pricing</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  We provide a clear scope and fixed quote before kickoff. Zero hidden fees or surprise billings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-hairline bg-card p-6">
              <Clock className="mt-0.5 size-5 shrink-0 text-purple-500" />
              <div>
                <h4 className="text-sm font-semibold text-label">30 Days Complimentary Support</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  We stand behind our work with 30 days of free bug fixes, minor tweaks, and dedicated launch support.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Services FAQ Accordion */}
        <Reveal delay={140} className="mt-16">
          <div className="rounded-2xl border border-hairline bg-card p-8 sm:p-10">
            <div className="flex items-center gap-2">
              <HelpCircle className="size-4 text-blue" />
              <h3 className="text-xl font-semibold tracking-tight text-label sm:text-2xl">
                Frequently Asked Questions About Our Services
              </h3>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Direct answers to common questions about working with our team.
            </p>

            <div className="mt-6 divide-y divide-hairline">
              {serviceFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={faq.q} className="py-4">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between text-left text-sm font-semibold text-label transition-colors hover:text-blue cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="size-4 shrink-0 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
              <p className="text-xs text-muted-foreground">
                Have a unique requirement or custom project? We are ready to help.
              </p>
              <button
                type="button"
                onClick={() => scrollToId("contact")}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-label px-4 text-xs font-semibold text-background hover:opacity-90 cursor-pointer"
              >
                Talk With Our Team
                <ChevronRight className="size-3.5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
