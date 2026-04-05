import React from "react";
import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaPencilRuler,
  FaChalkboardTeacher,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { ServiceCard, SectionHeading } from "../common/StyledComponents";

const Services = ({ darkMode = false }) => {
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
  ];

  return (
    <section
      id="myservices"
      className={`w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <SectionHeading
          label="My Services"
          title="What"
          titleAccent="I Offer"
          description="Transforming ideas into reality through design, development, and guidance."
          darkMode={darkMode}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} data-aos="fade-up">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                darkMode={darkMode}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
