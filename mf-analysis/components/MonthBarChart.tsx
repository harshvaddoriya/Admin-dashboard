"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { User } from "../data/users";
import { useMonthBarData } from "../hooks/useMonthBarData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface MonthBarChartProps { 
  users: User[];
}

export default function MonthBarChart({ users }: MonthBarChartProps) {
  const { data, total } = useMonthBarData(users);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { position: "bottom" as const }, 
      title: { display: false } 
    },
    scales: {
      y: { beginAtZero: true, ticks: { precision: 0 } },
    },
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-gray-700">Users by Month (last 12 months)</h2>
        <span className="text-xs text-gray-600">Total: {total}</span>
      </div>
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
