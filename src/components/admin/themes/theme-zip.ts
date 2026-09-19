import JSZip from "jszip";
import type { SiteColors } from "@/types/site-editor";
import type { FullThemeItem, ThemeTemplateFiles } from "./theme-types";
import { buildThemeFiles } from "./theme-files";

function headerValue(css: string, key: string) {
  const match = css.match(new RegExp(`${key}:\\s*(.+)`, "i"));
  return match?.[1]?.trim().split("\n")[0]?.replace(/\*\/$/, "").trim() || "";
}

function cssVar(css: string, name: string) {
  const match = css.match(new RegExp(`${name}:\\s*(#[0-9a-fA-F]{3,8}|rgba?\\([^)]+\\))`));
  return match?.[1]?.trim();
}

function slugify(name: string) {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .slice(0, 40) || `uploaded-${Date.now()}`
  );
}

function guessHero(css: string, name: string): FullThemeItem["heroLayout"] {
  const blob = `${css} ${name}`.toLowerCase();
  if (blob.includes("bento") || blob.includes("grid")) return "bento";
  if (blob.includes("editorial") || blob.includes("serif") || blob.includes("magazine")) return "editorial";
  if (blob.includes("split")) return "split";
  if (blob.includes("center")) return "centered";
  return "streamer";
}

function guessHeader(css: string, name: string): FullThemeItem["headerStyle"] {
  const blob = `${css} ${name}`.toLowerCase();
  if (blob.includes("classic") || blob.includes("masthead")) return "classic";
  if (blob.includes("minimal") || blob.includes("hairline")) return "minimal";
  if (blob.includes("sticky")) return "sticky";
  return "floating";
}

export async function parseThemeZip(file: File): Promise<FullThemeItem> {
  const zip = await JSZip.loadAsync(file);
  const paths = Object.keys(zip.files).filter((p) => !zip.files[p].dir);

  const find = (name: string) =>
    paths.find((p) => p.replace(/\\/g, "/").toLowerCase().endsWith(`/${name}`) || p.toLowerCase() === name);

  const read = async (name: string) => {
    const path = find(name);
    if (!path) return "";
    return zip.file(path)?.async("string") || "";
  };

  const styleCss = await read("style.css");
  const functionsPhp = await read("functions.php");
  const themeJson = await read("theme.json");
  const headerPhp = await read("header.php");
  const footerPhp = await read("footer.php");
  const indexPhp = await read("index.php");

  const fallbackName = file.name.replace(/\.zip$/i, "").replace(/[-_]/g, " ");
  const name =
    headerValue(styleCss, "Theme Name") ||
    fallbackName
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ") ||
    "Uploaded Theme";

  const author = headerValue(styleCss, "Author") || "Local Developer";
  const version = headerValue(styleCss, "Version") || "1.0.0";
  const description =
    headerValue(styleCss, "Description") ||
    `Custom theme package “${name}” extracted from ${file.name}.`;
  const tagsRaw = headerValue(styleCss, "Tags");
  const tags = tagsRaw
    ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean)
    : ["Custom Package", "Uploaded", "FSE Compatible"];

  const dark = /dark|noir|night|oled|ink/i.test(`${name} ${description} ${styleCss.slice(0, 800)}`);
  const colors: SiteColors = {
    primary: cssVar(styleCss, "--color-primary") || (dark ? "#7dd3d0" : "#0071e3"),
    accent: cssVar(styleCss, "--color-accent") || (dark ? "#9ee8e4" : "#0071e3"),
    background: cssVar(styleCss, "--color-background") || (dark ? "#0c0c0e" : "#f5f5f7"),
    cardBg: cssVar(styleCss, "--color-card") || (dark ? "#161618" : "#ffffff"),
    textMain: cssVar(styleCss, "--color-foreground") || (dark ? "#f5f5f7" : "#1d1d1f"),
    textMuted: cssVar(styleCss, "--color-muted-foreground") || (dark ? "#a1a1a6" : "#6e6e73"),
    secondary: cssVar(styleCss, "--color-secondary") || (dark ? "#111114" : "#fbfbfd"),
    surface: cssVar(styleCss, "--color-surface") || (dark ? "#1c1c1e" : "#ffffff"),
    border: cssVar(styleCss, "--color-border") || (dark ? "rgba(255,255,255,0.12)" : "#d2d2d7"),
    inverse: dark ? "#f5f5f7" : "#1d1d1f",
    highlight: cssVar(styleCss, "--color-highlight") || cssVar(styleCss, "--color-primary") || "#0071e3",
    ring: cssVar(styleCss, "--color-primary") || "#0071e3",
  };

  const fontBlob = `${styleCss} ${themeJson}`.toLowerCase();
  const fontFamily: FullThemeItem["fontFamily"] = fontBlob.includes("playfair")
    ? "playfair"
    : fontBlob.includes("syne")
      ? "syne"
      : fontBlob.includes("inter") || fontBlob.includes("jakarta")
        ? "inter"
        : "system";

  const seed: Omit<FullThemeItem, "files"> = {
    id: `${slugify(name)}-${Date.now().toString(36)}`,
    name,
    version,
    author,
    authorUrl: headerValue(styleCss, "Author URI") || "https://codexdynamics.io",
    description,
    tags,
    rating: 5,
    reviewsCount: 1,
    screenshotUrl: dark ? "/hero/studio.jpg" : "/studio/design.jpg",
    colors,
    fontFamily,
    headerStyle: guessHeader(styleCss + headerPhp, name),
    containerWidth: /1440|wide/.test(styleCss) ? "1440px" : "1280px",
    borderRadius: /sharp|0px/.test(styleCss) ? "sharp" : "modern",
    heroLayout: guessHero(styleCss + indexPhp, name),
    activeCount: "Local",
    category: "installed",
    isInstalled: true,
    isCustom: true,
    isBlockTheme: true,
    phpVersion: "8.1+",
    wpVersion: "6.5+",
  };

  const generated = buildThemeFiles(seed);
  const files: ThemeTemplateFiles = {
    "style.css": styleCss || generated["style.css"],
    "functions.php": functionsPhp || generated["functions.php"],
    "theme.json": themeJson || generated["theme.json"],
    "header.php": headerPhp || generated["header.php"],
    "footer.php": footerPhp || generated["footer.php"],
    "index.php": indexPhp || generated["index.php"],
  };

  return { ...seed, files };
}

