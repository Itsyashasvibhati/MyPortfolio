import { FaReact, FaNodeJs, FaJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import profileImg from "../../assets/HeroSectionImg/professionalpic.png";

const HeroSection = ({ darkMode }) => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className={`w-full pt-24 pb-12 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div
          className="flex-1 flex flex-col gap-6 text-center md:text-left"
          data-aos="fade-right"
        >
          <p className="text-pink-500 font-semibold">Introduction</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Hello, <br />
            I'm <span className="text-yellow-500">Yashasvi Bhati</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0">
            I am a passionate Software Developer skilled in building responsive
            web apps using modern technologies. I love crafting smooth user
            experiences and writing clean code.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full hover:scale-105 transition mx-auto md:mx-0 w-fit"
          >
            Contact Me
          </button>
        </div>

        {/* Image Section */}
        <div
          className="flex-1 relative flex justify-center"
          data-aos="fade-left"
        >
          <div className="relative w-[260px] sm:w-[300px] md:w-[360px] aspect-square rounded-full border-4 border-green-500 bg-gradient-to-tr from-black to-gray-900 p-2">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-contain rounded-full"
            />

            {/* Icons Around */}
            <FaReact className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-blue-500 text-3xl sm:text-4xl md:text-5xl animate-spin-slow" />
            <FaNodeJs className="absolute top-1/2 -right-5 transform -translate-y-1/2 text-green-500 text-3xl sm:text-4xl md:text-5xl" />
            <SiTailwindcss className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-sky-500 text-3xl sm:text-4xl md:text-5xl" />
            <FaJs className="absolute top-1/2 -left-5 transform -translate-y-1/2 text-yellow-500 text-3xl sm:text-4xl md:text-5xl" />
            <FaFigma className="absolute top-[85%] right-[85%] transform translate-x-1/2 -translate-y-1/2 text-pink-500 text-3xl sm:text-4xl md:text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
