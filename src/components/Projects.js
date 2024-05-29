import React from "react";
import projectImage1 from "../images/project-image-1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          borderRadius: "50%", // Apply rounded border
          transform: "rotate(0deg)" // Rotate arrow to point left
        }}
        onClick={onClick}
      />
    );
  }

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className} style={{
          ...style,
          display: "block",
          background: "gray",
          borderRadius: "50%", // Apply rounded border
          transform: "rotate(0deg)" // Rotate arrow to point left
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const projects = [
    {
      image: projectImage1,
      title: "Food Ordering App",
      link: "https://deeps-food-ordering.netlify.app/",
      technologies: ["React JS", "Redux", "Hooks", "Tailwind CSS"],
      description: "Ordering made deliciously easy: explore a world of flavors at your fingertips with our food ordering app."
    },
    {
      image: projectImage1,
      title: "Youtube",
      link: "https://deeps-food-ordering.netlify.app/",
      technologies: ["React JS", "Redux", "Hooks", "Tailwind CSS"],
      description: "Ordering made deliciously easy: explore a world of flavors at your fingertips with our food ordering app."
    }
  ];

  return (
    <section id="projects" className="p-8 md:p-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#50221d] text-center mb-8">Projects</h2>
        <p className="text-lg text-gray-500 text-center mb-8">Built from scratch</p>
        <Slider {...settings}>
          {projects.map((project) =>
            <div key={project.title} className="px-4 md:px-0">
              <div className="flex flex-col md:flex-row items-center">
                {/* Image on the right */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center">
                  <div className="overflow-hidden w-full md:w-80">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                  </div>
                </div>
                {/* Summary on the left */}
                <div className={`w-full md:w-1/2 md:pr-8 text-center md:text-left ${window.innerWidth <= 768 ? 'md:text-center' : ''}`}>
                  <p className="font-bold text-xl md:text-2xl sm:text-md">{project.title}</p>
                  <p className="text-base md:text-lg mt-4 sm:text-sm">{project.description}</p>
                  <button className="bg-[#50221d] p-2 text-white rounded-md mt-4"><a href={project.link} target="_blank" rel="noreferrer">Try it out! -&gt;</a></button>
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
