/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToogleButton = ({ theme, setTheme }) => {
  
  useEffect(() => {
    // Only set theme on initial mount if not already set
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button>
      {theme === "dark" ? (
        <img
          onClick={() => setTheme("light")}
          src={assets.sun_icon}
          alt="Switch to light mode"
          className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer"
        />
      ) : (
        <img
          onClick={() => setTheme("dark")}
          src={assets.moon_icon}
          alt="Switch to dark mode"
          className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer"
        />
      )}
    </button>
  );
};

export default ThemeToogleButton;