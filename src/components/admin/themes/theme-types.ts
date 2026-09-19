import type { SiteColors } from "@/types/site-editor";

export interface ThemeTemplateFiles {
  "style.css": string;
  "functions.php": string;
  "theme.json": string;
  "header.php": string;
  "footer.php": string;
  "index.php": string;
  [filename: string]: string;
}

export interface ThemeLayoutSettings {
  heroLayout: "streamer" | "split" | "centered" | "editorial" | "bento";
  sectionsOrder?: string[];
  sectionVisibility?: Record<string, boolean>;
  cardStyle?: "flat" | "elevated" | "bordered" | "glass";
  fontSizeScale?: "compact" | "normal" | "spacious" | "editorial";
}

export interface FullThemeItem {
  id: string;
  name: string;
  version: string;
  author: string;
  authorUrl: string;
  description: string;
  tags: string[];
  rating: number;
  reviewsCount: number;
  screenshotUrl: string;
  colors: SiteColors;
  fontFamily: "system" | "inter" | "playfair" | "syne";
  headerStyle: "floating" | "sticky" | "classic" | "minimal";
  containerWidth: "1200px" | "1280px" | "1440px" | "full";
  borderRadius: "sharp" | "clean" | "modern" | "pill";
  heroLayout?: "streamer" | "split" | "centered" | "editorial" | "bento";
  layout?: ThemeLayoutSettings;
  customCss?: string;
  activeCount: string;
  category: "all" | "installed" | "block" | "popular" | "favorites";
  isInstalled?: boolean;
  isCustom?: boolean;
  isBlockTheme?: boolean;
  phpVersion?: string;
  wpVersion?: string;
  isDefault?: boolean;
  files: ThemeTemplateFiles;
}
