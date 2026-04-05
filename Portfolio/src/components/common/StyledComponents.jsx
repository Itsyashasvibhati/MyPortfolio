import React from "react";

// Reusable Section Heading Component
export const SectionHeading = ({ label, title, titleAccent, description, darkMode }) => (
  <div className="text-center mb-12" data-aos="fade-up">
    <p className="text-pink-500 font-semibold uppercase tracking-wider">
      {label}
    </p>
    <h2 className="text-4xl md:text-5xl font-bold mt-2">
      {title} <span className="text-yellow-500">{titleAccent}</span>
    </h2>
    {description && (
      <p className={`mt-4 max-w-[600px] mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        {description}
      </p>
    )}
  </div>
);

// Reusable Button Component
export const Button = ({ children, href, onClick, variant = "primary", darkMode, className = "", ...props }) => {
  const baseStyles =
    "px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform font-semibold inline-flex items-center gap-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-orange-500 to-pink-500 text-white",
    secondary:
      "bg-gradient-to-r from-orange-500 to-yellow-500 text-white",
    outline: `border-2 ${darkMode ? "border-white" : "border-black"} text-inherit`,
    light: darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black",
  };

  const finalClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={finalClass}>
      {children}
    </button>
  );
};

// Reusable Card Component
export const Card = ({ children, darkMode, className = "", hover = true }) => (
  <div
    className={`
      p-6 rounded-lg transition-all
      ${darkMode ? "bg-[#1a1a1a]" : "bg-gray-50"}
      ${hover ? "hover:shadow-lg hover:scale-105" : "shadow-md"}
      ${className}
    `}
  >
    {children}
  </div>
);

// Section Container
export const SectionContainer = ({ children, darkMode, bgVariant = "default" }) => {
  const bgVariants = {
    default: darkMode ? "bg-black" : "bg-white",
    light: darkMode ? "bg-[#0d0d0d]" : "bg-gray-50",
    muted: darkMode ? "bg-black/60" : "bg-white/70",
  };

  return (
    <div className={`w-full py-16 md:py-20 lg:py-24 ${bgVariants[bgVariant]}`}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {children}
      </div>
    </div>
  );
};

// Service/Feature Card
export const ServiceCard = ({ icon, title, description, darkMode }) => (
  <Card darkMode={darkMode} hover={true} className="text-center">
    <div className="text-4xl mb-4 text-yellow-500 flex justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
      {description}
    </p>
  </Card>
);

// Badge Component
export const Badge = ({ children, variant = "primary", darkMode }) => {
  const variants = {
    primary: "bg-pink-500/20 text-pink-500",
    secondary: "bg-yellow-500/20 text-yellow-500",
    accent: "bg-purple-500/20 text-purple-500",
  };

  return (
    <span
      className={`
        px-3 py-1 rounded-full text-sm font-semibold
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  );
};

// Gradient Text
export const GradientText = ({ children, className = "" }) => (
  <span
    className={`bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);

// Divider
export const Divider = ({ darkMode, className = "" }) => (
  <div
    className={`h-px ${darkMode ? "bg-gray-800" : "bg-gray-200"} ${className}`}
  />
);

// Accent Dot
export const AccentDot = ({ color = "pink", size = "md" }) => {
  const sizeMap = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  const colorMap = {
    pink: "bg-pink-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  };

  return (
    <div className={`rounded-full ${sizeMap[size]} ${colorMap[color]}`} />
  );
};
