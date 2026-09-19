import React, { useState } from "react";
import {
  X,
  Search,
  Upload,
  Check,
  Star,
  Sparkles,
  FileArchive,
  RefreshCw,
} from "lucide-react";
import type { FullThemeItem } from "./theme-types";
import { ThemeLiveMockup } from "./ThemeLiveMockup";
import { parseThemeZip, starterTheme } from "./theme-zip";
import { toast } from "sonner";

interface ThemeDirectoryModalProps {
  catalog: FullThemeItem[];
  installedThemeIds: string[];
  activeThemeId: string;
  onClose: () => void;
  onInstallTheme: (theme: FullThemeItem) => void;
  onActivateTheme: (theme: FullThemeItem) => void;
  onPreviewTheme: (theme: FullThemeItem) => void;
  onOpenDetails: (theme: FullThemeItem) => void;
}

export function ThemeDirectoryModal({
  catalog,
  installedThemeIds,
  activeThemeId,
  onClose,
  onInstallTheme,
  onActivateTheme,
  onPreviewTheme,
  onOpenDetails,
}: ThemeDirectoryModalProps) {
  const [activeTab, setActiveTab] = useState<
    "featured" | "popular" | "latest" | "block" | "favorites" | "upload"
  >("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [installingId, setInstallingId] = useState<string | null>(null);
  const [cardViewModes, setCardViewModes] = useState<Record<string, "mockup" | "photo">>({});

  // Filter directory themes
  const filteredThemes = catalog.filter((theme) => {
    const matchesSearch =
      theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeTab === "featured") return true;
    if (activeTab === "popular") return theme.category === "popular" || theme.rating === 5;
    if (activeTab === "latest") return theme.version.startsWith("3.") || theme.version.startsWith("4.");
    if (activeTab === "block") return theme.isBlockTheme || theme.category === "block";
    if (activeTab === "favorites") return theme.rating === 5;
    return true;
  });

  const handleInstall = (theme: FullThemeItem) => {
    setInstallingId(theme.id);
    toast.info(`Downloading package for "${theme.name}"...`);

    setTimeout(() => {
      onInstallTheme({
        ...theme,
        isInstalled: true,
      });
      setInstallingId(null);
      toast.success(`Theme "${theme.name}" successfully installed!`);
    }, 900);
  };

  const handleCustomUploadPackage = (kind: "child" | "editorial" | "saas" | "dark") => {
    const customTheme = starterTheme(kind);
    onInstallTheme(customTheme);
    toast.success(`“${customTheme.name}” added to installed themes.`);
  };

  const handleRealZipUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    toast.info(`Unpacking ${file.name}…`);
    try {
      const theme = await parseThemeZip(file);
      onInstallTheme(theme);
      toast.success(`“${theme.name}” extracted and installed.`);
    } catch (err) {
      toast.error(`Could not read that zip: ${String(err)}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-6xl w-full h-[90vh] border border-black/10 shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-black/8 flex items-center justify-between flex-wrap gap-3 bg-[#f0f0f1]">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-[#2271b1] text-white flex items-center justify-center shadow-xs">
              <Sparkles className="size-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900">
                Add Themes &bull; WordPress Theme Directory
              </h2>
              <p className="text-xs text-gray-600">
                Browse thousands of free, responsive WordPress themes and Full Site Editing templates.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="size-8 rounded-full bg-white border border-gray-300 text-gray-600 hover:text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Sub-Nav Tabs & Search Bar */}
        <div className="px-5 py-3 border-b border-black/6 flex items-center justify-between flex-wrap gap-3 bg-white">
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-semibold">
            {[
              { id: "featured", label: "Featured" },
              { id: "popular", label: "Popular" },
              { id: "latest", label: "Latest" },
              { id: "block", label: "Block Themes" },
              { id: "favorites", label: "Favorites" },
              { id: "upload", label: "Upload Theme (.zip)" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#2271b1] text-white font-bold"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab !== "upload" && (
            <div className="relative w-full sm:w-64">
              <Search className="size-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search themes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2271b1]"
              />
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-5 bg-[#f6f7f7]">
          {activeTab === "upload" ? (
            /* Upload Theme Panel */
            <div className="max-w-2xl mx-auto py-8 space-y-6">
              <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-300 text-center space-y-4 shadow-xs">
                <div className="size-14 rounded-2xl bg-[#2271b1]/10 text-[#2271b1] mx-auto flex items-center justify-center">
                  <Upload className="size-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-gray-900">
                    Upload a theme in .zip format
                  </h3>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    If you have a theme in a .zip format, you may install or update it by uploading it here.
                  </p>
                </div>

                <div className="pt-2">
                  <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer">
                    <FileArchive className="size-4" />
                    <span>Choose File (.zip)</span>
                    <input
                      type="file"
                      accept=".zip"
                      onChange={handleRealZipUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Pre-packaged Starters */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Ready-to-Install Pre-Packaged Themes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      kind: "child" as const,
                      name: "Codex Dynamics Child Theme",
                      desc: "Official starter child theme inheriting the floating island and streamer.",
                    },
                    {
                      kind: "editorial" as const,
                      name: "Minimalist High-Contrast Editorial",
                      desc: "Serif masthead, paper canvas, editorial hero for prestige publishing.",
                    },
                    {
                      kind: "saas" as const,
                      name: "SaaS Rocket Launchpad",
                      desc: "Bento grid, sticky product bar, and a wide 1440px stage.",
                    },
                    {
                      kind: "dark" as const,
                      name: "Dark Tech Studio FSE",
                      desc: "OLED black, split cinema, and teal signals — night-mode FSE.",
                    },
                  ].map((starter) => (
                    <div
                      key={starter.kind}
                      className="p-4 bg-white rounded-xl border border-black/8 hover:border-black/20 transition-all flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-gray-900">{starter.name}</div>
                        <div className="text-[11px] text-gray-500 line-clamp-1">{starter.desc}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCustomUploadPackage(starter.kind)}
                        className="px-3 py-1.5 text-xs font-bold bg-gray-100 hover:bg-[#2271b1] hover:text-white rounded-lg transition-colors shrink-0 ml-2"
                      >
                        Install
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Directory Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredThemes.map((theme) => {
                const isInstalled = installedThemeIds.includes(theme.id);
                const isActive = theme.id === activeThemeId;
                const isInstalling = installingId === theme.id;
                const viewMode = cardViewModes[theme.id] || "mockup";

                return (
                  <div
                    key={theme.id}
                    className="bg-white rounded-2xl border border-black/8 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
                  >
                    {/* Thumbnail View (Toggle between Live Interactive Mockup & Cover Photo) */}
                    <div className="h-44 relative overflow-hidden bg-gray-100">
                      {viewMode === "mockup" ? (
                        <ThemeLiveMockup theme={theme} isCompact={true} />
                      ) : (
                        <img
                          src={theme.screenshotUrl}
                          alt={theme.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}

                      {/* View Mode Toggle Pill on Thumbnail */}
                      <div className="absolute top-2.5 right-2.5 z-10 flex items-center bg-black/60 backdrop-blur-xs p-0.5 rounded-lg text-[9px] text-white">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardViewModes((prev) => ({ ...prev, [theme.id]: "mockup" }));
                          }}
                          className={`px-2 py-0.5 rounded-md transition-colors ${
                            viewMode === "mockup" ? "bg-[#2271b1] font-bold" : "opacity-75 hover:opacity-100"
                          }`}
                        >
                          Live UI
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardViewModes((prev) => ({ ...prev, [theme.id]: "photo" }));
                          }}
                          className={`px-2 py-0.5 rounded-md transition-colors ${
                            viewMode === "photo" ? "bg-[#2271b1] font-bold" : "opacity-75 hover:opacity-100"
                          }`}
                        >
                          Cover
                        </button>
                      </div>

                      {isActive && (
                        <div className="absolute top-2.5 left-2.5 z-10 bg-[#2271b1] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-sm">
                          Active Theme
                        </div>
                      )}

                      {isInstalled && !isActive && (
                        <div className="absolute top-2.5 left-2.5 z-10 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                          Installed
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 z-20">
                        {isInstalling ? (
                          <div className="flex items-center gap-2 text-white text-xs font-semibold bg-[#2271b1] px-4 py-2 rounded-xl">
                            <RefreshCw className="size-4 animate-spin" />
                            <span>Installing...</span>
                          </div>
                        ) : isActive ? (
                          <button
                            type="button"
                            onClick={() => onPreviewTheme(theme)}
                            className="w-full py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                          >
                            Customize Active Theme
                          </button>
                        ) : isInstalled ? (
                          <button
                            type="button"
                            onClick={() => onActivateTheme(theme)}
                            className="w-full py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                          >
                            Activate Theme
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleInstall(theme)}
                            className="w-full py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                          >
                            Install Now
                          </button>
                        )}

                        <div className="flex items-center gap-2 w-full">
                          <button
                            type="button"
                            onClick={() => onPreviewTheme(theme)}
                            className="flex-1 py-1.5 bg-white/90 hover:bg-white text-gray-900 text-xs font-semibold rounded-xl shadow-xs transition-colors"
                          >
                            Live Preview
                          </button>
                          <button
                            type="button"
                            onClick={() => onOpenDetails(theme)}
                            className="flex-1 py-1.5 bg-white/90 hover:bg-white text-gray-900 text-xs font-semibold rounded-xl shadow-xs transition-colors"
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-bold text-gray-900 truncate">
                            {theme.name}
                          </h3>
                          <div className="flex items-center gap-0.5 text-amber-500 text-xs font-semibold">
                            <Star className="size-3 fill-amber-500" />
                            <span>{theme.rating}.0</span>
                          </div>
                        </div>

                        <p className="text-[11px] text-gray-500 mt-0.5">
                          By {theme.author} &bull; v{theme.version}
                        </p>

                        <p className="text-xs text-gray-600 line-clamp-2 mt-2 leading-relaxed">
                          {theme.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-black/4 flex items-center justify-between text-[11px]">
                        <span className="font-mono text-gray-500 text-[10px]">
                          {theme.activeCount} active
                        </span>

                        <div className="flex items-center gap-1.5">
                          {isInstalled ? (
                            <span className="text-emerald-600 font-semibold flex items-center gap-1">
                              <Check className="size-3.5" /> Ready
                            </span>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleInstall(theme)}
                              disabled={isInstalling}
                              className="text-[#2271b1] hover:underline font-semibold"
                            >
                              Install
                            </button>
                          )}
                        </div>
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
  );
}
