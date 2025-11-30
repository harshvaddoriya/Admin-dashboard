"use client";

import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import type { User } from "../data/users";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { columnDefs, defaultColDef, gridOptions } from "../utils/columns";

function Skeleton() {
  return (
    <div className="animate-pulse p-4">
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
}

interface AgUserTableProps { users: User[] }

export default function AgUserTable({ users }: AgUserTableProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [users]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="ag-theme-quartz" style={{ width: "100%" }}>
        {loading ? (
          <Skeleton />
        ) : (
          <AgGridReact
            rowData={users as User[]}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
          />
        )}
      </div>
    </div>
  );
}
