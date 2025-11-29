"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { User } from "../data/users";
import { ageRanges } from "../utils/ageRanges";

ChartJS.register(ArcElement, Tooltip, Legend);

interface AgePieChartProps { 
  users: User[] 
}

export default function AgePieChart({ users }: AgePieChartProps) {
  
  const labels = ageRanges.map((r) => r.label);

  const dataCounts = ageRanges.map((range) =>
    users.filter((u) => range.match(u.age)).length
  );
  const data = {
    labels,
    datasets: [
      {
        data: dataCounts,
        backgroundColor: ["#60a5fa", "#34d399", "#fbbf24", "#f87171"],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };
  const options = { 
      responsive: true, 
      plugins: { legend: { position: "bottom" as const } 
    } 
  };
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-gray-700 mb-2">Age Distribution</h2>
      <Pie 
        data={data} 
        options={options} 
      />
    </div>
  );
}
