import dynamic from "next/dynamic";

export const RemoteUsers = dynamic(
    () => import("analysis/data"),
    { ssr: false }
);