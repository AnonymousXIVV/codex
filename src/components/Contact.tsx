import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  FacebookLogo,
  GmailLogo,
  InstagramLogo,
  MapsLogo,
  PhoneLogo,
  TelegramLogo,
  ViberLogo,
  WhatsAppLogo,
} from "@/components/BrandMarks";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CONTACT, LINKS } from "@/lib/site";
import { useSiteConfig } from "@/context/SiteConfigContext";

type Inquiry = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const emptyForm: Inquiry = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

async function copyText(value: string, ok: string) {
  try {
    await navigator.clipboard.writeText(value);
    toast.success(ok);
  } catch {
    toast.error("Could not copy. Try selecting it instead.");
  }
}

function isJsonResponse(res: Response) {
  return (res.headers.get("content-type") ?? "").includes("application/json");
}

async function postPhp(
  data: Inquiry,
): Promise<"sent" | "unavailable" | "rejected"> {
  try {
    const payload = new FormData();
    payload.set("name", data.name);
    payload.set("phone", data.phone);
    payload.set("email", data.email);
    payload.set("message", data.message);

    const res = await fetch("/send-mail.php", {
      method: "POST",
      body: payload,
      headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    const text = await res.text();
    if (text.trimStart().startsWith("<?php") || !isJsonResponse(res)) {
      return "unavailable";
    }
    const body = JSON.parse(text) as { ok?: boolean };
    return body.ok ? "sent" : "rejected";
  } catch {
    return "unavailable";
  }
}

async function postFormSubmit(data: Inquiry, recipientEmail?: string): Promise<boolean> {
  try {
    const targetEmail = recipientEmail || CONTACT.email;
    const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        _subject: `New inquiry from ${data.name} — Codex Dynamics`,
        _template: "table",
        _replyto: data.email,
        _captcha: "false",
      }),
    });
    if (!res.ok) return false;
    const body = (await res.json().catch(() => null)) as {
      success?: string | boolean;
      message?: string;
    } | null;
    if (!body) return false;
    if (body.success === true || body.success === "true") return true;
    return /activat/i.test(String(body.message ?? ""));
  } catch {
    return false;
  }
}

function persistInquiry(data: Inquiry) {
  try {
    const raw = localStorage.getItem("codex-inquiries");
    const prior = raw ? (JSON.parse(raw) as unknown[]) : [];
    localStorage.setItem(
      "codex-inquiries",
      JSON.stringify([...prior, { ...data, at: new Date().toISOString() }]),
    );
    // Also save to SQLite CRM database
    void fetch("/api/submit-enquiry.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: "",
        message: data.message,
        source: "website_contact_form",
      }),
    }).catch(() => {});
  } catch {
    /* ignore quota */
  }
}

