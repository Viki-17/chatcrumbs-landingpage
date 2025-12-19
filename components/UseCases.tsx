import React from 'react';

const UseCases: React.FC = () => {
  const cases = [
    {
      role: "Content Writers",
      desc: "Trace your article drafts back to the original ideation prompts.",
      initials: "CW",
      color: "bg-pink-100 text-pink-600"
    },
    {
      role: "Product Managers",
      desc: "Link PRD requirements directly to the Gemini research threads that defined them.",
      initials: "PM",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      role: "Researchers",
      desc: "Keep your source materials and fact-checking chats attached to your final paper.",
      initials: "RS",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-b border-brand-slate-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-slate-dark mb-16">
          Built for anyone juggling content and AI.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <div key={index} className="flex flex-col items-center p-8 rounded-2xl bg-white border border-brand-slate-border hover:shadow-xl transition-shadow duration-300">
              <div className={`w-20 h-20 rounded-full ${useCase.color} flex items-center justify-center text-2xl font-bold mb-6 ring-4 ring-white shadow-sm`}>
                {useCase.initials}
              </div>
              <h3 className="text-xl font-bold text-brand-slate-dark mb-3">
                {useCase.role}
              </h3>
              <p className="text-brand-slate-medium">
                {useCase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;