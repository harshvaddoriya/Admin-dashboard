"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FiAlignJustify } from "react-icons/fi";
import { navLinks } from "../constants/Navlinks";

export const Navbar: React.FC<{ onToggleSidebar?: () => void }> = ({
  onToggleSidebar,
}) => {
  const router = useRouter();
  const pathname = router.pathname; 

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="flex items-center justify-between px-6 py-4 h-14 sm:h-16 border-b bg-white dark:bg-gray-900 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center">
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Users Data
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-base font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-md transition-all ${
              isActive(link.href)
                ? "dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="block md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
        aria-label="Toggle menu"
      >
        <FiAlignJustify />
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 border-b dark:border-gray-800 md:hidden shadow-md">
          <nav className="flex flex-col gap-2 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-md transition-all ${
                  isActive(link.href)
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
