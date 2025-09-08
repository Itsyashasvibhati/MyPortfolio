import React, { useState } from "react";
import { Link } from "react-router-dom";

import pizzamenuFF from "../../assets/MyWork/pizzamenuFF.jpg";
import ffmenu from "../../assets/MyWork/FFNew MENU.png";
import ffposter from "../../assets/MyWork/posterFF.png";
import menu2FF from "../../assets/MyWork/menu2FF.jpg";
import ffTemplate from "../../assets/MyWork/FLAVOURFUSIONPALI TEMPLATE.png";
import babu2 from "../../assets/MyWork/babu2.png";
import alumniLogo from "../../assets/MyWork/AlumniConnect logo1.png";
import digitalPoster from "../../assets/MyWork/digital2.png";
import fflogo from "../../assets/MyWork/fflogo.jpeg";
import tradeBaabaa from "../../assets/MyWork/TRADEBAABAA.png";
import stockMarket from "../../assets/MyWork/stockmarketbanner.png";
import bannerPurple from "../../assets/MyWork/BannerPurple.png";
import nikeBanner from "../../assets/MyWork/NikeBanner Figma.png";

const allDesigns = [
  {
    image: pizzamenuFF,
    title: "Pizza Menu",
    id: "flavour-fusion",
    hasCaseStudy: true,
  },
  {
    image: ffmenu,
    title: "Cafe Menu",
    id: "flavour-fusion",
    hasCaseStudy: true,
  },
  {
    image: ffposter,
    title: "Poster",
    id: "flavour-fusion",
    hasCaseStudy: true,
  },
  {
    image: menu2FF,
    title: "Drinks Menu",
    id: "flavour-fusion",
    hasCaseStudy: true,
  },
  {
    image: ffTemplate,
    title: "Website Template",
    id: "flavour-fusion",
    hasCaseStudy: true,
  },
  { image: babu2, title: "Babu Poster", id: "babu-poster", hasCaseStudy: true },
  {
    image: alumniLogo,
    title: "Alumni Logo",
    id: "techiehelp-design",
    hasCaseStudy: true,
  },
  {
    image: digitalPoster,
    title: "Digital Poster",
    id: "techiehelp-design",
    hasCaseStudy: true,
  },
  { image: fflogo, title: "FF Logo", id: "other-works", hasCaseStudy: true },
  {
    image: tradeBaabaa,
    title: "Trade Poster",
    id: "other-works",
    hasCaseStudy: true,
  },
  {
    image: stockMarket,
    title: "Stock Market",
    id: "other-works",
    hasCaseStudy: true,
  },
  {
    image: bannerPurple,
    title: "Gradient Banner",
    id: "other-works",
    hasCaseStudy: true,
  },
  {
    image: nikeBanner,
    title: "Nike Banner",
    id: "nike-banner",
    hasCaseStudy: true,
  },
];

const GraphicWork = ({ darkMode }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <div
      id="graphicwork"
      className={`relative w-full py-20 px-4 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* 🎨 Background Elements */}
      <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-gradient-to-br from-pink-500 to-purple-600 opacity-20 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] bg-gradient-to-tr from-yellow-400 to-orange-500 opacity-20 rounded-full blur-[150px] z-0" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center" data-aos="fade-up">
          <span className="text-pink-500">Graphic</span> Design Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allDesigns.map((work, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-xl cursor-pointer shadow-lg ${
                darkMode ? "bg-[#1a1a1a]" : "bg-gray-100"
              }`}
              data-aos="fade-up"
              onClick={() => openImage(work)}
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{work.title}</h4>

                {work.hasCaseStudy && (
                  <Link
                    to={`/project/${work.id}`}
                    className="inline-block mt-2 text-yellow-500 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Case Study →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
          onClick={closeImage}
        >
          <div
            className="relative max-w-[90%] max-h-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl z-10 hover:text-pink-500"
              onClick={closeImage}
            >
              &times;
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="object-contain w-full h-full rounded-xl"
            />
            <div className="text-center mt-3 text-white text-lg font-semibold">
              {selectedImage.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphicWork;
