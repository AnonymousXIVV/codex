import React, { useState, useEffect } from "react";
import {
  Globe,
  Save,
  RotateCcw,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
  Share2,
  ExternalLink,
  Copy,
  Check,
  Eye,
  EyeOff,
  Link as LinkIcon,
} from "lucide-react";
import {
  LinkedInLogo,
  TwitterXLogo,
  GitHubLogo,
  InstagramLogo,
  FacebookLogo,
} from "@/components/BrandMarks";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface SiteConfigState {
  siteName: string;
  copyrightYear: string;
  formSubmitEmail: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryPhone: string;
  primaryWhatsApp: string;
  primaryEmail: string;
  hqAddress: string;
}

export interface HeaderSocialItemState {
  enabled: boolean;
  url: string;
  label: string;
}

export interface HeaderSocialsState {
  linkedin: HeaderSocialItemState;
  x: HeaderSocialItemState;
  github: HeaderSocialItemState;
  instagram: HeaderSocialItemState;
  facebook: HeaderSocialItemState;
}

const DEFAULT_HEADER_SOCIALS: HeaderSocialsState = {
  linkedin: {
    enabled: true,
    url: "https://linkedin.com/company/codexdynamics",
    label: "LinkedIn",
  },
  x: {
    enabled: true,
    url: "https://x.com/codexdynamics",
    label: "X (Twitter)",
  },
  github: {
    enabled: true,
    url: "https://github.com/codexdynamics",
    label: "GitHub",
  },
  instagram: {
    enabled: true,
    url: "https://www.instagram.com/codex_dynamics/",
    label: "Instagram",
  },
  facebook: {
    enabled: true,
    url: "https://www.facebook.com/profile.php?id=61571219783449",
    label: "Facebook",
  },
};

const SOCIAL_PLATFORMS = [
  {
    key: "linkedin" as const,
    name: "LinkedIn",
    description: "Professional network & company profile",
    placeholder: "https://linkedin.com/company/...",
    logo: LinkedInLogo,
    logoClass: "size-5",
    bgClass: "bg-[#0A66C2]/10 border-[#0A66C2]/20 text-[#0A66C2]",
  },
  {
    key: "x" as const,
    name: "X (Twitter)",
    description: "Company announcements & daily thoughts",
    placeholder: "https://x.com/...",
    logo: TwitterXLogo,
    logoClass: "size-5",
    bgClass: "bg-black/10 dark:bg-white/10 border-black/15 text-label",
  },
  {
    key: "github" as const,
    name: "GitHub",
    description: "Open-source projects & code repositories",
    placeholder: "https://github.com/...",
    logo: GitHubLogo,
    logoClass: "size-5",
    bgClass: "bg-black/10 dark:bg-white/10 border-black/15 text-label",
  },
  {
    key: "instagram" as const,
    name: "Instagram",
    description: "Visual portfolio, agency culture & reels",
    placeholder: "https://www.instagram.com/...",
    logo: InstagramLogo,
    logoClass: "size-6",
    bgClass: "bg-pink-500/10 border-pink-500/20 text-pink-600",
  },
  {
    key: "facebook" as const,
    name: "Facebook",
    description: "Community page & direct client reviews",
    placeholder: "https://www.facebook.com/...",
    logo: FacebookLogo,
    logoClass: "size-6",
    bgClass: "bg-[#1877F2]/10 border-[#1877F2]/20 text-[#1877F2]",
  },
];

