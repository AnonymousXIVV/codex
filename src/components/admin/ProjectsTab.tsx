import React, { useState } from "react";
import { Briefcase, Plus, ExternalLink, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { Project } from "@/types/crm";

interface ProjectsTabProps {
  projects: Project[];
  onSaveProject: (data: any) => Promise<boolean>;
  onToggleProject: (id: number, is_published: boolean) => Promise<boolean>;
  onDeleteProject: (id: number) => Promise<boolean>;
}

export function ProjectsTab({
  projects,
  onSaveProject,
  onToggleProject,
  onDeleteProject,
}: ProjectsTabProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    site_name: "",
    site_url: "",
    description: "",
    category: "Web Engineering",
    is_published: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.site_url) return;
    const ok = await onSaveProject(form);
    if (ok) {
      setForm({
        title: "",
        site_name: "",
        site_url: "",
        description: "",
        category: "Web Engineering",
        is_published: true,
      });
      setIsOpen(false);
      toast.success("Project added to portfolio showcase.");
    }
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Briefcase className="size-5 text-blue" />
            <h2 className="text-base font-semibold text-label font-display tracking-tight">
              Completed Projects & Client Works Showcase
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Publish client site links, project case studies, and live deliverables so visitors can explore real production URLs.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer shrink-0"
        >
          <Plus className="size-3.5" />
          <span>{isOpen ? "Close Form" : "Post Project"}</span>
        </button>
      </div>

      {/* Add Project Form */}
      {isOpen && (
        <div className="surface-lift rounded-3xl bg-card border border-blue/30 p-6 sm:p-8 shadow-sm space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-label mb-2">
            Post Completed Client Project
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Project Title
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Luxury Dealership Platform"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Client / Company Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Motors Official"
                value={form.site_name}
                onChange={(e) => setForm({ ...form, site_name: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Live Website Link (External URL)
              </label>
              <input
                type="url"
                required
                placeholder="https://apexmotors-example.com"
                value={form.site_url}
                onChange={(e) => setForm({ ...form, site_url: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Category
              </label>
              <input
                type="text"
                placeholder="e.g. Full-Stack App, SaaS Platform, E-Commerce"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Project Scope & Results
              </label>
              <textarea
                rows={2}
                placeholder="Key accomplishments, technologies deployed, and client impact..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl p-3 text-xs text-label outline-none transition-all"
              />
            </div>

            <div className="sm:col-span-2 flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.is_published}
                  onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
                  className="rounded text-blue focus:ring-blue"
                />
                <span>Publish to live portfolio section</span>
              </label>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-medium text-muted-foreground hover:text-label hover:bg-fill transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-blue hover:bg-blue-hover text-paper text-xs font-medium transition-all shadow-sm cursor-pointer"
                >
                  Save Project
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.length === 0 ? (
          <div className="md:col-span-3 surface-lift rounded-2xl bg-card border border-black/8 p-12 text-center text-xs text-subtle">
            No projects added yet. Click "Post Project" to feature client work.
          </div>
        ) : (
          projects.map((p) => (
            <div
              key={p.id}
              className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue/10 text-blue border border-blue/20 text-[10px] font-semibold uppercase tracking-wider">
                    {p.category}
                  </span>
                  <button
                    type="button"
                    onClick={async () => {
                      await onToggleProject(p.id, !p.is_published);
                      toast.success(`Project ${p.is_published ? "hidden" : "published"}.`);
                    }}
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium transition-colors cursor-pointer ${
                      p.is_published
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-black/5 text-subtle"
                    }`}
                  >
                    {p.is_published ? "● Live" : "○ Draft"}
                  </button>
                </div>

                <h3 className="font-semibold text-sm text-label font-display">
                  {p.title}
                </h3>
                <div className="text-xs text-subtle font-medium">
                  {p.site_name}
                </div>
                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-3 border-t border-hairline flex items-center justify-between">
                <a
                  href={p.site_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-fill hover:bg-fill-elevated text-blue text-xs font-medium border border-black/8 transition-all hover:shadow-sm"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="size-3" />
                </a>

                <button
                  type="button"
                  onClick={async () => {
                    await onDeleteProject(p.id);
                    toast.info("Project deleted.");
                  }}
                  className="p-1.5 text-subtle hover:text-red-600 rounded-full hover:bg-red-50 transition-colors cursor-pointer"
                  title="Delete project"
                >
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
