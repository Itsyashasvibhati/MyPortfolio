import React from "react";
import profileImg from "../../assets/HeroSectionImg/professionalpic.png";

const About = ({ darkMode }) => {
  return (
    <div
      id="about"
      className={`w-full py-16 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image with Circle Background */}
        <div
          data-aos="fade-right"
          className="relative flex justify-center w-full md:w-1/2"
        >
          {/* Orange Circle BG */}
          <div className="absolute bg-orange-500 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-t-full rounded-b-[0] -bottom-4 z-0"></div>

          {/* Profile Image */}
          <img
            src={profileImg}
            alt="About"
            className="relative z-10 w-[200px] sm:w-[260px] md:w-[300px] object-cover"
          />
        </div>

        {/* Right Text Section */}
        <div
          data-aos="fade-left"
          className="text-center md:text-left w-full md:w-1/2"
        >
          <p className="text-pink-500 font-semibold mb-2">About Me</p>
          <h2 className="text-4xl font-bold mb-4">
            Who <span className="text-yellow-500">I am</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            I’m{" "}
            <span className="text-yellow-500 font-semibold">
              Yashasvi Bhati
            </span>
            , a Software Developer, Graphic Designer, and Startup Co-Founder of{" "}
            <span className="text-purple-500 font-semibold">TechieHelp</span>.
            I'm passionate about building web apps, providing internship
            guidance, solving problems, and mentoring others. I work with
            React.js, Node.js, Tailwind CSS, MongoDB, and also design using
            Figma.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#mywork"
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Portfolio →
            </a>
            <a
              href="#contact"
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
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
