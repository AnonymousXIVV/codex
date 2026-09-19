import React, { useState } from "react";
import { Code2, Save, FileCode, AlertCircle, Check, Info } from "lucide-react";
import type { FullThemeItem } from "./theme-types";
import { toast } from "sonner";

interface ThemeFileEditorViewProps {
  themes: FullThemeItem[];
  currentThemeId: string;
  onUpdateFile: (themeId: string, filename: string, content: string) => void;
}

export function ThemeFileEditorView({
  themes,
  currentThemeId,
  onUpdateFile,
}: ThemeFileEditorViewProps) {
  const [selectedThemeId, setSelectedThemeId] = useState(currentThemeId);
  const [selectedFilename, setSelectedFilename] = useState("style.css");
  const selectedTheme = themes.find((t) => t.id === selectedThemeId) || themes[0];

  const initialContent = selectedTheme?.files?.[selectedFilename] || "";
  const [fileContent, setFileContent] = useState(initialContent);
  const [isSaved, setIsSaved] = useState(false);

  // When selected theme or filename changes, update local editor content
  const handleSelectFile = (filename: string) => {
    setSelectedFilename(filename);
    setFileContent(selectedTheme.files?.[filename] || "");
    setIsSaved(false);
  };

  const handleSelectTheme = (themeId: string) => {
    setSelectedThemeId(themeId);
    const target = themes.find((t) => t.id === themeId);
    if (target) {
      setFileContent(target.files?.[selectedFilename] || target.files?.["style.css"] || "");
    }
    setIsSaved(false);
  };

  const handleSave = () => {
    onUpdateFile(selectedThemeId, selectedFilename, fileContent);
    setIsSaved(true);
    toast.success(`File "${selectedFilename}" saved to theme "${selectedTheme.name}"!`);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const fileKeys = Object.keys(selectedTheme?.files || { "style.css": "" });

  return (
    <div className="bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-black/6 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-gray-900">
              WordPress Theme File Editor
            </h2>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#2271b1]/10 text-[#2271b1]">
              wp-admin/theme-editor.php
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            Edit stylesheets, theme templates, and PHP functions directly in the browser.
          </p>
        </div>

        {/* Theme Selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-gray-700">Select theme to edit:</label>
          <select
            value={selectedThemeId}
            onChange={(e) => handleSelectTheme(e.target.value)}
            className="text-xs px-3 py-1.5 rounded-lg border border-gray-300 bg-gray-50 font-medium text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#2271b1]"
          >
            {themes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} {t.id === currentThemeId ? "(Active)" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 p-3 bg-amber-50 text-amber-900 border border-amber-200 rounded-xl text-xs">
        <AlertCircle className="size-4 shrink-0 text-amber-600" />
        <span>
          <strong>Caution:</strong> Making direct edits to active theme files here takes effect immediately. We recommend testing changes in the Live Customizer or using a Child Theme.
        </span>
      </div>

      {/* Editor & File List Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Editor Area */}
        <div className="lg:col-span-9 bg-[#1e1e1e] rounded-xl overflow-hidden border border-black/20 flex flex-col">
          <div className="h-10 px-4 bg-[#2d2d2d] flex items-center justify-between text-xs text-gray-300 font-mono border-b border-[#3e3e3e]">
            <div className="flex items-center gap-2">
              <Code2 className="size-4 text-[#2271b1]" />
              <span className="text-white font-bold">{selectedFilename}</span>
              <span className="text-[10px] text-gray-400">({selectedTheme.name})</span>
            </div>
            <span className="text-[10px] text-gray-400">UTF-8 &bull; Read/Write</span>
          </div>

          <textarea
            value={fileContent}
            onChange={(e) => {
              setFileContent(e.target.value);
              setIsSaved(false);
            }}
            rows={18}
            className="w-full p-4 font-mono text-xs bg-[#1e1e1e] text-gray-200 leading-relaxed focus:outline-hidden resize-y"
            spellCheck={false}
          />

          <div className="p-3 bg-[#2d2d2d] border-t border-[#3e3e3e] flex items-center justify-between">
            <span className="text-[11px] text-gray-400 font-mono">
              Lines: {fileContent.split("\n").length} &bull; Characters: {fileContent.length}
            </span>

            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              {isSaved ? <Check className="size-3.5" /> : <Save className="size-3.5" />}
              <span>{isSaved ? "File Updated!" : "Update File"}</span>
            </button>
          </div>
        </div>

        {/* Sidebar File Picker */}
        <div className="lg:col-span-3 space-y-3">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-2">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Theme Templates
            </h4>
            <div className="space-y-1">
              {fileKeys.map((fname) => (
                <button
                  key={fname}
                  type="button"
                  onClick={() => handleSelectFile(fname)}
                  className={`w-full px-3 py-2 rounded-lg text-xs font-mono text-left flex items-center gap-2 transition-colors ${
                    selectedFilename === fname
                      ? "bg-[#2271b1] text-white font-bold"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FileCode className="size-3.5" />
                  <span className="truncate">{fname}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-1">
            <div className="font-bold flex items-center gap-1">
              <Info className="size-3.5" />
              <span>WordPress Codex Reference</span>
            </div>
            <p className="text-[11px] text-blue-800 leading-relaxed">
              Theme hierarchy begins at <code>index.php</code>, styled by <code>style.css</code>, with block styling in <code>theme.json</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