export function starterTheme(kind: "child" | "editorial" | "saas" | "dark"): FullThemeItem {
  const presets: Record<typeof kind, Omit<FullThemeItem, "files">> = {
    child: {
      id: `codex-child-${Date.now()}`,
      name: "Codex Dynamics Child",
      version: "1.0.0",
      author: "Site Administrator",
      authorUrl: "https://codexdynamics.io",
      description: "Official child of Codex Dynamics Pro. Inherits the floating island and streamer, ready for CSS overrides.",
      tags: ["Child", "Apple", "Island", "Starter"],
      rating: 5,
      reviewsCount: 1,
      screenshotUrl: "/hero/studio.jpg",
      colors: {
        primary: "#0071e3", accent: "#0071e3", background: "#f5f5f7", cardBg: "#ffffff",
        textMain: "#1d1d1f", textMuted: "#6e6e73", secondary: "#fbfbfd", surface: "#ffffff",
        border: "#d2d2d7", inverse: "#1d1d1f", highlight: "#0077ed", ring: "#0071e3",
      },
      fontFamily: "system",
      headerStyle: "floating",
      containerWidth: "1280px",
      borderRadius: "modern",
      heroLayout: "streamer",
      activeCount: "Local",
      category: "installed",
      isInstalled: true,
      isCustom: true,
      isBlockTheme: true,
    },
    editorial: {
      id: `editorial-pack-${Date.now()}`,
      name: "Minimalist High-Contrast Editorial",
      version: "1.0.0",
      author: "Atelier Press",
      authorUrl: "https://codexdynamics.io",
      description: "Serif masthead, ink on paper, editorial hero — a print house packed as a WordPress theme.",
      tags: ["Editorial", "Serif", "Paper", "Starter"],
      rating: 5,
      reviewsCount: 1,
      screenshotUrl: "/studio/design.jpg",
      colors: {
        primary: "#1d1d1f", accent: "#8a6a45", background: "#f6f1e8", cardBg: "#fffaf3",
        textMain: "#2a2420", textMuted: "#7a7168", secondary: "#efe6d8", surface: "#fffaf3",
        border: "rgba(42,36,32,0.12)", inverse: "#2a2420", highlight: "#8a6a45", ring: "#2a2420",
      },
      fontFamily: "playfair",
      headerStyle: "classic",
      containerWidth: "1200px",
      borderRadius: "clean",
      heroLayout: "editorial",
      activeCount: "Local",
      category: "installed",
      isInstalled: true,
      isCustom: true,
      isBlockTheme: true,
    },
    saas: {
      id: `saas-launch-${Date.now()}`,
      name: "SaaS Rocket Launchpad",
      version: "1.0.0",
      author: "Codex Studio",
      authorUrl: "https://codexdynamics.io",
      description: "Bento first screen, sticky product bar, spacious type — a launch microsite for software.",
      tags: ["SaaS", "Bento", "Product", "Starter"],
      rating: 5,
      reviewsCount: 1,
      screenshotUrl: "/hero/design.jpg",
      colors: {
        primary: "#155eef", accent: "#528bff", background: "#f4f6fa", cardBg: "#ffffff",
        textMain: "#101828", textMuted: "#667085", secondary: "#eef2f6", surface: "#ffffff",
        border: "rgba(16,24,40,0.08)", inverse: "#101828", highlight: "#155eef", ring: "#155eef",
      },
      fontFamily: "inter",
      headerStyle: "sticky",
      containerWidth: "1440px",
      borderRadius: "modern",
      heroLayout: "bento",
      activeCount: "Local",
      category: "installed",
      isInstalled: true,
      isCustom: true,
      isBlockTheme: true,
    },
    dark: {
      id: `dark-fse-${Date.now()}`,
      name: "Dark Tech Studio FSE",
      version: "1.0.0",
      author: "Codex Studio",
      authorUrl: "https://codexdynamics.io",
      description: "OLED black, split cinema, teal signals — a night-mode Full Site Editing package.",
      tags: ["Dark", "FSE", "Split", "Starter"],
      rating: 5,
      reviewsCount: 1,
      screenshotUrl: "/hero/studio.jpg",
      colors: {
        primary: "#7dd3d0", accent: "#9ee8e4", background: "#071316", cardBg: "#0e1f24",
        textMain: "#e8f6f5", textMuted: "#8fb4b1", secondary: "#0a181c", surface: "#123038",
        border: "rgba(125,211,208,0.16)", inverse: "#e8f6f5", highlight: "#7dd3d0", ring: "#7dd3d0",
      },
      fontFamily: "syne",
      headerStyle: "floating",
      containerWidth: "1280px",
      borderRadius: "modern",
      heroLayout: "split",
      activeCount: "Local",
      category: "installed",
      isInstalled: true,
      isCustom: true,
      isBlockTheme: true,
    },
  };

  const seed = presets[kind];
  return { ...seed, files: buildThemeFiles(seed) };
}
