import { useEffect } from "react";
import { useSiteConfig } from "@/context/SiteConfigContext";

declare global {
  interface Window {
    tidioChatApi?: {
      open: () => void;
      close: () => void;
      show: () => void;
      hide: () => void;
      on: (event: string, callback: () => void) => void;
      setColorPallete?: (color: string) => void;
    };
  }
}

export function TidioWidget() {
  const { config } = useSiteConfig();
  const tidio = config.tidio;

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Check if we are on admin route
    const isAdminRoute = window.location.pathname.startsWith("/admin");
    if (isAdminRoute && tidio?.disableOnAdmin) {
      if (window.tidioChatApi?.hide) {
        window.tidioChatApi.hide();
      }
      return;
    }

    if (!tidio?.enabled || !tidio?.publicKey?.trim()) {
      // If disabled or empty key, remove any existing tidio script and iframe
      const existingScript = document.getElementById("tidio-chat-script");
      if (existingScript) existingScript.remove();
      const tidioIframe = document.getElementById("tidio-chat-iframe");
      if (tidioIframe) tidioIframe.remove();
      return;
    }

    // Clean the public key (user might paste full URL or script tag)
    let key = tidio.publicKey.trim();
    if (key.includes("code.tidio.co/")) {
      const match = key.match(/code\.tidio\.co\/([a-zA-Z0-9_-]+)(?:\.js)?/);
      if (match) key = match[1];
    } else if (key.includes("<script")) {
      const match = key.match(/src=["'](?:https?:)?\/\/code\.tidio\.co\/([a-zA-Z0-9_-]+)(?:\.js)?["']/);
      if (match) key = match[1];
    }
    // Remove trailing .js if user typed it
    key = key.replace(/\.js$/, "");

    if (!key) return;

    // Check if already injected with the same key
    const scriptId = "tidio-chat-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = `//code.tidio.co/${encodeURIComponent(key)}.js`;
      script.async = true;
      document.body.appendChild(script);
    } else if (!script.src.includes(key)) {
      // Key changed, replace script
      script.src = `//code.tidio.co/${encodeURIComponent(key)}.js`;
    }

    // Unhide if was previously hidden
    if (window.tidioChatApi?.show) {
      window.tidioChatApi.show();
    }
  }, [tidio?.enabled, tidio?.publicKey, tidio?.disableOnAdmin]);

  return null;
}
