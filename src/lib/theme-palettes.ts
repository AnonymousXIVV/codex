import type { SiteColors } from "@/types/site-editor";

export interface ThemePalette {
  id: string;
  title: string;
  subtitle: string;
  colors: Required<Pick<SiteColors, "primary" | "accent" | "background" | "cardBg" | "textMain" | "textMuted">> & SiteColors;
}

export const THEME_PALETTES: ThemePalette[] = [
  {
    id: "codex-apple",
    title: "Codex Apple",
    subtitle: "The live default. Soft canvas, Apple blue, charcoal type.",
    colors: {
      primary: "#0071e3", accent: "#0071e3", background: "#f5f5f7", cardBg: "#ffffff",
      textMain: "#1d1d1f", textMuted: "#6e6e73", secondary: "#fbfbfd", surface: "#ffffff",
      border: "#d2d2d7", inverse: "#1d1d1f", highlight: "#0077ed", ring: "#0071e3",
    },
  },
  {
    id: "ios-lumen",
    title: "iOS Lumen",
    subtitle: "Brighter product white with system blue and sky accent.",
    colors: {
      primary: "#0a84ff", accent: "#64d2ff", background: "#fbfbfd", cardBg: "#ffffff",
      textMain: "#1d1d1f", textMuted: "#86868b", secondary: "#f5f5f7", surface: "#ffffff",
      border: "rgba(0,0,0,0.06)", inverse: "#000000", highlight: "#0a84ff", ring: "#0a84ff",
    },
  },
  {
    id: "studio-noir",
    title: "Studio Noir",
    subtitle: "OLED charcoal with cool steel-blue signals.",
    colors: {
      primary: "#7eb8ff", accent: "#a8d4ff", background: "#0c0c0e", cardBg: "#161618",
      textMain: "#f5f5f7", textMuted: "#a1a1a6", secondary: "#111114", surface: "#1c1c1e",
      border: "rgba(255,255,255,0.1)", inverse: "#f5f5f7", highlight: "#7eb8ff", ring: "#7eb8ff",
    },
  },
  {
    id: "vellum",
    title: "Editorial Vellum",
    subtitle: "Warm paper, ink type, quiet bronze highlight.",
    colors: {
      primary: "#1d1d1f", accent: "#8a6a45", background: "#f6f1e8", cardBg: "#fffaf3",
      textMain: "#2a2420", textMuted: "#7a7168", secondary: "#efe6d8", surface: "#fffaf3",
      border: "rgba(42,36,32,0.12)", inverse: "#2a2420", highlight: "#8a6a45", ring: "#2a2420",
    },
  },
  {
    id: "nordic",
    title: "Nordic Mist",
    subtitle: "Cool stone and pine teal for quiet product pages.",
    colors: {
      primary: "#1f4e5f", accent: "#3f7a86", background: "#f3f5f6", cardBg: "#ffffff",
      textMain: "#1c2326", textMuted: "#5c6b70", secondary: "#e8ecee", surface: "#ffffff",
      border: "rgba(28,35,38,0.1)", inverse: "#1c2326", highlight: "#1f4e5f", ring: "#1f4e5f",
    },
  },
  {
    id: "mono",
    title: "Mono Frame",
    subtitle: "Architectural black and white, no chroma.",
    colors: {
      primary: "#111111", accent: "#111111", background: "#ffffff", cardBg: "#f4f4f5",
      textMain: "#111111", textMuted: "#52525b", secondary: "#fafafa", surface: "#ffffff",
      border: "#111111", inverse: "#111111", highlight: "#111111", ring: "#111111",
    },
  },
  {
    id: "pacific",
    title: "Pacific Depth",
    subtitle: "Teal glass on abyssal ink.",
    colors: {
      primary: "#7dd3d0", accent: "#9ee8e4", background: "#071316", cardBg: "#0e1f24",
      textMain: "#e8f6f5", textMuted: "#8fb4b1", secondary: "#0a181c", surface: "#123038",
      border: "rgba(125,211,208,0.16)", inverse: "#e8f6f5", highlight: "#7dd3d0", ring: "#7dd3d0",
    },
  },
  {
    id: "clay",
    title: "Atelier Clay",
    subtitle: "Sunlit stone with copper accent.",
    colors: {
      primary: "#9a4d2e", accent: "#c4784d", background: "#f4ece4", cardBg: "#fff8f2",
      textMain: "#3b2a22", textMuted: "#8a6f62", secondary: "#eadfd4", surface: "#fff8f2",
      border: "rgba(59,42,34,0.1)", inverse: "#3b2a22", highlight: "#9a4d2e", ring: "#9a4d2e",
    },
  },
  {
    id: "quartz",
    title: "Quartz Gallery",
    subtitle: "Gallery white with graphite type.",
    colors: {
      primary: "#3a3a3c", accent: "#636366", background: "#ffffff", cardBg: "#f7f7f8",
      textMain: "#1c1c1e", textMuted: "#8e8e93", secondary: "#f2f2f7", surface: "#ffffff",
      border: "rgba(60,60,67,0.12)", inverse: "#1c1c1e", highlight: "#3a3a3c", ring: "#3a3a3c",
    },
  },
  {
    id: "horizon",
    title: "Horizon Blue",
    subtitle: "Wide product blue on cool slate.",
    colors: {
      primary: "#155eef", accent: "#528bff", background: "#f4f6fa", cardBg: "#ffffff",
      textMain: "#101828", textMuted: "#667085", secondary: "#eef2f6", surface: "#ffffff",
      border: "rgba(16,24,40,0.08)", inverse: "#101828", highlight: "#155eef", ring: "#155eef",
    },
  },
  {
    id: "ink",
    title: "Ink Theater",
    subtitle: "True black OLED with system blue.",
    colors: {
      primary: "#0a84ff", accent: "#64d2ff", background: "#000000", cardBg: "#1c1c1e",
      textMain: "#f5f5f7", textMuted: "#8e8e93", secondary: "#111113", surface: "#2c2c2e",
      border: "rgba(255,255,255,0.12)", inverse: "#f5f5f7", highlight: "#0a84ff", ring: "#0a84ff",
    },
  },
  {
    id: "kyiv",
    title: "Kyiv Night",
    subtitle: "Navy glass and Dnipro blue.",
    colors: {
      primary: "#4ea3ff", accent: "#7ec0ff", background: "#07111c", cardBg: "#0d1b2a",
      textMain: "#eaf2fb", textMuted: "#8aa0b8", secondary: "#0a1622", surface: "#122436",
      border: "rgba(78,163,255,0.16)", inverse: "#eaf2fb", highlight: "#4ea3ff", ring: "#4ea3ff",
    },
  },
  {
    id: "soft-ios",
    title: "Soft iOS",
    subtitle: "Settings-app gray with system blue.",
    colors: {
      primary: "#007aff", accent: "#5ac8fa", background: "#f2f2f7", cardBg: "#ffffff",
      textMain: "#000000", textMuted: "#6c6c70", secondary: "#e5e5ea", surface: "#ffffff",
      border: "rgba(60,60,67,0.12)", inverse: "#000000", highlight: "#007aff", ring: "#007aff",
    },
  },
  {
    id: "forest",
    title: "Quiet Forest",
    subtitle: "Deep pine on misted green-gray.",
    colors: {
      primary: "#0f3d32", accent: "#2a6a57", background: "#f3f6f4", cardBg: "#ffffff",
      textMain: "#14221d", textMuted: "#5b6e66", secondary: "#e6eee9", surface: "#ffffff",
      border: "rgba(20,34,29,0.1)", inverse: "#14221d", highlight: "#0f3d32", ring: "#0f3d32",
    },
  },
  {
    id: "slate",
    title: "Graphite Slate",
    subtitle: "Cool architectural gray with ink.",
    colors: {
      primary: "#334155", accent: "#64748b", background: "#f8fafc", cardBg: "#ffffff",
      textMain: "#0f172a", textMuted: "#64748b", secondary: "#f1f5f9", surface: "#ffffff",
      border: "rgba(15,23,42,0.08)", inverse: "#0f172a", highlight: "#334155", ring: "#334155",
    },
  },
  {
    id: "sand",
    title: "Warm Sand",
    subtitle: "Desert linen with espresso type.",
    colors: {
      primary: "#6b4f3a", accent: "#a07858", background: "#f7f3ee", cardBg: "#fffdfb",
      textMain: "#2b2118", textMuted: "#7a6a5c", secondary: "#eee6dc", surface: "#fffdfb",
      border: "rgba(43,33,24,0.1)", inverse: "#2b2118", highlight: "#6b4f3a", ring: "#6b4f3a",
    },
  },
];

export const COLOR_SLOTS: { key: keyof SiteColors; label: string }[] = [
  { key: "primary", label: "Primary" },
  { key: "accent", label: "Accent" },
  { key: "highlight", label: "Highlight" },
  { key: "background", label: "Background" },
  { key: "surface", label: "Surface" },
  { key: "cardBg", label: "Card" },
  { key: "textMain", label: "Text" },
  { key: "textMuted", label: "Muted text" },
  { key: "secondary", label: "Secondary" },
  { key: "border", label: "Border" },
  { key: "inverse", label: "Inverse" },
  { key: "ring", label: "Focus ring" },
];
