import React, { useContext } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import aboutImage from "../images/about-image2.jpg";
import { ThemeContext } from "../components/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const iconColor = theme === "dark" ? "text-white" : "text-[#50221d]";
  const bgColor = theme === "dark" ? "bg-gray-800" : "bg-gray-100";

  return (
    <section id="about" className={`px-4 py-8 md:px-20 md:py-16 lg:py-20 ${bgColor} ${textColor}`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#50221d] text-center mb-8 mt-[2.5rem] ${iconColor}`}>
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 flex justify-center">
            <div className="rounded-full overflow-hidden w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <img
                src={aboutImage}
                alt="About Me"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Summary */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-4 ${iconColor}`}>
              Frontend Developer
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center md:text-left">
              Detail-oriented React Developer with 3 years of experience in
              building scalable, high-performance web applications. Proficient
              in modern JavaScript, React.js, Redux, and RESTful API
              integration.
            </p>
            {/* Social media links */}
            <div className="flex mt-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/deepa-venkataramanaiah/"
                target="_blank"
                rel="noopener noreferrer"
                className={`mr-4 text-[#50221d] ${iconColor} hover:text-blue-600`}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/deepa-ev-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[#50221d] ${iconColor} hover:text-gray-800`}
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
