import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUp,
  Check,
  Eye,
  EyeOff,
  Layout,
  Monitor,
  Palette,
  RotateCcw,
  Smartphone,
  Tablet,
  Type,
  X,
} from "lucide-react";
import type { FullThemeItem } from "./theme-types";
import type { SiteColors, SiteConfig } from "@/types/site-editor";
import { applyThemeToConfig, DEFAULT_HOME_SEQUENCE, type PreviewPage } from "@/lib/theme-engine";
import { COLOR_SLOTS } from "@/lib/theme-palettes";
import { ThemePreviewStage } from "@/components/theme/ThemePreviewStage";
import { toast } from "sonner";

interface ThemeCustomizerModalProps {
  theme: FullThemeItem;
  config: SiteConfig;
  onClose: () => void;
  onSaveAndActivate: (customizedTheme: FullThemeItem, newColors: SiteColors) => Promise<void>;
}

const SECTION_LABELS: Record<string, string> = {
  hero: "Hero",
  highlights: "Highlights",
  portfolio: "Work",
  results: "Results",
  reviews: "Reviews",
  about: "Process",
  services: "Services",
  studio: "Studio",
  blog: "Insights",
  contact: "Contact",
};

const PAGES: { id: PreviewPage; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "studio", label: "Studio" },
  { id: "blog", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export function ThemeCustomizerModal({
  theme,
  config,
  onClose,
  onSaveAndActivate,
}: ThemeCustomizerModalProps) {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [previewPage, setPreviewPage] = useState<PreviewPage>("home");
  const [isSaving, setIsSaving] = useState(false);
  const [panel, setPanel] = useState<"layout" | "colors" | "type">("layout");

  const [colors, setColors] = useState<SiteColors>({ ...theme.colors });
  const [fontFamily, setFontFamily] = useState(theme.fontFamily || "system");
  const [headerStyle, setHeaderStyle] = useState(theme.headerStyle || "floating");
  const [containerWidth, setContainerWidth] = useState(theme.containerWidth || "1280px");
  const [borderRadius, setBorderRadius] = useState(theme.borderRadius || "modern");
  const [heroLayout, setHeroLayout] = useState(theme.heroLayout || theme.layout?.heroLayout || "streamer");
  const [cardStyle, setCardStyle] = useState(theme.layout?.cardStyle || "glass");
  const [fontSizeScale, setFontSizeScale] = useState(theme.layout?.fontSizeScale || "normal");
  const [sectionsOrder, setSectionsOrder] = useState<string[]>(
    theme.layout?.sectionsOrder || [...DEFAULT_HOME_SEQUENCE],
  );
  const [sectionVisibility, setSectionVisibility] = useState<Record<string, boolean>>(
    theme.layout?.sectionVisibility || Object.fromEntries(DEFAULT_HOME_SEQUENCE.map((id) => [id, true])),
  );
  const [customCss, setCustomCss] = useState(theme.customCss || "");

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

  const draftTheme: FullThemeItem = useMemo(
    () => ({
      ...theme,
      colors,
      fontFamily,
      headerStyle,
      containerWidth,
      borderRadius,
      heroLayout,
      customCss,
      layout: {
        heroLayout,
        sectionsOrder,
        sectionVisibility,
        cardStyle,
        fontSizeScale,
      },
    }),
    [
      theme,
      colors,
      fontFamily,
      headerStyle,
      containerWidth,
      borderRadius,
      heroLayout,
      customCss,
      sectionsOrder,
      sectionVisibility,
      cardStyle,
      fontSizeScale,
    ],
  );

  const previewConfig = useMemo(
    () => applyThemeToConfig(config, draftTheme, colors),
    [config, draftTheme, colors],
  );

  const moveSection = (index: number, direction: "up" | "down") => {
    const next = [...sectionsOrder];
    const target = direction === "up" ? index - 1 : index + 1;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setSectionsOrder(next);
  };

  const handlePublish = async () => {
    setIsSaving(true);
    try {
      await onSaveAndActivate(draftTheme, colors);
      toast.success(`“${theme.name}” is live on the site.`);
      onClose();
    } catch (err) {
      toast.error(`Could not publish: ${String(err)}`);
    } finally {
      setIsSaving(false);
    }
  };

  const reset = () => {
    setColors({ ...theme.colors });
    setFontFamily(theme.fontFamily);
    setHeaderStyle(theme.headerStyle);
    setContainerWidth(theme.containerWidth);
    setBorderRadius(theme.borderRadius);
    setHeroLayout(theme.heroLayout || "streamer");
    setCardStyle(theme.layout?.cardStyle || "glass");
    setFontSizeScale(theme.layout?.fontSizeScale || "normal");
    setSectionsOrder(theme.layout?.sectionsOrder || [...DEFAULT_HOME_SEQUENCE]);
    setSectionVisibility(
      theme.layout?.sectionVisibility || Object.fromEntries(DEFAULT_HOME_SEQUENCE.map((id) => [id, true])),
    );
    setCustomCss(theme.customCss || "");
    toast.info("Reset to this theme’s defaults.");
  };

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
        <div className="hidden min-w-0 md:block">
          <div className="truncate text-xs font-semibold">{theme.name}</div>
          <div className="text-[10px] text-white/50">Editing layout on live site content</div>
        </div>
        <div className="hidden items-center rounded-full bg-white/8 p-1 lg:flex">
          {PAGES.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPreviewPage(p.id)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                previewPage === p.id ? "bg-white text-zinc-900" : "text-white/70"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full bg-white/8 p-1 sm:flex">
            <button type="button" onClick={() => setDevice("desktop")} className={`rounded-full p-1.5 ${device === "desktop" ? "bg-white text-zinc-900" : "text-white/60"}`}>
              <Monitor className="size-3.5" />
            </button>
            <button type="button" onClick={() => setDevice("tablet")} className={`rounded-full p-1.5 ${device === "tablet" ? "bg-white text-zinc-900" : "text-white/60"}`}>
              <Tablet className="size-3.5" />
            </button>
            <button type="button" onClick={() => setDevice("mobile")} className={`rounded-full p-1.5 ${device === "mobile" ? "bg-white text-zinc-900" : "text-white/60"}`}>
              <Smartphone className="size-3.5" />
            </button>
          </div>
          <button type="button" onClick={reset} className="rounded-full p-2 text-white/60 hover:bg-white/10" aria-label="Reset">
            <RotateCcw className="size-4" />
          </button>
          <button
            type="button"
            disabled={isSaving}
            onClick={() => void handlePublish()}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0071e3] px-3.5 py-2 text-xs font-semibold hover:bg-[#0077ed] disabled:opacity-50"
          >
            <Check className="size-3.5" />
            {isSaving ? "Publishing…" : "Publish"}
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-[320px] shrink-0 overflow-y-auto border-r border-white/10 bg-[#1c1c1e] md:block">
          <div className="flex gap-1 border-b border-white/8 p-2">
            {[
              { id: "layout" as const, label: "Layout", icon: Layout },
              { id: "colors" as const, label: "Color", icon: Palette },
              { id: "type" as const, label: "Type", icon: Type },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setPanel(tab.id)}
                className={`flex flex-1 items-center justify-center gap-1 rounded-lg py-2 text-[11px] font-semibold ${
                  panel === tab.id ? "bg-white text-zinc-900" : "text-white/60 hover:bg-white/8"
                }`}
              >
                <tab.icon className="size-3.5" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-5 p-4 text-xs">
            {panel === "layout" && (
              <>
                <Field label="Header">
                  {(["floating", "sticky", "classic", "minimal"] as const).map((id) => (
                    <Chip key={id} active={headerStyle === id} onClick={() => setHeaderStyle(id)}>
                      {id}
                    </Chip>
                  ))}
                </Field>
                <Field label="Hero">
                  {(["streamer", "split", "centered", "editorial", "bento"] as const).map((id) => (
                    <Chip key={id} active={heroLayout === id} onClick={() => setHeroLayout(id)}>
                      {id}
                    </Chip>
                  ))}
                </Field>
                <Field label="Cards">
                  {(["glass", "elevated", "bordered", "flat"] as const).map((id) => (
                    <Chip key={id} active={cardStyle === id} onClick={() => setCardStyle(id)}>
                      {id}
                    </Chip>
                  ))}
                </Field>
                <Field label="Width">
                  {(["1200px", "1280px", "1440px", "full"] as const).map((id) => (
                    <Chip key={id} active={containerWidth === id} onClick={() => setContainerWidth(id)}>
                      {id}
                    </Chip>
                  ))}
                </Field>
                <Field label="Corners">
                  {(["sharp", "clean", "modern", "pill"] as const).map((id) => (
                    <Chip key={id} active={borderRadius === id} onClick={() => setBorderRadius(id)}>
                      {id}
                    </Chip>
                  ))}
                </Field>
                <div>
                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-white/50">
                    Section order
                  </div>
                  <div className="space-y-1">
                    {sectionsOrder.map((id, index) => (
                      <div key={id} className="flex items-center gap-1 rounded-lg bg-white/6 px-2 py-1.5">
                        <span className="flex-1 font-medium text-white/90">{SECTION_LABELS[id] || id}</span>
                        <button type="button" onClick={() => setSectionVisibility((v) => ({ ...v, [id]: v[id] === false }))} className="p-1 text-white/50 hover:text-white">
                          {sectionVisibility[id] === false ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
                        </button>
                        <button type="button" onClick={() => moveSection(index, "up")} className="p-1 text-white/50 hover:text-white">
                          <ArrowUp className="size-3.5" />
                        </button>
                        <button type="button" onClick={() => moveSection(index, "down")} className="p-1 text-white/50 hover:text-white">
                          <ArrowDown className="size-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {panel === "colors" && (
              <div className="grid grid-cols-2 gap-3">
                {COLOR_SLOTS.map((slot) => {
                  const value = (colors[slot.key] as string) || "#0071e3";
                  const hex = value.startsWith("#") ? value : "#0071e3";
                  return (
                    <label key={slot.key} className="block">
                      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-white/45">
                        {slot.label}
                      </span>
                      <div className="flex items-center gap-2 rounded-lg bg-white/6 p-1.5">
                        <input
                          type="color"
                          value={hex.length === 7 ? hex : "#0071e3"}
                          onChange={(e) => setColors((c) => ({ ...c, [slot.key]: e.target.value }))}
                          className="size-7 cursor-pointer rounded border-0 bg-transparent"
                        />
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => setColors((c) => ({ ...c, [slot.key]: e.target.value }))}
                          className="w-full bg-transparent font-mono text-[10px] text-white/80 outline-none"
                        />
                      </div>
                    </label>
                  );
                })}
              </div>
            )}

            {panel === "type" && (
              <>
                <Field label="Family">
                  {(["system", "inter", "playfair", "syne"] as const).map((id) => (
                    <Chip key={id} active={fontFamily === id} onClick={() => setFontFamily(id)}>
                      {id}
                    </Chip>
                  ))}
                </Field>
                <Field label="Scale">
                  {(["compact", "normal", "spacious", "editorial"] as const).map((id) => (
                    <Chip key={id} active={fontSizeScale === id} onClick={() => setFontSizeScale(id)}>
                      {id}
                    </Chip>
                  ))}
                </Field>
                <label className="block">
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-white/50">
                    Extra CSS
                  </span>
                  <textarea
                    value={customCss}
                    onChange={(e) => setCustomCss(e.target.value)}
                    rows={10}
                    className="w-full rounded-lg bg-black/40 p-2 font-mono text-[10px] text-white/80 outline-none ring-1 ring-white/10"
                    spellCheck={false}
                  />
                </label>
              </>
            )}
          </div>
        </aside>

        <div className="relative min-h-0 flex-1 overflow-auto bg-[#0b0b0d] p-3 sm:p-5">
          <div className="mb-3 flex gap-1 overflow-x-auto lg:hidden">
            {PAGES.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPreviewPage(p.id)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium ${
                  previewPage === p.id ? "bg-white text-zinc-900" : "bg-white/8 text-white/70"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className={`mx-auto ${device === "desktop" ? "max-w-[1280px]" : "flex justify-center"}`}>
            <ThemePreviewStage
              config={previewConfig}
              page={previewPage}
              device={device}
              onNavigate={setPreviewPage}
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="absolute bottom-5 right-5 z-[81] inline-flex items-center gap-2 rounded-full bg-zinc-900/90 px-4 py-2.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/15 backdrop-blur-md hover:bg-zinc-800 md:hidden"
      >
        <X className="size-4" />
        Exit preview
      </button>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-white/50">{label}</div>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold capitalize ${
        active ? "bg-white text-zinc-900" : "bg-white/8 text-white/70 hover:bg-white/12"
      }`}
    >
      {children}
    </button>
  );
}