export function SiteContentTab() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [form, setForm] = useState<SiteConfigState>({
    siteName: "Codex Dynamics",
    copyrightYear: "2026",
    formSubmitEmail: "codexdynamix@gmail.com",
    heroBadge: "Codex Dynamics",
    heroTitle: "Precision on every screen.",
    heroSubtitle: "Websites, web apps, and social campaigns — composed with the care of a product launch.",
    primaryPhone: "+380 63 640 6783",
    primaryWhatsApp: "+380636406783",
    primaryEmail: "codexdynamix@gmail.com",
    hqAddress: "Sportyvna, 1A, Kyiv, 012023, Ukraine",
  });

  const [headerSocials, setHeaderSocials] = useState<HeaderSocialsState>(DEFAULT_HEADER_SOCIALS);
  const [rawConfig, setRawConfig] = useState<Record<string, any>>({});

  const fetchCurrentConfig = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/public/site-config");
      if (res.ok) {
        const data = await res.json();
        const cfg = data.config || data || {};
        setRawConfig(cfg);
        const wa = cfg.socialContacts?.find((c: any) => c.type === "whatsapp")?.value || "+380636406783";
        const ph = cfg.socialContacts?.find((c: any) => c.type === "phone")?.value || "+380 63 640 6783";
        const em = cfg.socialContacts?.find((c: any) => c.type === "email")?.value || "codexdynamix@gmail.com";
        const addr = cfg.addresses?.[0]?.fullAddress || "Sportyvna, 1A, Kyiv, 012023, Ukraine";

        setForm({
          siteName: cfg.siteName || "Codex Dynamics",
          copyrightYear: cfg.copyrightYear || "2026",
          formSubmitEmail: cfg.formSubmitEmail || "codexdynamix@gmail.com",
          heroBadge: cfg.hero?.badge || "Codex Dynamics",
          heroTitle: cfg.hero?.title || "Precision on every screen.",
          heroSubtitle: cfg.hero?.subtitle || "Websites, web apps, and social campaigns — composed with the care of a product launch.",
          primaryPhone: ph,
          primaryWhatsApp: wa,
          primaryEmail: em,
          hqAddress: addr,
        });

        if (cfg.headerSocials) {
          setHeaderSocials({
            linkedin: {
              enabled: cfg.headerSocials.linkedin?.enabled !== false,
              url: cfg.headerSocials.linkedin?.url || DEFAULT_HEADER_SOCIALS.linkedin.url,
              label: "LinkedIn",
            },
            x: {
              enabled: cfg.headerSocials.x?.enabled !== false,
              url: cfg.headerSocials.x?.url || DEFAULT_HEADER_SOCIALS.x.url,
              label: "X (Twitter)",
            },
            github: {
              enabled: cfg.headerSocials.github?.enabled !== false,
              url: cfg.headerSocials.github?.url || DEFAULT_HEADER_SOCIALS.github.url,
              label: "GitHub",
            },
            instagram: {
              enabled: cfg.headerSocials.instagram?.enabled !== false,
              url: cfg.headerSocials.instagram?.url || DEFAULT_HEADER_SOCIALS.instagram.url,
              label: "Instagram",
            },
            facebook: {
              enabled: cfg.headerSocials.facebook?.enabled !== false,
              url: cfg.headerSocials.facebook?.url || DEFAULT_HEADER_SOCIALS.facebook.url,
              label: "Facebook",
            },
          });
        }
      }
    } catch {
      // Keep defaults
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentConfig();
  }, []);

  const handleToggleSocial = (key: keyof HeaderSocialsState) => {
    setHeaderSocials((prev) => {
      const nextState = !prev[key].enabled;
      return {
        ...prev,
        [key]: {
          ...prev[key],
          enabled: nextState,
        },
      };
    });
  };

  const handleUpdateSocialUrl = (key: keyof HeaderSocialsState, url: string) => {
    setHeaderSocials((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        url,
      },
    }));
  };

  const handleEnableAllSocials = () => {
    setHeaderSocials((prev) => ({
      linkedin: { ...prev.linkedin, enabled: true },
      x: { ...prev.x, enabled: true },
      github: { ...prev.github, enabled: true },
      instagram: { ...prev.instagram, enabled: true },
      facebook: { ...prev.facebook, enabled: true },
    }));
    toast.info("All 5 header buttons enabled (LinkedIn, X, GitHub, Instagram, Facebook)");
  };

  const handleDisableAllSocials = () => {
    setHeaderSocials((prev) => ({
      linkedin: { ...prev.linkedin, enabled: false },
      x: { ...prev.x, enabled: false },
      github: { ...prev.github, enabled: false },
      instagram: { ...prev.instagram, enabled: false },
      facebook: { ...prev.facebook, enabled: false },
    }));
    toast.info("All header social buttons hidden");
  };

  const handleResetSocialUrls = () => {
    setHeaderSocials(DEFAULT_HEADER_SOCIALS);
    toast.info("Restored default credentials & URLs");
  };

  const handleCopyUrl = (key: string, url: string) => {
    if (!url) return;
    navigator.clipboard.writeText(url);
    setCopiedKey(key);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);

      const otherSocialContacts = (rawConfig.socialContacts || []).filter(
        (c: any) => !["whatsapp", "phone", "email", "linkedin", "twitter", "x", "github", "instagram", "facebook"].includes(c.type)
      );

      const payloadConfig = {
        ...rawConfig,
        siteName: form.siteName,
        copyrightYear: form.copyrightYear,
        formSubmitEmail: form.formSubmitEmail,
        hero: {
          ...(rawConfig.hero || {}),
          badge: form.heroBadge,
          title: form.heroTitle,
          subtitle: form.heroSubtitle,
        },
        headerSocials: headerSocials,
        socialContacts: [
          {
            id: "wa-1",
            type: "whatsapp",
            label: "Main WhatsApp",
            value: form.primaryWhatsApp,
            href: `https://wa.me/${form.primaryWhatsApp.replace(/[^0-9]/g, "")}`,
            isPrimary: true,
          },
          {
            id: "ph-1",
            type: "phone",
            label: "Direct Call / Desk",
            value: form.primaryPhone,
            href: `tel:${form.primaryPhone.replace(/\s+/g, "")}`,
            isPrimary: true,
          },
          {
            id: "em-1",
            type: "email",
            label: "Primary Email",
            value: form.primaryEmail,
            href: `mailto:${form.primaryEmail}`,
            isPrimary: true,
          },
          {
            id: "li-1",
            type: "linkedin",
            label: "LinkedIn",
            value: "codexdynamics",
            href: headerSocials.linkedin.url,
            isVisible: headerSocials.linkedin.enabled,
            isPrimary: true,
          },
          {
            id: "tw-1",
            type: "twitter",
            label: "X (Twitter)",
            value: "codexdynamics",
            href: headerSocials.x.url,
            isVisible: headerSocials.x.enabled,
            isPrimary: true,
          },
          {
            id: "gh-1",
            type: "github",
            label: "GitHub",
            value: "codexdynamics",
            href: headerSocials.github.url,
            isVisible: headerSocials.github.enabled,
            isPrimary: true,
          },
          {
            id: "ig-1",
            type: "instagram",
            label: "Instagram",
            value: "codex_dynamics",
            href: headerSocials.instagram.url,
            isVisible: headerSocials.instagram.enabled,
            isPrimary: true,
          },
          {
            id: "fb-1",
            type: "facebook",
            label: "Facebook",
            value: "Codex Dynamics",
            href: headerSocials.facebook.url,
            isVisible: headerSocials.facebook.enabled,
            isPrimary: true,
          },
          ...otherSocialContacts,
        ],
        addresses: [
          {
            id: "addr-1",
            label: "Kyiv Studio (HQ)",
            fullAddress: form.hqAddress,
            street: form.hqAddress.split(",")[0] || "Sportyvna, 1A",
            city: form.hqAddress,
            isPrimary: true,
          },
        ],
      };

      const res = await fetch("/api/crm/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save_site_content",
          config: payloadConfig,
        }),
      });

      const data = await res.json();
      if (data.ok) {
        toast.success("Site content & social buttons saved to SQLite database!");
      } else {
        toast.error(data.error || "Failed to save site content.");
      }
    } catch {
      toast.error("Network error while saving site content.");
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if (!window.confirm("Reset all site texts, phone numbers, and addresses back to default?")) return;
    try {
      setResetting(true);
      const res = await fetch("/api/crm/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset_site_content" }),
      });
      const data = await res.json();
      if (data.ok) {
        toast.success("Site content reset to factory defaults.");
        setHeaderSocials(DEFAULT_HEADER_SOCIALS);
        fetchCurrentConfig();
      }
    } catch {
      toast.error("Failed to reset site content.");
    } finally {
      setResetting(false);
    }
  };

  const activeCount = Object.values(headerSocials).filter((s) => s.enabled).length;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Globe className="size-5 text-blue" />
            <h2 className="text-base font-semibold text-label font-display tracking-tight">
              Website Copy, Socials & Contact Configuration
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Manage live header buttons, direct social credentials, phone numbers, WhatsApp, and studio location. Updates persist directly to SQLite in real time.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            disabled={resetting}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground hover:text-label text-xs font-medium transition-all cursor-pointer"
          >
            <RotateCcw className="size-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-blue hover:bg-blue-hover text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer"
          >
            <Save className="size-3.5" />
            <span>{saving ? "Saving to DB..." : "Save Changes"}</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="surface-lift rounded-2xl bg-card border border-black/8 p-12 text-center text-xs text-subtle">
          Loading site configuration from SQLite...
        </div>
      ) : (
        <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Header Social Buttons Card (Spans 2 columns) */}
          <div className="md:col-span-2 surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-hairline">
              <div>
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-lg bg-blue/10 flex items-center justify-center text-blue">
                    <Share2 className="size-4" />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-label">
                    Header Social Action Buttons (Show / Hide & Credentials)
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {activeCount} of 5 Active on Header
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1.5 max-w-2xl">
                  Choose which platform icons appear on the public header navigation bar and specify their respective profile URLs or credentials.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleEnableAllSocials}
                  className="px-3 py-1.5 text-[11px] font-medium rounded-lg border border-black/10 hover:bg-fill text-muted-foreground hover:text-label transition-colors cursor-pointer"
                >
                  Show All (5)
                </button>
                <button
                  type="button"
                  onClick={handleDisableAllSocials}
                  className="px-3 py-1.5 text-[11px] font-medium rounded-lg border border-black/10 hover:bg-fill text-muted-foreground hover:text-label transition-colors cursor-pointer"
                >
                  Hide All
                </button>
                <button
                  type="button"
                  onClick={handleResetSocialUrls}
                  className="px-3 py-1.5 text-[11px] font-medium rounded-lg border border-black/10 hover:bg-fill text-muted-foreground hover:text-label transition-colors cursor-pointer"
                >
                  Reset Defaults
                </button>
              </div>
            </div>

            {/* Platform Rows */}
            <div className="space-y-3.5">
              {SOCIAL_PLATFORMS.map((platform) => {
                const item = headerSocials[platform.key];
                const Logo = platform.logo;
                return (
                  <div
                    key={platform.key}
                    className={cn(
                      "p-4 rounded-xl border transition-all duration-150",
                      item.enabled
                        ? "bg-white border-black/10 shadow-xs"
                        : "bg-fill/40 border-black/5 opacity-75"
                    )}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      {/* Left: Brand Identity + Visibility Badge */}
                      <div className="flex items-center gap-3.5 min-w-[220px]">
                        <div
                          className={cn(
                            "size-10 rounded-xl flex items-center justify-center shrink-0 border transition-all",
                            platform.bgClass,
                            item.enabled ? "ring-2 ring-blue/20" : "grayscale opacity-60"
                          )}
                        >
                          <Logo className={platform.logoClass} />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs font-semibold text-label">
                              {platform.name}
                            </h4>
                            <span
                              className={cn(
                                "inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full",
                                item.enabled
                                  ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40"
                                  : "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
                              )}
                            >
                              {item.enabled ? (
                                <>
                                  <span className="size-1.5 rounded-full bg-emerald-500" />
                                  Visible on Header
                                </>
                              ) : (
                                <>
                                  <span className="size-1.5 rounded-full bg-neutral-400" />
                                  Hidden from Header
                                </>
                              )}
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground mt-0.5">
                            {platform.description}
                          </p>
                        </div>
                      </div>

                      {/* Middle: Toggle Button */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleToggleSocial(platform.key)}
                          className={cn(
                            "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border select-none",
                            item.enabled
                              ? "bg-blue/10 border-blue/30 text-blue hover:bg-blue/20"
                              : "bg-fill border-black/10 text-muted-foreground hover:text-label hover:bg-black/5"
                          )}
                          title={item.enabled ? "Click to hide from header" : "Click to show on header"}
                        >
                          {item.enabled ? (
                            <>
                              <Eye className="size-3.5 text-blue" />
                              <span>Show on Header</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="size-3.5 text-neutral-400" />
                              <span>Hidden</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Right: URL / Link Input */}
                      <div className="flex-1 flex items-center gap-2 min-w-0">
                        <div className="relative flex-1">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                            <LinkIcon className="size-3.5" />
                          </div>
                          <input
                            type="url"
                            value={item.url}
                            onChange={(e) => handleUpdateSocialUrl(platform.key, e.target.value)}
                            placeholder={platform.placeholder}
                            className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl pl-9 pr-3.5 py-2 text-xs text-label outline-none transition-all font-mono"
                          />
                        </div>

                        {/* Open in new tab / Test URL */}
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "p-2 rounded-xl border border-black/8 hover:bg-fill text-muted-foreground hover:text-label transition-colors shrink-0",
                            !item.url && "pointer-events-none opacity-40"
                          )}
                          title="Test link in new tab"
                        >
                          <ExternalLink className="size-3.5" />
                        </a>

                        {/* Copy URL */}
                        <button
                          type="button"
                          onClick={() => handleCopyUrl(platform.key, item.url)}
                          className="p-2 rounded-xl border border-black/8 hover:bg-fill text-muted-foreground hover:text-label transition-colors shrink-0 cursor-pointer"
                          title="Copy link to clipboard"
                        >
                          {copiedKey === platform.key ? (
                            <Check className="size-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="size-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Brand & Identity Card */}
          <div className="surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-hairline">
              <Sparkles className="size-4 text-blue" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-label">
                Brand & Global Settings
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Brand / Studio Name
                </label>
                <input
                  type="text"
                  value={form.siteName}
                  onChange={(e) => setForm({ ...form, siteName: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Copyright Year
                </label>
                <input
                  type="text"
                  value={form.copyrightYear}
                  onChange={(e) => setForm({ ...form, copyrightYear: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Inbound Inquiries Dispatch Email
                </label>
                <input
                  type="email"
                  value={form.formSubmitEmail}
                  onChange={(e) => setForm({ ...form, formSubmitEmail: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all font-mono"
                />
              </div>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-hairline">
              <Phone className="size-4 text-emerald-600" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-label">
                Direct Client Contact Lines
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Direct Phone Number
                </label>
                <input
                  type="text"
                  value={form.primaryPhone}
                  onChange={(e) => setForm({ ...form, primaryPhone: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Official WhatsApp Number
                </label>
                <input
                  type="text"
                  value={form.primaryWhatsApp}
                  onChange={(e) => setForm({ ...form, primaryWhatsApp: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Public Contact Email
                </label>
                <input
                  type="email"
                  value={form.primaryEmail}
                  onChange={(e) => setForm({ ...form, primaryEmail: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all font-mono"
                />
              </div>
            </div>
          </div>

          {/* Hero Content Card */}
          <div className="surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-hairline">
              <Sparkles className="size-4 text-purple-600" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-label">
                Hero Section Copy
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Hero Pill Badge
                </label>
                <input
                  type="text"
                  value={form.heroBadge}
                  onChange={(e) => setForm({ ...form, heroBadge: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Main Headline (Title)
                </label>
                <input
                  type="text"
                  value={form.heroTitle}
                  onChange={(e) => setForm({ ...form, heroTitle: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Hero Subtitle / Value Proposition
                </label>
                <textarea
                  rows={2}
                  value={form.heroSubtitle}
                  onChange={(e) => setForm({ ...form, heroSubtitle: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl p-3 text-xs text-label outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Physical Address Card */}
          <div className="surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-hairline">
              <MapPin className="size-4 text-rose-600" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-label">
                Physical Studio Location & HQ
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Headquarters Full Address
                </label>
                <textarea
                  rows={3}
                  value={form.hqAddress}
                  onChange={(e) => setForm({ ...form, hqAddress: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl p-3 text-xs text-label outline-none transition-all"
                />
              </div>

              <div className="p-3 bg-fill rounded-xl border border-hairline flex items-center gap-2 text-[11px] text-muted-foreground">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>Rendered across the Interactive Globe, Contact drawer, and footer.</span>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
