import React from "react";

interface TableHeaderProps {
  onAdd: () => void;
}

export default function TableHeader({ onAdd }: TableHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-3">
      <h1 className="font-semibold text-lg">Users</h1>
      <button
        onClick={onAdd}
        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md transition transform hover:-translate-y-0.5"
      >
        Add User
      </button>
    </div>
  );
}
