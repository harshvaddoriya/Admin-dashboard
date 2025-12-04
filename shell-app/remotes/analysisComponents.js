import dynamic from "next/dynamic";

export const DashboardPage = dynamic(
    () => import("analysis/dashboard"),
    { ssr: false }
);

export const StatusChart = dynamic(
    () => import("analysis/components").then(mod => mod.StatusChart),
    { ssr: false }
);

export const SummaryCards = dynamic(
    () => import("analysis/components").then(mod => mod.SummaryCards),
    { ssr: false }
)

export const TableDataPage = dynamic(
    () => import("shop/tabledata"),
    { ssr: false }
);

export const RemoteUsers = dynamic(
    () => import("analysis/data"),
    { ssr: false }
);