import React from "react";
import profileImg from "../../assets/HeroSectionImg/professionalpic.png";

const About = ({ darkMode }) => {
  return (
    <div
      id="about"
      className={`w-full py-16 ${
        darkMode
          ? "bg-black/60 text-white backdrop-blur-md"
          : "bg-white/70 text-black backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center gap-10">
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
          <p className="text-pink-500 font-semibold mb-2 tracking-wide">
            About Me
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Who <span className="text-yellow-500">I Am</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I’m{" "}
            <span className="text-yellow-500 font-semibold">
              Yashasvi Bhati
            </span>
            , a passionate Software Developer, Graphic Designer, and Co-Founder
            of <span className="text-purple-500 font-semibold">TechieHelp</span>
            . I love building modern, responsive web applications, guiding
            students through internships, solving real-world problems, and
            mentoring aspiring developers. I work with React.js, Node.js,
            Tailwind CSS, MongoDB, and design using Figma.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#mywork"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform"
            >
              Portfolio →
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform"
            >
              DM Me →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
