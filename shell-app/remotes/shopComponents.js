import dynamic from "next/dynamic";

export const ProductCard = dynamic(
    () => import("shop/components").then(mod => mod.ProductCard),
    { ssr: false }
);

export const Catalog = dynamic(
    () => import("shop/components").then(mod => mod.Catalog),
    { ssr: false }
);
