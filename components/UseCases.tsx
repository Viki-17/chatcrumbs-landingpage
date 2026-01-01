import React from "react";
import {
  Bot,
  FileText,
  Github,
  Trello,
  Database,
  MessageSquare,
} from "lucide-react";

const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-b border-brand-slate-light relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-slate-dark mb-4">
            Supported Apps
          </h2>
          <p className="text-xl text-brand-slate-medium max-w-2xl mx-auto">
            Seamlessly linking your{" "}
            <span className="text-brand-blue font-semibold">AI Thinking</span>{" "}
            with your{" "}
            <span className="text-brand-slate-dark font-semibold">
              Work Context
            </span>
            .
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
          {/* Bridge visual for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 border-t-2 border-dashed border-brand-blue/30 z-0"></div>
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-blue text-white rounded-full items-center justify-center z-10 font-bold text-xs shadow-lg">
            VS
          </div>

          {/* AI Thinking Column */}
          <div className="w-full max-w-md bg-brand-slate-light/50 border border-brand-slate-border rounded-2xl p-8 z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                <Bot size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-slate-dark">
                AI Thinking
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white border border-brand-slate-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm">
                  GPT
                </div>
                <div className="font-semibold text-brand-slate-dark">
                  ChatGPT
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border border-brand-slate-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center font-bold text-sm">
                  CL
                </div>
                <div className="font-semibold text-brand-slate-dark">
                  Claude
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border border-brand-slate-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">
                  GM
                </div>
                <div className="font-semibold text-brand-slate-dark">
                  Gemini
                </div>
              </div>
            </div>
          </div>

          {/* Work Context Column */}
          <div className="w-full max-w-md bg-brand-slate-light/50 border border-brand-slate-border rounded-2xl p-8 z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-slate-dark">
                Work Context
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white border border-brand-slate-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-white border border-brand-slate-border rounded-full flex items-center justify-center text-brand-slate-dark shadow-sm">
                  <span className="font-bold text-lg">N</span>
                </div>
                <div className="font-semibold text-brand-slate-dark">
                  Notion
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border border-brand-slate-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <div className="font-semibold text-brand-slate-dark">
                  Google Docs
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border border-brand-slate-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <Trello size={20} />
                </div>
                <div className="font-semibold text-brand-slate-dark">Jira</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
