import dynamic from "next/dynamic";

export const Employee = dynamic(
    () => import("analysis/components").then(mod => mod.Employee),
    { ssr: false }
)