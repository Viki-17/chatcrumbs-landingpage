import React from "react";
import { Link, CheckCircle, FolderOpen, Search, Cloud } from "lucide-react";

export default function ChatCrumbsSection() {
  const cards = [
    {
      title: "Unified AI Link Capture",
      desc: "Automatically save URLs, titles, and context from ChatGPT, Claude, and Gemini without breaking your flow.",
      icon: <Link size={24} />,
    },
    {
      title: "Smart Context Linking",
      desc: "Bind your AI chats directly to the Google Docs or Notion pages where you are applying the generated work.",
      icon: <CheckCircle size={24} />,
    },
    {
      title: "Context Packs & Seeding",
      desc: "Bundle related chats and notes together. Instantly seed a new AI session with all that accumulated context.",
      icon: <FolderOpen size={24} />,
    },
    {
      title: "Global Search & Cloud Sync",
      desc: "Find any past conversation instantly. All your crumbs are synced securely to the cloud, accessible anywhere.",
      icon: <Search size={24} />,
    },
  ];

  return (
    <section id="chatcrumbs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-brand-blue font-bold text-sm tracking-wide uppercase rounded-full mb-4">
              <span className="text-lg leading-none">🥐</span> ChatCrumbs
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-slate-dark tracking-tight">
              Build your AI second brain.
            </h2>
          </div>
          <div className="max-w-md text-brand-slate-medium text-lg">
            Stop losing valuable LLM interactions. Capture them, organize them,
            and actually reuse the context you've built up over time.
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-brand-slate-light rounded-2xl p-8 border border-brand-slate-border hover:border-brand-blue/30 transition-colors group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-brand-slate-border flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
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
      </div>
    </section>
  );
}
