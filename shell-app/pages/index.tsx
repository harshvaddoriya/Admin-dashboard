import React from "react";
import { Layout } from "../components/Layout";
//import { ProductCard } from "remotes/shopComponents";

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">Card 1</div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">Card 2</div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">Card 3</div>
        {/* <ProductCard /> */}
      </div>
    </Layout>
  );
}
