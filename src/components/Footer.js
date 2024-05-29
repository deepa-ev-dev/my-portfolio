import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#50221d] text-white p-4 pb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-xl md:text-2xl mb-4 md:mb-0">Deepa E V</h1>
        <div className="flex items-center mb-4 md:mb-0">
          <a href="https://www.linkedin.com/in/deepa-venkataramanaiah/" target="_blank" rel="noopener noreferrer" className="mr-4 text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/deepa-ev-dev/" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaGithub size={24} />
          </a>
        </div>
        <p className="text-center md:text-left">&copy; 2024 | Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
