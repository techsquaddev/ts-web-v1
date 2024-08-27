import { useState, useEffect } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setIsDarkMode(isDark);
      applyTheme(isDark);
    } else {
      // If no theme is stored, use the browser's preference
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = prefersDarkScheme;
      setIsDarkMode(defaultTheme);
      applyTheme(defaultTheme);
    }
  }, []);

  const applyTheme = (isDark) => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="transition duration-300"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <LightMode className="text-white hover:text-accent" />
      ) : (
        <DarkMode className="text-primary hover:text-black" />
      )}
    </button>
  );
};

export default DarkModeToggle;
