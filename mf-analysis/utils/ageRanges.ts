export const ageRanges = [
  { label: "<25", match: (a: number) => a < 25 },
  { label: "25-34", match: (a: number) => a >= 25 && a <= 34 },
  { label: "35-44", match: (a: number) => a >= 35 && a <= 44 },
  { label: "45+", match: (a: number) => a >= 45 },
];
