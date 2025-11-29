"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import avatar from "/public/avatar.png"; 

export const AvatarDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(v => !v)} className="flex items-center gap-2">
        <Image 
          src={avatar} 
          alt="avatar" 
          width={36} 
          height={36} 
          className="rounded-full" 
        />
        <span className="hidden sm:inline">Harsh</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded shadow z-20">
          <ul className="p-2 text-sm">
            <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Profile</li>
            <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Settings</li>
            <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};
