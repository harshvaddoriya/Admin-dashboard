import React from "react";

interface TableFiltersProps {
  searchText: string;
  onSearchChange: (val: string) => void;
  selectedRoles: string[];
  toggleRole: (role: string) => void;
  selectedStatuses: string[];
  toggleStatus: (status: string) => void;
  clearFilters: () => void;
}

const ROLES = ["Admin", "Manager", "User"];
const STATUSES = ["Active", "Inactive", "Pending"];

export default function TableFilters({
  searchText,
  onSearchChange,
  selectedRoles,
  toggleRole,
  selectedStatuses,
  toggleStatus,
  clearFilters,
}: TableFiltersProps) {
  return (
    <div className="mb-4 hidden xl:flex gap-4 items-center">
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />

      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-gray-600">Role:</span>
        <div className="flex gap-2">
          {ROLES.map((role) => (
            <label key={role} className="flex items-center cursor-pointer px-1.5 py-0.5 hover:bg-gray-50 rounded transition">
              <input
                type="checkbox"
                checked={selectedRoles.includes(role)}
                onChange={() => toggleRole(role)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-1 text-xs text-gray-700">{role}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-gray-600">Status:</span>
        <div className="flex gap-2">
          {STATUSES.map((status) => (
            <label key={status} className="flex items-center cursor-pointer px-1.5 py-0.5 hover:bg-gray-50 rounded transition">
              <input
                type="checkbox"
                checked={selectedStatuses.includes(status)}
                onChange={() => toggleStatus(status)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-1 text-xs text-gray-700">{status}</span>
            </label>
          ))}
        </div>
      </div>

      {(searchText || selectedRoles.length > 0 || selectedStatuses.length > 0) && (
        <button
          onClick={clearFilters}
          className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors text-xs font-medium"
        >
          Clear All
        </button>
      )}
    </div>
  );
}
