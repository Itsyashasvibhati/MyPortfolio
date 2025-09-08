import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/NavbarSection/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import MyWork from "./components/MyWork/Work";
import GraphicWork from "./components/GraphicWork/GraphicWork";
import Services from "./components/Services/Services";
import EducationWork from "./components/EducationWork/EducationWork";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import MarketingSection from "./components/GraphicWork/MarketingSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        {/* ✅ Main Portfolio Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection darkMode={darkMode} />
              <About darkMode={darkMode} />
              <EducationWork darkMode={darkMode} />
              <MyWork darkMode={darkMode} />
              <GraphicWork darkMode={darkMode} />
              <MarketingSection darkMode={darkMode} />
              <Services darkMode={darkMode} />
              <Contact darkMode={darkMode} />
              <Footer darkMode={darkMode} />
            </>
          }
        />

        {/* Dynamic Case Study Route */}
        <Route
          path="/project/:id"
          element={<CaseStudy darkMode={darkMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
