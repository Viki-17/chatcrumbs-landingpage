import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

export default function Footer() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  return (
    <>
      <section className="bg-brand-slate-dark text-white pt-24 pb-12 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
            {/* Version Badge CTA */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-8 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              v2.0 Beta • Free to use
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
              Ready to{" "}
              <span className="text-brand-blue relative inline-block">
                upgrade
              </span>{" "}
              your browser?
            </h2>

            <div className="w-full max-w-sm mb-4">
              <Button
                variant="primary"
                size="lg"
                className="w-full h-14 text-lg bg-brand-blue hover:bg-blue-600 text-white font-bold border-none shadow-[0_0_40px_rgba(38,99,235,0.3)] transition-all hover:shadow-[0_0_60px_rgba(38,99,235,0.5)]"
                onClick={() =>
                  window.open(
                    "https://chromewebstore.google.com/detail/chatcrumbs/kakallfjlccgjklljjkgjobpcgoghoma?pli=1",
                    "_blank",
                  )
                }
              >
                Add to Chrome{" "}
                <span className="text-sm opacity-80 font-normal ml-1">
                  — It's free!
                </span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 py-12 border-t border-white/10">
            <div className="col-span-2 lg:col-span-2 pr-8 lg:pr-16">
              <div className="flex items-center gap-2 mb-6">
                <Logo size={28} />
                <span className="font-bold text-xl text-white">ChatCrumbs</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                The unified workspace for AI chats and engineering impact logs.
                Stop losing context; start proving your value.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">
                Products
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#chatcrumbs"
                    className="text-slate-400 hover:text-brand-blue transition-colors text-sm font-medium"
                  >
                    ChatCrumbs
                  </a>
                </li>
                <li>
                  <a
                    href="#devcrumbs"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm font-medium"
                  >
                    DevCrumbs
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    How it Works
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#pricing"
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    Pricing
                  </a>
                </li> */}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">
                Resources
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/blog"
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#feedback"
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    Submit Feedback
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} ChatCrumbs. All rights reserved.
            </div>
            <div className="text-slate-500 text-sm text-center md:text-right">
              Built with ❤️ for devs.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
