import type { CSSProperties } from "react";
import type { SiteColors, SiteConfig, ThemeSettings } from "@/types/site-editor";
import type { FullThemeItem, ThemeLayoutSettings } from "@/components/admin/themes/theme-types";

export const DEFAULT_THEME_ID = "codex-pro";

export const DEFAULT_HOME_SEQUENCE = [
  "hero",
  "highlights",
  "portfolio",
  "results",
  "reviews",
  "about",
  "services",
  "studio",
  "blog",
  "contact",
] as const;

export const THEME_COMPONENT_IDS = [
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
  "tidio-chat-widget",
  "elementor-engine",
] as const;

export type ThemeComponentId = (typeof THEME_COMPONENT_IDS)[number];

export const DEFAULT_ENABLED_COMPONENTS: string[] = [
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
];

const CAMEL_TO_KEBAB: Record<string, string> = {
  headerBuilder: "header-builder",
  elementorEngine: "elementor-engine",
  gutenbergBlocks: "gutenberg-blocks",
  footerWidgets: "footer-widgets",
  stickyContactDock: "sticky-contact-dock",
  videoHero: "hero-clip",
  highlightsBento: "bento-highlights",
  portfolioShowcase: "portfolio-showcase",
  resultsCounter: "results-counter",
  reviewsSlider: "reviews-slider",
  tidioChat: "tidio-chat-widget",
  megaMenu: "header-builder",
  mobileDrawer: "header-builder",
};

export type PreviewPage = "home" | "work" | "services" | "studio" | "blog" | "contact";

export function isDefaultThemeId(id?: string | null) {
  return !id || id === DEFAULT_THEME_ID;
}

export function isDarkHex(hex?: string) {
  if (!hex) return false;
  const h = hex.trim().toLowerCase();
  const normalized =
    h.length === 4 && h.startsWith("#")
      ? `#${h[1]}${h[1]}${h[2]}${h[2]}${h[3]}${h[3]}`
      : h;
  if (normalized.length !== 7 || !normalized.startsWith("#")) return false;
  const r = parseInt(normalized.slice(1, 3), 16);
  const g = parseInt(normalized.slice(3, 5), 16);
  const b = parseInt(normalized.slice(5, 7), 16);
  if ([r, g, b].some((n) => Number.isNaN(n))) return false;
  return (r * 299 + g * 587 + b * 114) / 1000 < 140;
}

export function normalizeComponentIds(active: ThemeSettings["activeComponents"] | undefined): string[] {
  if (!active) return [...DEFAULT_ENABLED_COMPONENTS];
  if (Array.isArray(active)) {
    return active.filter((id) => typeof id === "string");
  }
  if (typeof active === "object") {
    const ids: string[] = [];
    const seen = new Set<string>();
    for (const [key, value] of Object.entries(active)) {
      const id = CAMEL_TO_KEBAB[key] || key;
      seen.add(id);
      if (value) ids.push(id);
    }
    for (const id of DEFAULT_ENABLED_COMPONENTS) {
      if (!seen.has(id)) ids.push(id);
    }
    return ids.length ? ids : [...DEFAULT_ENABLED_COMPONENTS];
  }
  return [...DEFAULT_ENABLED_COMPONENTS];
}

export function isComponentEnabled(config: SiteConfig, id: string) {
  return normalizeComponentIds(config.theme?.activeComponents).includes(id);
}

export function resolveFontPair(font?: string): { display: string; sans: string } {
  switch (font) {
    case "playfair":
      return {
        display: "'Playfair Display', Georgia, serif",
        sans: "'Inter', system-ui, sans-serif",
      };
    case "syne":
      return {
        display: "'Syne', sans-serif",
        sans: "'Space Grotesk', system-ui, sans-serif",
      };
    case "inter":
      return {
        display: "'Plus Jakarta Sans', 'Inter', sans-serif",
        sans: "'Plus Jakarta Sans', 'Inter', sans-serif",
      };
    case "newsreader":
      return {
        display: "'Newsreader', Georgia, serif",
        sans: "'Inter', system-ui, sans-serif",
      };
    default:
      return {
        display: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
        sans: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif",
      };
  }
}

