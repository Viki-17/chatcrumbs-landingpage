import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogIndex from "./pages/BlogIndex";
import SeamlessAIWorkflow from "./pages/posts/SeamlessAIWorkflow";
import NotionResearchHub from "./pages/posts/NotionResearchHub";

import ScrollToTop from "./components/ScrollToTop";

import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen w-full flex flex-col font-sans text-brand-slate-dark selection:bg-brand-blue selection:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route
              path="/blog/never-copy-paste-again-seamless-ai-google-docs-workflow"
              element={<SeamlessAIWorkflow />}
            />
            <Route
              path="/blog/building-ai-research-library-notion-claude-gemini"
              element={<NotionResearchHub />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
