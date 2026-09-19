import { useState } from "react";
import {
  Shield,
  KeyRound,
  BellRing,
  Send,
  CheckCircle2,
  AlertCircle,
  Download,
  Database,
  RefreshCw,
  ExternalLink,
  Laptop,
} from "lucide-react";
import type { CrmStats } from "@/types/crm";

interface SettingsTabProps {
  stats: CrmStats;
  webhookUrl: string;
  onSaveWebhook: (url: string) => Promise<void>;
  onTestWebhook: (url: string) => Promise<{ ok: boolean; message: string }>;
  onChangePassword: (currentPass: string, newPass: string) => Promise<{ ok: boolean; message?: string; error?: string }>;
  onOpenHostingerModal: () => void;
  fullData: any;
}

export function SettingsTab({
  stats,
  webhookUrl: initialWebhook,
  onSaveWebhook,
  onTestWebhook,
  onChangePassword,
  onOpenHostingerModal,
  fullData,
}: SettingsTabProps) {
  // Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passLoading, setPassLoading] = useState(false);
  const [passMsg, setPassMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Webhook state
  const [webhook, setWebhook] = useState(initialWebhook || "");
  const [webhookLoading, setWebhookLoading] = useState(false);
  const [webhookMsg, setWebhookMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [testLoading, setTestLoading] = useState(false);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPassMsg(null);

    if (newPassword !== confirmPassword) {
      setPassMsg({ type: "error", text: "New passwords do not match." });
      return;
    }
    if (newPassword.length < 6) {
      setPassMsg({ type: "error", text: "New password must be at least 6 characters." });
      return;
    }

    setPassLoading(true);
    try {
      const res = await onChangePassword(currentPassword, newPassword);
      if (res.ok) {
        setPassMsg({ type: "success", text: res.message || "Password updated successfully in SQLite database." });
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setPassMsg({ type: "error", text: res.error || "Failed to update password." });
      }
    } catch (err) {
      setPassMsg({ type: "error", text: String(err) });
    } finally {
      setPassLoading(false);
    }
  };

  const handleSaveWebhook = async (e: React.FormEvent) => {
    e.preventDefault();
    setWebhookMsg(null);
    setWebhookLoading(true);
    try {
      await onSaveWebhook(webhook);
      setWebhookMsg({ type: "success", text: "Webhook URL saved successfully." });
    } catch (err) {
      setWebhookMsg({ type: "error", text: String(err) });
    } finally {
      setWebhookLoading(false);
    }
  };

  const handleTestWebhook = async () => {
    if (!webhook.trim()) {
      setWebhookMsg({ type: "error", text: "Please enter a webhook URL first." });
      return;
    }
    setTestLoading(true);
    setWebhookMsg(null);
    try {
      const res = await onTestWebhook(webhook);
      setWebhookMsg({
        type: res.ok ? "success" : "error",
        text: res.message || (res.ok ? "Test ping dispatched successfully!" : "Webhook test failed."),
      });
    } catch (err) {
      setWebhookMsg({ type: "error", text: String(err) });
    } finally {
      setTestLoading(false);
    }
  };

  const handleExportJson = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(fullData, null, 2)
    )}`;
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", jsonString);
    downloadAnchor.setAttribute("download", `codex_crm_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]">
        <div className="flex items-center gap-2">
          <Shield className="size-5 text-blue" />
          <h2 className="text-base font-semibold text-label font-display tracking-tight">
            Security, Alerts & System Configuration
          </h2>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Manage administrator access credentials, instant lead dispatch webhooks, dynamic public synchronization, and offline database archives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Admin Password Settings */}
        <div className="surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-hairline mb-5">
              <div className="flex items-center gap-2">
                <KeyRound className="size-4 text-blue" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-label">
                  Admin Credentials
                </h3>
              </div>
              <span className="text-[11px] font-mono text-subtle">
                admin@codexdynamics.com
              </span>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-label mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password (default: Admin123!)"
                  className="w-full text-xs rounded-xl border border-black/10 bg-fill/40 px-3.5 py-2.5 text-label placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-label mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Min. 6 characters"
                    className="w-full text-xs rounded-xl border border-black/10 bg-fill/40 px-3.5 py-2.5 text-label placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-label mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat new password"
                    className="w-full text-xs rounded-xl border border-black/10 bg-fill/40 px-3.5 py-2.5 text-label placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition"
                  />
                </div>
              </div>

              {passMsg && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-xl text-xs ${
                    passMsg.type === "success"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {passMsg.type === "success" ? (
                    <CheckCircle2 className="size-4 shrink-0" />
                  ) : (
                    <AlertCircle className="size-4 shrink-0" />
                  )}
                  <span>{passMsg.text}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={passLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue text-paper px-4 py-2.5 text-xs font-medium hover:bg-blue/90 transition shadow-sm disabled:opacity-50"
              >
                {passLoading && <RefreshCw className="size-3.5 animate-spin" />}
                <span>Update Admin Password</span>
              </button>
            </form>
          </div>

          <div className="pt-4 mt-6 border-t border-hairline text-[11px] text-subtle">
            Stored securely inside SQLite <code className="font-mono bg-fill px-1 py-0.5 rounded">users</code> table.
          </div>
        </div>

        {/* Lead Alert Webhook Notifications */}
        <div className="surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-hairline mb-5">
              <div className="flex items-center gap-2">
                <BellRing className="size-4 text-emerald-600" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-label">
                  Instant Lead Alerts (Webhook)
                </h3>
              </div>
              <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-medium">
                Live Integration
              </span>
            </div>

            <p className="text-xs text-muted-foreground mb-4">
              Receive instant JSON webhook notifications to Slack, Discord, Zapier, Make, or custom API endpoints whenever a new client submits an enquiry.
            </p>

            <form onSubmit={handleSaveWebhook} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-label mb-1">
                  Webhook Endpoint URL
                </label>
                <input
                  type="url"
                  value={webhook}
                  onChange={(e) => setWebhook(e.target.value)}
                  placeholder="https://hooks.slack.com/services/... or Zapier/Discord"
                  className="w-full text-xs rounded-xl border border-black/10 bg-fill/40 px-3.5 py-2.5 text-label placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition font-mono"
                />
              </div>

              {webhookMsg && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-xl text-xs ${
                    webhookMsg.type === "success"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {webhookMsg.type === "success" ? (
                    <CheckCircle2 className="size-4 shrink-0" />
                  ) : (
                    <AlertCircle className="size-4 shrink-0" />
                  )}
                  <span>{webhookMsg.text}</span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={webhookLoading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-label text-card px-4 py-2.5 text-xs font-medium hover:bg-label/90 transition shadow-sm disabled:opacity-50"
                >
                  {webhookLoading && <RefreshCw className="size-3.5 animate-spin" />}
                  <span>Save Webhook</span>
                </button>

                <button
                  type="button"
                  onClick={handleTestWebhook}
                  disabled={testLoading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-fill text-label hover:bg-fill/80 border border-black/8 px-4 py-2.5 text-xs font-medium transition disabled:opacity-50"
                >
                  {testLoading ? (
                    <RefreshCw className="size-3.5 animate-spin" />
                  ) : (
                    <Send className="size-3.5 text-blue" />
                  )}
                  <span>Test Webhook Ping</span>
                </button>
              </div>
            </form>
          </div>

          <div className="pt-4 mt-6 border-t border-hairline text-[11px] text-subtle">
            Dispatches asynchronous POST payload with lead contact details & message.
          </div>
        </div>

        {/* Public Site Sync Telemetry */}
        <div className="surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]">
          <div className="flex items-center justify-between pb-3 border-b border-hairline mb-4">
            <div className="flex items-center gap-2">
              <Laptop className="size-4 text-purple-600" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-label">
                Public Site Synchronization
              </h3>
            </div>
            <span className="text-[11px] text-subtle font-mono">
              /api/public/content
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-fill/50 border border-black/5">
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="font-medium text-label">Portfolio & Projects</span>
              </div>
              <span className="text-subtle font-mono">{stats.totalProjects} active synced</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-fill/50 border border-black/5">
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="font-medium text-label">Client Proof & Reviews</span>
              </div>
              <span className="text-subtle font-mono">{stats.totalReviews} verified reviews</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-fill/50 border border-black/5">
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="font-medium text-label">Rank Math SEO Articles</span>
              </div>
              <span className="text-subtle font-mono">{stats.totalBlogs} posts indexed</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-fill/50 border border-black/5">
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="font-medium text-label">Lead Capture Funnel</span>
              </div>
              <span className="text-subtle font-mono">Direct to SQLite</span>
            </div>
          </div>
        </div>

        {/* Database & Production Export */}
        <div className="surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-hairline mb-4">
              <div className="flex items-center gap-2">
                <Database className="size-4 text-amber-600" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-label">
                  Database & Deployment
                </h3>
              </div>
              <span className="text-[11px] font-mono text-subtle">
                database.sqlite
              </span>
            </div>

            <p className="text-xs text-muted-foreground mb-4">
              Export complete backups or review Hostinger PHP SQLite deployment instructions for production migration.
            </p>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleExportJson}
                className="w-full flex items-center justify-between p-3.5 rounded-xl border border-black/10 bg-fill/50 hover:bg-fill text-label transition text-xs font-medium group"
              >
                <div className="flex items-center gap-2.5">
                  <Download className="size-4 text-blue group-hover:translate-y-0.5 transition" />
                  <span>Download Full CRM Backup (JSON)</span>
                </div>
                <span className="text-[11px] text-subtle font-mono">Instant Export</span>
              </button>

              <button
                type="button"
                onClick={onOpenHostingerModal}
                className="w-full flex items-center justify-between p-3.5 rounded-xl border border-black/10 bg-fill/50 hover:bg-fill text-label transition text-xs font-medium group"
              >
                <div className="flex items-center gap-2.5">
                  <ExternalLink className="size-4 text-purple-600 group-hover:rotate-12 transition" />
                  <span>Hostinger & PHP Sync Architecture</span>
                </div>
                <span className="text-[11px] text-subtle font-mono">View Docs</span>
              </button>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-hairline text-[11px] text-subtle">
            Zero external vendor lock-in; lightweight SQLite portable engine.
          </div>
        </div>
      </div>
    </div>
  );
}
