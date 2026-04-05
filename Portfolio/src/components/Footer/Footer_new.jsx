import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = ({ darkMode = false }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "mywork" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`w-full py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 ${
        darkMode ? "bg-black text-white border-t border-gray-800" : "bg-gradient-to-br from-gray-50 to-white text-black border-t-2 border-gray-200"
      }`}
    >
      <div className="max-w-[1240px] mx-auto">
        
        {/* Top Section - Brand & Tagline */}
        <div className="flex flex-col items-center justify-center gap-6 pb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-yellow-500">Yashasvi</span> <span className="text-pink-500">Bhati</span>
            </h2>
            <p className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Software Developer | QA Tester | Product Enthusiast
            </p>
          </div>

          {/* Animated Social Icons */}
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/yashasvi-bhati-8444b82a1/"
              target="_blank"
              rel="noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode ? "bg-gray-900 hover:bg-yellow-500/10" : "bg-gray-200 hover:bg-yellow-100"
              }`}
              title="LinkedIn"
            >
              <FaLinkedin className="text-blue-500" />
            </a>
            <a
              href="https://github.com/Itsyashasvibhati"
              target="_blank"
              rel="noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-200 hover:bg-gray-300"
              }`}
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/7878883930" 
              target="_blank"
              rel="noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode ? "bg-gray-900 hover:bg-green-500/10" : "bg-gray-200 hover:bg-green-100"
              }`}
              title="WhatsApp"
            >
              <FaWhatsapp className="text-green-500" />
            </a>
            <a
              href="mailto:itsyashasvibhati24@gmail.com"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode ? "bg-gray-900 hover:bg-red-500/10" : "bg-gray-200 hover:bg-red-100"
              }`}
              title="Email"
            >
              <FaEnvelope className="text-red-500" />
            </a>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="my-8 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        {/* Middle Section - Quick Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm hover:text-yellow-500 transition ${
                      darkMode ? "text-gray-400 hover:text-yellow-400" : "text-gray-600"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className={darkMode ? "text-gray-400" : "text-gray-600"}>Web Development</li>
              <li className={darkMode ? "text-gray-400" : "text-gray-600"}>QA Testing</li>
              <li className={darkMode ? "text-gray-400" : "text-gray-600"}>Designs</li>
              <li className={darkMode ? "text-gray-400" : "text-gray-600"}>Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li className={darkMode ? "text-gray-400" : "text-gray-600"}>📧 itsyashasvibhati24@gmail.com</li>
              <li className={darkMode ? "text-gray-400" : "text-gray-600"}>📱 +91 7878883930</li>
              <li className={darkMode ? "text-gray-400" : "text-gray-600"}>📍 Pali, Rajasthan, India</li>
            </ul>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="my-8 h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

        {/* Bottom Section - Copyright & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
          <p className={`text-sm ${
            darkMode ? "text-gray-500" : "text-gray-600"
          }`}>
            © {new Date().getFullYear()} Yashasvi Bhati. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className={`hover:text-yellow-500 transition ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`hover:text-yellow-500 transition ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
              darkMode ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-600/50" : "bg-gradient-to-r from-orange-500 to-pink-500 hover:shadow-lg"
            }`}
            title="Scroll to Top"
          >
            <FaArrowUp className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
