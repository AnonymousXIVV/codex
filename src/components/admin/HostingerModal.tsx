import { X, ShieldCheck, Database, CheckCircle2, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface HostingerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HostingerModal({ isOpen, onClose }: HostingerModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyPath = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl surface-lift rounded-3xl bg-card border border-black/8 p-6 sm:p-8 shadow-2xl space-y-5">
        <div className="flex items-center justify-between pb-4 border-b border-hairline">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue/10 text-blue">
              <Database className="size-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-label font-display">
                Hostinger Shared Hosting & SQLite Architecture
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Zero-configuration, native file-based database for shared PHP hosting
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-subtle hover:text-label hover:bg-fill transition-colors cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
          <div className="p-4 rounded-2xl bg-fill-subtle/70 border border-hairline space-y-2">
            <div className="flex items-center gap-2 text-label font-semibold">
              <ShieldCheck className="size-4 text-emerald-600" />
              <span>Why SQLite for Hostinger Shared Hosting?</span>
            </div>
            <p>
              Unlike PostgreSQL or external MySQL that requires port access and credentials, SQLite is a single self-contained file (<code className="font-mono text-label font-medium">database.sqlite</code>) supported out-of-the-box by Hostinger PHP without setup or extra hosting fees.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-label uppercase tracking-wider text-[11px]">
              Deployment Checklist for Hostinger hPanel:
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-label">1. SQLite3 PHP Extension:</span>
                  <p className="text-[11px]">
                    Enabled by default on PHP 8.1 / 8.2 / 8.3 in Hostinger hPanel under PHP Configurations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-label">2. File Permissions:</span>
                  <p className="text-[11px]">
                    Ensure <code className="font-mono text-label">database.sqlite</code> has read/write permissions (chmod 664 or 666) so PHP can write visitor logs and enquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-label">3. API Endpoints:</span>
                  <p className="text-[11px]">
                    All actions are routed via <code className="font-mono text-label">/api/crm/data</code> and <code className="font-mono text-label">/api/crm/action</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-fill border border-black/8 rounded-xl flex items-center justify-between font-mono text-[11px] text-label">
            <span>Database File: ./database.sqlite</span>
            <button
              type="button"
              onClick={() => copyPath("database.sqlite")}
              className="inline-flex items-center gap-1 text-blue hover:underline cursor-pointer"
            >
              {copied ? <Check className="size-3 text-emerald-600" /> : <Copy className="size-3" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>

        <div className="pt-3 border-t border-hairline flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
