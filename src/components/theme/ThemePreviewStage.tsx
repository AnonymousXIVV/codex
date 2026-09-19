import { SiteCanvas } from "@/components/SiteCanvas";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteConfigOverrideProvider } from "@/context/SiteConfigContext";
import { PreviewModeProvider } from "@/context/PreviewModeContext";
import type { SiteConfig } from "@/types/site-editor";
import type { PreviewPage } from "@/lib/theme-engine";
import { cn } from "@/lib/utils";

export function ThemePreviewStage({
  config,
  page,
  device = "desktop",
  onNavigate,
}: {
  config: SiteConfig;
  page: PreviewPage;
  device?: "desktop" | "tablet" | "mobile";
  onNavigate: (page: PreviewPage) => void;
}) {
  return (
    <SiteConfigOverrideProvider config={config}>
      <PreviewModeProvider isPreview currentPage={page} navigateTo={onNavigate}>
        <div
          className={cn(
            "theme-preview-stage relative overflow-auto bg-background shadow-2xl",
            device === "desktop" && "w-full min-h-full",
            device === "tablet" && "w-[768px] max-w-full min-h-[1024px] rounded-[28px] border border-white/10",
            device === "mobile" && "w-[390px] max-w-full min-h-[844px] rounded-[36px] border border-white/10",
          )}
        >
          <SiteCanvas preview className="min-h-full">
            <SiteChrome page={page} />
          </SiteCanvas>
        </div>
      </PreviewModeProvider>
    </SiteConfigOverrideProvider>
  );
}
