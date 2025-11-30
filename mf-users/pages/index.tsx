import React from "react";
import AgUserTable from "../components/AgUserTable";
import { users } from "../data/users"; 
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className="px-6 py-4 font-semibold text-2xl">Filter & Sorting & Pagination Using Ag-Grid Table Data:</h1>
        <AgUserTable users={users} />
      </div>
    </Layout>
  );
}
