import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound: React.FC = () => {
  return (
    <main className="flex-grow flex items-center justify-center bg-brand-slate-light min-h-[60vh] py-20">
      <Helmet>
        <title>404 - Page Not Found | Chatcrumbs</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-9xl font-extrabold text-brand-blue mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-slate-dark mb-6">
          Page Not Found
        </h2>
        <p className="text-brand-slate-medium text-lg max-w-md mx-auto mb-10">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-blue rounded-xl hover:bg-brand-blue/90 hover:scale-105 shadow-lg shadow-brand-blue/20"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
