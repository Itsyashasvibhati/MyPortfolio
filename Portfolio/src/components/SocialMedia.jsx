import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaGlobe,
} from "react-icons/fa";
import { Card, SectionHeading } from "./common/StyledComponents";

const SocialMedia = ({ darkMode = false }) => {
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
      className={`w-full py-16 md:py-20 lg:py-24 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        <SectionHeading
          label="Social Media"
          title="Connect With"
          titleAccent="Me"
          darkMode={darkMode}
        />

        {/* Social Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">

          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
            >
              <Card
                darkMode={darkMode}
                hover={true}
                className="flex flex-col items-center justify-center p-6 text-center h-full"
              >
                <div className="text-3xl mb-3 text-yellow-500">
                  {social.icon}
                </div>

                <p className="font-semibold text-sm">{social.name}</p>
              </Card>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SocialMedia;