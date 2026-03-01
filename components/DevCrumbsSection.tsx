import React from "react";
import {
  CheckSquare,
  CalendarDays,
  Tag,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function DevCrumbsSection() {
  const cards = [
    {
      title: "Jira & GitHub Integration",
      desc: "Log PRs and tickets with one click right from the page you're on, or type them into the Quick Log.",
      icon: <CheckSquare size={24} />,
    },
    {
      title: "Weekly Friday Nudge",
      desc: "Get an automated summary of your week’s logs—perfect for copy-pasting into standup or a team sync.",
      icon: <CalendarDays size={24} />,
    },
    {
      title: "Impact Categories",
      desc: "Tag your work as Core, Performance, Tech Debt, or Unplanned to visually track your engineering focus.",
      icon: <Tag size={24} />,
    },
    {
      title: "Standup & Meeting Logs",
      desc: "Quickly jot down notes from ad-hoc syncs so that invisible alignment work gets recognized.",
      icon: <TrendingUp size={24} />,
    },
  ];

  return (
    <section
      id="devcrumbs"
      className="py-24 bg-slate-50 border-y border-brand-slate-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue font-bold text-sm tracking-wide uppercase rounded-full mb-4 border border-brand-blue/20">
              <span className="text-lg leading-none">🏗️</span> DevCrumbs
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-slate-dark tracking-tight">
              Prove your engineering impact.
            </h2>
          </div>
          <div className="max-w-md text-brand-slate-medium text-lg">
            "What did I even do this week?" Never ask that again. Build a robust
            log of your work for standups, 1-on-1s, and performance reviews.
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-brand-slate-border hover:border-brand-blue/30 transition-colors group shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl shadow-sm border border-brand-slate-border flex items-center justify-center text-brand-slate-dark mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-slate-dark mb-3">
                {card.title}
              </h3>
              <p className="text-brand-slate-medium leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee Feature - AI Summary */}
        <div className="bg-gradient-to-br from-brand-slate-dark to-slate-900 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 text-white shadow-xl shadow-brand-slate-dark/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]"></div>
          <div className="flex-1 relative z-10 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 text-blue-400 font-bold text-xs tracking-wider uppercase rounded-full border border-white/10 backdrop-blur-sm">
                <Sparkles size={14} /> Magic Feature
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-blue/20 text-blue-300 font-bold text-xs tracking-wider uppercase rounded-full border border-brand-blue/30 backdrop-blur-sm">
                Coming Soon
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              AI Year-End Review Summary
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              When review season hits, don't sit staring at a blank page.
              DevCrumbs analyzes your entire year of logs and generates a
              structured, brag-ready narrative of everything you shipped,
              grouped by impact.
            </p>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-white/20 transition-all shadow-sm">
              See an Example
            </button>
          </div>

          <div className="flex-1 w-full relative z-10">
            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl shadow-2xl">
              <div className="flex gap-2 items-center mb-4 pb-4 border-b border-slate-700/50">
                <Sparkles size={20} className="text-blue-400" />
                <span className="font-bold text-slate-200">
                  Generated Impact Report: 2026
                </span>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-blue-400 font-bold text-sm">
                    Core Contributions
                  </h4>
                  <div className="h-2 w-full bg-slate-700/50 rounded"></div>
                  <div className="h-2 w-5/6 bg-slate-700/50 rounded"></div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-emerald-400 font-bold text-sm">
                    Infrastructure & Perf
                  </h4>
                  <div className="h-2 w-[90%] bg-slate-700 rounded"></div>
                  <div className="h-2 w-3/4 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