export function radiusTokens(br?: string) {
  switch (br) {
    case "sharp":
      return { sm: "0px", md: "2px", lg: "4px", xl: "6px", xxl: "8px" };
    case "clean":
      return { sm: "4px", md: "8px", lg: "12px", xl: "16px", xxl: "20px" };
    case "pill":
      return { sm: "9999px", md: "9999px", lg: "24px", xl: "36px", xxl: "48px" };
    case "modern":
    default:
      return { sm: "8px", md: "12px", lg: "18px", xl: "28px", xxl: "36px" };
  }
}

export function typeScalePx(scale?: string) {
  switch (scale) {
    case "compact":
      return 15;
    case "spacious":
      return 17;
    case "editorial":
    case "large":
      return 18;
    case "normal":
    case "standard":
    default:
      return 16;
  }
}

export function isCanonicalDefaultLayout(theme?: ThemeSettings) {
  if (!theme) return true;
  if (!isDefaultThemeId(theme.activeTheme)) return false;
  const order = theme.layout?.sectionsOrder || theme.sectionsOrder;
  if (order && order.join() !== DEFAULT_HOME_SEQUENCE.join()) return false;
  const hero = theme.heroLayout || theme.layout?.heroLayout;
  if (hero && hero !== "streamer") return false;
  const header = theme.headerStyle;
  if (header && header !== "floating") return false;
  return true;
}

export function resolveSectionsOrder(theme?: ThemeSettings): string[] {
  const order = theme?.layout?.sectionsOrder || theme?.sectionsOrder;
  if (order && order.length) return order;
  return [...DEFAULT_HOME_SEQUENCE];
}

export function resolveSectionVisibility(theme?: ThemeSettings): Record<string, boolean> {
  const vis = theme?.layout?.sectionVisibility;
  if (vis) return vis;
  return Object.fromEntries(DEFAULT_HOME_SEQUENCE.map((id) => [id, true]));
}

