import React from "react";
import projectImage1 from "../images/project-image-1.png";

const Projects = () => {
  return (
    <section id="projects" className="p-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="flex overflow-x-auto scrollbar-hide space-x-8">
          {/* Project Carousel */}
          <div className="w-full flex-shrink-0">
            {/* Project Card */}
            <div className="border rounded-lg overflow-hidden flex">
              {/* Image on the left */}
              <img src={projectImage1} alt="Project 1" className="w-1/3 object-cover" />
              {/* Project details on the right */}
              <div className="p-6 w-2/3">
                <h3 className="text-2xl font-semibold mb-2">Food Ordering App</h3>
                <a href="https://deeps-food-ordering.netlify.app/" target="_blank" rel="noopener noreferrer" className="block mb-4 text-blue-500 hover:underline">View Project</a>
                <p className="text-gray-600 mb-4">Technology used : </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>React JS</li>
                  <li>Redux</li>
                  <li>Hooks</li>
                  <li>Tailwind CSS</li>
                  </ul>
                <p className="text-gray-600 my-4">Project description:</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Built a comprehensive Restaurant App from scratch using ReactJS, integrating real-time restaurant data from the Swiggy API.</li>
                  <li>Implemented dynamic routing for seamless navigation between components, enhancing user experience.</li>
                  <li>Developed features such as restaurant search, rating of restaurants and dishes, cart functionalities, and checkout total calculation.</li>
                  <li>Utilized Redux for state management, leveraging hooks like useReducer and useContext for effective state handling.</li>
                </ul>
                
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
