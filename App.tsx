import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FeatureSection from './components/FeatureSection';
import UseCases from './components/UseCases';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans text-brand-slate-dark selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <FeatureSection />
        <UseCases />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;