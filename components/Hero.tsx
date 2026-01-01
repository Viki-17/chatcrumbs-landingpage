import React from "react";
import Button from "./Button";
import { Bot, FileText, Zap, Link as LinkIcon, Sparkles } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-40 overflow-hidden bg-brand-slate-light">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Headlines */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
            <Sparkles size={14} />
            <span>AI Context Linking Tool</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-slate-dark tracking-tight mb-6 leading-[1.1]">
            Pin AI Chats to <br className="hidden md:block" />
            <span className="text-brand-blue relative inline-block">
              Notion & Google Docs
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 7C20 7 30 1 50 1C70 1 80 7 100 7"
                  stroke="#2663EB"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-slate-medium mb-10 leading-relaxed">
            Bridge the context gap between your LLM thinking and your document
            building. The only extension that links{" "}
            <strong>AI workflow productivity</strong> directly to your projects.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-5 mb-24">
          <Button
            variant="primary"
            size="lg"
            className="shadow-xl shadow-brand-blue/20 px-12 h-14 text-lg"
            onClick={() =>
              window.open(
                "https://chromewebstore.google.com/detail/chatcrumbs/kakallfjlccgjklljjkgjobpcgoghoma?pli=1",
                "_blank"
              )
            }
          >
            Get Started for Free
          </Button>
          <div className="flex items-center gap-4 text-sm text-brand-slate-medium">
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>{" "}
              Public Beta
            </span>
            <span className="w-1 h-1 bg-brand-slate-border rounded-full"></span>
            <span>No credit card required</span>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="relative max-w-5xl mx-auto px-4">
          {/* Enhanced SVG Flow Line */}
          <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main connecting path */}
              <path
                id="crumbPath"
                d="M 280 260 C 400 260, 450 150, 500 150 C 550 150, 600 260, 720 260"
                stroke="#2663EB"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="opacity-20"
              />

              {/* Traveling "Crumbs" */}
              <circle r="4" fill="#2663EB" className="crumb-particle">
                <animateMotion dur="3s" repeatCount="indefinite">
                  <mpath href="#crumbPath" />
                </animateMotion>
              </circle>

              <circle
                r="3"
                fill="#2663EB"
                className="crumb-particle"
                style={{ animationDelay: "1s" }}
              >
                <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                  <mpath href="#crumbPath" />
                </animateMotion>
              </circle>

              <circle
                r="2"
                fill="#2663EB"
                className="crumb-particle"
                style={{ animationDelay: "2s" }}
              >
                <animateMotion dur="3s" repeatCount="indefinite" begin="2s">
                  <mpath href="#crumbPath" />
                </animateMotion>
              </circle>
            </svg>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Window: AI Chat */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 to-purple-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white rounded-xl shadow-2xl border border-brand-slate-border overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                <div className="bg-slate-50 border-b border-brand-slate-border px-4 py-3 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  </div>
                  <div className="text-[10px] font-bold text-brand-slate-medium bg-white border border-brand-slate-border px-3 py-1 rounded-full shadow-sm">
                    chat.openai.com
                  </div>
                  <div className="w-8"></div>
                </div>
                <div className="p-6 flex flex-col gap-5 h-[340px] relative bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:20px_20px]">
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 flex-shrink-0">
                      <Bot size={18} />
                    </div>
                    <div className="bg-white border border-brand-slate-border p-4 rounded-2xl rounded-tl-none text-sm text-brand-slate-dark shadow-sm max-w-[85%] leading-relaxed">
                      "I've drafted the executive summary. It focuses on the 15%
                      growth target for Q3..."
                    </div>
                  </div>

                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/20 flex-shrink-0">
                      <div className="font-bold text-xs uppercase">Me</div>
                    </div>
                    <div className="bg-brand-blue text-white p-4 rounded-2xl rounded-tr-none text-sm max-w-[80%] shadow-lg">
                      Looks perfect. Can we link this to the Strategy Doc?
                    </div>
                  </div>

                  {/* Enhanced ChatCrumbs Bubble */}
                  <div className="absolute bottom-6 right-6 z-30">
                    <div className="flex items-center gap-3 bg-white border-2 border-brand-blue p-3 pr-5 rounded-2xl shadow-xl animate-float glow-sync group/btn cursor-pointer">
                      <div className="w-8 h-8 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/30 group-hover/btn:scale-110 transition">
                        <LinkIcon size={16} />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-black text-brand-blue tracking-tighter leading-none mb-1">
                          Crumbs Linked
                        </div>
                        <div className="text-xs font-bold text-brand-slate-dark whitespace-nowrap">
                          Q3 Strategy Doc
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Window: Doc Workspace */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-brand-blue/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white rounded-xl shadow-2xl border border-brand-slate-border overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                <div className="bg-slate-50 border-b border-brand-slate-border px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white shadow-sm">
                    <FileText size={18} />
                  </div>
                  <div className="flex-grow">
                    <div className="text-xs font-bold text-brand-slate-dark leading-none mb-0.5">
                      Q3 Strategy Doc
                    </div>
                    <div className="text-[10px] text-brand-slate-medium">
                      Editing in Google Docs
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-brand-blue text-[8px] font-bold flex items-center justify-center text-white">
                      JS
                    </div>
                  </div>
                </div>

                <div className="flex h-[340px]">
                  <div className="flex-grow p-8 bg-white overflow-hidden">
                    <div className="h-6 w-1/2 bg-slate-100 rounded mb-6"></div>
                    <div className="space-y-3">
                      <div className="h-3 w-full bg-slate-50 rounded"></div>
                      <div className="h-3 w-[95%] bg-slate-50 rounded"></div>
                      <div className="h-3 w-[80%] bg-slate-50 rounded"></div>
                      <div className="h-20 w-full bg-blue-50/30 rounded-lg border border-dashed border-blue-200 flex items-center justify-center">
                        <span className="text-[10px] text-blue-400 font-medium">
                          Insert AI Output Here
                        </span>
                      </div>
                      <div className="h-3 w-[90%] bg-slate-50 rounded"></div>
                      <div className="h-3 w-[70%] bg-slate-50 rounded"></div>
                    </div>
                  </div>

                  {/* Redesigned Sidebar */}
                  <div className="w-52 border-l border-brand-slate-border bg-slate-50/50 flex flex-col">
                    <div className="p-4 border-b border-brand-slate-border bg-white flex items-center gap-2">
                      <Zap size={14} className="text-brand-blue" />
                      <span className="text-[10px] font-black text-brand-slate-dark uppercase tracking-widest">
                        Context
                      </span>
                    </div>

                    <div className="p-3 space-y-3">
                      <div className="bg-white border-2 border-brand-blue/30 p-3 rounded-xl shadow-md glow-sync group/item cursor-pointer hover:border-brand-blue transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                          <span className="text-[10px] font-bold text-brand-slate-dark">
                            Retention Ideas
                          </span>
                        </div>
                        <div className="space-y-1">
                          <div className="h-1 w-full bg-slate-100 rounded"></div>
                          <div className="h-1 w-2/3 bg-slate-100 rounded"></div>
                        </div>
                      </div>

                      <div className="bg-white border border-brand-slate-border p-3 rounded-xl shadow-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                          <span className="text-[10px] font-bold text-brand-slate-dark">
                            Claude Draft
                          </span>
                        </div>
                        <div className="space-y-1">
                          <div className="h-1 w-full bg-slate-100 rounded"></div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto p-3 border-t border-brand-slate-border/50">
                      <button className="w-full py-2 bg-brand-blue/10 text-brand-blue text-[10px] font-bold rounded-lg hover:bg-brand-blue hover:text-white transition">
                        + Link Current Chat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
