import React from "react";
import { Layout } from "../components/Layout";
// import { RecentActivity } from "remotes/shopComponents";

export default function Users() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">User list goes here</div>
      {/* <RecentActivity /> */}
    </Layout>
  );
}
