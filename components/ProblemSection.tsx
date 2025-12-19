import React from 'react';
import { GitMerge, Ghost, Network } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <GitMerge size={32} />,
      title: "Context Switching Fatigue",
      description: "Jumping between tabs breaks your focus. You lose track of which prompt led to which paragraph, draining your cognitive energy."
    },
    {
      icon: <Ghost size={32} />,
      title: "Untraceable Insights",
      description: "Three weeks later, you open a doc and have no idea why you wrote that section or which AI model helped you synthesize it."
    },
    {
      icon: <Network size={32} />,
      title: "An Organized Knowledge Trail",
      description: "Leave digital breadcrumbs. Instantly reconnect your final output with the AI conversation that inspired it, automatically."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      {/* Subtle border separation top/bottom */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-slate-border to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-slate-dark mb-6 tracking-tight">
            The problem with using AI alongside your work.
          </h2>
          <p className="text-brand-slate-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Great work happens in the flow. But jumping between tabs fragments your thinking process.
          </p>
        </div>

        {/* Updated grid to have gap between items as requested */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start p-8 md:p-10 bg-white border border-brand-slate-border rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:shadow-brand-blue/5 hover:-translate-y-2 relative group"
            >
              <div className="w-16 h-16 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue mb-8 border border-brand-blue/10 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-slate-dark mb-4">
                {item.title}
              </h3>
              <p className="text-brand-slate-medium leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-slate-border to-transparent"></div>
    </section>
  );
};

export default ProblemSection;