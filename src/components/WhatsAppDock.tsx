import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
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
  const {
    config,
    primaryPhone,
    primaryEmail,
    primaryWhatsApp,
    primaryTelegram,
    primaryViber,
    socialsGrouped,
  } = useSiteConfig();

  const recipientEmail = config.formSubmitEmail || primaryEmail?.value || "hello@codexdynamics.com";
  const whatsappHref = primaryWhatsApp?.href || LINKS.whatsapp;
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
    <div className="pointer-events-none fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex flex-col items-end gap-2.5">
      <div
        className="pointer-events-auto flex flex-col items-end gap-2.5"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
      <AnimatePresence>
        {open ? (
          <motion.div
            key="stack"
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-end gap-2.5"
          >
            {extras.map((channel, i) => (
              <motion.a
                key={channel.label}
                href={channel.href}
                {...("external" in channel && channel.external === false
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.03 * i, duration: 0.28 }}
                className="group flex items-center gap-2.5"
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

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex size-14 items-center justify-center rounded-full transition-transform duration-150 ease-out active:scale-[0.96]"
        aria-label="WhatsApp"
        onFocus={() => setOpen(true)}
      >
        <WhatsAppLogo className="size-14 drop-shadow-[0_10px_24px_rgb(37_211_102_/_0.45)]" />
        <span className="wa-pulse" aria-hidden="true" />
      </a>
      </div>
    </div>
  );
}
