import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../components/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");
      const skillsSection = document.getElementById("skills");
      const contactSection = document.getElementById("contact");

      if (
        scrollPosition < projectsSection.offsetTop - 50 &&
        scrollPosition >= aboutSection.offsetTop - 50
      ) {
        setActiveLink("#about");
      } else if (
        scrollPosition < skillsSection.offsetTop - 50 &&
        scrollPosition >= projectsSection.offsetTop - 50
      ) {
        setActiveLink("#projects");
      } else if (
        scrollPosition < contactSection.offsetTop - 50 &&
        scrollPosition >= skillsSection.offsetTop - 50
      ) {
        setActiveLink("#skills");
      } else if (scrollPosition >= contactSection.offsetTop - 50) {
        setActiveLink("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false); // Close mobile menu when link is clicked
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full p-4 z-10 shadow-md ${theme === 'light' ? 'header-light' : 'header-dark'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Deepa E V</h1>
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-4">
            <li>
              <a
                href="#about"
                className={activeLink === "#about" ? "text-blue-500" : ""}
                onClick={() => handleSetActiveLink("#about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeLink === "#projects" ? "text-blue-500" : ""}
                onClick={() => handleSetActiveLink("#projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeLink === "#skills" ? "text-blue-500" : ""}
                onClick={() => handleSetActiveLink("#skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink === "#contact" ? "text-blue-500" : ""}
                onClick={() => handleSetActiveLink("#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className="md:hidden ml-4 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-md focus:outline-none"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-100 shadow-lg">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <a
                  href="#about"
                  className={activeLink === "#about" ? "text-blue-500" : ""}
                  onClick={() => handleSetActiveLink("#about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeLink === "#projects" ? "text-blue-500" : ""}
                  onClick={() => handleSetActiveLink("#projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeLink === "#skills" ? "text-blue-500" : ""}
                  onClick={() => handleSetActiveLink("#skills")}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeLink === "#contact" ? "text-blue-500" : ""}
                  onClick={() => handleSetActiveLink("#contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
