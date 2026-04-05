import React from "react";
import { FaCode, FaServer, FaDatabase, FaTools, FaPalette } from "react-icons/fa";
import { Card, SectionHeading } from "./common/StyledComponents";

const Skills = ({ darkMode = false }) => {

  const skills = [
    {
      title: "Languages",
      icon: <FaCode />,
      items: "Java, JavaScript, Python"
    },
    {
      title: "Frontend",
      icon: <FaPalette />,
      items: "HTML, CSS, TailwindCSS"
    },
    {
      title: "Backend",
      icon: <FaServer />,
      items: "Node.js"
    },
    {
      title: "Libraries / Frameworks",
      icon: <FaCode />,
      items: "React.js"
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      items: "MongoDB, MySQL"
    },
    {
      title: "Tools",
      icon: <FaTools />,
      items: "Git, GitHub, Postman, Notion, Jira"
    },
    {
      title: "Design",
      icon: <FaPalette />,
      items: "Figma, Graphic Designing"
    }
  ];

  return (
    <section
      id="skills"
      className={`w-full py-16 md:py-20 lg:py-24 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        <SectionHeading
          label="Technical Skills"
          title="Skills &"
          titleAccent="Expertise"
          darkMode={darkMode}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {skills.map((skill, index) => (

            <Card
              key={index}
              darkMode={darkMode}
              hover={true}
              className="text-center"
              data-aos="fade-up"
            >
              <div className="text-3xl mb-4 text-yellow-500 flex justify-center">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {skill.title}
              </h3>

              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                {skill.items}
              </p>
            </Card>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;