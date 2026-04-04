import { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import logo from "../../assets/NavImg/mylogoremovebg.png";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { name: "Home", id: "hero" },
    { name: "About Me", id: "about" },
    { name: "My Work", id: "mywork" },
    { name: "My Services", id: "myservices" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setNav(false); // Close mobile nav
    }
  };

  return (
    <div
      className={`fixed w-full z-50 shadow-md ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1240px] mx-auto flex justify-between items-center px-4 md:px-6 py-3">
        {/* Left Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <h1
            className="text-xl tracking-wide"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            <span className="text-yellow-500">Yashasvi</span>
            <span className="text-pink-500">Bhati</span>
          </h1>
        </div>

        {/* Center Menu */}
        <ul className="hidden lg:flex gap-6 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-yellow-500 cursor-pointer transition"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Buttons hidden on mobile */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm hover:scale-105 transition"
          >
            Download CV
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm hover:scale-105 transition"
          >
            Contact Me
          </button>

          {/* Dark Mode Toggle (always visible) */}
          <button onClick={toggleDarkMode} className="text-xl">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile Hamburger */}
          <div
            onClick={() => setNav(!nav)}
            className="md:hidden cursor-pointer text-2xl ml-2"
          >
            {nav ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav ? "left-0" : "-left-full"
        } fixed top-0 w-[75%] sm:w-[60%] h-full ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        } border-r border-gray-300 ease-in-out duration-500 z-50`}
      >
        <div className="flex items-center px-6 py-4">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl" style={{ fontFamily: "Pacifico, cursive" }}>
            <span className="text-yellow-500">Yashasvi</span>
            <span className="text-pink-500">Bhati</span>
          </h1>
        </div>

        <ul className="flex flex-col gap-6 p-6 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-yellow-500 cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </li>
          ))}

          <li>
            <a
              href="/resume.pdf"
              download
              className="block w-full text-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full hover:scale-105 transition"
            >
              Download CV
            </a>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full hover:scale-105 transition"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
