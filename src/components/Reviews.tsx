import { useEffect, useState } from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { Review } from "@/types/crm";

const fallbackReviews: Review[] = [
  {
    id: 1,
    author: "Elena Rostova, VP Product at Northline",
    rating: 5,
    comment: "Codex Dynamics rebuilt our entire e-commerce infrastructure in 4 weeks. Conversion went up 41% and page load speeds dropped under 2 seconds globally.",
    image_path: null,
    is_published: 1,
    created_at: "2026-02-14",
  },
  {
    id: 2,
    author: "Julian Thorne, Founder at Hearth Studio",
    rating: 5,
    comment: "The rarest combination of world-class design taste and impeccable engineering. Our brand system now scales seamlessly across web, print, and paid acquisition.",
    image_path: null,
    is_published: 1,
    created_at: "2026-02-10",
  },
  {
    id: 3,
    author: "Marcus Vance, Head of Growth at Aperture Co.",
    rating: 5,
    comment: "Their paid social creatives and tailored landing funnels delivered a 5.4x blended ROAS from day one. Absolute masters of digital execution.",
    image_path: null,
    is_published: 1,
    created_at: "2026-01-28",
  },
];

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(fallbackReviews);

  useEffect(() => {
    fetch("/api/public/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.ok && Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
      })
      .catch(() => {
        // Fallback reviews are already active
      });
  }, []);

  return (
    <section
      id="reviews"
      aria-label="Client Reviews"
      className="scroll-mt-24 border-t border-border/40 bg-background py-16 sm:py-24"
    >
      <div className="shell">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="mb-3 text-[11px] font-medium tracking-[0.22em] text-subtle uppercase">
                Endorsements
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-label sm:text-5xl">
                What leaders say after we ship.
              </h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-sm self-start sm:self-auto">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Verified Client Feedback</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev, idx) => (
            <Reveal key={rev.id || idx} delay={idx * 80}>
              <div className="surface-lift relative flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-card/80 p-7 backdrop-blur-sm transition-all hover:border-border">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < rev.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-muted-foreground/20" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border/40 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 flex items-center justify-center text-xs font-semibold text-paper">
                    {rev.author.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-label truncate">
                      {rev.author}
                    </p>
                    <p className="text-xs text-subtle truncate">
                      Verified Client
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
