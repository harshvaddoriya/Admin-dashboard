import { MONTH_NAMES, MONTH_COUNT } from "../constants/Month";
import type { User } from "../data/users";

export function getLast12MonthsLabels(): string[] {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() - (MONTH_COUNT - 1), 1);

  return Array.from({ length: MONTH_COUNT }, (_, i) => {
    const d = new Date(start.getFullYear(), start.getMonth() + i, 1);
    const yy = String(d.getFullYear()).slice(-2);
    return `${MONTH_NAMES[d.getMonth()]} ${yy}`;
  });
}

export function getUserCountsByMonth(users: User[]): number[] {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() - (MONTH_COUNT - 1), 1);
  const counts = Array(MONTH_COUNT).fill(0);
  const startKey = start.getFullYear() * 12 + start.getMonth();
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  users.forEach(u => {
    const d = new Date(u.created_at + "T00:00:00");
    if (d < start || d > end) return;
    const key = d.getFullYear() * 12 + d.getMonth();
    const idx = key - startKey;
    if (idx >= 0 && idx < MONTH_COUNT) counts[idx] += 1;
  });

  return counts;
}
