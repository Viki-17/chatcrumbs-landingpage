import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I organize ChatGPT chats by project?",
      answer:
        'You can organize ChatGPT chats by using Chatcrumbs to "pin" specific chat URLs to a project-specific context, such as a Google Doc or Notion page. This creates a sidebar list of all relevant AI conversations for that specific work task.',
    },
    {
      question:
        "Can I link Claude and Gemini conversations to my work documents?",
      answer:
        'Yes, Chatcrumbs supports ChatGPT, Claude, and Gemini. It allows you to bridge the gap between your "thinking" in AI chat apps and your "building" in apps like Notion, GitHub, and Jira.',
    },
    {
      question: "What is the best way to save AI prompts for future reference?",
      answer:
        "The most efficient way is to use a context-aware browser extension like Chatcrumbs. Instead of manual copy-pasting, you can tag AI threads with custom notes and link them directly to the document where you are working.",
    },
    {
      question: "Does Chatcrumbs work with Notion and Google Docs?",
      answer:
        'Absolutely. Chatcrumbs is designed to detect when you are on a "Work App" like Notion or Google Docs and automatically displays the specific AI "breadcrumbs" (chats) you’ve pinned to that document.',
    },
    {
      question: "How do I find a specific AI chat from weeks ago?",
      answer:
        "Rather than searching through a chronological history, Chatcrumbs lets you view a curated list of AI threads associated with a specific project. Open your project document, and the Chatcrumbs sidebar will show every relevant AI interaction you’ve saved.",
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
