import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { buildThemeStyle } from "@/lib/theme-engine";

export function SiteCanvas({
  children,
  preview = false,
  className,
}: {
  children: ReactNode;
  preview?: boolean;
  className?: string;
}) {
  const { config } = useSiteConfig();
  const theme = config.theme;
  const themeId = theme?.activeTheme || "codex-pro";
  const header = theme?.headerStyle || "floating";
  const hero = theme?.heroLayout || theme?.layout?.heroLayout || "streamer";
  const cards = theme?.cardStyle || theme?.layout?.cardStyle || "glass";
  const scale = theme?.fontSizeScale || theme?.layout?.fontSizeScale || "normal";

  return (
    <div
      className={cn(
        "site-canvas min-h-screen bg-background text-foreground",
        className,
      )}
      data-site-theme={themeId}
      data-header-style={header}
      data-hero-layout={hero}
      data-card-style={cards}
      data-type-scale={scale}
      data-preview={preview ? "true" : undefined}
      data-theme="light"
      style={buildThemeStyle(config)}
    >
      {theme?.customCss ? <style data-theme-css>{theme.customCss}</style> : null}
      {config.codeInjection?.headerCode ? (
        <div
          data-custom-head-injection
          dangerouslySetInnerHTML={{ __html: config.codeInjection.headerCode }}
        />
      ) : null}
      {children}
      {config.codeInjection?.footerCode ? (
        <div
          data-custom-footer-injection
          dangerouslySetInnerHTML={{ __html: config.codeInjection.footerCode }}
        />
      ) : null}
    </div>
  );
}

