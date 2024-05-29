import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import { SiDjango, SiGit, SiVisualstudiocode, SiWebpack } from "react-icons/si";

const Skills = () => {
  const iconSizeClass = "text-4xl md:text-6xl"; // Use Tailwind classes to adjust icon size
  const sectionTitleClass = "text-lg md:text-xl"; // Use Tailwind classes to adjust section title size

  return (
    <section id="skills" className="p-8 md:p-20 bg-gray-100">
      <div className="container w-[80%] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#50221d]">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 text-center">
          {/* Section 1 */}
          <div className="py-4 md:py-0 md:px-4">
            <h3 className={`${sectionTitleClass} font-semibold mb-4`}>Frontend</h3>
            <ul className="list-inside flex justify-center space-x-4">
              <li><FaHtml5 className={iconSizeClass} style={{ color: "#E44D26" }} /></li>
              <li><FaCss3Alt className={iconSizeClass} style={{ color: "#1572B6" }} /></li>
              <li><FaJs className={iconSizeClass} style={{ color: "#F0DB4F" }} /></li>
              <li><FaReact className={iconSizeClass} style={{ color: "#61DAFB" }} /></li>
            </ul>
          </div>
          {/* Section 2 */}
          <div className="py-4 md:py-0 md:px-4">
            <h3 className={`${sectionTitleClass} font-semibold mb-4`}>Backend</h3>
            <ul className="list-inside flex justify-center space-x-4">
              <li><IoLogoPython className={iconSizeClass} style={{ color: "#3776AB" }} /></li>
              <li><SiDjango className={iconSizeClass} style={{ color: "#092E20" }} /></li>
            </ul>
          </div>
          {/* Section 3 */}
          <div className="py-4 md:py-0 md:px-4">
            <h3 className={`${sectionTitleClass} font-semibold mb-4`}>Tools & Others</h3>
            <ul className="list-inside flex justify-center space-x-4">
              <li><SiGit className={iconSizeClass} style={{ color: "#F05032" }} /></li>
              <li><SiVisualstudiocode className={iconSizeClass} style={{ color: "#007ACC" }} /></li>
              <li><SiWebpack className={iconSizeClass} style={{ color: "#8DD6F9" }} /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
