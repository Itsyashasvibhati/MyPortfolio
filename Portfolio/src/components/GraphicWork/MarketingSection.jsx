import React from "react";
import fanta from "../../assets/MyWork/fantaTemplate.png";
import icecream from "../../assets/MyWork/IcecreamTemplate.png";
import beauty from "../../assets/MyWork/Skintone.png";
import compact from "../../assets/MyWork/CompactArt.png";

const MarketingSection = ({ darkMode }) => {
  return (
    <div
      id="marketing"
      className={`relative w-full py-20 px-4 overflow-hidden ${
        darkMode ? "bg-[#0d0d0d] text-white" : "bg-[#f5f8ff] text-black"
      }`}
    >
      {/* 🎨 Creative Gradient Background */}
      <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-gradient-to-br from-[#00f5ff] to-[#ff00c8] opacity-30 rounded-full blur-[120px] z-0" />
      <div className="absolute top-[60%] right-[-80px] w-[280px] h-[280px] bg-gradient-to-br from-[#facc15] to-[#fb7185] opacity-30 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-0 left-[20%] w-[180px] h-[180px] bg-purple-400 opacity-20 rounded-full blur-[100px] z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-pink-500 font-semibold tracking-wide mb-2">
            Marketing & Thumbnails
          </p>
          <h2 className="text-4xl font-bold">
            Campaigns & <span className="text-blue-500">Social Media</span>{" "}
            Creatives
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <img
            src={fanta}
            alt="Fanta Template"
            className="w-full h-auto rounded-2xl shadow-xl hover:scale-[1.03] transition-all duration-300"
            data-aos="zoom-in"
          />
          <img
            src={icecream}
            alt="Ice Cream Template"
            className="w-full h-auto rounded-2xl shadow-xl hover:scale-[1.03] transition-all duration-300"
            data-aos="zoom-in"
          />
          <img
            src={beauty}
            alt="Beauty Elegance Poster"
            className="w-full h-auto rounded-2xl shadow-xl hover:scale-[1.03] transition-all duration-300"
            data-aos="zoom-in"
          />
          <img
            src={compact}
            alt="Compact Art Poster"
            className="w-full h-auto rounded-2xl shadow-xl hover:scale-[1.03] transition-all duration-300"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;
