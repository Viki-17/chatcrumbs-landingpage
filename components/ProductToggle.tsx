import React, { useState } from "react";
import { MessageSquare, TerminalSquare } from "lucide-react";

export default function ProductToggle() {
  const [activeTab, setActiveTab] = useState<"chatcrumbs" | "devcrumbs">(
    "chatcrumbs",
  );

  return (
    <section className="py-24 bg-brand-slate-light border-y border-brand-slate-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-slate-dark mb-4">
            Two powerful tools. <br className="md:hidden" />
            One lightweight extension.
          </h2>
          <p className="text-lg text-brand-slate-medium">
            Toggle between products to see how we help you build context and
            prove impact.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white rounded-full p-2 shadow-sm border border-brand-slate-border">
            <button
              onClick={() => setActiveTab("chatcrumbs")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                activeTab === "chatcrumbs"
                  ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                  : "text-brand-slate-medium hover:text-brand-slate-dark hover:bg-slate-50"
              }`}
            >
              <MessageSquare size={20} />
              ChatCrumbs
            </button>
            <button
              onClick={() => setActiveTab("devcrumbs")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                activeTab === "devcrumbs"
                  ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                  : "text-brand-slate-medium hover:text-brand-slate-dark hover:bg-slate-50"
              }`}
            >
              <TerminalSquare size={20} />
              DevCrumbs
            </button>
          </div>
        </div>

        {/* Interactive Preview Container */}
        <div className="relative max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-brand-slate-border overflow-hidden min-h-[400px]">
          {/* ChatCrumbs Content */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 p-8 flex flex-col md:flex-row gap-8 items-center ${
              activeTab === "chatcrumbs"
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="flex-1 space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-50 text-brand-blue font-bold text-sm tracking-wide uppercase rounded-full border border-blue-100 mb-2">
                For Knowledge Workers
              </div>
              <h3 className="text-3xl font-extrabold text-brand-slate-dark">
                Your AI memory, instantly accessible.
              </h3>
              <ul className="space-y-4">
                {[
                  "Save any AI chat UI state automatically.",
                  "Pin conversations to specific Google Docs.",
                  "Bundle chats together into Reusable Context Packs.",
                  "Search across ChatGPT, Claude, and Gemini at once.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-brand-slate-medium">
                    <span className="text-brand-blue shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a
                  href="#chatcrumbs"
                  className="text-brand-blue font-bold flex items-center gap-2 hover:underline"
                >
                  Explore ChatCrumbs Features <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="flex-1 w-full bg-slate-50 rounded-xl border border-brand-slate-border min-h-[320px] p-6 flex flex-col justify-center">
              <div className="w-full bg-white border border-brand-slate-border rounded-xl shadow-sm p-6 flex flex-col gap-5 relative overflow-hidden text-left">
                {/* Decorative dots */}
                <div className="absolute top-4 right-4 flex gap-1">
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                </div>

                <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                  <span>LAST CAPTURED</span>
                  <span className="text-red-500 hover:text-red-600 cursor-pointer capitalize">
                    Discard
                  </span>
                </div>

                <div>
                  <label className="text-xs font-bold text-brand-slate-dark block mb-2">
                    Note (Optional)
                  </label>
                  <div className="w-full border border-slate-200 rounded-lg p-3 text-sm text-brand-slate-medium bg-slate-50 h-11 flex items-center shadow-inner shadow-slate-100/50">
                    Extensions
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-brand-slate-dark block mb-2">
                    URL
                  </label>
                  <div className="w-full border border-slate-200 rounded-lg p-3 text-sm text-brand-slate-medium truncate bg-slate-50 h-11 flex items-center shadow-inner shadow-slate-100/50">
                    chrome://extensions/
                  </div>
                </div>

                <button className="w-full bg-brand-blue text-white font-bold py-3.5 rounded-lg hover:bg-blue-600 transition-colors mt-2 shadow-sm shadow-brand-blue/20">
                  Sync Now
                </button>
              </div>
            </div>
          </div>

          {/* DevCrumbs Content */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 p-8 flex flex-col md:flex-row gap-8 items-center ${
              activeTab === "devcrumbs"
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="flex-1 space-y-6">
              <div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue font-bold text-sm tracking-wide uppercase rounded-full border border-brand-blue/20 mb-2">
                For Software Engineers
              </div>
              <h3 className="text-3xl font-extrabold text-brand-slate-dark">
                Stop forgetting what you built.
              </h3>
              <ul className="space-y-4">
                {[
                  "One-click log PRs, Jira tickets, and Meetings.",
                  "Auto-generates Weekly Friday summaries.",
                  "Tag work by Impact Area (e.g., Performance, Core).",
                  "AI Year-End Summary for performance reviews.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-brand-slate-medium">
                    <span className="text-brand-blue shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a
                  href="#devcrumbs"
                  className="text-brand-blue font-bold flex items-center gap-2 hover:underline"
                >
                  Explore DevCrumbs Features <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="flex-1 w-full bg-slate-50 rounded-xl border border-brand-slate-border min-h-[320px] p-6 flex flex-col justify-center gap-4 text-left">
              <div className="flex flex-wrap gap-2.5 mb-2">
                {["Standup", "Meeting", "PR Review", "Helped", "Incident"].map(
                  (tag, idx) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-white border border-brand-slate-border text-brand-slate-dark text-xs font-semibold rounded-full shadow-sm flex items-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${idx === 0 ? "bg-brand-blue" : idx === 1 ? "bg-indigo-400" : idx === 2 ? "bg-emerald-400" : idx === 3 ? "bg-purple-400" : "bg-red-400"}`}
                      ></span>
                      {tag}
                    </span>
                  ),
                )}
              </div>

              <div className="w-full bg-white border border-brand-slate-border rounded-xl shadow-sm p-5 relative">
                <div className="flex justify-between items-center mb-5">
                  <div className="text-xs font-medium text-brand-slate-medium">
                    Total Effort{" "}
                    <span className="text-brand-slate-dark font-bold ml-1.5 text-sm">
                      129h 40m
                    </span>
                  </div>
                  <div className="text-xs font-medium text-brand-slate-medium flex items-center gap-1.5">
                    <TerminalSquare size={14} className="text-slate-400" />{" "}
                    Tickets{" "}
                    <span className="text-brand-slate-dark font-bold">27</span>
                  </div>
                </div>

                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden flex">
                  <div className="bg-emerald-500 w-[15%] h-full"></div>
                  <div className="bg-brand-blue w-[65%] h-full border-l-[3px] border-white"></div>
                  <div className="bg-slate-400 w-[20%] h-full border-l-[3px] border-white"></div>
                </div>

                <div className="flex gap-5 mt-4 text-[11px] font-medium text-brand-slate-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>{" "}
                    Done 3
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-blue"></span>{" "}
                    In Progress 22
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>{" "}
                    To Do 2
                  </span>
                </div>
              </div>

              <div className="w-full bg-white border border-brand-slate-border rounded-xl shadow-sm p-4 relative flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-blue-50 text-brand-blue text-[10px] font-bold rounded border border-blue-100">
                      DEFECT
                    </span>
                    <span className="text-brand-slate-dark font-bold text-sm tracking-tight hover:text-brand-blue cursor-pointer">
                      MYT-48291
                    </span>
                  </div>
                  <span className="text-sm font-medium text-brand-slate-dark truncate max-w-[250px]">
                    Unable to Update/Delete this...
                  </span>
                </div>
                <div className="flex gap-1 -mt-6">
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Ensure standard icon import for ArrowRight
import { ArrowRight } from "lucide-react";
