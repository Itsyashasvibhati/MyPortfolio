import { FaReact, FaNodeJs, FaJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Button } from "../common/StyledComponents";
import profileImg from "../../assets/HeroSectionImg/professionalpic.png";

const HeroSection = ({ darkMode = false }) => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className={`relative w-full overflow-hidden pt-24 pb-12 ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      {/* Gradient Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-wave w-full h-full"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Left Text Section */}
        <div
          className="flex-1 flex flex-col gap-6 text-center md:text-left"
          data-aos="fade-right"
        >
          <p className="text-pink-500 font-semibold">Introduction</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hello, <br />
            I'm <span className="text-yellow-400">Yashasvi Bhati</span>
          </h1>
          <p className={`text-lg leading-relaxed max-w-md mx-auto md:mx-0 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            I'm a Software Developer, QA Tester, and Product Enthusiast with experience in building and managing digital products. I work at the intersection of development, quality assurance, and design to create reliable and user-friendly applications.
          </p>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <Button
              onClick={scrollToContact}
              variant="primary"
              darkMode={darkMode}
            >
              Contact Me →
            </Button>
            <Button
              href="#mywork"
              variant="outline"
              darkMode={darkMode}
            >
              View Work →
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className="flex-1 relative flex justify-center"
          data-aos="fade-left"
        >
          <div className="relative w-[260px] sm:w-[300px] md:w-[360px] aspect-square rounded-full border-4 border-green-500 bg-gradient-to-tr from-black to-gray-900 p-2 shadow-lg">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-contain rounded-full"
            />

            {/* Tech Icons Around */}
            <FaReact className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-blue-500 text-3xl sm:text-4xl md:text-5xl animate-spin-slow" />
            <FaNodeJs className="absolute top-1/2 -right-5 transform -translate-y-1/2 text-green-500 text-3xl sm:text-4xl md:text-5xl" />
            <SiTailwindcss className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-sky-500 text-3xl sm:text-4xl md:text-5xl" />
            <FaJs className="absolute top-1/2 -left-5 transform -translate-y-1/2 text-yellow-400 text-3xl sm:text-4xl md:text-5xl" />
            <FaFigma className="absolute top-[85%] right-[85%] transform translate-x-1/2 -translate-y-1/2 text-pink-500 text-3xl sm:text-4xl md:text-5xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
