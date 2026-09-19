import { useState } from "react";
import {
  Sparkles,
  Search,
  Monitor,
  Smartphone,
  Tablet,
  Copy,
  CheckCircle2,
  Eye,
  UserPlus,
  Clock,
  History,
  Filter,
} from "lucide-react";
import { toast } from "sonner";
import type { Visitor } from "@/types/crm";
import { BrowserBadge } from "./BrowserBadge";
import { CountryFlag } from "./CountryFlag";
import { VisitorDetailModal } from "./VisitorDetailModal";
import { resolveGeoLocation } from "@/lib/geo-utils";

interface VisitorsTabProps {
  visitors: Visitor[];
  onSimulate: () => void;
  onAddToLeads?: (visitor: Visitor, customData?: any) => Promise<void>;
  leadsSessionIds?: Set<string>;
}

export function VisitorsTab({
  visitors,
  onSimulate,
  onAddToLeads,
  leadsSessionIds = new Set(),
}: VisitorsTabProps) {
  const [filter, setFilter] = useState("");
  const [browserFilter, setBrowserFilter] = useState<string>("all");
  const [copiedIp, setCopiedIp] = useState<string | null>(null);
  const [selectedVisitor, setSelectedVisitor] = useState<Visitor | null>(null);

  const handleCopyIp = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedIp(ip);
    toast.success(`Copied IP ${ip} to clipboard`);
    setTimeout(() => setCopiedIp(null), 2000);
  };

  const getDeviceIcon = (deviceStr: string) => {
    const d = (deviceStr || "").toLowerCase();
    if (d.includes("mobile") || d.includes("phone")) {
      return <Smartphone className="size-3.5 text-blue" />;
    }
    if (d.includes("tablet") || d.includes("ipad")) {
      return <Tablet className="size-3.5 text-purple-600" />;
    }
    return <Monitor className="size-3.5 text-muted-foreground" />;
  };

  const formatDuration = (seconds?: number) => {
    const s = seconds || 60;
    if (s < 60) return `${s}s`;
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}m ${secs}s`;
  };

  const filteredVisitors = visitors.filter((v) => {
    const q = filter.toLowerCase();
    const matchesQuery =
      !q ||
      v.ip_address.toLowerCase().includes(q) ||
      (v.country && v.country.toLowerCase().includes(q)) ||
      (v.city && v.city.toLowerCase().includes(q)) ||
      (v.browser && v.browser.toLowerCase().includes(q)) ||
      (v.page_url && v.page_url.toLowerCase().includes(q)) ||
      (v.session_id && v.session_id.toLowerCase().includes(q));

    if (!matchesQuery) return false;

    if (browserFilter !== "all") {
      const b = (v.browser || "").toLowerCase();
      if (!b.includes(browserFilter.toLowerCase())) return false;
    }

    return true;
  });

  return (
    <div className="space-y-4">
      {/* Top Banner & Action */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <h2 className="text-base font-semibold text-label font-display tracking-tight">
              Live Visitor & Client Stream
            </h2>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 uppercase">
              Tidio & Analytics Mode
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Real-time client telemetry, flags, browser badges, cookie tracking, visit durations, and clickstream paths.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onSimulate}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer"
          >
            <Sparkles className="size-3.5" />
            <span>Simulate Visitor Ping</span>
          </button>
        </div>
      </div>

      {/* Visitor Table Card */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 overflow-hidden shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]">
        {/* Search & Header Bar */}
        <div className="p-4 border-b border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-fill-subtle/40">
          <div className="flex flex-wrap items-center gap-3 flex-1">
            <div className="relative flex-1 max-w-sm">
              <Search className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-subtle" />
              <input
                type="text"
                placeholder="Search IP, country, city, browser, route..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-white border border-black/8 focus:border-blue rounded-full pl-9 pr-4 py-2 text-xs text-label placeholder:text-subtle transition-all outline-none"
              />
            </div>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Filter className="size-3.5 text-subtle" />
              <select
                value={browserFilter}
                onChange={(e) => setBrowserFilter(e.target.value)}
                className="bg-white border border-black/8 rounded-full px-3 py-1.5 text-xs text-label outline-none"
              >
                <option value="all">All Browsers</option>
                <option value="chrome">Chrome</option>
                <option value="safari">Safari</option>
                <option value="firefox">Firefox</option>
                <option value="edge">Edge</option>
                <option value="opera">Opera</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-subtle">
            <span>{filteredVisitors.length} of {visitors.length} sessions</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-label">
            <thead className="bg-fill-subtle/80 text-subtle text-[11px] uppercase font-semibold tracking-wider border-b border-hairline">
              <tr>
                <th className="py-3 px-4">Time & Status</th>
                <th className="py-3 px-4">Client IP</th>
                <th className="py-3 px-4">Location (Flag + Country)</th>
                <th className="py-3 px-4">Browser Type</th>
                <th className="py-3 px-4">Device</th>
                <th className="py-3 px-4">Duration & Visits</th>
                <th className="py-3 px-4">Active Route</th>
                <th className="py-3 px-4 text-right">Details & Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {filteredVisitors.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-subtle">
                    No visitor records match your filter.
                  </td>
                </tr>
              ) : (
                filteredVisitors.map((v) => {
                  const geo = resolveGeoLocation(v.country, v.flag);
                  const flag = v.flag || geo.flag;
                  const country = v.country || geo.country;
                  const isLead = v.is_lead || leadsSessionIds.has(v.session_id);

                  return (
                    <tr key={v.id} className="hover:bg-fill-subtle/50 transition-colors group">
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-emerald-500 shrink-0" />
                          <span className="font-mono text-[11px] text-muted-foreground">
                            {v.created_at ? v.created_at.slice(11, 19) : "Just now"}
                          </span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-label">
                          <span>{v.ip_address}</span>
                          <button
                            type="button"
                            onClick={() => handleCopyIp(v.ip_address)}
                            className="text-subtle hover:text-label p-1 rounded transition-colors cursor-pointer"
                            title="Copy IP"
                          >
                            {copiedIp === v.ip_address ? (
                              <CheckCircle2 className="size-3 text-emerald-600" />
                            ) : (
                              <Copy className="size-3" />
                            )}
                          </button>
                        </div>
                      </td>

                      {/* Location with Official Flag and Country Name */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2.5">
                          <CountryFlag country={country} countryCode={v.country_code} flag={flag} size="md" />
                          <div>
                            <span className="font-semibold text-label">{country}</span>
                            <span className="text-[11px] text-muted-foreground ml-1.5 font-normal">
                              ({v.city || geo.city})
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Browser with Official Logo/Icon and Full Name */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <BrowserBadge browser={v.browser} showFull size="sm" />
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-fill border border-black/5 text-[11px] text-label">
                          {getDeviceIcon(v.device)}
                          <span>{v.device || "Desktop"}</span>
                        </div>
                      </td>

                      {/* Duration & Visits */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 font-mono text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                            <Clock className="size-3 text-emerald-600" />
                            <span>{formatDuration(v.duration_seconds)}</span>
                          </span>

                          {v.is_returning || (v.visit_count && v.visit_count > 1) ? (
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded-full border border-purple-200">
                              <History className="size-2.5" />
                              <span>{v.visit_count || 2}x</span>
                            </span>
                          ) : (
                            <span className="text-[10px] font-medium text-muted-foreground">1st</span>
                          )}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap font-mono text-[11px] text-blue font-medium">
                        {v.page_url || "/"}
                      </td>

                      {/* Action: View More Modal & Add to Leads */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-right">
                        <div className="inline-flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setSelectedVisitor(v)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-fill hover:bg-black/8 text-label text-xs font-semibold border border-black/10 transition-all cursor-pointer shadow-xs active:scale-[0.98]"
                          >
                            <Eye className="size-3.5 text-blue" />
                            <span>View More</span>
                          </button>

                          {isLead ? (
                            <span
                              className="p-1.5 rounded-full text-emerald-600 bg-emerald-50 border border-emerald-200"
                              title="Already added to CRM Leads"
                            >
                              <CheckCircle2 className="size-3.5" />
                            </span>
                          ) : onAddToLeads ? (
                            <button
                              type="button"
                              onClick={() => setSelectedVisitor(v)}
                              className="p-1.5 rounded-full text-blue hover:text-white hover:bg-blue bg-blue/5 border border-blue/20 transition-all cursor-pointer"
                              title="Add to Leads"
                            >
                              <UserPlus className="size-3.5" />
                            </button>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visitor Detail Modal */}
      <VisitorDetailModal
        visitor={selectedVisitor}
        isOpen={!!selectedVisitor}
        onClose={() => setSelectedVisitor(null)}
        onAddToLeads={async (vis, custom) => {
          if (onAddToLeads) {
            await onAddToLeads(vis, custom);
          }
        }}
        isAlreadyLead={selectedVisitor ? Boolean(selectedVisitor.is_lead || leadsSessionIds.has(selectedVisitor.session_id)) : false}
      />
    </div>
  );
}
