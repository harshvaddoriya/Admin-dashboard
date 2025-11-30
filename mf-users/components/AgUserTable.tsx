import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef, GridOptions } from "ag-grid-community";
import type { User } from "../data/users";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Skeleton } from "./Skeleton";
import { useDebounce } from "../hooks/useDebounce";
import { columnDefs } from "config/columnDefs";
import { defaultColDef } from "config/defaultColDefs";
import { gridOptions } from "config/gridOptions";

interface AgUserTableProps { users: User[] }

export default function AgUserTable({ users }: AgUserTableProps) {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const gridRef = useRef<AgGridReact<User>>(null);

  const debouncedSearchText = useDebounce(searchText, 300);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [users]);

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = debouncedSearchText === "" || 
        user.name.toLowerCase().includes(debouncedSearchText.toLowerCase()) ||
        user.email.toLowerCase().includes(debouncedSearchText.toLowerCase());

      const matchesRole = selectedRoles.length === 0 || selectedRoles.includes(user.role);
      const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(user.status);

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, debouncedSearchText, selectedRoles, selectedStatuses]);

  const toggleRole = useCallback((role: string) => {
    setSelectedRoles(prev => 
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  }, []);

  const toggleStatus = useCallback((status: string) => {
    setSelectedStatuses(prev => 
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  }, []);

  const clearFilters = useCallback(() => {
    setSearchText("");
    setSelectedRoles([]);
    setSelectedStatuses([]);
    gridRef.current?.api?.setFilterModel(null);
  }, []);

  return (
    <div className="p-4 md:p-6">
      <div className="mb-4">
        <div className="hidden xl:flex gap-4 items-center">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div className="flex items-center gap-2 flex-nowrap">
            <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">Role:</span>
            <div className="flex gap-2">
              {["Admin", "Manager", "User"].map(role => (
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

          <div className="flex items-center gap-2 flex-nowrap">
            <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">Status:</span>
            <div className="flex gap-2">
              {["Active", "Inactive", "Pending"].map(status => (
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
              className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors text-xs font-medium whitespace-nowrap"
            >
              Clear All
            </button>
          )}
        </div>

        <div className="xl:hidden space-y-3">
          <div>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            {searchText && (
              <p className="mt-1 text-xs text-gray-500">
                Found {filteredUsers.length} result{filteredUsers.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center md:justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">Role:</span>
              <div className="flex gap-2 flex-wrap">
                {["Admin", "Manager", "User"].map(role => (
                  <label key={role} className="flex items-center cursor-pointer px-2 py-1 hover:bg-gray-50 rounded transition">
                    <input
                      type="checkbox"
                      checked={selectedRoles.includes(role)}
                      onChange={() => toggleRole(role)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-1.5 text-xs text-gray-700">{role}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">Status:</span>
              <div className="flex gap-2 flex-wrap">
                {["Active", "Inactive", "Pending"].map(status => (
                  <label key={status} className="flex items-center cursor-pointer px-2 py-1 hover:bg-gray-50 rounded transition">
                    <input
                      type="checkbox"
                      checked={selectedStatuses.includes(status)}
                      onChange={() => toggleStatus(status)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-1.5 text-xs text-gray-700">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            {(searchText || selectedRoles.length > 0 || selectedStatuses.length > 0) && (
              <button
                onClick={clearFilters}
                className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors text-xs font-medium whitespace-nowrap"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="ag-theme-quartz" style={{ width: "100%" }}>
          {loading ? (
            <Skeleton />
          ) : (
            <AgGridReact<User>
              ref={gridRef}
              rowData={filteredUsers}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              gridOptions={gridOptions}
            />
          )}
        </div>
      </div>
    </div>
  );
}
