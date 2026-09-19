import React, { useState } from "react";
import {
  X,
  Star,
  ChevronLeft,
  ChevronRight,
  Code2,
  FileCode,
  Download,
  Copy,
  Trash2,
  Check,
} from "lucide-react";
import type { FullThemeItem } from "./theme-types";
import { ThemeLiveMockup } from "./ThemeLiveMockup";
import JSZip from "jszip";
import { toast } from "sonner";

interface ThemeDetailsModalProps {
  theme: FullThemeItem;
  allThemes: FullThemeItem[];
  isActive: boolean;
  onClose: () => void;
  onSelectTheme: (theme: FullThemeItem) => void;
  onActivateTheme: (theme: FullThemeItem) => void;
  onPreviewTheme: (theme: FullThemeItem) => void;
  onDeleteTheme?: (themeId: string) => void;
  onCreateChildTheme: (parentTheme: FullThemeItem, childName: string) => void;
}

export function ThemeDetailsModal({
  theme,
  allThemes,
  isActive,
  onClose,
  onSelectTheme,
  onActivateTheme,
  onPreviewTheme,
  onDeleteTheme,
  onCreateChildTheme,
}: ThemeDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "files" | "child" | "export">("overview");
  const [selectedFile, setSelectedFile] = useState<string>("style.css");
  const [childThemeName, setChildThemeName] = useState(`${theme.name} Child`);
  const [isExporting, setIsExporting] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  // Theme navigation (Prev / Next)
  const currentIndex = allThemes.findIndex((t) => t.id === theme.id);
  const prevTheme = currentIndex > 0 ? allThemes[currentIndex - 1] : allThemes[allThemes.length - 1];
  const nextTheme = currentIndex < allThemes.length - 1 ? allThemes[currentIndex + 1] : allThemes[0];

  const filesList = Object.keys(theme.files || {
    "style.css": "",
    "functions.php": "",
    "theme.json": "",
  });

  const currentFileContent =
    theme.files?.[selectedFile] || `/* No content defined for ${selectedFile} */`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentFileContent);
    setHasCopied(true);
    toast.success(`Copied ${selectedFile} to clipboard!`);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const handleExportZip = async () => {
    setIsExporting(true);
    toast.info(`Packaging theme "${theme.name}" into .zip archive...`);
    try {
      const zip = new JSZip();
      const folder = zip.folder(theme.id) || zip;

      // Add all theme files
      for (const [filename, content] of Object.entries(theme.files || {})) {
        folder.file(filename, content);
      }

      // Add a readme.txt file
      folder.file(
        "readme.txt",
        `=== ${theme.name} ===\nContributors: ${theme.author}\nRequires at least: ${theme.wpVersion || "6.4"}\nTested up to: 6.7\nStable tag: ${theme.version}\nLicense: GPLv2 or later\n\n${theme.description}\n`
      );

      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${theme.id}-v${theme.version}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success(`Theme package ${theme.id}.zip downloaded successfully!`);
    } catch (err) {
      toast.error(`Export failed: ${String(err)}`);
    } finally {
      setIsExporting(false);
    }
  };

  const handleCreateChild = () => {
    if (!childThemeName.trim()) {
      toast.error("Please enter a valid Child Theme name.");
      return;
    }
    onCreateChildTheme(theme, childThemeName.trim());
    toast.success(`Child theme "${childThemeName}" generated and installed!`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-4xl w-full h-[90vh] border border-black/10 shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header with Theme Cycle Controls */}
        <div className="p-4 border-b border-black/8 flex items-center justify-between bg-[#f0f0f1] shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectTheme(prevTheme)}
              className="p-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-colors"
              title={`Previous: ${prevTheme.name}`}
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => onSelectTheme(nextTheme)}
              className="p-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-colors"
              title={`Next: ${nextTheme.name}`}
            >
              <ChevronRight className="size-4" />
            </button>
            <span className="text-xs font-semibold text-gray-500 ml-2">
              Theme {currentIndex + 1} of {allThemes.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="size-8 rounded-full bg-white border border-gray-300 text-gray-600 hover:text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Hero Banner with Live UI preview & metadata */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black/8 shrink-0 bg-white">
          <div className="md:col-span-5 h-56 bg-gray-100 relative overflow-hidden border-b md:border-b-0 md:border-r border-black/8">
            <ThemeLiveMockup theme={theme} isCompact={false} />
            {isActive && (
              <div className="absolute top-3 left-3 bg-[#2271b1] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-sm">
                Active Theme
              </div>
            )}
          </div>

          <div className="md:col-span-7 p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{theme.name}</h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Version {theme.version} &bull; By{" "}
                    <a
                      href={theme.authorUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#2271b1] hover:underline font-medium"
                    >
                      {theme.author}
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  <Star className="size-3.5 fill-amber-500" />
                  <span>{theme.rating}.0</span>
                  <span className="text-gray-500 font-normal">({theme.reviewsCount})</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap mt-3">
                {theme.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-black/6">
              {isActive ? (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onPreviewTheme(theme);
                  }}
                  className="px-4 py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                >
                  Customize Active Theme
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    onActivateTheme(theme);
                    onClose();
                  }}
                  className="px-4 py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                >
                  Activate This Theme
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onPreviewTheme(theme);
                }}
                className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl transition-colors"
              >
                Live Preview
              </button>

              <button
                type="button"
                onClick={handleExportZip}
                disabled={isExporting}
                className="px-3 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 ml-auto"
                title="Download Theme .zip package"
              >
                <Download className="size-3.5" />
                <span className="hidden sm:inline">Export .zip</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-black/8 flex items-center gap-6 text-xs font-semibold bg-white shrink-0">
          {[
            { id: "overview", label: "Theme Overview" },
            { id: "files", label: "Template Files Inspector" },
            { id: "child", label: "Create Child Theme" },
            { id: "export", label: "Package & Export" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 border-b-2 transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "border-[#2271b1] text-[#2271b1] font-bold"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#f9fafb]">
          {activeTab === "overview" && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Description</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {theme.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white border border-black/8">
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">PHP Version</div>
                  <div className="text-xs font-bold text-gray-900 mt-0.5">{theme.phpVersion || "8.0+"}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">WordPress Version</div>
                  <div className="text-xs font-bold text-gray-900 mt-0.5">{theme.wpVersion || "6.4+"}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Active Installs</div>
                  <div className="text-xs font-bold text-gray-900 mt-0.5">{theme.activeCount}</div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Color Tokens</h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {Object.entries(theme.colors).map(([key, val]) => (
                    <div
                      key={key}
                      className="p-2.5 rounded-xl bg-white border border-black/8 flex items-center gap-2"
                    >
                      <span
                        className="size-5 rounded-lg border border-black/10 shadow-2xs"
                        style={{ backgroundColor: val }}
                      />
                      <div>
                        <div className="text-[10px] text-gray-500 capitalize">{key}</div>
                        <div className="text-xs font-mono font-bold text-gray-900 uppercase">{val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {theme.isCustom && onDeleteTheme && !isActive && (
                <div className="pt-4 border-t border-red-200">
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Are you sure you want to delete "${theme.name}"?`)) {
                        onDeleteTheme(theme.id);
                        onClose();
                      }
                    }}
                    className="flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 font-semibold"
                  >
                    <Trash2 className="size-4" />
                    <span>Delete Theme</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === "files" && (
            <div className="flex flex-col md:flex-row gap-4 h-full">
              {/* Files List */}
              <div className="w-full md:w-56 bg-white rounded-xl border border-black/8 p-2 shrink-0 space-y-1">
                <div className="text-[10px] uppercase font-bold text-gray-400 px-3 py-1">
                  Theme Files
                </div>
                {filesList.map((filename) => (
                  <button
                    key={filename}
                    type="button"
                    onClick={() => setSelectedFile(filename)}
                    className={`w-full px-3 py-2 rounded-lg text-xs font-mono text-left flex items-center gap-2 transition-colors ${
                      selectedFile === filename
                        ? "bg-[#2271b1] text-white font-bold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <FileCode className="size-3.5" />
                    <span className="truncate">{filename}</span>
                  </button>
                ))}
              </div>

              {/* Code Viewer */}
              <div className="flex-1 bg-[#1e1e1e] rounded-xl overflow-hidden flex flex-col border border-black/20">
                <div className="h-10 px-4 bg-[#2d2d2d] flex items-center justify-between text-xs text-gray-300 font-mono border-b border-[#3e3e3e]">
                  <div className="flex items-center gap-2">
                    <Code2 className="size-4 text-[#2271b1]" />
                    <span>{selectedFile}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors"
                  >
                    {hasCopied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                    <span>{hasCopied ? "Copied" : "Copy Code"}</span>
                  </button>
                </div>

                <div className="flex-1 overflow-auto p-4 font-mono text-xs text-gray-200 leading-relaxed">
                  <pre>{currentFileContent}</pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === "child" && (
            <div className="max-w-xl space-y-4 bg-white p-6 rounded-2xl border border-black/8">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-gray-900">
                  Generate WordPress Child Theme
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  A child theme inherits all styles and functions from <strong>{theme.name}</strong>, allowing you to make modifications safely without losing changes during theme updates.
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">
                  Child Theme Name
                </label>
                <input
                  type="text"
                  value={childThemeName}
                  onChange={(e) => setChildThemeName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2271b1] focus:outline-hidden"
                />
              </div>

              <div className="p-3 bg-blue-50 text-blue-900 rounded-xl text-xs space-y-1 border border-blue-200">
                <div className="font-semibold">Generated Files:</div>
                <div className="font-mono text-[11px] text-blue-800">
                  &bull; {childThemeName.toLowerCase().replace(/\s+/g, "-")}/style.css (Template: {theme.id})<br />
                  &bull; {childThemeName.toLowerCase().replace(/\s+/g, "-")}/functions.php (Enqueues parent stylesheet)
                </div>
              </div>

              <button
                type="button"
                onClick={handleCreateChild}
                className="w-full py-2.5 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                Create &amp; Install Child Theme
              </button>
            </div>
          )}

          {activeTab === "export" && (
            <div className="max-w-xl space-y-4 bg-white p-6 rounded-2xl border border-black/8 text-center">
              <div className="size-12 rounded-2xl bg-[#2271b1]/10 text-[#2271b1] mx-auto flex items-center justify-center">
                <Download className="size-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-gray-900">
                  Export Theme ZIP Archive
                </h3>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  Package <strong>{theme.name}</strong> (v{theme.version}) into a standard WordPress-compatible .zip archive for deployment to any external WordPress server or hosting provider.
                </p>
              </div>

              <button
                type="button"
                onClick={handleExportZip}
                disabled={isExporting}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer"
              >
                <Download className="size-4" />
                <span>{isExporting ? "Generating ZIP..." : "Download Theme .zip"}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
