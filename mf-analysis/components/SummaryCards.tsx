"use client";

import React from "react";
import { useCountUp } from "../hooks/useCountUp";

interface SummaryCardsProps {
  counts: {
    total: number;
    active: number;
    pending: number;
    inactive: number;
  };
}

export default function SummaryCards({ counts }: SummaryCardsProps) {
  const cards = [
    { label: "Total", value: useCountUp(counts.total), color: "bg-blue-50 text-blue-800" },
    { label: "Active", value: useCountUp(counts.active), color: "bg-green-50 text-green-800" },
    { label: "Pending", value: useCountUp(counts.pending), color: "bg-yellow-50 text-yellow-800" },
    { label: "Inactive", value: useCountUp(counts.inactive), color: "bg-gray-50 text-gray-800" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div key={card.label} className={`p-4 rounded-lg h-[90px] shadow-sm ${card.color}`}>
          <dt className="text-sm sm:text-md font-medium">{card.label}</dt>
          <dd className="text-2xl sm:text-3xl font-semibold">{card.value}</dd>
        </div>
      ))}
    </div>
  );
}
