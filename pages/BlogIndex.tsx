import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Sparkles, Calendar, Clock, ArrowRight } from "lucide-react";

const BlogIndex: React.FC = () => {
  const posts = [
    {
      title: "Never Copy-Paste Again: A Seamless AI-to-Google Docs Workflow",
      slug: "never-copy-paste-again-seamless-ai-google-docs-workflow",
      excerpt:
        "Modern writing isn’t blocked by a lack of ideas—it’s blocked by fragmented workflow. Discover how to eliminate the 'Tab-Switching Tax' and link your AI research directly to your writing.",
      date: "December 24, 2025",
      readTime: "5 min read",
      category: "Workflow",
      image: "/blogAssets/blog1.png",
    },
    {
      slug: "building-ai-research-library-notion-claude-gemini",
      title:
        "Building an AI Research Library: How to Organize Claude & Gemini Threads in Notion",
      excerpt:
        "Transform Notion into a true AI research hub. Learn how to link Claude, Gemini, and ChatGPT threads directly to your project pages.",
      date: "December 28, 2025",
      readTime: "6 min read",
      category: "Workflow",
      image: "/blogAssets/blog2.png",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Chatcrumbs - AI Workflow Productivity</title>
        <meta
          name="description"
          content="Insights, tips, and guides on improving your writing workflow with AI. Learn how to bridge the gap between AI thinking and document building."
        />
      </Helmet>

      <main className="flex-grow pt-24 pb-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              <span>The Breadcrumb Trail</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-slate-dark mb-4">
              Better workflows for{" "}
              <span className="text-brand-blue">AI-native writers</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-brand-slate-medium">
              Tips, strategies, and product updates to help you bridge the gap
              between your LLM research and your final drafts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-brand-slate-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden bg-slate-200 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-brand-slate-dark text-xs font-bold px-3 py-1 rounded-full border border-brand-slate-border">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-brand-slate-medium mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-brand-slate-dark mb-3 group-hover:text-brand-blue transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-brand-slate-medium text-sm line-clamp-3 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogIndex;
