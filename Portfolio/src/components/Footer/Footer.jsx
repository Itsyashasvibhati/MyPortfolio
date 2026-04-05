import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = ({ darkMode = false }) => {
  return (
    <footer
      className={`w-full py-12 px-4 sm:px-6 md:px-8 lg:px-12 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="max-w-[1240px] mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-yellow-500">Yashasvi</span> Bhati
            </h2>
            <p className={`max-w-[400px] ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Software Developer | Graphic Designer | Project Manager | Mentor
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/yashasvi-bhati-8444b82a1/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Itsyashasvibhati"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/7878883930" 
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500 transition duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:itsyashasvibhati24@gmail.com"
              className="hover:text-yellow-500 transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

       
        <div className="my-6 h-[1px] w-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            © {new Date().getFullYear()} Yashasvi Bhati. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
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
};;

export default Footer;
