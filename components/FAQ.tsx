import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is it really free?",
      answer:
        "Yes. ChatCrumbs is in public beta and free to use today. We’re exploring monetization options while continuing to ship features driven by user feedback.",
    },
    {
      question: "Which AI platforms do you support?",
      answer:
        "Currently supports ChatGPT, Claude, and Gemini. More coming soon based on user requests.",
    },
    {
      question: "Where is my data stored?",
      answer:
        "Links are stored securely in our database. ChatCrumbs prioritize privacy and do not read the content of your documents or chats beyond identifying the URLs to link them.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-slate-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-slate-dark">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-brand-slate-border rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-brand-slate-dark text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-blue" size={20} />
                ) : (
                  <ChevronDown className="text-brand-slate-medium" size={20} />
                )}
              </button>

              <div
                className={`px-6 text-brand-slate-medium overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
