import { Link } from "@tanstack/react-router";
import {
  RefreshCw,
  ExternalLink,
  Menu,
  Database,
  Activity,
  BarChart3,
  Inbox,
  Link2,
  FileText,
  Star,
  Briefcase,
  Shield,
  Users,
  Palette,
  LayoutTemplate,
  MessageSquare,
} from "lucide-react";
import type { AdminTabKey } from "./AdminSidebar";

interface AdminHeaderProps {
  activeTab: AdminTabKey;
  loading: boolean;
  onRefresh: () => void;
  onOpenMobileSidebar: () => void;
  onOpenHostingerModal: () => void;
  onLogout: () => void;
}

const tabMeta: Record<AdminTabKey, { label: string; icon: any; subtitle: string }> = {
  "site-editor": {
    label: "Elementor Visual Editor",
    icon: LayoutTemplate,
    subtitle: "Real-time visual page builder with responsive device preview",
  },
  themes: {
    label: "WordPress Themes & Layouts",
    icon: Palette,
    subtitle: "Manage, customize, and preview full themes, layouts, typography, and styles",
  },
  tidio: {
    label: "Tidio Live Chat",
    icon: MessageSquare,
    subtitle: "Live customer chat automation, lead triggers, and visitor conversation desk",
  },
  visitors: {
    label: "Live Visitors",
    icon: Activity,
    subtitle: "Real-time traffic telemetry and IP location logging",
  },
  leads: {
    label: "CRM Leads Database",
    icon: Users,
    subtitle: "Qualified prospects from visitor telemetry, contact forms, and blog readers",
  },
  analytics: {
    label: "Analytics & Regions",
    icon: BarChart3,
    subtitle: "Audience demographics, browser share, and device metrics",
  },
  enquiries: {
    label: "Inquiries & Leads",
    icon: Inbox,
    subtitle: "Client project estimates and direct contact submissions",
  },
  backlinks: {
    label: "SEO Backlinks",
    icon: Link2,
    subtitle: "High-authority referring domains and citation tracking",
  },
  blogs: {
    label: "Blogs & Rank Math",
    icon: FileText,
    subtitle: "On-page SEO scoring and search snippet optimization",
  },
  reviews: {
    label: "Client Reviews",
    icon: Star,
    subtitle: "Verified customer testimonials and social proof ratings",
  },
  projects: {
    label: "Portfolio Projects",
    icon: Briefcase,
    subtitle: "Featured production websites and client case studies",
  },
  settings: {
    label: "Settings & Alerts",
    icon: Shield,
    subtitle: "Security credentials, instant lead webhooks, and database backups",
  },
};

export function AdminHeader({
  activeTab,
  loading,
  onRefresh,
  onOpenMobileSidebar,
  onOpenHostingerModal,
}: AdminHeaderProps) {
  const current = tabMeta[activeTab] || tabMeta.visitors;
  const TabIcon = current.icon;

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-black/8 px-4 sm:px-6 lg:px-8 py-3.5 transition-colors">
      <div className="flex items-center justify-between gap-4">
        {/* Left Side: Mobile Menu Button & Section Breadcrumb */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2 rounded-xl text-subtle hover:text-label hover:bg-fill border border-black/8 transition-colors cursor-pointer shrink-0"
            aria-label="Open sidebar menu"
          >
            <Menu className="size-4 text-label" />
          </button>

          {/* Current Tab Info */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="hidden sm:flex p-1.5 rounded-lg bg-blue/10 text-blue shrink-0">
              <TabIcon className="size-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 text-xs text-subtle font-mono">
                <span className="hidden sm:inline">Codex CRM</span>
                <span className="hidden sm:inline">/</span>
                <span className="text-label font-semibold truncate font-sans text-sm sm:text-xs">
                  {current.label}
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-muted-foreground truncate">
                {current.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenHostingerModal}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-fill-elevated text-label text-xs font-medium border border-black/8 transition-all hover:shadow-xs cursor-pointer"
            title="Hostinger shared hosting & SQLite3 documentation"
          >
            <Database className="size-3.5 text-blue" />
            <span className="hidden lg:inline">Hostinger Docs</span>
          </button>

          <button
            type="button"
            onClick={onRefresh}
            disabled={loading}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-fill-elevated text-label text-xs font-medium border border-black/8 transition-all hover:shadow-xs cursor-pointer disabled:opacity-50"
            title="Sync data with SQLite database"
          >
            <RefreshCw
              className={`size-3.5 text-muted-foreground ${
                loading ? "animate-spin text-blue" : ""
              }`}
            />
            <span className="hidden sm:inline">Sync DB</span>
          </button>

          <Link
            to="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-fill hover:bg-fill-elevated text-label text-xs font-medium border border-black/8 transition-all hover:shadow-xs"
            title="Open public website in new tab"
          >
            <ExternalLink className="size-3.5 text-muted-foreground" />
            <span className="hidden sm:inline">Public Site</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

