import React, { useState } from "react";
import {
  Palette,
  Check,
  Plus,
  Search,
  Sparkles,
  Sliders,
  Layers,
  Layout,
  Type,
  Code,
  Laptop,
  Eye,
  ExternalLink,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import { toast } from "sonner";
import { useSiteConfig } from "@/context/SiteConfigContext";
import type { SiteColors } from "@/types/site-editor";
import type { FullThemeItem } from "./themes/theme-types";
import { DEFAULT_THEMES } from "./themes/default-themes";
import { ThemeLiveMockup } from "./themes/ThemeLiveMockup";
import { ThemeCustomizerModal } from "./themes/ThemeCustomizerModal";
import { ThemeDirectoryModal } from "./themes/ThemeDirectoryModal";
import { ThemeDetailsModal } from "./themes/ThemeDetailsModal";
import { ThemeFileEditorView } from "./themes/ThemeFileEditorView";
import { ThemeLivePreview } from "@/components/theme/ThemeLivePreview";
import { applyThemeToConfig, normalizeComponentIds, persistSiteConfig, patchSiteTheme } from "@/lib/theme-engine";
import { COLOR_SLOTS, THEME_PALETTES } from "@/lib/theme-palettes";

export function ThemesTab() {
  const { config, updateLocalConfig, refetch } = useSiteConfig();

  // Navigation Sub-Views
  const [activeSubView, setActiveSubView] = useState<
    "themes" | "components" | "colors" | "typography" | "editor"
  >("themes");

  // Installed & Catalog Themes state
  const [themesList, setThemesList] = useState<FullThemeItem[]>(() => {
    try {
      const saved = localStorage.getItem("codex_custom_themes");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const ids = new Set(parsed.map((p: any) => p.id));
          return [...parsed, ...DEFAULT_THEMES.filter((d) => !ids.has(d.id))];
        }
      }
    } catch {
      // ignore
    }
    return DEFAULT_THEMES;
  });

  const [installedIds, setInstalledIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("codex_installed_themes");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed as string[];
      }
    } catch {
      // ignore
    }
    return themesList.filter((t) => t.isInstalled).map((t) => t.id);
  });

  // Modals & Drawers
  const [customizingTheme, setCustomizingTheme] = useState<FullThemeItem | null>(null);
  const [previewingTheme, setPreviewingTheme] = useState<FullThemeItem | null>(null);
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
  const [selectedDetailsTheme, setSelectedDetailsTheme] = useState<FullThemeItem | null>(null);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<
    "all" | "installed" | "block" | "popular" | "favorites"
  >("all");
  const [isActivating, setIsActivating] = useState(false);

  // Custom Palette Builder State
  const [customPalette, setCustomPalette] = useState<SiteColors>({
    primary: config.colors?.primary || "#0071e3",
    accent: config.colors?.accent || "#0071e3",
    background: config.colors?.background || "#f5f5f7",
    cardBg: config.colors?.cardBg || "#ffffff",
    textMain: config.colors?.textMain || "#1d1d1f",
    textMuted: config.colors?.textMuted || "#6e6e73",
    secondary: config.colors?.secondary || "#fbfbfd",
    surface: config.colors?.surface || "#ffffff",
    border: config.colors?.border || "#d2d2d7",
    inverse: config.colors?.inverse || "#1d1d1f",
    highlight: config.colors?.highlight || "#0077ed",
    ring: config.colors?.ring || "#0071e3",
  });

  // Custom Typography State
  const [customTypography, setCustomTypography] = useState({
    fontFamily: (config.theme?.fontFamily || "system") as "system" | "inter" | "playfair" | "syne",
    fontSizeScale: (config.theme?.fontSizeScale || "standard") as "compact" | "standard" | "spacious" | "large",
    scaleRatio: 1.25,
    lineHeight: 1.6,
  });

  // Current active theme object
  const currentThemeId = config.theme?.activeTheme || "codex-pro";
  const activeTheme =
    themesList.find((t) => t.id === currentThemeId) ||
    themesList.find((t) => t.id === "codex-pro") ||
    themesList[0];

  const persistInstalled = (ids: string[]) => {
    setInstalledIds(ids);
    try {
      localStorage.setItem("codex_installed_themes", JSON.stringify(ids));
    } catch {
      // ignore
    }
  };

  const saveCustomThemes = (updated: FullThemeItem[]) => {
    setThemesList(updated);
    try {
      const customs = updated.filter((t) => t.isCustom);
      localStorage.setItem("codex_custom_themes", JSON.stringify(customs));
    } catch {
      // ignore
    }
  };

  // Filter themes for the catalog grid
  const displayedThemes = themesList.filter((theme) => {
    const matchesSearch =
      theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeFilter === "installed") {
      return installedIds.includes(theme.id);
    }
    if (activeFilter === "block") {
      return theme.isBlockTheme;
    }
    if (activeFilter === "popular") {
      return theme.category === "popular" || theme.rating >= 4.9;
    }
    if (activeFilter === "favorites") {
      return theme.rating === 5;
    }
    return true;
  });

  const handleActivateTheme = async (theme: FullThemeItem) => {
    setIsActivating(true);
    toast.info(`Activating “${theme.name}”…`);

    try {
      const updatedConfig = applyThemeToConfig(config, theme);
      updateLocalConfig(updatedConfig);
      await persistSiteConfig(updatedConfig);
      await refetch();
      setPreviewingTheme(null);
      toast.success(`“${theme.name}” is now the live site theme.`);
    } catch (err) {
      toast.error(`Failed to activate theme: ${String(err)}`);
    } finally {
      setIsActivating(false);
    }
  };

  // Save from Customizer Modal
  const handleSaveAndActivateFromCustomizer = async (
    customizedTheme: FullThemeItem,
    newColors: SiteColors
  ) => {
    const updatedTheme = {
      ...customizedTheme,
      colors: newColors,
    };
    const updatedList = themesList.map((t) =>
      t.id === customizedTheme.id ? updatedTheme : t
    );
    saveCustomThemes(updatedList);
    await handleActivateTheme(updatedTheme);
  };

  // Install Theme from Directory
  const handleInstallTheme = (newTheme: FullThemeItem) => {
    if (!installedIds.includes(newTheme.id)) {
      persistInstalled([...installedIds, newTheme.id]);
    }
    const exists = themesList.some((t) => t.id === newTheme.id);
    if (!exists) {
      saveCustomThemes([...themesList, { ...newTheme, isInstalled: true, isCustom: true }]);
    }
  };

  // Create Child Theme
  const handleCreateChildTheme = (parentTheme: FullThemeItem, childName: string) => {
    const childId = `${parentTheme.id}-child-${Date.now()}`;
    const newChildTheme: FullThemeItem = {
      ...parentTheme,
      id: childId,
      name: childName,
      version: "1.0.0",
      description: `Child theme of ${parentTheme.name}. Inherits parent layouts and templates with custom overrides.`,
      category: "installed",
      isInstalled: true,
      isCustom: true,
      files: {
        "style.css": `/*\nTheme Name: ${childName}\nTemplate: ${parentTheme.id}\nVersion: 1.0.0\nAuthor: Site Administrator\n*/\n\n/* Enqueue parent styles and add custom CSS rules here */\n`,
        "functions.php": `<?php\n// Enqueue parent styles\nadd_action('wp_enqueue_scripts', function() {\n    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');\n});\n`,
        "theme.json": parentTheme.files?.["theme.json"] || "{}",
        "header.php": "",
        "footer.php": "",
        "index.php": "",
      },
    };

    saveCustomThemes([...themesList, newChildTheme]);
    if (!installedIds.includes(childId)) {
      persistInstalled([...installedIds, childId]);
    }
    setSelectedDetailsTheme(newChildTheme);
  };

  // Delete Theme
  const handleDeleteTheme = (themeId: string) => {
    if (themeId === currentThemeId) {
      toast.error("Cannot delete the currently active theme.");
      return;
    }
    const updated = themesList.filter((t) => t.id !== themeId);
    saveCustomThemes(updated);
    persistInstalled(installedIds.filter((id) => id !== themeId));
    toast.success("Theme removed from installed themes.");
  };

  // Update theme file code in ThemeFileEditor
  const handleUpdateFileCode = async (themeId: string, filename: string, content: string) => {
    const updated = themesList.map((t) => {
      if (t.id === themeId) {
        return {
          ...t,
          files: {
            ...t.files,
            [filename]: content,
          },
        };
      }
      return t;
    });
    saveCustomThemes(updated);

    // If editing style.css on the active theme, immediately inject and persist to SQLite!
    if (themeId === currentThemeId && filename === "style.css") {
      let styleTag = document.getElementById("codex-custom-theme-style");
      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "codex-custom-theme-style";
        document.head.appendChild(styleTag);
      }
      styleTag.innerHTML = content;

      const updatedConfig = patchSiteTheme(config, { customCss: content });
      updateLocalConfig(updatedConfig);
      await persistSiteConfig(updatedConfig);
      toast.success("Active theme CSS compiled and saved to SQLite!");
    }
  };

  // Apply Palette Preset
  const handleApplyPalette = async (paletteId: string, colors: SiteColors) => {
    toast.info("Applying palette to the live site…");
    try {
      const updatedConfig = {
        ...config,
        colors: {
          ...config.colors,
          ...colors,
        },
      };
      updateLocalConfig(updatedConfig);
      await persistSiteConfig(updatedConfig);
      await refetch();
      setCustomPalette({ ...colors });
      toast.success("Palette applied to the live site.");
    } catch (err) {
      toast.error(`Failed to apply palette: ${String(err)}`);
    }
  };

  const handleToggleComponent = async (compId: string, currentEnabled: boolean) => {
    const currentList = normalizeComponentIds(config.theme?.activeComponents);
    const nextList = currentEnabled
      ? currentList.filter((c) => c !== compId)
      : [...currentList, compId];

    const updatedConfig = patchSiteTheme(config, { activeComponents: nextList });

    updateLocalConfig(updatedConfig);
    try {
      await persistSiteConfig(updatedConfig);
      toast.success(`${compId} ${!currentEnabled ? "enabled" : "disabled"}`);
    } catch {
      toast.error("Failed to persist component toggle.");
    }
  };

  return (
    <div className="space-y-6">
      {/* WordPress Appearance Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/8 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Themes</h1>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#2271b1]/10 text-[#2271b1] font-bold">
              WordPress Appearance &bull; {themesList.length} Full Themes
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            Manage, customize, and install WordPress themes and Full Site Editing block templates.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setCustomizingTheme(activeTheme)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
          >
            <Sliders className="size-3.5 text-[#2271b1]" />
            <span>Customize Active Theme</span>
          </button>

          <button
            type="button"
            onClick={() => setIsDirectoryOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-[#2271b1] hover:bg-[#135e96] text-white transition-colors shadow-xs cursor-pointer"
          >
            <Plus className="size-4" />
            <span>Add New Theme</span>
          </button>
        </div>
      </div>

      {/* Appearance Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-black/8 overflow-x-auto pb-2 text-xs font-semibold text-gray-600">
        {[
          { id: "themes", label: `Installed Themes (${installedIds.length})`, icon: Layout },
          { id: "components", label: "Components & Hooks", icon: Layers },
          { id: "colors", label: "Color Palettes", icon: Palette },
          { id: "typography", label: "Typography & Layout", icon: Type },
          { id: "editor", label: "Theme File Editor", icon: Code },
        ].map((tab) => {
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSubView(tab.id as any)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeSubView === tab.id
                  ? "bg-[#2271b1] text-white shadow-2xs font-bold"
                  : "hover:bg-black/5 hover:text-gray-900"
              }`}
            >
              <TabIcon className="size-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* VIEW 1: THEMES CATALOG GRID */}
      {activeSubView === "themes" && (
        <div className="space-y-6">
          {/* Active Theme Spotlight Card */}
          <div className="bg-white rounded-2xl border-2 border-[#2271b1] p-5 sm:p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-5 items-center w-full md:w-auto">
              <div className="w-48 sm:w-56 h-36 rounded-xl overflow-hidden shadow-xs border border-black/10 shrink-0 bg-gray-100">
                <ThemeLiveMockup theme={activeTheme} siteConfig={config} isCompact={true} />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Active Theme
                  </span>
                  <span className="text-xs text-gray-500 font-mono">v{activeTheme.version}</span>
                  <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                    {activeTheme.heroLayout || activeTheme.layout?.heroLayout || "streamer"}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                  {activeTheme.name}
                </h2>
                <p className="text-xs text-gray-600 max-w-xl leading-relaxed">
                  {activeTheme.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500 pt-1">
                  <span>By <strong className="text-gray-800">{activeTheme.author}</strong></span>
                  <span>&bull;</span>
                  <span>Header: <strong className="text-gray-800">{activeTheme.headerStyle}</strong></span>
                  <span>&bull;</span>
                  <span>Radius: <strong className="text-gray-800">{activeTheme.borderRadius}</strong></span>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col gap-2 w-full md:w-auto justify-end">
              <button
                type="button"
                onClick={() => setCustomizingTheme(activeTheme)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-[#2271b1] hover:bg-[#135e96] text-white shadow-xs transition-all cursor-pointer"
              >
                <Sliders className="size-4" />
                <span>Customize &amp; Live Preview</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedDetailsTheme(activeTheme)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-all cursor-pointer"
              >
                <Eye className="size-3.5 text-gray-500" />
                <span>Theme Details &amp; Files</span>
              </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-black/8">
            <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto">
              {[
                { id: "all", label: `All Themes (${themesList.length})` },
                { id: "installed", label: `Installed (${installedIds.length})` },
                { id: "block", label: "Block / FSE Themes" },
                { id: "popular", label: "Top Rated" },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeFilter === f.id
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="size-4 absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search installed themes..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2271b1]"
              />
            </div>
          </div>

          {/* Themes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedThemes.map((theme) => {
              const isActive = theme.id === currentThemeId;

              return (
                <div
                  key={theme.id}
                  className={`group bg-white rounded-2xl border transition-all overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md ${
                    isActive
                      ? "border-[#2271b1] ring-2 ring-[#2271b1]/30"
                      : "border-black/8 hover:border-black/20"
                  }`}
                >
                  {/* Mockup Preview */}
                  <div
                    className="h-48 w-full relative bg-gray-100 border-b border-black/6 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedDetailsTheme(theme)}
                  >
                    <ThemeLiveMockup theme={theme} siteConfig={config} isCompact={false} />

                    {/* Hover Overlay with Preview & Customize triggers */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewingTheme(theme);
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-white text-gray-900 font-bold text-xs shadow-md hover:bg-gray-100 transition-transform hover:scale-105 cursor-pointer flex items-center gap-1.5"
                      >
                        <Eye className="size-3.5 text-[#2271b1]" />
                        <span>Live Preview</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDetailsTheme(theme);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-black/80 text-white font-semibold text-xs shadow-md hover:bg-black transition-transform hover:scale-105 cursor-pointer"
                      >
                        Details
                      </button>
                    </div>

                    {isActive && (
                      <span className="absolute top-3 left-3 bg-[#2271b1] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <Check className="size-3" /> Active
                      </span>
                    )}

                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-mono font-medium px-2 py-0.5 rounded-full">
                      {theme.category}
                    </span>
                  </div>

                  {/* Theme Info & Actions */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-sm text-gray-900 leading-snug">
                          {theme.name}
                        </h3>
                        <span className="text-[10px] font-mono text-gray-400 shrink-0">
                          v{theme.version}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                        {theme.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-black/6 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400">
                        By <span className="text-gray-700 font-medium">{theme.author}</span>
                      </span>

                      <div className="flex items-center gap-2">
                        {isActive ? (
                          <button
                            type="button"
                            onClick={() => setCustomizingTheme(theme)}
                            className="px-3 py-1.5 text-xs font-bold rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors cursor-pointer"
                          >
                            Customize
                          </button>
                        ) : (
                          <button
                            type="button"
                            disabled={isActivating}
                            onClick={() => handleActivateTheme(theme)}
                            className="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-[#2271b1] hover:bg-[#135e96] text-white transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                          >
                            Activate
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Add New Theme Card */}
            <div
              onClick={() => setIsDirectoryOpen(true)}
              className="bg-gray-50 hover:bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all min-h-[260px] group"
            >
              <div className="size-12 rounded-2xl bg-white text-gray-400 group-hover:text-[#2271b1] group-hover:scale-110 shadow-xs flex items-center justify-center transition-all mb-3">
                <Plus className="size-6" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">Add New Theme</h3>
              <p className="text-[11px] text-gray-500 mt-1 max-w-[190px] leading-relaxed">
                Browse official WordPress directory or upload a custom theme .zip archive
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: ACTIVE COMPONENTS & ARCHITECTURE */}
      {activeSubView === "components" && (
        <div className="bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-6">
          <div className="border-b border-black/6 pb-4">
            <h2 className="text-base font-bold text-gray-900">
              WordPress Theme Components &amp; Template Architecture
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Active structural components, template engines, and render hooks registered in the Codex Dynamics CMS. Click any component switch to toggle it on or off live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                id: "elementor-engine",
                title: "Elementor Visual Engine",
                desc: "Real-time canvas editor with Content, Style, and Advanced inspector panels.",
                icon: Sliders,
                color: "text-[#E24474] bg-[#E24474]/10",
              },
              {
                id: "header-builder",
                title: "Dynamic Header Component",
                desc: "Floating island, sticky navbar, or classic bar with brand logo, nav links, and CTA triggers.",
                icon: Layout,
                color: "text-[#2271b1] bg-[#2271b1]/10",
              },
              {
                id: "hero-clip",
                title: "Video Hero Showcase Component",
                desc: "Multi-clip video streamer with smooth switcher tabs and ambient lighting.",
                icon: Laptop,
                color: "text-purple-600 bg-purple-50",
              },
              {
                id: "bento-highlights",
                title: "Bento Grid Highlights",
                desc: "Interactive card layout highlighting Core Web Vitals, speed, and architecture.",
                icon: Layers,
                color: "text-emerald-600 bg-emerald-50",
              },
              {
                id: "gutenberg-blocks",
                title: "Gutenberg Block Library",
                desc: "Native responsive blocks for blogs, case studies, and editorial articles.",
                icon: Code,
                color: "text-[#2271b1] bg-[#2271b1]/10",
              },
              {
                id: "services-carousel",
                title: "Services & Studio Portfolio",
                desc: "Detailed project showcases, metrics proof counters, and client testimonials.",
                icon: Sparkles,
                color: "text-amber-600 bg-amber-50",
              },
              {
                id: "tidio-chat-widget",
                title: "Tidio Live Chat Integration",
                desc: "Live visitor chat bubble, customer support automation, and lead capture agent.",
                icon: ExternalLink,
                color: "text-[#0066FF] bg-[#0066FF]/10",
              },
              {
                id: "footer-widgets",
                title: "Dynamic Footer & Social Dock",
                desc: "Multi-channel WhatsApp, Telegram, Viber, telephone desks and studio map pins.",
                icon: Layout,
                color: "text-slate-700 bg-slate-100",
              },
            ].map((comp) => {
              const CompIcon = comp.icon;
              const activeList = normalizeComponentIds(config.theme?.activeComponents);
              const isEnabled = activeList.includes(comp.id);

              return (
                <div
                  key={comp.id}
                  className={`p-4 rounded-xl border transition-all shadow-xs flex flex-col justify-between space-y-3 ${
                    isEnabled
                      ? "bg-white border-black/10 hover:border-black/20"
                      : "bg-gray-50/70 border-dashed border-gray-200 opacity-60"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className={`p-2.5 rounded-xl ${comp.color}`}>
                      <CompIcon className="size-5" />
                    </div>

                    {/* Toggle Switch */}
                    <button
                      type="button"
                      onClick={() => handleToggleComponent(comp.id, isEnabled)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                        isEnabled ? "bg-[#2271b1]" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                          isEnabled ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-gray-900">{comp.title}</h3>
                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/4 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                    <span>ID: {comp.id}</span>
                    <span className={isEnabled ? "text-emerald-600 font-semibold" : "text-gray-400"}>
                      {isEnabled ? "Active & Hooked" : "Disabled"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 3: GLOBAL COLOR PALETTES */}
      {activeSubView === "colors" && (
        <div className="space-y-6">
          {/* Custom Palette Generator / Color Picker Workbench */}
          <div className="bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-black/6 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-gray-900">
                    Interactive Custom Palette Studio
                  </h2>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Live Real-Time Pickers
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  Pick any custom hex colors to create a bespoke palette and apply it across your entire website immediately.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setCustomPalette({
                      primary: "#0071e3",
                      accent: "#0071e3",
                      background: "#f5f5f7",
                      cardBg: "#ffffff",
                      textMain: "#1d1d1f",
                      textMuted: "#6e6e73",
                      secondary: "#fbfbfd",
                      surface: "#ffffff",
                      border: "#d2d2d7",
                      inverse: "#1d1d1f",
                      highlight: "#0077ed",
                      ring: "#0071e3",
                    })
                  }
                  className="px-3 py-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="size-3.5" />
                  <span>Reset Defaults</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleApplyPalette("custom", customPalette)}
                  className="px-4 py-1.5 text-xs font-bold text-white bg-[#2271b1] hover:bg-[#135e96] rounded-xl cursor-pointer shadow-xs transition-all flex items-center gap-1.5"
                >
                  <Check className="size-3.5" />
                  <span>Save &amp; Apply Custom Palette</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {COLOR_SLOTS.map((item) => {
                const raw = (customPalette[item.key] as string) || "#0071e3";
                const hex = raw.startsWith("#") && raw.length === 7 ? raw : "#0071e3";
                return (
                <div
                  key={item.key}
                  className="p-3 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2"
                >
                  <label className="text-[11px] font-bold text-gray-700 block truncate">
                    {item.label}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={hex}
                      onChange={(e) =>
                        setCustomPalette((prev) => ({
                          ...prev,
                          [item.key]: e.target.value,
                        }))
                      }
                      className="size-8 rounded-lg cursor-pointer border border-black/10 bg-transparent"
                    />
                    <input
                      type="text"
                      value={raw}
                      onChange={(e) =>
                        setCustomPalette((prev) => ({
                          ...prev,
                          [item.key]: e.target.value,
                        }))
                      }
                      className="w-full text-xs font-mono px-2 py-1 bg-white border border-gray-200 rounded-md uppercase"
                    />
                  </div>
                </div>
                );
              })}
            </div>

            {/* Live Component Preview Card */}
            <div
              className="p-4 rounded-xl border transition-all"
              style={{
                backgroundColor: customPalette.background,
                borderColor: "rgba(0,0,0,0.1)",
              }}
            >
              <div
                className="p-4 rounded-xl border max-w-md shadow-xs space-y-2"
                style={{
                  backgroundColor: customPalette.cardBg,
                  color: customPalette.textMain,
                  borderColor: "rgba(0,0,0,0.08)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${customPalette.primary}18`,
                      color: customPalette.primary,
                    }}
                  >
                    Custom Preview Badge
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: customPalette.accent }}
                  >
                    Accent Element
                  </span>
                </div>
                <h4 className="text-sm font-bold" style={{ color: customPalette.textMain }}>
                  Harmonized Color Specimen
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: customPalette.textMuted }}>
                  This specimen dynamically visualizes your background, card, text, and button contrast before saving.
                </p>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs"
                  style={{ backgroundColor: customPalette.primary }}
                >
                  Interactive Button
                </button>
              </div>
            </div>
          </div>

          {/* 16 Curated Professional Palettes */}
          <div className="bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-6">
            <div className="border-b border-black/6 pb-3">
              <h2 className="text-base font-bold text-gray-900">16 Curated Palette Presets</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                One-click apply industry-grade palettes designed for high contrast and modern aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {THEME_PALETTES.map((pal) => {
                const isCurrent =
                  config.colors?.primary?.toLowerCase() === pal.colors.primary.toLowerCase();

                return (
                  <div
                    key={pal.id}
                    className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                      isCurrent
                        ? "border-[#2271b1] ring-2 ring-[#2271b1]/20 bg-[#2271b1]/[0.02]"
                        : "border-black/8 hover:border-black/20 bg-white"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold text-gray-900">{pal.title}</h3>
                        {isCurrent && (
                          <span className="text-[10px] font-semibold text-[#2271b1] flex items-center gap-1">
                            <Check className="size-3" /> Active
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        {pal.subtitle}
                      </p>
                    </div>

                    {/* 6 Swatches Preview */}
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-100">
                      <div
                        className="size-6 rounded-lg border border-black/10 shrink-0"
                        style={{ backgroundColor: pal.colors.primary }}
                        title={`Primary: ${pal.colors.primary}`}
                      />
                      <div
                        className="size-6 rounded-lg border border-black/10 shrink-0"
                        style={{ backgroundColor: pal.colors.accent }}
                        title={`Accent: ${pal.colors.accent}`}
                      />
                      <div
                        className="size-6 rounded-lg border border-black/10 shrink-0"
                        style={{ backgroundColor: pal.colors.background }}
                        title={`Background: ${pal.colors.background}`}
                      />
                      <div
                        className="size-6 rounded-lg border border-black/10 shrink-0"
                        style={{ backgroundColor: pal.colors.cardBg }}
                        title={`Card: ${pal.colors.cardBg}`}
                      />
                      <div
                        className="size-6 rounded-lg border border-black/10 shrink-0"
                        style={{ backgroundColor: pal.colors.textMain }}
                        title={`Text Main: ${pal.colors.textMain}`}
                      />
                      <div
                        className="size-6 rounded-lg border border-black/10 shrink-0"
                        style={{ backgroundColor: pal.colors.textMuted }}
                        title={`Text Muted: ${pal.colors.textMuted}`}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => handleApplyPalette(pal.id, pal.colors)}
                      disabled={isCurrent}
                      className={`w-full py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                        isCurrent
                          ? "bg-gray-100 text-gray-400 cursor-default"
                          : "bg-[#2271b1] hover:bg-[#135e96] text-white shadow-xs"
                      }`}
                    >
                      {isCurrent ? "Currently Active Palette" : "Apply Palette & Update Site"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: TYPOGRAPHY & LAYOUT ARCHITECTURE */}
      {activeSubView === "typography" && (
        <div className="bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-black/6 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-gray-900">
                  Global Typography Studio &amp; Layout Scale
                </h2>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#2271b1]/10 text-[#2271b1]">
                  WCAG AA Baseline
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                Customize typographic scale ratios, font families, and responsive viewport sizing.
              </p>
            </div>

            <button
              type="button"
              onClick={async () => {
                const updatedConfig = {
                  ...config,
                  theme: {
                    ...config.theme,
                    fontFamily: customTypography.fontFamily,
                    fontSizeScale: customTypography.fontSizeScale === "standard" ? "normal" : customTypography.fontSizeScale,
                    lineHeight: customTypography.lineHeight,
                    scaleRatio: customTypography.scaleRatio,
                    layout: {
                      ...config.theme?.layout,
                      fontSizeScale: customTypography.fontSizeScale === "large" ? "editorial" : customTypography.fontSizeScale === "standard" ? "normal" : customTypography.fontSizeScale,
                    },
                  },
                };
                updateLocalConfig(updatedConfig);
                await persistSiteConfig(updatedConfig);
                toast.success("Typography applied to the live site.");
              }}
              className="px-4 py-2 text-xs font-bold text-white bg-[#2271b1] hover:bg-[#135e96] rounded-xl cursor-pointer shadow-xs transition-all flex items-center gap-1.5"
            >
              <Check className="size-4" />
              <span>Apply Typography to Website</span>
            </button>
          </div>

          {/* Large Live Type Specimen Banner */}
          <div
            className="p-6 rounded-2xl border border-black/8 bg-gray-50 space-y-4"
            style={{
              fontFamily:
                customTypography.fontFamily === "playfair"
                  ? "'Playfair Display', Georgia, serif"
                  : customTypography.fontFamily === "syne"
                  ? "'Syne', sans-serif"
                  : customTypography.fontFamily === "inter"
                  ? "'Plus Jakarta Sans', 'Inter', sans-serif"
                  : "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
            }}
          >
            <div className="flex items-center justify-between text-xs text-gray-500 border-b border-black/6 pb-2">
              <span className="font-mono font-semibold uppercase">
                Active Specimen: {customTypography.fontFamily.toUpperCase()} &bull; {customTypography.fontSizeScale.toUpperCase()}
              </span>
              <span className="text-[11px]">Ratio: {customTypography.scaleRatio} &bull; LH: {customTypography.lineHeight}</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Architecting High-Trust Enterprise Platforms
              </h1>
              <h3 className="text-base sm:text-lg font-medium text-gray-600">
                Responsive WordPress templates engineered for sub-second Core Web Vitals.
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-3xl leading-relaxed">
                The typography engine establishes proportional mathematical scales across all headings, body copy, and UI controls. Clean glyph rendering ensures comfortable reading sessions across Retina displays and mobile viewports.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 text-xs font-bold rounded-xl text-white bg-[#2271b1] shadow-2xs"
                >
                  Primary Action Specimen
                </button>
                <code className="text-xs font-mono bg-white px-2.5 py-1.5 rounded-lg border border-black/10 text-gray-800">
                  font-size: {customTypography.fontSizeScale === "compact" ? "14px" : customTypography.fontSizeScale === "spacious" ? "18px" : customTypography.fontSizeScale === "large" ? "20px" : "16px"}
                </code>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Font Pairings */}
            <div className="space-y-4 p-4 rounded-xl border border-black/8 bg-gray-50">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
                <Type className="size-4 text-[#2271b1]" />
                <span>Select Font Family Hierarchy</span>
              </div>
              <div className="space-y-2">
                {[
                  {
                    id: "system",
                    name: "Native Apple SF Pro / System",
                    badge: "Fastest",
                    desc: "Ultra-crisp legibility, zero-latency hardware rendering speed.",
                  },
                  {
                    id: "inter",
                    name: "Inter + Plus Jakarta Sans",
                    badge: "Modern Tech",
                    desc: "Balanced geometric proportions, ideal for software dashboards.",
                  },
                  {
                    id: "playfair",
                    name: "Playfair Display + Editorial Serif",
                    badge: "Prestige",
                    desc: "High-contrast serif display paired with clean body text.",
                  },
                  {
                    id: "syne",
                    name: "Syne + Space Grotesk",
                    badge: "Avant-Garde",
                    desc: "Futuristic creative studio aesthetics for tech leaders.",
                  },
                ].map((item) => {
                  const isSelected = customTypography.fontFamily === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() =>
                        setCustomTypography((prev) => ({
                          ...prev,
                          fontFamily: item.id as any,
                        }))
                      }
                      className={`p-3.5 rounded-xl bg-white border cursor-pointer flex items-center justify-between transition-all ${
                        isSelected
                          ? "border-[#2271b1] ring-2 ring-[#2271b1]/30 shadow-xs"
                          : "border-black/6 hover:border-gray-300"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-gray-900">{item.name}</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">{item.desc}</div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#2271b1]/10 text-[#2271b1] font-semibold">
                        {item.badge}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Base Scale & Ratio Controls */}
            <div className="space-y-4 p-4 rounded-xl border border-black/8 bg-gray-50">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
                <SlidersHorizontal className="size-4 text-[#2271b1]" />
                <span>Scale Ratios &amp; Layout Density</span>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-gray-700 block">
                  Base Font Size Scale:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: "compact", label: "Compact 14px" },
                    { id: "standard", label: "Standard 16px" },
                    { id: "spacious", label: "Spacious 18px" },
                    { id: "large", label: "Large 20px" },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() =>
                        setCustomTypography((prev) => ({
                          ...prev,
                          fontSizeScale: s.id as any,
                        }))
                      }
                      className={`py-2 px-1 text-center rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                        customTypography.fontSizeScale === s.id
                          ? "bg-[#2271b1] text-white border-[#2271b1]"
                          : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Mathematical Scale Ratio:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { val: 1.2, label: "Minor Third 1.20" },
                      { val: 1.25, label: "Major Third 1.25" },
                      { val: 1.333, label: "Perfect Fourth 1.333" },
                    ].map((r) => (
                      <button
                        key={r.val}
                        type="button"
                        onClick={() =>
                          setCustomTypography((prev) => ({
                            ...prev,
                            scaleRatio: r.val,
                          }))
                        }
                        className={`py-1.5 px-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                          customTypography.scaleRatio === r.val
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                        }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Line Height Rhythm:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { val: 1.4, label: "Tight 1.4" },
                      { val: 1.6, label: "Balanced 1.6" },
                      { val: 1.8, label: "Relaxed 1.8" },
                    ].map((lh) => (
                      <button
                        key={lh.val}
                        type="button"
                        onClick={() =>
                          setCustomTypography((prev) => ({
                            ...prev,
                            lineHeight: lh.val,
                          }))
                        }
                        className={`py-1.5 px-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                          customTypography.lineHeight === lh.val
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                        }`}
                      >
                        {lh.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 5: THEME FILE EDITOR */}
      {activeSubView === "editor" && (
        <ThemeFileEditorView
          themes={themesList}
          currentThemeId={currentThemeId}
          onUpdateFile={handleUpdateFileCode}
        />
      )}

      {/* MODAL 1: LIVE WORDPRESS THEME CUSTOMIZER */}
      {customizingTheme && (
        <ThemeCustomizerModal
          theme={customizingTheme}
          config={config}
          onClose={() => setCustomizingTheme(null)}
          onSaveAndActivate={handleSaveAndActivateFromCustomizer}
        />
      )}

      {previewingTheme && (
        <ThemeLivePreview
          theme={previewingTheme}
          config={config}
          onClose={() => setPreviewingTheme(null)}
          onActivate={(t) => {
            void handleActivateTheme(t);
          }}
        />
      )}

      {/* MODAL 2: THEME DIRECTORY ("ADD THEMES") */}
      {isDirectoryOpen && (
        <ThemeDirectoryModal
          catalog={themesList}
          installedThemeIds={installedIds}
          activeThemeId={currentThemeId}
          onClose={() => setIsDirectoryOpen(false)}
          onInstallTheme={handleInstallTheme}
          onActivateTheme={(t) => {
            handleActivateTheme(t);
            setIsDirectoryOpen(false);
          }}
          onPreviewTheme={(t) => {
            setIsDirectoryOpen(false);
            setPreviewingTheme(t);
          }}
          onOpenDetails={(t) => {
            setSelectedDetailsTheme(t);
          }}
        />
      )}

      {/* MODAL 3: THEME DETAILS */}
      {selectedDetailsTheme && (
        <ThemeDetailsModal
          theme={selectedDetailsTheme}
          allThemes={themesList}
          isActive={selectedDetailsTheme.id === currentThemeId}
          onClose={() => setSelectedDetailsTheme(null)}
          onSelectTheme={(t) => setSelectedDetailsTheme(t)}
          onActivateTheme={(t) => handleActivateTheme(t)}
          onPreviewTheme={(t) => setPreviewingTheme(t)}
          onDeleteTheme={handleDeleteTheme}
          onCreateChildTheme={handleCreateChildTheme}
        />
      )}
    </div>
  );
}
