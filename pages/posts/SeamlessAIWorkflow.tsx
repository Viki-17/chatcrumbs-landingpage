import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Linkedin,
  Twitter,
  CheckCircle,
  Copy,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const SeamlessAIWorkflow: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    document.querySelectorAll("h2, h3").forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      <Helmet>
        <title>
          Never Copy-Paste Again: A Seamless AI-to-Google Docs Workflow |
          Chatcrumbs
        </title>
        <meta
          name="description"
          content="Stop losing your AI research. A seamless workflow to pin Claude and ChatGPT chats directly to Google Docs to eliminate the 'Tab-Switching Tax'."
        />
        <meta
          property="og:title"
          content="Never Copy-Paste Again: A Seamless AI-to-Google Docs Workflow"
        />
        <meta
          property="og:description"
          content="Discover how to link your AI research directly to your writing workflow."
        />
        <script type="application/ld+json">
          {`
            {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Never Copy-Paste Again: A Seamless AI-to-Google Docs Workflow",
            "datePublished": "2024-10-24",
            "author": {
                "@type": "Organization",
                "name": "Chatcrumbs"
            },
            "description": "Stop losing your AI research. A seamless workflow to pin Claude and ChatGPT chats directly to Google Docs."
            }
        `}
        </script>
      </Helmet>

      <main className="flex-grow bg-white pt-24 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-brand-slate-medium hover:text-brand-blue transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              {/* Header */}
              <header className="mb-10">
                <div className="flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
                  <span>Workflow</span>
                  <span className="w-1 h-1 rounded-full bg-brand-slate-medium/30"></span>
                  <span>Productivity</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-brand-slate-dark mb-6 leading-tight">
                  Never Copy-Paste Again: A Seamless AI-to-Google Docs Workflow
                  for Writers
                </h1>

                <div className="flex items-center justify-between border-b border-brand-slate-border pb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      CC
                    </div>
                    <div>
                      <div className="text-sm font-bold text-brand-slate-dark">
                        Chatcrumbs Team
                      </div>
                      <div className="flex items-center gap-3 text-xs text-brand-slate-medium">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> Oct 24, 2024
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> 5 min read
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={copyToClipboard}
                      className="p-2 text-brand-slate-medium hover:text-brand-blue hover:bg-brand-blue/5 rounded-full transition-colors"
                      title="Copy Link"
                    >
                      <Copy size={18} />
                    </button>
                    <button
                      className="p-2 text-brand-slate-medium hover:text-brand-blue hover:bg-brand-blue/5 rounded-full transition-colors"
                      title="Share on Twitter"
                    >
                      <Twitter size={18} />
                    </button>
                    <button
                      className="p-2 text-brand-slate-medium hover:text-brand-blue hover:bg-brand-blue/5 rounded-full transition-colors"
                      title="Share on LinkedIn"
                    >
                      <Linkedin size={18} />
                    </button>
                  </div>
                </div>
              </header>

              {/* Key Takeaways Box */}
              <div className="bg-brand-slate-light/50 border border-brand-slate-border rounded-xl p-6 mb-10">
                <h3 className="text-lg font-bold text-brand-slate-dark mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-brand-blue" /> Key
                  Takeaways
                </h3>
                <ul className="space-y-2 text-brand-slate-dark text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-slate-medium flex-shrink-0"></span>
                    Context switching between AI chats and docs costs writers
                    20-30% of their time.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-slate-medium flex-shrink-0"></span>
                    Chatcrumbs "pins" AI threads directly to specific Google
                    Docs for sidebar access.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-slate-medium flex-shrink-0"></span>
                    This workflow creates "Contextual Memory," keeping research
                    linked to the final draft.
                  </li>
                </ul>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg prose-slate max-w-none 
                    prose-headings:font-bold prose-headings:text-brand-slate-dark prose-headings:scroll-mt-24
                    prose-p:text-brand-slate-medium prose-p:leading-relaxed
                    prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-brand-slate-dark prose-strong:font-semibold
                    prose-li:text-brand-slate-medium
                    prose-blockquote:border-l-4 prose-blockquote:border-brand-blue prose-blockquote:bg-brand-blue/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-brand-slate-dark
                "
              >
                <p>
                  Modern writing isn’t blocked by a lack of ideas—it’s blocked
                  by <strong>fragmented workflow</strong>.
                </p>
                <p>
                  If you’re a content writer, blogger, or copywriter using AI
                  tools like <strong>Claude or ChatGPT</strong> for
                  brainstorming, research, and outlines, you already know the
                  pain. Your ideas live in one tab. Your draft lives in another.
                  Your references are scattered across chat histories,
                  bookmarks, and half-remembered prompts.
                </p>
                <p>
                  The result? Constant tab-switching, broken flow, and wasted
                  time.
                </p>
                <p>
                  This is the hidden productivity drain most writers don’t
                  notice until it’s gone: <strong>the Tab-Switching Tax</strong>
                  . And it’s exactly what Chatcrumbs is built to eliminate.
                </p>

                <h2 id="friction">The Friction of Modern Writing</h2>
                <p>Let’s break down a typical AI-assisted writing session:</p>
                <ul>
                  <li>You brainstorm angles in Claude</li>
                  <li>Generate an outline in ChatGPT</li>
                  <li>Ask follow-up questions for examples</li>
                  <li>Switch to Google Docs to start drafting</li>
                  <li>Jump back to AI to “refine” a paragraph</li>
                  <li>Copy a useful response</li>
                  <li>Paste it into Docs</li>
                  <li>Forget where it came from</li>
                  <li>Repeat… endlessly</li>
                </ul>
                <p>
                  Each switch seems small. But collectively, they destroy
                  momentum.
                </p>
                <p>
                  Studies on knowledge work show that{" "}
                  <strong>
                    context switching can cost up to 20–30% of productive time
                  </strong>
                  . For writers, it’s worse—because creativity depends on{" "}
                  <strong>continuous cognitive flow</strong>, not fragmented
                  recall.
                </p>

                <h2 id="real-problem">
                  AI Sidebars Are a Graveyard for Good Ideas
                </h2>
                <p>
                  AI tools weren’t designed for long-form writing workflows.
                  ChatGPT and Claude sidebars work great <em>in the moment</em>,
                  but they fail at one critical thing:{" "}
                  <strong>persistent context</strong>.
                </p>
                <p>Think about it:</p>
                <ul>
                  <li>That perfect outline you generated yesterday? Buried.</li>
                  <li>
                    The clever analogy Claude gave you? Lost in scrollback.
                  </li>
                  <li>The exact prompt that unlocked your tone? Forgotten.</li>
                </ul>
                <p>
                  AI chats are linear. Writing is not. For writers, AI responses
                  aren’t disposable—they’re <strong>research artifacts</strong>.
                  But today, we treat them like temporary messages instead of
                  reusable assets.
                </p>

                <h2 id="introducing-chatcrumbs">
                  Introducing Chatcrumbs: A Permanent Bridge
                </h2>
                <p>
                  <strong>Chatcrumbs</strong> fixes this problem by turning AI
                  chats into <strong>contextual breadcrumbs</strong>—linked,
                  organized, and accessible directly inside your writing
                  environment.
                </p>
                <p>
                  Instead of copying and pasting snippets, Chatcrumbs lets you:
                </p>
                <ul>
                  <li>
                    <strong>Pin AI conversations to a specific document</strong>
                  </li>
                  <li>
                    <strong>
                      Access them from a sidebar inside Google Docs
                    </strong>
                  </li>
                  <li>
                    <strong>Preserve the full prompt + response context</strong>
                  </li>
                  <li>
                    <strong>Return to ideas exactly when you need them</strong>
                  </li>
                </ul>

                <h2 id="workflow">A Step-by-Step AI Writing Workflow</h2>
                <p>
                  Here’s how modern writers are using Chatcrumbs to streamline
                  their process.
                </p>

                <h3 id="step-1">1. Start Your Draft in Google Docs</h3>
                <p>
                  Open Google Docs and begin your article as usual. No setup. No
                  new editor to learn. Your document becomes the{" "}
                  <strong>source of truth</strong>.
                </p>

                <h3 id="step-2">2. Open Chatcrumbs and “Create Context”</h3>
                <p>
                  With the Chatcrumbs Chrome extension installed, open the
                  sidebar and create a new <strong>Context</strong> for your
                  article. This context acts like a smart folder—everything you
                  pin from AI tools will belong to this specific document.
                </p>

                <h3 id="step-3">3. Open Claude or ChatGPT for Research</h3>
                <p>
                  Switch to Claude or ChatGPT to brainstorm headlines, generate
                  outlines, or refine tone. When you get a response worth
                  keeping, don't copy-paste.
                </p>

                <h3 id="step-4">4. Hit “Pin to Context”</h3>
                <p>
                  Click <strong>Pin to Context</strong> in Chatcrumbs. The
                  entire interaction—prompt and response—is now permanently
                  linked to your Google Doc. You’ve just{" "}
                  <strong>saved ChatGPT links in Google Docs</strong> without
                  pasting a single line of text.
                </p>

                <h3 id="step-5">5. Write with Your AI “Breadcrumbs”</h3>
                <p>
                  Back in Google Docs, open the Chatcrumbs sidebar. You’ll see a
                  clean, organized list of pinned AI conversations related to
                  this document. Click any breadcrumb to instantly revisit the
                  exact prompt, response, and reasoning.
                </p>

                <h2 id="contextual-memory">
                  The Hidden Superpower: Contextual Memory
                </h2>
                <p>
                  The biggest benefit of Chatcrumbs isn’t speed—it’s{" "}
                  <strong>clarity</strong>. You’ll never again ask:
                </p>
                <blockquote>
                  “Which prompt gave me that outline?”
                  <br />
                  “Where did this idea come from?”
                  <br />
                  “Why did I structure this section this way?”
                </blockquote>
                <p>
                  Because your AI interactions now live{" "}
                  <strong>next to your writing</strong>, not somewhere else.
                </p>

                <h2 id="conclusion">Stop Paying the Tab-Switching Tax</h2>
                <p>
                  As AI becomes standard in content creation, the real advantage
                  won't be who uses AI—it'll be who manages AI output best.
                </p>

                <div className="not-prose mt-12 mb-12">
                  <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-brand-slate-dark mb-4 mt-0">
                      Ready to upgrade your workflow?
                    </h2>
                    <p className="text-brand-slate-medium mb-8 max-w-lg mx-auto">
                      Don't spend 20% of your writing time managing tabs. Craft
                      arguments, sharpen language, and publish consistently.
                    </p>
                    <button
                      onClick={() =>
                        window.open(
                          "https://chromewebstore.google.com/detail/chatcrumbs/kakallfjlccgjklljjkgjobpcgoghoma?pli=1",
                          "_blank"
                        )
                      }
                      className="bg-brand-blue text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-brand-blue/20 hover:scale-105 transition-transform"
                    >
                      Install Chatcrumbs for Chrome
                    </button>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-16 pt-8 border-t border-brand-slate-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 overflow-hidden flex-shrink-0">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-slate-dark">
                      The Chatcrumbs Team
                    </h4>
                    <p className="text-sm text-brand-slate-medium mt-1">
                      We're a team of developers and writers building tools to
                      bridge the gap between AI thinking and human building.
                      Passionate about productivity, context, and helping you
                      stay in flow.
                    </p>
                    <div className="flex gap-3 mt-3">
                      <a
                        href="#"
                        className="text-brand-slate-medium hover:text-brand-blue transition-colors"
                      >
                        <Twitter size={14} />
                      </a>
                      <a
                        href="#"
                        className="text-brand-slate-medium hover:text-brand-blue transition-colors"
                      >
                        <Linkedin size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-32">
                <div className="bg-white border border-brand-slate-border rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-brand-slate-dark mb-4 text-sm uppercase tracking-wider">
                    Table of Contents
                  </h4>
                  <nav className="flex flex-col space-y-3">
                    {[
                      {
                        id: "friction",
                        label: "The Friction of Modern Writing",
                      },
                      { id: "real-problem", label: "AI Sidebars: A Graveyard" },
                      {
                        id: "introducing-chatcrumbs",
                        label: "Introducing Chatcrumbs",
                      },
                      { id: "workflow", label: "Step-by-Step Workflow" },
                      { id: "contextual-memory", label: "Contextual Memory" },
                      { id: "conclusion", label: "Conclusion" },
                    ].map((link) => (
                      <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={`text-sm transition-colors border-l-2 pl-3 ${
                          activeSection === link.id
                            ? "border-brand-blue text-brand-blue font-medium"
                            : "border-transparent text-brand-slate-medium hover:text-brand-slate-dark"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(link.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                          setActiveSection(link.id);
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-8 pt-8 border-t border-brand-slate-border">
                    <h4 className="font-bold text-brand-slate-dark mb-3 text-sm">
                      Share this article
                    </h4>
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-100 hover:bg-slate-200 text-brand-slate-dark rounded-md text-sm font-medium transition-colors">
                        <Twitter size={16} /> Tweet
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-100 hover:bg-slate-200 text-brand-slate-dark rounded-md text-sm font-medium transition-colors">
                        <Linkedin size={16} /> Share
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-brand-blue/90 text-white rounded-xl p-6 shadow-lg shadow-brand-blue/20">
                  <h4 className="font-bold mb-2">Try Chatcrumbs Free</h4>
                  <p className="text-sm text-blue-100 mb-4">
                    Pin AI chats to your docs and stay in flow.
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://chromewebstore.google.com/detail/chatcrumbs/kakallfjlccgjklljjkgjobpcgoghoma?pli=1",
                        "_blank"
                      )
                    }
                    className="w-full py-2 bg-white text-brand-blue font-bold text-sm rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Add to Chrome
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default SeamlessAIWorkflow;
