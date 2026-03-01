import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import ProductToggle from "../components/ProductToggle";
import ChatCrumbsSection from "../components/ChatCrumbsSection";
import DevCrumbsSection from "../components/DevCrumbsSection";
import HowItWorks from "../components/HowItWorks";
import SocialProof from "../components/SocialProof";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import FeedbackSection from "../components/FeedbackSection";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>ChatCrumbs | Stop losing context. Start proving impact.</title>
        <meta
          name="description"
          content="The browser extension that captures your AI chats and tracks your engineering work right where you are. Build context with ChatCrumbs and prove impact with DevCrumbs."
        />
      </Helmet>

      <main>
        <Hero />
        <ProductToggle />
        <ChatCrumbsSection />
        <DevCrumbsSection />
        <HowItWorks />
        {/* <SocialProof /> */}
        {/* <Pricing /> - Temporarily disabled while product is entirely free */}
        <FeedbackSection />
        <FAQ />
      </main>
    </>
  );
}
