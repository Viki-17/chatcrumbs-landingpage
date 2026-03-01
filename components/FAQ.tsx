import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does ChatCrumbs capture my AI chats?",
      answer:
        "When you're actively on a supported AI platform (like ChatGPT, Claude, or Gemini), ChatCrumbs securely captures the URL and the context when you choose to save it. It does not actively 'listen' to your browsing elsewhere.",
    },
    {
      question: "Where is my data stored?",
      answer:
        "All your data for both ChatCrumbs and DevCrumbs is stored securely on server.",
    },
    {
      question: "Can I export my DevCrumbs logs?",
      answer:
        "Yes. You can copy your summaries directly to your clipboard, and you will soon be able to export your entire timeline as CSV or Markdown. (Coming Soon)",
    },
    {
      question: "Does DevCrumbs read my private Jira or GitHub data?",
      answer:
        "No. DevCrumbs only logs the URLs and branch titles you explicitly tell it to save (or that you click the Quick Log button on). It has no backend access to your company's private repositories or ticket boards.",
    },
    {
      question: "Is it really free?",
      answer:
        "Yes! The core functionality for both ChatCrumbs and DevCrumbs is 100% free. We plan to introduce a paid Pro tier later for power users who want unlimited links storage and advanced AI review features.",
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
