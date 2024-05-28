import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="p-20 mt-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Section 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Vue.js</li>
            </ul>
          </div>
          {/* Section 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>Django</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          {/* Section 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Database</h3>
            <ul className="list-disc list-inside">
              <li>SQL</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          {/* Section 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
            <ul className="list-disc list-inside">
              <li>Git</li>
              <li>VS Code</li>
              <li>Webpack</li>
              <li>Docker</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
