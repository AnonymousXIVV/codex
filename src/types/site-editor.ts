export interface SocialContact {
  id: string;
  type: "whatsapp" | "telegram" | "viber" | "phone" | "email" | "instagram" | "facebook" | "linkedin" | "twitter" | "github" | "custom";
  label: string;
  value: string;
  href?: string;
  isPrimary?: boolean;
  platform?: string;
}

export interface AddressItem {
  id: string;
  label: string;
  street: string;
  city: string;
  fullAddress: string;
  lat: number;
  lng: number;
  isPrimary?: boolean;
}

export interface SiteColors {
  primary: string;
  background: string;
  cardBg: string;
  textMain: string;
  textMuted: string;
  accent: string;
  secondary?: string;
  border?: string;
  surface?: string;
  inverse?: string;
  highlight?: string;
  ring?: string;
}

export interface HeroClipItem {
  id: string;
  label: string;
  line: string;
  src: string;
  poster: string;
  title?: string;
  videoUrl?: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export interface StudioImageItem {
  id: string;
  src: string;
  alt: string;
  label?: string;
  className?: string;
}

export interface PrincipleItem {
  title: string;
  copy: string;
}

export interface ServiceItem {
  id: string;
  kicker: string;
  title: string;
  description: string;
  points: string[];
  src: string;
  poster: string;
}

export interface HighlightItem {
  href: string;
  kicker: string;
  title: string;
  copy: string;
}

export interface ResultMetric {
  id?: string;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export interface SiteConfig {
  siteName: string;
  siteTagline?: string;
  badgeText?: string;
  copyrightYear: string;
  formSubmitEmail: string;
  colors: SiteColors;
  socialContacts: SocialContact[];
  addresses: AddressItem[];
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    clips: HeroClipItem[];
    [key: string]: any;
  };
  highlights: {
    items: HighlightItem[];
    [key: string]: any;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
    [key: string]: any;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    steps: ProcessStepItem[];
    gallery: StudioImageItem[];
    [key: string]: any;
  };
  studio: {
    badge: string;
    title: string;
    subtitle: string;
    heroImage: string;
    heroImageAlt: string;
    studioCityTag: string;
    studioLocationTag: string;
    principles: PrincipleItem[];
    [key: string]: any;
  };
  results: {
    badge: string;
    title: string;
    subtitle: string;
    metrics: ResultMetric[];
    [key: string]: any;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    responseTimeText: string;
    phoneCardTitle: string;
    phoneCardSubtitle: string;
    emailCardTitle: string;
    emailCardSubtitle: string;
    locationCardTitle: string;
    locationCardSubtitle: string;
    [key: string]: any;
  };
  footer: {
    tagline: string;
    copyrightText: string;
    [key: string]: any;
  };
  theme?: ThemeSettings;
  tidio?: TidioSettings;
  [key: string]: any;
}

export interface ThemeSettings {
  activeTheme: string;
  preset?: string;
  fontFamily: "system" | "inter" | "playfair" | "syne" | string;
  containerWidth: "1200px" | "1280px" | "1440px" | "full";
  borderRadius: "sharp" | "clean" | "modern" | "pill";
  headerStyle: "floating" | "sticky" | "classic" | "minimal";
  heroLayout?: "streamer" | "split" | "centered" | "editorial" | "bento";
  fontSizeScale?: "compact" | "normal" | "standard" | "spacious" | "editorial" | "large";
  lineHeight?: number;
  scaleRatio?: number;
  cardStyle?: "flat" | "elevated" | "bordered" | "glass";
  sectionsOrder?: string[];
  activeComponents?: string[] | {
    headerBuilder?: boolean;
    elementorEngine?: boolean;
    gutenbergBlocks?: boolean;
    footerWidgets?: boolean;
    megaMenu?: boolean;
    stickyContactDock?: boolean;
    mobileDrawer?: boolean;
    videoHero?: boolean;
    highlightsBento?: boolean;
    portfolioShowcase?: boolean;
    resultsCounter?: boolean;
    reviewsSlider?: boolean;
    tidioChat?: boolean;
    [key: string]: boolean | undefined;
  };
  layout?: {
    heroLayout?: "streamer" | "split" | "centered" | "editorial" | "bento";
    sectionsOrder?: string[];
    sectionVisibility?: Record<string, boolean>;
    cardStyle?: "flat" | "elevated" | "bordered" | "glass";
    fontSizeScale?: "compact" | "normal" | "spacious" | "editorial";
    [key: string]: any;
  };
  customCss?: string;
  [key: string]: any;
}

export interface TidioSettings {
  enabled: boolean;
  publicKey: string;
  disableOnAdmin: boolean;
  hideOnMobile: boolean;
  position: "bottom-right" | "bottom-left";
  welcomeMessage?: string;
}

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  siteName: "Codex Dynamics",
  copyrightYear: "2026",
  formSubmitEmail: "codexdynamix@gmail.com",

