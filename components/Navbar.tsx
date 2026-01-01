import React, { useState, useEffect } from "react";
import { Link2, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "FAQ", href: "/#faq" },
    { name: "Blog", href: "/blog" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Handle standard page navigation (e.g., /blog)
    if (!href.includes("#")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Handle anchor links (e.g., /#features)
    const targetId = href.replace(/^\//, ""); // Removes leading '/' to get '#features'

    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const target = document.querySelector(targetId);
        if (target) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = target.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    // Already on home page, just scroll
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-brand-slate-border py-3 shadow-sm"
          : "bg-white border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Logo
              size={36}
              className="group-hover:scale-105 transition-transform"
            />

            <span className="font-bold text-xl tracking-tight text-brand-slate-dark">
              ChatCrumbs
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-brand-slate-medium hover:text-brand-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="primary"
              size="md"
              onClick={() =>
                window.open(
                  "https://chromewebstore.google.com/detail/chatcrumbs/kakallfjlccgjklljjkgjobpcgoghoma?pli=1",
                  "_blank"
                )
              }
            >
              Add to Chrome - It's free!
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-slate-medium hover:text-brand-blue p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-brand-slate-border shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-brand-slate-dark font-medium py-2 border-b border-brand-slate-border/50"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="primary"
            className="w-full"
            onClick={() =>
              window.open(
                "https://chromewebstore.google.com/detail/chatcrumbs/kakallfjlccgjklljjkgjobpcgoghoma?pli=1",
                "_blank"
              )
            }
          >
            Add to Chrome - It's free!
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
