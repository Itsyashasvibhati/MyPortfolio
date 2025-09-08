import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full ${
        darkMode ? "bg-[#0e0e0e] text-white" : "bg-gray-100 text-black"
      } px-6 py-10`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-yellow-500">Yashasvi</span> Bhati
            </h2>
            <p className="text-gray-500 max-w-[400px]">
              Software Developer | Graphic Designer | Project Manager | Mentor
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/yashasvi-bhati-8444b82a1/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Itsyashasvibhati"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/7878883930" 
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:itsyashasvibhati24@gmail.com"
              className="hover:text-yellow-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

       
        <div className="my-6">
          <div
            className={`h-[2px] w-full ${
              darkMode
                ? "bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500"
                : "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
            }`}
          ></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Yashasvi Bhati. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              href="#"
              className="hover:text-yellow-500 transition underline underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-yellow-500 transition underline underline-offset-4"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