  colors: {
    primary: "#0071e3",
    background: "#f5f5f7",
    cardBg: "#ffffff",
    textMain: "#1d1d1f",
    textMuted: "#6e6e73",
    accent: "#0071e3",
  },

  socialContacts: [
    {
      id: "wa-1",
      type: "whatsapp",
      label: "Main WhatsApp",
      value: "+380636406783",
      href: "https://wa.me/380636406783",
      isPrimary: true,
    },
    {
      id: "wa-2",
      type: "whatsapp",
      label: "Support Desk WhatsApp",
      value: "+380636406783",
      href: "https://wa.me/380636406783",
      isPrimary: false,
    },
    {
      id: "ph-1",
      type: "phone",
      label: "Direct Call / Desk",
      value: "+380 63 640 6783",
      href: "tel:+380636406783",
      isPrimary: true,
    },
    {
      id: "tg-1",
      type: "telegram",
      label: "Official Telegram",
      value: "+380636406783",
      href: "https://t.me/+380636406783",
      isPrimary: true,
    },
    {
      id: "vb-1",
      type: "viber",
      label: "Direct Viber",
      value: "+380636406783",
      href: "viber://chat?number=%2B380636406783",
      isPrimary: true,
    },
    {
      id: "em-1",
      type: "email",
      label: "Primary Email",
      value: "codexdynamix@gmail.com",
      href: "mailto:codexdynamix@gmail.com",
      isPrimary: true,
    },
    {
      id: "ig-1",
      type: "instagram",
      label: "Instagram Profile",
      value: "@codex_dynamics",
      href: "https://www.instagram.com/codex_dynamics/",
      isPrimary: true,
    },
    {
      id: "fb-1",
      type: "facebook",
      label: "Facebook Page",
      value: "Codex Dynamics",
      href: "https://www.facebook.com/profile.php?id=61571219783449",
      isPrimary: true,
    },
  ],

  addresses: [
    {
      id: "addr-1",
      label: "Kyiv Studio (HQ)",
      street: "Sportyvna, 1A",
      city: "Kyiv, 012023, Ukraine",
      fullAddress: "Sportyvna, 1A, Kyiv, 012023, Ukraine",
      lat: 50.438743,
      lng: 30.523177,
      isPrimary: true,
    },
    {
      id: "addr-2",
      label: "Gulliver Tower Desk",
      street: "Ploshcha Sportyvna, 1A",
      city: "Kyiv, Ukraine",
      fullAddress: "Ploshcha Sportyvna 1A, Gulliver Tower A, Kyiv",
      lat: 50.438743,
      lng: 30.523177,
      isPrimary: false,
    },
  ],

  hero: {
    badge: "Codex Dynamics",
    title: "Precision on every screen.",
    subtitle:
      "Websites, web apps, and social campaigns — composed with the care of a product launch.",
    clips: [
      {
        id: "clip-1",
        label: "Codex Dynamics",
        line: "The studio. The standard.",
        src: "/hero/studio.mp4",
        poster: "/hero/studio.jpg",
      },
      {
        id: "clip-2",
        label: "Web Development",
        line: "Websites and web apps, assembled like a product.",
        src: "/hero/web-dev.mp4",
        poster: "/hero/web-dev.jpg",
      },
      {
        id: "clip-3",
        label: "Web Design",
        line: "Type, color, and layout as one material.",
        src: "/hero/design.mp4",
        poster: "/hero/design.jpg",
      },
      {
        id: "clip-4",
        label: "Social Media",
        line: "Content, campaigns, and growth — in one system.",
        src: "/hero/social.mp4",
        poster: "/hero/social.jpg",
      },
    ],
  },

  highlights: {
    items: [
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
    ],
  },

  services: {
    badge: "Services",
    title: "Three things. Done as one.",
    subtitle:
      "Web development, web design, and social media marketing — the site, the system, and the signal that grows it.",
    items: [
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
    ],
  },