export function Contact() {
  const {
    config,
    socialsGrouped,
    addresses,
    primaryPhone,
    primaryWhatsApp,
    primaryTelegram,
    primaryViber,
    primaryEmail,
    primaryAddress,
  } = useSiteConfig();

  const recipientEmail = config.formSubmitEmail || primaryEmail?.value || CONTACT.email;
  const phoneVal = primaryPhone?.value || CONTACT.phoneDisplay;
  const phoneRaw = primaryPhone?.value?.replace(/[^\d+]/g, "") || CONTACT.phoneE164;
  const phoneHref = primaryPhone?.href || `tel:${phoneRaw}`;

  const currentAddress = primaryAddress || {
    id: "addr-default",
    label: "Kyiv Studio",
    city: "Kyiv",
    street: CONTACT.addressStreet,
    fullAddress: CONTACT.addressFull,
    lat: 50.4385,
    lng: 30.5235,
  };

  const whatsappUrl = primaryWhatsApp?.href || LINKS.whatsapp;
  const telegramUrl = primaryTelegram?.href || LINKS.telegram;
  const viberUrl = primaryViber?.href || LINKS.viber;
  const instagramUrl = socialsGrouped.instagram?.[0]?.href || LINKS.instagram;
  const facebookUrl = socialsGrouped.facebook?.[0]?.href || LINKS.facebook;

  const actionList = [
    { href: whatsappUrl, label: "WhatsApp", hint: "WhatsApp", Logo: WhatsAppLogo, external: true },
    { href: telegramUrl, label: "Telegram", hint: "Telegram", Logo: TelegramLogo, external: true },
    { href: viberUrl, label: "Viber", hint: "Viber", Logo: ViberLogo, external: true },
    { href: phoneHref, label: "Call", hint: "Call", Logo: PhoneLogo, external: false },
    { href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`, label: "Gmail", hint: "Gmail", Logo: GmailLogo, external: true },
  ];

  const [formData, setFormData] = useState<Inquiry>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [live, setLive] = useState(false);

  useEffect(() => {
    setLive(true);
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      toast.success("Message sent. We'll be in touch within a day.");
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Inquiry = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };
    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill in every field.");
      return;
    }
    setIsSubmitting(true);
    try {
      const php = await postPhp(data);
      if (php === "rejected") {
        toast.error(
          `Could not send. Email us at ${recipientEmail} or WhatsApp ${phoneVal}.`,
        );
        return;
      }
      if (php !== "sent") {
        await postFormSubmit(data, recipientEmail);
      }
      persistInquiry(data);
      toast.success("Message sent. We'll be in touch within a day.");
      setFormData(emptyForm);
    } catch {
      toast.error(
        `Could not send. Email us at ${recipientEmail} or WhatsApp ${phoneVal}.`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="scroll-mt-24 bg-fill-elevated py-16 sm:py-24"
    >
      <div className="shell">
        <Reveal>
          <p className="mb-4 text-xs font-medium tracking-[0.22em] text-subtle uppercase">
            {config.contact?.badge || "Contact"}
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-label sm:text-5xl lg:text-6xl">
            {config.contact?.title || "One number. Every channel."}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {config.contact?.subtitle || "WhatsApp, Telegram, Viber, calls — same line. Write us, or walk into the studio."}
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <article className="surface-lift overflow-hidden rounded-xl bg-card">
              <div className="flex flex-col items-center px-6 pt-10 pb-6 text-center">
                <span className="flex size-16 items-center justify-center rounded-[1.35rem] bg-blue text-2xl font-semibold text-paper shadow-[inset_0_0.5px_0_rgb(255_255_255_/_0.35)]">
                  {config.siteName?.[0] || CONTACT.name[0] || "C"}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-label">
                  {config.siteName || CONTACT.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {currentAddress.city} studio · {currentAddress.street}
                </p>
              </div>

              <div className="grid grid-cols-5 gap-1 px-3 pb-7 sm:px-5">
                {actionList.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    {...(action.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex flex-col items-center gap-2 rounded-xl py-2 transition-colors duration-150 hover:bg-fill"
                  >
                    <action.Logo className="size-11 sm:size-12" />
                    <span className="text-[10px] font-medium tracking-wide text-label sm:text-[11px]">
                      {action.hint}
                    </span>
                  </a>
                ))}
              </div>

              <ul className="divide-y divide-hairline border-t border-hairline">
                {socialsGrouped.phone.map((phone, idx) => (
                  <li key={`phone-${idx}`}>
                    <button
                      type="button"
                      onClick={() =>
                        copyText(phone.value.replace(/[^\d+]/g, ""), "Number copied.")
                      }
                      className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-fill cursor-pointer"
                    >
                      <PhoneLogo className="size-9 shrink-0" />
                      <span>
                        <span className="block text-xs text-subtle">
                          {phone.label || "Mobile · WhatsApp · Telegram · Viber"}
                        </span>
                        <span className="mt-0.5 block text-[15px] font-medium text-label">
                          {phone.value}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}

                {socialsGrouped.email.map((email, idx) => (
                  <li key={`email-${idx}`}>
                    <a
                      href={email.href || `mailto:${email.value}`}
                      className="flex items-center gap-4 px-5 py-4 hover:bg-fill"
                    >
                      <GmailLogo className="size-9 shrink-0" />
                      <span>
                        <span className="block text-xs text-subtle">
                          {email.label || "Email"}
                        </span>
                        <span className="mt-0.5 block text-[15px] font-medium text-label">
                          {email.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}

                {addresses.map((addr, idx) => (
                  <li key={`addr-${idx}`}>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(addr.fullAddress || `${addr.street}, ${addr.city}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-5 py-4 hover:bg-fill"
                    >
                      <MapsLogo className="size-9 shrink-0" />
                      <span>
                        <span className="block text-xs text-subtle">
                          {addr.city ? `${addr.city} Studio` : "Studio"} {addr.label ? `· ${addr.label}` : ""}
                        </span>
                        <span className="mt-0.5 block text-[15px] font-medium text-label">
                          {addr.street}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-center gap-3 border-t border-hairline px-5 py-4">
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="transition-transform duration-150 hover:scale-105"
                  >
                    <InstagramLogo className="size-9" />
                  </a>
                )}
                {facebookUrl && (
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="transition-transform duration-150 hover:scale-105"
                  >
                    <FacebookLogo className="size-9" />
                  </a>
                )}
                {socialsGrouped.custom?.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href || s.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-label hover:bg-fill transition-colors"
                  >
                    {s.label || "Link"}
                  </a>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <div className="surface-lift overflow-hidden rounded-xl bg-card">
              {live ? (
                <form
                  action="/send-mail.php"
                  method="post"
                  onSubmit={handleSubmit}
                  className="p-2"
                >
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    aria-hidden="true"
                  />
                  <div className="divide-y divide-hairline rounded-lg bg-fill">
                    <label className="block px-5 py-4">
                      <span className="mb-1.5 block text-xs font-medium tracking-wide text-subtle uppercase">
                        Name
                      </span>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full bg-transparent text-base text-label outline-none placeholder:text-subtle"
                        placeholder="Your name"
                        autoComplete="name"
                        required
                      />
                    </label>
                    <label className="block px-5 py-4">
                      <span className="mb-1.5 block text-xs font-medium tracking-wide text-subtle uppercase">
                        Phone
                      </span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        maxLength={40}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full bg-transparent text-base text-label outline-none placeholder:text-subtle"
                        placeholder="+380 63 000 0000"
                        autoComplete="tel"
                      />
                    </label>
                    <label className="block px-5 py-4">
                      <span className="mb-1.5 block text-xs font-medium tracking-wide text-subtle uppercase">
                        Email
                      </span>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        maxLength={255}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full bg-transparent text-base text-label outline-none placeholder:text-subtle"
                        placeholder="you@company.com"
                        autoComplete="email"
                        required
                      />
                    </label>
                    <label className="block px-5 py-4">
                      <span className="mb-1.5 block text-xs font-medium tracking-wide text-subtle uppercase">
                        Message
                      </span>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        maxLength={1000}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className="w-full resize-none bg-transparent text-base text-label outline-none placeholder:text-subtle"
                        placeholder="Site rebuild, new brand, social campaigns — what's the job?"
                        required
                      />
                    </label>
                  </div>
                  <div className="p-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? "Sending…" : "Send message"}
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="h-96" aria-hidden="true" />
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-6">
          <article className="map-frame surface-lift relative overflow-hidden rounded-xl bg-muted">
            <iframe
              title="Codex Dynamics studio — Sportyvna, 1A, Kyiv"
              src={LINKS.mapsEmbed}
              className="relative z-10 h-[22rem] w-full border-0 sm:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-card pointer-events-auto absolute bottom-4 left-4 z-20 max-w-[min(calc(100%-5.75rem),22rem)] rounded-xl p-4 sm:bottom-5 sm:left-5">
              <p className="text-[11px] font-medium tracking-[0.18em] text-subtle uppercase">
                The studio
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-label">
                {CONTACT.addressStreet}
              </p>
              <p className="text-sm text-muted-foreground">
                {CONTACT.addressCity}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={LINKS.mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center rounded-full bg-blue px-4 text-sm font-medium text-paper hover:bg-blue-hover"
                >
                  Directions
                </a>
                <a
                  href={LINKS.mapsApple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center rounded-full bg-fill px-4 text-sm font-medium text-label hover:bg-muted"
                >
                  Apple Maps
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
