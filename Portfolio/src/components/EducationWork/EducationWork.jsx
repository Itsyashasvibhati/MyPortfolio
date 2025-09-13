import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const EducationWork = ({ darkMode }) => {
  return (
    <div
      id="education"
      className={`w-full py-16 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }gradient-wave py-20`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-pink-500 font-semibold mb-2 tracking-widest">
            Education & Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 leading-tight">
            My <span className="text-yellow-500">Academic</span> and{" "}
            <span className="text-purple-500">Professional</span> Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            data-aos="fade-right"
            className={`rounded-xl border p-6 ${
              darkMode
                ? "bg-[#1a1a1a] border-[#333]"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-yellow-500 text-2xl sm:text-3xl" />
              <h3 className="text-xl sm:text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400">2023 - 2027</p>
                <h4 className="text-lg font-semibold">
                  Jodhpur Institute of Engineering & Technology
                </h4>
                <p className="text-sm">
                  B.Tech in Computer Science (CGPA: 9.04)
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">2007 - 2022</p>
                <h4 className="text-lg font-semibold">Rainbow Public School</h4>
                <p className="text-sm">CBSE Class 10th (84%) & 12th (86%)</p>
              </div>
            </div>
          </div>

          {/* Work Card */}
          <div
            data-aos="fade-left"
            className={`rounded-xl border p-6 ${
              darkMode
                ? "bg-[#1a1a1a] border-[#333]"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaBriefcase className="text-yellow-500 text-2xl sm:text-3xl" />
              <h3 className="text-xl sm:text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400">2024 - Present</p>
                <h4 className="text-lg font-semibold">
                  Co-Founder & CTO – TechieHelp
                </h4>
                <p className="text-sm">
                  Running a startup offering web & app development, AI
                  solutions, and more.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">2025 (May - June)</p>
                <h4 className="text-lg font-semibold">
                  Software Engineer Intern – LunarEdge
                </h4>
                <p className="text-sm">
                  Built responsive websites using React, Node.js, and Tailwind.
                  API integration & deployment.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">2024 - Present</p>
                <h4 className="text-lg font-semibold">
                  Mentor – Unstop & Topmate
                </h4>
                <p className="text-sm">
                  Mentoring students in web development, internships, and career
                  guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationWork;