  about: {
    badge: "How we work",
    title: "From brief to live campaigns.",
    subtitle:
      "Design, development, and social media in one loop — not a handoff graveyard. Typical engagement: four to six weeks.",
    steps: [
      {
        number: "01",
        title: "Brief",
        description: "Goals, audience, offer, and the social data we already have.",
      },
      {
        number: "02",
        title: "Web Design",
        description: "Wireframes, brand system, and high-fidelity pages that convert.",
      },
      {
        number: "03",
        title: "Web Development",
        description: "Production websites and web apps — fast, accessible, built to last.",
      },
      {
        number: "04",
        title: "Launch",
        description: "QA, analytics, pixels, and a cutover that does not break ads.",
      },
      {
        number: "05",
        title: "Social Growth",
        description: "Creative tests, audiences, and landing-page loops after ship.",
      },
    ],
    gallery: [
      {
        id: "gal-1",
        src: "/studio/interior.jpg",
        alt: "The Codex Dynamics studio overlooking the city",
        label: "Studio Interior",
      },
      {
        id: "gal-2",
        src: "/studio/code.jpg",
        alt: "Engineer writing production code",
        label: "Production Engineering",
      },
      {
        id: "gal-3",
        src: "/studio/design.jpg",
        alt: "Designer reviewing a web interface",
        label: "Design Review",
      },
      {
        id: "gal-4",
        src: "/studio/wireframes.jpg",
        alt: "Website wireframes on a desk",
        label: "Wireframes & System",
      },
      {
        id: "gal-5",
        src: "/studio/social.jpg",
        alt: "Social media creative on a phone",
        label: "Social Media Feed",
      },
      {
        id: "gal-6",
        src: "/studio/analytics.jpg",
        alt: "Performance dashboard and analytics",
        label: "Analytics & Telemetry",
      },
    ],
  },

  studio: {
    badge: "The studio",
    title: "A small team. A high standard.",
    subtitle:
      "Codex Dynamics is a studio, not a hiring board. Senior design, development, and social sit on the same desk — and stay on the work until it performs.",
    heroImage: "/studio/interior.jpg",
    heroImageAlt: "Codex Dynamics studio, Sportyvna 1A, Kyiv",
    studioCityTag: "Kyiv",
    studioLocationTag: "Gulliver · Open in Maps",
    principles: [
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
    ],
  },

  results: {
    badge: "Proof",
    title: "Measured the way a board measures it.",
    subtitle: "Speed, conversion, and paid social return — not a 40-page deck.",
    metrics: [
      { value: 140, suffix: "+", label: "Websites shipped", decimals: 0 },
      { value: 4.8, suffix: "x", label: "Avg. social ROAS", decimals: 1 },
      { value: 28, suffix: " days", label: "Typical build", decimals: 0 },
      { value: 60, suffix: "+", label: "Brands in market", decimals: 0 },
    ],
  },

  contact: {
    badge: "Start a project",
    title: "Tell us what you want to build.",
    subtitle: "Drop a brief, a loom, or a note. A partner replies within one business day.",
    responseTimeText: "Typically responds within 2 hours during business hours.",
    phoneCardTitle: "Call the desk",
    phoneCardSubtitle: "Mon–Fri · 9:00–19:00 EET",
    emailCardTitle: "Email us",
    emailCardSubtitle: "Briefs, RFPs, decks",
    locationCardTitle: "Kyiv Studio",
    locationCardSubtitle: "Visits by appointment",
  },

  footer: {
    tagline:
      "Web development, web design, and social media marketing. We build the site, then we grow it.",
    copyrightText: "Codex Dynamics. All rights reserved.",
  },

  theme: {
    activeTheme: "codex-pro",
    preset: "default",
    fontFamily: "system",
    containerWidth: "1280px",
    borderRadius: "modern",
    headerStyle: "floating",
    heroLayout: "streamer",
    fontSizeScale: "normal",
    cardStyle: "glass",
    activeComponents: [
      "header-builder",
      "hero-clip",
      "bento-highlights",
      "portfolio-showcase",
      "results-counter",
      "reviews-slider",
      "services-carousel",
      "gutenberg-blocks",
      "footer-widgets",
      "sticky-contact-dock",
      "elementor-engine",
    ],
  },

  tidio: {
    enabled: false,
    publicKey: "",
    disableOnAdmin: true,
    hideOnMobile: false,
    position: "bottom-right",
    welcomeMessage: "Hi! How can we help you today? Leave us a message and our team will get right back to you.",
  },
};
