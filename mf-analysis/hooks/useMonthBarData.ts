import { useMemo } from "react";
import type { User } from "../data/users";
import { getLast12MonthsLabels, getUserCountsByMonth } from "../utils/chartHelper";

export function useMonthBarData(users: User[]) {
  return useMemo(() => {
    const labels = getLast12MonthsLabels();
    const counts = getUserCountsByMonth(users);
    const total = counts.reduce((a, b) => a + b, 0);

    const data = {
      labels,
      datasets: [
        {
          label: "Users created per month (last 12 months)",
          data: counts,
          backgroundColor: "#2563eb",
        },
      ],
    };

    return { data, total };
  }, [users]);
}
