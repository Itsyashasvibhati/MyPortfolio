// Unified Design System & Theme Configuration
export const THEME = {
  // Color Palette
  colors: {
    primary: "#ff9a9e",     // Pink/Red
    secondary: "#fad0c4",   // Light Pink
    accent: "#ffd700",      // Yellow/Gold
    accentOrange: "#ff8c42", // Orange
    accentPurple: "#a855f7", // Purple
    
    // Light Mode
    light: {
      bg: "#ffffff",
      text: "#1a1a1a",
      textLight: "#666666",
      cardBg: "#f8f9fa",
      borderColor: "#e0e0e0",
    },
    
    // Dark Mode
    dark: {
      bg: "#0a0a0a",
      text: "#ffffff",
      textLight: "#b0b0b0",
      cardBg: "#1a1a1a",
      borderColor: "#333333",
    },
  },

  // Typography
  fonts: {
    heading: {
      fontFamily: "'Sora', 'Poppins', sans-serif",
      fontWeight: "bold",
      sizes: {
        h1: "3.5rem",    // 56px
        h2: "2.5rem",    // 40px
        h3: "1.875rem",  // 30px
        h4: "1.5rem",    // 24px
        h5: "1.25rem",   // 20px
      },
    },
    body: {
      fontFamily: "'Inter', 'Poppins', sans-serif",
      fontWeight: "normal",
      sizes: {
        lg: "1.125rem",  // 18px
        base: "1rem",    // 16px
        sm: "0.875rem",  // 14px
        xs: "0.75rem",   // 12px
      },
    },
    mono: {
      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
    },
  },

  // Spacing
  spacing: {
    container: "max-w-[1240px]",
    sectionPadding: "py-16 md:py-20 lg:py-24",
    gutter: "px-4 sm:px-6 md:px-8 lg:px-12",
  },

  // Gradients
  gradients: {
    primary: "from-orange-500 to-pink-500",
    secondary: "from-purple-500 to-pink-500",
    gold: "from-yellow-500 to-orange-500",
    neon: "from-cyan-400 to-blue-500",
  },

  // Animations
  animations: {
    fadeIn: "duration-500 ease-in-out",
    slideIn: "duration-700 ease-out",
    pulse: "animate-pulse",
  },

  // Border Radius
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
};

// Helper function to get theme classes
export const getThemeClasses = (darkMode) => {
  return {
    bg: darkMode ? "bg-black" : "bg-white",
    text: darkMode ? "text-white" : "text-black",
    textLight: darkMode ? "text-gray-300" : "text-gray-600",
    cardBg: darkMode ? "bg-[#1a1a1a]" : "bg-gray-50",
    border: darkMode ? "border-gray-700" : "border-gray-200",
  };
};

// Button Styles
export const BUTTON_STYLES = {
  primary: (darkMode) =>
    `bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform font-semibold`,
  secondary: (darkMode) =>
    `bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform font-semibold`,
  outline: (darkMode) =>
    `border-2 ${darkMode ? 'border-white' : 'border-gray-800'} text-inherit px-6 py-2 rounded-full hover:scale-105 transition-transform font-semibold`,
};

// Section Header Component Styles
export const SECTION_HEADER = (darkMode) => ({
  container: "text-center mb-12",
  label: "text-pink-500 font-semibold uppercase tracking-wider",
  title: "text-4xl md:text-5xl font-bold mt-2",
  titleAccent: "text-yellow-500",
  description: darkMode ? "text-gray-400" : "text-gray-600",
});
