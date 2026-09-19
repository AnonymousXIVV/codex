import { useState, useEffect, useCallback } from "react";
import {
  Type,
  Image as ImageIcon,
  Sparkles,
  Grid,
  TrendingUp,
  Laptop,
  Layers,
  PhoneCall,
  Clock,
  Briefcase,
  Users,
  Search,
  Sliders,
  ChevronDown,
  ChevronRight,
  Eye,
  EyeOff,
  Settings as SettingsIcon,
  Monitor,
  Tablet,
  Smartphone,
  Save,
  X,
  Plus,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import { useSiteConfig } from "@/context/SiteConfigContext";
import {
  DEFAULT_SITE_CONFIG,
  type SiteConfig,
} from "@/types/site-editor";
import { ImagePickerModal } from "./ImagePickerModal";
import {
  ELEMENTOR_WIDGETS,
} from "./ElementorWidgetsData";

type ResponsiveMode = "desktop" | "tablet" | "mobile";
type InspectorTab = "content" | "style" | "advanced";

export function SiteEditorTab() {
  const { config: globalConfig, refetch, updateLocalConfig } = useSiteConfig();
  const [config, setConfig] = useState<SiteConfig>(
    globalConfig || DEFAULT_SITE_CONFIG
  );

  // Sync state if globalConfig updates from outside and no local edits yet
  const [hasChanges, setHasChanges] = useState(false);
  useEffect(() => {
    if (globalConfig && !hasChanges) {
      setConfig(globalConfig);
    }
  }, [globalConfig, hasChanges]);

  // Elementor Navigation & Dock states
  const [dockMode, setDockMode] = useState<"elements" | "inspector" | "settings">(
    "elements"
  );
  const [activeSectionId, setActiveSectionId] = useState<string>("hero");
  const [inspectorTab, setInspectorTab] = useState<InspectorTab>("content");
  const [responsiveMode, setResponsiveMode] = useState<ResponsiveMode>("desktop");
  const [previewCleanMode, setPreviewCleanMode] = useState(false);
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
  const [widgetSearch, setWidgetSearch] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{
    basic: boolean;
    pro: boolean;
    general: boolean;
    site: boolean;
  }>({
    basic: true,
    pro: true,
    general: true,
    site: true,
  });

  // Modal states
  const [imagePickerOpen, setImagePickerOpen] = useState(false);
  const [imagePickerTarget, setImagePickerTarget] = useState<{
    path: string;
    value: string;
    title: string;
  } | null>(null);

  // Helper to deep-update fields
  const updateField = (path: string, value: any) => {
    setHasChanges(true);
    setConfig((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      const parts = path.split(".");
      let cur = copy;
      for (let i = 0; i < parts.length - 1; i++) {
        const p = parts[i];
        if (!(p in cur) || typeof cur[p] !== "object") {
          cur[p] = {};
        }
        cur = cur[p];
      }
      cur[parts[parts.length - 1]] = value;
      return copy;
    });
  };

  // Save to SQLite CRM & Publish
  const handleSave = useCallback(async () => {
    try {
      setIsSaving(true);
      const res = await fetch("/api/crm/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save_site_content",
          config,
          payload: { config },
        }),
      });
      const data = await res.json();
      if (data.ok) {
        toast.success("Site published successfully with Elementor!");
        setHasChanges(false);
        updateLocalConfig(data.config || config);
        await refetch();
      } else {
        toast.error(data.error || "Failed to publish site content");
      }
    } catch (err) {
      toast.error("Network error while saving: " + String(err));
    } finally {
      setIsSaving(false);
    }
  }, [config, refetch, updateLocalConfig]);

  // Keyboard shortcut: Cmd/Ctrl + S to save
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        handleSave();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSave]);

  // Section Selector: when user clicks a section in canvas or navigator
  const handleSelectSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
    setDockMode("inspector");
  };

  // Filter widgets
  const filteredWidgets = ELEMENTOR_WIDGETS.filter((w) =>
    w.name.toLowerCase().includes(widgetSearch.toLowerCase()) ||
    w.description.toLowerCase().includes(widgetSearch.toLowerCase())
  );

  // Section list for navigator
  const SECTIONS_LIST = [
    { id: "hero", name: "Hero Video Showcase", icon: Laptop },
    { id: "highlights", name: "Bento Highlights Grid", icon: Layers },
    { id: "services", name: "Services & Studio Offerings", icon: Briefcase },
    { id: "about", name: "About & Engineering Process", icon: Users },
    { id: "studio", name: "Studio & Kyiv Loft", icon: Sparkles },
    { id: "results", name: "Results & Conversion Proof", icon: TrendingUp },
    { id: "contact", name: "Contact Desks & Desks", icon: PhoneCall },
    { id: "footer", name: "Footer & Copyright", icon: Clock },
  ];

  return (
    <div className="relative w-full h-[calc(100vh-140px)] min-h-[640px] bg-[#1d2024] text-white flex flex-col overflow-hidden rounded-2xl border border-black/20 shadow-2xl font-sans select-none">
      {/* 1. ELEMENTOR TOP CONTROL BAR */}
      <div className="h-12 bg-[#26292c] border-b border-[#3c434a] px-4 flex items-center justify-between shrink-0 z-30">
        {/* Left: Brand & Page Context */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-lg bg-[#E24474] flex items-center justify-center font-black text-white text-xs tracking-tighter shadow-sm">
              E
            </div>
            <span className="text-xs font-bold tracking-wider text-white">
              ELEMENTOR
            </span>
          </div>

          <div className="h-4 w-px bg-[#3c434a]" />

          <div className="flex items-center gap-2">
            <span className="text-xs text-white/70 font-medium">Page:</span>
            <span className="text-xs font-semibold text-white bg-[#33373b] px-2.5 py-0.5 rounded-md border border-white/10">
              Home (Front Page)
            </span>
          </div>
        </div>

        {/* Center: Mode Switching & Tools */}
        <div className="flex items-center gap-1.5 bg-[#1d2024] p-1 rounded-xl border border-white/10">
          <button
            type="button"
            onClick={() => setDockMode("elements")}
            className={`px-3 py-1 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all ${
              dockMode === "elements"
                ? "bg-[#E24474] text-white font-semibold shadow-xs"
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
            title="Widgets & Elements Catalog"
          >
            <Grid className="size-3.5" />
            <span>Elements</span>
          </button>

          <button
            type="button"
            onClick={() => setDockMode("inspector")}
            className={`px-3 py-1 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all ${
              dockMode === "inspector"
                ? "bg-[#E24474] text-white font-semibold shadow-xs"
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
            title="Inspect Selected Element"
          >
            <Sliders className="size-3.5" />
            <span>Inspector</span>
          </button>

          <button
            type="button"
            onClick={() => setIsNavigatorOpen(!isNavigatorOpen)}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg flex items-center gap-1 transition-all ${
              isNavigatorOpen
                ? "bg-white/20 text-white"
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
            title="Toggle Elementor Navigator Tree"
          >
            <Layers className="size-3.5" />
            <span>Navigator</span>
          </button>
        </div>

        {/* Right: Responsive Viewports & Quick Actions */}
        <div className="flex items-center gap-3">
          {/* Responsive switch */}
          <div className="flex items-center gap-1 bg-[#1d2024] p-0.5 rounded-lg border border-white/10">
            <button
              type="button"
              onClick={() => setResponsiveMode("desktop")}
              className={`p-1.5 rounded-md transition-colors ${
                responsiveMode === "desktop"
                  ? "bg-[#33373b] text-white"
                  : "text-white/50 hover:text-white"
              }`}
              title="Desktop Preview (100%)"
            >
              <Monitor className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setResponsiveMode("tablet")}
              className={`p-1.5 rounded-md transition-colors ${
                responsiveMode === "tablet"
                  ? "bg-[#33373b] text-white"
                  : "text-white/50 hover:text-white"
              }`}
              title="Tablet Preview (768px)"
            >
              <Tablet className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setResponsiveMode("mobile")}
              className={`p-1.5 rounded-md transition-colors ${
                responsiveMode === "mobile"
                  ? "bg-[#33373b] text-white"
                  : "text-white/50 hover:text-white"
              }`}
              title="Mobile Preview (390px)"
            >
              <Smartphone className="size-3.5" />
            </button>
          </div>

          {/* Clean view toggle */}
          <button
            type="button"
            onClick={() => setPreviewCleanMode(!previewCleanMode)}
            className={`p-2 rounded-lg border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-colors ${
              previewCleanMode
                ? "bg-[#0071e3] text-white border-transparent"
                : "bg-[#33373b] text-white/80 hover:text-white hover:bg-[#3f4448]"
            }`}
            title="Toggle Clean Preview (Hides Elementor edit handles)"
          >
            {previewCleanMode ? (
              <EyeOff className="size-3.5" />
            ) : (
              <Eye className="size-3.5" />
            )}
            <span className="hidden sm:inline">
              {previewCleanMode ? "Edit Mode" : "Clean View"}
            </span>
          </button>

          {/* Visit site */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#33373b] hover:bg-[#3f4448] text-white/80 hover:text-white border border-white/10 transition-colors"
            title="Open Live Public Website"
          >
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </div>

      {/* 2. MAIN WORKSPACE: LEFT ELEMENTOR DOCK + CENTER CANVAS */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* LEFT DOCK (WIDTH ~ 340px) */}
        <div className="w-80 md:w-96 bg-[#26292c] border-r border-[#3c434a] flex flex-col shrink-0 overflow-hidden z-20">
          {/* DOCK VIEW A: WIDGETS CATALOG */}
          {dockMode === "elements" && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Widget search */}
              <div className="p-3 border-b border-[#3c434a] bg-[#1d2024]/50">
                <div className="relative">
                  <Search className="size-3.5 absolute left-3 top-2.5 text-white/50" />
                  <input
                    type="text"
                    value={widgetSearch}
                    onChange={(e) => setWidgetSearch(e.target.value)}
                    placeholder="Search Widget... (e.g. Hero, Button, Form)"
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#1d2024] border border-[#3c434a] text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#E24474]"
                  />
                  {widgetSearch && (
                    <button
                      type="button"
                      onClick={() => setWidgetSearch("")}
                      className="absolute right-2.5 top-2.5 text-white/50 hover:text-white"
                    >
                      <X className="size-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Widget categories list */}
              <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
                {/* CATEGORY: BASIC */}
                <div className="space-y-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedCategories((prev) => ({
                        ...prev,
                        basic: !prev.basic,
                      }))
                    }
                    className="w-full flex items-center justify-between text-white/60 hover:text-white font-bold text-[11px] uppercase tracking-wider py-1 px-1"
                  >
                    <span>BASIC WIDGETS</span>
                    {expandedCategories.basic ? (
                      <ChevronDown className="size-3" />
                    ) : (
                      <ChevronRight className="size-3" />
                    )}
                  </button>

                  {expandedCategories.basic && (
                    <div className="grid grid-cols-3 gap-2">
                      {filteredWidgets
                        .filter((w) => w.category === "basic")
                        .map((w) => {
                          const IconComp = w.icon;
                          return (
                            <div
                              key={w.id}
                              onClick={() => {
                                handleSelectSection(w.targetSection);
                                toast.success(`Selected ${w.name} in canvas`);
                              }}
                              className="bg-[#33373b] hover:bg-[#3f4448] border border-[#3c434a] hover:border-[#E24474] rounded-xl p-2.5 flex flex-col items-center justify-center text-center cursor-pointer transition-all group shadow-xs"
                            >
                              <IconComp className="size-5 text-white/70 group-hover:text-[#E24474] transition-colors mb-1.5" />
                              <span className="text-[10px] text-white/80 group-hover:text-white font-medium truncate w-full">
                                {w.name}
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>

                {/* CATEGORY: PRO */}
                <div className="space-y-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedCategories((prev) => ({
                        ...prev,
                        pro: !prev.pro,
                      }))
                    }
                    className="w-full flex items-center justify-between text-white/60 hover:text-white font-bold text-[11px] uppercase tracking-wider py-1 px-1"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>PRO WIDGETS</span>
                      <span className="text-[9px] bg-[#E24474] text-white px-1.5 py-0.2 rounded font-bold">
                        PRO
                      </span>
                    </div>
                    {expandedCategories.pro ? (
                      <ChevronDown className="size-3" />
                    ) : (
                      <ChevronRight className="size-3" />
                    )}
                  </button>

                  {expandedCategories.pro && (
                    <div className="grid grid-cols-3 gap-2">
                      {filteredWidgets
                        .filter((w) => w.category === "pro")
                        .map((w) => {
                          const IconComp = w.icon;
                          return (
                            <div
                              key={w.id}
                              onClick={() => {
                                handleSelectSection(w.targetSection);
                                toast.success(`Selected ${w.name} in canvas`);
                              }}
                              className="bg-[#33373b] hover:bg-[#3f4448] border border-[#3c434a] hover:border-[#E24474] rounded-xl p-2.5 flex flex-col items-center justify-center text-center cursor-pointer transition-all group shadow-xs relative"
                            >
                              <IconComp className="size-5 text-white/70 group-hover:text-[#E24474] transition-colors mb-1.5" />
                              <span className="text-[10px] text-white/80 group-hover:text-white font-medium truncate w-full">
                                {w.name}
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>

                {/* CATEGORY: SITE CMS */}
                <div className="space-y-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedCategories((prev) => ({
                        ...prev,
                        site: !prev.site,
                      }))
                    }
                    className="w-full flex items-center justify-between text-white/60 hover:text-white font-bold text-[11px] uppercase tracking-wider py-1 px-1"
                  >
                    <span>SITE SECTIONS & BLOCKS</span>
                    {expandedCategories.site ? (
                      <ChevronDown className="size-3" />
                    ) : (
                      <ChevronRight className="size-3" />
                    )}
                  </button>

                  {expandedCategories.site && (
                    <div className="grid grid-cols-2 gap-2">
                      {filteredWidgets
                        .filter((w) => w.category === "site")
                        .map((w) => {
                          const IconComp = w.icon;
                          return (
                            <div
                              key={w.id}
                              onClick={() => {
                                handleSelectSection(w.targetSection);
                                toast.success(`Editing ${w.name}`);
                              }}
                              className="bg-[#33373b] hover:bg-[#3f4448] border border-[#3c434a] hover:border-[#E24474] rounded-xl p-3 flex items-center gap-2.5 cursor-pointer transition-all group shadow-xs"
                            >
                              <div className="size-8 rounded-lg bg-white/5 group-hover:bg-[#E24474]/20 flex items-center justify-center shrink-0">
                                <IconComp className="size-4 text-white/80 group-hover:text-[#E24474] transition-colors" />
                              </div>
                              <div className="text-left overflow-hidden">
                                <div className="text-xs font-semibold text-white truncate">
                                  {w.name}
                                </div>
                                <div className="text-[10px] text-white/50 truncate">
                                  {w.targetSection}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* DOCK VIEW B: ELEMENTOR 3-TAB INSPECTOR */}
          {dockMode === "inspector" && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Selected Element Header */}
              <div className="p-3 bg-[#1d2024] border-b border-[#3c434a] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setDockMode("elements")}
                    className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white"
                    title="Back to Elements catalog"
                  >
                    &larr;
                  </button>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-[#E24474] block leading-none">
                      Edit Section
                    </span>
                    <h3 className="text-xs font-bold text-white truncate mt-0.5">
                      {SECTIONS_LIST.find((s) => s.id === activeSectionId)?.name ||
                        activeSectionId}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setDockMode("elements")}
                    className="text-[11px] text-white/60 hover:text-white px-2 py-0.5 rounded bg-white/5"
                  >
                    Widgets
                  </button>
                </div>
              </div>

              {/* Elementor 3-Tabs: Content | Style | Advanced */}
              <div className="grid grid-cols-3 border-b border-[#3c434a] bg-[#222528] text-center text-xs font-bold tracking-wide">
                <button
                  type="button"
                  onClick={() => setInspectorTab("content")}
                  className={`py-2.5 transition-colors border-b-2 ${
                    inspectorTab === "content"
                      ? "border-[#E24474] text-white bg-[#26292c]"
                      : "border-transparent text-white/50 hover:text-white/80"
                  }`}
                >
                  CONTENT
                </button>
                <button
                  type="button"
                  onClick={() => setInspectorTab("style")}
                  className={`py-2.5 transition-colors border-b-2 ${
                    inspectorTab === "style"
                      ? "border-[#E24474] text-white bg-[#26292c]"
                      : "border-transparent text-white/50 hover:text-white/80"
                  }`}
                >
                  STYLE
                </button>
                <button
                  type="button"
                  onClick={() => setInspectorTab("advanced")}
                  className={`py-2.5 transition-colors border-b-2 ${
                    inspectorTab === "advanced"
                      ? "border-[#E24474] text-white bg-[#26292c]"
                      : "border-transparent text-white/50 hover:text-white/80"
                  }`}
                >
                  ADVANCED
                </button>
              </div>

              {/* Inspector Form Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs text-white/80">
                {/* TAB 1: CONTENT CONTROLS (Context-Aware) */}
                {inspectorTab === "content" && (
                  <div className="space-y-4">
                    {/* SECTION: HERO */}
                    {activeSectionId === "hero" && (
                      <div className="space-y-3.5">
                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Badge / Kicker Text
                          </label>
                          <input
                            type="text"
                            value={config.hero.badgeText}
                            onChange={(e) =>
                              updateField("hero.badgeText", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Main Headline (Title)
                          </label>
                          <textarea
                            rows={2}
                            value={config.hero.title}
                            onChange={(e) =>
                              updateField("hero.title", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Subtitle / Body Copy
                          </label>
                          <textarea
                            rows={3}
                            value={config.hero.subtitle}
                            onChange={(e) =>
                              updateField("hero.subtitle", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>

                        {/* Video clips repeater */}
                        <div className="pt-2 border-t border-[#3c434a] space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                              Hero Video Stream Clips ({config.hero.clips.length})
                            </label>
                          </div>
                          {config.hero.clips.map((clip, idx) => (
                            <div
                              key={clip.id}
                              className="p-3 rounded-lg bg-[#1d2024] border border-[#3c434a] space-y-2"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-white text-[11px]">
                                  Clip #{idx + 1}: {clip.label}
                                </span>
                              </div>
                              <input
                                type="text"
                                value={clip.title}
                                onChange={(e) => {
                                  const newClips = [...config.hero.clips];
                                  newClips[idx].title = e.target.value;
                                  updateField("hero.clips", newClips);
                                }}
                                placeholder="Clip Title"
                                className="w-full px-2.5 py-1.5 rounded bg-[#26292c] border border-[#3c434a] text-xs text-white"
                              />
                              <input
                                type="text"
                                value={clip.videoUrl}
                                onChange={(e) => {
                                  const newClips = [...config.hero.clips];
                                  newClips[idx].videoUrl = e.target.value;
                                  updateField("hero.clips", newClips);
                                }}
                                placeholder="Video MP4 URL"
                                className="w-full px-2.5 py-1.5 rounded bg-[#26292c] border border-[#3c434a] text-xs font-mono text-white/80"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SECTION: SERVICES */}
                    {activeSectionId === "services" && (
                      <div className="space-y-3.5">
                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Section Kicker
                          </label>
                          <input
                            type="text"
                            value={config.services.kicker}
                            onChange={(e) =>
                              updateField("services.kicker", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Section Title
                          </label>
                          <input
                            type="text"
                            value={config.services.title}
                            onChange={(e) =>
                              updateField("services.title", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Subtitle
                          </label>
                          <textarea
                            rows={2}
                            value={config.services.subtitle}
                            onChange={(e) =>
                              updateField("services.subtitle", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>

                        {/* Service Items Repeater */}
                        <div className="pt-2 border-t border-[#3c434a] space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                              Service Packages ({config.services.items.length})
                            </label>
                          </div>
                          {config.services.items.map((srv, idx) => (
                            <div
                              key={srv.id}
                              className="p-3 rounded-lg bg-[#1d2024] border border-[#3c434a] space-y-2"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-white text-[11px]">
                                  {srv.title}
                                </span>
                              </div>
                              <input
                                type="text"
                                value={srv.title}
                                onChange={(e) => {
                                  const newItems = [...config.services.items];
                                  newItems[idx].title = e.target.value;
                                  updateField("services.items", newItems);
                                }}
                                className="w-full px-2.5 py-1.5 rounded bg-[#26292c] border border-[#3c434a] text-xs text-white"
                              />
                              <textarea
                                rows={2}
                                value={srv.description}
                                onChange={(e) => {
                                  const newItems = [...config.services.items];
                                  newItems[idx].description = e.target.value;
                                  updateField("services.items", newItems);
                                }}
                                className="w-full px-2.5 py-1.5 rounded bg-[#26292c] border border-[#3c434a] text-xs text-white"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SECTION: STUDIO */}
                    {activeSectionId === "studio" && (
                      <div className="space-y-3.5">
                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Studio Title
                          </label>
                          <input
                            type="text"
                            value={config.studio.title}
                            onChange={(e) =>
                              updateField("studio.title", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Studio Philosophy
                          </label>
                          <textarea
                            rows={3}
                            value={config.studio.lead}
                            onChange={(e) =>
                              updateField("studio.lead", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>

                        {/* Image picker trigger */}
                        <div className="space-y-1 pt-2 border-t border-[#3c434a]">
                          <label className="text-[11px] font-semibold text-white/70">
                            Studio Main Photo
                          </label>
                          <div className="flex items-center gap-3">
                            <div className="w-20 h-14 rounded-lg bg-[#1d2024] border border-[#3c434a] overflow-hidden shrink-0">
                              <img
                                src={config.studio.mainImage}
                                alt="Studio"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setImagePickerTarget({
                                  path: "studio.mainImage",
                                  value: config.studio.mainImage,
                                  title: "Choose Studio Image",
                                });
                                setImagePickerOpen(true);
                              }}
                              className="px-3 py-2 rounded-lg bg-[#33373b] hover:bg-[#3f4448] text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10"
                            >
                              <ImageIcon className="size-3.5" />
                              <span>Choose Image</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SECTION: CONTACT & DESKS */}
                    {activeSectionId === "contact" && (
                      <div className="space-y-3.5">
                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Response Guarantee Badge
                          </label>
                          <input
                            type="text"
                            value={config.contact.responseTime}
                            onChange={(e) =>
                              updateField("contact.responseTime", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Direct Message Card Title
                          </label>
                          <input
                            type="text"
                            value={config.contact.directMessageTitle}
                            onChange={(e) =>
                              updateField(
                                "contact.directMessageTitle",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>

                        {/* Social Contacts Repeater */}
                        <div className="pt-2 border-t border-[#3c434a] space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                              Instant Messenger Desks ({config.socialContacts.length})
                            </label>
                          </div>
                          {config.socialContacts.map((sc, idx) => (
                            <div
                              key={sc.id}
                              className="p-2.5 rounded-lg bg-[#1d2024] border border-[#3c434a] space-y-1.5"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-white text-[11px]">
                                  {sc.label}
                                </span>
                                <span className="text-[10px] text-white/50 uppercase">
                                  {sc.platform}
                                </span>
                              </div>
                              <input
                                type="text"
                                value={sc.value}
                                onChange={(e) => {
                                  const newContacts = [...config.socialContacts];
                                  newContacts[idx].value = e.target.value;
                                  updateField("socialContacts", newContacts);
                                }}
                                className="w-full px-2 py-1 rounded bg-[#26292c] border border-[#3c434a] text-xs text-white"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SECTION: RESULTS */}
                    {activeSectionId === "results" && (
                      <div className="space-y-3.5">
                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Section Title
                          </label>
                          <input
                            type="text"
                            value={config.results.title}
                            onChange={(e) =>
                              updateField("results.title", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>

                        <div className="pt-2 border-t border-[#3c434a] space-y-2">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                            Key Metrics Proof Counters
                          </label>
                          {config.results.metrics.map((m, idx) => (
                            <div
                              key={m.id}
                              className="p-2.5 rounded-lg bg-[#1d2024] border border-[#3c434a] space-y-1.5"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-white text-[11px]">
                                  {m.label}
                                </span>
                                <span className="text-xs font-mono font-bold text-[#E24474]">
                                  {m.value}
                                  {m.suffix}
                                </span>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <input
                                  type="text"
                                  value={m.value}
                                  onChange={(e) => {
                                    const newM = [...config.results.metrics];
                                    newM[idx].value = e.target.value;
                                    updateField("results.metrics", newM);
                                  }}
                                  placeholder="Value"
                                  className="px-2 py-1 rounded bg-[#26292c] border border-[#3c434a] text-xs text-white"
                                />
                                <input
                                  type="text"
                                  value={m.suffix}
                                  onChange={(e) => {
                                    const newM = [...config.results.metrics];
                                    newM[idx].suffix = e.target.value;
                                    updateField("results.metrics", newM);
                                  }}
                                  placeholder="Suffix (e.g. x, %)"
                                  className="px-2 py-1 rounded bg-[#26292c] border border-[#3c434a] text-xs text-white"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SECTION: FOOTER */}
                    {activeSectionId === "footer" && (
                      <div className="space-y-3.5">
                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Footer Tagline
                          </label>
                          <textarea
                            rows={3}
                            value={config.footer.tagline}
                            onChange={(e) =>
                              updateField("footer.tagline", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-white/70">
                            Copyright Notice
                          </label>
                          <input
                            type="text"
                            value={config.footer.copyrightText}
                            onChange={(e) =>
                              updateField("footer.copyrightText", e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
                          />
                        </div>
                      </div>
                    )}

                    {/* Generic Fallback for highlights or about */}
                    {["highlights", "about"].includes(activeSectionId) && (
                      <div className="space-y-3">
                        <p className="text-xs text-white/70">
                          Section content is synchronized with the primary theme configuration. Use the options below or adjust typography in the Style tab.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 2: STYLE CONTROLS (Typography, Colors, Borders) */}
                {inspectorTab === "style" && (
                  <div className="space-y-4">
                    {/* Typography Section */}
                    <div className="p-3.5 rounded-xl bg-[#1d2024] border border-[#3c434a] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Type className="size-3.5 text-[#E24474]" />
                          <span>Typography</span>
                        </span>
                        <span className="text-[10px] text-white/40 font-mono">
                          Global System
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] text-white/60">Font Family</label>
                        <select
                          value={config.theme?.fontFamily || "system"}
                          onChange={(e) =>
                            updateField("theme.fontFamily", e.target.value)
                          }
                          className="w-full px-2.5 py-1.5 rounded-lg bg-[#26292c] border border-[#3c434a] text-xs text-white focus:outline-none focus:border-[#E24474]"
                        >
                          <option value="system">Native System SF Pro (Apple)</option>
                          <option value="inter">Inter + Plus Jakarta Sans (SaaS)</option>
                          <option value="playfair">Playfair Display (Editorial)</option>
                          <option value="syne">Syne + Space Grotesk (Avant-Garde)</option>
                        </select>
                      </div>
                    </div>

                    {/* Color Tokens */}
                    <div className="p-3.5 rounded-xl bg-[#1d2024] border border-[#3c434a] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Sliders className="size-3.5 text-[#E24474]" />
                          <span>Color Tokens</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="text-[10px] text-white/60">Primary</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="color"
                              value={config.colors.primary}
                              onChange={(e) =>
                                updateField("colors.primary", e.target.value)
                              }
                              className="size-7 rounded cursor-pointer bg-transparent border-0"
                            />
                            <span className="text-xs font-mono text-white">
                              {config.colors.primary}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] text-white/60">Accent</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="color"
                              value={config.colors.accent}
                              onChange={(e) =>
                                updateField("colors.accent", e.target.value)
                              }
                              className="size-7 rounded cursor-pointer bg-transparent border-0"
                            />
                            <span className="text-xs font-mono text-white">
                              {config.colors.accent}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: ADVANCED CONTROLS (Margins, Motion, Responsive) */}
                {inspectorTab === "advanced" && (
                  <div className="space-y-4">
                    {/* Padding & Margins */}
                    <div className="p-3.5 rounded-xl bg-[#1d2024] border border-[#3c434a] space-y-3">
                      <span className="text-xs font-bold text-white block">
                        Layout Spacing (px)
                      </span>
                      <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] text-white/60">
                        <div>
                          <input
                            type="number"
                            defaultValue={48}
                            className="w-full py-1 text-center bg-[#26292c] border border-[#3c434a] rounded text-white text-xs"
                          />
                          <span>Top</span>
                        </div>
                        <div>
                          <input
                            type="number"
                            defaultValue={24}
                            className="w-full py-1 text-center bg-[#26292c] border border-[#3c434a] rounded text-white text-xs"
                          />
                          <span>Right</span>
                        </div>
                        <div>
                          <input
                            type="number"
                            defaultValue={48}
                            className="w-full py-1 text-center bg-[#26292c] border border-[#3c434a] rounded text-white text-xs"
                          />
                          <span>Bottom</span>
                        </div>
                        <div>
                          <input
                            type="number"
                            defaultValue={24}
                            className="w-full py-1 text-center bg-[#26292c] border border-[#3c434a] rounded text-white text-xs"
                          />
                          <span>Left</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsive Visibility */}
                    <div className="p-3.5 rounded-xl bg-[#1d2024] border border-[#3c434a] space-y-3">
                      <span className="text-xs font-bold text-white block">
                        Responsive Visibility
                      </span>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>Hide on Desktop</span>
                          <input type="checkbox" className="rounded" />
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span>Hide on Tablet</span>
                          <input type="checkbox" className="rounded" />
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span>Hide on Mobile</span>
                          <input type="checkbox" className="rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ELEMENTOR BOTTOM DOCK ACTION BAR */}
          <div className="h-14 bg-[#1e2022] border-t border-[#3c434a] px-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setDockMode("settings")}
                className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                title="Page Settings"
              >
                <SettingsIcon className="size-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsNavigatorOpen(!isNavigatorOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isNavigatorOpen
                    ? "bg-white/20 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
                title="Toggle Elementor Navigator"
              >
                <Layers className="size-4" />
              </button>
            </div>

            {/* Signature Elementor Green UPDATE Button */}
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="px-5 py-2 rounded-xl bg-[#39b54a] hover:bg-[#2fa33f] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#39b54a]/25 flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <div className="size-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>SAVING...</span>
                </>
              ) : (
                <>
                  <Save className="size-3.5" />
                  <span>{hasChanges ? "UPDATE *" : "PUBLISHED"}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* CENTER: LIVE CANVAS VIEWPORT */}
        <div className="flex-1 bg-[#121417] overflow-y-auto p-4 md:p-6 flex flex-col items-center relative">
          {/* Viewport Frame based on responsive mode */}
          <div
            className={`w-full transition-all duration-300 bg-white text-label rounded-2xl shadow-2xl overflow-hidden border border-black/10 relative ${
              responsiveMode === "mobile"
                ? "max-w-[390px] min-h-[780px]"
                : responsiveMode === "tablet"
                ? "max-w-[768px] min-h-[900px]"
                : "max-w-6xl min-h-[1000px]"
            }`}
          >
            {/* FLOATING HEADER COMPONENT (Elementor Section) */}
            <div
              onClick={() => handleSelectSection("hero")}
              className={`p-4 border-b border-black/8 bg-white/80 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between cursor-pointer transition-all ${
                !previewCleanMode && activeSectionId === "hero"
                  ? "ring-2 ring-[#0071e3] ring-inset"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs">
                  CD
                </div>
                <span className="font-bold text-sm text-label">
                  {config.general.brandName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-full bg-blue text-white text-xs font-semibold shadow-xs"
                >
                  Book Strategy Call
                </button>
              </div>
            </div>

            {/* SECTION 1: HERO VIDEO SHOWCASE */}
            <div
              onClick={() => handleSelectSection("hero")}
              className={`relative p-6 md:p-10 transition-all cursor-pointer group ${
                !previewCleanMode && activeSectionId === "hero"
                  ? "ring-2 ring-[#0071e3] ring-offset-2"
                  : ""
              }`}
            >
              {!previewCleanMode && (
                <div className="absolute top-2 right-2 bg-[#0071e3] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm opacity-90 flex items-center gap-1 z-10">
                  <span>Edit Section: Hero</span>
                </div>
              )}

              <div className="max-w-2xl space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue/10 text-blue">
                  {config.hero.badgeText}
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-label tracking-tight leading-tight">
                  {config.hero.title}
                </h1>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {config.hero.subtitle}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-full bg-blue text-white text-xs font-bold shadow-md shadow-blue/25"
                  >
                    Start Your Project
                  </button>
                </div>
              </div>

              {/* Video clips tabs preview */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {config.hero.clips.slice(0, 4).map((clip) => (
                  <div
                    key={clip.id}
                    className="p-3 rounded-xl bg-black/5 border border-black/5 text-center space-y-1"
                  >
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">
                      {clip.label}
                    </span>
                    <p className="text-xs font-semibold text-label truncate">
                      {clip.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Elementor Add Section Divider */}
            {!previewCleanMode && (
              <div className="my-2 flex items-center justify-center relative group/add">
                <div className="h-px bg-black/10 w-full" />
                <button
                  type="button"
                  onClick={() => {
                    toast.info("Select column structure to insert new Elementor container.");
                  }}
                  className="absolute size-6 rounded-full bg-[#E24474] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                  title="Add Section"
                >
                  <Plus className="size-3.5" />
                </button>
              </div>
            )}

            {/* SECTION 2: SERVICES SHOWCASE */}
            <div
              onClick={() => handleSelectSection("services")}
              className={`p-6 md:p-10 border-t border-black/8 bg-black/[0.01] transition-all cursor-pointer group relative ${
                !previewCleanMode && activeSectionId === "services"
                  ? "ring-2 ring-[#0071e3] ring-offset-2"
                  : ""
              }`}
            >
              {!previewCleanMode && (
                <div className="absolute top-2 right-2 bg-[#0071e3] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm opacity-90 flex items-center gap-1 z-10">
                  <span>Edit Section: Services</span>
                </div>
              )}

              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold text-blue tracking-wider uppercase">
                  {config.services.kicker}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-label">
                  {config.services.title}
                </h2>
                <p className="text-xs text-muted-foreground max-w-xl">
                  {config.services.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {config.services.items.map((srv) => (
                  <div
                    key={srv.id}
                    className="p-5 rounded-2xl bg-white border border-black/8 shadow-xs space-y-2"
                  >
                    <h3 className="text-sm font-bold text-label">{srv.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3: STUDIO & KYIV LOFT */}
            <div
              onClick={() => handleSelectSection("studio")}
              className={`p-6 md:p-10 border-t border-black/8 transition-all cursor-pointer group relative ${
                !previewCleanMode && activeSectionId === "studio"
                  ? "ring-2 ring-[#0071e3] ring-offset-2"
                  : ""
              }`}
            >
              {!previewCleanMode && (
                <div className="absolute top-2 right-2 bg-[#0071e3] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm opacity-90 flex items-center gap-1 z-10">
                  <span>Edit Section: Studio</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-3">
                  <h2 className="text-2xl md:text-3xl font-black text-label">
                    {config.studio.title}
                  </h2>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {config.studio.lead}
                  </p>
                </div>
                <div className="md:col-span-5 h-48 rounded-2xl overflow-hidden bg-black/5 border border-black/8 shadow-sm">
                  <img
                    src={config.studio.mainImage}
                    alt="Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 4: RESULTS PROOF */}
            <div
              onClick={() => handleSelectSection("results")}
              className={`p-6 md:p-10 border-t border-black/8 bg-black/[0.01] transition-all cursor-pointer group relative ${
                !previewCleanMode && activeSectionId === "results"
                  ? "ring-2 ring-[#0071e3] ring-offset-2"
                  : ""
              }`}
            >
              {!previewCleanMode && (
                <div className="absolute top-2 right-2 bg-[#0071e3] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm opacity-90 flex items-center gap-1 z-10">
                  <span>Edit Section: Results</span>
                </div>
              )}

              <div className="text-center space-y-2 mb-6">
                <h2 className="text-2xl font-black text-label">
                  {config.results.title}
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {config.results.metrics.map((m) => (
                  <div
                    key={m.id}
                    className="p-4 rounded-xl bg-white border border-black/8 text-center space-y-1"
                  >
                    <div className="text-2xl font-black text-blue font-mono">
                      {m.value}
                      {m.suffix}
                    </div>
                    <div className="text-[11px] font-medium text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5: CONTACT DESKS */}
            <div
              onClick={() => handleSelectSection("contact")}
              className={`p-6 md:p-10 border-t border-black/8 transition-all cursor-pointer group relative ${
                !previewCleanMode && activeSectionId === "contact"
                  ? "ring-2 ring-[#0071e3] ring-offset-2"
                  : ""
              }`}
            >
              {!previewCleanMode && (
                <div className="absolute top-2 right-2 bg-[#0071e3] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm opacity-90 flex items-center gap-1 z-10">
                  <span>Edit Section: Contact</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {config.contact.responseTime}
                  </span>
                  <h2 className="text-2xl font-black text-label mt-2">
                    {config.contact.directMessageTitle}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {config.socialContacts.map((sc) => (
                    <div
                      key={sc.id}
                      className="p-3.5 rounded-xl bg-black/5 border border-black/5 space-y-1"
                    >
                      <div className="text-xs font-bold text-label">{sc.label}</div>
                      <div className="text-[11px] font-mono text-muted-foreground truncate">
                        {sc.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SECTION 6: FOOTER */}
            <div
              onClick={() => handleSelectSection("footer")}
              className={`p-6 border-t border-black/8 bg-black text-white text-center space-y-2 cursor-pointer transition-all ${
                !previewCleanMode && activeSectionId === "footer"
                  ? "ring-2 ring-[#0071e3] ring-inset"
                  : ""
              }`}
            >
              <p className="text-xs text-white/70">{config.footer.tagline}</p>
              <p className="text-[11px] text-white/50">
                {config.footer.copyrightText}
              </p>
            </div>
          </div>
        </div>

        {/* 3. FLOATING ELEMENTOR NAVIGATOR DRAWER */}
        {isNavigatorOpen && (
          <div className="absolute top-4 right-4 w-72 bg-[#26292c] border border-[#3c434a] rounded-2xl shadow-2xl flex flex-col z-40 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-3 bg-[#1d2024] border-b border-[#3c434a] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="size-4 text-[#E24474]" />
                <span className="text-xs font-bold text-white">Navigator</span>
              </div>
              <button
                type="button"
                onClick={() => setIsNavigatorOpen(false)}
                className="text-white/50 hover:text-white"
              >
                <X className="size-3.5" />
              </button>
            </div>

            <div className="p-2 overflow-y-auto max-h-80 space-y-1 text-xs">
              {SECTIONS_LIST.map((s) => {
                const SIcon = s.icon;
                const isSelected = activeSectionId === s.id;
                return (
                  <div
                    key={s.id}
                    onClick={() => handleSelectSection(s.id)}
                    className={`p-2 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-[#0071e3] text-white font-semibold shadow-xs"
                        : "text-white/80 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <SIcon className="size-3.5 shrink-0" />
                      <span className="truncate">{s.name}</span>
                    </div>
                    <Eye className="size-3 text-white/50 hover:text-white" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Media Picker Modal */}
      {imagePickerTarget && (
        <ImagePickerModal
          isOpen={imagePickerOpen}
          onClose={() => {
            setImagePickerOpen(false);
            setImagePickerTarget(null);
          }}
          currentValue={imagePickerTarget.value}
          title={imagePickerTarget.title}
          onSelect={(url) => {
            updateField(imagePickerTarget.path, url);
            setImagePickerOpen(false);
            setImagePickerTarget(null);
          }}
        />
      )}
    </div>
  );
}
