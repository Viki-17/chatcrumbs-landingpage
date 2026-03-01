import React from "react";
import {
  MessageSquare,
  Link as LinkIcon,
  Sparkles,
  Code,
  GitMerge,
  FileText,
} from "lucide-react";

export default function HowItWorks() {
  const chatCrumbsSteps = [
    {
      title: "1. Capture",
      desc: "Chat with an LLM as normal. ChatCrumbs auto-saves the thread.",
      icon: <MessageSquare size={20} className="text-brand-blue" />,
    },
    {
      title: "2. Bind",
      desc: "Link the thread to your working document (Docs, Notion) with one click.",
      icon: <LinkIcon size={20} className="text-brand-blue" />,
    },
    {
      title: "3. Resurrect",
      desc: "Return to the document later, and your AI context is right there waiting.",
      icon: <Sparkles size={20} className="text-brand-blue" />,
    },
  ];

  const devCrumbsSteps = [
    {
      title: "1. Build",
      desc: "Write code, review PRs, or attend syncs as you normally do.",
      icon: <Code size={20} className="text-brand-blue" />,
    },
    {
      title: "2. Log",
      desc: "Instantly track the activity in the extension and tag the impact area.",
      icon: <GitMerge size={20} className="text-brand-blue" />,
    },
    {
      title: "3. Prove",
      desc: "Let DevCrumbs auto-generate your weekly updates and yearly reviews.",
      icon: <FileText size={20} className="text-brand-blue" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-slate-dark tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-lg text-brand-slate-medium">
            Seamlessly integrated into your browser. No new tabs required.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* ChatCrumbs Workflow */}
          <div className="relative">
            <div className="mb-8">
              <h3 className="text-2xl font-bold flex items-center gap-2 text-brand-slate-dark">
                <span className="text-2xl">🥐</span> ChatCrumbs Workflow
              </h3>
            </div>

            <div className="space-y-8 relative">
              {/* Connecting Line */}
              <div className="absolute left-[28px] top-6 bottom-6 w-0.5 bg-brand-slate-border/50 hidden md:block z-0"></div>

              {chatCrumbsSteps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-full border-2 border-brand-slate-border shadow-sm flex items-center justify-center shrink-0 group-hover:border-brand-blue transition-colors">
                    {step.icon}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-brand-slate-dark mb-2">
                      {step.title}
                    </h4>
                    <p className="text-brand-slate-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DevCrumbs Workflow */}
          <div className="relative">
            <div className="mb-8">
              <h3 className="text-2xl font-bold flex items-center gap-2 text-brand-slate-dark">
                <span className="text-2xl">🏗️</span> DevCrumbs Workflow
              </h3>
            </div>

            <div className="space-y-8 relative">
              {/* Connecting Line */}
              <div className="absolute left-[28px] top-6 bottom-6 w-0.5 bg-brand-slate-border/50 hidden md:block z-0"></div>

              {devCrumbsSteps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-full border-2 border-brand-slate-border shadow-sm flex items-center justify-center shrink-0 group-hover:border-brand-blue transition-colors">
                    {step.icon}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-brand-slate-dark mb-2">
                      {step.title}
                    </h4>
                    <p className="text-brand-slate-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
