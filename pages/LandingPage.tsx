import React from "react";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import FeatureSection from "../components/FeatureSection";
import UseCases from "../components/UseCases";
import FAQ from "../components/FAQ";

const LandingPage: React.FC = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <ProblemSection />
      <FeatureSection />
      <UseCases />
      <FAQ />
    </main>
  );
};

export default LandingPage;
