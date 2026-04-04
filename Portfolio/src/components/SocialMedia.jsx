import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaBehance,
  FaGlobe,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const SocialMedia = ({ darkMode }) => {
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/itsyashasvibhati",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/yashasvi",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/theyashasvibhati_/",
    },
    {
      name: "HackerRank",
      icon: <FaHackerrank />,
      link: "https://www.hackerrank.com/profile/yashasvibhati131",
    },
    {
      name: "Behance",
      icon: <FaBehance />,
      link: "https://www.behance.net/yashasvibhati156",
    },
    {
      name: "BNB Global",
      icon: <FaGlobe />,
      link: "https://bnbglobal.in/",
    },
  ];

  return (
    <section
      id="social"
      className={`w-full py-20 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-pink-500 font-semibold tracking-widest">
            Social Media
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Connect With <span className="text-yellow-500">Me</span>
          </h2>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-6 rounded-xl border transition transform hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? "bg-[#111] border-[#333]"
                  : "bg-gray-100 border-gray-300"
              }`}
            >
              <div className="text-4xl mb-3 text-yellow-500">
                {social.icon}
              </div>

              <p className="font-semibold text-sm">{social.name}</p>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SocialMedia;