import { useState, useEffect } from "react";

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
      className="p-1 rounded-full border border-border transition duration-300"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-border"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m8.485-10.485l-.707.707m-13.071 0l-.707-.707M21 12h-1m-16 0H3m16.485-8.485l-.707-.707M6.343 6.343l-.707-.707m13.071 13.071l-.707-.707M6.343 17.657l-.707-.707M12 7.5l-.5-.5a4.5 4.5 0 00-4.5 4.5v1m9 0v-1a4.5 4.5 0 00-4.5-4.5l-.5.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-secondary dark:text-gray-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3C10.232 3 8.53 3.632 7.293 4.757 6.055 5.883 5.272 7.525 5.272 9.273 5.272 11.02 6.056 12.662 7.293 13.787 8.53 14.912 10.232 15.544 12 15.544c1.768 0 3.471-.632 4.707-1.757 1.238-1.125 2.021-2.767 2.021-4.515C18.728 7.525 17.945 5.883 16.707 4.757 15.471 3.632 13.768 3 12 3z"
          />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;
