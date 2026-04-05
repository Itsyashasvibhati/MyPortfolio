import { useState } from "react";
import { Button, Card, SectionHeading } from "./common/StyledComponents";
import jiraImage from "../assets/jira-dashboard.png";

const QAProject = ({ darkMode = false }) => {

  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <section
      className={`w-full py-16 md:py-20 lg:py-24 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        <SectionHeading
          label="QA Testing"
          title="Quality"
          titleAccent="Assurance Project"
          darkMode={darkMode}
        />

        <Card
          darkMode={darkMode}
          className="p-8 md:p-10"
          data-aos="fade-up"
        >

          <h3 className="font-bold text-2xl mb-4 text-pink-500">
            Manual Testing – OrangeHRM
          </h3>

          <p className={`mb-6 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            Performed manual testing on the OrangeHRM web application including
            test planning, test case design, bug tracking, and reporting using
            Jira. This project demonstrates the real QA workflow followed in
            software testing environments.
          </p>

          <ul className={`list-disc ml-6 space-y-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            <li>Created a structured Test Plan</li>
            <li>Designed comprehensive Test Cases</li>
            <li>Executed manual test scenarios</li>
            <li>Identified and logged bugs</li>
            <li>Tracked issues using Jira Dashboard</li>
          </ul>

          {/* Buttons */}

          <div className="flex gap-4 mt-10 flex-wrap">

            {/* Test Case Link */}

            <Button
              href="https://docs.google.com/spreadsheets/d/1b1lpOxItKiJYrj0Ryo2-VjN7myoeXihK/edit?usp=sharing&ouid=110980073624739431629&rtpof=true&sd=true"
              variant="primary"
              darkMode={darkMode}
            >
              View Manual Testing
            </Button>

            {/* Toggle Jira Dashboard */}

            <Button
              onClick={() => setShowDashboard(!showDashboard)}
              variant="secondary"
              darkMode={darkMode}
            >
              View Jira Dashboard
            </Button>

          </div>

          {/* Dashboard Screenshot */}

          {showDashboard && (
            <div className="mt-12">

              <h4 className="text-xl font-semibold mb-6 text-pink-500">
                Jira Bug Tracking Dashboard
              </h4>

              <div className={`rounded-lg overflow-hidden shadow-lg border ${
                darkMode ? "border-gray-700" : "border-gray-300"
              }`}>

                <img
                  src={jiraImage}
                  alt="Jira Dashboard"
                  className="w-full hover:scale-105 transition duration-500"
                />

              </div>

            </div>
          )}

        </Card>

      </div>
    </section>
  );
};

export default QAProject;