import React from "react";
import leadExImg from "../../assets/MyWork/LeadExWebsite.png";
import clientImg from "../../assets/MyWork/Client.png";
import techieHelpImg from "../../assets/MyWork/TechieHelpwebsite.png";

const MyWork = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "LeadEx Website",
      image: leadExImg,
      description:
        "A professional business website built using React, Node.js, and Tailwind CSS focused on lead generation and client management.",
    },
    {
      id: 2,
      title: "Client Portfolio Website",
      image: clientImg,
      description:
        "A responsive client website showcasing services, work, and dynamic user experiences.",
    },
    {
      id: 3,
      title: "TechieHelp Website",
      image: techieHelpImg,
      description:
        "A full-stack website for TechieHelp — offering internships, mentorship, and development services. Built with React, Node.js, MongoDB, and Tailwind CSS.",
    },
  ];

  return (
    <div
      id="mywork"
      className={`w-full py-16 px-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold">
            <span className="text-purple-500">My</span> Recent Works
          </h2>
          <p className="text-gray-500 mt-2">Some of my featured projects</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-500 ${
                darkMode ? "bg-[#1a1a1a]" : "bg-gray-100"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
                <button className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
