import React from "react";
import Button from "./Button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-slate-dark tracking-tight mb-4">
            Simple, honest pricing.
          </h2>
          <p className="text-lg text-brand-slate-medium">
            Start using both products for free. Upgrade when you need infinite
            limits.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Free Tier */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-brand-slate-border shadow-md h-full">
            <div className="text-brand-slate-dark font-bold text-xl mb-2">
              Free Forever
            </div>
            <p className="text-brand-slate-medium text-sm mb-6">
              Perfect for individual developers grabbing context on the fly.
            </p>
            <div className="text-5xl font-extrabold text-brand-slate-dark mb-8">
              $0
              <span className="text-xl font-medium text-brand-slate-medium">
                /mo
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 text-brand-slate-dark">
                <Check size={20} className="text-emerald-500 shrink-0" />
                <span>Up to 50 active ChatCrumbs</span>
              </li>
              <li className="flex gap-3 text-brand-slate-dark">
                <Check size={20} className="text-emerald-500 shrink-0" />
                <span>Link directly to Notion & Google Docs</span>
              </li>
              <li className="flex gap-3 text-brand-slate-dark">
                <Check size={20} className="text-emerald-500 shrink-0" />
                <span>Unlimited DevCrumbs Quick Logging</span>
              </li>
              <li className="flex gap-3 text-brand-slate-dark opacity-50">
                <Check size={20} className="text-slate-300 shrink-0" />
                <span>Local device storage only</span>
              </li>
            </ul>

            <Button
              variant="outline"
              className="w-full h-12 border-2 border-brand-slate-border font-bold"
            >
              Get Started Free
            </Button>
          </div>

          {/* Pro Tier */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-2xl relative transform md:scale-105 z-10">
            <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
              <div className="px-4 py-1 bg-amber-500 text-slate-900 text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                Most Popular
              </div>
            </div>

            <div className="text-white font-bold text-xl mb-2">
              Pro Ecosystem
            </div>
            <p className="text-slate-400 text-sm mb-6">
              For engineers who treat their output and memory like production
              code.
            </p>
            <div className="text-5xl font-extrabold text-white mb-8">
              $8<span className="text-xl font-medium text-slate-400">/mo</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 text-white">
                <Check size={20} className="text-amber-500 shrink-0" />
                <span>
                  <strong>Unlimited</strong> ChatCrumbs retention
                </span>
              </li>
              <li className="flex gap-3 text-white">
                <Check size={20} className="text-amber-500 shrink-0" />
                <span>
                  <strong>Cloud Sync</strong> across all devices
                </span>
              </li>
              <li className="flex gap-3 text-white">
                <Check size={20} className="text-amber-500 shrink-0" />
                <span>
                  <strong>AI Year-End Review</strong> Generator
                </span>
              </li>
              <li className="flex gap-3 text-white">
                <Check size={20} className="text-amber-500 shrink-0" />
                <span>
                  <strong>Context Packs</strong> & advanced AI Seeding
                </span>
              </li>
            </ul>

            <Button
              variant="primary"
              className="w-full h-12 bg-amber-500 hover:bg-amber-400 text-slate-900 border-none font-bold shadow-lg shadow-amber-500/20"
            >
              Upgrade to Pro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
