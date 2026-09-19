import type { FullThemeItem } from "./theme-types";
import type { SiteConfig } from "@/types/site-editor";
import { isDarkHex } from "@/lib/theme-engine";

interface ThemeLiveMockupProps {
  theme: FullThemeItem;
  siteConfig?: SiteConfig;
  className?: string;
  isCompact?: boolean;
}

function radiusFor(type: string) {
  switch (type) {
    case "sharp":
      return "0px";
    case "clean":
      return "6px";
    case "pill":
      return "999px";
    default:
      return "10px";
  }
}

function fontFor(font: string) {
  switch (font) {
    case "playfair":
      return "'Playfair Display', Georgia, serif";
    case "syne":
      return "'Syne', sans-serif";
    case "inter":
      return "'Plus Jakarta Sans', 'Inter', sans-serif";
    default:
      return "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif";
  }
}

export function ThemeLiveMockup({
  theme,
  siteConfig,
  className = "",
  isCompact = false,
}: ThemeLiveMockupProps) {
  const isDark = isDarkHex(theme.colors.background);
  const radius = radiusFor(theme.borderRadius);
  const font = fontFor(theme.fontFamily);
  const siteTitle = siteConfig?.siteName || "Codex Dynamics";
  const heroBadge = siteConfig?.hero?.badge || theme.tags[0] || "Studio";
  const heroTitle = siteConfig?.hero?.title || theme.name;
  const heroLayout = theme.heroLayout || theme.layout?.heroLayout || "streamer";
  const hairline = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)";
  const ink = theme.colors.inverse || (isDark ? "#f5f5f7" : "#1d1d1f");

  return (
    <div
      className={`relative flex h-full w-full select-none flex-col overflow-hidden ${className}`}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.textMain,
        fontFamily: font,
      }}
    >
      {isDark ? (
        <div
          className="pointer-events-none absolute -top-10 -right-10 size-36 rounded-full opacity-30 blur-2xl"
          style={{ backgroundColor: theme.colors.primary }}
        />
      ) : null}

      <div className="shrink-0 px-3 pt-2">
        {theme.headerStyle === "classic" ? (
          <div className="border-b pb-1.5 text-center" style={{ borderColor: hairline }}>
            <div className="text-[9px] font-semibold tracking-tight" style={{ fontFamily: font }}>
              {siteTitle}
            </div>
            <div className="mt-0.5 flex justify-center gap-2 text-[7px] tracking-[0.14em] uppercase opacity-60">
              <span>Work</span>
              <span>Studio</span>
              <span>Contact</span>
            </div>
          </div>
        ) : theme.headerStyle === "sticky" ? (
          <div
            className="flex h-6 items-center justify-between border-b px-1"
            style={{ backgroundColor: theme.colors.cardBg, borderColor: hairline }}
          >
            <span className="text-[9px] font-bold">{siteTitle}</span>
            <span
              className="px-1.5 py-0.5 text-[7px] font-semibold text-white"
              style={{ backgroundColor: theme.colors.primary, borderRadius: radius }}
            >
              Talk
            </span>
          </div>
        ) : theme.headerStyle === "minimal" ? (
          <div className="flex h-5 items-center justify-between border-b" style={{ borderColor: hairline }}>
            <span className="text-[8px] font-semibold tracking-tight">{siteTitle}</span>
            <span className="text-[7px] font-semibold" style={{ color: theme.colors.primary }}>
              Contact
            </span>
          </div>
        ) : (
          <div
            className="mx-auto flex h-6 max-w-[92%] items-center justify-between border px-2.5 shadow-xs backdrop-blur-xs"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.82)",
              borderColor: hairline,
              borderRadius: theme.borderRadius === "sharp" ? "8px" : "999px",
            }}
          >
            <span className="truncate text-[9px] font-bold">{siteTitle}</span>
            <span
              className="px-1.5 py-0.5 text-[7px] font-semibold text-white"
              style={{ backgroundColor: theme.colors.primary, borderRadius: radius }}
            >
              Action
            </span>
          </div>
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-center p-3">
        {heroLayout === "split" ? (
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <span className="text-[7px] font-semibold tracking-[0.16em] uppercase" style={{ color: theme.colors.primary }}>
                {heroBadge}
              </span>
              <div className="line-clamp-2 text-[11px] leading-tight font-semibold">{heroTitle}</div>
            </div>
            <div
              className="aspect-[4/3] overflow-hidden"
              style={{ backgroundColor: ink, borderRadius: radius }}
            >
              <img src={theme.screenshotUrl} alt="" className="h-full w-full object-cover opacity-80" />
            </div>
          </div>
        ) : heroLayout === "editorial" ? (
          <div className="space-y-1.5 text-left">
            <span className="text-[7px] tracking-[0.22em] uppercase opacity-60">{heroBadge}</span>
            <div className="line-clamp-2 text-[13px] leading-[1.05] font-semibold" style={{ fontFamily: font }}>
              {heroTitle}
            </div>
            <div className="h-10 overflow-hidden" style={{ backgroundColor: ink, borderRadius: "4px" }}>
              <img src={theme.screenshotUrl} alt="" className="h-full w-full object-cover opacity-80" />
            </div>
          </div>
        ) : heroLayout === "bento" ? (
          <div className="grid grid-cols-3 gap-1.5">
            <div
              className="col-span-2 row-span-2 flex flex-col justify-between p-2"
              style={{ backgroundColor: theme.colors.cardBg, borderRadius: radius, border: `1px solid ${hairline}` }}
            >
              <span className="text-[7px] uppercase tracking-wider opacity-60">{heroBadge}</span>
              <div className="line-clamp-2 text-[10px] font-semibold leading-tight">{heroTitle}</div>
            </div>
            {[0, 1].map((i) => (
              <div
                key={i}
                className="h-8 overflow-hidden"
                style={{ backgroundColor: ink, borderRadius: radius }}
              >
                <img src={theme.screenshotUrl} alt="" className="h-full w-full object-cover opacity-70" />
              </div>
            ))}
          </div>
        ) : heroLayout === "centered" ? (
          <div className="space-y-1.5 text-center">
            <span className="text-[7px] tracking-[0.2em] uppercase" style={{ color: theme.colors.primary }}>
              {heroBadge}
            </span>
            <div className="mx-auto line-clamp-2 max-w-[90%] text-[12px] leading-tight font-semibold">{heroTitle}</div>
            {!isCompact ? (
              <div className="mx-auto h-9 max-w-[88%] overflow-hidden" style={{ backgroundColor: ink, borderRadius: radius }}>
                <img src={theme.screenshotUrl} alt="" className="h-full w-full object-cover opacity-80" />
              </div>
            ) : null}
          </div>
        ) : (
          <div className="space-y-1.5">
            <div
              className="relative h-16 overflow-hidden"
              style={{ backgroundColor: ink, borderRadius: radius }}
            >
              <img src={theme.screenshotUrl} alt="" className="h-full w-full object-cover opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-1.5 left-2 right-2">
                <div className="line-clamp-1 text-[10px] font-semibold text-white">{heroTitle}</div>
              </div>
            </div>
            {!isCompact ? (
              <div className="flex gap-1">
                {["Studio", "Web", "Design"].map((label, i) => (
                  <span
                    key={label}
                    className="px-1.5 py-0.5 text-[7px] font-medium"
                    style={{
                      backgroundColor: i === 0 ? theme.colors.primary : theme.colors.cardBg,
                      color: i === 0 ? "#fff" : theme.colors.textMuted,
                      borderRadius: "999px",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>

      <div
        className="flex items-center justify-between border-t px-3 py-1.5 font-mono text-[8px] opacity-80"
        style={{
          borderColor: hairline,
          backgroundColor: isDark ? "rgba(0,0,0,0.22)" : "rgba(0,0,0,0.03)",
        }}
      >
        <span className="truncate max-w-[130px]">
          {theme.headerStyle} · {heroLayout}
        </span>
        <div className="flex items-center gap-1">
          {[theme.colors.primary, theme.colors.accent, theme.colors.background, theme.colors.cardBg].map((swatch, i) => (
            <span
              key={i}
              className="size-2 rounded-full border border-black/10"
              style={{ backgroundColor: swatch }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
