import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import SocialButtons from "./SocialButtons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlight
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = ["Home", "Projects", "About", "Skills", "Contact"];

  return (
    <header
      className={`fixed w-full bg-white flex items-center justify-between px-4 md:px-12 lg:px-24 xl:px-44 shadow-md border-b-[3px] transition-all duration-300 z-50 ${
        isScrolled ? "h-20" : "h-24"
      }`}
    >
      {/* Logo */}
      <a href="/" className="text-2xl md:text-3xl font-semibold text-gray-900">
        Kumar
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center">
        <ul className="flex space-x-6 lg:space-x-8 xl:space-x-12 text-base lg:text-lg xl:text-xl font-medium text-gray-900">
          {navItems.map((item) => (
            <li key={item}>
              <HashLink
                smooth
                to={`/#${item.toLowerCase()}`}
                className={`transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-[#7575C8] font-semibold"
                    : "hover:text-[#7575C8]"
                }`}
              >
                {item}
              </HashLink>
            </li>
          ))}
        </ul>
        <div className="ml-6 lg:ml-8 xl:ml-12">
          <SocialButtons />
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <div className="w-6 flex flex-col items-end">
          <span
            className={`block h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "w-6 rotate-45 translate-y-1.5" : "w-6 mb-1.5"
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "w-4 mb-1.5"
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-1.5" : "w-5"
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200"
          >
            <ul className="flex flex-col space-y-4 p-6 text-lg font-medium text-gray-900">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-[#7575C8] font-semibold"
                      : "hover:text-[#7575C8]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <HashLink smooth to={`/#${item.toLowerCase()}`} className="block py-2">
                    {item}
                  </HashLink>
                </motion.li>
              ))}
              <li className="pt-4">
                <SocialButtons mobile />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
