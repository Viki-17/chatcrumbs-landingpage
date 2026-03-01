import React from "react";
import Button from "./Button";
import { MessageCircle, Mail } from "lucide-react";

export default function FeedbackSection() {
  return (
    <section
      id="feedback"
      className="py-24 bg-white border-y border-brand-slate-border"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-pale text-brand-blue font-bold text-sm tracking-wide uppercase rounded-full mb-6 border border-brand-blue/20">
          <MessageCircle size={16} /> We value your thoughts
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-slate-dark tracking-tight mb-6">
          Help us shape the future of ChatCrumbs
        </h2>
        <p className="text-lg text-brand-slate-medium mb-10 max-w-2xl mx-auto">
          Have an idea for a feature? Found a bug? Just want to say hi? We're
          all ears and constantly improving the product based on your feedback.
          You can reach us directly at{" "}
          <a
            href="mailto:hello@chatcrumbs.com"
            className="text-brand-blue font-semibold hover:underline"
          >
            hello@chatcrumbs.com
          </a>
          .
        </p>
        <Button
          variant="primary"
          className="bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 px-8 text-lg rounded-xl shadow-lg shadow-brand-blue/20 transition-all hover:scale-105 inline-flex items-center gap-2 border-none h-auto"
          onClick={() => (window.location.href = "mailto:hello@chatcrumbs.com")}
        >
          <Mail size={20} />
          Share Feedback
        </Button>
      </div>
    </section>
  );
}
