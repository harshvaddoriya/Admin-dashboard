"use client";

import { useState } from "react";
import { users as baseUsers } from "../data/users";
import DateRangeFilter from "../components/DateRangeFilter";
import StatusChart from "../components/StatusChart";
import MonthBarChart from "../components/MonthBarChart";
import AgUserTable from "../components/AgUserTable";
import { useFilteredUsers } from "../hooks/useFilteredUsers";
import { getQuickRange, formatLocal } from "../utils/dateHelpers";
import { QUICK_RANGES } from "../constants/quickRanges";

export default function Dashboard() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activeRange, setActiveRange] = useState<7 | 30 | 90 | null>(null);

  const filtered = useFilteredUsers(baseUsers, startDate, endDate);

  const handleQuickRange = (days: 7 | 30 | 90) => {
    const { startDate, endDate } = getQuickRange(days);
    setStartDate(startDate);
    setEndDate(endDate);
    setActiveRange(days);
  };

  const handleDateChange = ({ startDate: s, endDate: e }: { startDate: string; endDate: string }) => {
    setStartDate(s);
    setEndDate(e);
    if (s && e) {
      const daysInc = Math.floor((new Date(e).getTime() - new Date(s).getTime()) / 86400000) + 1;
      setActiveRange([7, 30, 90].includes(daysInc) ? (daysInc as 7 | 30 | 90) : null);
    } else setActiveRange(null);
  };

  const handleReset = () => {
    setStartDate("");
    setEndDate("");
    setActiveRange(null);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-3 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        <header className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-3 sm:gap-4">
          <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-900 tracking-tight">User Dashboard</h1>
          <div className="flex flex-wrap items-end gap-2 sm:gap-3">
            <DateRangeFilter startDate={startDate} endDate={endDate} onChange={handleDateChange} />

            <div className="flex flex-col w-full sm:w-auto">
              <label className="block text-sm font-medium text-gray-700 mb-1">Quick ranges</label>
              <div className="hidden xl:flex items-center gap-2">
                {QUICK_RANGES.map((r) => (
                  <button
                    key={r.days}
                    onClick={() => handleQuickRange(r.days)}
                    aria-pressed={activeRange === r.days}
                    className={`h-9 px-3 rounded-md border text-sm ${
                      activeRange === r.days
                        ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                        : "border-gray-300 bg-white hover:bg-gray-50"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
              <select
                className="xl:hidden h-9 w-full sm:w-44 rounded-md border border-gray-300 bg-white text-sm px-2"
                value={activeRange || ""}
                onChange={(e) => e.target.value && handleQuickRange(Number(e.target.value) as 7 | 30 | 90)}
              >
                <option value="">Select range</option>
                {QUICK_RANGES.map((r) => (
                  <option key={r.days} value={r.days}>{r.label}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleReset}
              className="h-9 px-3 rounded-md bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 w-full sm:w-auto"
            >
              Reset
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
          <div className="md:col-span-2">
            <StatusChart users={filtered} />
          </div>
          <div className="md:col-span-3">
            <MonthBarChart users={filtered} />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-sm">
            <div className="p-2 sm:p-3 rounded-md bg-blue-50">
              <dt className="font-medium text-blue-700 text-xs sm:text-sm">Total</dt>
              <dd className="text-blue-800 font-semibold text-base sm:text-lg">{filtered.length}</dd>
            </div>
            <div className="p-2 sm:p-3 rounded-md bg-green-50">
              <dt className="font-medium text-green-700 text-xs sm:text-sm">Active</dt>
              <dd className="text-green-800 font-semibold text-base sm:text-lg">{filtered.filter(u => u.status==="Active").length}</dd>
            </div>
            <div className="p-2 sm:p-3 rounded-md bg-yellow-50">
              <dt className="font-medium text-yellow-700 text-xs sm:text-sm">Pending</dt>
              <dd className="text-yellow-800 font-semibold text-base sm:text-lg">{filtered.filter(u => u.status==="Pending").length}</dd>
            </div>
            <div className="p-2 sm:p-3 rounded-md bg-gray-50">
              <dt className="font-medium text-gray-700 text-xs sm:text-sm">Inactive</dt>
              <dd className="text-gray-800 font-semibold text-base sm:text-lg">{filtered.filter(u => u.status==="Inactive").length}</dd>
            </div>
          </dl>
        </div>

        <AgUserTable users={filtered} />
      </div>
    </main>
  );
}
