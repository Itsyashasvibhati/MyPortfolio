import React from "react";
import { Button, SectionHeading } from "../common/StyledComponents";
import profileImg from "../../assets/HeroSectionImg/professionalpic.png";

const About = ({ darkMode = false }) => {
  return (
    <section
      id="about"
      className={`w-full py-16 md:py-20 lg:py-24 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Left Image with Circle Background */}
        <div
          data-aos="fade-right"
          className="relative flex justify-center w-full md:w-1/2"
        >
          {/* Gradient Circle Background */}
          <div className="absolute bg-gradient-to-tr from-orange-500 to-pink-500 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-t-full rounded-b-[0] -bottom-4 z-0 shadow-lg opacity-90 animate-pulse"></div>

          {/* Profile Image */}
          <img
            src={profileImg}
            alt="About"
            className="relative z-10 w-[200px] sm:w-[260px] md:w-[300px] object-cover drop-shadow-xl"
          />
        </div>

        {/* Right Text Section */}
        <div
          data-aos="fade-left"
          className="text-center md:text-left w-full md:w-1/2"
        >
          <SectionHeading
            label="About Me"
            title="Who"
            titleAccent="I Am"
            darkMode={darkMode}
          />
          <p className={`mb-6 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            I’m{" "}
            <span className="text-yellow-500 font-semibold">
              Yashasvi Bhati
            </span>
            — a Software Developer, QA Tester, and Product Enthusiast with experience in building and managing digital products. I work at the intersection of development, quality assurance, and design, ensuring applications are not only functional but also reliable and user-friendly.
          </p>
          <p className={`mb-6 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            I have worked on <span className="text-purple-500 font-semibold">AI-driven and web-based projects</span>, contributed to graphic design, and managed project workflows to deliver high-quality results. My approach focuses on problem-solving, testing, and continuous improvement to create better software products.
          </p>
          <p className={`mb-6 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            I'm a technology enthusiast and entrepreneur who enjoys building and improving digital products. My expertise spans software testing, project coordination, and design, allowing me to understand products from both technical and user perspectives. My goal is to build expertise in Quality Assurance and Software Testing while contributing to developing reliable and high-quality software products.
          </p>

      {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button
              href="#mywork"
              variant="primary"
              darkMode={darkMode}
            >
              Portfolio →
            </Button>
            <Button
              href="https://wa.me/7878883930"
              target="_blank"
              variant="secondary"
              darkMode={darkMode}
            >
              DM Me →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
