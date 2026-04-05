import React from "react";
import { FaCertificate } from "react-icons/fa";
import { SectionHeading } from "./common/StyledComponents";

const Certifications = ({ darkMode = false }) => {

  const certs = [
    {
      name: "Oracle – AI Foundation Associate",
      link: "/certificates/eCertificate.pdf"
    },
    {
      name: "NPTEL – Innovation, Business Models & Entrepreneurship",
      link: "/certificates/Innovation, Business Models and Entrepreneurship.pdf"
    },
    {
      name: "Lunaredge IT Solutions – Software Engineer Internship",
      link: "/certificates/Internship Certificate-Yashasvi Bharti.pdf"
    },
    {
      name: "Infosys Springboard - Virtual Internship 6.0",
      link: "/certificates/Virtual Internship 6.0 certificate.pdf"
    },
    {
      name: "Skill UP India – Product Management",
      link: "/certificates/productmanagement.pdf"
    }
  ];

  return (
    <section
      id="certifications"
      className={`w-full py-16 md:py-20 lg:py-24 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        <SectionHeading
          label="Certifications"
          title="My"
          titleAccent="Achievements"
          darkMode={darkMode}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

          {certs.map((cert, index) => (

            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              className="group"
            >

              <div
                className={`
                  flex items-center gap-4 p-6 rounded-lg
                  border transition duration-300 transform hover:scale-105 hover:shadow-lg
                  ${
                    darkMode
                      ? "bg-[#1a1a1a] border-gray-700 hover:border-yellow-500"
                      : "bg-gray-50 border-gray-300 hover:border-yellow-500"
                  }
                `}
              >

                <FaCertificate className="
                  text-2xl
                  text-pink-500
                  group-hover:text-yellow-500
                  transition
                "/>

                <p className="text-base font-semibold">
                  {cert.name}
                </p>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>

  );
};

export default Certifications;