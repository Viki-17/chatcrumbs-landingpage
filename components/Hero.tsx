import React from "react";
import Button from "./Button";
import {
  MessageSquare,
  Wand2,
  Zap,
  BookOpen,
  ArrowRight,
  Sparkles,
  GitMerge,
  TerminalSquare,
  Trello,
} from "lucide-react";
import { Link } from "react-router-dom";

// Note: Reusing these icons for the "Works with" trust strip below
const icons = [
  <MessageSquare key="chat" size={24} />,
  <Wand2 key="wand" size={24} />,
  <TerminalSquare key="term" size={24} />,
  <GitMerge key="git" size={24} />,
  <Trello key="trello" size={24} />,
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-pale rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-slate-light border border-brand-slate-border text-sm font-medium text-brand-slate-dark mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            Two Products. One Extension.
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-slate-dark tracking-tight mb-6 leading-tight">
            Stop losing{" "}
            <span className="text-brand-blue relative inline-block">
              context
            </span>
            .
            <br />
            Start proving your{" "}
            <span className="text-indigo-500 relative inline-block">
              impact
            </span>
            .
          </h1>

          <p className="text-xl md:text-2xl text-brand-slate-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            A single browser extension that captures your AI chats and tracks
            your engineering work, right where you already are.
          </p>

          <div className="flex flex-col items-center justify-center">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-lg px-10 h-16 bg-brand-blue hover:bg-blue-700 text-white font-bold border-none group shadow-xl shadow-brand-blue/20 transition-all hover:scale-105"
              onClick={() =>
                window.open(
                  "https://chromewebstore.google.com/detail/chatcrumbs/kakallfjlccgjklljjkgjobpcgoghoma?pli=1",
                  "_blank",
                )
              }
            >
              Add to Chrome
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-brand-slate-medium flex items-center justify-center gap-2 font-medium">
            <Zap size={16} className="text-brand-blue" />
            Free forever. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
