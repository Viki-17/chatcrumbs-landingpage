import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import FeatureSection from "../components/FeatureSection";
import UseCases from "../components/UseCases";
import FAQ from "../components/FAQ";

const LandingPage: React.FC = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Chatcrumbs | Pin AI Chats to Notion & Google Docs</title>
        <meta
          name="description"
          content="Stop losing your AI research. Chatcrumbs is a Chrome extension that lets you pin ChatGPT, Claude, and Gemini chats directly to Notion, Google Docs, and Jira."
        />
      </Helmet>
      <Hero />
      <ProblemSection />
      <FeatureSection />
      <UseCases />
      <FAQ />
    </main>
  );
};

export default LandingPage;
