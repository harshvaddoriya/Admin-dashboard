export function parseDate(str: string) {
  return new Date(str + "T00:00:00");
}

export function formatLocal(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function getQuickRange(days: 7 | 30 | 90) {
  const today = new Date();
  const endLocal = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const startLocal = new Date(endLocal);
  startLocal.setDate(endLocal.getDate() - days + 1);
  return { startDate: formatLocal(startLocal), endDate: formatLocal(endLocal) };
}
