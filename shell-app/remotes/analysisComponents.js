import dynamic from "next/dynamic";

export const DashboardPage = dynamic(
    () => import("analysis/dashboard"),
    { ssr: false }
);

export const TableDataPage = dynamic(
    () => import("shop/tabledata"),
    { ssr: false }
);

// const SummaryCards = dynamic(
//     () => import("analysis/SummaryCards"),
//     { ssr: false }
// );