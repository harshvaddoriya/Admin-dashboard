import dynamic from "next/dynamic";

export const DashboardPage = dynamic(
    () => import("analysis/dashboard"),
    { ssr: false }
);

// const SummaryCards = dynamic(
//     () => import("analysis/SummaryCards"),
//     { ssr: false }
// );