import React from "react";
import { SectionHeading } from "../common/StyledComponents";

const Contact = ({ darkMode = false }) => {
  return (
    <section
      id="contact"
      className={`w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <SectionHeading
          label="Get in Touch"
          title="Let's"
          titleAccent="Connect"
          description="Feel free to reach out for collaborations or just a friendly chat."
          darkMode={darkMode}
        />

        <div className="max-w-2xl mx-auto" data-aos="fade-up">
          <div className={`rounded-lg shadow-md p-8 md:p-10 ${
            darkMode ? "bg-[#1a1a1a]" : "bg-gray-50"
          }`}>

            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <p className={`font-semibold mb-2 text-sm uppercase tracking-wide ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  Email
                </p>
                <a
                  href="mailto:itsyashasvibhati24@gmail.com"
                  className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold transition"
                >
                  itsyashasvibhati24@gmail.com
                </a>
              </div>

              <div>
                <p className={`font-semibold mb-2 text-sm uppercase tracking-wide ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  Phone
                </p>
                <a
                  href="tel:+917878883930"
                  className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold transition"
                >
                  +91 7878883930
                </a>
              </div>

              <div>
                <p className={`font-semibold mb-2 text-sm uppercase tracking-wide ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  Location
                </p>
                <p className="text-yellow-500 text-lg font-semibold">Pali, Rajasthan, India</p>
              </div>

              <p className={`mt-8 leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                I am open to freelance projects, full-time roles, and collaborations. Feel free to reach out via email or phone!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
