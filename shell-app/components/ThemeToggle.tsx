"use client";

import React from "react";
import { useTheme } from "../hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
       {theme === "dark" ? (
        <FiMoon size={18} />
      ) : (
        <FiSun size={18} />
      )}
      
    </button>
  );
};
