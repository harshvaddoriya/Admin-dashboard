import { useMemo } from "react";
import { parseDate } from "../utils/dateHelpers";
import type { User } from "../data/users";

export function useFilteredUsers(users: User[], startDate: string, endDate: string) {
  return useMemo(() => {
    return users.filter(u => {
      const d = parseDate(u.created_at);
      if (startDate && d < parseDate(startDate)) return false;
      if (endDate && d > parseDate(endDate)) return false;
      return true;
    });
  }, [users, startDate, endDate]);
}
