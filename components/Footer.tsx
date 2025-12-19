import React, { useState } from 'react';
import Button from './Button';
import { Link2, Mail, MessageSquare, X, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-brand-pale/30 border-t border-brand-blue/10 pt-20 pb-10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Final CTA */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-slate-dark mb-6 tracking-tight">
            Help us shape the future of ChatCrumbs.
          </h2>
          <p className="text-lg text-brand-slate-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            We are building this MVP for users like you. Your feedback dictates our roadmap. Try it out and tell us what's missing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto px-10">
              Add to Chrome - Join Beta
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto bg-white px-10"
              onClick={() => setIsModalOpen(true)}
            >
              Share Feedback
            </Button>
          </div>
        </div>

        {/* Links */}
        <div className="border-t border-brand-slate-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-brand-slate-dark font-semibold">
             <div className="w-6 h-6 bg-brand-blue rounded flex items-center justify-center text-white">
               <Link2 size={14} className="transform -rotate-45" />
             </div>
             <span>ChatCrumbs</span>
          </div>
          
          <div className="flex gap-8 text-sm text-brand-slate-medium">
            <a href="#" className="hover:text-brand-blue transition">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition">Terms of Service</a>
            <a href="#" className="hover:text-brand-blue transition">Contact</a>
          </div>
          
          <div className="text-sm text-brand-slate-medium/50">
            © {new Date().getFullYear()} ChatCrumbs.
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-brand-slate-dark/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl border border-brand-slate-border overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-brand-slate-dark mb-1">We'd love your feedback</h3>
                  <p className="text-brand-slate-medium text-sm">Help us build the best version of ChatCrumbs.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-brand-slate-medium"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Contact Options */}
                <a 
                  href="mailto:hello@chatcrumbs.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl border border-brand-slate-border hover:border-brand-blue hover:bg-brand-blue/5 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm font-bold text-brand-slate-dark">Email Us</div>
                    <div className="text-xs text-brand-slate-medium">hello@chatcrumbs.com</div>
                  </div>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-brand-blue" />
                </a>

                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 rounded-2xl border border-brand-slate-border hover:border-[#5865F2] hover:bg-[#5865F2]/5 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#5865F2]/10 rounded-xl flex items-center justify-center text-[#5865F2] group-hover:bg-[#5865F2] group-hover:text-white transition-colors">
                    <MessageSquare size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm font-bold text-brand-slate-dark">Discord Community</div>
                    <div className="text-xs text-brand-slate-medium">Chat with the devs & users</div>
                  </div>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-[#5865F2]" />
                </a>

                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 rounded-2xl border border-brand-slate-border hover:border-[#FF4500] hover:bg-[#FF4500]/5 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#FF4500]/10 rounded-xl flex items-center justify-center text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-white transition-colors">
                    <div className="font-bold text-xl">r/</div>
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm font-bold text-brand-slate-dark">Reddit Subreddit</div>
                    <div className="text-xs text-brand-slate-medium">r/chatcrumbs</div>
                  </div>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-[#FF4500]" />
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-slate-border text-center">
                <p className="text-xs text-brand-slate-medium">
                  Response time: Usually within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;