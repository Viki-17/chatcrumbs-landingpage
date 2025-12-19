import React from 'react';
import { Lightbulb, Copy, FolderGit2 } from 'lucide-react';

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-slate-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-slate-dark">
            Your new workflow in three steps.
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          
          {/* Step 1: Smart Suggestions */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-sm font-semibold">
                <Lightbulb size={16} />
                <span>Detection</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-slate-dark">
                1. Smart Suggestions as you work.
              </h3>
              <p className="text-lg text-brand-slate-medium leading-relaxed">
                Open ChatGPT in a new tab while editing a Google Doc. ChatCrumbs notices the activity overlap and gently suggests linking them together. No manual tagging required.
              </p>
            </div>
            
            <div className="flex-1 w-full max-w-md">
              <div className="bg-white rounded-xl shadow-lg border border-brand-slate-border p-6 relative overflow-hidden group">
                {/* Mock Browser UI */}
                <div className="absolute top-0 left-0 w-full h-8 bg-slate-100 border-b border-brand-slate-border flex items-center px-4 gap-2">
                   <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                   <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
                <div className="mt-8 space-y-4 opacity-50 blur-[1px]">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                  <div className="h-32 bg-slate-100 rounded w-full"></div>
                </div>

                {/* Pop up */}
                <div className="absolute top-12 right-6 bg-white rounded-lg shadow-xl border border-brand-blue/20 p-4 w-64 animate-bounce-subtle z-10">
                   <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-medium text-brand-slate-dark">Link this chat to <br/> <span className="text-brand-blue">"Project Proposal"</span>?</p>
                   </div>
                   <div className="flex gap-2 mt-2">
                      <button className="flex-1 bg-brand-blue text-white text-xs py-1.5 rounded hover:bg-blue-700 transition">Link</button>
                      <button className="flex-1 bg-slate-100 text-brand-slate-medium text-xs py-1.5 rounded hover:bg-slate-200 transition">Dismiss</button>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Universal Sidebar */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold">
                <FolderGit2 size={16} />
                <span>Context</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-slate-dark">
                2. The Universal Breadcrumb Sidebar.
              </h3>
              <p className="text-lg text-brand-slate-medium leading-relaxed">
                Revisit a document weeks later. The sidebar automatically loads every AI conversation linked to that specific project. It works where you work, instantly restoring your thought process.
              </p>
            </div>
            
             <div className="flex-1 w-full max-w-md">
               <div className="bg-white rounded-xl shadow-lg border border-brand-slate-border flex h-64 overflow-hidden relative">
                  <div className="flex-grow p-6 opacity-40">
                     <h1 className="text-2xl font-bold text-slate-800 mb-4">Q3 Marketing Strategy</h1>
                     <p className="text-slate-500 text-sm mb-2">The primary focus of Q3 will be on retention...</p>
                     <p className="text-slate-500 text-sm">We utilized the data from the...</p>
                  </div>
                  <div className="w-48 bg-slate-50 border-l border-brand-slate-border flex flex-col">
                      <div className="p-3 border-b border-brand-slate-border bg-white">
                        <span className="text-xs font-bold text-brand-slate-dark uppercase tracking-wider">Linked Chats</span>
                      </div>
                      <div className="p-2 space-y-2 overflow-y-auto">
                        {['Claude: Tone Check', 'Gemini: Data Sourcing', 'GPT-4: Ideas'].map((item, i) => (
                          <div key={i} className="p-2 bg-white border border-brand-slate-border rounded hover:border-brand-blue cursor-pointer transition shadow-sm group">
                             <div className="text-xs font-medium text-brand-slate-dark group-hover:text-brand-blue">{item}</div>
                             <div className="text-[10px] text-brand-slate-medium mt-1">2 days ago</div>
                          </div>
                        ))}
                      </div>
                  </div>
               </div>
            </div>
          </div>

           {/* Step 3: Instant Copy */}
           <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-semibold">
                <Copy size={16} />
                <span>Integration</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-slate-dark">
                3. Instant Formatting & Sharing.
              </h3>
              <p className="text-lg text-brand-slate-medium leading-relaxed">
                Need to paste the chat link into the doc text itself? Copy formatted Markdown or Rich Text hyperlinks with one click. Ideal for footnotes or team references.
              </p>
            </div>
            
            <div className="flex-1 w-full max-w-md">
               <div className="bg-white rounded-xl shadow-lg border border-brand-slate-border p-8 flex items-center justify-center h-56 bg-gradient-to-br from-white to-slate-50">
                  <div className="relative group cursor-pointer">
                    <div className="flex items-center gap-3 p-4 bg-white border border-brand-slate-border rounded-lg shadow-sm hover:border-brand-blue transition-colors min-w-[240px]">
                      <div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center text-green-600">
                        <LinkIcon size={16} />
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm font-medium text-brand-slate-dark">Research Thread #4</div>
                        <div className="text-xs text-brand-slate-medium">gpt-4o • 12 msgs</div>
                      </div>
                      <div className="p-2 rounded hover:bg-slate-100 text-brand-slate-medium">
                        <Copy size={16} />
                      </div>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-slate-dark text-white text-xs py-1 px-3 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                       <Check size={12} className="text-green-400" />
                       Copied as Markdown link!
                       <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-slate-dark rotate-45"></div>
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

const LinkIcon = ({size}: {size: number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const Check = ({size, className}: {size: number, className?: string}) => (
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

export default FeatureSection;