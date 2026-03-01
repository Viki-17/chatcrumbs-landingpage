import React from "react";
import { Star } from "lucide-react";

export default function SocialProof() {
  const testimonials = [
    {
      quote:
        "TODO: Add testimonial regarding how ChatCrumbs saved someone from losing AI context when switching tabs.",
      author: "TODO: Author Name",
      role: "Frontend Engineer",
      product: "ChatCrumbs",
    },
    {
      quote:
        "TODO: Add testimonial regarding how DevCrumbs made performance reviews 10x easier or helped a developer get promoted.",
      author: "TODO: Author Name",
      role: "Senior Full Stack Dev",
      product: "DevCrumbs",
    },
    {
      quote:
        "TODO: Add testimonial regarding the value of having both tools in the same lightweight browser extension.",
      author: "TODO: Author Name",
      role: "Tech Lead",
      product: "Ecosystem",
    },
  ];

  return (
    <section className="py-24 bg-brand-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-slate-dark mb-4">
            Built for developers who value their time.
          </h2>
          <p className="text-lg text-brand-slate-medium">
            Join hundreds of engineers who have stopped repeating themselves and
            started proving their impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm border border-brand-slate-border flex flex-col h-full relative overflow-hidden"
            >
              {/* Product Identifier Badge */}
              <div className="absolute top-0 right-0 p-4 opacity-50">
                {t.product === "ChatCrumbs" ? (
                  <span className="text-2xl">🥐</span>
                ) : t.product === "DevCrumbs" ? (
                  <span className="text-2xl">🏗️</span>
                ) : (
                  <span className="text-2xl">🌟</span>
                )}
              </div>

              <div className="flex gap-1 text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-brand-slate-dark text-lg font-medium mb-8 flex-1 italic relative z-10">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-4 border-t border-brand-slate-border/50 pt-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold">
                  {t.author.charAt(0) || "U"}
                </div>
                <div>
                  <div className="font-bold text-brand-slate-dark">
                    {t.author}
                  </div>
                  <div className="text-brand-slate-medium text-sm">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="mt-20 pt-10 border-t border-brand-slate-border max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-brand-slate-dark">
            <div>
              <div className="text-3xl font-extrabold">10k+</div>
              <div className="text-sm text-brand-slate-medium font-medium mt-1">
                Chats Captured
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-amber-500 hover:scale-105 transition-transform">
                5k+
              </div>
              <div className="text-sm text-brand-slate-medium font-medium mt-1">
                PRs Logged
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-brand-blue hover:scale-105 transition-transform">
                ∞
              </div>
              <div className="text-sm text-brand-slate-medium font-medium mt-1">
                Context Saved
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">
                5{" "}
                <Star
                  size={20}
                  className="inline text-amber-500 drop-shadow-sm mb-1"
                  fill="currentColor"
                />
              </div>
              <div className="text-sm text-brand-slate-medium font-medium mt-1">
                Chrome Store Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
