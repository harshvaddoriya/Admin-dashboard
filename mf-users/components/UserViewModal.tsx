"use client";

import React, { useEffect, useState } from "react";
import type { User } from "../data/users";

interface UserViewModalProps {
  user: User;
  onClose: () => void;
}

export default function UserViewModal({ user, onClose }: UserViewModalProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 200); 
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black bg-opacity-40 transition-opacity ${show ? "opacity-100" : "opacity-0"}`}>
      <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg lg:max-w-xl p-6 md:p-8 transform transition-transform duration-200 ${show ? "scale-100" : "scale-95"}`}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">User Details</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
          <div><span className="font-medium">Name:</span> {user.name}</div>
          <div><span className="font-medium">Email:</span> {user.email}</div>
          <div><span className="font-medium">Role:</span> {user.role}</div>
          <div><span className="font-medium">Status:</span> {user.status}</div>
          <div><span className="font-medium">Age:</span> {user.age}</div>
          <div><span className="font-medium">Created At:</span> {user.created_at}</div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleClose}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition-all duration-200 text-sm md:text-base"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
