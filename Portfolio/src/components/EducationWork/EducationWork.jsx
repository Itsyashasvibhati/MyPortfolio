import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`w-full py-20 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-pink-500 font-semibold tracking-widest">
            Experience
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            My Professional <span className="text-yellow-500">Journey</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8">

          {/* LunarEdge */}
          <div
            className={`flex flex-col md:flex-row gap-6 p-6 rounded-xl border shadow-lg ${
              darkMode
                ? "bg-[#111] border-[#333]"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="text-yellow-500 text-3xl">
              <FaBriefcase />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Software Engineer Intern – LunarEdge IT Solutions
              </h3>

              <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                <li>
                  Built responsive web applications using React.js, Tailwind CSS,
                  and Node.js.
                </li>
                <li>
                  Developed CMS-based portfolio websites and client projects.
                </li>
                <li>
                  Integrated backend APIs and contributed to deployment pipelines.
                </li>
              </ul>
            </div>
          </div>

          {/* TechieHelp */}
          <div
            className={`flex flex-col md:flex-row gap-6 p-6 rounded-xl border shadow-lg ${
              darkMode
                ? "bg-[#111] border-[#333]"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="text-yellow-500 text-3xl">
              <FaBriefcase />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Project Manager – TechieHelp
              </h3>

              <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                <li>
                  Managed project timelines, reducing delivery times by 30%.
                </li>
                <li>
                  Led technical operations, project planning, and client delivery.
                </li>
                <li>
                  Managed projects end-to-end ensuring scalable user-focused outcomes.
                </li>
                <li>
                  Collaborated with cross-functional teams improving project success
                  rate by 10%.
                </li>
              </ul>
            </div>
          </div>

          {/* Infosys */}
          <div
            className={`flex flex-col md:flex-row gap-6 p-6 rounded-xl border shadow-lg ${
              darkMode
                ? "bg-[#111] border-[#333]"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="text-yellow-500 text-3xl">
              <FaBriefcase />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Artificial Intelligence Intern – Infosys Springboard
              </h3>

              <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                <li>
                  Developed an AI system that generates personalized diet plans
                  from medical reports.
                </li>
                <li>
                  Processed data from PDFs and scanned medical images using OCR
                  and preprocessing techniques.
                </li>
                <li>
                  Trained machine learning models on structured health parameters.
                </li>
                <li>
                  Integrated GPT and BERT models for medical text understanding
                  and report summarization.
                </li>
              </ul>
            </div>
          </div>

          {/* QA Tester */}
          <div
            className={`flex flex-col md:flex-row gap-6 p-6 rounded-xl border shadow-lg ${
              darkMode
                ? "bg-[#111] border-[#333]"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="text-yellow-500 text-3xl">
              <FaBriefcase />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                QA Tester – OrangeHRM Demo
              </h3>

              <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                <li>
                  Designed and executed test scenarios and test cases.
                </li>
                <li>
                  Performed functional, regression, and smoke testing.
                </li>
                <li>
                  Reported bugs and tracked issues using Jira.
                </li>
                <li>
                  Created and maintained test documentation using Google Sheets.
                </li>
                <li>
                  Verified bug fixes and ensured release quality.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;