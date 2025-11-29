"use client";

import React from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};
