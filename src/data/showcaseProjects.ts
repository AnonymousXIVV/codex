export interface ShowcaseProject {
  id: string | number;
  title: string;
  client: string;
  tag: string;
  category: "Web Development" | "E-Commerce" | "SaaS & Apps" | "Web Design";
  shortDescription: string;
  detailedDescription: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
  metrics: { label: string; value: string; detail?: string }[];
  features: string[];
  image: string;
  video?: string;
  site_url?: string;
  featured?: boolean;
  completionDate?: string;
  lighthouse: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
}

export const RECENT_WEB_PROJECTS: ShowcaseProject[] = [
  {
    id: "proj-apex-ecommerce",
    title: "ApexStore: Sub-Second Composable Storefront",
    client: "Northline Global Commerce",
    tag: "Headless E-Commerce · React 19",
    category: "E-Commerce",
    shortDescription:
      "A headless, sub-second e-commerce engine replacing a legacy monolith. Real-time global inventory sync, instantaneous search, and optimized one-click checkout.",
    detailedDescription:
      "Engineered from the ground up to eliminate checkout bottlenecks for an international multi-brand fashion retailer. We migrated their unoptimized legacy stack to an edge-rendered composable architecture with sub-50ms search response, distributed inventory synchronization, and zero-layout-shift micro-interactions.",
    challenge:
      "A sluggish legacy liquid storefront with 6.2s Time-to-Interactive, frequent checkout cart timeouts, and a 42% mobile bounce rate during peak flash sales.",
    solution:
      "Built a high-performance React 19 storefront running on edge runtime with optimistic UI cart updates, automated webp/avif image transformations, and multi-region CDN caching.",
    impact:
      "+41% conversion rate increase in the first 30 days, 98/100 Google Lighthouse score, and 2.1s sub-second checkout completion.",
    techStack: ["React 19", "TypeScript", "Next.js", "Tailwind CSS", "Redis Edge", "Stripe API"],
    metrics: [
      { label: "Conversion Lift", value: "+41%", detail: "In first 30 days" },
      { label: "Lighthouse Score", value: "98/100", detail: "Mobile & Desktop" },
      { label: "TTI Load Time", value: "1.1s", detail: "Down from 6.2s" },
      { label: "Cart Dropoff", value: "-28%", detail: "Streamlined checkout" },
    ],
    features: [
      "Sub-50ms Algolia instant search & filter",
      "Optimistic multi-currency cart & checkout",
      "Dynamic inventory reservation workers",
      "Zero layout shift (CLS < 0.01) responsive layout",
    ],
    image: "/work/storefront.jpg",
    video: "/work/storefront.mp4",
    site_url: "https://northline.example.com",
    featured: true,
    completionDate: "Q3 2026",
    lighthouse: {
      performance: 98,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
    },
  },
  {
    id: "proj-kroma-saas",
    title: "Kroma Cloud: Real-Time Telemetry & Systems Dashboard",
    client: "Kroma Telemetry Systems",
    tag: "Enterprise SaaS · High-Frequency UI",
    category: "SaaS & Apps",
    shortDescription:
      "High-density cloud observability dashboard streaming 50,000+ telemetry metrics per second via WebSockets with zero frame drops.",
    detailedDescription:
      "An enterprise-tier DevOps control room built for infrastructure reliability engineers. Features customizable drag-and-drop metric panels, canvas-accelerated real-time charting, automated threshold alerts, and sub-100ms cluster log filtering.",
    challenge:
      "Existing dashboard experienced catastrophic UI lockups and high client memory leakage when handling bursty time-series telemetry data.",
    solution:
      "Engineered an offscreen canvas rendering engine using Web Workers for binary stream decompression, keeping the main React render thread butter-smooth at a consistent 60 FPS.",
    impact:
      "Reduced telemetry query latency from 3.4s to 85ms across 12,000+ active servers, lowering MTTR (mean time to resolution) by 46%.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "D3 / Canvas", "WebSockets", "Node.js"],
    metrics: [
      { label: "Render Frame Rate", value: "60 FPS", detail: "Under heavy load" },
      { label: "Telemetry Latency", value: "85ms", detail: "97% reduction" },
      { label: "Active Nodes", value: "12,000+", detail: "Monitored live" },
      { label: "Memory Footprint", value: "-64%", detail: "Zero memory leaks" },
    ],
    features: [
      "Offscreen canvas charting with zero DOM thrashing",
      "Configurable widget grid with local state persistence",
      "WebSocket streaming with auto-reconnect backoff",
      "Customizable Dark/Light precision telemetry palette",
    ],
    image: "/hero/web-dev.jpg",
    site_url: "https://kroma-telemetry.example.com",
    completionDate: "Q2 2026",
    lighthouse: {
      performance: 99,
      accessibility: 98,
      bestPractices: 100,
      seo: 98,
    },
  },
  {
    id: "proj-atelier-architecture",
    title: "Atelier Monolith: Spatial Design & Editorial Showcase",
    client: "Hearth Studio Architecture",
    tag: "Editorial Web · WebGL Transitions",
    category: "Web Design",
    shortDescription:
      "An immersive digital showroom and architectural monograph featuring smooth spatial transitions, fluid typography, and bespoke project archives.",
    detailedDescription:
      "A high-fashion architectural web presence crafted for an international spatial design firm. Features dynamic theme responsiveness, buttery smooth scroll physics, and a headless CMS backend giving curators instant publishing control.",
    challenge:
      "The client needed a digital presence as tactile and luxurious as their physical spaces without sacrificing mobile load speeds or accessibility.",
    solution:
      "Developed lightweight GLSL shaders for distortion-free image transitions, synchronized with CSS custom properties and semantic accessible markup.",
    impact:
      "Won Site of the Day accolades, expanded international commission inquiries by 210%, and maintained 97 Lighthouse performance.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "WebGL Shaders", "Headless CMS"],
    metrics: [
      { label: "Inquiry Growth", value: "+210%", detail: "International commissions" },
      { label: "Avg Session", value: "4m 12s", detail: "High user engagement" },
      { label: "Page Weight", value: "840 KB", detail: "Ultra-lean assets" },
      { label: "Awwwards", value: "Honorable", detail: "Site of the Day" },
    ],
    features: [
      "Hardware-accelerated smooth spatial navigation",
      "Editorial serif and neo-grotesque typography system",
      "Adaptive high-DPI image delivery",
      "Full keyboard navigation & screen-reader parity",
    ],
    image: "/work/system.jpg",
    site_url: "https://hearth-architecture.example.com",
    completionDate: "Q2 2026",
    lighthouse: {
      performance: 97,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
    },
  },
  {
    id: "proj-veloce-fintech",
    title: "Veloce Treasury: Institutional Asset & Wealth Portal",
    client: "Veloce Capital Markets",
    tag: "Fintech Platform · Bank-Grade Security",
    category: "SaaS & Apps",
    shortDescription:
      "Institutional asset management and liquidity platform providing algorithmic currency hedging, portfolio rebalancing, and auditable ledger views.",
    detailedDescription:
      "Built with rigorous zero-trust security standards, this institutional web platform enables treasury managers to model risk, initiate programmatic transfers, and review cryptographic audit trails in real time.",
    challenge:
      "Legacy banking portal required multi-step authentication delays, clunky tables, and lacked responsive data visualization.",
    solution:
      "Created an intuitive trading interface with interactive yield curves, instant order simulations, and automated multi-factor approvals.",
    impact:
      "Facilitated over $140M in transaction volume within the first quarter with 100% compliance audit pass rate.",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Web Crypto API", "PostgreSQL", "Zod"],
    metrics: [
      { label: "Quarterly Volume", value: "$140M+", detail: "Processed seamlessly" },
      { label: "Compliance Pass", value: "100%", detail: "SOC2 Type II certified" },
      { label: "Execution Time", value: "<120ms", detail: "End-to-end confirmation" },
      { label: "Client NPS", value: "+84", detail: "Institutional score" },
    ],
    features: [
      "Client-side zero-knowledge encryption routines",
      "Interactive yield curve simulator & sensitivity models",
      "Granular team permission roles (Maker-Checker policy)",
      "Instant exportable PDF & CSV audit summaries",
    ],
    image: "/hero/studio.jpg",
    site_url: "https://veloce-treasury.example.com",
    completionDate: "Q1 2026",
    lighthouse: {
      performance: 99,
      accessibility: 98,
      bestPractices: 100,
      seo: 98,
    },
  },
  {
    id: "proj-nexus-devportal",
    title: "Nexus Developer Portal & Interactive Sandbox",
    client: "Nexus Systems Infrastructure",
    tag: "Web Development · Edge Documentation",
    category: "Web Development",
    shortDescription:
      "High-speed developer portal featuring live executable code sandboxes, full-text search, and automated OpenAPI spec synchronization.",
    detailedDescription:
      "Engineered for an API-first developer infrastructure company. Combines an MDX content pipeline, dynamic copy-to-clipboard code snippets in 6 languages, interactive request builders, and offline PWA capabilities.",
    challenge:
      "Developers found the previous documentation fragmented, slow to navigate, and lacking interactive testing capabilities.",
    solution:
      "Constructed an edge-cached documentation engine with instantaneous keyboard command palette (Cmd+K), interactive playground, and live syntax highlighting.",
    impact:
      "Reduced developer support tickets by 53% and accelerated API integration time for new clients from 4 days to 45 minutes.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "PrismJS", "Edge Cache"],
    metrics: [
      { label: "Support Tickets", value: "-53%", detail: "Self-serve resolution" },
      { label: "Time-to-Hello-World", value: "45 min", detail: "Down from 4 days" },
      { label: "Search Latency", value: "<15ms", detail: "Instant Cmd+K" },
      { label: "Lighthouse", value: "100/100", detail: "All 4 categories" },
    ],
    features: [
      "Executable in-browser cURL and SDK sandbox",
      "Sub-15ms fuzzy search across 1,200+ docs pages",
      "Automated schema validation via OpenAPI v3",
      "Instant copyable snippets in TS, Python, Go, Ruby",
    ],
    image: "/hero/design.jpg",
    site_url: "https://nexus-docs.example.com",
    completionDate: "Q1 2026",
    lighthouse: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
    },
  },
  {
    id: "proj-aperture-growth",
    title: "Aperture Kinetic DTC Funnel & Media Hub",
    client: "Aperture Co.",
    tag: "Web Development · DTC Growth",
    category: "Web Development",
    shortDescription:
      "High-velocity campaign landing page generator integrated with paid media pixels, A/B multi-variant split-testing, and dynamic customer journeys.",
    detailedDescription:
      "An automated landing experience that personalizes headlines, hero media, and pricing tiers based on inbound advertising parameters (UTM & audience segments). Synchronized directly with Meta and Google Ads APIs.",
    challenge:
      "Static landing pages converted poorly on paid social ad traffic due to high bounce rates and generic messaging.",
    solution:
      "Engineered ultra-lean, mobile-optimized dynamic templates that hydrate in under 400ms on cellular 4G connections.",
    impact:
      "Generated 5.4x blended return on ad spend (ROAS) and lowered customer acquisition cost (CAC) by 34%.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Analytics Edge", "Motion"],
    metrics: [
      { label: "Blended ROAS", value: "5.4x", detail: "Meta & Google traffic" },
      { label: "CAC Reduction", value: "-34%", detail: "Lower customer cost" },
      { label: "Mobile Speed", value: "0.4s", detail: "First Contentful Paint" },
      { label: "A/B Variants", value: "24", detail: "Multivariate testing" },
    ],
    features: [
      "Dynamic UTM-tailored headline and hero video injection",
      "Zero-latency frictionless 2-step acquisition form",
      "Native pixel deduplication & conversion API sync",
      "Micro-animations highlighting social validation",
    ],
    image: "/work/social.jpg",
    site_url: "https://aperture-growth.example.com",
    completionDate: "Q3 2026",
    lighthouse: {
      performance: 98,
      accessibility: 96,
      bestPractices: 100,
      seo: 100,
    },
  },
];
