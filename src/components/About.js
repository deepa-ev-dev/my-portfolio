import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import aboutImage from "../images/about-image2.jpg";

const About = () => {
  return (
    <section id="about" className="p-20 mt-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          {/* Summary on the left */}
          <div className="w-full md:w-1/2 md:pr-8">
            <h2 className="text-2xl font-bold text-[#50221d]">About Me</h2>
            <p className="text-lg mt-4">
              Detail-oriented React Developer with 3 years of experience in building scalable, high-performance web applications. Proficient in modern JavaScript, React.js, Redux, and RESTful API integration. Collaborative team player with a strong focus on performance optimization, responsive design, and continuous learning.
            </p>
            {/* Social media links */}
            <div className="flex mt-4">
              <a href="https://www.linkedin.com/in/deepa-venkataramanaiah/" target="_blank" rel="noopener noreferrer" className="mr-4 text-[#50221d] hover:text-blue-600">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/deepa-ev-dev/" target="_blank" rel="noopener noreferrer" className="text-[#50221d] hover:text-gray-800">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          {/* Image on the right */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center">
            <div className="rounded-full overflow-hidden" style={{ width: "400px", height: "400px" }}>
              <img src={aboutImage} alt="About Me" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
