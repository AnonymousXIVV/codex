import React, { useState } from "react";
import { Star, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { Review } from "@/types/crm";

interface ReviewsTabProps {
  reviews: Review[];
  onSaveReview: (data: any) => Promise<boolean>;
  onToggleReview: (id: number, is_published: boolean) => Promise<boolean>;
  onDeleteReview: (id: number) => Promise<boolean>;
}

export function ReviewsTab({
  reviews,
  onSaveReview,
  onToggleReview,
  onDeleteReview,
}: ReviewsTabProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    author: "",
    rating: 5,
    comment: "",
    image_path: "",
    is_published: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.author || !form.comment) return;
    const ok = await onSaveReview(form);
    if (ok) {
      setForm({
        author: "",
        rating: 5,
        comment: "",
        image_path: "",
        is_published: true,
      });
      setIsOpen(false);
      toast.success("Review published to Codex Dynamics site.");
    }
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Star className="size-5 text-amber-500 fill-amber-500" />
            <h2 className="text-base font-semibold text-label font-display tracking-tight">
              Client Testimonials & Social Proof
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Curate 5-star client testimonials, verified reviews, and ratings displayed on the public landing page.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer shrink-0"
        >
          <Plus className="size-3.5" />
          <span>{isOpen ? "Close Form" : "Add Review"}</span>
        </button>
      </div>

      {/* Add Review Form */}
      {isOpen && (
        <div className="surface-lift rounded-3xl bg-card border border-amber-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-label mb-2">
            Create Client Testimonial
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Client Name & Title
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Marcus Vance, Founder at Apex Capital"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-amber-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Rating
              </label>
              <select
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-amber-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all cursor-pointer"
              >
                <option value={5}>★★★★★ (5 Stars - Exceptional)</option>
                <option value={4}>★★★★☆ (4 Stars - Great)</option>
                <option value={3}>★★★☆☆ (3 Stars - Good)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Avatar Photo URL (Optional)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="/team/team-member-1.png or external image URL"
                  value={form.image_path}
                  onChange={(e) => setForm({ ...form, image_path: e.target.value })}
                  className="flex-1 bg-fill/60 hover:bg-fill border border-black/8 focus:border-amber-500 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setForm({ ...form, image_path: "/team/team-member-1.png" })}
                  className="px-3 py-2 rounded-xl bg-fill hover:bg-fill-elevated text-xs text-muted-foreground border border-black/8 cursor-pointer"
                >
                  Preset Avatar
                </button>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Review Feedback & Experience
              </label>
              <textarea
                rows={3}
                required
                placeholder="Describe the client's experience working with Codex Dynamics..."
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-amber-500 focus:bg-white rounded-xl p-3 text-xs text-label outline-none transition-all"
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
                <span>Publish directly to public landing page</span>
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
                  className="px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium transition-all shadow-sm cursor-pointer"
                >
                  Save Review
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.length === 0 ? (
          <div className="md:col-span-3 surface-lift rounded-2xl bg-card border border-black/8 p-12 text-center text-xs text-subtle">
            No reviews added yet. Click "Add Review" to create one.
          </div>
        ) : (
          reviews.map((r) => (
            <div
              key={r.id}
              className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {Array.from({ length: r.rating || 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={async () => {
                      await onToggleReview(r.id, !r.is_published);
                      toast.success(`Review ${r.is_published ? "hidden" : "published"}.`);
                    }}
                    className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider cursor-pointer ${
                      r.is_published
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                        : "bg-black/5 text-subtle border border-black/5"
                    }`}
                  >
                    {r.is_published ? "Live on site" : "Draft"}
                  </button>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-hairline flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {r.image_path ? (
                    <img
                      src={r.image_path}
                      alt={r.author}
                      className="size-8 rounded-full object-cover border border-black/8"
                    />
                  ) : (
                    <div className="size-8 rounded-full bg-blue/10 text-blue font-semibold text-xs flex items-center justify-center">
                      {r.author ? r.author[0] : "C"}
                    </div>
                  )}
                  <span className="text-xs font-semibold text-label">
                    {r.author}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={async () => {
                    await onDeleteReview(r.id);
                    toast.info("Review deleted.");
                  }}
                  className="p-1.5 text-subtle hover:text-red-600 rounded-full hover:bg-red-50 transition-colors cursor-pointer"
                  title="Delete review"
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
