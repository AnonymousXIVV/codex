import React, { useState, useEffect } from "react";
import {
  Globe,
  Save,
  RotateCcw,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

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

export function SiteContentTab() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [resetting, setResetting] = useState(false);

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

  const fetchCurrentConfig = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/public/site-config");
      if (res.ok) {
        const data = await res.json();
        const wa = data.socialContacts?.find((c: any) => c.type === "whatsapp")?.value || "+380636406783";
        const ph = data.socialContacts?.find((c: any) => c.type === "phone")?.value || "+380 63 640 6783";
        const em = data.socialContacts?.find((c: any) => c.type === "email")?.value || "codexdynamix@gmail.com";
        const addr = data.addresses?.[0]?.fullAddress || "Sportyvna, 1A, Kyiv, 012023, Ukraine";

        setForm({
          siteName: data.siteName || "Codex Dynamics",
          copyrightYear: data.copyrightYear || "2026",
          formSubmitEmail: data.formSubmitEmail || "codexdynamix@gmail.com",
          heroBadge: data.hero?.badge || "Codex Dynamics",
          heroTitle: data.hero?.title || "Precision on every screen.",
          heroSubtitle: data.hero?.subtitle || "Websites, web apps, and social campaigns — composed with the care of a product launch.",
          primaryPhone: ph,
          primaryWhatsApp: wa,
          primaryEmail: em,
          hqAddress: addr,
        });
      }
    } catch {
      // Keep default
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentConfig();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);
      const payloadConfig = {
        siteName: form.siteName,
        copyrightYear: form.copyrightYear,
        formSubmitEmail: form.formSubmitEmail,
        hero: {
          badge: form.heroBadge,
          title: form.heroTitle,
          subtitle: form.heroSubtitle,
        },
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
        toast.success("Site content saved to SQLite database!");
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
        fetchCurrentConfig();
      }
    } catch {
      toast.error("Failed to reset site content.");
    } finally {
      setResetting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Globe className="size-5 text-blue" />
            <h2 className="text-base font-semibold text-label font-display tracking-tight">
              Website Copy & Contact Configuration
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Edit live contact phone numbers, WhatsApp, physical studio location, and Hero headlines. Updates persist to SQLite in real time.
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
