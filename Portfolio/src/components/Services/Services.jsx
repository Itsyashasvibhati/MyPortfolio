import React from "react";
import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaPencilRuler,
  FaMobileAlt,
  FaChalkboardTeacher,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Services = ({ darkMode }) => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <FaCode />,
      description: "Building scalable and dynamic websites using MERN stack.",
    },
    {
      id: 2,
      title: "React.js Development",
      icon: <FaReact />,
      description:
        "Creating fast, efficient, and interactive frontend apps with React.js.",
    },
    {
      id: 3,
      title: "Node.js & Express.js",
      icon: <FaNodeJs />,
      description:
        "Powerful backend solutions and APIs using Node.js and Express.js.",
    },
    {
      id: 4,
      title: "MongoDB",
      icon: <SiMongodb />,
      description:
        "Efficient NoSQL database solutions for modern web applications.",
    },
    {
      id: 5,
      title: "Brand Graphic Designing",
      icon: <FaPencilRuler />,
      description:
        "Professional banners, logos, posters, and UI designs with creativity.",
    },
    {
      id: 6,
      title: "Guidance Counsellor",
      icon: <FaChalkboardTeacher />,
      description:
        "Mentoring students for career growth, internships, and self-development.",
    },
    {
      id: 7,
      title: "Project Manager",
      icon: <FaProjectDiagram />,
      description:
        "Managing projects efficiently with structured planning and execution.",
    },
    {
      id: 8,
      title: "Web Design",
      icon: <FaPencilRuler />,
      description:
        "Crafting sleek UI/UX designs for websites with Figma & modern tools.",
    },
    {
      id: 9,
      title: "Content Creation",
      icon: <FaMobileAlt />,
      description:
        "Creating engaging social media content and marketing materials.",
    },
  ];

  return (
    <div
      id="myservices"
      className={`relative w-full py-20 px-6 overflow-hidden ${
        darkMode ? "bg-[#0d0d0d] text-white" : "bg-[#f7faff] text-black"
      }`}
    >
      {/* 🎨 Gradient Background Effects */}
      <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[0] right-[-60px] w-[300px] h-[300px] bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 max-w-[1240px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-pink-500 font-semibold uppercase">My Services</p>
          <h2 className="text-4xl font-bold mt-2">
            What <span className="text-yellow-500">I Offer</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-[600px] mx-auto">
            Transforming ideas into reality through design, development, and
            guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`rounded-xl p-6 border shadow-lg backdrop-blur-md hover:scale-[1.03] transition-transform ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/70 border-gray-200"
              }`}
            >
              <div className="text-4xl text-pink-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