export function buildThemeStyle(config: SiteConfig): CSSProperties {
  const c = config.colors || ({} as SiteColors);
  const t = config.theme;
  const fonts = resolveFontPair(t?.fontFamily);
  const radius = radiusTokens(t?.borderRadius);
  const scale = t?.fontSizeScale || t?.layout?.fontSizeScale;
  const leading = t?.lineHeight;
  const cw = t?.containerWidth || "1280px";
  const dark = isDarkHex(c.background);
  const primaryFg = isDarkHex(c.primary) ? "#ffffff" : "#0b0b0d";

  const style: Record<string, string> = {
    "--color-primary": c.primary || "#0071e3",
    "--color-primary-foreground": primaryFg,
    "--color-blue": c.primary || "#0071e3",
    "--color-blue-hover": c.highlight || c.accent || c.primary || "#0077ed",
    "--color-brand": c.primary || "#0071e3",
    "--color-ring": c.ring || c.primary || "#0071e3",
    "--color-accent": c.accent || c.primary || "#0071e3",
    "--color-accent-foreground": primaryFg,
    "--color-background": c.background || "#f5f5f7",
    "--color-site-bg": c.background || "#f5f5f7",
    "--color-fill": c.background || "#f5f5f7",
    "--color-fill-elevated": c.secondary || c.background || "#fbfbfd",
    "--color-secondary": c.secondary || c.background || "#f5f5f7",
    "--color-card": c.cardBg || "#ffffff",
    "--color-site-card": c.cardBg || "#ffffff",
    "--color-paper": dark ? (c.textMain || "#f5f5f7") : "#ffffff",
    "--color-surface": c.surface || c.cardBg || "#ffffff",
    "--color-foreground": c.textMain || "#1d1d1f",
    "--color-label": c.textMain || "#1d1d1f",
    "--color-card-foreground": c.textMain || "#1d1d1f",
    "--color-muted-foreground": c.textMuted || "#6e6e73",
    "--color-subtle": c.textMuted || "#6e6e73",
    "--color-border": c.border || (dark ? "rgba(255,255,255,0.14)" : "#d2d2d7"),
    "--color-hairline": c.border || (dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"),
    "--color-highlight": c.highlight || c.accent || c.primary || "#0071e3",
    "--color-inverse": c.inverse || (dark ? "#f5f5f7" : "#1d1d1f"),
    "--font-display": fonts.display,
    "--font-sans": fonts.sans,
    "--radius-sm": radius.sm,
    "--radius-md": radius.md,
    "--radius-lg": radius.lg,
    "--radius-xl": radius.xl,
    "--radius-2xl": radius.xxl,
    "--container-max": cw === "full" ? "100%" : cw,
    fontFamily: fonts.sans,
  };

  if (scale && scale !== "normal" && scale !== "standard") {
    style["font-size"] = `${typeScalePx(scale)}px`;
  }
  if (typeof leading === "number" && leading > 0) {
    style["--body-leading"] = String(leading);
    style["line-height"] = String(leading);
  }

  return style as CSSProperties;
}

export function themeToSettings(theme: FullThemeItem): ThemeSettings {
  const layout: ThemeLayoutSettings = {
    heroLayout: theme.heroLayout || theme.layout?.heroLayout || "streamer",
    sectionsOrder: theme.layout?.sectionsOrder || [...DEFAULT_HOME_SEQUENCE],
    sectionVisibility:
      theme.layout?.sectionVisibility ||
      Object.fromEntries(DEFAULT_HOME_SEQUENCE.map((id) => [id, true])),
    cardStyle: theme.layout?.cardStyle || "glass",
    fontSizeScale: theme.layout?.fontSizeScale || "normal",
  };

  return {
    activeTheme: theme.id,
    preset: theme.id,
    fontFamily: theme.fontFamily,
    containerWidth: theme.containerWidth,
    borderRadius: theme.borderRadius,
    headerStyle: theme.headerStyle,
    heroLayout: layout.heroLayout,
    fontSizeScale: layout.fontSizeScale,
    cardStyle: layout.cardStyle,
    sectionsOrder: layout.sectionsOrder,
    layout,
    customCss: theme.customCss || "",
    activeComponents: [...DEFAULT_ENABLED_COMPONENTS],
  };
}

export function applyThemeToConfig(
  config: SiteConfig,
  theme: FullThemeItem,
  colorOverride?: SiteColors,
): SiteConfig {
  return {
    ...config,
    colors: {
      ...config.colors,
      ...theme.colors,
      ...(colorOverride || {}),
    },
    theme: {
      ...config.theme,
      ...themeToSettings(theme),
    },
  };
}

export function hrefToPreviewPage(href: string): PreviewPage {
  if (href.includes("work") || href.includes("portfolio")) return "work";
  if (href.includes("capabilities") || href.includes("services")) return "services";
  if (href.includes("studio") || href.includes("process") || href.includes("about")) return "studio";
  if (href.includes("insights") || href.includes("blog")) return "blog";
  if (href.includes("contact")) return "contact";
  return "home";
}

export function patchSiteTheme(config: SiteConfig, patch: Partial<ThemeSettings>): SiteConfig {
  return {
    ...config,
    theme: {
      activeTheme: DEFAULT_THEME_ID,
      fontFamily: "system",
      containerWidth: "1280px",
      borderRadius: "modern",
      headerStyle: "floating",
      ...config.theme,
      ...patch,
      activeTheme: patch.activeTheme || config.theme?.activeTheme || DEFAULT_THEME_ID,
    },
  };
}

export async function persistSiteConfig(config: SiteConfig) {
  const res = await fetch("/api/crm/action", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "save_site_content",
      payload: { config },
    }),
  });
  if (!res.ok) {
    throw new Error(`Could not save site config (${res.status})`);
  }
  return res.json().catch(() => ({}));
}
