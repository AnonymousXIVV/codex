import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FacebookLogo,
  GmailLogo,
  InstagramLogo,
  PhoneLogo,
  TelegramLogo,
  ViberLogo,
  WhatsAppLogo,
} from "@/components/BrandMarks";
import { LINKS } from "@/lib/site";
import { useSiteConfig } from "@/context/SiteConfigContext";

export function WhatsAppDock() {
  const [open, setOpen] = useState(false);
  const [isTidioOpen, setIsTidioOpen] = useState(false);
  const {
    config,
    primaryPhone,
    primaryEmail,
    primaryWhatsApp,
    primaryTelegram,
    primaryViber,
    socialsGrouped,
  } = useSiteConfig();

  // Listen for Tidio open/close events to auto-hide dock when full chat window is active
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleOpen = () => setIsTidioOpen(true);
    const handleClose = () => setIsTidioOpen(false);

    window.addEventListener("tidio-chat-open", handleOpen);
    window.addEventListener("tidio-chat-close", handleClose);

    // Initial check in case Tidio is already open
    const iframe = document.getElementById("tidio-chat-iframe");
    if (iframe && (iframe.offsetHeight || iframe.getBoundingClientRect().height) > 220) {
      setIsTidioOpen(true);
    }

    return () => {
      window.removeEventListener("tidio-chat-open", handleOpen);
      window.removeEventListener("tidio-chat-close", handleClose);
    };
  }, []);

  const waConfig = config.whatsapp;
  if (waConfig && waConfig.enabled === false) {
    return null;
  }

  const tidio = config.tidio;
  const isTidioActive = Boolean(tidio?.enabled && tidio?.publicKey?.trim());
  const isLeft = waConfig?.position === "bottom-left";
  const tidioIsLeft = tidio?.position === "bottom-left";

  // Check if Tidio and WhatsApp share the same horizontal corner
  const sameCorner = (isLeft && tidioIsLeft) || (!isLeft && !tidioIsLeft);

  // Check if we are on an admin route where Tidio is hidden
  const isAdmin = typeof window !== "undefined" && window.location.pathname.startsWith("/admin");
  const isTidioVisible = isTidioActive && !(isAdmin && tidio?.disableOnAdmin);

  // If both sit in the same corner, offset WhatsAppDock upward so it rests cleanly above Tidio
  const shouldOffset = isTidioVisible && sameCorner;

  const rawPhone = (waConfig?.number || primaryWhatsApp?.value || "+380636406783").replace(/[^\d]/g, "");
  const defaultMsg = waConfig?.defaultMessage || "";
  const whatsappHref = `https://wa.me/${rawPhone}${defaultMsg ? `?text=${encodeURIComponent(defaultMsg)}` : ""}`;
  const showExtras = waConfig?.showExtraChannels !== false;

  const recipientEmail = config.formSubmitEmail || primaryEmail?.value || "hello@codexdynamics.com";
  const telegramHref = primaryTelegram?.href || LINKS.telegram;
  const viberHref = primaryViber?.href || LINKS.viber;
  const phoneHref = primaryPhone?.href || LINKS.tel;
  const instagramHref = socialsGrouped.instagram?.[0]?.href || LINKS.instagram;
  const facebookHref = socialsGrouped.facebook?.[0]?.href || LINKS.facebook;

  const extras = [
    { href: telegramHref, label: "Telegram", Logo: TelegramLogo, external: true },
    { href: viberHref, label: "Viber", Logo: ViberLogo, external: true },
    { href: phoneHref, label: "Call", Logo: PhoneLogo, external: false },
    { href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`, label: "Gmail", Logo: GmailLogo, external: true },
    { href: instagramHref, label: "Instagram", Logo: InstagramLogo, external: true },
    { href: facebookHref, label: "Facebook", Logo: FacebookLogo, external: true },
  ];

  return (
    <AnimatePresence>
      {!isTidioOpen && (
        <motion.div
          key="whatsapp-dock"
          initial={{ opacity: 0, scale: 0.85, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 14 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-none fixed ${
            isLeft
              ? "left-[max(1rem,env(safe-area-inset-left))] items-start"
              : "right-[max(1rem,env(safe-area-inset-right))] items-end"
          } ${
            shouldOffset
              ? "bottom-[calc(max(1rem,env(safe-area-inset-bottom))+72px)] sm:bottom-[calc(max(1rem,env(safe-area-inset-bottom))+78px)]"
              : "bottom-[max(1rem,env(safe-area-inset-bottom))]"
          } z-40 flex flex-col gap-2.5 transition-all duration-300`}
        >
          <div
            className={`pointer-events-auto flex flex-col ${isLeft ? "items-start" : "items-end"} gap-2.5`}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <AnimatePresence>
              {open && showExtras ? (
                <motion.div
                  key="stack"
                  initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col ${isLeft ? "items-start" : "items-end"} gap-2.5`}
                >
                  {extras.map((channel, i) => (
                    <motion.a
                      key={channel.label}
                      href={channel.href}
                      {...("external" in channel && channel.external === false
                        ? {}
                        : { target: "_blank", rel: "noopener noreferrer" })}
                      initial={{ opacity: 0, x: isLeft ? -12 : 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * i, duration: 0.28 }}
                      className={`group flex items-center gap-2.5 ${isLeft ? "flex-row-reverse" : "flex-row"}`}
                      aria-label={channel.label}
                    >
                      <span className="dock-label rounded-full px-3 py-1 text-[13px] font-medium text-label">
                        {channel.label}
                      </span>
                      <channel.Logo className="size-11 drop-shadow-[0_8px_18px_rgb(0_0_0_/_0.2)]" />
                    </motion.a>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className={`group flex items-center gap-2.5 ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
              {/* Context Pill Label: prevents any client confusion between WhatsApp and Tidio live chat */}
              {shouldOffset && (
                <span
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md shadow-md border border-black/10 dark:border-white/10 text-xs font-semibold text-label pointer-events-none whitespace-nowrap transition-all duration-200 group-hover:shadow-lg"
                >
                  <span className="size-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>WhatsApp & Direct</span>
                </span>
              )}

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex size-13 sm:size-14 items-center justify-center rounded-full transition-transform duration-150 ease-out active:scale-[0.96]"
                aria-label="WhatsApp and Direct Communication Channels"
                onFocus={() => setOpen(true)}
              >
                <WhatsAppLogo className="size-13 sm:size-14 drop-shadow-[0_10px_24px_rgb(37_211_102_/_0.45)]" />
                <span className="wa-pulse" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
