import { useEffect, useMemo, useState } from "react";
import { Check, Monitor, Smartphone, Tablet, X } from "lucide-react";
import type { FullThemeItem } from "@/components/admin/themes/theme-types";
import type { SiteConfig } from "@/types/site-editor";
import { applyThemeToConfig, type PreviewPage } from "@/lib/theme-engine";
import { ThemePreviewStage } from "./ThemePreviewStage";

const PAGES: { id: PreviewPage; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "studio", label: "Studio" },
  { id: "blog", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export function ThemeLivePreview({
  theme,
  config,
  onClose,
  onActivate,
}: {
  theme: FullThemeItem;
  config: SiteConfig;
  onClose: () => void;
  onActivate: (theme: FullThemeItem) => void;
}) {
  const [page, setPage] = useState<PreviewPage>("home");
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const previewConfig = useMemo(() => applyThemeToConfig(config, theme), [config, theme]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] flex flex-col bg-[#111113] text-white">
      <div className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-white/10 px-3 sm:px-5">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-xs font-semibold hover:bg-white/16"
        >
          <X className="size-4 text-rose-300" />
          Close preview
        </button>

        <div className="hidden min-w-0 items-center gap-2 md:flex">
          <span className="truncate text-xs font-semibold text-white/80">{theme.name}</span>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/60">
            Live site content
          </span>
        </div>

        <div className="hidden items-center rounded-full bg-white/8 p-1 lg:flex">
          {PAGES.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPage(p.id)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                page === p.id ? "bg-white text-zinc-900" : "text-white/70 hover:text-white"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full bg-white/8 p-1 sm:flex">
            <button type="button" onClick={() => setDevice("desktop")} className={`rounded-full p-1.5 ${device === "desktop" ? "bg-white text-zinc-900" : "text-white/60"}`} aria-label="Desktop">
              <Monitor className="size-3.5" />
            </button>
            <button type="button" onClick={() => setDevice("tablet")} className={`rounded-full p-1.5 ${device === "tablet" ? "bg-white text-zinc-900" : "text-white/60"}`} aria-label="Tablet">
              <Tablet className="size-3.5" />
            </button>
            <button type="button" onClick={() => setDevice("mobile")} className={`rounded-full p-1.5 ${device === "mobile" ? "bg-white text-zinc-900" : "text-white/60"}`} aria-label="Mobile">
              <Smartphone className="size-3.5" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => onActivate(theme)}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0071e3] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#0077ed]"
          >
            <Check className="size-3.5" />
            Activate
          </button>
        </div>
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-white/8 px-3 py-2 lg:hidden">
        {PAGES.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPage(p.id)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium ${
              page === p.id ? "bg-white text-zinc-900" : "bg-white/8 text-white/70"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="relative min-h-0 flex-1 overflow-auto bg-[#0b0b0d] p-3 sm:p-5">
        <div className={`mx-auto ${device === "desktop" ? "max-w-[1400px]" : "flex justify-center"}`}>
          <ThemePreviewStage config={previewConfig} page={page} device={device} onNavigate={setPage} />
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="absolute bottom-5 right-5 z-[81] inline-flex items-center gap-2 rounded-full bg-zinc-900/90 px-4 py-2.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/15 backdrop-blur-md hover:bg-zinc-800"
      >
        <X className="size-4" />
        Exit preview
      </button>
    </div>
  );
}
